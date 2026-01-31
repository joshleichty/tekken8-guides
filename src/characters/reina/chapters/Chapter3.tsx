import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  StanceBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Sentai Pressure"
      intro="Sentai is where Reina lives. This isn't a stance to visit—it's your home base. Every option here serves a purpose, and together they create an offense that feels inescapable."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Heaven's Wrath"
    >
      <Section title="Entering Sentai">
        <p>
          You already know f,f+2~F gets you into Sentai. But there are other ways in—each with 
          different frame advantages that change your options.
        </p>

        <StanceBox name="Sentai Stance" input="f+3 (manual entry)" icon="⚡">
          <p>
            Sentai can be entered manually with <code>f+3</code>, but you'll almost never do this in 
            neutral. Instead, you'll flow into it through moves.
          </p>
        </StanceBox>

        <KeyConcept title="Your Main Sentai Entries" icon="🚪">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Entry</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Use When</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>f,f+2~F</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+2</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+13</td>
                <td style={{ padding: '8px' }}>Main approach, always good</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-17</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+11</td>
                <td style={{ padding: '8px' }}>10f punish, only on hit!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1~F</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ padding: '8px' }}>Mid poke entry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+2,3~F</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+9</td>
                <td style={{ padding: '8px' }}>String pressure</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+13</td>
                <td style={{ padding: '8px' }}>13f while standing punish</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="warning" title="The 1,1,2 Trap">
          1,1,2 is <strong>-17 on block</strong>—launch punishable. Only complete the string on HIT. 
          If they block 1,1, don't press 2. The transition only helps you on hit.
        </TipBox>
      </Section>

      <Section title="SEN 3 — Your Fast Pressure Tool">
        <MoveCard character="reina"
          videoId="SEN.3"
          move={{
            input: 'SEN 3',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i12~13',
            onBlock: '+1',
            onHit: '+7',
            tags: ['High', 'Heat Engager', 'Homing', 'Plus on Block', 'Chip Damage'],
            description: 'Your fastest Sentai option. Homing, chip damage, heat engager, and STILL plus on block.',
            notes: ['Guaranteed after f,f+2 on hit', '+1 on block lets you continue pressure', 'Deals chip damage']
          }}
          showVideo
        />

        <p>
          SEN 3 is the move that makes your pressure feel endless. It's <strong>plus on block</strong>, 
          which is insane for a 12-frame option. After SEN 3 on block, you can:
        </p>

        <ul>
          <li>Jab to keep pressure</li>
          <li>df+1 for a mid check</li>
          <li>f,f+2 to restart the loop</li>
          <li>Back off and reset to neutral</li>
        </ul>

        <KeyConcept title="When to Use SEN 3" icon="✅">
          <ul>
            <li><strong>After f,f+2 hit</strong> — Free guaranteed heat engager</li>
            <li><strong>When you're plus and they stand</strong> — Chip damage + keep turn</li>
            <li><strong>To beat sidestepping</strong> — It's homing</li>
            <li><strong>To activate heat</strong> — Sometimes you just want heat</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="SEN 4 — The Mid Check">
        <MoveCard character="reina"
          videoId="SEN.4"
          move={{
            input: 'SEN 4',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i26~27',
            onBlock: '+4',
            onHit: '+12d',
            tags: ['Mid', 'Plus on Block', 'Chip Damage', 'Low Crush'],
            description: 'Slower mid that\'s +4 on block. Huge reward for catching crouchers or ducking opponents.',
            notes: ['Spike on hit', '+4 gives you strong follow-up options', 'Low crushes (8~16)']
          }}
          showVideo
        />

        <p>
          SEN 4 is your answer to people who duck SEN 3. It's slower, but +4 on block means 
          you get even MORE advantage. And on hit, you get a spike that sets up oki.
        </p>

        <KeyConcept title="The SEN 3 vs SEN 4 Mixup" icon="🎭">
          <ul>
            <li><strong>They stand block</strong> → SEN 3 (fast, chip, +1)</li>
            <li><strong>They crouch</strong> → SEN 4 (mid hits, +4)</li>
            <li><strong>They mash</strong> → Either one beats slow options</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This high/mid mixup is your bread and butter in Sentai.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="After SEN 4 on Block">
          At +4, your df+1 (i13) beats their jab (i10). You can also f,f+2 which becomes 
          effectively i10. SEN 4 on block is a HUGE advantage situation.
        </TipBox>
      </Section>

      <Section title="SEN 2 — The Tornado">
        <MoveCard character="reina"
          videoId="SEN.2"
          move={{
            input: 'SEN 2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i13',
            onBlock: '-4',
            onHit: '+8 (Tornado)',
            tags: ['Mid', 'Tornado', 'Safe', 'WRA Transition'],
            description: 'Fast mid that causes Tornado on hit. Transitions to Heaven\'s Wrath with D. Safe at -4.',
            notes: ['Tornado on hit (combo extension)', 'Hold D to go into Heaven\'s Wrath', '-4 means opponent can\'t launch you']
          }}
          showVideo
        />

        <p>
          SEN 2 is your "I need a safe mid right now" option. It's fast (i13), safe (-4), and 
          if it hits, you get Tornado for combo extension. It also transitions to Heaven's Wrath 
          if you hold down.
        </p>

        <KeyConcept title="When to Use SEN 2" icon="💥">
          <ul>
            <li><strong>When you want a fast mid</strong> — i13 beats most retaliations</li>
            <li><strong>In combos</strong> — Tornado property extends combos</li>
            <li><strong>To transition to WRA</strong> — Hold D to flow into Heaven's Wrath</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="SEN 1+2 — The Heaven's Wrath Gateway">
        <MoveCard character="reina"
          videoId="SEN.1+2"
          move={{
            input: 'SEN 1+2',
            hitLevel: ['m', 'm'],
            damage: '13, 17',
            startup: 'i14~15',
            onBlock: '-6 (WRA)',
            onHit: '+31a (Tornado)',
            tags: ['Mid', 'Mid', 'Tornado', 'WRA Transition', 'Safe'],
            description: 'Mid-mid string that transitions to Heaven\'s Wrath. Tornado launch on hit. Safe at -6.',
            notes: ['Automatically goes to Heaven\'s Wrath', 'Tornado on hit for combos', 'In heat, has auto-parry properties']
          }}
          showVideo
        />

        <p>
          SEN 1+2 is your <strong>power mid option</strong>. It's a mid-mid that transitions to 
          Heaven's Wrath stance and gives a Tornado on hit. In heat, it gains auto-parry properties.
        </p>

        <TipBox variant="tip" title="The Heat Parry">
          In heat, SEN 1+2 automatically parries any mid or high that hits you during the move. 
          This makes it much safer to throw out when in heat mode.
        </TipBox>
      </Section>

      <Section title="SEN 1,2 — The Power Crush">
        <MoveCard character="reina"
          videoId="SEN.1,2"
          move={{
            input: 'SEN 1,2',
            hitLevel: ['m', 'm'],
            damage: '12, 25',
            startup: 'i16',
            onBlock: '-16',
            onHit: '+21a',
            tags: ['Mid', 'Mid', 'Power Crush', 'Confirmable', 'Unsafe'],
            description: 'Power crush from Sentai. First hit armors. Hit-confirmable. -16 on block—only on hit!',
            notes: ['First hit has power crush 6~15', 'Can delay and hit-confirm the second hit', 'Blue spark with qcf+2 for +5 damage']
          }}
          showVideo
        />

        <p>
          SEN 1,2 is your power crush. The first hit absorbs attacks, and you can <strong>hit confirm</strong> 
          into the second hit. If they block the first hit, don't press 2.
        </p>

        <KeyConcept title="When to Use Power Crush" icon="🛡️">
          <ul>
            <li><strong>When you expect them to press</strong> — Armor through their attack</li>
            <li><strong>After they've shown impatience</strong> — Conditioned opponents mash</li>
            <li><strong>NEVER spam this</strong> — -16 on block is launch punishable</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Hit Confirm or Die">
          SEN 1,2 is LAUNCH PUNISHABLE. Only complete the string if the first hit connects. 
          Practice the hit confirm—delay the 2, watch for the hit, then press it.
        </TipBox>
      </Section>

      <Section title="SEN 3+4 — The Low">
        <MoveCard character="reina"
          videoId="SEN.3+4"
          move={{
            input: 'SEN 3+4',
            hitLevel: ['l', 'h'],
            damage: '10, 12',
            startup: 'i20~21',
            onBlock: '-29/-11',
            onHit: '+4',
            tags: ['Low', 'High', 'Homing', 'High Crush', 'Risky'],
            description: 'Your only Sentai low. Low-high string. -29 if first hit blocked, -11 if second blocked.',
            notes: ['Homing', 'High crushes frames 10~34', 'Stagger on first hit block', '+4 on hit']
          }}
          showVideo
        />

        <p>
          SEN 3+4 is your <strong>only low option</strong> from Sentai. It's risky—the first hit is 
          launch punishable if blocked. But it exists to keep them honest.
        </p>

        <KeyConcept title="The Low Problem (Reina's Weakness)" icon="⚠️">
          <p>
            Reina's lows are weak. This is her primary weakness. SEN 3+4 is slow, risky, and 
            does low damage. You use it sparingly to:
          </p>
          <ul>
            <li>Punish over-aggressive stand blocking</li>
            <li>Chip out rounds when they have low health</li>
            <li>Condition them to crouch (so your mids hit)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="danger" title="Use Sparingly">
          -29 on block is horrific. One blocked SEN 3+4 can lose you the round. Only use this 
          when you've conditioned them to stand block everything.
        </TipBox>
      </Section>

      <Section title="SEN Grabs — The Unbreakable Throw">
        <MoveCard character="reina"
          videoId="SEN.1+3"
          move={{
            input: 'SEN 1+3 or 2+4',
            hitLevel: ['th(h)'],
            damage: '12',
            startup: 'i16',
            onBlock: '-3',
            onHit: '+0 (knockdown)',
            tags: ['Throw', 'Unbreakable', 'High'],
            description: 'Unbreakable throw from Sentai. Low damage but cannot be escaped—only ducked.',
            notes: ['Both inputs work the same', 'Opponent is FUFA on hit', 'Only counter is ducking']
          }}
          showVideo
        />

        <p>
          Sentai's throw is <strong>unbreakable</strong>. Your opponent can't tech it—their only 
          option is to duck. This is why stand-blocking Reina is scary.
        </p>

        <Flowchart 
          title="The Sentai Triangle"
          nodes={[
            { type: 'start', label: 'Enter Sentai (+2 or better)' },
            { type: 'decision', label: 'What is opponent doing?', branches: [
              { label: 'Standing', action: 'SEN 3 (chip) or SEN grab (unbreakable)' },
              { label: 'Crouching', action: 'SEN 4 or SEN 2 or SEN 1+2' },
              { label: 'Pressing', action: 'SEN 1,2 (armor) or just SEN 3 (faster)' }
            ]},
            { type: 'end', label: 'Continue pressure or confirm into combo' }
          ]}
        />
      </Section>

      <Section title="Practice: Master Sentai">
        <PracticeBox
          title="Sentai Option Drill"
          setup="Set opponent to Guard All. Enter Sentai via f,f+2~F."
          tasks={[
            { id: 'sen-3', text: 'Do 10x f,f+2~F → SEN 3', detail: 'Your fast pressure option', type: 'counter', target: 10 },
            { id: 'sen-4', text: 'Do 10x f,f+2~F → SEN 4', detail: 'Your plus-on-block mid', type: 'counter', target: 10 },
            { id: 'sen-2', text: 'Do 10x f,f+2~F → SEN 2', detail: 'Your safe mid', type: 'counter', target: 10 },
            { id: 'sen-grab', text: 'Do 5x f,f+2~F → SEN 1+3', detail: 'Your unbreakable throw', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="SEN 1,2 Hit Confirm"
          setup="Set opponent to Random Guard."
          tasks={[
            { id: 'pc-1', text: 'Complete SEN 1,2 only on HIT 5 times', detail: 'Do not complete on block!', type: 'counter', target: 5 },
            { id: 'pc-2', text: 'Stop at SEN 1 on BLOCK 5 times', detail: 'You must recognize the block', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Collapsible title="Sentai Quick Reference" icon="📋" defaultOpen>
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
                <td style={{ padding: '8px' }}><code>SEN 3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+1</td>
                <td style={{ padding: '8px' }}>Fast high, heat engager, chip</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i26</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ padding: '8px' }}>Plus mid, catch duckers</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-4</td>
                <td style={{ padding: '8px' }}>Safe mid, tornado, WRA trans</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i14</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ padding: '8px' }}>Power mid, tornado, WRA trans</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-16</td>
                <td style={{ padding: '8px' }}>Power crush, hit-confirm only!</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-29</td>
                <td style={{ padding: '8px' }}>Low, very risky</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 1+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i16</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>-3</td>
                <td style={{ padding: '8px' }}>Unbreakable throw</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
