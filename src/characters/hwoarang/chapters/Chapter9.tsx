import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, DecisionGrid, MatchScenario, GameChallenge } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Conditioning & Adaptation"
      intro="Your loops will stop working. Not if — when. Every opponent who plays you more than twice will start finding answers. They'll duck d+3,4. They'll step your transitions. They'll power crush through flamingo. This chapter teaches you what to do when your pressure gets downloaded — how to read the adaptation and re-adapt."
      hasPrevious
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="The Master's Toolkit"
    >
      <Section title="Why Loops Stop Working">
        <p>
          The infinite loops from Chapter 3 work because they present the opponent with a constant
          stream of decisions. Duck or stand? Press or block? Step or hold? When the opponent
          doesn't know the answer, they guess wrong and you win.
        </p>
        <p>
          But Tekken players learn. After getting hit by d+3,4 → RFS pressure five times in a
          row, they start looking for the pattern. After getting hell-swept three times, they start
          crouching. After eating RFS f+4 every time they press, they stop pressing.
        </p>
        <p>
          This isn't failure — this is <strong>the game working as intended</strong>. Hwoarang
          doesn't win by running the same loop forever. He wins by recognizing what the opponent
          has learned and shifting to the option that beats their new habit. The loops are the
          foundation. Adaptation is the mastery.
        </p>
      </Section>

      <Section title="The Adaptation Cycle">
        <DecisionGrid
          title="Read and React"
          description="When the opponent adapts to your pressure, they always adapt to something specific. Identify what they've learned and counter it."
          rows={[
            {
              situation: 'They duck d+3,4 second hit',
              response: 'Stop using d+3,4 as your only entry. Use d+3 alone (just the low, no high follow-up). Use df+1 into d+3,4 — the jab conditions them to block standing. Or skip d+3,4 entirely and enter stances through f+2 → RFF, 3+4 → RFF, or f+4 → RFS.',
              reason: 'The second hit is a high — if they know it\'s coming, they duck and launch you for free.',
              risk: 'If you keep using d+3,4 against a ducker, they get a free launch every time the second hit comes out.',
            },
            {
              situation: 'They sidestep left consistently',
              response: 'Use homing moves: df+4 (homing mid → RFF), RFF df+3 (homing heat engager), d+3+4 (homing low → LFS). Or slow down your transitions — sidestepping only works against predictable timing.',
              reason: 'Most flamingo moves track poorly to the left, making sidestep-left the primary counter.',
              risk: 'Many RFS and LFS moves are linear to the left. A stepping opponent can get repeated launchers.',
            },
            {
              situation: 'They mash jabs through your flamingo',
              response: 'RFS f+4 beats everything at i8. Use it every time you enter RFS until they stop pressing. Once they respect it, your slower options (df+4, d+4,3, 4,3) open up.',
              reason: 'Your "plus frames" in flamingo are fake — fastest stance mids are i13+, so jabs can interrupt.',
              risk: 'If they jab and you throw a slow option (RFS df+4 at i17), you lose the trade even at +8.',
            },
            {
              situation: 'They power crush through flamingo',
              response: 'Stop committing to flamingo when they have a power crush available. Enter RFS, immediately block (press back to exit stance). Bait the power crush, block it, launch punish. The power crush typically costs them more than your loop would have gained.',
              reason: 'Power crushes absorb hits — you can\'t beat them with kicks from a stance where you can\'t block.',
              risk: 'Power crushes beat everything in flamingo because you can\'t block. You must bait them.',
            },
            {
              situation: 'They block everything and turtle',
              response: 'This is where grabs and lows shine. RFS d+4,3 (hell sweep), d+3+4 (homing low → LFS), and command grabs (qcb+3, f+2+3) all break a passive defense. In heat, chip damage alone can kill a turtling opponent.',
              reason: 'Passive blocking loses to grabs and lows — the opponent must take action to escape them.',
              risk: 'Turtling is the least dangerous adaptation. You have many tools to break passive blocking.',
            },
            {
              situation: 'They use rage art through flamingo',
              response: 'Do NOT enter flamingo when they have rage. Play neutral with df+1, f+2, and b+3 whiff punish. Force them to waste rage or burn it on something punishable.',
              reason: 'Rage art has instant armor and you can\'t block in LFS/RFS — it hits 100% of the time.',
              risk: 'Rage art through flamingo is guaranteed death. There is no flamingo option that beats rage art.',
            },
          ]}
        />
      </Section>

      <Section title="Alternative Entry Points">
        <p>
          When d+3,4 is downloaded, you need other ways into your stances. Every entry point you
          add makes you harder to predict and forces the opponent to re-learn your patterns.
        </p>

        <KeyConcept title="Six Ways Into Flamingo" icon="🔑">
          <p>
            d+3,4 is just one entry. Here are five more, each with different risk profiles:
          </p>
          <ul>
            <li><strong>f+4 → RFS:</strong> High kick at i17 that's +7 to +13 on block in RFS. Very strong but it's a high — duckable. The variable frame advantage (depends on range) makes it harder to contest.</li>
            <li><strong>f+2 → RFF → d+3,4:</strong> Mid poke into RFF at +9 on hit, then d+3,4 from RFF. Two-step entry that uses a mid first — the opponent can't just duck.</li>
            <li><strong>3+4 → RFF → RFF f+3 → LFS:</strong> Manual stance switch into RFF, then kick into LFS at +12 on hit. No risk on the 3+4 switch, and the f+3 is a high that's very plus.</li>
            <li><strong>db+4~F → RFS:</strong> Low poke that transitions into RFS. -12 on block but only 14 damage risk vs. full RFS pressure reward. On CH, +10 in RFS — free pressure.</li>
            <li><strong>Punishment → Stances:</strong> Chapter 4's entire system. Block something unsafe, punish with 1,2,4 → RFS, 4,3~F → LFS, ws+4,4 → RFF, or ws+1,4 → RFS. No risk at all.</li>
          </ul>
          <p>
            The goal isn't to use all six entries every round. It's to have options so the
            opponent can never fully predict how you'll enter flamingo.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Counter-Hit Fishing">
        <p>
          When the opponent starts pressing buttons to contest your pressure, counter-hit tools
          become your highest-reward option. These moves exist to punish the opponent for
          being aggressive against your loops.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'b+4',
            hitLevel: ['h'],
            damage: '17',
            startup: 'i13',
            onBlock: '-10',
            onHit: '+1 (RFF)',
            onCH: 'Launch',
            tags: ['CH Launcher', 'i13', 'Neutral Tool'],
            description: 'i13 high CH launcher from neutral. Throw this when you expect the opponent to press a button — after they block one of your transitions, during a gap in your pressure, or when you read them trying to steal the turn. On CH, full combo. On normal hit, you\'re in RFF at +1.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="db+4"
          move={{
            input: 'db+4~F',
            hitLevel: ['l'],
            damage: '14',
            startup: 'i16',
            onBlock: '-12',
            onHit: '-8 (RFS)',
            onCH: '+10 (RFS)',
            tags: ['Low', 'CH Tool', 'RFS Entry'],
            description: 'Low kick into RFS. On counter hit, +10 in RFS — your entire menu is free. RFS df+4 (mid) or RFS f+4 (i8) are both guaranteed to beat any response. Use this as a low check when the opponent is focused on ducking d+3,4\'s high. Different timing, different animation, harder to predict.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFS.df+4"
          move={{
            input: 'RFS df+4',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i17',
            onBlock: '+1',
            onHit: '+8c',
            onCH: 'Launch',
            tags: ['CH Launcher', 'Mid', 'From RFS'],
            description: 'Your mid CH launcher from RFS. When the opponent starts pressing buttons in your flamingo pressure, this is the move that makes them pay. +1 on block, +8c on hit (forced crouch — guaranteed follow-up), full launch on CH. Already covered in Chapter 2 but worth revisiting: this is your adaptation tool when they mash.',
          }}
          showVideo
        />
      </Section>

      <Section title="Match Adaptation Quizzes">
        <MatchScenario
          title="Mid-Set Download"
          situation="You're in a best-of-3. In the first game, you ran d+3,4 → RFS 2 loops freely and won. In the second game, the opponent starts ducking d+3,4's second hit consistently — they launched you twice already."
          options={[
            {
              action: 'Keep doing d+3,4 but do RFS f+4 faster',
              result: 'Wrong. RFS f+4 doesn\'t help because the problem is the SECOND HIT of d+3,4 being ducked, not what you do in RFS. You never reach RFS because they duck the high before you get there.',
            },
            {
              action: 'Switch to d+3 alone (just the low, no 4 follow-up)',
              result: 'Good option. d+3 alone is a quick low that doesn\'t have the duckable high. It won\'t transition to RFS, but it chips them and conditions them to stop ducking. Mix it with d+3,4 once they stop ducking.',
              isOptimal: true,
              followup: 'After conditioning with d+3 alone for a few reps, throw one d+3,4. If they\'ve stopped ducking, you\'re back in RFS for free.',
            },
            {
              action: 'Stop using d+3,4 entirely and enter through f+2 → RFF or f+4 → RFS',
              result: 'Also correct. If d+3,4 is completely downloaded, switch entry points. f+2 → RFF is a mid that can\'t be ducked, and from RFF you have d+3,4 anyway. The opponent has to re-learn your patterns.',
              isOptimal: true,
              followup: 'Eventually mix d+3,4 back in once they\'ve forgotten about it. The key is variety.',
            },
            {
              action: 'Play more defensively and wait for them to approach',
              result: 'Not wrong but not optimal. You\'re Hwoarang — you want to be pressing. The solution isn\'t to stop attacking, it\'s to attack differently. Switch your entry points rather than abandoning offense.',
            },
          ]}
          keyTakeaway="When one entry point is downloaded, switch to another. You have six ways into flamingo. The opponent can only download one at a time."
        />

        <MatchScenario
          title="The Sidestepper"
          situation="The opponent has figured out that sidestepping left beats most of your RFS options. They sidestep → launch every time you enter RFS."
          options={[
            {
              action: 'Use RFS f+4 (fastest option at i8)',
              result: 'RFS f+4 is fast but still linear. If they\'re stepping early in your flamingo entry, even i8 can whiff against a good sidestep.',
            },
            {
              action: 'Use RFS 3~4 or RFS 4,3 (tracking mids)',
              result: 'Better. These mid options have better tracking and catch sidesteps that would avoid linear moves. RFS 4,3 in particular low crushes and tracks well.',
              isOptimal: true,
              followup: 'Once they stop stepping, your linear options (f+4, df+4, d+4,3) become available again.',
            },
            {
              action: 'Skip RFS entirely — go through RFF and use homing moves',
              result: 'Also good. RFF df+3 is homing and a heat engager. df+4 from LFF is homing. Force the opponent to stand still with homing moves, then return to RFS pressure when they respect.',
              isOptimal: true,
            },
            {
              action: 'Delay your RFS options — wait for the sidestep to finish, then attack',
              result: 'Risky but can work. If you enter RFS and wait a beat, the sidestep recovers and they\'re standing in front of you. But waiting in flamingo means you can\'t block — if they read the delay, they attack instead of stepping.',
            },
          ]}
          keyTakeaway="Against sidestepping opponents, use tracking and homing options to pin them down. Once they respect those, your linear high-reward moves open up."
        />

        <MatchScenario
          title="The Turtler"
          situation="Your opponent blocks everything. They never press, never duck, never sidestep. They just hold back and wait for you to do something unsafe."
          options={[
            {
              action: 'Keep running loops — they\'re blocking, so you\'re safe',
              result: 'Partially right. Your loops are safe, but if the opponent never takes a risk, you\'re just doing chip damage with no big payoff. Eventually you\'ll do something predictable and they\'ll punish it.',
            },
            {
              action: 'Throw grabs to break the turtle',
              result: 'Correct. qcb+3 (45 damage, 1 break) and f+2+3 (35 damage, works from every stance) both beat a blocking opponent. If they\'re never pressing or ducking, grabs are free.',
              isOptimal: true,
              followup: 'After eating two grabs, they\'ll start ducking to break them. Now d+3,4 works again because they\'re not blocking standing.',
            },
            {
              action: 'Mix lows into the pressure',
              result: 'Also correct. RFS d+4,3 (hell sweep), d+3+4 (homing low), and db+4 (low into RFS) all chip through a passive defense. In heat, the chip damage from blocked kicks alone can kill.',
              isOptimal: true,
            },
            {
              action: 'Back off and reset to neutral',
              result: 'Wrong. A turtling opponent is the BEST case scenario for Hwoarang. They\'re giving you free pressure time. Don\'t reset — exploit it with lows and grabs.',
            },
          ]}
          keyTakeaway="Turtling is the weakest adaptation against Hwoarang. Grabs, lows, and chip damage all punish passive blocking. A turtling opponent is free offense."
        />
      </Section>

      <Section title="The Conditioning Challenge">
        <GameChallenge
          title="The Adaptation Game"
          scenario="Play 10 online matches. In each match, identify what the opponent is doing to counter your loops and consciously switch your approach."
          setup={{
            cpuBehavior: 'Online ranked or player match — real opponents who adapt',
          }}
          goal="Practice the adaptation cycle: identify the opponent's habit, switch your approach, and re-condition them."
          successCriteria="You switch your entry point or mixup at least once per match based on a habit you identified. You use at least 3 different RFS options across the set. You throw at least one command grab per match when the opponent is blocking passively."
          duration="10 matches"
          whyThisWorks="You're no longer running a script. You're reading and reacting in real time — the core skill that separates good Hwoarang players from great ones."
        />
      </Section>
    </Chapter>
  )
}
