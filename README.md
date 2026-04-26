# EveningReset

Pixel-first offline PWA for the evening routine.

## Features
- installable standalone PWA
- portrait-first large-text UI
- wake lock during the full session
- auto mode and manual mode
- silent 5-second lead-in at session start
- 2-second post-announcement delay before movement starts
- pause, resume, skip, previous, restart, jump
- offline shell via service worker
- global and per-exercise pace controls
- evening-specific cervical, thoracic, lumbar, pelvic, and shoulder flow

## Local use
Open `index.html` through a static host or GitHub Pages, install from Chrome on Pixel, and allow speech synthesis on first interaction.

## Note on voice
This build uses the device speech engine for now. The session engine is structured so prerecorded assets can be swapped in later if needed.
