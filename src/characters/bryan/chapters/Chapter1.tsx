import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  ProgressMilestone,
  Quiz
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Bryan Identity"
      intro="Before you press a single button, you need to understand WHO Bryan is. This chapter gives you the mental framework that makes everything else click."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Start Learning"
    >
      <Section title="Who is Bryan Fury?">
        <p>
          Bryan is the <span className="highlight">counter-hit king</span> of Tekken. He doesn't rush 
          you down like a Mishima. He doesn't overwhelm you with mixups like a grappler. Instead, 
          Bryan <span className="highlight-secondary">waits</span> — and when you make a mistake, 
          he punishes it with <strong>massive damage</strong>.
        </p>

        <KeyConcept title="The Bryan Mindset" icon="🧠">
          <p>Bryan wants to:</p>
          <ul>
            <li><strong>Control space at mid-range</strong> — His best tools work from 2-3 character lengths away</li>
            <li><strong>Make you whiff</strong> — Then punish with huge damage</li>
            <li><strong>Fish for counter-hits</strong> — Half his moves launch on CH</li>
            <li><strong>Chip with excellent lows</strong> — Hatchet kick (qcb+3) is one of the best lows in Tekken</li>
            <li><strong>Snowball momentum</strong> — Once he gets going, his oki and damage pile up fast</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Core Loop">
          Bryan's gameplay is a loop: <strong>Create space → Control mid-range → Punish mistakes → 
          Apply oki → Repeat</strong>. If you're chasing the opponent down constantly, you're 
          playing Bryan wrong.
        </TipBox>
      </Section>

      <Section title="Why Bryan is HARD">
        <p>
          Let's be honest: Bryan is one of the most <span className="highlight-secondary">difficult 
          characters</span> in Tekken 8. Not because of execution (though that's part of it), but 
          because of <strong>how he wins</strong>.
        </p>

        <KeyConcept title="The Difficulty Truth" icon="⚠️">
          <p>Bryan is hard because:</p>
          <ul>
            <li><strong>Patience is not intuitive</strong> — New players want to press buttons. Bryan wins by NOT pressing.</li>
            <li><strong>His pokes are "weird"</strong> — More minus on block than normal, but have CH extensions</li>
            <li><strong>Timing-based</strong> — You need to READ when opponents will press, not just react</li>
            <li><strong>Weak under pressure</strong> — Few panic options means you must out-think rushdown</li>
            <li><strong>Taunt is optional but rewarding</strong> — Adds execution demands for wall pressure</li>
          </ul>
        </KeyConcept>

        <p>
          If this sounds intimidating — good. <span className="highlight">Understanding the challenge 
          is the first step to overcoming it</span>. This guide will teach you how to develop the 
          patience and timing that makes Bryan devastating.
        </p>
      </Section>

      <Section title="Strengths & Weaknesses">
        <h3>Strengths</h3>
        <ul>
          <li><strong>Best counter-hit game in Tekken</strong> — Multiple safe CH launchers</li>
          <li><strong>Incredible keepout</strong> — 3+4, qcb+1, orbital dominate mid-range</li>
          <li><strong>Excellent lows</strong> — qcb+3 (Hatchet), d+4, db+3 are all fantastic</li>
          <li><strong>Massive combo damage</strong> — One CH can lead to 70%+ at the wall</li>
          <li><strong>Great whiff punishment</strong> — f,b+2 (Jet Upper) is i14</li>
          <li><strong>Strong punishment overall</strong> — Good options at all frame ranges</li>
          <li><strong>Taunt wall game</strong> — Unblockable setups when mastered</li>
        </ul>

        <h3>Weaknesses</h3>
        <ul>
          <li><strong>Weak heat system</strong> — One of the worst heats in the game</li>
          <li><strong>Vulnerable to pressure</strong> — No good power crush, few panic moves</li>
          <li><strong>Unorthodox pokes</strong> — Requires understanding "mental frames"</li>
          <li><strong>Movement is average</strong> — Not elite like Mishimas or Steve</li>
          <li><strong>Struggles when rushed</strong> — Must create space to function</li>
        </ul>
      </Section>

      <Section title="Mental Model: The Sniper">
        <p>
          Think of Bryan as a <span className="highlight">sniper</span>, not a brawler. A sniper 
          doesn't charge into battle — they find the perfect position, wait for the target to 
          expose themselves, then take one devastating shot.
        </p>

        <KeyConcept title="The Sniper Mentality" icon="🎯">
          <p>Apply this to your gameplay:</p>
          <ul>
            <li><strong>Position first</strong> — Get to mid-range before attacking</li>
            <li><strong>Read the target</strong> — Watch what the opponent does after blocking</li>
            <li><strong>One shot, one kill</strong> — Your CH launcher → combo can delete 50-70% HP</li>
            <li><strong>Reposition after the shot</strong> — Back to neutral, set up again</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Trap">
          New Bryan players try to play him like a rushdown character because "pressing buttons is 
          fun." You'll lose. A lot. <strong>Bryan's fun comes from the reads</strong> — predicting 
          what the opponent will do and destroying them for it.
        </TipBox>
      </Section>

      <Section title="Quick Quiz">
        <Quiz
          question="What is Bryan's primary gameplan?"
          options={[
            { text: 'Rush the opponent down with constant pressure', isCorrect: false },
            { text: 'Control mid-range, fish for counter-hits, punish mistakes', isCorrect: true },
            { text: 'Use throws and mixups to open up the opponent', isCorrect: false },
            { text: 'Stay in heat as long as possible', isCorrect: false },
          ]}
          correctFeedback="Exactly! Bryan is a patient, spacing-based character who punishes mistakes with massive damage."
          incorrectFeedback="Not quite. Bryan wants to control mid-range and wait for the opponent to make mistakes, then punish with counter-hit launchers and whiff punishment."
        />
      </Section>

      <Section title="Your Learning Path">
        <p>
          This guide is structured to build your Bryan skills <strong>progressively</strong>. 
          Each chapter adds new tools on top of what you've already learned. By the end, you'll 
          have a complete gameplan.
        </p>

        <ProgressMilestone
          title="Bryan Mastery Path"
          steps={[
            { id: 'foundation', label: 'Foundation', description: 'Movement, first moves, basic gameplan' },
            { id: 'tools', label: 'Core Tools', description: 'Keepout, pokes, lows, jab pressure' },
            { id: 'ch', label: 'Counter-Hit Game', description: 'CH launchers and string extensions' },
            { id: 'combos', label: 'Combos', description: 'Beginner to optimal routes' },
            { id: 'punishment', label: 'Punishment', description: 'Standing, crouching, whiff' },
            { id: 'heat', label: 'Heat & Snake Eyes', description: 'Bryan\'s unique mechanics' },
            { id: 'defense', label: 'Defense', description: 'Panic options and escaping pressure' },
            { id: 'advanced', label: 'Advanced', description: 'Taunt, frame traps, conditioning' },
            { id: 'mastery', label: 'Complete Bryan', description: 'Full gameplan and match strategy' },
          ]}
          currentStep={0}
        />

        <TipBox variant="tip" title="How to Use This Guide">
          <strong>Don't skip ahead.</strong> Each chapter assumes you've completed the previous ones. 
          Do the practice drills. Answer the quizzes. Check off the skill assessments. If you follow 
          the path, you WILL be able to play Bryan competently by the end.
        </TipBox>
      </Section>
    </Chapter>
  )
}
