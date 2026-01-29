import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Chain Throws"
      intro="King's chain throws are elaborate multi-throw sequences that can deal 100+ damage. They're knowledge checks — if your opponent doesn't know the breaks, they die."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Learn Mid Pokes"
    >
      <Section title="What Are Chain Throws?">
        <p>
          Chain throws are <span className="highlight">multi-throw sequences</span> where King performs multiple 
          throws in a row. Each throw in the chain has its own break window. If your opponent doesn't break 
          correctly, they take massive damage.
        </p>

        <KeyConcept title="How Chain Throws Work" icon="🔗">
          <ul>
            <li><strong>Start with a throw</strong> — Usually df+1+3 or df+2+4</li>
            <li><strong>Each step has a break</strong> — Opponent must break each throw individually</li>
            <li><strong>If they break wrong</strong> — They take damage and the chain continues</li>
            <li><strong>If they break right</strong> — They escape, but you're still plus</li>
            <li><strong>If they don't break</strong> — They take 60-100+ damage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Knowledge Checks">
          Chain throws are knowledge checks. Against opponents who don't know the breaks, they're devastating. 
          Against opponents who do know the breaks, they're less effective. Use them situationally.
        </TipBox>
      </Section>

      <Section title="The Two Chain Throw Sets">
        <p>
          King has two main chain throw sets. Understanding the difference is important:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>df+1+3 / df+2+4</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Simpler chain throws. Each step is 1 or 2 break. Easier to break, but easier to execute.
            </p>
          </div>
          
          <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>B+Step Chain Throws</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              More complex chain throws. Have 1, 2, AND 1+2 breaks. Harder to break, harder to execute.
            </p>
          </div>
        </div>

        <p style={{ marginTop: '20px' }}>
          For beginners, start with the df+1+3 / df+2+4 chains. They're simpler and still deal good damage. 
          The B+Step chains are more advanced and require precise execution.
        </p>
      </Section>

      <Section title="Rolling Death Cradle — The Ultimate Chain Throw">
        <p>
          Rolling Death Cradle is <span className="highlight-secondary">King's most famous chain throw</span>. 
          It can deal <strong>100 damage</strong> if your opponent doesn't know the breaks.
        </p>

        <KeyConcept title="Rolling Death Cradle" icon="💀">
          <ul>
            <li><strong>Start</strong> — B+Step → 1+4 or 2+3</li>
            <li><strong>First break</strong> — 1, 2, or 1+2 (all look identical!)</li>
            <li><strong>If they break wrong</strong> — Chain continues, more damage</li>
            <li><strong>Final step</strong> — Rolling Death Cradle (2 break)</li>
            <li><strong>Total damage</strong> — 100 damage if they don't break correctly</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Knowledge Check">
          Rolling Death Cradle is a knowledge check. Against opponents who don't know it, it wins rounds. 
          Against opponents who do know it, it's less effective. Use it when you think they don't know the breaks.
        </TipBox>
      </Section>

      <Section title="When to Use Chain Throws">
        <p>
          Chain throws aren't always the right choice. Here's when to use them:
        </p>

        <KeyConcept title="Chain Throw Situations" icon="🎯">
          <ul>
            <li><strong>Against beginners</strong> — They don't know the breaks, free damage</li>
            <li><strong>After knockdown</strong> — Opponent is grounded, chain throw is guaranteed</li>
            <li><strong>At the wall</strong> — Some chain throws wall splat for extra damage</li>
            <li><strong>When opponent is panicking</strong> — They're mashing, not breaking correctly</li>
            <li><strong>For psychological damage</strong> — Even if they break, they're scared</li>
          </ul>
        </KeyConcept>

        <p>
          <strong>Don't use chain throws:</strong>
        </p>
        <ul>
          <li>Against opponents who know the breaks</li>
          <li>When you need guaranteed damage</li>
          <li>In high-stakes situations where a single throw is safer</li>
        </ul>
      </Section>

      <Collapsible title="Basic Chain Throw Routes" icon="📖">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '12px' }}>Here are some basic chain throw routes to get started:</p>
          
          <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '6px', marginBottom: '12px' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>df+1+3 Chain (1 break start)</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Start: df+1+3 → Each step is 1 or 2 break → Deals ~60-70 damage if not broken
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '6px', marginBottom: '12px' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>df+2+4 Chain (2 break start)</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Start: df+2+4 → Each step is 1 or 2 break → Deals ~60-70 damage if not broken
            </p>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '6px', marginBottom: '12px' }}>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>B+Step Chain (Rolling Death Cradle)</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Start: B+Step → 1+4 or 2+3 → Has 1, 2, AND 1+2 breaks → Deals 100 damage if not broken
            </p>
          </div>

          <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--text-muted)' }}>
            <strong>Note:</strong> Chain throws require precise execution. Practice in Training Mode until you 
            can execute them consistently. The inputs are complex, but the damage is worth it.
          </p>
        </div>
      </Collapsible>

      <Section title="Chain Throw Execution Tips">
        <p>
          Chain throws are execution-heavy. Here are some tips:
        </p>

        <KeyConcept title="Execution Tips" icon="🎮">
          <ul>
            <li><strong>Practice in Training Mode</strong> — Set dummy to Stand, No Guard</li>
            <li><strong>Learn one route at a time</strong> — Don't try to learn all routes at once</li>
            <li><strong>Use button macros</strong> — 1+2, 3+4 macros help with complex inputs</li>
            <li><strong>Input timing matters</strong> — Each step has a specific timing window</li>
            <li><strong>Start simple</strong> — Learn df+1+3 chain before B+Step chains</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Button Macros">
          Many King players use button macros for chain throws. If your controller supports it, set up 1+2 
          and 3+4 macros. This makes chain throw execution much easier.
        </TipBox>
      </Section>

      <Section title="Practice Time">
        <PracticeBox
          title="Chain Throw Practice"
          setup="Set dummy to Stand, No Guard. Practice executing chain throws consistently."
          tasks={[
            { id: 'ch6-df13', text: 'Execute df+1+3 chain throw 5 times', detail: 'Start with df+1+3, follow the chain route', type: 'counter', target: 5 },
            { id: 'ch6-df24', text: 'Execute df+2+4 chain throw 5 times', detail: 'Start with df+2+4, follow the chain route', type: 'counter', target: 5 },
            { id: 'ch6-bstep', text: 'Execute B+Step chain throw 3 times', detail: 'B+Step → 1+4 or 2+3, follow to Rolling Death Cradle', type: 'counter', target: 3 },
          ]}
        />
      </Section>

      <Section title="The Complete Picture">
        <p>
          Chain throws are <span className="highlight">powerful knowledge checks</span>. Against opponents 
          who don't know the breaks, they're devastating. Against opponents who do know the breaks, they're 
          less effective but still useful for psychological pressure.
        </p>

        <KeyConcept title="Master Chain Throws" icon="👑">
          <ul>
            <li><strong>Learn the basics first</strong> — df+1+3 and df+2+4 chains</li>
            <li><strong>Practice execution</strong> — Chain throws require precise inputs</li>
            <li><strong>Use situationally</strong> — Not always the right choice</li>
            <li><strong>Know when to stop</strong> — Sometimes a single throw is safer</li>
            <li><strong>Advanced: Learn B+Step chains</strong> — Rolling Death Cradle is worth learning</li>
          </ul>
        </KeyConcept>

        <p>
          Don't rely on chain throws exclusively. They're a tool in your arsenal, not your only tool. But 
          when used correctly, they can win rounds.
        </p>
      </Section>
    </Chapter>
  )
}
