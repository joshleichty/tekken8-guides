import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Punishment"
      intro="Zafina's punishment is functional but has notable gaps. Knowing your options at each frame level is crucial — she has no 12f standing punish, making that range awkward."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Pressure & Mixups"
    >
      <Section title="Standing Punishment">
        <KeyConcept title="10f Punishes" icon="⚡">
          <ul>
            <li>
              <strong>1,3</strong> — 19 damage, goes to SCR at +7
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Your go-to 10f punish. Creates pressure opportunity.
              </p>
            </li>
            <li>
              <strong>1,4</strong> — 22 damage, goes to TRT at +8
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                More damage, enters Tarantula instead.
              </p>
            </li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="No 12f Standing Punish">
          Zafina has NO 12f standing punisher. For -11 and -12 moves, you must use 
          your 10f punishes (1,3 or 1,4). This is a significant weakness.
        </TipBox>

        <KeyConcept title="13f Punishes" icon="⚡">
          <ul>
            <li>
              <strong>df+1,4</strong> — 28 damage, wall splats
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Best 13f option. Near wall, leads to big damage.
              </p>
            </li>
            <li>
              <strong>df+4,1 (heat)</strong> — 36 damage, heat engages
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Use when you want heat instead of raw damage.
              </p>
            </li>
          </ul>
        </KeyConcept>

        <KeyConcept title="15f Punishes" icon="⚡">
          <ul>
            <li>
              <strong>df+3,4</strong> — 32 damage, knockdown
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Low-high string. Good damage with knockdown.
              </p>
            </li>
          </ul>
        </KeyConcept>

        <KeyConcept title="16f Launcher" icon="🚀">
          <ul>
            <li>
              <strong>df+2</strong> — Full combo (~65 damage)
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Your standing launcher. Launches crouchers too.
              </p>
            </li>
            <li>
              <strong>df+4,2 / df+4,1 (heat)</strong> — Alternative at 16f+
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                df+4,2 is tornado, df+4,1 is heat engager.
              </p>
            </li>
          </ul>
        </KeyConcept>

        <KeyConcept title="17f+ Launcher" icon="🚀">
          <ul>
            <li>
              <strong>uf+4</strong> — Full combo (~68 damage)
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Hopkick. Slightly more damage than df+2.
              </p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="While Standing Punishment">
        <KeyConcept title="10-11f WS Punishes" icon="⚡">
          <ul>
            <li>
              <strong>ws+4</strong> — 14 damage, +4 on hit
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Basic 11f WS punish.
              </p>
            </li>
          </ul>
        </KeyConcept>

        <KeyConcept title="12f WS Punish (THE GOOD ONE)" icon="⭐">
          <ul>
            <li>
              <strong>ws+3</strong> — 16 damage, +9 in SCR
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Zafina's BEST new tool in Tekken 8. 12f, goes to SCR at +9!
              </p>
            </li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="ws+3 is Amazing">
          ws+3 is one of Zafina's best moves. At 12f, it punishes most lows, and 
          on hit you're +9 in Scarecrow — prime mixup territory. Use this constantly.
        </TipBox>

        <KeyConcept title="15f WS Launcher" icon="🚀">
          <ul>
            <li>
              <strong>ws+1,2</strong> — Full combo (~63 damage)
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Excellent range. Use for big punishes.
              </p>
            </li>
          </ul>
        </KeyConcept>

        <KeyConcept title="18f+ WS Launcher" icon="🚀">
          <ul>
            <li>
              <strong>ws+2</strong> — Full combo, MNT transition option
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Can hold D to enter Mantis. Useful for specific situations.
              </p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Whiff Punishment">
        <KeyConcept title="Whiff Punishers" icon="🎯">
          <ul>
            <li>
              <strong>df+2</strong> — Main whiff punisher, excellent range
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                High crushes, launches crouchers. Your go-to.
              </p>
            </li>
            <li>
              <strong>df+1,4</strong> — Faster (13f), wall splats
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Use when df+2 would be too slow.
              </p>
            </li>
            <li>
              <strong>df+3,4</strong> — Long range knockdown
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Low-high, 15f, good reach.
              </p>
            </li>
            <li>
              <strong>ws+1,2</strong> — From crouch whiff punishment
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Amazing range. Use after duck or low crush.
              </p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Smash as Punishment">
        <KeyConcept title="Neutral Heat Smash (H.2+3)" icon="🔥">
          <ul>
            <li>
              <strong>12f startup</strong> — One of the fastest heat smashes
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Can punish -12 moves that standing punishes miss!
              </p>
            </li>
            <li>
              <strong>51 damage</strong> — Huge damage for a punish
              <p style={{ marginTop: '4px', color: 'var(--text-muted)', fontSize: '13px' }}>
                Worth using heat for big punishment situations.
              </p>
            </li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Smash for 12f">
          Remember: You have no 12f standing punish normally. But in heat, your heat 
          smash IS 12f. Save heat for situations where you can punish big moves.
        </TipBox>
      </Section>

      <Section title="Punishing Specific Moves">
        <Collapsible title="Matchup-Specific Punishes" icon="🎮" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Punish</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr>
                  <td style={{ padding: '8px' }}>Slide (generic)</td>
                  <td style={{ padding: '8px' }}>ws+3~B (float into combo)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Asuka b+3</td>
                  <td style={{ padding: '8px' }}>b+1:1+2</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Kazuya db+1,2</td>
                  <td style={{ padding: '8px' }}>b+1:1+2</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Ling AOP 3+4</td>
                  <td style={{ padding: '8px' }}>ws+3~B (float)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Leo b+1,4</td>
                  <td style={{ padding: '8px' }}>b+1+3 (parry 2nd hit)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Paul Deathfist</td>
                  <td style={{ padding: '8px' }}>1+2,4 (except max range)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Claudio f+2,2</td>
                  <td style={{ padding: '8px' }}>f,f+4 (long dash)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Heihachi f,f+2</td>
                  <td style={{ padding: '8px' }}>1+2,4</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>King JAG 4</td>
                  <td style={{ padding: '8px' }}>ws+2</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Alisa b+3+4,3+4</td>
                  <td style={{ padding: '8px' }}>df+2 (before 2nd hit)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Collapsible>
      </Section>

      <Collapsible title="Punishment Quick Reference" icon="📊" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Standing</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginBottom: '16px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frame</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Damage</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>10</td>
                <td style={{ padding: '8px' }}>1,3 / 1,4</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>19 / 22</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>11-12</td>
                <td style={{ padding: '8px' }}>1,3 / 1,4 (no 12f!)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>19 / 22</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>12 (heat)</td>
                <td style={{ padding: '8px' }}>Heat Smash</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>51</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>13</td>
                <td style={{ padding: '8px' }}>df+1,4 / df+4,1 (heat)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>28 / 36</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>15</td>
                <td style={{ padding: '8px' }}>df+3,4</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>32</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>16</td>
                <td style={{ padding: '8px' }}>df+2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~65</td>
              </tr>
            </tbody>
          </table>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>While Standing</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frame</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Damage</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>11</td>
                <td style={{ padding: '8px' }}>ws+4</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>14</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>12</td>
                <td style={{ padding: '8px' }}>ws+3</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>16 (+9 SCR)</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>15</td>
                <td style={{ padding: '8px' }}>ws+1,2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~63</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>18</td>
                <td style={{ padding: '8px' }}>ws+2</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>~60</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
