import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Pressure & Mixups"
      intro="Zafina's pressure comes from continuous stance transitions and plus frames. Your goal is to create hesitation — when opponents don't know what's coming, you control the match."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Wall Game"
    >
      <Section title="The Pressure Philosophy">
        <p>
          Zafina's pressure is about <span className="highlight">continuous options</span>. Unlike 
          characters who get one big mixup, you chain smaller mixups together until opponents make a mistake.
        </p>

        <KeyConcept title="The Core Loop" icon="🔄">
          <ol>
            <li><strong>Get plus frames</strong> — Via f,f+3, WR3, WR1+2, etc.</li>
            <li><strong>Enter stance</strong> — SCR, MNT, or TRT</li>
            <li><strong>Apply mixup</strong> — Mid vs low, with stance flow</li>
            <li><strong>If they block</strong> — Transition to another stance, continue pressure</li>
            <li><strong>If they press</strong> — Counter with CH moves or armor</li>
            <li><strong>Repeat</strong> — Keep the cycle going</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Plus Frame Tools">
        <KeyConcept title="Your Main Plus Frame Moves" icon="➕">
          <ul>
            <li>
              <strong>f,f+3</strong> — +4 on block (SCR), +9 on hit
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Your primary pressure starter. CH gives guaranteed SCR 2,1.</p>
            </li>
            <li>
              <strong>WR3</strong> — +7 on block (SCR)
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Running mid option. Great for closing distance.</p>
            </li>
            <li>
              <strong>WR1+2</strong> — +6 on block (TRT), +32a on hit
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Running high. On hit, TRT df+1 is guaranteed.</p>
            </li>
            <li>
              <strong>SCR 1+2</strong> — +6 on block (TRT)
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>From Scarecrow, goes to Tarantula plus.</p>
            </li>
            <li>
              <strong>MNT df+1</strong> — +10 on block (SCR)
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Heat engager that's plus! Great pressure tool.</p>
            </li>
            <li>
              <strong>TRT df+1</strong> — +6 on block
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>From Tarantula. Heat engager, exits stance.</p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Pressure Strings">
        <KeyConcept title="Basic Pressure Flowchart" icon="📋">
          <p style={{ fontFamily: 'monospace', fontSize: '13px', marginBottom: '12px' }}>
            f,f+3 (+4 SCR) → SCR 1+2 (+6 TRT) → TRT 3 → TRT df+1 (+6)
          </p>
          <p style={{ fontFamily: 'monospace', fontSize: '13px', marginBottom: '12px' }}>
            1,3 (+7 SCR) → SCR df+4 (+7 MNT) → MNT 1,3 (+9 SCR) → SCR 2,1 (heat)
          </p>
          <p style={{ fontFamily: 'monospace', fontSize: '13px' }}>
            d+3~D (+7 MNT) → MNT df+1 (+10 SCR) → SCR 1+2 (+6 TRT) → ...
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Mix It Up">
          Don't follow these flowcharts exactly. They're examples of how stances connect. 
          Mix in lows, cancel stances, go back to neutral — keep opponents guessing.
        </TipBox>
      </Section>

      <Section title="Counter-Hit Fishing">
        <p>
          Many of your best moves have <span className="highlight">counter-hit properties</span>. 
          When opponents respect your plus frames too much, fish for CH.
        </p>

        <KeyConcept title="Counter-Hit Tools" icon="💥">
          <ul>
            <li>
              <strong>1+2</strong> — CH launcher from neutral
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Great range, extensions protect from punishment.</p>
            </li>
            <li>
              <strong>f,f+3</strong> — CH +14, guarantees SCR 2,1
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>52 damage + heat. Your bread and butter.</p>
            </li>
            <li>
              <strong>d+3</strong> — CH launcher
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Low CH launcher. Punishes mashing.</p>
            </li>
            <li>
              <strong>MNT 3,1</strong> — CH launcher, safe low-mid
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Your best CH low. -9 on block.</p>
            </li>
            <li>
              <strong>MNT 2</strong> — CH launcher, 13f
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Fast CH fishing tool.</p>
            </li>
            <li>
              <strong>SCR df+4</strong> — CH launcher
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Low from Scarecrow that CH launches.</p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Dealing with Pressure">
        <p>
          When opponents try to interrupt your stance pressure, you have tools to punish them.
        </p>

        <KeyConcept title="Anti-Mash Tools" icon="🛡️">
          <ul>
            <li>
              <strong>SCR 4</strong> — Power crush from Scarecrow
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Absorbs attacks, launches. Very unsafe on block.</p>
            </li>
            <li>
              <strong>MNT 1+2</strong> — Power crush from Mantis
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Knockdown with guaranteed b+3.</p>
            </li>
            <li>
              <strong>b+3</strong> — Power crush from neutral
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Safe to use as a panic option.</p>
            </li>
            <li>
              <strong>Heat Azazel moves</strong> — Gain power crush in heat
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>SCR df+1, MNT df+1, TRT df+1 all gain armor.</p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Movement as Pressure">
        <p>
          Zafina's <span className="highlight">movement is a pressure tool</span>. Her backdash 
          creates whiff opportunities, and stance movement baits attacks.
        </p>

        <KeyConcept title="Movement Tactics" icon="🏃">
          <ul>
            <li>
              <strong>Backdash when minus</strong> — Make them whiff, punish with df+2 or ws+1,2
            </li>
            <li>
              <strong>SCR sidestep</strong> — Can evade linear attacks, then punish
            </li>
            <li>
              <strong>MNT dash</strong> — Close distance while evading highs
            </li>
            <li>
              <strong>TRT crawl</strong> — Goes under highs and some mids
            </li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Backdash Mentality">
          When in doubt, backdash. Zafina's backdash is one of the best in the game. 
          If you're minus, backdash. If they're pressing, backdash and whiff punish. 
          If you're unsure, backdash.
        </TipBox>
      </Section>

      <Section title="Conditioning Opponents">
        <p>
          Zafina's mixups get stronger when you <span className="highlight">condition opponents</span> 
          to expect certain options.
        </p>

        <KeyConcept title="Conditioning Examples" icon="🧠">
          <ul>
            <li>
              <strong>Do SCR 2,1 twice</strong> → They start ducking → <strong>SCR df+4 (low) CH launches</strong>
            </li>
            <li>
              <strong>Do MNT 1,3 twice</strong> → They stand block → <strong>MNT 3,1 (low) hits</strong>
            </li>
            <li>
              <strong>Do TRT 3 twice</strong> → They stand block → <strong>TRT 1 (low) hits</strong>
            </li>
            <li>
              <strong>Cancel stance often</strong> → They wait → <strong>Full commitment works</strong>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Pressure">
        <p>
          In heat, your pressure reaches its peak. The <span className="highlight">SCR heat smash 
          mixup</span> is terrifying.
        </p>

        <KeyConcept title="Heat Pressure Flowchart" icon="🔥">
          <ol>
            <li><strong>Activate heat</strong> — Via CH f,f+3 → SCR 2,1 (or other engager)</li>
            <li><strong>Get to SCR</strong> — Via f,f+3, 1,3, WR3, etc.</li>
            <li><strong>The mixup</strong>:
              <ul style={{ marginTop: '8px' }}>
                <li><strong>SCR Heat Smash</strong> — Low, ~41 damage (56 at wall)</li>
                <li><strong>SCR 2,1</strong> — Mid, 42 damage</li>
                <li><strong>SCR 1+2</strong> — Mid, +6 into TRT</li>
                <li><strong>SCR df+1</strong> — Mid launcher, now with armor</li>
              </ul>
            </li>
            <li><strong>If they block mid</strong> → Heat smash hits</li>
            <li><strong>If they duck</strong> → Mids launch them</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Waste Heat">
          Save heat for this mixup. Don't burn it on random Azazel moves. The SCR heat 
          smash 50/50 is too strong to miss.
        </TipBox>
      </Section>

      <Collapsible title="Pressure Quick Reference" icon="📊">
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Plus Frame Moves</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', marginBottom: '16px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Transition</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>f,f+3</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ padding: '8px' }}>SCR</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>WR3</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+7</td>
                <td style={{ padding: '8px' }}>SCR</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>WR1+2</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>TRT</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>SCR 1+2</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>TRT</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>MNT df+1</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+10</td>
                <td style={{ padding: '8px' }}>SCR</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>TRT df+1</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>Neutral</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
