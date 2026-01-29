import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Heat System"
      intro="Dragunov's Heat is terrifying. His signature Ambush Tackle becomes UNBREAKABLE, making his pressure nearly inescapable. This is where Dragunov becomes a true monster."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Learn Defense"
    >
      <Section title="Heat Basics">
        <p>
          Heat is Tekken 8's comeback and pressure mechanic. Once per round, you can activate 
          Heat to gain:
        </p>

        <KeyConcept title="Heat Benefits" icon="🔥">
          <ul>
            <li><strong>Chip damage</strong> — Your moves deal chip even on block</li>
            <li><strong>Recoverable health</strong> — Gray health regenerates while in Heat</li>
            <li><strong>Heat Dash</strong> — Cancel certain moves into a dash for combos</li>
            <li><strong>Heat Smash</strong> — A powerful finisher move (2+3)</li>
            <li><strong>Character buffs</strong> — For Dragunov: UNBREAKABLE TACKLES</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Dragunov's Heat Engagers">
        <p>
          These moves activate Heat when you press forward after they hit:
        </p>

        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
          <MoveCard character="dragunov"
            videoId="1,2,1"
            move={{
              input: '1,2,1',
              hitLevel: ['h', 'm', 'm'],
              damage: '5, 8, 20',
              startup: 'i10',
              onBlock: '-14',
              onHit: '+15g',
              tags: ['Heat Engager', 'CH Confirmable'],
              description: 'Jab string heat engager. Confirm into Heat on counter-hit.',
            }}
            showVideo
          />

          <MoveCard character="dragunov"
            videoId="SNK.4"
            move={{
              input: 'qcf+4',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i19-20',
              onBlock: '+7c',
              onHit: '+8c',
              tags: ['Heat Engager', 'Plus on Block'],
              description: 'Plus on block mid. Heat dash for combo on hit.',
            }}
            showVideo
          />

          <MoveCard character="dragunov"
            videoId="b+4,3"
            move={{
              input: 'b+4,3',
              hitLevel: ['m', 'h'],
              damage: '15, 16',
              startup: 'i14',
              onBlock: '-9',
              onHit: '+21a',
              tags: ['Heat Engager', 'Wall Splat', 'Punisher'],
              description: 'Your 14f heat engager punish. Wall splats. Heat dash launches.',
            }}
            showVideo
          />

          <MoveCard character="dragunov"
            videoId="f+3,1+2"
            move={{
              input: 'f+3,1+2',
              hitLevel: ['m', 'm'],
              damage: '11, 27',
              startup: 'i20',
              onBlock: '-3',
              onHit: '+22a',
              tags: ['Heat Engager', 'Safe', 'Long Range'],
              description: 'Safe long range heat engager. Second hit can be interrupted.',
            }}
            showVideo
          />

          <MoveCard character="dragunov"
            videoId="ws1+2"
            move={{
              input: 'ws+1+2',
              hitLevel: ['m'],
              damage: '28',
              startup: 'i12-13',
              onBlock: '-14',
              onHit: '+19a',
              tags: ['Heat Engager', 'Punisher', 'Wall Splat'],
              description: 'i12 while standing heat engager. Elite ws punish.',
            }}
            showVideo
          />
        </div>
      </Section>

      <Section title="Unbreakable Tackles">
        <p>
          This is what makes Dragunov's Heat unique: <span className="highlight">his Ambush Tackle 
          becomes unbreakable</span>. Normally, tackles can be broken with 1+2. In Heat, 
          the opponent simply cannot escape.
        </p>

        <KeyConcept title="Unbreakable Tackle Sources" icon="🤼">
          <ul>
            <li><code>WR+2,1+2</code> — After WR+2, press 1+2 for tackle</li>
            <li><code>FC df+1,1+2</code> — After FC df+1, press 1+2 for tackle</li>
            <li><code>b+4,2,1+2</code> — From b+4,2 string, 1+2 for tackle</li>
            <li><code>4,4,2,1+2</code> — After 4,4, 2 into 1+2</li>
            <li><code>SS 2,1+2</code> — Sidestep 2 into tackle</li>
            <li><code>PGR 1+2</code> — From Pigeon Roll</li>
            <li><code>H.2+3,db+1+2</code> — After Heat Smash hits, tackle guaranteed</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Only the Initial Tackle is Unbreakable">
          The follow-ups after tackle (1, 2, or 1+2) are still breakable. Only the 
          initial tackle grab is unbreakable. The opponent can still tech the follow-up.
        </TipBox>
      </Section>

      <Section title="WR+2 into Tackle">
        <MoveCard character="dragunov"
          videoId="f,f,F+2"
          move={{
            input: 'H.f,f,F+2,1+2 (Heat)',
            hitLevel: ['m', 'throw'],
            damage: '22 + tackle damage',
            startup: 'i15-17',
            onBlock: '+4',
            onHit: '-2d',
            tags: ['Heat Only', 'Unbreakable Tackle'],
            description: 'In Heat, WR+2 can be followed by 1+2 for unbreakable tackle.',
          }}
          showVideo
        />

        <p>
          This is your <span className="highlight">primary Heat pressure tool</span>. In Heat, 
          after WR+2 connects (hit OR block), you can input 1+2 for an unbreakable tackle.
        </p>

        <KeyConcept title="WR+2 Tackle Properties" icon="💀">
          <ul>
            <li><strong>On hit</strong> — Tackle is guaranteed and unbreakable</li>
            <li><strong>On block</strong> — Tackle is NOT guaranteed, but catches people pressing</li>
            <li><strong>Cancel with B</strong> — You can hold back to cancel the tackle</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Mind Game">
          Even on block, the threat of unbreakable tackle is terrifying. Opponents are forced 
          to either attack immediately (risky) or jump back (gives up position). Use WR+2 
          without tackle sometimes to condition them, then tackle when they freeze.
        </TipBox>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="dragunov"
          videoId="H.2+3"
          move={{
            input: 'H.2+3',
            hitLevel: ['m', 'm', 'm'],
            damage: '25, 14, 23',
            startup: 'i15-16',
            onBlock: '+6',
            onHit: '+3d',
            tags: ['Heat Smash', 'Plus on Block', 'Wall Break'],
            description: 'Dragunov\'s Heat Smash. Plus on block, wall breaks. Can tackle after hit.',
          }}
          showVideo
        />

        <p>
          Heat Smash is <span className="highlight">+6 on block</span> — this is insane for a 
          Heat Smash. Most Heat Smashes are minus on block. Dragunov's is plus.
        </p>

        <KeyConcept title="Heat Smash Properties" icon="⭐">
          <ul>
            <li><strong>+6 on block</strong> — You get to keep pressing</li>
            <li><strong>Wall break</strong> — Breaks walls for stage transition</li>
            <li><strong>Tackle after hit</strong> — Press db+1+2 after hit for unbreakable tackle</li>
            <li><strong>First and third hit</strong> — Deal chip damage on block</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Forget the Follow-Up">
          After Heat Smash hits, you can input db+1+2 for an unbreakable tackle. 
          This is easy to forget but adds significant damage.
        </TipBox>
      </Section>

      <Section title="Heat Dash Combos">
        <p>
          When you heat dash from a heat engager, you get extended combos:
        </p>

        <KeyConcept title="Heat Dash Launchers" icon="🚀">
          <ul>
            <li><code>1,2,1~F</code> — Heat dash, b+1+2 guaranteed</li>
            <li><code>b+4,3~F</code> — Heat dash, becomes launcher</li>
            <li><code>qcf+4~F</code> — Heat dash, full combo</li>
            <li><code>f+3,1+2~F</code> — Heat dash, continues combo</li>
            <li><code>4,3,1+2~F</code> — Heat dash launcher (requires both hits to connect)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="b+4,3 Heat Dash">
          b+4,3 into heat dash makes the second hit launch. This means your 14f punish 
          becomes a launcher in Heat. Use this for devastating punishment.
        </TipBox>
      </Section>

      <Section title="Heat Game Plan">
        <p>
          Here's how to use Heat effectively:
        </p>

        <KeyConcept title="Heat Strategy" icon="🎯">
          <ol>
            <li><strong>Save Heat</strong> — Don't activate immediately, wait for opportunity</li>
            <li><strong>Activate from advantage</strong> — After knockdown or with life lead</li>
            <li><strong>Pressure with WR+2</strong> — The tackle threat is terrifying</li>
            <li><strong>Use Heat Smash</strong> — +6 on block, tackle on hit</li>
            <li><strong>Wall carry</strong> — Heat damage is best at the wall</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Heat Drains Fast">
          Unbreakable tackles use Heat meter. You can't spam them forever. 
          Be deliberate with your Heat usage — make each tackle count.
        </TipBox>
      </Section>

      <Section title="Tackle Follow-ups">
        <p>
          After the tackle connects, you have three options:
        </p>

        <KeyConcept title="Tackle Options" icon="🤼">
          <ul>
            <li><code>1</code> — 35 damage, removes opponent's recoverable health</li>
            <li><code>2</code> — 40 damage, standard option</li>
            <li><code>1+2</code> — 45 damage, best oki (opponent face down)</li>
          </ul>
        </KeyConcept>

        <p>
          Use <code>1</code> if they have a lot of gray health. Use <code>1+2</code> for 
          best damage and position. Use <code>2</code> if you're not sure.
        </p>
      </Section>

      <Collapsible title="Blue Spark Moves" icon="⚡">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Some of Dragunov's moves have "blue spark" just-frame versions for extra damage:
          </p>
          <ul>
            <li><code>WR+2</code> — 26 damage + 7 chip (vs 22 + 4)</li>
            <li><code>FC df+1,4</code> — Delay the 4 for blue spark (14 damage vs 10)</li>
            <li><code>b+3+4:1+2</code> — Just frame version is always unbreakable</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            These require precise timing but add up over a match.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
