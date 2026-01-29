import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept,
  TipBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Optimal Combos"
      intro="Once you've mastered beginner combos, these optimal routes squeeze out maximum damage. They're harder but worth learning for competitive play."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Punishment Guide"
    >
      <Section title="When to Optimize">
        <p>
          Only learn these after you can land beginner combos <span className="highlight">consistently 
          (8/10+)</span>. Dropping optimal combos for 0 damage is worse than landing beginner combos 
          for 55 damage.
        </p>

        <TipBox variant="warning" title="Prerequisites">
          Master Chapter 10 combos first. These routes require confident GMH transitions and 
          precise timing. Don't skip ahead.
        </TipBox>
      </Section>

      <Section title="Optimal Staple Combos">
        <SubSection title="df+2 Optimal">
          <ComboCard
            title="df+2 Optimal"
            starter="df+2"
            route={['b+3,2 D', '2,1,uf+1+2', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~68"
            difficulty="intermediate"
            notes="Extra 2,1,uf+1+2 before Tornado adds damage. Tighter timing."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="ws1 Optimal">
          <ComboCard
            title="ws1 Optimal"
            starter="ws1"
            route={['u+1+2', '2', '2,1,uf+1+2', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~65"
            difficulty="intermediate"
            notes="Extra filler before Tornado. Requires fast pickup."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="d+1+2 Optimal">
          <ComboCard
            title="d+1+2 (Ground Hit)"
            starter="d+1+2"
            route={['f,f+2', 'b+1', 'b+3,2 D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~60"
            difficulty="intermediate"
            notes="d+1+2 launches high. f,f+2 picks up."
            wallCarry={true}
          />
        </SubSection>
      </Section>

      <Section title="Heat Burst Combos">
        <KeyConcept title="Heat Burst Extension" icon="🔥">
          <p>
            You can <strong>Heat Burst after (2),1,uf+1+2</strong> to extend combos. This 
            gives massive damage but uses your heat activation.
          </p>
        </KeyConcept>

        <SubSection title="df+2 with Heat Burst">
          <ComboCard
            title="df+2 → Heat Burst"
            starter="df+2"
            route={['b+3,2 D', '2,1,uf+1+2', 'GMH f+1 T!', '2,1,uf+1+2', 'Heat Burst', 'GMH f+1']}
            damage="~75"
            difficulty="advanced"
            notes="Heat Burst after the second 2,1,uf+1+2 extends into more damage."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="Heat Engager → Heat Dash">
          <ComboCard
            title="b+2 Heat Engager Combo"
            starter="Heat on b+2~F"
            route={['f+4', 'b+3,2', 'b+3,2', '2,1,uf+1+2', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~78"
            difficulty="advanced"
            notes="Heat dash after b+2 gives massive wall carry and damage."
            wallCarry={true}
          />
        </SubSection>
      </Section>

      <Section title="Wall Carry Routes">
        <KeyConcept title="Wall Carry Philosophy" icon="🧱">
          <p>
            Jack has <span className="highlight">excellent wall carry</span>. From mid-stage, 
            you can carry to the wall consistently. Near the wall, optimize for wall damage.
          </p>
        </KeyConcept>

        <SubSection title="Max Carry">
          <ComboCard
            title="df+2 Max Carry"
            starter="df+2"
            route={['b+3,2 D', '2,1,uf+1+2', 'GMH f+1 T!', 'dash', 'f,f+4']}
            damage="~62"
            difficulty="intermediate"
            notes="f,f+4 ender carries further. Use when far from wall."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="Wall Splat Combos">
          <ComboCard
            title="Near Wall Optimization"
            starter="df+2 (near wall)"
            route={['b+3,2 D', 'GMH f+1 T!', 'b+3,2 D', 'GMH f+2 (wall)']}
            damage="~70 (with wall)"
            difficulty="intermediate"
            notes="When near wall, end with GMH f+2 for wall splat into wall combo."
            wallCarry={false}
          />
        </SubSection>
      </Section>

      <Section title="Optimal Wall Combos">
        <SubSection title="Standard Wall">
          <ComboCard
            title="Optimal Wall Ender"
            starter="Wall splat"
            route={['b+3,2 D', 'GMH f+2']}
            damage="~38 (wall)"
            difficulty="beginner"
            notes="Same as beginner. This is already optimal for most splats."
            wallCarry={false}
          />
        </SubSection>

        <SubSection title="With Tailspin at Wall">
          <ComboCard
            title="Tailspin Wall Ender"
            starter="T! at wall"
            route={['df+1,1 T!', 'f+4', 'df+3+4']}
            damage="~42 (wall)"
            difficulty="intermediate"
            notes="If Tornado happens at wall, this maximizes damage."
            wallCarry={false}
          />
        </SubSection>

        <SubSection title="Floor/Wall Break">
          <ComboCard
            title="Floor Break Combo"
            starter="Launch → Floor Break"
            route={['...', 'df+3+4 (wall break)', 'f,f+1 (floor break)']}
            damage="Varies"
            difficulty="intermediate"
            notes="Use df+3+4 for wall break, f,f+1 for floor break."
            wallCarry={false}
          />
        </SubSection>
      </Section>

      <Section title="Situation-Specific Combos">
        <SubSection title="GMC 1 Combo (Charged Launcher)">
          <ComboCard
            title="GMC 1 (After Absorbing)"
            starter="GMC 1"
            route={['b+3,2 D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~65"
            difficulty="intermediate"
            notes="GMC 1 launches. Standard combo structure after."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="2,1,2 Combo (Mid Launcher)">
          <ComboCard
            title="2,1,2 (Mid Extension)"
            starter="2,1,2"
            route={['ws+2', 'b+3,2 D', 'f+3,D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~60"
            difficulty="intermediate"
            notes="2,1,2 launches. ws+2 picks up."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH df+1,2,1 Combo">
          <ComboCard
            title="CH df+1,2,1"
            starter="CH df+1,2,1"
            route={['df+1', 'b+3,2 D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~55"
            difficulty="intermediate"
            notes="The third hit launches on CH. df+1 picks up."
            wallCarry={true}
          />
        </SubSection>
      </Section>

      <Section title="Heat Smash After Combos">
        <KeyConcept title="Heat Smash Ender" icon="💥">
          <p>
            In heat, if you have meter, consider ending combos with <strong>Heat Smash</strong> 
            for extra damage. Jack's Heat Smash is i10 and deals 50 damage.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="When to Heat Smash">
          Heat Smash is best used:
          <br />• To kill (secure the round)
          <br />• After GMC 2 guard break (guaranteed)
          <br />• When you have excess heat time
          <br /><br />
          Don't waste heat on random Heat Smashes — the GMC buffs are valuable.
        </TipBox>
      </Section>

      <Section title="Chapter Summary">
        <p>Optimal combo principles:</p>
        <ul>
          <li><strong>Add filler before Tornado</strong> — 2,1,uf+1+2 before GMH f+1 T!</li>
          <li><strong>Heat Burst extends</strong> — Use after 2,1,uf+1+2 for more damage</li>
          <li><strong>Wall carry</strong> — End with f,f+4 when far from wall</li>
          <li><strong>Near wall</strong> — End with GMH f+2 for wall splat</li>
          <li><strong>Heat Smash</strong> — Use to kill or after guard break</li>
        </ul>
        <p>
          Next chapter covers punishment — how to convert blocked moves into damage.
        </p>
      </Section>
    </Chapter>
  )
}
