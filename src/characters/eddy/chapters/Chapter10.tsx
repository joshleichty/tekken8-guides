import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Defense and Survival"
      intro="Every Eddy player eventually faces the same scenario: they're minus, they can't enter stance, and the opponent is pressing. This chapter is about what to do when the flywheel stops. Eddy's defense isn't great — but understanding its limits is how you survive long enough to restart the engine."
      hasPrevious={true}
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="The Complete Eddy"
    >
      <Section title="The Linearity Problem">
        <p>
          This is Eddy's biggest structural weakness. Almost everything he wants to do is linear.
        </p>
        <ul>
          <li><strong><code>f,f+3</code></strong> — sidestep left beats it</li>
          <li><strong>WR 3</strong> — sidestep left beats it</li>
          <li><strong>HSP 1</strong> — linear</li>
          <li><strong>HSP 4</strong> — linear</li>
          <li><strong>RLX 3,3</strong> — linear</li>
          <li><strong>RLX 4,3</strong> — linear</li>
        </ul>
        <p>
          A player who sidesteps left consistently can evade most of Eddy's approach and stance
          pressure. This is the counter that good players will use against you. You need answers.
        </p>

        <KeyConcept title="Anti-Sidestep Tools" icon="🎯">
          <ul>
            <li><strong><code>b+1</code></strong> — Tracks both sides. Your primary answer to movement. On hit, gives crouch mixup.</li>
            <li><strong><code>qcb+4</code></strong> — Homing high with enormous range. +4 on block. Forces them to stop stepping.</li>
            <li><strong><code>uf+4</code></strong> — Homing mid. Slow but tracks everything. Transitions to RLX on hit.</li>
            <li><strong><code>df+2</code></strong> — Tracks decently and creates pushback. Hard to step and punish.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            The pattern: when they step, hit them with a tracking move. When they stop stepping,
            resume your linear approaches. It's a constant calibration.
          </p>
        </KeyConcept>

        <MoveCard character="eddy"
          videoId="qcb+4"
          move={{
            input: 'qcb+4',
            hitLevel: ['h'],
            damage: '27',
            startup: 'i21~22',
            onBlock: '+4',
            onHit: '+15a',
            tags: ['High', 'Homing', 'Plus on Block', 'Tracking'],
            description: 'A long-range homing high. +4 on block — you\'re always safe and it\'s your turn after. Punishes sidestep and sidewalk. The drawback: it\'s a high, so it can be ducked.',
            notes: [
              'Homing — tracks both sides',
              '+4 on block — your turn continues',
              'High — duckable on hard read',
              'Huge range — catches stepping at distance',
              'Use when opponent is sidestepping your approaches',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="uf+4"
          move={{
            input: 'uf+4',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i23~25',
            onBlock: '-7',
            onHit: '+4',
            tags: ['Mid', 'Homing', 'RLX Transition'],
            description: 'Homing mid that transitions to RLX. Slower but hits both sides and can\'t be ducked. -7 on block. Use when they\'re stepping and you need a mid tracking option.',
            notes: [
              'Homing — tracks both sides',
              'Mid — can\'t be ducked',
              '-7 on block — safe',
              'Transitions to RLX on hit',
              'Slower than qcb+4 but safer as a mid',
            ],
          }}
          showVideo
        />

        <TipBox variant="tip" title="Read the Pattern">
          Your first approach should usually be linear (WR 3 or <code>f,f+3</code>). If it
          works, keep going. If they step it, switch to <code>b+1</code> or <code>qcb+4</code>.
          If those hit, they'll stop stepping — now your linear approaches work again. It's a
          pendulum. Don't keep throwing the same thing into a wall of sidesteps.
        </TipBox>
      </Section>

      <Section title="Airborne Vulnerability">
        <p>
          Eddy flips through the air during many of his moves and transitions. This looks cool.
          It's also dangerous. When Eddy is airborne, a simple jab (1 or 2) can float him for
          a full combo. Characters with fast mids can interrupt transitions and launch.
        </p>

        <KeyConcept title="When You're Vulnerable" icon="⚠️">
          <ul>
            <li><strong>HSP with no advantage</strong> — If you enter HSP at minus frames, any mid or high will catch you before your moves come out. HSP can't block.</li>
            <li><strong>Stance transitions</strong> — Moving from standing to HSP or RLX has transitional frames where you're vulnerable.</li>
            <li><strong>Predictable RLX entries</strong> — If the opponent knows you're entering RLX, they can run up and jab float you during the entry.</li>
            <li><strong>Extension strings</strong> — Strings like <code>b+3,3</code> or <code>3,3</code> that go into stance are interruptible if the opponent blocks the first hit and retaliates fast enough.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            <strong>The fix:</strong> Always enter stances with <em>earned</em> plus frames.
            WR 3 on block (+8), <code>f,f+3</code> on hit (+6), <code>HSP 1</code> on block (+6).
            When you have plus frames, your moves come out first. When you don't, you're gambling.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Panic Tools">
        <p>
          When you're minus and the opponent is pressing, you need fast or evasive options to
          escape pressure. Eddy doesn't have great defensive tools, but he has enough.
        </p>

        <MoveCard character="eddy"
          videoId="uf+2"
          move={{
            input: 'uf+2',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i22~24',
            onBlock: '-14',
            onHit: '+33a',
            tags: ['Mid', 'Evasive', 'Panic Tool'],
            description: 'Eddy\'s primary evasive tool. A jumping mid that sidesteps left during startup. Crushes lows and evades many linear attacks. On hit, guaranteed f+3+4 → qcf+3 follow-up. Risky at -14 but the evasion makes it hard to punish consistently.',
            notes: [
              'Steps left during startup — evades linear attacks',
              'Low crushes — goes over lows',
              'On hit: guaranteed f+3+4 → qcf+3 follow-up',
              '-14 on block — punishable',
              'Use as a read, not as a panic mash',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="db+1+2"
          move={{
            input: 'db+1+2',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i20~21',
            onBlock: '-4',
            onHit: '+21a',
            tags: ['Mid', 'Evasive', 'Safe'],
            description: 'An evasive mid that goes very low to the ground. -4 on block (safe) and on hit gives guaranteed uf+1,4 follow-up. Less reward than uf+2 but much safer.',
            notes: [
              'Goes very low — evades highs and some mids',
              '-4 on block — safe',
              'On hit: guaranteed uf+1,4 (heat) or df+1,3',
              'Safer alternative to uf+2 when you need evasion',
            ],
          }}
          showVideo
        />

        <MoveCard character="eddy"
          videoId="b+3+4"
          move={{
            input: 'b+3+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i20~21',
            onBlock: '-10',
            onHit: '+17a / HE',
            tags: ['Power Crush', 'Heat Engager', 'Defense'],
            description: 'Power crush that also activates heat. Absorbs mids and highs during armor frames. -10 on block. Use when the opponent is pressing with mid strings and you need to armor through.',
            notes: [
              'Power crush 7~19 — absorbs mids and highs',
              'Heat engager on hit',
              '-10 on block — punishable',
              'Your best "get off me" tool against mid pressure',
            ],
          }}
          showVideo
        />

        <h3>The Jab: 1,2</h3>
        <p>
          Don't forget the basics. <code>1,2</code> at i10 is your fastest tool. When you're
          minus and the opponent is in your face, sometimes a jab is all you need. It resets
          the situation, and on hit (+8) you can transition to HSP or just reassess.
        </p>

        <h3>1,2,3 — The Safe String</h3>
        <p>
          <code>1,2,3</code> is a jab string where the third hit (3) is hit-confirmable. On hit,
          it knocks down. On block, stop at <code>1,2</code> and you're safe. Use it to challenge
          when you're slightly minus — the jab comes out fast, and if it counter hits, the
          full string confirms for a knockdown.
        </p>
      </Section>

      <Section title="Generic Defense">
        <KeyConcept title="When to Stop Pressing" icon="🛡️">
          <p>
            Eddy players love to press. The flywheel rewards aggression. But there are moments
            where you <strong>must stop</strong>:
          </p>
          <ul>
            <li><strong>You're -5 or worse in HSP</strong> — You can't block. Get out with down tap or just eat the risk.</li>
            <li><strong>The opponent has identified your pattern</strong> — If they're punishing your RLX 3,3 three times in a row, stop throwing it. Vary your game.</li>
            <li><strong>They're using a character with strong float punishes</strong> — Characters like Dragunov, Victor, or Kazuya will float your airborne states for devastating damage. Be more careful with transitions.</li>
            <li><strong>You're at the wall being pressured</strong> — Don't mash out of wall pressure. Block, look for high ducks, and take your turn when it comes.</li>
          </ul>
        </KeyConcept>

        <h3>Backdash and Space</h3>
        <p>
          Eddy's backdash is decent. When you're minus and not sure what to do, backdash.
          Create space. Many of the opponent's plus-on-block moves have limited range — a
          backdash puts you out of their follow-up range and back into a distance where your
          approaches work.
        </p>

        <h3>Low Parry</h3>
        <p>
          Generic low parry (<code>df</code> during blockstun) works for Eddy like everyone else.
          If you read a low, low parry gives a guaranteed combo. This is especially important
          because Eddy has no reversal or sabaki — low parry is your only "counter" option.
        </p>

        <h3>Sidewalk Left</h3>
        <p>
          When you're on defense and the opponent is being linear, sidewalk left is your best
          friend. Many characters' pressure is steppable — identify which side and walk. Just
          don't overdo it or you'll eat a tracking move.
        </p>

        <TipBox variant="warning" title="No Reversal, No Parry">
          Eddy has no reversal (like Asuka's), no sabaki (like Jin's), no power parry. When you're
          on defense, you're using <strong>generic Tekken defense</strong> — blocking, backdashing,
          sidestepping, low parrying. There's no character-specific "get out of jail free" option.
          This means your defense must be fundamentally sound. If you can't block and move well,
          Eddy will suffer more than characters who have defensive gimmicks.
        </TipBox>
      </Section>

      <Section title="Practice: Defensive Scenarios">
        <PracticeBox
          title="Surviving Pressure"
          setup="Practice Mode. Record the dummy doing common pressure strings from popular characters."
          tasks={[
            { id: 'eddy-defense-block', text: 'Block a 5-hit string and punish with 1,3', detail: 'Record a common pressure string. Block everything, then punish with 1,3 if it\'s -10. Feel the patience.', type: 'counter', target: 5 },
            { id: 'eddy-defense-step', text: 'Sidestep a linear approach and launch with SS 3+4', detail: 'Record the dummy doing a linear approach. Step left, launch with SS 3+4.', type: 'counter', target: 5 },
            { id: 'eddy-defense-lowparry', text: 'Low parry a predictable low', detail: 'Record the dummy doing a jab into a low. Block the jab, low parry the low with df. Combo after parry.', type: 'counter', target: 5 },
            { id: 'eddy-defense-uf2', text: 'Use uf+2 to evade a linear string', detail: 'Record a linear mid string. Use uf+2 to step and hit. See the evasion in action.', type: 'toggle' },
            { id: 'eddy-defense-backdash', text: 'Backdash twice after blocking a plus-on-block move', detail: 'Record a +frame move. Block it, backdash twice, then check with df+2 if they chase. Feel the space control.', type: 'toggle' },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You have every piece now — neutral, stances, Mandinga, combos, punishment, heat,
          lows, defense. The final chapter puts it all together into a complete round plan:
          how a real game with Eddy flows from start to finish, how to adapt to different
          opponents, and how to keep improving beyond this guide.
        </p>
      </Section>
    </Chapter>
  )
}
