import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  MatchScenario
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Movement & Spacing"
      intro="Jack's movement defies expectations. His backdash is fast, but his hitbox is huge. This chapter teaches you how to leverage his unique mobility to dominate neutral."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Pokes"
    >
      <Section title="The Contradiction">
        <p>
          Jack presents a strange contradiction: <span className="highlight">excellent linear 
          movement, terrible lateral movement</span>. Understanding this is key to playing him.
        </p>

        <KeyConcept title="Jack's Movement Profile" icon="📏">
          <ul>
            <li><strong>Backdash:</strong> Surprisingly fast — faster than some characters' KBD</li>
            <li><strong>Forward dash:</strong> Good distance coverage</li>
            <li><strong>Sidestep:</strong> Poor — his wide torso gets clipped constantly</li>
            <li><strong>Sidestep left/right:</strong> Both below average due to hitbox</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Trade-off">
          Jack compensates for poor sidestepping with <strong>superior range</strong>. 
          Where other characters need to sidestep into punishment, Jack can often just 
          backdash and hit them from further away.
        </TipBox>
      </Section>

      <Section title="Why Movement Matters">
        <p>
          Jack's tools are <span className="highlight">range-specific</span>. At the wrong 
          distance, even his best moves become liabilities. Movement gets you to the range 
          where your tools shine.
        </p>

        <KeyConcept title="Jack's Range Zones" icon="📍">
          <p><strong>Range 0 (Point Blank)</strong></p>
          <p>
            Dangerous for Jack. His i11 jab is slower than most characters' i10 options. 
            Use throws or try to create space.
          </p>

          <p style={{ marginTop: '16px' }}><strong>Range 1 (Close)</strong></p>
          <p>
            Jack functions here. db+1 shines, 2 keeps you plus, df+1 checks buttons. 
            This is your pressure range.
          </p>

          <p style={{ marginTop: '16px' }}><strong>Range 2 (Mid)</strong></p>
          <p>
            <span className="highlight">JACK'S KINGDOM.</span> Your pokes outrange theirs. 
            f+4,1 (Jackhammer) dominates. df+2 whiff punishes freely.
          </p>

          <p style={{ marginTop: '16px' }}><strong>Range 3 (Far)</strong></p>
          <p>
            Too far for most tools. Use running moves or let them approach. Don't chase.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Backdashing Fundamentals">
        <p>
          Jack's backdash is his primary movement tool. It's fast, covers good distance, 
          and creates the space where his tools excel.
        </p>

        <SubSection title="When to Backdash">
          <KeyConcept title="Backdash Situations" icon="⬅️">
            <ul>
              <li><strong>After blocking strings:</strong> Creates whiff opportunities</li>
              <li><strong>At round start:</strong> Immediately establish Range 2</li>
              <li><strong>When pressured:</strong> Reset to your preferred distance</li>
              <li><strong>After your poke is blocked:</strong> Safe reset to neutral</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <SubSection title="Backdash into Whiff Punish">
          <p>
            The real power of backdashing is <strong>creating whiff punishes</strong>. When you 
            backdash and they attack into nothing, df+2 launches them for a full combo.
          </p>

          <TipBox variant="tip" title="The Formula">
            <strong>Backdash → They whiff → df+2 → Full combo</strong>
            <br /><br />
            This turns every backdash into potential 60+ damage. Jack's long arms make 
            whiff punishment especially rewarding.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Dealing With Your Sidestep">
        <p>
          Let's be honest: <span className="highlight-secondary">Jack's sidestep is bad</span>. 
          His hitbox is so wide that moves clip him during sidesteps that other characters 
          evade cleanly.
        </p>

        <KeyConcept title="Sidestep Adjustments" icon="↔️">
          <ul>
            <li><strong>Don't rely on sidestepping</strong> — It's unreliable for Jack</li>
            <li><strong>Use range instead</strong> — Backdash to make moves whiff</li>
            <li><strong>Punish with reach</strong> — Your long arms compensate</li>
            <li><strong>Sidestep situationally</strong> — Against extremely linear moves only</li>
          </ul>
        </KeyConcept>

        <SubSection title="When Sidestepping Works">
          <p>
            Despite his hitbox, Jack can still sidestep <strong>extremely linear moves</strong>. 
            Things like Mishima hellsweeps or very narrow hitboxes. But don't make it your 
            primary defensive option.
          </p>
        </SubSection>

        <TipBox variant="warning" title="The Reality">
          Moves that other characters sidestep cleanly will often clip Jack. Accept this 
          and adjust your gameplan. <strong>Range control is your defense</strong>, not evasion.
        </TipBox>
      </Section>

      <Section title="Movement in Practice">
        <MatchScenario
          title="Round Start"
          situation="The round just started. You're at Range 1.5."
          context="Both characters neutral. Opponent might rush or throw a move."
          options={[
            {
              action: 'Backdash to Range 2',
              result: 'Creates space where your tools dominate. Optimal start.',
              isOptimal: true,
              followup: 'Throw f+4,1 (Jackhammer) or look for their approach'
            },
            {
              action: 'Jab (2) immediately',
              result: 'Works, establishes pressure, but you\'re not at optimal range.',
            },
            {
              action: 'Run in with running 1+2',
              result: 'Risky. You might get clipped. Not Jack\'s style.',
            },
          ]}
          keyTakeaway="At round start, backdash creates the spacing where Jack's exceptional range becomes dominant."
        />

        <MatchScenario
          title="After Blocking a String"
          situation="You just blocked their jab string. It's your turn."
          context="You're at Range 0-1. Close distance."
          options={[
            {
              action: 'Jab back with 2',
              result: 'Safe, establishes pressure. +1 on block.',
            },
            {
              action: 'Backdash → f+4,1',
              input: 'b,b → f+4,1',
              result: 'Creates space and threatens with your mid. +8 on hit.',
              isOptimal: true,
              followup: 'If they chase into your Jackhammer, counter-hit knockdown.'
            },
            {
              action: 'db+1 (low poke)',
              result: 'Good pressure option, but risky if they anticipate it.',
            },
          ]}
          keyTakeaway="Backdash after blocking resets to Jack's preferred range. You can then use your superior reach."
        />
      </Section>

      <Section title="Wall Awareness">
        <p>
          Jack <span className="highlight">loves putting opponents at the wall</span> — his 
          wall damage is devastating. But Jack himself hates having his back to the wall.
        </p>

        <SubSection title="Managing Wall Position">
          <KeyConcept title="Wall Positioning" icon="🧱">
            <ul>
              <li><strong>When near wall (opponent):</strong> Press harder — wall splats are huge</li>
              <li><strong>When near wall (you):</strong> Sidestep carefully, use armor options</li>
              <li><strong>Backdash creates wall distance:</strong> But don't back yourself into corners</li>
              <li><strong>Many moves push back:</strong> f+4,1, running 1+2 create space even on block</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <TipBox variant="warning" title="The Corner Trap">
          All that backdashing can trap YOU at the wall. Be aware of your position. 
          If you're getting close to the wall, <strong>sidestep or press forward</strong> 
          instead of continuing to retreat.
        </TipBox>
      </Section>

      <Section title="Advanced Movement Concepts">
        <SubSection title="Running Moves">
          <p>
            From Range 3, Jack has solid running options:
          </p>
          <ul>
            <li><strong>f,f,f+1+2 (Running Shoulder):</strong> +4 on block, great for approaching</li>
            <li><strong>f,f,f+2 (Running 2):</strong> +6 on block with +10 on hit guaranteeing i10</li>
          </ul>
        </SubSection>

        <SubSection title="Walk-up Pressure">
          <p>
            Sometimes just <strong>walking forward</strong> is stronger than running. 
            Walking keeps your guard up and lets you block reactions while closing distance. 
            Walk forward → 2 (jab) → db+1 (low) is a simple, effective approach.
          </p>
        </SubSection>
      </Section>

      <Section title="Chapter Summary">
        <p>Jack's movement is unique:</p>
        <ul>
          <li><strong>Excellent backdash</strong> — Fast, covers distance, creates whiff opportunities</li>
          <li><strong>Poor sidestep</strong> — Wide hitbox gets clipped; don't rely on it</li>
          <li><strong>Range 2 is home</strong> — Backdash to get there, stay there</li>
          <li><strong>Compensate with reach</strong> — Your arms cover what your sidestep can't</li>
          <li><strong>Wall awareness</strong> — Great at putting them there, bad being there yourself</li>
        </ul>
      </Section>
    </Chapter>
  )
}
