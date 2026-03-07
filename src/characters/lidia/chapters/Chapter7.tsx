import { Chapter, Section, SubSection } from '../../../components/guide'
import { ComboCard, TipBox, PracticeBox, KeyConcept, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Combos"
      intro="Lidia's combos involve quarter-circle forward (qcf) inputs and stance transitions that can feel overwhelming. This chapter breaks them into three tiers: start with beginner routes, then work your way up as your execution improves."
      hasPrevious
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="The Low Game"
    >
      <Section title="Standard Launchers">
        <SubSection title="From 3,2 (15-frame launcher)">
          <ComboCard
            title="3,2 — Beginner"
            starter="3,2"
            route={['3,2', 'f,f+2', 'HRS 2', 'df+4,2 T!', 'b+3,4', '1+2']}
            damage="~74"
            difficulty="beginner"
            notes="After 3,2, dash forward with f,f+2 to enter HRS. HRS 2 picks them up. df+4,2 is your tornado. The ender b+3,4,1+2 can be upgraded to b+3,4,qcf+1+2 for more damage."
          />

          <ComboCard
            title="3,2 — Intermediate"
            starter="3,2"
            route={['3,2', '(b+3+4~F) WLF 2', 'f,f+2', 'HRS 2', 'qcf+1+2,2~B T!', 'b+3,4', 'qcf+1+2']}
            damage="~83"
            difficulty="intermediate"
            wallCarry
            notes="Manually enter WLF (back 3+4 then forward) for WLF 2 before the f,f+2 link. The qcf+1+2,2 screw requires holding back (~B) to cancel stance. Much more wall carry than the beginner route."
          />

          <ComboCard
            title="3,2 — Advanced"
            starter="3,2"
            route={['3,2', '(b+3+4~F) WLF 2', 'f,f+2', 'HRS 2', 'db+2', 'qcf+1+2,2~B T!', 'b+3,4', 'qcf+1+2']}
            damage="~87"
            difficulty="advanced"
            wallCarry
            notes="Adds db+2 filler before the screw for maximum damage. Tight timing on the db+2 link."
          />
        </SubSection>

        <SubSection title="From uf+4 (15-frame hopkick)">
          <ComboCard
            title="Hopkick — Beginner"
            starter="uf+4"
            route={['uf+4', 'hold b', 'f+2', '2', 'b+3,4', '1+2']}
            damage="~63"
            difficulty="beginner"
            notes="Hold back after uf+4 to cancel CAT stance. f+2 picks them up. The 2 filler into b+3,4,1+2 ender. Upgrade to b+3,4,qcf+1+2 when ready."
          />

          <ComboCard
            title="Hopkick — Standard"
            starter="uf+4"
            route={['uf+4', 'hold b', 'f,f+2', 'HRS 2', 'qcf+2,2,1+2']}
            damage="~75"
            difficulty="intermediate"
            notes="Cancel CAT with back, then f,f+2 into HRS 2. The qcf+2,2,1+2 ender can be powered up with qcf,qcf+2,2,b,f,F+1+2 for extra damage."
          />
        </SubSection>

        <SubSection title="From ws2 (15-frame crouching launcher)">
          <ComboCard
            title="ws2 — Beginner"
            starter="ws2"
            route={['ws2', 'df+2', 'CAT 4', 'WLF 2', 'df+4,2 T!', 'b+3,4', '1+2']}
            damage="~71"
            difficulty="beginner"
            notes="After ws2, df+2 enters CAT. Press 4 (low into WLF), then WLF 2. df+4,2 tornado into ender."
          />

          <ComboCard
            title="ws2 — Standard"
            starter="ws2"
            route={['ws2', 'f,f+2', 'HRS 2', 'db+2', 'qcf+1+2,2~B T!', 'b+3,4', 'qcf+1+2']}
            damage="~82"
            difficulty="intermediate"
            wallCarry
            notes="Same structure as the 3,2 advanced route. f,f+2 into HRS 2, db+2 filler, qcf screw, b+3,4 ender."
          />
        </SubSection>
      </Section>

      <Section title="Counter-Hit and Special Launchers">
        <SubSection title="Counter-hit df+1,3">
          <ComboCard
            title="CH df+1,3"
            starter="CH df+1,3"
            route={['CH df+1,3', 'f,f+2', 'HRS 2', 'qcf+2,2,1+2']}
            damage="~72"
            difficulty="intermediate"
            notes="The second hit of df+1,3 launches on counter-hit. Confirm the counter-hit animation before committing."
          />
        </SubSection>

        <SubSection title="Counter-hit CAT 4">
          <ComboCard
            title="CH CAT 4"
            starter="CH CAT 4"
            route={['CH CAT 4', '(WLF) f,f+2', 'HRS 2', 'qcf+1+2,2~B T!', 'b+3,4', '1+2']}
            damage="~76"
            difficulty="intermediate"
            notes="CAT 4 on counter-hit launches. You're already in WLF — dash forward into f,f+2."
          />
        </SubSection>

        <SubSection title="Counter-hit HRS 1+2">
          <ComboCard
            title="CH HRS 1+2"
            starter="CH HRS 1+2"
            route={['CH HRS 1+2', 'df+4,2 T!', 'f,f+2', 'HRS 2', 'qcf+2,2,1+2']}
            damage="~78"
            difficulty="intermediate"
            notes="The low from HRS launches on counter-hit. Huge reward for a hard read."
          />
        </SubSection>

        <SubSection title="Low Parry">
          <ComboCard
            title="Low Parry"
            starter="Low parry"
            route={['Low parry', 'f,f,F+2', 'HRS 2', 'qcf+2,2,1+2']}
            damage="~60"
            difficulty="beginner"
            notes="After low parry, dash into f,f,F+2 (running version for extra damage). Standard follow-up."
          />
        </SubSection>
      </Section>

      <Section title="Wall Combos">
        <ComboCard
          title="Standard Wall Combo"
          starter="Wall splat"
          route={['(wall splat)', 'qcf+1+2,2~B', 'f+1+2,3', 'qcf+1+2']}
          damage="~55"
          notes="After any wall splat, qcf+1+2,2 (hold back to cancel stance), then Political Storm ender. Most reliable wall combo. If you struggle with qcf inputs, use df+4,2 into f+1+2,3,1+2 instead."
        />

        <ComboCard
          title="Wall Combo (Simplified)"
          starter="Wall splat"
          route={['(wall splat)', 'f+1+2,3', 'qcf+1+2']}
          damage="~42"
          difficulty="beginner"
          notes="Simpler wall combo. Less damage but no qcf input required before the ender."
        />

        <ComboCard
          title="With Tornado at Wall"
          starter="Tornado at wall"
          route={['(tornado at wall)', 'df+4,2 T!', 'qcf+2,2,1+2']}
          damage="~45"
          notes="If you get tornado near the wall, df+4,2 screws them, then qcf+2,2,1+2 for the ender."
        />

        <KeyConcept title="Wall Carry Options" icon="🧱">
          <p>After tornado in a combo, your wall carry options are:</p>
          <ul>
            <li><strong>b+3,4,1+2 / b+3,4,qcf+1+2</strong> — Long carry and good damage. Your primary ender.</li>
            <li><strong>qcf+2,2,1+2</strong> — Also good carry. Use whichever is more comfortable.</li>
            <li><strong>2,2</strong> — Short carry but wall splats close-up. Use for quick wall conversions.</li>
            <li><strong>1,2,3</strong> — Decent carry alternative if qcf inputs are difficult.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Burst in Combos">
        <p>
          If you have heat available, you can use heat burst (2+3) after your tornado screw to
          extend the combo for more wall carry and damage.
        </p>

        <ComboCard
          title="Heat Burst Extension"
          starter="Any launcher"
          route={['(launcher)', '...', 'qcf+1+2,2~B T!', 'Heat Burst', '1+2 (slight charge)', 'b+3,4', 'qcf+1+2']}
          damage="varies"
          notes="After the tornado, press 2+3 for heat burst. Then slightly charged 1+2 for wall carry, into your standard ender. The heat burst adds significant carry to reach the wall."
        />

        <Collapsible title="Wall Break and Floor Break">
          <p>
            <strong>Wall break:</strong> Use f,f+1+2 to break through walls for stage transitions.
          </p>
          <p>
            <strong>Floor break:</strong> Use uf+3 or WLF 4 to break floors. After floor break,
            you can continue with a standard combo.
          </p>
        </Collapsible>
      </Section>

      <Section title="Small Combos and Guaranteed Follow-ups">
        <p>
          Not every punish leads to a full combo. These mini-combos from guaranteed situations
          add up over a round.
        </p>

        <Collapsible title="Guaranteed Follow-ups">
          <ul>
            <li><strong>CH b+4:</strong> f,f+3 guaranteed (~51 damage). Or dash up d+1+2 for more damage with HAE stacks.</li>
            <li><strong>HRS 3 on hit:</strong> f+1+2,3 (Political Storm first hits) guaranteed for heat engage. Or just-frame f,f+2 for heat dash combo in heat.</li>
            <li><strong>WR+1 on hit:</strong> f,f+1+2 guaranteed.</li>
            <li><strong>CH d+2:</strong> FC.df+2 guaranteed (heat engager).</li>
            <li><strong>CAT 1 on CH:</strong> f,f+1+2 guaranteed (clean hit does more damage).</li>
            <li><strong>ws3 on hit:</strong> f,f+1+2 or d+2 guaranteed.</li>
            <li><strong>ws3+4 (HRS 3+4) on hit:</strong> WLF 2 guaranteed.</li>
            <li><strong>CH b+3,1 whiff:</strong> +14, Political Storm guaranteed.</li>
          </ul>
        </Collapsible>

        <TipBox variant="tip" title="The QCF Shortcut">
          For the qcf+1+2,2 screw and qcf+2,2,1+2 ender: the quarter-circle forward motion is
          d, df, f. In combos, you can buffer this during the previous move's animation. The more
          you practice, the more natural it becomes. If you're coming from 2D fighters, this motion
          is identical to a hadouken.
        </TipBox>

        <PracticeBox
          title="Combo Drill"
          setup="Practice Mode"
          tasks={[
            { id: 'easy-hk', text: 'Land the easy hopkick combo 10 times in a row', type: 'counter', target: 10 },
            { id: 'easy-32', text: 'Land the easy 3,2 combo 10 times in a row', type: 'counter', target: 10 },
            { id: 'int-32', text: 'Land the intermediate 3,2 combo (with WLF 2) 5 times in a row', type: 'counter', target: 5 },
            { id: 'wall-combo', text: 'Practice the standard wall combo 10 times', type: 'counter', target: 10 },
            { id: 'qcf-practice', text: 'Practice qcf motion in isolation until it feels natural', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
