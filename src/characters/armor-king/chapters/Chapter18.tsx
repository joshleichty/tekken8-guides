import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, Flowchart, SituationCard, CompletionBadge } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter18({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={18}
      title="Game Plan"
      intro="You've learned all the tools. Now let's put it all together into a cohesive game plan."
      onPrevious={() => goToChapter(17)}
      hasNext={false}
      onNext={() => goToChapter(1)}
      nextLabel="Review from Start"
    >
      <Section title="The Armor King Identity">
        <KeyConcept title="What Kind of Player Are You?" icon="🦁">
          <p>Armor King wants to:</p>
          <ul>
            <li><strong>Control space</strong> with movement and pokes</li>
            <li><strong>Punish mistakes</strong> with Dark Upper</li>
            <li><strong>Set up throws</strong> from plus frames</li>
            <li><strong>Crush oki</strong> with ground throws and stomp</li>
            <li><strong>Go wild in Heat</strong> with homing throws</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Neutral Game">
        <Flowchart
          title="Neutral Game Flow"
          startNode="Starting Position"
          branches={[
            { label: 'Poke', action: 'df+1, d+2, df+4' },
            { label: 'Check Steps', action: 'b+3+4, ub+1' },
            { label: 'Fish CH', action: 'df+3, ff+2, ws+2' },
            { label: 'Get Plus', action: 'ub+1, CD1, f+4' },
          ]}
        />

        <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '1.1rem' }}>
          <strong>From Plus Frames → THROWS!</strong>
        </p>
      </Section>

      <Section title="Offense Flow">
        <SituationCard title="When You're Plus">
          <p>You landed ub+1, CD1, or another plus move. Now what?</p>
          <ul>
            <li><strong>They duck?</strong> → Your mids hit (df+3, ff+2)</li>
            <li><strong>They stand block?</strong> → Giant Swing / Tombstone</li>
            <li><strong>They sidestep?</strong> → Use homing (b+3+4) or go to Heat</li>
            <li><strong>They press?</strong> → Your throw beats their button</li>
          </ul>
        </SituationCard>
      </Section>

      <Section title="Defense Flow">
        <SituationCard title="When You're Under Pressure">
          <ul>
            <li><strong>Sidestep</strong> → Their linear moves whiff → Dark Upper</li>
            <li><strong>d+1,4</strong> → High crush panic move</li>
            <li><strong>f+1+2</strong> → Power crush through pressure</li>
            <li><strong>b+1+3</strong> → Parry their punches</li>
            <li><strong>Duck</strong> → Launch their highs with ws+1</li>
          </ul>
        </SituationCard>
      </Section>

      <Section title="Heat Game Plan">
        <SituationCard title="When to Activate Heat">
          <ul>
            <li>When you want to run your throw mixups with no sidestep escapes</li>
            <li>When opponent is near wall (wall Giant Swing is unbreakable!)</li>
            <li>To use H.ub+1 as a +8 launcher</li>
            <li>To access H.BAD 3,2 power crush</li>
          </ul>
        </SituationCard>
      </Section>

      <Section title="Match Summary Checklist">
        <KeyConcept title="Things to Remember Each Round" icon="✅">
          <ul>
            <li>Start with pokes (df+1, d+2) and movement</li>
            <li>Watch for whiffs → Dark Upper</li>
            <li>Get plus frames → throw mixup</li>
            <li>Use homing moves when they step (b+3+4, ub+1)</li>
            <li>After knockdown → oki with db+2+4 or stomp</li>
            <li>At wall → Giant Swing is unbreakable!</li>
            <li>In Heat → spam homing throws</li>
            <li>Block punish with b+1,2~F for Bad Jaguar setup</li>
          </ul>
        </KeyConcept>
      </Section>

      <CompletionBadge message="🦁 Congratulations! You've completed the Armor King Mastery Guide!" />

      <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--text-secondary)' }}>
        Now take this knowledge into practice mode, then ranked matches. The more you play, the more 
        natural everything becomes. Remember: Armor King rewards patience, punishment, and throw mixups. 
        Good luck!
      </p>
    </Chapter>
  )
}
