# Sensitivity Classification Model

<p class="intro-text">
  Every oral history project should be assigned a sensitivity tier before data collection begins. The tier determines consent requirements, storage security, access restrictions, and which tools you can use. Assign the tier based on the <strong>most sensitive content</strong> you expect — you can always restrict more, but opening access later requires re-consent.
</p>

<div class="highlight-box">
  <p><strong>How to use this model:</strong> Read through the five tiers below. Use the <a href="../../decision-tree/decision-tree-entry/" style="color:#a8c0ff;">interactive assessment tool</a> to determine your project's tier based on specific questions about your content, narrators, and context. The tier you assign will carry through to consent forms, storage decisions, tool choices, and archiving conditions.</p>
</div>

## The Five Tiers

<div class="tier-card t1">
  <h3><span class="tier-num tier-1">1</span> Open</h3>
  <p>No restrictions on access. Full public availability. Name attribution.</p>
  <div class="tier-detail">
    <strong>Content:</strong> Non-sensitive. Public figures discussing their published work, professional methodology, or matters already in the public record.<br>
    <strong>Identification:</strong> Narrator named with full attribution.<br>
    <strong>Consent:</strong> Standard informed consent. Single-stage may suffice.<br>
    <strong>Storage:</strong> Standard UZH infrastructure. Full-disk encryption on devices.<br>
    <strong>Access:</strong> Open access. No restrictions. CC license recommended.<br>
    <strong>Tools:</strong> All tools suitable — including cloud-based transcription and storage.<br>
    <strong>Third parties:</strong> Anonymize by default unless public figures in public capacity.
  </div>
  <div class="tier-example">Example: A retired professor discusses their published research and academic career for a university history project.</div>
</div>

<div class="tier-card t2">
  <h3><span class="tier-num tier-2">2</span> Open with Conditions</h3>
  <p>Publicly accessible with conditions: attribution required, specific excerpts may be excluded, no commercial use.</p>
  <div class="tier-detail">
    <strong>Content:</strong> Mildly sensitive. Narrator may share personal opinions or anecdotes they're comfortable with in a controlled context but want some boundaries.<br>
    <strong>Identification:</strong> Named or pseudonymized — narrator chooses.<br>
    <strong>Consent:</strong> Two-stage consent. Consent form specifies excluded passages and conditions.<br>
    <strong>Storage:</strong> Standard UZH infrastructure. Full-disk encryption.<br>
    <strong>Access:</strong> Public with conditions (attribution, no commercial, excerpts excluded). CC BY-NC-SA or similar.<br>
    <strong>Tools:</strong> Cloud tools with DPA acceptable. Consumer tools still not recommended.<br>
    <strong>Third parties:</strong> Anonymize all third parties by default.
  </div>
  <div class="tier-example">Example: A retired professional discusses workplace culture and industry trends. Some anecdotes about specific incidents are excluded from the public transcript at the narrator's request.</div>
</div>

<div class="tier-card t3">
  <h3><span class="tier-num tier-3">3</span> Restricted Access</h3>
  <p>Access restricted to registered researchers who apply and justify their need.</p>
  <div class="tier-detail">
    <strong>Content:</strong> Sensitive. Political opinions, workplace conflicts, personal views on controversial topics, ethnicity and identity, religion. Content that could cause reputational harm if widely disclosed.<br>
    <strong>Identification:</strong> Pseudonymized recommended. Named only with strong justification and explicit consent.<br>
    <strong>Consent:</strong> Two-stage consent with explicit consent for each sensitive category. Consent form specifies access conditions.<br>
    <strong>Storage:</strong> UZH infrastructure with access controls. Encrypted containers for portable copies. No personal cloud storage.<br>
    <strong>Access:</strong> Registered researchers only. Application required. Research purpose must be stated.<br>
    <strong>Tools:</strong> Local transcription (Whisper) preferred. Cloud tools only with DPA and Swiss/EU data location. No US-based services.<br>
    <strong>Third parties:</strong> All third parties anonymized in transcripts. Original recordings retained under restricted access. De-identification log maintained.
  </div>
  <div class="tier-example">Example: Interviews on workplace culture in a politically sensitive institution. Narrators discuss management practices, internal conflicts, and their personal political views.</div>
</div>

<div class="tier-card t4">
  <h3><span class="tier-num tier-4">4</span> Closed / Embargoed</h3>
  <p>Sealed for a defined period (10, 25, or 50 years). Access limited to the original research team during embargo.</p>
  <div class="tier-detail">
    <strong>Content:</strong> Highly sensitive. Trauma, health conditions, legal matters, substance use, intimate relationships. Content that could cause serious harm to the narrator or third parties if disclosed.<br>
    <strong>Identification:</strong> Pseudonymized in all outputs. De-identification key stored separately under highest security.<br>
    <strong>Consent:</strong> Two-stage consent with explicit consent for each sensitive category. Embargo period specified. Consent addresses what happens when embargo expires.<br>
    <strong>Storage:</strong> UZH Research Storage or ScienceCloud only. VeraCrypt containers. No cloud services for original recordings. Physical security for consent forms.<br>
    <strong>Access:</strong> Original research team only during embargo. Post-embargo: review, anonymize, and potentially reclassify to Tier 3 or 2.<br>
    <strong>Tools:</strong> Local transcription only (Whisper or manual). No cloud processing. Swiss-hosted encrypted communication only.<br>
    <strong>Third parties:</strong> Retained in original recording. Access restrictions protect third-party interests. Anonymization plan for post-embargo.
  </div>
  <div class="tier-example">Example: Oral histories of individuals discussing their experiences with illness, domestic abuse, or legal proceedings. A 25-year embargo protects all parties.</div>
</div>

<div class="tier-card t5">
  <h3><span class="tier-num tier-5">5</span> Highly Restricted</h3>
  <p>Access limited to specifically named individuals. Possible destruction after research concludes.</p>
  <div class="tier-detail">
    <strong>Content:</strong> Extremely sensitive. Ongoing legal matters, whistleblower testimony, content that could endanger the narrator's safety, security, or liberty. Active threats.<br>
    <strong>Identification:</strong> Pseudonymized throughout. Consider whether even the pseudonymized version should be retained.<br>
    <strong>Consent:</strong> Two-stage consent with maximum specificity. Consent form names exactly who may access. Addresses conditions for destruction. Re-consent required for any change in access.<br>
    <strong>Storage:</strong> UZH Research Storage with named-individual access only. VeraCrypt containers with separate passwords. Air-gapped backup if appropriate. Physical security.<br>
    <strong>Access:</strong> Named individuals only. No application-based access. Possible scheduled destruction.<br>
    <strong>Tools:</strong> Local transcription only. Manual preferred over AI. Air-gapped devices for highest risk. Swiss encrypted communication only (ProtonMail, Threema).<br>
    <strong>Third parties:</strong> Maximum protection. Consider whether third-party data should be recorded at all.
  </div>
  <div class="tier-example">Example: A whistleblower describes ongoing institutional misconduct. Disclosure could result in legal retaliation or personal danger. Access is limited to the lead researcher and one designated successor.</div>
</div>

---

## Comparison Table

<div class="comparison-table" markdown>

| Aspect | Tier 1 | Tier 2 | Tier 3 | Tier 4 | Tier 5 |
|---|---|---|---|---|---|
| **Access** | Public | Public + conditions | Registered researchers | Research team only | Named individuals |
| **Identification** | Named | Named or pseudonym | Pseudonym recommended | Pseudonym required | Pseudonym required |
| **Consent type** | Standard | Two-stage | Two-stage + explicit | Two-stage + explicit + embargo | Maximum specificity |
| **Ethics review** | Not required | Not required | Recommended | Recommended | Strongly recommended |
| **Transcription** | Any tool | Cloud with DPA | Local preferred | Local only | Local/manual only |
| **Storage** | UZH standard | UZH standard | UZH + encryption | UZH only + VeraCrypt | UZH only + air-gap option |
| **Cloud services** | Permitted | With DPA | Swiss/EU only with DPA | Not recommended | Not permitted |
| **Third-party data** | Anonymize for publication | Anonymize by default | Anonymize in all outputs | Protected by embargo | Consider not recording |
| **Archive access** | Open | CC with conditions | Application-based | Sealed (10/25/50 yr) | Named individuals / destroy |
| **DPIA needed?** | No | No | Consider | Yes (if large-scale) | Yes |

</div>

---

## Tier Assignment Principles

**Assign based on the most sensitive content.** If even one portion of an interview reaches Tier 4 sensitivity, the entire recording should be managed at Tier 4 — unless you separate the sensitive passages into a distinct, separately managed file.

**Tiers can differ within a project.** If you interview 20 narrators, some may be Tier 2 while others are Tier 4. Assign per-narrator, not per-project.

**Narrators can influence the tier.** The two-stage consent process lets the narrator choose a higher restriction than your default assessment. A narrator who you assessed as Tier 2 may request Tier 3 protections after the interview — always respect this.

**Tiers can decrease over time** (with re-consent). A Tier 4 interview may be reclassified to Tier 3 after the embargo expires, but only with the narrator's consent or after the conditions specified in the original consent are met.

**When in doubt, tier up.** It is easier and legally safer to restrict now and open later than to close access on material that has already been disclosed.

!!! tip "Use the assessment tool"
    Not sure which tier applies to your project? The [interactive assessment](../decision-tree/decision-tree-entry.md) walks you through questions about your content, narrators, and context, and recommends a tier with a tailored report.