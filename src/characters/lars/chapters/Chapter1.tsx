import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Lion's Roar"
      intro="Most characters have to earn their pressure. Lars punishes your mistake and then makes you guess. One move. Two outcomes. This is how rebellions start."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Full Punishment Arsenal"
    >
      <Section title="Block. Punish. Mixup.">
        <p>
          Here's everything you need to know about Lars in one sentence: <strong>when your opponent 
          makes a mistake, you punish them with 2,1 — and then they have to guess.</strong>
        </p>

        <p>
          That's not an oversimplification. That IS Lars. His entire game revolves around 
          turning your opponent's mistakes into a guessing game they can't escape. And it starts 
          with this move:
        </p>

        <MoveCard character="lars"
          move={{
            input: '2,1',
            hitLevel: ['h', 'm'],
            damage: '10, 12',
            startup: 'i10',
            onBlock: '-6',
            onHit: '+8',
            tags: ['10f Punish', 'LEN Transition', 'Mixup Starter'],
            description: 'Your 10-frame punish that automatically transitions into Limited Entry stance. On hit, the mixup is real — they MUST guess.',
            notes: ['Fastest punish in your kit', 'Auto-transitions to LEN (cannot cancel)', '+8 on hit = uninterruptable mixup']
          }}
          showVideo
        />

        <KeyConcept title="Why 2,1 Is Special" icon="⚡">
          <p>
            Every character has a 10-frame punish. Most of them just do damage and reset to neutral. 
            Lars' 2,1 does 22 damage <strong>AND</strong> puts you in Limited Entry stance at +8 on hit.
          </p>
          <p style={{ marginTop: '12px' }}>
            +8 means your opponent cannot press any button fast enough to interrupt what comes next. 
            They have to guess. And there are only two options.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Two Options">
        <p>
          When 2,1 connects on hit, you automatically enter Limited Entry (LEN) stance. 
          From here, you have exactly two choices:
        </p>

        <MoveCard character="lars"
          videoId="LEN.1"
          move={{
            input: 'LEN 1',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i16~17',
            onBlock: '-12',
            onHit: '+4c',
            tags: ['Low', 'High Crush', 'Mixup Option'],
            description: 'The low option. Hits crouching opponents, crushes highs. Only -12 on block — most characters can\'t launch this.',
            notes: ['High crush from frame 1', '+4 on hit, you\'re in crouch with options', '-12 is relatively safe for a low']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="LEN.2"
          move={{
            input: 'LEN 2',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i16~17',
            onBlock: '-9',
            onHit: '+25 (+15)',
            tags: ['Mid', 'Safe', 'Tornado', 'Chip Damage'],
            description: 'The mid option. Safe on block, does chip damage. In heat, this becomes a tornado launcher for a full combo.',
            notes: ['Safe at -9, nobody launches this', '8 chip damage on block', 'Tornado in heat for full combo']
          }}
          showVideo
        />

        <KeyConcept title="The 50/50" icon="🎲">
          <ul>
            <li><strong>They stand block</strong> → LEN 1 (low) hits them for 20 damage</li>
            <li><strong>They crouch</strong> → LEN 2 (mid) hits them for 25 damage + chip</li>
            <li><strong>They press a button</strong> → Both options come out before their jab. They get hit regardless.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This is the simplest mixup in the game. Low or mid. That's it. And because you're +8 
            from the 2,1 hit, <strong>they cannot escape it</strong>.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The Beautiful Part">
          If LEN 1 (low) hits, you're +4 in crouch. You can immediately go into FC df+2 as a frame 
          trap, or do another low. If LEN 2 (mid) connects, in heat it's a full combo. 
          Your punishment leads into pressure leads into more damage. Lars never stops.
        </TipBox>
      </Section>

      <Section title="When Is This Real?">
        <p>
          Here's the critical distinction that separates good Lars players from great ones:
        </p>

        <KeyConcept title="On Hit vs On Block" icon="🔑">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Situation</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Mixup?</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>2,1 <strong>on hit</strong></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ padding: '8px' }}><strong style={{ color: 'var(--success)' }}>REAL</strong> — LEN options beat their jab</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>2,1 <strong>on block</strong></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ padding: '8px' }}><strong style={{ color: 'var(--danger)' }}>FAKE</strong> — they can jab you out of LEN</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <p>
          On block, the LEN mixup is NOT real. Your opponent recovers 6 frames before you, so their 
          10-frame jab comes out way before your LEN options (i16). <strong>However</strong> — at low 
          and mid ranks, most players don't know this. They see you in a stance and freeze. 
          Take advantage of that.
        </p>

        <TipBox variant="warning" title="Knowing This Will Save You">
          As you climb ranks, opponents will start jabbing after a blocked 2,1. When that happens, 
          stop going for the LEN mixup on block. Instead, use 2,1 purely as a punish tool — 
          only go to LEN when it <strong>hits</strong>. This is the difference between Warrior 
          rank Lars and Fujin rank Lars.
        </TipBox>
      </Section>

      <Section title="Where Does 2,1 Come From?">
        <p>
          2,1 isn't just a punishment tool. Here are the three main situations where you'll use it:
        </p>

        <KeyConcept title="Your Three Entry Points" icon="🚪">
          <ol>
            <li>
              <strong>Punishment</strong> — Any time your opponent does a -10 or worse move, 
              2,1 is your go-to punish. Every round, multiple times per round. This is your bread and butter.
            </li>
            <li style={{ marginTop: '8px' }}>
              <strong>Poking</strong> — 2,1 is a fast i10 string. At close range, you can use it 
              as a quick check. If it hits, free mixup. If blocked, you're -6 (don't go into LEN).
            </li>
            <li style={{ marginTop: '8px' }}>
              <strong>Whiff punishment</strong> — See your opponent miss a move? 2,1 is fast 
              enough to catch many whiffs and gives you a mixup on hit. For bigger whiffs, 
              you'll use launchers instead (Chapter 2).
            </li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="The Loop">
        <Flowchart
          title="Lars' Core Loop"
          nodes={[
            { type: 'start', label: 'Opponent does a punishable move (-10 or worse)' },
            { type: 'decision', label: 'Punish with 2,1. Did it hit?', branches: [
              { label: 'Yes → +8 LEN', action: 'REAL mixup: LEN 1 (low) or LEN 2 (mid)' },
              { label: 'Blocked → -6', action: 'Don\'t go to LEN. Reset to neutral.' }
            ]},
            { type: 'end', label: 'Repeat. Lars\' momentum never stops.' }
          ]}
        />

        <p>
          This is the entire foundation. Everything else you'll learn — stances, neutral tools, 
          combos, heat — is built on top of this loop. Punish. Mixup. Repeat.
        </p>
      </Section>

      <Section title="Practice: The Punish Loop">
        <PracticeBox
          title="2,1 Into LEN Drill"
          setup="Go to Practice Mode. Set opponent to repeat a -10 move (like a basic jab string). Set Guard to Stand."
          tasks={[
            { id: 'lars-21-basic', text: 'Block the move and punish with 2,1 five times', detail: 'Get the timing of blocking → 2,1 comfortable', type: 'counter', target: 5 },
            { id: 'lars-len1', text: 'Do 2,1 → LEN 1 (press 1 after) ten times', detail: 'This is the low option. Just press 1 after 2,1 connects.', type: 'counter', target: 10 },
            { id: 'lars-len2', text: 'Do 2,1 → LEN 2 (press 2 after) ten times', detail: 'This is the mid option. Just press 2 after 2,1 connects.', type: 'counter', target: 10 },
            { id: 'lars-mix', text: 'Alternate randomly between LEN 1 and LEN 2 for 20 reps', detail: 'Build the muscle memory to CHOOSE, not just default to one option', type: 'counter', target: 20 },
          ]}
        />

        <PracticeBox
          title="Real Match Simulation"
          setup="Set opponent to Random Guard and repeat a -10 move."
          tasks={[
            { id: 'lars-sim1', text: 'Punish with 2,1 → Only go to LEN when it HITS', detail: 'If they block, just reset. No LEN on block.', type: 'toggle' },
            { id: 'lars-sim2', text: 'Do 10 punishes. Track how many times you chose correctly.', detail: 'Can you resist going to LEN when they block?', type: 'counter', target: 10 },
          ]}
        />

        <TipBox variant="tip" title="How to Know You've Got It">
          You've internalized this when 2,1 is automatic — you don't think about inputs, you just 
          see a punishable move and your fingers do it. The LEN choice should feel like a decision, 
          not a guess. "They've been standing, so I'll go low." That's the mindset.
        </TipBox>
      </Section>

      <Section title="What's Coming Next">
        <p>
          2,1 is your 10-frame punish. But Lars has the <strong>best punishment in the game</strong> 
          at every frame level. In the next chapter, you'll learn:
        </p>

        <ul>
          <li>The legendary <strong>f,b+2,1</strong> — a 14-frame launcher that most characters don't have</li>
          <li>How to punish moves at every frame from -10 to -17+</li>
          <li>While standing punishment that also leads into LEN mixups</li>
          <li>How to turn every opponent mistake into maximum damage</li>
        </ul>

        <KeyConcept title="Lars' Identity" icon="🦁">
          <p>
            Lars is not a character who hopes to land a lucky hit. He's a character who <strong>waits 
            for you to make a mistake, punishes it perfectly, and then never gives you your turn back</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            That cycle — punish → mixup → pressure → punish again — is the Lion of the Rebellion.
          </p>
        </KeyConcept>
      </Section>

      <Collapsible title="Quick Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            <div style={{
              background: 'var(--bg-card)',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>The Punish</div>
              <code style={{ fontSize: '1.1em' }}>2,1</code>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
                i10, +8 on hit → LEN<br />
                22 damage + free mixup
              </div>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>The Low</div>
              <code style={{ fontSize: '1.1em' }}>LEN 1</code>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
                20 dmg, -12 on block<br />
                High crush, +4 on hit
              </div>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>The Mid</div>
              <code style={{ fontSize: '1.1em' }}>LEN 2</code>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
                25 dmg, -9 on block<br />
                Safe, chip damage, tornado in heat
              </div>
            </div>
          </div>
        </div>
      </Collapsible>
    </Chapter>
  )
}
