import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Heat System"
      intro="Lars in heat is a different animal. His stances become enhanced, he gains a new approach tool, and his Limited Entry mixup becomes truly devastating. Understanding when and how to use heat is the difference between good damage and obscene damage."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Defense & Movement"
    >
      <Section title="Lars' Heat Identity">
        <p>
          Lars' heat system is built around one principle: <strong>make his stances even more 
          terrifying</strong>. In heat, LEN 1 becomes an attack throw, LEN 2 becomes a tornado 
          launcher, and he gains a brand new move that gives plus frames into SEN.
        </p>

        <KeyConcept title="What Changes in Heat" icon="🔥">
          <ul>
            <li><strong>H.f+3+4 (Rebellion)</strong> — New move: +5 into SEN. Your heat pressure starter.</li>
            <li><strong>H.LEN 1</strong> — Enhanced low becomes an attack throw for more damage</li>
            <li><strong>H.LEN 2</strong> — Enhanced mid becomes an instant tornado for a full combo</li>
            <li><strong>H.DEN 3+4 (Heat Stomp)</strong> — Low stomp with lightning strike, only -1 into SEN on BLOCK</li>
            <li><strong>H.SS 2</strong> — Enhanced sidestep becomes +6 on block with thunderstrike</li>
            <li><strong>Heat regeneration</strong> — Stance transitions regenerate heat gauge</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Engagers">
        <p>
          You need to activate heat first. Here are your main heat engagers:
        </p>

        <KeyConcept title="How to Activate Heat" icon="🔥">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Move</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Priority</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>1,1,1</code></td>
                <td style={{ padding: '8px' }}>Jab CH confirm, wall splat</td>
                <td style={{ padding: '8px', color: 'var(--success)' }}>High — fast, confirmable</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3+4</code></td>
                <td style={{ padding: '8px' }}>Neutral, pushback punish</td>
                <td style={{ padding: '8px', color: 'var(--success)' }}>High — long range mid</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>SEN 1</code></td>
                <td style={{ padding: '8px' }}>From stance pressure</td>
                <td style={{ padding: '8px', color: 'var(--success)' }}>High — safe mid from SEN</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DEN 3</code></td>
                <td style={{ padding: '8px' }}>Approach from neutral</td>
                <td style={{ padding: '8px', color: 'var(--success)' }}>High — homing approach</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DEN 1,2</code></td>
                <td style={{ padding: '8px' }}>Fast stance option</td>
                <td style={{ padding: '8px' }}>Medium — jails but high-high</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="Rebellion (H.f+3+4)">
        <MoveCard character="lars"
          videoId="H.f+3+4"
          move={{
            input: 'H.f+3+4',
            hitLevel: ['sm'],
            damage: '5',
            startup: 'i18~24',
            onBlock: '+5',
            onHit: '+10',
            tags: ['Heat Only', 'Special Mid', '+5 on Block', 'SEN Transition'],
            description: 'Heat-only approach move. +5 into SEN on block. Power crush. Microscopic damage but insane pressure value.',
            notes: ['+5 into SEN on block = DEN 3 on steroids', 'Power crush from frame 6', 'Only deals recoverable damage', 'Uses heat gauge partially']
          }}
          showVideo
        />

        <KeyConcept title="Rebellion Is Your Heat Pressure Starter" icon="⚡">
          <p>
            Think of Rebellion as a better DEN 3 that costs heat. +5 into SEN with power 
            crush properties. After Rebellion on block:
          </p>
          <ul>
            <li><code>SEN 1</code> is a frame trap (i12 from +5 = beats their jab)</li>
            <li><code>SEN 2</code> (low) for damage</li>
            <li><code>SEN 4</code> for homing</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            You can use about 3 Rebellions before your heat runs out. 
            Use them to maintain relentless pressure.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Heat Stomp (H.DEN 3+4)">
        <MoveCard character="lars"
          videoId="H.DEN.3+4"
          move={{
            input: 'H.DEN 3+4',
            hitLevel: ['l', 'sm'],
            damage: '11, 10',
            startup: 'i22~23',
            onBlock: '-14',
            onHit: '+21d',
            tags: ['Heat Only', 'Low', 'SEN Transition', 'Broken'],
            description: 'The move that might be the most controversial in Lars\' kit. A low stomp with a follow-up lightning strike. Hold F to enter SEN at -7 on block... or -1 in certain situations. A low that\'s YOUR TURN on block.',
            notes: ['Hold F to enter SEN at effectively -1', 'Lightning strike hits as Lars recovers', 'On hit: +34d with SEN transition', 'Uses heat gauge']
          }}
          showVideo
        />

        <KeyConcept title="Why This Is Broken" icon="💀">
          <p>
            In Tekken, when you block a low, you should get to punish. But H.DEN 3+4 into 
            SEN transition means Lars is only -1 after you block his low. You blocked his low 
            and you STILL have to take a mixup. This is unprecedented.
          </p>
          <p style={{ marginTop: '12px' }}>
            After the heat stomp on block into SEN:
          </p>
          <ul>
            <li>SEN 1+2 (power crush) beats pressing</li>
            <li>SEN 4 (homing high) catches sidesteps</li>
            <li>SEN 2 (low) for more damage</li>
            <li>SEN 3 (launcher) for hard reads on duckers</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Costs Heat">
          Both Rebellion and Heat Stomp consume heat gauge. Don't spam them mindlessly. 
          Use them purposefully — Rebellion to start pressure, Heat Stomp when you want the 
          low option in DEN that leads to more pressure.
        </TipBox>
      </Section>

      <Section title="Enhanced LEN (Heat)">
        <MoveCard character="lars"
          videoId="H.LEN.1"
          move={{
            input: 'H.LEN 1',
            hitLevel: ['l', 't'],
            damage: '20, 15',
            startup: 'i16~17',
            onBlock: '-12c',
            onHit: '+5',
            tags: ['Heat Only', 'Low', 'Attack Throw', 'Enhanced'],
            description: 'Enhanced LEN 1 in heat. The low becomes an attack throw for 35 total damage with a side switch.',
            notes: ['35 total damage (20 + 15 throw)', 'Side switch on hit', 'Same -12 on block as normal LEN 1', '6 chip damage on block']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="H.LEN.2"
          move={{
            input: 'H.LEN 2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16~17',
            onBlock: '-9',
            onHit: '+65a (+49)',
            tags: ['Heat Only', 'Mid', 'Tornado', 'Full Combo', 'Enhanced'],
            description: 'Enhanced LEN 2 in heat. The mid becomes an INSTANT TORNADO for a full combo. This is why heat + LEN is terrifying.',
            notes: ['Instant tornado = full combo on hit', 'Same safe -9 on block', '9 chip damage on block', 'The best reason to be in heat']
          }}
          showVideo
        />

        <KeyConcept title="Heat LEN = The Ultimate 50/50" icon="🎰">
          <p>
            In heat, the 2,1 → LEN mixup on hit becomes:
          </p>
          <ul>
            <li><strong>H.LEN 1 (low)</strong> → 35 damage attack throw with side switch</li>
            <li><strong>H.LEN 2 (mid)</strong> → Tornado into full combo for 60-80+ damage</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Both from a 10-frame punish. Block a -10 move → 2,1 → choose. 
            If they guess wrong on the mid, they lose 80%+ of their health.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Enhanced SS 2 (Heat)">
        <MoveCard character="lars"
          videoId="H.SS.2"
          move={{
            input: 'H.SS 2',
            hitLevel: ['m', 'sm'],
            damage: '20, 10',
            startup: 'i16~17',
            onBlock: '+6c',
            onHit: '+27d',
            tags: ['Heat Only', 'Sidestep', 'Mid', '+6 on Block'],
            description: 'Enhanced sidestep 2 in heat. Gets a thunderstrike follow-up that makes it +6 on block. Incredible pressure tool.',
            notes: ['+6 on block = strong follow-up', 'Thunderstrike second hit', 'Uses heat gauge partially', 'Stops rage arts with df+1 follow-up']
          }}
          showVideo
        />
      </Section>

      <Section title="Heat Regeneration">
        <p>
          Lars has a unique heat property: <strong>stance transitions regenerate heat gauge</strong>.
        </p>

        <KeyConcept title="How Heat Regen Works" icon="♻️">
          <p>
            Every time Lars enters a stance (DEN, SEN, or LEN), he recovers a small amount 
            of heat gauge. This means the more you flow between stances, the longer your heat lasts.
          </p>
          <ul>
            <li><code>f+3</code> (enter DEN) = 30 frames of heat recovered</li>
            <li><code>SEN B</code> (back in SEN to DEN) = 30 frames recovered</li>
            <li><code>SEN D</code> (SEN to LEN) = 30 frames recovered</li>
            <li><code>df+2</code> (auto SEN) = 30 frames recovered</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            The more active you are in stances during heat, the more you can do before 
            heat expires. Passive play wastes heat. Aggressive stance flow extends it.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="lars"
          videoId="H.2+3"
          move={{
            input: 'Heat Smash',
            hitLevel: ['m', 'm'],
            damage: '55',
            startup: 'i18~19',
            onBlock: '+12c',
            onHit: '+0 / +81a',
            tags: ['Heat Smash', 'Plus on Block', 'DEN Transition'],
            description: 'Lars\' heat smash. +12c on block with DEN transition option. Consumes all remaining heat. Use to end heat with plus frames into more pressure.',
            notes: ['Transitions to DEN on block (+13c)', 'Hold B to cancel stance (+10c)', 'Spike on second hit', '7 chip damage on block']
          }}
          showVideo
        />

        <TipBox variant="tip" title="Heat Smash into Stance">
          Most heat smashes just end your heat. Lars' transitions into DEN on block at +13c, 
          meaning you can CONTINUE pressuring even after using your heat smash. This is 
          unique and incredibly powerful.
        </TipBox>
      </Section>

      <Section title="Practice: Heat Pressure">
        <PracticeBox
          title="Heat Activation Drill"
          setup="Set opponent to Guard All."
          tasks={[
            { id: 'heat-1', text: 'Activate heat with DEN 3 → heat dash combo', detail: 'Your most common heat activation', type: 'toggle' },
            { id: 'heat-2', text: 'Activate heat with 1,1,1 at the wall', detail: 'Wall splat heat engager', type: 'toggle' },
            { id: 'heat-3', text: 'In heat: do 2,1 → H.LEN 2 → full combo', detail: 'The devastating heat 50/50 mid option', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Heat Pressure Drill"
          setup="Activate heat first. Set opponent to Guard All."
          tasks={[
            { id: 'hpres-1', text: 'Do H.f+3+4 → SEN 1 five times', detail: 'Rebellion into frame trap', type: 'counter', target: 5 },
            { id: 'hpres-2', text: 'Enter DEN → H.DEN 3+4~F → SEN option', detail: 'Heat stomp into SEN pressure', type: 'toggle' },
            { id: 'hpres-3', text: 'Chain 3+ stance transitions and watch heat regen', detail: 'f+3 → F → D → f+3 etc. Watch the gauge.', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
