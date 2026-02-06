import { Chapter, Section } from '../../../components/guide'
import { MoveCard, TipBox, PracticeBox, KeyConcept, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Grab 'Em"
      intro="Paul's throw game is better than most characters. He has all three throw break types, wall-splatting throws, a command grab with a Death Fist follow-up, and the rare Ultimate Tackle. Throws are the third prong of Paul's close-range offense — when they're blocking both mid and low, grab them."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Learn Defense"
    >
      <Section title="Why Throws Matter for Paul">
        <p>
          At point blank, your opponent has to deal with Death Fist (mid), Demo Man (low), and now throws.
          Throws beat blocking entirely — it doesn't matter if they're blocking high or low, a throw grabs them.
          The opponent who freezes up and blocks everything becomes throw food.
        </p>
        <p>
          Paul's throws are extra dangerous near walls because multiple throws wall splat, adding significant bonus damage
          to what are already above-average damage throws.
        </p>
      </Section>

      <Section title="1 Break Throws">
        <MoveCard
          character="paul"
          move={{
            input: 'b+1+4',
            hitLevel: ['throw'],
            damage: '40',
            startup: 'i11',
            onBlock: '-2',
            onHit: '+6d',
            tags: ['throw'],
            description: '1 break throw. Side switches. Near the wall, knocks them against the wall for bonus damage. Your go-to 1 break.',
            notes: [
              'Break with 1',
              'Side switches — useful for positioning',
              'Near wall: bonus wall splat damage',
              'i11 startup — very fast for a command throw',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="paul"
          move={{
            input: 'df+1+3',
            hitLevel: ['throw'],
            damage: '22',
            startup: 'i12~13',
            onBlock: '-2',
            onHit: '+9',
            tags: ['throw'],
            description: '1 break command grab with Death Fist follow-up. The initial throw does 22 damage, then input qcf+2 for an additional Death Fist. With perfect timing (blue spark), the Death Fist does bonus damage.',
            notes: [
              'Break with 1',
              'Follow-up: df+1+3, qcf+2 — requires strict qcf input',
              'Perfect timing on Death Fist follow-up for blue spark (42 total vs 37 regular)',
              'Wall splats with the Death Fist follow-up',
              'In Heat: Death Fist follow-up does even more damage',
            ],
          }}
          showVideo
        />

        <TipBox title="Death Fist Throw Timing" variant="tip">
          After landing df+1+3, the Death Fist follow-up requires a strict qcf+2 input. The timing for the blue spark (extra damage)
          is roughly when the initial punch visually connects with the opponent. Input the motion fast and press 2 as it lands.
          Even without the blue spark, 37 damage from a throw is above average.
        </TipBox>
      </Section>

      <Section title="2 Break Throw">
        <MoveCard
          character="paul"
          move={{
            input: '2+4,b',
            hitLevel: ['throw'],
            damage: '40',
            startup: 'i12~14',
            onBlock: '-2',
            onHit: '0d',
            tags: ['throw'],
            description: '2 break throw. Hit 2+4 then press back to change it from a generic throw to a palm strike. Throws opponent heavily to Paul\'s right side. Wall splats if throwing them into the wall from Paul\'s right.',
            notes: [
              'Break with 2',
              'Changes angle — throws to Paul\'s right side',
              'Wall splats if wall is to Paul\'s right',
              'Useful for positioning near walls',
            ],
          }}
          videoId="2+4"
          showVideo
        />
      </Section>

      <Section title="1+2 Break Throws">
        <MoveCard
          character="paul"
          move={{
            input: 'uf+1+2',
            hitLevel: ['throw'],
            damage: '40',
            startup: 'i12',
            onBlock: '-6',
            onHit: '0d',
            tags: ['throw'],
            description: '1+2 break. Big overhead slam. On stages with ground breaks, this breaks the floor. Useful for floor break stages.',
            notes: [
              'Break with 1+2',
              'Spike — ground break on appropriate stages',
              'i12 startup',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="paul"
          move={{
            input: 'f,F+1+2',
            hitLevel: ['throw'],
            damage: '38',
            startup: 'i12',
            onBlock: '0',
            onHit: '+20d',
            tags: ['throw', 'wall splat'],
            description: '1+2 break throw that flings the opponent across the screen. Wall splats from significant distance. If broken at the wall, side switches — be careful of positioning.',
            notes: [
              'Break with 1+2',
              'Enormous throw distance — wall splats from far away',
              'If broken at wall: side switches, can put YOUR back to the wall',
              'Use when opponent\'s back is to the wall for massive wall damage',
            ],
          }}
          videoId="f,F+1+2"
          showVideo
        />

        <TipBox title="Wall Throw Warning" variant="warning">
          f,f+1+2 is incredible near walls — it flings them into the wall for a splat. But if the opponent
          breaks the throw while you're at the wall, the side switch means YOU get wall splatted. Be mindful
          of your own position. If your back is near the wall, df+1+3 (Death Fist throw) is the safer option
          because its break doesn't punish you as badly.
        </TipBox>
      </Section>

      <Section title="Ultimate Tackle">
        <MoveCard
          character="paul"
          move={{
            input: 'FC 1+2',
            hitLevel: ['throw'],
            damage: '50',
            startup: 'i26',
            onBlock: '-5',
            onHit: '+3d',
            tags: ['throw'],
            description: 'Ultimate Tackle. Paul tackles the opponent to the ground. Only a few characters still have this. Near-impossible to break (6-frame break window vs 20-frame for normal throws).',
            notes: [
              'Break with 1+2 — but only 6 frames to break (almost impossible)',
              'From tackle: 2,d+1,1,1+2 for 50 damage (unique chain)',
              'Must be performed from full crouch (FC)',
              'Rare tool — use when opponent isn\'t expecting it',
              'The tackle itself is almost unbreakable',
            ],
          }}
          videoId="FC.1+2"
          showVideo
        />

        <p>
          The Ultimate Tackle used to be universal — now only a handful of characters have it. Paul keeping it is
          a nice bonus. The initial tackle has only a 6-frame break window (compared to 20 frames for normal throws),
          making it nearly impossible to break on reaction. From the tackle, Paul can chain into punches for 50 damage
          or go for arm breaks. It's not something you'll use every round, but having it as an option keeps opponents
          on their toes.
        </p>
      </Section>

      <Section title="Throw Strategy">
        <KeyConcept title="When To Throw" icon="🤝">
          <p>
            Throws are your third layer of offense at close range:
          </p>
          <ul>
            <li><strong>If they respect the 50/50 and block:</strong> Grab them. They can't block throws.</li>
            <li><strong>Near walls:</strong> Wall-splatting throws (f,f+1+2, b+1+4, df+1+3) add enormous damage.</li>
            <li><strong>After df+1~b sway pressure:</strong> They're focused on sway options — grab them.</li>
            <li><strong>Mix your break types:</strong> Use all three (1, 2, 1+2) so they can't autopilot one break.</li>
            <li><strong>From crouch:</strong> After crouch dash or Deep Dive approaches, FC 1+2 tackle is available.</li>
          </ul>
        </KeyConcept>

        <Collapsible title="All Throws Quick Reference" icon="📋">
          <ul>
            <li><strong>b+1+4:</strong> 1 break. 40 damage. Wall splat at wall. Side switch.</li>
            <li><strong>df+1+3 → qcf+2:</strong> 1 break. 37-42 damage (with Death Fist). Wall splat.</li>
            <li><strong>2+4,b:</strong> 2 break. 40 damage. Throws to Paul's right. Wall splat at right wall.</li>
            <li><strong>uf+1+2:</strong> 1+2 break. 40 damage. Floor break.</li>
            <li><strong>f,f+1+2:</strong> 1+2 break. 38 damage. Wall splat from far. Caution: side switch on break.</li>
            <li><strong>FC 1+2:</strong> 1+2 break (6f window). Tackle. 50 damage on ground chain.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Practice: Throws">
        <PracticeBox
          title="Throw Basics"
          setup="Practice Mode. CPU Stand (no break). Near wall."
          tasks={[
            { id: 'throw-b14', text: 'b+1+4 near wall — observe the wall splat. 5 times.', type: 'counter', target: 5 },
            { id: 'throw-df13', text: 'df+1+3 → qcf+2 — practice the Death Fist follow-up. 5 times.', type: 'counter', target: 5 },
            { id: 'throw-df13-jf', text: 'df+1+3 → qcf+2 with blue spark (perfect timing). 3 times.', type: 'counter', target: 3 },
            { id: 'throw-ff12', text: 'f,f+1+2 near wall — observe the wall fling. 3 times.', type: 'counter', target: 3 },
            { id: 'throw-tackle', text: 'From crouch: FC 1+2 → 2,d+1,1,1+2. Full tackle chain. 3 times.', type: 'counter', target: 3 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
