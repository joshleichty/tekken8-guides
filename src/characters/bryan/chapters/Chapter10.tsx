import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  ComboCard,
  TipBox,
  DrillMode,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Beginner Combos"
      intro="Bryan's combo damage is among the best in Tekken. These beginner combos prioritize consistency over maximum damage. Master these before moving to optimal routes."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Optimal Combos"
    >
      <Section title="Combo Philosophy">
        <p>
          Bryan's combos can get extremely complex, but <span className="highlight">dropped combos 
          do zero damage</span>. These beginner routes are designed to be:
        </p>
        <ul>
          <li><strong>Consistent</strong> — You'll land them 9/10 times</li>
          <li><strong>Decent damage</strong> — Not optimal, but enough to win</li>
          <li><strong>Wall carry</strong> — Gets opponent to the wall</li>
          <li><strong>Buildable</strong> — Can optimize later without relearning</li>
        </ul>

        <TipBox variant="tip" title="Damage vs Consistency">
          A 65-damage combo you land 100% of the time beats a 75-damage combo you drop 30% 
          of the time. <strong>Consistency first, optimization later.</strong>
        </TipBox>
      </Section>

      <Section title="Staple Combos">
        <SubSection title="Jet Upper (f,b+2) Combo">
          <ComboCard
            title="Jet Upper Starter"
            starter="f,b+2"
            route={['f+1+2', 'd+3+4,2', 'dash', 'b+3~f+2,1']}
            damage="~62"
            difficulty="beginner"
            notes="Your go-to whiff punish combo. f+1+2 is the easiest filler."
            wallCarry={true}
          />
          <TipBox variant="tip" title="Alternative">
            If f+1+2 feels awkward, you can do: f,b+2 → dash → d+3+4,2 → b+3~f+2,1
          </TipBox>
        </SubSection>

        <SubSection title="WS1 Combo">
          <ComboCard
            title="While Standing 1 Starter"
            starter="ws1"
            route={['d+3+4,2', 'dash', 'b+3~f+2,1']}
            damage="~55"
            difficulty="beginner"
            notes="Your crouching punish combo. Very consistent."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH f+3 Combo">
          <ComboCard
            title="Counter-Hit f+3 Starter"
            starter="CH f+3"
            route={['db+2', 'd+3+4,2', 'dash', 'b+3~f+2,1']}
            damage="~58"
            difficulty="beginner"
            notes="db+2 picks up the CH f+3 easily. Very lenient timing."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH b+1 Combo">
          <ComboCard
            title="Counter-Hit b+1 Starter"
            starter="CH b+1"
            route={['db+2', '1', 'b+3~f+2,4', 'dash', 'b+3~f+2,1']}
            damage="~65"
            difficulty="beginner"
            notes="b+1 CH gives lots of time. db+2 → 1 is very consistent."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH 3+4 Combo">
          <ComboCard
            title="Counter-Hit 3+4 Starter"
            starter="CH 3+4"
            route={['dash', 'db+2', '1', 'b+3~f+2,4', 'dash', 'b+3~f+2,1']}
            damage="~68"
            difficulty="beginner"
            notes="Requires a dash after 3+4. db+2 timing is lenient."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="Low Parry Combo">
          <ComboCard
            title="Low Parry"
            starter="Low Parry"
            route={['b+2,4', 'dash', '1', 'b+2,1~f+2,4']}
            damage="~45"
            difficulty="beginner"
            notes="Simple and consistent low parry conversion."
          />
        </SubSection>
      </Section>

      <Section title="Small Combos">
        <p>
          Not every hit leads to a full combo. Know these mini-combos:
        </p>

        <SubSection title="qcb+1 Hit">
          <ComboCard
            title="qcb+1 on Normal Hit"
            starter="qcb+1"
            route={['qcb+4']}
            damage="~44"
            difficulty="beginner"
            notes="qcb+4 is guaranteed after qcb+1 normal hit."
          />
          <ComboCard
            title="qcb+1 on Normal Hit (Alternative)"
            starter="qcb+1"
            route={['qcf+1+2']}
            damage="~50"
            difficulty="beginner"
            notes="qcf+1+2 is guaranteed and does more damage."
          />
        </SubSection>

        <SubSection title="qcb+3 CH">
          <ComboCard
            title="Hatchet Kick Counter-Hit"
            starter="CH qcb+3"
            route={['qcb+4']}
            damage="~45"
            difficulty="beginner"
            notes="Free damage on hatchet CH."
          />
        </SubSection>

        <SubSection title="qcb+2,4 Hit">
          <ComboCard
            title="qcb+2,4 on Hit"
            starter="qcb+2,4"
            route={['qcb+4']}
            damage="~59"
            difficulty="beginner"
            notes="Great whiff punish damage with guaranteed follow-up."
          />
        </SubSection>
      </Section>

      <Section title="Wall Combos">
        <SubSection title="Standard Wall">
          <ComboCard
            title="Basic Wall Combo"
            starter="Wall splat"
            route={['1+2,1', 'uf+2,2,2,3']}
            damage="~35 (wall)"
            difficulty="beginner"
            notes="Works off most wall splats. Very consistent."
          />
        </SubSection>

        <SubSection title="With Snake Eyes">
          <ComboCard
            title="Snake Eyes Wall Combo"
            starter="Wall splat (with SNE)"
            route={['1+2,1', 'SNE uf+2,2,2,2,2,3']}
            damage="~38 (wall)"
            difficulty="intermediate"
            notes="If you have Snake Eyes, the uf+2 string has extra hits."
          />
        </SubSection>
      </Section>

      <Section title="Combo Drill">
        <DrillMode
          title="Beginner Combo Mastery"
          objective="Land each combo 10 times without dropping"
          setup="Practice Mode, dummy standing"
          difficulty="beginner"
          estimatedTime="15 min"
          steps={[
            { instruction: 'Jet Upper (f,b+2) combo', targetReps: 10 },
            { instruction: 'WS1 combo', targetReps: 10 },
            { instruction: 'CH f+3 combo', targetReps: 10 },
            { instruction: 'CH b+1 combo', targetReps: 10 },
            { instruction: 'CH 3+4 combo', targetReps: 10 },
            { instruction: 'qcb+1 → qcb+4', targetReps: 10 },
            { instruction: 'Wall combo (1+2,1 → uf+2,2,2,3)', targetReps: 10 },
          ]}
        />

        <TipBox variant="warning" title="Don't Move On Until Consistent">
          You should be landing these combos <strong>at least 8/10 times</strong> before 
          moving to optimal combos. Dropping combos in matches is devastating for Bryan 
          because so much of his game relies on big damage payoffs.
        </TipBox>
      </Section>

      <Section title="Checkpoint">
        <SkillCheck
          title="Beginner Combo Readiness"
          subtitle="Confirm you can land these consistently"
          skills={[
            { id: 'jetup', skill: 'I can do Jet Upper combo 8/10 times', description: 'f,b+2 → f+1+2 → d+3+4,2 → b+3~f+2,1' },
            { id: 'ws1', skill: 'I can do WS1 combo 8/10 times', description: 'ws1 → d+3+4,2 → b+3~f+2,1' },
            { id: 'chf3', skill: 'I can do CH f+3 combo 8/10 times', description: 'db+2 pickup' },
            { id: 'qcb1', skill: 'I know qcb+1 followups', description: 'qcb+4 or qcf+1+2 guaranteed' },
            { id: 'wall', skill: 'I can do the wall combo', description: '1+2,1 → uf+2,2,2,3' },
          ]}
          requiredToPass={4}
        />
      </Section>
    </Chapter>
  )
}
