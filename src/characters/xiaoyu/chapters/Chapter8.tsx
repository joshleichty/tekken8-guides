import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard, 
  PracticeBox,
  KeyConcept,
  Collapsible,
  SituationCard
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Punishment"
      intro="Knowing what to do after you block a move is what separates intermediate players from good ones. Xiaoyu's punishment is decent — not the best, but she has tools at every speed that lead into her stance game."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Learn Wall Game & Oki"
    >
      <Section title="Standing Punishment">
        <KeyConcept title="Block Punishment Basics" icon="🛡️">
          <p>
            When you block a move, the frame advantage determines what you can punish with. Faster 
            punishers are safer but deal less damage. Xiaoyu's standing punishment is average — her 
            real strength is making opponents whiff and launching them.
          </p>
        </KeyConcept>

        <SubSection title="i10 — Jab Punish">
          <MoveCard character="xiaoyu"
            move={{
              input: '1,2',
              hitLevel: ['h', 'h'],
              damage: '5, 6',
              startup: 'i10',
              onBlock: '+1',
              onHit: '+7',
              tags: ['High', 'Punisher'],
              description: 'Your fastest punish. 11 damage total. Not great, but it\'s guaranteed. On hit you\'re +7 — use this to transition into your offense. Follow up with df+1 or ss4.',
              notes: [
                'Guaranteed at -10 or worse',
                '+7 on hit — your turn to attack',
                'Can do 1,d+2 for BT transition instead of 1,2',
                '1,d+2 transitions to BT for stance pressure'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="i12 — Twin Pistons">
          <MoveCard character="xiaoyu"
            move={{
              input: 'ws1+2,1+2',
              hitLevel: ['m', 'm'],
              damage: '10, 15',
              startup: 'i12',
              onBlock: '-13',
              onHit: '+3',
              tags: ['Mid', 'Punisher'],
              description: 'Actually a WS move, but mentioned here: your best i12 punish from standing is 2,1 (10+14 damage). For WS punishment at i12, ws1+2,1+2 gives 25 damage and is much better.',
              notes: [
                '2,1 from standing: 24 damage, -8 on block',
                'ws1+2,1+2 from crouching: 25 damage, -13 on block',
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="i13 — Hop Kick">
          <MoveCard character="xiaoyu"
            move={{
              input: 'df+2,1+2',
              hitLevel: ['m', 'm'],
              damage: '10, 20',
              startup: 'i13',
              onBlock: '-12',
              onHit: 'KND',
              tags: ['Mid', 'Punisher'],
              description: 'Your i13 standing punish. 30 damage with knockdown. The knockdown gives you oki (okizeme/wakeup pressure). Solid option.',
              notes: [
                '30 damage with knockdown',
                '-12 on block',
                'Knockdown gives oki setup',
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="i14 — Standing 3 (Launcher)">
          <MoveCard character="xiaoyu"
            move={{
              input: '3',
              hitLevel: ['h'],
              damage: '17',
              startup: 'i14',
              onBlock: '-11',
              onHit: '+22a',
              tags: ['High', 'Launcher', 'Punisher'],
              description: 'Your i14 launcher. Being a high, it can whiff against lows. But for -14 punishes where the opponent is standing, this gives a full combo. Great damage.',
              notes: [
                'Full launch combo — 60-70+ damage',
                'High — can whiff if opponent is in crouch recovery',
                '-11 on block',
                'Primary i14 punisher'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="i15 — b+1+2 (Launcher)">
          <MoveCard character="xiaoyu"
            move={{
              input: 'b+1+2',
              hitLevel: ['m', 'm'],
              damage: '8, 12',
              startup: 'i15~16',
              onBlock: '-13',
              onHit: '+29a',
              tags: ['Mid', 'Launcher', 'Punisher'],
              description: 'Your i15 launch punisher. Mid, so it always hits. Use this for -15 or worse blocked moves. Full combo damage.',
              notes: [
                'Full launch combo — 65-75+ damage',
                'Mid — always hits, unlike standing 3',
                '-13 on block',
                'Your go-to for i15 block punishment'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="i16+ — uf+3 or ub+3">
          <p>
            For -16 or worse, you can use <code>uf+3</code> (hop kick, i16) or <code>ub+3</code> (i20, 
            more damage, more range). In practice, <code>b+1+2</code> covers everything from -15 onwards, 
            so these are mainly for range-specific situations.
          </p>
        </SubSection>
      </Section>

      <Section title="While Standing (WS) Punishment">
        <KeyConcept title="Punishing Lows" icon="⬇️">
          <p>
            When you block a low, you're in crouch. Your while-standing (WS) moves come out. Xiaoyu's 
            WS punishment is slightly below average at the fast end but excellent at i15+.
          </p>
        </KeyConcept>

        <SubSection title="i11 — ws4">
          <MoveCard character="xiaoyu"
            move={{
              input: 'ws4',
              hitLevel: ['m'],
              damage: '16',
              startup: 'i11',
              onBlock: '-6',
              onHit: '+5',
              tags: ['Mid', 'Punisher'],
              description: 'Your fastest WS punish. 16 damage. Used for lows that are -11 to -12.',
              notes: [
                '16 damage',
                '+5 on hit — your turn',
                '-6 on block — safe',
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="i12 — ws1+2,1+2">
          <MoveCard character="xiaoyu"
            move={{
              input: 'ws1+2,1+2',
              hitLevel: ['m', 'm'],
              damage: '10, 15',
              startup: 'i12',
              onBlock: '-13',
              onHit: '+3',
              tags: ['Mid', 'Punisher'],
              description: 'Your i12 WS punish. 25 damage total. Good for lows that are -12 to -14.',
              notes: [
                '25 damage',
                'Better than ws4 when you have the frames',
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="i13 — ws2">
          <MoveCard character="xiaoyu"
            move={{
              input: 'ws2',
              hitLevel: ['m'],
              damage: '15',
              startup: 'i13',
              onBlock: '-8',
              onHit: '-1',
              onCH: '+35a',
              tags: ['Mid', 'CH Launcher', 'Punisher'],
              description: 'Your i13 WS mid. On CH, it launches. On normal hit it\'s -1. As a punisher, it\'s mainly used when you need i13 from crouch. The ws2*,f (just frame) version gives a launch on normal hit.',
              notes: [
                'On CH: full launch',
                'ws2*,f (just frame): launch on normal hit',
                '-8 on block — safe',
                'Great for fishing from crouch (BT.db → ws2)'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="i15+ — uf+3 / ub+3">
          <p>
            For heavily minus lows (-15 and beyond), use <code>uf+3</code> (hop kick, i16) for a full 
            launch combo. For -20 or worse, <code>ub+3</code> gives even more damage.
          </p>
        </SubSection>
      </Section>

      <Section title="Whiff Punishment">
        <KeyConcept title="Xiaoyu's Real Punishment Strength" icon="💨">
          <p>
            Xiaoyu's real punishment power comes from whiff punishment, not block punishment. Her 
            stance game (AOP, BT) creates whiffs, and her launchers have excellent range:
          </p>
          <ul>
            <li><code>3</code> — i14, incredible range, full combo (high)</li>
            <li><code>b+1+2</code> — i15, good range, full combo (mid)</li>
            <li><code>ub+3</code> — i20, massive range, full combo</li>
            <li><code>BT.4</code> — i13, fast from BT, full combo</li>
          </ul>
        </KeyConcept>

        <SituationCard title="Creating Whiffs To Punish">
          <ul>
            <li><strong>AOP duck</strong> — Go under a high, punish with AOP.uf+3 or AOP.d+1+2</li>
            <li><strong>BT sidestep</strong> — Sidestep in BT, punish with BT.4</li>
            <li><strong>BT.db retreat</strong> — Back away in BT, opponent whiffs, punish with ws2 or ub+3</li>
            <li><strong>Neutral backdash</strong> — Create space, opponent whiffs, punish with 3 or b+1+2</li>
            <li><strong>ss4</strong> — Sidestep into crushing low, launch on CH</li>
          </ul>
        </SituationCard>
      </Section>

      <Section title="Punishment Summary">
        <Collapsible title="Quick Reference: Standing Punishment">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-color)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-color)' }}>Move</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-color)' }}>Damage</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-color)' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px' }}>-10</td>
                <td style={{ padding: '8px' }}><code>1,2</code> or <code>1,d+2</code></td>
                <td style={{ padding: '8px' }}>11</td>
                <td style={{ padding: '8px' }}>1,d+2 for BT transition</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ padding: '8px' }}>24</td>
                <td style={{ padding: '8px' }}>-8 on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>df+2,1+2</code></td>
                <td style={{ padding: '8px' }}>30</td>
                <td style={{ padding: '8px' }}>Knockdown, oki</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>-14</td>
                <td style={{ padding: '8px' }}><code>3</code></td>
                <td style={{ padding: '8px' }}>60-70+</td>
                <td style={{ padding: '8px' }}>Full combo (high)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>-15</td>
                <td style={{ padding: '8px' }}><code>b+1+2</code></td>
                <td style={{ padding: '8px' }}>65-75+</td>
                <td style={{ padding: '8px' }}>Full combo (mid)</td>
              </tr>
            </tbody>
          </table>
        </Collapsible>

        <Collapsible title="Quick Reference: WS Punishment">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-color)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-color)' }}>Move</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-color)' }}>Damage</th>
                <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid var(--border-color)' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '8px' }}>-11</td>
                <td style={{ padding: '8px' }}><code>ws4</code></td>
                <td style={{ padding: '8px' }}>16</td>
                <td style={{ padding: '8px' }}>+5 on hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>-12</td>
                <td style={{ padding: '8px' }}><code>ws1+2,1+2</code></td>
                <td style={{ padding: '8px' }}>25</td>
                <td style={{ padding: '8px' }}>+3 on hit</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>-13</td>
                <td style={{ padding: '8px' }}><code>ws2</code></td>
                <td style={{ padding: '8px' }}>15 (CH: launch)</td>
                <td style={{ padding: '8px' }}>ws2*,f for NH launch</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>-16</td>
                <td style={{ padding: '8px' }}><code>uf+3</code></td>
                <td style={{ padding: '8px' }}>60-70+</td>
                <td style={{ padding: '8px' }}>Full combo</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>-20</td>
                <td style={{ padding: '8px' }}><code>ub+3</code></td>
                <td style={{ padding: '8px' }}>75+</td>
                <td style={{ padding: '8px' }}>Full combo, max damage</td>
              </tr>
            </tbody>
          </table>
        </Collapsible>

        <PracticeBox
          title="Punishment Drill"
          setup="Record the opponent doing unsafe moves. Practice punishing with the correct option."
          tasks={[
            { id: 'xiao-pun-10', text: 'Punish -10 move with 1,d+2 (BT transition) — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-pun-13', text: 'Punish -13 move with df+2,1+2 — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-pun-15', text: 'Punish -15 move with b+1+2 → full combo — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-pun-ws', text: 'Block a low → ws4 punish — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-pun-ws15', text: 'Block a -15 low → uf+3 → full combo — 10 times', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
