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
      title="The Slide"
      intro="The slide is one of the most notorious moves in Tekken history. It defines Law's gameplan — pressure opponents until they respect the slide, then punish them for reacting to it."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Standard Combos"
    >
      <Section title="The Legendary Slide">
        <MoveCard character="law"
          videoId="FC.df,d,df+3"
          move={{
            input: 'FC df,d,df+3',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i16~20',
            onBlock: '-23 (float)',
            onHit: '+13',
            tags: ['Low', 'Knockdown', 'Full Crouch', 'Signature Move'],
            description: 'Law\'s infamous slide. One of the cheapest lows in the game. Knocks down and guarantees follow-up.',
          }}
          showVideo
        />

        <p>
          The slide is <span className="highlight">Law's defining move</span>. It's a fast, 
          deceptive low from full crouch that knocks down and guarantees a 1+2 follow-up.
        </p>

        <KeyConcept title="Why the Slide is Broken" icon="💀">
          <ul>
            <li><strong>Deceptive animation</strong> — Hard to react to</li>
            <li><strong>Guaranteed follow-up</strong> — Turn around 1+2 for extra damage</li>
            <li><strong>Float punishable</strong> — Even if blocked, they only get a float (reduced damage)</li>
            <li><strong>Forces reactions</strong> — Opponents must respect it or die</li>
            <li><strong>Opens up mids</strong> — They duck? Hit them with uf+3 or ws+2</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="How to Do the Slide">
          The input is <code>FC df,d,df+3</code>. In practice: crouch, then wiggle the stick 
          df → d → df while pressing 3. The last df can be held and delayed — practice the 
          timing to make it unpredictable.
        </TipBox>
      </Section>

      <Section title="Getting to Full Crouch">
        <p>
          To use the slide, you need to be in full crouch. Here's how:
        </p>

        <KeyConcept title="Full Crouch Methods" icon="⬇️">
          <ul>
            <li><strong>f+1+2 → hold D</strong> — Dragon Hammer into crouch</li>
            <li><strong>db+3</strong> — Low poke leaves you crouching</li>
            <li><strong>DSS → hold df</strong> — Dragon Charge to Slide Step</li>
            <li><strong>Block a low</strong> — You're in crouch state</li>
            <li><strong>Just hold down</strong> — Raw crouch from neutral</li>
          </ul>
        </KeyConcept>

        <p>
          The most common setup: land db+3 or f+1+2, then crouch walk forward and threaten slide. 
          Opponents have to react to the crouch animation.
        </p>
      </Section>

      <Section title="The Full Crouch Mixup">
        <p>
          From full crouch, you have a powerful mixup between the slide and mid options:
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <MoveCard character="law"
            move={{
              input: 'FC df,d,df+3',
              hitLevel: ['l'],
              damage: '17 + 20',
              startup: 'i16~20',
              onBlock: '-23 (float)',
              onHit: '+13 (1+2 guaranteed)',
              tags: ['Low', 'Knockdown'],
              description: 'The slide. If they stand, they eat 37 damage and knockdown.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: 'uf+3',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i18',
              onBlock: '-8',
              onHit: '+42d (Heat Engager)',
              tags: ['Mid', 'Heat Engager', 'Low Crush', 'Safe'],
              description: 'The mid mixup from crouch. Safe heat engager that low crushes. If they duck, they eat this.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: 'ws+4~f',
              hitLevel: ['m'],
              damage: '14',
              startup: 'i11',
              onBlock: '+5 (DSS)',
              onHit: '+12 (DSS)',
              tags: ['Mid', 'Plus on Block', 'DSS.Transition'],
              description: 'Fast mid that goes into DSS. Use to check opponents and continue pressure.',
            }}
          />

          <MoveCard character="law"
            move={{
              input: 'ws+2',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i15',
              onBlock: '-18',
              onHit: 'Launch',
              tags: ['Mid', 'Launcher', 'Unsafe'],
              description: 'Launch punish from crouch. Use against lows or when you have a hard read.',
            }}
          />
        </div>

        <KeyConcept title="The 50/50" icon="🎲">
          <ol>
            <li><strong>They stand block</strong> → Slide hits, +37 damage</li>
            <li><strong>They duck</strong> → uf+3 hits, Heat engager or ws+2 launch</li>
            <li><strong>They try to attack</strong> → uf+3 low crushes, ws+4 checks them</li>
            <li><strong>They step</strong> → Slide tracks pretty well</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            This is why Law is so annoying. You have to guess correctly, or you take damage.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="uf+3 is the Key">
          uf+3 being a safe (-8) mid heat engager from crouch is what makes Law's mixup work. 
          It low crushes, so it beats their attempts to low check you, and it's safe on block.
        </TipBox>
      </Section>

      <Section title="Slide from DSS">
        <p>
          You can access the slide from Dragon Charge by holding down-forward:
        </p>

        <KeyConcept title="DSS → Slide Step → Slide" icon="🔄">
          <ol>
            <li>Enter DSS (d+1+2 or from transition)</li>
            <li>Hold df — Law enters Slide Step (crouching slide animation)</li>
            <li>Press 3 — Slide comes out</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            This is often easier than raw slide input. You can also access uf+3 and ws options 
            from Slide Step by releasing df.
          </p>
        </KeyConcept>

        <p>
          The flow becomes: ws+4~f (DSS) → hold df (Slide Step) → 3 (slide) OR release → uf+3 (mid).
        </p>
      </Section>

      <Section title="Slide Follow-ups">
        <p>
          When the slide hits, you get guaranteed follow-up:
        </p>

        <KeyConcept title="After Slide Hits" icon="✨">
          <ul>
            <li><strong>Turn around + 1+2</strong> — Hold back to turn, then 1+2. Guaranteed.</li>
            <li><strong>BT d+4</strong> — Back turn low for guaranteed knockdown</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Important: If they DON'T back roll, you get even more guaranteed damage. If they 
            don't tech roll and try to get up with attacks, you can nunchuck them again.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Back Roll Escape">
          Smart opponents will back roll after slide. The 1+2 follow-up still works if you're 
          fast, but they can block if they roll and stand up immediately. Still, most people 
          eat it.
        </TipBox>
      </Section>

      <Section title="When to Use the Slide">
        <KeyConcept title="Slide Timing" icon="⏱️">
          <ul>
            <li><strong>After plus frames</strong> — f+1+2, db+3, ws+4~DSS</li>
            <li><strong>During passive play</strong> — Opponent just blocking? Slide them.</li>
            <li><strong>Round start</strong> — Sometimes works as a read</li>
            <li><strong>After knockdown</strong> — Oki slide as they get up</li>
            <li><strong>Wall pressure</strong> — Slide → oki → slide again</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Over-Slide">
          The slide is powerful, but predictable Law players get launched. Mix slide with 
          ws+4, uf+3, and just standing up to continue jab pressure. The threat of slide 
          is often more powerful than the slide itself.
        </TipBox>
      </Section>

      <Section title="Dealing with Anti-Slide Options">
        <p>
          Good players will try to counter your slide. Here's how to beat their counters:
        </p>

        <KeyConcept title="Counter the Counter" icon="🛡️">
          <ul>
            <li><strong>They duck anticipating slide</strong> → uf+3, ws+2, or ws+4</li>
            <li><strong>They try to hopkick</strong> → Block and punish, or slide early</li>
            <li><strong>They step right</strong> → Slide still tracks well; use ws+4 or b+4</li>
            <li><strong>They fuzzy guard</strong> → Delay your slide timing, or just poke</li>
            <li><strong>They low parry</strong> → Use mids, delay timings, or stop sliding temporarily</li>
          </ul>
        </KeyConcept>

        <p>
          The slide is a tool, not your entire gameplan. When opponents adapt, you adapt back. 
          That's Tekken.
        </p>
      </Section>

      <Collapsible title="Slide Oki Setups" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            After certain knockdowns, you can set up slide situations:
          </p>

          <p><strong>After 3+4,4</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Dash forward → crouch → slide mixup</li>
            <li>They have to react to your crouch animation</li>
          </ul>

          <p><strong>After wall combo</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Crouch near them → slide/uf+3 mixup</li>
            <li>Or keep standing pressure with jabs</li>
          </ul>

          <p><strong>After slide hits</strong></p>
          <ul>
            <li>Turn around → 1+2</li>
            <li>If they don't roll: slide again!</li>
            <li>If they do roll: dash → crouch → slide timing</li>
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="Full Crouch Options Reference" icon="📊">
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
                <td style={{ padding: '8px' }}><code>Slide</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Low</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-23</td>
                <td style={{ padding: '8px' }}>Main low, knockdown</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ padding: '8px' }}>Safe mid, heat engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+4~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5 (DSS)</td>
                <td style={{ padding: '8px' }}>Fast mid, continues pressure</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+16 (DSS)</td>
                <td style={{ padding: '8px' }}>Massively plus, but high</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-18</td>
                <td style={{ padding: '8px' }}>Launcher, very unsafe</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>m, h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>13f punish from crouch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
