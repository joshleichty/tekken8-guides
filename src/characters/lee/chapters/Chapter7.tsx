import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="The Crouch Game — Slide vs Mid"
      intro="Lee's most distinctive offensive tool. The full crouch mixup is how Lee opens people up when pokes and counter-hits aren't enough."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Hitman Stance"
    >
      <Section title="Why the Crouch Game Matters">
        <p>
          Lee's neutral game is defensive — keepout, counter-hits, punishment. But what do you do when
          the opponent just blocks everything? They don't press buttons (so no counter-hits), they
          don't approach recklessly (so no keepout punishes), they just... wait.
        </p>
        <p>
          This is where the crouch game comes in. From full crouch, Lee has a <strong>genuine 50/50</strong>:
          slide (low launcher) or ws+2,3/ws+2,4 (mid). The opponent has to guess. If they guess wrong,
          they eat a combo. This is Lee's primary tool for opening up turtles.
        </p>

        <KeyConcept title="The Crouch Mixup" icon="🎰">
          <p>From full crouch, Lee threatens:</p>
          <ul>
            <li><strong>Slide (FC df,d,DF+3):</strong> Low launcher. Hits grounded. If they stand-block, they eat a combo.</li>
            <li><strong>ws+2,3:</strong> Mid launcher (tornado). If they crouch-block the slide, this launches them.</li>
            <li><strong>ws+2,4:</strong> Safe mid option (-2 on block). Wallsplats. Use when ws+2,3 feels too risky.</li>
          </ul>
          <p>
            The beauty: the opponent can't react to this. They have to <em>guess</em>. And every wrong
            guess costs them 40-60% of their health bar.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Slide">
        <MoveCard
          character="lee"
          videoId="FC.df,d,DF+3"
          move={{
            input: 'FC df,d,DF+3',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i18',
            onBlock: '-15',
            onHit: '+5',
            tags: ['Low', 'High Crush', 'Launcher'],
            description: 'The slide. Lee\'s signature low launcher from full crouch. Range varies — at max distance, it\'s only -9 on block (safe). Up close, it\'s -15 (launch punishable). The threat of this move is what makes the entire crouch game work.',
            notes: ['High/Low crush. Safety varies by distance: -15 close, -9 at tip range.'],
          }}
          showVideo
        />

        <KeyConcept title="Slide Range Matters" icon="📐">
          <p>
            The slide's safety depends on distance:
          </p>
          <ul>
            <li><strong>Close range:</strong> -15 on block. Launch punishable. High risk.</li>
            <li><strong>Mid range:</strong> Around -12 on block. Punishable but not launchable.</li>
            <li><strong>Max range:</strong> -9 on block. Only jab punishable. Essentially safe.</li>
          </ul>
          <p>
            This means slide from range is much safer than slide up close. When accessing crouch
            from Mist Step at range, the slide becomes a low-risk, high-reward option.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Mid Options">
        <MoveCard
          character="lee"
          videoId="ws2,3"
          move={{
            input: 'ws+2,3',
            hitLevel: ['m', 'm'],
            damage: '12, 24',
            startup: 'i14',
            onBlock: '-13',
            onHit: '+32a',
            tags: ['Mid', 'Launcher', 'Tornado'],
            description: 'Your mid launcher from crouch. Tornado on hit. Season 2 made this -13 on block, so it\'s punishable. Use when you\'re confident it will hit or when the reward outweighs the risk.',
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          videoId="ws2,4"
          move={{
            input: 'ws+2,4',
            hitLevel: ['m', 'h'],
            damage: '12, 23',
            startup: 'i14',
            onBlock: '-2',
            onHit: '+13g',
            onCH: '+37a',
            tags: ['Mid', 'Safe', 'Wallsplat'],
            description: 'The safe mid from crouch. -2 on block means they can\'t punish. Wallsplats near walls. Use this when you don\'t want to risk the -13 of ws+2,3.',
            notes: ['Tailspin. Balcony Break.'],
          }}
          showVideo
        />

        <TipBox variant="tip" title="Choosing Your Mid">
          <strong>ws+2,3</strong> when: you're mid-screen, you want max damage, or it's a punish you know will hit.
          <strong>ws+2,4</strong> when: you're near a wall (wallsplat), you're not sure it will hit, or you want to stay safe.
          In Season 2, ws+2,4 has become the default mid option for most situations, with ws+2,3 reserved for confirmed
          punishes and high-confidence reads.
        </TipBox>
      </Section>

      <Section title="How to Access Crouch">
        <p>
          The crouch mixup is powerful, but you need to get into full crouch first. Here are the main entries:
        </p>

        <KeyConcept title="Crouch Entries" icon="🚪">
          <ul>
            <li><strong>Mist Step Slide (f,n,3+4):</strong> Forward dash into Hitman, then d to crouch. From standing, this lets you threaten slide from range. The fastest entry from neutral.</li>
            <li><strong>After d+4 hit:</strong> When d+4 connects, you're in a natural crouch situation. Mix slide or ws mid.</li>
            <li><strong>Natural crouch from blocking lows:</strong> After you block a low, you're already crouching. Punish with ws moves or threaten slide.</li>
            <li><strong>Hitman Stance (3+4) into d:</strong> Enter HMS, then hold d to crouch. Covered in Chapter 8.</li>
            <li><strong>Backdash into crouch (d/b,d/b,d):</strong> Create space, enter crouch, threaten slide at range (where it's safer).</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Slide Input Precision">
          The slide input (FC df,d,DF+3) is not trivial. The key is the "df,d,DF" motion — it's a
          quarter-circle that starts at df, dips to d, then returns to df before pressing 3.
          The common mistake is pressing 3 too early during the d portion. Practice the motion
          slowly at first, then speed it up.
        </TipBox>
      </Section>

      <Section title="The Psychological Game">
        <p>
          The crouch mixup isn't just about the two options. It's about what the <em>threat</em> of those
          options does to the opponent's decision-making.
        </p>

        <KeyConcept title="How the Threat Works" icon="🧠">
          <ul>
            <li><strong>They fear the slide:</strong> They start stand-blocking (to avoid the low) → now your mids from crouch hit. And your standing mids (df+1, b+4) also hit.</li>
            <li><strong>They fear the mid:</strong> They start crouch-blocking → slide hits. And your standing lows (b+3,3, d+4) also hit.</li>
            <li><strong>They try to interrupt:</strong> They press a button when they see you crouching → your slide crushes highs, or you block and punish with ws moves.</li>
            <li><strong>They backdash:</strong> Slide has excellent tracking and range. It catches backdashes that other lows miss.</li>
          </ul>
          <p>
            The crouch game doesn't have to land to be effective. Just <em>entering crouch</em> forces
            a reaction. Read the reaction, then act accordingly.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Drill: Crouch Mixup">
        <PracticeBox
          title="Slide Consistency"
          setup="Practice the slide input until it's clean. No dummy settings needed."
          tasks={[
            { id: 'slide-10', text: 'Land slide from full crouch 10 times', type: 'counter', target: 10 },
            { id: 'slide-stand', text: 'Land slide from Mist Step (f,n,d,df,d,DF+3) 5 times', type: 'counter', target: 5 },
            { id: 'slide-range', text: 'Land slide at max range (where it\'s safe on block) 5 times', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="The 50/50 Mix"
          setup="Set dummy to random guard (guard all random). Practice mixing slide and ws+2,4."
          tasks={[
            { id: 'mix-slide', text: 'From crouch, do slide — see if it hits', type: 'toggle' },
            { id: 'mix-mid', text: 'From crouch, do ws+2,4 — see if it hits', type: 'toggle' },
            { id: 'mix-5', text: 'Alternate between slide and ws+2,4 five times each', type: 'counter', target: 5 },
            { id: 'mix-entry', text: 'Practice entering crouch from Mist Step, then mixing', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
