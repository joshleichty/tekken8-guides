import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, DecisionGrid, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Defense"
      intro="Here's the honest truth about Hwoarang: his defense is not good. He has no magic move that gets him out of pressure. No evasive stance. No dickjab into launcher. When it's not his turn, he has to block, move, and make reads — like everyone else, but with fewer tools. This chapter teaches you how to survive until it's your turn again."
      hasPrevious
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Conditioning & Adaptation"
    >
      <Section title="The Hard Truth">
        <p>
          Hwoarang is designed to attack. His entire movelist is oriented around putting pressure on
          the opponent. When the roles reverse and <em>he's</em> the one blocking, he has significantly
          fewer options than characters like Kazuya (parry + EWGF), Alisa (safe stance), or Dragunov
          (ws+4 into offense).
        </p>
        <p>
          This means the most important defensive skill for Hwoarang isn't a move — it's
          <strong> knowing when to stop pressing</strong>. The biggest mistake intermediate
          Hwoarang players make is pressing forever. They run loops until the opponent rage arts
          through flamingo and kills them. The best Hwoarang players run two or three loops, read
          that the opponent is adapting, and voluntarily return to neutral to block.
        </p>
        <p>
          Defense for Hwoarang starts with discipline. The tools below are secondary.
        </p>
      </Section>

      <Section title="Panic Moves">
        <p>
          These are your "get off me" options when the opponent is pressuring you. None of them
          are amazing. All of them have significant risk. Use them sparingly and with reads,
          never as autopilot.
        </p>

        <MoveCard
          character="hwoarang"
          videoId="df+3,4"
          move={{
            input: 'df+3,4',
            hitLevel: ['m', 'm'],
            damage: '12, 20',
            startup: 'i22',
            onBlock: '-14',
            onHit: '+4a',
            tags: ['Power Crush', 'Mid-Mid', 'Reversal'],
            description: 'Your power crush. Absorbs attacks during the animation and pushes through with a mid-mid string. At -14 on block, the opponent gets a full launch if they block it. Only use this when you\'re confident the opponent is pressing a button — otherwise you eat more damage than you avoid. Does 4 chip on block when it absorbs an attack.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFF.3~4"
          move={{
            input: 'RFF [3~4]',
            hitLevel: ['h'],
            damage: '27',
            startup: 'i27',
            onBlock: '+4~+7',
            onHit: 'Launch',
            tags: ['Backlash', 'Power Crush', 'Homing', 'Plus on Block'],
            description: 'Backlash. Power crush from frames 8-26, homing, and +4 to +7 on block. On hit, launches for a full combo. The upside is incredible — safe on block and plus, homing so it catches sidesteps, power crush so it absorbs pressure. The downside: it\'s i27 and a HIGH. If the opponent ducks, you\'re dead. And it requires RFF — you need to be in the right stance. A powerful read but never spam it.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="b+1+3"
          move={{
            input: 'b+1+3 / b+2+4',
            hitLevel: ['—'],
            damage: '—',
            startup: 'i5',
            onBlock: '—',
            onHit: 'Parry (+follow-up)',
            tags: ['Punch Parry', 'Reversal'],
            description: 'Punch parry. Active from frames 5-12 — parries high and mid punches only. Does not parry kicks, elbows, or knees. On successful parry, press 4 for the Shotgun Shuffle follow-up. The window is small (8 frames) and it only works against punches, so it\'s very situational. Best against characters with heavy jab pressure like Kazuya or Steve.',
          }}
          showVideo
        />

        <TipBox variant="warning" title="Every Panic Move Is a Gamble">
          df+3,4 is -14 on block (launch punishable). RFF [3~4] is a high that gets ducked and launched.
          The punch parry only catches punches in an 8-frame window. None of these are reliable escape
          tools. The reliable escape tool is <strong>blocking, then punishing with your 10f or 11f
          punish into stance transitions</strong>. Chapter 4's punishment into pressure IS your defense — block
          the unsafe move, punish into loops, and now it's your turn again.
        </TipBox>
      </Section>

      <Section title="When to Stop Pressing">
        <DecisionGrid
          title="Signs You Need to Stop"
          description="If you see these patterns, the opponent has downloaded your pressure. Back off to neutral."
          rows={[
            {
              situation: 'Opponent ducks d+3,4 second hit',
              response: 'They\'re reading the high. Stop looping. Use d+3 alone (low without the 4) or skip d+3,4 and go straight to mids from your current stance.',
              reason: 'The second hit is a high — ducking it gives them a full launch every time.',
              risk: 'If you keep pressing, they duck-launch you for 60+ damage every time.',
            },
            {
              situation: 'Opponent power crushes through flamingo',
              response: 'Block in stance (return to LFF/RFF). Bait the power crush, block it, and launch punish. Their power crush is usually -14 or worse.',
              reason: 'Power crushes absorb hits and can\'t be interrupted from flamingo stances.',
              risk: 'Power crushes beat everything you throw from flamingo. You cannot trade favorably.',
            },
            {
              situation: 'Opponent rage arts through flamingo',
              response: 'Stop entering flamingo entirely when they have rage. Play neutral with df+1, f+2, and b+3 whiff punish until their rage is gone.',
              reason: 'Rage art is instant armor — you can\'t block in LFS/RFS, so it hits every time.',
              risk: 'Rage art through flamingo is instant death. You can\'t block in LFS/RFS.',
            },
            {
              situation: 'Opponent sidesteps consistently',
              response: 'Use homing options: df+4 from LFF, RFF df+3 from RFF, or d+3+4. Or slow down your transitions — sidestepping punishes predictable rhythms.',
              reason: 'Most flamingo moves are linear — a clean sidestep evades them completely.',
              risk: 'Linear moves get stepped and launched. Many of your best stance moves are linear.',
            },
            {
              situation: 'Opponent jabs you out of everything',
              response: 'They\'re contesting your fake plus frames with speed. Use RFS f+4 (i8, beats everything) or switch to blocking and punishing their jab strings.',
              reason: 'Being +5 in flamingo doesn\'t create real frame traps — your fastest stance mids are i13+.',
              risk: 'Losing trades at "plus frames" erodes your mental game. Don\'t let it tilt you.',
            },
          ]}
        />

        <KeyConcept title="The Two-Loop Rule" icon="🛡️">
          <p>
            A practical guideline: <strong>run your loop twice, then evaluate</strong>. After
            two passes through d+3,4 → RFS options → transition back, check what the opponent
            did. Are they still blocking? Run it again. Are they ducking? Mix in mids. Are they
            power crushing or rage arting? Back off completely.
          </p>
          <p>
            The best Hwoarang players look like they press forever because they read their opponent
            correctly — not because they actually press forever. When they see the opponent has
            adapted, they stop, reset, and change their approach. The loops work because they're
            used with intelligence, not brute force.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Command Grabs">
        <p>
          Hwoarang has several command grabs. They're not central to his gameplan — his pressure
          is about kicks, not throws — but they add a layer of threat that complements the loops.
          When the opponent is turtling and blocking everything, a grab breaks their defense.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'qcb+3',
            hitLevel: ['th'],
            damage: '45',
            startup: 'i11',
            onBlock: '-2',
            onHit: '+19d',
            tags: ['Command Grab', '1 Break', 'Floor Break'],
            description: 'Your best command grab. 45 damage, floor breaks, and only broken with 1. At i11 it\'s fast enough to use after plus-frame situations. Use this when the opponent is blocking d+3,4 repeatedly — they\'re focused on the kicks and not expecting a grab. The qcb input can be tricky mid-pressure, so practice the motion.',
          }}
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'f+2+3',
            hitLevel: ['th'],
            damage: '35',
            startup: 'i12',
            onBlock: '0',
            onHit: 'Throw',
            tags: ['Command Grab', '1+2 Break', 'All Stances'],
            description: 'Available from LFF, RFF, LFS, and RFS. Less damage than qcb+3 but accessible from every stance. Use this mid-loop when the opponent is locking down — the grab comes from the same stance you\'re attacking from, making it harder to see coming.',
          }}
          showVideo
        />

        <Collapsible title="Other Grabs">
          <ul>
            <li><strong>2+4,b (40 dmg, 2 break):</strong> Transitions to back turned. Alternative to the standard 1+2 throw for mix-up on the break.</li>
            <li><strong>uf+1+2 (40 dmg, 1+2 break):</strong> Available from LFF and RFF. Good range for catch throws at approach range.</li>
            <li><strong>RFF 1+3 / 2+4 (45 dmg, 1+2 break):</strong> Jackknife throw from RFF. 45 damage and swaps sides. Use when you're in RFF and the opponent is blocking everything — strong complement to RFF b+2 pressure.</li>
          </ul>
        </Collapsible>

        <TipBox variant="tip" title="Grabs in Context">
          The grabs aren't plan A. They're plan B when plan A (loops and mixups) hits a wall.
          If the opponent is blocking 5+ consecutive attacks, they're not escaping grabs — throw one.
          If the opponent is actively pressing buttons or ducking, grabs will whiff or get
          interrupted — stick to your kicks. Grabs work <em>because</em> the pressure exists.
          The pressure works <em>because</em> the grab threat exists. They're complementary.
        </TipBox>
      </Section>

      <Section title="Movement and Spacing">
        <p>
          When it's truly not your turn — the opponent has momentum, they're at plus frames,
          and you need to survive — these fundamentals matter more than any move:
        </p>
        <ul>
          <li><strong>Backdash:</strong> Hwoarang's backdash is decent. Two or three clean backdashes create enough space to either whiff punish with b+3 or reset to neutral. Practice Korean backdash cancelling — it's essential for this character.</li>
          <li><strong>Sidestep:</strong> Hwoarang can sidestep in LFF and RFF. Against linear pressure, one sidestep into b+4 (CH launcher) or SS 4 (CH low launcher) can steal the turn back with massive damage.</li>
          <li><strong>Duck into ws+2,3:</strong> If the opponent has predictable highs in their strings, duck and launch with ws+2,3 (+3 on block, Tornado on hit). This is extremely rewarding when you read a high correctly.</li>
          <li><strong>Low parry:</strong> Hwoarang's low parry combos do solid damage (Chapter 6). If the opponent is using lows to chip you, low parrying into f+4 → RFS sequence turns their offense into your loops.</li>
        </ul>
      </Section>
    </Chapter>
  )
}
