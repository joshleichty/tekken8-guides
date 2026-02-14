import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  Flowchart,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="The Plus Frame Lock"
      intro="Lili doesn't win by landing single big hits. She wins by stacking small advantages until the opponent is locked in place, forced to guess, and terrified of pressing buttons. This chapter teaches the moves that build that cage — her plus-on-block and plus-on-hit tools — and how to chain them into suffocating pressure sequences."
      hasPrevious
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Backturn Pressure"
    >
      <Section title="Why Plus Frames Win Rounds">
        <p>
          When you're plus on block, the opponent can't attack without risking a counter hit. When
          you're plus on hit, your follow-up comes out before anything they try. Lili has an
          unusually deep set of tools that leave her plus in both situations. String enough of them
          together and the opponent is frozen — afraid to press, afraid to step, waiting for you to
          make a mistake. That's when you throw the low, or enter backturn, or fire off a counter
          hit launcher.
        </p>
        <p>
          The goal isn't to memorize a specific sequence. It's to understand which of your tools
          leave you plus, and what you can threaten from that advantage.
        </p>
      </Section>

      <Section title="The Pressure Starter: df+3">
        <MoveCard character="lili"
          move={{
            input: 'df+3',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i20~22',
            onBlock: '+3c',
            onHit: '+8c',
            onCH: 'Launch',
            tags: ['Mid', 'Plus on Block', 'CH Launcher'],
            description: 'Lili\'s most oppressive pressure tool. Plus three on block, plus eight on hit, forces the opponent into crouch on both — and counter hit launches for a full combo. It\'s slow and linear, so you set it up with plus frames from other tools rather than throwing it raw.',
            notes: [
              '+3c on block into crouching — df+4, d+3, or 1+2 are all strong follow-ups',
              '+8c on hit — f+4 becomes a frame trap, df+4 catches steps',
              'Counter hit launch — pickup with uf+4,3 or similar',
              'Forces crouch recovery on block and hit — limits opponent\'s retaliation',
              'Linear — set up from plus frames to prevent sidestepping',
            ],
          }}
          showVideo
        />

        <p>
          Notice the crouching recovery on block. When the opponent blocks <code>df+3</code> and recovers
          crouching at -3, their options are limited. They can't do standing moves without first
          standing up. Their fastest responses are while-standing jabs and power crushes. Your fast
          mids like <code>df+4</code> beat their slow responses, and your lows like <code>d+3</code>{' '}
          catch anyone trying to stand and block.
        </p>
      </Section>

      <Section title="The Jab Pressure: 1,2">
        <MoveCard character="lili"
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 12',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['High', 'Plus on Hit'],
            description: 'Lili\'s basic jab string. +8 on hit makes it one of the strongest jab strings in the game for setting up frame traps. Use it to check the opponent, steal turns, and build into your counter hit tools.',
            notes: [
              '+8 on hit — f+4 frame trap, df+4 to catch steps',
              '-3 on block — your sidestep makes this effectively neutral',
              'Extensions: 1,2,3 (low) and 1,2,4 (mid) — use sparingly for conditioning',
              'Both hits are high — can be ducked on read',
            ],
          }}
          showVideo
        />

        <KeyConcept title="The 1,2 Extensions" icon="⚖️">
          <p>
            <code>1,2,3</code> is a low extension and <code>1,2,4</code> is a mid extension.
            Neither is something you spam — the low is -13 and steppable, the mid is linear and
            can be interrupted. But their existence makes the opponent think twice after blocking
            <code> 1,2</code>. If they freeze up waiting for an extension, you get a free <code>d+3</code>{' '}
            or <code>df+3</code>. If they mash, the extensions catch them. Use them once or twice
            per round to plant the seed, then exploit the hesitation they create.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Running Approach: WR 1+2">
        <MoveCard character="lili"
          videoId="f,f,F+1+2"
          move={{
            input: 'f,f,F+1+2',
            hitLevel: ['h', 'h'],
            damage: '9, 16',
            startup: 'i13~14',
            onBlock: '+4',
            onHit: '+33d',
            tags: ['High', 'Plus on Block', 'Approach'],
            description: 'A Season 2 addition that gives Lili a running approach tool. +4 on block means you can frame trap with jabs and df+4 afterward. On hit, the opponent is knocked down and qcf+3 on the ground is guaranteed for huge damage. Mix this with f+3 at similar ranges to keep opponents honest.',
            notes: [
              '+4 on block — jabs, throws, and df+4 are strong follow-ups',
              'On hit: qcf+3 guaranteed on the ground for 47+ total damage',
              'Both hits are high — opponent can duck on read and launch',
              'Chip damage on block in and out of heat',
              'Mix with f+3 (mid homing) at running range to prevent ducking',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="The Stomp Lock: f,f+4~B">
        <MoveCard character="lili"
          videoId="f,F+4"
          move={{
            input: 'f,f+4',
            hitLevel: ['l'],
            damage: '23',
            startup: 'i22~23',
            onBlock: '-12',
            onHit: '+4',
            tags: ['Low', 'Backturn Transition'],
            description: 'Lili\'s power low. On hit, transition to backturn with B for +10 guaranteed frames — bt 1,2 and bt 1,4 become real threats. On counter hit, bt 1,2 or bt 1,4 (heat engager) are completely guaranteed. The animation looks mid, tricking opponents into blocking high.',
            notes: [
              'Hold B on hit: +10 in BT — bt d+2, bt 3,4, and bt 1,4 are strong',
              'Counter hit + B: bt 1,2 or bt 1,4 (heat engager) guaranteed',
              '-12 on block without BT, but with BT Lili can power crush through i12 punishers',
              'Tracks both sides well with BT entry — rare for Lili',
              'Deceptive animation — looks mid, hits low',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="The Pressure Flowchart">
        <p>
          Here's how these tools chain together in practice. This isn't a rigid sequence — it's
          a decision tree based on what the opponent does.
        </p>

        <Flowchart
          title="Plus Frame Pressure Loop"
          nodes={[
            { type: 'start', label: 'Approach with qcf+3+4 (+6 on block)' },
            { type: 'decision', label: 'Opponent freezes or presses?', branches: [
              { label: 'They freeze', action: 'df+3 (+3 on block, +8 on hit, CH launch) or d+3 (chipping low)' },
              { label: 'They press', action: 'f+4 counter hit launch or df+4 tracking mid check' },
            ]},
            { type: 'decision', label: 'After df+3 on block (+3c, opponent crouching)', branches: [
              { label: 'They try to stand', action: 'df+4 or d+3 catch them moving' },
              { label: 'They stay crouching', action: '1+2 (fast mid) or ws+4 bait into full crouch mix' },
            ]},
            { type: 'decision', label: 'After df+3 on hit (+8c)', branches: [
              { label: 'They press', action: 'f+4 counter hit launch' },
              { label: 'They block', action: 'f,f+4~B into backturn pressure or d+3 to chip' },
            ]},
            { type: 'end', label: 'Loop back: every outcome leads to your next plus-frame tool' },
          ]}
        />

        <TipBox variant="warning" title="Don't Autopilot">
          This flowchart describes options, not a script. If you do the same sequence every time,
          the opponent will catch on. The power of plus frames is that you get to <em>choose</em>{' '}
          what happens next — use that freedom to stay unpredictable. Sometimes the best follow-up
          to plus frames is doing nothing and letting the opponent panic into a whiff.
        </TipBox>
      </Section>

      <Section title="Practice: The Lock">
        <PracticeBox
          title="Building the Cage"
          setup="Practice Mode. Lili vs any opponent. Set dummy to Guard All, then 2nd Action: Attack (record a jab)."
          tasks={[
            { id: 'lili-lock-qcf-df3', text: 'Chain qcf+3+4 on block into df+3 five times', detail: 'Land qcf+3+4 on block (+6), then immediately do df+3. Your +6 advantage makes this unreactable. Feel the rhythm of stacking plus frames.', type: 'counter', target: 5 },
            { id: 'lili-lock-12-f4', text: 'Land 1,2 on hit then f+4 to counter hit three times', detail: 'Record the dummy pressing a jab after getting hit. Land 1,2 (+8 on hit), then press f+4. Watch the counter hit launch.', type: 'counter', target: 3 },
            { id: 'lili-lock-df3-d3', text: 'Land df+3 on block then d+3 three times', detail: 'After df+3 on block (+3c, opponent crouching), press d+3. They cannot react to this low from crouch recovery.', type: 'counter', target: 3 },
            { id: 'lili-lock-ff4b', text: 'Land f,f+4 on hit, hold B, then bt d+2 three times', detail: 'Land the stomp, hold B for backturn (+10), then press d+2 for the low. This is the full pressure chain: neutral → plus → backturn.', type: 'counter', target: 3 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
