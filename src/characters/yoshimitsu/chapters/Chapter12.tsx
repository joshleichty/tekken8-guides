import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Other Stances"
      intro="Yoshimitsu has four more stances beyond DGF and KIN: No Sword Stance (NSS), Indian Sit (IND), Meditation (MED), and Flea (FLE). Here's what you need to know about each."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Learn Punishment"
    >
      <Section title="No Sword Stance (NSS)">
        <KeyConcept title="Entering NSS" icon="⚔️">
          <p><code>b+1+2</code> — Manual entry into No Sword Stance</p>
          <p style={{ marginTop: '8px' }}>Or hold back after certain moves: <code>d+2,2~B</code>, <code>ws+4~B</code>, etc.</p>
        </KeyConcept>

        <p>
          No Sword Stance is <span className="highlight">not a separate stance</span> — it's a 
          modified moveset. In NSS, many moves gain enhanced properties, more damage, and healing.
        </p>

        <KeyConcept title="What Changes in NSS" icon="🔄">
          <ul>
            <li><strong>1+4 (Flash)</strong> — i8 instead of i6, but gains Tailspin</li>
            <li><strong>1,1</strong> — Second hit becomes CH launcher</li>
            <li><strong>f+1+2</strong> — Extended range, -7 instead of -12</li>
            <li><strong>3,2,1+2</strong> — More damage, enhanced chip</li>
            <li><strong>Many moves heal</strong> — Sword attacks recover health</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat = NSS">
          When in Heat, all your moves automatically have NSS properties. You don't need to 
          manually enter NSS during Heat — you get the benefits for free.
        </TipBox>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'NSS.f+1+2',
            hitLevel: ['M'],
            damage: '29',
            startup: 'i20',
            onBlock: '-7',
            onHit: '+29a',
            tags: ['Mid', 'Heat Engager', 'SAFE', 'Extended Range'],
            description: 'NSS/Heat enhanced f+1+2. SAFE at -7 instead of -12. Massive range.',
          }}
          showVideo
        />

        <p>
          NSS f+1+2 is <span className="highlight">one of the longest-reaching launchers in Tekken</span>. 
          In Heat, throw this out from long range — it's safe and leads to full combo.
        </p>
      </Section>

      <Section title="NSS Hellsweep">
        <MoveCard character="yoshimitsu"
          videoId="NSS.FC.df+3"
          move={{
            input: 'NSS.FC df+3',
            hitLevel: ['L'],
            damage: '12',
            startup: 'i20-21',
            onBlock: '-26',
            onHit: '+67a (launches)',
            tags: ['Low', 'Launcher', 'NSS.Only'],
            description: 'Yoshimitsu\'s hellsweep. Only available in NSS. Launches on hit for full combo.',
          }}
          showVideo
        />

        <p>
          In NSS, Yoshimitsu gains a <span className="highlight">hellsweep</span>. FC df+3 is a 
          launching low, giving you a real 50/50 mixup in No Sword Stance.
        </p>

        <TipBox variant="warning" title="Reactable">
          NSS FC df+3 is i20-21, which is on the edge of reactable. Good players can block it 
          on reaction. Mix it with mids and don't over-rely on it.
        </TipBox>
      </Section>

      <Section title="Indian Sit (IND)">
        <KeyConcept title="Entering IND" icon="🧘">
          <p><code>d+3+4</code> — Manual entry into Indian Sit</p>
          <p style={{ marginTop: '8px' }}>Or from other stances: DGF d+3+4, MED d+3+4</p>
        </KeyConcept>

        <p>
          Indian Sit is a <span className="highlight">meditation stance</span>. You sit cross-legged 
          and can teleport, heal, or attack. It's mostly gimmicky, but has some uses.
        </p>

        <KeyConcept title="IND Key Moves" icon="📋">
          <ul>
            <li><code>IND f</code> — Teleport behind opponent (if close)</li>
            <li><code>IND 3+4</code> — Homing mid-mid into DGF</li>
            <li><code>IND n</code> — Sit and heal (recovers HP)</li>
            <li><code>IND 4</code> — Same as FC df+4 (CH launcher low)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Overuse IND">
          Indian Sit is vulnerable. You can be floated out of the sitting animation. Use it 
          for specific setups or when you have a big life lead and want to heal.
        </TipBox>
      </Section>

      <Section title="Meditation (MED)">
        <KeyConcept title="Entering MED" icon="🙏">
          <p><code>d+3+4, 3+4</code> — From Indian Sit into Meditation</p>
          <p style={{ marginTop: '8px' }}>Or KIN 4, 3+4</p>
        </KeyConcept>

        <p>
          Meditation is <span className="highlight">primarily for healing</span>. Yoshimitsu sits 
          and gradually recovers health. It's situational but can clutch rounds.
        </p>

        <KeyConcept title="MED Properties" icon="💚">
          <ul>
            <li><strong>Heals over time</strong> — Recovers recoverable health</li>
            <li><strong>MED 1+4</strong> — Flash from Meditation</li>
            <li><strong>MED 3</strong> — Mid kick, can chain to combos</li>
            <li><strong>Vulnerable</strong> — Can be interrupted easily</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="When to Heal">
          Use MED healing when you have a big life lead, during long-range standoffs, or after 
          a knockdown when opponent is scared to approach. Don't try to heal at close range.
        </TipBox>
      </Section>

      <Section title="Flea Stance (FLE)">
        <KeyConcept title="Entering FLE" icon="🦗">
          <p><code>d+1+2</code> — Manual entry into Flea</p>
          <p style={{ marginTop: '8px' }}>Or from KIN f+1+2 on hit/block</p>
        </KeyConcept>

        <p>
          Flea is Yoshimitsu's <span className="highlight">pogo stance</span>. He balances on his 
          sword and hops around. It's mostly gimmicky but has some genuinely good moves.
        </p>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'FLE.1+2',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i18-19',
            onBlock: '-9',
            onHit: '+4',
            onCH: '+31a (Tornado)',
            tags: ['Mid', 'Tornado', 'CH Launcher', 'Safe'],
            description: 'Safe mid from Flea. Counter-hit gives Tornado. Your main FLE attack.',
          }}
          showVideo
        />

        <MoveCard character="yoshimitsu"
          move={{
            input: 'FLE.2',
            hitLevel: ['L'],
            damage: '20',
            startup: 'i24-28',
            onBlock: '-12 to -8',
            onHit: '+30a',
            tags: ['Low', 'Side Switches', 'Combo Followup'],
            description: 'Flea low. Side switches on close hit. Leads to ws+4 combo.',
          }}
          showVideo
        />

        <KeyConcept title="FLE After KIN f+1+2" icon="🔄">
          <p>KIN f+1+2 is +14c on block and transitions to FLE. From there:</p>
          <ul>
            <li><code>FLE 1+2</code> — Safe mid frame trap (they can't interrupt)</li>
            <li><code>FLE 2</code> — Low mixup</li>
            <li><code>FLE hop attacks</code> — Various gimmicks</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="FLE is Gimmicky">
          Most of Flea's moves are gimmicks. The main useful tool is FLE 1+2 after KIN f+1+2. 
          Don't manually enter FLE expecting great results — opponents can just jab you.
        </TipBox>
      </Section>

      <Section title="Stance Priority">
        <KeyConcept title="Which Stances to Focus On" icon="📊">
          <ol>
            <li><strong>DGF</strong> — Your main pressure stance. Learn this first.</li>
            <li><strong>KIN</strong> — Footsies and pokes. Learn second.</li>
            <li><strong>NSS</strong> — Happens automatically in Heat. Understand the changes.</li>
            <li><strong>IND/MED/FLE</strong> — Situational. Learn after you're comfortable.</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            You can play effective Yoshimitsu with just DGF and KIN. The other stances are 
            situational tools, not core gameplay.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Overcomplicate">
          Many new Yoshimitsu players try to use every stance constantly. This leads to gimmicky, 
          inconsistent play. Master DGF and KIN pressure first, then add the others for specific 
          situations.
        </TipBox>
      </Section>

      <Collapsible title="Stance Entry Quick Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Manual Entries</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>u+1+2</code> — Dragonfly (DGF)</li>
            <li><code>1+2</code> — Kincho (KIN)</li>
            <li><code>b+1+2</code> — No Sword Stance (NSS)</li>
            <li><code>d+3+4</code> — Indian Sit (IND)</li>
            <li><code>d+1+2</code> — Flea (FLE)</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Key Transitions</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>3,1</code> → DGF (hold up)</li>
            <li><code>3~4</code> → DGF (hold up)</li>
            <li><code>f,f,F+3</code> → DGF (hold up)</li>
            <li><code>d+2,2~B</code> → NSS</li>
            <li><code>b+2, n,1+2</code> → KIN</li>
            <li><code>KIN f+1+2</code> → FLE</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Stance → Stance</p>
          <ul>
            <li>DGF d+3+4 → IND</li>
            <li>IND 3+4 → MED</li>
            <li>KIN 3+4 → MED</li>
            <li>IND u+1+2 → DGF</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
