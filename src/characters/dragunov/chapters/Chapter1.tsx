import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  ProgressMilestone,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The White Angel of Death"
      intro="Sergei Dragunov is known by many names — the silent Russian, the White Reaper, Combat Sambo incarnate. But what matters is this: he is a predator. And you are about to learn how to hunt."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Moves"
    >
      <Section title="The Predator's Mindset">
        <p>
          Dragunov doesn't speak. He doesn't need to. His fighting style does the talking — 
          <span className="highlight">relentless pressure</span>, devastating throws, and 
          calculated aggression that suffocates opponents.
        </p>

        <p>
          Unlike characters who control space from afar, Dragunov wants to be 
          <span className="highlight-secondary"> in your face</span>. His gameplan is simple: 
          get close, get plus frames, and make you guess wrong until you're dead.
        </p>

        <KeyConcept title="What Dragunov Wants" icon="🎯">
          <ul>
            <li><strong>Close the distance</strong> — His best tools are close-range pressure</li>
            <li><strong>Get plus frames</strong> — WR+2, b+1+2, qcf+4 all leave you advantaged</li>
            <li><strong>Apply throws</strong> — Command grabs are his PRIMARY offense</li>
            <li><strong>Chip with lows</strong> — d+2 and FC df+1,4 force respect</li>
            <li><strong>Snowball the round</strong> — Once ahead, maintain pressure until they break</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Most Important Lesson">
          At lower and intermediate levels, <strong>throws should be your main offense</strong>, 
          not lows. Dragunov has command grabs for every break (1, 2, and 1+2). Until you face 
          opponents who can break throws on reaction, spam them relentlessly. The hatchet kick (d+2) 
          is a backup, not your primary tool.
        </TipBox>
      </Section>

      <Section title="The Stalker's Loop">
        <p>
          Dragunov's gameplay revolves around a core loop. Understanding this loop is more 
          important than memorizing moves:
        </p>

        <KeyConcept title="The Hunt Loop" icon="🔄">
          <ol>
            <li><strong>Create space</strong> — Backdash, sidestep, observe</li>
            <li><strong>Find the opening</strong> — Wait for them to whiff or hesitate</li>
            <li><strong>Close with WR+2</strong> — Your signature approach tool</li>
            <li><strong>Apply plus frame pressure</strong> — You're now +4 to +7</li>
            <li><strong>Mix throws and mids</strong> — Make them guess</li>
            <li><strong>Reset or continue</strong> — Based on hit/block result</li>
          </ol>
        </KeyConcept>

        <p>
          Think of yourself as a predator stalking prey. You don't chase blindly — you 
          <span className="highlight"> wait for the perfect moment</span>, then strike with 
          overwhelming force. If they escape, reset and hunt again.
        </p>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Elite pokes</strong> — 1, df+1, d+2 are among the best in the game</li>
          <li><strong>Complete throw game</strong> — Command grabs for every break direction</li>
          <li><strong>Oppressive plus frames</strong> — WR+2, b+1+2, qcf+4 leave you advantaged</li>
          <li><strong>Excellent movement</strong> — Above-average backdash and sidestep</li>
          <li><strong>Strong 50/50s</strong> — FC mix is terrifying once mastered</li>
          <li><strong>Good whiff punishment</strong> — df+2, qcf+1, ws+2 all launch</li>
          <li><strong>Great counter-hit tools</strong> — 1,2,1 and b+4,2,1 are hit-confirmable CH strings</li>
          <li><strong>Scary heat game</strong> — Unbreakable tackles make heat devastating</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Linear at times</strong> — WR+2 and key moves can be sidestepped right</li>
          <li><strong>Tracking issues</strong> — Must use homing moves to catch steppers</li>
          <li><strong>Mediocre block punishment</strong> — 10f and 12f punishes give plus frames but no big damage until i15</li>
          <li><strong>Requires patience</strong> — Running in blindly gets you killed</li>
          <li><strong>Weak power crush</strong> — 1+2 is -14 on block</li>
        </ul>

        <TipBox variant="tip" title="Sidestep Right is Your Weakness">
          Good players will sidestep right against Dragunov. You need to condition them with 
          homing moves (b+3, df+3+4) and throws before you can freely run in. Don't let them 
          walk all over you.
        </TipBox>
      </Section>

      <Section title="Notation Guide">
        <p>
          Throughout this guide, you'll see notation like <code>f,f,F+2</code> or <code>qcf+4</code>. 
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
              <li><code>f,f,F</code> = While Running (hold forward after dash)</li>
              <li><code>qcf</code> = Quarter circle forward (d, df, f) — Dragunov's Sneak</li>
              <li><code>qcb</code> = Quarter circle back (d, db, b)</li>
            </ul>
            
            <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>States</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><code>ws</code> = While Standing (rising from crouch)</li>
              <li><code>FC</code> = Full Crouch (holding down)</li>
              <li><code>WR</code> or <code>f,f,F</code> = While Running</li>
              <li><code>SNK</code> = Sneak stance (qcf or after certain moves)</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Dragunov-Specific Terms" icon="🪖">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>SNK</strong> = Sneak stance, accessed via qcf or holding df after certain moves</li>
              <li><strong>WR+2</strong> = While Running 2 (<code>f,f,F+2</code>) — His signature move</li>
              <li><strong>Tackle</strong> = Ambush Tackle, his unique ground throw</li>
              <li><strong>Pigeon Roll (PGR)</strong> = 3+4 rolling stance</li>
              <li><strong>Hatchet Kick</strong> = d+2 — His main low poke</li>
              <li><strong>Blue Spark</strong> = Just-frame version of certain moves (more damage)</li>
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
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Your Learning Path">
        <p>
          This guide is structured to build your Dragunov skills progressively. Each chapter 
          adds new weapons to your arsenal, building on what came before.
        </p>

        <ProgressMilestone
          title="The Hunt Begins"
          steps={[
            { id: 'prey', label: 'Know Your Prey', description: 'Mindset and basic pokes' },
            { id: 'distance', label: 'Closing Distance', description: 'WR+2 and plus frame pressure' },
            { id: 'kill', label: 'The Kill', description: 'Throws, Sneak stance, FC mixups' },
            { id: 'execution', label: 'Execution', description: 'Combos and punishment' },
            { id: 'heat', label: 'Heat & Defense', description: 'Unbreakable tackles and panic options' },
            { id: 'mastery', label: 'Complete Dragunov', description: 'Full gameplan and matchup strategy' },
          ]}
          currentStep={0}
        />

        <TipBox variant="tip" title="How to Use This Guide">
          <strong>Don't skip ahead.</strong> Dragunov's power comes from layering tools together. 
          The plus frame pressure in Chapter 4 means nothing if you can't close distance from Chapter 3. 
          The throws in Chapter 5 only work if opponents respect your mids from Chapter 2. 
          Build the foundation first.
        </TipBox>
      </Section>
    </Chapter>
  )
}
