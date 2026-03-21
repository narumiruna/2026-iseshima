# Evidence Rules

### Minimum Source Requirements

**Every researched candidate must have evidence from at least 4 independent sources:**

1. **Google Maps** (required)
   - Overall rating (X.X/5)
   - Review count
   - Recurring themes from reviews (pros/cons)

2. **食べログ (Tabelog)** (required)
   - Score (0-5.0 scale)
   - Review count
   - Price range (夜予算/昼予算)
   - Area ranking if available

3. **Google口コミ** (required)
   - Japanese-language reviews
   - Local reviewer perspectives
   - Recurring patterns across multiple reviews

4. **Food/Travel Guide** (required - at least one)
   - Michelin Guide
   - Local Japanese food blogs
   - TimeOut Tokyo, VOKKA, Hitosara
   - 百名店 (annual award)
   - Regional tourism sites

**Optional additional sources** (strengthen evidence):
- Retty (レッティ)
- Hot Pepper Gourmet (ホットペッパーグルメ)
- Chinese-language travel blogs (PTT, Dcard) - cite clearly
- Social media aggregates (TikTok, Instagram) - verify authenticity

### Source Quality Standards

**URL requirements**:
- Include actual URLs (not "see website")
- Verify links are accessible
- Note if behind paywall or login
- Document access date for time-sensitive info

**Citation format**:
```markdown
**Source name**: [Brief finding]
- URL: [actual link]
- Accessed: YYYY-MM-DD
```

**Source reliability assessment**:
- Prefer sources with large review counts (100+ reviews)
- Cross-reference claims across 3+ sources
- Flag sources that are outliers
- Note if source is outdated (>2 years old)

### Conflict Handling

**When sources disagree**:

1. **Document the conflict explicitly**:
   ```markdown
   **Conflict noted**: 
   - Source A claims: [X]
   - Source B claims: [Y]
   - Source C claims: [X]
   ```

2. **Resolution strategy**:
   - Majority consensus: Use most common finding
   - Recency: Prefer more recent information
   - Detail: Prefer source with more specific detail
   - Scale: Weight by review count/authority

3. **When unresolvable**:
   - Mark as `unknown` or `conflicting`
   - Document both sides
   - Flag for human review
   - Note in scoring rationale

**Common conflict types**:
- Hours of operation (check official website first)
- Reservation requirements (call restaurant if critical)
- Price ranges (use most recent, note inflation)
- Service quality (look for trend over time)

### Uncertainty Documentation

**Mark information as uncertain when**:
- Only one source provides the information
- Sources conflict without clear resolution
- Information is outdated (>1 year for restaurants)
- Seasonal variation possible

**Uncertainty labels**:
- `unknown`: No reliable source found
- `conflicting`: Sources disagree, no clear resolution
- `unverified`: Single source only, not confirmed
- `seasonal`: May vary by season (note which season)
- `outdated`: Based on old information (note date)

**Example**:
```markdown
**Practical**:
- reservation requirement: required (per Tabelog, unverified on official site)
- best visiting time: conflicting (some say lunch, some say dinner)
- closed days: unknown (no clear information)
- queue: 30-60 min (based on 2024 reviews, may be outdated)
```

### Seasonality Considerations

**Seasonal factors to document**:

1. **Ingredients** (especially seafood):
   - 伊勢海老 (spiny lobster): Peak season October-April
   - 岩牡蠣 (rock oysters): Peak season June-August
   - 的矢かき (Matoya oysters): Year-round but best winter
   - Note: Trip is late September, transitioning seasons

2. **Tourist volume**:
   - Peak season (Golden Week, summer, New Year)
   - Off-peak (January-February, September)
   - Trip timing: Late September = transitional (moderate crowds)

3. **Operating hours/closures**:
   - Summer-only items (赤福氷)
   - Winter-only items (赤福ぜんざい)
   - Monthly specials (朔日餅 - 1st of month only)
   - Irregular closures for holidays

**Documentation requirement**:
```markdown
**Seasonal notes**:
- Best visit season: [season] because [reason]
- Trip timing (Sept 25-Oct 4): [適切/注意が必要/オフシーズン]
- Seasonal considerations: [specific factors]
```

### Data Fabrication Prevention

**Strictly prohibited**:
- ❌ Inventing ratings or review counts
- ❌ Inferring facts not stated in sources
- ❌ Mixing personal opinion with source data
- ❌ Claiming consensus without evidence

**Acceptable synthesis**:
- ✅ Summarizing patterns across multiple reviews
- ✅ Noting common themes (with citation)
- ✅ Calculating averages from multiple sources (show calc)
- ✅ Drawing logical conclusions (clearly marked as inference)

**Boundary examples**:
- ❌ "This restaurant is popular" (subjective without evidence)
- ✅ "High review volume (2000+ on Tabelog) suggests popularity"
- ❌ "Service is excellent" (opinion)
- ✅ "12 of 15 recent reviews mention friendly service"

---
