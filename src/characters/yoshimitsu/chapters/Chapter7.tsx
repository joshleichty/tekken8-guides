import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Core Combos"
      intro="Time to convert your launchers into real damage. Yoshimitsu's combos aren't complicated — they use the same basic structure. Learn one route and you can apply it everywhere."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Learn Flash"
    >
      <Section title="Combo Structure">
        <KeyConcept title="How Yoshimitsu Combos Work" icon="📐">
          <ol>
            <li><strong>Launcher</strong> — df+2, uf+3, SS 1, etc.</li>
            <li><strong>Filler</strong> — d+2,2~B into NSS transition</li>
            <li><strong>Screw/Tornado</strong> — df+1,2,1 T!</li>
            <li><strong>Ender</strong> — NSS 1+4 → dash → d+2,2</li>
          </ol>
        </KeyConcept>

        <p>
          The key to Yoshimitsu combos is the <code>d+2,2~B</code> transition into NSS. This 
          sets up the df+1,2,1 Tornado and the NSS 1+4 (enhanced Flash) ender.
        </p>

        <TipBox variant="tip" title="What is Tornado (T!)">
          Tornado is a spinning state that extends combos. When you hit someone with a Tornado 
          move (marked with T!), they spin and fall slowly, letting you add more hits. You only 
          get ONE Tornado per combo.
        </TipBox>
      </Section>

      <Section title="The Bread and Butter">
        <ComboCard
          title="Universal BnB (60+ damage)"
          starter="df+2 / uf+3 / SS 1"
          route={['d+2,2~B', 'df+1,2,1 T!', 'NSS.1+4', 'dash', 'd+2,2']}
          damage="~63"
          difficulty="beginner"
          wallCarry
          notes={[
            'd+2,2~B transitions to No Sword Stance',
            'df+1,2,1 is your Tornado move',
            'NSS.1+4 is enhanced Flash (more damage)',
            'Final d+2,2 is the ender for knockdown'
          ]}
        />

        <KeyConcept title="Breaking Down the Route" icon="📝">
          <ol>
            <li><code>d+2,2~B</code> — Filler that puts you in NSS</li>
            <li><code>df+1,2,1</code> — <span className="highlight">Tornado move</span>. Gives the spin.</li>
            <li><code>NSS 1+4</code> — Flash in NSS does more damage and has tailspin</li>
            <li><code>dash → d+2,2</code> — Dash forward, then ender</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Tips">
          <ul>
            <li>Start with just df+2 as the launcher</li>
            <li>The <code>~B</code> means hold back after d+2,2</li>
            <li>After NSS 1+4, you need a short dash before d+2,2</li>
            <li>Do it 10 times in a row before trying other starters</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Counter-Hit FC df+4 Combo">
        <ComboCard
          title="CH FC df+4 Route"
          starter="CH FC df+4"
          route={['ws+4', 'd+2,2~B', 'df+1,2,1 T!', 'NSS.1+4', 'dash', 'd+2,2']}
          damage="~65"
          difficulty="beginner"
          notes={[
            'ws+4 picks them up from the CH knockdown',
            'Same route after that',
            'Practice the instant FC input for FC df+4'
          ]}
        />

        <p>
          When FC df+4 counter-hits, you start with <code>ws+4</code> to pick them up, then 
          continue with the standard route.
        </p>
      </Section>

      <Section title="Alternate Starters">
        <p>
          These starters use the same BnB route:
        </p>

        <ComboCard
          title="From 4~3 (Donkey Kick)"
          starter="4~3"
          route={['f,n,d,df+1', 'd+2,2~B', 'df+1,2,1 T!', 'NSS.1+4', 'dash', 'd+2,2']}
          damage="~68"
          difficulty="intermediate"
          notes={[
            '4~3 is the slide input (4 then quickly 3)',
            'f,n,d,df+1 is the crouch dash launcher pickup',
            'Rest of the combo is the same'
          ]}
        />

        <ComboCard
          title="From SS 2"
          starter="SS 2"
          route={['4', 'd+2,2~B', 'df+1,2,1 T!', 'NSS.1+4', 'dash', 'd+2,2']}
          damage="~65"
          difficulty="intermediate"
          notes={[
            'SS 2 launches higher than df+2',
            'Use 4 as pickup instead of d+2,2~B directly',
            'Then continue standard route'
          ]}
        />

        <ComboCard
          title="From f,f+4 (Back Turned)"
          starter="f,f+4"
          route={['BT 2,1', 'b+1+2', 'f+3+4', 'jab', 'f+3+4', 'd+2,2']}
          damage="~62"
          difficulty="intermediate"
          notes={[
            'f,f+4 leaves you back turned',
            'BT 2,1 picks up into Tornado',
            'b+1+2 transitions back to normal stance',
            'Different route but good damage'
          ]}
        />
      </Section>

      <Section title="Simple Beginner Combo">
        <ComboCard
          title="Super Easy Route"
          starter="df+2 / uf+3"
          route={['d+2,2', 'df+1,2,1', 'd+2,2,2']}
          damage="~51"
          difficulty="beginner"
          notes={[
            'No NSS transition needed',
            'Less damage but very consistent',
            'Good for when you\'re just starting',
            'd+2,2,2 is the simple ender'
          ]}
        />

        <TipBox variant="tip" title="Start Simple">
          If the full BnB is too hard, use this simplified route. A dropped combo does 0 damage. 
          A completed simple combo does 51 damage. Consistency beats optimization.
        </TipBox>
      </Section>

      <Section title="Wall Combos">
        <ComboCard
          title="Wall Combo (Standard)"
          starter="Wall Splat"
          route={['1', '3~4~U', 'DGF.4']}
          damage="~30 (after splat)"
          difficulty="beginner"
          notes={[
            '1 is a jab to reset the situation',
            '3~4~U goes into Dragonfly',
            'DGF.4 hits them on the wall for damage'
          ]}
        />

        <ComboCard
          title="Wall Combo (NSS/Heat)"
          starter="Wall Splat"
          route={['3,2,1+2 (delay last)']}
          damage="~35 (after splat)"
          difficulty="beginner"
          notes={[
            'Use when in NSS or Heat for more damage',
            'Delay the last hit for grounded bonus',
            'Simpler execution than DGF route'
          ]}
        />

        <ComboCard
          title="Wall Combo (With Tornado)"
          starter="Wall Splat with T! available"
          route={['4~3 T!', '1', '3~4~U', 'DGF.4']}
          damage="~45 (after splat)"
          difficulty="intermediate"
          notes={[
            '4~3 gives Tornado at the wall',
            'Then continue with standard wall ender',
            'More damage when you have Tornado left'
          ]}
        />
      </Section>

      <Section title="Floor Break Combos">
        <ComboCard
          title="Floor Break Route"
          starter="uf+1+2 / Floor Break"
          route={['SS 1', 'd+2,2,2', 'f,f+1+2', 'db+1']}
          damage="~70 (including floor break)"
          difficulty="intermediate"
          notes={[
            'Use on stages with breakable floors',
            'uf+1+2 floor breaks',
            'db+1 is the floor break ender'
          ]}
        />
      </Section>

      <Section title="Combo Enders Explained">
        <Collapsible title="Ender Options" icon="📖" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p><strong>d+2,2</strong> — Standard ender</p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Good damage</li>
              <li>Moderate wall carry</li>
              <li>Use most of the time</li>
            </ul>

            <p><strong>d+2,2,2</strong> — More damage, less carry</p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Extra hit for damage</li>
              <li>Sends them further away</li>
              <li>Use when wall is far</li>
            </ul>

            <p><strong>d+2,2,1</strong> — Keeps them close</p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Leaves them closer to you</li>
              <li>Better for oki setups</li>
              <li>Use when wall is close</li>
            </ul>

            <p><strong>3~4</strong> — Wall carry option</p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Good wall carry</li>
              <li>Can transition to DGF</li>
            </ul>

            <p><strong>b+1 → d+2,2</strong> — Maximum carry</p>
            <ul>
              <li>Extra wall carry</li>
              <li>Use when you need to reach the wall</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Practice Plan">
        <KeyConcept title="Combo Learning Priority" icon="🎯">
          <ol>
            <li><strong>Learn the simple route</strong> — df+2 → d+2,2 → df+1,2,1 → d+2,2,2</li>
            <li><strong>Get it consistent</strong> — 10 reps in a row without dropping</li>
            <li><strong>Upgrade to full BnB</strong> — Add the NSS transition and 1+4 ender</li>
            <li><strong>Apply other starters</strong> — uf+3, SS 1, CH FC df+4</li>
            <li><strong>Learn wall combos</strong> — Practice at the wall</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Over-Optimize">
          A dropped combo does 0 damage. A simple completed combo does 51+ damage. Focus on 
          consistency first. You can optimize later once the basics are muscle memory.
        </TipBox>
      </Section>

      <Collapsible title="Quick Combo Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <p style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>Main BnB (All Launchers)</p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
            df+2 → d+2,2~B → df+1,2,1 T! → NSS 1+4 → dash → d+2,2
          </p>

          <p style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>Simple Route (Beginners)</p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
            df+2 → d+2,2 → df+1,2,1 → d+2,2,2
          </p>

          <p style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>Wall Ender</p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
            Wall splat → 1 → 3~4~U → DGF 4
          </p>

          <p style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>CH FC df+4</p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            CH FC df+4 → ws+4 → d+2,2~B → df+1,2,1 T! → NSS 1+4 → dash → d+2,2
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
