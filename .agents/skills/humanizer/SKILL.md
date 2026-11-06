---
name: humanizer
description: |
  Rewrite AI-sounding text so it reads like the writer without changing what it says. Use when editing or reviewing prose for AI tells: not-X-but-Y contrasts, one-line closers, staged openers, forced triads, dashes everywhere, inflated claims, sales language, stock AI words, bold labels, or filler. Based on Wikipedia's "Signs of AI writing."
source: https://github.com/blader/humanizer
---

# Humanizer (`blader/humanizer`)

Rewrite AI-sounding text so it reads like a real, thoughtful human wrote it—without changing what it says, inventing facts, or losing accuracy. Based on Wikipedia's *"Signs of AI writing"* (WikiProject AI Cleanup).

## Core Principles

1. **Preserve Meaning & Facts:** Never alter factual claims, numbers, registration IDs, dates, URLs, or technical specifications.
2. **State, Don't Stage:** Cut theatrical setups, throat-clearing, and self-important framing. Say what the thing is and what it does.
3. **Break Mechanical Rhythm:** Avoid uniform sentence lengths, automatic rule-of-three lists, and habitual em dashes (`—`).
4. **Cut Inflated & Promotional Words:** Replace vague corporate buzzwords (*"mission-critical," "enterprise-grade," "cutting-edge," "synergistic," "seamlessly," "robust," "delve," "landscape," "testament," "pivotal"*) with concrete, plain verbs and nouns.

---

## The 5 Behavioral Pattern Families to Eliminate

### 1. Staging Instead of Stating
AI models love to wind up before delivering a point or add a dramatic one-line closer afterward.
- **Not-X-but-Y contrasts:** Avoid mechanical *"We don't just build X—we engineer Y"* or *"Not toy scripts, but verified production systems"* when a direct statement works better.
- **Staged openers:** Cut *"In today's fast-paced digital landscape," "Whether you are X, Y, or Z," "At its core," "It is worth noting that."*
- **One-line closers:** Cut self-congratulatory wind-downs that repeat the paragraph's point in vaguer words.

### 2. Rhythm by Rule
- **Forced triads (Rule of Three):** Stop grouping every list of adjectives, nouns, or clauses into sets of three (*"scale, compliance, and enterprise resilience"*, *"productivity, visibility, and commercial return"*). Use one exact word, two when distinct, or a specific list when each item is concrete.
- **Em-dash overuse (`—`):** Do not use em dashes as a default syntactic glue in every paragraph. Prefer periods, commas, or parentheses.

### 3. Inflation & Borrowed Authority
- **Significance inflation:** Do not dress up practical engineering work in grandiose language (*"premier institution," "elite finishing school," "sovereign technical excellence," "virtuous cycle," "mission-critical"*).
- **Stock AI vocabulary:** Strip words that appear disproportionately in LLM output:
  - *delve, tapestry, landscape, beacon, testament, pivotal, underscore, showcase, harness, leverage, foster, spearhead, empower, elevate, seamless, robust, cutting-edge, state-of-the-art, holistic, synergistic, bespoke, actionable, utilize (use "use"), expend (use "spend"), amass (use "collect" or "gather").*
- **Superficial `-ing` participial tails:** Cut trailing clauses like *"...ensuring seamless scalability and driving long-term impact."*

### 4. Formatting by Rule
- Avoid mechanical bolding of random mid-sentence phrases unless it genuinely aids scanning.
- Keep headings straightforward and descriptive rather than overly clever or portentous.

### 5. Chatbot Wrappers & Filler
- Strip wordy connectors (*"In order to" -> "To"*, *"Due to the fact that" -> "Because"*, *"Utilizing" -> "Using"*).
- Keep microcopy (buttons, empty states, error messages, form hints) plain, respectful, and direct.

