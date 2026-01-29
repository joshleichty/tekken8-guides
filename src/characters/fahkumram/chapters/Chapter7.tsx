import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Rama Stance (RAM)"
      intro="Rama stance is Fahkumram's signature mixup tool — a true 5-way guessing game that can devastate opponents who don't know how to defend. Master this and you'll have one of the scariest pressure tools in Tekken."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Standard Combos"
    >
      <Section title="How to Enter Rama Stance">
        <p>
          You need <span className="highlight">Garuda Force</span> to access Rama stance. 
          There are several ways to enter:
        </p>

        <KeyConcept title="Rama Stance Entry Methods" icon="🚪">
          <ol>
            <li><strong>GRF df+3+4,3 on hit</strong> — Best method, hit-confirmable</li>
            <li><strong>GRF 1+2 parry success</strong> — Absorb attack → enter Rama</li>
            <li><strong>Charged guard break (3,4~3*, 4,3~4*, etc.)</strong> — On block → enter Rama</li>
          </ol>
        </KeyConcept>

        <div style={{ marginTop: '16px', padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)' }}>Primary Entry: GRF df+3+4,3</p>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            This is your main way into Rama. It's hit-confirmable — if the first two hits connect, 
            complete the string. On hit, you're at +13 going into Rama for the mixup.
          </p>
        </div>

        <TipBox variant="tip" title="Frame Advantage Matters">
          Different entries give different frame advantage in Rama:
          <ul style={{ marginTop: '8px' }}>
            <li>GRF df+3+4,3 on hit: <strong>+13</strong></li>
            <li>Guard break on block: <strong>+13</strong></li>
            <li>GRF 1+2 parry: <strong>+13</strong> (after absorb freeze)</li>
          </ul>
          All give enough advantage that RAM.1 cannot be interrupted.
        </TipBox>
      </Section>

      <Section title="Rama Stance Options">
        <p>
          From Rama stance, you have <span className="highlight">five options</span>. This is 
          what makes it so scary — opponents have to guess correctly.
        </p>

        <MoveCard character="fahkumram"
          move={{
            input: 'RAM.1',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i19',
            onBlock: '+1',
            onHit: '+20a (+3)',
            tags: ['Mid', 'Plus on Block', 'Wall Splats', 'Elbow', 'Unparryable'],
            description: 'The "respect" option. Mid that\'s +1 on block, beats power crush and rage art.',
          }}
          showVideo
        />

        <p>
          RAM.1 is your <span className="highlight">safest option</span>. It:
        </p>
        <ul>
          <li>Beats power crush attempts</li>
          <li>Beats rage art attempts</li>
          <li>Cannot be parried (elbow property)</li>
          <li>+1 on block — you keep your turn</li>
          <li>Wall splats on hit</li>
        </ul>

        <TipBox variant="tip" title="Default to RAM.1">
          If you're unsure what the opponent will do, RAM.1 is always solid. It beats most 
          defensive options and keeps you safe even on block.
        </TipBox>

        <MoveCard character="fahkumram"
          move={{
            input: 'RAM.2',
            hitLevel: ['m!'],
            damage: '43',
            startup: 'i40',
            onBlock: '!',
            onHit: '+18a (+8)',
            tags: ['Mid', 'Unblockable', 'Slow', 'Can Be Interrupted'],
            description: 'Unblockable. HUGE damage but slow — can be interrupted or sidestepped.',
          }}
          showVideo
        />

        <p>
          RAM.2 is an <span className="highlight">unblockable</span> that does massive damage. 
          However, it's slow (i40) and can be:
        </p>
        <ul>
          <li>Interrupted by fast moves</li>
          <li>Sidestepped or sidewalked</li>
          <li>Beaten by rage art</li>
        </ul>

        <TipBox variant="warning" title="Don't Spam Unblockable">
          Use RAM.2 when you've conditioned opponents to block with RAM.1. If they're pressing 
          buttons or stepping, they'll avoid it.
        </TipBox>

        <MoveCard character="fahkumram"
          move={{
            input: 'RAM.3,4',
            hitLevel: ['m', 'h'],
            damage: '20, 25',
            startup: 'i21',
            onBlock: '-9',
            onHit: '+13a',
            tags: ['Mid', 'High', 'Wall Splats', 'Jails', 'High Damage'],
            description: 'Mid-high string that jails. Big damage and wall splats. Can be parried.',
          }}
          showVideo
        />

        <p>
          RAM.3,4 is your <span className="highlight">damage option</span>. The mid-high jails 
          (second hit can't be ducked if first hits), does big damage, and wall splats.
        </p>

        <p>
          However, it can be:
        </p>
        <ul>
          <li>Parried (unlike RAM.1)</li>
          <li>Beaten by power crush if timed</li>
        </ul>

        <MoveCard character="fahkumram"
          move={{
            input: 'RAM.4',
            hitLevel: ['l'],
            damage: '31',
            startup: 'i21',
            onBlock: '-13',
            onHit: '+11a',
            tags: ['Low', 'Knockdown', 'Wall Splats', 'Punishable'],
            description: 'The low option. High damage knockdown but -13 on block.',
          }}
          showVideo
        />

        <p>
          RAM.4 is your <span className="highlight">low option</span>. It's a hatchet kick 
          that knocks down and wall splats. On counter-hit, the opponent flies far away.
        </p>

        <TipBox variant="warning" title="-13 on Block">
          RAM.4 is punishable at -13. Don't throw it out randomly — use it to punish 
          opponents who are conditioned to stand block.
        </TipBox>

        <MoveCard character="fahkumram"
          move={{
            input: 'RAM.1+3 or RAM.2+4',
            hitLevel: ['t!'],
            damage: '40',
            startup: 'i23',
            onBlock: '!',
            onHit: '-3d',
            tags: ['Throw', 'Unbreakable', 'Homing', 'Floor Break', 'Grants GRF'],
            description: 'Unbreakable throw that\'s homing. Floor breaks and grants GRF on hit.',
          }}
          showVideo
        />

        <p>
          RAM.1+3 is an <span className="highlight">unbreakable throw</span>. Key features:
        </p>
        <ul>
          <li>Cannot be broken (unbreakable)</li>
          <li>Homing — catches sidesteps</li>
          <li>Floor breaks</li>
          <li>Grants Garuda Force on hit</li>
        </ul>

        <p>
          However, it's a high so opponents can duck and launch you.
        </p>
      </Section>

      <Section title="The 5-Way Mixup">
        <KeyConcept title="Rama Options Summary" icon="🎲">
          <ul>
            <li><strong>RAM.1</strong> — Safe mid, beats mashing, +1 on block</li>
            <li><strong>RAM.2</strong> — Unblockable, big damage, slow</li>
            <li><strong>RAM.3,4</strong> — Damage mid string, can be parried</li>
            <li><strong>RAM.4</strong> — Low option, knockdown, -13</li>
            <li><strong>RAM.1+3</strong> — Unbreakable throw, can be ducked</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Opponent Counterplay" icon="🛡️">
          <p>What opponents can do vs Rama:</p>
          <ul>
            <li><strong>Block</strong> — Beats RAM.3,4 and RAM.4, loses to throw and unblockable</li>
            <li><strong>Duck</strong> — Punishes throw, loses to all mids</li>
            <li><strong>Sidestep</strong> — Can avoid unblockable, loses to throw (homing)</li>
            <li><strong>Power Crush</strong> — Can beat RAM.3,4, loses to RAM.1</li>
            <li><strong>Rage Art</strong> — Beat by RAM.1, can beat slower options</li>
            <li><strong>Parry</strong> — Works on RAM.3,4, doesn't work on RAM.1 (elbow)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Mind Game">
          Rama is a conditioning tool. Start with RAM.1 to teach them to respect. 
          Once they're blocking, go for throw or low. If they duck the throw, go back 
          to RAM.1 or RAM.3,4. Read and adapt.
        </TipBox>
      </Section>

      <Section title="Rama Strategy">
        <KeyConcept title="Recommended Approach" icon="📋">
          <ol>
            <li><strong>First entry</strong> — Do RAM.1. Safe, teaches respect.</li>
            <li><strong>If they block</strong> — Mix in RAM.4 (low) or RAM.1+3 (throw)</li>
            <li><strong>If they duck</strong> — RAM.1 or RAM.3,4 for big damage</li>
            <li><strong>If they rage art</strong> — RAM.1 beats it, or just block</li>
            <li><strong>If they power crush</strong> — RAM.1 beats it cleanly</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Rama is NOT Unbeatable">
          At high level, Rama can be disrespected. Opponents know the options and will 
          make educated guesses. Don't rely solely on Rama — it's a tool, not a crutch.
        </TipBox>

        <Collapsible title="Wall Pressure with Rama" icon="🧱">
          <div style={{ marginTop: '12px' }}>
            <p>
              Rama at the wall is terrifying because several options wall splat:
            </p>
            <ul>
              <li><strong>RAM.1</strong> — Wall splat, wall combo</li>
              <li><strong>RAM.3,4</strong> — Wall splat, wall combo</li>
              <li><strong>RAM.4</strong> — Wall splat, wall combo</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              At the wall, even RAM.1 (the "safe" option) leads to full wall damage. 
              This is where Rama becomes truly scary.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Collapsible title="Rama Move Reference" icon="📊" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Height</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Use</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>RAM.1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}>Safe, beats mashing</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RAM.2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid!</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Unblockable, slow</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RAM.3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m, h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Damage, jails</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RAM.4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Low</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>Low option, KND</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RAM.1+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Throw</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Unbreakable, homing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
