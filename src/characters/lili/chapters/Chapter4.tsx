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

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Dancing Behind Your Back"
      intro="Backturn is where Lili becomes dangerous. Not because her backturn moves are individually overpowered — most are unsafe on block — but because she forces the opponent into a guessing game where both answers cost health. This chapter teaches when to enter backturn, what to do once you're there, and how to stay unpredictable."
      hasPrevious
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="The Low Game"
    >
      <Section title="Getting Into Backturn">
        <p>
          Lili never enters backturn for free. Every transition comes from a move that has already
          done work — either it landed and gave you plus frames, or it was safe enough on block
          that the transition is a calculated risk. The best transitions are:
        </p>

        <DecisionGrid
          title="Backturn Entries"
          description="Choose your entry based on the situation. Better frames = safer backturn pressure."
          rows={[
            { situation: '1,1 on hit (+4)', response: 'Natural transition to BT', reason: 'Fast jab string, opponent respects it', risk: '-6 on block — opponent can downjab your BT options' },
            { situation: 'f,f+4~B on hit (+10)', response: 'Hold B after stomp', reason: 'Huge plus frames, bt 1,4/1,2 catch buttons', risk: 'Can power crush i12 on block, but lose to i11 or less' },
            { situation: 'd+1,2~B on hit (+3)', response: 'Hold B after string', reason: 'Low-high string keeps opponent honest', risk: 'First hit is a low — gets blocked/parried at high level' },
            { situation: 'df+3+4 on block (-4~+1)', response: 'Natural BT transition', reason: 'Long range launcher with BT mind game on block', risk: 'Opponent can jab or downjab — must read and respond' },
            { situation: 'ss+4 on block (-4)', response: 'Enter FYR with b+3/b+4', reason: 'Safest BT transition, opponent can\'t press at -2', risk: 'Far pushback means some BT options whiff' },
            { situation: 'b+2,1~B on hit (+7)', response: 'Hold B after string', reason: 'Great frames, all BT options work', risk: 'First hit is high — can be ducked' },
          ]}
        />
      </Section>

      <Section title="The Backturn Toolkit">
        <p>
          From backturn, you have four categories of tools: fast pokes, mid launchers, lows,
          and a power crush. Knowing which to use when is the entire game.
        </p>

        <MoveCard character="lili"
          videoId="BT.3,4"
          move={{
            input: 'BT 3,4',
            hitLevel: ['m', 'm'],
            damage: '12, 20',
            startup: 'i14~15',
            onBlock: '-12',
            onHit: '+39d (+31)',
            tags: ['Mid', 'Homing', 'Backturn', 'High Crush'],
            description: 'Your go-to mid from backturn. This double-mid string is homing, high-crushing, and natural on hit. It catches sidesteps, beats highs, and guarantees a qcf+3 or fc df+1 on the ground for massive damage. BT 3 alone is -10 and relatively safe — opponents often won\'t punish the first hit because they fear the extension.',
            notes: [
              'Homing — catches sidestep in both directions',
              'High crush frames 4~37 on first hit',
              'On hit: guaranteed qcf+3 on ground, or fc df+1 for flip-over oki',
              'BT 3 alone: -10, semi-safe as opponents respect the extension',
              'BT 3,4 into b+4: cheeky setup that relaunches non-tech-rollers',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="BT.d+2"
          move={{
            input: 'BT d+2',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i16',
            onBlock: '-12',
            onHit: '+5c',
            onCH: '+14d, free qcf+3',
            tags: ['Low', 'Backturn', 'High Crush', 'Tracking'],
            description: 'The main low from backturn. Fast, high-crushing, and near-impossible to step thanks to its tracking. On hit, you\'re +5 in full crouch — fc df+1 becomes a safe mid frame trap. On counter hit, crouch cancel with u into qcf+3 on the ground.',
            notes: [
              'High crush from frame 4 — goes under jabs cleanly',
              'Tracks to both sides — near-homing despite not being labelled so',
              'On hit (+5c): fc df+1 is a safe mid frame trap that catches mashers',
              'On CH: tap u to cancel crouch, then qcf+3 guaranteed on ground',
              '-12 on block — you\'ll eat a ws+4 but nothing devastating',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="BT.1+2"
          move={{
            input: 'BT 1+2',
            hitLevel: ['m', 'm'],
            damage: '5, 20',
            startup: 'i13~14',
            onBlock: '-11c',
            onHit: '+16a',
            tags: ['Mid', 'Launcher', 'Backturn'],
            description: 'A 13-frame mid launcher from backturn. Linear and -11 on block (forces crouch, so you eat ws+4), but when it lands the combo damage is enormous. Use this when you have strong reads or heavy plus frames where the opponent won\'t dare to step.',
            notes: [
              'i13 — your fastest launching option from BT',
              '-11c on block forces crouch — ws+4 punish',
              'At max range, may not pick up for full combo — use db+4 or qcf+3',
              'Linear — gets stepped easily, use after heavy plus frames',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="BT.2"
          move={{
            input: 'BT 2',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i14~16',
            onBlock: '-13',
            onHit: '+8g',
            tags: ['Mid', 'Power Crush', 'Backturn'],
            description: 'Power crush from backturn. Tracks to Lili\'s right, wall splats, and starts armoring one frame faster than turning around to block. Use this to beat jab punishers after moves like df+3+4 on block or f,f+4~B on block. Don\'t overuse — -13 on block hurts.',
            notes: [
              'Power crush 6~13 — beats jabs and mids that try to interrupt',
              'Wall splats for combo damage',
              'Tracks to Lili\'s right',
              '-13 on block — many characters can launch this',
              'Crushes 1 frame faster than turning around to block',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="The Backturn Mind Game">
        <Flowchart
          title="What To Do From Backturn"
          nodes={[
            { type: 'start', label: 'You\'re in Backturn' },
            { type: 'decision', label: 'How did you get here?', branches: [
              { label: 'Heavy plus frames (+7 or more)', action: 'BT 1+2 (launch), BT 3,4 (homing mid), or BT d+2 (low)' },
              { label: 'Light plus frames (+3 to +4)', action: 'BT d+2 (safe low), BT 3 (semi-safe mid), or hold db (block and bait)' },
              { label: 'On block (neutral/minus)', action: 'Hold db (safest), BT 2 power crush (read jabs), or BT 3+4 (jump downjabs)' },
            ]},
            { type: 'end', label: 'After BT d+2 on hit: fc df+1 frame trap. After BT 3,4 on hit: qcf+3 guaranteed.' },
          ]}
        />

        <KeyConcept title="The Golden Rule of Backturn" icon="🔑">
          <p>
            <strong>Never commit to the same backturn option twice in a row.</strong> Backturn
            moves are all unsafe on block. If the opponent reads your pattern — always going for
            BT d+2 or always pressing BT 1+2 — they will punish you hard. Rotate between the low,
            the mid, the power crush, and simply turning back around. The power of backturn comes
            from the opponent not knowing which option you'll pick, not from any single option being
            unbeatable.
          </p>
        </KeyConcept>
      </Section>

      <Section title="When To Turn Back Around">
        <p>
          Sometimes the best backturn option is leaving backturn. Hold <code>db</code> to crouch
          and create distance, which naturally baits whiffs you can punish with <code>ws+2</code>{' '}
          for a full combo. Or simply hold <code>b</code> to turn around and block. This is
          especially strong after moves where you're minus in backturn — like <code>df+3+4</code>{' '}
          on block where the opponent has options to interrupt.
        </p>

        <TipBox variant="tip" title="The Spin-Away Technique">
          Some Lili players chain backturn entries into backdash-like movement by doing <code>BT db</code>{' '}
          repeatedly, spinning away from the opponent. This baits aggressive opponents into
          whiffing as they try to chase, giving you a free <code>ws+2</code> launch when they
          overextend. It's not essential, but it's fun and effective — especially against impatient
          players.
        </TipBox>
      </Section>

      <Section title="Practice: The Backturn Mix">
        <PracticeBox
          title="Backturn Fundamentals"
          setup="Practice Mode. Lili vs any opponent. Set dummy to Guard All."
          tasks={[
            { id: 'lili-bt-entries', text: 'Enter BT five different ways', detail: 'Do: 1,1 → BT | f,f+4~B → BT | d+1,2~B → BT | df+3+4 → BT | b+3+4 → BT. Get comfortable with each transition.', type: 'counter', target: 5 },
            { id: 'lili-bt-34-qcf3', text: 'From BT, land BT 3,4 into qcf+3 on ground five times', detail: 'Enter BT any way, press 3,4, then qcf+3 on the grounded opponent. This is your main BT mid damage.', type: 'counter', target: 5 },
            { id: 'lili-bt-d2-fcdf1', text: 'From BT, land BT d+2 on hit into fc df+1 three times', detail: 'Enter BT, press d+2, then fc df+1 as the frame trap. The opponent recovers crouching at -5 so your i14 mid catches anything.', type: 'counter', target: 3 },
            { id: 'lili-bt-mix', text: 'Do three different BT options in a row', detail: 'Enter BT, do BT d+2. Re-enter BT, do BT 3,4. Re-enter BT, hold db to bait a whiff. This is the mix — never be predictable.', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
