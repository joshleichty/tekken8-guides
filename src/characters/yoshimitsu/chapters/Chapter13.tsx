import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="Punishment"
      intro="Punishment is how you make opponents pay for risky moves. Yoshimitsu has fast, damaging punishes at every frame level. Know these by heart — free damage wins games."
      onPrevious={() => goToChapter(12)}
      onNext={() => goToChapter(14)}
      nextLabel="Learn Heat System"
    >
      <Section title="Standing Punishment">
        <KeyConcept title="Standing Punish Chart" icon="📊">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr>
                  <td style={{ padding: '8px' }}>-10</td>
                  <td style={{ padding: '8px' }}><code>1,1</code></td>
                  <td style={{ padding: '8px' }}>Floor breaks, CH launcher in NSS/Heat</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-11</td>
                  <td style={{ padding: '8px' }}><code>2,2</code></td>
                  <td style={{ padding: '8px' }}>+15 on hit, NSS transition</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-12</td>
                  <td style={{ padding: '8px' }}><code>4,4</code> (NEW)</td>
                  <td style={{ padding: '8px' }}>Good damage, safe-ish</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-13</td>
                  <td style={{ padding: '8px' }}><code>df+1,4</code></td>
                  <td style={{ padding: '8px' }}>+4 on hit, good range</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-14</td>
                  <td style={{ padding: '8px' }}><code>b+2,2</code></td>
                  <td style={{ padding: '8px' }}>Heat engager! Launcher in Heat</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-15</td>
                  <td style={{ padding: '8px' }}><code>df+2</code></td>
                  <td style={{ padding: '8px' }}>FULL COMBO launcher</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-15</td>
                  <td style={{ padding: '8px' }}><code>uf+3</code></td>
                  <td style={{ padding: '8px' }}>Alternative launcher</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-17+</td>
                  <td style={{ padding: '8px' }}><code>f,n,d,df+1</code></td>
                  <td style={{ padding: '8px' }}>CD launcher, high crushes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </KeyConcept>

        <TipBox variant="tip" title="The Important Ones">
          <ul>
            <li><strong>-10:</strong> <code>1,1</code> — Your bread and butter</li>
            <li><strong>-14:</strong> <code>b+2,2</code> — Heat engager, big deal</li>
            <li><strong>-15:</strong> <code>df+2</code> — Full combo, this is huge</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Crouching Punishment (While Standing)">
        <KeyConcept title="WS Punish Chart" icon="📊">
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr>
                  <td style={{ padding: '8px' }}>-10</td>
                  <td style={{ padding: '8px' }}><code>1+4</code> (Flash)</td>
                  <td style={{ padding: '8px' }}>i6-9, unique punish option</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-11</td>
                  <td style={{ padding: '8px' }}><code>ws+4</code></td>
                  <td style={{ padding: '8px' }}>Standard ws punish</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-13</td>
                  <td style={{ padding: '8px' }}><code>ws+1,2</code> (NEW)</td>
                  <td style={{ padding: '8px' }}>Good damage, new T8 string</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-15</td>
                  <td style={{ padding: '8px' }}><code>ws+2,1</code></td>
                  <td style={{ padding: '8px' }}>Big damage, DGF transition</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-15</td>
                  <td style={{ padding: '8px' }}><code>uf+3</code></td>
                  <td style={{ padding: '8px' }}>Hopkick launcher</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>-17+</td>
                  <td style={{ padding: '8px' }}><code>f,n,d,df+1</code></td>
                  <td style={{ padding: '8px' }}>CD launcher</td>
                </tr>
              </tbody>
            </table>
          </div>
        </KeyConcept>

        <TipBox variant="tip" title="After Blocking Lows">
          When you block a low, you're in crouch. Use:
          <ul>
            <li><strong>-11 to -14:</strong> <code>ws+4</code> or <code>ws+1,2</code></li>
            <li><strong>-15+:</strong> <code>ws+2,1</code> or <code>uf+3</code> for launch</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Whiff Punishment">
        <KeyConcept title="Best Whiff Punishers" icon="🎯">
          <ul>
            <li><strong>b+2,2</strong> — Fast (i14), long range, Heat engager. Your go-to.</li>
            <li><strong>3,1</strong> — Long range, Heat engager, DGF transition.</li>
            <li><strong>df+2</strong> — Safe launcher, excellent range.</li>
            <li><strong>1,1</strong> — Quick and consistent at close range.</li>
          </ul>
        </KeyConcept>

        <p>
          b+2,2 is your <span className="highlight">best whiff punisher</span>. It's fast, has 
          great range, and is a Heat engager. When you see a whiff, b+2,2 is usually the answer.
        </p>

        <TipBox variant="warning" title="Don't Get Greedy">
          Don't always go for the launcher. If you're not sure you can reach with df+2, use 
          b+2,2 instead. A guaranteed Heat engager beats a dropped launcher.
        </TipBox>
      </Section>

      <Section title="Special Punishes">
        <KeyConcept title="Flash Punishes" icon="⚡">
          <p>
            Some moves that are "safe" (-9 or better) can be punished with Flash because their 
            recovery keeps their hitbox extended. Examples:
          </p>
          <ul>
            <li><strong>Many running 3s</strong> — Plus on block but Flash catches recovery</li>
            <li><strong>Extended jab strings</strong> — Flash between hits</li>
            <li><strong>-9 moves at close range</strong> — Test in practice mode</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            This is character-specific. Lab the matchups you struggle with.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Matchup-Specific Punishes">
        <Collapsible title="Common Matchup Punishes" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p><strong>Slide (many characters)</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Block → <code>f,n,d,df+1</code> (CD launcher)</li>
            </ul>

            <p><strong>Asuka's b+3</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Block → <code>f,n,d,df+1</code></li>
            </ul>

            <p><strong>Kazuya db+1,2</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Block → <code>f,n,d,df+1</code></li>
            </ul>

            <p><strong>Ling Calli Roll</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Block → <code>uf+3</code></li>
            </ul>

            <p><strong>Leo's b+1,4</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li>Evade the string</li>
            </ul>

            <p><strong>King's JGS 4</strong></p>
            <ul>
              <li>Block → <code>ws+4~B</code> float combo</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Practice Plan">
        <KeyConcept title="Punishment Training" icon="🎮">
          <ol>
            <li><strong>Set up -10 moves</strong> — Practice 1,1 punish consistently</li>
            <li><strong>Set up -14 moves</strong> — Practice b+2,2 punish</li>
            <li><strong>Set up -15 moves</strong> — Practice df+2 launcher</li>
            <li><strong>Practice ws punishes</strong> — ws+4, ws+2,1</li>
            <li><strong>Practice whiff punishment</strong> — Record approaches, punish with b+2,2</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Muscle Memory">
          Punishment needs to be automatic. When you see -10, your hands do 1,1. When you see 
          -14, your hands do b+2,2. Practice until you don't have to think.
        </TipBox>
      </Section>

      <Collapsible title="Quick Reference Card" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Standing</p>
          <ul style={{ marginBottom: '16px', fontFamily: 'monospace' }}>
            <li>-10: 1,1</li>
            <li>-11: 2,2</li>
            <li>-13: df+1,4</li>
            <li>-14: b+2,2 (HEAT ENGAGER)</li>
            <li>-15: df+2 (LAUNCHER)</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Crouching</p>
          <ul style={{ marginBottom: '16px', fontFamily: 'monospace' }}>
            <li>-11: ws+4</li>
            <li>-13: ws+1,2</li>
            <li>-15: ws+2,1 or uf+3</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Whiff</p>
          <ul style={{ fontFamily: 'monospace' }}>
            <li>b+2,2 (primary)</li>
            <li>df+2 (launcher if in range)</li>
            <li>3,1 (Heat engager)</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
