import { Chapter, Section } from '../../../components/guide'
import {
  KeyConcept,
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="The Complete Lars"
      intro="You have the tools. You have the knowledge. Now it's time to put it all together. This final chapter gives you the mental framework to play Lars at his full potential — and keep growing beyond this guide."
      onPrevious={() => goToChapter(10)}
      hasPrevious={true}
    >
      <Section title="The Momentum Toggle">
        <p>
          Lars has two modes, and the best Lars players toggle between them fluidly:
        </p>

        <KeyConcept title="Aggressive Mode" icon="⚔️">
          <ul>
            <li>Approach with DEN 3 or fff+1/fff+3</li>
            <li>Enter stances and force mixups</li>
            <li>Use frame traps to counter-hit mashers</li>
            <li>Apply the LEN 50/50 off punishment</li>
            <li>In heat: Rebellion and Heat Stomp pressure</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            <strong>When to use:</strong> Against passive opponents, at the start of matches, 
            when you have life lead, when opponent is respecting you.
          </p>
        </KeyConcept>

        <KeyConcept title="Defensive Mode" icon="🛡️">
          <ul>
            <li>Poke with df+1, 1,2, db+2,1</li>
            <li>Backdash and whiff punish with f+1+2</li>
            <li>Counter-hit fish with b+4 and FC df+2</li>
            <li>Keep out with b+3,4, df+3,3, b+1</li>
            <li>Wait for mistakes → punish → regain momentum</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            <strong>When to use:</strong> Against aggressive opponents, when your stances are 
            getting interrupted, when you need to gather information.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The Toggle Is Everything">
          The sign of a strong Lars player isn't how good their stances are — it's how 
          smoothly they switch between aggression and defense. You should be uncomfortable 
          staying in one mode for too long. If you've been aggressive for 10 seconds, 
          consider pulling back. If you've been defensive, consider going in.
        </TipBox>
      </Section>

      <Section title="Game Plan by Situation">
        <KeyConcept title="Round Start" icon="🎬">
          <ul>
            <li><strong>Safe options:</strong> Backdash, df+1, 1,2</li>
            <li><strong>Risky but rewarding:</strong> DEN 3 (catches approach), b+4 (CH fish)</li>
            <li><strong>Read-based:</strong> db+4 (high crush), uf+3+4,4 (evasive)</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="You Scored a Knockdown" icon="📍">
          <ul>
            <li>Run up → DEN 3 (catches anything they do standing up)</li>
            <li>ss+2 follow-up → DEN 3+4 (if they stay grounded)</li>
            <li>Meaty d+2 → crouch pressure on block</li>
            <li>Wait and whiff punish their wake-up attack</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="You're Losing — Comeback Plan" icon="🔥">
          <ol>
            <li>Don't panic. One correct punish → 2,1 → LEN → heat activation can swing a round.</li>
            <li>Block more. Lars' punishment REWARDS good defense.</li>
            <li>Save heat for the right moment — H.LEN 2 combo off a single punish can do 80+ damage.</li>
            <li>Use b+4 — 55 unrecoverable damage from a safe mid can steal rounds.</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="You're Winning — Close It Out" icon="👑">
          <ul>
            <li>Don't get greedy. Safe pokes (df+1, db+2,1) chip them down.</li>
            <li>Use tracking moves — desperate opponents sidestep wildly.</li>
            <li>Punish their desperation moves. They'll take risks — be ready.</li>
            <li>At the wall with health lead, just poke. They have to come to you.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Common Mistakes to Avoid">
        <KeyConcept title="The Lars Player's Pitfalls" icon="🚫">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Mistake</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Fix</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Going to LEN on blocked 2,1</td>
                <td style={{ padding: '8px' }}>Only go to LEN when 2,1 HITS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Spamming uf+3 (Lightning Screw)</td>
                <td style={{ padding: '8px' }}>Use it sparingly. -26 is death.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Always using the same SEN option</td>
                <td style={{ padding: '8px' }}>Read your opponent and vary options</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Not punishing with f,b+2,1 at -14</td>
                <td style={{ padding: '8px' }}>Drill it. Free combo every time.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Playing only aggressive or only defensive</td>
                <td style={{ padding: '8px' }}>Toggle between modes based on opponent</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Wasting heat on random activation</td>
                <td style={{ padding: '8px' }}>Activate heat purposefully for maximum pressure</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Not using b+1 against steppers</td>
                <td style={{ padding: '8px' }}>Lars is linear. b+1 is your lifeline.</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="The Growth Path">
        <p>
          Here's what to focus on at each stage of your journey:
        </p>

        <KeyConcept title="Stage 1: Foundation (Beginner → Warrior)" icon="🌱">
          <ul>
            <li>Master 2,1 → LEN mixup on hit</li>
            <li>Learn basic punishment (10f, 12f, 15f)</li>
            <li>Use df+1 and 1,2 for poking</li>
            <li>Learn one beginner combo from each starter</li>
            <li>Use DEN 3 → SEN 1 as your main approach</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Stage 2: Expansion (Warrior → Fujin)" icon="🌿">
          <ul>
            <li>Master f,b+2,1 (14f launcher) — this is the priority</li>
            <li>Learn to read opponents in stances</li>
            <li>Implement counter-hit tools (db+4, b+4, FC df+2)</li>
            <li>Upgrade to intermediate combos</li>
            <li>Use heat effectively</li>
            <li>Practice backdash → whiff punish</li>
            <li>Stop going to LEN on blocked 2,1</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Stage 3: Mastery (Fujin → God)" icon="🌳">
          <ul>
            <li>Perfect the momentum toggle (offense ↔ defense)</li>
            <li>Stance canceling and advanced movement</li>
            <li>Matchup-specific knowledge</li>
            <li>Optimal combos for every situation</li>
            <li>Heat management and stance regeneration</li>
            <li>Reading opponent timing for b+4 and dash blocking</li>
            <li>Watch top Lars players and study their decisions</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Resources for Continued Learning">
        <KeyConcept title="How to Keep Improving" icon="📚">
          <ul>
            <li><strong>Watch top players</strong> — Study how they toggle between offense and defense. 
            Note when they go for stances vs when they poke.</li>
            <li><strong>Practice before you play</strong> — Spend 10-15 minutes on punishment, 
            combos, and stance transitions before entering ranked.</li>
            <li><strong>Record your matches</strong> — Watch replays and note what you got hit by. 
            Go to practice mode and lab the answers.</li>
            <li><strong>Accept the process</strong> — You won't be a pro in a few weeks. 
            But every session makes you better. The key is consistency.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Final Word">
        <TipBox variant="tip" title="The Lion's Creed">
          Lars Alexandersson doesn't give you second chances. He punishes your mistakes, 
          enters his stances, and forces you to guess until you break.
          <br/><br/>
          But the best Lars players know something else: they know when to wait. 
          When to let the opponent come to them. When to back off and let the fear 
          of the stance chain do the work.
          <br/><br/>
          Aggression without patience is recklessness. Patience without aggression is passivity. 
          The Lion of the Rebellion masters both.
          <br/><br/>
          <strong>Now go take your turn.</strong>
        </TipBox>
      </Section>

      <Collapsible title="Complete Quick Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Core Moves</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
            <tbody style={{ color: 'var(--text-secondary)', fontSize: '0.85em' }}>
              <tr><td style={{ padding: '4px' }}><code>2,1</code></td><td style={{ padding: '4px' }}>10f punish → LEN mixup</td></tr>
              <tr><td style={{ padding: '4px' }}><code>f,b+2,1</code></td><td style={{ padding: '4px' }}>14f LAUNCHER</td></tr>
              <tr><td style={{ padding: '4px' }}><code>f+1+2</code></td><td style={{ padding: '4px' }}>15f launcher / whiff punish</td></tr>
              <tr><td style={{ padding: '4px' }}><code>df+1</code></td><td style={{ padding: '4px' }}>Primary poke + extensions</td></tr>
              <tr><td style={{ padding: '4px' }}><code>b+1</code></td><td style={{ padding: '4px' }}>Homing mid, CH knockdown</td></tr>
              <tr><td style={{ padding: '4px' }}><code>b+4</code></td><td style={{ padding: '4px' }}>Safe CH knee (55 unrecoverable)</td></tr>
              <tr><td style={{ padding: '4px' }}><code>db+4</code></td><td style={{ padding: '4px' }}>High crush low, CH launcher</td></tr>
              <tr><td style={{ padding: '4px' }}><code>DEN 3</code></td><td style={{ padding: '4px' }}>Homing approach, +5 → SEN</td></tr>
            </tbody>
          </table>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Punishment</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
            <tbody style={{ color: 'var(--text-secondary)', fontSize: '0.85em' }}>
              <tr><td style={{ padding: '4px' }}>i10</td><td style={{ padding: '4px' }}><code>2,1</code> → LEN</td></tr>
              <tr><td style={{ padding: '4px' }}>i12</td><td style={{ padding: '4px' }}><code>f+2,4</code></td></tr>
              <tr><td style={{ padding: '4px' }}>i14</td><td style={{ padding: '4px' }}><code>f,b+2,1</code> LAUNCH</td></tr>
              <tr><td style={{ padding: '4px' }}>i15</td><td style={{ padding: '4px' }}><code>f+1+2</code> LAUNCH</td></tr>
              <tr><td style={{ padding: '4px' }}>WS i13</td><td style={{ padding: '4px' }}><code>ws+2,3~D</code> → LEN</td></tr>
              <tr><td style={{ padding: '4px' }}>WS i15</td><td style={{ padding: '4px' }}><code>ws+1</code> LAUNCH</td></tr>
            </tbody>
          </table>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Stance Options</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody style={{ color: 'var(--text-secondary)', fontSize: '0.85em' }}>
              <tr><td style={{ padding: '4px', color: 'var(--accent)' }}>DEN</td><td style={{ padding: '4px' }}>3 (approach), 2 (CH mid), 1,2 (heat), 1 (jab)</td></tr>
              <tr><td style={{ padding: '4px', color: 'var(--accent)' }}>SEN</td><td style={{ padding: '4px' }}>1 (safe heat), 2 (low), 3 (launcher), 4 (homing)</td></tr>
              <tr><td style={{ padding: '4px', color: 'var(--accent)' }}>LEN</td><td style={{ padding: '4px' }}>1 (low), 2 (mid). That's it. Simple.</td></tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
