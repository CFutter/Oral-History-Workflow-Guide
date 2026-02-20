# Storage & Security

<p class="intro-text">
  Secure storage is a legal obligation under both the Zurich IDG (§ 7) and the nFADP (Art. 8). This section covers where and how to store oral history data during the active research phase — from recordings and transcripts to consent forms and de-identification keys.
</p>

<div class="highlight-box">
  <p><strong>Core principle:</strong> The level of storage security must match the sensitivity tier. All tiers require baseline measures (encryption, backup). Higher tiers require progressively stricter access controls, encryption layers, and infrastructure choices.</p>
</div>

## Storage by Tier

=== "Tier 1–2"
    **Primary storage:** UZH Research Storage, UZH OneDrive/SharePoint, or SWITCHdrive.

    **Requirements:**

    - Full-disk encryption on all devices (BitLocker / FileVault) — **mandatory**
    - Regular backups (3-2-1 rule)
    - UZH account authentication for access
    - No storage on unencrypted USB drives

=== "Tier 3"
    **Primary storage:** UZH Research Storage or UZH ScienceCloud. SWITCHdrive acceptable for collaboration copies.

    **Additional requirements:**

    - Access restricted to named team members (not shared-by-default)
    - VeraCrypt containers for any portable copies (USB, laptop)
    - Consent forms stored separately from recordings
    - De-identification key stored in a separate encrypted location from the anonymized data
    - No personal cloud services (Dropbox, Google Drive, iCloud)

=== "Tier 4"
    **Primary storage:** UZH Research Storage or UZH ScienceCloud only.

    **Additional requirements:**

    - VeraCrypt-encrypted containers for all oral history files
    - Named-individual access permissions (not group/team)
    - Consent forms in a locked physical location (secure filing cabinet, restricted office)
    - De-identification key on a separate encrypted device from the data
    - Access log: record who accessed what and when
    - No cloud services for original recordings
    - Physical security for any paper documents

=== "Tier 5"
    **Primary storage:** UZH Research Storage with named-individual access only.

    **Additional requirements:**

    - All Tier 4 requirements plus:
    - Consider air-gapped storage for the most sensitive material (dedicated device not connected to any network)
    - Separate VeraCrypt passwords for different components (recordings, transcripts, keys)
    - Physical access controls (locked room, restricted key holders)
    - Consider whether material should be stored on UZH infrastructure at all, or whether a dedicated secure device is more appropriate
    - Plan for destruction if specified in the consent form

---

## Encryption Guide

### Full-disk encryption (mandatory for all tiers)

Every device that touches oral history data must have full-disk encryption enabled:

| OS | Tool | How to enable |
|---|---|---|
| **Windows** | BitLocker | Settings → Privacy & Security → Device encryption (or BitLocker in older versions). Requires Windows Pro/Enterprise. |
| **macOS** | FileVault | System Settings → Privacy & Security → FileVault → Turn On. |
| **Linux** | LUKS | Configure during installation. For existing systems: `cryptsetup luksFormat`. |

### File-level encryption (Tier 3+)

For additional protection, encrypt individual files or folders using **VeraCrypt containers**:

1. Download VeraCrypt (free, open source, cross-platform)
2. Create a new encrypted volume (container file)
3. Set a strong password (20+ characters, stored in your password manager)
4. Mount the container when working, dismount when done
5. The container appears as a regular file — easy to back up and transport

**For cloud storage:** Use **Cryptomator** to encrypt files before they sync to cloud services. This adds a transparent encryption layer — files are encrypted on your device and only encrypted versions reach the cloud.

### Password management

Use a password manager for all project-related passwords:

| Tier | Recommended tool |
|---|---|
| 1–3 | **Bitwarden** (cloud-synced, team sharing) or **KeePassXC** (local) |
| 4–5 | **KeePassXC** (local database, no cloud sync). Store the database on an encrypted device. |

---

## Secure Data Transfer

When transferring oral history data — to collaborators, archives, or narrators for review — use secure channels:

| Method | Suitable for | Notes |
|---|---|---|
| **SWITCHfilesender** | Large files to Swiss university recipients | Swiss-hosted, temporary links, up to 250 GB. Good for Tiers 1–4. |
| **UZH OneDrive shared link** | Small files within UZH or to external collaborators | Set link expiry and password. Suitable for Tiers 1–3. |
| **Encrypted email attachment** (7-Zip AES-256) | Small files to anyone | Create a password-protected archive. Send the password via a different channel (e.g., phone, Signal). |
| **ProtonMail** | Sensitive communications, especially with narrators | Swiss-hosted, end-to-end encryption. Free tier available. Suitable for all tiers. |
| **Physical handoff** | Tier 5 material, consent forms | Encrypted USB drive, handed over in person. Sometimes the safest method. |

!!! danger "Never send unencrypted sensitive recordings by email"
    Standard email is not encrypted end-to-end. Do not attach oral history recordings (Tier 3+) to regular email. Use SWITCHfilesender, encrypted archives, or ProtonMail.

---

## Third-Party Processing: UZH Requirements

When UZH data is processed by external parties (transcription services, cloud platforms), specific contracts are required. This is governed by **§ 6 IDG** and UZH's standard documents.

### Required documents by scenario

| Scenario | Required documents |
|---|---|
| ICT service in Switzerland | GTC for ICT Services (CSI) + GTC DP Outsourcing IT UZH + Confidentiality Declaration |
| ICT service in EU/EEA | Same as above |
| ICT service in third country (no adequate protection) | All above + EU Standard Contractual Clauses (UZH version) |
| Non-ICT service in Switzerland (e.g., human transcriber) | GTC DP Processing Third Parties UZH + Confidentiality Declaration |
| Non-ICT service in third country | Same + EU Standard Contractual Clauses |

Contact the UZH Delegate for Data Protection (datenschutz@dsd.uzh.ch) for the current versions of these documents.

---

## DMP in Practice

Your Data Management Plan should describe your actual storage setup. When filling in the SNSF or ERC DMP, map your oral history storage as follows:

| DMP question | Your answer should cover |
|---|---|
| Where will data be stored during the project? | UZH Research Storage / ScienceCloud. Encrypted devices for fieldwork. |
| How will data be backed up? | 3-2-1 rule: UZH storage + encrypted USB + SWITCHdrive (or second UZH location). |
| Who will have access? | Named team members. Access permissions match the sensitivity tier. |
| What security measures are in place? | Full-disk encryption, VeraCrypt containers (Tier 3+), password manager, access controls. |
| How will personal data be protected? | Pseudonymization of transcripts, restricted access to originals, separate storage of de-identification keys. |
| Will data be processed outside Switzerland? | State whether any tools or services process data outside CH/EU. Reference DPA and GTC. |

---

## Storage Checklist

- [ ] Full-disk encryption enabled on all devices (BitLocker / FileVault)
- [ ] Primary storage on UZH infrastructure (not personal cloud)
- [ ] 3-2-1 backup rule implemented
- [ ] VeraCrypt containers for portable copies (Tier 3+)
- [ ] Consent forms stored separately from recordings
- [ ] De-identification key stored separately from anonymized data
- [ ] Password manager in use for all project credentials
- [ ] Third-party processing contracts executed (if using external services)
- [ ] Access permissions match the sensitivity tier
- [ ] Storage setup documented in the DMP