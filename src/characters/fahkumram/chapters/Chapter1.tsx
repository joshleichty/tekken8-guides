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
      title="Meet Fahkumram"
      intro="Fahkumram is a towering Muay Thai champion with the best range in Tekken. His unique playstyle rewards spacing, conditioning, and knowing when to unleash his devastating Rama stance mixups."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Buttons"
    >
      <Section title="The Apex Predator">
        <p>
          Fahkumram isn't your typical rushdown character. He's a <span className="highlight">specialist</span> who 
          dominates at mid-range with kicks that reach across the screen. While he has clear weaknesses, 
          his strengths are among the best in the game when utilized properly.
        </p>

        <p>
          This character rewards patience and space control. You'll learn to use his incredible range 
          to keep opponents at bay, punish mistakes hard, and unleash devastating mixups when you've 
          earned your Garuda Force install.
        </p>

        <KeyConcept title="What Fahkumram Wants to Do" icon="⚡">
          <ul>
            <li><strong>Control mid-range</strong> with kicks like 3, df+4, and b,f+4</li>
            <li><strong>Create space</strong> with his strong backdash and pushback moves</li>
            <li><strong>Earn Garuda Force</strong> through combos and specific moves</li>
            <li><strong>Mixup with Rama stance</strong> — his signature 5-way guessing game</li>
            <li><strong>Punish hard</strong> — excellent whiff punishment with massive range</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Best range in the game</strong> — His kicks reach further than anyone else</li>
          <li><strong>Huge damage</strong> — High combo damage and chunky individual hits</li>
          <li><strong>Great tracking</strong> — 3+4 tracks left, b,f+4 tracks right</li>
          <li><strong>Strong punishment</strong> — Excellent whiff punishers with range</li>
          <li><strong>Powerful install</strong> — Garuda Force gives access to new moves and Rama stance</li>
          <li><strong>Good parries</strong> — Kick parry, punch parry, and GRF 1+2 reversal</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Poor sidewalk</strong> — One of the worst in the game</li>
          <li><strong>Risky lows</strong> — All main lows are at least -13 on block</li>
          <li><strong>Slow df+1</strong> — At 15 frames, it's slower than most characters</li>
          <li><strong>Execution requirements</strong> — Piano inputs for optimal play</li>
          <li><strong>Predictable mixups</strong> — Rama stance can be disrespected at high level</li>
        </ul>

        <TipBox variant="tip" title="Sidestep, Don't Sidewalk">
          Fahkumram has a unique movement philosophy. His sidewalk is bad, but his sidestep is functional.
          Learn to sidestep-block rather than sidewalking. We'll cover this more in later chapters.
        </TipBox>
      </Section>

      <Section title="Notation Guide">
        <p>
          Throughout this guide, you'll see notation like <code>b,f+4</code> or <code>df+1</code>. 
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
                <li><code>1+3</code> = LP + LK</li>
                <li><code>2+4</code> = RP + RK</li>
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
              <li><code>b,f</code> = Back, then forward (jet kick motion)</li>
              <li><code>f,f,f</code> = Running (hold forward after dash)</li>
            </ul>
            
            <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>States</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><code>ws</code> = While Standing (from crouch)</li>
              <li><code>FC</code> = Full Crouch (holding down)</li>
              <li><code>WR</code> or <code>f,f,F</code> = While Running</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Fahkumram-Specific Terms" icon="⚡">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>GRF</strong> = Garuda Force (Fahkumram's install mechanic)</li>
              <li><strong>RAM</strong> = Rama Stance (mixup stance from guard breaks)</li>
              <li><strong>Piano</strong> = Pressing buttons in rapid sequence (e.g., 3~4~3)</li>
              <li><strong>Hold/Charge</strong> = Holding a button for guard break (e.g., 3,4~3*)</li>
              <li><strong>Jet Kick</strong> = b,f+4 (his iconic launcher)</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Combo & Frame Terms" icon="📊">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>T!</strong> = <span className="highlight">Tornado</span> — The spinning state that extends combos. You get one per combo.</li>
              <li><strong>CH</strong> = Counter Hit — Hitting an opponent during their attack startup</li>
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
          This guide is structured to build your Fahkumram skills progressively. Each chapter adds 
          new tools on top of what you've already learned.
        </p>

        <KeyConcept title="The Learning Path" icon="📈">
          <ol>
            <li><strong>Foundation</strong> — Basic pokes, mids, lows, and movement</li>
            <li><strong>Strings & Combos</strong> — The 3,4 system and basic routes</li>
            <li><strong>Core Tools</strong> — Garuda Force install and Rama stance</li>
            <li><strong>Game Systems</strong> — Punishment, combos, and frame traps</li>
            <li><strong>Heat & Defense</strong> — Heat system and parries</li>
            <li><strong>Mastery</strong> — Complete gameplan and matchup knowledge</li>
          </ol>
        </KeyConcept>

        <p>
          Take your time with each chapter. Fahkumram has a unique playstyle that requires 
          understanding his strengths and limitations. By the end, you'll have a complete 
          Fahkumram ready for ranked.
        </p>

        <TipBox variant="warning" title="Range is Everything">
          Many Fahkumram players try to play him like a rushdown character — that's a mistake.
          His power comes from controlling space. Learn to be comfortable at mid-range and 
          let your range do the work.
        </TipBox>
      </Section>
    </Chapter>
  )
}
