import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="First Combos"
      intro="Time to convert your launchers into damage. Law's combos are relatively straightforward compared to some characters. One route works for almost everything."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Dragon Charge (DSS)"
    >
      <Section title="How Combos Work in Tekken">
        <p>
          When you launch an opponent, they're airborne and can't block. You have a limited 
          window to deal damage before they can recover.
        </p>

        <KeyConcept title="The Combo Structure" icon="📐">
          <ol>
            <li><strong>Launcher</strong> — The move that puts them in the air</li>
            <li><strong>Filler</strong> — Moves that continue the combo</li>
            <li><strong>Tornado (T!)</strong> — A special state that extends combos</li>
            <li><strong>Ender</strong> — The final hit before they land</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="What is Tornado (T!)?" icon="🌀">
          <p>
            <strong>Tornado</strong> is a spinning state that extends combos. When you hit 
            someone with a Tornado move, they spin in place and fall slowly, letting you 
            add more hits.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>You only get ONE Tornado per combo.</strong> Law's main Tornado moves 
            are 1+2 (nunchuck) and d+2,3.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Law's Main Launchers">
        <p>
          These moves start combos. When any of these connect, do the combo routes below:
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>df+2</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Standard launcher — i15, safe</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>uf+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Hopkick — Low crushes</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>ws+2</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>While standing 2 — i15 launcher</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>CH f+1+2</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Counter-hit Dragon Hammer</p>
            </div>
          </div>
        </div>

        <TipBox variant="tip" title="When to Use Each">
          <ul>
            <li><strong>df+2</strong> — Whiff punishment, general use</li>
            <li><strong>uf+4</strong> — When you need to crush a low</li>
            <li><strong>ws+2</strong> — After blocking a low (15f punish from crouch)</li>
            <li><strong>CH f+1+2</strong> — Frame trap reward, not chosen on purpose</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="The Beginner Combo">
        <p>
          This combo works off <strong>most launchers</strong>. Learn this first before anything else.
        </p>

        <ComboCard
          title="Universal Beginner Route"
          starter="df+2 / uf+4 / ws+2 / CH f+1+2"
          route={['4,u+3', 'f,f+4', '2', 'f,f+2,3 T!', '4,3~f', 'DSS.f+4']}
          damage="~60-65"
          difficulty="beginner"
          wallCarry
          notes={[
            '4,u+3 is your main filler after launches',
            'f,f+2,3 gives you Tornado (T!)',
            '4,3~f goes into DSS for the ender',
            'DSS.f+4 (Legend Kick) is the ender'
          ]}
        />

        <KeyConcept title="Breaking Down the Route" icon="📝">
          <ol>
            <li><code>4,u+3</code> — Staple filler, good damage</li>
            <li><code>f,f+4</code> — Mid kick for carry</li>
            <li><code>2</code> — Quick jab to align</li>
            <li><code>f,f+2,3</code> — <span className="highlight">Tornado move</span></li>
            <li><code>4,3~f</code> — Into DSS stance</li>
            <li><code>DSS f+4</code> — The Legend Kick ender</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Tips">
          <ul>
            <li>Start with just df+2 as your launcher</li>
            <li>The <code>~f</code> in 4,3~f means hold forward to go to DSS</li>
            <li>Don't rush — each step has timing</li>
            <li>Once you can do it 10 times in a row, try other starters</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Counter-Hit f+1+2 Combo">
        <p>
          When Dragon Hammer lands on counter-hit, you get a full launch. The route is the same:
        </p>

        <ComboCard
          title="CH f+1+2 (Dragon Hammer)"
          starter="CH f+1+2"
          route={['4,u+3', 'f,f+4', '2', 'f,f+2,3 T!', '4,3~f', 'DSS.f+4']}
          damage="~65"
          difficulty="beginner"
          notes={[
            'Same route as standard launchers',
            'Watch for the crumple animation to confirm CH',
            'Can dash forward slightly before 4,u+3 for consistency'
          ]}
        />
      </Section>

      <Section title="1+2 Counter-Hit Combo">
        <p>
          The nunchuck (1+2) is a counter-hit launcher. On CH, you get a unique combo:
        </p>

        <ComboCard
          title="CH 1+2 (Nunchuck)"
          starter="CH 1+2"
          route={['d+1+2 (DSS)', 'DSS.3', 'b+2,3,4~f', 'DSS.f+4']}
          damage="~55"
          difficulty="intermediate"
          notes={[
            'CH 1+2 gives instant Tornado',
            'd+1+2 enters DSS manually',
            'DSS.3 is a homing high from stance',
            'Can also use: df+1,2 → f,f+4 for easier route'
          ]}
        />

        <TipBox variant="tip" title="Easier CH 1+2 Route">
          If the DSS route is too hard, try: <code>CH 1+2 → df+1,2 → b+2,3,4~f → DSS f+4</code>
        </TipBox>
      </Section>

      <Section title="Low Parry Combo">
        <p>
          When you low parry an opponent's attack, you get a combo opportunity:
        </p>

        <ComboCard
          title="Low Parry"
          starter="Low Parry (df)"
          route={['f,f+2,3 T!', '4,3~f', 'DSS.f+4']}
          damage="~35-40"
          difficulty="beginner"
          notes={[
            'Less damage than normal launch (scaling)',
            'Can also use df+1,2 → ender for simpler route'
          ]}
        />
      </Section>

      <Section title="What to Focus On">
        <KeyConcept title="Combo Learning Priority" icon="🎯">
          <ol>
            <li><strong>Learn the universal route</strong> — df+2 → beginner combo</li>
            <li><strong>Get it consistent</strong> — 10 reps in a row without dropping</li>
            <li><strong>Apply other starters</strong> — uf+4, ws+2, etc.</li>
            <li><strong>Learn wall combos</strong> — Chapter 8</li>
            <li><strong>Optimize later</strong> — Once basics are solid</li>
          </ol>
        </KeyConcept>

        <p>
          Don't worry about maximum damage yet. A dropped combo does zero damage. A completed 
          beginner combo does full damage. Consistency first, optimization later.
        </p>
      </Section>

      <Collapsible title="Advanced Optimized Route" icon="⚡" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Once you've mastered the beginner route, this does more damage:
          </p>

          <ComboCard
            title="Optimized Staple"
            starter="df+2 / uf+4 / ws+2"
            route={['4,u+3', 'dash', '4,3~f', 'DSS.uf+2', 'dash', '1+2 T!', '4,3~f', 'DSS.f+4']}
            damage="~70"
            difficulty="advanced"
            notes={[
              'DSS.uf+2 is a strong filler in DSS',
              '1+2 is the Tornado move (nunchuck)',
              'Requires tighter timing'
            ]}
          />

          <ComboCard
            title="Max Damage Route"
            starter="df+2 / uf+4 / ws+2"
            route={['4,u+3', 'dash', 'df+1,2', 'f,f+4', '1+2 T!', 'df+1,2', 'f,f+4']}
            damage="~72"
            difficulty="advanced"
            notes={[
              'Uses df+1,2 as filler',
              'More wall carry than DSS route'
            ]}
          />
        </div>
      </Collapsible>

      <Collapsible title="Slide Combo" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            After the slide (FC df,d,df+3), you get guaranteed follow-up:
          </p>

          <ComboCard
            title="Slide Oki"
            starter="FC df,d,df+3 (Slide)"
            route={['Turn around', '1+2']}
            damage="~17 + 20"
            difficulty="beginner"
            notes={[
              'Slide leaves them back turned',
              'Hold back to turn around',
              '1+2 is guaranteed if done fast enough',
              'Alternative: BT d+4 for guaranteed knockdown'
            ]}
          />
        </div>
      </Collapsible>

      <Collapsible title="Combo Enders Explained" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Different enders have different purposes:
          </p>

          <p><strong>4,3~f → DSS f+4</strong> — Standard ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Good wall carry</li>
            <li>Consistent damage</li>
          </ul>

          <p><strong>4,3~f → DSS f+3</strong> — Alternative ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Heat engager (if not in Heat)</li>
            <li>Wall break and floor break</li>
          </ul>

          <p><strong>d+2,3</strong> — Tornado ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Use when you need Tornado late in combo</li>
            <li>Good for specific routes</li>
          </ul>

          <p><strong>3,4</strong> — Simple knockdown</p>
          <ul>
            <li>Fast execution</li>
            <li>Use when you just need to finish</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
