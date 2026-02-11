import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Your First Weapons"
      intro="Before you enter any stance, you need to survive neutral. These are the moves that poke, check, and control space — the foundation that makes your stance entries possible."
      hasPrevious={true}
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Into the Flow"
    >
      <Section title="Why Neutral Matters for Eddy">
        <p>
          It's tempting to think Eddy is all stances. Approach, enter RLX or HSP, go for the 50/50.
          But watch what happens when that's <em>all</em> you do: your opponent starts sidestepping
          left. Your <code>f,f+3</code> whiffs. Your WR 3 sails past them. You eat a launch for free.
        </p>
        <p>
          Eddy's neutral tools solve this. They track. They're safe. They give you small advantages that
          add up. And they condition the opponent to <strong>stop moving</strong> — which is exactly when
          your stance entries become unstoppable.
        </p>
      </Section>

      <Section title="The Jab: 1,2">
        <p>
          Your fastest button. i10, +8 on hit. Nothing fancy — but it does two things no other move can.
          First, it checks aggression. Anyone pressing into you eats this and loses their turn. Second,
          if you hold forward after 1,2, Eddy transitions directly into Handstand. That's +3 in HSP
          from a 10-frame move.
        </p>

        <MoveCard character="eddy"
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 12',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['Jab', 'HSP Transition'],
            description: 'Standard jab string. Fast, safe, and transitions to HSP with forward hold. The foundation of Eddy\'s 10-frame punishment and pressure checks.',
            notes: [
              'Hold F after 1,2 to enter Handstand at -5 on block / +6 on hit',
              '+8 on hit gives enough advantage to enforce follow-ups',
              'Both hits are high — can be ducked on read',
              'i10 standing punisher — your go-to for -10 moves',
            ],
          }}
          showVideo
        />

        <TipBox variant="tip" title="When to Transition">
          Don't hold forward into HSP every time you jab. If your opponent blocks the jab, you're -5
          in Handstand — and Handstand can't block highs or mids. Use the transition on <strong>hit</strong>{' '}
          where you're +6 and your HSP options are enforced. On block, just take your +1 and reassess.
        </TipBox>
      </Section>

      <Section title="The Mid Poke: df+1">
        <MoveCard character="eddy"
          videoId="df+1"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13',
            onBlock: '-3',
            onHit: '+6',
            tags: ['Mid', 'Poke', 'Safe'],
            description: 'Your generic mid poke. Fast, tracks decently to Eddy\'s left, and safe on block. Use this to check opponents who duck your jabs or try to step your stance entries.',
            notes: [
              'i13 mid — catches people ducking your jabs',
              '-3 on block — you give up your turn but it\'s safe',
              'Has an extension: df+1,3 — knockdown on hit, -7 on block, tornado',
              'df+1,3 is your i13 standing punisher',
            ],
          }}
          showVideo
        />

        <p>
          <code>df+1</code> by itself is just a check. But the extension <code>df+1,3</code> is a
          13-frame knockdown that wall splats — making it your strongest punishment tool for moves that
          are -13 or worse. The second hit is a high though, so don't throw it raw in neutral — save it
          for punishment.
        </p>
      </Section>

      <Section title="The Tracker: b+1">
        <MoveCard character="eddy"
          move={{
            input: 'b+1',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i14~15',
            onBlock: '-7',
            onHit: '+8',
            tags: ['Mid', 'Tracking', 'CH Confirmable'],
            description: 'Eddy\'s best tracking mid from neutral. Covers both sides and leaves you in crouch on hit for FC mixups. On counter hit, b+1,4 confirms into b+1,4,3+4 for a guaranteed follow-up.',
            notes: [
              'Tracks both sides — use when they\'re stepping your linear moves',
              'Leaves Eddy in FC on hit — opens crouch mixup',
              '+8 on hit from crouch = free FC df+3 or FC df+4 mixup',
              'CH b+1,4,3+4 confirms for ~60 damage — practice the visual confirm',
            ],
          }}
          showVideo
        />

        <KeyConcept title="The Linearity Answer" icon="🎯">
          <p>
            Eddy's biggest weakness is linearity. Most of his stance entries get stepped left.
            <code>b+1</code> is the answer — it tracks both sides, is safe at -7, and on hit it leaves
            you in crouch at +8 with access to your FC mixup (<code>FC df+3</code> mid vs <code>FC
            df+4</code> low). When your opponent starts sidestepping everything, <code>b+1</code> is the
            move that punishes them and resets the dynamic.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Space Controller: df+2">
        <MoveCard character="eddy"
          videoId="df+2"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '19',
            startup: 'i14~15',
            onBlock: '-5',
            onHit: '+6',
            onCH: '+21a (+4)',
            tags: ['Mid', 'Elbow', 'Space Control', 'Safe'],
            description: 'A fast mid elbow that creates enormous pushback on block. Resets the situation from midrange and catches people pressing. On counter hit at the wall, wall splats for a full combo.',
            notes: [
              '-5 on block with massive pushback — basically unpunishable',
              'Elbow — can\'t be parried by Asuka, Jun, etc.',
              'CH at wall = wall splat combo',
              'Best used at range to create space and bait whiffs',
            ],
          }}
          showVideo
        />

        <p>
          Mosquito (one of Europe's best Eddie players) emphasizes this move as a cornerstone of Eddie's
          keepout game. Block <code>df+2</code>, and you're pushed back far enough that most retaliations
          whiff — which means Eddy can back dash once and launch your attempt with <code>df+3</code>. It
          turns blocking into a spacing trap.
        </p>
      </Section>

      <Section title="The Low Poke: d+3">
        <MoveCard character="eddy"
          move={{
            input: 'd+3',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i21~22',
            onBlock: '-14c',
            onHit: '+4c',
            onCH: '+27g',
            tags: ['Low', 'Poke', 'High Crush', 'CH Knockdown'],
            description: 'A solid low poke that high crushes and leaves you plus in crouch. On counter hit, knocks down for a guaranteed f,f+4 follow-up. One of Eddy\'s simplest and most effective lows.',
            notes: [
              '+4 on hit in crouch — your turn continues with ws options',
              'High crushes from frame 6 — goes under jabs',
              'CH knockdown → guaranteed f,f+4 for big damage',
              '-14 on block — punishable but not launch punishable',
            ],
          }}
          showVideo
        />

        <p>
          This is your basic chip tool. Not fancy, not devastating — just 17 damage and your turn.
          On hit you're +4 in crouch, which means your <code>ws+4</code> and other while standing options
          are enforced. On counter hit, the reward jumps dramatically — guaranteed <code>f,f+4</code>{' '}
          for a full knockdown and Handstand transition. Use this to end rounds and keep opponents honest
          about blocking low.
        </p>
      </Section>

      <Section title="The Keepout Launcher: SS 3+4">
        <MoveCard character="eddy"
          videoId="SS.3+4"
          move={{
            input: 'SS 3+4',
            hitLevel: ['h', 'h'],
            damage: '6, 10',
            startup: 'i14~15',
            onBlock: '-7',
            onHit: '+31a (+24)',
            tags: ['Launcher', 'Safe', 'Keepout'],
            description: 'A safe keepout launcher from sidestep. -7 on block, full combo on hit. The catch is it\'s a high — can be ducked on read. Use it when they approach or as a plus-frame sidestep launcher.',
            notes: [
              'Safe on block at -7 — no risk if they block',
              'Full launch combo on hit',
              'High — duckable, don\'t spam it',
              'Comes from sidestep — use it as a reactive keepout tool',
              'High crushes late in animation — can dodge some things',
            ],
          }}
          showVideo
        />

        <p>
          This is Eddy's only safe launcher. Every other launch option is -16 or worse on block.
          <code>SS 3+4</code> costs you nothing if blocked and gives a full combo if it lands. The
          sidestep startup means it naturally evades linear approaches. Use it when you read an
          opponent rushing in, or steal turns when you're slightly minus by stepping into it.
        </p>

        <TipBox variant="warning" title="It's a High">
          Respect opponents who duck this. At higher levels, <code>SS 3+4</code> becomes a read-based
          tool, not a spammable one. If they're ducking on your sidestep, switch to <code>SS 3</code>{' '}
          (a mid approach that transitions to RLX) or <code>SS 4</code> (a quick low).
        </TipBox>
      </Section>

      <Section title="Putting It Together">
        <p>
          These five moves — <code>1,2</code>, <code>df+1</code>, <code>b+1</code>, <code>d+3</code>,
          and <code>SS 3+4</code> — are your neutral skeleton. They don't enter stances. They don't force
          50/50s. They just keep you alive, maintain space, and create the moments where your stance
          entries work.
        </p>

        <PracticeBox
          title="Neutral Fundamentals"
          setup="Practice Mode. Set dummy to approach (f,f) and random guard. Start at range 2-3."
          tasks={[
            { id: 'eddy-jab-check', text: 'Use 1,2 to check the dummy five times', detail: 'Watch for +8 on hit. Feel how fast it is compared to everything else.', type: 'counter', target: 5 },
            { id: 'eddy-df1-poke', text: 'Use df+1 as a mid check five times', detail: 'This catches anyone ducking. -3 on block — safe to throw out.', type: 'counter', target: 5 },
            { id: 'eddy-b1-track', text: 'Set dummy to sidestep, use b+1 five times', detail: 'Watch it track. This is your answer to movement.', type: 'counter', target: 5 },
            { id: 'eddy-d3-low', text: 'Use d+3 from midrange five times', detail: 'Feel the high crush. On hit, you\'re +4 in crouch. On block, you eat a punish — feel that too.', type: 'counter', target: 5 },
            { id: 'eddy-ss34-keepout', text: 'Sidestep into 3+4 five times', detail: 'Read the approach, step, launch. This is your safe launch option.', type: 'counter', target: 5 },
          ]}
        />

        <KeyConcept title="Neutral Creates Openings" icon="🌀">
          <p>
            None of these moves are flashy. None of them build Mandinga or force 50/50s. But they do
            something critical: they <strong>condition your opponent to stop moving</strong>. When they
            stop sidestepping because <code>b+1</code> keeps tracking them, your linear stance entries
            start working. When they stop ducking because <code>df+1</code> keeps checking them, your
            jab transitions into HSP become safe. Neutral makes the flywheel possible.
          </p>
        </KeyConcept>
      </Section>

      <Section title="What's Next">
        <p>
          You have your neutral tools. You have <code>f,f+3</code> from Chapter 1. Now it's time
          to learn the <strong>three main doors</strong> into Eddy's stance game — the approach tools
          that deposit you into HSP or RLX with plus frames on block or hit. These are the moves that
          start the flywheel in earnest.
        </p>
      </Section>
    </Chapter>
  )
}
