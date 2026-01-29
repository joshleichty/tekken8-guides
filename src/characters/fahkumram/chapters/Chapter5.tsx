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
      intro="Fahkumram has high damage combos with excellent wall carry. We'll start with beginner-friendly routes that work everywhere, then build up to optimized damage."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn Garuda Force"
    >
      <Section title="How Combos Work in Tekken">
        <p>
          When you launch an opponent, they're airborne and can't block. You have a limited 
          window to hit them with additional moves before they land and can tech (recover).
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
            <strong>You only get ONE Tornado per combo.</strong> Once you've used it, 
            Tornado moves become regular hits. Plan your route accordingly.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Fahkumram's Main Launchers">
        <p>
          These moves start combos. When any of these connect, you do the combo route below:
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>df+2,3</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>15f launcher — your punishment go-to</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>ws3</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>15f WS launcher — after blocking lows</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>b,f+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Jet kick — normal hit launcher</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>CH 3+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Counter-hit 3+4 — confirm the crumple</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>f,f+1+2</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Running launcher — grants GRF on hit</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>uf+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Hopkick — low crushes</p>
            </div>
          </div>
        </div>

        <TipBox variant="tip" title="When to Use Each Launcher">
          <ul>
            <li><strong>df+2,3</strong> — 15f standing punishment</li>
            <li><strong>ws3</strong> — 15f crouching punishment (after blocking lows)</li>
            <li><strong>b,f+4</strong> — Whiff punishment, neutral launch</li>
            <li><strong>CH 3+4</strong> — Confirm the counter-hit crumple</li>
            <li><strong>f,f+1+2</strong> — Guaranteed after certain knockdowns</li>
            <li><strong>uf+4</strong> — Low crush launcher</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="The Beginner Combo">
        <p>
          This combo works off <strong>any launcher</strong>. It's simple, does good damage, 
          and carries to the wall. Learn this first before anything else.
        </p>

        <ComboCard
          title="Universal Beginner Route"
          starter="df+2,3 / ws3"
          route={['b+1', 'd+3,4,3~4', 'uf+4 T!']}
          damage="~55"
          difficulty="beginner"
          wallCarry
          notes={[
            'b+1 is the pickup after launch',
            'd+3,4,3~4 is your filler string',
            'uf+4 is the Tornado ender',
            'Works everywhere, good wall carry'
          ]}
        />

        <KeyConcept title="Breaking Down the Route" icon="📝">
          <ol>
            <li><code>b+1</code> — Mid elbow pickup that knocks them up</li>
            <li><code>d+3,4,3~4</code> — The "piano" filler string (low-high-high-mid)</li>
            <li><code>uf+4 T!</code> — <span className="highlight">Tornado move</span>. Ender that gives wall splat.</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Tips">
          <ul>
            <li>Start with df+2,3 as your launcher</li>
            <li>The d+3,4,3~4 is a quick "piano" input</li>
            <li>Don't rush — each step has a rhythm</li>
            <li>Once you can do it 10 times in a row, try other starters</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Standard Combo">
        <p>
          Once you're comfortable with the beginner route, this does more damage and 
          carries further:
        </p>

        <ComboCard
          title="Standard Route"
          starter="df+2,3 / ws3"
          route={['df+3~4', '3,4~4', 'dash', '3,4~3 T!', 'db+4', 'df+4,3']}
          damage="~65"
          difficulty="intermediate"
          wallCarry
          notes={[
            'df+3~4 is the pickup (fakes into mid)',
            '3,4~4 is the plus frame extension',
            'Needs a small dash before 3,4~3',
            'db+4 after Tornado for spike',
            'df+4,3 is the wall carry ender'
          ]}
        />
      </Section>

      <Section title="b,f+4 (Jet Kick) Combo">
        <p>
          Jet kick launches higher and from further away. Here's the specific route:
        </p>

        <ComboCard
          title="Jet Kick Route"
          starter="b,f+4"
          route={['df+3~4', '3,4~4', 'dash', '3,4~4', 'dash', '3,4~3 T!']}
          damage="~68"
          difficulty="intermediate"
          wallCarry
          notes={[
            'Jet kick gives more time for pickup',
            'Can fit extra 3,4~4 rep',
            'Great wall carry'
          ]}
        />

        <TipBox variant="tip" title="Alternative Easy Route">
          If the standard route is too hard, just do:
          <code style={{ display: 'block', marginTop: '8px' }}>b,f+4 → df+3~4 → 3,4~4 → 3,4~3 T!</code>
          Less damage but more consistent.
        </TipBox>
      </Section>

      <Section title="Counter-Hit 3+4 Combo">
        <p>
          When 3+4 lands on counter-hit, you get a crumple. Confirm the CH animation 
          before committing:
        </p>

        <ComboCard
          title="CH 3+4 Route"
          starter="CH 3+4"
          route={['df+3~4', '3,4~4', 'dash', 'b+4', 'f+3,2,4~3 T!']}
          damage="~70"
          difficulty="intermediate"
          notes={[
            'Watch for the crumple animation',
            'Needs dash to connect b+4',
            'f+3,2,4~3 ends in Tornado'
          ]}
        />
      </Section>

      <Section title="Low Parry Combo">
        <p>
          When you low parry an opponent's low attack, you get a combo:
        </p>

        <ComboCard
          title="Low Parry Route"
          starter="Low Parry (df)"
          route={['db+4', '3,1', 'f+3,2,1']}
          damage="~40"
          difficulty="beginner"
          notes={[
            'db+4 is the spike pickup',
            '3,1 continues the combo',
            'f+3,2,1 is the ender',
            'Less damage than normal launch'
          ]}
        />
      </Section>

      <Section title="Guaranteed Follow-ups">
        <p>
          After certain knockdowns, you get guaranteed follow-ups:
        </p>

        <KeyConcept title="Guaranteed After Knockdown" icon="✅">
          <ul>
            <li><strong>b+1</strong> → f,f+1+2 (grants GRF)</li>
            <li><strong>df+4,3</strong> → d+4 (easy option)</li>
            <li><strong>db+4</strong> → f,f+1+2</li>
            <li><strong>CH f+4</strong> → b+1 → f,f+1+2</li>
            <li><strong>CH d+1</strong> → ws1,2 (heat engager)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="What to Focus On">
        <KeyConcept title="Combo Learning Priority" icon="🎯">
          <ol>
            <li><strong>Learn the beginner route</strong> — df+2,3 → b+1 → d+3,4,3~4 → uf+4</li>
            <li><strong>Get it consistent</strong> — 10 reps in a row without dropping</li>
            <li><strong>Apply other starters</strong> — ws3, b,f+4, CH 3+4</li>
            <li><strong>Learn the standard route</strong> — For more damage</li>
            <li><strong>Learn optimized routes</strong> — Once basics are solid (Chapter 8)</li>
          </ol>
        </KeyConcept>

        <p>
          Don't worry about maximum damage yet. A dropped combo does zero damage. A completed 
          beginner combo does full damage. Consistency first, optimization later.
        </p>
      </Section>

      <Collapsible title="Wall Combo Basics" icon="🧱">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            When you wall splat (opponent hits wall during combo), do these:
          </p>

          <ComboCard
            title="Basic Wall Combo"
            starter="Wall Splat"
            route={['b+4,3,2']}
            damage="~30"
            difficulty="beginner"
            notes={[
              'Simple and reliable',
              'Grants Garuda Force on hit'
            ]}
          />

          <ComboCard
            title="With Tornado Available"
            starter="Wall Splat"
            route={['uf+4 T!', 'b+4,3,2']}
            damage="~45"
            difficulty="beginner"
            notes={[
              'If you haven\'t used Tornado yet',
              'uf+4 gives Tornado at wall',
              'More damage than basic'
            ]}
          />
        </div>
      </Collapsible>

      <Collapsible title="Combo Enders Explained" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Different enders have different purposes:
          </p>

          <p><strong>df+4,3</strong> — Standard ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Good wall carry</li>
            <li>Solid damage</li>
          </ul>

          <p><strong>db+4</strong> — Spike ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Keeps them closer</li>
            <li>Better oki situation</li>
          </ul>

          <p><strong>uf+4</strong> — Tornado ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Wall splats</li>
            <li>Use when near wall</li>
          </ul>

          <p><strong>df+1,2</strong> — Floor break ender</p>
          <ul>
            <li>Use on stages with breakable floors</li>
            <li>Grants Garuda Force</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
