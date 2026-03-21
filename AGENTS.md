# Agent Instructions (project-level)

This repository tracks evidence-based gourmet research for a trip (2026-09-25 → 2026-10-04) focused on food venues in:
- 伊勢市 (Ise City) → `gourmet/iseshi/`
- 松阪市 (Matsusaka City) → `gourmet/matsusakashi/`
- 鳥羽市 (Toba City) → `gourmet/tobashi/`
- 志摩市 (Shima City) → `gourmet/shimashi/`

**Manual (single source of truth)**:
- `references/overview.md`
- `references/repo-structure.md`
- `references/workflow.md`
- `references/evidence.md`
- `references/scoring-and-decisions.md`
- `references/completion-and-maintenance.md`

## Language policy

- Primary language: English (all operational procedures, rules, and guidelines).
- Japanese: use sparingly for clarification/context/examples only.
- No content duplication across languages.

## Non-negotiables

- Do not fabricate or infer factual data; cite sources with real URLs and access dates.
- Every *researched* candidate must have **≥4 independent sources** (minimum: Google Maps + 食べログ + Google口コミ + at least one guide source).
- Preserve audit trail: never delete candidates unless duplicate/incorrect/permanently closed; otherwise set `status: rejected` and document in `excluded.md`.

## Required repo structure (per city)

Each city directory under `gourmet/` contains exactly five files:
- `overview.md` (strategy + research completion checklist)
- `candidates.md` (table inventory; concise summaries only)
- `notes.md` (evidence + scoring justification)
- `excluded.md` (rejection reasons + supporting sources)
- `top-places.md` (Top Picks/Backups + dining strategy + trip To-Do)

## Key decision rules (summary)

- Score using the 50-point rubric (5×10): Taste/Quality, Value, Convenience, Consistency, Risk (higher = lower risk).
- Triage thresholds:
  - ≥35 → Top Pick candidate
  - 30–34 → Backup candidate
  - <30 → Reject (document why)

## When in doubt

Open and follow the files under `references/` above for the complete workflow, evidence rules, conflict handling, and completion criteria.
