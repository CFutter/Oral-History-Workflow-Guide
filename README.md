# Oral History Workflow Guide

A practical guide for oral history researchers at the University of Zurich, covering legal requirements, ethical frameworks, and best practices for planning, conducting, and archiving oral history interviews in the Swiss research context.

Built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Features

- **Interactive project assessment** — A 7-step decision tree that evaluates your project's sensitivity, legal jurisdiction, ethics requirements, and data processing plans, then generates a tailored report with your recommended sensitivity tier, applicable laws, required documents, and an action checklist.
- **Five-tier sensitivity classification** — A structured framework (Open → Highly Restricted) that drives consent requirements, storage security, access restrictions, and tool choices.
- **Step-by-step workflow guide** — From project planning through interviewing, processing, storage, and archiving.
- **Legal & ethical framework** — Coverage of the Zurich IDG, nFADP, GDPR, and Human Research Act as they apply to oral history at UZH.
- **Consent form templates** — Tier-specific templates adapted for oral history research.
- **Tools & equipment catalog** — Recommended recording, transcription, encryption, anonymization, and storage tools, each rated by tier suitability.
- **Glossary & references** — Key terms, legal references, and further reading.

## Prerequisites

- [Python 3.x](https://www.python.org/)
- [MkDocs](https://www.mkdocs.org/) with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

## Setup

```bash
# Clone the repository
git clone <repository-url>
cd <repository-name>

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows

# Install dependencies
pip install mkdocs-material
```

## Development

```bash
# Start the local development server
mkdocs serve
```

The site will be available at `http://127.0.0.1:8000`. Changes to source files are reflected automatically.

## Build & deploy

```bash
# Build the static site
mkdocs build
```

Output is written to the `site/` directory.

## Project structure

```
├── mkdocs.yml                  # Site configuration
├── docs/
│   ├── index.md                # Home page
│   ├── decision-tree/          # Interactive project assessment (7 steps + report)
│   ├── guide/                  # Workflow guide (planning → archiving)
│   ├── legal/                  # Legal framework, sensitivity tiers, consent templates
│   ├── tools-equipment/        # Tools & equipment catalog
│   ├── reference/              # Glossary & references
│   ├── stylesheets/extra.css   # Custom styles (UZH branding)
│   ├── javascripts/            # Decision tree logic & report generator
│   └── overrides/              # MkDocs template overrides
```

## License

Copyright © 2026 University of Zurich.