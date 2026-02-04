import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Heat - When Jun Becomes Terrifying"
      intro="Jun's heat system doesn't just make her stronger—it fundamentally changes how the opponent has to play. Her heat smash is one of the most oppressive in the game."
      hasPrevious={true}
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="The Kazama Way"
    >
      <Section title="Why Jun's Heat Is Special">
        <p>
          Every character gets stronger in heat. Jun gets <em>terrifying</em>. Here's what changes:
        </p>

        <KeyConcept title="Heat Benefits" icon="🔥">
          <ul>
            <li><strong>Kazama Power self-damage halved</strong> — Your risky moves become less risky</li>
            <li><strong>f+1+2 becomes a parry</strong> — A real, scary parry that leads to full combo</li>
            <li><strong>Heat Smash heals Jun</strong> — You deal damage AND recover health</li>
            <li><strong>Heat Smash chips on block</strong> — They lose health just by blocking</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Opponent's Nightmare">
          When Jun is in heat, the opponent can't press buttons (heat smash catches them), can't 
          sidestep (heat smash tracks), and blocking still costs them health while healing you. 
          They're forced to stand still and take whatever mix-up you throw at them.
        </TipBox>
      </Section>

      <Section title="The Heat Smash">
        <p>
          Let's talk about why Jun's heat smash is considered one of the best in the game.
        </p>

        <MoveCard character="jun"
          videoId="H.2+3"
          move={{
            input: 'Heat Smash (2+3 in Heat)',
            hitLevel: ['m', 'm'],
            damage: '20, 30',
            startup: 'i13',
            onBlock: '-6~+37g',
            onHit: '+21a~+64a',
            tags: ['Mid', 'Heat Smash', 'Heals', 'Chip Damage'],
            description: 'i13 double projectile. Heals Jun. Chips on block. Full screen.',
            notes: ['i13 startup - faster than most heat smashes', 'Heals 32 recoverable on hit (16 on block)', '10 chip damage on block', 'Balcony break']
          }}
          showVideo
        />

        <KeyConcept title="Why It's Broken" icon="💀">
          <ul>
            <li><strong>i13 startup</strong> — Most heat smashes are i15+. Jun's is i13.</li>
            <li><strong>Full screen range</strong> — Covers the entire stage</li>
            <li><strong>Heals on hit AND block</strong> — You recover health either way</li>
            <li><strong>Chips on block</strong> — Opponent loses 10 health just for blocking</li>
            <li><strong>Catches everything</strong> — Too fast to sidestep or interrupt</li>
          </ul>
        </KeyConcept>

        <p>
          The math is simple: when Jun heat smashes and you block, she gains health while you 
          lose health. There is no winning scenario for the opponent except to not be there.
        </p>

        <TipBox variant="tip" title="When to Heat Smash">
          Use heat smash to: punish whiffs at any range, catch people pressing buttons, chip 
          out low-health opponents, heal yourself when ahead. Basically... always.
        </TipBox>
      </Section>

      <Section title="The Enhanced Parry">
        <p>
          In heat, Jun's f+1+2 transforms from a risky unblockable into a parry that catches 
          mids and highs.
        </p>

        <MoveCard character="jun"
          videoId="H.f+1+2,P"
          move={{
            input: 'Heat f+1+2 (Parry)',
            hitLevel: ['h'],
            damage: '0',
            startup: 'i12',
            onBlock: '',
            onHit: '+40g',
            tags: ['Parry', 'Heat Only'],
            description: 'Parries mid or high punches/kicks. Leads to MIA 2 on success.',
            notes: ['Parry state from frame 5', 'On successful parry: MIA 2 is guaranteed', 'Only available in heat']
          }}
          showVideo
        />

        <Flowchart 
          title="Heat f+1+2 Parry"
          nodes={[
            { type: 'start', label: 'Opponent attacks (mid or high)' },
            { type: 'decision', label: 'Heat f+1+2 parry', branches: [
              { label: 'Success', action: 'MIA 2 guaranteed → Heat Engager + Damage' },
              { label: 'Whiff', action: 'You\'re +2, can continue pressure' }
            ]},
            { type: 'end', label: 'Either way, you win' }
          ]}
        />

        <p>
          The parry becomes a tool to shut down opponents who try to challenge your heat pressure. 
          If they press buttons, parry them. If they don't press, throw them or mix them up.
        </p>

        <TipBox variant="warning" title="It's Still a Read">
          The parry requires a hard read. Don't spam it—use it when you've conditioned the 
          opponent to press buttons. Throws beat the parry stance.
        </TipBox>
      </Section>

      <Section title="Heat Engagers">
        <p>
          Jun has multiple heat engagers to access heat from different situations:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              i13 mid. Your go-to punish heat engager.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>f+2,1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Safe on block. Turns f+2 from -18 to -9.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>SS4</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              +6 on block pressure into heat.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>IZU 3</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Safe mid from Izumo stance.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>MIA 2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Long range laser heat engager.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>f+4 → 1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              f+4 on hit guarantees 1+2 heat engager.
            </div>
          </div>
        </div>
      </Section>

      <Section title="Heat Pressure Game Plan">
        <p>
          When you activate heat, here's how to maximize the pressure:
        </p>

        <Flowchart 
          title="Heat Pressure Loop"
          nodes={[
            { type: 'start', label: 'Heat Activated' },
            { type: 'decision', label: 'What is opponent doing?', branches: [
              { label: 'Standing still', action: 'Throw or low mix' },
              { label: 'Pressing buttons', action: 'Heat f+1+2 parry or Heat Smash' },
              { label: 'Trying to move', action: 'f+4 (homing) or Heat Smash' },
              { label: 'Far away', action: 'Heat Smash for chip + heal' }
            ]},
            { type: 'end', label: 'Every option is covered' }
          ]}
        />

        <KeyConcept title="Heat Pressure Priority" icon="🔥">
          <ol>
            <li><strong>Establish threat</strong> — Let them see the heat smash once or twice</li>
            <li><strong>Apply plus frames</strong> — SS4, f,f+1+2, normal pressure</li>
            <li><strong>Mix them</strong> — df+2+3 throw, stance mix-ups, lows</li>
            <li><strong>Parry challengers</strong> — Heat f+1+2 when they get antsy</li>
            <li><strong>Heat smash finish</strong> — Close rounds with chip or whiff punish</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Waste Heat">
          Heat is valuable. Don't just immediately heat smash—apply pressure first. The threat 
          of heat smash is often more valuable than actually using it.
        </TipBox>
      </Section>

      <Section title="Heat Smash from Genjitsu">
        <p>
          In heat, Genjitsu gains a special heat smash option:
        </p>

        <MoveCard character="jun"
          videoId="H.GEN.1,1+2"
          move={{
            input: 'Heat GEN 1,1+2',
            hitLevel: ['l', 'm'],
            damage: '14, 35',
            startup: 'i20~21',
            onBlock: '-14',
            onHit: '+25a (+7)',
            tags: ['Low', 'Mid', 'Heat', 'Reversal Break'],
            description: 'Heat-only Genjitsu extension. Low into mid. Balcony breaks.',
            notes: ['Only available in heat', 'Costs 450f of heat timer', 'Jails from first hit', 'Good tracking to left']
          }}
          showVideo
        />

        <p>
          This gives you a second hellsweep-style move in heat. GEN 1 by itself sets up ws+2, 
          but in heat you can commit to the full string for a chunky low mix.
        </p>
      </Section>

      <Section title="Practice: Heat Pressure">
        <PracticeBox
          title="Heat Smash Drill"
          setup="Set player to Heat mode. Practice different situations."
          tasks={[
            { id: 'hs-1', text: 'Raw heat smash from neutral 5 times', detail: 'Get the input clean', type: 'counter', target: 5 },
            { id: 'hs-2', text: 'Heat smash to punish whiff 5 times', detail: 'Use it as a long-range whiff punish', type: 'counter', target: 5 },
            { id: 'hs-3', text: 'Heat parry into MIA 2 5 times', detail: 'Record opponent attacking, parry them', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Heat Pressure Loop"
          setup="Set player to Heat. Set opponent to random guard + 2nd action attack."
          tasks={[
            { id: 'hp-1', text: 'SS4 → throw/df+2 mix 5 times', detail: 'The standard pressure', type: 'counter', target: 5 },
            { id: 'hp-2', text: 'Read opponent attack → parry → MIA 2 5 times', detail: 'Punish them for pressing', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="Quick Reference">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Heat Smash</div>
            <code>2+3</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              i13, heals, chips<br/>
              Full screen
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Heat Parry</div>
            <code>f+1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Parries mid/high<br/>
              → MIA 2 guaranteed
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>GEN Heat</div>
            <code>GEN 1,1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Heat-only hellsweep<br/>
              From Genjitsu
            </div>
          </div>
        </div>

        <p style={{ marginTop: '24px' }}>
          Next chapter: The Kazama Essence mechanic. How to build it, when to use it, and why 
          it matters.
        </p>
      </Section>
    </Chapter>
  )
}
