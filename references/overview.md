# Research Operations Manual — Overview

## Document Purpose

This document defines the complete research methodology for evidence-based gourmet research across multiple cities. It serves as the single source of truth for both human researchers and AI agents.

**Language Policy:**
- Primary language: English (all operational procedures, rules, and guidelines)
- Japanese: Used sparingly for clarification, context, or examples only
- No content duplication across languages

---

## Project Scope

### In Scope

**Primary Objective**: Build evidence-based food recommendations for a trip from 2026-09-25 to 2026-10-04.

**Target Cities** (調査対象エリア):
- 伊勢市 (Ise City)
- 松阪市 (Matsusaka City)
- 鳥羽市 (Toba City)
- 志摩市 (Shima City)

**Categories Covered**:
- Restaurants (all cuisine types)
- Cafes (coffee, tea, light meals)
- Dessert shops (sweets, pastries, ice cream)

**Research Deliverables**:
- Scored candidate list with evidence
- Top picks and backup recommendations
- Practical constraints (reservations, hours, closures)
- Exclusion rationale for rejected candidates

### Out of Scope

**Not Researched**:
- Accommodations (already booked)
- Transportation between cities (already booked)
- Non-food activities or attractions
- Shopping (unless food-related)
- Nightlife (bars, clubs) unless food-focused
- Cities outside the four target areas

**Fixed Constraints** (not modifiable by research):
- Travel dates: 2026-09-25 to 2026-10-04
- Previously visited restaurants (reference only): 和田金, 一月家, 豚捨, 一升びん

---

## Agent Roles and Responsibilities

### Research Agent
**Primary function**: Information discovery and evidence collection

**Responsibilities**:
- Search for candidate establishments across multiple sources
- Collect ratings, reviews, and practical information
- Document evidence in structured format
- Record source URLs and access dates
- Flag conflicts or uncertainties in data

**Authority**:
- Add candidates to discovery pipeline
- Request additional sources when needed
- Escalate unclear cases to Verification Agent

**Constraints**:
- Must not fabricate or infer data without clear evidence
- Must cite all sources with URLs
- Must collect minimum 4 sources per candidate (see Evidence Rules)

### Verification Agent
**Primary function**: Data validation and conflict resolution

**Responsibilities**:
- Cross-reference information from multiple sources
- Identify and resolve conflicts in evidence
- Verify practical constraints (hours, reservations, closures)
- Flag outdated or unreliable information
- Validate URL accessibility and accuracy

**Authority**:
- Request additional sources from Research Agent
- Mark evidence as "conflicting" or "uncertain"
- Escalate unresolvable conflicts for human review

**Constraints**:
- Cannot override source data without justification
- Must document all conflict resolution decisions
- Must preserve original conflicting evidence

### Scoring Agent
**Primary function**: Apply standardized scoring rubric

**Responsibilities**:
- Apply 50-point scoring system consistently (see Scoring System)
- Justify each score component with evidence
- Document scoring rationale in notes.md
- Update candidate scores in candidates.md
- Flag edge cases requiring human judgment

**Authority**:
- Assign scores 0-50 based on rubric
- Request additional evidence if insufficient for scoring
- Recommend exclusion for scores below thresholds

**Constraints**:
- Must follow rubric strictly (no subjective adjustments)
- Must justify every score with documented evidence
- Cannot score without minimum evidence requirements met

### Synthesis Agent
**Primary function**: Generate final recommendations

**Responsibilities**:
- Aggregate scored candidates into tiers (Top Picks, Backups)
- Create dining strategy across all recommendations
- Identify gaps in category or geographic coverage
- Generate practical guidance (reservation timing, budget allocation)
- Ensure progressive disclosure in documentation

**Authority**:
- Promote candidates to Top Picks (score ≥35)
- Designate Backups (score 30-34)
- Recommend additional research for underserved categories

**Constraints**:
- Cannot override scores from Scoring Agent
- Must respect score-based tier thresholds
- Must maintain geographic and category balance

### Human Review Agent
**Primary function**: Final approval and strategic decisions

**Responsibilities**:
- Review completion status per city
- Approve or reject recommendations
- Override automated decisions when justified
- Provide strategic direction for research priorities
- Validate compliance with project scope

**Authority**:
- Full override authority on any decision
- Set research priorities and focus areas
- Approve final completion status
- Request re-research or additional candidates

**Constraints**:
- Overrides must be documented with rationale
- Cannot modify historical research data (audit trail)

---

## Quick Start Guide

**For new agents entering this project:**

1. **Understand context**: Read [Project Scope](#project-scope) above
2. **Learn structure**: Review [Repository Structure](repo-structure.md)
3. **Follow workflow**: Execute [Research Workflow](workflow.md)
4. **Apply standards**: Use [Scoring + Decision Rules](scoring-and-decisions.md) and [Evidence Rules](evidence.md)
5. **Check progress**: Verify completion against [Completion + Maintenance](completion-and-maintenance.md)

---
