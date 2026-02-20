import { Chapter, Section } from '../../../components/guide'
import { ComboCard, KeyConcept, TipBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Combos"
      intro="Hwoarang's combos are unlike anyone else's. They flow through the same stances you've been learning — RFS, LFS, RFF. The combo routes feel like pressure sequences because they use the same transitions. If you've drilled the loops, you already have the muscle memory for half the combo."
      hasPrevious
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Heat"
    >
      <Section title="Combo Building Blocks">
        <p>
          Before learning specific routes, understand the pieces that build every Hwoarang combo.
          You'll see these same components reused across every launcher.
        </p>
        <ul>
          <li><strong>Screw/Filler:</strong> f+4 → RFS [3~4] is your primary screw setup. The f+4 puts you in RFS, then the just-frame 3~4 (blue spark) screws. If you can't hit the just frame, regular RFS 3~4 works but with less damage.</li>
          <li><strong>Carry:</strong> uf+3+4~F chains — this is the uf+3+4 transition cancelled into LFS with F, repeated for wall carry. Each rep moves the opponent further toward the wall.</li>
          <li><strong>Tornado:</strong> LFS uf+4 or RFS uf+4 gives you the Tornado bound. Use d+4,4 as an alternative Tornado starter when the angle is tricky.</li>
          <li><strong>Ender:</strong> uf+3,4,3 is the standard ender after Tornado for max damage. uf+3+4 chains are the alternative when you need more wall carry instead of raw damage.</li>
        </ul>

        <KeyConcept title="The Key Sequence" icon="🎯">
          <p>
            <strong>RFS [3~4] → uf+3+4~F → LFS uf+4 T!</strong> appears in nearly every combo.
            This is the core skill: from RFS, hit the just-frame 3~4 for the screw, then cancel
            uf+3+4 into LFS, and Tornado with LFS uf+4. Practice this sequence in isolation until
            it's automatic — it's the backbone of Hwoarang's combo game.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Standard Launchers">
        <ComboCard
          title="df+2 (Safe Launcher)"
          starter="df+2 (i15, -7)"
          route={['df+2', 'f+4', 'RFS [3~4]', 'uf+3+4~F', 'LFS uf+4 T!', 'uf+3,4,3']}
          damage="~65"
          difficulty="intermediate"
          wallCarry
          notes={[
            'Your most common combo — df+2 is safe so you use it frequently',
            'f+4 must come out quickly after the launch',
            '[3~4] is the just-frame blue spark version — regular 3~4 works but does less damage',
          ]}
        />

        <ComboCard
          title="b+3 (Tornado Launcher)"
          starter="b+3 (i16, Tornado)"
          route={['b+3 T!', '3+4', 'RFF f+3', 'LFS f+3', 'LFS 3,f+4']}
          damage="~60"
          difficulty="beginner"
          wallCarry
          notes={[
            'b+3 already gives Tornado, so no need for separate T! setup',
            'Easy route — 3+4 switches to RFF, then chain stance transitions into ender',
            'At the wall: b+3 T! → 3+4 → RFF f+3 → LFS f+3 → LFS 3,f+4 for wall splat',
          ]}
        />

        <ComboCard
          title="JFSR (Just Frame Skyrocket)"
          starter="f,n,df+4 (i16, -8)"
          route={['JFSR', '3+4', 'RFF [3~4]', 'f+4', 'RFS [3~4]', 'd+4,4 T!', 'uf+3,4,3']}
          damage="~72"
          difficulty="advanced"
          notes={[
            'Highest damage standard combo — requires JFSR execution',
            'Longer route than df+2 because JFSR gives more height',
            'Alternative: JFSR → 3+4 → RFF [3~4] → dash → 4,4,u+4,4 T! → uf+3,4,3',
          ]}
        />

        <ComboCard
          title="ws+2,3 (Crouching Launcher)"
          starter="ws+2,3 (i15, +3)"
          route={['ws+2,3', '(whiff LFS 1)', 'u+3', 'LFS uf+3+4~F', 'uf+3+4~F', 'uf+3+4']}
          damage="~58"
          difficulty="intermediate"
          notes={[
            'ws+2,3 transitions to LFS — the LFS 1 must intentionally whiff for spacing',
            'The whiffed LFS 1 realigns you for the u+3 pick-up',
            'Uses uf+3+4 chain carry instead of standard Tornado ender',
          ]}
        />

        <ComboCard
          title="u+3+4 (Hopkick)"
          starter="u+3+4"
          route={['u+3+4', 'db+4~F', 'RFS [3~4]', 'uf+3+4~F', 'LFS uf+4 T!', 'uf+3,4,3']}
          damage="~63"
          difficulty="intermediate"
          wallCarry
          notes={[
            'db+4~F transitions into RFS for the standard screw sequence',
            'Same core structure as the df+2 combo but different starter and filler',
          ]}
        />

        <ComboCard
          title="Low Parry"
          starter="Low Parry"
          route={['Low Parry', 'f+4', 'RFS [3~4]', 'uf+3+4~F', 'uf+3+4~F', 'uf+3+4']}
          damage="~50"
          difficulty="intermediate"
          notes={[
            'Same f+4 → RFS [3~4] start as df+2 combo',
            'Less height from low parry, so ender uses carry chain instead of uf+3,4,3',
            'Still solid damage for a parry — rewards you for reading lows',
          ]}
        />
      </Section>

      <Section title="Counter-Hit Combos">
        <p>
          Counter-hit launchers are how Hwoarang punishes mashers. These combos start from
          the CH tools you learned in Chapter 5.
        </p>

        <ComboCard
          title="CH b+4"
          starter="CH b+4 (i13)"
          route={['CH b+4', 'RFF [3~4]', 'uf+3+4~F', 'LFS uf+4 T!', 'uf+3,4,3']}
          damage="~62"
          difficulty="intermediate"
          notes={[
            'b+4 transitions to RFF on CH — RFF [3~4] starts the screw immediately',
            'Fast launcher at i13 — your best CH conversion from neutral',
          ]}
        />

        <ComboCard
          title="CH SS 4"
          starter="CH SS 4 (sidestep low)"
          route={['CH SS 4', '(varies by angle)']}
          damage="~55-60"
          difficulty="intermediate"
          notes={[
            'SS 4 launches on CH and transitions to RFF',
            'Route depends on angle — in most cases: pick up with db+4~F → standard screw sequence',
            'The sidestep often creates off-axis situations, so be ready to adapt the route',
          ]}
        />

        <ComboCard
          title="CH d+4,4"
          starter="CH d+4,4"
          route={['CH d+4,4', 'u+3', 'LFS 1', 'u+3', 'uf+3+4~F', 'uf+3+4~F', 'uf+3+4']}
          damage="~58"
          difficulty="intermediate"
          notes={[
            'The d+4,4 on CH gives a crumple that lets you pick up with u+3',
            'Uses the LFS 1 → u+3 loop for carry — the same stance transitions from your infinite loops',
          ]}
        />

        <ComboCard
          title="CH RFS df+4"
          starter="CH RFS df+4 (from stance)"
          route={['CH RFS df+4', '(standard screw sequence)']}
          damage="~60"
          difficulty="intermediate"
          notes={[
            'RFS df+4 launches on CH — your mid check from flamingo',
            'Pick up with f+4 → RFS [3~4] → standard Tornado route',
            'This is the reward for reading a masher during your loops',
          ]}
        />

        <Collapsible title="More CH Combos">
          <ul>
            <li><strong>CH SS 3,3:</strong> LFS 1 → uf+3+4~F → uf+3+4~F → LFS uf+4 T! → uf+3,4,3</li>
            <li><strong>CH RFF b+3:</strong> (sidestep left) db+4~F → RFS [3~4] → uf+3+4~F → LFS uf+4 T! → uf+3,4,3</li>
            <li><strong>Heat: CH RFS f+4,4:</strong> u+3 → LFS 1 → u+3 → uf+3+4~F → uf+3+4~F → uf+3+4</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Wall Combos">
        <p>
          When the opponent splats against the wall, you get guaranteed follow-up damage. Hwoarang's
          wall combos use his stance transitions to squeeze maximum damage from the splat.
        </p>

        <ComboCard
          title="Standard Wall Combo (No Tornado)"
          starter="Wall Splat"
          route={['SS 3,3', 'LFS 3,2']}
          damage="~30 (wall only)"
          difficulty="beginner"
          notes={[
            'Simple and consistent — SS 3,3 into the LFS ender',
            'Works after most wall splats',
          ]}
        />

        <ComboCard
          title="Standard Wall Combo (Alt)"
          starter="Wall Splat"
          route={['RFF f+3', 'LFS f+3', 'LFS 3,f+4']}
          damage="~32 (wall only)"
          difficulty="beginner"
          notes={[
            'Stance transition chain at the wall — feels like your pressure loops',
            'RFF f+3 into LFS, then LFS f+3, then finish with LFS 3,f+4',
          ]}
        />

        <ComboCard
          title="Wall Combo with Tornado"
          starter="Wall Splat (with Tornado available)"
          route={['f+4', 'RFS uf+4 T!', 'RFF [3~4]', 'b+3']}
          damage="~45 (wall only)"
          difficulty="intermediate"
          notes={[
            'Higher damage by using Tornado at the wall',
            'f+4 → RFS uf+4 gives the Tornado, then RFF [3~4] into b+3 for max wall damage',
          ]}
        />
      </Section>

      <Section title="Combo Enders">
        <KeyConcept title="Choose Your Ender By Situation" icon="🎯">
          <p>
            After the screw or Tornado, your ender determines whether you get max damage,
            wall carry, or a wall break. Choose based on the situation:
          </p>
          <ul>
            <li><strong>Max Damage:</strong> uf+3,4,3 — standard ender, highest raw damage in the open</li>
            <li><strong>Wall Carry:</strong> u+3 → LFS uf+3+4, uf+3+4 — carry chains push the opponent toward the wall</li>
            <li><strong>Wall Break:</strong> f,f+4 or df+3,4 or f,n,d,df+3 — break through walls for stage transitions</li>
            <li><strong>Floor Break:</strong> f,f+3 or LFS 2,3 or u+3+4 — break through floors for additional combo extensions</li>
            <li><strong>Damage from RFF:</strong> RFF f+3 → LFS [4~3] — when you end up in RFF stance during the combo</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Beginner Route">
          If the combo routes above feel overwhelming, start with one universal approach:{' '}
          <strong>Launcher → f+4 → RFS 3~4 → uf+3+4~F → uf+3+4</strong>. This works from
          df+2, u+3+4, and low parry. It won't give maximum damage, but it's consistent and
          teaches you the core RFS transition that every combo shares. Add the optimized routes
          once this is automatic.
        </TipBox>
      </Section>

      <Section title="Heat-Specific Combos">
        <ComboCard
          title="Heat Dash (f,f+4 Engager)"
          starter="f,f+4 (Heat Engage) → Heat Dash"
          route={['f,f+4~F', 'Heat Dash', 'db+4~F', 'RFS [3~4]', 'uf+3+4~F', 'LFS uf+4 T!', 'uf+3,4,3']}
          damage="~70"
          difficulty="intermediate"
          notes={[
            'f,f+4 is your most common heat engage — db+4~F starts the standard combo',
            'Same screw sequence as the u+3+4 combo',
          ]}
        />

        <ComboCard
          title="Heat: RFS f+4,4 (i8 Launcher)"
          starter="Heat RFS f+4,4"
          route={['RFS f+4,4', 'u+3', 'LFS 1', 'u+3', 'uf+3+4~F', 'uf+3+4~F', 'uf+3+4']}
          damage="~60"
          difficulty="intermediate"
          notes={[
            'In heat, RFS f+4,4 becomes a natural hit launcher at 8 frames',
            'This is your fastest launcher in the game from any position',
            'u+3 pick-up into LFS 1 loop for carry — same as CH d+4,4 route',
          ]}
        />

        <Collapsible title="Other Heat Combo Routes">
          <ul>
            <li><strong>Heat Dash (LFS f+3 Engager):</strong> LFS f+3~F → Heat Dash → varies by position. At the wall, this gives devastating wall pressure.</li>
            <li><strong>Heat Dash (RFS b+3 Engager):</strong> RFS b+3~F → Heat Dash → standard screw route. Long range heat engage from RFS.</li>
            <li><strong>Heat Dash (RFF df+3 Engager):</strong> RFF df+3~F → Heat Dash → standard screw route. Your homing heat engage from RFF.</li>
          </ul>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
