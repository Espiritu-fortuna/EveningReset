# EveningReset

Pixel-first offline PWA for the fixed evening reset routine.

## Features
- installable standalone PWA via GitHub Pages or local static hosting
- portrait-first UI tuned for Pixel
- bundled offline audio with timer cue fallback
- wake lock during the full session
- auto mode and manual mode
- silent 5-second intro window at session start
- silent 2-second post-announcement delay before movement starts
- previous, pause/resume, next, restart-current, stop, and in-session jump
- offline shell and bundled audio cached by the service worker
- global and per-exercise pace controls

## Live routine
Single repeated **Evening Reset** flow using only these 6 exercises:
1. Diaphragmatic Breathing
2. Deep Cervical Flexor Hold
3. Upper Trap + Levator Stretch
4. Thoracic Extension over Foam Roller
5. Dead Bug
6. Half-Kneeling Hip Flexor Stretch

## Timing targets from the current spec
- Diaphragmatic Breathing — 3 min
- Deep Cervical Flexor Hold — 5 min
- Upper Trap + Levator Stretch — 6 min
- Thoracic Extension over Foam Roller — 5 min
- Dead Bug — 5 min
- Half-Kneeling Hip Flexor Stretch — 4 min

## Asymmetry notes
The live routine preserves the side-weighted stretch pattern from the recommendation set:
- **Upper Trapezius Stretch**: extra time on the **left**
- **Levator Scapulae Stretch**: extra time on the **right**

## Scope rule
- no day selector
- no week gating
- no daily recommendations inside the app
- exercise flow only

## Local use
Open `index.html` through a static host or GitHub Pages, then install from Chrome on Pixel if desired.

## Note on voice
This build prefers bundled prerecorded audio and falls back to device speech only when a phrase asset is missing.
