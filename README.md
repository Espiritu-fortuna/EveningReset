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
Some evening movements intentionally include extra work on one side.

Current extra-side blocks in the live routine:
- **Upper Trapezius Stretch**: extra set on the **left** side
- **Levator Scapulae Stretch**: extra set on the **right** side
- **Side Plank from Knees**: extra set on the **right** side
- **Lying Dumbbell External Rotation**: extra set on the **right** side

## Local use
Open `index.html` through a static host or GitHub Pages, then install from Chrome on Pixel if desired.

## Note on voice
This build prefers bundled prerecorded audio and falls back to device speech only when a phrase asset is missing.
