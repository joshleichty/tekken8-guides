import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Jab Strings"
      intro="Law's jab strings are the heart of his pressure. Multiple counter-hit confirmable strings from a 10-frame jab make his up-close game terrifying. Here's every string you need to know."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="First Combos"
    >
      <Section title="Why Law's Jab Strings Matter">
        <p>
          Law has <span className="highlight">multiple counter-hit confirmable strings</span> from 
          his 10-frame jab. This means you can visually confirm if the first hit lands on counter-hit 
          and complete the string for big damage. Very few characters have this luxury.
        </p>

        <KeyConcept title="Counter-Hit Confirmable (NCC)" icon="👁️">
          <p>
            <strong>NCC (Natural Counter-hit Combo)</strong> means if the first hit lands on 
            counter-hit, you can see it and complete the string for guaranteed follow-ups.
          </p>
          <p style={{ marginTop: '12px' }}>
            In practice: Throw out 1,1. If you see CH, finish with the third hit. 
            If not, stop at 1,1 and continue pressure.
          </p>
        </KeyConcept>
      </Section>

      <Section title="1,1,1 — The Heat Engager">
        <MoveCard character="law"
          move={{
            input: '1,1,1',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 5, 20',
            startup: 'i10',
            onBlock: '-12',
            onHit: '+41d (Heat Engager)',
            tags: ['High', 'High', 'Mid', 'Counter-Hit Confirmable', 'Heat Engager', 'Wall Splat'],
            description: 'Counter-hit confirmable heat engager. NCC from first hit. Becomes a launcher in Heat. Wall splats.',
          }}
          showVideo
        />

        <p>
          1,1,1 is <span className="highlight">one of the best moves in Tekken 8</span>. A 10-frame, 
          counter-hit confirmable heat engager that wall splats. It becomes a full launcher in Heat mode.
        </p>

        <KeyConcept title="Why 1,1,1 is Broken" icon="⚡">
          <ul>
            <li><strong>10 frames</strong> — Fastest move speed</li>
            <li><strong>Counter-hit confirmable</strong> — See CH, complete string</li>
            <li><strong>Heat engager</strong> — Activates Heat on hit</li>
            <li><strong>-12 on block</strong> — Risk is acceptable for the reward</li>
            <li><strong>Heat launcher</strong> — Full combo in Heat mode</li>
            <li><strong>Wall splats</strong> — Big damage near walls</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Frame Trap Setup">
          After plus frames (jab +1, db+3 +3, f+1+2 +3), 1,1,1 is a frame trap. If they press 
          buttons, they eat counter-hit into Heat engager. If they block, you're only -12.
        </TipBox>
      </Section>

      <Section title="1,2,3 — The Safe String">
        <MoveCard character="law"
          move={{
            input: '1,2,3',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 8, 10',
            startup: 'i10',
            onBlock: '-5',
            onHit: '+13',
            tags: ['High', 'High', 'Mid', 'Safe', 'Counter-Hit Confirmable', 'Wall Crush'],
            description: 'Safe jab string with mid ender. Counter-hit confirmable. Use when you want safety.',
          }}
          showVideo
        />

        <p>
          1,2,3 is your <span className="highlight">safe pressure string</span>. At -5 on block, 
          opponents can't really punish it. The third hit is a mid that wall crushes.
        </p>

        <p>
          Like 1,1,1, this is counter-hit confirmable from the first jab. When you're not sure 
          if your read is right, use 1,2,3 instead of 1,1,1 for the safety.
        </p>

        <KeyConcept title="1,1,1 vs 1,2,3" icon="🔄">
          <ul>
            <li><strong>1,1,1</strong> — Higher reward (Heat engager), higher risk (-12)</li>
            <li><strong>1,2,3</strong> — Lower reward (+13 on hit), lower risk (-5)</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Use 1,2,3 when you just need to stop momentum. Use 1,1,1 when you want Heat 
            or wall splat damage.
          </p>
        </KeyConcept>
      </Section>

      <Section title="1,2,2,2 — The DSS String">
        <MoveCard character="law"
          move={{
            input: '1,2,2,2',
            hitLevel: ['h', 'h', 'm', 'h'],
            damage: '5, 8, 10, 15',
            startup: 'i10',
            onBlock: '-9',
            onHit: '+4',
            onCH: '+9d',
            tags: ['High', 'High', 'Mid', 'High', 'Delayable', 'DSS.Transition'],
            description: 'Counter-hit confirmable string that transitions to DSS with hold forward. Delayable last hit.',
          }}
          showVideo
        />

        <p>
          1,2,2,2 is <span className="highlight">counter-hit confirmable with DSS transition</span>. 
          The third hit (1,2,2) is -8 on block and you can confirm into the last hit on counter-hit.
        </p>

        <p>
          By holding forward after 1,2,2,2, you transition to Dragon Charge (DSS) at +10 on hit. 
          This lets you continue pressure with DSS options.
        </p>

        <Collapsible title="The Mix at 1,2,2" icon="🎲">
          <div style={{ marginTop: '12px' }}>
            <p>After 1,2,2 (-8 on block), you have a mix:</p>
            <ul>
              <li><strong>Stop at 1,2,2</strong> — You're -8, safe from most punishes</li>
              <li><strong>Finish with 1,2,2,2</strong> — High ender, can be ducked</li>
              <li><strong>Use 1,2,2,1+2</strong> — Mid ender, wall splats, -13 on block</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              Condition them with 1,2,2,2 until they duck, then use 1,2,2,1+2 for the wall splat.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="b+1,2,2 — The Rekka">
        <MoveCard character="law"
          move={{
            input: 'b+1,2,2',
            hitLevel: ['m', 'm', 'm'],
            damage: '12, 12, 22',
            startup: 'i14',
            onBlock: '-14',
            onHit: '+12a (Heat Engager)',
            tags: ['Mid', 'Mid', 'Mid', 'Heat Engager', 'Counter-Hit Confirmable', 'Wall Splat', 'DSS.Transition'],
            description: 'Law\'s best rekka. All mids, heat engager, CH confirmable, wall splats. Can go to DSS from any hit.',
          }}
          showVideo
        />

        <p>
          b+1,2,2 is arguably <span className="highlight">Law's most broken string</span>. An i14 
          mid that tracks right, counter-hit confirmable into a heat engager, wall splats, and 
          can transition to DSS from any point in the string.
        </p>

        <KeyConcept title="Why b+1,2,2 is Insane" icon="🔥">
          <ul>
            <li><strong>All mids</strong> — Can't be ducked at any point</li>
            <li><strong>Heat engager</strong> — Activates Heat, becomes launcher in Heat</li>
            <li><strong>Tracks right</strong> — Catches people stepping your jabs</li>
            <li><strong>Counter-hit confirmable</strong> — 2nd and 3rd hits confirm on CH</li>
            <li><strong>DSS transition</strong> — Any hit can go to DSS with hold forward</li>
            <li><strong>Wall splats</strong> — Big damage at walls</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="-14 on Block (Full String)">
          The full b+1,2,2 string is -14 on block — launch punishable. Use b+1 alone (-9) 
          or b+1,2 (-12) to stay safer, or transition to DSS for the auto-parry in Heat.
        </TipBox>

        <Collapsible title="b+1,2 Mixup" icon="🎲">
          <div style={{ marginTop: '12px' }}>
            <p>b+1,2 on its own is -12 on block. From here:</p>
            <ul>
              <li><strong>Stop at b+1,2</strong> — -12, safer option</li>
              <li><strong>b+1,2,2</strong> — Full string, -14, high reward on CH</li>
              <li><strong>b+1,2~f (DSS)</strong> — Go to stance for mixups</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              In Heat mode, b+1,2~f (DSS) is especially strong because of the auto punch parry.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="b+2,3,4 — Junkyard">
        <MoveCard character="law"
          move={{
            input: 'b+2,3,4',
            hitLevel: ['m', 'l', 'm'],
            damage: '12, 10, 23',
            startup: 'i16',
            onBlock: '-7 (full string)',
            onHit: '+36a (full string)',
            onCH: 'Launch',
            tags: ['Mid', 'Low', 'Mid', 'Delayable', 'Counter-Hit Launcher', 'Tornado'],
            description: 'The infamous junkyard. Mid-low-mid with delays. Counter-hit launches. Can transition to DSS.',
          }}
          showVideo
        />

        <p>
          Junkyard (<code>b+2,3,4</code>) is <span className="highlight">Law's notorious string</span>. 
          It's a mid-low-mid that's safe on block (-7) if they don't low parry the second hit.
        </p>

        <KeyConcept title="How Junkyard Works" icon="🗑️">
          <ul>
            <li><strong>b+2 alone</strong> — -8 on block, safe mid poke</li>
            <li><strong>b+2,3</strong> — The low. Can be low parried</li>
            <li><strong>b+2,3,4</strong> — Full string. If they try to punish b+2,3, they eat the mid</li>
            <li><strong>Delay 3,4</strong> — Counter-hit launches mashers</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            The counter to Junkyard is low parry. But if they're looking for the parry, you 
            can just do b+2,2 (mid-high) or delay the 3,4 to catch their timing.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Always Full String">
          Good players will low parry Junkyard. Use b+2 alone as a poke, threaten the full 
          string occasionally, and use delay timings to catch parry attempts.
        </TipBox>
      </Section>

      <Section title="Mixing Strings at the Wall">
        <p>
          Law's wall game is terrifying because of his string mixups:
        </p>

        <KeyConcept title="Wall String Pressure" icon="🧱">
          <ul>
            <li><strong>1,1,1</strong> — Wall splats on hit, heat engager</li>
            <li><strong>1,2,2,1+2</strong> — Wall splats on hit (mid ender)</li>
            <li><strong>b+1,2,2</strong> — Wall splats on hit, heat engager</li>
            <li><strong>b+2,3,4</strong> — Full string is safe, can DSS transition</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Near the wall, opponents have to respect all your strings. Use this to get 
            guaranteed wall splats into big damage.
          </p>
        </KeyConcept>
      </Section>

      <Collapsible title="Other Jab String Extensions" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Additional string extensions to know:
          </p>

          <p><strong>2,b+2,1,2</strong> (h,h,h,m)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>The last two hits are counter-hit launcher on delay</li>
            <li>Can get guaranteed 3+4,4 on normal hit if timed right</li>
            <li>Transition to back turn by pressing nothing after 2,b+2</li>
          </ul>

          <p><strong>2,2,2</strong> (h,m,h)</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Same as 1,2,2,2 concept but from 2 jab</li>
            <li>Counter-hit confirmable, DSS transition</li>
          </ul>

          <p><strong>f+3,1</strong> (m,m)</p>
          <ul>
            <li>Not a jab string, but a mid-mid poke</li>
            <li>-2 on block, +4 with DSS transition</li>
            <li>Good range for an approach mid</li>
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="String Frame Data Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>String</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>1,1,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ padding: '8px' }}>Heat engager, CH confirmable</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
                <td style={{ padding: '8px' }}>Safe, CH confirmable</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>DSS transition, CH confirmable</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,2,1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>Mid ender, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1,2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ padding: '8px' }}>Heat engager, tracks right</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+2,3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ padding: '8px' }}>Junkyard, CH launches</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
