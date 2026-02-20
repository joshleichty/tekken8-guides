import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, Flowchart, ConceptBuilder, DecisionGrid, DrillMode, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="The Infinite Machine"
      intro="Chapter 2 gave you one loop: d+3,4 → RFS 2 → repeat. That's the starter motor. This chapter connects it to every other stance, turning your one loop into an infinite machine that flows through all four stances."
      hasPrevious
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Punishment Into Pressure"
    >
      <Section title="From One Loop to Many">
        <ConceptBuilder
          title="Building the Full Stance Cycle"
          foundation={[
            {
              label: 'd+3,4 Core Loop',
              description: 'LFF → d+3,4 → RFS → RFS 2 → RFF → d+3,4 → RFS (repeat). You know this from Chapter 2.',
            },
            {
              label: 'RFF f+3 Connector',
              description: 'Instead of d+3,4 from RFF, do RFF f+3 to enter LFS at +12~+15 on block.',
            },
            {
              label: 'LFS Options',
              description: 'LFS f+3 (heat engager, +4, stays in LFS) or LFS d+3,4 (back into RFS). Now you visit all four stances.',
            },
          ]}
          newAddition={{
            label: 'RFS 4,3 Path',
            description: 'RFS 4,3 is +4 on block and transitions to LFS. A safe mid-mid alternative to RFS 2 that enters the LFS mixup.',
          }}
          result="d+3,4 → RFS 2 → RFF f+3 → LFS f+3 → LFS d+3,4 → RFS 4,3 → LFS... The entire stance system is connected. You never have to stop moving."
        />
      </Section>

      <Section title="The Key Connectors">
        <p>
          These are the moves that bridge stances. You already know the RFS menu from Chapter 2.
          These connectors are what turn isolated options into a flowing system.
        </p>

        <MoveCard
          character="hwoarang"
          videoId="RFF.f+3"
          move={{
            input: 'RFF f+3',
            hitLevel: ['h'],
            damage: '21',
            startup: 'i14',
            onBlock: '+12~+15',
            onHit: '+23~+26',
            tags: ['High', 'Massive Plus', 'Transition'],
            description: 'The golden connector. From RFF, this high kick transitions to LFS at +12 to +15 on block. At +12, even your i19 LFS f+3 is uninterruptible. The catch: it\'s a high. If they duck, you\'re dead. But if they respect it, you have the biggest plus frames in the game.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFF.b+2"
          move={{
            input: 'RFF b+2',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i16',
            onBlock: '+4~+5',
            onHit: '+6c~+7c',
            onCH: '+25d~+26d',
            tags: ['Mid', 'Plus on Block', 'Safe'],
            description: 'The safe mid alternative in RFF. +4~+5 on block, stays in RFF. When the opponent starts ducking RFF f+3, this is your mid that keeps you plus. Chip damage on block. On CH, knocks down for a guaranteed follow-up.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="LFS.f+3"
          move={{
            input: 'LFS f+3',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i19',
            onBlock: '+4',
            onHit: 'Heat Engage',
            tags: ['Mid', 'Heat Engager', 'Plus on Block'],
            description: 'The reason LFS is scary. +4 on block, stays in LFS, and it\'s your heat engager. After RFF f+3 at +12, this mid is completely uninterruptible. On block you\'re +4 in LFS — do it again, or go low with LFS d+3,4, or poke with LFS 1.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="LFS.1"
          move={{
            input: 'LFS 1',
            hitLevel: ['h'],
            damage: '6',
            startup: 'i13',
            onBlock: '+5',
            onHit: '+7',
            tags: ['High', 'Plus on Block', 'Reset'],
            description: 'The LFS jab. +5 on block. When you\'re in LFS and don\'t know what to do, press 1. You get plus frames and can decide from there — go into d+3,4, throw df+2, or just jab again. This is your "I\'m safe" button in LFS.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="LFS.d+4"
          move={{
            input: 'LFS d+4',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i20',
            onBlock: '-12',
            onHit: '+4',
            tags: ['Low', 'Transition'],
            description: 'LFS low that transitions to RFF on hit at +4. Tracks sidesteps to the right. Complements LFS f+3 — the opponent has to choose between blocking mid (and eating the low) or blocking low (and eating the mid). On CH, knocks down.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFF.3,4"
          move={{
            input: 'RFF 3,4',
            hitLevel: ['m', 'h'],
            damage: '13, 16',
            startup: 'i16',
            onBlock: '+10g~+11g',
            onHit: '+21g~+22g',
            tags: ['Mid-High', 'Massive Plus', 'Transition'],
            description: 'Mid-high from RFF that transitions to RFS at +10 on block. Like d+3,4 but starts with a mid. The second hit is a high that can be ducked, but at +10 in RFS your options are almost impossible to contest. The mid-first version of your core loop.',
          }}
          showVideo
        />
      </Section>

      <Section title="Five Core Loops">
        <p>
          These are the five loops that connect the entire stance system. You don't need to memorize all five
          immediately — start with Loop 1 (you already know it) and add one at a time.
        </p>

        <Flowchart
          title="Loop 1: d+3,4 Core (Chapter 2)"
          nodes={[
            { type: 'start', label: 'LFF or RFF: d+3,4' },
            { type: 'decision', label: 'In RFS at +8~+10', branches: [
              { label: 'RFS 2 (+5)', action: 'Back to RFF → d+3,4 again (loop restarts)' },
              { label: 'RFS f+4 (i8)', action: 'Stay in RFS → press again or RFS 2' },
              { label: 'Mixup option', action: 'RFS df+4 / RFS d+4,3 / RFS 4,3' },
            ]},
            { type: 'end', label: 'Loop back to d+3,4 from RFF' },
          ]}
        />

        <Flowchart
          title="Loop 2: Full Stance Cycle"
          nodes={[
            { type: 'start', label: 'd+3,4 → RFS 2 → RFF' },
            { type: 'decision', label: 'In RFF at +5', branches: [
              { label: 'RFF f+3 (+12~+15)', action: 'Enter LFS with massive plus frames' },
              { label: 'RFF b+2 (+4~+5)', action: 'Stay in RFF, safe mid pressure' },
            ]},
            { type: 'decision', label: 'In LFS', branches: [
              { label: 'LFS f+3 (+4)', action: 'Heat engager, stay in LFS' },
              { label: 'LFS d+3,4', action: 'Back to RFS → full cycle complete' },
              { label: 'LFS 1 (+5)', action: 'Jab reset, stay plus' },
            ]},
            { type: 'end', label: 'From LFS: d+3,4 restarts the whole cycle' },
          ]}
        />

        <Flowchart
          title="Loop 3: RFS 4,3 Path"
          nodes={[
            { type: 'start', label: 'd+3,4 → RFS at +8~+10' },
            { type: 'decision', label: 'RFS 4,3 option', branches: [
              { label: 'RFS 4,3 (+4, mid-mid)', action: 'Enter LFS at +4' },
            ]},
            { type: 'decision', label: 'In LFS at +4', branches: [
              { label: 'LFS f+3 (+4)', action: 'Heat engager, stay in LFS' },
              { label: 'LFS d+3,4', action: 'Back to RFS (full cycle)' },
              { label: 'LFS 1 (+5)', action: 'Jab, continue from LFS' },
            ]},
            { type: 'end', label: 'All-mid path: d+3,4 → RFS 4,3 → LFS f+3' },
          ]}
        />

        <Flowchart
          title="Loop 4: RFF 3,4 Alternative Entry"
          nodes={[
            { type: 'start', label: 'From RFF: RFF 3,4 (mid-high)' },
            { type: 'decision', label: 'In RFS at +10~+11', branches: [
              { label: 'RFS 2 (+5)', action: 'Back to RFF → loop continues' },
              { label: 'RFS f+4 (i8)', action: 'Fastest option, stay in RFS' },
              { label: 'RFS 4,3 (+4)', action: 'Safe mid-mid into LFS' },
            ]},
            { type: 'end', label: 'Same RFS menu, but entered from a mid instead of a low' },
          ]}
        />

        <Flowchart
          title="Loop 5: LFS f+3 Repeat"
          nodes={[
            { type: 'start', label: 'In LFS (from any transition)' },
            { type: 'decision', label: 'LFS f+3 (+4, stays in LFS)', branches: [
              { label: 'They block', action: 'LFS f+3 again (+4 on block, all-mid loop)' },
              { label: 'They duck', action: 'LFS f+3 hits them (it\'s a mid)' },
              { label: 'They press', action: 'LFS f+3 at +4 beats i15+ options' },
            ]},
            { type: 'end', label: 'All-mid, can\'t be ducked. Only beaten by fast mids or sidesteps.' },
          ]}
        />

        <TipBox variant="tip" title="You Don't Need All Five">
          Loop 1 and Loop 2 cover 80% of your offense. Loop 3 adds the safe mid-mid path. Loops 4 and 5
          are variations you'll naturally discover as you play. Master 1 and 2 first, then layer in the rest.
        </TipBox>
      </Section>

      <Section title="Understanding 'Fake Plus Frames'">
        <p>
          Chapter 1 introduced this concept. Now let's make it mechanical. Being plus in flamingo doesn't mean
          the same thing as being plus in a normal stance. Here's the actual math at each key transition point:
        </p>

        <DecisionGrid
          title="What '+5 in Flamingo' Actually Means"
          description="At +5 in RFS, your options race against their i10 jab (which comes out at effective frame 5). Here's who wins:"
          rows={[
            { situation: 'RFS f+4 (i8) — effective frame 3', response: 'Use this to beat mashers', reason: 'You win by 2 frames. Uninterruptible. This is why the pressure works.' },
            { situation: 'RFS 2 (i13) — effective frame 8', response: 'Use for loop reset when they stop pressing', reason: 'Their jab wins, but RFS 2 is a high that trades with jab. Risk/reward is even.' },
            { situation: 'RFS df+4 (i17) — effective frame 12', response: 'Use when they freeze or duck', reason: 'Their jab wins clean. Only throw this when you read them not pressing — the CH launch is your reward.' },
            { situation: 'RFS d+4,3 (i20) — effective frame 15', response: 'Use against turtling opponents only', reason: 'Way too slow to beat anything. The hell sweep only works when they commit to blocking.' },
            { situation: 'RFS 4,3 (i14) — effective frame 9', response: 'Use against d+1 mashers', reason: 'Their jab wins, but 4,3 low crushes d+1. Beats the specific "mash d+1" habit.' },
          ]}
        />

        <KeyConcept title="The Real Frame Trap" icon="🧠">
          <p>
            The frame trap isn't any single move. The frame trap is <strong>the threat of RFS f+4</strong>.
            Because RFS f+4 exists at 8 frames, the opponent has to account for it. If they just hold block,
            RFS f+4 is +0 and you can go again. If they press a button, RFS f+4 beats it and you're still
            in RFS with plus frames.
          </p>
          <p>
            RFS f+4 is the <em>threat</em>. Everything else is the <em>payoff</em>. The opponent freezes
            because of the threat, and then you cash in with the options that are slower but more rewarding
            — RFS df+4 for a mid, RFS d+4,3 for the sweep, RFS 2 for the loop reset.
          </p>
          <p>
            This is why Hwoarang's pressure works even though his plus frames are "fake." The i8 option
            is real. Everything else rides on the fear it creates.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Mixing Loops Together">
        <p>
          Real Hwoarang pressure doesn't follow one loop — it weaves between them based on what the opponent
          is doing. Here's what a pressure sequence looks like when you mix loops together:
        </p>

        <Collapsible title="Example Pressure Sequence" defaultOpen>
          <ol>
            <li><strong>d+3,4 → RFS 2</strong> — Start Loop 1. You're in RFF at +5.</li>
            <li><strong>RFF f+3</strong> — Switch to Loop 2. You're in LFS at +12.</li>
            <li><strong>LFS f+3</strong> — Heat engager, +4 on block. Stay in LFS.</li>
            <li><strong>LFS d+3,4</strong> — Back to RFS. Loop 1 again but entered from LFS.</li>
            <li><strong>RFS 4,3</strong> — Switch to Loop 3. Safe mid-mid, +4 into LFS.</li>
            <li><strong>LFS 1</strong> — Jab reset. +5 on block. Take a breath.</li>
            <li><strong>d+3,4</strong> — Loop 1 again from LFS.</li>
          </ol>
          <p>
            That's seven moves across all four stances. The opponent had to make a correct defensive decision at
            every single step. One wrong guess and you get a combo, a knockdown, or more pressure.
          </p>
        </Collapsible>

        <Collapsible title="Example: Against a Ducker">
          <ol>
            <li><strong>d+3,4</strong> — They block. You're in RFS at +8.</li>
            <li><strong>RFS df+4</strong> — They ducked expecting another d+3,4 high. Counter hit launch.</li>
          </ol>
          <p>
            Or if they duck d+3,4's second hit:
          </p>
          <ol>
            <li><strong>d+3</strong> — Stop after the first hit. -13 on block but you didn't throw the duckable high.</li>
            <li><strong>RFS 4,3</strong> — Mid-mid from the RFS you entered. If they're still ducking, this hits.</li>
          </ol>
        </Collapsible>
      </Section>

      <Section title="Practice: The Infinite Machine">
        <DrillMode
          title="Stance Cycle Drill"
          objective="Build the full stance cycle one piece at a time. Each step adds a new connection between stances."
          steps={[
            {
              instruction: 'Loop 1: d+3,4 → RFS 2 (review)',
              detail: 'Run the basic loop from Chapter 2. d+3,4 → RFS 2 → d+3,4 → RFS 2. Three complete cycles.',
              targetReps: 5,
            },
            {
              instruction: 'Add RFF f+3',
              detail: 'd+3,4 → RFS 2 → RFF f+3 → (in LFS). Just feel the transition from RFF to LFS.',
              targetReps: 10,
            },
            {
              instruction: 'Full Cycle',
              detail: 'd+3,4 → RFS 2 → RFF f+3 → LFS f+3 → LFS d+3,4 → RFS 2 → repeat. All four stances.',
              targetReps: 5,
            },
            {
              instruction: 'Mix Loops',
              detail: 'Run the full cycle but randomly switch between RFS 2 and RFS 4,3 at RFS decision points. Get comfortable choosing.',
              targetReps: 5,
            },
          ]}
        />
      </Section>
    </Chapter>
  )
}
