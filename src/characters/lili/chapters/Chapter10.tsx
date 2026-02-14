import { Chapter, Section } from '../../../components/guide'
import {
  KeyConcept,
  TipBox,
  PracticeBox,
  DecisionGrid,
  Flowchart,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="The Ranked Playbook"
      intro="You have the tools. You have the combos. You know the stances, the plus frames, the 50/50. Now it's time to put it all together into a game plan that wins ranked sets. This chapter is your playbook — the round-by-round strategy, the defensive toolkit, the mental framework that turns knowledge into victories."
      hasPrevious
      onPrevious={() => goToChapter(9)}
    >
      <Section title="The First Ten Seconds">
        <p>
          Round starts set the tone. Lili has several strong openers depending on what you
          want to learn about the opponent.
        </p>

        <DecisionGrid
          title="Round Start Options"
          description="Your first move tells the opponent what kind of Lili player you are. Choose deliberately."
          rows={[
            { situation: 'Want to test their patience', response: 'Backdash → 3,1 on whiff', reason: 'Defensive start, activates heat if they overcommit', risk: 'Does nothing if they also wait' },
            { situation: 'Want immediate pressure', response: 'qcf+3+4 approach', reason: '+6 on block locks them down immediately', risk: 'Both hits are high — can be ducked on read' },
            { situation: 'Want to evade and punish', response: 'Sidestep → df+1 or f+4', reason: 'Tests if their round-start option is linear', risk: 'Homing moves or fast mids will catch you' },
            { situation: 'Want heat immediately', response: 'FYR 2 (b+4 → 2)', reason: 'Safe mid heat engager from an evasive angle', risk: 'Can be interrupted if the opponent is aggressive' },
            { situation: 'Want a big read', response: 'uf+3+4 (jumping knee)', reason: 'Evades lows, launches on hit, safe on block', risk: 'Whiffing gives them a free combo' },
          ]}
        />
      </Section>

      <Section title="The Three-Phase Round Plan">
        <Flowchart
          title="How a Lili Round Should Flow"
          nodes={[
            { type: 'start', label: 'Round Start' },
            { type: 'decision', label: 'Phase 1: Read the Opponent (first 5 seconds)', branches: [
              { label: 'They press buttons', action: 'Sidestep → whiff punish with 3,1 or f+4 keepout' },
              { label: 'They turtle', action: 'Chip with d+3, d+1,2 → transition to pressure' },
            ]},
            { type: 'decision', label: 'Phase 2: Build the Cage (mid-round)', branches: [
              { label: 'You have momentum', action: 'qcf+3+4 → df+3 → plus frame loop → backturn' },
              { label: 'They adapted', action: 'Switch to b+1~F fishing, d+3 chip, sidestep → punish' },
            ]},
            { type: 'decision', label: 'Phase 3: Cash Out (low health or heat)', branches: [
              { label: 'You have heat', action: 'Feisty Rabbit 50/50 or chip with ff+3+4/qcf+1,4' },
              { label: 'No heat, need damage', action: 'f,f+4 (power low), d+3 round ender, or f+4 keepout' },
            ]},
            { type: 'end', label: 'Win condition: opponent broke mentally before their health bar did' },
          ]}
        />
      </Section>

      <Section title="Defensive Tools">
        <p>
          Lili isn't just offense. Her defensive toolkit is underrated — she has the best sidestep
          in the game, multiple panic moves, and counter hit launchers that punish aggressive opponents.
        </p>

        <KeyConcept title="The Sidestep" icon="💨">
          <p>
            Lili's sidestep is the best in the game. She covers more distance per step than any
            other character, making her effectively "more minus" on defense than she appears. At -1
            from <code>df+1</code> on block, her sidestep makes her practically neutral. At -3 from
            <code>f+3</code> on block, she can step most retaliation.
          </p>
          <p style={{ marginTop: '8px' }}>
            Use the sidestep not just to evade, but to create whiffs. Step, watch the opponent's
            move go past you, then punish with <code>3,1</code> or <code>df+2</code> for a full
            combo. This is how patient Lili players dismantle aggressive opponents.
          </p>
        </KeyConcept>

        <DecisionGrid
          title="Defensive Options"
          description="When you're under pressure, these tools get you out."
          rows={[
            { situation: 'Opponent jabbing/pressing', response: 'db+3 (high crush CH launcher)', reason: 'Goes under all highs, CH launches for full combo', risk: 'Slow (i19), loses to mids' },
            { situation: 'Need space immediately', response: '1+2 (i12 mid, wall splat)', reason: 'Fast mid that pushes opponents away', risk: '-12 on block — they get a punish' },
            { situation: 'Opponent doing lows', response: 'Low parry or d+3+4 (Matterhorn)', reason: 'Low parry is universal; Matterhorn evades lows and mids', risk: 'Matterhorn is -21 on block — death on read' },
            { situation: 'Heavy pressure, need to escape', response: 'u+3+4 (jumping flip)', reason: 'Evasive, safe on block, launches on clean hit', risk: 'Terrible range — whiffs if opponent is too far' },
            { situation: 'Need armor through a string', response: 'd+1+2 (power crush) or DEW 1+2', reason: 'Armored mids that wall splat', risk: '-13 on block for d+1+2, -11 for DEW 1+2' },
            { situation: 'Opponent is predictable', response: 'Sidestep → whiff punish', reason: 'Lili\'s sidestep is the best in the game', risk: 'Loses to homing and good tracking moves' },
          ]}
        />
      </Section>

      <Section title="Rank-Specific Advice">
        <KeyConcept title="Beginner to Warrior" icon="🌱">
          <p>
            Focus on three things: <code>df+1</code> for checking, <code>d+3</code> for conditioning,
            and <code>f+4</code> for keepout. Learn one combo from <code>uf+3</code> and one from
            <code>ws+3</code>. Punish with <code>f+2,3</code> for everything -12 or worse. Don't
            worry about stances yet — use <code>qcf+3+4</code> for plus frames and that's enough.
          </p>
          <p style={{ marginTop: '8px' }}>
            At this level, opponents press too many buttons. Fish with <code>f+4</code> after your
            plus frame tools and watch the counter hit launches roll in. <code>d+3</code> will hit
            unblocked 80% of the time. Abuse it.
          </p>
        </KeyConcept>

        <KeyConcept title="Vanquisher to Bushin" icon="⚔️">
          <p>
            Start incorporating <code>b+1~F</code> stance pressure and backturn transitions from
            <code>1,1</code> and <code>d+1,2~B</code>. Learn to cancel Dew Glide with <code>u</code>{' '}
            and use the sidestep to fish safely. Add <code>df+3</code> to your plus frame toolkit
            and learn the conditioning cycle from Chapter 5.
          </p>
          <p style={{ marginTop: '8px' }}>
            Opponents here start blocking lows. Shift from raw <code>d+3</code> spam to the
            conditioning cycle: chip → they crouch → mid launch → they stand → power low. Use heat
            for Feisty Rabbit 50/50s after knockdowns.
          </p>
        </KeyConcept>

        <KeyConcept title="Tekken King to Fujin+" icon="👑">
          <p>
            Movement becomes your weapon. Backdash-sidestep rhythms to create whiffs, then punish
            with <code>3,1</code> for heat or <code>df+2</code> for launches. Use the full stance
            toolkit — Dew Glide cancels, Feisty Rabbit from backturn, DEW df+3 and DEW df+4 for
            counter hit launches from stance.
          </p>
          <p style={{ marginTop: '8px' }}>
            At this level, opponents know Lili's tricks. You need to be genuinely unpredictable —
            never do the same backturn option twice, vary your Dew Glide commitments, change the
            timing of your lows. The opponent who reads your pattern will destroy you. The opponent
            who can't will crumble under the pressure.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Mental Game">
        <TipBox variant="tip" title="Pattern-Breaking Is the Skill">
          The difference between a good Lili and a great one isn't execution — it's unpredictability.
          If you notice yourself doing <code>d+1,2~B → BT d+2</code> three times in a row, you've
          already been read. Rotate your options. Do the low twice, then the mid. Enter backturn
          and turn back around. Do nothing and let them press into your counter hit launcher. The
          moment you become predictable, Lili's entire game collapses — because every option she has
          is unsafe if the opponent knows it's coming.
        </TipBox>

        <KeyConcept title="When You're Losing" icon="🔄">
          <p>
            Lili players who are losing tend to do one of two things: panic into Matterhorn or
            autopilot into the same pressure strings. Both are death. Instead:
          </p>
          <ul>
            <li><strong>Slow down.</strong> Backdash to your preferred range and wait. Let the opponent come to you.</li>
            <li><strong>Use your sidestep.</strong> If they're pressing, step and launch. Lili's sidestep converts their aggression into your damage.</li>
            <li><strong>Change your low timing.</strong> If they're blocking your lows, they're reading your rhythm. Change when the low comes in the sequence — not which low you use.</li>
            <li><strong>Cash out heat early.</strong> If you're behind, don't save heat for the perfect moment. Use it now — the 50/50 might be the comeback you need.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Final Drill">
        <PracticeBox
          title="Putting It All Together"
          setup="Practice Mode. Lili vs any opponent. Set dummy to Guard Random, 2nd Action: Random."
          tasks={[
            { id: 'lili-playbook-pressure', text: 'Run a full pressure sequence: approach → lock → cash out', detail: 'Start with qcf+3+4 on block, follow with df+3 or df+1, read the opponent\'s response, and end with either a backturn mix or a low. Complete the full waltz three times.', type: 'counter', target: 3 },
            { id: 'lili-playbook-defense', text: 'Block three attacks and punish with the correct punisher each time', detail: 'Record the dummy doing three different unsafe moves. Block each one and punish with the correct punish (f+2,3 for -12, ws+1,2 for crouching, etc.).', type: 'counter', target: 3 },
            { id: 'lili-playbook-ch-fish', text: 'Fish with b+1~F cancel five times, then commit once for a CH launch', detail: 'Do b+1~F → cancel with u → sidestep five times. On the sixth time, commit to DEW 2,1 or DEW 3+4. This is the patience game — fish, fish, cash.', type: 'counter', target: 6 },
            { id: 'lili-playbook-variety', text: 'Enter backturn five times and do a different option each time', detail: 'Use five different BT options: BT d+2, BT 3,4, BT 1+2, hold db (turn around), BT 2 (power crush). Never repeat. This is the golden rule in action.', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="You're Ready">
          You've learned the waltz. Approach, lock, choose. You know the neutral tools, the plus
          frames, the backturn mix, the low game, the stances, the punishment, the heat, and the
          combos. Everything from here is repetition and adaptation — playing matches, reading
          opponents, adjusting faster than they do. The guide taught you the tools. The matches
          will teach you the music. Go dance.
        </TipBox>
      </Section>
    </Chapter>
  )
}
