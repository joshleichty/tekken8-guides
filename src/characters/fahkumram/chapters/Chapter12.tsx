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
      title="Defense & Parries"
      intro="Fahkumram has three parries: a kick parry, a punch parry that grants GRF, and the GRF 1+2 reversal that leads to Rama stance. Master these defensive tools to turn opponent's offense into your advantage."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Complete Fahkumram"
    >
      <Section title="Defensive Options Overview">
        <KeyConcept title="Fahkumram's Defensive Tools" icon="🛡️">
          <ul>
            <li><strong>b+1+3</strong> — Kick parry (all kick heights)</li>
            <li><strong>b+2+4</strong> — Punch parry (high/mid punches), grants GRF</li>
            <li><strong>GRF 1+2</strong> — Reversal that leads to Rama stance</li>
            <li><strong>uf+2</strong> — Power crush (high)</li>
            <li><strong>f+3+4</strong> — Power crush (mid), grants GRF</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Kick Parry (b+1+3)">
        <MoveCard character="fahkumram"
          move={{
            input: 'b+1+3',
            hitLevel: ['sp'],
            damage: '—',
            startup: '—',
            onBlock: '—',
            onHit: '—',
            tags: ['Special', 'Kick Parry', 'All Heights'],
            description: 'Parries high, mid, AND low kicks. Unique among parries.',
          }}
          showVideo
        />

        <p>
          b+1+3 parries <span className="highlight">all kick attacks regardless of height</span>. 
          This is unique — most parries only work on specific heights.
        </p>

        <p>
          Parry window is frames 5-12. On successful parry, you get a guaranteed follow-up:
        </p>

        <MoveCard character="fahkumram"
          move={{
            input: 'b+1+3,P (on parry)',
            hitLevel: ['m', 'm', 'h'],
            damage: '40',
            startup: 'i19',
            onBlock: '—',
            onHit: '+19a (+10)',
            tags: ['Parry Follow-up', 'Wall Splat', '40 Damage'],
            description: 'Guaranteed follow-up after successful kick parry.',
          }}
        />

        <TipBox variant="tip" title="Use Against Kick-Heavy Characters">
          Characters like Hwoarang, Eddy, and Law use lots of kicks. The kick parry shuts 
          down their pressure and gives you a guaranteed 40 damage.
        </TipBox>
      </Section>

      <Section title="Punch Parry (b+2+4)">
        <MoveCard character="fahkumram"
          move={{
            input: 'b+2+4',
            hitLevel: ['sp'],
            damage: '—',
            startup: '—',
            onBlock: '—',
            onHit: '—',
            tags: ['Special', 'Punch Parry', 'Grants GRF', 'Heals'],
            description: 'Parries high and mid punches. Grants Garuda Force and recovers some health.',
          }}
          showVideo
        />

        <p>
          b+2+4 parries <span className="highlight">high and mid punches</span>. On success:
        </p>

        <ul>
          <li><strong>Grants Garuda Force</strong> — Instant GRF access</li>
          <li><strong>Recovers health</strong> — Some white health restored</li>
          <li><strong>+7 frames</strong> — Frame advantage to continue</li>
        </ul>

        <p>
          Parry window is frames 5-12. Unlike the kick parry, you don't get a guaranteed 
          follow-up — just the GRF and frame advantage.
        </p>

        <TipBox variant="warning" title="Only Works on Punches">
          b+2+4 only parries punches (fists). It won't work on elbows, knees, or shoulders.
          Know which moves are "punches" in each matchup.
        </TipBox>
      </Section>

      <Section title="GRF 1+2 Reversal">
        <MoveCard character="fahkumram"
          move={{
            input: 'GRF.1+2',
            hitLevel: ['sp'],
            damage: '—',
            startup: '—',
            onBlock: '—',
            onHit: '—',
            tags: ['Special', 'Reversal', 'Rama Transition', 'Power Crush', 'Requires GRF'],
            description: 'GRF-only reversal. Absorbs high/mid attacks and transitions to Rama stance.',
          }}
          showVideo
        />

        <p>
          GRF 1+2 is a <span className="highlight">power crush that leads to Rama</span>. 
          It absorbs high and mid attacks during frames 5-19, then:
        </p>

        <ul>
          <li>Consumes your Garuda Force</li>
          <li>Automatically enters Rama stance</li>
          <li>You're at +13 for the Rama mixup</li>
        </ul>

        <MoveCard character="fahkumram"
          move={{
            input: 'GRF.1+2,P (on absorb)',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i21 (effective ~i36)',
            onBlock: '-9',
            onHit: '+13g (Rama)',
            tags: ['Reversal Follow-up', 'Rama Transition', '8 Chip Damage'],
            description: 'The attack that comes out after absorbing. Transitions to Rama on hit.',
          }}
        />

        <KeyConcept title="When to Use GRF 1+2" icon="⚡">
          <ul>
            <li>When you have GRF and predict an attack</li>
            <li>Against obvious pressure strings</li>
            <li>To convert defense into Rama mixup offense</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Loses to Lows and Throws">
          GRF 1+2 only absorbs mids and highs. Lows will hit you, and throws will grab you.
          Don't use it against low mixups or throw-heavy opponents.
        </TipBox>
      </Section>

      <Section title="Power Crushes">
        <MoveCard character="fahkumram"
          move={{
            input: 'uf+2',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i18',
            onBlock: '-7',
            onHit: '+22a (+13)',
            tags: ['High', 'Power Crush', 'Safe', 'Wall Splat'],
            description: 'Safe high power crush. Good panic option.',
          }}
          showVideo
        />

        <p>
          uf+2 is your <span className="highlight">safe power crush</span>. It's a high, so 
          it can be ducked, but at -7 on block you're relatively safe.
        </p>

        <MoveCard character="fahkumram"
          move={{
            input: 'f+3+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i22',
            onBlock: '-14',
            onHit: '+19a (+14)',
            tags: ['Mid', 'Power Crush', 'Grants GRF', 'Knee'],
            description: 'Mid power crush that grants Garuda Force on hit. -14 on block.',
          }}
          showVideo
        />

        <p>
          f+3+4 is a <span className="highlight">mid power crush</span> that grants GRF on hit. 
          It's -14 on block though, so use it carefully.
        </p>

        <KeyConcept title="Power Crush Selection" icon="💪">
          <ul>
            <li><strong>uf+2</strong> — Safe but high, use when they won't duck</li>
            <li><strong>f+3+4</strong> — Mid but -14, use when you need GRF or vs ducking</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Movement Defense">
        <KeyConcept title="Fahkumram's Movement" icon="🏃">
          <p>
            Fahkumram has <strong>bad sidewalk but functional sidestep</strong>. This means:
          </p>
          <ul>
            <li>Don't try to sidewalk around attacks</li>
            <li>Use quick sidestep-block to evade linear moves</li>
            <li>Rely on range and backdash to create space</li>
            <li>His backdash is good — use it to make attacks whiff</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Sidestep-Block">
          Instead of sidewalking, do quick sidestep then immediately block. This gives you 
          some evasion while staying safe. Practice: SS → block → punish their whiff.
        </TipBox>
      </Section>

      <Section title="Defensive Strategy">
        <KeyConcept title="Fahkumram's Defensive Gameplan" icon="🛡️">
          <ol>
            <li><strong>Create space</strong> — Backdash to your range advantage zone</li>
            <li><strong>Punish whiffs</strong> — Use your range to whiff punish</li>
            <li><strong>Parry on read</strong> — b+1+3 vs kicks, b+2+4 vs punches</li>
            <li><strong>Power crush panic</strong> — uf+2 or f+3+4 when pressured</li>
            <li><strong>GRF 1+2 for Rama</strong> — Convert defense into offense</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Over-Parry">
          Parries have startup and recovery. If you mistime them or opponent delays, 
          you get hit. Use parries on reads, not reactions.
        </TipBox>
      </Section>

      <Collapsible title="Defensive Move Reference" icon="📊" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Parries</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Parry</td>
                <td style={{ padding: '8px' }}>All kicks (H/M/L)</td>
                <td style={{ padding: '8px' }}>40 dmg follow-up</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+2+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Parry</td>
                <td style={{ padding: '8px' }}>H/M punches</td>
                <td style={{ padding: '8px' }}>Grants GRF, heals</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>GRF 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Reversal</td>
                <td style={{ padding: '8px' }}>H/M attacks</td>
                <td style={{ padding: '8px' }}>→ Rama, needs GRF</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Power Crush</td>
                <td style={{ padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>High, safe (-7)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Power Crush</td>
                <td style={{ padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Mid, grants GRF, -14</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
