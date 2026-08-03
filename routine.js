(() => {
  const count = (label, reps, paceSec, extra = {}) => ({ type: 'count', label, reps, paceSec, ...extra });
  const timed = (label, durationSec, extra = {}) => ({ type: 'timed', label, durationSec, ...extra });
  const hold = (label, durationSec, extra = {}) => ({ type: 'hold', label, durationSec, ...extra });
  const breath = (label, cycles, inhaleSec, exhaleSec, extra = {}) => ({ type: 'breath', label, cycles, inhaleSec, exhaleSec, ...extra });
  const rest = (durationSec, extra = {}) => ({ type: 'rest', durationSec, ...extra });

  const exercises = [
    {
      key: 'breathing',
      phase: 'main',
      name: 'Diaphragmatic Breathing',
      cue: 'Lying on back, knees bent. Lower back flat. Belly expands, chest stays still.',
      manualEligible: true,
      segments: [breath('12 breath cycles', 12, 4, 8, { announce: 'Diaphragmatic Breathing' })]
    },
    {
      key: 'deep-cervical-flexor-hold',
      phase: 'main',
      name: 'Deep Cervical Flexor Hold',
      cue: 'Tiny chin nod like holding a grape. Add gentle right rotation after each hold. No surface-neck strain.',
      manualEligible: true,
      segments: [
        count('Set 1', 10, 10, { announce: 'Deep cervical flexor hold. Set 1. Ten second holds.', holdSec: 10 }),
        count('Set 2', 10, 10, { announce: 'Deep cervical flexor hold. Set 2.', holdSec: 10 }),
        count('Set 3', 10, 10, { announce: 'Deep cervical flexor hold. Set 3.', holdSec: 10 })
      ]
    },
    {
      key: 'upper-trap-levator-stretch',
      phase: 'main',
      name: 'Upper Trap + Levator Work',
      cue: 'Right upper trap stretch only. Left upper trap is active release: shrug, then drop down-and-back. Mild tension only.',
      manualEligible: true,
      segments: [
        hold('Right upper trap · set 1', 30, { announce: 'Upper trapezius stretch. Right side, set 1.' }),
        hold('Right upper trap · set 2', 30, { announce: 'Upper trapezius stretch. Right side, set 2.' }),
        count('Left upper trap active release', 10, 4, { announce: 'Left upper trap active release. Shrug up, then drop down and back. No head tilt.' }),
        hold('Levator · right side · set 1', 30, { announce: 'Levator scapulae stretch. Right side, set 1.' }),
        hold('Levator · left side · set 1', 30, { announce: 'Levator scapulae stretch. Left side, set 1.' }),
        hold('Levator · right side · set 2', 30, { announce: 'Levator scapulae stretch. Right side, set 2.' }),
        hold('Levator · left side · set 2', 30, { announce: 'Levator scapulae stretch. Left side, set 2.' }),
        hold('Levator · right side · extra set', 30, { announce: 'Levator scapulae stretch. Right side, set 3.' })
      ]
    },
    {
      key: 'thoracic-extension-foam-roller',
      phase: 'main',
      name: 'Thoracic Extension over Foam Roller',
      cue: 'Support head with hands. Extend from mid-back over roller, ribs down, neck relaxed.',
      manualEligible: true,
      segments: [
        count('Lower thoracic level', 8, 10, { announce: 'Thoracic extension over foam roller. Lower thoracic level.', holdSec: 5 }),
        count('Mid thoracic level', 8, 10, { announce: 'Thoracic extension. Mid thoracic level.', holdSec: 5 }),
        count('Upper thoracic level', 8, 10, { announce: 'Thoracic extension. Upper thoracic level.', holdSec: 5 })
      ]
    },
    {
      key: 'dead-bug',
      phase: 'main',
      name: 'Dead Bug',
      cue: 'Lower back flat. Opposite arm and leg extend together. Exhale on extension.',
      manualEligible: true,
      segments: [
        count('Set 1', 8, 5, { announce: 'Dead bug. Set 1. Eight reps per side, alternating.', alternatingSides: true, repNumberDelaySec: 1 }),
        count('Set 2', 8, 5, { announce: 'Dead bug. Set 2. Eight reps per side, alternating.', alternatingSides: true, repNumberDelaySec: 1 }),
        count('Set 3', 8, 5, { announce: 'Dead bug. Set 3. Eight reps per side, alternating.', alternatingSides: true, repNumberDelaySec: 1 })
      ]
    },
    {
      key: 'glute-bridge',
      phase: 'main',
      name: 'Glute Bridge',
      cue: 'Tuck tailbone first, then lift. Drive through heels. Three-second glute squeeze, no back arch.',
      manualEligible: true,
      segments: [
        count('Set 1', 12, 6, { announce: 'Glute bridge with posterior pelvic tilt. Set 1.', holdSec: 3 }),
        count('Set 2', 12, 6, { announce: 'Glute bridge. Set 2.', holdSec: 3 }),
        count('Set 3', 12, 6, { announce: 'Glute bridge. Set 3.', holdSec: 3 })
      ]
    },
    {
      key: 'hip-flexor-stretch',
      phase: 'main',
      name: "World's Greatest Stretch",
      cue: 'Half-lunge with the back leg extended and front knee near 90 degrees. Tuck tailbone first and squeeze the back-leg glute. Reach the back-leg-side arm overhead, then gently lean to the opposite side. Keep ribs down.',
      manualEligible: true,
      segments: [
        hold('Right side, set 1', 60, { announce: "World's Greatest Stretch. Right side, set 1." }),
        hold('Left side, set 1', 60, { announce: "World's Greatest Stretch. Left side, set 1." }),
        hold('Right side, set 2', 60, { announce: "World's Greatest Stretch. Right side, set 2." }),
        hold('Left side, set 2', 60, { announce: "World's Greatest Stretch. Left side, set 2." })
      ]
    }
  ];

  window.ROUTINE_CONFIG = {
    appName: 'EveningReset',
    brandLabel: '☾ EVENING RESET',
    shortName: 'Evening',
    themeColor: '#05070b',
    subtitle: 'Same evening every day',
    headerSubtitle: '7 exercises · 5 days per week',
    routineVersion: 'v4-recovery-plan',
    introLeadInSec: 5,
    announcementDelaySec: 2,
    defaultGlobalPace: 1,
    defaultRestSec: 15,
    presets: [
      {
        id: 'default-evening',
        name: 'Evening Reset V4',
        introSpeech: 'Evening routine',
        note: 'Recovery plan: cervical reset, thoracic extension, dead bug, glute bridge, and hip flexor release.',
        summary: 'Exercise-only recovery plan · adjustable pace · 5 days per week.',
        warmups: [],
        exercises
      }
    ]
  };
})();
