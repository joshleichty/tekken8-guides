import { Chapter, Section, SubSection } from '../../../components/guide'
import { ComboCard, TipBox, PracticeBox, KeyConcept, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Damage"
      intro="Paul doesn't do flashy 20-hit combos. He does efficient, devastating combos that carry to the wall and end rounds. This chapter teaches you the combos you need — easy versions and optimal versions — so you never drop a launch."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Learn Wall Game"
    >
      <Section title="Combo Philosophy">
        <KeyConcept title="Easy > Optimal" icon="🎯">
          <p>
            Paul has two versions of most combos: an easy version that's trivially consistent and an optimal version
            that requires tight timing. The difference is usually 3-5 damage points. <strong>Always take the easy
            combo over a dropped optimal combo.</strong>
          </p>
          <p>
            A dropped combo turns your launcher — your biggest moment — into nothing. A completed easy combo turns it into
            60-80 damage plus wall carry. The math is obvious. Learn the easy versions first, then grind the optimal
            ones when you want that extra edge.
          </p>
        </KeyConcept>
      </Section>

      <Section title="From df+2 (Generic Launcher)">
        <p>
          df+2 is your most common combo starter. Safe on block, built-in evasion, full combo on hit.
          Here are your routes:
        </p>

        <ComboCard
          title="df+2 Easy BnB"
          starter="df+2"
          route={['4', 'df+4', '3,2~b', 'qcb+1+2 T!', 'DPD df+1', 'f,f,F+2']}
          damage="~72"
          difficulty="beginner"
          wallCarry
          notes={[
            'This is your go-to combo. Extremely consistent, great wall carry.',
            'The DPD df+1 is a strong aerial tailspin that sets up the ender.',
            'f,f,F+2 at the end catches them and sends them flying toward the wall.',
          ]}
        />

        <ComboCard
          title="df+2 Optimal BnB"
          starter="df+2"
          route={['qcf+1', 'df+4', '3,2~b', 'qcb+1+2 T!', 'DPD df+1', 'f,f,F+2']}
          damage="~75"
          difficulty="advanced"
          wallCarry
          notes={[
            'Only 3 more damage than the easy version. The qcf+1 timing is very tight.',
            'You CANNOT buffer the crouch dash after df+2. Wait for full recovery, then do qcf+1 as fast as possible.',
            'If you input too early: you get a standing jab. Too late: you whiff entirely.',
            'Grind this in practice, but use the easy version in matches until it\'s 100% consistent.',
          ]}
        />

        <TipBox title="The qcf+1 After df+2" variant="warning">
          The optimal combo uses qcf+1 after df+2. This is notoriously tricky because Tekken's generous input buffer
          does NOT apply to the crouch dash motion. You must wait until Paul fully recovers from df+2, then input
          qcf+1 as fast as humanly possible. The visual cue: wait until the opponent has fallen most of the way,
          then execute. Practice this in isolation before trying it in combos.
        </TipBox>
      </Section>

      <Section title="From Other Starters">
        <SubSection title="uf+4 / uf+3,4 (Hop Kick Launchers)">
          <ComboCard
            title="uf+4 / uf+3,4 Combo"
            starter="uf+4 or uf+3,4"
            route={['df+4', '3,2~b', 'qcb+1+2 T!', 'DPD df+1', 'f,f,F+2']}
            damage="~65-68"
            difficulty="beginner"
            wallCarry
            notes={['Same structure as the easy BnB but starts with the hop kick filler.']}
          />
        </SubSection>

        <SubSection title="Counter Hit b+3 (14f Crumple)">
          <ComboCard
            title="b+3 Crumple Combo"
            starter="b+3 (crumple)"
            route={['3', 'df+4', '3,2~b', 'qcb+1+2 T!', 'DPD df+1', 'f,f,F+2']}
            damage="~65"
            difficulty="beginner"
            wallCarry
            notes={[
              'b+3 is a 14-frame mid crumple launcher — your premium punishment tool.',
              'After the crumple, pick up with 3 and continue the standard route.',
              'This is why -14 moves are extra deadly against Paul.',
            ]}
          />
        </SubSection>

        <SubSection title="Counter Hit qcb+4 (Sway Crumple)">
          <ComboCard
            title="CH qcb+4 Combo"
            starter="CH qcb+4 (crumple)"
            route={['qcf+1', 'df+4', '3,2~b', 'qcb+1+2 T!', 'DPD df+1', 'f,f,F+2']}
            damage="~72"
            difficulty="intermediate"
            wallCarry
            notes={[
              'Counter hit qcb+4 from back sway crumples — the reward for Scholar Paul patience.',
              'The qcf+1 pickup is easier here than after df+2 because of the crumple timing.',
            ]}
          />
        </SubSection>

        <SubSection title="Counter Hit qcf+3 (Clean Hit)">
          <ComboCard
            title="CH qcf+3 → Demo Man"
            starter="CH qcf+3 (clean hit)"
            route={['d+4,2:1+2']}
            damage="~50+"
            difficulty="beginner"
            notes={[
              'Counter hit qcf+3 (clean hit) guarantees Demo Man.',
              'Simple but devastating. The counter hit gives a ground bounce into guaranteed Demo Man.',
              'This is why approaching with qcf+3 is so good — the counter hit reward is enormous.',
            ]}
          />
        </SubSection>

        <SubSection title="ws+2 (While Standing Launcher)">
          <ComboCard
            title="ws+2 Combo"
            starter="ws+2"
            notation="ws+2 → 3 → df+4 → 3,2~b → qcb+1+2 T! → DPD df+1 → f,f,F+2"
            damage="~67"
            difficulty="beginner"
            wallCarry
            notes={['Your combo after low parry or crouching launcher situations.']}
          />
        </SubSection>

        <SubSection title="qcf+1+2 (Power Low Launcher)">
          <ComboCard
            title="qcf+1+2 Combo"
            starter="qcf+1+2"
            route={['qcf+1', 'df+4', 'd+4,2:1+2']}
            damage="~55"
            difficulty="beginner"
            notes={[
              'qcf+1+2 uses Tornado, so combo is shorter than usual.',
              'Still very respectable damage for a low launcher.',
            ]}
          />
        </SubSection>
      </Section>

      <Section title="Low Parry Combo">
        <ComboCard
          title="Low Parry"
          starter="Low Parry (df)"
          route={['qcf+1', 'df+4', '3,2~b', 'qcb+1+2 T!', 'DPD df+1', 'qcf+2']}
          damage="~58"
          difficulty="intermediate"
          wallCarry
          notes={[
            'Low parry launches just like a normal launcher but with different height.',
            'qcf+1 picks up reliably after low parry.',
            'Finish with Death Fist for wall carry + clean hit damage.',
          ]}
        />
      </Section>

      <Section title="Heat Burst Combos">
        <KeyConcept title="Heat Burst Extends Combos" icon="🔥">
          <p>
            During a combo, you can activate Heat Burst after Tornado to extend your combo. After DPD df+1 (Tornado), 
            pop Heat Burst, then continue with qcf+2 for maximum damage. This is your big-damage route when you haven't 
            used Heat yet.
          </p>
        </KeyConcept>

        <ComboCard
          title="df+2 Heat Burst Extension"
          starter="df+2"
          route={['4', 'df+4', '3,2~b', 'qcb+1+2 T!', 'DPD df+1', 'Heat Burst', 'qcf+2~F', 'qcf+2']}
          damage="~85+"
          difficulty="intermediate"
          wallCarry
          notes={[
            'After Tornado → DPD df+1, activate Heat Burst to extend.',
            'Heat Dash after qcf+2 (press forward) into another qcf+2 for max damage.',
            'This is your "I have Heat, let me use it for max damage" route.',
          ]}
        />
      </Section>

      <Section title="Quick Reference">
        <Collapsible title="All Combo Routes At a Glance" icon="📋" defaultOpen>
          <ul>
            <li><strong>df+2 (easy):</strong> 4 → df+4 → 3,2~b → qcb+1+2 T! → DPD df+1 → f,f,F+2 (~72)</li>
            <li><strong>df+2 (optimal):</strong> qcf+1 → df+4 → 3,2~b → qcb+1+2 T! → DPD df+1 → f,f,F+2 (~75)</li>
            <li><strong>uf+4:</strong> df+4 → 3,2~b → qcb+1+2 T! → DPD df+1 → f,f,F+2 (~65)</li>
            <li><strong>b+3 crumple:</strong> 3 → df+4 → 3,2~b → qcb+1+2 T! → DPD df+1 → f,f,F+2 (~65)</li>
            <li><strong>CH qcb+4:</strong> qcf+1 → df+4 → 3,2~b → qcb+1+2 T! → DPD df+1 → f,f,F+2 (~72)</li>
            <li><strong>CH qcf+3 (clean):</strong> d+4,2:1+2 (~50+)</li>
            <li><strong>ws+2:</strong> 3 → df+4 → 3,2~b → qcb+1+2 T! → DPD df+1 → f,f,F+2 (~67)</li>
            <li><strong>Low Parry:</strong> qcf+1 → df+4 → 3,2~b → qcb+1+2 T! → DPD df+1 → qcf+2 (~58)</li>
            <li><strong>Heat extension:</strong> ...T! → DPD df+1 → Heat Burst → qcf+2~F → qcf+2 (~85+)</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Practice: Combo Consistency">
        <PracticeBox
          title="The Combo Grind"
          setup="Practice Mode. CPU Stand. Any walled stage. Reset position to center."
          tasks={[
            { id: 'easy-bnb', text: 'df+2 Easy BnB — land it 10 times in a row without dropping', type: 'counter', target: 10 },
            { id: 'b3-combo', text: 'b+3 crumple combo — land it 5 times. This is your 14f punish.', type: 'counter', target: 5 },
            { id: 'ch-qcb4', text: 'Record CPU pressing jab. Back sway, qcb+4 counter hit, full combo. 5 times.', type: 'counter', target: 5 },
            { id: 'heat-ext', text: 'df+2 Heat Burst extension. Full route with heat burst. 5 times.', type: 'counter', target: 5 },
            { id: 'optimal', text: 'OPTIONAL: df+2 Optimal BnB with qcf+1. Get the timing right. 5 times.', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
