(() => {
  const count = (label, reps, paceSec, extra = {}) => ({ type: 'count', label, reps, paceSec, ...extra });
  const timed = (label, durationSec, extra = {}) => ({ type: 'timed', label, durationSec, ...extra });
  const hold = (label, durationSec, extra = {}) => ({ type: 'hold', label, durationSec, ...extra });
  const breath = (label, cycles, inhaleSec, exhaleSec, extra = {}) => ({ type: 'breath', label, cycles, inhaleSec, exhaleSec, ...extra });
  const rest = (durationSec, extra = {}) => ({ type: 'rest', durationSec, ...extra });

  const warmups = [
    { key: 'marching', phase: 'warmup', name: 'Light Marching in Place', cue: 'Raise tissue temperature without impact.', manualEligible: false, segments: [timed('Marching · 60 sec', 60, { announce: 'Warm-up. Light marching in place.' })] },
    { key: 'breathing', phase: 'warmup', name: 'Diaphragmatic Breathing', cue: 'Four seconds in, six seconds out, belly expands.', manualEligible: false, segments: [breath('8 breath cycles', 8, 4, 6, { announce: 'Diaphragmatic breathing. Eight slow breaths.' })] },
    { key: 'chin-tucks', phase: 'warmup', name: 'Chin Tucks', cue: 'Slide the head back, no tilting, three-second hold.', manualEligible: false, segments: [count('10 reps', 10, 4.8, { announce: 'Chin tucks.', holdSec: 3 })] },
    { key: 'shoulder-rolls-forward', phase: 'warmup', name: 'Shoulder Rolls', cue: 'Controlled forward circles.', manualEligible: false, segments: [count('Forward · 10 reps', 10, 1.3, { announce: 'Shoulder rolls forward.' })] },
    { key: 'shoulder-rolls-backward', phase: 'warmup', name: 'Shoulder Rolls', cue: 'Reverse with the same control.', manualEligible: false, segments: [count('Backward · 10 reps', 10, 1.3, { announce: 'Shoulder rolls backward.' })] }
  ];

  const exercises = [
    {
      key: 'deep-cervical-flexor-hold',
      phase: 'main',
      name: 'Deep Cervical Flexor Hold',
      cue: 'Tiny chin nod. Mild right rotation after each hold, no pain.',
      manualEligible: true,
      segments: [
        count('Set 1', 10, 12.2, { announce: 'Deep cervical flexor hold. Set 1. Ten second holds.', holdSec: 10 }),
        rest(60, { announce: 'Rest. Set 2 is next.' }),
        count('Set 2', 10, 12.2, { announce: 'Deep cervical flexor hold. Set 2.', holdSec: 10 }),
        rest(60, { announce: 'Rest. Set 3 is next.' }),
        count('Set 3', 10, 12.2, { announce: 'Deep cervical flexor hold. Set 3.', holdSec: 10 })
      ]
    },
    {
      key: 'upper-trap-stretch',
      phase: 'main',
      name: 'Upper Trapezius Stretch',
      cue: 'Anchor the opposite hand, tilt ear away, gentle overpressure.',
      manualEligible: true,
      segments: [
        hold('Right side, set 1', 30, { announce: 'Upper trapezius stretch. Right side, set 1.' }),
        rest(60, { announce: 'Rest. Left side, set 1 is next.' }),
        hold('Left side, set 1', 30, { announce: 'Upper trapezius stretch. Left side, set 1.' }),
        rest(60, { announce: 'Rest. Right side, set 2 is next.' }),
        hold('Right side, set 2', 30, { announce: 'Upper trapezius stretch. Right side, set 2.' }),
        rest(60, { announce: 'Rest. Left side, set 2 is next.' }),
        hold('Left side, set 2', 30, { announce: 'Upper trapezius stretch. Left side, set 2.' }),
        rest(60, { announce: 'Rest. Extra left-side set is next.' }),
        hold('Left side, extra set', 30, { announce: 'Upper trapezius stretch. Extra set on the left side.' })
      ]
    },
    {
      key: 'levator-stretch',
      phase: 'main',
      name: 'Levator Scapulae Stretch',
      cue: 'Look toward the opposite armpit. Gentle overpressure.',
      manualEligible: true,
      segments: [
        hold('Right side, set 1', 30, { announce: 'Levator scapulae stretch. Right side, set 1.' }),
        rest(60, { announce: 'Rest. Left side, set 1 is next.' }),
        hold('Left side, set 1', 30, { announce: 'Levator scapulae stretch. Left side, set 1.' }),
        rest(60, { announce: 'Rest. Right side, set 2 is next.' }),
        hold('Right side, set 2', 30, { announce: 'Levator scapulae stretch. Right side, set 2.' }),
        rest(60, { announce: 'Rest. Left side, set 2 is next.' }),
        hold('Left side, set 2', 30, { announce: 'Levator scapulae stretch. Left side, set 2.' }),
        rest(60, { announce: 'Rest. Right side, set 3 is next.' }),
        hold('Right side, set 3', 30, { announce: 'Levator scapulae stretch. Right side, set 3.' })
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
        rest(60, { announce: 'Rest. Mid thoracic level is next.' }),
        count('Mid thoracic level', 8, 6.6, { announce: 'Thoracic extension. Mid thoracic level.', holdSec: 5 }),
        rest(60, { announce: 'Rest. Upper thoracic level is next.' }),
        count('Upper thoracic level', 8, 6.6, { announce: 'Thoracic extension. Upper thoracic level.', holdSec: 5 })
      ]
    },
    {
      key: 'lying-chest-opener',
      phase: 'main',
      name: 'Lying Chest Opener on Foam Roller',
      cue: 'Foam roller lengthwise. Arms open. Relax and breathe.',
      manualEligible: true,
      segments: [timed('Two-minute opener', 120, { announce: 'Lying chest opener on the foam roller. Two minutes total.' })]
    },
    {
      key: 'open-book',
      phase: 'main',
      name: 'Open Book Rotation',
      cue: 'Knees stacked, follow the hand with the eyes, two-second hold open.',
      manualEligible: true,
      segments: [
        count('Right side, set 1', 8, 4.4, { announce: 'Open book rotation. Right side, set 1.', holdSec: 2 }),
        rest(60, { announce: 'Rest. Left side, set 1 is next.' }),
        count('Left side, set 1', 8, 4.4, { announce: 'Open book rotation. Left side, set 1.', holdSec: 2 }),
        rest(60, { announce: 'Rest. Right side, set 2 is next.' }),
        count('Right side, set 2', 8, 4.4, { announce: 'Open book rotation. Right side, set 2.', holdSec: 2 }),
        rest(60, { announce: 'Rest. Left side, set 2 is next.' }),
        count('Left side, set 2', 8, 4.4, { announce: 'Open book rotation. Left side, set 2.', holdSec: 2 })
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
        rest(60, { announce: 'Rest. Left side, set 1 is next.' }),
        hold('Left side, set 1', 45, { announce: 'Half-kneeling hip flexor stretch. Left side, set 1.' }),
        rest(60, { announce: 'Rest. Right side, set 2 is next.' }),
        hold('Right side, set 2', 45, { announce: 'Half-kneeling hip flexor stretch. Right side, set 2.' }),
        rest(60, { announce: 'Rest. Left side, set 2 is next.' }),
        hold('Left side, set 2', 45, { announce: 'Half-kneeling hip flexor stretch. Left side, set 2.' })
      ]
    },
    {
      key: 'glute-bridge-ppt',
      phase: 'main',
      name: 'Glute Bridge with Posterior Pelvic Tilt',
      cue: 'Tuck tailbone first, then lift. Three-second squeeze at the top.',
      manualEligible: true,
      segments: [
        count('Set 1', 12, 4.9, { announce: 'Glute bridge with posterior pelvic tilt. Set 1.', holdSec: 3 }),
        rest(60, { announce: 'Rest. Set 2 is next.' }),
        count('Set 2', 12, 4.9, { announce: 'Glute bridge. Set 2.', holdSec: 3 }),
        rest(60, { announce: 'Rest. Set 3 is next.' }),
        count('Set 3', 12, 4.9, { announce: 'Glute bridge. Set 3.', holdSec: 3 })
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
        rest(60, { announce: 'Rest. Set 2 is next.' }),
        count('Set 2', 8, 3.8, { announce: 'Dead bug. Set 2. Eight reps per side, alternating.', alternatingSides: true }),
        rest(60, { announce: 'Rest. Set 3 is next.' }),
        count('Set 3', 8, 3.8, { announce: 'Dead bug. Set 3. Eight reps per side, alternating.', alternatingSides: true })
      ]
    },
    {
      key: 'bird-dog',
      phase: 'main',
      name: 'Bird Dog',
      cue: 'Brace first. Opposite arm and leg extend. Five-second hold with zero rotation.',
      manualEligible: true,
      segments: [
        count('Set 1', 8, 6.4, { announce: 'Bird dog. Set 1. Eight reps per side, alternating, with five-second holds.', holdSec: 5, alternatingSides: true }),
        rest(60, { announce: 'Rest. Set 2 is next.' }),
        count('Set 2', 8, 6.4, { announce: 'Bird dog. Set 2. Eight reps per side, alternating, with five-second holds.', holdSec: 5, alternatingSides: true }),
        rest(60, { announce: 'Rest. Set 3 is next.' }),
        count('Set 3', 8, 6.4, { announce: 'Bird dog. Set 3. Eight reps per side, alternating, with five-second holds.', holdSec: 5, alternatingSides: true })
      ]
    },
    {
      key: 'side-plank-knees',
      phase: 'main',
      name: 'Side Plank from Knees',
      cue: 'Hips stacked, no sagging, straight line from head to knees.',
      manualEligible: true,
      segments: [
        hold('Right side, set 1', 25, { announce: 'Side plank from knees. Right side, set 1.' }),
        rest(60, { announce: 'Rest. Left side, set 1 is next.' }),
        hold('Left side, set 1', 25, { announce: 'Side plank from knees. Left side, set 1.' }),
        rest(60, { announce: 'Rest. Right side, set 2 is next.' }),
        hold('Right side, set 2', 25, { announce: 'Side plank from knees. Right side, set 2.' }),
        rest(60, { announce: 'Rest. Left side, set 2 is next.' }),
        hold('Left side, set 2', 25, { announce: 'Side plank from knees. Left side, set 2.' }),
        rest(60, { announce: 'Rest. Right side, set 3 is next.' }),
        hold('Right side, set 3', 25, { announce: 'Side plank from knees. Right side, set 3.' })
      ]
    },
    {
      key: 'external-rotation',
      phase: 'main',
      name: 'Lying Dumbbell External Rotation',
      cue: 'Elbow pinned to the hip, small clean motion, two-second hold and three-second lower.',
      manualEligible: true,
      segments: [
        count('Right side, set 1', 12, 5.4, { announce: 'Lying dumbbell external rotation. Right side, set 1.', holdSec: 2 }),
        rest(60, { announce: 'Rest. Left side, set 1 is next.' }),
        count('Left side, set 1', 12, 5.4, { announce: 'External rotation. Left side, set 1.', holdSec: 2 }),
        rest(60, { announce: 'Rest. Right side, set 2 is next.' }),
        count('Right side, set 2', 12, 5.4, { announce: 'External rotation. Right side, set 2.', holdSec: 2 }),
        rest(60, { announce: 'Rest. Left side, set 2 is next.' }),
        count('Left side, set 2', 12, 5.4, { announce: 'External rotation. Left side, set 2.', holdSec: 2 }),
        rest(60, { announce: 'Rest. Right side, set 3 is next.' }),
        count('Right side, set 3', 12, 5.4, { announce: 'External rotation. Right side, set 3.', holdSec: 2 }),
        rest(60, { announce: 'Rest. Left side, set 3 is next.' }),
        count('Left side, set 3', 12, 5.4, { announce: 'External rotation. Left side, set 3.', holdSec: 2 }),
        rest(60, { announce: 'Rest. Right side, set 4 is next.' }),
        count('Right side, set 4', 12, 5.4, { announce: 'External rotation. Right side, set 4.', holdSec: 2 })
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
        introSpeech: 'Evening routine. Starting with light marching in place.',
        note: 'Tissue prep, cervical work, thoracic opening, lumbar-pelvic-core finish.',
        summary: 'Warm-up plus 12 evening routine exercises.',
        warmups,
        exercises
      }
    ]
  };
})();
