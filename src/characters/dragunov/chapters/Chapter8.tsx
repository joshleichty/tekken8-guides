import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Combos"
      intro="You've learned the tools. Now it's time to put them together into damage. Dragunov's combos are versatile — one core route works from most launchers."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Learn Punishment"
    >
      <Section title="Combo Structure">
        <p>
          Dragunov combos follow a consistent structure:
        </p>

        <KeyConcept title="The Combo Flow" icon="📐">
          <ol>
            <li><strong>Launcher</strong> — df+2, ws+2, qcf+1, etc.</li>
            <li><strong>Filler</strong> — Moves to extend before Tornado</li>
            <li><strong>Tornado (T!)</strong> — Spinning state for extension</li>
            <li><strong>Ender</strong> — Final damage and positioning</li>
          </ol>
        </KeyConcept>

        <p>
          The key insight is that <span className="highlight">4,4 → FC df+1,4 → SNK 2</span> is 
          your core filler-to-Tornado route. Once you learn this, you can do it from almost 
          any launcher.
        </p>
      </Section>

      <Section title="Main Launchers">
        <p>
          These moves start combos. Learn what each is used for:
        </p>

        <KeyConcept title="Launcher Overview" icon="🚀">
          <ul>
            <li><code>df+2</code> — i15 standing launcher, your main punisher</li>
            <li><code>ws+2</code> — i15 while standing launcher</li>
            <li><code>qcf+1</code> — Safe high launcher for whiff punishment</li>
            <li><code>qcf+2</code> — Mid launcher, riskier but mid</li>
            <li><code>CH f,f,F+2</code> — Counter-hit WR+2 launches</li>
            <li><code>db+3 (clean)</code> — Snake edge, risky but huge damage</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Standard Combo (df+2 / ws+2)">
        <ComboCard
          title="Standard Route"
          starter="df+2 or ws+2"
          route={['df+1', '4,4', 'FC df+1,4', 'SNK 2 T!', '(3+4) PGR 2', 'qcf+1+2']}
          damage="~68"
          difficulty="intermediate"
          wallCarry
          notes={[
            'df+1 is the scoop after launch',
            '4,4 goes into FC for df+1,4',
            'SNK 2 is your Tornado',
            'PGR 2 is Pigeon Roll attack',
            'qcf+1+2 is the ender (wallsplat)',
          ]}
        />

        <TipBox variant="tip" title="The Key Sequence">
          The hardest part is <code>4,4 → FC df+1,4</code>. After 4,4, hold down to stay in 
          crouch, then input df+1,4. Practice this sequence until it's muscle memory.
        </TipBox>
      </Section>

      <Section title="Beginner Route">
        <p>
          If the standard combo is too difficult, start with this:
        </p>

        <ComboCard
          title="Beginner Route"
          starter="df+2 or ws+2"
          route={['4,1', '4,4', 'FC df+1,4', 'SNK 2 T!', 'b+4,3']}
          damage="~60"
          difficulty="beginner"
          wallCarry
          notes={[
            '4,1 is easier than df+1 for pickup',
            'b+4,3 ender is simpler than PGR route',
            'Still gets good damage and wall carry',
          ]}
        />

        <TipBox variant="tip" title="Learn This First">
          Don't try the optimal combo until you can do this one 10 times in a row. 
          Dropped combos do zero damage. A completed beginner combo does full damage.
        </TipBox>
      </Section>

      <Section title="CH WR+2 Combo">
        <p>
          When WR+2 counter-hits, you get a full combo:
        </p>

        <ComboCard
          title="Counter-Hit WR+2"
          starter="CH f,f,F+2"
          route={['qcf+3+4', '4,4', 'FC df+1,4', 'SNK 2 T!', '(3+4) PGR 2', 'qcf+1+2']}
          damage="~72"
          difficulty="intermediate"
          notes={[
            'qcf+3+4 is the pickup (power crush)',
            'Same route after the pickup',
            'Must confirm the CH to commit',
          ]}
        />

        <TipBox variant="warning" title="Confirm the Counter-Hit">
          WR+2 only launches on counter-hit. On normal hit, you get knockdown but not launch. 
          Watch for the blue sparks and stagger animation before committing to the combo.
        </TipBox>
      </Section>

      <Section title="qcf+1 Combo">
        <ComboCard
          title="High Launcher Route"
          starter="qcf+1"
          route={['SSL', 'qcf+3+4', '4,4', 'FC df+1,4', 'SNK 2 T!', '(3+4) PGR 2', 'qcf+1+2']}
          damage="~70"
          difficulty="intermediate"
          notes={[
            'Sidestep left to align',
            'qcf+3+4 pickup, same route after',
            'Alternative: just df+1 pickup if SSL is hard',
          ]}
        />
      </Section>

      <Section title="Snake Edge Combo">
        <ComboCard
          title="db+3 Clean Hit Route"
          starter="db+3 (clean)"
          route={['df+3+4', 'qcf+3+4', '4,4', 'FC df+1,4', 'SNK 1+2']}
          damage="~65"
          difficulty="beginner"
          notes={[
            'df+3+4 is the homing mid after launch',
            'qcf+3+4 continues',
            'SNK 1+2 ender (shoulder)',
          ]}
        />

        <TipBox variant="warning" title="Snake Edge is Risky">
          db+3 is -26 on block — huge launch punish. Use sparingly at lower ranks where 
          people don't block it. As you rank up, this becomes less viable.
        </TipBox>
      </Section>

      <Section title="Low Parry Combo">
        <ComboCard
          title="Low Parry Route"
          starter="Low Parry (df)"
          route={['df+3+4', 'qcf+3+4', '4,4', 'FC df+1,4', 'SNK 3']}
          damage="~45"
          difficulty="beginner"
          notes={[
            'Less damage than launch but still good',
            'df+3+4 starts the juggle',
            'SNK 3 ender for oki',
          ]}
        />
      </Section>

      <Section title="Wall Combos">
        <p>
          When your combo carries to the wall, you need wall-specific enders:
        </p>

        <ComboCard
          title="Standard Wall Combo"
          starter="Wall Splat"
          route={['d+3,2,1+2']}
          damage="~25-30"
          difficulty="beginner"
          notes={[
            'Simple and reliable',
            'Works from most wall splats',
          ]}
        />

        <ComboCard
          title="Wall Combo with Tornado"
          starter="Wall Splat (Tornado available)"
          route={['f,f,F+4 T!', 'd+3,2,1+2']}
          damage="~40"
          difficulty="intermediate"
          notes={[
            'WR+4 gives Tornado at wall',
            'd+3,2,1+2 finishes',
          ]}
        />

        <ComboCard
          title="Maximum Wall Damage"
          starter="Wall Splat (Tornado available)"
          route={['instant WR+4', 'd+3,2,1+2']}
          damage="~45"
          difficulty="advanced"
          notes={[
            'Requires instant while running execution',
            'Highest wall damage route',
          ]}
        />

        <TipBox variant="tip" title="Save Your Tornado">
          For maximum wall damage, try to reach the wall WITHOUT using Tornado. 
          Then use WR+4 → d+3,2,1+2 for the wall combo. This is advanced but worth learning.
        </TipBox>
      </Section>

      <Section title="Mini Combos (Guaranteed Follow-ups)">
        <p>
          Some moves don't launch but give guaranteed follow-ups:
        </p>

        <KeyConcept title="Guaranteed Damage" icon="✓">
          <ul>
            <li><code>uf+1 hit</code> → crouch throw (guaranteed)</li>
            <li><code>b+1+2 hit</code> → crouch throw (guaranteed)</li>
            <li><code>uf+4 hit</code> → d+3,2,1+2</li>
            <li><code>4,3</code> (both hit) → crouch throw or b+4,3</li>
            <li><code>CH b+4,2,1</code> → b+4,3</li>
            <li><code>CH d+1</code> → db+3 or db+3+4</li>
            <li><code>CH db+3+4</code> → db+3 or db+3+4</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Combo Enders Explained">
        <p>
          Different enders serve different purposes:
        </p>

        <KeyConcept title="Ender Options" icon="🏁">
          <ul>
            <li><code>b+4,3</code> — Heat engager ender, medium carry</li>
            <li><code>qcf+1+2</code> — Wall break ender, good carry</li>
            <li><code>SNK 1+2 (qcf+1+2)</code> — Shoulder, floor break ender</li>
            <li><code>PGR 2</code> → <code>qcf+1+2</code> — Max damage ender</li>
            <li><code>qcf+4</code> — Plus frames ender, good for oki</li>
            <li><code>3+4</code> → <code>3+4</code> — Wall carry alternative</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Wall Carry Priority">
          In most situations, carry them to the wall rather than going for max midscreen damage. 
          Wall damage and pressure is where Dragunov truly shines.
        </TipBox>
      </Section>

      <Section title="Practice Priority">
        <KeyConcept title="Combo Learning Order" icon="📝">
          <ol>
            <li><strong>Beginner df+2 route</strong> — Until 10 reps clean</li>
            <li><strong>Standard df+2 route</strong> — Until 10 reps clean</li>
            <li><strong>ws+2 using same route</strong> — Same inputs</li>
            <li><strong>qcf+1 route</strong> — Add the sidestep</li>
            <li><strong>CH WR+2 route</strong> — Confirm practice</li>
            <li><strong>Wall combos</strong> — Practice at wall</li>
            <li><strong>Mini combos</strong> — Guaranteed follow-ups</li>
          </ol>
        </KeyConcept>

        <p>
          A dropped combo does zero damage. Don't move to harder routes until you can 
          consistently land the easier ones. Consistency beats optimization every time.
        </p>
      </Section>

      <Collapsible title="Heat Combo Extension" icon="🔥">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            In Heat, you can extend combos with Heat Burst and Heat Smash:
          </p>

          <ComboCard
            title="Heat Extension"
            starter="Any launcher (in Heat)"
            route={['df+1', '4,4', 'FC df+1,4', 'SNK 2 T!', 'df+3+4', 'Heat Burst', 'f+3,1+2~F', 'b+1+2']}
            damage="~85"
            difficulty="advanced"
            notes={[
              'After Tornado, use df+3+4',
              'Heat Burst extends the combo',
              'f+3,1+2~F heat dash',
              'b+1+2 finishes',
            ]}
          />
        </div>
      </Collapsible>
    </Chapter>
  )
}
