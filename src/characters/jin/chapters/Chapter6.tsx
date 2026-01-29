import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="The Electric"
      intro="The Electric Wind Hook Fist (EWHF) is Jin's most famous move. It's +5 on block, launches on hit, and defines the Mishima playstyle. Here's everything you need to know."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="ZEN Stance"
    >
      <Section title="Understanding the Crouch Dash">
        <p>
          Before we talk about the Electric, you need to understand the <span className="highlight">Crouch Dash</span> — 
          the motion that all Mishima wave dash moves come from.
        </p>

        <KeyConcept title="The Crouch Dash Motion" icon="🕹️">
          <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>
            <code>f, n, d, df</code>
          </p>
          <p style={{ marginTop: '12px' }}>
            Forward → Neutral → Down → Down-forward
          </p>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            Think of it like a quarter circle that starts from forward, goes through neutral, 
            and ends at down-forward.
          </p>
        </KeyConcept>

        <p>
          The crouch dash puts Jin into a special animation where he crouches forward. From here, 
          you can do different moves by pressing buttons at the end.
        </p>
      </Section>

      <Section title="Wind God Fist vs Electric">
        <p>
          There are two versions of this move depending on your timing:
        </p>

        <MoveCard
          move={{
            input: 'f,n,d,df+2',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i11-12',
            onBlock: '-10',
            onHit: 'Launch',
            tags: ['High', 'Launcher', 'Minus on Block'],
            description: 'Wind God Fist — The "slow" version. Still launches, but -10 on block.',
          }}
          showVideo
        />

        <MoveCard
          move={{
            input: 'f,n,d,df:2',
            hitLevel: ['h'],
            damage: '25',
            startup: 'i11-12',
            onBlock: '+5',
            onHit: 'Launch',
            tags: ['High', 'Launcher', 'PLUS ON BLOCK', 'Just Frame'],
            description: 'Electric Wind Hook Fist (EWHF) — The "just frame" version. +5 on block!',
          }}
          showVideo
        />

        <KeyConcept title="The Difference" icon="⚡">
          <p>The <code>:</code> in <code>df:2</code> means <strong>just frame</strong> — you press 2 
          at the EXACT moment you hit df.</p>
          <ul style={{ marginTop: '12px' }}>
            <li><strong>Regular WGF</strong> — Press 2 slightly after df. -10 on block.</li>
            <li><strong>EWHF (Electric)</strong> — Press 2 exactly as you hit df. +5 on block!</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            You'll know you got the Electric by the <span className="highlight">blue spark</span> effect.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Why +5 Matters">
          Being +5 on block is insane for a high launcher. Most opponents can only duck 
          (risky — it's i11 so they have to predict) or power crush. If they press buttons, 
          your jab beats everything.
        </TipBox>
      </Section>

      <Section title="When to Use Electric">
        <p>
          The Electric is versatile. Here's where it shines:
        </p>

        <KeyConcept title="Electric Use Cases" icon="🎯">
          <ul>
            <li><strong>Whiff punishment</strong> — Opponent whiffs a move? Electric launches them.</li>
            <li><strong>After plus frames</strong> — After db+4 (+3), Electric is nearly uncontestable.</li>
            <li><strong>As pressure</strong> — +5 on block lets you continue pressure.</li>
            <li><strong>In combos</strong> — Extends damage significantly.</li>
            <li><strong>Keep out</strong> — Discourage approach from mid-range.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="It's a High">
          Electric can be ducked and launched. Don't spam it predictably. Mix it with mids 
          to discourage ducking.
        </TipBox>
      </Section>

      <Section title="Breaking Step — The Easy Electric">
        <p>
          Jin has a unique tool called <span className="highlight">Breaking Step</span> that makes 
          Electric easier to execute.
        </p>

        <KeyConcept title="Breaking Step (BRS)" icon="👁️">
          <p>
            <code>f+3+4</code> puts Jin into Breaking Step — his eyes glow red. From this stance:
          </p>
          <ul style={{ marginTop: '12px' }}>
            <li><code>BRS 2</code> = <strong>Electric</strong> (no just-frame required!)</li>
            <li><code>BRS 1</code> = CD.df+1 (the Tornado launcher)</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This lets you get guaranteed Electrics without the execution barrier.
          </p>
        </KeyConcept>

        <p>
          Several of Jin's moves transition into Breaking Step:
        </p>

        <ul>
          <li><code>df+3~3</code> — Fast mid → Breaking Step</li>
          <li><code>df+2~df</code> — Mid poke → Breaking Step</li>
          <li><code>ZEN 3+4~df</code> — Dive kick → Breaking Step</li>
          <li><code>ws1,3~3</code> — While standing string → Breaking Step</li>
        </ul>

        <TipBox variant="tip" title="Start Here">
          If you're struggling with the Electric execution, use Breaking Step transitions instead. 
          <code>df+3~3</code> into <code>BRS 2</code> gives you a guaranteed Electric with much 
          easier execution.
        </TipBox>
      </Section>

      <Section title="CD.df+1 — The Other Crouch Dash Move">
        <MoveCard
          move={{
            input: 'f,n,d,df+1',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16-17',
            onBlock: '-13',
            onHit: 'T! Launch',
            tags: ['Mid', 'Tornado', 'Launcher', 'High Crush'],
            description: 'Mid launcher that high crushes and gives Tornado. Key combo tool.',
          }}
          showVideo
        />

        <p>
          CD.df+1 is Jin's <span className="highlight">mid launcher</span> from crouch dash. Unlike 
          Electric (which is high), this hits crouching opponents. It's also a Tornado move.
        </p>

        <KeyConcept title="Electric vs CD1" icon="⚖️">
          <ul>
            <li><strong>Electric (CD.df:2)</strong> — High, +5 on block, more damage</li>
            <li><strong>CD1 (CD.df+1)</strong> — Mid, -13 on block, safer as a mixup</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            From crouch dash, you have a 50/50: Electric hits standing, CD1 hits ducking.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="-13 on Block">
          CD1 is launch punishable by many characters. Use it when you predict they'll duck 
          or when you need the Tornado for combos.
        </TipBox>
      </Section>

      <Section title="The Wave Dash">
        <p>
          <span className="highlight">Wave dashing</span> means canceling crouch dash repeatedly 
          to move forward while maintaining access to your mixups.
        </p>

        <KeyConcept title="Wave Dash Motion" icon="🌊">
          <p><code>f,n,d,df → f,n,d,df → f,n,d,df...</code></p>
          <p style={{ marginTop: '12px' }}>
            After the crouch dash, tap forward to cancel, then immediately do another crouch dash. 
            This lets you approach while threatening Electric or hellsweep.
          </p>
        </KeyConcept>

        <p>
          Wave dashing is optional for beginners. Focus on getting single crouch dashes first. 
          Once those are comfortable, you can work on chaining them together.
        </p>
      </Section>

      <Collapsible title="Electric Practice Tips" icon="🏋️" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Getting consistent Electrics takes practice. Here's how to approach it:
          </p>

          <p><strong>Step 1: Slow Motion</strong></p>
          <ul style={{ marginBottom: '16px' }}>
            <li>Do the motion SLOWLY: f → n → d → df+2</li>
            <li>Don't worry about speed yet</li>
            <li>Focus on hitting each direction cleanly</li>
          </ul>

          <p><strong>Step 2: Just Frame Timing</strong></p>
          <ul style={{ marginBottom: '16px' }}>
            <li>The key is pressing 2 EXACTLY as you hit df</li>
            <li>Think of df and 2 as one input</li>
            <li>Watch for the blue spark — that's the Electric</li>
          </ul>

          <p><strong>Step 3: Speed Up</strong></p>
          <ul style={{ marginBottom: '16px' }}>
            <li>Gradually increase speed while maintaining the timing</li>
            <li>Speed without accuracy is useless</li>
          </ul>

          <p><strong>Common Mistakes</strong></p>
          <ul>
            <li>Hitting 2 too early (before df) — you get nothing</li>
            <li>Hitting 2 too late — you get WGF (-10 on block)</li>
            <li>Skipping the neutral — the n is important!</li>
            <li>Going to d/f instead of d then df — take your time</li>
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="Electric in Combos" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            In combos, Electric provides extra damage. Here's a route that uses it:
          </p>

          <p><strong>Electric Starter Route</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            EWHF → b+3~f → ZEN.1 → bf+2,3~f → ZEN.u+1 T! → (2),4~f → ZEN.1,3
          </p>
          <p style={{ marginTop: '12px' }}>
            Damage: ~72
          </p>

          <p style={{ marginTop: '16px' }}><strong>Double Electric Route</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
            EWHF → f+3+4 → BRS.2 → b+3~f → ZEN.u+1 T! → (2),4~f → ZEN.1,3
          </p>
          <p style={{ marginTop: '12px' }}>
            Uses f+3+4 (ZEN) into Breaking Step for the second Electric.
          </p>
        </div>
      </Collapsible>

      <Collapsible title="Frame Data Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>CD.df:2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i11</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5</td>
                <td style={{ padding: '8px' }}>Electric (just frame)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>CD.df+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i11</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-10</td>
                <td style={{ padding: '8px' }}>Wind God Fist (slow)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>CD.df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>Mid, T!, high crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>BRS.2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i11</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ padding: '8px' }}>Easy Electric from BRS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
