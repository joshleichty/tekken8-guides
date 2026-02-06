import { Chapter, Section } from '../../../components/guide'
import {
  ComboCard,
  KeyConcept,
  TipBox,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="The Wall"
      intro="Lars has the best wall carry in the game. No matter where you are on the stage, your combos reach the wall. And once you get there, the damage is massive."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Heat System"
    >
      <Section title="Why Lars at the Wall Is Terrifying">
        <p>
          Lars has always had the best wall travel in Tekken. His combo routes naturally carry 
          the opponent across the entire stage. In Season 2, his wall combos got even stronger 
          with new routes that do more damage than ever before.
        </p>

        <KeyConcept title="Wall Carry Enders" icon="🧱">
          <p>When you're mid-combo and need to reach the wall, use these to extend carry:</p>
          <ul>
            <li><code>f+1,2,3</code> — Long-range carry through DEN transition</li>
            <li><code>df+3,3</code> — Two mids that travel far (hold D for DEN)</li>
            <li><code>db+2,3</code> — Mid-mid with good distance</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            The key is learning to GAUGE distance. If the wall is close, go for wall combo enders. 
            If it's far, use carry moves to get there first.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Wall Combos">
        <p>
          Once your opponent splats on the wall, here are your follow-ups:
        </p>

        <ComboCard
          title="Standard Wall Combo"
          starter="Wall Splat"
          route={['df+1', 'db+2,1', 'f+1+4']}
          damage="~35"
          difficulty="beginner"
          notes={['Works from any wall splat', 'f+1+4 (shoulder) is the wall ender', 'Simple and reliable']}
        />

        <ComboCard
          title="Season 2 Wall Combo (Upgraded)"
          starter="Wall Splat"
          route={['1', 'df+1', 'd+3,1']}
          damage="~30"
          difficulty="beginner"
          notes={['New S2 route', 'Different timing than the classic', 'Good for quick wall splats']}
        />

        <ComboCard
          title="Wall Combo with Tornado"
          starter="Wall Splat (no tornado used)"
          route={['b+2,3 T!', 'fff+2+4', 'f+1+4']}
          damage="~42"
          difficulty="intermediate"
          notes={['b+2,3 is a wall tornado', 'fff+2+4 (running throw) into shoulder', 'Maximum wall damage']}
        />

        <ComboCard
          title="Tornado Wall Combo (Alternative)"
          starter="Wall Splat (no tornado used)"
          route={['ff+2 T!', 'df+1', 'db+2,1', 'f+1+4']}
          damage="~40"
          difficulty="intermediate"
          notes={['ff+2 tornado into standard wall route', 'More damage than non-tornado']}
        />
      </Section>

      <Section title="Wall Splat Moves">
        <p>
          These moves cause wall splat when the opponent hits the wall:
        </p>

        <KeyConcept title="Key Wall Splat Moves" icon="💢">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Move</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Use Case</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>f+2,4</code></td>
                <td style={{ padding: '8px' }}>12f punish near wall = wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+3,4</code></td>
                <td style={{ padding: '8px' }}>Long range wall splat on normal hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1 CH</code></td>
                <td style={{ padding: '8px' }}>Homing mid wall splat on counter-hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+1+2</code></td>
                <td style={{ padding: '8px' }}>Homing mid-mid wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,3</code></td>
                <td style={{ padding: '8px' }}>df+1 extension wall splat (at wall)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,1,1</code></td>
                <td style={{ padding: '8px' }}>Heat engager wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 4</code></td>
                <td style={{ padding: '8px' }}>Homing high wall splat from stance</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 1</code></td>
                <td style={{ padding: '8px' }}>Heat engager wall splat from stance</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="Wall Pressure">
        <p>
          When your opponent has their back to the wall but ISN'T splattered, these are your 
          pressure tools:
        </p>

        <KeyConcept title="Wall Pressure Strategy" icon="🎯">
          <ul>
            <li><strong>2,1 → LEN mixup</strong> — Your standard pressure leads to wall splat on LEN 2</li>
            <li><strong>DEN 3 → SEN pressure</strong> — Stance approach that can lead to wall splat through SEN options</li>
            <li><strong>f+2,4</strong> — Wall splats directly. Use as a punish or after conditioning</li>
            <li><strong>b+3,4</strong> — Long range wall splat on normal hit</li>
            <li><strong>1,1,1</strong> — Heat engager at the wall = wall splat + heat activation</li>
            <li><strong>Throws</strong> — Opponents turtle harder at the wall. Throw them into it.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Wall + Heat = Maximum Damage">
          If you're at the wall with heat available, the damage output is insane. 
          Activate heat with 1,1,1 (wall splat heat engager), then heat dash into a 
          wall combo. Or use heat LEN 2 (tornado) for massive wall combos. 
          More on heat in the next chapter.
        </TipBox>
      </Section>

      <Section title="Practice: Wall Game">
        <PracticeBox
          title="Wall Combo Drill"
          setup="Position both characters near the wall. Set opponent to Stand."
          tasks={[
            { id: 'wall-1', text: 'Land the standard wall combo five times', detail: 'Wall splat → df+1 → db+2,1 → f+1+4', type: 'counter', target: 5 },
            { id: 'wall-2', text: 'Land the tornado wall combo five times', detail: 'Wall splat → b+2,3 T! → fff+2+4 → f+1+4', type: 'counter', target: 5 },
            { id: 'wall-3', text: 'Land a full combo into wall combo', detail: 'Start mid-stage, combo carry to wall, wall combo', type: 'counter', target: 3 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
