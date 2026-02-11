import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Punishment"
      intro="Every blocked move is an opportunity. Punishment is the skill of making your opponent pay the maximum price for every mistake. Eddy's punishment isn't the best in the game from standing — but from crouch, it's elite."
      hasPrevious={true}
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Heat and Power"
    >
      <Section title="Standing Punishment">
        <p>
          Standing punishment is what you do after blocking a move while standing. Each punisher
          covers a specific range of frame disadvantage. The goal: always use the <strong>strongest
          punisher that's fast enough</strong> for the move you just blocked.
        </p>

        <h3>i10 — 1,2~F or 1,3</h3>
        <MoveCard character="eddy"
          videoId="1,3"
          move={{
            input: '1,3',
            hitLevel: ['h', 'm'],
            damage: '5, 18',
            startup: 'i10',
            onBlock: '-4',
            onHit: '+7',
            tags: ['Punisher', 'i10'],
            description: 'Your 10-frame punisher. 1,3 is a high-mid natural combo for 23 damage. Alternatively, 1,2~F transitions to Handstand for pressure but deals less damage. Use 1,3 when you need guaranteed damage, 1,2~F when you want stance pressure.',
            notes: [
              '1,3: 23 damage, -4 on block — safe even if they block the second hit',
              '1,2~F: less damage but transitions to HSP',
              'Your go-to for -10 to -11 moves',
            ],
          }}
          showVideo
        />

        <h3>i12 — 2,3</h3>
        <MoveCard character="eddy"
          videoId="2,3"
          move={{
            input: '2,3',
            hitLevel: ['h', 'm'],
            damage: '12, 21',
            startup: 'i12',
            onBlock: '-11',
            onHit: '+6',
            tags: ['Punisher', 'i12'],
            description: 'Your 12-frame punisher. More damage than 1,3 but slightly slower. The second hit is a mid that knocks down. Use for -12 moves.',
            notes: [
              '33 damage — solid for a 12-frame punish',
              'Knockdown on hit for oki',
              '-11 on block — slightly unsafe if they block somehow',
            ],
          }}
          showVideo
        />

        <h3>i13 — df+1,3</h3>
        <MoveCard character="eddy"
          videoId="df+1,3"
          move={{
            input: 'df+1,3',
            hitLevel: ['m', 'h'],
            damage: '10, 30',
            startup: 'i13',
            onBlock: '-7',
            onHit: 'KND',
            tags: ['Punisher', 'i13', 'Wall Splat', 'Tornado'],
            description: 'Your 13-frame punisher. 40 damage with knockdown and wall splat. The second hit tornadoes — at the wall, this leads into a full wall combo. This is where Eddy\'s standing punishment starts getting scary.',
            notes: [
              '40 damage with knockdown',
              'Wall splats and tornadoes — devastating at the wall',
              'Second hit is high (can be ducked in neutral)',
              'Only use the full string as punishment, not in neutral',
            ],
          }}
          showVideo
        />

        <h3>i14 — uf+1,4 (Heat) or uf+1,3 (Mandinga)</h3>
        <MoveCard character="eddy"
          videoId="uf+1,4"
          move={{
            input: 'uf+1,4',
            hitLevel: ['m', 'm'],
            damage: '12, 22',
            startup: 'i14',
            onBlock: '-15',
            onHit: 'KND / HE',
            tags: ['Punisher', 'i14', 'Heat Engager'],
            description: 'Your 14-frame punisher. uf+1,4 is a heat engager that knocks down. When you have Mandinga, uf+1,3 is available as an alternative with different properties. Use uf+1,4 when you want heat activation.',
            notes: [
              'Heat engager — activates heat on hit',
              '-15 on block — only use as punishment',
              '34 damage plus heat activation is massive value',
              'With Mandinga: uf+1,3 is also available at i14',
            ],
          }}
          showVideo
        />

        <h3>i15 — df+3 (Launch)</h3>
        <p>
          Full launch at i15 into your standard combo. This is the big one — any move that's
          -15 or worse on block gives you 65+ damage. See Chapter 6 for the full combo route.
        </p>
      </Section>

      <Section title="Crouching Punishment">
        <p>
          This is where Eddy shines. His crouching punishment is among the best in the game,
          thanks to one move.
        </p>

        <h3>i11 — ws+4,4</h3>
        <MoveCard character="eddy"
          videoId="ws4,4"
          move={{
            input: 'ws+4,4',
            hitLevel: ['m', 'l'],
            damage: '11, 11',
            startup: 'i11',
            onBlock: '-14',
            onHit: '+6',
            tags: ['Punisher', 'ws i11', 'Natural Combo'],
            description: 'Your fastest crouching punisher. A quick mid-low natural combo from while standing. Reliable damage for lows that are -11 to -12 on block.',
            notes: [
              'i11 — fast and consistent',
              '22 damage — respectable for the speed',
              'Natural combo — both hits guaranteed',
              '-14 on block, but you\'d never use this raw',
            ],
          }}
          showVideo
        />

        <h3>i13 — ws+1,3 (Launch)</h3>
        <MoveCard character="eddy"
          videoId="ws1,3"
          move={{
            input: 'ws+1,3',
            hitLevel: ['m', 'h'],
            damage: '12, 20',
            startup: 'i13',
            onBlock: '-13',
            onHit: 'Launch',
            tags: ['Punisher', 'ws i13', 'Launcher', 'Elite'],
            description: 'Eddy\'s crown jewel. A 13-frame crouching launcher. Most characters don\'t get a crouching launcher until i15 or i18. Eddy launches at i13. This means lows that are -13 on block — normally safe from crouch against most of the cast — give Eddy a full combo.',
            notes: [
              'i13 crouching LAUNCHER — elite in the cast',
              'Punishes lows that most characters can only jab after',
              'Full combo: ws+1,3 → RLX 3+4 T! → uf+4 → RLX 2,4~D → RLX 3,3',
              'On standing opponents only — won\'t work vs airborne',
              'Second hit is high — don\'t use raw',
            ],
          }}
          showVideo
        />

        <KeyConcept title="Why ws+1,3 Changes Everything" icon="🏆">
          <p>
            Most -13 lows are designed to be "safe from crouch." Characters like Bryan's <code>db+3</code>,
            Dragunov's <code>d+2</code>, Jin's <code>db+4</code> — these are staple lows that most of
            the cast can only punish with <code>ws+4</code> for 15 damage. Against Eddy, those same
            lows give up <strong>60+ damage</strong> from a full combo.
          </p>
          <p style={{ marginTop: '12px' }}>
            This changes the matchup dynamic. Opponents who rely on -13 lows for their poke game
            suddenly can't use their best tools without massive risk. <code>ws+1,3</code> doesn't
            just punish — it <strong>deletes the opponent's low game</strong>.
          </p>
        </KeyConcept>

        <h3>i15 — ws+2 (Launch)</h3>
        <p>
          Your standard i15 crouching launcher for lows that are -15 or worse. Same combo routes
          as standing <code>df+3</code>. More damage than <code>ws+1,3</code> since you get the
          full Family A combo.
        </p>

        <h3>i19 — ws+3 (Float)</h3>
        <p>
          For very unsafe lows (-19 or worse). <code>ws+3</code> floats for a combo via the
          Family B route: <code>uf+4 → RLX 2,4~D → RLX 2,4,4</code>. Niche but good to know
          for specific matchup situations.
        </p>
      </Section>

      <Section title="The Punishment Mindset">
        <KeyConcept title="Don't Guess — Know" icon="🎯">
          <p>
            Punishment isn't about reaction speed. It's about <strong>preparation</strong>. Before
            a match, you should know which of your opponent's key moves are punishable and at what
            level. Did they throw a snake edge? That's <code>ws+1,3</code> territory. Did they throw
            a -10 jab string? That's <code>1,3</code>.
          </p>
          <p style={{ marginTop: '12px' }}>
            The decision happens before the match. In the match, you just execute. Block → punish
            should be automatic. If you're thinking about which punisher to use, you're too slow.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Whiff Punishment">
          Eddy has strong whiff punishers too: <code>df+3</code> (i15 launch) from midrange,{' '}
          <code>db+4,4</code> (long range, +1 on block as a bonus), and <code>1,2</code> into HSP
          at close range. After <code>df+2</code> on block (massive pushback), your opponent's
          retaliation often whiffs — backdash and launch with <code>df+3</code>.
        </TipBox>

        <PracticeBox
          title="Punishment Drill"
          setup="Practice Mode. Record the dummy doing specific punishable moves (check their frame data). Practice the correct punish for each."
          tasks={[
            { id: 'eddy-punish-10', text: 'Block a -10 move, punish with 1,3 five times', detail: 'Record a -10 string from the dummy. Block → 1,3. Feel the rhythm.', type: 'counter', target: 5 },
            { id: 'eddy-punish-13', text: 'Block a -13 move, punish with df+1,3 five times', detail: 'Record a -13 move. Block → df+1,3. Watch the wall splat if you\'re near the wall.', type: 'counter', target: 5 },
            { id: 'eddy-punish-15', text: 'Block a -15 move, launch with df+3 into full combo', detail: 'Record a -15 move. Block → df+3 → full combo. This is your big damage punish.', type: 'counter', target: 5 },
            { id: 'eddy-punish-ws13', text: 'Block a -13 low, launch with ws+1,3 into full combo', detail: 'Record a -13 low. Block low → ws+1,3 → RLX 3+4 T! → uf+4 → RLX 2,4~D → RLX 3,3. This is the one that matters most.', type: 'counter', target: 5 },
            { id: 'eddy-punish-ws', text: 'Block a -15 low, launch with ws+2 into full combo', detail: 'Record a snake edge or -15 low. Block → ws+2 → b+3,3 → RLX 2,4~D → RLX 2 → qcf+3 T! → db+4,4.', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="Quick Reference">
        <h3>Standing Punishers</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Speed</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Move</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Damage</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '8px' }}>i10</td>
              <td style={{ padding: '8px' }}><code>1,3</code></td>
              <td style={{ padding: '8px' }}>23</td>
              <td style={{ padding: '8px' }}>Safe. Or <code>1,2~F</code> for HSP pressure.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '8px' }}>i12</td>
              <td style={{ padding: '8px' }}><code>2,3</code></td>
              <td style={{ padding: '8px' }}>33</td>
              <td style={{ padding: '8px' }}>Knockdown.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '8px' }}>i13</td>
              <td style={{ padding: '8px' }}><code>df+1,3</code></td>
              <td style={{ padding: '8px' }}>40</td>
              <td style={{ padding: '8px' }}>Wall splat. Tornado.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '8px' }}>i14</td>
              <td style={{ padding: '8px' }}><code>uf+1,4</code></td>
              <td style={{ padding: '8px' }}>34</td>
              <td style={{ padding: '8px' }}>Heat engager.</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>i15</td>
              <td style={{ padding: '8px' }}><code>df+3</code></td>
              <td style={{ padding: '8px' }}>65+</td>
              <td style={{ padding: '8px' }}>Full launch combo.</td>
            </tr>
          </tbody>
        </table>

        <h3>Crouching Punishers</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Speed</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Move</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Damage</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Note</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '8px' }}>i11</td>
              <td style={{ padding: '8px' }}><code>ws+4,4</code></td>
              <td style={{ padding: '8px' }}>22</td>
              <td style={{ padding: '8px' }}>Fast, reliable.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '8px' }}>i13</td>
              <td style={{ padding: '8px' }}><code>ws+1,3</code></td>
              <td style={{ padding: '8px' }}>60+</td>
              <td style={{ padding: '8px' }}>Launch. Elite.</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--border)' }}>
              <td style={{ padding: '8px' }}>i15</td>
              <td style={{ padding: '8px' }}><code>ws+2</code></td>
              <td style={{ padding: '8px' }}>65+</td>
              <td style={{ padding: '8px' }}>Full launch combo.</td>
            </tr>
            <tr>
              <td style={{ padding: '8px' }}>i19</td>
              <td style={{ padding: '8px' }}><code>ws+3</code></td>
              <td style={{ padding: '8px' }}>55+</td>
              <td style={{ padding: '8px' }}>Float combo.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section title="What's Next">
        <p>
          You know how to punish. Now it's time to talk about Eddy's biggest burst of power:
          Heat mode. Heat gives Eddy access to a mid launcher (<code>H.3+4</code>) that's{' '}
          <strong>plus on block</strong>, a plus-on-block high in <code>H.qcf+4</code>, and
          a devastating heat smash. Combined with Mandinga, heat turns Eddy into a freight train.
        </p>
      </Section>
    </Chapter>
  )
}
