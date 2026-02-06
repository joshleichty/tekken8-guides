import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Neutral Control"
      intro="Stances are Lars' offense. But before you can enter stances, you need to control neutral — the space between attacks where both players are jockeying for position. These are the tools that get you in."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Counter Hits & Frame Traps"
    >
      <Section title="The Poke Game">
        <p>
          Pokes are small, fast, relatively safe attacks that chip away at your opponent while 
          gathering information. "How does this person react when I poke them?" That information 
          becomes your weapon.
        </p>

        <MoveCard character="lars"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i13',
            onBlock: '-3',
            onHit: '+5',
            tags: ['Mid', 'Fast', 'Key Poke', 'Extensions'],
            description: 'Your primary mid poke. i13, only -3 on block. Has multiple new extensions in Season 2 that create a terrifying guessing game.',
            notes: ['-3 on block = nearly your turn still', '+5 on hit for follow-ups', 'S2: new extensions make this arguably broken']
          }}
          showVideo
        />

        <KeyConcept title="The df+1 Extension Tree (Season 2)" icon="🌳">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Move</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Hit Level</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>Block</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Use</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1</code> (alone)</td>
                <td style={{ padding: '8px' }}>m</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-3</td>
                <td style={{ padding: '8px' }}>Safe poke, follow with movement</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,1</code></td>
                <td style={{ padding: '8px' }}>m, h</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-6</td>
                <td style={{ padding: '8px' }}>Mid-high, goes into DEN with D (+10 on hit!)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,3</code></td>
                <td style={{ padding: '8px' }}>m, m</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}>Mid-mid for duckers, wall splats</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,1,3</code></td>
                <td style={{ padding: '8px' }}>m, h, m</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}>Full string, guaranteed on 2nd CH</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="df+1 Is Arguably Broken">
          Season 2 gave df+1 an absurd mixup tree. At -3 on block with all these extensions, 
          your opponent has to guess which one is coming. df+1,1 can be ducked (it's high) 
          but df+1,3 is mid-mid. Mix them up and your opponent is stuck.
        </TipBox>

        <MoveCard character="lars"
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 9',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['Fast', 'Jab String', 'Plus on Hit'],
            description: 'Your fastest poke. +8 on hit means you can frame trap with a follow-up. On block, -3 is very safe.',
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="db+2,1"
          move={{
            input: 'db+2,1',
            hitLevel: ['m', 'm'],
            damage: '12, 8',
            startup: 'i15',
            onBlock: '-8',
            onHit: '+6',
            tags: ['Mid', 'Mid', 'Safe', 'Stance Option'],
            description: 'Safe mid-mid string. Can also do just db+2 and hold F to enter SEN at -5 block / +6 hit.',
            notes: ['db+2 alone is -8, hold F for SEN entry', 'db+2,1 is -8, completely safe', 'Excellent poking mid']
          }}
          showVideo
        />

        <MoveCard character="lars"
          move={{
            input: 'd+2',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i18~19',
            onBlock: '+0c',
            onHit: '+8c',
            onCH: '+10d',
            tags: ['Mid', 'Neutral on Block', 'Forces Crouch', 'Tactical Sword'],
            description: 'Tactical Sword. Neutral on block but forces your opponent into crouch, limiting their options. On hit, +8 in crouch gives you while standing options.',
            notes: ['Forces opponent into crouch', 'Hold D to go into crouch yourself', 'On CH: knockdown with +10', 'Great for conditioning']
          }}
          showVideo
        />

        <TipBox variant="tip" title="d+2 → Crouch Pressure">
          After d+2 hits (+8c), your opponent is crouching with limited options. You can: 
          stay standing and do 1,1,1 as a frame trap, or hold down and go into FC df+2 or 
          ws options. This move is a gateway to a lot of Lars' offense.
        </TipBox>
      </Section>

      <Section title="Tracking & Homing">
        <p>
          Lars is weak to sidestep right. These tools keep your opponent honest:
        </p>

        <MoveCard character="lars"
          move={{
            input: 'b+1',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i15~17',
            onBlock: '-9',
            onHit: '+4',
            onCH: '+14a (+5)',
            tags: ['Homing', 'Safe', 'CH Knockdown', 'Key Move'],
            description: 'Your best homing move. 15 frames, safe at -9, excellent range. On counter-hit in Season 2: knockdown + guaranteed follow-up.',
            notes: ['Homing = catches all sidesteps', 'Safe at -9', 'S2 CH: knockdown + guaranteed 4,4,f+2 into SEN', 'Wall splats on CH']
          }}
          showVideo
        />

        <KeyConcept title="b+1 Counter-Hit in Season 2" icon="💥">
          <p>
            In Season 1, b+1 CH was nothing special. In Season 2, b+1 on counter-hit gives a 
            Kazuya 1+2 style knockdown with guaranteed follow-up damage into SEN mixup. 
            This massively increases the reward for using this move in neutral.
          </p>
        </KeyConcept>

        <MoveCard character="lars"
          videoId="b+1+2"
          move={{
            input: 'b+1+2',
            hitLevel: ['m', 'm'],
            damage: '4, 20',
            startup: 'i21~22',
            onBlock: '-9',
            onHit: '+9',
            tags: ['Homing', 'Safe', 'Mid Mid', 'Wall Splat'],
            description: 'Safe homing mid-mid. Can evade jabs from range. Wall splats. Slower than b+1 but safer reward.',
          }}
          showVideo
        />
      </Section>

      <Section title="Keep-Out Tools">
        <p>
          When your opponent is approaching, these moves keep them at bay:
        </p>

        <MoveCard character="lars"
          videoId="b+3,4"
          move={{
            input: 'b+3,4',
            hitLevel: ['m', 'h'],
            damage: '14, 20',
            startup: 'i17',
            onBlock: '-8',
            onHit: '+19 (+10)',
            tags: ['Long Range', 'Safe', 'Wall Splat', 'Knockdown'],
            description: 'Long-range mid-high. Safe at -8. Wall splats on normal hit. Excellent for whiff punishment and keep-out.',
            notes: ['Incredible range', 'Normal hit wall splat', 'Second hit is high (can be ducked)', 'Also b+3~F for SEN entry']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="df+3,3"
          move={{
            input: 'df+3,3',
            hitLevel: ['m', 'm'],
            damage: '15, 24',
            startup: 'i16',
            onBlock: '-15',
            onHit: '+29a (+14a)',
            tags: ['Long Range', 'Push Back', 'Natural Combo', 'DEN Transition'],
            description: 'Natural combo mid-mid with massive pushback on block. -15 but so far away most characters can\'t punish. Hold D to enter DEN.',
            notes: ['Natural combo in S2 (was CH only)', '+8 on first hit alone, hold D for DEN at +15', 'Huge pushback on block = often unpunishable', 'Great at range']
          }}
          showVideo
        />

        <TipBox variant="tip" title="The df+3,3 Trick">
          df+3,3 is technically -15 but the pushback is so extreme that most characters 
          can't reach to punish it. If they try and whiff, you can launch them. 
          Know which characters CAN punish this and which can't — it's matchup-specific.
        </TipBox>

        <MoveCard character="lars"
          videoId="SS.2"
          move={{
            input: 'ss+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16~17',
            onBlock: '-7',
            onHit: '+22d',
            tags: ['Sidestep', 'Mid', 'Safe', 'Knockdown'],
            description: 'Sidestep mid. Evades linear moves and gives knockdown on hit. Follow up with DEN 3+4 (storm) or ff+2.',
            notes: ['Evades jabs and linear attacks', 'Knockdown into oki', 'Safe at -7', 'Step right against most opponents']
          }}
          showVideo
        />
      </Section>

      <Section title="Low Pokes">
        <p>
          Lars' lows are risky but essential for opening up turtles:
        </p>

        <MoveCard character="lars"
          videoId="db+1,3"
          move={{
            input: 'db+1,3',
            hitLevel: ['l', 'h'],
            damage: '9, 10',
            startup: 'i17',
            onBlock: '-12',
            onHit: '-1',
            tags: ['Low', 'High', 'LEN Transition', 'Poke'],
            description: 'Fast low poke. The second hit (3) is high and will whiff on crouching opponents, but hold D to enter LEN.',
            notes: ['-12 on first hit block', 'Second hit high = can be ducked', 'Hold D after for LEN entry', 'Good conditioning tool']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="FC.1+2"
          move={{
            input: 'FC 1+2',
            hitLevel: ['l', 'l'],
            damage: '9, 15',
            startup: 'i18',
            onBlock: '-12',
            onHit: '+1c',
            tags: ['Full Crouch', 'Low', 'LEN Transition', 'Safe-ish'],
            description: 'Full crouch double low. Only -12 on block. Can transition to LEN by holding D on hit for a mixup.',
            notes: ['From crouch (after d+2, db+4, etc.)', 'Hold D to enter LEN at +3 on hit', '-12 = can\'t be launched by most', 'Good low poke from crouch']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="f,F+4,2"
          move={{
            input: 'ff+4,2',
            hitLevel: ['l', 'h'],
            damage: '12, 15',
            startup: 'i21',
            onBlock: '-7',
            onHit: '+11',
            tags: ['Hellsweep', 'Low', 'DEN Transition', 'Plus on Hit'],
            description: 'Lars\' hellsweep. Low into DEN auto-transition. +11 on hit = strong DEN mixup. Launch punishable on low block.',
            notes: ['Low hit → auto DEN at +11', '+9 DEN mixup on hit', 'Low is -31 if first hit blocked!', 'ff+4,3 alternative: more damage, -16, no DEN']
          }}
          showVideo
        />
      </Section>

      <Section title="The Approach">
        <p>
          Getting in on your opponent from range requires specific tools:
        </p>

        <MoveCard character="lars"
          videoId="f,f,F+1"
          move={{
            input: 'fff+1',
            hitLevel: ['h'],
            damage: '23',
            startup: 'i18~20',
            onBlock: '+4',
            onHit: '+36a',
            tags: ['Running', 'Plus on Block', 'SEN Transition', 'New in S2'],
            description: 'New Season 2 running high. +4 on block into SEN. Guaranteed SEN 2 on hit. Excellent tracking. Cancel with B for +2.',
            notes: ['+4 block into SEN = pressure', 'Guaranteed SEN 2 on hit', 'Cancel with B for +2 standing', 'Near-homing tracking']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="f,f,F+3"
          move={{
            input: 'fff+3',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i20~26',
            onBlock: '+6',
            onHit: '+15a (+5)',
            tags: ['Running', 'Mid', '+6 on Block', 'Approach'],
            description: 'Running mid slash kick. +6 on block. Safe approach tool for closing distance.',
            notes: ['+6 on block = your turn', 'Good for approaching', 'Chip damage on block']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="f,F+1+2"
          move={{
            input: 'ff+1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16~17',
            onBlock: '-9',
            onHit: '+14 (+5)',
            onCH: '+59a (+39)',
            tags: ['Mid', 'Safe', 'CH Launcher', 'Approach'],
            description: 'Safe mid approach tool. -9 on block. Launches on counter-hit for a full combo.',
            notes: ['Safe at -9', 'CH = full combo', 'Good approach from mid-range', 'Chip damage on block']
          }}
          showVideo
        />
      </Section>

      <Section title="Other Important Neutral Tools">
        <MoveCard character="lars"
          move={{
            input: '1,1,1',
            hitLevel: ['h', 'm', 'm'],
            damage: '5, 8, 20',
            startup: 'i10',
            onBlock: '-12',
            onHit: '+5c',
            tags: ['Heat Engager', 'CH Confirmable', 'Jab String'],
            description: 'Counter-hit confirmable heat engager. Do 1,1 and if the opponent pressed, confirm the third 1. Wall splats.',
            notes: ['Heat engager', 'CH confirmable from 1,1', '-12 on block if you do all three', '1,1 alone is -8 (safer to stop there)']
          }}
          showVideo
        />

        <MoveCard character="lars"
          move={{
            input: 'uf+3+4,4',
            hitLevel: ['m', 't'],
            damage: '20, 20',
            startup: 'i17~18',
            onBlock: '-4',
            onHit: '0',
            tags: ['Jumping', 'Evasive', 'Mid', 'Throw Extension'],
            description: 'Evasive jumping mid. Goes over highs, mids, and some lows. -4 on block. Can hold 1+2 for a throw that does 40 damage.',
            notes: ['Extremely evasive', '-4 on block = safe', 'Hold 1+2 for throw (break: 1+2)', 'People duck expecting a low from T7']
          }}
          showVideo
        />

        <MoveCard character="lars"
          move={{
            input: 'uf+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i25~27',
            onBlock: '-8',
            onHit: '+42a',
            tags: ['Orbital', 'Safe Launcher', 'Low Crush'],
            description: 'Orbital heel. Safe launcher that goes over lows. Slow but safe at -8. Your go-to when you read a low incoming.',
            notes: ['Low crushes from frame 9', 'Safe at -8', 'Full combo on hit', 'Slower than most orbitals']
          }}
          showVideo
        />
      </Section>

      <Section title="Practice: Neutral Toolkit">
        <PracticeBox
          title="Poke Drill"
          setup="Set opponent to Guard All. Stand at close-mid range."
          tasks={[
            { id: 'poke-1', text: 'Poke with df+1 ten times', detail: 'Get the range and timing comfortable', type: 'counter', target: 10 },
            { id: 'poke-2', text: 'Do df+1 → df+1,1 → df+1,3 mixing randomly', detail: 'Practice the extension mixup', type: 'toggle' },
            { id: 'poke-3', text: 'Poke with db+2,1 five times', detail: 'Safe mid-mid', type: 'counter', target: 5 },
            { id: 'poke-4', text: 'Do d+2 on hit → hold D → FC df+2 five times', detail: 'Tactical sword into crouch frame trap', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Approach Drill"
          setup="Set opponent to Guard All. Start from far range."
          tasks={[
            { id: 'approach-1', text: 'Approach with fff+3 five times', detail: '+6 on block running mid', type: 'counter', target: 5 },
            { id: 'approach-2', text: 'Approach with DEN 3 five times', detail: '+5 on block into SEN', type: 'counter', target: 5 },
            { id: 'approach-3', text: 'Approach with fff+1 five times', detail: '+4 on block into SEN', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Collapsible title="Neutral Tools Quick Reference" icon="📋">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Block</th>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Role</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
              <tr><td style={{ padding: '6px' }}><code>df+1</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i13</td><td style={{ textAlign: 'center', padding: '6px' }}>-3</td><td style={{ padding: '6px' }}>Primary poke + extensions</td></tr>
              <tr><td style={{ padding: '6px' }}><code>1,2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i10</td><td style={{ textAlign: 'center', padding: '6px' }}>-3</td><td style={{ padding: '6px' }}>Fast check, +8 on hit</td></tr>
              <tr><td style={{ padding: '6px' }}><code>db+2,1</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i15</td><td style={{ textAlign: 'center', padding: '6px' }}>-8</td><td style={{ padding: '6px' }}>Safe mid-mid poke</td></tr>
              <tr><td style={{ padding: '6px' }}><code>d+2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i18</td><td style={{ textAlign: 'center', padding: '6px' }}>0c</td><td style={{ padding: '6px' }}>Forces crouch, conditioning</td></tr>
              <tr><td style={{ padding: '6px' }}><code>b+1</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i15</td><td style={{ textAlign: 'center', padding: '6px' }}>-9</td><td style={{ padding: '6px' }}>Homing, CH knockdown in S2</td></tr>
              <tr><td style={{ padding: '6px' }}><code>b+3,4</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i17</td><td style={{ textAlign: 'center', padding: '6px' }}>-8</td><td style={{ padding: '6px' }}>Long range, wall splat</td></tr>
              <tr><td style={{ padding: '6px' }}><code>df+3,3</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i16</td><td style={{ textAlign: 'center', padding: '6px' }}>-15</td><td style={{ padding: '6px' }}>Natural combo, pushback</td></tr>
              <tr><td style={{ padding: '6px' }}><code>ss+2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i16</td><td style={{ textAlign: 'center', padding: '6px' }}>-7</td><td style={{ padding: '6px' }}>Sidestep mid, knockdown</td></tr>
              <tr><td style={{ padding: '6px' }}><code>ff+1+2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i16</td><td style={{ textAlign: 'center', padding: '6px' }}>-9</td><td style={{ padding: '6px' }}>Safe mid, CH launcher</td></tr>
              <tr><td style={{ padding: '6px' }}><code>fff+3</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i20</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--success)' }}>+6</td><td style={{ padding: '6px' }}>Running mid approach</td></tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
