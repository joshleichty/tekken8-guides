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
      number={6}
      title="First Combos"
      intro="You've learned pokes and strings. Now it's time to convert your launchers into real damage. We'll start with one simple route that works everywhere."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Converting Your Hits"
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

      <Section title="Jin's Main Launchers">
        <p>
          These moves start combos. When any of these connect, you do the combo route below:
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>uf+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Hopkick — Low crushes</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>d+3+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Can-Can — i15 launcher</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>ws2</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>While standing 2 — i14 launcher</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>CH f+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>Counter-hit f+4 crumples</p>
            </div>
          </div>
        </div>

        <TipBox variant="tip" title="When to Use Each Launcher">
          <ul>
            <li><strong>uf+4</strong> — When you need to crush a low attack</li>
            <li><strong>d+3+4</strong> — Your main 15f punish launcher</li>
            <li><strong>ws2</strong> — After blocking a low (14f punish from crouch)</li>
            <li><strong>CH f+4</strong> — You won't "choose" this — just confirm when it happens</li>
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
          starter="uf+4 / d+3+4 / ws2 / CH uf+3"
          route={['bf+2,3~f', 'ZEN.u+1 T!', 'b+3,f', 'ZEN.1,3']}
          damage="~60"
          difficulty="beginner"
          wallCarry
          notes={[
            'bf+2,3~f transitions into ZEN stance',
            'ZEN.u+1 is your Tornado move',
            'b+3,f goes back into ZEN for the ender',
            'Works everywhere, good wall carry'
          ]}
        />

        <KeyConcept title="Breaking Down the Route" icon="📝">
          <ol>
            <li><code>bf+2,3~f</code> — A string that ends in ZEN stance</li>
            <li><code>ZEN.u+1</code> — <span className="highlight">Tornado move</span>. Gives you the spin.</li>
            <li><code>b+3,f</code> — Back into ZEN stance for the ender</li>
            <li><code>ZEN.1,3</code> — The combo ender that throws them forward</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Tips">
          <ul>
            <li>Start with just uf+4 as the launcher</li>
            <li>The <code>~f</code> means hold forward to transition</li>
            <li>Don't rush — each step has a rhythm</li>
            <li>Once you can do it 10 times in a row, try other starters</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Counter-Hit f+4 Combo">
        <p>
          When f+4 lands on counter-hit, the opponent crumples. You need to dash forward 
          and pick them up. Here's the simple version:
        </p>

        <ComboCard
          title="CH f+4 Route"
          starter="CH f+4"
          route={['dash', 'b+3,f,1', 'b+3,f,1', 'b+3,f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.2', 'b+3,2']}
          damage="~75"
          difficulty="intermediate"
          notes={[
            'Requires a dash to pick them up',
            'Watch for the crumple animation to confirm CH',
            'Alternative: bf+2,3~f,1,3 after the dash (easier)'
          ]}
        />

        <TipBox variant="warning" title="Confirm the Counter-Hit">
          If f+4 lands on normal hit (+4), you DON'T get a combo. Watch for the crumple 
          animation before committing to the dash. This takes practice to recognize.
        </TipBox>
      </Section>

      <Section title="Low Parry Combo">
        <p>
          In Tekken, you can <strong>parry lows</strong> by tapping <code>df</code> right before 
          a low attack hits. When successful, you launch the opponent.
        </p>

        <ComboCard
          title="Low Parry Route"
          starter="Low Parry (df)"
          route={['3,1', 'bf+2,3~f', 'ZEN.1,3']}
          damage="~40"
          difficulty="beginner"
          notes={[
            '3,1 is the starter after low parry',
            'Less damage than a normal launch',
            'Same route concept, just shorter'
          ]}
        />

        <TipBox variant="tip" title="Low Parries vs Block">
          Low parries are riskier than just blocking — if you time it wrong, you get hit. 
          But the reward is a full combo instead of a simple punish. Worth learning.
        </TipBox>
      </Section>

      <Section title="What to Focus On">
        <KeyConcept title="Combo Learning Priority" icon="🎯">
          <ol>
            <li><strong>Learn the universal route</strong> — uf+4 → beginner combo</li>
            <li><strong>Get it consistent</strong> — 10 reps in a row without dropping</li>
            <li><strong>Apply other starters</strong> — d+3+4, ws2, etc.</li>
            <li><strong>Learn CH f+4</strong> — Practice recognizing the crumple</li>
            <li><strong>Try optimized routes</strong> — Once basics are solid (see below)</li>
          </ol>
        </KeyConcept>

        <p>
          Don't worry about maximum damage yet. A dropped combo does zero damage. A completed 
          beginner combo does full damage. Consistency first, optimization later.
        </p>
      </Section>

      <Collapsible title="Optimized Routes (Advanced)" icon="⚡" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Once you've mastered the beginner route, these do more damage:
          </p>

          <ComboCard
            title="Standard Optimized"
            starter="uf+4 / d+3+4 / ws2"
            route={['df+2,4', '3,1~f', 'ZEN.2', 'b+3~f', 'ZEN.u+1 T!', 'f+3+4~f', 'ZEN.1,3']}
            damage="~68"
            difficulty="intermediate"
            notes={[
              'Uses df+2,4 as filler',
              'More wall carry'
            ]}
          />

          <ComboCard
            title="Max Damage Route"
            starter="uf+4 / d+3+4 / ws2"
            route={['CD.df:2', 'b+3~f', 'ZEN.1', 'bf+2,3~f', 'ZEN.u+1 T!', 'dash', '(2),4~f', 'ZEN.1,3']}
            damage="~72"
            difficulty="advanced"
            notes={[
              'Requires Electric (CD.df:2) execution',
              'Covered in Chapter 6'
            ]}
          />
        </div>
      </Collapsible>

      <Collapsible title="Combo Enders Explained" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Different enders have different purposes:
          </p>

          <p><strong>ZEN.1,3</strong> — Standard ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Good wall carry</li>
            <li>Throws opponent far forward</li>
          </ul>

          <p><strong>b+3,2</strong> — Alternative ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Slightly less carry</li>
            <li>Good when close to wall</li>
          </ul>

          <p><strong>b+2,1</strong> — Short carry ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Use when you just need to finish</li>
          </ul>

          <p><strong>CD.df:4,2</strong> — Floor break ender</p>
          <ul>
            <li>Use on stages with breakable floors</li>
            <li>Extends combos through floor breaks</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
