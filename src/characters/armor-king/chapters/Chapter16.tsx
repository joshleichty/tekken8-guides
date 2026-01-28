import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, Collapsible, Flowchart, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter16({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={16}
      title="Heat System"
      intro="Heat transforms Armor King's throw game. Let's learn how to maximize your Heat time."
      onPrevious={() => goToChapter(15)}
      onNext={() => goToChapter(17)}
      nextLabel="Continue to Combos"
    >
      <Section title="Heat Engagers">
        <p>These moves activate Heat when they hit:</p>

        <Collapsible title="All Heat Engagers" icon="🔥" defaultOpen>
          <ul>
            <li><strong>f+2,1</strong> — Long range, good whiff punish, -9</li>
            <li><strong>ff+4</strong> — 14f mid, safe at -8</li>
            <li><strong>ws+3,1</strong> — 13f ws punish, -13</li>
            <li><strong>BAD 1,2</strong> — From Bad Jaguar stance, -12</li>
            <li><strong>d+2+4</strong> — Crouch throw! Unbreakable engager</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="What Changes in Heat">
        <KeyConcept title="Heat Bonuses" icon="🔥">
          <ul>
            <li><strong>Throws become homing:</strong> Giant Swing, Shining Wizard, Hades Drop all track!</li>
            <li><strong>Poison Mist faster:</strong> 35f → 25f startup</li>
            <li><strong>ub+1 enhanced:</strong> +5 → <span className="highlight">+8 on block</span>, becomes a normal hit launcher!</li>
            <li><strong>ub+1+2 (charged) enhanced:</strong> Tornado launcher, +0 on block, 8 chip damage</li>
            <li><strong>New moves:</strong> db+2,1 (Heat only), BAD 3,2 (Heat only)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat-Only Moves">
        <MoveCard
          input="H.ub+1"
          tags={['high', 'homing', 'heat', 'launcher']}
          description={
            <>
              <span className="highlight">+8 on block!</span> In Heat, this becomes a{' '}
              <span className="highlight-secondary">normal hit launcher</span> instead of just knockdown! 
              Tornado tailspin on hit.
            </>
          }
          stats={{
            startup: 'i24',
            onBlock: '+8',
            onHit: '+60a Launch',
          }}
        />

        <MoveCard
          input="H.db+2,1"
          tags={['mid', 'mid', 'heat only']}
          description={
            <>
              Heat-only extension. <span className="highlight">+3 on block!</span> Balcony breaks. 
              A great plus frame option in Heat.
            </>
          }
          stats={{
            startup: 'i14',
            onBlock: '+3',
            onHit: '+17a',
          }}
        />

        <MoveCard
          input="H.BAD 3,2"
          tags={['mid', 'mid', 'Power Crush', 'heat only']}
          description={
            <>
              Heat-only Bad Jaguar power crush. <span className="highlight">+5 on block!</span> Two-hit 
              power crush that jails. Uses Heat time.
            </>
          }
          stats={{
            startup: 'i34',
            onBlock: '+5',
            onHit: '+1a',
          }}
        />
      </Section>

      <Section title="Heat Smash">
        <MoveCard
          input="H.2+3"
          tags={['mid', 'throw', 'heat smash']}
          description="Your Heat Smash. Mid into attack throw on hit. 54 total damage. +9 on block! Balcony breaks."
          stats={{
            startup: 'i17',
            onBlock: '+9',
            damage: '54',
          }}
        />
      </Section>

      <Section title="Heat Game Plan">
        <Flowchart
          title="Heat Activation Strategy"
          startNode="Activate Heat (any heat engager)"
          middleNode="Throws are now HOMING!"
          branches={[
            { label: 'Use H.ub+1', action: '+8 on block, launcher on hit' },
            { label: 'Use H.BAD 3,2', action: '+5 power crush from stance' },
            { label: 'Spam homing throws', action: 'Giant Swing, Shining Wizard track!' },
            { label: 'End with Heat Smash', action: '54 damage, +9 on block' },
          ]}
        />
      </Section>

      <KeyConcept title="Heat Strategy" icon="🎯">
        <p>In Heat, your gameplan changes:</p>
        <ul>
          <li><strong>Throws can't be sidestepped</strong> — Opponent must duck or break</li>
          <li><strong>H.ub+1 is +8</strong> — Massive plus frames for throw setups</li>
          <li><strong>H.BAD 3,2 is +5</strong> — Power crush that's plus on block!</li>
          <li><strong>Use Heat Smash</strong> — End Heat with guaranteed damage</li>
        </ul>
        <p>Heat is when Armor King becomes truly oppressive!</p>
      </KeyConcept>

      <PracticeBox
        title="Heat Practice"
        setup="Set dummy to Stand, No Guard. Activate Heat and practice the Heat-only moves."
        tasks={[
          { id: 'ch16-activate', text: 'Activate Heat with ff+4', detail: 'Practice the heat engager', type: 'counter', target: 5 },
          { id: 'ch16-hub1', text: 'Do H.ub+1 (Heat ub+1)', detail: 'Notice +8 on block and launcher on hit', type: 'counter', target: 10 },
          { id: 'ch16-homethrow', text: 'Do Giant Swing in Heat (homing)', detail: 'Try it from different angles — it tracks!', type: 'counter', target: 10 },
          { id: 'ch16-heatsmash', text: 'Do H.2+3 (Heat Smash)', detail: 'Your Heat finisher', type: 'counter', target: 5 },
        ]}
      />

      <Quiz
        question="You activate Heat and your opponent starts sidestepping your throws. What should you do?"
        options={[
          { text: 'Stop throwing — they can step it', isCorrect: false },
          { text: 'Keep throwing — throws are homing in Heat!', isCorrect: true },
          { text: 'Only use mids', isCorrect: false },
          { text: 'Backdash and wait', isCorrect: false },
        ]}
        correctFeedback="Correct! In Heat, Giant Swing, Shining Wizard, and Hades Drop all become homing. They can't sidestep your throws — they must duck or break them!"
        incorrectFeedback="Not quite! In Heat, your throws become homing. Giant Swing, Shining Wizard, and Hades Drop all track sidesteps. This is when your throw game becomes truly scary!"
      />
    </Chapter>
  )
}
