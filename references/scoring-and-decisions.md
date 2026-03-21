# Scoring System and Decision Rules

### Rubric Definition

**Total: 50 points** across five equally-weighted categories.

#### 1. Taste / Quality (0-10 points)

**Intent**: Measure food quality, authenticity, and execution.

**Scoring guidelines**:
- **9-10**: Exceptional. Michelin-starred, 百名店, or Tabelog 4.0+. Consistently praised for outstanding flavors
- **7-8**: Excellent. Tabelog 3.5-3.9, strong reviews, specific dishes highly praised
- **5-6**: Good. Tabelog 3.0-3.4, generally positive, solid execution
- **3-4**: Acceptable. Mixed reviews, some quality concerns
- **0-2**: Poor. Multiple complaints, quality issues

**Evidence required**:
- Tabelog score
- Google Maps rating
- Specific dish mentions from reviews
- Guide recognition (Michelin, 百名店) if any

**Example scoring**:
```
Taste/Quality: 10/10
Evidence: Tabelog 4.00 (top 0.07%), 百名店 3 consecutive years,
reviews consistently praise 備長炭焼き technique
```

#### 2. Value (0-10 points)

**Intent**: Measure price-to-quality ratio and portion adequacy.

**Scoring guidelines**:
- **9-10**: Outstanding value. High quality at low/moderate price. Generous portions
- **7-8**: Good value. Fair pricing for quality delivered
- **5-6**: Acceptable. Slightly expensive but justified by quality
- **3-4**: Poor value. Overpriced for quality
- **0-2**: Very poor value. Significantly overpriced

**Evidence required**:
- Price range from Tabelog (夜予算/昼予算)
- Google Maps price level (¥/¥¥/¥¥¥/¥¥¥¥)
- Review mentions of portions or value
- Comparison to similar establishments

**Price bands** (rough guide for Japanese dining):
- Budget: <¥1,000
- Moderate: ¥1,000-3,000
- Upscale: ¥3,000-10,000
- Fine dining: ¥10,000+

**Example scoring**:
```
Value: 7/10
Evidence: ¥15,000-20,000 per person (fine dining), but exceptional
quality justifies price per multiple reviews
```

#### 3. Convenience (0-10 points)

**Intent**: Measure ease of access, reservation process, and operating hours.

**Scoring guidelines**:
- **9-10**: Highly convenient. Central location, walk-in friendly, long hours, near hotel
- **7-8**: Convenient. Accessible location, easy reservation, reasonable hours
- **5-6**: Moderate. Requires some planning, reservation needed, standard hours
- **3-4**: Inconvenient. Difficult access, complex reservation, limited hours
- **0-2**: Very inconvenient. Remote location, strict requirements, very limited hours

**Factors to consider**:
- Distance from hotel or major sites
- Reservation requirement (none/optional/recommended/required)
- Reservation difficulty (easy/moderate/difficult)
- Operating hours (flexible vs restrictive)
- Transportation access

**Example scoring**:
```
Convenience: 6/10
Evidence: 完全予約制 (reservation required), 18:00 synchronized start
(inflexible), 遅刻厳禁 (no-late policy), but walkable from station
```

#### 4. Consistency (0-10 points)

**Intent**: Measure reliability and stability over time.

**Scoring guidelines**:
- **9-10**: Highly consistent. Long-established, stable high ratings, minimal complaints
- **7-8**: Consistent. Reliable quality, few negative reviews
- **5-6**: Moderately consistent. Some variation noted, generally reliable
- **3-4**: Inconsistent. Mixed experiences, hit-or-miss quality
- **0-2**: Unreliable. Frequent complaints, significant variation

**Evidence required**:
- Rating stability over time (if data available)
- Review count (more reviews = more reliable signal)
- Establishment age/history
- Pattern of complaints (recurring vs isolated)
- 百名店 streak (indicates sustained quality)

**Example scoring**:
```
Consistency: 10/10
Evidence: 百名店 3 consecutive years, Tabelog score stable at 4.0,
4000+ reviews maintain high rating, few service complaints
```

#### 5. Risk (0-10 points)

**Intent**: Measure likelihood of disappointment or problems. **Higher score = lower risk.**

**Scoring guidelines**:
- **9-10**: Very low risk. Reliable, predictable, few ways to go wrong
- **7-8**: Low risk. Generally safe choice, minor uncertainties
- **5-6**: Moderate risk. Some factors that could lead to disappointment
- **3-4**: Higher risk. Significant potential issues
- **0-2**: High risk. Multiple red flags or major concerns

**Risk factors** (reduce score):
- Long unpredictable queues
- Strict cancellation policies
- Service quality complaints
- Tourist trap signals
- Seasonal closures during trip
- Unclear reservation process
- Location difficult to find

**Risk mitigators** (increase score):
- Confirmed reservation possible
- Consistent positive reviews
- Clear operating information
- Backup options nearby

**Example scoring**:
```
Risk: 9/10
Evidence: Reservation required (eliminates queue uncertainty),
strict cancellation policy but ensures quality control,
consistent reviews indicate reliable experience
```

### Tier Definitions

**Based on total score (0-50):**

| Score Range | Tier | Meaning | Action |
|-------------|------|---------|--------|
| 40-50 | Top Pick | Exceptional, highly recommended | Promote to Top Picks, prioritize |
| 35-39 | Top Pick | Very good, solid choice | Promote to Top Picks |
| 30-34 | Backup | Good, acceptable alternative | Promote to Backups |
| 25-29 | Marginal | Borderline, needs justification | Consider rejection |
| 0-24 | Reject | Below standard | Reject with documentation |

**Tier targets per city**:
- **Top Picks**: 5-10 candidates (quality over quantity)
- **Backups**: 3-5 candidates (alternatives if Top Picks unavailable)
- **Total recommendations**: 8-15 per city (avoid overwhelming)

### Scoring Consistency Rules

**To maintain consistency across candidates**:

1. **Score relative to category**:
   - Compare restaurants to restaurants, cafes to cafes
   - Don't penalize casual places for not being fine dining
   - Adjust expectations by price band

2. **Document edge cases**:
   - Note when scoring difficult or borderline
   - Flag for human review if uncertain
   - Explain unusual scores in rationale

3. **Avoid score inflation**:
   - Not every place can be 40+
   - Reserve 9-10 components for truly exceptional
   - A score of 35-38 is still very good

4. **Justify every component**:
   - Every 0-10 score must cite specific evidence
   - No scores without documented rationale
   - Refer to evidence section in notes.md

---

## Decision Rules

### Promotion Thresholds

**Automatic promotion**:
- Score ≥35: Promote to Top Pick
- Score 30-34: Promote to Backup

**Requires justification**:
- Score <30 but promoting anyway (explain why)
- Score ≥35 but not promoting (explain why)

### Exclusion Thresholds

**Automatic exclusion**:
- Score <25: Below quality standard
- Hard exclusion triggers (see below)

**Requires consideration**:
- Score 25-29: Marginal, needs discussion
- Score 30-34 with red flags: May exclude despite score

**Hard exclusion triggers** (override score):
1. **Tourist trap**: Multi-source evidence of targeting tourists with inflated prices/quality
2. **Safety/hygiene**: Multiple complaints about food safety or cleanliness
3. **Service**: Consistent severe service issues (rude staff, frequent errors)
4. **Practical**: Location truly inaccessible or always closed during trip dates

### Human Override Conditions

**Human reviewer may override automated decisions when**:

1. **Strategic considerations**:
   - Need geographic coverage in underserved area
   - Need category diversity (e.g., only dessert place in city)
   - Historical/cultural significance beyond food quality

2. **Context not captured in rubric**:
   - Unique experience worth the risk/inconvenience
   - Once-in-lifetime opportunity (e.g., seasonal specialty)
   - Strong personal recommendation from trusted source

3. **Edge cases**:
   - Conflicting evidence makes scoring difficult
   - New establishment with limited reviews but strong promise
   - Legendary place with declining quality (historical value debate)

**Override documentation requirement**:
```markdown
**Human override**: [Decision made]
**Reason**: [Detailed justification]
**Date**: YYYY-MM-DD
**Reviewer**: [Name/ID]
```

### Documentation Requirements

**Every decision must be documented**:

1. **Candidates promoted to Top Pick/Backup**:
   - Score with breakdown
   - Evidence summary
   - Practical constraints
   - Justification if borderline

2. **Candidates rejected**:
   - Score (if calculated)
   - Exclusion reason category
   - Supporting evidence
   - Entry in excluded.md

3. **Candidates deprioritized** (not researched):
   - Reason for deprioritization
   - Entry in excluded.md under "Not Researched Further"
   - Brief explanation (e.g., "lower priority", "enough alternatives")

4. **Human overrides**:
   - Original score/decision
   - Override decision
   - Detailed justification
   - Date and reviewer

**Traceability requirement**: Every decision must be traceable back to documented evidence or explicit human judgment.

---
