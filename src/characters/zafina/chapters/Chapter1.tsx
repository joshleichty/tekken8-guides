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
      title="Meet Zafina"
      intro="Zafina is a unique stance character who fights using ancient assassination arts combined with the dark power of Azazel. She thrives on evasion, movement, and keeping opponents guessing with continuous stance mixups."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Buttons"
    >
      <Section title="The Mystic Stargazer">
        <p>
          Zafina isn't a typical rushdown or poking character. She's an <span className="highlight">evasive specialist</span> who 
          uses three unique stances to create continuous pressure and mixup situations. Her gameplan revolves around 
          making opponents hesitate, then punishing their indecision.
        </p>

        <p>
          What makes Zafina special is her movement. She has one of the <strong>best backdashes in the game</strong>, 
          and her stances provide natural evasion against many attacks. When you're minus, backdash. When they 
          hesitate, mix them up.
        </p>

        <KeyConcept title="What Zafina Wants to Do" icon="🔮">
          <ul>
            <li><strong>Create hesitation</strong> — Keep mixing up options so opponents can't predict</li>
            <li><strong>Use movement</strong> — Her backdash and stance evasion are her best defensive tools</li>
            <li><strong>Flow between stances</strong> — SCR, MNT, and TRT each offer different mixups</li>
            <li><strong>Punish whiffs</strong> — df+2 and ws+1,2 are excellent whiff punishers</li>
            <li><strong>Abuse plus frames</strong> — Many moves leave her advantaged in stance</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Three Stances">
        <p>
          Zafina has three stances, each with a distinct purpose. Understanding when to use each is 
          the key to mastering her.
        </p>

        <KeyConcept title="Scarecrow (SCR) — The Offensive Stance" icon="🦅">
          <p>Manual entry: <code>3+4</code></p>
          <ul>
            <li><strong>Cannot block</strong> — You must commit to an option</li>
            <li>Can move forward, backward, and sidestep</li>
            <li>Has her best heat engager (SCR 2,1)</li>
            <li>Primary mixup stance with strong mids and lows</li>
            <li>Enter from: 1,3 / f,f+3 / WR3 / f+2,3 / d+3</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Mantis (MNT) — The Defensive Stance" icon="🦗">
          <p>Manual entry: <code>d+3+4</code></p>
          <ul>
            <li><strong>Can block</strong> by holding back</li>
            <li>Naturally evades highs and some mids</li>
            <li>Can move forward, backward, sidestep, and dash</li>
            <li>Has a safe launcher (MNT df+2)</li>
            <li>Enter from: d+3 / db+4 / SCR df+4 / f,f+3+4</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Tarantula (TRT) — The Mixup Stance" icon="🕷️">
          <p>Manual entry: <code>d+1+2</code></p>
          <ul>
            <li><strong>Cannot block</strong></li>
            <li>Can only crawl forward</li>
            <li>Naturally avoids all highs and many mids</li>
            <li>Simple 50/50 between mid (TRT 3) and low (TRT 1)</li>
            <li>Enter from: 1,4 / SCR 1,4 / SCR 1+2 / WR1+2</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Cancel Any Stance">
          Press <code>db</code> from any stance to cancel back to neutral. This is crucial for 
          safety and baiting.
        </TipBox>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Best backdash in the game</strong> — Use it constantly when minus</li>
          <li><strong>Exceptional evasion</strong> — Stances naturally avoid many attacks</li>
          <li><strong>Continuous pressure</strong> — Stances flow into each other endlessly</li>
          <li><strong>Good range</strong> — df+1, f,f+4, and 1+2 control space well</li>
          <li><strong>Strong mixups</strong> — Opponents must guess constantly</li>
          <li><strong>Knowledge check character</strong> — Many players don't know the matchup</li>
          <li><strong>Unique heat system</strong> — Azazel moves gain power crush in heat</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Lower combo damage</strong> — Compared to many characters</li>
          <li><strong>Risky stances</strong> — SCR and TRT cannot block</li>
          <li><strong>Self-damage</strong> — Azazel power moves hurt you outside of heat</li>
          <li><strong>No 12f standing punish</strong> — Gap between 10f and 13f</li>
          <li><strong>Predictable at high level</strong> — Good players can read her options</li>
          <li><strong>Requires character knowledge</strong> — Must know all stance transitions</li>
        </ul>

        <TipBox variant="warning" title="She's Not Top Tier">
          Zafina was nerfed significantly from Tekken 7. She lost counter-hit combos, some 
          stance transitions, and overall damage. However, her core gameplan is intact, and 
          she remains fun and effective. She may receive buffs in future patches.
        </TipBox>
      </Section>

      <Section title="Notation Guide">
        <p>
          Throughout this guide, you'll see standard Tekken notation plus Zafina-specific terms.
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

        <Collapsible title="Zafina-Specific Terms" icon="🔮">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>SCR</strong> = Scarecrow Stance (3+4)</li>
              <li><strong>MNT</strong> = Mantis Stance (d+3+4)</li>
              <li><strong>TRT</strong> = Tarantula Stance (d+1+2)</li>
              <li><strong>~B</strong> = Hold back to cancel stance transition</li>
              <li><strong>~D</strong> = Hold down to enter stance (e.g., d+3~D enters MNT)</li>
              <li><strong>ORB</strong> = Azazel orb (gained from certain moves)</li>
              <li><strong>Azazel Power</strong> = Moves that deal self-damage (purple claw)</li>
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

      <Section title="The Zafina Mindset">
        <p>
          Playing Zafina is about <span className="highlight">constant adaptation</span>. You're not looking 
          for one big combo — you're looking to frustrate your opponent with endless pressure and evasion.
        </p>

        <KeyConcept title="The Core Gameplan" icon="📋">
          <ol>
            <li><strong>When minus</strong> — Backdash. Zafina's backdash is her best tool.</li>
            <li><strong>When plus</strong> — Mix up your options. Never be predictable.</li>
            <li><strong>In stance</strong> — Commit to something. You can't block in SCR or TRT.</li>
            <li><strong>On their whiff</strong> — Punish hard with df+2 or ws+1,2.</li>
            <li><strong>In heat</strong> — Get to Scarecrow and use your devastating heat smash.</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Hesitation is Victory">
          The best Zafina players make opponents hesitate. When they don't know if you'll go 
          mid or low, stay in stance or cancel, press or backdash — that's when you win. 
          Keep mixing your options and never become predictable.
        </TipBox>
      </Section>

      <Section title="What This Guide Covers">
        <p>
          This guide builds your Zafina skills progressively, with special emphasis on her three stances.
        </p>

        <KeyConcept title="The Learning Path" icon="📈">
          <ol>
            <li><strong>Foundation</strong> — Basic pokes, mids, lows, and key moves</li>
            <li><strong>Stances</strong> — Deep dives into SCR, MNT, and TRT</li>
            <li><strong>Combos</strong> — Practical routes that work</li>
            <li><strong>Heat & Azazel</strong> — Her unique heat system and Azazel power</li>
            <li><strong>Game Systems</strong> — Punishment, pressure, and mixups</li>
            <li><strong>Advanced</strong> — Wall game and complete gameplan</li>
          </ol>
        </KeyConcept>

        <p>
          By the end, you'll understand how to flow between stances, create pressure, and 
          capitalize on your opponent's mistakes. Let's begin.
        </p>
      </Section>
    </Chapter>
  )
}
