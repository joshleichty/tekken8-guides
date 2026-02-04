import { Chapter, Section } from '../../../components/guide'
import { MoveCard, TipBox, DecisionGrid, ConstraintPlay, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="The Contract Moves"
      intro="Kazuya is a contract character. You agree to risk. In exchange, you get a round off a single guess. These are the contract moves."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Hold Them Still"
    >
      <Section title="The Punish Contract: 1,1,2">
        <MoveCard
          character="kazuya"
          move={{
            input: '1,1,2',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 6, 14',
            startup: 'i10',
            onBlock: '-17',
            onHit: '+20a',
            tags: ['Punish', 'Knockdown'],
            description: 'Your fastest knockdown punish. This is the move that turns mistakes into the vortex.',
          }}
          showVideo
        />
        <p>
          This is not just a string. It is your ticket into okizeme. If you are not punishing with this, 
          you are missing the entire point of Kazuya.
        </p>
      </Section>

      <Section title="The Mid Contract: f,F+3">
        <MoveCard
          character="kazuya"
          move={{
            input: 'f,F+3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i20',
            onBlock: '-3',
            onHit: '+46a',
            tags: ['Mid', 'Launcher'],
            description: 'Your mid launcher. It is the reason they stop ducking.',
          }}
          showVideo
        />
      </Section>

      <Section title="The Low Contract: Hellsweep">
        <MoveCard
          character="kazuya"
          move={{
            input: 'f,n,d,df+4,1',
            hitLevel: ['l', 'm'],
            damage: '15, 23',
            startup: 'i16',
            onBlock: '-16',
            onHit: '+17a',
            tags: ['Low', 'Knockdown', '50/50'],
            description: 'Your low knockdown. It forces fear and sets the vortex.',
          }}
          showVideo
        />

        <TipBox variant="warning" title="Do Not Throw This Raw">
          Hellsweep is punishable. Use it when you have earned stillness: after a knockdown, 
          after they freeze to ff3, or after they stop stepping.
        </TipBox>
      </Section>

      <Section title="How They Work Together">
        <DecisionGrid
          title="Conditioning Loop"
          rows={[
            {
              situation: 'Opponent blocks and stands still',
              response: 'Hellsweep',
              reason: 'They are afraid to duck after seeing ff3',
              risk: 'If they hard read, you get punished'
            },
            {
              situation: 'Opponent ducks or twitch-ducks',
              response: 'f,F+3',
              reason: 'Mid launcher shuts down ducking',
              risk: 'If they stay standing, it is just pressure'
            },
            {
              situation: 'Opponent swings after block',
              response: '1,1,2',
              reason: 'Fastest knockdown check',
              risk: 'If you overuse, they step'
            },
          ]}
        />
      </Section>

      <Section title="Notation Quick Reference">
        <Collapsible title="Crouch Dash Basics" icon="🧠">
          <p style={{ marginTop: '12px' }}>
            Crouch Dash is <code>f,n,d,df</code>. It is how you access both the hellsweep and electric.
          </p>
          <p>
            Practice the motion slowly first. The speed comes later.
          </p>
        </Collapsible>
      </Section>

      <Section title="Constraint Play">
        <ConstraintPlay
          title="The Contract Only"
          description="Play short sets using only the three contract moves and movement. This forces clean decision-making."
          allowedMoves={[
            { input: '1,1,2', purpose: 'Punish and knockdown' },
            { input: 'f,F+3', purpose: 'Mid launcher threat' },
            { input: 'f,n,d,df+4,1', purpose: 'Low knockdown' },
          ]}
          duration="8 games"
          goal="Win one round per game using only these moves"
          whatYouLearn={[
            'How to create stillness for hellsweep',
            'How to use ff3 without autopilot',
            'How much damage a single guess provides'
          ]}
          setup={{
            cpuBehavior: 'CPU Guard: Stand (Random)',
            rounds: 3
          }}
          progressionHint="Once this feels easy, add df+1 and db+4 in the next chapter."
        />
      </Section>
    </Chapter>
  )
}
