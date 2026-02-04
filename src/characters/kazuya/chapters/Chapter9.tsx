import { Chapter, Section } from '../../../components/guide'
import { ComboCard, TipBox, DecisionGrid, KeyConcept } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Combos That Matter"
      intro="Kazuya’s combos are about reliability and wall carry. These are the routes you should trust in real matches."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Use Heat & Devil"
    >
      <Section title="The Universal Route">
        <ComboCard
          title="Universal Launcher"
          starter="EWGF / ff3 / CH df+2"
          route={[
            'Launcher',
            '(dash) b+2,2',
            'df+1,df+2 T!',
            'b+2,2,1+2',
          ]}
          difficulty="intermediate"
          wallCarry
          notes="Stable damage, excellent carry. Adjust dash distance based on launch height."
        />
      </Section>

      <Section title="While Standing Punish">
        <ComboCard
          title="ws1,2 Conversion"
          starter="ws1,2"
          route={[
            'ws1,2',
            'b+2,2',
            'df+1,df+2 T!',
            'b+2,2,1+2',
          ]}
          difficulty="beginner"
          notes="Default low punish conversion."
        />
      </Section>

      <Section title="Counter-Hit df+2 Route">
        <ComboCard
          title="CH df+2"
          starter="CH df+2"
          route={[
            'df+3,2,1 (hold) T!',
            'b+2,2,1+2',
          ]}
          difficulty="beginner"
          notes="Simple and reliable. Prioritize consistency over max damage."
        />
      </Section>

      <Section title="Double Electric Carry">
        <ComboCard
          title="Double EWGF"
          starter="EWGF"
          route={[
            'EWGF',
            'EWGF',
            'b+2,2',
            'df+1,2 T!',
            'b+2,2,1+2',
          ]}
          difficulty="advanced"
          wallCarry
          notes="High damage and carry, but execution heavy."
        />
      </Section>

      <Section title="Decision Map">
        <DecisionGrid
          title="Combo Selection"
          rows={[
            {
              situation: 'You are unsure of height or spacing',
              response: 'Universal route',
              reason: 'Most consistent and carries well',
              risk: 'Slightly less damage than optimal'
            },
            {
              situation: 'You land ws1,2 punish',
              response: 'ws1,2 route',
              reason: 'Stable conversion after low blocks',
              risk: 'None if you buffer the dash'
            },
            {
              situation: 'You feel confident on execution',
              response: 'Double EWGF route',
              reason: 'Highest reward and carry',
              risk: 'Drops hurt your momentum'
            },
          ]}
        />
      </Section>

      <Section title="Combo Philosophy">
        <KeyConcept title="Do Not Overreach" icon="🎯">
          <p>
            A shorter combo that always lands is more valuable than a flashy route you drop. 
            In real matches, consistency wins.
          </p>
        </KeyConcept>
        <TipBox variant="tip" title="Wall First">
          If you are close to the wall, prioritize carry and wall enders over raw damage.
        </TipBox>
      </Section>
    </Chapter>
  )
}
