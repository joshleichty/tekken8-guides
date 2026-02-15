import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, MatchScenario, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="The Sentai Engine"
      intro="Every Reina round runs through Sentai. This chapter teaches you the one stance that makes her entire game work — how to enter it, what to do from it, and how to read your opponent's response."
      hasPrevious
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Punishment Into Pressure"
    >
      <Section title="Entering Sentai">
        <p>
          Sentai stance (f+3) is where Reina's pressure lives. You can enter it manually, but the real
          power comes from transitioning into it off moves your opponent already has to deal with.
        </p>

        <MoveCard
          character="reina"
          videoId="f,F+2"
          move={{
            input: 'f,f+2',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i12',
            onBlock: '-9',
            onHit: '+2',
            tags: ['Mid', 'Approach', 'Key Move'],
            description: 'Your most important move. Safe mid with massive range. Hold forward on block or hit to enter Sentai. On block in Sentai you are +2. On hit you are +13 — SEN 3 is guaranteed.',
          }}
          showVideo
        />

        <KeyConcept title="The Hit Confirm" icon="🎯">
          <p>
            When f,f+2 hits, hold forward and press <strong>3</strong>. This is guaranteed — the opponent
            cannot block it. When f,f+2 is blocked, you're in Sentai at +2, and you need to read what
            the opponent does next.
          </p>
          <p>
            Practice this hit confirm until it's automatic. Set the dummy to random guard. Only let
            SEN 3 rip when you <em>see</em> f,f+2 connect. If they block, hold your SEN options and
            read the situation.
          </p>
        </KeyConcept>

        <p>As of Season 2, <strong>f,f+2 → SEN 2</strong> is also guaranteed on hit (+13). Use SEN 3 for the heat engage, or SEN 2 for a tornado setup if you're already in heat.</p>

        <MoveCard
          character="reina"
          videoId="1,1,2"
          move={{
            input: '1,1,2',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 6, 12',
            startup: 'i10',
            onBlock: '-17',
            onHit: '+11 SEN',
            tags: ['10f Punish', 'Hit Confirmable', 'Key Move'],
            description: 'Hit confirmable jab string. The third hit is launch punishable, so only complete it on hit. Transitions to Sentai at +11 — all SEN options are uninterruptible. Hold back to cancel the transition (useful at the wall for +14 wall crush).',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="f+2,3"
          move={{
            input: 'f+2,3',
            hitLevel: ['h', 'm'],
            damage: '8, 16',
            startup: 'i13',
            onBlock: '-9',
            onHit: '+2',
            onCH: '+6',
            tags: ['High-Mid', 'Transition'],
            description: 'Safe string with great range. Hold forward to enter Sentai. On block in SEN you are -2, so be cautious. On hit +9 in SEN. On counter hit +13 — SEN 3 is guaranteed. The second hit is delayable, adding a layer of mixup.',
          }}
          showVideo
        />

        <Collapsible title="Other Sentai Transitions" icon="📋">
          <ul>
            <li><strong>b+1,1,3 → hold F:</strong> Enters SEN at +0 on block, +13 on hit. The last hit is a CH launcher if you don't transition. SEN 3 is guaranteed and hit confirmable on hit.</li>
            <li><strong>df+1 → hold F:</strong> Enters SEN at -3 on block, +4 on hit. Risky on block — opponents can interrupt most options. Better used when you know they'll respect you.</li>
            <li><strong>f,n+4 (S2):</strong> High-crushing low from crouch dash. Transitions to SEN at +3 on hit. Cancel with back for neutral on hit. On counter hit, SEN 2 or SEN 3 is guaranteed.</li>
            <li><strong>WRA 1 → hold F:</strong> From Heaven's Wrath. Enters SEN at +0 on block, +13 on hit. On CH +18 — SEN 1+2 is guaranteed for 68 damage.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Sentai Options">
        <p>
          Once you're in Sentai, you have six meaningful options. Each beats something different.
          You're not guessing randomly — you're reading what the opponent tends to do and picking
          the option that punishes it.
        </p>

        <MoveCard
          character="reina"
          videoId="SEN.3"
          move={{
            input: 'SEN 3',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i12',
            onBlock: '+1',
            onHit: '+7',
            tags: ['High', 'Homing', 'Heat Engager', 'Fastest'],
            description: 'Your fastest Sentai option and primary heat engager. Homing, so it catches sidesteps. +1 on block means you maintain pressure. Guaranteed after f,f+2 on hit or 1,1,2 on hit. The move to confirm into whenever possible.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="SEN.2"
          move={{
            input: 'SEN 2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i13',
            onBlock: '-4',
            onHit: '+8',
            tags: ['Mid', 'Tornado', 'Safe'],
            description: 'Fast safe mid. Tornado in combos. On hit transitions to Heaven\'s Wrath at +8 by holding down. On block, -4 is functionally safe. Use this when the opponent is ducking your SEN 3.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="SEN.1+2"
          move={{
            input: 'SEN 1+2',
            hitLevel: ['m', 'm'],
            damage: '13, 17',
            startup: 'i14',
            onBlock: '-6 WRA',
            onHit: '+31a',
            tags: ['Mid-Mid', 'Tornado', 'Power Mid'],
            description: 'Your scariest mid from Sentai. 51 damage mini combo on hit, tornado in juggle combos, and transitions to Heaven\'s Wrath. In heat, the WRA auto-parry makes this incredibly safe on block — only lows, throws, and hopkicks beat it. Outside heat, -6 in WRA means 11f moves can punish before you can power crush.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="SEN.4"
          move={{
            input: 'SEN 4',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i26',
            onBlock: '+4',
            onHit: '+12d',
            tags: ['Mid', 'Plus on Block', 'Chip Damage', 'Low Crush'],
            description: 'Slow but plus on block with chip damage. Low crushes, so it beats down jabs. On hit gives a guaranteed CD4 (hellsweep). Weak to sidesteps. Use when the opponent is frozen and you want safe plus frames.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="SEN.3+4"
          move={{
            input: 'SEN 3+4',
            hitLevel: ['l', 'h'],
            damage: '10, 12',
            startup: 'i20',
            onBlock: '-29/-11',
            onHit: '+4',
            tags: ['Low-High', 'Homing', 'High Crush'],
            description: 'Homing low that high crushes. Launch punishable on the first hit if they block low, but the second hit is only -11 if they block standing. Use sparingly to keep the opponent from ducking everything else.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="SEN.1+3"
          move={{
            input: 'SEN 1+3',
            hitLevel: ['h'],
            damage: '12',
            startup: 'i16',
            onBlock: '',
            onHit: '-3',
            tags: ['Throw', 'Unbreakable'],
            description: 'Unbreakable throw from Sentai. Low damage but forces a knockdown. The opponent must duck to avoid it, which opens them up to all your mid options. At the wall, this becomes much more threatening.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="SEN.1,2"
          move={{
            input: 'SEN 1,2',
            hitLevel: ['m', 'm'],
            damage: '12, 25',
            startup: 'i16',
            onBlock: '-16',
            onHit: '+21a',
            tags: ['Power Crush', 'Hit Confirmable'],
            description: 'Power crush string. Hit confirmable — only press 2 if the first hit connects or you absorbed an attack. The second hit is launch punishable, so never throw it out raw. Blue spark version (SEN 1, qcf+2) does 5 extra damage.',
          }}
          showVideo
        />
      </Section>

      <Section title="The f,f+2 On-Block Mind Game">
        <p>
          This is the single most important situation to master. You land f,f+2 on block, transition
          to Sentai at +2. Now what? The answer depends entirely on what the opponent does.
        </p>

        <MatchScenario
          title="f,f+2 On Block → Sentai"
          situation="You're in Sentai at +2. The opponent just blocked your f,f+2. What do they do?"
          options={[
            {
              action: 'They jab',
              input: 'SEN 3 or SEN 3+4',
              result: 'SEN 3 trades favorably (your 12f homing high vs their 10f jab — you\'re +2 so it wins). SEN 3+4 high crushes under the jab. If they do anything slower than a jab, SEN 1,2 power crush also works.',
              isOptimal: true,
              followup: 'Once they stop jabbing, all your other options become available again.',
            },
            {
              action: 'They duck',
              input: 'SEN 1+2 or SEN 2',
              result: 'SEN 1+2 is your highest damage mid (51 damage). SEN 2 is safer at -4 on block. Both punish the duck. SEN 4 is also plus on block if they duck and block.',
              followup: 'Once they\'re scared to duck, your throw and low become live again.',
            },
            {
              action: 'They stand block',
              input: 'SEN 3+4 or SEN 1+3',
              result: 'The low or the unbreakable throw. Low risk per hit, but accumulated chip and throws add up. The real power is that standing block means they accept your pressure.',
              followup: 'When they stand block, you\'re winning. Cycle between your options to keep them guessing.',
            },
            {
              action: 'They sidestep right',
              input: 'SEN 3',
              result: 'SEN 3 is homing — it catches all sidesteps. Once they know this, they stop stepping and have to commit to one of the other defensive options.',
            },
            {
              action: 'They power crush',
              input: 'SEN 3+4 or throw',
              result: 'SEN 3+4 low crushes early in many power crush startups. The throw beats power crush clean. You can also just block and launch the power crush.',
              followup: 'Cancel Sentai into nothing (hold back) and block. Most power crushes are launch punishable.',
            },
          ]}
          keyTakeaway="There is no single option that beats everything from Sentai at +2. But SEN 3 is your safest default because it's fast, homing, +1 on block, and a heat engager. Use it until the opponent proves they can deal with it, then adapt."
        />

        <TipBox variant="tip" title="The Yagami Approach">
          Top Reina player Yagami notes that at +2 in Sentai, the situation actually favors the
          defender in terms of raw risk-reward. Your best outcome is around 42 damage from a wall splat.
          If the opponent guesses right on most of your options, you get launched. The way you win this
          situation is through <strong>accumulated pressure</strong> — not one big gamble, but constant
          small advantages that add up until the opponent cracks.
        </TipBox>
      </Section>

      <Section title="1,1,2 On Hit — The Free Mixup">
        <p>
          When 1,1,2 connects (your 10-frame punish or a stray jab string), you enter Sentai at
          <strong> +11</strong>. This changes everything. At +11:
        </p>
        <ul>
          <li><strong>SEN 3, SEN 2, SEN 1,2, and SEN 1+2</strong> are all completely uninterruptible — even by parries</li>
          <li><strong>SEN 4 and SEN 3+4</strong> crush jabs (SEN 4 low crushes, SEN 3+4 high crushes)</li>
          <li>The only thing the opponent can step is <strong>SEN 4</strong> — everything else tracks</li>
        </ul>
        <p>
          Your safe default here is <strong>SEN 2</strong> (-4 on block). It keeps you safe while testing
          if they'll press into the slower options. If they stand block, run the throw or low.
          If they duck, SEN 1+2 gives you 51 damage.
        </p>

        <TipBox variant="warning" title="At the Wall: Cancel the Transition">
          At the wall, hold <strong>back</strong> after 1,1,2 connects. This cancels the Sentai transition
          and gives you <strong>+14 with wall crush</strong> instead. From here you have time for hellsweep,
          f+4 (plus frames), or a throw — all more dangerous than the Sentai mixup because the wall amplifies
          everything.
        </TipBox>
      </Section>

      <Section title="Practice: The Sentai Engine">
        <PracticeBox
          title="f,f+2 Hit Confirm Drill"
          setup="Practice Mode. Set dummy to First Action: Random Guard, Second Action: Guard All."
          tasks={[
            { id: 'confirm-sen3', text: 'Hit confirm f,f+2 → SEN 3 (only on hit)', type: 'counter', target: 10 },
            { id: 'block-nothing', text: 'When f,f+2 is blocked, do NOT press SEN 3', type: 'counter', target: 10 },
            { id: 'confirm-112', text: 'Hit confirm 1,1,2 → SEN 2 (only complete string on hit)', type: 'counter', target: 10 },
            { id: 'wall-cancel', text: 'At the wall: 1,1,2 → hold back (cancel transition, get +14)', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Sentai Mixup Drill"
          setup="Practice Mode. Set dummy to Stand Guard. Practice entering Sentai from f,f+2 on block and using each option."
          tasks={[
            { id: 'sen3', text: 'f,f+2 → SEN 3 (heat engager, +1 on block)', type: 'counter', target: 5 },
            { id: 'sen2', text: 'f,f+2 → SEN 2 (safe mid, -4 on block)', type: 'counter', target: 5 },
            { id: 'sen1+2', text: 'f,f+2 → SEN 1+2 (power mid, goes to Heaven\'s Wrath)', type: 'counter', target: 5 },
            { id: 'sen3+4', text: 'f,f+2 → SEN 3+4 (low option)', type: 'counter', target: 5 },
            { id: 'sen-throw', text: 'f,f+2 → SEN 1+3 (unbreakable throw)', type: 'counter', target: 5 },
            { id: 'sen4', text: 'f,f+2 → SEN 4 (plus frames, chip damage)', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
