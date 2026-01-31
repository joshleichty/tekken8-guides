import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  ExecutionBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="The Electric Path"
      intro="The electric is Reina's highest-skill, highest-reward tool. This chapter is optional—you can play Reina effectively without it. But if you want to maximize her potential, here's how to master it."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Complete Reina"
    >
      <Section title="Do You Need the Electric?">
        <p>
          Let's be clear: <strong>you can reach high ranks without consistent electrics</strong>. 
          Reina's f,f+2 pressure, df+2 launcher, and stance game are enough to win.
        </p>

        <KeyConcept title="Electric vs No-Electric" icon="⚖️">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Without Electric</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>With Electric</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>df+2 for 15f punish</td>
                <td style={{ padding: '8px' }}>EWGF for 15f punish (more damage)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>df+2 for whiff punish</td>
                <td style={{ padding: '8px' }}>EWGF for whiff punish (even more damage)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>No +5 on block mid</td>
                <td style={{ padding: '8px' }}>EWGF is +5 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Heat gives auto-electric</td>
                <td style={{ padding: '8px' }}>Can use electric anytime</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="The Heat Workaround">
          In heat, Reina gets <strong>auto-electrics</strong>—no just-frame required. 
          If you struggle with the input, focus on activating heat early and use auto-electrics.
        </TipBox>
      </Section>

      <Section title="The Input">
        <MoveCard character="reina"
          videoId="f,n,d,df+2"
          move={{
            input: 'f,n,d,df:2 (EWGF)',
            hitLevel: ['h'],
            damage: '23',
            startup: 'i11~12',
            onBlock: '+5',
            onHit: '+35a',
            tags: ['High', 'Just Frame', 'Plus on Block', 'Launcher'],
            description: 'Electric Wind God Fist. +5 on block. Launches on hit. The king of moves.',
            notes: ['Just frame: press 2 same frame as df', 'Non-just-frame is -10 (punishable)', 'Best whiff punish in game']
          }}
          showVideo
        />

        <ExecutionBox title="EWGF Execution" icon="🎮">
          <p>The input is <code>f,n,d,df+2</code> with 2 pressed on the same frame as df.</p>
          
          <h4 style={{ color: 'var(--accent)', marginTop: '16px', marginBottom: '8px' }}>Step by Step:</h4>
          <ol>
            <li>Press <strong>forward</strong> briefly</li>
            <li>Return to <strong>neutral</strong> (let go)</li>
            <li>Press <strong>down</strong></li>
            <li>Press <strong>down-forward + 2</strong> on the SAME FRAME</li>
          </ol>

          <h4 style={{ color: 'var(--accent)', marginTop: '16px', marginBottom: '8px' }}>Common Mistakes:</h4>
          <ul>
            <li><strong>Getting WGF (not electric)</strong> — You pressed 2 late. Need 2 on same frame as df.</li>
            <li><strong>Getting crouch</strong> — You held down too long. Keep it brief.</li>
            <li><strong>Getting nothing</strong> — Motion wasn't clean. Practice the dash motion first.</li>
          </ul>
        </ExecutionBox>

        <TipBox variant="tip" title="The Sound Cue">
          A successful electric makes a distinct "electric" sound and has blue sparks. 
          Train your ear to recognize the difference between EWGF and regular WGF.
        </TipBox>
      </Section>

      <Section title="Electric War God Kick (EWGK)">
        <MoveCard character="reina"
          videoId="f,n,d,df+3"
          move={{
            input: 'f,n,d,df:3 (EWGK)',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i15~17',
            onBlock: '-9',
            onHit: '+13a',
            tags: ['Mid', 'Just Frame', 'Safe', 'CH Launcher'],
            description: 'Electric War God Kick. Safe mid (-9). Counter-hit launches.',
            notes: ['Just frame: press 3 same frame as df', 'Non-just-frame is -13 (punishable)', '4 chip damage on block']
          }}
          showVideo
        />

        <p>
          EWGK is a <strong>safe mid CH launcher</strong>. It's easier than EWGF because you have 
          more time to hit the just-frame window. Use it for oki (it hits grounded) and as a 
          CH fishing tool.
        </p>

        <KeyConcept title="EWGK vs EWGF" icon="⚔️">
          <ul>
            <li><strong>EWGF</strong> — High, +5 on block, always launches, harder input</li>
            <li><strong>EWGK</strong> — Mid, -9 on block, only CH launches, easier input</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="When to Use Electrics">
        <KeyConcept title="Electric Situations" icon="⚡">
          <ul>
            <li><strong>15f punishment</strong> — EWGF for max damage</li>
            <li><strong>Whiff punishment</strong> — EWGF is your best whiff punish</li>
            <li><strong>Oki</strong> — EWGK hits grounded and CH launches</li>
            <li><strong>Pressure</strong> — EWGF on block is +5</li>
            <li><strong>From stance cancel</strong> — Cancel SEN or WRA to WGS for electric</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Force It">
          If you can't land electrics consistently, don't force them. A dropped electric 
          (regular WGF) is -10 and punishable. Better to use df+2 reliably than EWGF inconsistently.
        </TipBox>
      </Section>

      <Section title="Practice: Electric Drills">
        <PracticeBox
          title="Raw Electric Drill"
          setup="Just practice the input from standing."
          tasks={[
            { id: 'ewgf-1', text: 'Get 10 EWGF in a row', detail: 'Listen for the electric sound', type: 'counter', target: 10 },
            { id: 'ewgf-2', text: 'Get 5 EWGK in a row', detail: 'Same input but with 3', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Punish Drill"
          setup="Record opponent doing a -15 move."
          tasks={[
            { id: 'punish-ewgf', text: 'Punish with EWGF 5 times in a row', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Stance Cancel Electric"
          setup="Practice canceling into electric from stance."
          tasks={[
            { id: 'cancel-1', text: 'SEN~df → EWGF 5 times', detail: 'From Sentai to electric', type: 'counter', target: 5 },
            { id: 'cancel-2', text: 'WRA~df → EWGF 5 times', detail: 'From WRA to electric', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="Patience">
          Electric execution takes time. Don't rush it. Many players spend weeks or months 
          getting consistent electrics. The rest of Reina's kit is strong enough while you learn.
        </TipBox>
      </Section>

      <Collapsible title="Electric Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>EWGF (f,n,d,df:2)</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li>i11-12 startup, high</li>
            <li>+5 on block</li>
            <li>Launches on hit</li>
            <li>Non-just-frame is -10</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>EWGK (f,n,d,df:3)</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li>i15-17 startup, mid</li>
            <li>-9 on block (safe)</li>
            <li>Only launches on CH</li>
            <li>Non-just-frame is -13</li>
            <li>Hits grounded</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
