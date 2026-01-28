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
      title="Meet Jin Kazama"
      intro="Jin is the main character of Tekken for a reason. He has tools for every situation, devastating punishment, and the iconic Electric that defines Mishima gameplay."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Buttons"
    >
      <Section title="The Complete Martial Artist">
        <p>
          Jin Kazama is often called a <span className="highlight">"jack of all trades"</span> character. 
          Unlike specialists who excel in one area, Jin is genuinely good at everything — poking, 
          counter-hits, punishment, mixups, wall game, and combos.
        </p>

        <p>
          This makes him an excellent character for learning Tekken. As you improve at the game, 
          Jin improves with you. There's always another layer to discover, another tool to add.
        </p>

        <KeyConcept title="What Jin Wants to Do" icon="⚡">
          <ul>
            <li><strong>Control mid-range</strong> with pokes like f+4 and df+1</li>
            <li><strong>Punish mistakes hard</strong> — elite block and whiff punishment</li>
            <li><strong>Fish for counter-hits</strong> — f+4 on CH is a full combo</li>
            <li><strong>Mix with wave dash</strong> — hell sweep or mid launcher</li>
            <li><strong>Dominate the wall</strong> — ZEN stance pressure is oppressive</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Complete toolkit</strong> — Has an answer for every situation</li>
          <li><strong>Best punishment in Tekken</strong> — 2,4 and Electric are devastating</li>
          <li><strong>Huge combo damage</strong> — Easily 70+ from standard launches</li>
          <li><strong>Great wall carry</strong> — Can take opponents from spawn to wall</li>
          <li><strong>Strong heat game</strong> — Free electrics and one of the best heat smashes</li>
          <li><strong>Solid parry</strong> — Can parry highs and mids for big damage</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Electric execution</strong> — EWHF requires practice to use consistently</li>
          <li><strong>Linear at times</strong> — Some key moves can be sidestepped</li>
          <li><strong>Slower lows</strong> — His main lows are on the reactable side</li>
          <li><strong>Stiff movement</strong> — Backdash is below average</li>
          <li><strong>Many tools to learn</strong> — The depth is a blessing and a curse</li>
        </ul>

        <TipBox variant="tip" title="Don't Worry About the Electric">
          The Electric (EWHF) is Jin's signature move, but you don't need it to start playing Jin. 
          We'll cover it in Chapter 6 after you've learned the fundamentals. Jin functions great 
          with his other tools while you develop the execution.
        </TipBox>
      </Section>

      <Section title="Notation Guide">
        <p>
          Throughout this guide, you'll see notation like <code>f+4</code> or <code>df+1</code>. 
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
              <li><code>f,n,d,df</code> = Crouch Dash (the wave dash motion)</li>
              <li><code>qcb</code> = Quarter circle back (d, db, b)</li>
            </ul>
            
            <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>States</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><code>ws</code> = While Standing (from crouch)</li>
              <li><code>FC</code> = Full Crouch (holding down)</li>
              <li><code>WR</code> or <code>f,f,F</code> = While Running</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Jin-Specific Terms" icon="⚡">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>EWHF</strong> = Electric Wind Hook Fist (<code>f,n,d,df:2</code> with just-frame timing)</li>
              <li><strong>CD</strong> = Crouch Dash (<code>f,n,d,df</code>)</li>
              <li><strong>ZEN</strong> = Zenshin Stance (<code>b+3+4</code> or <code>f+3+4</code>)</li>
              <li><strong>BRS</strong> = Breaking Step (<code>f+3+4~df</code>)</li>
              <li><strong>DVS / Omen</strong> = Devil/Omen Stance (heat-only)</li>
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
          This guide is structured to build your Jin skills progressively. Each chapter adds 
          new tools on top of what you've already learned.
        </p>

        <KeyConcept title="The Learning Path" icon="📈">
          <ol>
            <li><strong>Foundation</strong> — Jabs, mids, lows, and strings</li>
            <li><strong>Combos</strong> — From beginner routes to optimized damage</li>
            <li><strong>Core Mechanics</strong> — The Electric and ZEN stance</li>
            <li><strong>Game Systems</strong> — Punishment, Heat, and Defense</li>
            <li><strong>Mastery</strong> — Wall game, oki, counter-hits, and complete gameplan</li>
          </ol>
        </KeyConcept>

        <p>
          Take your time with each chapter. Jin has a lot to learn, but everything builds on 
          what came before. By the end, you'll have a complete Jin ready for ranked.
        </p>

        <TipBox variant="warning" title="Learn the Basics First">
          It's tempting to jump straight to the Electric or fancy combos. Resist that urge. 
          The pokes and fundamentals in Chapters 2-4 are what you'll use 80% of the time. 
          Build that foundation first.
        </TipBox>
      </Section>
    </Chapter>
  )
}
