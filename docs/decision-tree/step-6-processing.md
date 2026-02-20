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

  <div class="step-item done">
    <a class="step-number-circle" href="../step-3-risk/">3</a>
    <a class="step-label" href="../step-3-risk/">Risk</a>
  </div>

  <div class="step-item done">
    <a class="step-number-circle" href="../step-4-jurisdiction/">4</a>
    <a class="step-label" href="../step-4-jurisdiction/">Jurisdiction</a>
  </div>
  
  <div class="step-item done">
    <a class="step-number-circle" href="../step-5-ethics/">5</a>
    <a class="step-label" href="../step-5-ethics/">Ethics</a>
  </div>

  <div class="step-item active">
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

      <p class="step-meta">Step 6 of 7</p>
      <h1>Data Processing & Tools</h1>

  </div>

  <div class="alert-box info">
      Using external services to process oral history data triggers UZH's third-party data processing requirements. This includes transcription services, cloud storage, and collaboration tools.
  </div>


  <div class="question-label">How do you plan to transcribe your recordings?</div>

  <div class="options-column">

    <label class="option-card">
      <input type="radio" name="transcription" value="local_ai" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>Local AI tool (e.g., Whisper on my machine)</strong><span>Data stays on your device — no third-party processing</span></span>
    </label>

    <label class="option-card">
      <input type="radio" name="transcription" value="manual" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>Manual transcription (by myself or research team)</strong><span>No external processing</span></span>
    </label>

    <label class="option-card">
      <input type="radio" name="transcription" value="cloud_ai" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>Cloud-based AI service (e.g., Trint, Amberscript, Otter.ai)</strong><span>Data processed on external servers — DPA and GTC required</span></span>
    </label>

    <label class="option-card">
      <input type="radio" name="transcription" value="external_human" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>External human transcriber or service</strong><span>Third-party processing — GTC + Confidentiality Declaration required</span></span>
    </label>

    <label class="option-card">
      <input type="radio" name="transcription" value="undecided" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>Not yet decided</strong></span>
    </label>

  </div>


  <div class="question-label">Where will you store your recordings and transcripts during the project?</div>

  <div class="options-column">

    <label class="option-card">
      <input type="radio" name="storage" value="uzh" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>UZH infrastructure only</strong><span>UZH Research Storage, ScienceCloud, or UZH OneDrive</span></span>
    </label>

    <label class="option-card">
      <input type="radio" name="storage" value="swiss_cloud" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>Swiss cloud service</strong><span>SWITCHdrive or similar Swiss-hosted service</span></span>
    </label>

    <label class="option-card">
      <input type="radio" name="storage" value="eu_cloud" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>EU cloud service</strong><span>e.g., institutional Nextcloud, EU-hosted OneDrive</span></span>
    </label>

    <label class="option-card">
      <input type="radio" name="storage" value="personal" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>Personal devices (laptop, external drive)</strong><span>Encryption required</span></span>
    </label>

    <label class="option-card">
      <input type="radio" name="storage" value="undecided_storage" onchange="saveChoice(this)">
      <span class="option-check radio"></span>
      <span class="option-text"><strong>Not yet decided</strong></span>
    </label>

  </div>

  <div class="nav-buttons">
        <a href="../step-5-ethics/" class="btn btn-ghost">← Back</a>
        <a href="../step-7-archiving/" class="btn btn-primary">Continue →</a>
  </div>
  
</div>
