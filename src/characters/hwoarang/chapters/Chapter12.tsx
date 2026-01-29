import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Defense & Panic Moves"
      intro="This is Hwoarang's weakness. He doesn't have great panic moves or defensive tools. Understanding what you DO have — and playing to avoid needing defense — is crucial."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Complete Hwoarang"
    >
      <Section title="The Hard Truth">
        <KeyConcept title="Hwoarang's Defensive Weakness" icon="⚠️">
          <p>
            Hwoarang is designed to attack. His defensive tools are weak compared to 
            characters like Jin, Steve, or Alisa. You will get opened up. You will 
            get pressure. Your goal is to minimize these situations and maximize offense.
          </p>
        </KeyConcept>

        <p>
          The best defense for Hwoarang is not getting hit in the first place. This means:
        </p>

        <ul>
          <li>Strong movement to avoid attacks</li>
          <li>Good reads to interrupt their pressure</li>
          <li>Knowing when to give up your turn</li>
          <li>Using what panic options you DO have correctly</li>
        </ul>
      </Section>

      <Section title="Power Crush Options">
        <MoveCard character="hwoarang"
          move={{
            input: 'df+3,4',
            hitLevel: ['m', 'm'],
            damage: '12, 20',
            startup: 'i22-23',
            onBlock: '-14',
            onHit: '+4a',
            tags: ['Mid', 'Mid', 'Power Crush', 'Hit Confirmable'],
            description: 'Your main power crush. Can be delayed and hit confirmed. -14 on block.',
          }}
          showVideo
        />

        <p>
          df+3,4 is your primary power crush. It absorbs mids and highs, letting you armor 
          through pressure. The key is that it's <span className="highlight">hit confirmable</span> — 
          you can do df+3, watch for the hit, and then press 4.
        </p>

        <KeyConcept title="df+3,4 Properties" icon="🛡️">
          <ul>
            <li><strong>Power Crush frames 7-21</strong> — Absorbs mids and highs</li>
            <li><strong>-14 on block</strong> — Punishable but not launch punishable</li>
            <li><strong>-9 if absorbed</strong> — Safer when you actually crush an attack</li>
            <li><strong>Hit confirmable</strong> — Stop at df+3 if blocked</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Absorb = Safer">
          When df+3,4 absorbs an attack (you see the power crush effect), it becomes only 
          -6 on block with pushback. This makes it basically safe if you actually used it 
          correctly as a panic option.
        </TipBox>

        <MoveCard character="hwoarang"
          move={{
            input: 'RFF.3~4',
            hitLevel: ['h'],
            damage: '27',
            startup: 'i27-30',
            onBlock: '+4 to +7',
            onHit: '+46a to +49a (Tornado)',
            tags: ['High', 'Power Crush', 'Plus on Block', 'Homing'],
            description: 'Backlash. Power crush high that\'s PLUS on block. Homing.',
          }}
          showVideo
        />

        <p>
          Backlash (RFF 3~4) is a <span className="highlight">power crush that's plus on block</span>. 
          It's slow and high, but if they don't duck, you're +4 to +7 on block and can continue 
          pressure. It's also a combo ender with Tornado.
        </p>

        <TipBox variant="warning" title="Backlash is High">
          If they duck Backlash, you get launched. Use it when you're in RFF and they're 
          pressing buttons, not as a random panic move from neutral.
        </TipBox>

        <MoveCard character="hwoarang"
          move={{
            input: 'LFS.b+3',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i20-22',
            onBlock: '-12 (-8 absorbed)',
            onHit: '+14',
            tags: ['Mid', 'Power Crush', 'RFF.Transition', 'LFS.Only'],
            description: 'Power crush from LFS. Transitions to RFF.',
          }}
          showVideo
        />

        <MoveCard character="hwoarang"
          move={{
            input: 'RFS.b+4',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i20-22',
            onBlock: '-12 (-8 absorbed)',
            onHit: '+14g',
            tags: ['Mid', 'Power Crush', 'RFS.Only'],
            description: 'Power crush from RFS. Same as LFS version.',
          }}
          showVideo
        />
      </Section>

      <Section title="Evasive Options">
        <MoveCard character="hwoarang"
          move={{
            input: 'b+1',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i15',
            onBlock: '-14',
            onHit: '-1',
            tags: ['Mid', 'Evasive', 'Sidestep Right'],
            description: 'Fast evasive mid. Sidesteps right during startup. -14 on block.',
          }}
          showVideo
        />

        <p>
          b+1 is your <span className="highlight">panic move</span>. It has built-in sidestep right 
          during startup, evading many linear attacks. At i15, it's fast enough to challenge 
          plus frames.
        </p>

        <KeyConcept title="b+1 Usage" icon="🎯">
          <ul>
            <li><strong>Interrupt linear strings</strong> — Steps right, then hits</li>
            <li><strong>Check opponents</strong> — When you're slightly minus</li>
            <li><strong>Panic button</strong> — When you need to get out</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="b+1 Weaknesses">
          <ul>
            <li>-14 on block — Punishable</li>
            <li>-1 on hit — You don't get your turn back</li>
            <li>Evasion nerfed in T8 — Less reliable than before</li>
            <li>Homing moves beat it — Can't evade everything</li>
          </ul>
        </TipBox>

        <MoveCard character="hwoarang"
          move={{
            input: 'b+2',
            hitLevel: ['h'],
            damage: '18',
            startup: 'i14',
            onBlock: '-4',
            onHit: '+6',
            onCH: '+14c',
            tags: ['High', 'Homing', 'Safe', 'Evasive'],
            description: 'Homing high. Tracks both directions. Plus on CH.',
          }}
          showVideo
        />

        <p>
          b+2 is a <span className="highlight">homing move</span> that tracks both directions. 
          Use it when opponents try to sidestep your offense. It's safe at -4 and gives +14 
          on counter-hit (guaranteed follow-up).
        </p>

        <KeyConcept title="b+1 vs b+2" icon="🔄">
          <ul>
            <li><strong>b+1</strong> — Evades to the right, mid, -14 on block</li>
            <li><strong>b+2</strong> — Homing, high (can be ducked), -4 on block</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            b+1 evades to one side, b+2 tracks both. Know which linear direction your 
            opponent is weak to and use the appropriate option.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Low Crush Options">
        <MoveCard character="hwoarang"
          move={{
            input: 'u+3+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i25-26',
            onBlock: '-7',
            onHit: '+24a (Launcher)',
            tags: ['Mid', 'Launcher', 'Low Crush', 'Safe'],
            description: 'Orbital/hopkick. Low crushes. Safe launcher.',
          }}
          showVideo
        />

        <p>
          u+3+4 is your <span className="highlight">low crush launcher</span>. When you read a low, 
          this jumps over it and launches for a full combo. At -7, it's safe on block.
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'uf+3+4',
            hitLevel: ['m', 'h'],
            damage: '10, 8',
            startup: 'i14',
            onBlock: '-10',
            onHit: '+1',
            tags: ['Mid', 'High', 'Low Crush', 'LFS.Transition'],
            description: 'Double kick. Low crushes. Can transition to LFS.',
          }}
          showVideo
        />

        <p>
          uf+3+4 is a faster low crush option. It doesn't launch but it's quicker and 
          transitions to LFS with <code>~f</code>. Use it when you expect a fast low 
          like d+1.
        </p>
      </Section>

      <Section title="High Crush Options">
        <MoveCard character="hwoarang"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i19',
            onBlock: '-13',
            onHit: '-1',
            onCH: '+17g',
            tags: ['Low', 'High Crush'],
            description: 'High crushing low. Goes under jabs and highs.',
          }}
          showVideo
        />

        <p>
          db+3 is your <span className="highlight">high crush low</span>. It ducks under high attacks 
          and hits them. Use it when you predict a jab or high string.
        </p>

        <MoveCard character="hwoarang"
          move={{
            input: 'd+3+4',
            hitLevel: ['l'],
            damage: '18',
            startup: 'i21-22',
            onBlock: '-14',
            onHit: '+6 (LFS)',
            tags: ['Low', 'High Crush', 'Homing', 'LFS.Transition'],
            description: 'Homing low that high crushes. Goes to LFS on hit.',
          }}
          showVideo
        />

        <p>
          d+3+4 is a homing high-crush low. It tracks sidesteps AND goes under highs. 
          On hit, you transition to LFS with advantage.
        </p>
      </Section>

      <Section title="Parry">
        <MoveCard character="hwoarang"
          move={{
            input: 'b+1+3',
            hitLevel: ['parry'],
            damage: '0 (enables counter)',
            startup: 'i5-12',
            onBlock: 'N/A',
            onHit: '+9',
            tags: ['Parry', 'High/Mid Punches Only'],
            description: 'Punch parry. Only parries punches (not kicks). Press 4 for counter.',
          }}
          showVideo
        />

        <p>
          Hwoarang's parry only works on <strong>punches</strong> (not kicks). This limits its 
          usefulness, but against characters with punch-heavy offense, it can be a surprise tool.
        </p>

        <KeyConcept title="Parry Usage" icon="🛡️">
          <ul>
            <li><strong>Works on:</strong> Jabs, punch strings, some mids that are punches</li>
            <li><strong>Fails on:</strong> All kicks, most mids, lows</li>
            <li><strong>On success:</strong> Press 4 for guaranteed Shotgun Shuffle counter</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Limited Use">
          Because it only parries punches, this move is very situational. Use it against 
          characters like Nina, Lee, or during jab pressure. Don't rely on it as a 
          general defensive tool.
        </TipBox>
      </Section>

      <Section title="Movement as Defense">
        <KeyConcept title="Movement Is Your Best Defense" icon="🏃">
          <p>
            Since Hwoarang's panic moves are weak, your movement becomes critical:
          </p>
          <ul style={{ marginTop: '12px' }}>
            <li><strong>Backdash</strong> — Create space, make moves whiff</li>
            <li><strong>Sidestep</strong> — Evade linear attacks, punish with b+3</li>
            <li><strong>Sidewalk</strong> — Extended evasion for slower attacks</li>
            <li><strong>Crouch</strong> — Duck predictable highs</li>
          </ul>
        </KeyConcept>

        <p>
          <strong>The Best Defense:</strong> Don't get into situations where you need 
          panic moves. Outspace opponents, whiff punish with b+3, and take your turn back 
          through movement rather than mashing.
        </p>
      </Section>

      <Section title="Defensive Mindset">
        <KeyConcept title="Hwoarang's Defensive Philosophy" icon="🧠">
          <ol>
            <li><strong>Don't panic</strong> — Mashing will get you killed</li>
            <li><strong>Block and wait</strong> — Their pressure will have gaps</li>
            <li><strong>Use power crush sparingly</strong> — It's -14, not free</li>
            <li><strong>Movement first</strong> — Backdash beats more than df+3,4</li>
            <li><strong>Take the throw</strong> — Sometimes eating a throw is better than guessing wrong</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Play to Your Strengths">
          Your goal isn't to win on defense. It's to survive defense and get back to offense. 
          Block patiently, find the gap, then d+3,4 → RFS → obliterate them.
        </TipBox>
      </Section>

      <Collapsible title="Defensive Option Quick Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Best Option</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Risk</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>They're pressuring with strings</td>
                <td style={{ padding: '8px' }}>df+3,4 (power crush)</td>
                <td style={{ padding: '8px' }}>-14 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>They're using linear attacks</td>
                <td style={{ padding: '8px' }}>b+1 (evasive)</td>
                <td style={{ padding: '8px' }}>-14 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>They're sidestepping</td>
                <td style={{ padding: '8px' }}>b+2 (homing)</td>
                <td style={{ padding: '8px' }}>High, can be ducked</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>They're using lows</td>
                <td style={{ padding: '8px' }}>u+3+4 (low crush)</td>
                <td style={{ padding: '8px' }}>-7 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>They're using highs</td>
                <td style={{ padding: '8px' }}>db+3 or duck</td>
                <td style={{ padding: '8px' }}>-13 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>You're in RFF, they're pressing</td>
                <td style={{ padding: '8px' }}>RFF 3~4 (Backlash)</td>
                <td style={{ padding: '8px' }}>High, can be ducked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
