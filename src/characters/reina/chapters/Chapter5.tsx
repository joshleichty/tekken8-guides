import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  StanceBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="The Stance Web"
      intro="You've learned Sentai and Heaven's Wrath separately. Now it's time to see them as they really are: a connected web where every stance flows into every other. This is where Reina's complexity becomes power."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Neutral Tools"
    >
      <Section title="The Full Picture">
        <p>
          Reina has more stances than just Sentai and Heaven's Wrath. She has <strong>Unsoku</strong>{' '}
          (evasive stances), <strong>Fuki</strong> (crouch stance), and <strong>Wind God Step</strong>.
          But here's the secret: they all connect.
        </p>

        <KeyConcept title="Reina's Stance Map" icon="🗺️">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px', fontSize: '1em' }}>SENTAI (SEN)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Entry:</span>{' '}
                  f+3, f,f+2~F, 1,1,2, df+1~F, f+2,3~F, ws+1
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Exits to:</span>{' '}
                  WRA (via SEN 1+2, SEN 2~D) · WGS (via df) · Neutral (via db)
                </div>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-secondary)',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px', fontSize: '1em' }}>HEAVEN'S WRATH (WRA)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Entry:</span>{' '}
                  d+1+2, SEN 1+2, SEN 2~D, df+4,2~D, ws+4,4~D, WGS.df+4,2~D, f,f,F+4~D
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Exits to:</span>{' '}
                  SEN (via f+3, WRA 1~F) · WGS (via df) · Neutral (via db)
                </div>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-secondary)',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px', fontSize: '1em' }}>UNSOKU (UNS)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Entry:</span>{' '}
                  b+3, d+3, u+3 (Gen/Kou variations)
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Exits to:</span>{' '}
                  SEN (via f+3) · WGS (via df) · Neutral (via db)
                </div>
              </div>
            </div>

            <div style={{
              background: 'var(--bg-secondary)',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '10px', fontSize: '1em' }}>WIND GOD STEP (WGS)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Entry:</span>{' '}
                  f,n,d,df (crouch dash), df+3 (easy mode), stance~df
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Options:</span>{' '}
                  Electric · Hell sweep · WGS 1 series · Thunder Godfist
                </div>
              </div>
            </div>
          </div>
        </KeyConcept>
      </Section>

      <Section title="Unsoku — The Evasive Stances">
        <p>
          Unsoku refers to three related stances accessed via <code>b+3</code>, <code>d+3</code>, 
          or <code>u+3</code>. They have similar properties: evasion, a punch parry window, and 
          one devastating option.
        </p>

        <StanceBox name="Unsoku (Gen)" input="b+3" icon="🌀">
          <p>
            Back-stepping stance. Most commonly used for its evasion and UNS 4.
          </p>
        </StanceBox>

        <MoveCard character="reina"
          videoId="UNS.4"
          move={{
            input: 'UNS 4 (from any Unsoku)',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i18~19',
            onBlock: '-8',
            onHit: '+43a',
            tags: ['Mid', 'Heat Engager', 'Safe', 'Huge Range', 'High Crush'],
            description: 'Safe mid heat engager with MASSIVE range. High crushes. Launches on heat dash.',
            notes: ['6 chip damage', 'High crush 6~16', 'Can cancel to crouch with db/d/df']
          }}
          showVideo
        />

        <p>
          <strong>UNS 4 is one of Reina's best moves</strong>. Safe mid, huge range, high crushes, 
          heat engager. Use it from max range to whiff punish or as a keepout tool.
        </p>

        <KeyConcept title="Unsoku Properties" icon="💨">
          <ul>
            <li><strong>b+3 (Gen)</strong> — Steps back, best for spacing/whiff punishment</li>
            <li><strong>d+3 (Kou)</strong> — Has punch parry frames 5~12</li>
            <li><strong>u+3 (Kou)</strong> — Also has punch parry frames 5~12</li>
            <li><strong>All three</strong> — Can chain into each other, cancel to WGS, or do UNS 4</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Back Dash Chain">
          Reina can chain b+3 → b+3 → b+3... for an extended evasive backdash. During any of 
          these, you can throw out UNS 4 to whiff punish. This is her main defensive tool.
        </TipBox>
      </Section>

      <Section title="Wind God Step — The Mishima Core">
        <p>
          Wind God Step (WGS) is the crouch dash motion (<code>f,n,d,df</code>). From here, 
          Reina has access to her Mishima tools: electric, hell sweep, and more.
        </p>

        <KeyConcept title="WGS Options" icon="⚡">
          <ul>
            <li><strong>WGS 2 (Electric)</strong> — +5 on block just-frame, launcher on hit</li>
            <li><strong>WGS 3 (EWGK)</strong> — -9 on block just-frame, CH launcher</li>
            <li><strong>WGS df+4 (Hell Sweep)</strong> — Low starter for WRA mixups</li>
            <li><strong>WGS 1 (Thunder Godfist)</strong> — Series with extensions</li>
          </ul>
        </KeyConcept>

        <MoveCard character="reina"
          videoId="df+4,2"
          move={{
            input: 'WGS.df+4,2~D',
            hitLevel: ['l', 'h'],
            damage: '6, 20',
            startup: 'i16',
            onBlock: '-15',
            onHit: '+6 (WRA)',
            tags: ['Low', 'High', 'WRA Transition', 'Mixup Tool'],
            description: 'Hell sweep variant that enters Heaven\'s Wrath on hit. Your main low mixup.',
            notes: ['Hold D to enter WRA at +6 on hit', '-15 on block (punishable)', 'High crushes']
          }}
          showVideo
        />

        <p>
          This is your <strong>main low option</strong>. It's still punishable, but on hit you 
          get +6 in Heaven's Wrath—which lets you loop pressure.
        </p>

        <TipBox variant="warning" title="Easy Mode WGS">
          If you can't do crouch dash consistently, use <code>df+3</code>. This gives you 
          a simplified Wind God Step. You lose the electric, but get easy access to hell sweep 
          and other WGS options.
        </TipBox>
      </Section>

      <Section title="The Connection Points">
        <p>
          Here's how everything links together:
        </p>

        <Flowchart 
          title="Stance Transition Map"
          nodes={[
            { type: 'start', label: 'Neutral (Standing)' },
            { type: 'decision', label: 'Enter via...', branches: [
              { label: 'f,f+2~F, 1,1,2, df+1~F', action: '→ SENTAI' },
              { label: 'd+1+2, df+4,2~D', action: '→ HEAVEN\'S WRATH' },
              { label: 'b+3, d+3, u+3', action: '→ UNSOKU' },
              { label: 'f,n,d,df (crouch dash)', action: '→ WIND GOD STEP' }
            ]}
          ]}
        />

        <KeyConcept title="From Any Stance, You Can..." icon="🔄">
          <ul>
            <li><strong>Go to WGS</strong> — Press df from any stance to cancel into crouch dash</li>
            <li><strong>Go to SEN</strong> — Press f+3 from WRA or UNS</li>
            <li><strong>Go to WRA</strong> — SEN 1+2, SEN 2~D, or WGS.df+4,2~D</li>
            <li><strong>Go to Neutral</strong> — Press db to cancel any stance</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Practical Flow Patterns">
        <p>
          Here are some common patterns that show how stances flow together:
        </p>

        <KeyConcept title="Pattern 1: The Approach Loop" icon="1️⃣">
          <code>f,f+2~F → SEN 3 (or SEN 4)</code>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            Your bread and butter. Approach, get plus, pressure. If SEN 3 is blocked, 
            you're +1—jab or continue. If SEN 4 is blocked, you're +4—stronger follow-ups.
          </p>
        </KeyConcept>

        <KeyConcept title="Pattern 2: The Stance Chain" icon="2️⃣">
          <code>f,f+2~F → SEN 1+2 → WRA 2</code>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            Enter Sentai, transition to WRA with SEN 1+2, then heat engage with WRA 2. 
            On hit, SEN 1+2 gives tornado into combo. On block, you're in WRA at -6 
            but with options.
          </p>
        </KeyConcept>

        <KeyConcept title="Pattern 3: The Low Mixup" icon="3️⃣">
          <code>WGS.df+4,2~D → WRA 3,4~D → WRA 2</code>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            Hit the hell sweep, enter WRA at +6, do the +6 on block WRA 3,4, stay in WRA 
            at +8, then heat engage. This is your wall pressure pattern.
          </p>
        </KeyConcept>

        <KeyConcept title="Pattern 4: The Evasive Counter" icon="4️⃣">
          <code>b+3 (backdash) → b+3 → UNS 4</code>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            Chain evasive backdashes to create space. When opponent whiffs, punish with 
            the massive range UNS 4. Can also cancel into WGS for electric if you have 
            the execution.
          </p>
        </KeyConcept>
      </Section>

      <Section title="When to Use Each Stance">
        <KeyConcept title="Stance Selection Guide" icon="🎯">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Best Stance</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Why</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Approaching</td>
                <td style={{ padding: '8px' }}><code>SEN (via f,f+2)</code></td>
                <td style={{ padding: '8px' }}>Plus on block, best entry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Close pressure</td>
                <td style={{ padding: '8px' }}><code>SEN</code></td>
                <td style={{ padding: '8px' }}>Most options, good frame traps</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Wall pressure</td>
                <td style={{ padding: '8px' }}><code>WRA</code></td>
                <td style={{ padding: '8px' }}>Unbreakable grab, chip loops</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Low mixup needed</td>
                <td style={{ padding: '8px' }}><code>WGS</code></td>
                <td style={{ padding: '8px' }}>Hell sweep → WRA</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Defense/keepout</td>
                <td style={{ padding: '8px' }}><code>UNS</code></td>
                <td style={{ padding: '8px' }}>Evasion, UNS 4 range</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Whiff punishing</td>
                <td style={{ padding: '8px' }}><code>UNS</code> or <code>WGS</code></td>
                <td style={{ padding: '8px' }}>UNS 4 range or Electric</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Activating heat</td>
                <td style={{ padding: '8px' }}><code>SEN</code> or <code>WRA</code></td>
                <td style={{ padding: '8px' }}>SEN 3 or WRA 2</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="Practice: Flowing Between Stances">
        <PracticeBox
          title="Transition Drill"
          setup="Start in neutral. Practice flowing through stances."
          tasks={[
            { id: 'flow-1', text: 'f,f+2~F → SEN 1+2 → WRA 2 (5 times)', detail: 'SEN to WRA to heat engager', type: 'counter', target: 5 },
            { id: 'flow-2', text: 'b+3 → b+3 → UNS 4 (5 times)', detail: 'Evasive chain to whiff punish', type: 'counter', target: 5 },
            { id: 'flow-3', text: 'WGS.df+4,2~D → WRA 3,4~D → WRA 2 (5 times)', detail: 'Hell sweep loop', type: 'counter', target: 5 },
            { id: 'flow-4', text: 'SEN~df → WGS 2 (electric) (5 times)', detail: 'Cancel SEN to electric', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="Don't Overthink">
          You don't need to master all transitions immediately. Focus on SEN and f,f+2 for now. 
          The other stances are tools to add later as you get comfortable.
        </TipBox>
      </Section>

      <Collapsible title="Complete Stance Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Sentai (SEN) - f+3</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Main offensive stance. Enter via f,f+2~F for plus frames.
          </p>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Heaven's Wrath (WRA) - d+1+2</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Power stance. Enter via SEN 1+2, df+4,2~D, or hell sweep.
          </p>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Unsoku (UNS) - b+3, d+3, u+3</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Evasive stances. Use b+3 chains for defense, UNS 4 for keepout.
          </p>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Wind God Step (WGS) - f,n,d,df or df+3</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Mishima crouch dash. Electric, hell sweep, and more.
          </p>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Fuki - 1+4</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Crouch stance with high crush. Can instant electric from here. Advanced.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
