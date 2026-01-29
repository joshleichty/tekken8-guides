import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible,
  ExecutionBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Just Frame Skyrocket"
      intro="JFSR (Just Frame Sky Rocket) is Hwoarang's execution move. It's a safe mid launcher that high crushes. Master this and you have a tool that shuts down duck-happy opponents completely."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Learn Punishment"
    >
      <Section title="Why JFSR Matters">
        <p>
          We've talked about how RFS f+4,4 can be ducked. When opponents learn to duck your 
          flamingo pressure, they can launch you. <span className="highlight">JFSR is your answer.</span>
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'f,n,df:4',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i16',
            onBlock: '-8',
            onHit: '+59a (Tornado Launch)',
            tags: ['Mid', 'Launcher', 'Safe', 'High Crush', 'Execution'],
            description: 'Just Frame Skyrocket. Safe mid launcher that high crushes. Your 50/50 solved.',
          }}
          showVideo
        />

        <KeyConcept title="JFSR Solves Everything" icon="🚀">
          <p>
            The core Hwoarang problem: RFS pressure is all highs (f+4,4, 2, etc.). 
            Opponents who duck beat your pressure.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>JFSR is a safe mid launcher that HIGH CRUSHES.</strong> It goes under their 
            highs and launches them. Now they can't just duck — they might eat JFSR for a full combo.
          </p>
        </KeyConcept>

        <p>
          The non-just-frame version (regular f,n,df+4) is <strong>-18 on block</strong> — 
          launch punishable. But the just-frame version is only <strong>-8</strong>, making 
          it completely safe. This is why execution matters.
        </p>
      </Section>

      <Section title="The Input">
        <ExecutionBox
          title="JFSR Input"
          input="f,n,df:4"
          description="Forward, neutral, down-forward + 4 (with just-frame timing on the 4)"
          tips={[
            'The : means press 4 on the SAME FRAME as df',
            'You need to let the stick return to neutral (n) after forward',
            'The motion is f → let go → df+4 simultaneously',
            'Blue sparks indicate successful just-frame',
          ]}
        />

        <KeyConcept title="Breaking Down the Motion" icon="🎮">
          <ol>
            <li><strong>f</strong> — Tap forward, then LET GO</li>
            <li><strong>n</strong> — The stick is in neutral (not touching anything)</li>
            <li><strong>df+4</strong> — Press down-forward AND 4 at the EXACT same time</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            The "just frame" part is pressing 4 on the same frame as you hit df. If you're 
            even 1 frame late, you get the unsafe version.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Visual Confirmation">
          <strong>Blue sparks = success.</strong> When you do JFSR correctly, you'll see blue 
          electric sparks around Hwoarang's foot. If there are no sparks, you got the regular 
          (unsafe) version.
        </TipBox>
      </Section>

      <Section title="Practice Method">
        <p>
          JFSR requires practice. Here's how to develop the muscle memory:
        </p>

        <KeyConcept title="Practice Routine" icon="🏋️">
          <ol>
            <li>
              <strong>Start slow</strong> — Do the motion slowly to understand it: 
              f... n... df+4. Don't worry about speed yet.
            </li>
            <li>
              <strong>Focus on the neutral</strong> — Many players skip the neutral. 
              Make sure you actually let go between f and df.
            </li>
            <li>
              <strong>Speed up gradually</strong> — Once you understand the motion, 
              start doing it faster until it becomes fluid.
            </li>
            <li>
              <strong>Check for sparks</strong> — Every rep, look for blue sparks. 
              No sparks = wrong timing.
            </li>
            <li>
              <strong>10 in a row</strong> — When you can do 10 JFSRs in a row with sparks, 
              you're ready for matches.
            </li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Stick vs Pad">
          <ul>
            <li><strong>Stick</strong>: The neutral is natural — just release to center</li>
            <li><strong>Pad (D-pad)</strong>: Lift your thumb completely after forward</li>
            <li><strong>Pad (Analog)</strong>: Return stick to center before df+4</li>
            <li><strong>Hitbox</strong>: Release forward, then press df+4 simultaneously</li>
          </ul>
        </TipBox>

        <Collapsible title="Common Mistakes" icon="⚠️" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p style={{ marginBottom: '12px' }}><strong>Getting the unsafe version (-18)?</strong></p>
            <ul style={{ marginBottom: '16px' }}>
              <li>You're pressing 4 AFTER df. They need to be simultaneous.</li>
              <li>Try pressing 4 slightly earlier — think of it as df+4 together.</li>
            </ul>

            <p style={{ marginBottom: '12px' }}><strong>Nothing coming out?</strong></p>
            <ul style={{ marginBottom: '16px' }}>
              <li>You might be skipping the neutral. Make sure you actually let go.</li>
              <li>The input window is strict — don't rush the motion.</li>
            </ul>

            <p style={{ marginBottom: '12px' }}><strong>Getting random moves?</strong></p>
            <ul>
              <li>If you're getting f+4, you didn't go through neutral.</li>
              <li>If you're getting df+4 (a different move), you pressed 4 too late.</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="JFSR From RFF">
        <p>
          JFSR is easier to do from Right Foot Forward because the input window is more lenient:
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'RFF.f,n,df:4',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i16',
            onBlock: '-8',
            onHit: '+59a (Tornado Launch)',
            tags: ['Mid', 'Launcher', 'Safe', 'High Crush', 'RFF'],
            description: 'JFSR from RFF. Easier input window. Same devastating result.',
          }}
        />

        <KeyConcept title="Why RFF is Easier" icon="💡">
          <p>
            From RFF, the input has a larger window — up to 10 frames to press 4 after df. 
            This makes it significantly more consistent.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>Game plan:</strong> Use df+4 or 3+4 to enter RFF. From RFF, do JFSR. 
            This is more consistent than doing raw JFSR from LFF.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The Practical Setup">
          <ol>
            <li>Enter RFF (df+4 on hit, 3+4, etc.)</li>
            <li>If opponent is ducking, do JFSR</li>
            <li>If opponent is pressing, do RFF 3~4 (Backlash) or transition to RFS</li>
          </ol>
        </TipBox>
      </Section>

      <Section title="When to Use JFSR">
        <KeyConcept title="JFSR Situations" icon="🎯">
          <ul>
            <li>
              <strong>Opponent ducks your RFS pressure</strong> — They've figured out f+4,4 
              is high. JFSR them.
            </li>
            <li>
              <strong>At range</strong> — JFSR has good range. Use it as a keep-out tool.
            </li>
            <li>
              <strong>Whiff punish</strong> — If you see a whiff at mid-range, JFSR launches.
            </li>
            <li>
              <strong>50/50 mixup</strong> — Mix JFSR (mid) with d+3,4 (low) for a real 50/50.
            </li>
            <li>
              <strong>Against high crush lows</strong> — JFSR goes over lows that crush highs.
            </li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Spam JFSR">
          JFSR is -8 on block — safe, but not plus. If you throw it out randomly, you lose 
          your turn. Use it when you have a read that they'll duck or when you need a safe 
          launcher in neutral.
        </TipBox>
      </Section>

      <Section title="The Complete 50/50">
        <p>
          With JFSR, you now have a true 50/50 that doesn't require stances:
        </p>

        <KeyConcept title="The JFSR vs d+3,4 Mixup" icon="🎲">
          <div style={{ display: 'grid', gap: '12px', marginTop: '12px' }}>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
              <strong style={{ color: 'var(--accent)' }}>JFSR</strong>
              <p style={{ marginTop: '4px', color: 'var(--text-secondary)' }}>
                Mid. Beats standing and ducking. Safe on block. Launches on hit.
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--danger)' }}>
              <strong style={{ color: 'var(--danger)' }}>d+3,4</strong>
              <p style={{ marginTop: '4px', color: 'var(--text-secondary)' }}>
                Low. Beats standing. Plus on block. Goes to RFS for more pressure.
              </p>
            </div>
          </div>
          <p style={{ marginTop: '16px' }}>
            They have to guess: duck to block d+3,4, or stand to block JFSR. 
            <strong>Wrong guess = big damage either way.</strong>
          </p>
        </KeyConcept>
      </Section>

      <Section title="JFSR Combo">
        <p>
          When JFSR connects, you get a full combo with excellent damage:
        </p>

        <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginTop: '12px' }}>
          <p><strong>JFSR Combo:</strong></p>
          <p>JFSR → 3+4 → RFF 3~4 → f+4 → RFS 3~4 → d+4,4 T! → uf+3,4,3</p>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>~65 damage, great wall carry</p>
        </div>

        <TipBox variant="tip" title="Alternative JFSR Combo">
          If the 3+4 → RFF 3~4 pickup is hard, try:
          <br />
          JFSR → 3+4 → RFF 3~4 → (dash) 4,4,4,4 T! → uf+3,4,3
          <br />
          Slightly less damage but more consistent.
        </TipBox>
      </Section>

      <Section title="Is JFSR Required?">
        <KeyConcept title="JFSR at Different Ranks" icon="📈">
          <ul>
            <li>
              <strong>Beginner - Intermediate</strong>: JFSR is nice to have but not required. 
              Most opponents at these ranks won't consistently duck your highs. Focus on 
              fundamentals first.
            </li>
            <li>
              <strong>Advanced</strong>: JFSR becomes more important as opponents learn to 
              duck RFS f+4,4. You'll need it to beat patient defense.
            </li>
            <li>
              <strong>High Level</strong>: JFSR is mandatory. Without it, good players will 
              duck your pressure consistently and blow you up.
            </li>
          </ul>
        </KeyConcept>

        <p>
          Don't stress if you can't do JFSR consistently yet. Keep practicing, and it will come. 
          In the meantime, use your mids (RFS 4,3, RFS df+4) to catch duckers.
        </p>
      </Section>

      <Collapsible title="JFSR Practice Drill" icon="🏋️">
        <div style={{ marginTop: '12px' }}>
          <ol>
            <li style={{ marginBottom: '12px' }}>
              <strong>Raw JFSR (LFF)</strong>: Do 10 JFSRs in a row with blue sparks.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>JFSR from RFF</strong>: Do 3+4 → JFSR. 10 in a row.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Pressure into JFSR</strong>: Do d+3,4 → wait → JFSR. Simulate the mixup.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>JFSR combo</strong>: Do the full combo 10 times without dropping.
            </li>
            <li>
              <strong>Against a ducking opponent</strong>: Set CPU to duck. Hit them with JFSR → full combo.
            </li>
          </ol>
        </div>
      </Collapsible>
    </Chapter>
  )
}
