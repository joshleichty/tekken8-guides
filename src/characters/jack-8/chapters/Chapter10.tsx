import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept,
  TipBox,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Beginner Combos"
      intro="Jack's combos use GMH transitions for optimal damage. These beginner routes prioritize consistency over maximum damage. Master these before moving to optimal routes."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Optimal Combos"
    >
      <Section title="Combo Philosophy">
        <p>
          Jack's combos involve <span className="highlight">Gamma Howl transitions</span> for 
          Tornado and damage. This can be tricky at first. These beginner routes are designed to be:
        </p>
        <ul>
          <li><strong>Consistent</strong> — Land them 9/10 times</li>
          <li><strong>Decent damage</strong> — Not optimal, but enough to win</li>
          <li><strong>Good wall carry</strong> — Gets opponent to the wall</li>
          <li><strong>Buildable</strong> — Can optimize later without relearning</li>
        </ul>

        <TipBox variant="tip" title="Consistency Over Optimization">
          A 60-damage combo you land 100% beats a 75-damage combo you drop 30% of the time. 
          <strong>Consistency first, optimization later.</strong>
        </TipBox>
      </Section>

      <Section title="Understanding Jack's Combo Structure">
        <KeyConcept title="Jack Combo Flow" icon="🔄">
          <ol>
            <li><strong>Launcher</strong> — df+2, ws1, ss1, etc.</li>
            <li><strong>Filler</strong> — b+3,2 D → GMH f+1 for Tornado</li>
            <li><strong>After Tornado</strong> — 2,1,uf+1+2 → GMH f+1</li>
            <li><strong>Ender</strong> — Usually f,f+4 or another GMH f+1</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="The D Input">
          Many combos use "D" (hold down) to transition to GMH. This becomes muscle memory, 
          but takes practice. Don't rush — get the timing right.
        </TipBox>
      </Section>

      <Section title="Staple Combos">
        <SubSection title="df+2 Combo (Main Launcher)">
          <ComboCard
            title="df+2 Starter (Beginner)"
            starter="df+2"
            route={['b+3,2 D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~60"
            difficulty="beginner"
            notes="Your main combo. b+3,2 D transitions to GMH, then GMH f+1 for Tornado."
            wallCarry={true}
          />

          <ComboCard
            title="df+2 Starter (Very Easy)"
            starter="df+2"
            route={['f,f+2', 'b+1', 'b+3,2 D', 'GMH f+1']}
            damage="~52"
            difficulty="beginner"
            notes="Easier version if GMH transitions are tough. Less damage but very consistent."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="ws1 Combo (Crouch Punish)">
          <ComboCard
            title="ws1 Starter"
            starter="ws1"
            route={['u+1+2', 'b+3,2 D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~58"
            difficulty="beginner"
            notes="Your WS launcher combo. u+1+2 picks up after ws1."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="ss1 Combo (Sidestep Launcher)">
          <ComboCard
            title="ss1 Starter"
            starter="ss1"
            route={['b+3,2 D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~62"
            difficulty="beginner"
            notes="Same structure as df+2. ss1 is +6 on block and launches."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="1+2 Combo (Homing Tornado)">
          <ComboCard
            title="1+2 Starter"
            starter="1+2 (Tornado hit)"
            route={['f,f+2', 'b+1', 'b+3,2 D', 'GMH f+1']}
            damage="~50"
            difficulty="beginner"
            notes="1+2 has Tornado property. Follow with standard pickup."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="Low Parry Combo">
          <ComboCard
            title="Low Parry"
            starter="Low Parry"
            route={['df+1', 'b+3,2 D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~48"
            difficulty="beginner"
            notes="df+1 picks up after low parry. Standard structure after."
          />
        </SubSection>
      </Section>

      <Section title="Counter-Hit Combos">
        <SubSection title="CH 4 Combo">
          <ComboCard
            title="CH 4 (Balcony Break)"
            starter="CH 4"
            route={['b+3,2 D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~58"
            difficulty="beginner"
            notes="Standing 4 on counter-hit launches. Same structure."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH f+2 Combo">
          <ComboCard
            title="CH f+2 (Panic Button)"
            starter="CH f+2"
            route={['f,f+4']}
            damage="~50"
            difficulty="beginner"
            notes="f,f+4 is guaranteed after CH f+2. Simple and effective."
          />
        </SubSection>

        <SubSection title="CH f,f+3 Combo">
          <ComboCard
            title="CH f,f+3"
            starter="CH f,f+3"
            route={['b+3,2 D', 'GMH f+1 T!', '2,1,uf+1+2', 'GMH f+1']}
            damage="~55"
            difficulty="beginner"
            notes="Running 3 on CH gives combo. Standard structure."
            wallCarry={true}
          />
        </SubSection>
      </Section>

      <Section title="Small Combos (Guaranteed Follow-ups)">
        <SubSection title="f+4,1 CH">
          <ComboCard
            title="CH f+4,1 (Jackhammer)"
            starter="CH f+4,1"
            route={['db+1,2']}
            damage="~46"
            difficulty="beginner"
            notes="db+1,2 is guaranteed after CH Jackhammer."
          />
        </SubSection>

        <SubSection title="ss2 Hit">
          <ComboCard
            title="ss2 on Hit"
            starter="ss2"
            route={['f,f+4']}
            damage="~52"
            difficulty="beginner"
            notes="f,f+4 (Big Boot) is guaranteed after ss2 connects."
          />
        </SubSection>

        <SubSection title="GMC 2 Guard Break">
          <ComboCard
            title="GMC 2 Guard Break"
            starter="GMC 2 (blocked)"
            route={['2,3']}
            damage="~19 (guard break damage)"
            difficulty="beginner"
            notes="2,3 is guaranteed after GMC 2 guard break. In Heat, use Heat Smash instead."
          />
        </SubSection>
      </Section>

      <Section title="Wall Combos">
        <SubSection title="Standard Wall">
          <ComboCard
            title="Basic Wall Combo"
            starter="Wall splat"
            route={['b+3,2 D', 'GMH f+2']}
            damage="~35 (wall)"
            difficulty="beginner"
            notes="Standard wall combo. b+3,2 D → GMH f+2 is consistent."
            wallCarry={false}
          />
        </SubSection>

        <SubSection title="After Tornado at Wall">
          <ComboCard
            title="Tornado at Wall"
            starter="T! near wall"
            route={['f,f+4 T!', 'b+3,2 D', 'GMH f+2']}
            damage="~40 (wall)"
            difficulty="beginner"
            notes="If Tornado happens near wall, this ender maximizes damage."
            wallCarry={false}
          />
        </SubSection>
      </Section>

      <Section title="Combo Practice Tips">
        <KeyConcept title="Practice Strategy" icon="🎯">
          <ol>
            <li><strong>Start with the ender</strong> — Practice b+3,2 D → GMH f+1 until automatic</li>
            <li><strong>Add the pickup</strong> — Practice 2,1,uf+1+2 → GMH f+1</li>
            <li><strong>Combine them</strong> — Full combo from starter to ender</li>
            <li><strong>Practice wall carry</strong> — Combo near wall for splat</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The GMH Transition">
          The hardest part is <strong>b+3,2 D → GMH f+1</strong>. Practice this sequence 
          100 times on its own before doing full combos. It should feel automatic.
        </TipBox>
      </Section>

      <Section title="Checkpoint">
        <SkillCheck
          title="Beginner Combo Readiness"
          subtitle="Confirm you can land these consistently"
          skills={[
            { id: 'df2', skill: 'I can do df+2 combo 8/10 times', description: 'Main launcher combo' },
            { id: 'ws1', skill: 'I can do ws1 combo 8/10 times', description: 'WS launcher combo' },
            { id: 'ch-f2', skill: 'I know CH f+2 → f,f+4', description: 'Panic button follow-up' },
            { id: 'wall', skill: 'I can do the wall combo', description: 'b+3,2 D → GMH f+2' },
            { id: 'gmh', skill: 'I can do GMH transitions smoothly', description: 'Hold D timing' },
          ]}
          requiredToPass={4}
        />
      </Section>

      <Section title="Chapter Summary">
        <p>Beginner combo essentials:</p>
        <ul>
          <li><strong>Main structure:</strong> Launcher → b+3,2 D → GMH f+1 T! → 2,1,uf+1+2 → GMH f+1</li>
          <li><strong>Wall ender:</strong> b+3,2 D → GMH f+2</li>
          <li><strong>CH f+2:</strong> Just f,f+4</li>
          <li><strong>Small combos:</strong> Know guaranteed follow-ups</li>
        </ul>
        <p>
          Next chapter covers optimal combos with heat burst and advanced routes.
        </p>
      </Section>
    </Chapter>
  )
}
