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
      intro="Before diving into stances, you need to understand Zafina's basic tools. Her jabs and simple pokes form the foundation of her pressure game."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Core Mids & Lows"
    >
      <Section title="The Jab (1)">
        <MoveCard character="zafina"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block'],
            description: 'Standard 10f jab. Use to interrupt, check, and start pressure.',
          }}
          showVideo
        />

        <p>
          Zafina's jab is <span className="highlight">plus on block</span>. At +1, you can continue 
          pressure with faster moves or go into your stance transitions.
        </p>

        <KeyConcept title="After Jab on Block (+1)" icon="🎯">
          <ul>
            <li><strong>Jab again</strong> — Safe option to keep pressing</li>
            <li><strong>d+3</strong> — Low poke that can go into Mantis</li>
            <li><strong>df+1</strong> — Mid check at 13f</li>
            <li><strong>1,3</strong> — Transitions to Scarecrow (see below)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="1,3 — Your 10f Punish & SCR Transition">
        <MoveCard character="zafina"
          move={{
            input: '1,3',
            hitLevel: ['h', 'h'],
            damage: '5, 14',
            startup: 'i10',
            onBlock: '-2 (SCR)',
            onHit: '+7 (SCR)',
            tags: ['High', 'High', '10f Punish', 'SCR Transition'],
            description: 'Your main 10f punish. Transitions to Scarecrow stance. Hold B to stay neutral.',
          }}
          showVideo
        />

        <p>
          1,3 is Zafina's <span className="highlight">primary 10-frame punish</span> and one of her 
          most important moves. It automatically transitions into Scarecrow stance.
        </p>

        <KeyConcept title="1,3 Options" icon="🔄">
          <ul>
            <li><strong>1,3 (into SCR)</strong> — -2 on block, +7 on hit in Scarecrow</li>
            <li><strong>1,3~B (hold back)</strong> — -8 on block, +1 on hit, stay neutral</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            On hit, you're +7 in Scarecrow — prime mixup territory. On block at -2 in Scarecrow, 
            you can't block, so commit to an option or cancel.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="When to Hold Back">
          Hold B when you're just poking and don't want to commit to stance pressure. 
          Let 1,3 transition naturally when you want to start your Scarecrow mixups.
        </TipBox>
      </Section>

      <Section title="1,4 — Tarantula Transition">
        <MoveCard character="zafina"
          move={{
            input: '1,4',
            hitLevel: ['h', 'm'],
            damage: '5, 17',
            startup: 'i10',
            onBlock: '-5 (TRT)',
            onHit: '+8 (TRT)',
            onCH: '+42a (T!)',
            tags: ['High', 'Mid', 'TRT Transition', 'CH Launcher'],
            description: 'High-mid string that goes into Tarantula. Second hit counter-hit launches.',
          }}
          showVideo
        />

        <p>
          1,4 is a <span className="highlight">high-mid natural combo</span> that transitions to 
          Tarantula stance. The second hit launches on counter-hit, and the move was buffed 
          recently — on hit, the opponent bounces toward you, giving you a strong advantage.
        </p>

        <KeyConcept title="After 1,4 on Hit" icon="🕷️">
          <ul>
            <li>You're +8 in Tarantula stance</li>
            <li>Opponent bounces toward you</li>
            <li><strong>TRT df+1</strong> — They must respect this or get hit</li>
            <li>Great for setting up TRT mixups</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Second Hit is Mid">
          Unlike 1,3 (both highs), the second hit of 1,4 is a mid. Use this to catch 
          opponents who try to duck after your jab.
        </TipBox>
      </Section>

      <Section title="1,2 — Basic Jab String">
        <MoveCard character="zafina"
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 9',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['High', 'High', 'Jails'],
            description: 'Standard jab string. Safe and jails on block.',
          }}
          showVideo
        />

        <p>
          1,2 is a simple <span className="highlight">jab string</span> that jails (second hit 
          can't be ducked on block). Use for quick damage when you don't want to commit to stance.
        </p>

        <Collapsible title="1,2,3 Extension" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <p>
              You can extend to <code>1,2,3</code> which is high-high-high but goes into 
              Scarecrow at +9 on hit, 0 on block. The third hit can be delayed slightly.
            </p>
            <ul>
              <li>Doesn't jail — third hit can be ducked</li>
              <li>Good for catching people who try to press after 1,2</li>
              <li>Hold B to stay neutral instead of SCR</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Standing 3 — Quick SCR Entry">
        <MoveCard character="zafina"
          move={{
            input: '3',
            hitLevel: ['h'],
            damage: '17',
            startup: 'i13',
            onBlock: '0 (SCR)',
            onHit: '+9 (SCR)',
            tags: ['High', 'SCR Transition', 'Fast'],
            description: 'Quick high that enters Scarecrow. Hold B to stay neutral (-8/+1).',
          }}
          showVideo
        />

        <p>
          Standing 3 is a <span className="highlight">fast high</span> that transitions to Scarecrow. 
          At 13 frames, it's faster than df+1 and gives you stance access quickly.
        </p>

        <KeyConcept title="3 vs 1,3" icon="⚖️">
          <ul>
            <li><strong>3</strong> — Faster (i13), but single hit, high</li>
            <li><strong>1,3</strong> — Slower string but 10f for punishment</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Use standing 3 for quick stance entry in neutral. Use 1,3 for punishment and 
            when you need the extra hit.
          </p>
        </KeyConcept>
      </Section>

      <Section title="df+1 — Your Mid Poke">
        <MoveCard character="zafina"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13',
            onBlock: '-5',
            onHit: '+7',
            tags: ['Mid', 'Safe', 'Good Range', 'Multiple Extensions'],
            description: 'Solid mid poke with excellent range and extensions. Your main mid check.',
          }}
          showVideo
        />

        <p>
          df+1 is Zafina's <span className="highlight">primary mid poke</span>. It has excellent range 
          for a df+1, is safe at -5, and has multiple extensions that make it dangerous.
        </p>

        <KeyConcept title="df+1 Extensions" icon="📋">
          <ul>
            <li><strong>df+1,2</strong> — Mid-mid, -13 on block, but...</li>
            <li><strong>df+1,2,1</strong> — Third hit catches punish attempts, -12 on block</li>
            <li><strong>df+1,4</strong> — Mid-high, wall splats, -6 on block</li>
            <li><strong>df+1,2,1+2</strong> — Azazel power finisher, deals self-damage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Mind Game">
          The df+1 string creates hesitation. If you only do df+1, they might punish. 
          If you do df+1,2, they might try to punish the -13. But df+1,2,1 catches that 
          punish attempt. Keep mixing it up.
        </TipBox>
      </Section>

      <Section title="1+2 — Counter-Hit Mid">
        <MoveCard character="zafina"
          move={{
            input: '1+2',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i16',
            onBlock: '-12',
            onHit: '+4',
            onCH: '+25a (Launch)',
            tags: ['Mid', 'CH Launcher', 'Good Range', 'Extensions'],
            description: 'Counter-hit launcher with great range. Your main keep-out tool.',
          }}
          showVideo
        />

        <p>
          1+2 is Zafina's <span className="highlight">counter-hit launcher</span>. It has excellent 
          range and is your primary keep-out move. On counter-hit, you get a full launch.
        </p>

        <KeyConcept title="1+2 Extensions" icon="🔄">
          <ul>
            <li><strong>1+2,4</strong> — -10 on block, +1 on hit</li>
            <li><strong>1+2,4,4</strong> — -11 on block, picks up from ground</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            The extensions protect you from punish attempts. If opponent tries to punish 
            after 1+2 block, the follow-up 4 catches them.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="-12 on Block">
          Naked 1+2 is -12 — punishable by most characters. Either commit to extensions 
          or use it when you expect to get a counter-hit.
        </TipBox>
      </Section>

      <Section title="Basic Pressure Loop">
        <p>
          With just these moves, you can start building pressure:
        </p>

        <KeyConcept title="The Foundation Loop" icon="🔄">
          <ol>
            <li><strong>Jab (1)</strong> — +1 on block, check the opponent</li>
            <li><strong>If they respect</strong> — Go for df+1 or d+3</li>
            <li><strong>If they press</strong> — Counter with 1+2</li>
            <li><strong>To enter stance</strong> — Use 1,3 or 3 for Scarecrow</li>
            <li><strong>Repeat</strong> — Keep them guessing</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice This">
          In Practice Mode, cycle through: <code>1 → df+1 → 1,3 → repeat</code>.
          Feel the rhythm. This is Zafina's basic pressure foundation.
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
                <td style={{ padding: '8px' }}>Plus on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2 (SCR)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+7 (SCR)</td>
                <td style={{ padding: '8px' }}>10f punish, SCR trans</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5 (TRT)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+8 (TRT)</td>
                <td style={{ padding: '8px' }}>CH launches, TRT trans</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>0 (SCR)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+9 (SCR)</td>
                <td style={{ padding: '8px' }}>Fast SCR entry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+7</td>
                <td style={{ padding: '8px' }}>Main mid poke</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+4</td>
                <td style={{ padding: '8px' }}>CH launcher, keep-out</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
