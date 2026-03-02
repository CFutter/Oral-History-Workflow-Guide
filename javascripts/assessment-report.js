/**
 * Assessment Report Generator
 * Reads decision-tree answers from localStorage and renders a tailored report.
 *
 * localStorage key structure (mirrors the decision-tree step names):
 *   Checkboxes  → JSON array string, e.g. localStorage.getItem("formats") → '["audio","video"]'
 *   Radios      → plain string,      e.g. localStorage.getItem("narrator_count") → "medium"
 *
 * Expected keys:
 *   Step 1: formats (array), narrator_count, funder
 *   Step 2: sensitive_cats (array), identification
 *   Step 3: harm_risk, vulnerable (array), third_party
 *   Step 4: hra, crossborder, collab
 *   Step 5: psych_harm, funder_ethics
 *   Step 6: transcription, storage
 *   Step 7: archive, access
 */

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("assessment-report");
  if (!container) return;

  // ── Helpers ──────────────────────────────────────────────

  function getArray(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function getString(key) {
    const raw = localStorage.getItem(key);
    // Guard against stored JSON arrays being read as strings
    if (!raw) return "";
    if (raw.startsWith("[")) return "";
    return raw;
  }

  // ── Read all answers ────────────────────────────────────

  const a = {
    formats:        getArray("formats"),
    narrator_count: getString("narrator_count"),
    funder:         getString("funder"),
    sensitive_cats: getArray("sensitive_cats"),
    identification: getString("identification"),
    harm_risk:      getString("harm_risk"),
    vulnerable:     getArray("vulnerable"),
    third_party:    getString("third_party"),
    hra:            getString("hra"),
    crossborder:    getString("crossborder"),
    collab:         getString("collab"),
    psych_harm:     getString("psych_harm"),
    funder_ethics:  getString("funder_ethics"),
    transcription:  getString("transcription"),
    storage:        getString("storage"),
    archive:        getString("archive"),
    access:         getString("access"),
  };

  // ── Check if anything has been filled in ────────────────

  const hasData = Object.values(a).some(function (v) {
    return Array.isArray(v) ? v.length > 0 : v !== "";
  });

  if (!hasData) {
    container.innerHTML =
      '<div class="alert-box warn">' +
      "<strong>No assessment data found.</strong> Please complete the decision-tree steps first, " +
      "then return to this page to generate your tailored report." +
      "</div>";
    return;
  }

  // ── Tier computation ────────────────────────────────────

  function computeTier() {
    var tier = 1;
    var cats = a.sensitive_cats;
    var harm = a.harm_risk;
    var vuln = a.vulnerable;
    var ident = a.identification;
    var third = a.third_party;

    if (cats.length > 0 && cats.indexOf("none_sensitive") === -1) tier = Math.max(tier, 2);
    if (cats.indexOf("health") !== -1 || cats.indexOf("criminal") !== -1 || cats.indexOf("sexual") !== -1)
      tier = Math.max(tier, 3);

    if (ident === "named" && cats.length > 0 && cats.indexOf("none_sensitive") === -1)
      tier = Math.max(tier, 3);

    if (harm === "reputational") tier = Math.max(tier, 3);
    if (harm === "serious") tier = Math.max(tier, 4);

    if (vuln.length > 0 && vuln.indexOf("none_vulnerable") === -1) tier = Math.max(tier, 3);
    if (vuln.indexOf("endangered") !== -1) tier = Math.max(tier, 4);

    if (third === "sensitive_third") tier = Math.max(tier, 3);

    if (harm === "serious" && vuln.indexOf("endangered") !== -1) tier = 5;

    return tier;
  }

  // ── Applicable laws ─────────────────────────────────────

  function computeLaws() {
    var laws = ["Zurich IDG (cantonal — primary)"];

    if (a.crossborder === "eu" || a.collab === "international") laws.push("EU GDPR");
    if (a.crossborder === "other") laws.push("nFADP cross-border transfer rules");
    if (a.collab === "swiss" || a.collab === "international")
      laws.push("nFADP (for inter-institutional data sharing)");
    if (a.hra === "yes") laws.push("Human Research Act (HRA/HFG)");
    if (a.hra === "maybe") laws.push("HRA — clarification needed");
    if (a.funder === "snsf") laws.push("SNSF Open Research Data policy");
    if (a.funder === "erc") laws.push("ERC/EU Open Access & DMP requirements");

    if (!laws.some(function (l) { return l.indexOf("nFADP") !== -1; }))
      laws.push("nFADP (reference standard)");

    return laws;
  }

  // ── Ethics review ───────────────────────────────────────

  function computeEthics() {
    var reasons = [];

    if (a.hra === "yes") reasons.push("HRA applies → KEK approval mandatory");
    if (a.hra === "maybe") reasons.push("HRA may apply → consult KEK");
    if (a.vulnerable.length > 0 && a.vulnerable.indexOf("none_vulnerable") === -1)
      reasons.push("Vulnerable groups involved");
    if (a.psych_harm === "likely") reasons.push("Likely psychological harm to narrators");
    if (a.psych_harm === "possible") reasons.push("Possible psychological harm — review recommended");
    if (a.funder_ethics === "yes") reasons.push("Funder/publisher requires ethics approval");
    if (a.sensitive_cats.indexOf("health") !== -1 || a.sensitive_cats.indexOf("criminal") !== -1)
      reasons.push("Sensitive data categories (health/criminal)");

    return reasons;
  }

  // ── Required documents ──────────────────────────────────

  function computeDocuments(tier) {
    var docs = [];

    docs.push("UZH Declaration of Consent for Research Projects (adapted for oral history, Tier " + tier + ")");
    docs.push("Data Management Plan (DMP)");
    docs.push("Information sheet for narrators");

    if (tier >= 3) docs.push("De-identification / anonymization log");
    if (tier >= 4) docs.push("Embargo / access restriction agreement");

    if (a.transcription === "cloud_ai") {
      docs.push("GTC for ICT Services (CSI, Jan 2015)");
      docs.push("GTC DP Outsourcing IT UZH");
      docs.push("UZH Confidentiality Declaration (for service provider)");
      docs.push("Data Processing Agreement with transcription provider");
    }
    if (a.transcription === "external_human") {
      docs.push("GTC DP Processing Third Parties UZH");
      docs.push("UZH Confidentiality Declaration (signed by transcriber)");
    }
    if (a.collab === "swiss" || a.collab === "international") {
      docs.push("UZH Master Data Sharing Agreement");
    }
    if (a.crossborder === "other" || a.collab === "international") {
      docs.push("EU Standard Contractual Clauses (adapted for UZH)");
    }

    if (
      a.narrator_count === "large" ||
      (a.narrator_count === "medium" && a.sensitive_cats.length > 2)
    ) {
      docs.push("Data Protection Impact Assessment (DPIA / DSFA)");
    }

    return docs;
  }

  // ── Action checklist ────────────────────────────────────

  function computeChecklist(tier, ethicsReasons) {
    var items = [];

    items.push("Prepare information sheet for narrators");
    items.push("Adapt UZH consent form for oral history (Tier " + tier + ")");

    if (a.funder === "snsf") items.push("Complete Data Management Plan (SNSF mySNF format)");
    else if (a.funder === "erc") items.push("Complete Data Management Plan (ERC format)");
    else items.push("Draft a Data Management Plan");

    if (ethicsReasons.length > 0) items.push("Contact faculty ethics committee / KEK");

    items.push("Set up secure storage (encrypted, backed up)");

    if (a.formats.indexOf("audio") !== -1 || a.formats.indexOf("video") !== -1)
      items.push("Test recording equipment before first interview");
    if (a.formats.indexOf("remote") !== -1)
      items.push("Configure Zoom for local recording; test with a colleague");

    if (a.transcription === "cloud_ai")
      items.push("Execute DPA and UZH GTC with transcription provider");
    if (a.transcription === "external_human")
      items.push("Execute GTC + Confidentiality Declaration with transcriber");

    if (a.collab === "swiss" || a.collab === "international")
      items.push("Execute UZH Master Data Sharing Agreement with partner institution");

    items.push("Prepare file naming convention and folder structure");

    if (tier >= 3) items.push("Plan anonymization/pseudonymization strategy");
    if (tier >= 4) items.push("Define embargo period and access conditions");

    items.push("Conduct pre-interview meeting with first narrator");

    if (a.narrator_count === "large")
      items.push("Complete Data Protection Impact Assessment (DPIA)");

    return items;
  }

  // ── Tier metadata ───────────────────────────────────────

  var tierNames = [
    "",
    "Open",
    "Open with Conditions",
    "Restricted Access",
    "Closed / Embargoed",
    "Highly Restricted",
  ];

  var tierDescs = [
    "",
    "No restrictions on access. Full public availability. Name attribution. Suitable for non-sensitive content with public figures discussing public topics.",
    "Publicly accessible with conditions: attribution required, specific excerpts may be excluded, no commercial use. Suitable for mildly sensitive content where narrators are comfortable with broad access.",
    "Access restricted to registered researchers who apply and justify their need. Suitable for politically sensitive, workplace, or personally sensitive content. Pseudonymization recommended.",
    "Sealed for a defined period (10, 25, or 50 years). Access limited to the original research team during embargo. Suitable for content involving trauma, health, legal matters, or sensitive third-party data.",
    "Access limited to specifically named individuals. Possible destruction after research concludes. Suitable for whistleblower testimony, ongoing legal matters, or content that could endanger the narrator.",
  ];

  // ── Build the report ────────────────────────────────────

  var tier = computeTier();
  var laws = computeLaws();
  var ethics = computeEthics();
  var docs = computeDocuments(tier);
  var checklist = computeChecklist(tier, ethics);

  var h = "";

  // — Tier —
  h += '<h2>Recommended Sensitivity Tier</h2>';
  h += '<div class="tier-badge tier-' + tier + '">Tier ' + tier + " — " + tierNames[tier] + "</div>";
  h += '<p class="report-text report-mt">' + tierDescs[tier] + "</p>";

  if (tier >= 3) {
    h +=
      '<div class="alert-box warn">Tier ' +
      tier +
      " requires explicit consent for sensitive data, restricted access controls, and " +
      (tier >= 4
        ? "embargo provisions in your consent form"
        : "a clear anonymization strategy for third-party data") +
      ".</div>";
  }

  // — Laws —
  h += '<h2>Applicable Legal Frameworks</h2>';
  h += '<div class="law-tags">';
  laws.forEach(function (l) {
    h += '<span class="law-tag">' + l + "</span>";
  });
  h += "</div>";

  if (a.hra === "yes") {
    h +=
      '<div class="alert-box warn"><strong>Human Research Act applies.</strong> You must obtain approval from the Cantonal Ethics Commission Zurich (KEK) before beginning any data collection. Contact: <a href="https://www.zh.ch/de/gesundheitsdirektion/ethikkommission.html">zh.ch/ethikkommission</a></div>';
  } else if (a.hra === "maybe") {
    h +=
      '<div class="alert-box info"><strong>HRA may apply.</strong> Since health topics may arise, contact KEK to clarify whether your project falls under the HRA. It is better to clarify before starting than to discover the issue mid-project.</div>';
  }

  // — Ethics —
  h += '<h2>Ethics Review</h2>';
  if (ethics.length === 0) {
    h +=
      '<p class="report-text">Based on your responses, a formal ethics review is <strong>not strictly required</strong>. However, you may still wish to consult your faculty\'s ethics committee, especially if the project evolves to include sensitive topics.</p>';
  } else {
    h +=
      '<p class="report-text"><strong>Ethics review is recommended or required</strong> for the following reasons:</p>';
    h += '<ul class="doc-list">';
    ethics.forEach(function (r) {
      h += "<li>" + r + "</li>";
    });
    h += "</ul>";
    h +=
      '<p class="report-text report-mt-sm">Contact your faculty\'s ethics committee or, if the HRA applies, the Cantonal Ethics Commission (KEK). The UZH Ethics Commission (Center for Ethics) can also advise: <a href="https://www.ethik.uzh.ch/en/ethikkommission.html">ethik.uzh.ch</a></p>';
  }

  // — Consent —
  h += '<h2>Consent Requirements</h2>';
  h += '<p class="report-text">Use the <strong>two-stage consent process</strong>:</p>';
  h += '<ul class="doc-list">';
  h +=
    "<li><strong>Before interview:</strong> Provide information sheet + obtain preliminary consent to record</li>";
  h +=
    "<li><strong>After interview:</strong> Review and finalize consent form with narrator — specify access level, pseudonymization, embargo, excluded passages</li>";
  h += "</ul>";

  if (a.sensitive_cats.length > 0 && a.sensitive_cats.indexOf("none_sensitive") === -1) {
    h +=
      '<p class="report-text report-mt-sm">Because your project involves sensitive personal data, <strong>explicit consent</strong> is required (not implied). The consent form must specifically name the sensitive categories involved.</p>';
  }

  if (a.identification === "named") {
    h +=
      '<p class="report-text">Narrators will be named — ensure the consent form includes explicit agreement to name attribution and explains that this cannot be undone after publication.</p>';
  } else if (a.identification === "mixed") {
    h +=
      '<p class="report-text">Mixed identification — prepare consent form variants: one for named narrators, one for pseudonymized narrators. Let each narrator choose.</p>';
  }

  // — Third-party data —
  if (a.third_party && a.third_party !== "unlikely") {
    h += '<h2>Third-Party Data</h2>';
    h +=
      '<p class="report-text">Narrators will likely discuss identifiable third parties. You have data protection obligations toward these persons.</p>';
    h += '<ul class="doc-list">';
    h += "<li>Anonymize third-party data in transcripts and publications by default</li>";
    h +=
      "<li>Maintain a de-identification log mapping pseudonyms to real names (stored separately and securely)</li>";
    if (a.third_party === "sensitive_third") {
      h +=
        "<li><strong>Sensitive third-party data:</strong> Consider whether informed consent from the third party is needed, or whether anonymization is sufficient</li>";
    }
    h += "<li>Include third-party anonymization provisions in your consent form</li>";
    h += "</ul>";
  }

  // — Data processing —
  h += '<h2>Data Processing</h2>';
  if (a.transcription === "cloud_ai") {
    h +=
      '<div class="alert-box warn"><strong>Cloud-based AI transcription</strong> constitutes third-party data processing under the IDG. You must: verify the service\'s data processing location, execute a Data Processing Agreement, apply the UZH GTC for ICT Services and GTC DP Outsourcing IT, and have service provider staff sign the UZH Confidentiality Declaration. For Tiers 4–5, cloud transcription is <strong>not recommended</strong> — use local Whisper instead.</div>';
  } else if (a.transcription === "external_human") {
    h +=
      '<div class="alert-box warn">External human transcription requires: GTC DP Processing Third Parties UZH as a rider to the contract, and signed UZH Confidentiality Declaration from each transcriber with access to the recordings.</div>';
  } else if (a.transcription === "local_ai" || a.transcription === "manual") {
    var method = a.transcription === "local_ai" ? "local AI transcription" : "manual transcription";
    h +=
      '<p class="report-text">Local processing (' +
      method +
      ") — no third-party processing requirements. This is the safest option for all sensitivity tiers.</p>";
  } else {
    h +=
      '<p class="report-text">Transcription method not yet decided. When choosing, consider: local tools (Whisper) are safest for all tiers; cloud services require UZH GTC and DPA; external human transcribers require Confidentiality Declarations.</p>';
  }

  if (a.storage === "personal") {
    h +=
      '<div class="alert-box warn"><strong>Personal device storage:</strong> Full-disk encryption is mandatory (BitLocker/FileVault). Use VeraCrypt containers for additional file-level encryption. Back up to UZH Research Storage regularly (3-2-1 rule).</div>';
  }

  // — Documents —
  h += '<h2>Required Documents</h2>';
  h += '<ul class="doc-list">';
  docs.forEach(function (d) {
    h += "<li>" + d + "</li>";
  });
  h += "</ul>";

  // — Checklist —
  h += '<h2>Action Checklist</h2>';
  h += '<ul class="checklist">';
  checklist.forEach(function (c) {
    h += "<li>" + c + "</li>";
  });
  h += "</ul>";

  // — Contacts —
  h += '<h2>Key Contacts</h2>';
  h += '<ul class="doc-list">';
  h += "<li><strong>UZH Delegate for Data Protection:</strong> datenschutz@dsd.uzh.ch</li>";
  h += "<li><strong>Cantonal Data Protection Commissioner:</strong> datenschutz.ch</li>";
  h += "<li><strong>KEK Zurich:</strong> zh.ch/ethikkommission</li>";
  h += "<li><strong>UZH Ethics Commission:</strong> ethik.uzh.ch</li>";
  h += "</ul>";

  // — Actions —
  h += '<div class="report-actions">';
  h += '<button onclick="window.print()">🖨 Print / Save as PDF</button>';
  h += "</div>";

  h += '<div class="note-box">';
  h +=
    "<strong>Disclaimer:</strong> This assessment is generated automatically based on your responses and provides general guidance for UZH oral history researchers. It does not constitute legal advice. For project-specific questions, contact the UZH Delegate for Data Protection (datenschutz@dsd.uzh.ch) or your faculty's ethics committee.";
  h += "</div>";

  // ── Render ──────────────────────────────────────────────

  container.innerHTML = h;

});

