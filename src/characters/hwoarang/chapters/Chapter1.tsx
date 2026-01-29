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
      title="Meet Hwoarang"
      intro="Hwoarang is one of the most aggressive characters in Tekken. With four stances, devastating mixups, and relentless pressure, he suffocates opponents who don't know when it's their turn. If you love offense and never letting your opponent breathe, Blood Talon is your character."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Buttons"
    >
      <Section title="The Relentless Pressure Machine">
        <p>
          Hwoarang is categorized as a <span className="highlight">"stance-based rushdown"</span> character. 
          He has four distinct stances, each with unique moves, and his gameplan revolves around 
          transitioning between them while maintaining pressure.
        </p>

        <p>
          Unlike characters who play neutral and fish for whiffs, Hwoarang wants to get in your face 
          and stay there. His strings loop into stances, his stances have plus-frame moves, and 
          before you know it, he's thrown 15 kicks and you're at the wall.
        </p>

        <KeyConcept title="What Hwoarang Wants to Do" icon="🦅">
          <ul>
            <li><strong>Suffocate with pressure</strong> — Keep attacking, never give them a turn</li>
            <li><strong>Mix with stances</strong> — LFS, RFS, RFF all have unique threats</li>
            <li><strong>Fish for counter-hits</strong> — db+4, b+4, RFS f+4,4 all CH launch</li>
            <li><strong>Force guessing</strong> — d+3,4 into RFS is a constant 50/50</li>
            <li><strong>Punish whiffs hard</strong> — b+3 is one of the best whiff punishers in Tekken</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Relentless pressure</strong> — Plus frames from stances mean your turn never ends</li>
          <li><strong>Huge damage potential</strong> — Counter-hit combos are devastating</li>
          <li><strong>Excellent punishment</strong> — 4,3 at i11, b+3 at i16 for whiff punish</li>
          <li><strong>Multiple heat engagers</strong> — Most are safe, giving flexible Heat activation</li>
          <li><strong>Best chip damage</strong> — In Heat, his pressure drains health even on block</li>
          <li><strong>Strong throw game</strong> — Full 1+2 break mixup with qcb+3 for style</li>
          <li><strong>Elite counter-hit tools</strong> — db+4, b+4, RFS f+4,4 are all terrifying</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Complexity</strong> — Four stances, 150+ moves, steep learning curve</li>
          <li><strong>Linear offense</strong> — Many moves can be sidestepped or sidewalked</li>
          <li><strong>Can't block in flamingo</strong> — Committing to LFS/RFS is risky</li>
          <li><strong>Weak panic moves</strong> — No great "get off me" buttons</li>
          <li><strong>Execution requirement</strong> — JFSR requires practice to use consistently</li>
          <li><strong>Struggles vs. strong defense</strong> — Good players can shut him down</li>
        </ul>

        <TipBox variant="tip" title="Don't Fear the Complexity">
          Hwoarang looks intimidating because of his stance system, but you don't need to learn 
          everything at once. We'll start simple — jabs, a few mids, one low — and gradually add 
          stances as your foundation solidifies. By the end of this guide, you'll flow through 
          all four stances naturally.
        </TipBox>
      </Section>

      <Section title="The Four Stances">
        <p>
          Before diving into moves, understand Hwoarang's stance system at a high level. We'll 
          cover each in detail later, but here's what you're working with:
        </p>

        <KeyConcept title="Hwoarang's Stance System" icon="🥋">
          <ul>
            <li><strong>LFF (Left Foot Forward)</strong> — Your default stance. Can block, full movement.</li>
            <li><strong>RFF (Right Foot Forward)</strong> — Secondary neutral stance. Can block, limited sidestep.</li>
            <li><strong>LFS (Left Flamingo)</strong> — Left leg raised. Cannot block! Pressure stance.</li>
            <li><strong>RFS (Right Flamingo)</strong> — Right leg raised. Cannot block! Your deadliest stance.</li>
          </ul>
          <p style={{ marginTop: '12px', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            In flamingo stances, you trade the ability to block for incredible offense. 
            The risk-reward is what makes Hwoarang exciting.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Flamingo = Commitment">
          When you enter Left or Right Flamingo, you <strong>cannot block</strong>. This is crucial. 
          Every time you go to flamingo, you're betting that your offense will beat whatever they do. 
          Learn when to commit and when to stay in LFF/RFF.
        </TipBox>
      </Section>

      <Section title="Notation Guide">
        <p>
          Throughout this guide, you'll see notation like <code>d+3,4</code> or <code>RFS f+4</code>. 
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

        <Collapsible title="Hwoarang-Specific Terms" icon="🦅">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>LFF</strong> = Left Foot Forward (default stance)</li>
              <li><strong>RFF</strong> = Right Foot Forward (<code>3+4</code> or from strings)</li>
              <li><strong>LFS</strong> = Left Flamingo Stance (<code>f+3</code> to enter)</li>
              <li><strong>RFS</strong> = Right Flamingo Stance (<code>f,n,4</code> to enter)</li>
              <li><strong>JFSR</strong> = Just Frame Sky Rocket (<code>f,n,df:4</code> with just-frame timing)</li>
              <li><strong>Backlash</strong> = RFF 3~4 — Power crush high that's plus on block</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Stance Notation in Commands" icon="📋">
          <div style={{ marginTop: '12px' }}>
            <p style={{ marginBottom: '12px' }}>
              When a move requires a specific stance, we write it like this:
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><code>RFS f+4</code> = From Right Flamingo, press forward+4</li>
              <li><code>RFF df+3</code> = From Right Foot Forward, press df+3</li>
              <li><code>LFS 1</code> = From Left Flamingo, press 1</li>
              <li><code>d+3,4</code> = d+3 then 4 (comma means "then" in strings)</li>
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
          This guide is structured to build your Hwoarang from the ground up. Each chapter adds 
          new tools on top of what you've already learned. By the end, you'll have a complete 
          gameplan ready for ranked.
        </p>

        <KeyConcept title="The Learning Path" icon="📈">
          <ol>
            <li><strong>Foundation</strong> — Basic buttons, stances, simple pressure</li>
            <li><strong>Core Offense</strong> — Mids, lows, strings, transitions</li>
            <li><strong>Combos & Stances</strong> — Damage conversion, RFS mastery</li>
            <li><strong>Execution & Systems</strong> — JFSR, punishment, frame traps</li>
            <li><strong>Pressure & Heat</strong> — Flowcharts, chip damage, engagers</li>
            <li><strong>Mastery</strong> — Defense, complete gameplan, rank-up strategies</li>
          </ol>
        </KeyConcept>

        <p>
          Take your time with each chapter. Hwoarang has a lot to learn, but everything builds on 
          what came before. The complexity that makes him intimidating is the same complexity 
          that makes him terrifying once mastered.
        </p>

        <TipBox variant="warning" title="Build Habits Early">
          It's tempting to mash buttons and hope for the best with Hwoarang. Resist that urge. 
          The flowcharts and pressure in this guide are designed to create good habits. 
          Random mashing might win at low ranks, but it creates bad habits that hurt you later.
        </TipBox>
      </Section>

      <Section title="The Hwoarang Mentality">
        <p>
          To play Hwoarang well, you need to embrace a specific mindset:
        </p>

        <KeyConcept title="Play to Win, Not to Survive" icon="🔥">
          <p>
            Hwoarang is not a defensive character. He has weak panic moves, can't block in 
            flamingo, and his best moves require commitment. If you're scared of getting hit, 
            you'll never unlock his potential.
          </p>
          <p style={{ marginTop: '12px' }}>
            Instead, flip the script: make <em>them</em> scared of pressing buttons. Make 
            <em>them</em> guess wrong. When you land d+3,4, immediately commit to a mixup. 
            When you enter RFS, throw out your pressure without hesitation.
          </p>
          <p style={{ marginTop: '12px' }}>
            The best defense in Tekken is a good offense. With Hwoarang, that's not just 
            strategy — it's survival.
          </p>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
