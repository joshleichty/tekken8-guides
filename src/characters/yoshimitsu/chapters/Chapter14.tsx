import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter14({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={14}
      title="Heat System"
      intro="Heat in Tekken 8 gives Yoshimitsu automatic NSS properties, enhanced DGF moves, and chip damage on everything. Plus, his Heat Smash leads to devastating DGF mixups."
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
      nextLabel="Learn Wall Game & Oki"
    >
      <Section title="Yoshimitsu's Heat Benefits">
        <KeyConcept title="What Heat Gives You" icon="🔥">
          <ul>
            <li><strong>NSS properties</strong> — All sword moves gain NSS enhancements</li>
            <li><strong>Enhanced DGF</strong> — Some DGF moves get buffed</li>
            <li><strong>Chip damage</strong> — All attacks do chip on block</li>
            <li><strong>Recoverable health</strong> — White health regenerates</li>
            <li><strong>Heat Dash</strong> — Extend combos after Heat engagers</li>
          </ul>
        </KeyConcept>

        <p>
          The biggest change in Heat is that all your moves become <span className="highlight">NSS-enhanced</span>. 
          This means extended range on f+1+2, CH launcher on 1,1, and healing on sword attacks.
        </p>
      </Section>

      <Section title="Heat Engagers">
        <MoveCard character="yoshimitsu"
          move={{
            input: '3,1',
            hitLevel: ['m', 'h'],
            damage: '12, 20',
            startup: 'i15-16',
            onBlock: '+7 DGF',
            onHit: 'Heat Engager',
            tags: ['Mid', 'High', 'Heat Engager', 'DGF.Transition'],
            description: 'Your best Heat engager. Plus frames into DGF, leads to mixups on Heat activation.',
          }}
          showVideo
        />

        <p>
          3,1 is your <span className="highlight">primary Heat engager</span>. On Heat dash, you 
          get +5 and go into DGF for immediate mixups.
        </p>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'f+1+2',
            hitLevel: ['M'],
            damage: '23 (29 in NSS/Heat)',
            startup: 'i20',
            onBlock: '-12 (-7 in NSS/Heat)',
            onHit: 'Heat Engager',
            tags: ['Mid', 'Heat Engager', 'Long Range', 'Unsafe → Safe in Heat'],
            description: 'Long range mid Heat engager. SAFE in Heat (-7). Becomes a launcher on Heat dash.',
          }}
          showVideo
        />

        <p>
          f+1+2 is <span className="highlight">unsafe normally but SAFE in Heat</span>. Use it from 
          long range to activate Heat safely.
        </p>

        <MoveCard character="yoshimitsu"
          move={{
            input: 'b+2,2',
            hitLevel: ['m', 'h'],
            damage: '12, 21',
            startup: 'i14-15',
            onBlock: '-9',
            onHit: 'Heat Engager',
            tags: ['Mid', 'High', 'Heat Engager', '14f Punish', 'Launcher in Heat'],
            description: 'Your 14f punish and whiff punisher. In Heat, becomes a full launcher!',
          }}
          showVideo
        />

        <p>
          b+2,2 is amazing because in Heat it <span className="highlight">becomes a launcher</span>. 
          Use it for punishment to get full combos during Heat.
        </p>

        <KeyConcept title="Other Heat Engagers" icon="📋">
          <ul>
            <li><code>KIN f+2</code> — From Kincho, long range homing</li>
            <li><code>DGF 4</code> — From Dragonfly, wall splats</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'H.2+3',
            hitLevel: ['M,m,m,m'],
            damage: '51',
            startup: 'i18-19',
            onBlock: '+4 DGF option',
            onHit: 'Attack Throw',
            tags: ['Heat Smash', 'DGF.Transition', 'Ends Heat'],
            description: 'Yoshimitsu\'s Heat Smash. On block, enter DGF at +10. On hit, huge damage.',
          }}
          showVideo
        />

        <p>
          Yoshimitsu's Heat Smash has a unique property: on block, you can enter <span className="highlight">DGF at +10</span>. 
          This means even blocked Heat Smash leads to mixups.
        </p>

        <KeyConcept title="Heat Smash Options" icon="🔄">
          <ol>
            <li><strong>On hit</strong> — Attack throw for 51 damage, ends Heat</li>
            <li><strong>On block</strong> — Press up to enter DGF at +10</li>
            <li><strong>On block</strong> — Don't press up, recover normally at +4</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Smash into DGF">
          After blocked Heat Smash, enter DGF with up. At +10, even DGF 3+4 (the unbreakable throw) 
          is guaranteed vs buttons. This makes blocked Heat Smash still dangerous.
        </TipBox>
      </Section>

      <Section title="Heat Combos">
        <KeyConcept title="Heat Dash Extension" icon="📋">
          <p>After any Heat engager on hit, you can Heat dash and continue:</p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px', marginTop: '12px' }}>
            3,1 (Heat Engager) → Heat Dash → d+2,2~B → df+1,2,1 T! → NSS 1+4 → dash → d+2,2
          </p>
          <p style={{ marginTop: '12px' }}>
            Heat Dash lets you convert Heat engagers into full combos.
          </p>
        </KeyConcept>

        <KeyConcept title="b+2,2 Launch Combo (In Heat)" icon="📋">
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            b+2,2 (launches in Heat) → d+2,2~B → df+1,2,1 T! → NSS 1+4 → dash → d+2,2
          </p>
          <p style={{ marginTop: '12px' }}>
            This is why b+2,2 is so strong as a punisher during Heat.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Heat Strategy">
        <KeyConcept title="When to Activate Heat" icon="⏱️">
          <ul>
            <li><strong>After a launch</strong> — Heat dash extends combos</li>
            <li><strong>With life lead</strong> — Pressure with plus frame moves</li>
            <li><strong>At the wall</strong> — DGF mixups become terrifying</li>
            <li><strong>To close out rounds</strong> — Heat Smash for guaranteed damage</li>
            <li><strong>For punishes</strong> — b+2,2 becomes a launcher</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Heat Pressure Plan" icon="🔥">
          <ol>
            <li><strong>Activate with 3,1</strong> — Plus frames into DGF</li>
            <li><strong>Use enhanced f+1+2</strong> — Safe launcher at range</li>
            <li><strong>Fish with b+2,2</strong> — Launches on punish</li>
            <li><strong>Apply DGF pressure</strong> — Heat DGF 1 is plus on block</li>
            <li><strong>Heat Smash to close</strong> — Even blocked leads to mixups</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Heat DGF Enhancement">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'Heat DGF.1',
            hitLevel: ['M'],
            damage: '26',
            startup: 'i30-31',
            onBlock: '+2',
            onHit: '+46a (Floor Break)',
            tags: ['Mid', 'PLUS ON BLOCK', 'Floor Break', 'Heat Only'],
            description: 'Heat-only enhanced DGF 1. PLUS ON BLOCK. Costs 90 frames of Heat.',
          }}
          showVideo
        />

        <p>
          In Heat, DGF 1 is <span className="highlight">PLUS ON BLOCK</span>. This is massive — 
          you can throw it out and stay in advantage even if they block. Costs Heat bar though.
        </p>

        <TipBox variant="tip" title="Heat DGF Pressure">
          In Heat after 3,1, you can do DGF 1 safely. If they block, you're +2. If they try to 
          interrupt, they eat the move. This makes Heat DGF oppressive.
        </TipBox>
      </Section>

      <Section title="Guard Crush Setup (Heat)">
        <KeyConcept title="KIN 2,1+2 Guard Crush" icon="💥">
          <p>In Heat, <code>KIN 2,1+2</code> (charged) guard crushes:</p>
          <ol>
            <li>Enter KIN (<code>1+2</code> or from a move)</li>
            <li><code>KIN 2,1+2</code> (hold 1+2 to charge)</li>
            <li>They're guard crushed, +11</li>
            <li><code>b+2,2</code> is guaranteed → Heat dash combo</li>
          </ol>
        </KeyConcept>

        <p>
          This setup is devastating at walls. Guard crush → b+2,2 → Heat dash → wall combo does 
          massive damage.
        </p>
      </Section>

      <Collapsible title="Heat Quick Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Heat Engagers</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>3,1</code> — Best, plus frames into DGF</li>
            <li><code>f+1+2</code> — Long range, safe in Heat</li>
            <li><code>b+2,2</code> — Punisher, launcher in Heat</li>
            <li><code>KIN f+2</code> — From stance</li>
            <li><code>DGF 4</code> — From DGF</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Heat Benefits</p>
          <ul style={{ marginBottom: '16px' }}>
            <li>All moves have NSS properties</li>
            <li>Heat DGF 1 is plus on block</li>
            <li>b+2,2 launches</li>
            <li>f+1+2 is safe (-7)</li>
            <li>KIN 2,1+2 guard crushes</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Heat Smash</p>
          <ul>
            <li>51 damage on hit</li>
            <li>+10 DGF on block (hold up)</li>
            <li>+4 on block (no DGF)</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
