import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Optimized Combos"
      intro="Now that you have the basics, let's maximize damage and wall carry. These routes squeeze every point of damage from Victor's combos."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Wall Combos & Oki"
    >
      <Section title="Optimal Standard Route">
        <ComboCard
          title="Max Damage Route"
          starter="df+2 / ws1 / f,f+2"
          route={['df+4,2', 'IAI.2 T!', 'df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.2,2', 'IAI.1,2,2']}
          damage="~65-68"
          difficulty="intermediate"
          wallCarry
          notes={[
            'PRF.2,2 → IAI.1,2,2 is the optimized ender',
            'More damage than PRF.1+2 ender',
            'IAI.1,2,2 leaves them in full crouch'
          ]}
        />

        <KeyConcept title="Why This Route" icon="📊">
          <p>
            The optimized route swaps <code>PRF.1+2</code> for <code>PRF.2,2 → IAI.1,2,2</code>. 
            This gives about 3-5 more damage and better wall splat positioning.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Hopkick Specific Route">
        <ComboCard
          title="uf+4 Optimal Route"
          starter="uf+4"
          route={['ws2', 'df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.2,2', 'IAI.2 T!', 'b+3,1']}
          damage="~66"
          difficulty="intermediate"
          wallCarry
          notes={[
            'uf+4 tailspins early, different route needed',
            'ws2 picks up cleanly after hopkick',
            'Tornado later in the route for max damage'
          ]}
        />

        <TipBox variant="tip" title="uf+4 Note">
          Because uf+4 already tailspins, the route is slightly different. You use tornado 
          later in the combo rather than early.
        </TipBox>
      </Section>

      <Section title="High Wall Carry Route">
        <ComboCard
          title="Maximum Wall Carry"
          starter="df+2 / ws1 / f,f+2"
          route={['df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.2,2,1 T!', 'db+1,1~f', 'PRF.2,2', 'IAI.1,2,2']}
          damage="~63"
          difficulty="advanced"
          wallCarry
          notes={[
            'PRF.2,2,1 is the tornado move in this route',
            'Trades ~5 damage for maximum wall carry',
            'Use when wall is far and you need to reach it'
          ]}
        />
      </Section>

      <Section title="Counter-Hit Optimized Routes">
        <ComboCard
          title="CH 1+2 Optimal"
          starter="CH 1+2"
          route={['ws2', 'df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.2,2', 'IAI.2 T!', 'b+3,1']}
          damage="~70"
          difficulty="intermediate"
          notes={[
            'CH 1+2 crumples, ws2 picks up',
            'Same structure as uf+4 route'
          ]}
        />

        <ComboCard
          title="CH db+4 Optimal"
          starter="CH db+4"
          route={['ws2', 'df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.2,2', 'IAI.2 T!', 'b+3,1']}
          damage="~68"
          difficulty="intermediate"
          notes={[
            'ws2 instead of ws3,2 for more damage',
            'Must wait for Victor to stand'
          ]}
        />

        <ComboCard
          title="CH f,f,f+2 Optimal"
          starter="CH f,f,f+2"
          route={['dash', 'df+4,2', 'IAI.4,2', 'db+1,1~f', 'PRF.2,2', 'IAI.4,2', 'db+1,1~f', 'PRF.1+2']}
          damage="~72"
          difficulty="advanced"
          notes={[
            'No early tornado in this route',
            'Maximum damage from CH running mid'
          ]}
        />
      </Section>

      <Section title="Heat Combo Extensions">
        <p>
          In heat, you can Heat Burst to extend combos for massive damage:
        </p>

        <ComboCard
          title="Heat Burst Extension"
          starter="Any launcher (in Heat)"
          route={['...after db+1,1~f', 'Heat Burst', 'f+1+2~f', 'u+1+2']}
          damage="+20-25"
          difficulty="intermediate"
          notes={[
            'Heat Burst after db+1,1~f in any combo',
            'f+1+2 heat dash gives launcher',
            'u+1+2 is the heat ender (huge damage, hits grounded)'
          ]}
        />

        <ComboCard
          title="Full Heat Combo Example"
          starter="df+2 (in Heat)"
          route={['df+4,2', 'IAI.2 T!', 'df+4,2', 'IAI.4,2', 'db+1,1~f', 'Heat Burst', 'f+1+2~f', 'u+1+2']}
          damage="~95-100"
          difficulty="advanced"
          notes={[
            'Near 100 damage with heat burst',
            'u+1+2 in heat does massive damage and is safe'
          ]}
        />

        <KeyConcept title="Heat Burst Timing" icon="🔥">
          <p>
            Heat burst after <code>db+1,1~f</code> in any combo. This transitions to heat 
            and gives you the heat dash extension.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="When to Heat Burst">
          <ul>
            <li>When you need damage to kill</li>
            <li>When wall carry doesn't matter</li>
            <li>Last round of the set</li>
            <li>You're confident you'll win with the extra damage</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Floor Break Combos">
        <ComboCard
          title="Floor Break Route"
          starter="Any launcher (on floor break stage)"
          route={['...standard combo', 'u+1+2 (floor break)', 'pickup combo below']}
          damage="Varies"
          notes={[
            'u+1+2 breaks floors',
            'd+2 heat dash also breaks floors',
            'After floor break, do a shortened combo'
          ]}
        />

        <TipBox variant="tip" title="Post-Floor Break">
          After floor break, you're limited on what connects. Usually:
          <br/><code>Floor break → df+4,2 → IAI.2 T! → b+3,1</code>
        </TipBox>
      </Section>

      <Section title="Combo Enders Reference">
        <KeyConcept title="Ender Options" icon="🏁">
          <ul>
            <li><strong>PRF.1+2</strong> — Hits grounded, good oki, less damage</li>
            <li><strong>IAI.1,2,2</strong> — Max damage, leaves them FC</li>
            <li><strong>b+3,1</strong> — Consistent, good wall carry</li>
            <li><strong>uf+1,1</strong> — Wall splats, medium carry</li>
            <li><strong>ws2</strong> — Short carry, use when wall is close</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Ender Decision" icon="🧠">
          <ul>
            <li><strong>Wall far?</strong> → PRF.2,2 → IAI.1,2,2 or b+3,1</li>
            <li><strong>Wall close?</strong> → ws2 or uf+1,1</li>
            <li><strong>Want oki?</strong> → PRF.1+2 (hits grounded)</li>
            <li><strong>Need damage?</strong> → IAI.1,2,2</li>
          </ul>
        </KeyConcept>
      </Section>

      <Collapsible title="Combo Quick Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <p><strong>Standard Optimal (65-68 dmg)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            df+2 → df+4,2 → IAI.2 T! → df+4,2 → IAI.4,2 → db+1,1~f → PRF.2,2 → IAI.1,2,2
          </p>

          <p><strong>uf+4 / CH 1+2 (66-70 dmg)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            uf+4 → ws2 → df+4,2 → IAI.4,2 → db+1,1~f → PRF.2,2 → IAI.2 T! → b+3,1
          </p>

          <p><strong>Heat Extension (+25 dmg)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            ...db+1,1~f → Heat Burst → f+1+2~f → u+1+2
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
