import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  ConstraintPlay,
  MatchScenario,
  ConceptBuilder
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4Practice({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Feel Your Neutral"
      intro="You know the moves. Now let's feel how they work together. This chapter is about getting the rhythm of Jin's basic game — no combos, no fancy stuff, just the fundamentals."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Jab Strings"
    >
      <Section title="The Basic Toolkit">
        <p>
          You've learned these moves individually. Now it's time to use them <em>together</em>.
        </p>

        <ConceptBuilder
          title="Jin's Foundation"
          subtitle="Everything builds from here"
          foundation={[
            { label: 'Jab (1)', input: '1', description: '+1 on block, starts pressure' },
            { label: 'df+1', input: 'df+1', description: 'Safe mid check' },
            { label: 'd+4', input: 'd+4', description: 'Quick low, high crushes' },
          ]}
          newAddition={{
            label: 'f+4',
            input: 'f+4',
            description: 'CH launcher, controls space'
          }}
          result="A complete basic gameplan: poke, check, chip, and fish for counter-hits"
        />

        <p style={{ marginTop: '24px' }}>
          These four moves are 80% of what you'll do in neutral. The rest is knowing <em>when</em> to use each one.
        </p>
      </Section>

      <Section title="The Simple Loop">
        <KeyConcept title="How Jin Plays Neutral" icon="🔄">
          <ol>
            <li><strong>Jab (1)</strong> — Check if they're pressing. You're +1.</li>
            <li><strong>df+1</strong> — They blocked the jab? Mid check. Still your turn.</li>
            <li><strong>d+4</strong> — They're blocking everything? Chip them low.</li>
            <li><strong>f+4</strong> — They started pressing? Fish for counter-hit.</li>
            <li><strong>Repeat</strong> — Adjust based on what they do.</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Overthink It">
          At this stage, you're not trying to be optimal. You're trying to feel the rhythm. 
          Jab, mid, low, counter-hit tool. That's the cycle. Get comfortable with it.
        </TipBox>
      </Section>

      <Section title="Try It Out">
        <p>
          If you want to practice, here's a way to drill the basic neutral game. 
          Set this up in practice mode and just play — no combos, just pokes.
        </p>

        <ConstraintPlay
          title="Poke-Only Neutral"
          description="Play neutral using only your basic tools. The goal isn't to win — it's to feel when each move is appropriate."
          allowedMoves={[
            { input: '1', purpose: 'Interrupt, start pressure' },
            { input: 'df+1', purpose: 'Mid check' },
            { input: 'd+4', purpose: 'Low chip' },
            { input: 'f+4', purpose: 'Counter-hit fishing' },
            { input: 'Block + Move', purpose: 'Defense and spacing' },
          ]}
          duration="3-5 rounds"
          goal="Win a round using only these moves"
          whatYouLearn={[
            'When opponents respect vs. when they press',
            'The natural rhythm of poke → check → chip',
            'How f+4 catches people who press too much',
          ]}
          setup={{
            opponent: 'Any character',
            cpuBehavior: 'CPU or Ultra Hard',
            rounds: 3
          }}
          progressionHint="Once this feels natural, you're ready for strings and combos"
        />
      </Section>

      <Section title="Reading Your Opponent">
        <p>
          Even at a basic level, you're making reads. Here's how to think about it:
        </p>

        <MatchScenario
          title="After Your Jab"
          situation="You threw out a jab (1) and they blocked it. You're +1. What now?"
          options={[
            {
              action: 'Another jab',
              input: '1',
              result: 'Safe, keeps pressure. If they pressed, you interrupt.',
              followup: 'Good if they\'re trying to take their turn'
            },
            {
              action: 'Mid check',
              input: 'df+1',
              result: 'Catches duckers. Still safe at -3.',
              isOptimal: true,
              followup: 'Best all-around option — beats duck, still your turn'
            },
            {
              action: 'Low',
              input: 'd+4',
              result: 'Chips them, but risky if they were pressing. -12 on block.',
              followup: 'Save for when they\'re clearly blocking'
            },
            {
              action: 'f+4',
              input: 'f+4',
              result: 'If they press, CH launch. If they block, -8 but safe.',
              followup: 'Good if they always try to take their turn'
            }
          ]}
          keyTakeaway="df+1 is your safest follow-up after jab. But watch what they do — if they always press, start using f+4 to blow them up."
        />

        <MatchScenario
          title="They Keep Blocking"
          situation="Your opponent is just blocking everything. Standing there. What do you do?"
          options={[
            {
              action: 'Keep poking',
              input: 'df+1, 1, df+1...',
              result: 'Safe but no damage. They\'ll wait you out.',
              followup: 'Not wrong, but not winning either'
            },
            {
              action: 'Go for lows',
              input: 'd+4, db+4',
              result: 'Chip damage adds up. db+4 is +3 on hit!',
              isOptimal: true,
              followup: 'Make them block low. Then they can\'t just stand there.'
            },
            {
              action: 'Walk up throw',
              result: 'Breaks their guard. 35 damage.',
              followup: 'Throws beat blocking. Mix them in.'
            },
            {
              action: 'f+4 anyway',
              input: 'f+4',
              result: '-8 on block, no damage. But maybe they\'ll press eventually.',
              followup: 'Not ideal against pure turtles'
            }
          ]}
          keyTakeaway="Turtles get opened up by lows and throws. db+4 is your friend — it does real damage and you're plus afterwards."
        />
      </Section>

      <Section title="What Success Feels Like">
        <p>
          You're ready to move on when:
        </p>

        <KeyConcept title="Checkpoint" icon="✓">
          <ul>
            <li>You can throw out jab → df+1 → d+4 without thinking about inputs</li>
            <li>You recognize when opponents are pressing vs. blocking</li>
            <li>f+4 counter-hits feel satisfying, not accidental</li>
            <li>You can win rounds without doing any combos</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="It's Okay to Move On">
          You don't need to master this before continuing. The goal is just to have <em>felt</em> it. 
          You'll keep developing this as you learn more tools. The foundation is the important part.
        </TipBox>
      </Section>

      <Section title="Why This Matters">
        <p>
          Everything Jin does is built on this foundation. When you learn combos, you're converting 
          <em>these</em> pokes into damage. When you learn punishment, you're creating openings with 
          <em>this</em> pressure. When you learn wall game, you're getting there through <em>this</em> neutral.
        </p>

        <p>
          The Electric, ZEN stance, heat system — they're all extensions of this basic loop. 
          Get the fundamentals in your hands first. The fancy stuff comes naturally after.
        </p>
      </Section>
    </Chapter>
  )
}
