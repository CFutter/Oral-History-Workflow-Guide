## Anonymization Tools

All anonymization tools run locally and are suitable for every tier. The tier relevance here is about **when anonymization is required**, not tool suitability.

| Tool | Type | Price | Tiers | When to use |
|---|---|---|---|---|
| **Manual redaction in transcript** | Text editing | Free | 1–5 | Always applicable. Search-and-replace names with [PSEUDONYM-A], [PSEUDONYM-B]. Required from Tier 2+ for third-party data; from Tier 3+ for narrator data in publications. |
| **OpenAIRE Amnesia** | Tabular data anonymization | Free (open source) | 1–5 | Structured/coded data only (not transcripts). Useful if exporting quantitative summaries. |
| **Audacity** | Audio editing | Free (open source) | 1–5 | Silence or tone-replace identifying passages in audio. Required from Tier 3+ before sharing audio. |
| **DaVinci Resolve** | Video editing | Free version available | 1–5 | Blur faces, silence audio passages, remove location identifiers from video. Required from Tier 3+ before sharing video. |
| **OBS Studio + filters** | Video processing | Free (open source) | 1–5 | Apply blur filters in real-time or post-processing. Useful during remote interviews for on-the-fly anonymization. |
| **ATLAS.ti / NVivo / MAXQDA** | QDA software | University licenses | 1–5 | Code and manage anonymized passages within the analysis workflow. Built-in annotation supports de-identification tracking. |

**De-identification log:** Maintain a separate, securely stored log of all replacements made (e.g., "Dr. Müller → [COLLEAGUE-A]"). This log should be stored separately from the anonymized data and protected at the same or higher security level as the original data.