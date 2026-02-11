import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Mandinga"
      intro="Every time you landed RLX 3,3 in the last chapter, something happened besides damage. A small icon under your health bar lit up. You've been building Mandinga without knowing it. Now let's talk about what it does."
      hasPrevious={true}
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Combos"
    >
      <Section title="The Install">
        <p>
          Mandinga is Eddy's unique resource. It builds to a maximum of <strong>two levels</strong>{' '}
          and resets every round. When you have at least one level, Handstand unlocks two new moves.
          At level two, those moves power up further.
        </p>

        <KeyConcept title="How Mandinga Works" icon="🔥">
          <ul>
            <li><strong>Three moves build Mandinga</strong> — <code>RLX 3,3</code> (the hell sweep), <code>HSP 2,3</code>, and <code>db+4,4</code>. Each grants one level on hit.</li>
            <li><strong>Heat activation</strong> also grants one level.</li>
            <li><strong>Maximum two levels.</strong> Extra hits don't stack beyond 2.</li>
            <li><strong>Resets every round.</strong> You start at zero. Use it or lose it.</li>
            <li><strong>Level 1</strong> unlocks HSP b+4 (mid) and HSP 3+4 (low) + auto low parry in HSP.</li>
            <li><strong>Level 2</strong> powers up both — HSP b+4 now knocks down and wall splats, HSP 3+4 now knocks down and floor breaks.</li>
          </ul>
        </KeyConcept>

        <p>
          Here's why this matters: in Chapter 4, we said Handstand has <strong>no threatening low</strong>{' '}
          without Mandinga. The opponent can stand block everything except the duckable throw. That
          changes completely at level 1. Now HSP has a real low, a plus-on-block mid, and an auto low
          parry. Handstand goes from "exploitable if you know the matchup" to "genuine 50/50 machine."
        </p>
      </Section>

      <Section title="The Three Builders">
        <p>
          You won't go out of your way to build Mandinga. It happens naturally as you play Eddy's
          game. Each builder is a move you'd use anyway.
        </p>

        <MoveCard character="eddy"
          videoId="RLX.3,3"
          move={{
            input: 'RLX 3,3',
            hitLevel: ['l', 'h'],
            damage: '12, 30',
            startup: 'i16~17',
            onBlock: '-13',
            onHit: '+12a (+3) / +7a (+6)',
            tags: ['Low', 'Hell Sweep', 'Mandinga Builder'],
            description: 'The primary Mandinga builder. Your RLX hell sweep from Chapter 4 — every time it connects, you gain a level. This is usually how you\'ll build Mandinga in a real match.',
            notes: ['Builds 1 Mandinga level on hit', 'Clean hit required for second hit guarantee', 'On hit when gaining Mandinga: -3 (second hit pushes away)'],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="HSP.2,3"
          move={{
            input: 'HSP 2,3',
            hitLevel: ['m', 'm'],
            damage: '15, 23',
            startup: 'i17~18',
            onBlock: '-13',
            onHit: '+10a (+1)',
            tags: ['Mid', 'Mandinga Builder', 'Combo Tool'],
            description: 'A mid-mid string from Handstand that builds Mandinga. Good in combos and as a delayed string — the second hit can be delayed up to 9 frames for timing mixups. Also cancels back into HSP with F.',
            notes: [
              'Builds 1 Mandinga level on hit',
              '-13 on block — punishable',
              'HSP 2 alone is -8 (safe) — only commit to 2,3 on hit',
              'Cancel to HSP with F after the 2 — bait and re-enter',
              'Good combo filler that also builds your install',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="db+4,4"
          move={{
            input: 'db+4,4',
            hitLevel: ['m', 'h'],
            damage: '14, 27',
            startup: 'i17~18',
            onBlock: '+1',
            onHit: '+35a (+9)',
            tags: ['Mid', 'Mandinga Builder', 'Plus on Block', 'Combo Ender'],
            description: 'Your primary combo ender that builds Mandinga. Mid-high, +1 on block with chip damage. Second hit is a high (duckable) but combos naturally from first. Used at the end of combos to guarantee Mandinga for the next interaction.',
            notes: [
              'Builds 1 Mandinga level on hit',
              '+1 on block with 8 chip damage — safe',
              'Second hit is high — can be ducked if opponent blocks first hit',
              'Primary combo ender for Mandinga building',
              'Also has long range as a standalone whiff punisher',
            ],
          }}
          showVideo
        />

        <TipBox variant="tip" title="Natural Building">
          You don't need a "Mandinga strategy." Just play Eddy's game: land your RLX 50/50s, end combos
          with <code>db+4,4</code>, and Mandinga builds itself. By mid-round, you'll usually have
          at least level 1. The install rewards you for doing what you'd do anyway.
        </TipBox>
      </Section>

      <Section title="What Mandinga Unlocks">
        <h3>Level 1: The New Options</h3>

        <MoveCard character="eddy"
          videoId="HSP.b+4"
          move={{
            input: 'HSP b+4 (MND 1)',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i23~25',
            onBlock: '+7',
            onHit: '+15d',
            tags: ['Mid', 'Plus on Block', 'Mandinga', 'Low Crush'],
            description: 'Mandinga Level 1 mid from Handstand. Plus seven on block. Low crushes. This is the move that makes HSP a real 50/50 — a plus-on-block mid that the opponent has to respect.',
            notes: [
              '+7 on block — your turn continues in standing',
              '+15 on hit — spike for guaranteed follow-up options',
              'Low crushes during animation',
              'Hold D to transition to RLX at +7 block / +15 hit',
              'Linear — can be sidestepped',
              '7 chip damage on block',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="HSP.3+4"
          move={{
            input: 'HSP 3+4 (MND 1)',
            hitLevel: ['l', 'm', 'm'],
            damage: '6, 6, 18',
            startup: 'i21~22',
            onBlock: '-13',
            onHit: '+4c',
            tags: ['Low', 'Mandinga', 'HSP Low'],
            description: 'Mandinga Level 1 low from Handstand. This is the move that didn\'t exist before — a threatening low from HSP. Makes the HSP b+4 mid threat real because now they have to guess.',
            notes: [
              'First hit is low — must be crouch blocked',
              '-13 on block — punishable but not launch punishable',
              '+4 on hit in crouch — your crouch options continue',
              'Without this, HSP has no real low threat',
            ],
          }}
          showVideo
        />

        <KeyConcept title="HSP Transforms" icon="🔥">
          <p>
            Before Mandinga, HSP is a frame trap stance — you use plus frames to enforce mids and
            an unbreakable throw. The opponent can stand block everything and only worry about ducking
            the throw.
          </p>
          <p style={{ marginTop: '12px' }}>
            After Mandinga Level 1, HSP becomes a <strong>true 50/50 stance</strong>. HSP b+4 is a
            +7 mid they must block standing. HSP 3+4 is a low they must block crouching. The opponent
            can't cover both. Now HSP is as dangerous as RLX — and the two stances feed each other.
          </p>
        </KeyConcept>

        <h3>Level 2: The Power-Up</h3>
        <p>
          At Mandinga level 2, both moves get stronger:
        </p>
        <ul>
          <li><strong>HSP b+4 (MND 2)</strong> — Now knocks down on hit. Wall splats. Same +7 on block.</li>
          <li><strong>HSP 3+4 (MND 2)</strong> — Now knocks down on hit. Floor breaks for combo opportunities.</li>
        </ul>
        <p>
          Level 2 turns correct reads into devastating damage. The mid now leads to wall combos.
          The low now leads to floor break combos on stages that allow it. Stage awareness becomes
          critical — knowing when your level 2 HSP 3+4 will break the floor changes your decision-making.
        </p>
      </Section>

      <Section title="The Auto Low Parry">
        <p>
          One more thing Mandinga gives you: at level 1 or higher, <strong>Handstand auto-parries
          lows</strong>. This is huge. Without Mandinga, a simple d+1 jab beats many HSP options.
          With Mandinga, that d+1 gets parried and you get a guaranteed punish via the Ogum Mandinga
          transition. This means opponents can't casually poke you out of Handstand with lows anymore.
        </p>

        <TipBox variant="tip" title="Practical Mandinga Priorities">
          <p>
            <strong>Get level 1 as fast as possible.</strong> Level 1 transforms Handstand and gives
            you the auto low parry. Level 2 is nice but not critical — it's a damage upgrade, not
            a game changer. End every combo with <code>db+4,4</code> and land your RLX 3,3 hell
            sweeps. Between combos and natural RLX play, level 1 usually comes by mid-round.
          </p>
        </TipBox>
      </Section>

      <Section title="The Complete Flywheel">
        <p>
          Now you can see the full picture:
        </p>
        <ol>
          <li><strong>Approach</strong> with WR 3 or <code>f,f+3</code> — enter stance with plus frames</li>
          <li><strong>Force 50/50</strong> from RLX (RLX 3,3 vs RLX 4,3) or from HSP with Mandinga (HSP b+4 vs HSP 3+4)</li>
          <li><strong>Build Mandinga</strong> from RLX 3,3, HSP 2,3, or db+4,4 combo enders</li>
          <li><strong>HSP gets deadlier</strong> — real low threat + auto low parry + plus on block mid</li>
          <li><strong>More threatening stances → harder decisions → more damage → more Mandinga</strong></li>
        </ol>
        <p>
          The flywheel is complete. Every revolution makes the next one stronger. This is Eddy Gordo.
        </p>

        <PracticeBox
          title="Mandinga in Action"
          setup="Practice Mode. Set dummy to Stand Guard."
          tasks={[
            { id: 'eddy-build-mnd1', text: 'Build Mandinga level 1 via RLX 3,3', detail: 'f,f+3 on hit → RLX 3,3 (clean hit). Watch the icon appear under your health bar.', type: 'toggle' },
            { id: 'eddy-hsp-b4', text: 'Enter HSP and use HSP b+4 with Mandinga', detail: 'f+1+2 to enter HSP, then b+4. See it\'s +7 on block. Hold D after to go to RLX.', type: 'toggle' },
            { id: 'eddy-hsp-34', text: 'Enter HSP and use HSP 3+4 with Mandinga', detail: 'Same entry, press 3+4. See the low option that didn\'t exist before.', type: 'toggle' },
            { id: 'eddy-build-mnd2', text: 'Build Mandinga level 2 and see the power-up', detail: 'Get two stacks (land two builders or one builder + heat). Test HSP b+4 — now it knocks down.', type: 'toggle' },
            { id: 'eddy-combo-db44', text: 'End a combo with db+4,4 to build Mandinga', detail: 'Launch with df+3, do a short combo, end with db+4,4. Free Mandinga from combos.', type: 'toggle' },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You understand the system. Now you need the execution to match — combos that carry to the
          wall, build Mandinga, and convert stray hits into real damage. Next chapter covers
          Eddy's combo routes from every major launcher.
        </p>
      </Section>
    </Chapter>
  )
}
