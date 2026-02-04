import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Making Them Freeze"
      intro="You've learned SS4 and 1,2,2. Now let's expand your arsenal of plus frame tools. Every one of these moves creates the same trap: they can't press, so they have to guess."
      hasPrevious={true}
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="The Counter-Hit Arsenal"
    >
      <Section title="The Plus Frame Arsenal">
        <p>
          Jun has an unusual number of moves that leave her plus on block. Most characters get 
          one or two. Jun has an entire toolkit. And they all funnel into the same place: throw or launch.
        </p>

        <KeyConcept title="The +3 Club" icon="🎯">
          <p>Every move in this chapter leaves Jun at +3 or better on block. That means:</p>
          <ul>
            <li>df+2+3 throw is uninterruptible</li>
            <li>Any i12 or faster move beats their jab</li>
            <li>They have to sit there and take it</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="f,f+1+2: The Approaching Mid">
        <p>
          This is your main tool for closing distance while staying plus. It's a running mid that 
          leaves you +6 on block—the same as SS4.
        </p>

        <MoveCard character="jun"
          videoId="f,F+1+2"
          move={{
            input: 'f,f+1+2',
            hitLevel: ['m'],
            damage: '32',
            startup: 'i22',
            onBlock: '+6',
            onHit: '+23a (+13)',
            tags: ['Mid', 'Plus on Block', 'Approach'],
            description: 'Running mid that\'s +6 on block. Knocks down on hit. Can transition to stances.',
            notes: ['Hold F to enter Genjitsu (+9)', 'Hold B to enter Miare (+9)', 'Deals chip and self-damage']
          }}
          showVideo
        />

        <p>
          f,f+1+2 is slower than SS4 (i22 vs i18), but it covers ground. Use it from mid-range 
          when you need to get in. Once it's blocked, you're +6 and the trap begins.
        </p>

        <Flowchart 
          title="f,f+1+2 On Block"
          nodes={[
            { type: 'start', label: 'f,f+1+2 blocked (+6)' },
            { type: 'decision', label: 'What next?', branches: [
              { label: 'Throw', action: 'df+2+3 → Uninterruptible' },
              { label: 'Launch', action: 'df+2 → Catches mashing' },
              { label: 'Enter Stance', action: 'Hold F → Genjitsu at +9' }
            ]},
            { type: 'end', label: 'All options beat mashing' }
          ]}
        />

        <TipBox variant="tip" title="Stance Transitions">
          By holding F or B after f,f+1+2, you enter Genjitsu or Miare at +9. That's even MORE 
          advantage than the raw +6. We'll cover stance options in Chapter 6.
        </TipBox>
      </Section>

      <Section title="f+4: The Homing Check">
        <p>
          When opponents start sidestepping your pressure, f+4 brings them back in line. It's a 
          homing high that leaves you +3 to +5 on block.
        </p>

        <MoveCard character="jun"
          videoId="f+4"
          move={{
            input: 'f+4',
            hitLevel: ['h'],
            damage: '21',
            startup: 'i19~21',
            onBlock: '+3~+5',
            onHit: '+13~+15',
            tags: ['High', 'Homing', 'Plus on Block'],
            description: 'Homing kick. Catches sidesteps. +3 minimum on block, guarantees 1+2 on hit.',
            notes: ['Variable plus frames based on spacing', 'On hit: 1+2 is guaranteed (39 damage, heat engager)', 'Balcony breaks on airborne']
          }}
          showVideo
        />

        <KeyConcept title="f+4 On Hit = Free Damage" icon="💥">
          <p>
            When f+4 connects on normal hit, you get <code>1+2</code> guaranteed. That's 39 damage 
            AND a heat engager. Just mash 1+2 after f+4 lands.
          </p>
          <code style={{ display: 'block', marginTop: '12px', padding: '8px', background: 'var(--bg-secondary)', borderRadius: '4px' }}>
            f+4 (hit) → 1+2 = 39 damage + heat engager
          </code>
        </KeyConcept>

        <TipBox variant="warning" title="It's a High">
          f+4 can be ducked and launched. Use it when opponents are stepping, not when they're 
          crouching. If they're ducking your highs, use df+3 (homing mid) instead.
        </TipBox>
      </Section>

      <Section title="Low Pokes That Keep You Plus">
        <p>
          Plus frames don't just come from mids and highs. Jun's low pokes also set up her traps.
        </p>

        <MoveCard character="jun"
          videoId="db+3"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i18',
            onBlock: '-12',
            onHit: '+2',
            onCH: '+6c',
            tags: ['Low', 'Plus on Hit'],
            description: 'Low poke that\'s +2 on normal hit, +6 on counter hit. Sets up pressure.',
            notes: ['Counter hit stun looks scary', 'Can loop into itself', 'Primary low poke for chip']
          }}
          showVideo
        />

        <p>
          db+3 is -12 on block (punishable by fast moves), but look at that counter hit: 
          <strong>+6</strong>. The same advantage as SS4 and f,f+1+2.
        </p>

        <MoveCard character="jun"
          videoId="d+4"
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            damage: '10',
            startup: 'i15',
            onBlock: '-12',
            onHit: '-1',
            tags: ['Low', 'Poke', 'Fast'],
            description: 'Fast low poke with great range. -1 on hit resets neutral.',
            notes: ['Has a risky d+4,4 extension', 'Great for chipping', 'Use sparingly - punishable']
          }}
          showVideo
        />

        <TipBox variant="tip" title="db+3 vs d+4">
          d+4 is faster (i15 vs i18) and has better range, but db+3 gives you +2 on hit and 
          potential +6 on CH. Use d+4 for quick chip, db+3 when you want to continue pressure.
        </TipBox>
      </Section>

      <Section title="The Forward Forward Pressure Suite">
        <p>
          Beyond f,f+1+2, Jun has other approach tools that create plus frames or knockdowns:
        </p>

        <MoveCard character="jun"
          videoId="f,F+3"
          move={{
            input: 'f,f+3',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i18~19',
            onBlock: '-9',
            onHit: '+2',
            tags: ['Mid', 'Homing', 'Safe'],
            description: 'Homing approach mid. Safe on block. Has a follow-up extension.',
            notes: ['Homing - catches sidesteps', 'f,f+3,3+4 is a gimmicky but +3 extension', 'Balcony breaks on airborne']
          }}
          showVideo
        />

        <MoveCard character="jun"
          videoId="f,F+2"
          move={{
            input: 'f,f+2',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i16~17',
            onBlock: '-12',
            onHit: '+3',
            tags: ['Mid', 'Stance Transition'],
            description: 'Fast approach mid. Transitions to Genjitsu (F) or Miare (B). +3 on hit.',
            notes: ['Hold F → Genjitsu at +1', 'Hold B → Miare at +1', 'f,f+2,2 is a launcher extension']
          }}
          showVideo
        />

        <KeyConcept title="When to Use Each" icon="🎯">
          <ul>
            <li><strong>f,f+1+2</strong> — When you want guaranteed +6 and don't mind being slower</li>
            <li><strong>f,f+3</strong> — When opponents are sidestepping your approach</li>
            <li><strong>f,f+2</strong> — When you want to transition into stance pressure quickly</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Frame Trap Web">
        <p>
          Here's how all these plus frame tools connect:
        </p>

        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '20px', 
          borderRadius: '12px',
          border: '1px solid var(--border)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', textAlign: 'center' }}>
            <div>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.2em' }}>+6</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>SS4<br/>f,f+1+2<br/>CH db+3</div>
            </div>
            <div>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.2em' }}>+4</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>1,2,2<br/>u+2<br/>4,2</div>
            </div>
            <div>
              <div style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.2em' }}>+3</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>f+4<br/>f,f+2 (hit)<br/>f,f+3 (hit)</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '16px', color: 'var(--accent-secondary)' }}>
            ↓ All lead to ↓
          </div>
          <div style={{ textAlign: 'center', marginTop: '8px', color: 'var(--text-primary)', fontWeight: 600 }}>
            df+2+3 (throw) or df+2 (launch)
          </div>
        </div>

        <p>
          Every move in Jun's kit eventually leads to the same place: you're plus, they're frozen, 
          and you get to mix them up. Learn these moves, and you'll always have a path to pressure.
        </p>
      </Section>

      <Section title="Practice: Plus Frame Pressure">
        <PracticeBox
          title="f,f+1+2 Pressure Drill"
          setup="Set opponent to Guard All. Start at mid-range."
          tasks={[
            { id: 'ff12-basic', text: 'f,f+1+2 into throw 10 times', detail: 'Get the dash motion clean', type: 'counter', target: 10 },
            { id: 'ff12-launch', text: 'f,f+1+2 into df+2 10 times', detail: 'The mash punish option', type: 'counter', target: 10 },
            { id: 'ff12-stance', text: 'f,f+1+2~F into GEN 1 10 times', detail: 'Hold F to enter Genjitsu, then press 1', type: 'counter', target: 10 },
          ]}
        />

        <PracticeBox
          title="f+4 Drill"
          setup="Set opponent to Guard All, 2nd Action: Sidestep."
          tasks={[
            { id: 'f4-track', text: 'Catch sidesteps with f+4 5 times', detail: 'Notice how it tracks', type: 'counter', target: 5 },
            { id: 'f4-12', text: 'f+4 hit → 1+2 follow-up 10 times', detail: 'Mash 1+2 after f+4 connects', type: 'counter', target: 10 },
          ]}
        />

        <TipBox variant="tip" title="Build the Habit">
          Every time you land a plus frame move in a real match, your brain should immediately 
          think: "throw or launch?" Don't think about other options yet. Just those two.
        </TipBox>
      </Section>

      <Section title="Quick Reference">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Approach</div>
            <code>f,f+1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>+6 on block</div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Anti-Step</div>
            <code>f+4</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>+3~5 on block, homing</div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Low Pressure</div>
            <code>db+3</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>+6 on CH</div>
          </div>
        </div>

        <p style={{ marginTop: '24px' }}>
          Next chapter: What happens when you're not plus? Jun's counter-hit tools let her punish 
          opponents who press at the wrong time.
        </p>
      </Section>
    </Chapter>
  )
}
