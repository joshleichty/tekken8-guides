import { Chapter, Section } from '../../../components/guide'
import { DecisionGrid, KeyConcept, PracticeBox, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Alisa Win Condition"
      intro="Alisa is not a random chainsaw character. She is a momentum character: win neutral with compact checks, enter DES safely, then force high-speed decisions until the opponent cracks."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Build Your Entry Buttons"
    >
      <Section title="Who Alisa Is">
        <p>
          Alisa is one of Tekken 8’s most unusual pressure characters. She moves like a lightweight, pokes like a
          fundamentals character, then suddenly shifts into chainsaw stances that force very different defensive answers.
          That contrast is her identity: clean neutral into volatile pressure.
        </p>
        <p>
          What makes her fun is that she can play both patient and aggressive without feeling contradictory. You can
          spend a round testing with safe mids, movement, and low chips, then flip the pace once you’ve earned respect.
          When Alisa is piloted well, the round feels like it keeps speeding up for the opponent while staying controlled
          for you.
        </p>
        <p>
          She is a great fit for players who like <strong>tempo control</strong>, <strong>stance pressure</strong>, and
          <strong> adaptation-heavy offense</strong>. She is a weaker fit if you want every decision to be low-execution
          autopilot, because her best results come from reading reactions and rotating options deliberately.
        </p>
      </Section>

      <Section title="What You’re Learning First">
        <p>
          Before we touch detailed stance layers, we need the big picture: what Alisa is trying to accomplish in a
          full round. Think of this as your map. The next chapters teach each piece in order so your improvement feels
          connected, not random.
        </p>
      </Section>

      <Section title="Your Match Objective">
        <KeyConcept title="How Alisa Actually Wins" icon="🎯">
          <ul>
            <li><strong>Step 1:</strong> Use safe mids and movement to win first contact.</li>
            <li><strong>Step 2:</strong> Enter <code>DES</code> from stable routes, not desperation.</li>
            <li><strong>Step 3:</strong> Force chip plus mixups until they over-respect or panic.</li>
            <li><strong>Step 4:</strong> Cash out with wall carry and Heat-enhanced chainsaw damage.</li>
          </ul>
        </KeyConcept>

        <p>
          If you skip step 1 and only fish for stance offense, stronger players will interrupt you. This guide teaches the
          full loop so your pressure is earned and repeatable.
        </p>
      </Section>

      <Section title="What Playing Alisa Should Feel Like">
        <p>
          Good Alisa is not chaos. It should feel like a fast conversation where you keep asking hard questions:
          “Will you swing here?”, “Will you step here?”, “Will you duck now?” Every answer your opponent gives
          lets you tighten the next layer.
        </p>
        <p>
          This guide is built around that feeling. We start with contact and control, then learn how to cash that
          control into DES/DBT pressure, and finally close rounds with wall and Heat discipline. The goal is that by
          the end, your matches look intentional from round start to round end.
        </p>
      </Section>

      <Section title="Round Start Decision Map">
        <DecisionGrid
          title="First 10 Seconds"
          description="Use this as your default script until adaptation is needed."
          rows={[
            {
              situation: 'Opponent backdashes at round start',
              response: 'f,f,f+2 or dash guard',
              reason: 'Take space safely and threaten immediate plus frames.',
              risk: 'Running high can be ducked if overused.',
            },
            {
              situation: 'Opponent mashes at range 1',
              response: 'df+1 or b+1',
              reason: 'Fast mids that keep your turn compact and controlled.',
              risk: 'Low reward if they only block.',
            },
            {
              situation: 'Opponent hard-steps after your poke',
              response: 'uf+2 or b+3',
              reason: 'Homing checks stop movement abuse and rebuild respect.',
              risk: 'You can be whiff punished if you force it badly.',
            },
            {
              situation: 'Opponent turtles',
              response: 'd+4 and db+3 into timing trap',
              reason: 'Chip their life and create frame hesitation.',
              risk: 'Predictable lows get low-parried.',
            },
          ]}
        />
      </Section>

      <Section title="Non-Negotiable Habits">
        <TipBox variant="warning" title="Do Not Autopilot Chainsaws">
          DES is strongest when the opponent is already conditioned. If you force stance entries from bad range, your
          offense becomes fake.
        </TipBox>

        <PracticeBox
          title="Warm-Up Routine (5 Minutes)"
          setup="Practice Mode, Guard: Random, Counter Hit: On"
          tasks={[
            {
              id: 'alisa-warmup-1',
              text: 'Land 10 clean df+1 checks at close range',
              type: 'counter',
              target: 10,
            },
            {
              id: 'alisa-warmup-2',
              text: 'Confirm 3,2 as punish 5 times',
              type: 'counter',
              target: 5,
            },
            {
              id: 'alisa-warmup-3',
              text: 'Enter DES safely from f+2,1+2 ten times',
              type: 'counter',
              target: 10,
            },
            {
              id: 'alisa-warmup-4',
              text: 'Play one round using only mids for neutral control',
              type: 'toggle',
            },
          ]}
        />
      </Section>
    </Chapter>
  )
}
