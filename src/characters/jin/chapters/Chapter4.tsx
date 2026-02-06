import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart,
  DecisionGrid
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Opening People Up"
      intro="Your pokes conditioned them. Your counter-hit tools punished pressing. Now they're blocking. Time for the real mixups — lows, throws, and wave dash pressure."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Plus Frame Weapons"
    >
      <Section title="When to Go for Mixups">
        <p>
          If your opponent is pressing buttons, you don't need mixups — you just counter-hit them 
          (Chapter 3). Mixups are for <strong>opponents who are blocking</strong>. They've learned 
          to respect your pokes and they're sitting there waiting.
        </p>

        <p>
          The moment you see an opponent stop pressing after your pressure, that's your cue 
          to escalate. The tools below are riskier than pokes but much more rewarding.
        </p>
      </Section>

      <Section title="Hell Sweep — Jin's Scariest Low">
        <MoveCard character="jin"
          videoId="f,n,d,DF+4"
          move={{
            input: 'f,n,d,DF+4',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i20',
            onBlock: '-31',
            onHit: '+8c',
            tags: ['Low', 'Knockdown', 'Wave Dash', 'Launch Punishable'],
            description: 'Jin\'s signature low from crouch dash. Knocks down on hit and gives oki. Launch punishable on block — only use when you\'ve conditioned the opponent to stand-block.',
          }}
          showVideo
        />

        <MoveCard character="jin"
          videoId="f,n,d,DF+4,2"
          move={{
            input: 'f,n,d,DF+4,2',
            hitLevel: ['l', 'M'],
            damage: '12, 28',
            startup: 'i20',
            onBlock: '-16',
            onHit: '+21a',
            tags: ['Low-Mid', 'Spike', 'Floor Break', 'Combo'],
            description: 'The full hell sweep with follow-up. Breaks floors and spikes. Use the full version for floor break stages.',
          }}
          showVideo
        />

        <KeyConcept title="Hell Sweep Is a Reward, Not a Starter" icon="🔥">
          <p>
            <strong>Do not open rounds with hell sweep.</strong> Hell sweep is launch punishable (-31). 
            It's the payoff for all your conditioning. The sequence is:
          </p>
          <ol>
            <li>Poke them 3-4 times (they learn to block standing)</li>
            <li>They're just blocking → now hell sweep catches them</li>
            <li>They start ducking → now your mids (f+4, electric, ff+3) launch them</li>
          </ol>
          <p style={{ marginTop: '8px' }}>
            Think of it like Law's slide — you don't raw slide round start. You build to it.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Wave Dash Into Hell Sweep">
          You don't have to do hell sweep from standing. Wave dashing (f,n,d,df repeatedly) 
          lets you close distance and mix the timing. Sometimes just wave dashing at someone 
          makes them panic — they see the crouch dash animation and freeze, giving you a free 
          hell sweep or a free mid.
        </TipBox>
      </Section>

      <Section title="The Wave Dash Mixup">
        <p>
          Jin's wave dash mixup is his equivalent of Law's DSS mixup. From crouch dash 
          (<code>f,n,d,df</code>), you have two main options:
        </p>

        <Flowchart
          title="The Wave Dash 50/50"
          nodes={[
            { type: 'start', label: 'Crouch dash (f,n,d,df)' },
            { type: 'decision', label: 'What does opponent do?', branches: [
              { label: 'Stands/blocks mid', action: 'Hell sweep (f,n,d,DF+4) → knockdown → oki. Or DF+4,2 for floor break.' },
              { label: 'Ducks/blocks low', action: 'f,f+3 (mid launcher, safe at -4) or EWHF (launches, +5 on block) or ws+2 (i14 launcher)' },
              { label: 'Presses buttons', action: 'EWHF will counter-hit launch them. Or f,n,d,df+1 (mid tornado, catches presses)' },
              { label: 'Sidesteps', action: 'f,f+2 (heat engager, good tracking) or keep wave dashing to realign' },
            ]},
          ]}
        />

        <MoveCard character="jin"
          videoId="f,f,F+3"
          move={{
            input: 'f,f,F+3',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i22',
            onBlock: '+6',
            onHit: '+13a',
            tags: ['Mid', 'Plus on Block', 'Wall Splat', 'ZEN Transition', 'Chip Damage'],
            description: 'While running 3. The mid complement to hell sweep. PLUS SIX on block. Wall splats. Transitions to ZEN. Enormous chip damage. This is the move you use when they start ducking.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="f,f,F+3 Is Your Best Approach Tool">
          While running 3 is +6 on block, wall splats, does chip damage, and can enter ZEN. 
          When you need to close distance and start pressure, this is it. At the wall, looping 
          ZEN 3+4 into f,f,F+3 creates crushing pressure your opponent cannot interrupt.
        </TipBox>
      </Section>

      <Section title="d+2 — The All-Purpose Low">
        <MoveCard character="jin"
          move={{
            input: 'd+2',
            hitLevel: ['L'],
            damage: '22',
            startup: 'i22',
            onBlock: '-14',
            onHit: '+4c',
            tags: ['Low', 'High Crush', 'Tracking', 'Plus on Hit'],
            description: 'Jin\'s do-everything low. High crushes, tracks both sides, +4 on hit (forced crouch — into ws mixup), hits grounded opponents. -14 on block, so don\'t be too predictable.',
          }}
          showVideo
        />

        <p>
          <code>d+2</code> is different from hell sweep — it's not a knockdown, but it's much 
          safer to throw out and gives you a mixup on hit:
        </p>

        <Flowchart
          title="After d+2 Hits (+4, Forced Crouch)"
          nodes={[
            { type: 'start', label: 'd+2 hits (+4c, you\'re crouching)' },
            { type: 'decision', label: 'Your options from crouch:', branches: [
              { label: 'ws+4,4 (mid, safe)', action: '+8 on hit. i11 mid. Your fastest option. Good frame trap.' },
              { label: 'ws+1,3~3 (mid series)', action: '+6 on block, +13 on hit. Goes into Breaking Step for more pressure.' },
              { label: 'FC df+4 (low CH launcher)', action: 'The crouch low option. Launches on CH. Transitions to ZEN on hit.' },
              { label: 'EWHF from crouch', action: 'If you have the execution — electric from crouch is uninterruptible at +4.' },
            ]},
          ]}
        />

        <TipBox variant="tip" title="d+2 on Oki">
          <code>d+2</code> hits grounded opponents. After any knockdown, d+2 is guaranteed 
          on opponents who stay on the ground. It forces them to get up, and on hit you 
          get +4 in crouch for another mixup. Great oki tool.
        </TipBox>
      </Section>

      <Section title="FC df+4 — The Crouch Low Launcher">
        <MoveCard character="jin"
          videoId="FC.df+4"
          move={{
            input: 'FC df+4',
            hitLevel: ['L'],
            damage: '20',
            startup: 'i21',
            onBlock: '-26',
            onHit: '+2c',
            onCH: '+69a (full combo)',
            tags: ['Low', 'High Crush', 'CH Launcher', 'ZEN Transition'],
            description: 'Jin\'s crouch low counter-hit launcher. Transitions into ZEN on hit at +12. On CH, full combo for huge damage. Very unsafe on block (-26), but after conditioning it lands frequently.',
          }}
          showVideo
        />

        <p>
          Use this after d+2 hits or from any forced crouch situation. When your opponent 
          starts respecting your ws+4 mid check and keeps blocking, <code>FC df+4</code> 
          catches them. On CH, full combo. On normal hit, transitions to ZEN at +12 for 
          uninterruptible mixups.
        </p>
      </Section>

      <Section title="Throws — The Forgotten Weapon">
        <p>
          Jin has a full throw game. <strong>Use it.</strong> Most players at intermediate ranks 
          cannot break throws consistently. After conditioning with pokes, a throw is free damage.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <code style={{ color: 'var(--accent)' }}>qcb+1+3</code>
              <span style={{ marginLeft: '12px', color: 'var(--text-secondary)' }}>1 break — Complicated Wire. 40 damage, opponent face-up feet-away.</span>
            </div>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <code style={{ color: 'var(--accent)' }}>df+2+4</code>
              <span style={{ marginLeft: '12px', color: 'var(--text-secondary)' }}>2 break — Shin Dan. 40 damage, side switch.</span>
            </div>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <code style={{ color: 'var(--accent)' }}>uf+1+2</code>
              <span style={{ marginLeft: '12px', color: 'var(--text-secondary)' }}>1+2 break — Tidal Wave. 40 damage, floor break. Can be done from wave dash.</span>
            </div>
          </div>
        </div>

        <TipBox variant="warning" title="Throw After Plus Frames">
          The best time to throw is when you're plus and the opponent is frozen. After 
          <code>2,1</code> hit (+6), after <code>df+3~3</code> block (+6), after electric block (+5) — 
          these are all moments where a throw catches people who are just sitting there blocking.
        </TipBox>
      </Section>

      <Section title="The Complete Offensive Flowchart">
        <p>
          Here's how everything connects — your entire offensive game plan on one page:
        </p>

        <DecisionGrid
          title="Jin's Offense Decision Tree"
          description="Read the opponent, choose the weapon."
          rows={[
            { situation: 'Opponent is pressing buttons', response: '2,1,4 · f+4 · 4 (magic four) · b,f+2,3', reason: 'Counter-hit tools catch button presses', risk: 'Low — these are all safe' },
            { situation: 'Opponent is blocking standing', response: 'db+4 · d+4 · d+2 · hell sweep · throw', reason: 'Lows and throws open standing guard', risk: 'Medium — lows punishable, throws breakable' },
            { situation: 'Opponent is ducking', response: 'df+1 · f+4 · EWHF · f,f,F+3 · b,f+2,3', reason: 'Mids launch or frame-trap duckers', risk: 'Low — mids are safe' },
            { situation: 'Opponent is sidestepping', response: '4 (homing) · b,f+2,1 (tracks) · ZEN 3 (homing)', reason: 'Homing and tracking moves catch movement', risk: 'Low' },
            { situation: 'Opponent is frozen (blocking everything)', response: 'df+3~3 · EWHF · f,f,F+3 · ZEN 3+4 · throw', reason: 'Plus frame moves that give you guaranteed follow-ups', risk: 'Medium — slower moves, can be preempted' },
          ]}
        />

        <KeyConcept title="Read → React → Punish" icon="🧠">
          <p>
            Jin's offense is always a response to what the opponent is doing. You're not 
            running a flowchart — you're reading a human. The more you play, the faster 
            you recognize patterns. Eventually it becomes instinct: "they pressed, I counter-hit. 
            They blocked, I throw. They ducked, I launched."
          </p>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
