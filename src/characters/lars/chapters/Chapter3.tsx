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

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="The Stance Chain"
      intro="Lars has three stances, but they aren't separate — they're one continuous chain. Dynamic Entry flows into Silent Entry, which drops into Limited Entry. Understanding this chain is understanding Lars."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Stance Pressure"
    >
      <Section title="One Chain, Three Links">
        <p>
          Forget thinking of Lars' stances as three separate things. They're a <strong>chain</strong>:
        </p>

        <KeyConcept title="The Stance Chain" icon="🔗">
          <div style={{ textAlign: 'center', padding: '16px', fontSize: '1.2em' }}>
            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>DEN</span>
            <span style={{ color: 'var(--text-muted)', margin: '0 12px' }}>→ hold F →</span>
            <span style={{ color: 'var(--accent-secondary, var(--accent))', fontWeight: 700 }}>SEN</span>
            <span style={{ color: 'var(--text-muted)', margin: '0 12px' }}>→ hold D →</span>
            <span style={{ color: 'var(--success)', fontWeight: 700 }}>LEN</span>
          </div>
          <div style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '12px' }}>
            <strong>Dynamic Entry</strong> (the door) → <strong>Silent Entry</strong> (the arena) → <strong>Limited Entry</strong> (the kill zone)
          </div>
        </KeyConcept>

        <p>
          You enter DEN, hold forward to flow into SEN, hold down to drop into LEN. 
          Or you skip links entirely — many moves go directly into SEN or LEN. 
          The chain is flexible. The pressure is relentless.
        </p>
      </Section>

      <Section title="Dynamic Entry (DEN) — The Door">
        <StanceBox name="Dynamic Entry (DEN)" input="f+3" icon="⚡">
          <p>
            DEN is your entry point into the stance chain. You enter it manually with <code>f+3</code>, 
            or through various moves. From here you can attack, flow into SEN, or retreat.
          </p>
        </StanceBox>

        <KeyConcept title="How to Enter DEN" icon="🚪">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Entry Move</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>f+3</code> (manual)</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Direct entry, your main manual input</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+3~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-4</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+15</td>
                <td style={{ padding: '8px' }}>Hold D to enter DEN</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ff+4,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+11</td>
                <td style={{ padding: '8px' }}>Hellsweep → auto DEN. Risky low entry.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+1,1~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-2</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+10</td>
                <td style={{ padding: '8px' }}>df+1 extension → DEN (hold D)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+2~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-1</td>
                <td style={{ padding: '8px' }}>Hold D to enter DEN (retreats)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+1+2~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+11</td>
                <td style={{ padding: '8px' }}>Backsway mid → DEN (hold D)</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>Key DEN Moves</h3>

        <MoveCard character="lars"
          videoId="DEN.3"
          move={{
            input: 'DEN 3',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i22~23',
            onBlock: '+5',
            onHit: '+5',
            tags: ['Homing', 'Heat Engager', '+5 on Block', 'SEN Transition'],
            description: 'The door-opener. A homing mid that\'s PLUS on block and auto-transitions to SEN. This is how you start your stance pressure in neutral.',
            notes: ['+5 into SEN on block = strong pressure', 'Homing = catches sidesteps', 'Heat engager', 'Low crushes from frame 8']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="DEN.2"
          move={{
            input: 'DEN 2',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i17~19',
            onBlock: '-7',
            onHit: '+7',
            onCH: '+62a (Launch!)',
            tags: ['Mid', 'Safe', 'CH Launcher'],
            description: 'Safe mid from DEN that launches on counter-hit. If they press buttons in your stance, this destroys them.',
            notes: ['Counter-hit launcher', 'Safe at -7', 'Hold UF on hit for avalanche flip follow-up']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="DEN.1,2"
          move={{
            input: 'DEN 1,2',
            hitLevel: ['h', 'h'],
            damage: '14, 20',
            startup: 'i11~12',
            onBlock: '-6',
            onHit: '+47a (-11)',
            tags: ['Heat Engager', 'Fast', 'Jails'],
            description: 'Fast high-high heat engager from DEN. First hit jails into second. Your fastest DEN option.',
            notes: ['i11 = very fast out of stance', 'Jails on block (can\'t duck second hit if first blocked)', 'Heat engager on hit']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="DEN.1"
          move={{
            input: 'DEN 1',
            hitLevel: ['h'],
            damage: '14',
            startup: 'i11~12',
            onBlock: '+1',
            onHit: '+8',
            tags: ['Fast', 'Plus on Block', 'SEN Transition'],
            description: 'Long-range stance jab. +1 on block, +8 on hit. Can hold F to transition to SEN.',
            notes: ['Plus on block = your turn continues', 'Hold F to flow into SEN', 'Great for checking opponents or closing distance']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="DEN.4"
          move={{
            input: 'DEN 4',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i23~25',
            onBlock: '-12',
            onHit: '+1',
            tags: ['Low', 'LEN Transition'],
            description: 'Low stomp from DEN. Hold D to enter LEN for a mixup.',
            notes: ['Hold D to enter LEN', 'Adds a low threat to your stance game']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="DEN.3+4"
          move={{
            input: 'DEN 3+4',
            hitLevel: ['l'],
            damage: '21',
            startup: 'i22~23',
            onBlock: '-14',
            onHit: '-3',
            onCH: '+5',
            tags: ['Low', 'Storm', 'SEN Transition'],
            description: 'The Storm. Low sweep into SEN transition (hold F). Counter-hit gives advantage. Sets up ground game.',
            notes: ['Hold F to go into SEN', '-14 on block = punishable', 'Good for oki and ground pressure']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="DEN.1+2"
          move={{
            input: 'DEN 1+2',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i12~13',
            onBlock: '-10',
            onHit: '+63a (+47)',
            tags: ['Tornado', 'Launcher'],
            description: 'High tornado launcher from DEN. Mainly used in combos for tornado extension.',
            notes: ['Tornado on hit for combos', '-10 on block', 'Used in combo routes, not in neutral']
          }}
          showVideo
        />
      </Section>

      <Section title="Silent Entry (SEN) — The Arena">
        <StanceBox name="Silent Entry (SEN)" input="DEN → hold F" icon="🌀">
          <p>
            SEN is where the real action happens. Most of your stance pressure revolves around 
            SEN options. You enter it from DEN (hold forward), or through many moves.
          </p>
        </StanceBox>

        <KeyConcept title="How to Enter SEN" icon="🚪">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Entry Move</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>f+3 → hold F</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>—</td>
                <td style={{ padding: '8px' }}>Manual entry through DEN</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DEN 3</code> (auto)</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+5</td>
                <td style={{ padding: '8px' }}>Best SEN entry — homing + plus</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+2</code> (auto)</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-3</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+9</td>
                <td style={{ padding: '8px' }}>Fast mid poke → SEN (cancel with B)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+2,1</code> (auto)</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>12f punish → SEN (cancel with B)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>b+3~F</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+11</td>
                <td style={{ padding: '8px' }}>Mid poke → SEN (hold F)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+2~F</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>Mid poke → SEN (hold F)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+2~F</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-5</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px' }}>While standing → SEN (hold F)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>fff+1</code> (auto)</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+36a</td>
                <td style={{ padding: '8px' }}>Running high → SEN (cancel with B)</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>Key SEN Moves</h3>

        <MoveCard character="lars"
          videoId="SEN.1"
          move={{
            input: 'SEN 1',
            hitLevel: ['m'],
            damage: '26',
            startup: 'i12~13',
            onBlock: '-6',
            onHit: '+23a (+13)',
            tags: ['Heat Engager', 'Safe', 'Mid'],
            description: 'Safe mid heat engager. Your go-to when you want to activate heat or need a safe mid from stance.',
            notes: ['Safe at -6', 'Heat engager', 'Frame trap from DEN 3 on block (+5)']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="SEN.2"
          move={{
            input: 'SEN 2',
            hitLevel: ['l'],
            damage: '23',
            startup: 'i17~19',
            onBlock: '-12',
            onHit: '+6c',
            onCH: '+73a (+57)',
            tags: ['Low', 'Safe-ish', 'CH Tornado', 'Stance Low'],
            description: 'The best stance low in Lars\' kit. Only -12 on block. Gives +6c on hit into while standing options. Counter-hit tornado for a full combo.',
            notes: ['Best stance low at -12', '+6c on hit = crouch options', 'Counter-hit torpedo = full combo', 'High crush from frame 1']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="SEN.3"
          move={{
            input: 'SEN 3',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i14~16',
            onBlock: '-13',
            onHit: '+29a (+19)',
            tags: ['Mid', 'Launcher', 'Unsafe'],
            description: 'Launching mid from SEN. Full combo on hit but -13 on block. High risk, high reward.',
            notes: ['Full combo launcher', '-13 = punishable', 'Use when you have a hard read', 'Low crushes from frame 14']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="SEN.4"
          move={{
            input: 'SEN 4',
            hitLevel: ['h'],
            damage: '19',
            startup: 'i17~18',
            onBlock: '+4',
            onHit: '+31a',
            tags: ['High', 'Homing', '+4 on Block', 'Chip Damage'],
            description: 'Homing high from SEN. +4 on block with chip damage. Catches sidesteppers and keeps pressure going.',
            notes: ['Homing = catches sidesteps', '+4 on block = your turn continues', 'Chip damage', 'Strong aerial tailspin for combos']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="SEN.1+2"
          move={{
            input: 'SEN 1+2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i14~16',
            onBlock: '-14',
            onHit: '+20a (+13)',
            tags: ['Mid', 'Power Crush', 'Tornado', 'Unsafe'],
            description: 'Power crush mid from SEN. Absorbs attacks. Tornado on hit. Punishable at -14.',
            notes: ['Power crush from frame 6', 'Tornado on hit for combos', '-14 = launchable by some characters', 'Use when expecting them to press']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="SEN.3+4"
          move={{
            input: 'SEN 3+4',
            hitLevel: ['m', 'm'],
            damage: '22 (11)',
            startup: 'i13~14',
            onBlock: '+0c',
            onHit: '+22d (-13)',
            tags: ['Mid', 'Mid', '0 on Block', 'Floor Break', 'Chip Damage'],
            description: 'Double mid that\'s neutral on block and forces crouch. Great for floor breaks and setting up pressure.',
            notes: ['0 on block forces crouch', 'Floor breaks', 'Chip damage on block', 'Low crushes from frame 7']
          }}
          showVideo
        />
      </Section>

      <Section title="Limited Entry (LEN) — The Kill Zone">
        <StanceBox name="Limited Entry (LEN)" input="SEN → hold D" icon="💀">
          <p>
            LEN is Lars' simplest and most deadly stance. Two options: low or mid. 
            You already learned this from Chapter 1 with 2,1. Now you'll see 
            all the ways to get here.
          </p>
        </StanceBox>

        <KeyConcept title="How to Enter LEN" icon="🚪">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Entry Move</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Real Mixup?</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>2,1</code> (auto)</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-6</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+8</td>
                <td style={{ padding: '8px', color: 'var(--success)' }}>Yes on hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>db+1,3~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-31</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ padding: '8px', color: 'var(--danger)' }}>Fake (only +3 on hit)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>DEN 4~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px', color: 'var(--danger)' }}>Barely (need hard read)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+2,3~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-11</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px', color: 'var(--success)' }}>Yes-ish on hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ws+3~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+4</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+26a</td>
                <td style={{ padding: '8px', color: 'var(--success)' }}>Yes on block and hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1,4~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3</td>
                <td style={{ padding: '8px', color: 'var(--danger)' }}>Barely on hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>3~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-11</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+6</td>
                <td style={{ padding: '8px', color: 'var(--success)' }}>Yes on hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>FC 1+2~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-12</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>+3c</td>
                <td style={{ padding: '8px', color: 'var(--danger)' }}>Barely on hit</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="The Golden Rule of LEN">
          The LEN mixup is only <strong>truly real</strong> when you have +6 or more frames of 
          advantage. At +8 (from 2,1 hit), it's completely uninterruptable. At lower plus frames, 
          it becomes a knowledge check — your opponent CAN interrupt but needs to know to do so.
        </TipBox>
      </Section>

      <Section title="How Moves Chain Between Stances">
        <p>
          The real power of Lars is that stance transitions happen <strong>through moves</strong>. 
          You don't just enter a stance — you attack AND enter a stance simultaneously.
        </p>

        <KeyConcept title="The Transition Web" icon="🕸️">
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Into DEN:</h4>
          <ul>
            <li><code>f+3</code> (manual), <code>df+3~D</code>, <code>ff+4,2</code>, <code>db+1+2~D</code>, <code>df+1,1~D</code></li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>Into SEN:</h4>
          <ul>
            <li><code>DEN 3</code> (auto), <code>df+2</code> (auto), <code>f+2,1</code> (auto), <code>fff+1</code> (auto)</li>
            <li><code>b+3~F</code>, <code>db+2~F</code>, <code>ws+2~F</code>, <code>DEN 1~F</code></li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>Into LEN:</h4>
          <ul>
            <li><code>2,1</code> (auto), <code>ws+2,3~D</code>, <code>ws+3~D</code>, <code>DEN 4~D</code></li>
            <li><code>1,4~D</code>, <code>3~D</code>, <code>db+1,3~D</code>, <code>FC 1+2~D</code></li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Memorize — Feel">
          You don't need to memorize every transition. As you play, you'll naturally discover 
          which moves flow into which stances. The important thing is understanding the 
          PRINCIPLE: most of Lars' moves can connect to a stance, and stances connect to each other.
        </TipBox>
      </Section>

      <Section title="Practice: Flowing Through Stances">
        <PracticeBox
          title="The Manual Chain"
          setup="Go to Practice Mode. No opponent actions needed."
          tasks={[
            { id: 'chain-1', text: 'Enter DEN manually (f+3) ten times', detail: 'Get comfortable with the entry animation', type: 'counter', target: 10 },
            { id: 'chain-2', text: 'Flow DEN → SEN (f+3, hold F) ten times', detail: 'Hold forward after entering DEN', type: 'counter', target: 10 },
            { id: 'chain-3', text: 'Flow DEN → SEN → LEN (f+3, F, D) ten times', detail: 'The full chain: forward, forward, down', type: 'counter', target: 10 },
            { id: 'chain-4', text: 'Do a move from each stance in the chain', detail: 'f+3 → DEN 1 → hold F → SEN 2 → any follow-up', type: 'toggle' },
          ]}
        />

        <PracticeBox
          title="Move-to-Stance Transitions"
          setup="Set opponent to Guard All."
          tasks={[
            { id: 'trans-1', text: 'Do df+2 → SEN option five times', detail: 'df+2 auto-enters SEN. Try SEN 1 or SEN 2.', type: 'counter', target: 5 },
            { id: 'trans-2', text: 'Do b+3~F → SEN option five times', detail: 'Hold F after b+3 to enter SEN', type: 'counter', target: 5 },
            { id: 'trans-3', text: 'Do DEN 3 → SEN option five times', detail: 'DEN 3 auto-enters SEN at +5. Try SEN 1 for a frame trap.', type: 'counter', target: 5 },
            { id: 'trans-4', text: 'Do 2,1 → LEN option five times', detail: 'You know this one already. Low or mid.', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="The Flow Test">
          Can you do this sequence smoothly? <code>f+3 → DEN 3 → SEN 1</code>. 
          That's: enter DEN, do the homing mid approach, then the safe heat engager from SEN. 
          When this feels natural, you understand the chain.
        </TipBox>
      </Section>

      <Collapsible title="Stance Quick Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>DEN Options</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Block</th>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Purpose</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
              <tr><td style={{ padding: '6px' }}><code>DEN 1</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i11</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--success)' }}>+1</td><td style={{ padding: '6px' }}>Fast jab, SEN transition</td></tr>
              <tr><td style={{ padding: '6px' }}><code>DEN 1,2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i11</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-6</td><td style={{ padding: '6px' }}>Heat engager</td></tr>
              <tr><td style={{ padding: '6px' }}><code>DEN 2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i17</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-7</td><td style={{ padding: '6px' }}>Safe mid, CH launcher</td></tr>
              <tr><td style={{ padding: '6px' }}><code>DEN 3</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i22</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--success)' }}>+5</td><td style={{ padding: '6px' }}>Homing approach, SEN entry</td></tr>
              <tr><td style={{ padding: '6px' }}><code>DEN 4</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i23</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-12</td><td style={{ padding: '6px' }}>Low, LEN transition</td></tr>
              <tr><td style={{ padding: '6px' }}><code>DEN 3+4</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i22</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-14</td><td style={{ padding: '6px' }}>Storm low, SEN trans</td></tr>
              <tr><td style={{ padding: '6px' }}><code>DEN 1+2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i12</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-10</td><td style={{ padding: '6px' }}>Tornado (combos)</td></tr>
            </tbody>
          </table>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>SEN Options</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Block</th>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Purpose</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
              <tr><td style={{ padding: '6px' }}><code>SEN 1</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i12</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-6</td><td style={{ padding: '6px' }}>Safe mid, heat engager</td></tr>
              <tr><td style={{ padding: '6px' }}><code>SEN 2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i17</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-12</td><td style={{ padding: '6px' }}>Best stance low, CH tornado</td></tr>
              <tr><td style={{ padding: '6px' }}><code>SEN 3</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i14</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-13</td><td style={{ padding: '6px' }}>Launching mid (risky)</td></tr>
              <tr><td style={{ padding: '6px' }}><code>SEN 4</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i17</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--success)' }}>+4</td><td style={{ padding: '6px' }}>Homing high, chip, plus</td></tr>
              <tr><td style={{ padding: '6px' }}><code>SEN 1+2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i14</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-14</td><td style={{ padding: '6px' }}>Power crush, tornado</td></tr>
              <tr><td style={{ padding: '6px' }}><code>SEN 3+4</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i13</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--success)' }}>0c</td><td style={{ padding: '6px' }}>Neutral mid, floor break</td></tr>
            </tbody>
          </table>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>LEN Options</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Speed</th>
                <th style={{ textAlign: 'center', padding: '6px', color: 'var(--accent)' }}>Block</th>
                <th style={{ textAlign: 'left', padding: '6px', color: 'var(--accent)' }}>Purpose</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)', fontSize: '0.9em' }}>
              <tr><td style={{ padding: '6px' }}><code>LEN 1</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i16</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-12</td><td style={{ padding: '6px' }}>Low option (the 50/50)</td></tr>
              <tr><td style={{ padding: '6px' }}><code>LEN 2</code></td><td style={{ textAlign: 'center', padding: '6px' }}>i16</td><td style={{ textAlign: 'center', padding: '6px', color: 'var(--danger)' }}>-9</td><td style={{ padding: '6px' }}>Mid option (safe, chip, tornado in heat)</td></tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
