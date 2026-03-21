# Templates Directory

This directory contains markdown templates for creating city-specific gourmet research documentation.

## Available Templates

### 1. overview.md
City food strategy and progress tracker.

**Usage**: Copy this template when starting research for a new city. Replace `[City Name]` and fill in the sections with city-specific information.

**Sections**:
- Travel information (dates, accommodation, attractions)
- Food highlights (local dishes and specialties)
- Research strategy (priorities and constraints)
- Progress checklist (research completion tracking)

### 2. candidates.md
Candidate restaurants table and summary.

**Usage**: Use this template to maintain a structured list of all candidate restaurants. Add rows to the table as you discover new places.

**Key Features**:
- Structured table with required columns: name, category, area, type, google_maps_url, status, score, sources, notes
- Status values: inbox | researching | shortlisted | rejected | top

### 3. notes.md
Detailed evidence and research notes.

**Usage**: Document comprehensive research findings for each candidate restaurant. Include all sources and rating details.

**Key Features**:
- Evidence template with all required sources (Google Maps, Tabelog, etc.)
- 50-point scoring rubric breakdown
- Practical information (reservation, hours, closed days)
- Review patterns and pros/cons

### 4. top-places.md
Final recommendation list.

**Usage**: Compile your top recommendations after completing research. Organize by score ranges.

**Sections**:
- Top Picks (35+ points) - highly recommended places
- Backups (30-34 points) - good alternatives
- Researching - places still under investigation
- Dining Strategy - time planning, reservations, budget, access
- To-Do - trip execution checklist

### 5. excluded.md
Excluded places with documented reasons.

**Usage**: Record all places that were considered but excluded, with clear reasons. This prevents duplicate research and maintains audit trail.

**Sections**:
- Lower priority candidates (preserved for future research)
- Not researched further
- Exclusion reason categories (Tourist Trap, Low Score, Service Issues, etc.)

## How to Use

1. **For a new city**: 
   - Create a new directory under `gourmet/[cityname]/`
   - Copy all 5 templates to the new directory
   - Start with `overview.md` to establish context and strategy

2. **Follow the workflow**:
   - Start with overview.md (context and strategy)
   - Add candidates to candidates.md
   - Research top candidates and document in notes.md
   - Update scores in candidates.md based on research
   - Move rejected candidates to excluded.md with reasons
   - Finalize top-places.md with recommendations
   - Mark progress in overview.md checklist

3. **Progressive Disclosure**:
   - Keep each file focused on its purpose
   - overview.md = quick orientation
   - top-places.md = actionable recommendations
   - candidates.md = complete candidate list
   - notes.md = detailed evidence
   - excluded.md = audit trail

## Documentation Standards

- **Language**: Follow `AGENTS.md` / `references/overview.md` (English for operational rules; Japanese is OK for venue names and brief context)
- **Dates**: ISO format (YYYY-MM-DD)
- **Unknown information**: Use `unknown` rather than leaving blank
- **Sources**: Always include actual URLs
- **Scores**: Use the 50-point rubric consistently
- **Links**: Must be valid Google Maps and Tabelog URLs

## Reference

See `AGENTS.md` for complete workflow documentation and research standards.
