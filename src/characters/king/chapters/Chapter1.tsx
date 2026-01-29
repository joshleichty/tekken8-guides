import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible,
  Quiz
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Wrestler's Creed"
      intro="Before you learn a single move, you need to understand WHO King is and WHY throws are his path to victory. This isn't just another character guide — this is the grappler's manifesto."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Throws"
    >
      <Section title="You Are a Wrestler">
        <p>
          King doesn't play Tekken like other characters. Other characters poke, check, frame trap, launch. 
          King <span className="highlight">grabs</span>. That's not his mixup. That's not his backup plan. 
          <strong> That's his win condition.</strong>
        </p>

        <p>
          Think of yourself as a professional wrestler stepping into the ring. You're not here to trade punches 
          from a distance. You're here to <span className="highlight-secondary">get close, get a clinch, and 
          throw your opponent</span>. Everything else — every poke, every mid, every movement tool — exists to 
          make the grab happen.
        </p>

        <KeyConcept title="The King Philosophy" icon="👑">
          <p>King wins by:</p>
          <ul>
            <li><strong>Getting plus frames</strong> — Then throwing before they can react</li>
            <li><strong>Conditioning with mids</strong> — Make them stand so throws connect</li>
            <li><strong>Unreactable mixups</strong> — Throws that look identical but break differently</li>
            <li><strong>Chain throws</strong> — Knowledge checks that can deal 100+ damage</li>
            <li><strong>Psychological warfare</strong> — The threat of the grab is as powerful as the grab itself</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Grappler's Trap">
          New King players try to play him like a normal Tekken character — poke with df+1, check with mids, 
          throw as a mixup. <strong>This is backwards.</strong> King's throws ARE his offense. The pokes exist 
          to make throws work. If you're not throwing constantly, you're playing King wrong.
        </TipBox>
      </Section>

      <Section title="Why Throws Are Broken in Tekken 8">
        <p>
          Tekken 8 made throws <span className="highlight">absolutely terrifying</span>. If you're coming from 
          Tekken 7 or earlier, throws got massive buffs:
        </p>

        <KeyConcept title="Tekken 8 Throw Buffs" icon="⚡">
          <ul>
            <li><strong>Full tracking</strong> — Throws track sidesteps in both directions. You can't step them.</li>
            <li><strong>Counter-hit throws</strong> — If you throw during their attack startup, break window drops from 20 frames to 8 frames. Nearly unbreakable.</li>
            <li><strong>20-frame break window</strong> — Standard throws give 20 frames to break (was 15-17 in T7). But...</li>
            <li><strong>Blue spark throws</strong> — Perfect execution gives +5 damage AND reduces break window</li>
            <li><strong>No recoverable health</strong> — Throw damage is permanent. They can't heal it back.</li>
          </ul>
        </KeyConcept>

        <p>
          These changes make King <span className="highlight-secondary">the strongest grappler in Tekken history</span>. 
          His throws were already the best. Now they're unstoppable.
        </p>
      </Section>

      <Section title="King's Unique Advantages">
        <p>
          Every character has throws. But King's throws are <span className="highlight">fundamentally different</span>:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚡</div>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>10-FRAME THROWS</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Giant Swing and Shining Wizard are i10 — as fast as a jab. From +1, they're uninterruptible.
            </p>
          </div>
          
          <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎭</div>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>INDISTINGUISHABLE</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Giant Swing (1 break) and Shining Wizard (1+2 break) look EXACTLY the same. Opponents must guess.
            </p>
          </div>
          
          <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>💀</div>
            <div style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>CHAIN THROWS</div>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
              Rolling Death Cradle can deal 100 damage. It's a knowledge check that wins rounds.
            </p>
          </div>
        </div>

        <p style={{ marginTop: '20px' }}>
          No other character has this combination. King's throw game isn't just good — <span className="highlight">it's unfair</span>.
        </p>
      </Section>

      <Section title="The Wrestler's Loop">
        <p>
          King's gameplay follows a simple loop. Master this loop, and you'll dominate:
        </p>

        <KeyConcept title="The Grappler's Flow" icon="🔄">
          <ol>
            <li><strong>Get plus frames</strong> — Jab (+1), f+1+4 (+3), or any plus move</li>
            <li><strong>Buffer a throw</strong> — Input the throw motion during the plus move's recovery</li>
            <li><strong>They must guess</strong> — Duck (launch them), break 1 (wrong, eat Giant Swing), break 1+2 (wrong, eat Shining Wizard)</li>
            <li><strong>If they duck</strong> — Launch with hopkick or mid launcher</li>
            <li><strong>If they break</strong> — You're still plus, throw again</li>
            <li><strong>Repeat until dead</strong> — The pressure never stops</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Mental Stack">
          Your opponent has to think about: ducking throws, breaking 1, breaking 1+2, breaking 2, sidestepping, 
          backdashing, and pressing buttons. That's 7+ options. <strong>You only think about: throw or mid.</strong> 
          The mental advantage is massive.
        </TipBox>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Best throw game in Tekken</strong> — No one comes close</li>
          <li><strong>10-frame throws</strong> — Faster than any other character's command grabs</li>
          <li><strong>Indistinguishable animations</strong> — Giant Swing and Shining Wizard look identical</li>
          <li><strong>Chain throws</strong> — Can deal 100+ damage if opponent doesn't know the breaks</li>
          <li><strong>Strong mid pokes</strong> — df+1, df+2,1 condition opponents to stand</li>
          <li><strong>Excellent heat game</strong> — Armored Jaguar Sprint, throws restore heat</li>
          <li><strong>Muscle Armor</strong> — Unique power crush stance with stance cancels</li>
          <li><strong>Unbreakable crouch throws</strong> — Force crouch with f,f+2, then grab</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Worst backdash in the game</strong> — Can't retreat like other characters</li>
          <li><strong>Weak to ducking</strong> — If they duck your throws, you're in trouble</li>
          <li><strong>Linear pokes</strong> — Many key moves can be sidestepped</li>
          <li><strong>Few good lows</strong> — Only f,f,n+2 is truly threatening</li>
          <li><strong>Knowledge checks</strong> — Chain throws don't work if opponent knows breaks</li>
          <li><strong>Requires conditioning</strong> — Throws don't work if opponent always ducks</li>
        </ul>

        <TipBox variant="warning" title="The Ducking Problem">
          Good players will duck your throws. That's why conditioning with mids is critical. You can't just throw 
          blindly — you need to make them respect your mids first. We'll cover this in Chapter 7.
        </TipBox>
      </Section>

      <Section title="Quick Check">
        <Quiz
          question="What is King's primary win condition?"
          options={[
            { text: 'Poke with df+1 and check with mids', isCorrect: false },
            { text: 'Throw opponents constantly from plus frames', isCorrect: true },
            { text: 'Fish for counter-hits with df+2,1', isCorrect: false },
            { text: 'Control space with keepout tools', isCorrect: false },
          ]}
          correctFeedback="Exactly! King wins by throwing. Everything else — pokes, mids, movement — exists to make throws happen."
          incorrectFeedback="Not quite. While King has good pokes and mids, they exist to condition opponents so throws can connect. Throws are King's primary offense."
        />
      </Section>

      <Section title="Your Learning Path">
        <p>
          This guide is structured <strong>backwards from every other guide</strong>. We teach throws FIRST, 
          then show you how pokes enable them. This is intentional — King is a grappler, and grapplers think 
          differently.
        </p>

        <KeyConcept title="The Wrestler's Journey" icon="📈">
          <ol>
            <li><strong>The Grappler's Foundation</strong> — Throws, plus frames, getting the clinch</li>
            <li><strong>The Throw Game</strong> — Buffering, mixups, chain throws</li>
            <li><strong>Making Throws Work</strong> — Mids and lows that condition opponents</li>
            <li><strong>Movement & Stances</strong> — Jaguar Sprint, Muscle Armor</li>
            <li><strong>Damage & Systems</strong> — Combos, punishment, Heat</li>
            <li><strong>Mastery</strong> — Complete gameplan and match strategy</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="How to Use This Guide">
          <strong>Don't skip ahead.</strong> Each chapter builds on the last. You can't understand throw buffering 
          (Chapter 4) without knowing the throws themselves (Chapter 2). You can't condition with mids (Chapter 7) 
          without understanding why throws need conditioning (Chapter 1). Follow the path.
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
                <li><code>df</code> = Down-forward</li>
              </ul>
            </div>
          </div>
          
          <p style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>King-Specific Terms</p>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
            <li><strong>JGR</strong> = Jaguar Sprint (f+3+4) — Running stance</li>
            <li><strong>JGS</strong> = Jaguar Step (3+4) — Backward/forward hop</li>
            <li><strong>GS</strong> = Giant Swing (f,hcf+1) — 1 break throw</li>
            <li><strong>SW</strong> = Shining Wizard (f,f,F+2+4) — 1+2 break throw</li>
            <li><strong>hcf</strong> = Half circle forward (b, db, d, df, f)</li>
            <li><strong>qcb</strong> = Quarter circle back (d, db, b)</li>
          </ul>
          
          <p style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 600, color: 'var(--accent)' }}>Throw Breaks</p>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
            <li><strong>1 break</strong> = Press 1 to escape (Giant Swing)</li>
            <li><strong>2 break</strong> = Press 2 to escape (Tombstone)</li>
            <li><strong>1+2 break</strong> = Press 1+2 to escape (Shining Wizard, Tombstone)</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
