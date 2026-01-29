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
      title="Defense & Keep-Out"
      intro="Victor excels at keeping opponents at bay. His keep-out tools are among the best in Tekken 8. This chapter covers how to play defensively and punish aggressive opponents."
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
      nextLabel="Complete Victor"
    >
      <Section title="Victor's Defensive Identity">
        <KeyConcept title="Keep-Out Philosophy" icon="🛡️">
          <p>
            Victor is <strong>not a rush-down character</strong>. He's at his best when 
            controlling space and punishing opponents who try to approach. His defensive 
            tools are:
          </p>
          <ul>
            <li>Safe counter-hit launchers</li>
            <li>Long-range mids with chip damage</li>
            <li>A counter-hit launching low (db+4)</li>
            <li>Excellent whiff punishment</li>
            <li>The backdash teleport (ub,b)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Primary Keep-Out Tools">
        <MoveCard character="victor"
          move={{
            input: '1+2',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i15',
            onBlock: '-9',
            onHit: '+2',
            onCH: 'Launch',
            tags: ['Mid', 'Weapon', 'CH Launcher', 'Safe', 'Keep-Out'],
            description: 'Safe mid that launches on counter-hit. Your primary defense tool.',
          }}
          showVideo
        />

        <p>
          1+2 is Victor's <span className="highlight">defensive backbone</span>. Throw this 
          out when opponents approach. If they press anything, they eat a full combo.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'b+1+2',
            hitLevel: ['h'],
            damage: '25',
            startup: 'i19-20',
            onBlock: '-9',
            onHit: '+16d / HE',
            tags: ['High', 'Power Crush', 'Heat Engager', 'Safe', 'Keep-Out'],
            description: 'Power crush with amazing range. Shuts down aggressive approaches.',
          }}
          showVideo
        />

        <p>
          b+1+2 is your <span className="highlight">panic button</span>. It's a power crush 
          (absorbs mids and highs), has incredible range, heat engages, and is safe. When 
          opponents pressure you, this shuts them down.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i20-21',
            onBlock: '-26',
            onHit: '+4c',
            onCH: 'Launch',
            tags: ['Low', 'CH Launcher', 'High Crush', 'Keep-Out', 'Long Range'],
            description: 'Counter-hit launching low. High crushes. Amazing for keep-out.',
          }}
          showVideo
        />

        <p>
          db+4 is <span className="highlight">keep-out from range</span>. It high crushes, 
          has insane range (3.0!), and CH launches. When opponents try to approach with 
          jabs or high strings, db+4 ducks under and launches them.
        </p>

        <KeyConcept title="Keep-Out Triangle" icon="🔺">
          <ul>
            <li><strong>1+2</strong> — Beats mid/high approaches (CH launches)</li>
            <li><strong>b+1+2</strong> — Beats everything (power crush)</li>
            <li><strong>db+4</strong> — Beats high approaches (high crush, CH launch)</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Mix these three and opponents will struggle to approach safely.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Teleport Backdash">
        <KeyConcept title="ub,b — The Teleport" icon="✨">
          <p>
            Victor can press <code>ub,b</code> (up-back, back) to teleport backward instantly. 
            This is faster than a Korean backdash and creates massive space.
          </p>
          <ul>
            <li>Instant space creation</li>
            <li>Sets up keep-out tools</li>
            <li>Makes whiff punishing easier</li>
            <li>Escape pressure safely</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Teleport → Punish">
          Teleport (ub,b) → Wait for whiff → df+2 (launch). This is Victor's defensive 
          gameplan in a nutshell. Create space, make them whiff, punish hard.
        </TipBox>
      </Section>

      <Section title="Whiff Punishment">
        <KeyConcept title="After Creating Space" icon="🎯">
          <p>Once you've made space with teleport or backdash:</p>
          <ul>
            <li><code>df+2</code> — i15 launcher, good range</li>
            <li><code>f,f+2</code> — Great range tornado launcher</li>
            <li><code>b+3,1</code> — Maximum range (for Deathfist-level pushback)</li>
            <li><code>uf+1,1</code> — Wall splats, 30 damage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Whiff Punishment">
          In practice mode, set opponent to do a whiffing move. Practice: teleport → 
          wait → df+2 → full combo. This is free damage.
        </TipBox>
      </Section>

      <Section title="Other Defensive Tools">
        <MoveCard character="victor"
          move={{
            input: 'db+3',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i19-20',
            onBlock: '-11',
            onHit: '+67a (T!)',
            tags: ['High', 'Tornado', 'High Crush', 'Balcony Break'],
            description: 'High crushing tornado launcher. Use when you expect high attacks.',
          }}
          showVideo
        />

        <p>
          db+3 <span className="highlight">high crushes and launches</span>. If you predict 
          a jab or high string, this beats it and gives a full combo.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'b+2',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '-6',
            onHit: '+5',
            onCH: '+14',
            tags: ['High', 'Fast', 'CH Bonus', 'Interrupt'],
            description: 'Fast check. On counter-hit, guarantees f+4,1 for heat engage.',
          }}
          showVideo
        />

        <p>
          b+2 is a <span className="highlight">quick defensive check</span>. At i10, it 
          interrupts pressure. On CH (+14), you get a guaranteed f+4,1 heat engager.
        </p>

        <MoveCard character="victor"
          move={{
            input: 'u+1+2',
            hitLevel: ['m'],
            damage: '32',
            startup: 'i31-32',
            onBlock: '-20',
            onHit: '+1a',
            tags: ['Mid', 'Evasive', 'Panic Move', 'Safe in Heat'],
            description: 'Evasive helm breaker. Very unsafe but evades many attacks. Safe in heat.',
          }}
          showVideo
        />

        <p>
          u+1+2 is an <span className="highlight">evasive panic move</span>. It teleports 
          up and comes down with a helm breaker. Very unsafe (-20) but evades many attacks. 
          <strong>Becomes safe (-4) in heat.</strong>
        </p>

        <TipBox variant="warning" title="u+1+2 Risk">
          Outside of heat, u+1+2 is -20 on block. Only use it when you're confident it 
          will hit, or when you're in heat where it's safe.
        </TipBox>
      </Section>

      <Section title="Dealing with Pressure">
        <KeyConcept title="When Pressured" icon="😰">
          <ol>
            <li><strong>Block and wait</strong> — See what they're doing</li>
            <li><strong>1+2 to interrupt</strong> — If they press, CH launch</li>
            <li><strong>b+1+2 power crush</strong> — Absorb their attack</li>
            <li><strong>db+3 high crush</strong> — If they're jabbing</li>
            <li><strong>Backdash/teleport</strong> — Create space, reset</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Panic">
          Victor's defensive tools are strong, but you need to pick the right one. 
          Block first, see what they're doing, then respond. Mashing will get you killed.
        </TipBox>
      </Section>

      <Section title="Sidestepping">
        <KeyConcept title="Victor's Sidestep" icon="🦶">
          <p>
            Victor's sidestep is <strong>not great</strong> due to his large hurtbox. 
            However, he can still step certain moves:
          </p>
          <ul>
            <li><strong>SSL</strong> — Generally worse for Victor</li>
            <li><strong>SSR</strong> — Better, but his hurtbox clips more than most</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Don't rely on sidestepping. Use backdash/teleport instead.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Parries (f+3)">
        <KeyConcept title="Punch Parry" icon="🤚">
          <p>
            Victor's <code>f+3</code> (PRF entry) has a punch parry window (frames 5-10). 
            If you parry a punch, you're at +15-20 and can do any i17 move guaranteed.
          </p>
          <p style={{ marginTop: '12px' }}>
            The timing is strict. Don't rely on this, but know it exists.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Defensive Gameplan">
        <KeyConcept title="Victor's Defense Flow" icon="🛡️">
          <ol>
            <li><strong>Create space</strong> — Backdash or teleport (ub,b)</li>
            <li><strong>Wait for approach</strong> — Let them come to you</li>
            <li><strong>Punish with keep-out</strong> — 1+2, b+1+2, db+4</li>
            <li><strong>Whiff punish</strong> — df+2 for full combo</li>
            <li><strong>If they freeze</strong> — Approach with f,f,f+2</li>
            <li><strong>Repeat</strong> — Control the pace</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Patience Wins">
          Victor rewards patience. Let opponents hang themselves on your keep-out tools. 
          One whiff punish or CH 1+2 can turn the entire round.
        </TipBox>
      </Section>

      <Collapsible title="Defense Quick Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Best Response</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>They approach with mids</td>
                <td style={{ padding: '8px' }}><code>1+2</code> (CH launch)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>They approach with highs</td>
                <td style={{ padding: '8px' }}><code>db+4</code> (high crush, CH launch)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>They pressure you</td>
                <td style={{ padding: '8px' }}><code>b+1+2</code> (power crush)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>They whiff</td>
                <td style={{ padding: '8px' }}><code>df+2</code> (full combo)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>They turtle</td>
                <td style={{ padding: '8px' }}><code>f,f,f+2</code> (approach)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Need space</td>
                <td style={{ padding: '8px' }}><code>ub,b</code> (teleport)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
