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
          title="Standard Route"
          starter="uf+4 / ws2 / d+3+4 / CD.df+1"
          route={['df+2,4', 'bf+2,3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~65"
          difficulty="beginner"
          wallCarry
          notes={[
            'Works from any standard launcher',
            'Good damage and wall carry',
            'The go-to route for consistency'
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
          title="EWHF Starter / Low Parry Route"
          starter="EWHF (f,n,d,df+2) / Low Parry"
          route={['EWHF', 'b+3~f', 'ZEN.1', 'b+3~f', 'ZEN.1,3']}
          damage="~55"
          difficulty="advanced"
          wallCarry
          notes={[
            'When you launch WITH Electric',
            'Also the optimal low parry route',
            'Shorter route but great damage per hit'
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
          route={['dash', 'b+3~f', 'ZEN.1', 'bf+2,3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~75"
          difficulty="intermediate"
          notes={[
            'Must dash to pick up the crumple',
            'Watch for the CH animation to confirm',
            'Same route as ff+3 starters'
          ]}
        />

        <ComboCard
          title="ff+3 / ff+3,1 / CH uf+3 Route"
          starter="ff+3 / ff+3,1 / CH uf+3 / CH (3,1),4 / CH (1,d+3),4"
          route={['dash', 'b+3~f', 'ZEN.1', 'bf+2,3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~70"
          difficulty="intermediate"
          notes={[
            'All these starters use the same pickup',
            'Dash before the b+3~f to reach them'
          ]}
        />

        <ComboCard
          title="ff+3,1,2 Route"
          starter="ff+3,1,2"
          route={['bf+2,3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~65"
          difficulty="beginner"
          notes={[
            'No pickup needed - go straight into route',
            'Simpler execution than ff+3 alone'
          ]}
        />

        <ComboCard
          title="CH bf+2,3~f Route"
          starter="CH (bf+2),3~f"
          route={['ZEN.2', 'bf+2,3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~68"
          difficulty="intermediate"
          notes={[
            'When bf+2 counter-hits and you transition to ZEN',
            'Start with ZEN.2 to pick them up'
          ]}
        />

        <ComboCard
          title="CH db+2,2 Route"
          starter="CH db+2,2"
          route={['3,1', '3,1~f', 'ZEN.u+1 T!']}
          damage="~55"
          difficulty="intermediate"
          notes={[
            'Shorter combo from this counter-hit',
            'Use 3,1 to pick up'
          ]}
        />

        <ComboCard
          title="CH FC.df+4 Route"
          starter="CH FC.df+4~f"
          route={['(hold df) BRS.2', 'b+3~f', 'ZEN.1', 'b+3~f', 'ZEN.1,3']}
          damage="~65"
          difficulty="intermediate"
          notes={[
            'FC.df+4 is a low sweep that launches on CH',
            'Hold df to transition to Breaking Step',
            'BRS.2 is the pickup'
          ]}
        />
      </Section>

      <Section title="Heat Combos">
        <p>
          When you activate Heat from a Heat Engager, you get extended combo routes.
        </p>

        <ComboCard
          title="Heat Engager Route"
          starter="Heat on df+4~f / ff+2~f / f+3,1~f / ZEN.1,2~f"
          route={['EWHF', 'b+3~f', 'ZEN.1', '3,1~f', 'ZEN.2', 'b+3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~85"
          difficulty="advanced"
          notes={[
            'Maximum damage Heat combo',
            'EWHF starts the extension',
            'Long route but high reward'
          ]}
        />

        <ComboCard
          title="Heat on Power Stance 1"
          starter="Heat on (db+1+2),1"
          route={['EWHF', 'b+3~f', 'ZEN.1', 'b+3~f', 'ZEN.1,3']}
          damage="~70"
          difficulty="advanced"
          notes={[
            'Same as EWHF starter route',
            'Power Stance 1 launches high'
          ]}
        />

        <ComboCard
          title="Heat on Power Stance 2/3"
          starter="Heat on (db+1+2),2 / (db+1+2),3"
          route={['df+2,4', 'bf+2,3~f', 'ZEN.u+1 T!', '(2),4~f', 'ZEN.1,3']}
          damage="~75"
          difficulty="beginner"
          notes={[
            'Same as standard route',
            'Easier than Heat Engager route'
          ]}
        />

        <TipBox variant="tip" title="Heat Burst Ender">
          After Tornado, you can follow with (2),4~f and cancel into Heat Burst 
          to extend your combo further. Use this when you need maximum damage to close a round.
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
          route={['CD.df+1 T!', '1', 'db+2,2,3']}
          damage="~45"
          difficulty="intermediate"
          notes={[
            'f,n,d,df+1 uses Tornado at wall',
            'More damage if you haven\'t used T! yet'
          ]}
        />

        <ComboCard
          title="Wall Combo with Tornado (Alt)"
          starter="Wall Splat (T! available)"
          route={['b+1,2 T!', 'bf+2,1,df+2']}
          damage="~40"
          difficulty="intermediate"
          notes={[
            'b+1,2 for Tornado, then bf+2,1,df+2',
            'Delay the last hit for maximum damage'
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
            'Delay the last hit for maximum damage'
          ]}
        />

        <KeyConcept title="Wall Combo Decision" icon="🧱">
          <ul>
            <li><strong>Have Tornado?</strong> → Use CD.df+1 T! or b+1,2 T! first for extra damage</li>
            <li><strong>No Tornado?</strong> → Use 1 → db+2,2,3</li>
            <li><strong>Awkward spacing?</strong> → Use bf+2,1,df+2 (delay last hit)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Wall Carry Options">
          You can swap ZEN.1,3 for ZEN.1,2 for better wall carry, or use b+2,1 
          for short distance carry when you're already close to the wall.
        </TipBox>
      </Section>

      <Collapsible title="Floor Break Combos" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            On stages with breakable floors or walls, use these moves:
          </p>

          <p><strong>Floor Break:</strong> db+2,3 or df+4</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Use at the end of combos on breakable floors</li>
            <li>Follow up with a ground combo after the break</li>
          </ul>

          <p><strong>Wall Break:</strong> ff+2</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Use ff+2 to break through walls</li>
            <li>Continues into the next stage area</li>
          </ul>

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
          
          <p><strong>Standard Route (uf+4, ws2, d+3+4, CD.df+1)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            df+2,4 → bf+2,3~f → ZEN.u+1 T! → (2),4~f → ZEN.1,3
          </p>

          <p><strong>CH f+4 / ff+3 Starters</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            (dash) b+3~f → ZEN.1 → bf+2,3~f → ZEN.u+1 T! → (2),4~f → ZEN.1,3
          </p>

          <p><strong>EWHF / Low Parry</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            EWHF → b+3~f → ZEN.1 → b+3~f → ZEN.1,3
          </p>

          <p><strong>Wall Combo (General)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            1 → db+2,2,3
          </p>

          <p><strong>Wall Combo (With Tornado)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            CD.df+1 T! → 1 → db+2,2,3
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
