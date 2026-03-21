# Research Workflow

### Workflow Overview

**Six-stage process** from discovery to completion:

```
Stage 0: Initialize    → Create overview.md, set strategy
Stage 1: Discovery     → Collect candidates in candidates.md  
Stage 2: Evidence      → Gather detailed evidence in notes.md
Stage 3: Scoring       → Apply 50-point rubric
Stage 4: Triage        → Accept or reject candidates
Stage 5: Synthesis     → Generate top-places.md
Stage 6: Completion    → Verify and document completion
```

### Stage 0: Initialize City Research

**Objective**: Establish research foundation and strategy

**Actions**:
1. Set up city directory structure:
   - Create new directory: `gourmet/[cityname]/`
   - Copy templates from `templates/` directory (see <a>Template Files</a>)
   - This provides standardized starting structure for all five required files

2. Create `overview.md` (using template as starting point):
   - Travel dates and accommodation info
   - City-specific food highlights (e.g., 伊勢うどん, 松阪牛)
   - Research priorities (cuisine types, special dishes)
   - Progress checklist (initially empty)
   - Known constraints (business hours, holidays, transportation)

3. Gather initial candidate pool using web_search:
   - "best [city cuisine] restaurants [year]" (e.g., "best 伊勢うどん restaurants 2026")
   - "best [category] in [city]" (e.g., "best dessert cafes 志摩市")
   - "[specific dish] restaurants [city]" (e.g., "伊勢海老 restaurants Ise")
   - Focus on recent guides (2024-2026) and local sources

4. Batch similar searches (efficiency):
   - One search: main restaurants by cuisine type
   - One search: casual/local specialties
   - One search: desserts/cafes

**Success criteria**:
- City directory created with all template files
- overview.md created with complete sections
- 15-25 initial candidates identified
- Research priorities documented

**Time estimate**: 30 minutes

---

### Stage 1: Discovery and Candidate Collection

**Objective**: Build comprehensive candidate list with basic information

**Actions**:
1. Use `candidates.md` template (already copied in Stage 0) with structured table
2. Add all discovered candidates to table with required fields:
   - `name`: Restaurant/cafe name (prefer original language)
   - `category`: restaurant | cafe | dessert
   - `area`: Neighborhood or district
   - `type`: Cuisine or specialty (e.g., pasta, 伊勢うどん, gelato)
   - `google_maps_url`: Google Maps link (search link acceptable initially)
   - `status`: inbox (all start here)
   - `score`: - (empty initially)
   - `sources`: Brief list (e.g., "食べログ, Google Maps")
   - `notes`: One-line summary (expanded in notes.md later)

3. Prioritize candidates:
   - Mark 3-5 highest-priority candidates for immediate research
   - Consider: local specialties, high ratings, Michelin mentions, 百名店

**Preservation rules**:
- NEVER delete candidates from table
- Acceptable modifications only:
  - Merge duplicates
  - Correct errors
  - Note permanent closures
- Unwanted candidates: Set `status: rejected`, document in excluded.md

**Success criteria**:
- candidates.md table created and populated
- All candidates have `status` = `inbox`
- Top 3-5 priorities identified

**Time estimate**: 20-30 minutes

---

### Stage 2: Evidence Collection

**Objective**: Gather detailed, multi-source evidence for prioritized candidates

**Actions per candidate**:

1. **Search pattern** (efficient):
   - Single comprehensive query: "[Restaurant Name] [City] 食べログ 予約 口コミ"
   - Often returns Google Maps, 食べログ, and Google口コミ together
   - Extract systematically: ratings, review counts, prices, hours, pros/cons

2. **Create evidence section in notes.md**:
   ```markdown
   ### [Place Name]
   
   **Official**: [website URL or "no official website"]
   
   **Google Maps**: X.X/5 (Y reviews)
   
   **食べログ (Tabelog)**: X.X/5 (Y reviews)
   - [URL]
   - 夜予算/昼予算: [price range]
   - Area ranking: [e.g., "伊勢市 うどん部門 3位"]
   
   **Other ratings**: [Retty, Hot Pepper Gourmet, etc.]
   
   **Guide sources**:
   - [URLs with brief descriptions]
   
   **Google口コミ patterns**:
   - [Summarize recurring themes from Japanese reviews]
   
   **Recurring pros**:
   - [List from multiple sources]
   
   **Recurring cons**:
   - [List from multiple sources]
   
   **Practical**:
   - reservation requirement: [required|recommended|optional|none|unknown]
   - best visiting time: [specific times or "off-peak"]
   - closed days: [day of week or "irregular"]
   - queue: [expected wait time or "none"]
   ```

3. **Update candidates.md**:
   - Change `status` from `inbox` to `researching`
   - Add brief summary to `notes` column (keep concise)
   - Keep `score` empty until Stage 3

**Evidence rules** (see [Evidence Rules](evidence.md) for details):
- Minimum 4 sources required: Google Maps + 食べログ + Google口コミ + Guide
- Optional additional sources: Retty, Hot Pepper Gourmet, travel blogs
- Document conflicts clearly
- Mark uncertain information as `unknown`
- Include actual URLs (not placeholders)

**Tabelog ranking importance**:
- Always check score (0-5.0 scale) and area ranking
- 4.0+ = Exceptional (0.07% of restaurants)
- 3.5-3.9 = Excellent
- 3.0-3.4 = Good
- Search: "[City] [cuisine type] 食べログ ランキング"
- Note: Score-based ranking ≠ 百名店 (annual award)

**Success criteria**:
- Evidence section created in notes.md
- Minimum 4 sources collected with URLs
- Practical constraints documented
- Conflicts or uncertainties noted
- candidates.md updated with `status: researching`

**Time estimate**: 15-20 minutes per candidate

---

### Stage 3: Scoring

**Objective**: Apply standardized 50-point rubric consistently

**Actions**:

1. **Score each candidate** using rubric (see [Scoring System](scoring-and-decisions.md)):
   - Taste/Quality (0-10): Food quality, authenticity, execution
   - Value (0-10): Price vs quality, portion size
   - Convenience (0-10): Location, reservation ease, hours
   - Consistency (0-10): Reliability across reviews/time
   - Risk (0-10): Low risk=10; disappointment likelihood, queue uncertainty

2. **Document scoring in notes.md**:
   ```markdown
   **Score (50-point rubric)**:
   - Taste/Quality: X/10 [justification with evidence]
   - Value: X/10 [justification with evidence]
   - Convenience: X/10 [justification with evidence]
   - Consistency: X/10 [justification with evidence]
   - Risk: X/10 [justification with evidence]
   - **Total**: XX/50
   ```

3. **Update candidates.md**:
   - Enter total score in `score` column
   - Keep `status: researching` (changed in Stage 4)

**Scoring requirements**:
- Every score must be justified from documented evidence
- No subjective adjustments outside rubric
- Document edge cases or difficult judgment calls
- Maintain consistency across all candidates

**Success criteria**:
- All five components scored with justification
- Total score calculated
- Scoring rationale documented in notes.md
- Score added to candidates.md table

**Time estimate**: 5-10 minutes per candidate (after evidence collected)

---

### Stage 4: Triage and Exclusion

**Objective**: Decide candidate fate based on scores and evidence

**Decision rules**:

| Score Range | Status | Action |
|-------------|--------|--------|
| ≥35 | `shortlisted` or `top` | Promote to Top Pick |
| 30-34 | `shortlisted` | Consider as Backup |
| <30 | `rejected` | Exclude with documented reason |

**Hard exclusion triggers** (regardless of score):
- Multi-source evidence of tourist trap
- Repeated hygiene or safety concerns
- Severe service issues across multiple sources

**Exclusion process**:
1. Update candidates.md: Set `status: rejected`
2. Create/update excluded.md:
   - Add to appropriate category section
   - Document exclusion reason with evidence
   - Include source references
   - Note date of decision

3. Preserve candidates.md entry (do NOT delete)

**Exclusion categories** (for excluded.md):
- Low Score (<30)
- Tourist Trap (evidence-based)
- Safety/Hygiene Concerns
- Service Issues
- Practical Constraints (location, hours)
- Not Researched Further (deprioritized)

**Success criteria**:
- All researched candidates triaged
- No `status: researching` remains after triage
- Rejected candidates documented in excluded.md
- Exclusion reasons clearly stated with evidence

**Time estimate**: 5 minutes per candidate

---

### Stage 5: Synthesis and Final Recommendations

**Objective**: Generate actionable recommendation list with strategy

**Actions**:

1. **Create/update top-places.md** with sections:

   **Section 1: Top Picks** (score ≥35)
   - List in descending score order
   - Include for each: name, type, area, score, Google Maps link, Tabelog link, one-line justification, constraints

   **Section 2: Backups** (score 30-34)
   - List in descending score order
   - Same information format as Top Picks

   **Section 3: Dining Strategy**
   - Time planning (lunch/dinner hours, local customs)
   - Reservation strategy (which need booking, how far ahead)
   - Budget allocation (price ranges by category)
   - Transportation (how to reach areas from hotel)

   **Section 4: To-Do** (trip execution checklist)
   - Reservation tasks
   - Information confirmation
   - Day-of preparation
   - Note: This is NOT research completion tracking

2. **Balance recommendations**:
   - Target: 5-10 Top Picks per city
   - Target: 3-5 Backups per city
   - Ensure category balance (casual, special occasion, dessert)
   - Ensure geographic spread across city

3. **Link requirements**:
   - Google Maps: Valid URL (direct link or search link)
   - Tabelog: Valid URL or "no tabelog listing"
   - Test all links before finalization

**Success criteria**:
- top-places.md created with all four sections
- Top Picks and Backups sorted by score
- All required information included per place
- All links valid and tested
- Dining Strategy practical and complete
- Balance across categories and geography

**Time estimate**: 30-45 minutes

---

### Stage 6: Completion and Documentation

**Objective**: Verify completion and update tracking systems

**Actions**:

1. **Verify completion criteria** (see [Completion Criteria](completion-and-maintenance.md)):
   - ✅ All candidates triaged (no `inbox` or `researching` statuses in candidates.md)
   - ✅ No pending decisions in excluded.md
   - ✅ top-places.md finalized with all sections
   - ✅ overview.md checklist fully marked `[x]`

2. **Run verification commands** (from PROGRESS.md):
   ```bash
   rg "\\|\\s*(inbox|researching)\\s*\\|" gourmet/[city]/candidates.md  # Should return nothing
   rg -i "TODO|pending" gourmet/[city]/excluded.md  # Should return nothing
   grep -E "^## (Top Picks|Backups|Dining Strategy|To-Do)" gourmet/[city]/top-places.md  # Should find all 4
   grep "\- \[ \]" gourmet/[city]/overview.md  # Should return nothing
   ```

3. **Update progress tracking**:
   - Update PROGRESS.md status (⏳ → 📝 → 🔄 → ✅)
   - Sync README.md progress table
   - Update recommendation counts
   - Add completion notes

4. **Document improvements** (if applicable):
   - Add efficiency tips to this document
   - Note common patterns discovered
   - Update workflow if process improved

**Completion status definitions**:
- ⏳ Not Started: No files created yet
- 📝 In Progress: Files exist, research ongoing
- 🔄 Needs Finalization: Research done, needs review/finalization
- ✅ Completed: All criteria met

**Critical distinction - Two checklists**:

| Checklist | Purpose | Location | Completion Rule |
|-----------|---------|----------|----------------|
| **Research Completion** | Track research progress | overview.md | MUST be 100% `[x]` for ✅ |
| **Trip Execution** | Track trip planning | top-places.md To-Do | MAY have `[ ]` when research complete |

**Success criteria**:
- All verification commands pass
- PROGRESS.md and README.md updated
- Status set to ✅ only if all criteria met

**Time estimate**: 10-15 minutes

---
