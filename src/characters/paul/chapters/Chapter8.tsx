import { Chapter, Section, SubSection } from '../../../components/guide'
import { ComboCard, TipBox, PracticeBox, KeyConcept, DecisionGrid, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="The Wall"
      intro="Paul lives at the wall. Every combo carries there, every interaction there is devastating, and Heat + Wall is where rounds end. This chapter teaches how to get them to the wall, what to do once they're there, and how to maximize every wall interaction."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Learn Heat System"
    >
      <Section title="Why Paul Loves the Wall">
        <KeyConcept title="Paul's Wall Identity" icon="🧱">
          <p>
            Paul has the tools to carry opponents to the wall from absurd distances. His combos naturally push far. Death Fist
            in Heat travels almost the full screen. Demo Man wall splats at point blank. f,f+2:1 sends opponents flying.
            And once they're at the wall? The damage is some of the highest in the game.
          </p>
          <p>
            Your game plan every round: figure out where the wall is, put their back to it, and execute. Even your spacing
            should account for wall position — it's that important for Paul.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Getting Them to the Wall">
        <SubSection title="Wall Carry From Combos">
          <p>
            Your standard combo already has excellent wall carry. The key moves that carry furthest to the wall:
          </p>

          <DecisionGrid
            title="Wall Carry Enders"
            description="Choose your wall carry ender based on distance from the wall."
            rows={[
              {
                situation: 'Close to the wall already',
                response: 'qcf+1',
                reason: 'Puts them high on the wall for a full wall combo',
                risk: 'None — standard pick when near wall',
              },
              {
                situation: 'Mid distance from wall',
                response: '4,4,2:1',
                reason: 'Enormous wall carry. The just frame is relaxed — press 1 after the elbow connects.',
                risk: 'Just frame high can be ducked, but in combos this is irrelevant',
              },
              {
                situation: 'Far from wall',
                response: 'DPD df+2,1',
                reason: 'Maximum wall carry at 61 damage. Safe pushback even if blocked in non-combo situations.',
                risk: 'Requires Deep Dive entry — practice the transition',
              },
              {
                situation: 'Very far from wall',
                response: 'f,f,F+2',
                reason: 'Flings them the longest absolute distance. Your emergency wall carry.',
                risk: 'Less damage than other options but the carry is unmatched',
              },
            ]}
          />
        </SubSection>

        <SubSection title="Wall Splat Moves (Not From Combos)">
          <p>
            These moves wall splat when the opponent is already near the wall:
          </p>
          <ul>
            <li><strong>Death Fist (qcf+2):</strong> Wall splats from enormous range. In Heat, from half screen.</li>
            <li><strong>Demo Man (d+4,2:1+2):</strong> Wall splats on hit near walls. 50/50 into wall splat = death.</li>
            <li><strong>f,f+2:1:</strong> Wall splats with incredible carry distance.</li>
            <li><strong>b+1,2:</strong> Mid-mid string that wall splats. Tornado. Great in combos.</li>
            <li><strong>df+1,1,2:</strong> Third hit wall splats. Catches mashers near walls.</li>
            <li><strong>Throws:</strong> Multiple throws wall splat (see Throw chapter).</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Wall Combos">
        <p>
          Once your opponent is on the wall (wall splat state), you have several options depending on height and distance:
        </p>

        <SubSection title="Standard Wall Combo">
          <ComboCard
            title="Standard Wall Combo"
            notation="3,2 → d+1+2"
            damage="60 (wall combo only)"
            difficulty="beginner"
            notes={[
              'Your bread and butter wall combo. Works in most situations.',
              '3,2 hits them on the wall, d+1+2 (shoulder check) finishes.',
              'Consistent and reliable. Learn this first.',
            ]}
          />

          <ComboCard
            title="Wall Combo (Sway Version)"
            notation="3,2 → qcb+2"
            damage="~58 (wall combo only)"
            difficulty="beginner"
            notes={[
              'Slightly less damage but much easier timing than d+1+2.',
              'qcb+2 after 3,2 is more lenient on wall height.',
              'Use this if d+1+2 timing is giving you trouble.',
            ]}
          />
        </SubSection>

        <SubSection title="Maximum Damage Wall Combo">
          <ComboCard
            title="Death Fist Wall Ender"
            notation="3,2~b → sidestep → qcf+2"
            damage="~67 (wall combo only)"
            difficulty="advanced"
            notes={[
              'The most damage you can squeeze from a wall combo.',
              '3,2 into back sway cancel, then sidestep cancel, then Death Fist.',
              'The timing goes slow (3,2) then fast (sway → sidestep → Death Fist).',
              'Inconsistent against some characters and wall angles. Practice heavily.',
              'If you can\'t land it consistently, use 3,2 → d+1+2 instead.',
            ]}
          />
        </SubSection>

        <SubSection title="Jab Into Death Fist">
          <ComboCard
            title="Simple Wall Ender"
            notation="1 → qcf+2"
            damage="~55 (wall combo only)"
            difficulty="beginner"
            notes={[
              'When other options are too tight or distance is weird, jab into Death Fist works.',
              'Less damage but extremely reliable. Death Fist sits low to the ground so scaling is minimal.',
              'Good when they\'re high on the wall or when distance is awkward.',
            ]}
          />
        </SubSection>

        <SubSection title="With Tornado Available">
          <ComboCard
            title="Wall Combo with Tornado"
            notation="qcf+3+4 T! → 3,2 → d+1+2"
            damage="Varies"
            difficulty="intermediate"
            notes={[
              'If you haven\'t used Tornado yet, qcf+3+4 at the wall adds it.',
              'Puts them higher on the wall for better combo potential.',
              'Follow with standard 3,2 → d+1+2 or jab → Death Fist.',
            ]}
          />

          <ComboCard
            title="Tornado Wall (with b+1,2)"
            notation="b+1,2 T! → 1 → qcf+2"
            damage="Varies"
            difficulty="beginner"
            notes={[
              'b+1,2 gives Tornado and wall splats. Follow with jab → Death Fist.',
              'Very reliable and doesn\'t require height judgment.',
            ]}
          />
        </SubSection>
      </Section>

      <Section title="Wall Splat From Death Fist (Heat)">
        <p>
          In Heat, Death Fist sends opponents flying an absurd distance. Even from midscreen, a Heat Death Fist
          will often wall splat. When it does, the combo potential is enormous:
        </p>

        <ComboCard
          title="Heat Death Fist → Wall"
          starter="Heat qcf+2 (wall splat from range)"
          notation="(let them fall slightly) → qcf+1 → qcf+3+4 T! → d+1+2 → qcf+2"
          damage="100+"
          difficulty="advanced"
          notes={[
            'Heat Death Fist wall splats from nearly full screen.',
            'qcf+1 puts them high on the wall. qcf+3+4 Tornado them even higher.',
            'd+1+2 into Death Fist finishes. Over 100 damage from a single read.',
            'This is why Paul\'s Heat is the scariest in the game.',
          ]}
        />

        <TipBox title="100+ From Midscreen" variant="danger">
          Read that again: a single Heat Death Fist, from midscreen, near a wall, can lead to over 100 damage.
          That's more than half the health bar from one correct guess. This is the ultimate payoff of Paul's kill chain —
          Heat Engager → Heat mode → Death Fist → wall splat → round over.
        </TipBox>
      </Section>

      <Section title="Demo Man at the Wall">
        <ComboCard
          title="Demo Man Wall Splat Combo"
          starter="d+4,2:1+2 (near wall, wall splat)"
          notation="(wave dash) → b+1,2 T! → 1 → qcf+2"
          damage="~70"
          difficulty="intermediate"
          notes={[
            'Demo Man wall splats when close to the wall.',
            'Wave dash forward to close gap, then b+1,2 for Tornado.',
            'Finish with jab → Death Fist.',
            'At closer distances, use qcf+3+4 T! instead of b+1,2.',
          ]}
        />
      </Section>

      <Section title="Wall Carry Jab Trick">
        <TipBox title="Jab Extends Wall Carry" variant="tip">
          Adding a single jab (1) at the right point in a combo pushes the opponent slightly further toward the wall. 
          It seems silly, but Paul's jab in juggle state advances them just enough to reach walls that are barely
          out of range. In wall carry optimization, a well-placed jab can be the difference between hitting
          the wall and whiffing. After ~8 hits in a combo, the only reliable way to extend further is a single jab
          followed by while-running 2. This is Paul's hard limit for combo length.
        </TipBox>
      </Section>

      <Section title="Quick Reference: Wall Combos">
        <Collapsible title="Wall Combo Cheat Sheet" icon="📋" defaultOpen>
          <ul>
            <li><strong>Standard:</strong> 3,2 → d+1+2 (60 damage, easy)</li>
            <li><strong>Easy alt:</strong> 3,2 → qcb+2 (58 damage, easier timing)</li>
            <li><strong>Max damage:</strong> 3,2~b → sidestep → qcf+2 (67 damage, hard)</li>
            <li><strong>Simple:</strong> 1 → qcf+2 (55 damage, always works)</li>
            <li><strong>Raw Death Fist:</strong> qcf+2 (use when too far for 3,2)</li>
            <li><strong>With Tornado:</strong> qcf+3+4 T! → 3,2 → d+1+2</li>
            <li><strong>With b+1,2:</strong> b+1,2 T! → 1 → qcf+2</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Practice: Wall Mastery">
        <PracticeBox
          title="Wall Combo Consistency"
          setup="Practice Mode. Any walled stage. Position near the wall."
          tasks={[
            { id: 'wall-std', text: 'Wall splat → 3,2 → d+1+2. 10 times consistently.', type: 'counter', target: 10 },
            { id: 'wall-easy', text: 'Wall splat → 3,2 → qcb+2. 10 times consistently.', type: 'counter', target: 10 },
            { id: 'wall-jab', text: 'Wall splat → 1 → qcf+2. 5 times. Learn this for weird angles.', type: 'counter', target: 5 },
            { id: 'wall-carry', text: 'From midscreen, do the full BnB and observe where the wall carry reaches. Try all enders.', type: 'toggle' },
            { id: 'wall-df', text: 'ADVANCED: 3,2~b → sidestep → qcf+2. 5 times if you dare.', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Full Kill Chain Practice"
          setup="Practice Mode. CPU Guard All. Arena with walls. Start midscreen."
          tasks={[
            { id: 'chain-1', text: 'df+2 launch → full combo → wall carry → wall combo. Complete sequence 5 times.', type: 'counter', target: 5 },
            { id: 'chain-2', text: 'Demo Man near wall → wall splat → wall combo. 5 times.', type: 'counter', target: 5 },
            { id: 'chain-3', text: 'Heat Death Fist from midscreen → wall splat → wall combo. Feel the absurd carry.', type: 'counter', target: 3 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
