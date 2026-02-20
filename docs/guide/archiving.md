# Archiving & Access

<p class="intro-text">
  Long-term archiving ensures that your oral histories remain accessible, understandable, and usable beyond the life of your research project. This section covers choosing an archive, preparing materials for deposit, and defining access conditions by tier.
</p>

<div class="highlight-box">
  <p><strong>SNSF requirement:</strong> Research data must be preserved for at least 10 years and made available according to FAIR principles — "as open as possible, as closed as necessary." Plan your archiving strategy from the start, not at the end of the project.</p>
</div>

## Choosing an Archive

Select an archive based on your sensitivity tier, funder requirements, subject domain, and institutional affiliation. Key criteria:

- **Access control:** Can the archive enforce your tier's access restrictions? (Application-based access, embargoes, named-individual access)
- **Format support:** Does the archive accept audio, video, and transcript formats?
- **FAIR compliance:** Does the archive provide persistent identifiers (DOIs), machine-readable metadata, and standard APIs?
- **Funder acceptance:** Does your funder recognize this archive? (SNSF requires FAIR-compliant, non-profit repositories)
- **Geographic location:** For Tier 4–5, Swiss-hosted repositories are preferred.

### Swiss repositories

| Repository | Scope | Access control | Formats | Notes |
|---|---|---|---|---|
| **SWISSUbase** | Social sciences, humanities | Public, restricted, embargoed | Audio, video, text, tabular | National platform. FAIR-compliant. SNSF-recommended. DOIs. |
| **DaSCH** | Humanities (long-term digital scholarship) | Project-defined | Various digital formats | Swiss National Data and Service Center for the Humanities. SNSF-supported. |
| **Zenodo** | All disciplines | Public, restricted, embargoed | Any file type | CERN-hosted (Geneva). Free. DOIs. International reach. Good for Tiers 1–2. |
| **ETH Research Collection** | ETH-affiliated research | Public, restricted | Various | For ETH collaborations. DOIs. |

<div class="alert-box placeholder">
  <strong>UZH-specific archives:</strong> Information on UZH institutional archives, departmental collections, and discipline-specific repositories at UZH is being compiled. Contact your department or the UZH library for current options.
</div>

<div class="alert-box placeholder">
  <strong>Cantonal and specialized archives:</strong> Information on the Swiss Social Archives, cantonal archives (Staatsarchiv Zürich), and specialized oral history archives in Switzerland is being compiled.
</div>

### International repositories

- **re3data.org** — Registry of research data repositories. Search by discipline, data type, and access restrictions.
- **OHDA (Oral History Digital Archive)** — Specialized oral history platform.

### Decision guide by tier

| Tier | Archive type | Key requirement |
|---|---|---|
| **1** | Any FAIR-compliant repository (Zenodo, SWISSUbase) | Public access, DOI |
| **2** | Repository with license options (SWISSUbase, Zenodo) | CC license with conditions |
| **3** | Repository with application-based access (SWISSUbase, DaSCH) | Researcher registration, access request |
| **4** | Repository with embargo support, or institutional archive | Sealed access, time-limited |
| **5** | Institutional archive with named-access, or physical storage | Named individuals only; consider non-deposit |

---

## Preparing for Deposit

### Archival file formats

Prepare two versions: a **preservation copy** (highest quality, open format) and an **access copy** (smaller, widely playable):

| Content type | Preservation format | Access format |
|---|---|---|
| **Audio** | WAV (48 kHz / 24-bit) | MP3 (320 kbps) or FLAC |
| **Video** | MOV (ProRes) or MKV (FFV1) | MP4 (H.264/H.265) |
| **Transcript** | PDF/A (archival PDF) | DOCX or TXT |
| **Metadata** | XML or CSV | Same |
| **Consent forms** | PDF/A (scanned) | Same |

### Packaging

Organize deposit materials per interview:

```
deposit/
├── N01/
│   ├── OHWC_N01_20260315_audio_preservation.wav
│   ├── OHWC_N01_20260315_audio_access.mp3
│   ├── OHWC_N01_20260315_transcript_final.pdf
│   ├── OHWC_N01_20260315_metadata.csv
│   └── OHWC_N01_20260315_consent.pdf
├── N02/
│   └── ...
└── project_metadata.csv
```

Include a **README** file describing the collection, naming conventions, tier assignments, and contact information.

---

## Access Conditions by Tier

Define access conditions in the consent form and communicate them to the archive at deposit.

| Tier | Access model | License | Notes |
|---|---|---|---|
| **1 — Open** | Anyone, no application | CC BY 4.0 (or CC BY-SA) | Full open access. DOI for citation. |
| **2 — Conditional** | Anyone, with conditions | CC BY-NC-SA 4.0 | Attribution, non-commercial, share-alike. Specific excerpts excluded per consent form. |
| **3 — Restricted** | Registered researchers, application required | Custom access agreement | Researcher states purpose. Archive reviews and grants/denies. Typical for sensitive humanities data. |
| **4 — Embargoed** | Research team only during embargo | No public license during embargo | Embargo period (10/25/50 years) specified in consent. Post-embargo: review, potentially reclassify to Tier 3 or 2. |
| **5 — Highly restricted** | Named individuals only | No license | May not be deposited at all. If deposited, access is by named approval only. Possible scheduled destruction. |

---

## Publication & Data Availability

### Data availability statements

When publishing research based on oral history interviews, include a data availability statement. Adapt by tier:

=== "Tier 1–2"
    *"The oral history recordings and transcripts underlying this research are publicly available at [repository name] under [DOI/URL]. Access conditions: [CC license]."*

=== "Tier 3"
    *"The oral history data underlying this research are available at [repository name] under restricted access conditions. Qualified researchers may apply for access at [URL]. Access is granted for legitimate academic research purposes."*

=== "Tier 4–5"
    *"The oral history data underlying this research are subject to access restrictions to protect the privacy and safety of participants. Data are archived at [repository/institution] and are not publicly available. Requests for access should be directed to [contact]."*

### Citation practice

Oral history interviews should be cited as primary sources. Recommended format:

> [Narrator name or pseudonym], interview by [Interviewer name], [Date], [Project name], [Archive], [Identifier/DOI].

---

## Long-Term Preservation

### Format migration

Digital formats become obsolete. Plan for migration:

- Store in **open, standard formats** (WAV, PDF/A, CSV) — not proprietary formats
- Choose archives with **active preservation programs** that migrate formats over time
- SNSF requires minimum **10-year** retention

### Metadata standards for preservation

- **Dublin Core** — minimum descriptive metadata (SNSF baseline)
- **ISAD(G)** — archival description standard (for institutional archives)
- **OHMS** (Oral History Metadata Synchronizer) — oral-history-specific metadata with timestamped indexing

### Review and re-assessment

Plan periodic reviews:

| When | Action |
|---|---|
| **End of project** | Final quality check, deposit in archive, update DMP |
| **Embargo expiry** | Review access conditions, contact narrator (or representative), potentially reclassify |
| **10-year mark** | Format check, consider migration, verify continued relevance of access restrictions |
| **On request** | Respond to narrator's exercise of rights (access, correction, deletion) |