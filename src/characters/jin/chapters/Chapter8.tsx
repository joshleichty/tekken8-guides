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
      title="Standard Combos"
      intro="You learned the beginner route in Chapter 5. Now let's level up with optimized routes that squeeze out maximum damage from every launcher."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Learn Punishment"
    >
      <Section title="Combo Route Overview">
        <p>
          Jin's combos follow a pattern. Understanding the structure lets you improvise when 
          needed:
        </p>

        <KeyConcept title="Combo Structure" icon="📐">
          <ol>
            <li><strong>Launcher</strong> — The move that starts the combo</li>
            <li><strong>Pickup/Filler</strong> — Moves that set up the Tornado</li>
            <li><strong>Tornado (T!)</strong> — Extends the combo</li>
            <li><strong>Screw Filler</strong> — More hits after Tornado</li>
            <li><strong>Ender</strong> — Final hits, often into wall</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Standard Launch Combos">
        <p>
          These work off your main launchers: <code>uf+4</code>, <code>d+3+4</code>, 
          <code>ws2</code>, and <code>CD.df+1</code>.
        </p>

        <ComboCard
          title="Standard Route (No Electric)"
          starter="uf+4 / d+3+4 / ws2"
          route={['df+2,4', '3,1~f', 'ZEN.2', 'b+3~f', 'ZEN.u+1 T!', 'f+3+4~f', 'ZEN.1,3']}
          damage="~68"
          difficulty="intermediate"
          wallCarry
          notes={[
            'Consistent damage without Electric execution',
            'Good wall carry'
          ]}
        />

        <ComboCard
          title="Electric Route"
          starter="uf+4 / d+3+4 / ws2"
          route={['CD.df:2', 'b+3~f', 'ZEN.1', 'bf+2,3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~72"
          difficulty="advanced"
          wallCarry
          notes={[
            'Requires Electric after launch',
            'Maximum damage route'
          ]}
        />

        <TipBox variant="tip" title="When to Use Which">
          Use the no-Electric route until your execution is consistent. A dropped Electric 
          means a dropped combo. Consistent damage beats optimized drops.
        </TipBox>
      </Section>

      <Section title="Electric Starter Combos">
        <p>
          When you launch with EWHF itself, you skip the first filler since Electric already 
          does the work.
        </p>

        <ComboCard
          title="EWHF Starter Route"
          starter="EWHF (CD.df:2)"
          route={['b+3~f', 'ZEN.1', 'bf+2,3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~72"
          difficulty="advanced"
          wallCarry
          notes={[
            'EWHF is both your launcher AND filler',
            'Great for whiff punishment'
          ]}
        />

        <ComboCard
          title="Double Electric Route"
          starter="EWHF (CD.df:2)"
          route={['f+3+4', 'BRS.2', 'b+3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~75"
          difficulty="advanced"
          notes={[
            'f+3+4 into Breaking Step for second Electric',
            'Maximum execution, maximum damage'
          ]}
        />
      </Section>

      <Section title="Counter-Hit Combos">
        <p>
          These are for specific counter-hit situations.
        </p>

        <ComboCard
          title="CH f+4 Route"
          starter="CH f+4"
          route={['dash', 'b+3,f,1', 'b+3,f,1', 'b+3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.2', 'b+3,2']}
          damage="~75"
          difficulty="intermediate"
          notes={[
            'Must dash to pick up the crumple',
            'Watch for the CH animation to confirm'
          ]}
        />

        <ComboCard
          title="CH f+4 (Simplified)"
          starter="CH f+4"
          route={['dash', 'bf+2,3~f', 'ZEN.u+1 T!', 'b+3~f', 'ZEN.1,3']}
          damage="~62"
          difficulty="beginner"
          notes={[
            'Easier execution, less damage',
            'Use this until you\'re comfortable with the full route'
          ]}
        />

        <ComboCard
          title="CH FC.df+4 Route"
          starter="CH FC.df+4~f (ZEN)"
          route={['ZEN.df+2', 'b+3,f,1', 'b+3,f,1,3']}
          damage="~65"
          difficulty="intermediate"
          notes={[
            'FC.df+4 is a low sweep that launches on CH',
            'Transition to ZEN with ~f on hit'
          ]}
        />
      </Section>

      <Section title="Heat Combo Extensions">
        <p>
          In Heat, you can Heat Dash to extend combos. Heat Dash costs meter but adds 
          significant damage.
        </p>

        <ComboCard
          title="Heat Dash Extension"
          starter="Any launcher (in Heat)"
          route={['starter combo', '...after T!', '(2),4~f', 'ZEN.2', 'Heat Dash', 'bf+2,1,df+2 T!', 'ender']}
          damage="+15-20"
          difficulty="intermediate"
          notes={[
            'Heat Dash after ZEN.2 gives second Tornado',
            'Significant damage increase'
          ]}
        />

        <TipBox variant="tip" title="When to Heat Dash">
          Heat Dash in combos when:
          <ul>
            <li>You need the extra damage to kill</li>
            <li>You want to guarantee wall carry</li>
            <li>It's the last round and meter doesn't matter</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Wall Combos">
        <p>
          When your combo reaches the wall, you need different routes.
        </p>

        <ComboCard
          title="Standard Wall Combo"
          starter="Wall Splat"
          route={['1', 'db+2,2,3']}
          damage="~30-35"
          difficulty="beginner"
          notes={[
            'Jab to stabilize, then db+2,2,3',
            'Works from most splats'
          ]}
        />

        <ComboCard
          title="Wall Combo with Tornado"
          starter="Wall Splat (T! available)"
          route={['b+1,2 T!', '1', 'db+2,2,3']}
          damage="~40"
          difficulty="intermediate"
          notes={[
            'b+1,2 uses Tornado at wall',
            'More damage if you haven\'t used T! yet'
          ]}
        />

        <ComboCard
          title="Alternative Wall Combo"
          starter="Wall Splat"
          route={['bf+2,1,df+2']}
          damage="~35"
          difficulty="beginner"
          notes={[
            'Simple and consistent',
            'Good when spacing is awkward'
          ]}
        />

        <KeyConcept title="Wall Combo Decision" icon="🧱">
          <ul>
            <li><strong>Have Tornado?</strong> → Use b+1,2 first for extra damage</li>
            <li><strong>No Tornado?</strong> → Use 1 → db+2,2,3</li>
            <li><strong>Awkward spacing?</strong> → Use bf+2,1,df+2</li>
          </ul>
        </KeyConcept>
      </Section>

      <Collapsible title="Floor Break Combos" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            On stages with breakable floors, use these enders:
          </p>

          <ComboCard
            title="Floor Break Ender"
            starter="Standard combo"
            route={['...standard filler', 'CD.df+4,2']}
            damage="Varies"
            notes={[
              'CD.df+4,2 breaks floors',
              'Follow up with normal combo after floor break'
            ]}
          />

          <p style={{ marginTop: '16px' }}>
            After the floor breaks, you continue with a ground combo. The scaling makes it 
            worth about 20-30 extra damage total.
          </p>
        </div>
      </Collapsible>

      <Collapsible title="Small Hit Combos" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Some moves give mini-combos rather than full launches:
          </p>

          <ComboCard
            title="CH 4"
            starter="CH 4 (Magic 4)"
            notation="CH 4 → df+1,4 or 1+2 (heat engager)"
            damage="~28-30"
            notes={['Guarantees df+1,4 on counter-hit']}
          />

          <ComboCard
            title="db+3"
            starter="db+3"
            notation="db+3 → d+2"
            damage="~28"
            notes={['d+2 guaranteed on hit']}
          />

          <ComboCard
            title="ZEN.4"
            starter="ZEN.4"
            notation="ZEN.4 → d+2"
            damage="~47"
            notes={['d+2 guaranteed on hit']}
          />

          <ComboCard
            title="b+1+2 (Parry)"
            starter="b+1+2 (Punch Parry)"
            notation="b+1+2 → ff+2 or ff+4"
            damage="Varies"
            notes={['On successful punch parry']}
          />
        </div>
      </Collapsible>

      <Collapsible title="Combo Notation Quick Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '12px' }}>Quick copy-paste notation:</p>
          
          <p><strong>Beginner (No Electric)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            uf+4 → bf+2,3~f → ZEN.u+1 T! → b+3~f → ZEN.1,3
          </p>

          <p><strong>Standard (No Electric)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            uf+4 → df+2,4 → 3,1~f → ZEN.2 → b+3~f → ZEN.u+1 T! → f+3+4~f → ZEN.1,3
          </p>

          <p><strong>Electric Route</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            uf+4 → EWHF → b+3~f → ZEN.1 → bf+2,3~f → ZEN.u+1 T! → (2),4~f → ZEN.1,3
          </p>

          <p><strong>Wall Combo</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            Wall splat → 1 → db+2,2,3
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
