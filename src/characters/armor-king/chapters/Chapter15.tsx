import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, Collapsible, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter15({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={15}
      title="Punishers"
      intro="Armor King has excellent punishment. Let's break down your options by frame."
      onPrevious={() => goToChapter(14)}
      onNext={() => goToChapter(16)}
      nextLabel="Continue to Heat System"
    >
      <Section title="Standing Punishers">
        <Collapsible title="Standing Punisher Table" icon="📊" defaultOpen>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>i10</td>
                <td style={{ padding: '8px' }}>2,1</td>
                <td style={{ padding: '8px' }}>High-mid, -3 on block. Standard 10f punish.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i12</td>
                <td style={{ padding: '8px' }}>b+1,2~F</td>
                <td style={{ padding: '8px' }}>Great range! Hold F for Bad Jaguar at +8.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i13</td>
                <td style={{ padding: '8px' }}>f+1+4</td>
                <td style={{ padding: '8px' }}>Shoulder. Great range but -19 if blocked.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i13</td>
                <td style={{ padding: '8px' }}>4,3</td>
                <td style={{ padding: '8px' }}>High-high. Safe. +9 on hit, sets up throws.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i14</td>
                <td style={{ padding: '8px' }}>db+2,3</td>
                <td style={{ padding: '8px' }}>Mid-mid. -12 on block. Decent range.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i15</td>
                <td style={{ padding: '8px' }}>uf+4</td>
                <td style={{ padding: '8px' }}>Hopkick. Poor range but launches.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i15</td>
                <td style={{ padding: '8px' }}>uf+2,1</td>
                <td style={{ padding: '8px' }}>Better range than hopkick. -13 on block.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i15</td>
                <td style={{ padding: '8px' }}>CD+2</td>
                <td style={{ padding: '8px' }}>Dark Upper. Best range, needs execution.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i16</td>
                <td style={{ padding: '8px' }}>b+3</td>
                <td style={{ padding: '8px' }}>Long range. Use for push-back moves.</td>
              </tr>
            </tbody>
          </table>
        </Collapsible>
      </Section>

      <Section title="While Standing Punishers">
        <Collapsible title="While Standing Punisher Table" icon="📊" defaultOpen>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>i11</td>
                <td style={{ padding: '8px' }}>ws+4</td>
                <td style={{ padding: '8px' }}>Generic ws punish. Safe.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i12</td>
                <td style={{ padding: '8px' }}>ws+2</td>
                <td style={{ padding: '8px' }}>CH launcher properties! Use for -12.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i13</td>
                <td style={{ padding: '8px' }}>ws+3,1</td>
                <td style={{ padding: '8px' }}>Heat Engager! -13 but great reward.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i15</td>
                <td style={{ padding: '8px' }}>ws+1</td>
                <td style={{ padding: '8px' }}>Elbow launcher. -12 on block.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>i15</td>
                <td style={{ padding: '8px' }}>uf+2,1</td>
                <td style={{ padding: '8px' }}>Same as standing. Works from crouch.</td>
              </tr>
            </tbody>
          </table>
        </Collapsible>
      </Section>

      <Section title="Whiff Punishers Recap">
        <KeyConcept title="Whiff Punishment Summary" icon="🎯">
          <ul>
            <li><strong>CD+2 (Dark Upper)</strong> — Primary whiff punish. Best range, only -10.</li>
            <li><strong>b+3</strong> — Push-back moves (Deathfist, etc.). Tornado.</li>
            <li><strong>db+2,3 / db+2,4</strong> — Quick, safe-ish whiff punish.</li>
            <li><strong>b+1,2</strong> — Great range, leads to Bad Jaguar.</li>
            <li><strong>ff+4</strong> — Heat Engager option from range.</li>
          </ul>
        </KeyConcept>
      </Section>

      <PracticeBox
        title="Punishment Practice"
        setup="Record dummy doing a -12 move (like a blocked snake edge). Practice punishing with the correct move."
        tasks={[
          { id: 'ch15-10f', text: 'Punish a -10 move with 2,1', detail: 'Your basic 10f punish', type: 'counter', target: 10 },
          { id: 'ch15-12f', text: 'Punish a -12 move with b+1,2~F', detail: 'Practice the Bad Jaguar entry after', type: 'counter', target: 10 },
          { id: 'ch15-15f', text: 'Punish a -15 move with Dark Upper (CD+2)', detail: 'Your optimal 15f punish with execution', type: 'counter', target: 10 },
        ]}
        />

      <Quiz
        question="You block a -12 move. What's your best punish option?"
        options={[
          { text: '2,1 — fastest option', isCorrect: false },
          { text: 'b+1,2~F — great range, leads to Bad Jaguar at +8', isCorrect: true },
          { text: 'CD+2 — Dark Upper launches', isCorrect: false },
          { text: 'df+1 — safe poke', isCorrect: false },
        ]}
        correctFeedback="Correct! b+1,2 is your 12-frame punish with excellent range. Holding F after it hits gives you Bad Jaguar at +8, which is a deadly mixup situation!"
        incorrectFeedback="Not quite. While 2,1 is faster, b+1,2 is your optimal 12-frame punish because it has great range and leads to Bad Jaguar at +8 for a mixup. CD+2 is for -15 or worse."
        />
    </Chapter>
  )
}
