import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, Flowchart, SituationCard, TipBox, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Throw Mixups"
      intro="Throws alone aren't enough — you need to create situations where throws become truly scary. Let's learn how to set up and execute throw mixups."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Continue to Chain Throws"
    >
      <KeyConcept title="The Throw Mixup Philosophy" icon="🔑">
        <p>Throws are scary when:</p>
        <ul>
          <li><strong>You're at plus frames</strong> — Opponent can't step</li>
          <li><strong>They're conditioned</strong> — They expect mids, so throws land</li>
          <li><strong>You mix break types</strong> — 1 break vs 1+2 break keeps them guessing</li>
          <li><strong>You're in Heat</strong> — Throws become homing!</li>
        </ul>
        <p>The key is creating situations where they MUST guess, not react.</p>
      </KeyConcept>

      <Section title="Plus Frame Throw Setups">
        <p>These moves leave you plus, perfect for throw attempts:</p>

        <SituationCard title="Plus Frame → Throw Routes">
          <ul>
            <li><strong>ub+1 (+5)</strong> → Giant Swing / Tombstone</li>
            <li><strong>CD1 (+5)</strong> → Any throw</li>
            <li><strong>f+4 (+3)</strong> → Crouch throw (on CH gives guaranteed)</li>
            <li><strong>ff+3 (+2)</strong> → Giant Swing</li>
            <li><strong>4,3 (0)</strong> → Giant Swing frame trap</li>
            <li><strong>WR3 (+6)</strong> → Any throw</li>
            <li><strong>b+1,2~F (+8)</strong> → BAD 1+3 Giant Swing</li>
            <li><strong>BAD 1+2 (+5)</strong> → Any throw from stance</li>
          </ul>
        </SituationCard>
      </Section>

      <Section title="Break Type Mixups">
        <p>Mix between different throw breaks to keep opponents guessing:</p>

        <Flowchart
          title="Throw Break Mixup"
          startNode="You're at +3 to +5"
          branches={[
            { label: 'Giant Swing (1 break)', action: '40-45 damage, homing in Heat' },
            { label: 'Tombstone (1+2 break)', action: '40-45 damage, floor breaks' },
            { label: 'Shining Wizard (1+2 break)', action: '40-45 damage, wall breaks' },
            { label: 'Generic 1+3 (1 or 2 break)', action: '35 damage, quick' },
          ]}
        />

        <KeyConcept title="The Break Mixup" icon="🎯">
          <p>Even if they know a throw is coming, they have to guess:</p>
          <ul>
            <li><strong>1 break</strong> — Giant Swing</li>
            <li><strong>1+2 break</strong> — Tombstone, Shining Wizard, Hades Drop</li>
            <li><strong>1 or 2 break</strong> — Generic throws</li>
          </ul>
          <p>If they guess wrong, they take 35-45 damage. If they guess right, they escape... but you can punish their break attempt with a mid!</p>
        </KeyConcept>
      </Section>

      <Section title="Heat Makes Throws Homing!">
        <p>In Heat, several of your throws gain <span className="highlight-secondary">homing properties</span>:</p>

        <KeyConcept title="Homing Throws in Heat" icon="🔥">
          <ul>
            <li><strong>Giant Swing</strong> — Homing in Heat</li>
            <li><strong>Shining Wizard</strong> — Homing in Heat</li>
            <li><strong>Hades Drop</strong> — Homing in Heat</li>
          </ul>
          <p>
            This is HUGE. In Heat, opponents can't sidestep your throws — they must duck or break. 
            This is when Armor King becomes truly scary!
          </p>
        </KeyConcept>
      </Section>

      <Section title="Wall Throw Situations">
        <SituationCard title="Opponent's Back to Wall">
          <ul>
            <li><strong>Giant Swing</strong> — Opponent hits wall, extra damage, unbreakable!</li>
            <li><strong>Shining Wizard</strong> — Wall breaks</li>
            <li><strong>Hades Drop</strong> — Wall and balcony breaks</li>
          </ul>
        </SituationCard>

        <TipBox title="Wall Giant Swing is Unbreakable!">
          <p>
            When your opponent's back is to the wall, Giant Swing becomes <strong>unbreakable</strong>! 
            This is 40+ free damage. Always look for wall GS opportunities.
          </p>
        </TipBox>
      </Section>

      <Section title="The Conditioning Game">
        <p>Throw mixups work best when you've conditioned your opponent:</p>

        <Flowchart
          title="Conditioning Flow"
          startNode="Start with mids"
          branches={[
            { label: 'They block → throw', action: 'They eat throw damage' },
            { label: 'They duck → mid hits', action: 'CH launch or damage' },
            { label: 'They step → homing', action: 'b+3+4 or ub+1 catches them' },
            { label: 'They press → throw beats', action: 'Throw startup beats their button' },
          ]}
        />

        <KeyConcept title="The Dance" icon="💃">
          <p>It's a constant back-and-forth:</p>
          <ul>
            <li>Start with mids → They duck → Your mids CH launch</li>
            <li>After they respect mids → Throw → They eat throw</li>
            <li>After they duck throws → Mid → CH launch again</li>
            <li>Repeat until they don't know what to do!</li>
          </ul>
        </KeyConcept>
      </Section>

      <PracticeBox
        title="Throw Mixup Practice — Situational"
        setup="Set dummy to Stand and Guard All. We'll practice plus frame into throw sequences."
        tasks={[
          { id: 'ch11-ub1gs', text: 'Do ub+1 (blocked) → Giant Swing', detail: '+5 on block → throw should connect', type: 'counter', target: 10 },
          { id: 'ch11-ub1tomb', text: 'Do ub+1 (blocked) → Tombstone', detail: 'Same setup, different throw break', type: 'counter', target: 10 },
          { id: 'ch11-cd1throw', text: 'Do CD+1 (blocked) → Giant Swing', detail: 'Another +5 setup', type: 'counter', target: 10 },
          { id: 'ch11-b12fgs', text: 'Do b+1,2~F → BAD 1+3 (Giant Swing)', detail: 'From Bad Jaguar stance', type: 'counter', target: 10 },
          { id: 'ch11-wallgs', text: 'Put dummy at wall → Giant Swing (see wall damage)', detail: 'Notice the extra damage from wall hit', type: 'counter', target: 5 },
        ]}
      />

      <Quiz
        question="You land ub+1 on block (+5). Your opponent has been breaking your Giant Swings (1 break). What should you do?"
        options={[
          { text: 'Keep doing Giant Swing — they might mess up', isCorrect: false },
          { text: 'Switch to Tombstone (1+2 break) — different break', isCorrect: true },
          { text: 'Just do mids instead — forget throws', isCorrect: false },
          { text: 'Backdash and reset', isCorrect: false },
        ]}
        correctFeedback="Correct! If they're breaking 1, switch to Tombstone which requires 1+2 to break. Mix between 1 breaks and 1+2 breaks to keep them guessing!"
        incorrectFeedback="Not quite. If they're consistently breaking 1, Giant Swing won't work. Switch to Tombstone (1+2 break) to make them guess a different break!"
      />
    </Chapter>
  )
}
