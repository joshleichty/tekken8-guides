import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  StanceBox,
  MatchScenario,
  Flowchart,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Libertador"
      intro="Every road in Azucena's gameplan leads to Libertador. From 1,1, from ws+4,1, from WR 3,2, from df+1,4 — they all funnel into this stance. And once you're here, the decision is simple: mid or low. That's it. Everything else is protection for that one guess."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Back Turn"
    >
      <Section title="What LIB Actually Is">
        <p>
          Libertador looks like a complex stance. It has eight or nine moves. It has defensive properties. It
          transitions from half a dozen entry points. It <em>looks</em> deep.
        </p>

        <p>
          Forget all that. Libertador is a <strong>50/50 delivery system</strong>. You enter it, you pick mid
          or low, and you leave. Every other LIB option exists to protect that core guess or to punish people
          who try to escape it. That's the entire stance.
        </p>

        <StanceBox name="Libertador (LIB)" input="f+3+4 (or transition)" icon="☕">
          <p>
            Azucena's primary stance. Entered from 1,1 (+8), ws+4,1 (+5), WR 3,2 (+2), df+1,4~F, uf+3+4,
            or manually with f+3+4. <strong>Auto-evades highs and lows</strong> during the stance transition.
          </p>
          <p style={{ marginTop: '8px' }}>
            In Heat: enhanced auto-counter against highs AND lows, with guaranteed follow-ups on successful
            counters.
          </p>
        </StanceBox>
      </Section>

      <Section title="The Core Guess">
        <p>
          At +8 from 1,1 (your most common entry), both of these options are uninterruptible. Your opponent
          must guess.
        </p>

        <MoveCard character="azucena"
          videoId="LIB.4,1"
          move={{
            input: 'LIB 4,1',
            hitLevel: ['m', 'm'],
            damage: '14, 14',
            startup: 'i15',
            onBlock: '-7',
            onHit: 'KND',
            onCH: 'KND',
            tags: ['Mid Option', 'Safe', 'The Honest Choice'],
            description: 'The safe mid option from LIB. Knocks down on hit. -7 on block means nobody punishes this. This is your "I don\'t want to guess wrong" button.',
            notes: ['Safe at -7 — your low-risk mid', 'Knockdown on hit for oki', 'Both hits are mid — can\'t be ducked', 'Use this as your default until you have a read']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="LIB.d+4,4"
          move={{
            input: 'LIB d+4,4',
            hitLevel: ['l', 'l'],
            damage: '12, 21',
            startup: 'i20',
            onBlock: '-26',
            onHit: 'Launch',
            tags: ['Low Option', 'Hellsweep', 'High Risk High Reward'],
            description: 'The hellsweep. Launches on hit for a full combo. Launch punishable on block. This is the move that makes opponents afraid to stand.',
            notes: ['Launches on hit → full combo', '-26 on block — VERY punishable', 'Both hits are low — opponent must low block', 'Use sparingly but decisively']
          }}
          showVideo
        />

        <MatchScenario
          title="The LIB 50/50"
          situation="You punished with 1,1 and entered LIB at +8. Your opponent is blocking."
          context="You've landed 1,1 three times this round. They keep standing after."
          options={[
            {
              action: 'LIB 4,1 (mid)',
              input: 'LIB 4,1',
              result: 'Safe, 28 damage, knockdown. But if they\'ve been standing every time, you\'re leaving damage on the table.',
              isOptimal: false,
            },
            {
              action: 'LIB d+4,4 (hellsweep)',
              input: 'LIB d+4,4',
              result: 'They\'ve been standing three times. The hellsweep launches for a full combo — 60+ damage. This is the read.',
              isOptimal: true,
              followup: 'They\'ll start ducking after this. Then LIB 4,1 becomes free.',
            },
            {
              action: 'LIB 2 (safe mid)',
              input: 'LIB 2',
              result: 'Safe mid that\'s also a heat engager. Good utility but less reward than committing to the 50/50.',
              isOptimal: false,
              followup: 'Better as a pressure tool than a 50/50 option.',
            },
          ]}
          keyTakeaway="The 50/50 is about reading habits, not guessing randomly. If they've been standing, go low. If they've been crouching, go mid. The key is paying attention."
        />
      </Section>

      <Section title="The Pressure Options">
        <p>
          Beyond the core 50/50, LIB has tools for maintaining pressure and catching specific responses.
        </p>

        <MoveCard character="azucena"
          videoId="LIB.1"
          move={{
            input: 'LIB 1',
            hitLevel: ['h'],
            damage: '8',
            startup: 'i8',
            onBlock: '+3',
            onHit: '+8',
            tags: ['Jab', 'Plus on Block', 'Chip'],
            description: 'LIB jab. +3 on block, +8 on hit. Use it to maintain pressure without committing to the 50/50. After LIB 1, you can jab again, go for df+1,4, or re-enter stance.',
            notes: ['+3 on block — you\'re still plus', '+8 on hit — strong follow-up', 'High — can be ducked', 'Use to probe before committing']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="LIB.2"
          move={{
            input: 'LIB 2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16',
            onBlock: '-9',
            onHit: '+7',
            tags: ['Safe Mid', 'Heat Engager', 'Stance Pressure'],
            description: 'Safe mid and heat engager from LIB. -9 on block is safe against everyone. Good for when you want a mid option that also starts heat.',
            notes: ['Heat engager — start heat from stance', '-9 on block — safe', '+7 on hit', 'Use when you want safe mid damage with heat value']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="LIB.3+4"
          move={{
            input: 'LIB 3+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i18',
            onBlock: '-8',
            onHit: '+3',
            tags: ['Homing', 'Armor', 'Anti-Sidestep'],
            description: 'Homing move with armor. Catches sidesteps and trades favorably with attacks. Use this when opponents try to escape LIB by sidestepping.',
            notes: ['Homing — catches both sidestep directions', 'Has armor — trades with attacks', '-8 on block — safe', 'Guaranteed db+1+2 follow-up on certain hits']
          }}
          showVideo
        />
      </Section>

      <Section title="The Season 2 Weapon: LIB d+3">
        <p>
          Season 2 gave Azucena a game-changer: <code>LIB d+3</code>. A mid ground spike that's <strong>+2 on
          block</strong>, crushes highs, and leads to FC df+4 on hit — which forces <em>another</em> LIB entry.
        </p>

        <MoveCard character="azucena"
          move={{
            input: 'LIB d+3',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i18',
            onBlock: '+2',
            onHit: 'KND',
            onCH: 'KND',
            tags: ['New S2', 'Plus on Block', 'High Crush', 'Game Changer'],
            description: 'Season 2 addition. A mid from LIB that\'s +2 on block and puts you in crouch. On hit, follow with FC df+4 for another LIB entry. This move fixed Azucena\'s biggest stance weakness.',
            notes: ['+2 on block into FC — huge', 'Crushes highs during animation', 'On hit → FC df+4 → back to LIB', 'Gives LIB a safe mid option that\'s actually plus']
          }}
        />

        <KeyConcept title="The LIB d+3 Loop" icon="🔄">
          <p>
            Before Season 2, LIB's mid options were either safe but minus (LIB 4,1 at -7) or risky. LIB d+3
            changed everything by giving you a mid that's <strong>plus on block</strong>. The loop:
          </p>
          <ul>
            <li>Enter LIB → LIB d+3 (blocked) → +2 in FC</li>
            <li>From FC → FC df+4 (blocked) → enters LIB again</li>
            <li>Back in LIB → repeat or go for the 50/50</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This creates a pressure loop where you're plus at every step. The opponent has to make a
            decision at each point, and wrong decisions compound.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Getting Into LIB">
        <p>
          Knowing what to do in Libertador is only half the battle. The other half is knowing when you're
          plus enough to use it.
        </p>

        <Flowchart
          title="LIB Entry Points"
          nodes={[
            { type: 'start', label: 'How do you enter LIB?' },
            { type: 'decision', label: 'Choose your entry', branches: [
              { label: '1,1 on hit → +8', action: 'BEST entry. All LIB options are real. Use after every 10f punish.' },
              { label: 'ws+4,1 on hit → +5', action: 'Good entry. Fast LIB options work. Use after blocking lows.' },
              { label: 'WR 3,2 on block → +2', action: 'Decent entry. LIB jab works. 50/50 is interruptible — use with caution.' },
              { label: 'df+1,4~F on hit → +7', action: 'Strong entry. Use when df+1,4 connects for a free LIB mixup.' },
            ]},
            { type: 'end', label: 'The more plus you are, the safer your LIB options become.' }
          ]}
        />

        <TipBox variant="warning" title="When NOT to Enter LIB">
          Don't enter LIB when you're minus. If df+1,4 was <em>blocked</em> and you cancel to LIB, you're at
          -2 — the opponent's jab beats everything you can do from stance. LIB on block requires a passive
          opponent who doesn't know to punish. Against anyone who jabs, only enter LIB when your move <strong>hits</strong>.
        </TipBox>
      </Section>

      <Section title="Practice: The LIB Foundation">
        <PracticeBox
          title="Libertador Drill"
          setup="Practice Mode. Record opponent doing a -10 move on repeat."
          tasks={[
            { id: 'az-lib-41', text: 'Punish with 1,1 → LIB 4,1 ten times', detail: 'The safe mid route. Get the 1,1 into LIB 4,1 flow automatic.', type: 'counter', target: 10 },
            { id: 'az-lib-d44', text: 'Punish with 1,1 → LIB d+4,4 ten times', detail: 'The hellsweep route. Same entry, different exit.', type: 'counter', target: 10 },
            { id: 'az-lib-mix', text: 'Alternate mid and low randomly for 20 reps', detail: 'Don\'t fall into a pattern. Decide BEFORE the 1,1 hits — not after.', type: 'counter', target: 20 },
            { id: 'az-lib-d3', text: 'Do 1,1 → LIB d+3 → FC df+4 → LIB (repeat) five times', detail: 'The pressure loop. Enter LIB, d+3, transition to FC, FC df+4, back to LIB.', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          Libertador is Azucena's primary stance, but she has a second one: <strong>Back Turn</strong>.
          Accessed mainly through <code>db+3</code>, BT extends the pressure chain when LIB runs out of
          momentum. The two stances form a loop that keeps the opponent guessing long after the first
          punish connected.
        </p>
      </Section>
    </Chapter>
  )
}
