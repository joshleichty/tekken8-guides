import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="First Combos"
      intro="Zafina's combo damage is lower than most characters, but her combos are consistent and lead to strong oki situations. Learn these core routes and you'll have everything you need."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Azazel Power & Heat"
    >
      <Section title="The Universal Combo">
        <p>
          This is Zafina's <span className="highlight">bread and butter combo</span>. It works 
          from most launchers and gives good damage with excellent wall carry.
        </p>

        <KeyConcept title="Universal Combo" icon="⚡">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            [Launcher] → uf+1 → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1
          </p>
          <ul style={{ marginTop: '12px' }}>
            <li><strong>Damage</strong>: ~65+ depending on launcher</li>
            <li><strong>Wall carry</strong>: Excellent</li>
            <li><strong>Works from</strong>: df+2, uf+4, ws+2, ws+1,2</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Tip">
          The hardest part is the <code>f,f,f+1+2</code> after the tornado. You need to 
          dash and input 1+2 while running. Practice this connection until it's consistent.
        </TipBox>
      </Section>

      <Section title="Launcher-Specific Routes">
        <KeyConcept title="df+2 (Main Launcher)" icon="🚀">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            df+2 → uf+1 → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1
          </p>
          <p style={{ marginTop: '8px' }}>~65 damage</p>
        </KeyConcept>

        <KeyConcept title="uf+4 (Hopkick)" icon="🦵">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            uf+4 → df+2 → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1
          </p>
          <p style={{ marginTop: '8px' }}>~68 damage</p>
        </KeyConcept>

        <KeyConcept title="ws+2 (While Standing Launcher)" icon="📈">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            ws+2 → same as df+2 route
          </p>
        </KeyConcept>

        <KeyConcept title="ws+1,2 (15f WS Launcher)" icon="📈">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            ws+1,2 → uf+1 → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1
          </p>
          <p style={{ marginTop: '8px' }}>~63 damage</p>
        </KeyConcept>
      </Section>

      <Section title="Counter-Hit Combos">
        <KeyConcept title="CH d+3 (No Mantis)" icon="💥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH d+3 → ws+3 → SCR 4 T! → 2,1,3
          </p>
          <p style={{ marginTop: '8px' }}>~52 damage. Simple and reliable.</p>
        </KeyConcept>

        <KeyConcept title="CH d+3~D (Into Mantis)" icon="💥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH d+3~D → MNT 4,3 T! → MNT 1 → f+2,3,4
          </p>
          <p style={{ marginTop: '8px' }}>~58 damage. Higher damage but requires MNT transition.</p>
        </KeyConcept>

        <KeyConcept title="CH 1+2" icon="💥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH 1+2 → 3~B → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1
          </p>
          <p style={{ marginTop: '8px' }}>~68 damage</p>
        </KeyConcept>

        <KeyConcept title="CH 1+2,4" icon="💥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH 1+2,4 → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1
          </p>
          <p style={{ marginTop: '8px' }}>Use if you did the extension.</p>
        </KeyConcept>

        <KeyConcept title="CH f,f+3 (Best Heat Engage)" icon="🔥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH f,f+3 → SCR 2,1 (heat engage)
          </p>
          <p style={{ marginTop: '8px' }}>52 damage + HEAT. This is your bread and butter heat engage.</p>
        </KeyConcept>
      </Section>

      <Section title="Stance Combos">
        <KeyConcept title="SCR 4 (Power Crush)" icon="🦅">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            SCR 4 T! → b+2 → df+1 → f+2,3,4
          </p>
          <p style={{ marginTop: '8px' }}>~55 damage from power crush.</p>
        </KeyConcept>

        <KeyConcept title="SCR df+1 (Azazel Launcher)" icon="🔮">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            SCR df+1 T! → b+2 → df+1 → f+2,3,4
          </p>
          <p style={{ marginTop: '8px' }}>Remember: Self-damage outside heat!</p>
        </KeyConcept>

        <KeyConcept title="MNT df+2 (Safe Launcher)" icon="🦗">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            MNT df+2 → df+1 → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1
          </p>
        </KeyConcept>

        <KeyConcept title="CH MNT 3,1" icon="🦗">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH MNT 3,1 → same as df+2 route
          </p>
          <p style={{ marginTop: '8px' }}>High damage combo from your safe low!</p>
        </KeyConcept>

        <KeyConcept title="CH MNT 4,3" icon="🦗">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH MNT 4,3 T! → (dash) MNT 1 → df+1 → f+2,3,4
          </p>
        </KeyConcept>

        <KeyConcept title="TRT 2 (Slow Launcher)" icon="🕷️">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            TRT 2 T! → b+2 → df+1 → f+2,3,4
          </p>
        </KeyConcept>
      </Section>

      <Section title="Other Combo Starters">
        <KeyConcept title="CH 1,4 (Tarantula Entry)" icon="💥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH (1),4 → TRT 2 T! → b+2 → df+1 → f+2,3,4
          </p>
        </KeyConcept>

        <KeyConcept title="CH db+4,2" icon="💥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH db+4,2 → (dash) df+1 → f+2,3,4
          </p>
          <p style={{ marginTop: '8px' }}>Quick combo from CH low.</p>
        </KeyConcept>

        <KeyConcept title="CH d+1,1" icon="💥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH d+1,1 → 3~B → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1
          </p>
        </KeyConcept>

        <KeyConcept title="db+1+2 (Snake Edge)" icon="🐍">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            db+1+2 → MNT 3,1 → MNT 4,3 T! → (dash) → MNT 2,1,4
          </p>
          <p style={{ marginTop: '8px' }}>From snake edge. High damage!</p>
        </KeyConcept>

        <KeyConcept title="CH SCR df+4" icon="💥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            CH SCR df+4 → MNT df+2 → 3 → SCR 4 T! → 2,1,3
          </p>
        </KeyConcept>
      </Section>

      <Section title="Simplified Combos">
        <p>
          If the full combos feel difficult, use these <span className="highlight">simplified versions</span>:
        </p>

        <KeyConcept title="Easy Universal Combo" icon="🎯">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            [Launcher] → uf+1 → f+2,3 → SCR 4 T! → 2,1,3
          </p>
          <p style={{ marginTop: '8px' }}>Skips df+1 filler, easier timing. ~55-60 damage.</p>
        </KeyConcept>

        <KeyConcept title="Very Easy Combo" icon="🎯">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            [Launcher] → uf+1 → f+2,3,4
          </p>
          <p style={{ marginTop: '8px' }}>Super simple. ~50 damage. Good for starting out.</p>
        </KeyConcept>

        <TipBox variant="tip" title="Learn in Stages">
          Start with the very easy combo. Once consistent, add the <code>SCR 4 T! → 2,1,3</code> 
          ender. Then add the <code>df+1</code> filler. Finally, upgrade to the optimal ender.
        </TipBox>
      </Section>

      <Section title="Combo Enders">
        <KeyConcept title="Damage vs Carry vs Oki" icon="🎯">
          <ul>
            <li><strong>For Damage</strong>: <code>uf+1 → b+1:1+2</code> (just frame, hard)</li>
            <li><strong>For Wall Carry</strong>: <code>df+4,2 T!</code> / <code>df+1,4</code> / <code>f,f+3+4</code></li>
            <li><strong>For Wall Break</strong>: <code>f,f+4</code> / <code>df+1,4</code> / <code>df+1,2,1</code></li>
            <li><strong>For Floor Break</strong>: <code>1+2</code> / <code>MNT 1+2</code> / <code>TRT 3</code></li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Dash Combos">
        <KeyConcept title="Heat Dash Extension" icon="🔥">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            heat dash f+1+2~F → uf+1 → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1
          </p>
          <p style={{ marginTop: '12px' }}>
            After any heat engager that lands, you can heat dash into a full combo:
          </p>
          <ul>
            <li><code>SCR 2,1~F</code> → full combo</li>
            <li><code>MNT df+1~F</code> → full combo</li>
            <li><code>df+4,1~F</code> → full combo</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Low Parry Combo">
        <KeyConcept title="After Low Parry" icon="⬇️">
          <p style={{ fontFamily: 'monospace', fontSize: '14px', color: 'var(--accent)' }}>
            Low Parry → b+2 → df+1 → f+2,3,4
          </p>
          <p style={{ marginTop: '8px' }}>~45 damage. Simple and reliable.</p>
        </KeyConcept>
      </Section>

      <Collapsible title="Combo Quick Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Starter</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Route</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Damage</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>df+2</td>
                <td style={{ padding: '8px' }}>uf+1 → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~65</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>CH d+3</td>
                <td style={{ padding: '8px' }}>ws+3 → SCR 4 T! → 2,1,3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~52</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>CH f,f+3</td>
                <td style={{ padding: '8px' }}>SCR 2,1 (heat engage!)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>52</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>CH 1+2</td>
                <td style={{ padding: '8px' }}>3~B → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~68</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>SCR 4</td>
                <td style={{ padding: '8px' }}>T! → b+2 → df+1 → f+2,3,4</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~55</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Low Parry</td>
                <td style={{ padding: '8px' }}>b+2 → df+1 → f+2,3,4</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <TipBox variant="tip" title="Combo Practice Routine">
        <ol>
          <li>Practice <code>df+2</code> combo 10 times in a row</li>
          <li>Practice <code>CH d+3</code> combo 10 times</li>
          <li>Practice <code>CH f,f+3 → SCR 2,1</code> until it's second nature</li>
          <li>Set the dummy to random guard and practice confirms</li>
        </ol>
      </TipBox>
    </Chapter>
  )
}
