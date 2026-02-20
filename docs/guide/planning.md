# Project Planning & Design

<p class="intro-text">
  Good planning is the foundation of ethical, legally compliant oral history research. Decisions made at the design stage — about narrators, topics, formats, and data management — determine everything that follows. This section walks you through the essential planning steps.
</p>

<div class="highlight-box">
  <p><strong>Before you begin:</strong> Complete the <a href="../../decision-tree/decision-tree-entry/" style="color:#a8c0ff;">interactive project assessment</a> to determine your sensitivity tier and applicable legal requirements. The results will inform every planning decision below.</p>
</div>

## Planning Checklist

<div class="steps-container" markdown>

### Define your research questions

Oral history is uniquely suited to capturing subjective experience, memory, and personal perspective. Before designing interviews, clarify what your project aims to understand and why oral history is the appropriate method. This framing shapes everything: who you interview, what you ask, and how you handle the resulting data.

Consider: What gap in the historical or scholarly record does this project address? Whose voices are missing? What can oral testimony reveal that written sources cannot?

### Identify and approach narrators

The OHA Principles & Best Practices (2018) emphasize the importance of seeking diverse perspectives, including voices that have been historically underrepresented. When identifying potential narrators:

- Consider whose perspectives are essential to the research questions
- Seek diversity of experience within your topic
- Be attentive to power dynamics between researcher and narrator
- For community-based projects, engage with community representatives early
- Respect that some individuals may decline — participation must always be voluntary

**First contact** should explain the project clearly and without pressure. Use an institutional email (UZH) or, for narrators who prefer privacy, encrypted communication (ProtonMail, Threema). Provide the Information Sheet (see [Consent Templates](../legal/consent-templates.md)) at this stage.

### Conduct an early sensitivity pre-assessment

Before any interviews take place, estimate the likely sensitivity tier for your project. Think about what narrators are likely to discuss — not just what you plan to ask. Oral history conversations often go in unexpected directions.

Ask yourself:

- Will narrators discuss health, politics, religion, ethnicity, or legal matters?
- Could disclosure cause harm to narrators or people they mention?
- Are any narrators in vulnerable groups?
- Will identifiable third parties come up?

Use the [interactive assessment tool](../decision-tree/decision-tree-entry.md) for a structured evaluation, or consult the [Sensitivity Classification Model](../legal/sensitivity-classification.md).

### Plan your budget

Oral history projects require budgeting for:

| Category | Items to consider |
|---|---|
| **Equipment** | Audio recorder, microphones, camera, tripod, lighting, cables, SD cards, batteries |
| **Transcription** | Software licenses (f4transkript), AI tools, or external transcription services |
| **Travel** | Travel to narrator locations, accommodation if needed |
| **Storage** | Encrypted USB drives, VeraCrypt licenses (free), additional UZH storage if needed |
| **Archiving** | Repository deposit fees (if applicable), format migration |
| **Personnel** | Research assistants, transcribers, technical support |
| **Compensation** | Narrator compensation or honoraria (if applicable — check ethics implications) |
| **Dissemination** | Publication costs, website hosting, event costs |

### Write your Data Management Plan (DMP)

A DMP is required by most funders and is good practice regardless. It forces you to think through the entire data lifecycle — from collection through archiving.

=== "SNSF"
    The SNSF requires a DMP submitted via mySNF. For oral history, address:

    - **Data collection:** Audio/video recordings, transcripts, metadata, consent forms
    - **Documentation and metadata:** Dublin Core minimum; oral-history-specific fields (interviewer, narrator, date, location, topics, language, duration)
    - **Ethics and legal compliance:** Reference the IDG, your sensitivity tier, and consent process
    - **Storage and security:** UZH infrastructure, encryption, backup strategy (3-2-1 rule)
    - **Data sharing and reuse:** FAIR principles — "as open as possible, as closed as necessary"
    - **Archiving:** Identify the repository (see [Archiving & Access](archiving.md)), file formats, retention period

=== "ERC / EU"
    ERC requires a DMP following the FAIR data management structure. Emphasis on:

    - FAIR principles (Findable, Accessible, Interoperable, Reusable)
    - Open access mandate — explain any restrictions clearly
    - GDPR compliance if EU narrators or collaborators are involved
    - Data availability statement for publications

=== "No external funding"
    Even without a funder requirement, writing a DMP is strongly recommended. Use the SNSF template as a guide — it covers all essential elements. This protects you, your narrators, and the long-term value of the data.

### Choose your recording format

| Format | Best for | Considerations |
|---|---|---|
| **Audio only** | Most projects; lower complexity; narrator may be more comfortable without a camera | Archival format: WAV (48 kHz / 24-bit minimum). Easier to anonymize (no visual identification). |
| **Video** | Projects where visual context matters (gestures, objects, location); institutional or community archives | Higher storage needs. Harder to anonymize (face blurring needed). Requires additional equipment (camera, lighting, tripod). |
| **Remote (Zoom / Riverside)** | Geographically dispersed narrators; pandemic or mobility constraints | Data protection implications for cloud tools. Quality lower than in-person. Use local recording, not cloud. |
| **Transcript only** | When recording is not possible or narrator refuses recording | Loses vocal nuance, pauses, emotion. Not ideal for archival oral history. Use as supplement, not replacement. |

See [Tools & Equipment](../tools-equipment/tools-index.md) for specific recommendations by tier.

### Prepare consent materials

Based on your sensitivity tier, prepare:

- **Information Sheet** (all tiers) — provided before the interview
- **Consent Form** (tier-specific) — signed after the interview
- **Confidentiality Declaration** (if using external transcribers or assistants)

See [Consent Form Templates](../legal/consent-templates.md) for ready-to-adapt templates based on the UZH Declaration of Consent.

### Set up file management

Establish your file naming convention and folder structure **before** the first interview. Consistent naming from the start prevents chaos later.

**Recommended naming convention** (adapted from SNSF example):

```
[ProjectAbbreviation]_[NarratorID]_[Date]_[Type].[ext]

Examples:
OHWC_N01_20260315_audio.wav
OHWC_N01_20260315_transcript_v1.docx
OHWC_N01_20260315_consent.pdf
OHWC_N01_20260315_metadata.csv
```

**Folder structure:**

```
project-root/
├── 01-recordings/          # Original audio/video files
│   ├── N01/
│   └── N02/
├── 02-transcripts/         # Transcripts (versions)
│   ├── N01/
│   └── N02/
├── 03-consent-forms/       # Signed consent forms (scanned)
├── 04-metadata/            # Metadata spreadsheets
├── 05-anonymized/          # Anonymized versions for sharing
├── 06-analysis/            # Working analysis files
└── 07-admin/               # Project management, correspondence
```

</div>

---

## Planning Timeline

| When | Action |
|---|---|
| **Months before first interview** | Define research questions. Write DMP. Complete project assessment. Prepare consent materials. Purchase/test equipment. Set up storage and folder structure. |
| **Weeks before** | Contact narrators. Send Information Sheet. Schedule pre-interview meetings. |
| **Days before** | Test equipment. Prepare interview guide. Confirm logistics. |
| **Day of** | Arrive early. Set up and test. Conduct pre-interview conversation. Record. Sign consent form. |
| **Within 48 hours** | Back up recordings (3-2-1 rule). Write field notes. Begin metadata entry. |

!!! tip "The golden rule"
    Plan for the **most sensitive scenario** you might encounter, even if you expect most interviews to be straightforward. It is much easier to have processes in place and not need them than to scramble when a narrator unexpectedly discloses something highly sensitive.