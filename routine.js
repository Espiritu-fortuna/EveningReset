(() => {
  const count = (label, reps, paceSec, extra = {}) => ({ type: 'count', label, reps, paceSec, ...extra });
  const timed = (label, durationSec, extra = {}) => ({ type: 'timed', label, durationSec, ...extra });
  const hold = (label, durationSec, extra = {}) => ({ type: 'hold', label, durationSec, ...extra });
  const breath = (label, cycles, inhaleSec, exhaleSec, extra = {}) => ({ type: 'breath', label, cycles, inhaleSec, exhaleSec, ...extra });
  const rest = (durationSec, extra = {}) => ({ type: 'rest', durationSec, ...extra });

  const warmups = [
    {
      key: 'breathing',
      phase: 'warmup',
      name: 'Diaphragmatic Breathing',
      cue: 'Four seconds in, four seconds out, belly expands.',
      manualEligible: false,
      segments: [breath('15 breath cycles', 15, 4, 4, { announce: 'Diaphragmatic breathing.' })]
    }
  ];

  const exercises = [
    {
      key: 'deep-cervical-flexor-hold',
      phase: 'main',
      name: 'Deep Cervical Flexor Hold',
      cue: 'Tiny chin nod. Mild right rotation after each set, no pain.',
      manualEligible: true,
      segments: [
        count('Set 1', 10, 12.2, { announce: 'Deep cervical flexor hold. Set 1. Ten second holds.', holdSec: 10 }),
        hold('Right rotation after set 1', 30, { announce: 'Tiny chin nod. Mild right rotation after each hold, no pain.' }),
        count('Set 2', 10, 12.2, { announce: 'Deep cervical flexor hold. Set 2.', holdSec: 10 }),
        hold('Right rotation after set 2', 30, { announce: 'Tiny chin nod. Mild right rotation after each hold, no pain.' }),
        count('Set 3', 10, 12.2, { announce: 'Deep cervical flexor hold. Set 3.', holdSec: 10 }),
        hold('Right rotation after set 3', 30, { announce: 'Tiny chin nod. Mild right rotation after each hold, no pain.' })
      ]
    },
    {
      key: 'upper-trap-levator-stretch',
      phase: 'main',
      name: 'Upper Trap + Levator Stretch',
      cue: 'Upper trap first, then levator. Mild tension only. Keep the anchored shoulder down.',
      manualEligible: true,
      segments: [
        hold('Upper trap · right side · set 1', 30, { announce: 'Upper trapezius stretch. Right side, set 1.' }),
        hold('Upper trap · left side · set 1', 30, { announce: 'Upper trapezius stretch. Left side, set 1.' }),
        hold('Upper trap · right side · set 2', 30, { announce: 'Upper trapezius stretch. Right side, set 2.' }),
        hold('Upper trap · left side · set 2', 30, { announce: 'Upper trapezius stretch. Left side, set 2.' }),
        hold('Upper trap · left side · extra set', 30, { announce: 'Upper trapezius stretch. Extra set on the left side.' }),
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
      cue: 'Extend over the roller, ribs down, five-second hold at the top.',
      manualEligible: true,
      segments: [
        count('Lower thoracic level', 8, 6.6, { announce: 'Thoracic extension over foam roller. Lower thoracic level.', holdSec: 5 }),
        count('Mid thoracic level', 8, 6.6, { announce: 'Thoracic extension. Mid thoracic level.', holdSec: 5 }),
        count('Upper thoracic level', 8, 6.6, { announce: 'Thoracic extension. Upper thoracic level.', holdSec: 5 })
      ]
    },
    {
      key: 'dead-bug',
      phase: 'main',
      name: 'Dead Bug',
      cue: 'Lower back flat. Opposite arm and leg extend together. Exhale on extension.',
      manualEligible: true,
      segments: [
        count('Set 1', 8, 3.8, { announce: 'Dead bug. Set 1. Eight reps per side, alternating.', alternatingSides: true }),
        count('Set 2', 8, 3.8, { announce: 'Dead bug. Set 2. Eight reps per side, alternating.', alternatingSides: true }),
        count('Set 3', 8, 3.8, { announce: 'Dead bug. Set 3. Eight reps per side, alternating.', alternatingSides: true })
      ]
    },
    {
      key: 'hip-flexor-stretch',
      phase: 'main',
      name: 'Half-Kneeling Hip Flexor Stretch',
      cue: 'Tuck tailbone first. Squeeze the back-leg glute. Shift hips forward.',
      manualEligible: true,
      segments: [
        hold('Right side, set 1', 45, { announce: 'Half-kneeling hip flexor stretch. Right side, set 1.' }),
        hold('Left side, set 1', 45, { announce: 'Half-kneeling hip flexor stretch. Left side, set 1.' }),
        hold('Right side, set 2', 45, { announce: 'Half-kneeling hip flexor stretch. Right side, set 2.' }),
        hold('Left side, set 2', 45, { announce: 'Half-kneeling hip flexor stretch. Left side, set 2.' })
      ]
    }
  ];

  window.ROUTINE_CONFIG = {
    appName: 'EveningReset',
    brandLabel: '☾ EVENING RESET',
    shortName: 'Evening',
    themeColor: '#05070b',
    subtitle: 'Same evening every day',
    headerSubtitle: 'Daily evening reset',
    introLeadInSec: 5,
    announcementDelaySec: 2,
    defaultGlobalPace: 1,
    defaultRestSec: 60,
    presets: [
      {
        id: 'default-evening',
        name: 'Evening routine',
        introSpeech: 'Evening routine.',
        note: 'Single evening reset flow with only the selected exercises.',
        summary: '6 selected evening reset exercises only.',
        warmups,
        exercises
      }
    ]
  };
})();
