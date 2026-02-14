import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  DecisionGrid,
  Flowchart,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Heat & the 50/50"
      intro="Lili's heat system doesn't just give her a burst of power — it transforms her stances into genuine nightmares. Feisty Rabbit becomes a true 50/50 where both answers hurt. Her chip moves become plus on block. Her heat smashes give her mix from angles she normally can't access. This chapter teaches when to activate heat, how to spend it efficiently, and how to force the opponent into the guesses that win rounds."
      hasPrevious
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Combo Architecture"
    >
      <Section title="Getting Into Heat">
        <p>
          Before you can use heat, you need to activate it. Lili has several heat engagers — each
          with different risk profiles and situations. Choosing the right one determines whether
          you enter heat with momentum or scramble to catch up.
        </p>

        <DecisionGrid
          title="Heat Engager Selection"
          description="Choose your heat engager based on the situation. Better setups = better heat."
          rows={[
            { situation: 'Whiff punish or block punish', response: '3,1 (i15, long range)', reason: 'Fastest heat engager, absurd range, launches in heat', risk: '-13 on block — never throw raw' },
            { situation: 'Neutral/poking', response: '3+4 (homing double high)', reason: 'Jails on block at -2, homing, chip damage', risk: 'Slow (i23), can be ducked and launched if read' },
            { situation: 'Dew Glide pressure', response: 'DEW 2,1 (homing mid-mid)', reason: 'Homing, guaranteed after CH b+1~F', risk: '-13 on block, non-confirmable — commit or don\'t' },
            { situation: 'Feisty Rabbit mix', response: 'FYR 2 (safe mid)', reason: 'Safe at -9, clean heat activation from stance', risk: 'Requires entering Feisty Rabbit first' },
            { situation: 'Backturn pressure', response: 'BT 1,4 (double high)', reason: 'Guaranteed after CH f,f+4~B, 8f startup', risk: 'Doesn\'t jail — second hit can be ducked on block' },
          ]}
        />

        <TipBox variant="tip" title="The Defensive Heat Start">
          Experienced Lili players often activate heat defensively with <code>3,1</code>. Backdash
          at round start, wait for the opponent to whiff, then <code>3,1</code> for a knockdown plus
          heat activation. This gives you heat from a safe position with the opponent already on the
          back foot. You don't need to rush heat — Lili's heat is best used from a position of control.
        </TipBox>
      </Section>

      <Section title="What Heat Changes">
        <KeyConcept title="The Chip Machine" icon="💥">
          <p>
            In heat, several of Lili's moves gain chip damage and become plus on block:
          </p>
          <ul>
            <li><code>f,f+3+4</code> — becomes +7~+13 on block with heavy chip</li>
            <li><code>qcf+1,4</code> — becomes +7 on block with chip (safe mid-mid)</li>
            <li><code>1,2,4</code> — becomes +5~+10 on block with chip</li>
            <li><code>FYR 4</code> — becomes +7~+13 on block with chip</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            These moves consume heat bar for each use, so you typically get 2-3 chip interactions
            before heat expires. Use them wisely — chip damage is recoverable, so the opponent gets
            it back if you let them attack. The real value is the plus frames, not the chip.
          </p>
        </KeyConcept>

        <KeyConcept title="The Heat 50/50" icon="🎭">
          <p>
            Feisty Rabbit in heat is one of the strongest 50/50s in the game:
          </p>
          <ul>
            <li><code>FYR 2</code> — mid heat dash launcher. Massive combo damage.</li>
            <li><code>FYR 3</code> — low that knocks down on normal hit. Guaranteed <code>qcf+3</code> on the ground.</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            The opponent must guess. Block mid and eat 42+ damage from the low plus follow-up. Block
            low and eat a full heat dash combo worth 60+. There is no "safe" answer — only a guess.
            This is where Lili's heat wins rounds.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Heat Smashes">
        <MoveCard character="lili"
          videoId="H.2+3"
          move={{
            input: 'H.2+3',
            hitLevel: ['m', 't'],
            damage: '55',
            startup: 'i16',
            onBlock: '+7',
            onHit: '+0d',
            tags: ['Heat Smash', 'Mid', 'DEW Transition'],
            description: 'Lili\'s Season 2 heat smash from neutral. At i16, it\'s fast for a heat smash. +7 on block by itself, but hold F to transition to Dew Glide at +14 — where everything becomes a mix. DEW 1,4 is safe chip, the slide (DEW df+3) catches duckers, and DEW 2,1 catches steppers. Beats power crushes but loses to Rage Arts.',
            notes: [
              'i16 — fast for a heat smash',
              '+7 on block, +14 into Dew Glide with F',
              'At +14 in DEW: everything is a frame trap',
              'Beats power crushes, loses to Rage Arts',
              'Consumes remaining heat bar',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="H.BT.2+3"
          move={{
            input: 'H.BT 2+3',
            hitLevel: ['l', 'm', 'm', 'm'],
            damage: '15, 5, 5, 20',
            startup: 'i16',
            onBlock: '-8',
            onHit: '+23a (+5)',
            tags: ['Heat Smash', 'Low', 'Backturn', 'Homing'],
            description: 'Lili\'s backturn heat smash — an unseeable low that homing tracks. From the right distance at the wall, this juggles for a combo. On block, Lili can turn around to block i15 punishers and power crush through i14 with BT 2. This is the low side of her BT heat mix — pair it with BT 1+2 (mid launcher) to make the opponent guess.',
            notes: [
              'Unseeable low from backturn — homing',
              'Juggles near the wall for big damage',
              '-8 on block — can turn around to block i15+ punishers',
              'High crush during animation',
              'Consumes remaining heat bar',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="Heat String: 3+4, 3+4">
        <p>
          Lili's old Season 1 heat smash animation now functions as a heat string in Season 2.
          Input <code>H.3+4, 3+4</code> while in heat to do the full sequence — it's +7 on block
          and leaves you in backturn. This is essentially a slow homing approach tool that puts you
          directly into BT pressure at heavy plus frames.
        </p>
        <p>
          The startup is very slow (same i23 as regular 3+4), so this is best used at heavy frame
          advantage (+6 or more) where the opponent can't interrupt. After <code>qcf+3+4</code> on
          block (+6), the heat string becomes unreactable and puts you at +7 in backturn — from where
          every BT option becomes a real threat.
        </p>
      </Section>

      <Section title="When to Force the 50/50">
        <Flowchart
          title="Heat Decision Tree"
          nodes={[
            { type: 'start', label: 'You activated Heat' },
            { type: 'decision', label: 'How much life lead do you have?', branches: [
              { label: 'Ahead or even', action: 'Chip with ff+3+4, qcf+1,4, 1,2,4 — drain them slowly' },
              { label: 'Behind', action: 'Go for Feisty Rabbit 50/50 immediately — you need the damage' },
            ]},
            { type: 'decision', label: 'After chip: opponent freezing or pressing?', branches: [
              { label: 'Freezing', action: 'Set up Feisty Rabbit from a knockdown or heavy plus' },
              { label: 'Pressing', action: 'Heat Smash (beats PC) or BT heat smash (low from BT)' },
            ]},
            { type: 'end', label: 'After FYR 50/50: double jump (b+3 hold) to recover heat bar if possible' },
          ]}
        />

        <KeyConcept title="Setting Up the 50/50" icon="🎯">
          <p>
            The Feisty Rabbit 50/50 is strongest after knockdowns. Cut combos short with a spike
            (<code>f+3+4</code>) or a <code>qcf+3</code> on the ground, then immediately enter
            Feisty Rabbit as the opponent wakes up. They have to guess mid or low before they can
            see what you're doing — and both answers cost half a life bar.
          </p>
          <p style={{ marginTop: '8px' }}>
            The 50/50 is also strong after heavy plus frames. After <code>qcf+3+4</code> on hit
            (+17), enter Feisty Rabbit directly — the opponent cannot interrupt and must guess.
            After heat chip moves on block (+7), Feisty Rabbit is slightly interruptible but most
            opponents won't press, giving you the setup for free.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Heat Management">
          Lili's chip moves consume significant heat bar. Using <code>f,f+3+4</code> in heat twice
          will drain most of your bar. If you want to save heat for the 50/50, limit your chip
          interactions to one or two, then force the guess. Alternatively, double-jump with held
          <code>b+3</code> or <code>b+4</code> to recover heat between interactions — but this
          only works if the opponent gives you space.
        </TipBox>
      </Section>

      <Section title="Practice: Heat Sequences">
        <PracticeBox
          title="The Heat Game Plan"
          setup="Practice Mode. Lili vs any opponent. Activate Heat with 2+3."
          tasks={[
            { id: 'lili-heat-chip', text: 'Land f,f+3+4 in heat on block, then follow with jabs three times', detail: 'Activate heat, run up and press f,f+3+4. Notice the chip damage and the +7 frames. Follow with 1,2 as a frame trap.', type: 'counter', target: 3 },
            { id: 'lili-heat-fyr-low', text: 'Set up FYR 3 into qcf+3 on the ground three times', detail: 'Activate heat, enter Feisty Rabbit (b+3 or b+4), press 3 for the low. On hit, the opponent is knocked down — immediately do qcf+3 for guaranteed damage.', type: 'counter', target: 3 },
            { id: 'lili-heat-fyr-mid', text: 'Set up FYR 2 heat dash into combo three times', detail: 'Activate heat, enter Feisty Rabbit, press 2 for the mid. On hit, you get a heat dash — press forward to dash and continue into a full combo.', type: 'counter', target: 3 },
            { id: 'lili-heat-smash-dew', text: 'Land H.2+3 on block, hold F into DEW, do DEW df+3 (slide)', detail: 'Heat smash on block (+14 into DEW). From Dew Glide, press df+3 for the slide. This is the unseeable low threat from +14 — the opponent must guess.', type: 'counter', target: 3 },
            { id: 'lili-heat-bt-smash', text: 'From backturn, land H.BT 2+3 near the wall for a combo', detail: 'Enter BT (1,1 or ff4~B), then press 2+3 for the low heat smash. Near the wall, this juggles — practice the follow-up combo.', type: 'counter', target: 3 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
