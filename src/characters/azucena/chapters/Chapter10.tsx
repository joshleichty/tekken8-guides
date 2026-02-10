import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  DecisionGrid,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Defense and Panic"
      intro="Azucena is an offense-first character, but you can't attack 100% of the time. When the opponent has momentum and you're under pressure, you need escape tools. Azucena has some of the best panic buttons in the game — but using them wrong turns panic into death."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="The Complete Azucena"
    >
      <Section title="When It's Not Your Turn">
        <p>
          Everything in Chapters 1-9 assumed you're on offense. In a real match, you'll spend significant
          time on defense — blocking strings, eating pressure, and looking for a way out. The mistake most
          Azucena players make is trying to force their offense before it's their turn. Don't. Block, find
          the gap, then restart the machine.
        </p>

        <KeyConcept title="Defense First" icon="🛡️">
          <p>
            The best defensive option is almost always <strong>blocking and waiting for your turn</strong>.
            Panic tools are for when blocking isn't enough — when the opponent is running a mixup you can't
            block on reaction, or when you need to escape a bad position immediately.
          </p>
          <p style={{ marginTop: '12px' }}>
            Don't use panic tools as a first resort. They're punishable. Use them when you've identified a
            specific problem that blocking can't solve.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Power Crush: f+1+2">
        <MoveCard character="azucena"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i16',
            onBlock: '-12',
            onHit: 'KND',
            tags: ['Power Crush', 'Panic', 'Long Range'],
            description: 'One of the best power crushes in the game. i16, mid, 30 damage, huge pushback, and long range. Absorbs hits during startup and blasts through pressure.',
            notes: ['Power crush — absorbs mids and highs', 'i16 is fast for a crush', '-12 on block — punishable but pushback makes it safer', '30 damage + knockdown', 'Your primary "get off me" tool']
          }}
          showVideo
        />

        <p>
          f+1+2 is your best panic button. It absorbs mid and high attacks, does 30 damage, and the pushback
          on block often makes the -12 unpunishable at the wall. Use it when the opponent is in your face
          running strings and you need them gone.
        </p>

        <TipBox variant="warning" title="Power Crush Limitations">
          Power crushes lose to lows and throws. If your opponent is mixing lows into their pressure, a power
          crush will eat the low and you'll get hit. They also lose to moves that knock down before the crush
          armor activates. Use them against mid/high pressure, not against characters with strong low mixups.
        </TipBox>
      </Section>

      <Section title="Backswing Blow: db+3+4">
        <MoveCard character="azucena"
          move={{
            input: 'db+3+4',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i22',
            onBlock: '-16',
            onHit: 'Launch',
            tags: ['Evasive', 'Launcher', 'Panic'],
            description: 'An evasive launcher that ducks under highs and some mids during startup. Launch punishable on block. Use sparingly but it can steal rounds.',
            notes: ['Evasive — ducks under highs and some mids', 'Launches on hit → full combo', '-16 on block — VERY punishable', 'Use once or twice per match maximum', 'Best against predictable high pressure']
          }}
          showVideo
        />
      </Section>

      <Section title="Orbital: uf+4">
        <MoveCard character="azucena"
          move={{
            input: 'uf+4',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i23~25',
            onBlock: '-7',
            onHit: 'Launch',
            tags: ['Orbital', 'Low Crush', 'Safe Launcher'],
            description: 'Azucena\'s orbital. Crushes lows during the jump, safe on block at -7, and launches on hit. Your answer to low-heavy pressure.',
            notes: ['Crushes lows during jump', '-7 on block — safe', 'Launches on hit → full combo', 'Slow startup — use on reads, not reactions', 'Best against snake edges and repeated lows']
          }}
          showVideo
        />
      </Section>

      <Section title="Punch Parry: uf+1">
        <MoveCard character="azucena"
          move={{
            input: 'uf+1',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i15~',
            onBlock: '-7',
            onHit: 'KND',
            tags: ['Punch Parry', 'Defensive', 'Situational'],
            description: 'Has punch parry properties during startup. If the opponent throws a punch (1 or 2 based attack), this parries it and attacks. Situational but powerful.',
            notes: ['Parries punch attacks', 'KND on hit', '-7 safe on block', 'Use against jab-heavy opponents', 'The parry window is small — mostly a hard read']
          }}
          showVideo
        />
      </Section>

      <Section title="Panic Tool Selection">
        <DecisionGrid
          title="When to Use Each Panic Tool"
          description="Match the situation to the right defensive option."
          rows={[
            { situation: 'Opponent doing mid/high strings', response: 'f+1+2', reason: 'Power crush absorbs and pushes back', risk: '-12 on block, loses to lows' },
            { situation: 'Opponent doing repeated lows', response: 'uf+4', reason: 'Low crush → safe launcher', risk: 'Slow, loses to mids' },
            { situation: 'Opponent doing jab pressure', response: 'uf+1', reason: 'Punch parry', risk: 'Only works vs punches' },
            { situation: 'Opponent doing high strings', response: 'db+3+4', reason: 'Evasive launcher', risk: '-16 on block, highly punishable' },
            { situation: 'Don\'t know what\'s coming', response: 'Block', reason: 'Safest option — wait for your turn', risk: 'You eat chip/throws' },
            { situation: 'At the wall, under pressure', response: 'f+1+2', reason: 'Pushback creates space even on block', risk: 'Catches you at wall if they bait it' },
          ]}
        />
      </Section>

      <Section title="Movement and Tracking">
        <KeyConcept title="Azucena's Weak Side: SSL" icon="🚶">
          <p>
            Azucena's biggest defensive weakness is that many of her key moves track poorly against
            <strong> sidestep left (SSL)</strong>. Opponents who know this will step left frequently.
          </p>
          <p style={{ marginTop: '12px' }}>
            Your answers:
          </p>
          <ul>
            <li><strong>f+4,4</strong> — Homing. Catches both sides.</li>
            <li><strong>LIB 3+4</strong> — Homing from stance.</li>
            <li><strong>f+3,4</strong> — Tracks well to your weak side.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Don't panic when opponents sidestep. Let them step, then use a homing move once. Most players
            will stop sidestepping after eating one homing move. That's conditioning.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practice: Defense">
        <PracticeBox
          title="Panic Tool Drill"
          setup="Practice Mode. Record opponent doing various pressure strings."
          tasks={[
            { id: 'az-def-crush', text: 'Interrupt mid/high pressure with f+1+2 five times', detail: 'Record opponent doing a jab string. Power crush through it.', type: 'counter', target: 5 },
            { id: 'az-def-orbital', text: 'Low crush with uf+4 against a recorded low five times', detail: 'Record opponent doing a low. Jump over it with uf+4.', type: 'counter', target: 5 },
            { id: 'az-def-block', text: 'Block a full pressure string and punish the ender three times', detail: 'Record opponent doing a punishable string. Block everything, then punish with 1,1 → LIB.', type: 'counter', target: 3 },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You now have all the individual pieces: approach, pokes, punishment, stances, counter hits,
          combos, neutral, heat, and defense. The final chapter brings it all together into a complete
          gameplan — frame traps, knowledge checks, wall game, oki, and the full picture of how to play
          Azucena at a high level.
        </p>
      </Section>
    </Chapter>
  )
}
