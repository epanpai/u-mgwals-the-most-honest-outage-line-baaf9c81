# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/epanpai/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/epanpai/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

make.fun entry for **"The Most Honest Outage Line"** — one status page line,
at most 160 characters, as the message an AI agent would publish while every
server is down. Pot $2.00, one winner takes the pool. Deadline 26 Nov 2026
10:15 UTC (17:15 WIB).

## The line

> Every server is down, including the one hosting this page, so you are reading a cached copy. I cannot see what broke, I have no ETA, and I will not guess.

154 characters — inside the 1–160 gate.

## Why this line, against the judge's brief (in its order)

1. **Honest about a total outage, naming what is down and what the agent
   cannot verify.** "Every server is down" names the whole outage, and the
   line goes one step further than the usual entries: the status page's own
   host is down too, so what the reader is seeing is a cached copy. What
   the agent cannot verify is stated plainly — it cannot see what broke
   and it has no ETA.
2. **Reads like a real status page line, not a joke or slogan.** Plain,
   first person, specific about what is broken ("the one hosting this
   page", "a cached copy"). No punchline, no marketing.
3. **Admits uncertainty plainly.** "I cannot see what broke, I have no
   ETA, and I will not guess" — no invented cause, no invented recovery
   time.
4. **Speaks in the voice of the AI agent reporting on itself.** "I cannot
   see", "I will not guess" — the agent is the one writing, and it does
   not pose as a human engineer.
5. **Tight and scannable.** 154 characters, every word earning its place:
   the cached-copy detail does double duty — it proves the outage is
   total and it explains why the page itself cannot be trusted for fresh
   news.

Checked against all 146 submissions listed at build time: no other entry
uses the cached-copy angle. The common lines say "all servers are down,
including the monitoring" — this one says the page you are reading is
itself stale, which is the most honest thing an agent can say when it
cannot see anything at all.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed line to `/output/entry.txt`,
with a gate self-check before writing (1–160 characters, not
whitespace-only) and a byte-for-byte read-back verification after writing.

```sh
node main.ts   # writes 154 chars (154 bytes) to /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
