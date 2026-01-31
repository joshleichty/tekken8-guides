import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Neutral Tools"
      intro="You can't always be in a stance. Sometimes you need to poke, check space, or just survive. These are Reina's buttons for when you're not pressing f,f+2."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Combos"
    >
      <Section title="The Jab">
        <MoveCard character="reina"
          videoId="1"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block', 'Fast'],
            description: 'Standard jab. +1 on block. Recovers 2f faster on hit or block.',
            notes: ['10f startup', 'Your fastest button', '+1 lets you continue pressure']
          }}
          showVideo
        />

        <p>
          Your jab is standard i10, but being <strong>+1 on block</strong> is excellent. You can 
          check opponents and maintain pressure even when your jab is blocked.
        </p>

        <MoveCard character="reina"
          videoId="1,1"
          move={{
            input: '1,1',
            hitLevel: ['h', 'h'],
            damage: '5, 6',
            startup: 'i10',
            onBlock: '-1',
            onHit: '+8',
            tags: ['High', 'High', 'Confirmable'],
            description: 'Double jab. Jails from first block with 2f delay. Hit confirm into 1,1,2.',
            notes: ['Can confirm into 1,1,2 on hit', '-1 on block is still safe']
          }}
          showVideo
        />
      </Section>

      <Section title="df+1 — The Universal Mid">
        <MoveCard character="reina"
          videoId="df+1"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '8',
            startup: 'i13~14',
            onBlock: '-3',
            onHit: '+4',
            tags: ['Mid', 'Safe', 'SEN Transition', 'Extensions'],
            description: 'Your go-to mid poke. -3 on block, +4 on hit. Can transition to SEN with F.',
            notes: ['df+1,1 extension (high follow-up)', 'df+1,2 extension (heat engager, -14)', 'df+1~F goes to Sentai']
          }}
          showVideo
        />

        <p>
          df+1 is your <strong>universal mid check</strong>. It's 13 frames, safe, and has extensions. 
          Use it to stop opponents from ducking your highs.
        </p>

        <KeyConcept title="df+1 Extensions" icon="📋">
          <ul>
            <li><strong>df+1,1</strong> — High follow-up, -4 on block, +7 on hit</li>
            <li><strong>df+1,2</strong> — Heat engager, -14 on block (punishable!)</li>
            <li><strong>df+1~F</strong> — Transition to Sentai (-3/+4)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="df+1,2 is Punishable">
          Only use df+1,2 as a punish or when you're confident it'll hit. -14 on block means 
          most characters get a launch.
        </TipBox>
      </Section>

      <Section title="f+4 — The Wall Tool">
        <MoveCard character="reina"
          videoId="f+4"
          move={{
            input: 'f+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i19~20',
            onBlock: '+2c',
            onHit: '+5c',
            tags: ['Mid', 'Plus on Block', 'Wall Pressure'],
            description: '+2 on block mid. Opponent is forced to crouch. +13c on crouching hit.',
            notes: ['Forces crouch on block', '+13c on crouching hit gives df+1,2', 'Spike on CH', 'Great wall pressure']
          }}
          showVideo
        />

        <p>
          f+4 is <strong>plus on block AND forces crouch</strong>. This is huge for wall pressure—if 
          they block it at the wall, their fastest option is a while-standing move, not a jab.
        </p>

        <KeyConcept title="f+4 Follow-ups" icon="🧱">
          <ul>
            <li><strong>On block</strong> — +2c. Continue with df+1 or f,f+2 or throw.</li>
            <li><strong>On crouching hit</strong> — +13c. Guaranteed df+1,2 (heat engager!).</li>
            <li><strong>On CH</strong> — Spike. Follow with d+4 or WGS 3.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="b+2 — The Homing Mid">
        <MoveCard character="reina"
          videoId="b+2"
          move={{
            input: 'b+2',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i16~17',
            onBlock: '-9',
            onHit: '+3',
            tags: ['Mid', 'Homing', 'Safe'],
            description: 'Homing mid to catch sidestepping. Safe at -9. Good range.',
            notes: ['Catches both directions', 'Your anti-sidestep tool', 'Has pushback']
          }}
          showVideo
        />

        <p>
          When opponents start sidestepping your f,f+2 approach, b+2 catches them. It's safe, 
          has good range, and hits both sides.
        </p>
      </Section>

      <Section title="df+2 — The Launcher">
        <MoveCard character="reina"
          videoId="df+2"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15~16',
            onBlock: '-12',
            onHit: '+30a',
            tags: ['Mid', 'Launcher', 'Safe(ish)'],
            description: 'Your i15 launcher. -12 on block means most characters can\'t launch you back.',
            notes: ['+2 on hit vs crouching', '+30a on CH vs crouching', 'Good whiff punish']
          }}
          showVideo
        />

        <p>
          df+2 is your <strong>no-execution launcher</strong>. At i15, it's fast enough for whiff 
          punishment and safe enough that getting blocked won't kill you. This is your answer if 
          you can't do electrics consistently yet.
        </p>

        <TipBox variant="tip" title="The No-Electric Path">
          If electrics are too hard right now, df+2 is your 15f punish and whiff punish tool. 
          It won't do as much damage, but it's reliable. You can add electrics later.
        </TipBox>
      </Section>

      <Section title="Low Pokes">
        <MoveCard character="reina"
          videoId="d+4"
          move={{
            input: 'd+4',
            hitLevel: ['l'],
            damage: '6',
            startup: 'i12',
            onBlock: '-15',
            onHit: '-4',
            tags: ['Low', 'Fast', 'High Crush'],
            description: 'Quick poke low. -15 on block is punishable but fast.',
            notes: ['High crushes', 'Minus on hit—don\'t expect follow-ups']
          }}
          showVideo
        />

        <MoveCard character="reina"
          videoId="db+2"
          move={{
            input: 'db+2',
            hitLevel: ['l', 'l'],
            damage: '10, 12',
            startup: 'i20~21',
            onBlock: '-16',
            onHit: '-3',
            tags: ['Low', 'Low', 'Chunky Damage'],
            description: 'Double low for 22 damage. Slower but more reward.',
            notes: ['-16 on block is punishable', '22 total damage']
          }}
          showVideo
        />

        <MoveCard character="reina"
          videoId="db+4"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '7',
            startup: 'i16',
            onBlock: '-13',
            onHit: '-2',
            tags: ['Low', 'CH Confirmable'],
            description: 'Low poke with CH follow-up. db+4,1+2 wall splats on CH.',
            notes: ['On CH, can confirm db+4,1+2 for wall splat', '-13 is punishable']
          }}
          showVideo
        />

        <TipBox variant="warning" title="Reina's Lows Are Weak">
          This is her primary weakness. All her neutral lows are either slow, low damage, or 
          very punishable. You'll win more by being oppressive with mids than by trying to 
          mix with lows.
        </TipBox>
      </Section>

      <Section title="Counter-Hit Tools">
        <MoveCard character="reina"
          videoId="b+4"
          move={{
            input: 'b+4',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i18',
            onBlock: '-8',
            onHit: '+35a',
            tags: ['High', 'CH Launcher', 'High Crush', 'Safe'],
            description: 'Safe high that launches on counter-hit. High crushes.',
            notes: ['Tornado on CH', 'High crush 6~17', 'Safe at -8']
          }}
          showVideo
        />

        <MoveCard character="reina"
          videoId="4"
          move={{
            input: '4',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i13~14',
            onBlock: '-8',
            onHit: '+11g',
            tags: ['High', 'CH Launcher', 'Fast'],
            description: 'Fast standing 4 that launches on counter-hit.',
            notes: ['On CH, opponent is FUFA', 'Balcony break', 'Safe at -8']
          }}
          showVideo
        />

        <p>
          Both b+4 and standing 4 are <strong>safe counter-hit launchers</strong>. Use them when you 
          expect the opponent to press.
        </p>
      </Section>

      <Section title="The Approach Arsenal Summary">
        <KeyConcept title="Neutral Tool Priority" icon="🎯">
          <ol>
            <li><strong>f,f+2~F</strong> — Your main approach, always</li>
            <li><strong>df+1</strong> — When you need a safe mid check</li>
            <li><strong>b+2</strong> — When they're sidestepping</li>
            <li><strong>df+2</strong> — Whiff punishment, 15f punish</li>
            <li><strong>f+4</strong> — Wall pressure, plus on block</li>
            <li><strong>b+4 / 4</strong> — When you expect them to press</li>
            <li><strong>d+4 / db+4</strong> — Only to chip health or mix occasionally</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Practice: Neutral Game">
        <PracticeBox
          title="Poke Drill"
          setup="Set opponent to Guard All. Practice from mid-range."
          tasks={[
            { id: 'poke-1', text: 'Alternate between 1 and df+1 (10 each)', detail: 'High-mid mixup', type: 'counter', target: 20 },
            { id: 'poke-2', text: 'Practice b+2 for tracking (10 times)', detail: 'Your homing tool', type: 'counter', target: 10 },
            { id: 'poke-3', text: 'Practice df+2 from whiff range (10 times)', detail: 'Your no-execution launcher', type: 'counter', target: 10 },
          ]}
        />
      </Section>

      <Collapsible title="Neutral Tools Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Use</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}>Fast check, plus on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ padding: '8px' }}>Universal mid check</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Approach (hold F for SEN)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Homing mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i19</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+2c</td>
                <td style={{ padding: '8px' }}>Wall pressure, plus</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ padding: '8px' }}>No-execution launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-8</td>
                <td style={{ padding: '8px' }}>Safe CH launcher</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
