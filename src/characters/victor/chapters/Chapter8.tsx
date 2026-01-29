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
      title="First Combos"
      intro="Victor's combos have massive wall carry and respectable damage. This chapter teaches you one easy route that works from any launcher — master this before moving to optimized routes."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Learn Optimized Combos"
    >
      <Section title="Combo Structure">
        <KeyConcept title="Victor's Combo Structure" icon="📐">
          <ol>
            <li><strong>Launcher</strong> — The move that starts the combo</li>
            <li><strong>Pickup/Filler</strong> — Moves that keep them airborne</li>
            <li><strong>Tornado (T!)</strong> — The spinning state that extends combos</li>
            <li><strong>Screw Filler</strong> — More hits after tornado</li>
            <li><strong>Ender</strong> — Final hit(s), usually into wall</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="One Tornado Per Combo">
          You only get ONE tornado per combo. Plan your route to use it at the right time 
          for maximum wall carry and damage.
        </TipBox>
      </Section>

      <Section title="Victor's Main Launchers">
        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>df+2</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Your main launcher. i15, good range.</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>ws1</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>i15 while standing launcher.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>uf+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Hopkick. Low crushes.</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>f,f+2</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Running launcher. Good range.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>CH 1+2</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Counter-hit launcher. i15.</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>CH db+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Counter-hit low launcher.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="The Beginner Combo">
        <p>
          This route works from <strong>any launcher</strong>. Learn this first, then add 
          optimizations later.
        </p>

        <ComboCard
          title="Universal Beginner Route"
          starter="df+2 / ws1 / uf+4 / f,f+2 / CH 1+2"
          route={['df+4,2', 'IAI.2 T!', 'df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.1+2']}
          damage="~60-63"
          difficulty="beginner"
          wallCarry
          notes={[
            'df+4,2 is your main filler (auto-transitions to IAI)',
            'IAI.2 gives you tornado',
            'PRF.1+2 is the ender (hits grounded, good oki)',
            'Works from any launcher, good wall carry'
          ]}
        />

        <KeyConcept title="Breaking It Down" icon="📝">
          <ol>
            <li><code>df+4,2</code> — Mid-high that transitions to IAI (your filler)</li>
            <li><code>IAI.2</code> — Your <span className="highlight">Tornado move</span></li>
            <li><code>df+4,2</code> — Filler again</li>
            <li><code>IAI.4,2</code> — More damage, wall carry</li>
            <li><code>db+1,1~f</code> — Transitions to PRF</li>
            <li><code>PRF.1+2</code> — Ender (hits grounded for oki)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Tips">
          <ul>
            <li>Start with df+2 as your launcher</li>
            <li>df+4,2 auto-transitions to IAI — no manual input needed</li>
            <li>Focus on rhythm over speed</li>
            <li>Once you can do it 10 times in a row, try other starters</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Simpler Alternative">
        <p>
          If the full route is too hard, use this simpler version:
        </p>

        <ComboCard
          title="Easy Mode Route"
          starter="df+2 / ws1 / uf+4"
          route={['df+3,4', 'db+1,1~f', 'PRF.2,2', 'IAI.2 T!', 'b+3,1']}
          damage="~55"
          difficulty="beginner"
          notes={[
            'Slightly less damage but easier execution',
            'df+3,4 is a simple filler',
            'b+3,1 is a consistent ender'
          ]}
        />
      </Section>

      <Section title="Counter-Hit Specific Combos">
        <ComboCard
          title="CH db+4 Route"
          starter="CH db+4"
          route={['ws+3,2 T!', 'df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.1+2']}
          damage="~65"
          difficulty="beginner"
          notes={[
            'ws3,2 picks up from the CH db+4 crumple',
            'Wait for Victor to fully stand before ws3,2'
          ]}
        />

        <ComboCard
          title="CH f,f,f+2 Route"
          starter="CH f,f,f+2"
          route={['dash', 'df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.2,2', 'IAI.1,2,2']}
          damage="~68"
          difficulty="intermediate"
          notes={[
            'Must dash to pick up after CH f,f,f+2',
            'Same route structure after pickup'
          ]}
        />

        <ComboCard
          title="CH f,f,f+2~d Route"
          starter="CH f,f,f+2~d (already in IAI)"
          route={['IAI.4,2', 'db+1,1~f', 'PRF.2,2', 'IAI.4,2', 'db+1,1~f', 'PRF.1+2']}
          damage="~70"
          difficulty="intermediate"
          notes={[
            'If you held d during f,f,f+2, you\'re already in IAI',
            'Start with IAI.4,2 instead of picking up'
          ]}
        />
      </Section>

      <Section title="Low Parry Combo">
        <ComboCard
          title="Low Parry Route"
          starter="Low Parry (df)"
          route={['df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.2,2', 'IAI.1,2,2']}
          damage="~45"
          difficulty="beginner"
          notes={[
            'Less damage than full launches (low parry scaling)',
            'Same route structure applies'
          ]}
        />
      </Section>

      <Section title="What to Focus On">
        <KeyConcept title="Combo Learning Priority" icon="🎯">
          <ol>
            <li><strong>Learn the universal route</strong> — df+2 → full combo</li>
            <li><strong>Get it consistent</strong> — 10 reps without dropping</li>
            <li><strong>Apply to other starters</strong> — ws1, uf+4, f,f+2</li>
            <li><strong>Learn CH db+4 route</strong> — Your power low conversion</li>
            <li><strong>Then optimize</strong> — Chapter 9 covers max damage routes</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Consistency > Damage">
          A dropped combo does ZERO damage. A completed beginner combo does full damage. 
          Don't chase optimizations until you're 100% consistent with basics.
        </TipBox>
      </Section>

      <Collapsible title="Quick Notation Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <p><strong>Universal Beginner (60+ dmg)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            df+2 → df+4,2 → IAI.2 T! → df+4,2 → IAI.4,2 → db+1,1~f → PRF.1+2
          </p>

          <p><strong>Easy Mode (55 dmg)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            df+2 → df+3,4 → db+1,1~f → PRF.2,2 → IAI.2 T! → b+3,1
          </p>

          <p><strong>CH db+4 (65 dmg)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            CH db+4 → ws3,2 T! → df+4,2 → IAI.4,2 → db+1,1~f → PRF.1+2
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
