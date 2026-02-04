import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="The Stance Web"
      intro="Izumo, Genjitsu, and Miare aren't three separate stances—they're one flowing system. Learn how they connect and you'll never feel stuck."
      hasPrevious={true}
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Damage Conversion"
    >
      <Section title="The Three Stances">
        <p>
          Jun has three stances, each with different purposes. But the magic happens when you 
          understand how they connect to each other.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '20px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '20px', 
            borderRadius: '12px',
            border: '2px solid var(--accent)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1em', marginBottom: '8px' }}>
              Izumo (IZU)
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginBottom: '12px' }}>
              Manual entry: <code>u+2</code> or <code>1,1</code>
            </div>
            <p style={{ margin: 0, color: 'var(--text-primary)' }}>
              The mix-up stance. Home to your hellsweep (IZU 4,1) and safe mid heat engager (IZU 3). 
              Most of your plus frame moves lead here.
            </p>
          </div>

          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '20px', 
            borderRadius: '12px',
            border: '2px solid var(--accent-secondary)'
          }}>
            <div style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '1.1em', marginBottom: '8px' }}>
              Genjitsu (GEN)
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginBottom: '12px' }}>
              Manual entry: <code>f+3+4</code>
            </div>
            <p style={{ margin: 0, color: 'var(--text-primary)' }}>
              The defensive stance. Auto-parries lows and throws. Has your best low poke (GEN 1) 
              and combo enders (GEN 2, GEN 3,2).
            </p>
          </div>

          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '20px', 
            borderRadius: '12px',
            border: '2px solid var(--warning)'
          }}>
            <div style={{ color: 'var(--warning)', fontWeight: 700, fontSize: '1.1em', marginBottom: '8px' }}>
              Miare (MIA)
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginBottom: '12px' }}>
              Manual entry: <code>b+1+2</code>
            </div>
            <p style={{ margin: 0, color: 'var(--text-primary)' }}>
              The healing/keepout stance. Jun heals while in Miare. Has long-range laser (MIA 2) 
              and connects to other stances.
            </p>
          </div>
        </div>
      </Section>

      <Section title="How Stances Connect">
        <p>
          The real power comes from understanding the transitions. You're never "stuck" in a 
          stance—you can always flow to another.
        </p>

        <Flowchart 
          title="The Stance Web"
          nodes={[
            { type: 'start', label: 'Neutral' },
            { type: 'decision', label: 'Entry Points', branches: [
              { label: '1,2,2 / u+2 / 4,2', action: '→ IZUMO' },
              { label: 'f,f+2~F / b+2,1~F', action: '→ GENJITSU' },
              { label: 'b+1+2 / b+2,1~B', action: '→ MIARE' }
            ]},
            { type: 'end', label: 'From any stance, you can transition to another' }
          ]}
        />

        <KeyConcept title="Key Transitions" icon="🔄">
          <ul>
            <li><strong>Miare → Izumo</strong>: Press 1+2</li>
            <li><strong>Miare → Genjitsu</strong>: Hold forward</li>
            <li><strong>Genjitsu → Full Crouch</strong>: Hold down/down-back after GEN 1</li>
            <li><strong>Any string~F → Genjitsu</strong>: f,f+2, b+2,1, ws+1,1, f,f+1+2</li>
            <li><strong>Any string~B → Miare</strong>: b+2,1, f,f+1+2</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Izumo Deep Dive">
        <p>
          You already know IZU 3 and IZU 4,1 from Chapter 2. Here are the other key options:
        </p>

        <Collapsible title="Izumo Options" defaultOpen>
          <div style={{ display: 'grid', gap: '16px' }}>
            <MoveCard character="jun"
              videoId="IZU.f+1+2"
              move={{
                input: 'IZU f+1+2',
                hitLevel: ['m'],
                damage: '21',
                startup: 'i16~17',
                onBlock: '-6',
                onHit: '+5',
                onCH: '+25',
                tags: ['Mid', 'Homing', 'Safe', 'Evasive'],
                description: 'Safe homing mid. Evades jabs. Your "I don\'t want to guess" option.',
                notes: ['Jab evasion built in', 'Homing catches steps', 'CH gives mini-combo']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="IZU.1+3"
              move={{
                input: 'IZU 1+3',
                hitLevel: ['t'],
                damage: '35',
                startup: 'i14',
                onBlock: '-6',
                onHit: '+0d',
                tags: ['Throw', 'Heal'],
                description: 'Stance throw. Heals Jun significantly. 1+2 break.',
                notes: ['Heals 8 health + 12 recoverable', 'Great for closing rounds', '1+2 break is uncommon']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="IZU.2"
              move={{
                input: 'IZU 2',
                hitLevel: ['m'],
                damage: '24',
                startup: 'i23~25',
                onBlock: '-13~-11',
                onHit: '+34a (+24)',
                tags: ['Mid', 'Launcher', 'High Crush'],
                description: 'Risky launcher. High crushes. Use when you read them pressing buttons.',
                notes: ['High crush during startup', 'Punishable on block', 'Deals self-damage']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="IZU.1,1"
              move={{
                input: 'IZU 1,1',
                hitLevel: ['h', 'h'],
                damage: '7, 26',
                startup: 'i13~14',
                onBlock: '-4',
                onHit: '+30a (+20)',
                tags: ['High', 'Tornado', 'Combo'],
                description: 'Primary combo filler. Tornado on hit. Heals slightly.',
                notes: ['Your main combo route', 'Can enter GEN with F', 'Can enter MIA with B']
              }}
              showVideo
            />
          </div>
        </Collapsible>

        <TipBox variant="tip" title="Izumo Strategy">
          Default to IZU 4,1 (low) until they start blocking low. Then mix with IZU 3 (safe mid) 
          and IZU f+1+2 (evasive mid). Use IZU 1+3 (throw) when they're frozen.
        </TipBox>
      </Section>

      <Section title="Genjitsu Deep Dive">
        <p>
          Genjitsu is your defensive powerhouse. It auto-parries lows and throws, but also has 
          excellent offensive options.
        </p>

        <KeyConcept title="Genjitsu Auto-Parries" icon="🛡️">
          <p>
            While in Genjitsu, Jun automatically parries low attacks and throws. You heal 
            health when the parry succeeds. This makes entering Genjitsu inherently safe 
            against opponents who rely on lows or throw mix-ups.
          </p>
        </KeyConcept>

        <Collapsible title="Genjitsu Options" defaultOpen>
          <div style={{ display: 'grid', gap: '16px' }}>
            <MoveCard character="jun"
              videoId="GEN.1"
              move={{
                input: 'GEN 1',
                hitLevel: ['l'],
                damage: '22',
                startup: 'i20~21',
                onBlock: '-12',
                onHit: '+3c',
                onCH: '+26a',
                tags: ['Low', 'Chunky', 'Plus on Hit'],
                description: 'Jun\'s best low. +3 on hit sets up ws+2. CH gives grounded follow-up.',
                notes: ['Great tracking to left', 'Hold D for full crouch', 'Your main low from stance']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="GEN.3,2"
              move={{
                input: 'GEN 3,2',
                hitLevel: ['m', 'm'],
                damage: '14, 16',
                startup: 'i17~20',
                onBlock: '-9',
                onHit: '+33a (+18)',
                tags: ['Mid', 'Spike', 'Safe'],
                description: 'Safe mid with spike. Hit confirm the 2. Combo ender staple.',
                notes: ['GEN 3 alone is -4c', 'Hit confirm the 2 extension', 'Primary combo ender']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="GEN.2"
              move={{
                input: 'GEN 2',
                hitLevel: ['m', 't'],
                damage: '16, 32',
                startup: 'i16~17',
                onBlock: '-13~-12',
                onHit: '+0d',
                tags: ['Mid', 'Power Crush', 'Combo Ender'],
                description: 'Power crush that transitions to attack throw. Combo ender.',
                notes: ['Power crush 8~15', 'Deals self-damage', 'Combo ender for damage']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="GEN.4"
              move={{
                input: 'GEN 4',
                hitLevel: ['h'],
                damage: '24',
                startup: 'i26~28',
                onBlock: '+4~+6',
                onHit: '+26a (+17)',
                tags: ['High', 'Homing', 'Plus on Block'],
                description: 'Homing high from stance. Plus on block. Combo filler.',
                notes: ['Low crushes', 'Your combo filler after launchers', 'Balcony breaks']
              }}
              showVideo
            />
          </div>
        </Collapsible>

        <TipBox variant="tip" title="Genjitsu Strategy">
          Enter Genjitsu with f,f+2~F or b+2,1~F when you want the low/mid mix. GEN 1 is your 
          low, GEN 3,2 is your mid. The auto-parry protects you from opponents trying to 
          low poke you out of stance.
        </TipBox>
      </Section>

      <Section title="Miare Deep Dive">
        <p>
          Miare is Jun's unique stance. She heals while in it and has access to her long-range 
          laser. It also connects to both other stances.
        </p>

        <KeyConcept title="Miare Healing" icon="💚">
          <p>
            While in Miare, Jun heals 3 health and 1 Kazama Essence every 2 seconds. At range, 
            you can use this to regenerate after taking chip damage. But be careful—you can't 
            block in this stance.
          </p>
        </KeyConcept>

        <Collapsible title="Miare Options" defaultOpen>
          <div style={{ display: 'grid', gap: '16px' }}>
            <MoveCard character="jun"
              videoId="MIA.2"
              move={{
                input: 'MIA 2',
                hitLevel: ['sm'],
                damage: '28',
                startup: 'i16',
                onBlock: '-20',
                onHit: '+26a (+0)',
                tags: ['Mid', 'Heat Engager', 'Long Range'],
                description: 'The laser. Heat engager with massive range. -20 on block.',
                notes: ['Full screen with Kazama Essence', 'Deals self-damage', 'Whiff punish tool at range']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="MIA.1"
              move={{
                input: 'MIA 1',
                hitLevel: ['m'],
                damage: '30',
                startup: 'i24~25',
                onBlock: '-9',
                onHit: '+72a (+56)',
                tags: ['Mid', 'Tornado', 'Safe'],
                description: 'Slow but safe mid. Tornado on hit. Deals chip and self-damage.',
                notes: ['Same animation as d+1+2', 'Unparryable', 'Use for whiff punishment']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="MIA.1+2"
              move={{
                input: 'MIA 1+2',
                hitLevel: ['m'],
                damage: '17',
                startup: 'i20~21',
                onBlock: '+4',
                onHit: '+11g',
                tags: ['Mid', 'Homing', 'Plus on Block', 'Stance Transition'],
                description: 'Homing mid that enters Izumo. +4 on block. Your main MIA option.',
                notes: ['Enters Izumo on hit or block', 'High evasion', 'Builds Kazama Essence']
              }}
              showVideo
            />
          </div>
        </Collapsible>

        <TipBox variant="tip" title="Miare Strategy">
          MIA 1+2 is your main option—it's safe, homing, and leads to Izumo. Use MIA 2 only 
          when you see something whiff at long range. Hold F to transition to Genjitsu, or 
          1+2 to go to Izumo.
        </TipBox>
      </Section>

      <Section title="Stance Flow Examples">
        <p>
          Here's how the stances flow together in practice:
        </p>

        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '20px', 
          borderRadius: '12px',
          border: '1px solid var(--border)',
          marginBottom: '16px'
        }}>
          <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '12px' }}>Example 1: Pressure Loop</div>
          <code style={{ display: 'block', background: 'var(--bg-secondary)', padding: '12px', borderRadius: '4px' }}>
            1,2,2 → IZU 3 (blocked) → f,f+1+2~F → GEN 1 → hold D → ws+2
          </code>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', marginBottom: 0 }}>
            Jab string into Izumo, safe mid heat engager, approach into Genjitsu, low poke, 
            transition to crouch for ws+2 pressure.
          </p>
        </div>

        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '20px', 
          borderRadius: '12px',
          border: '1px solid var(--border)',
          marginBottom: '16px'
        }}>
          <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '12px' }}>Example 2: Mix-Up Sequence</div>
          <code style={{ display: 'block', background: 'var(--bg-secondary)', padding: '12px', borderRadius: '4px' }}>
            b+2,1~B → MIA 1+2 → IZU 4,1 (hit) → combo
          </code>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', marginBottom: 0 }}>
            Mid poke into Miare, homing mid into Izumo, hellsweep for the launch.
          </p>
        </div>

        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '20px', 
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '12px' }}>Example 3: Defensive Option</div>
          <code style={{ display: 'block', background: 'var(--bg-secondary)', padding: '12px', borderRadius: '4px' }}>
            f+3+4 (GEN) → opponent does low → AUTO-PARRY → heal + follow-up
          </code>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', marginBottom: 0 }}>
            Manual Genjitsu entry. Opponent tries to low poke you out. You auto-parry, heal, 
            and get to continue.
          </p>
        </div>
      </Section>

      <Section title="Practice: Stance Transitions">
        <PracticeBox
          title="Stance Flow Drill"
          setup="Set opponent to Guard All. Practice these transitions."
          tasks={[
            { id: 'flow-1', text: '1,2,2 → IZU 1,1~F → GEN 3,2', detail: 'Izumo to Genjitsu flow', type: 'counter', target: 10 },
            { id: 'flow-2', text: 'b+2,1~B → MIA 1+2 → IZU 3', detail: 'Miare to Izumo flow', type: 'counter', target: 10 },
            { id: 'flow-3', text: 'f,f+1+2~F → GEN 1~D → ws+2', detail: 'Genjitsu to crouch flow', type: 'counter', target: 10 },
          ]}
        />

        <TipBox variant="tip" title="Don't Memorize, Feel">
          The stance web isn't about memorizing routes. It's about feeling where you can go 
          from any position. Practice until transitions feel natural.
        </TipBox>
      </Section>

      <Section title="Quick Reference">
        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '20px', 
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '16px' }}>Stance Entry Summary</h4>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <strong>→ IZUMO:</strong> 1,2,2 / 1,1 / u+2 / 4,2 / MIA 1+2
            </div>
            <div>
              <strong>→ GENJITSU:</strong> f+3+4 / f,f+2~F / b+2,1~F / f,f+1+2~F / MIA~F
            </div>
            <div>
              <strong>→ MIARE:</strong> b+1+2 / b+2,1~B / f,f+1+2~B / uf+4,3 (on hit)
            </div>
          </div>
        </div>

        <p style={{ marginTop: '24px' }}>
          Next chapter: How to convert all this pressure into damage. Combos that matter.
        </p>
      </Section>
    </Chapter>
  )
}
