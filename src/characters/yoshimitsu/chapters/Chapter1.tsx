import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="Meet Yoshimitsu"
      intro="Yoshimitsu is Tekken's wildcard — a mechanized ninja with tools for every situation. He excels at keepout, has the best panic moves in the game, and can delete your opponent's offense with Flash and Manji Spin."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Buttons"
    >
      <Section title="The Unpredictable Ninja">
        <p>
          Yoshimitsu is often called a <span className="highlight">"jack of all trades, master of none"</span>. 
          This undersells him. Yes, he has tools for every situation, but his keepout game and panic tools 
          are genuinely best-in-class. No other character can escape pressure like Yoshimitsu.
        </p>

        <p>
          The challenge is that Yoshimitsu has an overwhelming number of moves, stances, and gimmicks. 
          This guide will cut through the noise. We'll focus on the tools that work consistently at 
          every level, then layer in the advanced tech once you've built a solid foundation.
        </p>

        <KeyConcept title="What Yoshimitsu Wants to Do" icon="🗡️">
          <ul>
            <li><strong>Keep opponents out</strong> — df+2, poison breath, FC df+4 control space</li>
            <li><strong>Escape pressure</strong> — Flash (1+4) and Manji Spin delete mixups</li>
            <li><strong>Confuse opponents</strong> — Stances create guessing games you control</li>
            <li><strong>Punish mistakes</strong> — Fast punishes and whiff punishers</li>
            <li><strong>Dominate oki</strong> — Best wake-up pressure in Tekken</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Best panic tools in Tekken</strong> — Flash is i6-8, Manji Spin evades almost everything</li>
          <li><strong>Elite keepout</strong> — Long-range mids that recover too fast to whiff punish</li>
          <li><strong>Incredible oki</strong> — Unblockable low, stance pressure, endless mixups</li>
          <li><strong>Versatile stances</strong> — DGF and KIN give real 50/50s and plus frames</li>
          <li><strong>Can heal himself</strong> — Recovers health through various moves in NSS and KIN</li>
          <li><strong>Chip damage</strong> — Many sword attacks deal chip damage on block</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Weak to sidestep right</strong> — Many key moves lose to SSR</li>
          <li><strong>No braindead offense</strong> — Needs stances for real mixups</li>
          <li><strong>Mediocre plus frame pokes</strong> — Has to work harder to open turtles</li>
          <li><strong>Bad sidestep consistency</strong> — His own sidestep is unreliable</li>
          <li><strong>Knowledge intensive</strong> — Many stances and transitions to learn</li>
          <li><strong>Self-damage on some moves</strong> — Manji Spin and other tools cost HP</li>
        </ul>

        <TipBox variant="tip" title="Don't Learn Everything at Once">
          Yoshimitsu has 6 stances and hundreds of moves. If you try to learn them all at once, 
          you'll be overwhelmed and form bad habits. This guide teaches you the fundamentals first. 
          Once you're comfortable, THEN we add stances and gimmicks.
        </TipBox>
      </Section>

      <Section title="The Yoshimitsu Mindset">
        <p>
          Most Tekken characters play by the rules: poke, check, frame trap, launch. Yoshimitsu 
          can do that, but his real strength is <span className="highlight">making his own rules</span>.
        </p>

        <KeyConcept title="How Yoshimitsu Controls the Game" icon="🧠">
          <ol>
            <li><strong>Make them scared to press</strong> — Flash threat stops offense</li>
            <li><strong>Keep them out</strong> — Long-range mids control space</li>
            <li><strong>Force their approach</strong> — They have to come to you</li>
            <li><strong>Punish the approach</strong> — Counter-hit launchers and keepout tools</li>
            <li><strong>Apply oki pressure</strong> — Knockdowns lead to terrifying wake-up games</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Avoid the Gimmick Trap">
          New Yoshimitsu players often rely on gimmicks — spinning moves, unblockables, random stances. 
          This works at low ranks but creates horrible habits. Learn the fundamentals first. The 
          gimmicks become effective when your opponent has to respect your fundamentals.
        </TipBox>
      </Section>

      <Section title="Notation Guide">
        <p>
          Throughout this guide, you'll see notation like <code>df+2</code> or <code>FC df+4</code>. 
          Here's what it all means.
        </p>

        <Collapsible title="Button Notation" icon="🎮" defaultOpen>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
            <div>
              <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Buttons</p>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><code>1</code> = Left Punch (Square / X)</li>
                <li><code>2</code> = Right Punch (Triangle / Y)</li>
                <li><code>3</code> = Left Kick (X / A)</li>
                <li><code>4</code> = Right Kick (Circle / B)</li>
              </ul>
            </div>
            <div>
              <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Combinations</p>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><code>1+2</code> = Both punches</li>
                <li><code>3+4</code> = Both kicks</li>
                <li><code>1+3</code> = LP + LK (usually throws)</li>
                <li><code>1+4</code> = LP + RK (Flash!)</li>
              </ul>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Direction Notation" icon="🕹️">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
            <div>
              <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Cardinals</p>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><code>f</code> = Forward (tap)</li>
                <li><code>b</code> = Back (tap)</li>
                <li><code>d</code> = Down (tap)</li>
                <li><code>u</code> = Up (tap)</li>
                <li><code>n</code> = Neutral (let go)</li>
              </ul>
            </div>
            <div>
              <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Diagonals</p>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><code>df</code> = Down-forward</li>
                <li><code>db</code> = Down-back</li>
                <li><code>uf</code> = Up-forward</li>
                <li><code>ub</code> = Up-back</li>
              </ul>
            </div>
          </div>
        </Collapsible>

        <Collapsible title="Motion & State Notation" icon="📋">
          <div style={{ marginTop: '12px' }}>
            <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Common Motions</p>
            <ul style={{ margin: 0, paddingLeft: '20px', marginBottom: '16px' }}>
              <li><code>f,f</code> = Tap forward twice (dash)</li>
              <li><code>f,n,d,df</code> = Crouch Dash motion</li>
              <li><code>qcf</code> = Quarter circle forward (d, df, f)</li>
              <li><code>qcb</code> = Quarter circle back (d, db, b)</li>
            </ul>
            
            <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>States</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><code>ws</code> = While Standing (from crouch)</li>
              <li><code>FC</code> = Full Crouch (holding down)</li>
              <li><code>BT</code> = Back Turned</li>
              <li><code>SS</code> = Sidestep</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Yoshimitsu-Specific Terms" icon="🗡️">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>NSS</strong> = No Sword Stance (<code>b+1+2</code>) — Yoshimitsu sheathes his sword</li>
              <li><strong>DGF</strong> = Dragonfly Stance (<code>u+1+2</code>) — Flying helicopter stance</li>
              <li><strong>KIN</strong> = Kincho Stance (<code>1+2</code>) — Meditation-like sword stance</li>
              <li><strong>IND</strong> = Indian Sit (<code>d+3+4</code>) — Sitting meditation stance</li>
              <li><strong>MED</strong> = Meditation (<code>3+4</code> in KIN) — Healing stance</li>
              <li><strong>FLE</strong> = Flea Stance (<code>d+1+2</code>) — Pogo stick on sword</li>
              <li><strong>BDS</strong> = Bad Stomach (<code>db+1+2</code>) — Poison breath stance</li>
              <li><strong>Flash</strong> = <code>1+4</code> — Yoshimitsu's signature i6-8 panic move</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Combo & Frame Terms" icon="📊">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>T!</strong> = <span className="highlight">Tornado</span> — The spinning state that extends combos</li>
              <li><strong>CH</strong> = Counter Hit — Hitting during their attack startup</li>
              <li><strong>NH</strong> = Normal Hit</li>
              <li><strong>oB</strong> = On Block — Frames when opponent blocks</li>
              <li><strong>oH</strong> = On Hit — Frames when move connects</li>
              <li><strong>i</strong> = Startup frames (e.g., i15 = 15 frame startup)</li>
              <li><strong>+</strong> = Plus frames (your advantage)</li>
              <li><strong>-</strong> = Minus frames (opponent's advantage)</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="What This Guide Covers">
        <p>
          This guide is structured to build your Yoshimitsu skills progressively. We start with 
          fundamentals, then add stances and advanced tech once you're ready.
        </p>

        <KeyConcept title="The Learning Path" icon="📈">
          <ol>
            <li><strong>Foundation</strong> — Jabs, mids, keepout tools (no stances yet)</li>
            <li><strong>Lows & Strings</strong> — Opening up defensive opponents</li>
            <li><strong>Launchers & Combos</strong> — Converting hits into damage</li>
            <li><strong>Panic Tools</strong> — Flash and Manji Spin (Yoshi's signatures)</li>
            <li><strong>Stances</strong> — DGF, KIN, and when to use them</li>
            <li><strong>Mastery</strong> — Punishment, Heat, Wall Game, and complete gameplan</li>
          </ol>
        </KeyConcept>

        <p>
          By the end, you'll understand not just what moves to do, but why and when. That's what 
          separates button mashers from real Yoshimitsu players.
        </p>

        <TipBox variant="warning" title="The Golden Rule">
          <strong>Master the basics before adding gimmicks.</strong> A solid Yoshimitsu who uses 
          jabs, df+1, and df+2 will beat a gimmicky Yoshimitsu at higher ranks. The fancy stuff 
          becomes effective BECAUSE opponents have to respect your fundamentals.
        </TipBox>
      </Section>
    </Chapter>
  )
}
