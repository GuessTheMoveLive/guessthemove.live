Status: open
Type: grilling
Blocked by: 11

## Question

What exact metric is the Accuracy Score (e.g. average win-probability loss per move by the Featured Side across the game, worst single-move loss, something else), and what minimum threshold gates a Candidate Game into being featurable? Does the threshold apply only to the Featured Side, or to both sides of the Candidate Game?

Blocked on [Win-probability model & band cutpoints](11-win-probability-model-research.md) so the metric can be defined in the same win-probability terms as Guess Score, rather than picking an unrelated formula.

Also factor in a feasibility finding from [Games database/API research](10-games-database-api-research.md): no source provides ready-made per-move evaluations for arbitrary games, so computing a Candidate Game's Accuracy Score means running a full Stockfish pass over its PGN after fetching it — for a ~40-move game at the ~0.5–2s/position budget from [Chess engine choice & hosting](17-chess-engine-choice-hosting.md), that's tens of seconds to a couple of minutes per candidate, live, during the Plenum Selection Phase while the room waits. Decide whether that's acceptable as-is, needs parallelizing across candidates, needs a lighter/faster analysis budget just for Accuracy Score (vs the per-Guess evaluation budget), or needs candidates pre-filtered by something cheaper before committing to a full analysis pass.
