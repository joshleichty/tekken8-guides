import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Gamma Howl Offense"
      intro="GMH isn't just defensive — it's a pressure tool. This chapter teaches you how to transition into stance and use its moves to overwhelm opponents."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Crouch Mastery"
    >
      <Section title="Offensive GMH Philosophy">
        <p>
          When you transition into GMH from a blocked move, you're often 
          <span className="highlight">advantaged in stance</span>. This creates a guessing 
          game where most options favor you.
        </p>

        <KeyConcept title="Why GMH Pressure Works" icon="⚔️">
          <ul>
            <li><strong>Many transitions are plus</strong> — You're advantaged entering stance</li>
            <li><strong>GMH 2 is +11 on block</strong> — Insane plus frames</li>
            <li><strong>GMH 4 is fast</strong> — i14-18, +4 on block, heat engager</li>
            <li><strong>Opponents must guess</strong> — Duck GMH 2? Get hit by GMH 1.</li>
            <li><strong>Chip damage</strong> — Many GMH moves do chip on block</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Key GMH Transitions">
        <SubSection title="f+4,1 D — Jackhammer into GMH">
          <p>
            The most important transition. f+4,1 is already your best poke. Holding down 
            transitions to GMH:
          </p>
          <ul>
            <li><strong>On block:</strong> +4 in GMH — advantage to attack</li>
            <li><strong>On hit:</strong> +8 in GMH — big advantage</li>
            <li><strong>On CH:</strong> +16 in GMH — guaranteed follow-ups</li>
          </ul>
        </SubSection>

        <SubSection title="f+3+4 D — Headbutt into GMH">
          <MoveCard character="jack-8"
            move={{
              input: 'f+3+4',
              hitLevel: ['m'],
              damage: '24',
              startup: 'i22',
              onBlock: '-11',
              onHit: '+9c',
              tags: ['Mid', 'Headbutt', 'GMH Transition'],
              description: 'Headbutt that transitions to GMH with D.',
              notes: [
                'On block → GMH: -3 (they have slight advantage)',
                'On hit → GMH: +15c (huge advantage)',
                'Use for conditioning, not spam'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="b+3,2 D — String into GMH">
          <MoveCard character="jack-8"
            move={{
              input: 'b+3,2',
              hitLevel: ['m', 'h'],
              damage: '14, 13',
              startup: 'i16',
              onBlock: '-4',
              onHit: '+1',
              tags: ['Mid', 'High', 'GMH Transition'],
              description: 'Mid-high string that transitions to GMH.',
              notes: [
                'On block → GMH: +0 (neutral)',
                'On hit → GMH: +5 (slight advantage)',
                'Second hit is high — can be ducked'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="uf+3 — Jumping Low into GMH">
          <MoveCard character="jack-8"
            move={{
              input: 'uf+3',
              hitLevel: ['L'],
              damage: '16 (spike)',
              startup: 'i23',
              onBlock: '-12',
              onHit: '+8c GMH',
              tags: ['Low', 'Spike', 'Auto GMH', 'Low Crush'],
              description: 'Jumping low that automatically enters GMH on hit.',
              notes: [
                'Only deals recoverable damage',
                'Cannot KO',
                'Auto-transitions to GMH on hit (+8c)',
                'Low crushes',
                'Heat only move (H.uf+3) also available'
              ]
          }}
        showVideo
        />
        </SubSection>
      </Section>

      <Section title="GMH Offensive Moves">
        <SubSection title="GMH 2 — The Money Maker">
          <MoveCard character="jack-8"
            videoId="GMH.2"
            move={{
              input: 'GMH 2',
              hitLevel: ['h'],
              damage: '40',
              startup: 'i20',
              onBlock: '+11g',
              onHit: '+21d (+11)',
              tags: ['High', 'Plus on Block', 'Tornado', 'Knockdown'],
              description: 'THE GMH move. +11 on block is absurd. Knockdown on hit.',
              notes: [
                '+11 ON BLOCK — this is insane',
                'Tornado property for combos',
                'It\'s high — can be ducked',
                'Mix with GMH 1 to catch duckers'
              ]
          }}
        showVideo
        />

          <TipBox variant="tip" title="The Threat">
            GMH 2 being +11 on block is <span className="highlight">terrifying</span>. 
            If they block it, you get guaranteed pressure. If they try to duck it, 
            GMH 1 (mid) launches them. They're in a lose-lose situation.
          </TipBox>
        </SubSection>

        <SubSection title="GMH 1 — The Mid Launcher">
          <MoveCard character="jack-8"
            videoId="GMH.1"
            move={{
              input: 'GMH 1',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i22',
              onBlock: '-9',
              onHit: '+25d',
              tags: ['Mid', 'Homing', 'Knockdown'],
              description: 'Homing mid from GMH. Catches duckers. Knockdown on hit.',
              notes: [
                'Full circle homing — no sidestep, no duck',
                '-9 on block is punishable',
                'Use when they duck GMH 2',
                'With GMC: becomes -6 and launches'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="GMH 4 — Fast Heat Engager">
          <MoveCard character="jack-8"
            videoId="GMH.4"
            move={{
              input: 'GMH 4',
              hitLevel: ['h'],
              damage: '30',
              startup: 'i14-18',
              onBlock: '+4',
              onHit: '+21d (+11)',
              tags: ['High', 'Fast', 'Plus on Block', 'Heat Engager', 'Chip'],
              description: 'Fast high kick from GMH. +4 on block, heat engager.',
              notes: [
                'Fastest GMH option',
                '+4 on block means more pressure',
                '9 chip damage on block',
                'Heat engager'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="GMH 3 — Mid Stomp">
          <MoveCard character="jack-8"
            videoId="GMH.3"
            move={{
              input: 'GMH 3',
              hitLevel: ['M'],
              damage: '28',
              startup: 'i24',
              onBlock: '+4',
              onHit: '+9c',
              onCH: '+22a',
              tags: ['Mid', 'Floor Break', 'Plus on Block'],
              description: 'Big stomp from GMH. +4 on block, floor breaks.',
              notes: [
                'Basically f,f+3 from stance',
                'Floor break',
                'Can transition to crouch with D',
                'Slower but catches people respecting GMH 4'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="GMH f+1 — Tornado Punch">
          <MoveCard character="jack-8"
            videoId="GMH.f+1"
            move={{
              input: 'GMH f+1',
              hitLevel: ['M'],
              damage: '26',
              startup: 'i20',
              onBlock: '-17',
              onHit: '+66a (+50)',
              tags: ['Mid', 'Tornado', 'Instant Tornado', 'Combo Tool'],
              description: 'Tornado launcher from GMH. Primary combo tool.',
              notes: [
                'Tornado and Instant Tornado property',
                'Use in combos, not neutral',
                '-17 on block is very punishable'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="GMH f+2 — Wall Ender">
          <MoveCard character="jack-8"
            videoId="GMH.f+2"
            move={{
              input: 'GMH f+2',
              hitLevel: ['m'],
              damage: '34',
              startup: 'i17',
              onBlock: '-13',
              onHit: '+30a (+4)',
              tags: ['Mid', 'Wall Splat', 'Combo Ender'],
              description: 'Drill punch from GMH. Wall ender.',
              notes: [
                'Wall splats',
                'Primary wall combo ender',
                '-13 but pushback helps'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="GMH 1+2 — Stance Throw">
          <MoveCard character="jack-8"
            videoId="GMH.1+2"
            move={{
              input: 'GMH 1+2',
              hitLevel: ['th'],
              damage: '45 (57)',
              startup: 'i16',
              onBlock: '-6',
              onHit: '+0d',
              tags: ['Throw', '1+2 Break', 'Wall Splat'],
              description: 'Throw from GMH. 1+2 break. Wall splats for 57 damage.',
              notes: [
                '1+2 break only',
                '57 damage at wall',
                'Catches people blocking GMH mixups',
                'From Gigas (eye flash animation)'
              ]
          }}
        showVideo
        />
        </SubSection>
      </Section>

      <Section title="GMH Pressure Flowchart">
        <KeyConcept title="GMH Decision Tree" icon="🔄">
          <p><strong>You enter GMH (advantaged):</strong></p>
          <ol>
            <li><strong>GMH 4</strong> — Default. Fast, +4 on block, chip damage.</li>
            <li><strong>They start ducking?</strong> → GMH 1 (mid, homing)</li>
            <li><strong>They stand-block?</strong> → GMH 2 (+11 on block) or GMH 1+2 (throw)</li>
            <li><strong>They try to interrupt?</strong> → GMH 3+4 (armor through)</li>
            <li><strong>With GMC (charged)?</strong> → GMC 1 (safe launcher) or GMC 2 (guard break)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Mix">
          GMH is a <strong>high/mid mixup</strong>. GMH 2 and GMH 4 are highs (huge reward 
          on block). GMH 1 and GMH 3 are mids (catch duckers). The throw catches blockers. 
          Vary your options.
        </TipBox>
      </Section>

      <Section title="Stance Movement">
        <p>
          You can move while in GMH:
        </p>
        <ul>
          <li><strong>GMH ub/uf</strong> — Quick jet escape backward or forward</li>
          <li><strong>Exit with movement</strong> — Backdash or sidestep out</li>
        </ul>
        <p>
          This lets you reposition without fully committing to a stance move.
        </p>
      </Section>

      <Section title="Full GMH Reference">
        <Collapsible title="Complete GMH Move List" icon="📋" defaultOpen={false}>
          <div style={{ marginTop: '12px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                  <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Level</th>
                  <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Use</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMH 1</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                  <td style={{ padding: '8px' }}>Homing mid, catch duckers</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMH 2</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+11</td>
                  <td style={{ padding: '8px' }}>Main pressure, knockdown</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMH 3</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                  <td style={{ padding: '8px' }}>Stomp, floor break</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMH 4</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                  <td style={{ padding: '8px' }}>Fast kick, heat engager</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMH 3+4</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>SM</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                  <td style={{ padding: '8px' }}>Power crush, heat engager</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMH f+1</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-17</td>
                  <td style={{ padding: '8px' }}>Tornado, combo tool</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMH f+2</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                  <td style={{ padding: '8px' }}>Wall ender</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMH 1+2</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>Throw</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                  <td style={{ padding: '8px' }}>Throw (1+2 break)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMC 1</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>Mid</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                  <td style={{ padding: '8px' }}>Safe launcher (charged)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>GMC 2</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>High</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+11 GB</td>
                  <td style={{ padding: '8px' }}>Guard break (charged)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Collapsible>
      </Section>

      <Section title="Chapter Summary">
        <p>GMH offensive tools:</p>
        <ul>
          <li><strong>GMH 4</strong> — Fast high, +4 on block, your default</li>
          <li><strong>GMH 2</strong> — +11 on block, forces respect</li>
          <li><strong>GMH 1</strong> — Homing mid, catches duckers</li>
          <li><strong>GMH 3</strong> — Mid stomp, +4 on block, floor break</li>
          <li><strong>GMH 1+2</strong> — Throw for blockers</li>
          <li><strong>Transitions</strong> — f+4,1 D, b+3,2 D, f+3+4 D</li>
        </ul>
        <p>
          Next chapter covers Jack's exceptional crouch game — one of the best in Tekken.
        </p>
      </Section>
    </Chapter>
  )
}
