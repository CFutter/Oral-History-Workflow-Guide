---
hide:
  - navigation
  - toc
---

<div class="stepper">

  <div class="step-item done">
    <a class="step-number-circle" href="../step-1-basic/">1</a>
    <a class="step-label" href="../step-1-basic/">Basics</a>
  </div>

  <div class="step-item active">
    <a class="step-number-circle">2</a>
    <a class="step-label">Sensitivity</a>
  </div>

  <div class="step-item">
    <a class="step-number-circle">3</a>
    <a class="step-label">Risk</a>
  </div>

  <div class="step-item">
    <a class="step-number-circle">4</a>
    <a class="step-label">Jurisdiction</a>
  </div>
  
  <div class="step-item">
    <a class="step-number-circle">5</a>
    <a class="step-label">Ethics</a>
  </div>

  <div class="step-item">
    <a class="step-number-circle">6</a>
    <a class="step-label">Processing</a>
  </div>

  <div class="step-item">
    <a class="step-number-circle">7</a>
    <a class="step-label">Archiving</a>
  </div>

</div>

<div class="main-content">
    <div class="step-card-header">

        <p class="step-meta">Step 2 of 7</p>
        <h1>Sensitivity Pre-Assessment</h1>

    </div>

    <div class="alert-box info">
        The topics discussed in your interviews determine the <strong>sensitivity tier</strong>, which drives consent requirements, storage security, and access restrictions. Think about what narrators are likely to discuss — not just what you plan to ask.
    </div>

    <div class="question-label">
        Will narrators likely discuss any of the following sensitive categories?
    </div>
    <div class="question-sub">
    Select all that apply. These are "particularly sensitive personal data" under Swiss law (nFADP Art. 5(c), IDG).
    </div>


    <div class="options-column">
        
        <label class="option-card">
          <input type="checkbox" name="sensitive_cats" value="political" onchange="saveChoice(this)">
          <span class="option-check"></span>
          <span class="option-text"><strong>Political opinions or activities</strong><span>Party membership, activism, voting, political persecution</span></span>
        </label>

        <label class="option-card">
          <input type="checkbox" name="sensitive_cats" value="religion" onchange="saveChoice(this)">
          <span class="option-check"></span>
          <span class="option-text"><strong>Religious or philosophical beliefs</strong><span>Faith, conversion, spiritual practices, worldview</span></span>
        </label>

        <label class="option-card">
          <input type="checkbox" name="sensitive_cats" value="health" onchange="saveChoice(this)">
          <span class="option-check"></span>
          <span class="option-text"><strong>Health data</strong><span>Illness, disability, mental health, medical treatment, substance use</span></span>
        </label>

        <label class="option-card">
          <input type="checkbox" name="sensitive_cats" value="ethnicity" onchange="saveChoice(this)">
          <span class="option-check"></span>
          <span class="option-text"><strong>Ethnicity or race</strong><span>Ethnic identity, migration experience, discrimination</span></span>
        </label>

        <label class="option-card">
          <input type="checkbox" name="sensitive_cats" value="criminal" onchange="saveChoice(this)">
          <span class="option-check"></span>
          <span class="option-text"><strong>Criminal or administrative proceedings</strong><span>Arrest, trial, legal disputes, sanctions</span></span>
        </label>

        <label class="option-card">
          <input type="checkbox" name="sensitive_cats" value="social" onchange="saveChoice(this)">
          <span class="option-check"></span>
          <span class="option-text"><strong>Social assistance or trade union</strong><span>Welfare, disability benefits, labor organizing</span></span>
        </label>

        <label class="option-card">
          <input type="checkbox" name="sensitive_cats" value="sexual" onchange="saveChoice(this)">
          <span class="option-check"></span>
          <span class="option-text"><strong>Sexual orientation, intimate life</strong><span>Relationships, identity, experiences</span></span>
        </label>

        <label class="option-card">
          <input type="checkbox" name="sensitive_cats" value="none_sensitive" onchange="saveChoice(this)">
          <span class="option-check"></span>
          <span class="option-text">
            <strong>None of the above</strong><span>Topics are non-sensitive (e.g., public figure on published work, professional methodology)</span>
          </span>
        </label>

    </div>

        <div class="question-label">What level of narrator identification do you anticipate?</div>

    <div class="options-column">

        <label class="option-card">
          <input type="radio" name="identification" value="named" onchange="saveChoice(this)">
          <span class="option-check radio"></span>
          <span class="option-text"><strong>Narrators will be named</strong><span>Full name attribution in publications and archives</span></span>
        </label>

        <label class="option-card">
          <input type="radio" name="identification" value="pseudo" onchange="saveChoice(this)">
          <span class="option-check radio"></span>
          <span class="option-text"><strong>Pseudonyms</strong><span>Narrators identified by pseudonyms; key stored separately</span></span>
        </label>

        <label class="option-card">
          <input type="radio" name="identification" value="anon" onchange="saveChoice(this)">
          <span class="option-check radio"></span>
          <span class="option-text"><strong>Fully anonymized</strong><span>No possibility of re-identification</span></span>
        </label>

        <label class="option-card">
          <input type="radio" name="identification" value="mixed" onchange="saveChoice(this)">
          <span class="option-check radio"></span>
          <span class="option-text"><strong>Mixed — narrator chooses</strong><span>Some named, some pseudonymized</span></span>
        </label>

    </div>

  <div class="nav-buttons">
        <a href="../step-1-basic/" class="btn btn-ghost">← Back</a>
        <a href="../step-3-risk/" class="btn btn-primary">Continue →</a>
  </div>
  
</div>
