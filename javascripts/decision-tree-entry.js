document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("dt-entry-content");
  if (!container) return;

  // Step definitions — keys are the localStorage keys checked for each step
  var steps = [
    { num: 1, label: "Basics",       keys: ["formats", "narrator_count", "funder"],           page: "step-1-basic" },
    { num: 2, label: "Sensitivity",   keys: ["sensitive_cats", "identification"],               page: "step-2-sensitivity" },
    { num: 3, label: "Risk",          keys: ["harm_risk", "vulnerable", "third_party"],         page: "step-3-risk" },
    { num: 4, label: "Jurisdiction",  keys: ["hra", "crossborder", "collab"],                   page: "step-4-jurisdiction" },
    { num: 5, label: "Ethics",        keys: ["psych_harm", "funder_ethics"],                    page: "step-5-ethics" },
    { num: 6, label: "Processing",    keys: ["transcription", "storage"],                       page: "step-6-processing" },
    { num: 7, label: "Archiving",     keys: ["archive", "access"],                              page: "step-7-archiving" }
  ];

  // Check which steps have data
  function stepHasData(step) {
    return step.keys.some(function (key) {
      var val = localStorage.getItem(key);
      if (!val) return false;
      if (val.startsWith("[")) {
        try { return JSON.parse(val).length > 0; } catch (e) { return false; }
      }
      return val.length > 0;
    });
  }

  function getLastCompletedStep() {
    var last = 0;
    for (var i = 0; i < steps.length; i++) {
      if (stepHasData(steps[i])) last = i + 1;
      else break;
    }
    return last;
  }

  function getStepValue(key) {
    var val = localStorage.getItem(key);
    if (!val) return null;
    if (val.startsWith("[")) {
      try {
        var arr = JSON.parse(val);
        return arr.length > 0 ? arr.join(", ") : null;
      } catch (e) { return null; }
    }
    return val || null;
  }

  function clearAllData() {
    var allKeys = [];
    steps.forEach(function (s) { allKeys = allKeys.concat(s.keys); });
    allKeys.forEach(function (k) { localStorage.removeItem(k); });
  }

  var lastCompleted = getLastCompletedStep();
  var totalSteps = steps.length;
  var hasAnyData = lastCompleted > 0;

  // Build the page
  var html = "";

  // Progress bar
  html += '<div class="dt-progress">';
  for (var i = 0; i < totalSteps; i++) {
    var dotClass = "dt-progress-dot";
    if (i < lastCompleted) dotClass += " done";
    else if (i === lastCompleted) dotClass += " current";

    html += '<div class="dt-progress-step">';
    html += '<div class="' + dotClass + '">';
    if (i < lastCompleted) html += "";
    else html += (i + 1);
    html += "</div>";
    html += '<div class="dt-progress-label">' + steps[i].label + "</div>";
    html += "</div>";

    if (i < totalSteps - 1) {
      var lineClass = "dt-progress-line";
      if (i < lastCompleted) lineClass += " done";
      html += '<div class="' + lineClass + '"></div>';
    }
  }
  html += "</div>";

  if (hasAnyData) {
    // ── Resume section ──
    var nextStep = lastCompleted < totalSteps ? lastCompleted : totalSteps - 1;
    var nextPage = lastCompleted < totalSteps ? steps[lastCompleted].page : "assessment-report";
    var nextLabel = lastCompleted < totalSteps
      ? "Continue with Step " + (lastCompleted + 1) + " — " + steps[lastCompleted].label
      : "View Your Assessment Report";

    html += '<p class="intro-text">';
    html += "You have completed <strong>" + lastCompleted + " of " + totalSteps + " steps</strong>. ";
    html += "You can continue where you left off, revisit a specific step, or start fresh.";
    html += "</p>";

    // Action cards
    html += '<div class="dt-actions">';

    // Resume card
    html += '<a class="card-base primary" href=../' + nextPage + '/>';
    html += '<div class="dt-action-icon blue">→</div>';
    html += "<h3>" + nextLabel + "</h3>";
    html += "<p>Pick up where you left off. Your previous answers are saved.</p>";
    html += '<span class="dt-action-link">Continue →</span>';
    html += "</a>";

    // Start over card
    html += '<a class="card-base" href="#" id="dt-restart-btn">';
    html += '<div class="dt-action-icon outline">↻</div>';
    html += "<h3>Start Over</h3>";
    html += "<p>Clear all saved answers and begin a fresh assessment from Step 1.</p>";
    html += '<span class="dt-action-link">Reset & start →</span>';
    html += "</a>";

    html += "</div>";

    // Saved progress summary
    html += "<h3>Your saved answers</h3>";
    html += '<div class="dt-saved-summary">';
    var labelMap = {
      formats: "Recording formats",
      narrator_count: "Narrator count",
      funder: "Funder",
      sensitive_cats: "Sensitive categories",
      identification: "Identification",
      harm_risk: "Harm risk",
      vulnerable: "Vulnerable groups",
      third_party: "Third-party data",
      hra: "HRA applicability",
      crossborder: "Cross-border",
      collab: "Collaboration",
      psych_harm: "Psychological harm",
      funder_ethics: "Funder ethics req.",
      transcription: "Transcription",
      storage: "Storage",
      archive: "Archive plan",
      access: "Access level"
    };
    steps.forEach(function (step) {
      step.keys.forEach(function (key) {
        var val = getStepValue(key);
        var label = labelMap[key] || key;
        html += '<div class="dt-saved-item">';
        html += '<span class="dt-saved-key">' + label + "</span>";
        if (val) {
          html += '<span class="dt-saved-val">' + val + "</span>";
        } else {
          html += '<span class="dt-saved-val empty">not set</span>';
        }
        html += "</div>";
      });
    });
    html += "</div>";

    // Quick links to each step
    html += "<h3>Jump to a specific step</h3>";
    html += '<div class="dt-steps-list">';
    steps.forEach(function (step, idx) {
      var done = idx < lastCompleted;
      html += '<a class="dt-step-link" href="../' + step.page + '/">';
      html += '<span class="num' + (done ? " done" : "") + '">' + (done ? "✓" : step.num) + "</span>";
      html += "Step " + step.num + " — " + step.label;
      html += "</a>";
    });
    // Report link
    html += '<a class="dt-step-link" href="../assessment-report/">';
    html += '<span class="num' + (lastCompleted >= totalSteps ? " done" : "") + '">📋</span>';
    html += "Assessment Report";
    html += "</a>";
    html += "</div>";

  } else {
    // ── Fresh start section ──
    html += '<p class="intro-text">';
    html += "No saved progress found. The assessment takes about <strong>5–10 minutes</strong> and walks you through 7 steps covering your project basics, sensitivity, legal jurisdiction, ethics, data processing, and archiving plans.";
    html += "</p>";

    html += '<div class="dt-actions">';
    html += '<a class="card-base primary" href="../step-1-basic/">';
    html += '<div class="dt-action-icon blue">📋</div>';
    html += "<h3>Start Assessment</h3>";
    html += "<p>Answer questions about your oral history project and receive a tailored report with your sensitivity tier, applicable laws, and action checklist.</p>";
    html += '<span class="dt-action-link">Begin Step 1 →</span>';
    html += "</a>";

    html += '<a class="card-base" href="../../guide/planning/">';
    html += '<div class="dt-action-icon outline">📖</div>';
    html += "<h3>Read the Guide First</h3>";
    html += "<p>Not ready to assess yet? Start with the Project Planning section to understand the oral history workflow.</p>";
    html += '<span class="dt-action-link">Go to guide →</span>';
    html += "</a>";
    html += "</div>";

    // Step overview
    html += "<h3>What the assessment covers</h3>";
    html += '<div class="dt-steps-list">';
    steps.forEach(function (step) {
      html += '<a class="dt-step-link" href="../' + step.page + '/">';
      html += '<span class="num">' + step.num + "</span>";
      html += "Step " + step.num + " — " + step.label;
      html += "</a>";
    });
    html += "</div>";
  }

  container.innerHTML = html;

  // Restart handler
  var restartBtn = document.getElementById("dt-restart-btn");
  if (restartBtn) {
    restartBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (confirm("This will clear all your saved answers. Are you sure you want to start over?")) {
        clearAllData();
        window.location.href = "../step-1-basic/";
      }
    });
  }
});