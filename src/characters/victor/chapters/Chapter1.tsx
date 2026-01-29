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
      title="Meet Victor Chevalier"
      intro="Victor Chevalier is the refined super spy of Tekken 8. With his katana, knives, karambit, and pistol, he delivers what can only be described as 'refined violence'. His weapons can't be parried, his wall pressure is terrifying, and his chip damage is among the best in the game."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Buttons"
    >
      <Section title="The Elegant Assassin">
        <p>
          Victor Chevalier immediately became a fan favorite in Tekken 8. His unique aesthetic — 
          a sophisticated gentleman who fights with an arsenal of weapons — makes him one of the 
          most <span className="highlight">stylish characters</span> in the game.
        </p>

        <p>
          But Victor isn't just about looks. He's a <strong>well-rounded, weapons-based fighter</strong> who 
          strikes a balance between rush-down and keep-out. His game plan revolves around finding 
          high-impact counter-hits, carrying opponents to the wall, and applying devastating 50/50 
          pressure from his stances.
        </p>

        <KeyConcept title="What Victor Wants to Do" icon="🗡️">
          <ul>
            <li><strong>Control space</strong> with long-range mids like d+2, f+1+2, and 1+2</li>
            <li><strong>Fish for counter-hits</strong> — 1+2, ws2, and db+4 all launch on CH</li>
            <li><strong>Carry to the wall</strong> — Victor's combos have massive wall carry</li>
            <li><strong>Apply stance pressure</strong> — IAI stance at the wall is terrifying</li>
            <li><strong>Deal chip damage</strong> — Even blocked moves hurt with Victor</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Weapons Advantage">
        <p>
          Victor's most unique trait is that <span className="highlight">most of his moves use weapons</span>. 
          This isn't just cosmetic — it has a major gameplay impact:
        </p>

        <KeyConcept title="Weapon Attacks Can't Be Parried" icon="⚔️">
          <p>
            Characters like Asuka, Jin, and Leroy have powerful parries that can shut down 
            pressure. Against Victor, <strong>these parries don't work</strong> on his weapon moves.
          </p>
          <ul style={{ marginTop: '12px' }}>
            <li><strong>Sword attacks</strong> — All katana moves (IAI stance, f+1+2, etc.)</li>
            <li><strong>Knife attacks</strong> — Karambit moves (1+2, d+2, etc.)</li>
            <li><strong>Gun attacks</strong> — Projectile moves (qcf+2, 2,2,2 ender)</li>
            <li><strong>Low knife</strong> — d+1 can't even be LOW parried</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Why This Matters">
          Against parry-heavy characters, Victor can pressure without fear. Your opponent 
          can't just parry and shut you down — they have to actually block and deal with 
          your mixups. This is a huge advantage in certain matchups.
        </TipBox>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Exceptional keep-out</strong> — 1+2, b+1+2, and db+4 shut down aggression</li>
          <li><strong>Elite punishment</strong> — Great punishes at every frame range with reach</li>
          <li><strong>Massive wall carry</strong> — Can carry from spawn to wall consistently</li>
          <li><strong>Devastating wall pressure</strong> — IAI stance 50/50s are terrifying</li>
          <li><strong>High chip damage</strong> — Even blocked attacks hurt the opponent</li>
          <li><strong>Unparryable weapons</strong> — Ignores many defensive options</li>
          <li><strong>Strong heat system</strong> — Enhanced moves and safe u+1+2 in heat</li>
          <li><strong>Low execution</strong> — No electrics or difficult inputs required</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Weak to sidestep right (SSR)</strong> — Most core moves lose to SSR</li>
          <li><strong>Mediocre pokes</strong> — His fast tools aren't great, relies on slower moves</li>
          <li><strong>Risky lows</strong> — Main lows are launch punishable on block</li>
          <li><strong>Committal playstyle</strong> — Big moves have bad whiff recovery</li>
          <li><strong>No 2-break throw</strong> — Weak throw game overall</li>
          <li><strong>Large hurtbox</strong> — Gets clipped by things other characters evade</li>
        </ul>

        <TipBox variant="warning" title="The SSR Problem">
          Victor's biggest weakness is <strong>sidestep right</strong>. Most of his key moves — 
          f,f,f+2, d+2, f+1+2, 1+2 — all lose to SSR. You MUST use homing moves (uf+2, b+4) 
          to condition opponents before your main tools work consistently.
        </TipBox>
      </Section>

      <Section title="The Two Stances">
        <p>
          Victor has two stances that define his advanced gameplay. You don't need to master 
          them immediately, but understanding their purpose is important:
        </p>

        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <code style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>Perfumer (PRF)</code>
            <span style={{ marginLeft: '12px' }}>Enter with f+3 or transitions</span>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              The neutral/okizeme stance. Features Victor's best low (PRF.1), safe mids, and 
              transitions into IAI. Great for pressure and grounded hits.
            </p>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <code style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem' }}>IAI Stance</code>
            <span style={{ marginLeft: '12px' }}>Enter with 3+4 or transitions</span>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              The wall pressure stance. Features devastating 50/50 mixups with long-range mids 
              and a power low. Where Victor becomes truly scary.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="Don't Worry About Stances Yet">
          Stances are covered in Chapters 5-7. For now, focus on learning Victor's fundamental 
          moves. The stances build on top of these basics — you'll naturally flow into them 
          as you progress.
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
              <li><code>f,f,f</code> = While running (WR)</li>
              <li><code>qcf</code> = Quarter circle forward (d, df, f)</li>
              <li><code>~f</code> = Hold forward to transition</li>
            </ul>
            
            <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>States</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><code>ws</code> = While Standing (from crouch)</li>
              <li><code>FC</code> = Full Crouch (holding down)</li>
              <li><code>WR</code> or <code>f,f,f</code> = While Running</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Victor-Specific Terms" icon="🗡️">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>PRF</strong> = Perfumer Stance (f+3 or transitions with ~f)</li>
              <li><strong>IAI</strong> = IAI Stance (3+4 or from certain moves)</li>
              <li><strong>PRF.1</strong> = Move done from Perfumer stance</li>
              <li><strong>IAI.2</strong> = Move done from IAI stance</li>
              <li><strong>IAI.d+2</strong> = Down+2 from IAI stance</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Combo & Frame Terms" icon="📊">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>T!</strong> = <span className="highlight">Tornado</span> — The spinning state that extends combos</li>
              <li><strong>CH</strong> = Counter Hit — Hitting during their attack startup</li>
              <li><strong>NH</strong> = Normal Hit</li>
              <li><strong>oB</strong> = On Block — Frame advantage when blocked</li>
              <li><strong>oH</strong> = On Hit — Frame advantage when it connects</li>
              <li><strong>i</strong> = Startup frames (e.g., i15 = 15 frame startup)</li>
              <li><strong>+</strong> = Plus frames (your advantage)</li>
              <li><strong>-</strong> = Minus frames (opponent's advantage)</li>
              <li><strong>HE</strong> = Heat Engager</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="What This Guide Covers">
        <p>
          This guide takes you from complete beginner to tournament-ready Victor. Each chapter 
          builds on the previous, so work through them in order.
        </p>

        <KeyConcept title="The Learning Path" icon="📈">
          <ol>
            <li><strong>Foundation (Ch. 1-4)</strong> — Jabs, mids, lows, basic strings</li>
            <li><strong>Stance Mastery (Ch. 5-7)</strong> — PRF and IAI stances in depth</li>
            <li><strong>Combos (Ch. 8-10)</strong> — From beginner routes to wall optimization</li>
            <li><strong>Game Systems (Ch. 11-13)</strong> — Punishment, frame traps, heat</li>
            <li><strong>Mastery (Ch. 14-15)</strong> — Defense, keep-out, complete gameplan</li>
          </ol>
        </KeyConcept>

        <p>
          Take your time with each chapter. Victor has depth, but he's not execution-heavy — 
          the challenge is learning <strong>when</strong> to use each tool, not <strong>how</strong> 
          to input it. Focus on fundamentals first.
        </p>

        <TipBox variant="tip" title="The 80/20 Rule">
          80% of your offense will come from about 10 moves. The first few chapters focus on 
          these core tools. Master them before diving into stances and advanced tech. A solid 
          foundation beats flashy execution every time.
        </TipBox>
      </Section>
    </Chapter>
  )
}
