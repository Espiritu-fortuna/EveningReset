# EveningReset

Pixel-first offline PWA for the evening routine.

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
- evening-specific cervical, thoracic, lumbar, pelvic, and shoulder flow

## Routine asymmetry notes
Some evening movements intentionally carry one additional normal set on one side.
This is folded into the ordinary set flow, not called out as a special “extra” block during use.

Current side-weighted blocks in the live routine:
- **Upper Trapezius Stretch**: left side runs to set 3, right side to set 2
- **Levator Scapulae Stretch**: right side runs to set 3, left side to set 2
- **Side Plank from Knees**: right side runs to set 3, left side to set 2
- **Lying Dumbbell External Rotation**: right side runs to set 4, left side to set 3

## Local use
Open `index.html` through a static host or GitHub Pages, then install from Chrome on Pixel if desired.

## Note on voice
This build prefers bundled prerecorded audio and falls back to device speech only when a phrase asset is missing.
