import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Flowchart, OptionTest } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Heaven and Earth"
      intro="This is what makes Lidia terrifying. Heaven and Earth (HAE) is a heat-only stance that gains power across rounds, has a built-in parry, deals chip damage on block, and forces mixups the opponent can't easily answer. If you're not using heat every round with Lidia, you're leaving half the character on the table."
      hasPrevious
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Frame Traps & Pressure"
    >
      <Section title="The Stack System">
        <p>
          Every time you enter HAE stance, you gain a <strong>stack</strong> — visible as a counter
          near your heat meter. You can have a maximum of 3 stacks, and they <strong>persist across
          rounds</strong> (resetting only at the start of a new match). Each stack:
        </p>
        <ul>
          <li>Increases damage on HAE attacks, d+1+2 (grounded hit), b+3,4,1+2 (combo ender), WLF 4, and f,f+4,3 (airborne hit)</li>
          <li>Reduces the heat meter cost of entering HAE</li>
          <li>At level 3: HAE 2 gets increased pushback on hit (wall splats from far), HAE 1+2 gets empowered damage, and uf+1+2 command grab becomes devastating</li>
        </ul>

        <KeyConcept title="Why You Must Use Heat Every Round" icon="⚡">
          <p>
            Even if your heat activation doesn't lead to a combo, entering HAE at least once per
            round builds stacks. At level 3 with full heat, Lidia's chip damage and mixup potential
            are among the strongest in the game. Not using heat means you're permanently at level 0
            while your opponent benefits from having a complete character.
          </p>
          <p>
            The math is simple: a round where you activate heat and get one HAE transition earns
            you a stack AND deals damage/chip. A round where you save heat earns you nothing.
            Always spend it.
          </p>
        </KeyConcept>
      </Section>

      <Section title="HAE Moves">
        <MoveCard
          character="lidia"
          videoId="HAE.2"
          move={{
            input: 'HAE 2',
            hitLevel: ['m', 'm'],
            damage: '26-34',
            startup: 'i13',
            onBlock: '+6',
            onHit: '+14a',
            description: "Your best HAE option. Fastest at i13. Mid, SAFE at +6 on block, and deals 7-12 chip damage depending on HAE level. At level 3, the pushback on hit increases dramatically for distant wall splats. At +6 on block, you're in frame trap territory — df+2 and db+3 beat buttons.",
            notes: [
              '+6 on block: frame traps with df+2 (i15) and db+3 (i16)',
              'Chip damage increases with HAE level (7/11/12)',
              'Level 3: increased pushback for long-range wall splats',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          videoId="HAE.1"
          move={{
            input: 'HAE 1',
            hitLevel: ['m'],
            damage: '21-23',
            startup: 'i18',
            onBlock: '-11',
            onHit: '+80a',
            tags: ['launcher', 'power crush'],
            description: "Mid launcher with power crush (frames 7-17). On hit, launches for a full combo — including a guaranteed grounded d+1+2 that heals you and deals extra damage based on HAE level. -11 on block. Use this when you're confident the opponent will press or use armor.",
            notes: [
              'Power crush: absorbs attacks during frames 7-17',
              'Combo: HAE 1 → d+1+2 (grounded, heals you)',
              'Chip: 4-7 depending on HAE level',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          videoId="HAE.1+2"
          move={{
            input: 'HAE 1+2',
            hitLevel: ['h!'],
            damage: '35-41',
            startup: 'i16',
            onBlock: 'n/a',
            onHit: '+0a',
            tags: ['unblockable', 'homing'],
            description: "Unblockable high. Homing. i16 — not reactable. Damage increases with HAE level. Tornado on hit for a combo. The catch: it's a high, so it can be ducked. This is the option that makes HAE a true mixup — the opponent has to choose between standing (beats HAE 1+2) or ducking (loses to HAE 2 and HAE 1).",
          }}
          showVideo
        />
      </Section>

      <Section title="The Parry">
        <p>
          When Lidia enters HAE, she gains a <strong>parry window</strong> from frame 5 to 39.
          This parries all highs and mids — everything except lows, d+1, and grabs. On successful
          parry, she partially restores heat meter and gets a plus-frame HAE mixup (approximately +12-13).
        </p>

        <OptionTest
          title="Defending Against HAE"
          situation="Lidia enters Heaven and Earth from any stance. What can you do?"
          testResults={[
            {
              option: 'Jab / press buttons',
              result: 'loses',
              detail: 'Gets parried. Lidia restores heat, gets a free mixup at huge plus frames. This is the worst thing you can do.',
            },
            {
              option: 'Armor / power crush',
              result: 'loses',
              detail: 'Also gets parried. The parry catches everything that isn\'t a low or grab.',
            },
            {
              option: 'Duck and launch',
              result: 'situational',
              detail: 'Beats HAE 1+2 (unblockable high). Loses to HAE 2 (mid) and HAE 1 (mid launcher). Only correct if you\'re SURE they\'ll do the unblockable.',
            },
            {
              option: 'Grab',
              result: 'works',
              successRate: 'Best counter',
              detail: 'Grabs beat the parry and are guaranteed during the parry window. This is the primary answer to HAE. But it requires being in grab range and the opponent might cancel the stance.',
            },
            {
              option: 'Low / d+1',
              result: 'works',
              detail: 'Lows and d+1 go under the parry. They interrupt the stance. However, Lidia can delay her HAE option to catch slow lows.',
            },
            {
              option: 'Sidestep right then duck',
              result: 'works',
              successRate: 'Best universal',
              detail: 'Sidestep right, then duck. This option-selects HAE 2 (stepped) and HAE 1+2 (ducked). Only HAE 1 catches you, and it\'s the slowest option. Lidia can delay to catch the step, but this is your safest default.',
            },
          ]}
          bestOption="Sidestep right then duck (if you're minus 8 or less). Grab (if in range and plus)."
          reasoning="The most common defense against HAE is sidestep right into duck. It beats HAE 2 and HAE 1+2 while only losing to the slowest option (HAE 1). At higher plus frames for Lidia (like after HRS 2 on hit at +8), sidestepping becomes impossible and you're stuck guessing."
        />
      </Section>

      <Section title="HAE by Frame Situation">
        <p>
          How dangerous HAE is depends entirely on how plus Lidia is when she enters it.
        </p>

        <SubSection title="Minus or Neutral Frames (after df+2 block, CAT 4 block)">
          <p>
            When Lidia enters HAE from a minus or neutral position, the parry makes her safe from
            retaliation, but the opponent can sidestep right → duck to beat most options. She can
            delay her HAE option to catch the sidestep, but you can jab or d+1 to interrupt the
            delayed option. This is the weakest HAE situation — still threatening because of the
            parry, but the opponent has answers.
          </p>
        </SubSection>

        <SubSection title="+5 to +8 (after f,f+2 block, HRS 4 block, HRS 2 on hit)">
          <p>
            The most common HAE situation. At +8 (after HRS 2 on hit), sidestep right → duck
            is no longer reliable — HAE 2 becomes a frame trap that can't be stepped. The
            opponent is stuck between HAE 2 (mid frame trap, +6, chip) and HAE 1+2 (unblockable).
            Parry still works, armor doesn't. Grabs and lows remain answers but are risky.
          </p>
        </SubSection>

        <SubSection title="+10 or higher (after full charge 1+2, after parry success)">
          <p>
            Everything is a frame trap or unavoidable. The opponent can only guess. HAE 1 has
            power crush that activates before any retaliation. Rage art loses to HAE 1+2.
            This is the most dangerous HAE state.
          </p>
        </SubSection>
      </Section>

      <Section title="The Hammer Tech Flowchart">
        <p>
          This is a pressure sequence that maximizes HAE chip damage and mixups during heat. It's
          the "I'm in heat, let me run the program" flowchart. It has gaps the opponent can exploit,
          but it's a devastating starting point.
        </p>

        <Flowchart
          title="Hammer Tech (3 Stacks)"
          nodes={[
            { type: 'start', label: 'Heat Engager lands → activate heat' },
            { type: 'decision', label: 'Charge 1+2 into HAE', branches: [
              { label: 'Blocked', action: 'HAE 2 (+6, chip damage) → continue' },
              { label: 'Hit', action: 'Full combo → round over' },
            ]},
            { type: 'decision', label: 'WR+1 into HAE', branches: [
              { label: 'Blocked', action: 'HAE 2 (+6, chip damage) → continue' },
              { label: 'Hit', action: 'HAE 1 → d+1+2 → massive damage' },
              { label: 'Ducked', action: 'They launch you — this is the risk' },
            ]},
            { type: 'decision', label: 'Heat Smash into HAE', branches: [
              { label: 'Blocked (+10)', action: 'HAE 2 or HAE 1+2 mixup' },
              { label: 'Hit', action: 'Attack throw → +1 stack → damage' },
            ]},
            { type: 'end', label: 'By now: ~half their health in chip if everything was blocked. Any hit = round over.' },
          ]}
        />

        <TipBox variant="tip" title="Don't Be Predictable">
          The Hammer Tech is a starting flowchart, not a script. Real opponents will adapt —
          they'll start ducking WR+1, grabbing your HAE transitions, or using lows. Pay attention
          to how they respond and adjust. The flowchart gives you a framework; your reads make it work.
        </TipBox>
      </Section>

      <Section title="Heat Engager Priorities">
        <p>
          Getting into heat is Lidia's #1 priority. Here are your heat engagers ranked by
          reliability:
        </p>
        <ol>
          <li><strong>Political Storm (f+1+2,3,1+2):</strong> 14-frame punish and whiff punish. Most reliable.</li>
          <li><strong>b+1:</strong> Safe mid at +2. Fish for this at close range.</li>
          <li><strong>FC.df+2:</strong> 12-frame crouching punish. Look for this after blocking lows.</li>
          <li><strong>HRS 2:</strong> From stance. Guaranteed after f,f+2 on hit.</li>
          <li><strong>CAT 3:</strong> From stance. Fast but high and duckable.</li>
          <li><strong>CH d+2 → FC.df+2:</strong> Counter-hit low into heat. High reward but requires the read.</li>
        </ol>

        <PracticeBox
          title="Heaven and Earth Drill"
          setup="Practice Mode, heat active"
          tasks={[
            { id: 'hae-enter', text: 'Enter HAE from CAT, HRS, and WLF by pressing up', type: 'toggle' },
            { id: 'hae2-chip', text: 'Do HAE 2 on block 5 times and note the chip damage', type: 'counter', target: 5 },
            { id: 'hae-parry', text: 'Set opponent to jab. Enter HAE and parry it. Note the heat restoration.', type: 'toggle' },
            { id: 'hammer-tech', text: 'Practice the Hammer Tech flowchart: 1+2 charge → HAE 2 → WR+1 → HAE 2 → Heat Smash → HAE 2', type: 'counter', target: 3 },
            { id: 'stacks', text: 'In one round: activate heat, enter HAE at least twice, note stacks at end of round', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
