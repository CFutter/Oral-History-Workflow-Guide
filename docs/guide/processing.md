# Processing & Documentation

<p class="intro-text">
  After the interview, the work of transforming raw recordings into structured, documented, and usable research data begins. This section covers file management, metadata, transcription, anonymization, and quality control.
</p>

## File Management

### Naming convention

Use consistent naming from the first file. Recommended format:

```
[Project]_[NarratorID]_[YYYYMMDD]_[Type]_[Version].[ext]

OHWC_N01_20260315_audio.wav
OHWC_N01_20260315_transcript_v1.docx
OHWC_N01_20260315_transcript_v2_reviewed.docx
OHWC_N01_20260315_consent.pdf
```

Rules: no spaces (use underscores or hyphens), no special characters, include the date in ISO format (YYYYMMDD), version transcripts explicitly.

### Backup: the 3-2-1 rule

The Smithsonian Archives of American Art recommends the **3-2-1 rule** as the minimum backup standard:

- **3** copies of every file
- **2** different storage media (e.g., UZH Research Storage + encrypted USB)
- **1** copy off-site (e.g., SWITCHdrive or a second UZH location)

Back up immediately after the interview — do not leave original recordings only on the recorder's SD card.

---

## Metadata

Good metadata makes your oral histories findable, understandable, and reusable. Create metadata for each interview at the time of processing, not months later.

### Minimum metadata (Dublin Core)

The SNSF requires Dublin Core as a baseline. For oral history, record at minimum:

| Field | Description | Example |
|---|---|---|
| **Title** | Descriptive title of the interview | "Interview with [Narrator ID] on workplace culture at [Institution]" |
| **Creator** | Interviewer name | "Dr. Maria Schneider" |
| **Subject** | Topic keywords | "workplace culture; institutional history; 1990s" |
| **Description** | Brief summary of content | "Narrator discusses their 20-year career at…" |
| **Date** | Date of recording (ISO) | "2026-03-15" |
| **Type** | Resource type | "Sound" or "MovingImage" |
| **Format** | File format and technical details | "audio/wav; 48kHz/24bit; 87 min" |
| **Language** | Language(s) spoken | "de" or "en" |
| **Rights** | Access conditions | "Restricted: registered researchers. Tier 3." |
| **Identifier** | Unique project ID | "OHWC_N01_20260315" |

### Oral-history-specific metadata

Beyond Dublin Core, add:

| Field | Description |
|---|---|
| **Narrator ID / pseudonym** | Identifier or pseudonym used |
| **Location** | Where the interview took place (city level for Tier 3+) |
| **Duration** | Total recording length |
| **Session number** | If multiple sessions with the same narrator |
| **Sensitivity tier** | Assigned tier (1–5) |
| **Consent status** | "Signed" / "Pending review" / date |
| **Transcription status** | "Not started" / "AI draft" / "Reviewed" / "Final" |
| **Anonymization status** | "Not required" / "Completed" / "Pending" |
| **Excluded passages** | Timestamps of passages excluded per narrator's request |
| **Third-party data** | Timestamps of passages containing identifiable third-party data |

!!! tip "Use a spreadsheet"
    Maintain a single metadata spreadsheet (Excel or CSV) for the entire project. One row per interview. This becomes the master index and is essential for archiving.

---

## Transcription

### Transcription approaches

| Approach | When to use | Effort | Quality |
|---|---|---|---|
| **Full verbatim** | Primary research output; linguistic or discourse analysis; archival preservation | High | Highest — captures speech as spoken, including pauses, false starts, filler words |
| **Clean verbatim** | Most oral history projects; readability matters | Medium | High — light editing for readability while preserving meaning and voice |
| **Summary / index** | Large collections where full transcription is not feasible; preliminary cataloguing | Low | Lower — captures topics and timestamps, not exact words |

For most oral history projects, **clean verbatim** is recommended: edit for readability (remove excessive filler words, correct obvious false starts) while preserving the narrator's voice, dialect, and speech patterns.

### Transcription workflow

1. **AI first pass** — Use local Whisper to generate an initial transcript. This is typically 80–95% accurate depending on audio quality and language.
2. **Human review and correction** — Listen to the recording while reading the transcript. Correct errors, add speaker labels, mark unclear passages with [inaudible] or [unclear].
3. **Formatting** — Apply consistent formatting: speaker labels (Interviewer: / Narrator:), timestamps at regular intervals, paragraph breaks at topic changes.
4. **Narrator review** (if consented) — Provide the transcript to the narrator for review. They may correct factual errors, clarify unclear passages, or request removal of specific sections.
5. **Final version** — Incorporate narrator feedback. Mark the version as final. Update metadata.

### Transcription tools by tier

| Tier | Recommended approach |
|---|---|
| **1–2** | Local Whisper for first pass, or cloud service (Amberscript, Trint) with DPA. Manual correction. |
| **3** | Local Whisper preferred. Cloud only with Swiss/EU DPA. Manual correction. |
| **4–5** | Local Whisper or fully manual (f4transkript, oTranscribe). No cloud processing. |

See [Transcription Tools](../tools-equipment/transcription-tools.md/) for detailed tool recommendations.

---

## Anonymization & Redaction

### When is anonymization required?

| Situation | Required? |
|---|---|
| Third-party data in publications (all tiers) | **Yes** — always anonymize identifiable third parties unless they are public figures in public capacity and have consented |
| Narrator data in publications (Tier 3+) | **Yes** — use pseudonyms unless narrator has explicitly consented to name attribution |
| Narrator data in the archive (Tier 3+) | Depends on access model — restricted access may substitute for anonymization of originals |
| Narrator data in the archive (Tier 1–2) | **No** — narrator has consented to identifiable access |

### Anonymization vs. pseudonymization

Under Swiss law these are distinct concepts:

- **Anonymization:** All identifying information is **irreversibly** removed. The data can no longer be linked to any individual. Anonymized data falls outside the scope of the Data Protection Act.
- **Pseudonymization:** Identifying information is replaced with codes or pseudonyms, but a key exists that could re-link the data to the individual. Pseudonymized data is still personal data under the law.

For oral history, full anonymization is often impractical (a voice recording is inherently identifiable). The practical approach is **pseudonymization** of transcripts and outputs, with access restrictions on the original recordings.

### How to anonymize transcripts

1. **Replace names** with consistent pseudonyms: [NARRATOR-A], [COLLEAGUE-B], [INSTITUTION-C]. Use a lookup style that reveals the category but not the identity.
2. **Replace identifying details:** Specific job titles → "a senior role"; exact dates → "in the early 2000s"; distinctive locations → "a hospital in Zurich."
3. **Maintain a de-identification key** — a separate, securely stored document mapping pseudonyms to real identifiers. Store this at the same or higher security level as the original data.
4. **Mark redacted passages** clearly in the transcript: [PASSAGE EXCLUDED AT NARRATOR'S REQUEST, 23:14–24:52]

### How to anonymize audio and video

- **Audio:** Use Audacity to silence or tone-replace identifying segments (names, locations). Generate a tone (e.g., 400 Hz beep) over the relevant portion.
- **Video:** Use DaVinci Resolve to blur faces, obscure identifying backgrounds, and silence audio passages.

!!! warning "Anonymization is harder than it looks"
    Even with names removed, combinations of details (employer + time period + role + specific events) can re-identify individuals. Consider context-based identification risk, especially for Tier 3+ interviews in small professional communities.

---

## Quality Control

Before moving to archiving, verify:

- [ ] **Recording quality:** Audio is clear, complete, no major technical failures
- [ ] **Transcript accuracy:** Reviewed against recording, speaker labels correct, timestamps present
- [ ] **Metadata completeness:** All required fields filled, consistent with naming convention
- [ ] **Consent verification:** Signed consent form on file, matches the sensitivity tier assigned
- [ ] **Anonymization status:** Third-party data anonymized in transcripts; de-identification key stored separately
- [ ] **Excluded passages:** All passages excluded at narrator's request are clearly marked and (if applicable) removed from access copies
- [ ] **File naming:** Consistent, no spaces or special characters, versioned correctly
- [ ] **Backup status:** 3-2-1 rule satisfied