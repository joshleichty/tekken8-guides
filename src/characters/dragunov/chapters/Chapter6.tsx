import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible,
  StanceBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Sneak Stance"
      intro="Sneak (SNK) is Dragunov's crouch dash — a movement option that gives access to powerful launchers, mixups, and pressure tools. Mastering Sneak separates good Dragunovs from great ones."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Learn Full Crouch Mix"
    >
      <Section title="What is Sneak?">
        <StanceBox
          name="Sneak (SNK)"
          input="qcf (d, df, f)"
          icon="🐍"
        >
          <p>Dragunov's crouch dash stance. Gives access to launchers and mixups. Can also be entered by holding df after certain moves.</p>
          <ul style={{ marginTop: '8px' }}>
            <li>Automatically transitions to standing if no button pressed</li>
            <li>Cancel to sidestep with u</li>
            <li>Can input FC moves during Sneak</li>
          </ul>
        </StanceBox>

        <p>
          Sneak is accessed by doing a <span className="highlight">quarter circle forward</span> 
          (d, df, f) — commonly written as <code>qcf</code>. From Sneak, you have access to 
          launchers, mids, lows, and can transition into crouch throws.
        </p>

        <KeyConcept title="Sneak Access Methods" icon="🐍">
          <ul>
            <li><strong>qcf</strong> — Raw crouch dash input</li>
            <li><strong>2,1~df</strong> — Hold df after 2,1 hit</li>
            <li><strong>b+4,2~df</strong> — Hold df after b+4,2</li>
            <li><strong>f+3~df</strong> — Hold df after f+3</li>
            <li><strong>ws+1~df</strong> — Hold df after ws+1</li>
            <li><strong>3,1~df</strong> — Hold df after 3,1</li>
            <li><strong>FC df+1,4</strong> — Automatically enters Sneak on hit</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="SNK 1 (qcf+1) — Safe High Launcher">
        <MoveCard character="dragunov"
          videoId="SNK.1"
          move={{
            input: 'qcf+1',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i15-16',
            onBlock: '-8',
            onHit: '+51a (Launch!)',
            tags: ['High', 'Launcher', 'Safe', 'Whiff Punish'],
            description: 'Safe high launcher. Dragunov\'s "electric" equivalent. Great for whiff punishment.',
          }}
          showVideo
        />

        <p>
          qcf+1 is Dragunov's <span className="highlight">fast, safe launcher</span>. Think of it 
          like a Mishima's Electric — it's quick (i15-16), safe on block (-8), and launches for 
          full combo on hit.
        </p>

        <KeyConcept title="qcf+1 Uses" icon="⚡">
          <ul>
            <li><strong>Whiff punishment</strong> — React to their whiff with qcf+1 for launch</li>
            <li><strong>From 2,1 hit</strong> — After 2,1~df, qcf+1 is guaranteed to beat slow responses</li>
            <li><strong>Pressure tool</strong> — -8 means you're safe, reset to neutral</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="It's a High">
          qcf+1 is a high, so it can be ducked. Don't spam it in pressure. Use it primarily 
          for whiff punishment and as an option from Sneak mixups.
        </TipBox>
      </Section>

      <Section title="SNK 2 (qcf+2) — Mid Launcher">
        <MoveCard character="dragunov"
          videoId="SNK.2"
          move={{
            input: 'qcf+2',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i18-19',
            onBlock: '-14',
            onHit: '+36a (Launch!)',
            tags: ['Mid', 'Launcher', 'Tornado', 'Evasive'],
            description: 'Mid launcher with some evasion. Risky but rewarding. -14 on block.',
          }}
          showVideo
        />

        <p>
          qcf+2 is Dragunov's <span className="highlight">mid launcher from Sneak</span>. It's 
          slower than qcf+1 and punishable (-14), but it's a mid that can evade some highs.
        </p>

        <KeyConcept title="qcf+2 Uses" icon="🎯">
          <ul>
            <li><strong>From f+3~df</strong> — f+3 into SNK 2 can duck jabs</li>
            <li><strong>Mix with SNK 3</strong> — Mid/low mix from Sneak</li>
            <li><strong>Whiff punishment</strong> — When qcf+1 would whiff but qcf+2 reaches</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="-14 Means Launch Punish">
          qcf+2 is launch punishable on block for most characters. Use it when you have a read 
          or in mix situations, not randomly.
        </TipBox>
      </Section>

      <Section title="SNK 3 (qcf+3) — Sneak Low">
        <MoveCard character="dragunov"
          videoId="SNK.3"
          move={{
            input: 'qcf+3',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i17-18',
            onBlock: '-16',
            onHit: '+0 (throw on CH)',
            onCH: '+1d (throw)',
            tags: ['Low', 'High Crush', 'CH Throw'],
            description: 'Sneak low poke. Leads to throw on counter-hit. High crushes.',
          }}
          showVideo
        />

        <p>
          qcf+3 is the <span className="highlight">low option from Sneak</span>. It's slower and 
          riskier than d+2, but it high crushes and leads to a throw animation on counter-hit.
        </p>

        <KeyConcept title="qcf+3 Properties" icon="🦵">
          <ul>
            <li><strong>High crush</strong> — Goes under jabs during Sneak</li>
            <li><strong>CH throw</strong> — Counter-hit leads to automatic throw</li>
            <li><strong>Mix with qcf+2</strong> — Low/mid mix from Sneak</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Use Sparingly">
          qcf+3 is -16 on block, which is launch punishable. The main value is as a mix option 
          from Sneak when you're plus, not as a standalone poke.
        </TipBox>
      </Section>

      <Section title="SNK 4 (qcf+4) — The Plus Frame Mid">
        <MoveCard character="dragunov"
          videoId="SNK.4"
          move={{
            input: 'qcf+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i19-20',
            onBlock: '+7c',
            onHit: '+8c',
            tags: ['Mid', 'Heat Engager', 'Plus on Block', 'Hits Grounded'],
            description: 'Plus on block heat engager. One of Dragunov\'s best moves.',
          }}
          showVideo
        />

        <p>
          We covered qcf+4 in the Plus Frame chapter, but it bears repeating: 
          <span className="highlight">this move is incredible</span>. +7 on block in crouch, 
          heat engager, hits grounded. Use it constantly.
        </p>
      </Section>

      <Section title="SNK 3+4 (qcf+3+4) — Power Crush">
        <MoveCard character="dragunov"
          videoId="SNK.3+4"
          move={{
            input: 'qcf+3+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i17-18',
            onBlock: '-13',
            onHit: '+27g (KND)',
            tags: ['Mid', 'Power Crush', 'Evasive'],
            description: 'Sneak power crush. Absorbs hits and transitions to knee assault on absorb.',
          }}
          showVideo
        />

        <p>
          qcf+3+4 is a <span className="highlight">power crush from Sneak</span>. It absorbs 
          attacks and can transition into a knee assault on successful absorb.
        </p>

        <TipBox variant="tip" title="Panic Option">
          When you're getting pressured and need to get out, qcf+3+4 can absorb their attack. 
          However, it's -13 on block, so use wisely.
        </TipBox>
      </Section>

      <Section title="Sneak Transitions">
        <p>
          The real power of Sneak comes from transitioning into it after moves on hit:
        </p>

        <KeyConcept title="2,1 → Sneak" icon="🔄">
          <p>After 2,1 hits (+8), hold df to enter Sneak. From here:</p>
          <ul>
            <li><strong>qcf+4</strong> — Safe mid, +7c on block</li>
            <li><strong>qcf+1</strong> — Safe high launcher, beats slow responses</li>
            <li><strong>qcf+3</strong> — Low mix option</li>
            <li><strong>Crouch throw</strong> — If they freeze</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="f+3 → Sneak" icon="🔄">
          <p>f+3 is a safe (0 on block in SNK) mid that goes into Sneak. Options:</p>
          <ul>
            <li><strong>qcf+2</strong> — Can evade jabs, launches</li>
            <li><strong>qcf+4</strong> — Safe option</li>
            <li><strong>qcf+1</strong> — Fast launcher option</li>
            <li><strong>Crouch cancel → throw</strong> — Sneaky option</li>
          </ul>
        </KeyConcept>

        <MoveCard character="dragunov"
          move={{
            input: 'f+3',
            hitLevel: ['m'],
            damage: '11',
            startup: 'i20',
            onBlock: '-6 (0 in SNK)',
            onHit: '+5 (+11 in SNK)',
            tags: ['Mid', 'Safe', 'SNK Transition'],
            description: 'Long range mid that goes into Sneak. Gateway to mixups.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="f+3 is Your Approach Tool">
          f+3~df is like a mini WR+2. It's safe, goes into Sneak, and from there you have 
          mixups. Use it when WR+2 is too risky or you're at awkward range.
        </TipBox>
      </Section>

      <Section title="Sneak Cancels">
        <p>
          You can cancel Sneak into sidestep or into standing:
        </p>

        <KeyConcept title="SNK Cancels" icon="❌">
          <ul>
            <li><strong>SNK → u</strong> — Sidestep up (left)</li>
            <li><strong>SNK → d</strong> — Sidestep down (right)</li>
            <li><strong>Just wait</strong> — SNK automatically becomes standing</li>
            <li><strong>SNK → throw</strong> — Crouch throw (uf+1+2 from crouch)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Cancel Into Throw">
          One of the strongest options: f+3~df → crouch throw. You look like you're going for 
          a SNK mixup, but instead you just throw them. Works surprisingly often.
        </TipBox>
      </Section>

      <Section title="Putting It Together">
        <p>
          Here's how to use Sneak in your gameplan:
        </p>

        <KeyConcept title="The Sneak Flow" icon="🐍">
          <ol>
            <li><strong>Land 2,1</strong> — From poke or punish</li>
            <li><strong>Hold df</strong> — Enter Sneak (+8 advantage)</li>
            <li><strong>Test with qcf+4</strong> — Safe, plus on block</li>
            <li><strong>They respect?</strong> — Crouch throw or qcf+3 low</li>
            <li><strong>They attack?</strong> — qcf+1 beats their buttons</li>
            <li><strong>At the wall?</strong> — qcf+2 for launch splat</li>
          </ol>
        </KeyConcept>
      </Section>

      <Collapsible title="Sneak Frame Data" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>qcf+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15-16</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-8</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+51a</td>
                <td style={{ padding: '8px' }}>High launcher, safe</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>qcf+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18-19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+36a</td>
                <td style={{ padding: '8px' }}>Mid launcher, T!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>qcf+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17-18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-16</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+0</td>
                <td style={{ padding: '8px' }}>Low, CH throw</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>qcf+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19-20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+7c</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8c</td>
                <td style={{ padding: '8px' }}>Heat engager, plus</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>qcf+3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17-18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+27g</td>
                <td style={{ padding: '8px' }}>Power crush</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
