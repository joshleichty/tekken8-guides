import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="First Buttons"
      intro="Before we dive into Yoshimitsu's flashy tools, you need to master the basics. These pokes are what you'll use 70% of the time — fast, safe moves that establish your presence and check your opponent."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Keepout Tools"
    >
      <Section title="Your Fastest Button: The Jab">
        <MoveCard character="yoshimitsu"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block'],
            description: 'Standard jab. +1 on block means you can continue pressure even when blocked.',
          }}
          showVideo
        />

        <p>
          Yoshimitsu's jab is <span className="highlight">plus on block</span>. At +1, if they press 
          a 10-frame move after blocking, your next jab will beat it. This creates frame trap opportunities.
        </p>

        <KeyConcept title="When to Use Jab" icon="👊">
          <ul>
            <li><strong>To interrupt</strong> — If they're pressing buttons, jab checks them</li>
            <li><strong>To start offense</strong> — Plus frames let you continue</li>
            <li><strong>As a quick check</strong> — Throw it out to see their reactions</li>
            <li><strong>After blocking</strong> — Your turn after -9 or better moves</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The 1,1 String — Your 10f Punish">
        <MoveCard character="yoshimitsu"
          move={{
            input: '1,1',
            hitLevel: ['h', 'm'],
            damage: '5, 19',
            startup: 'i10',
            onBlock: '-9',
            onHit: '+4c',
            onCH: '+6a (launches in NSS/Heat)',
            tags: ['High', 'Mid', '10f Punish', 'Floor Break'],
            description: 'Your main 10-frame punish. The second hit is a mid that floor breaks. In NSS or Heat, CH launches!',
          }}
          showVideo
        />

        <p>
          1,1 is Yoshimitsu's <span className="highlight">10-frame punish</span>. Use it to punish 
          anything at least -10 on block. The second hit is a mid, so they can't duck it.
        </p>

        <KeyConcept title="1,1 Special Properties" icon="⚡">
          <ul>
            <li><strong>Floor breaks</strong> — The second hit breaks floors</li>
            <li><strong>In NSS or Heat</strong> — Second hit becomes a counter-hit launcher</li>
            <li><strong>Forces crouch on hit</strong> — +4c means they're stuck crouching</li>
            <li><strong>Chip damage</strong> — 3 chip on block (more in NSS/Heat)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Punish Practice">
          Go to Practice Mode and have the dummy do moves at -10. Practice punishing with 1,1 
          until it becomes muscle memory. This is your bread and butter punish.
        </TipBox>
      </Section>

      <Section title="The 2,2 String — Transitions to NSS">
        <MoveCard character="yoshimitsu"
          move={{
            input: '2,2',
            hitLevel: ['h', 'h'],
            damage: '10, 18',
            startup: 'i11',
            onBlock: '-1',
            onHit: '+15g',
            tags: ['High', 'High', 'Tornado', 'NSS.Transition'],
            description: 'Jab string that transitions to No Sword Stance on hit/block. Tornado on airborne hit.',
          }}
          showVideo
        />

        <p>
          2,2 is special because it <span className="highlight">transitions to No Sword Stance</span>. 
          On hit, you're +15 and in NSS — perfect for continuing pressure.
        </p>

        <KeyConcept title="2,2 Properties" icon="🔄">
          <ul>
            <li><strong>-1 on block</strong> — Essentially neutral, you can flow into NSS mixups</li>
            <li><strong>+15g on hit</strong> — Guaranteed follow-ups in NSS</li>
            <li><strong>Can enter KIN</strong> — Hold 1+2 after 2,2 to enter Kincho</li>
            <li><strong>Tornado</strong> — Screws airborne opponents (combo tool)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The 2,2 Follow-up">
          After 2,2 on hit, you can do <code>ub+1+2</code> (NSS move) for guaranteed chip damage. 
          It's +15 so they can't interrupt. We'll cover more NSS follow-ups later.
        </TipBox>
      </Section>

      <Section title="Your Main Mid Poke: df+1">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i13',
            onBlock: '-4',
            onHit: '+5',
            tags: ['Mid', 'Poke', 'Safe', 'Long Range'],
            description: 'The longest-reaching df+1 in the game. Your primary mid check that hits crouchers.',
          }}
          showVideo
        />

        <p>
          Yoshimitsu's df+1 has <span className="highlight">exceptional range</span>. It reaches 
          farther than most characters' df+1s, making it excellent for keepout and poking.
        </p>

        <p>
          At -4 on block, it's completely safe. Use it constantly to check your opponent and 
          hit anyone trying to duck your jabs.
        </p>

        <Collapsible title="df+1 Extensions" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p><strong>df+1,4</strong> — Mid-Mid follow-up</p>
            <ul>
              <li>-12 on block (punishable)</li>
              <li>+4 on hit</li>
              <li>Jails on block — they can't duck after df+1</li>
              <li>Good for catching people pressing buttons</li>
            </ul>
            
            <p style={{ marginTop: '16px' }}><strong>df+1,2</strong> — Mid-High string</p>
            <ul>
              <li>Second hit is HIGH — can be ducked</li>
              <li>Counter-hit confirmable for full combo</li>
              <li>Has spin extensions (db+2,2,2...)</li>
              <li>Risk/reward — they can duck and launch</li>
            </ul>
          </div>
        </Collapsible>

        <TipBox variant="warning" title="Extension Warning">
          Don't autopilot df+1,4 or df+1,2. Good players will duck the high extension and launch 
          you. Mix it up — sometimes raw df+1, sometimes extensions.
        </TipBox>
      </Section>

      <Section title="Your 12-Frame Mid: df+4">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'df+4',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i12',
            onBlock: '-7',
            onHit: '+4',
            tags: ['Mid', 'Fastest Mid', 'Safe'],
            description: 'The fastest mid poke in Tekken (tied). Excellent for checking situations and offense.',
          }}
          showVideo
        />

        <p>
          df+4 is Yoshimitsu's <span className="highlight">fastest mid</span> at i12. This is 
          significant — most characters' fastest mid is i13 (df+1). Use it to:
        </p>

        <KeyConcept title="df+4 Applications" icon="⚡">
          <ul>
            <li><strong>Check -11 and -12 situations</strong> — Where df+1 is too slow</li>
            <li><strong>Interrupt pressure</strong> — Fast enough to stop most strings</li>
            <li><strong>Whiff punish</strong> — Quick mid for punishing whiffs</li>
            <li><strong>Stay safe</strong> — -7 is unpunishable</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Putting It Together">
        <p>
          With these four tools (<code>1</code>, <code>1,1</code>, <code>df+1</code>, <code>df+4</code>), 
          you have a functional poking game:
        </p>

        <KeyConcept title="Basic Pressure Loop" icon="🔄">
          <ol>
            <li><strong>Start with jab (1)</strong> — You're +1 on block</li>
            <li><strong>If they keep standing</strong> — Continue with df+1 or 1,1</li>
            <li><strong>If they start ducking</strong> — df+4 catches them</li>
            <li><strong>If they press buttons</strong> — Your +1 frame advantage wins</li>
            <li><strong>Repeat and adapt</strong> — This is the foundation</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice This">
          Go to Practice Mode and just cycle through these moves for a few minutes. 
          Try: <code>1 → df+1 → 1,1 → df+4 → repeat</code>. Get comfortable with the inputs 
          and the rhythm. This is Yoshimitsu's basic pressure before any stances.
        </TipBox>
      </Section>

      <Collapsible title="Frame Data Reference" icon="📊">
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
                <td style={{ padding: '8px' }}><code>1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8</td>
                <td style={{ padding: '8px' }}>Plus on block!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4c</td>
                <td style={{ padding: '8px' }}>10f punish, floor breaks</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i11</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-1</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+15g</td>
                <td style={{ padding: '8px' }}>Transitions to NSS</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-4</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+5</td>
                <td style={{ padding: '8px' }}>Long range mid poke</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>Fastest mid in Tekken</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
