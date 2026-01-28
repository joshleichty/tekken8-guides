import { Chapter, Section } from '../../../components/guide'
import { ComboCard, Collapsible, PracticeBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter17({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={17}
      title="Combos"
      intro="Let's learn the essential combos for Armor King. We'll cover basic, optimal, and wall combos."
      onPrevious={() => goToChapter(16)}
      onNext={() => goToChapter(18)}
      nextLabel="Continue to Game Plan"
    >
      <Section title="Basic Combos (Start Here)">
        <ComboCard
          title="Dark Upper (CD+2) — Staple Combo"
          notation="CD+2 → df+3 → f+3,2~df → ws1 → f+3,2,1 T! → f+1+2~F → BAD 2+4"
          damage="~75 damage"
          notes={[
            'Your bread and butter launcher combo',
            'f+3,2~df is f+3,2 then input df to crouch dash',
            'End with BAD 2+4 for oki setup',
          ]}
        />

        <ComboCard
          title="uf+4 (Hopkick) — Basic Launch"
          notation="uf+4 → CD+2 → f+3,2~df → ws1 → f+3,2,1 T! → f+1+2~F → BAD 2+4"
          damage="~70 damage"
        />

        <ComboCard
          title="ws+1 — Crouching Launch"
          notation="ws+1 → (dash) d+3+4,1 → f+3,2~df → ws1 → f+1+2~F → BAD 2+4"
          damage="~65 damage"
        />

        <ComboCard
          title="b+3 — Homing Tornado Launch"
          notation="b+3 T! → CD+2 → f+3,2~df → ws1 → f+3,2~df → ws1 → f,f,F+2+4"
          damage="~75 damage"
        />
      </Section>

      <Section title="Counter Hit Combos">
        <ComboCard
          title="CH ff+2 — Long Range CH"
          notation="CH ff+2 → (dash) d+3+4,1 → f+3,2,1 T! → f+1+2~F → BAD 2+4"
          damage="~70 damage"
        />

        <ComboCard
          title="CH ws+2 — True Dark Smash"
          notation="CH ws+2 → f+3,2~df → ws1 → f+3,2,1 T! → f+1+2~F → BAD 2+4"
          damage="~70 damage"
          notes={[
            'True Dark Smash triggers automatically on CH',
            'Same combo works for CH b+1+3,2',
          ]}
        />

        <ComboCard
          title="CH df+3 — Knee Launch"
          notation="CH df+3 → f+3,2~df → ws1 → f+3,2,1 T! → f+1+2~F → BAD 2+4"
          damage="~72 damage"
        />
      </Section>

      <Section title="Wall Combos">
        <ComboCard
          title="Basic Wall Combo"
          notation="(wall splat) → 1+2,2 → f+1+4"
          damage="~30 additional"
          notes={[
            'Simple and reliable',
            '1+2,2 picks them up, shoulder finishes',
          ]}
        />

        <ComboCard
          title="Delayed Wall Combo"
          notation="(wall splat) → 3,4,1 (delay last hit) → d+2,4,3"
          damage="~35 additional"
        />

        <ComboCard
          title="Wall Combo with Tornado"
          notation="(wall splat) → df+1,2 T! → 3,4,1 (delay)"
          damage="~40 additional"
        />
      </Section>

      <Collapsible title="Combo Ender Options" icon="📖" defaultOpen>
        <p><strong>For Damage:</strong></p>
        <ul>
          <li>(dash) uf+1 — Solid damage ender</li>
          <li>f+1+2~F → BAD 2+4 — Oki setup</li>
        </ul>
        <p><strong>For Wall Carry:</strong></p>
        <ul>
          <li>f,f,F+3,4 — Running kicks</li>
          <li>db+2,3 — Mid distance carry</li>
          <li>b+4,4 — Alternative carry</li>
        </ul>
        <p><strong>For Floor/Wall Break:</strong></p>
        <ul>
          <li>air f,f,F+2+4 — Floor break</li>
          <li>f+1+4 — Wall break</li>
        </ul>
      </Collapsible>

      <PracticeBox
        title="Combo Practice"
        setup="Set dummy to Stand and No Guard. Practice each combo until it becomes muscle memory."
        tasks={[
          { id: 'ch17-basic', text: 'Land the Dark Upper staple combo', detail: 'CD+2 → df+3 → f+3,2~df → ws1 → f+3,2,1 T! → f+1+2~F → BAD 2+4', type: 'counter', target: 10 },
          { id: 'ch17-hopkick', text: 'Land the uf+4 combo', detail: 'uf+4 → CD+2 → f+3,2~df → ws1 → f+3,2,1 T! → f+1+2~F → BAD 2+4', type: 'counter', target: 10 },
          { id: 'ch17-wall', text: 'Practice a wall combo after wallsplat', detail: '(splat) → 1+2,2 → f+1+4', type: 'counter', target: 10 },
          { id: 'ch17-ch', text: 'Land CH ws+2 combo (True Dark Smash)', detail: 'Set dummy to After Block → Jab, use frame trap setup', type: 'counter', target: 5 },
        ]}
      />
    </Chapter>
  )
}
