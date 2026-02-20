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

  <div class="step-item done">
    <a class="step-number-circle" href="../step-2-sensitivity/">2</a>
    <a class="step-label" href="../step-2-sensitivity/">Sensitivity</a>
  </div>

  <div class="step-item active">
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

      <p class="step-meta">Step 3 of 7</p>
      <h1>Risk Assessment</h1>

  </div>

  <div class="alert-box info">
    These questions help determine whether your project involves elevated risks that push the sensitivity tier upward and may trigger additional requirements (ethics review, access restrictions, embargoes).
  </div>

  <div class="question-label">
    Could the content of the interviews cause harm if disclosed?
  </div>

  <div class="options-column">
    
    <label class="option-card">
      <input type="radio" name="harm_risk" value="none" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text">
        <strong>No foreseeable harm</strong><span>Content is non-controversial; narrators are comfortable with disclosure</span>
      </span>
    </label>

    <label class="option-card">
      <input type="radio" name="harm_risk" value="reputational" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text">
        <strong>Possible reputational harm</strong><span>Narrators or third parties could face embarrassment, professional consequences</span>
      </span>
    </label>

    <label class="option-card">
      <input type="radio" name="harm_risk" value="serious" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text">
        <strong>Possible serious harm</strong><span>Legal jeopardy, safety risks, re-traumatization, endangerment</span>
      </span>
    </label>

  </div>

  <div class="question-label">
    Does your project involve any of these vulnerable groups?
  </div>
  <div class="question-sub">
    Select all that apply.
  </div>

  <div class="options-column">

    <label class="option-card">
      <input type="checkbox" name="vulnerable" value="minors" onchange="saveChoice(this)">
      <span class="option-check"></span>
      <span class="option-text"><strong>Minors (under 18)</strong></span>
    </label>

    <label class="option-card">
      <input type="checkbox" name="vulnerable" value="mental" onchange="saveChoice(this)">
      <span class="option-check"></span>
      <span class="option-text"><strong>Persons with mental illness or dementia</strong></span>
    </label>

    <label class="option-card">
      <input type="checkbox" name="vulnerable" value="dependency" onchange="saveChoice(this)">
      <span class="option-check"></span>
      <span class="option-text">
        <strong>Persons in a dependency relationship with the researcher</strong><span>Employer–employee, teacher–student, etc.</span>
      </span>
    </label>

    <label class="option-card">
      <input type="checkbox" name="vulnerable" value="endangered" onchange="saveChoice(this)">
      <span class="option-check"></span>
      <span class="option-text">
        <strong>Persons who could be endangered</strong><span>Whistleblowers, undocumented migrants, persons in conflict zones</span>
      </span>
    </label>

    <label class="option-card">
      <input type="checkbox" name="vulnerable" value="none_vulnerable" onchange="saveChoice(this)">
      <span class="option-check"></span>
      <span class="option-text"><strong>None of the above</strong></span>
    </label>

  </div>

  <div class="question-label">
      Will narrators discuss third parties (other people) in identifiable ways?
  </div>

  <div class="options-column">
      
    <label class="option-card">
      <input type="radio" name="third_party" value="unlikely" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>Unlikely or minimal</strong></span>
    </label>

    <label class="option-card">
      <input type="radio" name="third_party" value="likely" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>Likely — names and personal details of others will come up</strong></span></span>
    </label>

    <label class="option-card">
      <input type="radio" name="third_party" value="sensitive_third" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text">
        <strong>Likely, and the third-party data will be sensitive</strong><span>e.g., discussing someone's health, politics, legal matters</span>
      </span>
    </label>

  </div>

  <div class="nav-buttons">
    <a href="../step-2-sensitivity/" class="btn btn-ghost">← Back</a>
    <a href="../step-4-jurisdiction/" class="btn btn-primary">Continue →</a>
  </div>
  
</div>
