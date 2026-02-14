import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  DecisionGrid,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Making Them Pay"
      intro="Lili's offense is flashy — stances, plus frames, backturn mixes. But half the game is defense: blocking the opponent's move and choosing the right punish. A punish that's too weak wastes the opening. A punish that's too ambitious gets you killed. This chapter teaches every punisher in Lili's arsenal and when to use each one."
      hasPrevious
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Heat & the 50/50"
    >
      <Section title="Why Punishment Matters on Lili">
        <p>
          Lili's offense revolves around conditioning — chipping with lows, stacking plus frames,
          forcing guesses. But the fastest way to shift momentum is punishment. When the opponent
          commits to something unsafe, your punish is free damage with zero risk. Lili has
          excellent punishment: long-range standing punishers, a 2,4 knockdown at i10, and a
          ws+1,2 that transitions into Dew Glide for continued pressure.
        </p>
        <p>
          The goal isn't to memorize every punisher for every frame — it's to build muscle memory
          for the four or five punishes you'll use 90% of the time, then add range-specific or
          situation-specific options as needed.
        </p>
      </Section>

      <Section title="Standing Punishers">
        <DecisionGrid
          title="Standing Punishment Chart"
          description="Choose your punish based on the frame disadvantage of the opponent's move."
          rows={[
            { situation: 'i10 (-10 or worse)', response: '1,2 (+8 on hit) or 2,4 (knockdown) or 1,1 (BT +4)', reason: '1,2 for frame advantage; 2,4 for knockdown/wall splat; 1,1 for BT pressure', risk: '2,4 has short range — use 1,2 if unsure' },
            { situation: 'i12 (-12 or worse)', response: 'f+2,3 (knockdown, wall splat)', reason: 'Incredible range, wall splats from far, your default mid-punish', risk: 'f+2 is a high — use 1+2 if the move recovers crouching' },
            { situation: 'i13 (-13 or worse)', response: 'f+2,3 or df+4,4 (more damage)', reason: 'df+4,4 does 5 more damage than f+2,3 but less range', risk: 'df+4,4 low extension can be parried; f+2,3 is safer overall' },
            { situation: 'i15 (-15 or worse)', response: 'uf+3 (hop kick) or 3,1 (heat engager, range)', reason: 'uf+3 for launch combo; 3,1 for pushback moves or heat activation', risk: '3,1 is -13 on block — only use as punish, not raw' },
            { situation: 'i16 (-16 or worse)', response: 'df+2 (launcher)', reason: 'Better range than hop kick, transitions to BT or standing combo', risk: 'High hitbox — whiffs on low stances like Zafina or Ling' },
            { situation: 'i17+ (-17 or worse)', response: 'd+3+4 (Matterhorn, max damage)', reason: 'Biggest launcher = biggest combo = biggest damage', risk: 'Huge punish on block if you misread the frame advantage' },
          ]}
        />

        <MoveCard character="lili"
          videoId="2,4"
          move={{
            input: '2,4',
            hitLevel: ['h', 'h'],
            damage: '8, 20',
            startup: 'i10',
            onBlock: '-2~+2',
            onHit: '+24a (+15)',
            tags: ['Punisher', 'Knockdown', 'Wall Splat'],
            description: 'One of the best i10 punishes in the game. Knocks down on hit and wall splats, converting into a full combo at the wall. Short range on the 2 jab, so you need to be close. When you have the wall behind the opponent, this is devastating — a blocked hopkick becomes a full combo from a jab punish.',
            notes: [
              'i10 knockdown — extremely rare at this speed',
              'Wall splats for combo damage',
              'Short range — use 1,2 from further away',
              'Guaranteed from first hit with up to 5 frame delay',
              'The go-to wall punish at any frame disadvantage',
            ],
          }}
          showVideo
        />

        <MoveCard character="lili"
          videoId="f+2,3"
          move={{
            input: 'f+2,3',
            hitLevel: ['h', 'm'],
            damage: '10, 20',
            startup: 'i12~13',
            onBlock: '-15',
            onHit: '+24a (+7)',
            tags: ['Punisher', 'Knockdown', 'Wall Splat', 'Range'],
            description: 'Your default i12 punish and one of the longest-range punishers in the game. Wall splats from absurd distances. Use this for everything from -12 to -14. The first hit is high, so if the move recovers crouching, use 1+2 instead.',
            notes: [
              'Incredible range — reaches where most punishers can\'t',
              'Wall splats from very far',
              'First hit is high — whiffs on crouching recovery',
              'Use for i12 through i14 punishes as your default',
              'Also strong as a whiff punisher from max range',
            ],
          }}
          showVideo
        />

        <KeyConcept title="The i10 Decision" icon="🎯">
          <p>
            Lili's i10 punish is a choice, not a default. Each option serves a different goal:
          </p>
          <ul>
            <li><code>1,2</code> — +8 on hit. Sets up your f+4 frame trap. Best for continued pressure.</li>
            <li><code>2,4</code> — Knockdown/wall splat. Short range but converts into combos at the wall.</li>
            <li><code>1,1</code> — Backturn at +4 on hit. Starts your backturn mix. Good mid-screen.</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            At the wall, always go for <code>2,4</code> — the wall splat combo does far more damage
            than any plus-frame setup. Mid-screen, <code>1,2</code> into your pressure game is usually
            the highest-value play.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Crouching Punishers">
        <DecisionGrid
          title="Crouching Punishment Chart"
          description="When you block a low or are otherwise in crouch, these are your options."
          rows={[
            { situation: 'i11 (-11 crouching)', response: 'ws+4 (knockdown)', reason: 'Safe knockdown mid at i11. At the wall: ws+4 into df+4,4 guaranteed', risk: 'Doesn\'t wall splat in the open — damage is modest' },
            { situation: 'i13 (-13 crouching)', response: 'ws+1,2 (+8, DEW transition)', reason: 'Your go-to. +8 on hit, transitions to DEW with F for continued pressure', risk: 'Second hit is high — can be ducked if they read the string' },
            { situation: 'i14 (-14 crouching)', response: 'FC df+1 (knockdown, wall splat)', reason: 'Safe on block, wall splats, tracks well', risk: 'ws+1,2 usually better for damage and pressure' },
            { situation: 'i15 (-15 crouching)', response: 'ws+3 (instant tornado launcher)', reason: 'Evasive launcher, instant tornado for combo', risk: 'Or uf+3 hop kick — ws+3 has less damage ceiling' },
            { situation: 'i16+ (-16 crouching)', response: 'ws+2 (launcher)', reason: 'Big launcher, transitions to BT with B for combo routes', risk: 'High hitbox — can whiff on low recovery stances' },
          ]}
        />

        <MoveCard character="lili"
          videoId="ws1,2"
          move={{
            input: 'ws+1,2',
            hitLevel: ['m', 'h'],
            damage: '10, 16',
            startup: 'i13~14',
            onBlock: '-3',
            onHit: '+8',
            tags: ['Punisher', 'Plus on Hit', 'DEW Transition'],
            description: 'Your bread-and-butter crouching punish. +8 on hit puts you in the same frame trap situation as 1,2 on hit. Hold F to transition into Dew Glide for continued pressure. The extension ws+1,2,4 is a low that catches opponents who don\'t expect it — but it\'s -14 on block and the last hit is a CH launcher.',
            notes: [
              '+8 on hit — f+4 frame trap, same as 1,2 on hit',
              'Hold F: transition to Dew Glide for stance pressure',
              'ws+1,2,4 extension: low surprise, -14 on block, CH launches',
              'ws+1,2~F guaranteed DEW 3 follow-up after ws+1,2,4 on hit',
              'Use this for all -13 to -14 lows as your default',
            ],
          }}
          showVideo
        />

        <TipBox variant="tip" title="ws+4 at the Wall">
          At the wall, <code>ws+4</code> gives a guaranteed <code>df+4,4</code> follow-up for
          extra damage and a floor break. This makes blocking lows near the wall extremely dangerous
          for the opponent — even a ws+4 punish leads to chunky damage plus a knockdown into your
          oki game.
        </TipBox>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          Lili's movement is her greatest defensive asset. Her sidestep makes opponents whiff,
          and her long limbs punish from ranges other characters can only dream of. Here are your
          whiff punish options by range:
        </p>

        <DecisionGrid
          title="Whiff Punisher Range Chart"
          description="Match your punisher to the distance between you and the whiffed move."
          rows={[
            { situation: 'Close range whiff', response: 'df+2 (i16 launcher) or uf+3 (i15 hop kick)', reason: 'Fastest launch punishers with decent damage', risk: 'df+2 hitbox is high — may whiff on low stances' },
            { situation: 'Mid range whiff', response: '3,1 (i15, long range, heat engager)', reason: 'Absurd range on 3 kick, heat engager on 3,1', risk: '-13 on block — only use as a punish' },
            { situation: 'Far range whiff', response: 'f+4 (i17, longest range mid)', reason: 'Reaches from full screen, safe on block with pushback', risk: 'Doesn\'t launch on normal hit — only for chip damage at range' },
            { situation: 'Massive whiff', response: 'd+3+4 (Matterhorn, i17 launcher)', reason: 'Maximum damage launch — your biggest punish', risk: '-21 on block — only on confirmed whiffs' },
          ]}
        />

        <KeyConcept title="3,1: The Range King" icon="👑">
          <p>
            <code>3,1</code> is Lili's signature whiff punisher. The first hit (<code>3</code>) is
            unparriable, reaches from absurd range, and is a mid. If it connects, the second hit is
            guaranteed for a knockdown and heat engager. In heat, <code>3,1</code> launches for a full
            combo.
          </p>
          <p style={{ marginTop: '8px' }}>
            Use this to punish moves with heavy pushback that other punishers can't reach — Paul's
            deathfist, Heihachi's f,f+2, Kazuya's f+2. Lili's legs make these "safe" moves punishable
            where they wouldn't be against shorter characters.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practice: Punishment Drills">
        <PracticeBox
          title="Building Your Punish Game"
          setup="Practice Mode. Lili vs any opponent. Record the dummy doing various unsafe moves."
          tasks={[
            { id: 'lili-punish-i10-wall', text: 'Punish a -10 move with 2,4 at the wall five times', detail: 'Record the dummy doing a -10 move near the wall (like a blocked hopkick). Block it, immediately press 2,4 for the wall splat. Feel the timing.', type: 'counter', target: 5 },
            { id: 'lili-punish-i12-f23', text: 'Punish a -12 move with f+2,3 five times', detail: 'Record the dummy doing a -12 move. Block it, press f+2,3. Marvel at the range. This is your default standing punish.', type: 'counter', target: 5 },
            { id: 'lili-punish-ws12', text: 'Block a low and punish with ws+1,2~F into DEW 3+4 three times', detail: 'Record a low attack. Block it, do ws+1,2, hold F for Dew Glide, then press 3+4. You just turned a blocked low into +6 pressure.', type: 'counter', target: 3 },
            { id: 'lili-punish-whiff-31', text: 'Make the dummy whiff, punish with 3,1 five times', detail: 'Set dummy to "2nd Action: Attack" and backdash to make them whiff. React with 3,1 from max range. This is your heat engager whiff punish.', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
