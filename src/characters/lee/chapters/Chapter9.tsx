import { Chapter, Section } from '../../../components/guide'
import { ComboCard, KeyConcept, TipBox, PracticeBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Combos"
      intro="Lee's combos are creative, stylish, and reward execution. Start with consistent routes, then upgrade as your hands improve."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Heat System"
    >
      <Section title="Combo Philosophy">
        <p>
          Lee has some of the most creative combo routes in Tekken. His b+2 loops carry to the wall
          from anywhere on screen. His just frame enders squeeze out extra damage. And his style
          while doing it is unmatched.
        </p>
        <p>
          But consistency matters more than style. A dropped combo does zero damage. So this chapter
          gives you <strong>beginner routes first</strong> — guaranteed, consistent, decent damage.
          Then intermediate and advanced routes for when you're ready to optimize.
        </p>

        <KeyConcept title="Route Priority" icon="🎯">
          <ul>
            <li><strong>Beginner:</strong> Consistent, easy execution, 50-60 damage. Use these in matches while learning.</li>
            <li><strong>Intermediate:</strong> b+2 loops for wall carry, 60-70 damage. Your standard once comfortable.</li>
            <li><strong>Advanced:</strong> Just frame enders, max damage optimization, 70+ damage. For when execution is second nature.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Standard Launchers">
        <p>
          These combos work off your most common launch situations: hopkick, df+2, and counter-hit b+4.
        </p>

        <h3>uf+4 / df+2 — Standing Launchers</h3>

        <ComboCard
          title="Beginner — Standing Launch"
          starter="uf+4 or df+2"
          notation="uf+4 → df+1 → df+1 → f+4,3 → f+3,3,3,3,3,4"
          damage="~58"
          difficulty="beginner"
          wallCarry={false}
          notes="Consistent route. Two df+1s for easy timing, Acid Storm ender for tornado."
        />

        <ComboCard
          title="Intermediate — Wall Carry"
          starter="uf+4 or df+2"
          notation="uf+4 → b+2,4,3~f → b+2,4,3~f → f+2,1 → f+4,3 → d+3"
          damage="~65"
          difficulty="intermediate"
          wallCarry={true}
          notes="b+2 loops carry massive distance. Practice the b+2,4,3~f dash cancel timing."
        />

        <ComboCard
          title="Advanced — Max Damage"
          starter="uf+4 or df+2"
          notation="uf+4 → b+2,4,3~f → b+2,4,3~f → f+2,1 → f+4:1 T! → Acid Storm"
          damage="~72"
          difficulty="advanced"
          wallCarry={true}
          notes="Just frame f+4:1 for tornado, into Acid Storm for max damage. Requires consistent just frame execution."
        />
      </Section>

      <Section title="Counter-Hit Launchers">
        <h3>CH b+4 — Keepout Launch</h3>
        <ComboCard
          title="Beginner — CH b+4"
          starter="CH b+4"
          notation="CH b+4 → HMS u+4 → b+2,4,3 → f+3,3,3,3,3,4"
          damage="~62"
          difficulty="beginner"
          notes="After CH b+4 crumple, HMS u+4 picks up into a standard combo."
        />

        <h3>CH 4,4(:4) — Magic 4 Launch</h3>
        <ComboCard
          title="Beginner — CH 4,4"
          starter="CH 4,4"
          notation="CH 4,4 → df+1 → f+4,3 → f+3,3,3,3,3,4"
          damage="~55"
          difficulty="beginner"
          notes="Simple route from CH magic 4 without the just frame."
        />

        <ComboCard
          title="Intermediate — CH 4,4:4"
          starter="CH 4,4:4"
          notation="CH 4,4:4 → dash → b+2,4,3~f → b+2,4,3~f → f+2,1 → f+4,3 → d+3"
          damage="~68"
          difficulty="intermediate"
          wallCarry={true}
          notes="Just frame version gives more combo potential. Dash after 4,4:4 for pickup."
        />

        <h3>CH 1+2 — Homing Launch</h3>
        <ComboCard
          title="CH 1+2"
          starter="CH 1+2"
          notation="CH 1+2 → df+1 → b+2,4,3~f → f+2,1 → f+4,3 → d+3"
          damage="~60"
          difficulty="intermediate"
          notes="Confirm from the CH animation — you'll see the launch before you need to act."
        />

        <h3>CH d+3 — High Crush Launch</h3>
        <ComboCard
          title="CH d+3"
          starter="CH d+3"
          notation="CH d+3 → ws+2,3 T! → dash → b+2,4,3~f → f+2,1 → d+3"
          damage="~58"
          difficulty="intermediate"
          notes="ws+2,3 provides the tornado. Tight timing on the pickup after tornado."
        />
      </Section>

      <Section title="Crouch Game Combos">
        <h3>Slide — Low Launcher</h3>
        <ComboCard
          title="Slide Combo"
          starter="FC df,d,DF+3 (Slide)"
          notation="Slide → ws+2,3 T! → dash → b+2,4,3~f → f+2,1 → d+3"
          damage="~55"
          difficulty="intermediate"
          notes="Slide launches low. ws+2,3 tornado into standard combo. The ws+2,3 must be fast after slide connects."
        />

        <h3>ws+2,3 — Mid Launcher</h3>
        <ComboCard
          title="ws+2,3 Combo"
          starter="ws+2,3"
          notation="ws+2,3 T! → dash → b+2,4,3~f → b+2,4,3~f → f+2,1 → d+3"
          damage="~62"
          difficulty="intermediate"
          wallCarry={true}
          notes="ws+2,3 is already a tornado, so combo straight into b+2 loops."
        />
      </Section>

      <Section title="Wall Combos">
        <p>
          When you splat the opponent at the wall, you get guaranteed damage. Lee has strong wall combos.
        </p>

        <ComboCard
          title="Basic Wall Combo"
          starter="Wall splat"
          notation="df+1 → f+4,3 → d+3"
          damage="~30"
          difficulty="beginner"
          notes="Simple and consistent. df+1 re-splats, f+4,3 for damage, d+3 ender."
        />

        <ComboCard
          title="Intermediate Wall Combo"
          starter="Wall splat"
          notation="b+2,4,3 → d+3"
          damage="~35"
          difficulty="intermediate"
          notes="b+2,4,3 tailspin at the wall. d+3 ender for oki."
        />

        <Collapsible title="Advanced Wall Options" icon="🧱">
          <ul>
            <li><strong>HMS u+4 → ub+3:</strong> After entering HMS at the wall, u+4 re-splats into ub+3 for high damage.</li>
            <li><strong>f+4:1 → wall combo:</strong> Just frame tornado at the wall extends combo potential.</li>
            <li><strong>Heat Smash at wall:</strong> H.2+3 after wall setup for huge damage — covered in Chapter 10.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Small Combos">
        <p>
          Not every hit leads to a full combo. These are guaranteed follow-ups from specific hits:
        </p>

        <ComboCard
          title="Acid Rain Follow-Up"
          starter="1,3:3:3 (Acid Rain hit)"
          notation="1,3:3:3 → dash → b+2,4,3~f → b+2,4,3~f → f+2,1 → d+3"
          damage="~55"
          difficulty="intermediate"
          notes="Acid Rain timestops on hit. You have time to dash and do a full combo."
        />

        <ComboCard
          title="b+4 Normal Hit"
          starter="b+4 (normal hit, crumple)"
          notation="b+4 → HMS u+4"
          damage="~40"
          difficulty="beginner"
          notes="On normal hit crumple, HMS u+4 is guaranteed. Quick and reliable."
        />

        <ComboCard
          title="HMS 4 CH"
          starter="CH HMS 4"
          notation="CH HMS 4 → instant tornado → full combo"
          damage="~65"
          difficulty="advanced"
          notes="HMS 4 instant tornadoes on CH. Full combo opportunity from a risky low."
        />
      </Section>

      <Section title="Drill: Combo Consistency">
        <PracticeBox
          title="Beginner Routes"
          setup="Practice each beginner combo 10 times. Move on when you can land them 8/10."
          tasks={[
            { id: 'uf4-basic', text: 'Land the beginner uf+4 combo 10 times', type: 'counter', target: 10 },
            { id: 'ch-b4-basic', text: 'Land the beginner CH b+4 combo 5 times', type: 'counter', target: 5 },
            { id: 'wall-basic', text: 'Land the basic wall combo 5 times', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Intermediate Upgrade"
          setup="Once beginner routes are consistent, practice b+2 loops for wall carry."
          tasks={[
            { id: 'b2-loop', text: 'Do b+2,4,3~f twice in a row (the loop) without dropping', type: 'counter', target: 5 },
            { id: 'full-carry', text: 'Land a full wall carry combo from mid-screen', type: 'counter', target: 3 },
            { id: 'ar-combo', text: 'Land Acid Rain into full combo 3 times', type: 'counter', target: 3 },
          ]}
        />

        <TipBox variant="tip" title="b+2 Loop Timing">
          The b+2,4,3~f loop is Lee's bread and butter for wall carry. The ~f at the end is a Mist Step
          cancel that lets you dash forward and repeat. The timing is: b+2,4,3 then immediately tap f to
          cancel into forward movement, then start the next b+2. Practice the cancel until it's muscle memory.
        </TipBox>
      </Section>
    </Chapter>
  )
}
