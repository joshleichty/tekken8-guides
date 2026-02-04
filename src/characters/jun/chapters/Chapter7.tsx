import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Damage Conversion"
      intro="You've created the opening. Now convert it into damage. Jun's combos are straightforward once you learn the core route."
      hasPrevious={true}
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Heat - When Jun Becomes Terrifying"
    >
      <Section title="The Universal Route">
        <p>
          Jun's combos mostly follow one structure. Learn this, and you can convert almost any 
          launcher into good damage.
        </p>

        <KeyConcept title="The Core Structure" icon="🔧">
          <p>Most Jun combos follow this pattern:</p>
          <ol>
            <li><strong>Launcher</strong> → Opponent is airborne</li>
            <li><strong>Filler</strong> → f+3 or b+4,2 to pick up</li>
            <li><strong>IZU 1,1</strong> → Tornado</li>
            <li><strong>Stance transition</strong> → b+2,1~F or IZU 1~F</li>
            <li><strong>Ender</strong> → GEN 2 or GEN 3,2</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Staple Combos">
        <p>
          These are the combos you'll use 90% of the time. Master these before anything else.
        </p>

        <ComboCard
          title="f+2 Staple (Main Launcher)"
          starter="f+2"
          route={['f+4', 'f+3,2', 'IZU 1,1 T!', 'b+2,1~F', 'GEN 2']}
          damage="~75"
          difficulty="intermediate"
          wallCarry
          notes={[
            'Your primary combo from f+2 and most launchers',
            'Great wall carry',
            'GEN 2 can be swapped for GEN 3,2 for safety'
          ]}
        />

        <ComboCard
          title="df+2 Staple"
          starter="df+2"
          route={['b+4,2', 'f+3,2', 'IZU 1,1 T!', 'b+2,1~F', 'GEN 2']}
          damage="~70"
          difficulty="intermediate"
          wallCarry
          notes={[
            'Use b+4,2 instead of f+4 for better pickup',
            'Works for df+2, df+2,1+2 starter too'
          ]}
        />

        <ComboCard
          title="CH d+3+4 Staple (Cancans)"
          starter="CH d+3+4"
          route={['4', 'f,f+2~B', 'MIA 1+2', 'f+3', 'b+2,1~B', 'MIA 1+2', 'IZU 2 T!', 'GEN 3,2']}
          damage="~80"
          difficulty="advanced"
          wallCarry
          notes={[
            'Start with standing 4 to pick up',
            'Simplified version: 4 → f+3,2 → IZU 1,1 → b+2,1~F → GEN 2'
          ]}
        />

        <ComboCard
          title="ws+3 Staple"
          starter="ws+3"
          route={['4', 'f,f+2~B', 'MIA 1+2', 'f+3', 'b+2,1~B', 'MIA 1+2', 'IZU 2 T!', 'GEN 3,2']}
          damage="~75"
          difficulty="advanced"
          wallCarry
          notes={[
            'Same route as CH Cancans',
            'Simplified: 4 → f+3,2 → IZU 1,1 → b+2,1~F → GEN 2'
          ]}
        />

        <TipBox variant="tip" title="Start Simple">
          The advanced routes have more damage, but the simplified versions are more consistent. 
          Use the simple version until you're comfortable, then optimize.
        </TipBox>
      </Section>

      <Section title="Beginner-Friendly Combos">
        <p>
          Just starting out? These combos are easier to execute while still dealing solid damage.
        </p>

        <ComboCard
          title="Easy f+2 Combo"
          starter="f+2"
          route={['f+3', '1,1', 'IZU 1,1 T!', 'f+1', 'IZU 1,1']}
          damage="~65"
          difficulty="beginner"
          notes={[
            'Hold F after f+1 to enter Izumo',
            'Simpler execution, slightly less damage',
            'Good for getting started'
          ]}
        />

        <ComboCard
          title="Easy CH Cancans"
          starter="CH d+3+4"
          route={['4', 'f+1', 'IZU 1,1 T!', 'f+1', 'IZU 1,1']}
          damage="~70"
          difficulty="beginner"
          notes={[
            'Much easier than optimal',
            'Same structure as easy f+2 combo',
            'Consistent and reliable'
          ]}
        />

        <ComboCard
          title="Easy df+2 Combo"
          starter="df+2"
          route={['4', '1,1', 'IZU 1,1 T!', 'f+1', 'IZU 1,1']}
          damage="~60"
          difficulty="beginner"
          notes={[
            'Pick up with 4 instead of b+4,2',
            'Forgiving timing'
          ]}
        />
      </Section>

      <Section title="Counter-Hit Conversions">
        <Collapsible title="CH Specific Combos">
          <ComboCard
            title="CH ws+2"
            starter="CH ws+2"
            route={['d+1+2 T!', 'GEN 4', 'f+3', 'b+2,1~F', 'GEN 2']}
            damage="~70"
            difficulty="intermediate"
            notes={[
              'd+1+2 gives instant tornado',
              'GEN 4 is your combo filler here'
            ]}
          />

          <ComboCard
            title="CH uf+3"
            starter="CH uf+3"
            route={['d+1+2 T!', 'GEN 4', 'f+3', 'b+2,1~F', 'GEN 2']}
            damage="~68"
            difficulty="intermediate"
            notes={[
              'Same conversion as CH ws+2',
              'd+1+2 is your friend for CH conversions'
            ]}
          />

          <ComboCard
            title="CH df+4"
            starter="CH df+4"
            route={['d+1+2 T!', 'GEN 4', 'f+3', 'b+2,1~F', 'GEN 2']}
            damage="~72"
            difficulty="intermediate"
            notes={[
              'Crumple stun - dash forward slightly before d+1+2',
              'Can also run up for bigger combo'
            ]}
          />

          <ComboCard
            title="CH FC df+2"
            starter="CH FC df+2"
            route={['ws+3', '4', 'f,f+2~B', 'MIA 1+2', 'f+3', 'b+2,1~B', 'MIA 1+2', 'IZU 1~F', 'GEN 2']}
            damage="~78"
            difficulty="advanced"
            notes={[
              'ws+3 is guaranteed on CH FC df+2',
              'Full conversion for the crouch mix payoff'
            ]}
          />
        </Collapsible>
      </Section>

      <Section title="Wall Combos">
        <p>
          When you wall splat, these are your options. The tornado route gives more damage but 
          requires the wall splat to have enough hitstun.
        </p>

        <ComboCard
          title="Standard Wall Combo"
          starter="Wall splat"
          route={['db+1,1,1+2']}
          damage="45"
          difficulty="beginner"
          notes={[
            'Reliable and heals Jun',
            'Works after any wall splat',
            'Your default wall ender'
          ]}
        />

        <ComboCard
          title="Better Wall Combo"
          starter="Wall splat"
          route={['uf+4,3', 'MIA 2']}
          damage="~55"
          difficulty="intermediate"
          notes={[
            'More damage than db+1,1,1+2',
            'The 3 must hit while opponent is still on wall',
            'MIA 2 is the laser ender'
          ]}
        />

        <ComboCard
          title="Wall Combo with Tornado"
          starter="Wall splat (high)"
          route={['uf+2 T!', 'df+1,2', '1+2']}
          damage="~60"
          difficulty="intermediate"
          notes={[
            'Only works with high wall splats',
            'uf+2 gives tornado',
            '1+2 is heat engager ender'
          ]}
        />

        <ComboCard
          title="Optimal Wall with Tornado"
          starter="Wall splat (high)"
          route={['uf+4,3~F T!', 'GEN 4', '1+2']}
          damage="~65"
          difficulty="advanced"
          notes={[
            'Maximum wall damage',
            'Requires good spacing'
          ]}
        />

        <TipBox variant="tip" title="Default to db+1,1,1+2">
          If you're ever unsure what wall combo to do, db+1,1,1+2 always works and heals you. 
          Only go for bigger combos when you're confident.
        </TipBox>
      </Section>

      <Section title="Combo Enders">
        <p>
          Different enders serve different purposes:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Max Damage</div>
            <code>GEN 2</code> or <code>GEN 3,2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Standard enders for damage
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Wall Carry</div>
            <code>f,f+2,3</code> or <code>b+4,2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Carry to wall before tornado
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Wall Break</div>
            <code>b+2,1,4</code> or <code>f,f+2,2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              When you want to break walls
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Floor Break</div>
            <code>f,f+3,3+4</code> or <code>d+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              For floor break stages
            </div>
          </div>
        </div>
      </Section>

      <Section title="Heat Combo Extensions">
        <p>
          When you have Heat available, many combos can be extended with heat dash:
        </p>

        <ComboCard
          title="f+2 Heat Extension"
          starter="f+2,1+2 (Heat Dash)"
          route={['b+4,2', 'f+3,2', 'IZU 1,1 T!', 'b+2,1~F', 'GEN 2']}
          damage="~85"
          difficulty="intermediate"
          notes={[
            'f+2,1+2 into heat dash',
            'More damage than regular combo',
            'Uses your heat'
          ]}
        />

        <ComboCard
          title="SS4 Heat Extension"
          starter="SS4 (Heat Dash)"
          route={['hold F', 'f+4', 'f+3,2', 'IZU 1,1 T!', 'b+2,1~F', 'GEN 2']}
          damage="~80"
          difficulty="intermediate"
          notes={[
            'SS4 on hit into heat dash',
            'Hold F to transition and continue combo'
          ]}
        />

        <TipBox variant="tip" title="When to Use Heat Combos">
          Heat dash combos deal more damage but consume your heat. Consider whether you want 
          the extra damage now or the heat pressure options for later.
        </TipBox>
      </Section>

      <Section title="Practice: Core Combos">
        <PracticeBox
          title="Staple Combo Drill"
          setup="Set opponent to stand. Practice until consistent."
          tasks={[
            { id: 'combo-1', text: 'f+2 staple 10 times in a row', detail: 'No drops allowed', type: 'counter', target: 10 },
            { id: 'combo-2', text: 'df+2 staple 10 times in a row', detail: 'b+4,2 pickup', type: 'counter', target: 10 },
            { id: 'combo-3', text: 'CH Cancans into combo 10 times', detail: 'Start with 4 pickup', type: 'counter', target: 10 },
          ]}
        />

        <PracticeBox
          title="Wall Combo Drill"
          setup="Position near wall. Practice wall splat conversions."
          tasks={[
            { id: 'wall-1', text: 'Any launcher → wall carry → db+1,1,1+2 5 times', detail: 'The reliable option', type: 'counter', target: 5 },
            { id: 'wall-2', text: 'Any launcher → wall carry → uf+4,3 → MIA 2 5 times', detail: 'More damage', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="Quick Reference">
        <KeyConcept title="The 3 Combos You Need" icon="🎯">
          <ol>
            <li><strong>f+2 / df+2:</strong> f+4/b+4,2 → f+3,2 → IZU 1,1 T! → b+2,1~F → GEN 2</li>
            <li><strong>CH Cancans / ws+3:</strong> 4 → simple route or optimal route</li>
            <li><strong>Wall:</strong> db+1,1,1+2 (safe) or uf+4,3 → MIA 2 (damage)</li>
          </ol>
        </KeyConcept>

        <p style={{ marginTop: '24px' }}>
          Next chapter: Heat changes everything. Jun's heat smash is one of the scariest in the 
          game. Let's see why.
        </p>
      </Section>
    </Chapter>
  )
}
