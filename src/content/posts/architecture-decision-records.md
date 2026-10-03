---
title: 'Architecture Decision Records: A Lightweight Habit That Pays Off'
description: 'How a short Markdown file per decision saves hours of archaeology later.'
pubDate: 2026-10-02
tags: ['decisions', 'documentation']
---

Six months after a big decision, someone always asks: *"Why did we do it this way?"* If the answer lives only in a Slack thread or in the head of someone who has since left, the team either repeats the debate or works around something it doesn't understand.

An **Architecture Decision Record** (ADR) is a short document that captures one decision, its context, and its consequences.

## A minimal template

```markdown
# ADR-007: Use PostgreSQL for the order service

## Status
Accepted (2026-09-14)

## Context
We need transactional guarantees across orders and payments...

## Decision
We will use PostgreSQL 17, managed by our cloud provider.

## Consequences
+ Strong consistency, mature tooling, team familiarity
− Horizontal write scaling will need partitioning later
```

## Rules that keep ADRs useful

| Rule | Why |
| --- | --- |
| One decision per record | Easy to find, link, and supersede |
| Keep them in the repo | Reviewed like code, versioned with code |
| Never edit an accepted ADR | Supersede it with a new one instead |
| Write the consequences honestly | The downsides are the most valuable part |

## Start small

Don't backfill every historical decision. Write an ADR for the next significant one and link it in the pull request. The habit spreads once people see how useful the first few are.
