import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  StanceBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Heaven's Wrath"
      intro="Heaven's Wrath (WRA) is Reina's power stance. Where Sentai is about endless pressure, WRA is about forcing decisions. It has grabs, parries, and moves that demand respect."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="The Stance Web"
    >
      <Section title="Entering Heaven's Wrath">
        <StanceBox name="Heaven's Wrath Stance" input="d+1+2 (manual entry)" icon="👊">
          <p>
            Heaven's Wrath can be entered manually with <code>d+1+2</code>, but like Sentai, you'll 
            usually transition into it through other moves.
          </p>
        </StanceBox>

        <KeyConcept title="Your Main WRA Entries" icon="🚪">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Entry</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+31a</td>
                <td style={{ padding: '8px' }}>Main entry from Sentai</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 2~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-4</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ padding: '8px' }}>Hold D after SEN 2</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+4,4~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-10</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>11f punish entry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+4,2~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ padding: '8px' }}>Mid-mid entry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WGS.df+4,2~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>Hell sweep entry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f,F+4~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+35a</td>
                <td style={{ padding: '8px' }}>While running high</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+1 (on hit)</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ padding: '8px' }}>Only enters on hit</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="The Hell Sweep Loop">
          WGS.df+4,2~D (hell sweep into WRA) is your main low mixup tool near walls. At +6 on hit, 
          you can loop back into more hell sweeps or mids. More on this in Chapter 5.
        </TipBox>
      </Section>

      <Section title="WRA 2 — The Safe Heat Engager">
        <MoveCard character="reina"
          videoId="WRA.2"
          move={{
            input: 'WRA 2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i15~16',
            onBlock: '-9',
            onHit: '+11a',
            tags: ['Mid', 'Heat Engager', 'Safe', 'Chip Damage'],
            description: 'Safe mid heat engager from Heaven\'s Wrath. Launches on heat dash.',
            notes: ['Deals chip damage', 'Has pushback on block', 'Heat dash gives full combo']
          }}
          showVideo
        />

        <p>
          WRA 2 is your <strong>main heat engager from stance</strong>. It's a safe mid that does 
          chip damage and has excellent range. When you want to activate heat from WRA, this is 
          your go-to.
        </p>

        <KeyConcept title="When to Use WRA 2" icon="🔥">
          <ul>
            <li><strong>To activate heat</strong> — Safe heat engager</li>
            <li><strong>At range</strong> — Has excellent reach</li>
            <li><strong>After SEN 1+2 hit</strong> — Guaranteed combo with heat dash</li>
            <li><strong>Chip damage</strong> — Good for ending rounds</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="WRA 1,4 — Hit Confirmable String">
        <MoveCard character="reina"
          videoId="WRA.1,4"
          move={{
            input: 'WRA 1,4',
            hitLevel: ['h', 'm'],
            damage: '12, 22',
            startup: 'i12',
            onBlock: '-9',
            onHit: '+9d',
            tags: ['High', 'Mid', 'Homing', 'Safe', 'Confirmable', 'SEN Transition'],
            description: 'Hit-confirmable high-mid. First hit is homing. Can transition to Sentai with F.',
            notes: ['First hit transitions to SEN with F', 'Second hit is safe at -9', 'On CH first hit: +13, can confirm into SEN 1+2']
          }}
          showVideo
        />

        <p>
          WRA 1,4 is a <strong>hit-confirmable string</strong>. The first hit is a homing high, 
          and you can delay the second hit to confirm if it connected.
        </p>

        <KeyConcept title="WRA 1 Transitions" icon="🔄">
          <ul>
            <li><strong>WRA 1</strong> alone — -4 on block, +8 on hit</li>
            <li><strong>WRA 1~F</strong> — Transitions to Sentai (+0/+13)</li>
            <li><strong>WRA 1,4</strong> — Full string, safe at -9</li>
            <li><strong>On CH WRA 1</strong> — +13, can confirm SEN 1+2 for combo</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Counter Hit Confirm">
          If WRA 1 counter-hits, you're +13. You have time to see the CH spark and then go into 
          SEN 1+2 for a full combo. Practice this—it's free damage.
        </TipBox>
      </Section>

      <Section title="WRA 3,4 — The Pressure Loop">
        <MoveCard character="reina"
          videoId="WRA.3,4"
          move={{
            input: 'WRA 3,4',
            hitLevel: ['m', 'm'],
            damage: '17, 20',
            startup: 'i28',
            onBlock: '+6',
            onHit: '+17a',
            tags: ['Mid', 'Mid', 'Plus on Block', 'Chip Damage', 'WRA Transition'],
            description: 'Slow but +6 on block. Can hold D to stay in WRA. Loops into itself.',
            notes: ['Low crushes 9~36', 'Hold D to stay in WRA at +8', 'Chip damage on block']
          }}
          showVideo
        />

        <p>
          WRA 3,4 is your <strong>frame-advantage-on-block mid</strong> from Heaven's Wrath. 
          It's slow, but being +6 on block means your opponent can't challenge. And if you hold D, 
          you stay in WRA at +8.
        </p>

        <KeyConcept title="The WRA 3,4 Loop" icon="🔁">
          <ol>
            <li>Enter WRA with +6 or better (hell sweep on hit, etc.)</li>
            <li>Do WRA 3,4 and hold D</li>
            <li>You're back in WRA at +8</li>
            <li>Repeat, or mix with WRA 2, WRA 1,4, or the grab</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            This loop does chip damage and builds meter while keeping you in advantage.
          </p>
        </KeyConcept>
      </Section>

      <Section title="WRA 1+2 — Power Crush">
        <MoveCard character="reina"
          videoId="WRA.1+2"
          move={{
            input: 'WRA 1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i15~16',
            onBlock: '-13',
            onHit: '+16d',
            tags: ['Mid', 'Power Crush', 'Unsafe'],
            description: 'Power crush from Heaven\'s Wrath. Beats mashing but -13 on block.',
            notes: ['Power crush 6~14', '+16d on hit but no guaranteed follow-up', 'Punishable on block']
          }}
          showVideo
        />

        <p>
          WRA 1+2 is your power crush from Heaven's Wrath. Use it when you expect opponents to 
          press after your WRA entry. It's punishable, so use sparingly.
        </p>
      </Section>

      <Section title="WRA Grab — Another Unbreakable">
        <MoveCard character="reina"
          videoId="WRA.1+3"
          move={{
            input: 'WRA 1+3 or 2+4',
            hitLevel: ['t(h)'],
            damage: '20',
            startup: 'i16',
            onBlock: '',
            onHit: '+10d',
            tags: ['Throw', 'Unbreakable', 'High'],
            description: 'Unbreakable throw from WRA. More damage than SEN grab. 35 at wall.',
            notes: ['Leaves opponent FUFT', '35 damage at wall', 'Only counter is ducking']
          }}
          showVideo
        />

        <p>
          Like Sentai, Heaven's Wrath has an <strong>unbreakable throw</strong>. This one does 
          more damage (20, or 35 at wall) and leaves the opponent face-up feet-toward for oki.
        </p>

        <TipBox variant="tip" title="Wall Damage">
          At the wall, WRA 1+3 does 35 damage and gives you strong oki. If opponents keep 
          standing to block your WRA mids, grab them.
        </TipBox>
      </Section>

      <Section title="WRA 3+4 — Chip and Plus">
        <MoveCard character="reina"
          videoId="WRA.3+4"
          move={{
            input: 'WRA 3+4',
            hitLevel: ['m'],
            damage: '26',
            startup: 'i18~19',
            onBlock: '+0c',
            onHit: '+5d',
            tags: ['Mid', 'Chip Damage', 'Spike'],
            description: 'Mid that\'s 0 on block with chip damage. Safe pressure tool.',
            notes: ['Spike on hit', '7 chip damage on block', 'Opponent FDFA on normal hit']
          }}
          showVideo
        />

        <p>
          WRA 3+4 is a <strong>safe mid that does chip damage</strong>. At 0 on block, you're 
          even—but you've done 7 chip damage. Use this to slowly drain health when they're 
          turtling.
        </p>
      </Section>

      <Section title="WRA 4,2,2,1+2 — The Counter Hit String">
        <MoveCard character="reina"
          videoId="WRA.4,2,2,1+2"
          move={{
            input: 'WRA 4,2,2,1+2',
            hitLevel: ['m', 'm', 'm', 'h', 'm'],
            damage: '6+8, 8, 4, 22',
            startup: 'i17~18',
            onBlock: '-20',
            onHit: '+24',
            tags: ['Mid', 'CH Confirmable', 'Unsafe'],
            description: 'Counter-hit string. First hit launches on CH, rest guaranteed. Very unsafe on block.',
            notes: ['Only do full string on CH', 'First hit is 2 hits that jail', 'Blue spark with qcf+1+2 for +6 damage']
          }}
          showVideo
        />

        <p>
          This string only works on <strong>counter-hit</strong>. If WRA 4 counter-hits, the 
          entire string is guaranteed. If it doesn't, STOP. -20 on block is death.
        </p>

        <KeyConcept title="How to Use WRA 4 String" icon="⚡">
          <ol>
            <li>Enter WRA at plus frames</li>
            <li>Do WRA 4 and watch for the CH spark</li>
            <li><strong>If CH</strong> → Complete the string (4,2,2,1+2)</li>
            <li><strong>If not CH</strong> → Stop immediately or do 4,2 only</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="The Heat Auto-Parry">
        <p>
          In heat, Heaven's Wrath gains <strong>automatic parry properties</strong> while standing 
          in the stance. Any mid or high attack (not elbows/knees) will be parried automatically.
        </p>

        <KeyConcept title="Heat WRA Properties" icon="🛡️">
          <ul>
            <li><strong>Auto-parry</strong> — Mids and highs are parried while in stance</li>
            <li><strong>Consumes heat</strong> — Uses heat meter when parry activates</li>
            <li><strong>40 damage on parry</strong> — Significant punish</li>
            <li><strong>Lows still hit</strong> — Only mids and highs are parried</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat WRA Mindgames">
          In heat, just STANDING in WRA is scary. Opponents who press buttons get parried. 
          Those who don't have to respect your options. This is why saving heat for certain 
          situations can be valuable.
        </TipBox>
      </Section>

      <Section title="Practice: Heaven's Wrath">
        <PracticeBox
          title="WRA Entry Drill"
          setup="Practice entering WRA through different moves."
          tasks={[
            { id: 'wra-1', text: 'Enter WRA via SEN 1+2 5 times', detail: 'Your main entry from Sentai', type: 'counter', target: 5 },
            { id: 'wra-2', text: 'Enter WRA via df+4,2~D 5 times', detail: 'Mid poke entry', type: 'counter', target: 5 },
            { id: 'wra-3', text: 'Enter WRA via ws+4,4~D 5 times', detail: 'From crouch/punishment', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="WRA Option Drill"
          setup="Enter WRA manually with d+1+2 and practice each option."
          tasks={[
            { id: 'wra-opt-1', text: 'Do 5x WRA 2', detail: 'Safe heat engager', type: 'counter', target: 5 },
            { id: 'wra-opt-2', text: 'Do 5x WRA 1,4', detail: 'Confirmable string', type: 'counter', target: 5 },
            { id: 'wra-opt-3', text: 'Do 5x WRA 3,4~D', detail: 'Stay in stance', type: 'counter', target: 5 },
            { id: 'wra-opt-4', text: 'Do 5x WRA 1+3', detail: 'Unbreakable grab', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Collapsible title="Heaven's Wrath Quick Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Purpose</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>WRA 1,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Homing, confirmable, SEN trans</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WRA 2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                <td style={{ padding: '8px' }}>Safe heat engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WRA 3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i28</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>Plus on block, chip, loop</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WRA 3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i18</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>0</td>
                <td style={{ padding: '8px' }}>Chip damage, spike</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WRA 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ padding: '8px' }}>Power crush</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WRA 1+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Unbreakable grab</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>WRA 4,2,2,1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-20</td>
                <td style={{ padding: '8px' }}>CH only string</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
