# EveningReset

Pixel-first offline PWA for the fixed Evening Reset V4 recovery plan.

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
Single repeated **Evening Reset V4** flow using these 7 exercises:
1. Diaphragmatic Breathing
2. Deep Cervical Flexor Hold
3. Upper Trap + Levator Work
4. Thoracic Extension over Foam Roller
5. Dead Bug
6. Glute Bridge
7. Kneeling Hip Flexor Stretch

## Timing rule
The app preserves the prescribed reps, holds, sides, and form cues. The printed minute labels are treated as approximate because voice prompts, setup pauses, transition rests, and user-adjusted pace settings deliberately change the real session length.

## Asymmetry notes
The live routine preserves the side-weighted stretch pattern from the exercise spec:
- **Upper Trapezius**: right side gets the stretch; left side uses active release only
- **Levator Scapulae**: right side gets one extra set

## Scope rule
- no day selector
- no week gating
- exercise-only routine; Daily Recommendations are intentionally excluded
- default transition rest is 15 seconds and can be lowered to 0 seconds

## Local use
Open `index.html` through a static host or GitHub Pages, then install from Chrome on Pixel if desired.

## Note on voice
This build prefers bundled prerecorded audio and falls back to device speech only when a phrase asset is missing.
