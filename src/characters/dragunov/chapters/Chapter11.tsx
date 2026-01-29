import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Defense & Panic"
      intro="Dragunov thrives on offense, but you need to know how to escape when pressured. This chapter covers defensive tools, panic moves, and when to use them."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Master Complete Dragunov"
    >
      <Section title="Defensive Philosophy">
        <p>
          Dragunov isn't a defensive character. His best defense is 
          <span className="highlight"> not letting the opponent pressure in the first place</span>. 
          However, you will get pressured. Here's how to handle it.
        </p>

        <KeyConcept title="Defense Priority" icon="🛡️">
          <ol>
            <li><strong>Block and punish</strong> — Most reliable option</li>
            <li><strong>Sidestep</strong> — Dragunov has good movement</li>
            <li><strong>Backdash</strong> — Create space to reset</li>
            <li><strong>Counter tools</strong> — 1,2,1, d+2, parry</li>
            <li><strong>Power crush</strong> — Last resort only</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Movement Defense">
        <p>
          Dragunov has <span className="highlight">excellent movement</span> — use it.
        </p>

        <KeyConcept title="Movement Options" icon="🏃">
          <ul>
            <li><strong>Backdash</strong> — Create space, make them whiff</li>
            <li><strong>Sidestep left</strong> — Good against most characters</li>
            <li><strong>Sidestep right</strong> — Character-dependent</li>
            <li><strong>Crouch dash</strong> — Goes under highs, access FC game</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Just Block">
          Standing there and blocking is passive. Dragunov's backdash and sidestep are 
          above average — use them to create whiff opportunities and reset to neutral.
        </TipBox>
      </Section>

      <Section title="Counter-Hit Tools">
        <p>
          When opponents are aggressive, use these to counter-hit them:
        </p>

        <MoveCard character="dragunov"
          videoId="1,2,1"
          move={{
            input: '1,2,1',
            hitLevel: ['h', 'm', 'm'],
            damage: '5, 8, 20',
            startup: 'i10',
            onBlock: '-14',
            onHit: '+15g',
            tags: ['High', 'Mid', 'Mid', 'CH Confirmable', 'Heat Engager'],
            description: 'Your go-to counter tool. Jab to interrupt, confirm CH into full string.',
          }}
          showVideo
        />

        <p>
          1,2,1 is your <span className="highlight">primary get-off-me tool</span>. The first 
          jab interrupts pressure, and if it counter-hits, the full string is guaranteed.
        </p>

        <TipBox variant="warning" title="Confirm the CH">
          Only commit to the full 1,2,1 if you see the counter-hit. The third hit is -14 
          on block — launch punishable. Use 1,2 alone if you're not sure.
        </TipBox>

        <MoveCard character="dragunov"
          move={{
            input: '4,3',
            hitLevel: ['h', 'm'],
            damage: '10, 18',
            startup: 'i12',
            onBlock: '-12',
            onHit: '+14c',
            tags: ['High', 'Mid', '12f'],
            description: 'Fast interrupt string. Guaranteed crouch throw or b+4,3 on hit.',
          }}
          showVideo
        />

        <p>
          4,3 is faster than 1,2,1 at 12 frames, but doesn't have the same CH properties. 
          On hit, you get a guaranteed follow-up.
        </p>

        <MoveCard character="dragunov"
          move={{
            input: 'd+2',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i18',
            onBlock: '-13',
            onHit: '-1c',
            onCH: '+13g',
            tags: ['Low', 'High Crush'],
            description: 'High crushes under jabs and high attacks. Good defensive poke.',
          }}
          showVideo
        />

        <p>
          d+2 <span className="highlight">high crushes</span> — it goes under highs. If 
          opponents are jabbing you to death, d+2 can go under and hit them.
        </p>
      </Section>

      <Section title="Power Crush">
        <MoveCard character="dragunov"
          move={{
            input: '1+2',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i21-22',
            onBlock: '-14',
            onHit: '+19a (KND)',
            tags: ['Mid', 'Power Crush', 'Wall Splat'],
            description: 'Power crush that absorbs mids and highs. -14 on block, use carefully.',
          }}
          showVideo
        />

        <p>
          1+2 is Dragunov's <span className="highlight">power crush</span>. It absorbs mid and 
          high attacks during the armor window, letting you push through pressure.
        </p>

        <KeyConcept title="Power Crush Rules" icon="⚠️">
          <ul>
            <li><strong>-14 on block</strong> — Launch punishable by most characters</li>
            <li><strong>Doesn't absorb lows</strong> — Low attacks beat it</li>
            <li><strong>Loses to throws</strong> — Throws go through armor</li>
            <li><strong>Best at wall</strong> — Power crush becomes safer at wall</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Spam This">
          1+2 is risky. Use it when you KNOW they're going to attack with a mid or high. 
          If they block it, you eat a launch. If they low or throw, you die anyway.
        </TipBox>
      </Section>

      <Section title="Parry">
        <MoveCard character="dragunov"
          videoId="b+1+3"
          move={{
            input: 'b+1+3 or b+2+4',
            hitLevel: ['parry'],
            damage: '25',
            startup: 'i5-12',
            onBlock: 'N/A',
            onHit: '-5d',
            tags: ['Parry', 'Mids', 'Highs'],
            description: 'Parries mid and high punches and kicks. +1 on successful kick parry.',
          }}
          showVideo
        />

        <p>
          Dragunov has a <span className="highlight">mid/high parry</span>. It reverses punches 
          and kicks (not elbows, knees, or weapon attacks).
        </p>

        <KeyConcept title="Parry Properties" icon="🤚">
          <ul>
            <li><strong>Active frames 5-12</strong> — Small window</li>
            <li><strong>25 damage</strong> — On successful parry</li>
            <li><strong>Can be side switched</strong> — Position may change</li>
            <li><strong>No low parry</strong> — This doesn't catch lows (use df for that)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Use Sparingly">
          The parry is a read tool. You need to predict what they'll do and parry at 
          the right time. It's not a "spam and hope" option. Use it when you have a read.
        </TipBox>
      </Section>

      <Section title="Low Parry">
        <p>
          The universal low parry (<code>df</code> when a low hits) is one of your best 
          defensive tools:
        </p>

        <KeyConcept title="Low Parry" icon="⬇️">
          <ul>
            <li><strong>Input</strong> — Tap df when a low attack is about to hit</li>
            <li><strong>Reward</strong> — Launch into combo (45+ damage)</li>
            <li><strong>Risk</strong> — If you time it wrong, you get hit</li>
          </ul>
        </KeyConcept>

        <p>
          Against characters who rely on lows (Law, Bryan, Eddy), practice your low parry timing. 
          It turns their offense into your combo.
        </p>
      </Section>

      <Section title="Manual Low Parry">
        <MoveCard character="dragunov"
          move={{
            input: 'd+1+2',
            hitLevel: ['parry'],
            damage: '40',
            startup: 'i5-15',
            onBlock: 'N/A',
            onHit: '+5d',
            tags: ['Manual Low Parry'],
            description: 'Extended low parry. More damage but requires prediction.',
          }}
          showVideo
        />

        <p>
          d+1+2 is Dragunov's <span className="highlight">manual low parry</span>. It has a 
          longer active window than the universal low parry but requires a bigger commitment.
        </p>
      </Section>

      <Section title="Evasive Options">
        <p>
          Some moves have built-in evasion:
        </p>

        <KeyConcept title="Evasive Moves" icon="💨">
          <ul>
            <li><code>qcb+2</code> — Backswing blow, very evasive but -15</li>
            <li><code>qcf+2</code> — Can duck under highs</li>
            <li><code>d+2</code> — High crushes</li>
            <li><code>3+4 (PGR)</code> — Pigeon roll, goes under many moves</li>
          </ul>
        </KeyConcept>

        <MoveCard character="dragunov"
          move={{
            input: 'qcb+2',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i26-27',
            onBlock: '-15',
            onHit: '+32a (T!)',
            tags: ['Mid', 'Evasive', 'Tornado', 'Risky'],
            description: 'Very evasive backswing. -15 on block but can save your life.',
          }}
          showVideo
        />

        <TipBox variant="warning" title="qcb+2 is Risky">
          qcb+2 is -15 — launch punishable. It's an "oh crap" move when you need to evade 
          something specific. Don't use it randomly.
        </TipBox>
      </Section>

      <Section title="Wake-Up Options">
        <p>
          When you're on the ground, you have options:
        </p>

        <KeyConcept title="Wake-Up Options" icon="⬆️">
          <ul>
            <li><strong>Tech roll (1 or 2)</strong> — Roll left or right</li>
            <li><strong>Quick rise (tap u)</strong> — Get up immediately</li>
            <li><strong>Back roll (b)</strong> — Roll backwards</li>
            <li><strong>Stay down</strong> — Some attacks whiff on grounded</li>
            <li><strong>Ground tackle (1+2,1+2)</strong> — Tackle from the ground</li>
          </ul>
        </KeyConcept>

        <p>
          Mix your wake-up options. If you always tech roll in the same direction, 
          opponents will read it.
        </p>

        <TipBox variant="tip" title="Ground Tackle">
          On the ground, you can press 1+2,1+2 (spam it) to tackle the opponent if they 
          get close. This is especially good in Heat when tackle is unbreakable.
        </TipBox>
      </Section>

      <Section title="Defensive Summary">
        <KeyConcept title="When Pressured" icon="🆘">
          <ol>
            <li><strong>Block first</strong> — See what they're doing</li>
            <li><strong>Punish unsafe moves</strong> — Use your punishment</li>
            <li><strong>1,2,1 on CH reads</strong> — Interrupt aggressive opponents</li>
            <li><strong>Sidestep linear moves</strong> — Create whiff opportunities</li>
            <li><strong>Backdash to reset</strong> — If you can't handle the pressure</li>
            <li><strong>Low parry predictable lows</strong> — Turn their offense into your combo</li>
            <li><strong>Power crush as last resort</strong> — When nothing else works</li>
          </ol>
        </KeyConcept>
      </Section>

      <Collapsible title="Match-Specific Defense" icon="👤">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '12px' }}><strong>Against rushdown (Steve, Hwoarang):</strong></p>
          <ul style={{ marginBottom: '16px' }}>
            <li>1,2,1 to interrupt</li>
            <li>Sidestep their linear moves</li>
            <li>Backdash to create space</li>
          </ul>

          <p style={{ marginBottom: '12px' }}><strong>Against low-heavy (Law, Bryan):</strong></p>
          <ul style={{ marginBottom: '16px' }}>
            <li>Low parry their big lows</li>
            <li>Block low when they're plus</li>
            <li>Punish snake edges with ws+4 float</li>
          </ul>

          <p style={{ marginBottom: '12px' }}><strong>Against Mishimas:</strong></p>
          <ul>
            <li>Sidestep left their electrics</li>
            <li>Low parry hell sweeps</li>
            <li>Don't challenge when they're plus</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
