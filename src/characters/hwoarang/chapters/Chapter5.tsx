import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Jab Strings & Transitions"
      intro="Hwoarang's jab strings are unique — they don't just poke, they transition into stances. Understanding these transitions is how you create never-ending pressure."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn First Combos"
    >
      <Section title="The 1,2 Extensions">
        <p>
          Your basic 1,2 jab string has four key extensions:
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: '1,2,3',
            hitLevel: ['h', 'h', 'l'],
            damage: '5, 10, 10',
            startup: 'i10',
            onBlock: '-12 (third hit)',
            onHit: '-1 (third hit)',
            tags: ['Natural Combo', 'Low Ender'],
            description: 'Jab string with low ender. The third hit is a low but doesn\'t jail.',
          }}
          showVideo
        />

        <TipBox variant="warning" title="1,1,3,3 — The Full String">
          The full 1,1,3,3 string exists but the last hit is high and duckable. Use 1,1,3 sparingly 
          and only when you want to test if they're mashing. The low doesn't lead anywhere good.
        </TipBox>

        <MoveCard character="hwoarang"
          move={{
            input: '1,2,f+3',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 10, 14',
            startup: 'i10',
            onBlock: '-8',
            onHit: '+9',
            tags: ['Safe', 'Mid Ender', 'Wall Crush'],
            description: 'Safe mid ender. Good for checking opponents who try to duck after 1,2.',
          }}
          showVideo
        />

        <p>
          1,2,f+3 is your <span className="highlight">safe mid option</span> when you don't want 
          to commit to flamingo. At -8, it's safe, and on hit you're +9 with wall crush.
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: '1,2,f+4',
            hitLevel: ['h', 'h', 'h'],
            damage: '5, 10, 20',
            startup: 'i10',
            onBlock: '-2',
            onHit: '+35d (balcony break)',
            tags: ['High', 'Low Crush', 'Balcony Break'],
            description: 'High ender that low crushes. Balcony breaks. Use to catch d+1 mashers.',
          }}
          showVideo
        />

        <p>
          1,2,f+4 is your answer to opponents who try to d+1 after blocking 1,2. The third hit 
          low crushes and balcony breaks. Risky if they stand and block, but strong in the 
          right reads.
        </p>
      </Section>

      <Section title="The LFS Transition (1,2,3 → LFS)">
        <p>
          Wait — we just covered 1,2,3 as a low ender string. There's ANOTHER 1,2,3 input that 
          goes to Left Flamingo. The difference is timing:
        </p>

        <KeyConcept title="Understanding Tekken Notation" icon="📝">
          <ul>
            <li><code>1,2,3</code> — Comma means "then." This is the LOW ender string.</li>
            <li><code>1,2 → press 3 at end</code> — Actually transitions to LFS</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            In practice: if you mash 1,2,3 quickly, you get the low string. If you do 1,2 then 
            HOLD 3, you transition to Left Flamingo.
          </p>
        </KeyConcept>

        <MoveCard character="hwoarang"
          move={{
            input: '1,2 → 3 (hold)',
            hitLevel: ['h', 'h'],
            damage: '5, 10',
            startup: 'i10',
            onBlock: '+3 (LFS)',
            onHit: '+12 (LFS)',
            tags: ['LFS.Transition', 'Plus on Block'],
            description: 'The LFS entry. Hold 3 after 1,2 to enter Left Flamingo.',
          }}
          showVideo
        />

        <p>
          This is your Left Flamingo entry from jabs. On block, you're +3 in LFS. On hit, you're 
          +12 — enough to do anything.
        </p>
      </Section>

      <Section title="The RFS Transition (1,2,4 → RFS)">
        <MoveCard character="hwoarang"
          move={{
            input: '1,2,4',
            hitLevel: ['h', 'h'],
            damage: '5, 10',
            startup: 'i10',
            onBlock: '+3 (RFS)',
            onHit: '+12 (RFS)',
            tags: ['RFS.Transition', 'Plus on Block', 'Your Go-To'],
            description: 'The RFS entry. Press 4 after 1,2 to enter Right Flamingo.',
          }}
          showVideo
        />

        <p>
          <span className="highlight">This is your primary punish string.</span> After blocking 
          something -10 or worse, do 1,2,4 to punish AND enter RFS with +3/+12. Now you can 
          immediately pressure with RFS f+4,4 or your mixups.
        </p>

        <KeyConcept title="1,2,4 is King" icon="👑">
          <p>
            When you block something punishable, don't just do 1,2. Do <strong>1,2,4</strong> to 
            enter RFS. Your punish becomes pressure becomes mixup becomes damage.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The RFF 2,4 Pressure String">
        <MoveCard character="hwoarang"
          move={{
            input: 'RFF.2,4',
            hitLevel: ['h', 'h'],
            damage: '6, 9',
            startup: 'i10',
            onBlock: '-8',
            onHit: '+3g',
            tags: ['RFF.Only', 'Jails', 'RFS.Transition'],
            description: 'Key pressure string from RFF. Jails on block. Hold forward for RFS.',
          }}
          showVideo
        />

        <p>
          From Right Foot Forward, RFF 2,4 is your bread and butter. It jails (can't be ducked), 
          and holding forward (<code>RFF 2,4~f</code>) goes to RFS at +4 on block, +16 on hit.
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'RFF.2,4~f',
            hitLevel: ['h', 'h'],
            damage: '6, 9',
            startup: 'i10',
            onBlock: '+4 (RFS)',
            onHit: '+16 (RFS)',
            tags: ['RFF.Only', 'RFS.Transition', 'Plus on Block'],
            description: 'The RFS entry from RFF. +4 on block means your pressure is real.',
          }}
          showVideo
        />

        <KeyConcept title="The RFF 2,4~f Loop" icon="🔄">
          <ol>
            <li>Enter RFF (from df+4, 3+4, etc.)</li>
            <li>Do RFF 2,4~f → You're in RFS at +4</li>
            <li>Do RFS pressure (f+4,4, 4,3, df+4)</li>
            <li>RFS 2 → Back to RFF</li>
            <li>Do RFF 2,4~f again → RFS again</li>
            <li>Loop until they guess wrong or escape</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="The 3,3 Mid String">
        <MoveCard character="hwoarang"
          move={{
            input: '3,3',
            hitLevel: ['h', 'm'],
            damage: '15, 12',
            startup: 'i14',
            onBlock: '-13',
            onHit: '-7',
            onCH: '-2 (first hit)',
            tags: ['High', 'Mid', 'LFS.Transition'],
            description: 'High-mid string. Can transition to LFS with 3,3~f.',
          }}
          showVideo
        />

        <p>
          3,3 is a high-mid string that transitions to LFS with <code>3,3~f</code>. It has more 
          extensions:
        </p>

        <ul>
          <li><code>3,3,2</code> — Mid ender, -11 on block</li>
          <li><code>3,3,3</code> — Mid ender, balcony break, -14 on block</li>
          <li><code>3,3,4</code> — High ender, goes to RFS at +8 on block</li>
          <li><code>3,3,f+4</code> — High ender, balcony break, variable frames</li>
        </ul>

        <TipBox variant="tip" title="3,3,4 → RFS">
          The 3,3,4 extension is +8 on block and goes to RFS. This is another RFS entry route 
          with huge plus frames. Mix between 3,3,2 (mid) and 3,3,4 (high → RFS).
        </TipBox>
      </Section>

      <Section title="The 4,4 String">
        <MoveCard character="hwoarang"
          move={{
            input: '4,4',
            hitLevel: ['h', 'h'],
            damage: '14, 13',
            startup: 'i11',
            onBlock: '-1',
            onHit: '+10g (RFS)',
            tags: ['High', 'High', 'Jails', 'RFS.Transition'],
            description: 'High-high string. Jails and goes to RFS. Has multiple extensions.',
          }}
          showVideo
        />

        <p>
          4,4 jails (can't duck second hit) and transitions to RFS on hit. It has powerful extensions:
        </p>

        <ul>
          <li><code>4,4,3</code> — Mid ender, -14 on block (punishable)</li>
          <li><code>4,4,4</code> — High ender, goes to RFF, can extend further</li>
          <li><code>4,4,4,4</code> — Tornado move! Used in combos</li>
        </ul>

        <MoveCard character="hwoarang"
          move={{
            input: '4,4,4,4',
            hitLevel: ['h', 'h', 'h', 'h'],
            damage: '14, 13, 17, 20',
            startup: 'i11',
            onBlock: '+0',
            onHit: '+10c (Tornado)',
            tags: ['Tornado', 'Combo Ender', 'Back Roll'],
            description: 'The four-kick string. Tornado move. Forces backroll on hit.',
          }}
          showVideo
        />

        <TipBox variant="warning" title="All Hits are High">
          4,4,4,4 is all highs. If blocked, they can duck and launch any hit. Use in combos 
          only, not as pressure.
        </TipBox>
      </Section>

      <Section title="Putting It All Together">
        <KeyConcept title="Pressure Flow Example" icon="🔥">
          <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginTop: '12px' }}>
            <p>Block punish with 1,2,4 → RFS (+3)</p>
            <p>RFS f+4,4 (8f CH launcher, 0 on block)</p>
            <p>RFS 2 → RFF</p>
            <p>RFF 2,4~f → RFS (+4)</p>
            <p>RFS df+4 (+1 on block)</p>
            <p>Mix: RFS d+4,3,4 (low) OR RFS 4,3 (mid)</p>
            <p>Continue until they guess wrong...</p>
          </div>
        </KeyConcept>

        <p>
          This is the core Hwoarang loop. You punish, enter RFS, pressure with the 8-frame check, 
          reset to RFF, go back to RFS, and eventually force them into a 50/50. The strings 
          are the highway between stances.
        </p>

        <TipBox variant="tip" title="Practice This Pattern">
          In practice mode: <code>1,2,4 → RFS f+4,4 → RFS 2 → RFF 2,4~f → RFS df+4</code>. 
          Do this 10 times until it's muscle memory. This is your bread and butter flow.
        </TipBox>
      </Section>

      <Collapsible title="All Key Strings Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>String</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Hits</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Result</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,3 (hold)</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h,h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px' }}>→ LFS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h,h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px' }}>→ RFS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,2,f+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h,h,m</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ padding: '8px' }}>Safe mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>RFF 2,4~f</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h,h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ padding: '8px' }}>→ RFS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3,3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h,m,h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ padding: '8px' }}>→ RFS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>4,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>h,h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-1</td>
                <td style={{ padding: '8px' }}>→ RFS (hit only)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>l,h</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8~+10</td>
                <td style={{ padding: '8px' }}>→ RFS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
