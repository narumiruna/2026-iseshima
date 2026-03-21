# Completion, Maintenance, and Standards

### Definition of Done

**A city is marked "✅ Completed" when ALL of the following are met:**

1. **All candidates triaged**:
   - No `inbox` or `researching` statuses in candidates.md
   - Every candidate has either a score or rejection reason

2. **No pending decisions**:
   - excluded.md has no "TODO" or "pending review" items
   - All exclusion reasons documented

3. **top-places.md finalized**:
   - Top Picks section complete (score ≥35)
   - Backups section complete (score 30-34)
   - Dining Strategy section complete
   - To-Do section present (trip execution, not research)

4. **overview.md checklist complete**:
   - Research completion checklist fully marked `[x]`
   - Note: This is different from To-Do in top-places.md

### Checklist Distinction

**Two separate checklists with different purposes:**

| Checklist | Purpose | Location | Completion Rule |
|-----------|---------|----------|----------------|
| **Research Completion** | Track research progress | overview.md | MUST be 100% `[x]` for ✅ |
| **Trip Execution** | Track trip planning tasks | top-places.md To-Do | MAY have `[ ]` when research complete |

**Critical**: Only Research Completion checklist determines "✅ Completed" status.

### Verification Commands

**Run these commands to verify completion**:

```bash
# Should return nothing (no inbox or researching entries)
rg "\\|\\s*(inbox|researching)\\s*\\|" gourmet/[city]/candidates.md

# Should return nothing (no pending decisions)
rg -i "TODO|pending" gourmet/[city]/excluded.md

# Should find all 4 sections
grep -E "^## (Top Picks|Backups|Dining Strategy|To-Do)" gourmet/[city]/top-places.md

# Should return nothing (no unchecked research items)
grep "\- \[ \]" gourmet/[city]/overview.md
```

**Expected results for completed city**:
- No inbox entries found ✓
- No pending decisions found ✓
- All 4 sections found in top-places.md ✓
- No unchecked items in overview.md ✓

### Status Progression

**Status indicators**:
- ⏳ **Not Started**: No files created yet
- 📝 **In Progress**: Files exist, research ongoing, some candidates still inbox
- 🔄 **Needs Finalization**: Research done, all triaged, needs review/top-places.md completion
- ✅ **Completed**: All verification commands pass

**Progression rules**:
- Only advance status when criteria met
- Can regress if new candidates added or issues found
- Document status changes in PROGRESS.md

---

## Auditability and Maintenance

### Audit Trail Requirements

**Every research action must leave a trace**:

1. **Candidate addition**:
   - Entry in candidates.md with timestamp (in commit)
   - Initial `status` = `inbox`

2. **Research conducted**:
   - Evidence section in notes.md
   - Source URLs with access dates
   - `status` updated to `researching`

3. **Scoring**:
   - Score breakdown in notes.md
   - Total score in candidates.md
   - Justification for each component

4. **Triage decision**:
   - `status` updated to `shortlisted`, `top`, or `rejected`
   - If rejected: entry in excluded.md with reason
   - If promoted: entry in top-places.md

5. **Changes after initial decision**:
   - Document reason for change
   - Update all affected files
   - Note in commit message

**Preservation rules**:
- ❌ NEVER delete candidates from candidates.md
- ❌ NEVER remove evidence from notes.md
- ❌ NEVER hide exclusion reasons
- ✅ Mark as rejected and document reason instead
- ✅ Preserve historical scores if recalculated (note change)

### Maintenance Procedures

**Regular maintenance tasks**:

1. **Weekly** (during active research):
   - Update PROGRESS.md with current status
   - Sync README.md progress table
   - Review pending inbox items

2. **Per city completion**:
   - Run verification commands
   - Update status to ✅ only if all criteria met
   - Document completion date

3. **Pre-trip** (closer to 2026-09-25):
   - Verify restaurant hours haven't changed
   - Confirm seasonal availability (岩牡蠣, etc.)
   - Update any closed/relocated establishments
   - Mark outdated information

**Version control discipline**:
- Commit after each meaningful unit of work
- Use descriptive commit messages
- Reference issue/task numbers if applicable
- Keep commits focused (one logical change)

### Quality Assurance

**Self-review checklist before marking complete**:

- [ ] All candidates have scores or exclusion reasons
- [ ] Every score has documented justification
- [ ] All sources have working URLs
- [ ] No unsupported claims or fabricated data
- [ ] Conflicts documented and resolved
- [ ] Uncertainty explicitly marked
- [ ] top-places.md has all required sections
- [ ] Dining Strategy is practical and complete
- [ ] All verification commands pass
- [ ] PROGRESS.md and README.md updated

**Peer review focus areas**:
- Score consistency across candidates
- Evidence quality and sufficiency
- Exclusion reason clarity
- Missing categories or geographic gaps
- Practical constraint accuracy

### Continuous Improvement

**Learning capture**:
- Document efficiency improvements in this file
- Note common research patterns
- Record pitfalls to avoid
- Update workflow if process improved

**Feedback incorporation**:
- Track human override patterns
- Adjust scoring if systematic bias found
- Refine rubric if consistently ambiguous
- Update source requirements if gaps identified

---

## Process Improvements (Lessons Learned)

### Efficient Research Tactics

1. **Start with overview.md**: Provides context for all subsequent work
2. **Batch web searches**: Gather 20+ candidates in 3-4 searches
3. **Prioritize ruthlessly**: Research top 3-5 first, expand if needed
4. **Use comprehensive queries**: "[Place] [City] 食べログ 予約 口コミ" yields most info
5. **Document as you go**: Incremental updates prevent information loss

**Time estimates** (for planning):
- Overview + candidate collection: 30 minutes
- Detailed research per place: 15-20 minutes
- Scoring per place: 5-10 minutes
- Synthesis (top-places.md): 30-45 minutes
- **Total per city**: 4-6 hours for 10 candidates

### Pattern Recognition

**Tourist trap signals**:
- Only located near major attractions
- Overly generic positive reviews
- No mention of Japanese locals in reviews
- Price significantly higher than similar places

**Authentic signals**:
- High Tabelog ratings from verified locals
- Mixed tourist/local clientele
- Family-owned, long history
- Specific dishes praised repeatedly
- Reservation difficulty (genuine popularity)

**Red flags**:
- Inconsistent service complaints (>20% of reviews)
- Hygiene issues mentioned multiple times
- Closed unexpectedly/irregular hours
- Conflicting information across sources

**Green flags**:
- Michelin recognition or 百名店 award
- Tabelog 3.8+ with 500+ reviews
- Specific technique or ingredient praised
- Consistent experience across years

### Common Pitfalls

**Avoid these mistakes**:

1. **Research sprawl**: Don't try to research everything at once
2. **Skipping overview.md**: Context is essential for prioritization
3. **Single-source reliance**: Always cross-reference 4+ sources
4. **Ignoring practical constraints**: Reservation policies, closed days, queues matter
5. **Score inflation**: Not everything can be 40+; 35-38 is still excellent
6. **Geographic clustering**: Ensure coverage across different neighborhoods
7. **Category imbalance**: Need mix of casual, special occasion, dessert
8. **Deleting instead of documenting**: Preserve audit trail via excluded.md

### Research Quality Checklist

**Before finalizing any candidate, verify**:

- ✓ Exact rating and review count on Google Maps and Tabelog
- ✓ Patterns from Google口コミ (Japanese reviews)
- ✓ Signature dishes identified
- ✓ Reservation requirements clear
- ✓ Closed days confirmed
- ✓ Expected wait time documented (if no reservation)
- ✓ Price range from Tabelog (夜予算/昼予算)
- ✓ Most common complaints noted
- ✓ Tourist vs local clientele assessed
- ✓ Seasonal considerations documented (for September-October trip)

---

## Documentation Standards

### Language Rules

**Primary language: English**
- All operational procedures
- All rules and guidelines
- All workflow descriptions
- All rubric definitions
- All decision criteria

**Japanese: Supplementary only**
- Short clarifications (e.g., 食べログ = Tabelog)
- Restaurant/dish names (original language)
- Direct quotes from Japanese sources
- Brief contextual notes

**Prohibited**:
- ❌ Duplicating content in both languages
- ❌ Full paragraphs in Japanese when English suffices
- ❌ Using Japanese when English technical term exists

### File Naming Conventions

**Repository-level files**:
- `AGENTS.md`: This file (English)
- `PROGRESS.md`: Research progress tracker (English)
- `README.md`: Project overview (Japanese - traveler-facing)

**City directory names**:
- Use romanized names: `iseshi`, `matsusakashi`, `tobashi`, `shimashi`
- Lowercase, no spaces, no special characters

**City file names** (standardized, no variation):
- `overview.md`
- `candidates.md`
- `notes.md`
- `excluded.md`
- `top-places.md`

### Date and Data Formats

**Dates**: ISO 8601 format (YYYY-MM-DD)
- Example: 2026-09-25

**Unknown information**: Use `unknown` (not "-", "TBD", "N/A", etc.)

**Scores**: Always show as fraction
- Example: 42/50 (not "42" alone)

**URLs**: Full URLs, not shorteners
- Example: `https://tabelog.com/mie/...` (not `bit.ly/...`)

### Markdown Standards

**Headers**: Use ATX style (`#`, `##`, etc.)

**Lists**: 
- Unordered: `-` (not `*` or `+`)
- Ordered: `1.`, `2.`, etc.

**Emphasis**:
- Bold: `**text**`
- Italic: `*text*`
- Code: `` `text` ``

**Links**: Use reference or inline, not automatic
- Inline: `[text](url)`
- Reference: `[text][ref]` with `[ref]: url` below

**Tables**: Use standard Markdown tables with alignment

---

## Appendix: Quick Reference

### Research Workflow Checklist

- [ ] **Stage 0: Initialize**
  - [ ] Create city directory and copy templates from templates/
  - [ ] Create overview.md
  - [ ] Conduct initial web searches
  - [ ] Gather 15-25 candidates
  
- [ ] **Stage 1: Discovery**
  - [ ] Use candidates.md template
  - [ ] Add all candidates with `status` = `inbox`
  - [ ] Prioritize top 3-5

- [ ] **Stage 2: Evidence**
  - [ ] Research prioritized candidates
  - [ ] Create notes.md evidence sections
  - [ ] Collect minimum 4 sources per candidate
  - [ ] Update candidates.md status

- [ ] **Stage 3: Scoring**
  - [ ] Apply 50-point rubric
  - [ ] Document scoring in notes.md
  - [ ] Update candidates.md scores

- [ ] **Stage 4: Triage**
  - [ ] Promote candidates ≥30 score
  - [ ] Reject candidates <30 or with red flags
  - [ ] Document exclusions in excluded.md

- [ ] **Stage 5: Synthesis**
  - [ ] Create top-places.md
  - [ ] Organize Top Picks and Backups
  - [ ] Write Dining Strategy
  - [ ] Add To-Do (trip execution)

- [ ] **Stage 6: Completion**
  - [ ] Run verification commands
  - [ ] Update PROGRESS.md
  - [ ] Sync README.md
  - [ ] Mark complete (✅) only if all criteria met

### Essential URLs

- **PROGRESS.md**: Detailed completion criteria and verification commands
- **README.md**: Traveler-facing project overview (Japanese)
- **templates/**: Template files for creating new city research documentation
- **City directories**: `gourmet/[city]/`

### Key Principles

1. **Evidence-based**: Every decision backed by documented sources
2. **Traceable**: Full audit trail preserved
3. **Comparable**: Standardized scoring across all candidates
4. **Actionable**: Clear recommendations with practical constraints
5. **Maintainable**: Consistent structure and documentation
6. **Progressive disclosure**: Information layered by abstraction level

---

*Document version: 2.0*  
*Last updated: 2026-01-12*  
*Purpose: Single source of truth for gourmet research operations*
