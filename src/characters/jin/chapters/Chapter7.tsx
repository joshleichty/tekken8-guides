import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="ZEN Stance (Zenshin)"
      intro="ZEN stance is Jin's secret weapon at the wall. The dive kick loop, power crush, and mixups make Jin's wall pressure among the scariest in Tekken 8."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Optimized Combos"
    >
      <Section title="How to Enter ZEN">
        <p>
          There are two ways to manually enter ZEN stance:
        </p>

        <div style={{ display: 'grid', gap: '16px', marginTop: '16px', marginBottom: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <code style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>b+3+4</code>
            <span style={{ marginLeft: '12px' }}>Zenshin (cancelable)</span>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Steps backward. Can cancel the stance with <code>f</code> to dash forward.
              More flexible — this is the one you'll use most.
            </p>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <code style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem' }}>f+3+4</code>
            <span style={{ marginLeft: '12px' }}>Zanshin (covers distance)</span>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Moves forward into stance. Cannot be canceled. Good for closing distance.
            </p>
          </div>
        </div>

        <p>
          More commonly, you'll transition into ZEN from other moves:
        </p>

        <ul>
          <li><code>2,4~f</code> — After punish, go to ZEN</li>
          <li><code>f+4~f</code> — After f+4, go to ZEN</li>
          <li><code>b+3~f</code> — Knee into ZEN (key for combos)</li>
          <li><code>3,1~f</code> — String into ZEN (+12 on hit)</li>
          <li><code>f+3,3~f</code> — After f+3,3, go to ZEN</li>
          <li><code>ff+3~f</code> — While running mid into ZEN (plus on block!)</li>
        </ul>

        <TipBox variant="tip" title="The Key Transition">
          <code>ff+3~f</code> (while running 3 into ZEN) is <strong>plus on block</strong>. 
          This means you can approach with ff+3, transition to ZEN, and start your wall 
          pressure safely.
        </TipBox>
      </Section>

      <Section title="ZEN's Key Moves">
        <MoveCard character="jin"
          move={{
            input: 'ZEN.3+4',
            hitLevel: ['h'],
            damage: '25',
            startup: 'i21-27',
            onBlock: '+9 to +15',
            onHit: 'KND',
            tags: ['High', 'PLUS on Block', 'Chip Damage', 'Dive Kick'],
            description: 'The infamous dive kick. Plus on block with chip damage. Can be looped at the wall.',
          }}
          showVideo
        />

        <p>
          ZEN.3+4 is <span className="highlight">Jin's wall pressure tool</span>. It does chip 
          damage, is plus on block, and transitions back into ZEN with <code>~df</code>.
        </p>

        <KeyConcept title="The Dive Kick Loop" icon="🔁">
          <p>At the wall:</p>
          <ol>
            <li>Land ZEN.3+4 (they block, you're plus)</li>
            <li>Transition to Breaking Step with <code>~df</code></li>
            <li>Do Electric from BRS (BRS.2)</li>
            <li>Go back to ZEN with <code>f+3+4</code></li>
            <li>Repeat...</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            This loop does massive chip damage. The only escape is heat burst or rage art.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="ZEN.3+4 is High">
          Good players will duck and launch you. Don't overuse it. Mix in mids.
        </TipBox>

        <MoveCard character="jin"
          move={{
            input: 'ZEN.4',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i27-33',
            onBlock: '+2 to +8',
            onHit: 'KND',
            tags: ['Mid', 'Plus on Block', 'Ground Hits', 'Slow'],
            description: 'Mid alternative to the dive kick. Slower but hits crouchers. Guarantees d+2 on hit.',
          }}
          showVideo
        />

        <p>
          ZEN.4 is the mid version. It's slower, but it catches people who duck expecting 
          the dive kick. On hit, <code>d+2</code> is guaranteed.
        </p>

        <MoveCard character="jin"
          move={{
            input: 'ZEN.1,2',
            hitLevel: ['m', 'm'],
            damage: '14, 21',
            startup: 'i16-17',
            onBlock: '-14',
            onHit: 'Wall Splat',
            tags: ['Mid', 'Mid', 'Heat Engager', 'Wall Splats', 'Confirmable'],
            description: 'Heat engager from ZEN. Wall splats for huge damage. Hit-confirmable.',
          }}
          showVideo
        />

        <p>
          ZEN.1,2 is <span className="highlight">hit-confirmable</span>. If ZEN.1 hits, finish 
          the string. At the wall, this wall splats for a combo.
        </p>

        <MoveCard character="jin"
          move={{
            input: 'ZEN.u+1',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i14-16',
            onBlock: '-16',
            onHit: 'T! Launch',
            tags: ['Mid', 'Launcher', 'Tornado', 'Evasive', 'Panic Move'],
            description: 'Samsara — Evasive launcher. Jin\'s panic move from ZEN. Very unsafe on block.',
          }}
          showVideo
        />

        <p>
          ZEN.u+1 (Samsara) is an evasive launcher. It low crushes and can evade some mids. 
          Use it to escape pressure or as a panic move. <strong>Very unsafe</strong> on block.
        </p>

        <MoveCard character="jin"
          move={{
            input: 'ZEN.2',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i21-22',
            onBlock: '-5',
            onHit: 'KND',
            tags: ['High', 'Power Crush', 'Homing', 'Heat Engager'],
            description: 'Power crush from ZEN. Absorbs mids/highs. Heat engager.',
          }}
          showVideo
        />

        <p>
          ZEN.2 is a <span className="highlight">power crush</span> — it absorbs mid and high attacks. 
          Use it when you predict your opponent will try to interrupt your ZEN pressure.
        </p>

        <MoveCard character="jin"
          move={{
            input: 'ZEN.1+2',
            hitLevel: ['l'],
            damage: '10 + 20',
            startup: 'i21',
            onBlock: '-14',
            onHit: '+4 (throw)',
            tags: ['Low', 'Throw Follow-up', 'Wall Crush'],
            description: 'Low chop that leads to a throw. Faster in Season 2. Wall crushes.',
          }}
          showVideo
        />

        <p>
          ZEN.1+2 is the low option from ZEN. It's a quick low that transitions to a throw 
          on hit. Use it to mix up your wall pressure when they're blocking high.
        </p>
      </Section>

      <Section title="Wall Pressure with ZEN">
        <p>
          Jin's wall game is built around ZEN. Here's how to apply it:
        </p>

        <KeyConcept title="Wall Pressure Options" icon="🧱">
          <ol>
            <li><strong>ZEN.3+4</strong> — Default. Chip damage, plus on block.</li>
            <li><strong>ZEN.4</strong> — If they start ducking. Mid, still plus.</li>
            <li><strong>ZEN.1,2</strong> — For the wall splat. Confirm on hit.</li>
            <li><strong>ZEN.1+2</strong> — Mix in the low occasionally.</li>
            <li><strong>ZEN.2</strong> — If they try to interrupt with attacks.</li>
            <li><strong>ZEN~df → Electric</strong> — Uninterruptible high pressure.</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Be Predictable">
          If you always dive kick, they'll duck and launch you. If you always go for ZEN.1,2, 
          they'll wait and punish. Mix your options. The threat of each option makes the 
          others stronger.
        </TipBox>
      </Section>

      <Section title="ZEN in Neutral">
        <p>
          ZEN isn't just for the wall. You can use it in neutral too:
        </p>

        <KeyConcept title="Neutral ZEN Use" icon="⚔️">
          <ul>
            <li><strong>After 2,4~f</strong> — Punish → ZEN. Start pressure.</li>
            <li><strong>After f+4~f</strong> — Use the +4 frames to go into ZEN safely.</li>
            <li><strong>Manual b+3+4</strong> — Crushes highs on entry. Bait and punish.</li>
            <li><strong>ff+3~f</strong> — Approach tool. Plus on block into ZEN.</li>
          </ul>
        </KeyConcept>

        <p>
          In neutral, ZEN is more about setting up your next move than committing to pressure. 
          The cancel (<code>b+3+4 → f</code>) lets you dash out and punish whiffs.
        </p>
      </Section>

      <Collapsible title="ZEN Move Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Height</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Use</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ padding: '8px' }}>Fast mid check</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m, m</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ padding: '8px' }}>Heat engager, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.1,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m, h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Combo ender</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
                <td style={{ padding: '8px' }}>Power crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Homing mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+2 to +8</td>
                <td style={{ padding: '8px' }}>Mid dive kick, ground hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+9 to +15</td>
                <td style={{ padding: '8px' }}>Dive kick (wall pressure)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.u+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-16</td>
                <td style={{ padding: '8px' }}>Evasive launcher (T!)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Low</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-14</td>
                <td style={{ padding: '8px' }}>Low chop → throw</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Collapsible title="ZEN Transitions Reference" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            All moves that can transition into ZEN:
          </p>

          <ul>
            <li><code>b+3+4</code> — Manual entry (cancelable with f)</li>
            <li><code>f+3+4</code> — Manual entry (not cancelable)</li>
            <li><code>2,4~f</code> — +14 on hit, -6 on block</li>
            <li><code>3,1~f</code> — +12 on hit, +4 on block</li>
            <li><code>f+4~f</code> — +11 on hit, -1 on block</li>
            <li><code>b+3~f</code> — +9 on hit, -2 on block</li>
            <li><code>f+3,3~f</code> — +9 on hit, -7 on block</li>
            <li><code>bf+2,3~f</code> — +17 on hit, +2 on block</li>
            <li><code>ff+3~f</code> — +13a on hit, +6 on block</li>
            <li><code>ws1,2~f</code> — +2c on hit, -9 on block</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
