import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible,
  StanceBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="The Four Stances"
      intro="Hwoarang's stance system is what makes him unique. Understanding when you're in each stance, how to enter them, and what options you have is the key to unlocking his potential."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Core Mids & Lows"
    >
      <Section title="Why Stances Matter">
        <p>
          Unlike most characters who have one neutral state, Hwoarang has <strong>four</strong>. 
          Each stance has unique moves, and transitioning between them is how you create pressure. 
          Your opponent has to track which stance you're in to know what's coming next.
        </p>

        <KeyConcept title="The Stance Philosophy" icon="🔄">
          <p>
            <strong>LFF</strong> and <strong>RFF</strong> are "safe" stances — you can block, move, 
            and use fundamental Tekken.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>LFS</strong> and <strong>RFS</strong> are "aggressive" stances — you sacrifice 
            blocking for devastating offense. This is where Hwoarang becomes terrifying.
          </p>
        </KeyConcept>
      </Section>

      <Section title="LFF — Left Foot Forward">
        <StanceBox
          name="Left Foot Forward (LFF)"
          description="Your default neutral stance. Full movement, can block, access to all fundamental options."
          features={[
            'Can block normally',
            'Full movement (sidestep both ways)',
            'Access to all universal moves',
            'Where you start every round',
          ]}
          entries={[
            'Default stance at round start',
            'Sidestep from RFF',
            'RFS.3+4 (stance switch)',
            'Naturally after most moves end',
          ]}
        />

        <p>
          LFF is where you start and where you return when you want to play fundamental Tekken. 
          From here, you can access your launchers (df+2, b+3), your homing move (df+4), and 
          safely navigate neutral.
        </p>

        <KeyConcept title="Key LFF Moves" icon="📋">
          <ul>
            <li><code>1,2,3</code> — Go to LFS (+3 block / +12 hit)</li>
            <li><code>1,2,4</code> — Go to RFS (+3 block / +12 hit)</li>
            <li><code>d+3,4</code> — Go to RFS (+8-10 block / +14-16 hit)</li>
            <li><code>df+2</code> — i15 launcher</li>
            <li><code>b+3</code> — i16 launcher (whiff punish)</li>
            <li><code>df+4</code> — Homing move, goes to RFF</li>
            <li><code>3+4</code> — Manual switch to RFF</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="When to Stay in LFF">
          Stay in LFF when: playing neutral at range, waiting for whiff punishes, blocking pressure, 
          or when you need to sidestep. LFF is safety. Flamingo is commitment.
        </TipBox>
      </Section>

      <Section title="RFF — Right Foot Forward">
        <StanceBox
          name="Right Foot Forward (RFF)"
          description="Secondary neutral stance. Can block, but sidestepping exits to LFF. Has the 'superior jab' and key transitions."
          features={[
            'Can block normally',
            'Limited sidestep (exits to LFF)',
            'Superior jab (RFF 2 is +2 on block)',
            'Access to Backlash power crush',
          ]}
          entries={[
            '3+4 from LFF (manual switch)',
            'df+4 on hit/block',
            'ws4,4 on hit',
            'd+3,4 cancelled with no RFS transition',
            'Many move enders naturally put you here',
          ]}
        />

        <p>
          RFF is your "aggressive neutral." You can still block, but your movement is limited. 
          The payoff is access to incredible moves like RFF df+3 (homing heat engager), RFF 3~4 
          (Backlash), and the superior jab (RFF 2).
        </p>

        <KeyConcept title="Key RFF Moves" icon="📋">
          <ul>
            <li><code>RFF 2,4~f</code> — Go to RFS (+4 block / +16 hit)</li>
            <li><code>RFF df+3</code> — Homing heat engager (+1 on block!)</li>
            <li><code>RFF 3~4</code> — Backlash power crush (+4-7 on block)</li>
            <li><code>RFF b+3</code> — i13 high CH launcher (-10)</li>
            <li><code>RFF b+2</code> — Safe mid (+4-5 on block, +6c on hit)</li>
            <li><code>RFF f+4</code> — Go to RFS manually</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Sidestep Exits RFF">
          If you sidestep while in RFF, you return to LFF. This is important — you can't sidestep 
          and stay in RFF. Plan your movement accordingly.
        </TipBox>
      </Section>

      <Section title="LFS — Left Flamingo Stance">
        <StanceBox
          name="Left Flamingo Stance (LFS)"
          description="Aggressive stance with left leg raised. CANNOT BLOCK. Has heat engager and mid options."
          features={[
            'CANNOT block!',
            'High reward moves',
            'Heat engager (LFS f+3)',
            'Quick mid with LFS 3~f for loops',
          ]}
          entries={[
            '1,2,3 on block/hit',
            'f+3 from LFF (manual entry)',
            '3,3~f from LFF',
            '4,3~f (cancel 4,3 into LFS)',
            'RFS.3+4 (stance swap)',
          ]}
        />

        <p>
          LFS is powerful but less used than RFS. Your main tool is <code>LFS f+3</code> — a heat 
          engager that's +4 on block and remains in LFS. This lets you loop pressure.
        </p>

        <KeyConcept title="Key LFS Moves" icon="📋">
          <ul>
            <li><code>LFS 1</code> — +5 on block, +7 on hit, your check move</li>
            <li><code>LFS f+3</code> — Heat engager, +4 on block, stays in LFS</li>
            <li><code>LFS 3~f</code> — Mid that loops back to LFS (+2/+8)</li>
            <li><code>LFS 4</code> — High launcher, +4 on block</li>
            <li><code>LFS uf+4</code> — Tornado launcher (-14, risky)</li>
            <li><code>LFS d+3,4</code> — Same as regular d+3,4, goes to RFS</li>
          </ul>
        </KeyConcept>

        <TipBox variant="danger" title="You Cannot Block in LFS">
          The moment you enter Left Flamingo, blocking is gone. If they do a mid, you get hit 
          (unless you have a power crush or evasion). Commit to offense or use LFS 3+4 to swap 
          to RFS, which also cannot block but has faster options.
        </TipBox>
      </Section>

      <Section title="RFS — Right Flamingo Stance">
        <StanceBox
          name="Right Flamingo Stance (RFS)"
          description="Your MOST IMPORTANT stance. CANNOT BLOCK. Has 8-frame CH launcher, hell sweep, and all your pressure."
          features={[
            'CANNOT block!',
            '8-frame CH launcher (RFS f+4,4)',
            'Hell sweep mixup (RFS d+4,3,4)',
            'Plus frame mids',
            'Where your damage comes from',
          ]}
          entries={[
            '1,2,4 on block/hit',
            'd+3,4 on block/hit',
            'RFF.2,4~f on block/hit',
            'RFF.f+4 (manual entry)',
            'f,n,4 from LFF (manual entry)',
          ]}
        />

        <p>
          <span className="highlight">RFS is where Hwoarang becomes terrifying.</span> You have an 
          8-frame counter-hit launcher (RFS f+4,4), a knockdown sweep (RFS d+4,3,4), safe mids, 
          and plus frames everywhere.
        </p>

        <KeyConcept title="Key RFS Moves" icon="🔥">
          <ul>
            <li><code>RFS f+4,4</code> — <strong>8-frame CH launcher!</strong> (0 on block, +5 on hit)</li>
            <li><code>RFS 2</code> — Jab (+5 block / +7 hit), goes to RFF</li>
            <li><code>RFS 4,3</code> — Safe mid-mid, CH wall splat (+4 block!)</li>
            <li><code>RFS df+4</code> — Plus mid (+1 block, +8 hit, CH launches)</li>
            <li><code>RFS d+4,3,4</code> — Hell sweep (full combo in Heat!)</li>
            <li><code>RFS b+3</code> — Heat engager, safe (-9)</li>
            <li><code>RFS uf+3</code> — Safe mid launcher alternative</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The RFS 50/50">
          From RFS, your core mixup is:
          <ul style={{ marginTop: '8px' }}>
            <li><strong>RFS d+4,3,4</strong> — Hell sweep (low, full combo in Heat)</li>
            <li><strong>RFS 4,3</strong> — Safe mid, wall splats on CH</li>
          </ul>
          They have to guess. If they duck, 4,3 launches/wall splats. If they stand, hell sweep.
        </TipBox>
      </Section>

      <Section title="Stance Transition Flow">
        <p>
          Understanding how stances connect is crucial. Here's the general flow:
        </p>

        <KeyConcept title="Stance Flowchart" icon="🔄">
          <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginTop: '12px' }}>
            <p>LFF → (1,2,3) → LFS → (LFS 3+4) → RFS</p>
            <p>LFF → (1,2,4) → RFS</p>
            <p>LFF → (d+3,4) → RFS</p>
            <p>LFF → (3+4) → RFF → (RFF 2,4~f) → RFS</p>
            <p>LFF → (df+4) → RFF</p>
            <p>RFS → (RFS 2) → RFF → loop...</p>
          </div>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Notice how many roads lead to RFS. That's intentional — RFS is your destination.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Golden Rule">
        <KeyConcept title="Block in LFF/RFF, Attack in LFS/RFS" icon="⚔️">
          <p>
            When you need to block or play defense: <strong>stay in LFF or RFF</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            When you have advantage or are committing to offense: <strong>enter LFS or RFS</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            Don't enter flamingo randomly. Enter it when you have plus frames (from d+3,4, 1,2,3, 
            RFF 2,4, etc.) or when you're confident your offense will win.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Common Beginner Mistake">
          New Hwoarang players enter flamingo when they shouldn't and then get hit because they 
          can't block. The solution isn't to avoid flamingo — it's to enter it from plus frames 
          where your offense is safe.
        </TipBox>
      </Section>

      <Collapsible title="Quick Stance Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Stance</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Can Block?</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Movement</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Main Entry</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><strong>LFF</strong></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>Yes</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Full</td>
                <td style={{ padding: '8px' }}>Default / Sidestep from RFF</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><strong>RFF</strong></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>Yes</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Limited</td>
                <td style={{ padding: '8px' }}>3+4 / df+4 / RFS 2</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><strong>LFS</strong></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>NO</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>1,2,3 / f+3</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><strong>RFS</strong></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>NO</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>1,2,4 / d+3,4 / RFF 2,4~f</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
