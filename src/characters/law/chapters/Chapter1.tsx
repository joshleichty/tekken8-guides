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
      title="Meet Marshall Law"
      intro="Marshall Law is the quintessential rushdown character. Armed with incredible jab pressure, the infamous slide, and Dragon Charge stance, Law chips away at opponents until they crack."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Buttons"
    >
      <Section title="The Legendary Dragon">
        <p>
          Marshall Law is an <span className="highlight">aggressive poking and counter-hit</span> character. 
          Unlike characters who rely on big launchers and 50/50 mixups, Law wins through relentless 
          pressure — death by a thousand cuts.
        </p>

        <p>
          His game plan centers around the <strong>slide</strong>, one of the cheapest lows in Tekken. 
          The threat of slide forces opponents to react, and when they try to counter it, Law punishes 
          them with his incredible array of counter-hit tools.
        </p>

        <KeyConcept title="What Law Wants to Do" icon="🐉">
          <ul>
            <li><strong>Get in close</strong> — Law's jab range is where he dominates</li>
            <li><strong>Pressure with plus frames</strong> — f+1+2, db+3, and ws+4 into DSS</li>
            <li><strong>Threaten the slide</strong> — Force reactions with full crouch mixups</li>
            <li><strong>Counter-hit fish</strong> — 1,1,1, f+1+2, and 1+2 punish button presses</li>
            <li><strong>Loop pressure</strong> — DSS transitions let you maintain momentum</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Best jab pressure in the game</strong> — Multiple counter-hit confirmable strings from 10 frames</li>
          <li><strong>Plus frames everywhere</strong> — f+1+2, db+3, ws+3, ws+4~DSS, and more</li>
          <li><strong>The slide</strong> — One of Tekken's most annoying lows</li>
          <li><strong>Easy execution</strong> — DSS is much easier in Tekken 8 than previous games</li>
          <li><strong>Strong punishment</strong> — Good options at every frame level</li>
          <li><strong>Heat meter recovery</strong> — 1+2 and uf+2 restore Heat time on hit</li>
          <li><strong>All-rounder toolkit</strong> — Has tools for every situation</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Must play aggressive</strong> — No value in defensive play, must take initiative</li>
          <li><strong>Linear</strong> — Most key moves can be stepped right (Law's left)</li>
          <li><strong>Range issues</strong> — Struggles at range 1.5-2 before getting in</li>
          <li><strong>DSS risk</strong> — Messing up DSS timing can get you launched</li>
          <li><strong>High-heavy strings</strong> — Many pressure tools are highs that can be ducked</li>
          <li><strong>Parry limitations</strong> — Punch parry doesn't work on knees, elbows, or weapons</li>
        </ul>

        <TipBox variant="tip" title="Don't Worry About DSS Yet">
          Dragon Charge (DSS) is Law's signature stance, but you don't need it to start winning. 
          We'll cover it in Chapter 6 after you've learned the fundamentals. Law works great 
          with just his basic tools while you develop stance proficiency.
        </TipBox>
      </Section>

      <Section title="Notation Guide">
        <p>
          Throughout this guide, you'll see notation like <code>f+1+2</code> or <code>ws+4</code>. 
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
                <li><code>1+3</code> = LP + LK (throw)</li>
                <li><code>2+4</code> = RP + RK (throw)</li>
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
              <li><code>~f</code> = Hold forward (transition to DSS)</li>
              <li><code>~D</code> = Hold down (go to crouch)</li>
            </ul>
            
            <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>States</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><code>ws</code> = While Standing (from crouch)</li>
              <li><code>FC</code> = Full Crouch (holding down)</li>
              <li><code>WR</code> or <code>f,f,F</code> = While Running</li>
              <li><code>BT</code> = Back Turned</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Law-Specific Terms" icon="🐉">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>DSS</strong> = Dragon Sign Stance / Dragon Charge (<code>d+1+2</code> or hold forward after certain moves)</li>
              <li><strong>Slide</strong> = <code>FC df,d,df+3</code> — Law's signature full crouch low</li>
              <li><strong>Junkyard</strong> = <code>b+2,3,4</code> — The notorious mid-low-mid string</li>
              <li><strong>Dragon Hammer</strong> = <code>f+1+2</code> — Plus on block mid</li>
              <li><strong>Legend Kick</strong> = <code>DSS f+4</code> — The high with massive plus frames</li>
              <li><strong>Nunchuck</strong> = <code>1+2</code> — Counter-hit launcher, becomes safe in Heat</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Combo & Frame Terms" icon="📊">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>T!</strong> = <span className="highlight">Tornado</span> — The spinning state that extends combos. One per combo.</li>
              <li><strong>CH</strong> = Counter Hit — Hitting during their attack startup</li>
              <li><strong>NH</strong> = Normal Hit</li>
              <li><strong>oB</strong> = On Block — Frames when opponent blocks</li>
              <li><strong>oH</strong> = On Hit — Frames when move connects</li>
              <li><strong>i</strong> = Startup frames (e.g., i15 = 15 frame startup)</li>
              <li><strong>+</strong> = Plus frames (your advantage)</li>
              <li><strong>-</strong> = Minus frames (opponent's advantage)</li>
              <li><strong>NCC</strong> = Natural Counter-hit Combo — Confirms from first hit on CH</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="What This Guide Covers">
        <p>
          This guide is structured to build your Law skills progressively. Each chapter adds 
          new tools on top of what you've already learned.
        </p>

        <KeyConcept title="The Learning Path" icon="📈">
          <ol>
            <li><strong>Foundation</strong> — Jabs, mids, lows, and your first pressure</li>
            <li><strong>Strings & Combos</strong> — Counter-hit strings and combo routes</li>
            <li><strong>Core Tools</strong> — DSS stance and the slide mixup</li>
            <li><strong>Game Systems</strong> — Punishment, frame traps, and setups</li>
            <li><strong>Heat & Defense</strong> — Heat mode power and defensive options</li>
            <li><strong>Mastery</strong> — Wall game, oki, and complete gameplan</li>
          </ol>
        </KeyConcept>

        <p>
          Take your time with each chapter. Law has depth, but his basics are strong enough 
          to carry you through ranked while you develop the more advanced tools.
        </p>

        <TipBox variant="warning" title="Slide Isn't Everything">
          New Law players often focus too much on the slide. The slide is important, but it's 
          a tool to get reactions — not your entire gameplan. Your jab pressure and counter-hit 
          game will win more matches than raw slide spam.
        </TipBox>
      </Section>
    </Chapter>
  )
}
