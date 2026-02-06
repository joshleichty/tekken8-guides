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
      title="How Jin Wins"
      intro="Jin is Tekken's complete martial artist — elite pokes, devastating punishment, one of the best moves in the game, and tools for every situation. But his offense works differently from most of the cast. This chapter breaks down how Jin generates pressure and why understanding his gameplan is the key to unlocking him."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Poke Loops"
    >
      <Section title="Jin's Offensive Identity">
        <p>
          Many Tekken characters generate offense through <strong>stance transitions and built-in mixups</strong> — 
          one move flows into a stance, the stance forces a guess, and the loop repeats. Jin doesn't work that way. 
          His pokes don't automatically lead into terrifying 50/50s. His stance (ZEN) is powerful but situational, 
          not something you enter after every move.
        </p>

        <p>
          So how does Jin actually pressure people? Through <strong>conditioning</strong>. Jin uses fast, safe 
          moves to control the pace of the match, punishes opponents for reacting incorrectly, then escalates 
          into plus frame moves that lock them down completely.
        </p>

        <KeyConcept title="Conditioning-Based Offense" icon="⚡">
          <p>
            Jin's pressure comes from reading and adapting to the opponent. His pokes train habits — 
            if the opponent presses buttons, counter-hit tools destroy them. If they freeze and block, 
            plus frame moves and lows open them up. If they get aggressive, Jin's elite defense and 
            punishment turn their offense against them.
          </p>
          <p style={{ marginTop: '12px' }}>
            This means Jin's offense is <strong>adaptive</strong> rather than automatic — a great Jin 
            player's gameplan looks completely different against a masher versus a turtle.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Three Pillars of Jin's Game">
        <p>
          Jin wins through three interconnected systems that feed into each other:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <div style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '8px', fontSize: '1.1rem' }}>1. Pokes That Steal Turns</div>
            <p style={{ color: 'var(--text-secondary)' }}>
              Jin's pokes (<code>2,1</code> · <code>df+1</code> · <code>d+4</code> · <code>db+4</code>) are plus on hit 
              and only -1 to -3 on block. This means <strong>even when blocked, you can still move</strong>. 
              You sidestep, backdash, or throw out another poke. Your opponent never gets a clean "my turn" moment 
              because you're always slightly ahead or neutral.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <div style={{ fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '8px', fontSize: '1.1rem' }}>2. Counter-Hit Traps That Punish Impatience</div>
            <p style={{ color: 'var(--text-secondary)' }}>
              When opponents get frustrated by your poking and press buttons, Jin has some of the 
              best counter-hit tools in the game. <code>f+4</code> launches on CH from a mile away. 
              <code>4</code> (magic four) trades into a full combo at +3. <code>db+2,2</code> gives huge 
              damage on CH. Your pokes <em>create</em> the situations where these weapons land.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
            <div style={{ fontWeight: 700, color: '#10b981', marginBottom: '8px', fontSize: '1.1rem' }}>3. Plus Frame Moves That Lock Opponents Down</div>
            <p style={{ color: 'var(--text-secondary)' }}>
              Once you condition the opponent to stop pressing, you escalate. Electric (<code>EWHF</code>) is +5 on block. 
              <code>ZEN 3+4</code> is +9 to +15. <code>df+3~3</code> is +6. <code>f,f,F+3</code> is +6. 
              These moves do chip damage and leave you so plus that your opponent <em>cannot interrupt 
              your next move</em>. Now you can mixup freely.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="The Jin Formula">
          Poke to condition → Counter-hit to punish impatience → Plus frames to lock down → 
          Mixup to open up. This is the loop. Every chapter in this guide builds one piece of it.
        </TipBox>
      </Section>

      <Section title="Automatic vs Adaptive Pressure">
        <p>
          Many characters have <strong>automatic pressure</strong> — stance transitions and strings 
          that force decisions regardless of what the opponent is doing. Jin's pressure is 
          <strong>adaptive</strong> — it changes based on how the opponent reacts.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <p style={{ fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '8px' }}>Automatic Pressure</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Land a hit → enter stance → opponent faces mixup immediately → 
              if they guess wrong, loop back to stance → repeat
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px', fontStyle: 'italic' }}>
              The stance forces decisions. The flowchart does the work.
            </p>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <p style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>Jin's Adaptive Pressure</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Poke to establish frame advantage → observe opponent's response → 
              punish with the right tool → escalate to plus frame moves → now mixup
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px', fontStyle: 'italic' }}>
              Pressure is earned. You read the opponent and choose the weapon.
            </p>
          </div>
        </div>

        <p style={{ marginTop: '16px' }}>
          This doesn't make Jin weaker at pressure — it makes him <strong>flexible</strong>. 
          A great Jin player adjusts their gameplan mid-match in ways most characters can't. 
          The trade-off is that Jin requires more game knowledge to reach that level.
        </p>
      </Section>

      <Section title="What This Guide Will Teach You">
        <p>
          This guide is structured around one question: <strong>"It's my turn — now what?"</strong>
        </p>

        <p>
          Every chapter gives you a concrete offensive sequence you can use immediately. Not theory. 
          Not vibes. Actual flowcharts for actual situations.
        </p>

        <KeyConcept title="The Learning Path" icon="📈">
          <ol>
            <li><strong>Offensive Loops</strong> — The 3-4 poke sequences that ARE Jin's pressure (Ch. 2-3)</li>
            <li><strong>Opening People Up</strong> — Lows, throws, and mixups that force decisions (Ch. 4)</li>
            <li><strong>Plus Frame Weapons</strong> — Electric, ZEN, and the moves that lock opponents down (Ch. 5-6)</li>
            <li><strong>Combos</strong> — Turning hits into damage and wall carry (Ch. 7)</li>
            <li><strong>Punishment</strong> — Winning on defense with Jin's elite punishment (Ch. 8)</li>
            <li><strong>Heat System</strong> — When and how to use Jin's heat tools (Ch. 9)</li>
            <li><strong>Wall Game</strong> — Where Jin becomes truly terrifying (Ch. 10)</li>
            <li><strong>Defense & Parry</strong> — Jin's underrated defensive toolkit (Ch. 11)</li>
            <li><strong>The Complete Jin</strong> — Putting it all together (Ch. 12)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Play While You Read">
          Open Practice Mode. Every section in this guide is designed to be practiced immediately. 
          Don't read the whole guide and then play — read a section, drill it, play some matches, 
          then come back for more.
        </TipBox>
      </Section>

      <Section title="Notation Quick Reference">
        <Collapsible title="If You're New to Tekken Notation" icon="🎮" defaultOpen={false}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
            <div>
              <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Buttons</p>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><code>1</code> = Left Punch</li>
                <li><code>2</code> = Right Punch</li>
                <li><code>3</code> = Left Kick</li>
                <li><code>4</code> = Right Kick</li>
              </ul>
            </div>
            <div>
              <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Directions</p>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li><code>f</code> = Forward · <code>b</code> = Back</li>
                <li><code>d</code> = Down · <code>u</code> = Up</li>
                <li><code>df</code> = Down-forward · <code>db</code> = Down-back</li>
                <li><code>n</code> = Neutral</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '12px' }}>
            <p style={{ marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Jin-Specific Terms</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li><strong>EWHF</strong> = Electric Wind Hook Fist (<code>f,n,d,df:2</code>) — Jin's signature move. +5 on block, launches on hit.</li>
              <li><strong>ZEN</strong> = Zenshin stance (<code>b+3+4</code>) — Jin's stance with powerful options.</li>
              <li><strong>BRS</strong> = Breaking Step (<code>f+3+4~df</code>) — Gives free electric inputs.</li>
              <li><strong>Hell Sweep</strong> = <code>f,n,d,DF+4</code> — Jin's main launching low from crouch dash.</li>
              <li><strong>CH</strong> = Counter Hit · <strong>oB</strong> = On Block · <strong>oH</strong> = On Hit</li>
              <li><strong>T!</strong> = Tornado (the spin that extends combos, one per combo)</li>
            </ul>
          </div>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
