# Repository Structure

### File Organization

Each city under `gourmet/` directory contains exactly five files following the progressive disclosure principle:

```
gourmet/
  [city]/
    overview.md    - City context, strategy, research progress
    candidates.md  - All candidates in structured table format
    notes.md       - Detailed evidence and scoring rationale  
    excluded.md    - Rejected candidates with exclusion reasons
    top-places.md  - Final recommendations and dining strategy
```

**City directories** (use romanized names):
- `iseshi` (伊勢市)
- `matsusakashi` (松阪市)
- `tobashi` (鳥羽市)
- `shimashi` (志摩市)

### File Purposes and Reading Sequence

#### 1. overview.md
**Purpose**: Quick orientation and research strategy  
**Audience**: New researchers, project managers  
**Reading time**: 5 minutes  
**Contains**:
- Travel dates and accommodation info
- City-specific food highlights (e.g., 伊勢うどん, 松阪牛)
- Research strategy and priorities
- Progress checklist (research completion tracking)
- Important constraints (holidays, hours, transportation)

**Update trigger**: Project start, strategy changes, completion milestones

#### 2. candidates.md
**Purpose**: Complete candidate inventory with status and scores  
**Audience**: Researchers scanning all options, comparing scores  
**Reading time**: 10 minutes (table scan)  
**Contains**:
- Structured table with all candidates
- Required columns: name, category, area, type, google_maps_url, status, score, sources, notes
- Brief summary only (details in notes.md)

**Update trigger**: New candidate discovered, status change, score assigned

**Preservation rule**: NEVER delete entries unless duplicate, incorrect, or permanently closed. Use `status: rejected` and document in excluded.md instead.

#### 3. notes.md
**Purpose**: Detailed evidence trail and scoring justification  
**Audience**: Deep researchers, auditors, score validators  
**Reading time**: Variable (by section)  
**Contains**:
- Evidence sections per candidate (sources, ratings, reviews)
- Scoring breakdown with rationale
- Practical information (reservations, queues, hours)
- Source URLs with access dates

**Update trigger**: New evidence collected, score calculated, practical info discovered

#### 4. excluded.md
**Purpose**: Audit trail for rejected candidates  
**Audience**: Auditors, researchers avoiding duplicate work  
**Reading time**: 5-10 minutes  
**Contains**:
- Categorized exclusion reasons
- Brief explanation per excluded place
- Source references supporting exclusion
- Date of exclusion decision

**Update trigger**: Candidate rejected, exclusion reason documented

#### 5. top-places.md
**Purpose**: Actionable final recommendations  
**Audience**: Travelers making reservations, day planners  
**Reading time**: 10-15 minutes  
**Contains**:
- Top Picks (score ≥35) in descending score order
- Backups (score 30-34) in descending score order
- Dining Strategy (timing, reservations, budget, transportation)
- To-Do (trip execution checklist - NOT research completion)

**Update trigger**: Candidate promoted to Top Pick/Backup, strategy finalized, completion

### Progressive Disclosure Principle

**Information flow**: Each file serves a distinct abstraction level.

**Traveler journey**:
```
README.md → [select city] → top-places.md → Make reservations
```

**Quick research scan**:
```
overview.md → candidates.md (table scan) → Identify priorities
```

**Deep evidence review**:
```
candidates.md → notes.md → Validate scores and sources
```

**Exclusion investigation**:
```
excluded.md → [reason] → (Optional) notes.md for details
```

**Key principles**:
- Start with answers, then provide justification
- Link between files (don't duplicate content)
- Keep summary files concise (tables, bullet points)
- Bury detailed evidence in notes.md
- Respect reader's journey and time

**Anti-patterns** (avoid these):
- ❌ Mixing summary table with detailed evidence in candidates.md
- ❌ Duplicating scores across multiple files
- ❌ Hiding final picks deep in notes.md
- ❌ Deleting rejected candidates instead of documenting
- ❌ Creating files outside the five-file structure

### Template Files

**Location**: `templates/` directory at repository root

**Purpose**: Provide standardized starting points for creating city-specific research documentation.

**Available Templates**:

The `templates/` directory contains markdown templates for all five required files:

1. **overview.md** - City food strategy and progress tracker
   - Travel information template (dates, accommodation, attractions)
   - Food highlights section (local dishes and specialties)
   - Research strategy template (priorities and constraints)
   - Progress checklist template (research completion tracking)

2. **candidates.md** - Candidate restaurants table
   - Pre-structured table with all required columns
   - Status value examples (inbox | researching | shortlisted | rejected | top)
   - Placeholder rows showing expected format

3. **notes.md** - Detailed evidence and research notes
   - Evidence collection template with all required sources
   - 50-point scoring rubric breakdown structure
   - Practical information fields (reservation, hours, closed days)
   - Review patterns and pros/cons sections

4. **top-places.md** - Final recommendation list
   - Top Picks section template (35+ points)
   - Backups section template (30-34 points)
   - Researching section template
   - Dining Strategy template (time planning, reservations, budget, access)
   - To-Do section template (trip execution checklist)

5. **excluded.md** - Excluded places documentation
   - Lower priority candidates section
   - Not researched further section
   - Exclusion reason categories (Tourist Trap, Low Score, Service Issues, etc.)

**Usage**:

When starting research for a new city:
1. Create new directory: `gourmet/[cityname]/`
2. Copy all 5 templates from `templates/` to the new city directory
3. Start with `overview.md` to establish context and strategy
4. Replace placeholder text (marked with `[brackets]`) with actual content
5. Follow the six-stage research workflow (see below)

**Template Reference**: See `templates/README.md` for detailed usage instructions and examples.

---
