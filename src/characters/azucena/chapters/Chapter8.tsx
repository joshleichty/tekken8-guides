import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  PracticeBox,
  DecisionGrid,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Neutral and Poking"
      intro="Azucena's neutral is honest but effective. She doesn't have Dragunov's running 2 or Kazuya's electric to steal rounds from nothing. She has to work for her position — dashing in, poking, and gradually claiming space until she's close enough to start the pressure machine."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Heat System"
    >
      <Section title="Azucena's Ranges">
        <p>
          Every range demands different tools. Azucena is strongest at range 0-1 (in their face to poke
          range), decent at range 2 (approach range), and has options at range 3 (far). Understanding
          which tools work where prevents you from throwing moves that whiff or get punished.
        </p>
      </Section>

      <Section title="Range 0: In Their Face">
        <p>
          This is where Azucena thrives. You're close enough to jab, throw, and start the stance pressure.
        </p>

        <MoveCard character="azucena"
          move={{
            input: '1,1',
            hitLevel: ['h', 'h'],
            damage: '5, 6',
            startup: 'i10',
            onBlock: '-1',
            onHit: '+8 → LIB',
            tags: ['Jab', 'LIB Transition', 'Neutral Check'],
            description: 'Not just a punisher — also a neutral poke. At range 0, 1,1 is a fast check that transitions to LIB on hit. -1 on block is essentially neutral.',
            notes: ['i10 — fastest option', '+8 into LIB on hit', '-1 on block — safe', 'Use as a quick check before committing']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'df+1,4',
            hitLevel: ['m', 'h'],
            damage: '13, 12',
            startup: 'i13',
            onBlock: '-2',
            onHit: '+7',
            tags: ['Mid Check', 'Jails', 'All-Purpose'],
            description: 'Your backbone poke. Covered in Chapter 2, but in neutral it\'s your primary mid check. Use it to beat duck attempts and maintain pressure.',
            notes: ['Chapter 2 covered all five layers', 'In neutral: use the base move, then read responses', 'Your most-pressed button at range 0']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'd+2,3',
            hitLevel: ['m', 'm'],
            damage: '10, 14',
            startup: 'i14',
            onBlock: '-5',
            onHit: '+5 → LIB',
            tags: ['Mid-Mid', 'LIB Entry', 'Close Range'],
            description: 'A quick mid-mid string that transitions to LIB on hit. Use at range 0 when you want a fast mid that feeds the pressure machine.',
            notes: ['Both hits are mid — catches duckers', 'Transitions to LIB on hit', '-5 on block — safe', 'Good alternative to df+1,4 as a mid check']
          }}
          showVideo
        />

        <KeyConcept title="Throws at Range 0" icon="🤜">
          <p>
            Azucena has three command grabs worth knowing:
          </p>
          <ul>
            <li><strong>uf+1+2</strong> — Standard command grab. 1+2 break. Good damage.</li>
            <li><strong>d+1+2</strong> — The opponent must crouch to escape. Mix with mids.</li>
            <li><strong>d+1+3 / d+2+4</strong> — Unescapable on crouching opponents. Guaranteed after f,f+4 on hit. Also used as a situational punish on moves that recover crouching.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Range 1: Poke Range">
        <p>
          One step back from point blank. You're close enough for pokes but not throws.
        </p>

        <MoveCard character="azucena"
          move={{
            input: 'df+3',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i17',
            onBlock: '-9',
            onHit: '+2',
            onCH: 'Crumple',
            tags: ['Mid Knee', 'Safe', 'CH Crumple', 'Poke Range'],
            description: 'A mid knee that\'s safe on block and crumples on counter hit. At poke range, this is your best mid option after df+1,4.',
            notes: ['-9 safe', 'Knee — can\'t be low parried', 'CH crumple → full combo', '+2 on hit — slight advantage']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i16',
            onBlock: '-14',
            onHit: '+4 → BT',
            tags: ['Low', 'BT Entry', 'Pressure Low'],
            description: 'Your main low poke. -14 on block is risky, but on hit it starts the BT pressure chain. Use to mix with your mids and prevent opponents from just standing.',
            notes: ['BT entry on hit', '-14 on block — respect the risk', 'Your primary low at range 1', 'Mix with df+1,4 and df+3']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '10',
            startup: 'i16',
            onBlock: '-13',
            onHit: '+0',
            tags: ['Low Poke', 'Safe-ish', 'Chip'],
            description: 'A simpler low poke without the BT transition. Less reward than db+3 but also less risk. Use when you just want chip damage without committing to stance.',
            notes: ['Simpler than db+3 — no stance', '-13 on block', 'Good for chip and conditioning', 'Mix with mids to open up the opponent']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: '3,2',
            hitLevel: ['h', 'h'],
            damage: '14, 17',
            startup: 'i12',
            onBlock: '-6',
            onHit: 'KND',
            tags: ['Fast String', 'Knockdown', 'Range 1'],
            description: 'A fast high-high string. Knockdown on hit. -6 on block is safe. Good for quick damage at range 1 when you don\'t need a mid check.',
            notes: ['Both hits are high — can be ducked', '-6 on block — safe', 'Knockdown on hit', 'Use when you need speed over safety']
          }}
          showVideo
        />
      </Section>

      <Section title="Range 2: Approach Range">
        <p>
          This is where you're too far for pokes but close enough to dash in. WR 3,2 territory.
        </p>

        <MoveCard character="azucena"
          videoId="f,f,F+3,2"
          move={{
            input: 'f,f,f+3,2',
            hitLevel: ['m', 'm'],
            damage: '10, 15',
            startup: 'i16~',
            onBlock: '+2',
            onHit: 'KND',
            tags: ['Approach', 'Plus on Block', 'The Engine'],
            description: 'Already covered in Chapter 1. At range 2, this is your primary tool for closing distance and starting pressure.',
            notes: ['Chapter 1 covered this in depth', 'Your default approach from range 2', '+2 on block starts pressure', 'KND on hit for oki']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'uf+3+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i20~',
            onBlock: '-4',
            onHit: '+4 → LIB',
            tags: ['Approach', 'LIB Entry', 'Hop Attack'],
            description: 'A hopping mid that transitions to LIB on hit. -4 on block is safe. Alternative approach tool that gives you a different angle than WR 3,2.',
            notes: ['Hops over lows during jump', 'LIB transition on hit', '-4 safe on block', 'Good for varying your approach']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'f+3,4',
            hitLevel: ['m', 'h'],
            damage: '15, 21',
            startup: 'i15',
            onBlock: '-8',
            onHit: 'KND',
            tags: ['Homing', 'Heat Engager', 'Anti-Sidestep'],
            description: 'A homing mid-high string that catches sidesteps. Heat engager. The second hit can be ducked on block, so mix with other f+3 follow-ups.',
            notes: ['Homing — catches sidesteps', 'Heat engager', 'Second hit is a high — duckable on block', 'Safe at -8 if both hits are blocked']
          }}
          showVideo
        />
      </Section>

      <Section title="Range 3: Far">
        <MoveCard character="azucena"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i16',
            onBlock: '-12',
            onHit: 'KND',
            tags: ['Long Range', 'Power Crush', 'Whiff Punish'],
            description: 'Power crush with excellent range. Your longest-range tool and whiff punisher. Use when the opponent whiffs something from far away.',
            notes: ['Excellent range', 'Power crush', '-12 on block', 'Best long-range whiff punish']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'db+1+2',
            hitLevel: ['m'],
            damage: '28',
            startup: 'i20',
            onBlock: '-14',
            onHit: 'Launch',
            tags: ['Far Launcher', 'Range 3'],
            description: 'A launcher with good range. Use for hard whiff punishes from far away. -14 on block so don\'t throw this in neutral.',
            notes: ['Good range', 'Full combo on hit', '-14 punishable', 'Only on whiff punishes']
          }}
          showVideo
        />
      </Section>

      <Section title="The Lows — An Honest Assessment">
        <KeyConcept title="Azucena's Low Game" icon="📊">
          <p>
            Here's the truth: Azucena's lows are workmanlike, not exceptional. <strong>db+3</strong> is your
            best low because it feeds BT pressure, but at -14 it's punishable. <strong>db+4</strong> is safer
            but doesn't lead to much. <strong>d+3</strong> and <strong>d+4</strong> are generic lows with minimal
            reward.
          </p>
          <p style={{ marginTop: '12px' }}>
            Don't try to win by chipping people with low pokes. That's not Azucena's game. Her lows exist to
            <strong> condition opponents to block low</strong>, which opens them up for mids and the LIB 50/50.
            They're a tool for setup, not for damage.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Range Decision Map">
        <DecisionGrid
          title="What to Do at Each Range"
          description="Quick reference for range-appropriate tools."
          rows={[
            { situation: 'Range 0 (point blank)', response: '1,1 / df+1,4 / throws', reason: 'Fastest checks + stance entries', risk: 'None at this range' },
            { situation: 'Range 0 (opponent ducks)', response: 'df+1,4 / df+3', reason: 'Mid checks catch ducking', risk: 'Whiff if they step back' },
            { situation: 'Range 1 (poke distance)', response: 'df+1,4 / db+3 / df+3', reason: 'Mid-low mixup zone', risk: 'db+3 is -14' },
            { situation: 'Range 2 (approach)', response: 'f,f,f+3,2 / uf+3+4', reason: 'Close distance and start pressure', risk: 'Linear, can be sidestepped' },
            { situation: 'Range 2 (opponent sidesteps)', response: 'f+3,4 / LIB 3+4', reason: 'Homing moves catch steps', risk: 'f+3,4 second hit duckable' },
            { situation: 'Range 3 (far)', response: 'f+1+2 / db+1+2', reason: 'Whiff punishment only', risk: 'Don\'t approach from here' },
          ]}
        />
      </Section>

      <Section title="Practice: Neutral Movement">
        <PracticeBox
          title="Range Awareness Drill"
          setup="Practice Mode. Set opponent to random guard and occasional attacks."
          tasks={[
            { id: 'az-range-approach', text: 'From range 2, approach with WR 3,2 five times', detail: 'Start far, dash in, WR 3,2. Don\'t commit if they sidestep.', type: 'counter', target: 5 },
            { id: 'az-range-poke', text: 'At range 1, alternate df+1,4 and db+3 ten times', detail: 'The basic mid-low mix. Read their blocking habits.', type: 'counter', target: 10 },
            { id: 'az-range-whiff', text: 'Bait a whiff and punish with df+2 three times', detail: 'Back dash, let them whiff, step in with df+2 for full combo.', type: 'counter', target: 3 },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You understand Azucena's ranges and what tools to use at each one. Now let's cover her weakest
          system honestly: <strong>Heat</strong>. It's not amazing, but it's free — and knowing how to use
          it efficiently matters.
        </p>
      </Section>
    </Chapter>
  )
}
