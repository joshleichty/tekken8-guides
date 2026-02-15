import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, TipBox, PracticeBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Combos"
      intro="Reina has above-average combo damage, and her wall carry is excellent. This chapter gives you practical routes for every common launcher — starting with a universal route that works everywhere, then layering on optimizations as your execution improves."
      hasPrevious
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Heat System"
    >
      <Section title="Combo Building Blocks">
        <p>
          Before learning routes, understand the tools. Every Reina combo uses some combination of these:
        </p>
        <ul>
          <li><strong>Filler:</strong> df+2 → df+1 → f+2,3~F is the standard filler sequence. The f+2,3 transitions to Sentai for your tornado.</li>
          <li><strong>Tornado:</strong> SEN 2 (safe, consistent), SEN 1+2 (more damage, goes to WRA), df+4,2,3 (when off-axis), b+4 (emergency — high but very reliable hitbox).</li>
          <li><strong>Ender:</strong> uf+3+4,1+2 (standard), ws+3,4 (strong aerial tail spin — via crouch dash cancel), WR 4 (high execution, more damage).</li>
          <li><strong>Wall ender:</strong> df+1,1 → 1+2 (consistent), b+1,1,3 (delayed — higher damage, better oki).</li>
        </ul>

        <KeyConcept title="The Key Sequence to Practice" icon="🎯">
          <p>
            <strong>f+2,3~F → SEN → df+1</strong> is a sequence you'll use in nearly every combo.
            After f+2,3 transitions to Sentai, you press df+1 from within the stance. The timing is
            crucial — too early and you get the SEN power crush, too late and the opponent hits the ground.
          </p>
          <p>
            Practice this: <strong>df+2 → f+2,3~F → SEN df+1</strong>. You should see a 4-hit combo
            in the hit counter. Once this is muscle memory, all combo routes become much easier.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Universal Route">
        <p>
          This route works off virtually any launcher (df+2, EWGF, FC df+4, FC df+3) and is your
          go-to until you're comfortable with character-specific optimizations.
        </p>

        <Collapsible title="Universal Combo" defaultOpen>
          <p><strong>Launcher → df+2 → df+1 → f+2,3~F → SEN 2 T! → uf+3+4,1+2</strong></p>
          <ul>
            <li>Works from: df+2, EWGF, FC df+4, FC df+3</li>
            <li>Damage: ~65-70 depending on launcher</li>
            <li>Good wall carry</li>
            <li>Consistent and reliable</li>
          </ul>
          <p>
            If you need more wall carry, substitute the ender: use <strong>df+1,1</strong> for short
            distance carry, <strong>3,2</strong> or <strong>uf+3+4,1+2</strong> for longer distance.
          </p>
        </Collapsible>
      </Section>

      <Section title="Launcher-Specific Routes">
        <Collapsible title="EWGF Combo (Optimal)">
          <p><strong>EWGF → df+2 → df+1 → f+2,3~F → SEN 2 T! → uf+3+4,1+2</strong></p>
          <ul>
            <li>Damage: ~72</li>
            <li>The universal route — always works</li>
          </ul>
          <p>For higher damage with execution:</p>
          <p><strong>EWGF → df+2 → df+1 → f+2,3~F → SEN 1,qcf+2</strong></p>
          <ul>
            <li>Damage: ~77</li>
            <li>Skips tornado for raw damage</li>
            <li>Blue spark SEN 1,qcf+2 for 5 extra damage</li>
          </ul>
        </Collapsible>

        <Collapsible title="df+2 Combo">
          <p><strong>df+2 → df+1 → f+2,3~F → SEN 2 T! → uf+3+4,1+2</strong></p>
          <ul>
            <li>Damage: ~65</li>
            <li>Standard and consistent</li>
          </ul>
        </Collapsible>

        <Collapsible title="FC df+4 / FC df+3 Combo">
          <p><strong>FC df+4 → f+2,3~F → SEN 3 → df+2 → df+1 → f+2,3~F → SEN 2 T! → uf+3+4,1+2</strong></p>
          <ul>
            <li>Damage: ~70</li>
            <li>FC df+3 does 5 more damage but is -17 on block</li>
          </ul>
        </Collapsible>

        <Collapsible title="CH f,f+3+4 Combo">
          <p><strong>CH f,f+3+4 → SSR → f+2,3~F → SEN 3 → df+2 → df+1 → f+2,3~F → SEN 1,qcf+2</strong></p>
          <ul>
            <li>Sidestep right immediately after the launch, then f+2,3</li>
            <li>Damage: ~75</li>
          </ul>
        </Collapsible>

        <Collapsible title="CH CD3 (EWGK) Combo">
          <p><strong>CH CD3 → ws+3 → df+1,1 → f+2,3~F → SEN 2 T! → uf+3+4,1+2</strong></p>
          <ul>
            <li>Damage: ~73</li>
            <li>ws+3 picks up after the counter hit CD3 crumple</li>
          </ul>
        </Collapsible>

        <Collapsible title="b+4 / CH b+4 Combo">
          <p><strong>b+4 T! → f,f+3+4 → df+2 → df+1 → f+2,3~F → SEN 1,qcf+2</strong></p>
          <ul>
            <li>b+4 is a tornado, so this is a post-tornado route</li>
            <li>On normal hit, b+4 gives guaranteed CD3 (stomp)</li>
            <li>On counter hit, full launch combo</li>
          </ul>
        </Collapsible>

        <Collapsible title="CH 3,2 Combo">
          <p><strong>CH 3,2 → f,f+3+4 → df+2 → df+1 → f+2,3~F → SEN 2 T! → uf+3+4,1+2</strong></p>
          <ul>
            <li>Note: the second hit counts as your second scaled hit</li>
            <li>Adjust accordingly — slightly less damage than a raw launcher</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Wall Combos">
        <Collapsible title="Standard Wall Combo" defaultOpen>
          <p><strong>df+1,1 → 1+2</strong></p>
          <ul>
            <li>Damage: ~35</li>
            <li>Consistent and reliable</li>
            <li>Good oki — you're plus enough to sidestep into a mixup</li>
          </ul>
        </Collapsible>

        <Collapsible title="Optimal Wall Combo (b+1,1,3)">
          <p><strong>1,1 → b+1,1,3 (delay the third hit)</strong></p>
          <ul>
            <li>Damage: ~55</li>
            <li>The delay on the third hit is critical — wait until you see Reina start sliding down</li>
            <li>If done too fast, the SEN transition whiffs</li>
            <li>Transitions to Sentai for a post-wall mixup</li>
            <li>Best oki in her kit — opponent must guess between mid, throw, and grounded hit</li>
          </ul>
        </Collapsible>

        <Collapsible title="Alternative Wall Combos">
          <ul>
            <li><strong>1,1 → d+3+4,4:</strong> Flips the opponent over. Free mixup with db+4 or f+4 afterwards.</li>
            <li><strong>1,1 → b+2:</strong> Similar to Kazuya's df+2 wall ender. Flips away for a free mixup.</li>
            <li><strong>WRA 4,2,2,qcf+1+2:</strong> Use when you're already in WRA at the wall (e.g., after SEN 1+2 tornado).</li>
          </ul>
        </Collapsible>

        <TipBox variant="tip" title="Vary Your Wall Combos">
          Pro player Yagami emphasizes varying wall combos to keep opponents guessing on their wake-up.
          If you always do df+1,1 → 1+2, they learn the oki timing. Mix in b+1,1,3 for the Sentai oki,
          d+3+4,4 for the flip mixup, and the standard combo to keep your pressure unpredictable.
        </TipBox>
      </Section>

      <Section title="Heat Burst and Combo Extensions">
        <Collapsible title="Heat Burst Combo Ender">
          <p>If your combo is long and you haven't used heat yet, you can heat burst for extra damage:</p>
          <p><strong>...T! → f,f,f+4 → Heat Burst → d+2,1+2</strong></p>
          <ul>
            <li>Use after a long combo that used tornado</li>
            <li>The d+2,1+2 stomp does great damage at the end of a scaled combo</li>
            <li>Also consider: <strong>...T! → 4,4,3 → Heat Dash → d+4:1</strong> for max damage (accounts for scaling)</li>
          </ul>
        </Collapsible>

        <Collapsible title="Floor Break and Wall Break">
          <ul>
            <li><strong>Floor break:</strong> Use f+4 for floor breaks in combos.</li>
            <li><strong>Wall break:</strong> Use 1+2 for wall breaks. Heat smash from standing also breaks walls in one hit with massive carry.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Emergency Options">
        <p>
          When a combo looks like it might drop:
        </p>
        <ul>
          <li><strong>2,2,2,qcf+2:</strong> Quick string that always connects when you're unsure. Low damage but better than dropping.</li>
          <li><strong>b+4:</strong> Extremely reliable tornado — the hitbox is low enough to catch opponents that df+4,2,3 misses. Use when off-axis.</li>
          <li><strong>f,f+2:</strong> Safe approach if the combo is too scaled for a real ender. Plus on block if they somehow recover.</li>
        </ul>
      </Section>

      <Section title="Practice: Combos">
        <PracticeBox
          title="Core Combo Drill"
          setup="Practice Mode. Practice each combo until you can do it 5 times consecutively without dropping."
          tasks={[
            { id: 'filler', text: 'Practice the filler: f+2,3~F → SEN → df+1 (must show 4-hit combo)', type: 'counter', target: 20 },
            { id: 'universal', text: 'Universal route from df+2 (5 in a row without dropping)', type: 'counter', target: 5 },
            { id: 'wall-standard', text: 'Standard wall combo: df+1,1 → 1+2', type: 'counter', target: 10 },
            { id: 'wall-optimal', text: 'Optimal wall combo: 1,1 → b+1,1,3 (delayed)', type: 'counter', target: 10 },
            { id: 'ewgf-combo', text: 'EWGF combo (if you can do electrics consistently)', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
