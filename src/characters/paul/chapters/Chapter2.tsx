import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, TipBox, PracticeBox, KeyConcept, Flowchart, MatchScenario } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="The Fist and the Sweep"
      intro="Everything Paul does funnels into one moment: he's in your face, and you have to guess mid or low. Both answers deal enormous damage. This chapter teaches you the two moves that define the character."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Your Buttons"
    >
      <Section title="Death Fist — qcf+2">
        <p>
          This is the most iconic move in Tekken history. A single straight punch that hits like a freight train. If there were
          a Mount Rushmore of Tekken moves, Death Fist would be on it. Let's break down why.
        </p>

        <MoveCard
          character="paul"
          move={{
            input: 'qcf+2',
            hitLevel: ['m'],
            damage: '45',
            startup: 'i13~14',
            onBlock: '-17',
            onHit: '+26a',
            tags: ['mid', 'heat engager', 'wall splat'],
            description: 'Phoenix Smasher. The reason people play Paul. Clean hit only at close range (45 damage). Without clean hit deals 30 damage. In Heat, becomes -13 on block with more pushback — effectively safe.',
            notes: [
              'Heat Engager — starts Heat on hit',
              'Clean Hit range 2.3 — deals 45 at close range, 30 at tip range',
              'In Heat: becomes i13, -13 on block with enormous pushback and wall carry',
              'Input: down, down-forward, forward + 2 (quarter circle forward + 2)',
            ],
          }}
          showVideo
        />

        <SubSection title="Why Death Fist Is Special">
          <p>
            At 45 damage for a single mid attack, Death Fist is one of the hardest-hitting non-launcher moves in Tekken 8.
            It comes out at 13-14 frames — fast for the damage it deals. It's a Heat Engager, meaning landing it transitions you
            into the most powerful state Paul can be in. And it sends your opponent flying toward the wall with massive pushback.
          </p>
          <p>
            Yes, it's -17 on block — technically punishable. But the pushback is so severe that many characters literally cannot
            reach Paul to punish it, especially from further ranges. And in Heat mode, it drops to -13 with even MORE pushback,
            making it effectively unpunishable for most of the cast.
          </p>
        </SubSection>

        <SubSection title="When To Use It">
          <KeyConcept title="Death Fist Situations" icon="👊">
            <ul>
              <li><strong>After a Heat Engager (+17):</strong> Your opponent MUST block this. It's guaranteed pressure. Mix with Demo Man.</li>
              <li><strong>Whiff punishment:</strong> When they swing and miss, crouch dash in and Death Fist. The range and speed make it ideal.</li>
              <li><strong>As a read:</strong> If you think they're going to press buttons or stand there, just go for it. The reward is enormous and the risk is manageable thanks to pushback.</li>
              <li><strong>In Heat mode:</strong> With -13 and massive pushback, it's essentially a safe high-damage mid. Throw it out.</li>
              <li><strong>Random yolo at range:</strong> Paul being Paul. Sometimes you just send it. If they weren't expecting it, that's their problem.</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <TipBox title="The Range Tax" variant="tip">
          Death Fist has a clean hit mechanic. At close range (2.3 units), you deal the full 45 damage. At tip range, you only deal 30.
          This rarely matters in practice because you usually throw Death Fist when you're in their face,
          but know it exists. The pushback is the same regardless.
        </TipBox>
      </Section>

      <Section title="Demo Man — d+4,2:1+2">
        <p>
          If Death Fist is the hammer, Demo Man is the scythe. A low sweep that trips, pops up, and slams — dealing
          devastating damage for a low attack. Together with Death Fist, it forms the most feared 50/50 in Tekken 8.
        </p>

        <MoveCard
          character="paul"
          move={{
            input: 'd+4,2:1+2',
            hitLevel: ['L', 'm', 'm'],
            damage: '62',
            startup: 'i15',
            onBlock: '-17',
            onHit: '+3d',
            tags: ['low', 'wall splat'],
            description: 'Demo Man (just frame version). The most damaging basic low in Tekken 8. The just frame timing is after the second hit connects — hit 1+2 as the elbow connects for the blue spark. Without just frame: 58 damage.',
            notes: [
              'Requires clean hit (range 1.59) — must be close for the trip effect',
              'Without clean hit: 8 damage, -17 on hit — does not trip',
              'Just frame window: 21~22 frames after the 2 input',
              'd+4 alone is i15, -31 on block — launch punishable if the full string is blocked',
              'Wall splats on hit — even more devastating near walls',
            ],
          }}
          videoId="d+4,2,1+2"
          showVideo
        />

        <SubSection title="Why Demo Man Is Special">
          <p>
            At 62 damage (just frame) or 58 damage (regular), Demo Man does more damage than many character's basic combos.
            From a low. It's an unseeable 15-frame low that trips into a combo ender. No other character in Tekken 8 has a basic
            low this destructive.
          </p>
          <p>
            The just frame version (the blue spark) requires pressing 1+2 with precise timing as the second hit (the elbow)
            connects. If you miss the timing, you still get 58 damage — so don't stress it. The 4-damage difference is
            nice but not worth dropping the input over.
          </p>
        </SubSection>

        <SubSection title="The Clean Hit Requirement">
          <TipBox title="Must Be Close" variant="warning">
            Demo Man requires clean hit to trip. The clean hit range is only 1.59 — meaning you need to be practically touching
            your opponent. If only the tip of d+4 connects from far away, you get 8 damage and you're -17 on hit. That's a
            disaster. <strong>Only throw Demo Man when you are point blank.</strong> This is why the approach tools and crouch dash
            chapters exist — they get you to Demo Man range.
          </TipBox>
        </SubSection>

        <SubSection title="When To Use It">
          <KeyConcept title="Demo Man Situations" icon="🦶">
            <ul>
              <li><strong>Point blank after a Heat Engager (+17):</strong> They're terrified of Death Fist. Demo Man is free.</li>
              <li><strong>After conditioning with mids:</strong> If you've been hitting df+1, Death Fist, and other mids, they'll start blocking high. Sweep.</li>
              <li><strong>Near the wall:</strong> Demo Man wall splats, leading to massive wall combo damage — 70+ easy.</li>
              <li><strong>Out of crouch dash:</strong> The crouch dash animation looks the same whether Death Fist or Demo Man is coming. Visually unreactable.</li>
            </ul>
          </KeyConcept>
        </SubSection>
      </Section>

      <Section title="The 50/50 — How It Works">
        <p>
          Here's the core of Paul's game: when you're in someone's face, they have to guess. Death Fist is a mid — it hits
          standing and crouching. Demo Man is a low — it only hits standing. If they block low to stop Demo Man, Death Fist
          smashes them. If they block standing to stop Death Fist, Demo Man sweeps them.
        </p>
        <p>
          Both options come out of the crouch dash (qcf), which looks identical for both moves until the attack actually comes out.
          At 13-15 frames, neither option is reactable. Your opponent is genuinely guessing.
        </p>

        <Flowchart
          title="The Paul 50/50"
          nodes={[
            { type: 'start', label: 'Paul is in your face (especially at +17 after Heat Engager)' },
            { type: 'decision', label: 'Crouch dash forward...', branches: [
              { label: 'qcf+2 (Death Fist)', action: 'Mid — 45 damage, wall splat, safe in Heat. Beats crouch blocking.' },
              { label: 'd+4,2:1+2 (Demo Man)', action: 'Low — 62 damage, wall splat. Beats stand blocking. Launch punishable on block.' },
            ]},
            { type: 'end', label: 'Both visually identical until the attack comes out. Pure guess.' },
          ]}
        />

        <TipBox title="The Math Is Terrifying" variant="danger">
          After a Heat Engager, Paul is +17. He crouch dashes in your face. If you guess wrong on Death Fist near the wall in Heat, 
          that's easily 80-100+ damage. If you guess wrong on Demo Man near the wall, that's 70+ damage. Two wrong guesses 
          and the round is over. This is why Paul's Heat Engager fishing is the single most important thing he does.
        </TipBox>
      </Section>

      <Section title="Your First Decision Game">
        <MatchScenario
          title="The Fundamental Read"
          situation="You've landed a Heat Engager (uf+2 or f+4 connected on hit). You're +17. Your opponent is standing in front of you near the wall."
          context="This is THE moment Paul plays for. You're plus enough that whatever you do next is guaranteed to come out first. They cannot attack. They can only block — and they have to guess which way."
          options={[
            {
              action: 'Death Fist (qcf+2)',
              input: 'qcf+2',
              result: 'If they block low or press buttons, they eat 45 damage and get sent flying into the wall. In Heat, this is safe even if blocked.',
              isOptimal: false,
              followup: 'Wall combo for 80-100+ total damage',
            },
            {
              action: 'Demo Man (d+4,2:1+2)',
              input: 'd+4,2:1+2',
              result: 'If they block standing to avoid Death Fist, the sweep trips them for 62 damage. Wall splats for even more.',
              isOptimal: false,
              followup: 'Wall combo for 70+ total damage',
            },
            {
              action: 'Read your opponent',
              input: '(observe, then choose)',
              result: 'Neither option is "always right." Watch your opponent. If they crouch a lot, Death Fist. If they stand block out of fear, Demo Man. The right answer changes every time.',
              isOptimal: true,
              followup: 'Alternate between both options to keep them guessing. Never become predictable.',
            },
          ]}
          keyTakeaway="Paul's 50/50 has no 'best' answer — both options are devastating. Your job is to read your opponent and pick the one they're not expecting. If they respect the mid, sweep them. If they respect the low, punch them through the wall."
        />
      </Section>

      <Section title="Practice: Learn Your Kill Moves">
        <PracticeBox
          title="Death Fist Basics"
          setup="Practice Mode, CPU set to Guard All. Choose any walled stage."
          tasks={[
            { id: 'df-input', text: 'Do 10 clean Death Fists (qcf+2) — get the quarter circle forward motion smooth', type: 'counter', target: 10 },
            { id: 'df-wall', text: 'Land Death Fist from midscreen and observe how far it sends the opponent toward the wall', type: 'counter', target: 5 },
            { id: 'df-range', text: 'Notice the damage difference: close range (45) vs tip range (30)', type: 'toggle' },
          ]}
        />

        <PracticeBox
          title="Demo Man Basics"
          setup="Practice Mode, CPU set to Stand. Get point blank."
          tasks={[
            { id: 'dm-basic', text: 'Do 10 Demo Mans (d+4,2,1+2) — focus on getting the full string out', type: 'counter', target: 10 },
            { id: 'dm-jf', text: 'Try for the just frame (blue spark) — press 1+2 as the elbow connects. Land 5.', type: 'counter', target: 5 },
            { id: 'dm-clean', text: 'Try Demo Man from far away — see it fail without clean hit. Understand the range.', type: 'toggle' },
            { id: 'dm-wall', text: 'Do Demo Man near the wall — observe the wall splat', type: 'toggle' },
          ]}
        />

        <PracticeBox
          title="The 50/50 From Crouch Dash"
          setup="Practice Mode, CPU set to Random Guard. Get point blank range."
          tasks={[
            { id: 'mix-cd', text: 'Crouch dash (qcf) into Death Fist 5 times, then Demo Man 5 times — get comfortable doing both from crouch dash', type: 'counter', target: 10 },
            { id: 'mix-read', text: 'Against Random Guard, try to "read" which way the CPU guards and choose the opposite. Correct 5 times.', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
