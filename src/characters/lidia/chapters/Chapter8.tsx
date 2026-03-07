import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="The Low Game"
      intro="Lidia's lows aren't great in isolation — they're slow, punishable, and don't give you much on hit. But they're not meant to win by themselves. They're meant to condition the opponent to stop pressing buttons and start respecting you. And when they do, everything else opens up."
      hasPrevious
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Heaven and Earth"
    >
      <Section title="The Low Poke: d+2">
        <MoveCard
          character="lidia"
          move={{
            input: 'd+2',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i18',
            onBlock: '-14',
            onHit: '-4',
            onCH: '+12',
            description: "Your most important low. Not because of what it does on hit (-4, not great) but because it high-crushes and on counter-hit guarantees FC.df+2 — a heat engager. This single move turns every opponent's jab attempt into a potential heat activation for you.",
            notes: [
              'High crushes: ducks under jabs and standing highs',
              'CH → FC.df+2 guaranteed (heat engager)',
              'On regular hit: -4 but you have options from crouch',
            ],
          }}
          showVideo
        />

        <p>
          d+2 is Lidia's silent workhorse. The situations where it shines:
        </p>
        <ul>
          <li><strong>After a minus move:</strong> You do df+4 (-4 on block). They jab. You do d+2. It crushes under the jab. If they committed to a full string (1,2 or similar), you get counter-hit into heat.</li>
          <li><strong>When running in:</strong> Dash forward, d+2. Opponents love to jab-check someone running at them. d+2 crushes that.</li>
          <li><strong>After b+1 on block (+2):</strong> They try to take their turn with a jab. d+2 crushes it. Counter-hit into heat engager.</li>
          <li><strong>As a generic low poke:</strong> Even on normal hit at -4, you have options from crouch. You can sidestep from crouch, do FC.df+3 (knockdown low), ws options, or just block.</li>
        </ul>

        <KeyConcept title="The d+2 Crouch Situation" icon="🔑">
          <p>
            After d+2 hits on normal hit, you're at -4 in crouch. This sounds bad, but many opponents
            are cautious about attacking a crouching Lidia because:
          </p>
          <ul>
            <li>You can sidestep from crouch to evade their move</li>
            <li>FC.df+3 is a knockdown low (high-crushes everything)</li>
            <li>ws options give you mids from crouch</li>
            <li>Doing d+2 again will crush if they delay their high</li>
          </ul>
          <p>
            This hesitation from the opponent lets you steal turns even from minus frames. It won't
            work against everyone, but against aggressive opponents who rely on high attacks, it's
            extremely effective.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Homing Low: db+3">
        <MoveCard
          character="lidia"
          move={{
            input: 'db+3',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i16',
            onBlock: '-11',
            onHit: '+7',
            tags: ['homing'],
            description: "Homing low into HRS at +7 on hit. This is your premium low — it tracks sidesteps, transitions into stance, and on counter-hit knocks down for a follow-up. The -11 on block means opponents can hop-kick you, so don't spam it.",
            notes: [
              'Homing: tracks both sidestep directions',
              'Transitions to HRS on hit or block',
              '+7 into HRS on hit: HRS 2 is a frame trap',
              'CH: knockdown → db+3+4 or block okizeme',
              'Can be launched by hop kick on block',
            ],
          }}
          showVideo
        />

        <p>
          db+3 at +7 into HRS is special. At +7, HRS 2 (i16) becomes a frame trap — the opponent
          can't even jab before it connects. If you land db+3, pressing HRS 2 catches any button
          they press and gives you a heat engager. This is one of the best hit → heat sequences
          in Lidia's kit.
        </p>
      </Section>

      <Section title="Other Lows">
        <MoveCard
          character="lidia"
          move={{
            input: 'd+3,1',
            hitLevel: ['l', 'h'],
            damage: '9, 8',
            startup: 'i15',
            onBlock: '-3',
            onHit: '+4',
            description: "Low-high that jails on hit (opponent can't duck the second hit). On counter-hit, the full string d+3,1,2 is guaranteed for a tornado and 37+ damage. Hit confirm the counter-hit animation before pressing 2 — if they blocked the first hit, they CAN duck the high and launch you.",
            notes: [
              'Jails on hit: second hit can\'t be ducked after the low connects',
              'CH d+3,1,2: full string guaranteed, tornado',
              'The 2 extension is duckable on block — confirm it!',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '15',
            startup: 'i22',
            onBlock: '-13',
            onHit: '0',
            description: "Slower low, 0 on hit. Not glamorous, but useful for closing rounds. When the opponent is at low health and you just need any hit to land, db+4 is a respectable option. Can hit grounded opponents off-axis.",
          }}
          showVideo
        />

        <Collapsible title="FC.df+3 — The Sweep">
          <MoveCard
            character="lidia"
            videoId="FC.df+3"
            move={{
              input: 'FC.df+3',
              hitLevel: ['l'],
              damage: '16',
              startup: 'i20',
              onBlock: '-26',
              onHit: '+2c',
              description: "Full crouch sweep. On clean hit (close range), knocks down for a guaranteed f,f+3 follow-up (+12a, 4 extra damage). Very unsafe on block. Use this from crouch situations (after d+2, after heat engage crouch) to mix up with qcf+1+2 (Red Poppy) from the same crouch position.",
              notes: [
                'Clean hit: +12a, guaranteed f,f+3',
                'Mix with qcf+1+2 (Red Poppy) from crouch',
                '-26 on block: extremely punishable',
              ],
            }}
            showVideo
          />
        </Collapsible>
      </Section>

      <Section title="Trading Tech">
        <p>
          This is advanced but incredibly rewarding. Lidia has two powerful 15-16 frame options
          (df+2 at i15 and db+3 at i16) that <em>trade</em> with the opponent's jab when you're
          at specific plus frames. The trades are massively in your favor.
        </p>

        <SubSection title="The +5 Trade: df+2">
          <p>
            When you're +5 (after d+3 on hit, f,f+2 on block, or qcf+4 on block), df+2 (i15)
            trades with a jab (i10). The math: your i15 move comes out at frame 10, their i10
            jab also comes out at frame 10 — you trade. But the trade leaves you at approximately
            <strong>+29</strong>, which guarantees 3,2 for a full combo. You turned a poke trade
            into a launch.
          </p>
          <p>
            Setups: <strong>b+1 on block</strong> (+2) → the opponent's df+1 (i13) trades with
            your df+2 (i15) for the same devastating result.
          </p>
        </SubSection>

        <SubSection title="The +6 Trade: db+3">
          <p>
            When you're +6 (after WR+1 on block, WR+3 on block, or HAE 2 on block), db+3 (i16)
            trades with a jab. The trade leaves you at approximately <strong>+14</strong>, which
            guarantees Political Storm. That's a heat engager from a trade.
          </p>
          <p>
            The HAE 2 setup is especially nasty: after Heaven and Earth 2 on block (+6), if the
            opponent jabs, your db+3 trades into Political Storm for heat dash damage. 87 damage
            from a "blocked" move.
          </p>
        </SubSection>

        <TipBox variant="warning" title="Trading With Down-Jab">
          If the opponent does d+1 (down-jab) instead of a standing jab, the trade math changes.
          Against d+1, the db+3 trade only gives +9 — not enough for Political Storm. You still
          get plus frames, but the reward is smaller. The d+2 trade at +5 still works because
          d+2 high-crushes under d+1.
        </TipBox>

        <KeyConcept title="Why Trading Matters" icon="💡">
          <p>
            Trading tech turns your plus frames into a no-win situation for the opponent. If they
            press a button, they get traded into a combo. If they don't press, you get to continue
            your offense for free. This is how Lidia converts small advantages (+5, +6) into
            round-winning damage.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Crouch Mixup">
        <p>
          In Season 2, you can crouch after a heat engager. This opens up a powerful mixup from
          crouch that Lidia players should always use:
        </p>
        <ul>
          <li><strong>FC.df+3 (sweep):</strong> Low knockdown, -26 on block. The "they stand" option.</li>
          <li><strong>qcf+1+2 (Red Poppy):</strong> Mid from crouch, can be charged to +1 on block. The "they duck" option.</li>
        </ul>
        <p>
          You can also access this crouch mixup any time you're in full crouch — after d+2 on hit,
          after blocking a low, etc. The key is that qcf motions work from crouch in Tekken 8,
          meaning Red Poppy is always an option whenever you're crouching.
        </p>

        <PracticeBox
          title="Low Game Drill"
          setup="Practice Mode, opponent set to jab after your moves"
          tasks={[
            { id: 'd2-crush', text: 'Do df+4 (blocked), then d+2 to crush the jab response', type: 'counter', target: 5 },
            { id: 'd2-ch', text: 'Land CH d+2 → FC.df+2 heat engager 5 times', type: 'counter', target: 5 },
            { id: 'db3-hrs', text: 'Land db+3 on hit → HRS 2 frame trap', type: 'counter', target: 5 },
            { id: 'trade-df2', text: 'At +5 (f,f+2 block), land the df+2 trade → 3,2 full combo', type: 'counter', target: 3 },
            { id: 'crouch-mix', text: 'From crouch, mix FC.df+3 and qcf+1+2', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
