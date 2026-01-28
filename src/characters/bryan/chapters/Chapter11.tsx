import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible,
  ExecutionBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Optimal Combos"
      intro="Ready to squeeze every point of damage? These are Bryan's high-damage routes. They require more execution but reward you with massive damage and wall carry."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Learn Punishment"
    >
      <Section title="When to Optimize">
        <p>
          Only use these combos when you can land them <span className="highlight">consistently 
          under pressure</span>. A dropped optimal combo is worse than a landed beginner combo.
        </p>

        <KeyConcept title="Optimization Checklist" icon="✅">
          <p>You're ready for optimal combos when:</p>
          <ul>
            <li>You land beginner combos 95%+ of the time</li>
            <li>You can do them while thinking about other things</li>
            <li>Execution isn't your bottleneck anymore</li>
            <li>You want to squeeze out more damage/carry</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Optimal Routes">
        <SubSection title="Jet Upper (f,b+2)">
          <ComboCard
            title="Optimal Jet Upper"
            starter="f,b+2"
            route={['dash', 'iws3,4', 'b+2,1~f+2,4', 'dash', 'b+3~f+2,1']}
            damage="~70"
            difficulty="advanced"
            notes="Requires instant While Standing 3,4. Much higher damage than beginner route."
            wallCarry={true}
          />

          <ExecutionBox title="Instant WS3,4 (iWS3,4)" icon="🎮">
            <p>The key to optimal combos is <strong>instant while standing</strong>:</p>
            <ol>
              <li>After the launcher, dash forward</li>
              <li>Input d,df quickly (crouch dash motion)</li>
              <li>As you rise, input 3,4</li>
            </ol>
            <p>
              The timing is tight — you need to be rising from crouch when you press 3,4. 
              Practice this until it's second nature.
            </p>
          </ExecutionBox>
        </SubSection>

        <SubSection title="WS1">
          <ComboCard
            title="Optimal WS1"
            starter="ws1"
            route={['iws3,4', 'b+2,1~f+2,4', 'dash', 'b+3~f+2,1']}
            damage="~65"
            difficulty="advanced"
            notes="Same iws3,4 route."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH qcb+1">
          <ComboCard
            title="Optimal CH qcb+1"
            starter="CH qcb+1"
            route={['dash', 'b+2,4', 'dash', '1', 'b+2,1~f+2,4']}
            damage="~75"
            difficulty="intermediate"
            notes="Huge damage off one of your most common moves."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH f+3">
          <ComboCard
            title="Optimal CH f+3"
            starter="CH f+3"
            route={['SSR', 'iws3,4', 'dash', '1', 'b+3~f+2,4', 'dash', 'b+3~f+2,1']}
            damage="~72"
            difficulty="advanced"
            notes="Requires sidestep right into iws3,4. Very difficult."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH b+1">
          <ComboCard
            title="Optimal CH b+1"
            starter="CH b+1"
            route={['b+2~f+4', 'b+2,1~f+2,4', 'dash', 'b+3~f+2,1']}
            damage="~78"
            difficulty="advanced"
            notes="Huge damage. b+2~f+4 is the key pickup."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH 3+4">
          <ComboCard
            title="Optimal CH 3+4"
            starter="CH 3+4"
            route={['dash', 'iws3,4', 'dash', '1', 'b+3~f+2,4', 'dash', 'b+3~f+2,1']}
            damage="~80"
            difficulty="advanced"
            notes="One of Bryan's highest damage combos."
            wallCarry={true}
          />
        </SubSection>
      </Section>

      <Section title="Heat Combo Extensions">
        <p>
          Using Heat Burst mid-combo gives unscaled damage. Pop heat after your Tornado 
          for extra damage.
        </p>

        <ComboCard
          title="Heat Extension Example"
          starter="f,b+2"
          route={['iws3,4', 'b+2,1~f+2,4 (Tornado)', 'Heat Burst', 'b+3~f+1+2', 'qcf+1+2']}
          damage="~85+"
          difficulty="advanced"
          notes="Pop heat after Tornado for unscaled qcf+1+2 damage."
          wallCarry={true}
        />

        <TipBox variant="tip" title="When to Use Heat">
          Don't save heat hoping for a better opportunity. If you land a big launcher, 
          <strong>pop heat and take the guaranteed damage</strong>. Bryan's heat isn't 
          great anyway — use it for combo extensions.
        </TipBox>
      </Section>

      <Section title="Combo Enders Reference">
        <Collapsible title="Situational Enders" icon="📖">
          <p><strong>Damage:</strong></p>
          <ul>
            <li>b+3~f+2,1 — Best carry and damage</li>
            <li>qcf+2,1 — Good damage and carry</li>
          </ul>
          <p><strong>Wall Break:</strong></p>
          <ul>
            <li>f,f+2 — Breaks walls</li>
            <li>qcf+1+2 — Breaks walls with damage</li>
          </ul>
          <p><strong>Floor Break:</strong></p>
          <ul>
            <li>b+1 — Good floor break</li>
            <li>qcf+2,2 — Alternative floor break</li>
          </ul>
          <p><strong>Oki/Setup:</strong></p>
          <ul>
            <li>d+3+4,2 — Sets up oki</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Combo Theory">
        <KeyConcept title="Bryan Combo Structure" icon="🔧">
          <p>Most Bryan combos follow this pattern:</p>
          <ol>
            <li><strong>Launcher</strong> — f,b+2, ws1, CH moves</li>
            <li><strong>Pickup</strong> — iws3,4, db+2, b+2,4</li>
            <li><strong>Filler</strong> — b+2,1~f+2,4 (gets Tornado)</li>
            <li><strong>Carry</strong> — b+3~f strings</li>
            <li><strong>Ender</strong> — b+3~f+2,1 for max carry</li>
          </ol>
        </KeyConcept>

        <p>
          Understanding this structure lets you <span className="highlight">improvise</span> when 
          you're in weird positions. The core pieces are interchangeable as long as you 
          follow the pattern.
        </p>
      </Section>

      <Section title="Common Execution Tips">
        <KeyConcept title="Execution Advice" icon="💡">
          <ul>
            <li><strong>iws3,4:</strong> Don't rush. The motion is d,df → 3,4 as you rise.</li>
            <li><strong>b+2,1~f:</strong> Hold forward immediately after 1 hits.</li>
            <li><strong>Dash timing:</strong> Micro-dash, don't run. f,f tap.</li>
            <li><strong>Wall splat:</strong> If near wall, skip some filler for earlier splat.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Practice Makes Perfect">
          These combos require hundreds of reps to become consistent. Don't expect to 
          land them immediately. Spend time in practice mode every session working on 
          execution.
        </TipBox>
      </Section>
    </Chapter>
  )
}
