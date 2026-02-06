import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Defense & Movement"
      intro="Lars can't just attack forever. Against opponents who know the matchup, you need defensive tools, movement, and patience. This chapter teaches you when to stop attacking and start defending."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="The Complete Lars"
    >
      <Section title="Lars' Movement Weakness">
        <p>
          Let's be honest: <strong>Lars has a bad sidestep</strong>. His sidestep is one of 
          the worst in the game. This means you can't rely on stepping to avoid attacks 
          the way characters like Asuka or Steve can.
        </p>

        <KeyConcept title="What This Means for You" icon="⚠️">
          <ul>
            <li><strong>Don't rely on sidestepping</strong> — It's slow and short</li>
            <li><strong>Backdash is your primary defensive movement</strong> — Lars' backdash is decent</li>
            <li><strong>Use your tools instead</strong> — b+1 (homing), DEN 3 (homing), fff+1 (tracks) compensate</li>
            <li><strong>Opponents can step YOU</strong> — Your moves are generally linear. Use homing options.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Sidestep Right Is Your Weakness">
          Opponents who know the Lars matchup will sidestep right to avoid your linear 
          attacks. When you see this happening, switch to b+1, SEN 4, b+1+2, or fff+1 
          to catch them.
        </TipBox>
      </Section>

      <Section title="Backdash Punishment">
        <p>
          The backdash is your best defensive tool. Use it to create space and whiff punish.
        </p>

        <KeyConcept title="The Backdash Gameplan" icon="🏃">
          <ol>
            <li>Do a safe poke (df+1, 1,2, db+2,1)</li>
            <li>Immediately backdash</li>
            <li>Opponent retaliates → their move whiffs because you're out of range</li>
            <li>Whiff punish with f+1+2 (launcher) or b+3,4 (knockdown)</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            If you do this consistently, your opponent becomes afraid to press buttons after 
            your pokes. Then you can go aggressive again with stance pressure.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The Mindset Toggle">
          When your opponent is scared of your pressure and blocking everything → go aggressive. 
          When they start challenging your stances and interrupting → switch to defense, backdash, 
          and whiff punish. When they stop pressing → go aggressive again. This back-and-forth 
          is the heart of high-level Lars.
        </TipBox>
      </Section>

      <Section title="Panic Moves">
        <p>
          When you're getting pressured and need to escape, these are your options:
        </p>

        <MoveCard character="lars"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '19',
            startup: 'i20~21',
            onBlock: '-26',
            onHit: '+5c',
            onCH: '+29a (Launch!)',
            tags: ['Panic', 'Low', 'High Crush', 'CH Launcher'],
            description: 'High crush panic tool. Goes under highs and some mids. CH launches. Extremely risky but extremely rewarding.',
            notes: ['High crush from frame 6', '-26 on block = death', 'Only use when you KNOW they\'re going high', 'Best panic tool in desperate situations']
          }}
          showVideo
        />

        <MoveCard character="lars"
          move={{
            input: 'uf+3',
            hitLevel: ['m', 'm'],
            damage: '26',
            startup: 'i16~17',
            onBlock: '-26',
            onHit: '+33a (+15)',
            tags: ['Panic', 'Launcher', 'Evasive', 'Low Crush'],
            description: 'Lightning Screw. Extremely evasive launcher that goes under a lot of moves. Low crushes. -26 on block but amazing at evading.',
            notes: ['Low crush from frame 12', 'Goes under many mids and highs', '-26 on block = launch punishable', 'Don\'t become addicted to this move']
          }}
          showVideo
        />

        <MoveCard character="lars"
          move={{
            input: '1+2',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i25',
            onBlock: '-12',
            onHit: '+7',
            tags: ['Power Crush', 'Mid', 'Panic'],
            description: 'X-Ray. Power crush that absorbs attacks. Use when overwhelmed or to steal a round. Guaranteed db+4 on hit.',
            notes: ['Power crush from frame 7', 'Absorbs mids and highs', '-12 on block', 'Guaranteed db+4 follow-up on hit']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="db+1+2"
          move={{
            input: 'db+1+2',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i26',
            onBlock: '-13',
            onHit: '+8',
            tags: ['Backsway', 'Panic', 'DEN Transition'],
            description: 'Backswing blow. Sways back to avoid attacks, then hits mid. Can go into DEN with D. Guaranteed DEN 1,2 on hit.',
            notes: ['Backsway evades some attacks', '-13 on block = punishable', 'Hold D for DEN transition', 'DEN 1,2 guaranteed on hit (heat engager)']
          }}
          showVideo
        />

        <TipBox variant="danger" title="Panic Moves Are Last Resort">
          Every panic move is punishable on block. Use them when you NEED them — 
          not as a default response to pressure. If you find yourself mashing these, 
          you need to improve your blocking and movement instead.
        </TipBox>
      </Section>

      <Section title="Defensive Move Handling">
        <p>
          Understanding which of your opponent's moves to duck, step, or just block:
        </p>

        <KeyConcept title="General Defense Rules" icon="🛡️">
          <ul>
            <li><strong>Block lows on reaction when possible</strong> — Many lows in T8 are seeable. Practice blocking them to get free ws punishment → LEN mixups.</li>
            <li><strong>Don't duck strings randomly</strong> — If you don't know the matchup, hold back. Getting launched for ducking wrong is worse than taking chip.</li>
            <li><strong>Low parry when in doubt</strong> — Low parry (df while blocking) catches lows for a combo. Less damage than blocking + ws launch, but safer.</li>
            <li><strong>Power crush has limits</strong> — Your 1+2 absorbs mids/highs but NOT lows, throws, or rage arts.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="When to Switch from Offense to Defense">
        <p>
          This is the hardest skill in Tekken and the one that defines advanced players:
        </p>

        <KeyConcept title="Switch Triggers" icon="🔄">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Sign</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Action</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Your stances keep getting interrupted</td>
                <td style={{ padding: '8px' }}>Switch to pokes and backdash. Let them whiff.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Opponent is counter-hitting your approaches</td>
                <td style={{ padding: '8px' }}>Stop approaching. Play keep-out with b+3,4 and b+1.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Opponent is blocking everything</td>
                <td style={{ padding: '8px' }}>Go MORE aggressive. Use lows, throws, stances.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>You're at low health</td>
                <td style={{ padding: '8px' }}>Play patient. One punish → 2,1 → LEN can win the round.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Opponent is at low health</td>
                <td style={{ padding: '8px' }}>Don't get desperate. Safe mids (df+1, db+2,1) and chip.</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="Practice: Defense Drills">
        <PracticeBox
          title="Backdash Whiff Punish Drill"
          setup="Record opponent doing a safe poke → hopkick (or similar)."
          tasks={[
            { id: 'def-1', text: 'Block the poke → backdash → whiff punish with f+1+2', detail: 'Their hopkick should whiff after your backdash', type: 'counter', target: 5 },
            { id: 'def-2', text: 'Do 2,1 on block → backdash → opponent\'s retaliation whiffs → launch', detail: 'The 2,1 backdash trap', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Low Block → Punish Drill"
          setup="Record opponent doing common lows (hellsweep, snake edge, etc.)."
          tasks={[
            { id: 'low-1', text: 'Block a -15 low → ws+1 launch five times', detail: 'Standard while standing launcher', type: 'counter', target: 5 },
            { id: 'low-2', text: 'Block a stagger low → ws+3~D → LEN 2 five times', detail: 'Maximum damage WS punishment', type: 'counter', target: 5 },
            { id: 'low-3', text: 'Block a -13 low → ws+2,3~D → LEN mixup', detail: 'Punishment into stance pressure', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
