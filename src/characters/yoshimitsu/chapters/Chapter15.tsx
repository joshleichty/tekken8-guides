import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter15({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={15}
      title="Wall Game & Oki"
      intro="Yoshimitsu's okizeme (wake-up pressure) is arguably the best in Tekken. The unblockable FC df+1, stance mixups, and endless options make getting knocked down by Yoshi a nightmare."
      onPrevious={() => goToChapter(14)}
      onNext={() => goToChapter(16)}
      nextLabel="Complete Yoshimitsu"
    >
      <Section title="The Unblockable Low: FC df+1">
        <MoveCard character="yoshimitsu"
          videoId="FC.df+1"
          move={{
            input: 'FC df+1',
            hitLevel: ['l!'],
            damage: '[12;12]',
            startup: 'i26',
            onBlock: '—',
            onHit: '+70a (Full Combo)',
            tags: ['Low', 'UNBLOCKABLE', 'Oki Tool', 'Full Combo'],
            description: 'Unblockable low from full crouch. Hits grounded opponents. Full combo on hit.',
          }}
          showVideo
        />

        <p>
          FC df+1 is <span className="highlight">UNBLOCKABLE</span>. Yes, really. If they stay on 
          the ground, they eat it. If they stand or tech roll, they can avoid it — but then you 
          have other options.
        </p>

        <KeyConcept title="FC df+1 Oki Setup" icon="☠️">
          <ol>
            <li><strong>Knock them down</strong> — From combo, throw, etc.</li>
            <li><strong>Go to crouch</strong> — Hold down</li>
            <li><strong>FC df+1</strong> — If they stay down, unblockable</li>
            <li><strong>Full combo</strong> — On hit, they're launched</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="It's Reactable">
          FC df+1 is i26 with an obvious animation. Good players will tech roll or get-up kick 
          to avoid it. But this creates the oki mixup — they HAVE to react, and that creates 
          opportunities for other options.
        </TipBox>
      </Section>

      <Section title="Oki Decision Tree">
        <KeyConcept title="After Knockdown" icon="🎯">
          <p><strong>If they stay on the ground:</strong></p>
          <ul>
            <li><code>FC df+1</code> — Unblockable low, full combo</li>
          </ul>
          
          <p style={{ marginTop: '12px' }}><strong>If they tech roll forward/backward:</strong></p>
          <ul>
            <li><code>db+4</code> — Low poke catches tech</li>
            <li><code>3~4~U → DGF</code> — Approach into mixup</li>
            <li>Throws — They're standing, throw them</li>
          </ul>
          
          <p style={{ marginTop: '12px' }}><strong>If they get-up kick:</strong></p>
          <ul>
            <li>Block → punish with launcher</li>
            <li>Spin (b+3) → make it whiff</li>
          </ul>
          
          <p style={{ marginTop: '12px' }}><strong>If you want to be safe:</strong></p>
          <ul>
            <li>Dash in and block — see what they do</li>
            <li>KIN → long range pressure</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Wall Pressure">
        <p>
          At the wall, Yoshimitsu becomes <span className="highlight">terrifying</span>. You have 
          DGF mixups, wall splats, and the opponent has nowhere to run.
        </p>

        <KeyConcept title="Wall Pressure Tools" icon="🧱">
          <ul>
            <li><code>3,1 → DGF</code> — Plus frames into DGF at the wall</li>
            <li><code>Running 3 → DGF</code> — Approach into DGF</li>
            <li><code>DGF f+1+2</code> — Homing chip damage, -2 into Flash</li>
            <li><code>DGF 4</code> — Wall splat for combo</li>
            <li><code>DGF 3+4</code> — Unbreakable throw</li>
            <li><code>KIN f+2</code> — Wall stagger into mixup</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Wall DGF Flowchart">
          <ol>
            <li>Enter DGF with plus frames (3,1, Running 3)</li>
            <li>DGF f+1+2 for chip and frame advantage</li>
            <li>If they duck — DGF 4 wall splats</li>
            <li>If they turtle — DGF 3+4 unbreakable throw</li>
            <li>If they press — DGF 2,4 launches</li>
          </ol>
        </TipBox>
      </Section>

      <Section title="Wall Combos">
        <KeyConcept title="Standard Wall Combo" icon="📋">
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            Wall Splat → 1 → 3~4~U → DGF 4
          </p>
          <p style={{ marginTop: '12px' }}>
            Simple, consistent, good damage. The DGF 4 ender leads to knockdown for more oki.
          </p>
        </KeyConcept>

        <KeyConcept title="NSS/Heat Wall Combo" icon="📋">
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            Wall Splat → 3,2,1+2 (delay last hit)
          </p>
          <p style={{ marginTop: '12px' }}>
            More damage in NSS/Heat. Delay the last hit for grounded bonus (+10 damage).
          </p>
        </KeyConcept>

        <KeyConcept title="Wall Combo with Tornado" icon="📋">
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            Wall Splat (with T! available) → 4~3 T! → 1 → 3~4~U → DGF 4
          </p>
          <p style={{ marginTop: '12px' }}>
            Maximum damage when you still have Tornado available.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Floor Break Oki">
        <p>
          On floor break stages, Yoshimitsu gets extra damage. The floor break extends combos 
          and leads to more oki opportunities.
        </p>

        <KeyConcept title="DGF 3+4 Floor Break" icon="💥">
          <p>
            DGF 3+4 (the unbreakable throw) <span className="highlight">floor breaks</span>. 
            On floor break stages, this throw becomes even stronger because it leads to:
          </p>
          <ul>
            <li>Floor break damage bonus</li>
            <li>Additional combo opportunity</li>
            <li>More oki after</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Knockdown-Specific Oki">
        <Collapsible title="After Different Knockdowns" icon="📖" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p><strong>After d+2,2,2 ender:</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Dash in → crouch → FC df+1 (unblockable)</li>
              <li>Or dash in → block → see what they do</li>
            </ul>

            <p><strong>After throw:</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Immediate d+3 → FC df+4 (CH launcher low)</li>
              <li>Or crouch → FC df+1</li>
            </ul>

            <p><strong>After Flash hit:</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li>b+2,2 is guaranteed</li>
              <li>Then oki setup from the knockdown</li>
            </ul>

            <p><strong>After wall splat combo:</strong></p>
            <ul>
              <li>DGF 4 ender leaves them close</li>
              <li>Immediate df+1 or throw mixup</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Anti-Oki from Opponents">
        <p>
          Smart opponents will try to escape your oki. Here's how to counter their options:
        </p>

        <KeyConcept title="Beating Escape Options" icon="🛡️">
          <ul>
            <li><strong>Tech roll</strong> → Dash in, throw or db+4</li>
            <li><strong>Get-up 3</strong> → Block and launch punish</li>
            <li><strong>Get-up 4</strong> → Block and launch punish</li>
            <li><strong>Spring kick</strong> → Block and launch punish</li>
            <li><strong>Stay down</strong> → FC df+1 unblockable</li>
            <li><strong>Roll to side</strong> → Realign and continue pressure</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Oki Vortex">
          Yoshimitsu's oki is a vortex — every option they pick leads to another mixup. Tech roll? 
          You dash and throw. Stay down? Unblockable. Get-up kick? Block and launch. The only 
          escape is making the right read every time.
        </TipBox>
      </Section>

      <Section title="Heat Wall Pressure">
        <KeyConcept title="Heat at the Wall" icon="🔥">
          <p>In Heat at the wall, Yoshimitsu becomes ridiculous:</p>
          <ul>
            <li><strong>Heat DGF 1</strong> — Plus on block mid at the wall</li>
            <li><strong>Heat Smash</strong> → DGF at +10 if blocked</li>
            <li><strong>b+2,2</strong> — Launcher for wall combo</li>
            <li><strong>KIN 2,1+2 guard crush</strong> → guaranteed b+2,2</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Waste Heat">
          Heat pressure at the wall is strong, but don't throw it away. Make sure you're getting 
          value from Heat activation. One blocked Heat Smash into DGF mixup can win the round.
        </TipBox>
      </Section>

      <Collapsible title="Wall & Oki Quick Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Oki Options</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>FC df+1</code> — Unblockable low (stay down)</li>
            <li><code>db+4</code> — Catches tech roll</li>
            <li><code>Throw</code> — Catches standing</li>
            <li><code>Block</code> — Beats get-up kicks</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Wall Combos</p>
          <ul style={{ marginBottom: '16px', fontFamily: 'monospace' }}>
            <li>Standard: 1 → 3~4~U → DGF 4</li>
            <li>NSS/Heat: 3,2,1+2 (delay)</li>
            <li>With T!: 4~3 T! → 1 → 3~4~U → DGF 4</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Wall Pressure</p>
          <ul>
            <li>3,1 → DGF (plus frames)</li>
            <li>DGF f+1+2 (chip, -2)</li>
            <li>DGF 4 (wall splat)</li>
            <li>DGF 3+4 (unbreakable throw)</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
