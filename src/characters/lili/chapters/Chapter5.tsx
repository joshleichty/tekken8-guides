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
      title="The Low Game"
      intro="Lili's lows don't individually do massive damage. They chip, they condition, they frustrate. Each one steals a little life and plants a little doubt — and doubt is what makes the opponent duck, which is when your mids launch them. This chapter teaches your full low arsenal and when each one earns its place."
      hasPrevious
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Dew Glide & Feisty Rabbit"
    >
      <Section title="The Chip Low: d+3">
        <p>
          You met <code>d+3</code> in the neutral chapter. Here's the deeper truth: this move
          is less about damage and more about conditioning. Every time it hits, the opponent thinks
          "I should block low." Every time they block low, your mids become free.
        </p>

        <MoveCard character="lili"
          videoId="d+3"
          move={{
            input: 'd+3',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i19~20',
            onBlock: '-12',
            onHit: '+1',
            onCH: '+5c',
            tags: ['Low', 'Tracking', 'Range'],
            description: 'Your main harassment low. Huge range, tracks both sides, chips opponents who block standing. The goal isn\'t the 14 damage — it\'s making them start ducking, which opens up your mid launchers. On counter hit (+5c), the opponent is crouching and 1+2 becomes a frame trap.',
          }}
          showVideo
        />

        <p>
          Use <code>d+3</code> liberally early in the round to establish that lows exist. Once
          the opponent starts low-blocking, switch to <code>df+3</code> (which beats crouch) or
          <code> f+4</code> (which launches standing). The conditioning cycle is the game.
        </p>
      </Section>

      <Section title="The Pressure Low: d+1,2">
        <MoveCard character="lili"
          videoId="d+1,2"
          move={{
            input: 'd+1,2',
            hitLevel: ['l', 'h'],
            damage: '10, 8',
            startup: 'i18~19',
            onBlock: '-8',
            onHit: '+3',
            onCH: '+5',
            tags: ['Low', 'Backturn Transition', 'Evasion'],
            description: 'One of Lili\'s most annoying tools. A low-high natural combo that evades highs during the animation and transitions to backturn with B. At +3 on hit, you\'re directly in backturn pressure. The opponent has to deal with your BT options immediately — and most people don\'t block this consistently.',
            notes: [
              'Natural combo — second hit guaranteed if first connects',
              'd+1,2~B: transitions to BT at +3 on hit — BT d+2 and BT 3 are both strong',
              'Evades many highs during the low animation',
              'd+1 alone: 0 on hit, -11 on block, transitions to FC with D',
              'Keep using this until the opponent proves they can block it consistently',
              'Extension d+1,2,4: mid kick that catches mashers between 2nd and 3rd hit',
            ],
          }}
          showVideo
        />

        <KeyConcept title="The d+1,2 Pressure Chain" icon="🔗">
          <p>
            <code>d+1,2~B</code> on hit is +3 in backturn. From there:
          </p>
          <ul>
            <li><code>BT d+2</code> — low that beats standing and jabs (high crush)</li>
            <li><code>BT 3,4</code> — homing mid that catches steps and beats jabs</li>
            <li><code>BT 1+2</code> — launch if you read them freezing</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            If the opponent blocks <code>d+1</code> alone (the first hit), they often won't punish
            because they're watching for the high extension. This means you can sometimes get away
            with raw <code>d+1</code> into full crouch for a <code>fc df+1</code> mid check.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Power Low: f,f+4">
        <MoveCard character="lili"
          videoId="f,F+4"
          move={{
            input: 'f,f+4',
            hitLevel: ['l'],
            damage: '23',
            startup: 'i22~23',
            onBlock: '-12',
            onHit: '+4',
            onCH: '+4 (BT 1,2 or BT 1,4 guaranteed)',
            tags: ['Low', 'Backturn Transition', 'Round Ender'],
            description: 'Root of Evil. This is Lili\'s scariest low — 23 damage, deceptive animation that looks mid, and it transitions to backturn for deadly follow-ups. On counter hit with BT entry, bt 1,2 or bt 1,4 (heat engager) are guaranteed. A round ender that closes games.',
            notes: [
              'Hold B: +10 in BT on hit — bt d+2, bt 3,4, bt 1,4 all catch buttons',
              'On CH + B: bt 1,2 or bt 1,4 (heat engager) fully guaranteed',
              '-12 on block without B entry — standard punishment',
              'With B entry on block: can power crush (bt 2) through i12 punishers',
              'f,f+4~B tracks both sides well — rare tracking for Lili',
              'Deceptive animation — appears to hit mid',
            ],
          }}
          showVideo
        />

        <TipBox variant="tip" title="Round Ender">
          In a final-hit situation where both players are at low health, <code>f,f+4</code> is
          devastating. The opponent has to decide: block low and eat your mids, or block standing
          and take 23 damage plus backturn pressure? At low health, that 23 damage plus a guaranteed
          BT follow-up often closes the round outright.
        </TipBox>
      </Section>

      <Section title="The Slide: FC df+3">
        <MoveCard character="lili"
          videoId="FC.df+3"
          move={{
            input: 'FC df+3',
            hitLevel: ['l'],
            damage: '19',
            startup: 'i19~28',
            onBlock: '-18~-9',
            onHit: '-2~+7',
            onCH: 'Launch',
            tags: ['Low', 'High Crush', 'CH Launcher'],
            description: 'Horizon Slide — a Season 2 game-changer. Sped up from i23 to i19, this is now a borderline unseeable low that high-crushes and counter hit launches. Can be done from full crouch or from Dew Glide (DEW df+3), giving Lili a low option from her stance that she never had before.',
            notes: [
              'From FC: i19 startup — very fast for a launching low',
              'From Dew Glide (DEW df+3): access the slide from stance pressure',
              'High crush throughout — goes under jabs and standing highs',
              'On CH: full combo with d+1,2~B → BT 3,4 → b+1,4 T! etc.',
              'Frames vary by range: closer = more minus on block, more plus on hit',
              'Further range is safer on block but easier to react to',
            ],
          }}
          showVideo
        />

        <p>
          The slide from Dew Glide is what makes <code>b+1~F</code> pressure truly dangerous in
          Season 2. Previously, the opponent could block standing against all Dew Glide options
          since they were all mids and highs. Now, ducking into the slide punishes anyone who
          tries to stand-block their way through your stance.
        </p>
      </Section>

      <Section title="Situational Lows">
        <MoveCard character="lili"
          videoId="db+4"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i30~31',
            onBlock: '-24 (stagger)',
            onHit: 'Launch',
            tags: ['Low', 'Snake Edge', 'Homing'],
            description: 'Lili\'s snake edge. Homing and evasive, but 30 frames is reactable by good players. Use as a last resort panic tool or when you read the opponent committing to a standing block. Getting blocked means death, but landing it means a full combo. High risk, high reward.',
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="db+3+4"
          move={{
            input: 'db+3+4',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i24~25',
            onBlock: '-18',
            onHit: '+3d',
            onCH: 'Launch',
            tags: ['Low', 'High Crush', 'CH Launcher'],
            description: 'Faster than the snake edge but still reactable. Goes under highs reliably — even Mishima electrics. On counter hit, ws+3 is guaranteed at the wall. On normal hit, fc df+1 tends to catch most wake-up options. Use occasionally to surprise opponents committed to standing.',
          }}
          showVideo
        />
      </Section>

      <Section title="The Conditioning Cycle">
        <KeyConcept title="How Lows Win Rounds" icon="🧠">
          <p>
            Lili's lows don't win through raw damage. They win by creating doubt. Here's the cycle:
          </p>
          <ol>
            <li><strong>Chip with d+3 and d+1,2</strong> — small damage that adds up and forces the opponent to think about blocking low</li>
            <li><strong>When they start crouching</strong> — hit them with df+3 (plus on block, CH launches) or f+4 (safe, CH launches)</li>
            <li><strong>When they go back to standing</strong> — hit them with f,f+4 for big damage into backturn</li>
            <li><strong>Repeat</strong> — every time the opponent adjusts, you adjust faster</li>
          </ol>
          <p style={{ marginTop: '8px' }}>
            This is Lili's game. Not memorizing combos — reading the opponent's defensive habits
            and choosing the tool that punishes their current pattern.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practice: Low Game Integration">
        <PracticeBox
          title="The Conditioning Drill"
          setup="Practice Mode. Lili vs any opponent. Set dummy to random guard (Guard: Random)."
          tasks={[
            { id: 'lili-low-d3-chip', text: 'Land d+3 five times from various ranges', detail: 'Approach from different distances and land d+3. Notice how far this low reaches compared to most characters.', type: 'counter', target: 5 },
            { id: 'lili-low-d12b', text: 'Land d+1,2~B into BT d+2 three times', detail: 'Low-high string into backturn low. The full sequence: d+1,2 hold B, then d+2 from BT.', type: 'counter', target: 3 },
            { id: 'lili-low-ff4b-bt14', text: 'Land f,f+4~B on counter hit into BT 1,4 three times', detail: 'Set dummy to "Counter Hit" mode. Land f,f+4, hold B, then do bt 1,4 for the guaranteed heat engager.', type: 'counter', target: 3 },
            { id: 'lili-low-slide', text: 'Perform FC df+3 from full crouch and from DEW five times each', detail: 'From crouch: hold d, then df+3. From DEW: qcf motion, then df+3 during the stance. Both access the same slide.', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
