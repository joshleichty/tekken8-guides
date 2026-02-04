import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="The Kazama Way"
      intro="Jun has a unique mechanic: Kazama Essence. Understanding when moves hurt you, when they heal you, and how to maximize your install is key to high-level Jun play."
      hasPrevious={true}
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Reading the Opponent"
    >
      <Section title="Kazama Essence Explained">
        <p>
          Kazama Essence is Jun's install mechanic. As you use certain moves (Kazama Power moves), 
          you build up essence. At 100%, you gain "Divine Aura" which enhances specific moves.
        </p>

        <KeyConcept title="The Install" icon="✨">
          <p>At 100% Kazama Essence (Divine Aura active):</p>
          <ul>
            <li><strong>d+1+2</strong> — Gains +12 chip damage on block, +4 damage on hit</li>
            <li><strong>IZU 4,1</strong> — Gains +9 damage on the launcher portion</li>
            <li><strong>MIA 2</strong> — Gains +8 damage AND massively increased range</li>
          </ul>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            The MIA 2 range increase is the biggest deal—it becomes nearly full screen.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Building Essence">
          Essence builds throughout the set and persists across rounds. By round 3 or 4, you'll 
          typically have your install ready. Plan your offense around this timing.
        </TipBox>
      </Section>

      <Section title="Moves That Build Essence">
        <p>
          Not every move builds Kazama Essence—only specific "Kazama Power" moves do. Here are 
          the most practical ones:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>f,f+1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Your main pressure tool. Builds essence naturally.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>uf+1 / FC df+1</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              10 essence each. Your i10 punishes build install.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>d+1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Combo filler that builds essence.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>MIA 1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              6 essence on hit, 5 on block.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <code style={{ color: 'var(--accent)', fontWeight: 600 }}>Miare healing</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              1 essence per heal pulse while in stance.
            </div>
          </div>
        </div>

        <Collapsible title="Full Kazama Power Move List">
          <p>All moves that build Kazama Essence:</p>
          <ul style={{ columns: 2, columnGap: '24px' }}>
            <li>uf+1</li>
            <li>FC df+1</li>
            <li>uf+2</li>
            <li>f,f+1+2</li>
            <li>d+1+2</li>
            <li>b+2,1,2</li>
            <li>b+3,2</li>
            <li>df+2,1+2</li>
            <li>1+2</li>
            <li>3+4</li>
            <li>IZU 1,1</li>
            <li>IZU 2</li>
            <li>IZU 4,1</li>
            <li>GEN 3,2</li>
            <li>MIA 1</li>
            <li>MIA 2</li>
            <li>MIA 1+2</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="The Self-Damage System">
        <p>
          Many Kazama Power moves deal damage to Jun when used. This is the trade-off for their 
          power. Understanding this system is crucial.
        </p>

        <KeyConcept title="Self-Damage Rules" icon="⚠️">
          <ul>
            <li><strong>Outside Heat</strong> — Full self-damage on use</li>
            <li><strong>In Heat</strong> — Self-damage is halved</li>
            <li><strong>Cannot KO yourself</strong> — Self-damage won't kill you</li>
            <li><strong>Recoverable vs Non-recoverable</strong> — Most self-damage is partially recoverable</li>
          </ul>
        </KeyConcept>

        <Collapsible title="Self-Damage Values">
          <div style={{ display: 'grid', gap: '8px' }}>
            <div><code>uf+1</code> — 12 damage (8 recoverable)</div>
            <div><code>FC df+1</code> — 18 damage (12 recoverable)</div>
            <div><code>f,f+1+2</code> — 6 damage (4 recoverable)</div>
            <div><code>d+1+2</code> — 12 damage (8 recoverable)</div>
            <div><code>IZU 4,1</code> — 18 damage (12 recoverable)</div>
            <div><code>IZU 2</code> — 12 damage (8 recoverable)</div>
            <div><code>MIA 2</code> — 6 damage (4 recoverable)</div>
          </div>
        </Collapsible>

        <TipBox variant="tip" title="Managing Health">
          Jun's self-damage sounds scary, but in practice: combos deal way more than you lose, 
          heat halves the cost, and you can heal with certain moves. Don't be afraid of the 
          self-damage—be aware of it.
        </TipBox>
      </Section>

      <Section title="Moves That Heal Jun">
        <p>
          Jun isn't all self-damage. Several moves actively heal her:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '2px solid var(--success)'
          }}>
            <code style={{ color: 'var(--success)', fontWeight: 600 }}>1,2,2 / 1,1 / u+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Small heal on hit. Your jab strings restore health.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '2px solid var(--success)'
          }}>
            <code style={{ color: 'var(--success)', fontWeight: 600 }}>IZU 1+3 (stance throw)</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Heals 8 health + 12 recoverable. Significant.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '2px solid var(--success)'
          }}>
            <code style={{ color: 'var(--success)', fontWeight: 600 }}>db+1,1,1+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Heals on hit. Great wall combo AND heal.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '2px solid var(--success)'
          }}>
            <code style={{ color: 'var(--success)', fontWeight: 600 }}>Miare stance</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              3 health per pulse. Heal at range.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '2px solid var(--success)'
          }}>
            <code style={{ color: 'var(--success)', fontWeight: 600 }}>GEN/Parry success</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Genjitsu auto-parry and regular parries heal.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '2px solid var(--success)'
          }}>
            <code style={{ color: 'var(--success)', fontWeight: 600 }}>Heat Smash</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              32 recoverable on hit, 16 on block.
            </div>
          </div>
        </div>
      </Section>

      <Section title="Playing Around the Install">
        <p>
          Your game plan should adapt based on your Kazama Essence level:
        </p>

        <KeyConcept title="Install Timing" icon="⏰">
          <ul>
            <li><strong>Round 1-2</strong> — Build essence naturally through combos and pressure. Don't 
            force Kazama Power moves.</li>
            <li><strong>Round 3-4</strong> — Install should be ready or close. Start looking for MIA 2 
            opportunities.</li>
            <li><strong>Low health</strong> — Prioritize healing moves (1,2,2 hit confirms, IZU 1+3, 
            Miare stance) over risky Kazama Power moves.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The MIA 2 Snipe">
          With Divine Aura active, MIA 2 can hit from nearly full screen. Watch for opponents 
          whiffing at any range and punish with the laser. It's also a heat engager, so you 
          can go from long-range snipe straight into heat pressure.
        </TipBox>
      </Section>

      <Section title="The Parry System">
        <p>
          Jun has multiple parries that heal her and create offense:
        </p>

        <MoveCard character="jun"
          videoId="b+1+3"
          move={{
            input: 'b+1+3 or b+2+4',
            hitLevel: [],
            damage: '25',
            startup: '',
            onBlock: '',
            onHit: '-4d',
            tags: ['Parry'],
            description: 'General parry. Catches mid and high punches/kicks. Shorter window than Asuka.',
            notes: ['Parry state 5~12 frames', 'Must time precisely', 'Heals on success']
          }}
          showVideo
        />

        <MoveCard character="jun"
          videoId="f+2+3"
          move={{
            input: 'f+2+3',
            hitLevel: ['h'],
            damage: '21',
            startup: 'i28~29',
            onBlock: '+0',
            onHit: '+25a',
            tags: ['Sabaki', 'Punch Parry'],
            description: 'Punch sabaki. Catches high/mid punches. Leads to full combo on success.',
            notes: ['Parry state 4~15', 'Crumple stun on parry success', 'Riskier than regular parry']
          }}
          showVideo
        />

        <MoveCard character="jun"
          move={{
            input: 'f+3+4 (Genjitsu)',
            hitLevel: [],
            damage: '',
            startup: '',
            onBlock: '',
            onHit: '',
            tags: ['Auto-Parry', 'Stance'],
            description: 'Genjitsu auto-parries lows and throws while in stance.',
            notes: ['Parry state 1~40', 'Automatic - no timing needed', 'Heals on success']
          }}
        />

        <TipBox variant="warning" title="Parry Risks">
          Parries lose to throws. If your opponent reads your parry attempt, they can throw you 
          for free. Use parries when you've established that the opponent wants to press buttons.
        </TipBox>
      </Section>

      <Section title="Practice: Kazama Mechanics">
        <PracticeBox
          title="Install Building Drill"
          setup="Play a full match focusing on building Kazama Essence."
          tasks={[
            { id: 'install-1', text: 'Land uf+1 or FC df+1 punish 3 times', detail: 'i10 punishes build essence', type: 'counter', target: 3 },
            { id: 'install-2', text: 'Use f,f+1+2 in pressure 5 times', detail: 'Natural essence building', type: 'counter', target: 5 },
            { id: 'install-3', text: 'Land MIA 2 with Divine Aura active', detail: 'Experience the range increase', type: 'toggle' },
          ]}
        />

        <PracticeBox
          title="Health Management Drill"
          setup="Start at low health. Focus on healing."
          tasks={[
            { id: 'heal-1', text: 'Land 1,2,2 hit confirms for healing 5 times', detail: 'Small heals add up', type: 'counter', target: 5 },
            { id: 'heal-2', text: 'Land IZU 1+3 stance throw 3 times', detail: 'Big heal opportunity', type: 'counter', target: 3 },
            { id: 'heal-3', text: 'Use db+1,1,1+2 as wall combo 3 times', detail: 'Damage AND healing', type: 'counter', target: 3 },
          ]}
        />
      </Section>

      <Section title="Quick Reference">
        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '20px', 
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '16px' }}>Kazama System Summary</h4>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div>
              <strong style={{ color: 'var(--warning)' }}>Self-Damage:</strong> Halved in Heat. Cannot KO you.
            </div>
            <div>
              <strong style={{ color: 'var(--success)' }}>Healing:</strong> 1,2,2, IZU 1+3, db+1,1,1+2, Miare, parries
            </div>
            <div>
              <strong style={{ color: 'var(--accent)' }}>Divine Aura:</strong> MIA 2 range boost is the big reward
            </div>
            <div>
              <strong style={{ color: 'var(--accent-secondary)' }}>Build Speed:</strong> Naturally by round 3-4 through normal play
            </div>
          </div>
        </div>

        <p style={{ marginTop: '24px' }}>
          Final chapter: Everything comes together. How to read opponents and adapt your game plan.
        </p>
      </Section>
    </Chapter>
  )
}
