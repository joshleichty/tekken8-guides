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
      number={6}
      title="Tarantula Stance (TRT)"
      intro="Tarantula is Zafina's crawling stance — her most evasive but also most committed position. It's a simple 50/50 between mid and low, but at plus frames, it's devastating."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="First Combos"
    >
      <Section title="Entering Tarantula">
        <p>
          Tarantula can be entered manually with <code>d+1+2</code>, but you'll mainly enter 
          through transitions. Here are your key entries:
        </p>

        <KeyConcept title="Tarantula Entry Methods" icon="🚪">
          <ul>
            <li><strong>1,4</strong> — From jab string, -5 on block, +8 on hit</li>
            <li><strong>SCR 1,4</strong> — From Scarecrow, -6 on block, +7 on hit</li>
            <li><strong>SCR 1+2</strong> — Great mid, +6 on block, +17a on hit</li>
            <li><strong>WR1+2</strong> — Running high, +6 on block, +32a on hit</li>
            <li><strong>MNT df+4</strong> — Homing mid, -5 on block, +13g on hit</li>
            <li><strong>MNT 4</strong> — Low slide, -19 on block</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Best Entry: WR1+2 on Hit">
          WR1+2 on hit guarantees TRT df+1 for 44 damage. This is your most rewarding entry 
          and should be your go-to approach tool.
        </TipBox>
      </Section>

      <Section title="Tarantula Properties">
        <KeyConcept title="You Cannot Block" icon="⚠️">
          <p>
            In Tarantula, Zafina <strong>cannot block</strong>. You must:
          </p>
          <ul>
            <li>Use an attack</li>
            <li>Crawl forward (only movement option)</li>
            <li>Cancel with <code>db</code></li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Extreme Evasion" icon="👻">
          <p>
            Because Zafina is crawling on the ground:
          </p>
          <ul>
            <li><strong>Avoids all highs</strong></li>
            <li><strong>Avoids many mids</strong></li>
            <li><strong>Considered airborne</strong> — Some moves float her</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This evasion is both a strength and a weakness. Opponents can't hit you with 
            many moves, but specific lows and ground-hitting attacks will punish you.
          </p>
        </KeyConcept>

        <p>
          In Tarantula:
        </p>
        <ul>
          <li>Can only crawl forward (<code>f</code>)</li>
          <li>Cannot move backward or sidestep</li>
          <li>Cannot block</li>
          <li>Cancel with <code>db</code></li>
        </ul>
      </Section>

      <Section title="The 50/50: TRT 3 vs TRT 1">
        <p>
          Tarantula's core is simple: a <span className="highlight">mid/low 50/50</span> that 
          opponents must guess.
        </p>

        <MoveCard character="zafina"
          videoId="TRT.3"
          move={{
            input: 'TRT 3',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i14',
            onBlock: '-7',
            onHit: '+5c (TRT df+1 guaranteed)',
            onCH: '+19c',
            tags: ['Mid', 'Fast', 'Knockdown on Hit', 'TRT df+1 Guaranteed'],
            description: 'The mid option. On hit, TRT df+1 is guaranteed for big damage.',
          }}
          showVideo
        />

        <p>
          TRT 3 is the <span className="highlight">mid option</span>. It's fast at 14 frames, 
          safe at -7, and on hit guarantees TRT df+1 for excellent damage.
        </p>

        <MoveCard character="zafina"
          videoId="TRT.1"
          move={{
            input: 'TRT 1',
            hitLevel: ['l'],
            damage: '13',
            startup: 'i18',
            onBlock: '-11',
            onHit: '+5',
            onCH: '+15a (TRT df+1 guaranteed)',
            tags: ['Low', 'Knockdown on CH', 'TRT df+1 on CH'],
            description: 'The low option. On counter-hit, TRT df+1 is guaranteed.',
          }}
          showVideo
        />

        <p>
          TRT 1 is the <span className="highlight">low option</span>. On counter-hit, TRT df+1 
          is guaranteed. On normal hit, you're +5 and can continue pressure.
        </p>

        <KeyConcept title="The Simple 50/50" icon="🎰">
          <ul>
            <li><strong>TRT 3 (mid)</strong> — Beats standing block, guarantees df+1</li>
            <li><strong>TRT 1 (low)</strong> — Beats high block, good on hit</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            If they stand, hit them with TRT 1. If they crouch, hit them with TRT 3. 
            It's a classic guessing game.
          </p>
        </KeyConcept>
      </Section>

      <Section title="TRT df+1 — The Payoff">
        <MoveCard character="zafina"
          videoId="TRT.df+1"
          move={{
            input: 'TRT df+1',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i19',
            onBlock: '+6',
            onHit: '+30a (+15)',
            tags: ['Mid', 'Heat Engager', 'Plus on Block', 'Azazel Power'],
            description: 'Guaranteed after TRT 3. Heat engager. +6 on block. Self-damage outside heat.',
          }}
          showVideo
        />

        <p>
          TRT df+1 is the <span className="highlight">big reward</span> from Tarantula. It's 
          guaranteed after TRT 3 and TRT 1 CH, and it's a heat engager that's plus on block.
        </p>

        <KeyConcept title="TRT df+1 Properties" icon="⭐">
          <ul>
            <li><strong>Heat engager</strong> — Activates heat on hit</li>
            <li><strong>Plus on block</strong> — +6, very good for a heat engager</li>
            <li><strong>Self-damage</strong> — 8 recoverable damage outside heat</li>
            <li><strong>Armor in heat</strong> — Gains power crush in heat</li>
            <li><strong>Guaranteed</strong> — After TRT 3 and TRT 1 CH</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Alternative: TRT d+1+2">
          If you don't want to spend self-damage, you can use <code>TRT d+1+2</code> instead 
          of TRT df+1 after TRT 3/TRT 1 CH. It goes into Mantis and doesn't cost health.
        </TipBox>
      </Section>

      <Section title="Other TRT Options">
        <MoveCard character="zafina"
          videoId="TRT.2"
          move={{
            input: 'TRT 2',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i34',
            onBlock: '-13',
            onHit: '+38a (T! Launch)',
            tags: ['Mid', 'Launcher', 'Tornado', 'Very Slow', 'Power Crush'],
            description: 'Very slow launcher. Power crush. Use when conditioned to block low.',
          }}
          showVideo
        />

        <p>
          TRT 2 is a <span className="highlight">slow launcher</span> with power crush. At 34 
          frames, it's extremely slow and opponents can interrupt it. Use only as a read when 
          you've conditioned them to block low.
        </p>

        <MoveCard character="zafina"
          videoId="TRT.1+2"
          move={{
            input: 'TRT 1+2',
            hitLevel: ['m', 'm'],
            damage: '7, 20',
            startup: 'i19',
            onBlock: '-12c',
            onHit: '+14a (b+3 guaranteed)',
            tags: ['Mid', 'Mid', 'Homing', 'Low Crush', 'Knockdown'],
            description: 'Homing mid that low crushes. Catches sidesteps and low pokes.',
          }}
          showVideo
        />

        <p>
          TRT 1+2 is a <span className="highlight">homing mid</span> that low crushes. Use it 
          to catch opponents who try to low poke you out of Tarantula or sidestep.
        </p>

        <MoveCard character="zafina"
          videoId="TRT.d+1+2"
          move={{
            input: 'TRT d+1+2',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i25',
            onBlock: '-21',
            onHit: '+10a (MNT)',
            tags: ['Low', 'Knockdown', 'MNT Transition', 'Launch Punishable'],
            description: 'Big knockdown low that goes into Mantis. Very unsafe but high damage.',
          }}
          showVideo
        />

        <p>
          TRT d+1+2 is a <span className="highlight">big damage low</span> that goes into Mantis. 
          It's launch punishable at -21 but does great damage and gives good oki.
        </p>

        <MoveCard character="zafina"
          videoId="TRT.4,3"
          move={{
            input: 'TRT 4,3',
            hitLevel: ['m', 'm'],
            damage: '10, 10',
            startup: 'i26',
            onBlock: '-13',
            onHit: '+18a',
            onCH: 'Launch',
            tags: ['Mid', 'Mid', 'CH Launcher', 'Knowledge Check'],
            description: 'Mid-mid that CH launches. Good for knowledge checking opponents.',
          }}
          showVideo
        />

        <p>
          TRT 4,3 is a <span className="highlight">knowledge check</span>. If opponents try to 
          press after TRT 4, the second hit catches them for a CH launch.
        </p>
      </Section>

      <Section title="The TRT Game Plan">
        <KeyConcept title="At Plus Frames (WR1+2 on Hit, SCR 1+2)" icon="✅">
          <ul>
            <li><strong>TRT df+1</strong> — Guaranteed after WR1+2 hit, always do this</li>
            <li><strong>TRT 3</strong> → TRT df+1 — If WR1+2 was blocked (+6)</li>
            <li><strong>TRT 1</strong> — Low option to catch standing guard</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="At Minus Frames (1,4 on Block)" icon="⚠️">
          <ul>
            <li><strong>TRT 3</strong> — Your fastest option, -5 entry is still workable</li>
            <li><strong>Cancel (db)</strong> — Safest, reset to neutral</li>
            <li><strong>TRT 1+2</strong> — If you expect a low poke</li>
            <li><strong>Crawl forward</strong> — Can evade some attacks</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Keep It Simple">
          Tarantula is about a simple 50/50. Don't overcomplicate it. TRT 3 for mid, 
          TRT 1 for low, TRT df+1 when guaranteed. That's 90% of your TRT game.
        </TipBox>
      </Section>

      <Section title="Contesting TRT">
        <p>
          Be aware of how opponents can contest your Tarantula:
        </p>

        <KeyConcept title="How Opponents Beat TRT" icon="🛡️">
          <ul>
            <li><strong>Generic d+4</strong> — Most characters can low poke you out</li>
            <li><strong>Ground-hitting mids</strong> — Some mids will hit crawling Zafina</li>
            <li><strong>12f mids</strong> — Beat TRT 3 at -5 or worse</li>
            <li><strong>Hop kicks</strong> — Float you for a combo</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            At plus frames, most of these lose. At minus frames, you're taking a risk.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Over-Commit">
          Tarantula is powerful but not unbeatable. If opponents start contesting with 
          lows or specific mids, cancel more often or enter with better frame advantage.
        </TipBox>
      </Section>

      <Collapsible title="TRT Move Reference" icon="📊" defaultOpen>
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
                <td style={{ padding: '8px' }}><code>TRT 1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-11</td>
                <td style={{ padding: '8px' }}>Low option, df+1 on CH</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>TRT 2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i34</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>Slow launcher, power crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>TRT 3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ padding: '8px' }}>Mid option, df+1 guaranteed</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>TRT 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12c</td>
                <td style={{ padding: '8px' }}>Homing, low crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>TRT df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>Heat engager, guaranteed</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>TRT d+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i25</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-21</td>
                <td style={{ padding: '8px' }}>Big low, MNT trans, unsafe</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>TRT 4,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i26</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>CH launcher, knowledge check</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>

      <Section title="Stance Flow Summary">
        <p>
          Now you know all three stances. Here's how they connect:
        </p>

        <KeyConcept title="Stance Transitions" icon="🔄">
          <ul>
            <li><strong>Neutral → SCR</strong>: 1,3 / 3 / f,f+3 / WR3 / db+3</li>
            <li><strong>Neutral → MNT</strong>: d+3~D / db+4~D / f,f+3+4~D</li>
            <li><strong>Neutral → TRT</strong>: 1,4 / WR1+2</li>
            <li><strong>SCR → MNT</strong>: SCR df+4</li>
            <li><strong>SCR → TRT</strong>: SCR 1+2 / SCR 1,4</li>
            <li><strong>MNT → SCR</strong>: MNT 1,3</li>
            <li><strong>MNT → TRT</strong>: MNT df+4 / MNT 4</li>
            <li><strong>TRT → MNT</strong>: TRT d+1+2</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Flowing">
          Go to Practice Mode and practice flowing between stances. Start with 
          <code>1,3 → SCR 1+2 → TRT 3 → TRT df+1</code>. Then try 
          <code>d+3~D → MNT 1,3 → SCR df+4 → MNT 3,1</code>. Get comfortable with the flow.
        </TipBox>
      </Section>
    </Chapter>
  )
}
