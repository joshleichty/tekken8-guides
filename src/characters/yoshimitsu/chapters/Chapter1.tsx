import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible,
  Quiz,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="Embrace the Chaos"
      intro="Yoshimitsu doesn't play Tekken. He plays his own game — and forces you to play it too. Before you learn a single move, you need to understand HOW he wins."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Buttons"
    >
      <Section title="Forget What You Know">
        <p>
          Most Tekken characters follow a formula: poke, check, frame trap, launch. 
          Yoshimitsu <span className="highlight">laughs at your formula</span>.
        </p>

        <p>
          He has a move that's faster than anything else in the game. He can fly. He can spin 
          in circles while damaging himself AND you. He can heal. He breathes poison. He has 
          an unblockable low that leads to full combos.
        </p>

        <p>
          <strong>This sounds like chaos. It is.</strong> But Yoshimitsu players don't throw moves 
          randomly and hope for the best. They create <span className="highlight-secondary">controlled chaos</span> — 
          situations where the opponent has no good options, while Yoshimitsu has all of them.
        </p>

        <TipBox variant="warning" title="The Gimmick Trap">
          New Yoshimitsu players spam gimmicks — random unblockables, spinning moves, helicopter 
          stance in neutral. This works at low ranks. Then you hit a wall and can't progress 
          because you never learned to actually play Tekken. <strong>This guide teaches you 
          fundamentals FIRST</strong>, then layers in the chaos once you have a foundation.
        </TipBox>
      </Section>

      <Section title="The Trickster Mindset">
        <p>
          Think of Yoshimitsu as a <span className="highlight">trickster</span>, not a brawler. A trickster 
          doesn't overpower opponents — they make opponents defeat themselves.
        </p>

        <KeyConcept title="How the Trickster Wins" icon="🎭">
          <ol>
            <li><strong>Create fear</strong> — Show them Flash once. Now they're scared to press buttons.</li>
            <li><strong>Control space</strong> — Your keepout tools are elite. Make them come to you.</li>
            <li><strong>Punish their "solutions"</strong> — They try to approach? df+2 launches them. They pressure you? Flash deletes their offense.</li>
            <li><strong>Escalate the chaos</strong> — Once they're confused, add stances. Add mixups. Make them guess.</li>
            <li><strong>Never let them settle</strong> — Yoshimitsu's best state is when opponents don't know what's coming next.</li>
          </ol>
        </KeyConcept>

        <p>
          Notice what's NOT in this gameplan: "rush them down" or "overwhelm with pressure." 
          Yoshimitsu CAN pressure, but his real strength is making opponents <em>uncomfortable</em>.
        </p>
      </Section>

      <Section title="The Three Pillars">
        <p>
          Yoshimitsu's toolkit is massive — 6 stances, hundreds of moves, endless transitions. 
          But everything he does serves one of three purposes:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛡️</div>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>KEEPOUT</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Long-range mids that can't be whiff punished. Poison breath. df+2. 
              Control space and punish approaches.
            </p>
          </div>
          
          <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚡</div>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>PANIC TOOLS</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Flash is i6 — faster than any move in Tekken. Manji Spin evades almost everything. 
              Escape pressure that would destroy other characters.
            </p>
          </div>
          
          <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔄</div>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>STANCES</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Dragonfly, Kincho, Flea, Indian Sit, No Sword. Each creates unique mixups. 
              The threat of stance transitions makes basic moves scarier.
            </p>
          </div>
        </div>

        <p style={{ marginTop: '20px' }}>
          Every move, every decision, every stance transition should serve one of these pillars. 
          If you're doing something that doesn't fit — you're probably doing it wrong.
        </p>
      </Section>

      <Section title="The Flow of Chaos">
        <p>
          Here's how a Yoshimitsu gameplan typically flows:
        </p>

        <Flowchart
          title="Yoshimitsu's Mental Flowchart"
          nodes={[
            { type: 'start', label: 'Neutral: Control mid-range with keepout' },
            { type: 'decision', label: 'Did they approach?', branches: [
              { label: 'YES', action: 'df+2 or FC df+4 → combo → oki pressure' },
              { label: 'NO', action: 'Keep zoning, add poison breath threat' },
            ]},
            { type: 'decision', label: 'Are they pressuring you?', branches: [
              { label: 'YES', action: 'Flash or Manji Spin → escape → reset to neutral' },
              { label: 'NO', action: 'Poke with jabs, df+1 → look for openings' },
            ]},
            { type: 'decision', label: 'Are they respecting you?', branches: [
              { label: 'YES', action: 'Enter stances for real mixups' },
              { label: 'NO', action: 'Counter-hit launchers punish mashing' },
            ]},
            { type: 'end', label: 'Knockdown → Oki → Repeat the chaos' },
          ]}
        />

        <TipBox variant="tip" title="Notice the Pattern">
          Yoshimitsu doesn't force situations. He <em>reacts</em> to what opponents give him, 
          then punishes their choices. The chaos comes from having an answer for everything — 
          not from randomness.
        </TipBox>
      </Section>

      <Section title="Quick Check">
        <Quiz
          question="What is Yoshimitsu's primary goal in neutral?"
          options={[
            { text: 'Rush the opponent down with constant pressure', isCorrect: false },
            { text: 'Control space with keepout and punish their approaches', isCorrect: true },
            { text: 'Immediately enter stances for mixups', isCorrect: false },
            { text: 'Spam Flash until they stop pressing buttons', isCorrect: false },
          ]}
          correctFeedback="Exactly! Yoshimitsu's keepout is elite. Make them come to you, then punish them for it."
          incorrectFeedback="Not quite. Yoshimitsu wants to control mid-range first. Stances and panic tools come AFTER you've established your keepout game."
        />
      </Section>

      <Section title="The Hard Truth">
        <p>
          Yoshimitsu is <span className="highlight-secondary">not easy</span>. Here's what makes him hard:
        </p>

        <KeyConcept title="Real Challenges" icon="⚠️">
          <ul>
            <li><strong>Weak to sidestep right</strong> — Many key moves lose to SSR. You need to track.</li>
            <li><strong>Knowledge intensive</strong> — 6 stances, countless transitions. Takes time to internalize.</li>
            <li><strong>No autopilot offense</strong> — Unlike Mishimas or Laws, you can't just "do your thing." You adapt.</li>
            <li><strong>Flash is a read, not a reaction</strong> — i6 doesn't mean you react to everything. You predict.</li>
            <li><strong>Self-damage</strong> — Some moves cost HP. Miscalculate and you kill yourself.</li>
          </ul>
        </KeyConcept>

        <p>
          But here's the reward: when Yoshimitsu clicks, <span className="highlight">no other character feels this good</span>. 
          You're not playing their game — they're playing yours.
        </p>
      </Section>

      <Section title="Your Journey">
        <p>
          This guide builds your Yoshimitsu progressively. We start with fundamentals — no stances, no gimmicks. 
          Just solid Tekken. Then we add layers:
        </p>

        <KeyConcept title="The Path" icon="📈">
          <ol>
            <li><strong>Foundation</strong> — Pokes, mids, basic pressure (Chapters 2-3)</li>
            <li><strong>Lows & Strings</strong> — Opening up turtles (Chapters 4-5)</li>
            <li><strong>Launchers & Combos</strong> — Converting hits into damage (Chapters 6-7)</li>
            <li><strong>Panic Tools</strong> — Flash and Manji Spin, Yoshi's signatures (Chapters 8-9)</li>
            <li><strong>Stances</strong> — DGF, KIN, and the others (Chapters 10-12)</li>
            <li><strong>Mastery</strong> — Punishment, Heat, Wall, Complete Gameplan (Chapters 13-16)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="The Golden Rule">
          <strong>Master the basics before adding chaos.</strong> A Yoshimitsu who uses jabs, df+1, df+2, 
          and Flash correctly will beat a gimmicky Yoshimitsu at every rank. The stances become devastating 
          BECAUSE opponents already fear your fundamentals.
        </TipBox>
      </Section>

      <Collapsible title="Notation Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Reference this when you see unfamiliar notation. You don't need to memorize it all now.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Buttons</p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
                <li><code>1</code> = Left Punch</li>
                <li><code>2</code> = Right Punch</li>
                <li><code>3</code> = Left Kick</li>
                <li><code>4</code> = Right Kick</li>
              </ul>
            </div>
            <div>
              <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Directions</p>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
                <li><code>f</code> = Forward</li>
                <li><code>b</code> = Back</li>
                <li><code>d</code> = Down</li>
                <li><code>u</code> = Up</li>
                <li><code>df</code> = Down-forward</li>
              </ul>
            </div>
          </div>
          
          <p style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Yoshimitsu Stances</p>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
            <li><strong>NSS</strong> = No Sword Stance — Sheathes his sword</li>
            <li><strong>DGF</strong> = Dragonfly — Flying helicopter stance</li>
            <li><strong>KIN</strong> = Kincho — Meditation sword stance</li>
            <li><strong>IND</strong> = Indian Sit — Sitting meditation</li>
            <li><strong>FLE</strong> = Flea — Pogo stick on sword</li>
            <li><strong>BDS</strong> = Bad Stomach — Poison breath</li>
          </ul>
          
          <p style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Frame Data</p>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
            <li><code>i15</code> = 15 frame startup</li>
            <li><code>+5</code> = Plus frames (your advantage)</li>
            <li><code>-9</code> = Minus frames (their advantage)</li>
            <li><strong>CH</strong> = Counter Hit</li>
            <li><strong>FC</strong> = Full Crouch</li>
            <li><strong>ws</strong> = While Standing</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
