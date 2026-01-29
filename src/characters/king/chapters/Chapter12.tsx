import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Combos"
      intro="King's combos are straightforward, but the real power comes from ending them with throws. A combo ending in a throw deals psychological damage that lasts beyond the round."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Learn Punishment"
    >
      <Section title="Combo Philosophy">
        <p>
          King's combos follow a simple structure, but the <span className="highlight">real power</span> 
          comes from ending them with throws. A combo ending in a throw deals psychological damage that 
          makes opponents fear you.
        </p>

        <KeyConcept title="The Combo Flow" icon="📐">
          <ol>
            <li><strong>Launcher</strong> — uf+4, df+2,1 CH, FC df+2, etc.</li>
            <li><strong>Filler</strong> — Moves to extend before Tornado</li>
            <li><strong>Tornado (T!)</strong> — Spinning state for extension</li>
            <li><strong>Ender</strong> — Final damage (often a throw!)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Throw Enders">
          Ending combos with throws is King's signature. It deals psychological damage — opponents remember 
          getting thrown at the end of a combo. Use throw enders to establish dominance.
        </TipBox>
      </Section>

      <Section title="Main Launchers">
        <p>
          These moves start combos. Learn what each is used for:
        </p>

        <KeyConcept title="Launcher Overview" icon="🚀">
          <ul>
            <li><code>uf+4</code> — i15 hopkick, your main launcher</li>
            <li><code>df+2,1 CH</code> — Counter-hit launcher, 76 damage combo</li>
            <li><code>FC df+2</code> — i15 crouch launcher</li>
            <li><code>b+1,2 CH</code> — Counter-hit launcher from range</li>
            <li><code>ws+1+2</code> — i18 while standing launcher</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Standard Combo (uf+4)">
        <ComboCard
          title="Standard Hopkick Combo"
          starter="uf+4"
          route={['f+1+4', 'df+4,3', 'b+1,2 T!', '(3+4),3', 'f,f,F+2+4']}
          damage="~70"
          difficulty="intermediate"
          wallCarry
          notes={[
            'f+1+4 is the pickup after launch',
            'df+4,3 extends the combo',
            'b+1,2 is your Tornado',
            '(3+4),3 is the refloat',
            'f,f,F+2+4 (Shining Wizard) is the throw ender',
          ]}
        />

        <TipBox variant="tip" title="The Throw Ender">
          Ending with Shining Wizard (f,f,F+2+4) is King's signature combo ender. It deals psychological 
          damage — opponents remember getting thrown. Use it to establish dominance.
        </TipBox>
      </Section>

      <Section title="Beginner Route">
        <p>
          If the standard combo is too difficult, start with this:
        </p>

        <ComboCard
          title="Beginner Hopkick Combo"
          starter="uf+4"
          route={['f+1+4', 'df+4,3', 'b+1,2 T!', 'f,f,F+2+4']}
          damage="~67"
          difficulty="beginner"
          wallCarry
          notes={[
            'Simpler route without refloat',
            'Still ends with throw for psychological damage',
            'Good damage and wall carry',
          ]}
        />

        <TipBox variant="tip" title="Learn This First">
          Start with the beginner route. Once you can do it consistently, move to the standard route. 
          The throw ender is the most important part.
        </TipBox>
      </Section>

      <Section title="Counter-Hit Combo (df+2,1)">
        <ComboCard
          title="Counter-Hit Launcher Combo"
          starter="df+2,1 CH"
          route={['df+4,3', 'b+1,2 T!', '(dash, sidewalk right) 1', 'f,f,F+2+4']}
          damage="~76"
          difficulty="advanced"
          wallCarry
          notes={[
            'df+2,1 CH launches',
            'Sidewalk right is needed for proper spacing',
            'Ends with Shining Wizard throw',
            'High damage combo',
          ]}
        />

        <TipBox variant="warning" title="The Sidewalk">
          The sidewalk right is tricky. Practice it in Training Mode. If you can't do it, use the simpler 
          route: df+4,3 → b+1,2 T! → f,f,F+2+4.
        </TipBox>
      </Section>

      <Section title="Crouch Launcher Combo (FC df+2)">
        <ComboCard
          title="Crouch Launcher Combo"
          starter="FC df+2"
          route={['(ws) 3', 'df+4,3', 'b+1,2 T!', '(3+4),3', 'f,f,F+2+4']}
          damage="~70"
          difficulty="intermediate"
          wallCarry
          notes={[
            'FC df+2 launches',
            '(ws) 3 is while standing 3',
            'Same route as hopkick combo',
            'Ends with throw',
          ]}
        />
      </Section>

      <Section title="Wall Combos">
        <p>
          At the wall, King has powerful options:
        </p>

        <ComboCard
          title="Wall Combo"
          starter="Wall Splat"
          route={['3,2,2 (hold last input)']}
          damage="~81"
          difficulty="beginner"
          wallCarry={false}
          notes={[
            '3,2,2 is King\'s wall combo',
            'Hold the last 2 input for maximum damage',
            'Simple but effective',
          ]}
        />

        <ComboCard
          title="Wall Combo with Tailspin"
          starter="Wall Splat (with Tailspin)"
          route={['f,f+4 T!', '3,2,2 (hold last input)']}
          damage="~85"
          difficulty="intermediate"
          wallCarry={false}
          notes={[
            'f,f+4 creates Tailspin at wall',
            '3,2,2 follows for big damage',
            'Hold last input for maximum damage',
          ]}
        />
      </Section>

      <Collapsible title="Alternative Combo Routes" icon="📖">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '12px' }}>Here are some alternative combo routes:</p>
          
          <ComboCard
            title="Alternative Route"
            starter="uf+4"
            route={['df+4,3', 'f,f+3', 'b+1,2 T!', '(3+4),3', 'f,f,F+2+4']}
            damage="~71"
            difficulty="intermediate"
            wallCarry
            notes={[
              'Slightly different filler',
              'Still ends with throw',
            ]}
          />

          <ComboCard
            title="Simple Route"
            starter="uf+4"
            route={['df+4,3', 'b+1,2 T!', 'f,f,F+2+4']}
            damage="~64"
            difficulty="beginner"
            wallCarry
            notes={[
              'Simplest route',
              'Good for beginners',
              'Still ends with throw',
            ]}
          />
        </div>
      </Collapsible>

      <Section title="The Complete Picture">
        <p>
          King's combos are straightforward, but ending them with throws is what makes them special. 
          Master the basic routes, then focus on consistent throw enders.
        </p>

        <KeyConcept title="Master Combos" icon="👑">
          <ul>
            <li><strong>Learn basic routes first</strong> — Start with beginner routes</li>
            <li><strong>End with throws</strong> — Psychological damage is real</li>
            <li><strong>Practice consistency</strong> — Better to do simple combo consistently than drop advanced combo</li>
            <li><strong>Wall combos matter</strong> — 3,2,2 is simple but effective</li>
            <li><strong>Adapt to situation</strong> — Use simpler routes when you need guaranteed damage</li>
          </ul>
        </KeyConcept>

        <p>
          Master these combos, and you'll have consistent damage. But remember: the throw ender is what 
          makes King's combos special. Use it to establish dominance.
        </p>
      </Section>
    </Chapter>
  )
}
