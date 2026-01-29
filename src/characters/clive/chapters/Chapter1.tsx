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
      title="The Clive Identity"
      intro="Before you swing your giant sword, you need to understand WHO Clive is. This chapter gives you the mental model that makes everything else click."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your Buttons"
    >
      <Section title="Who is Clive Rosfield?">
        <p>
          Clive is Tekken's <span className="highlight">mid-range monster</span>. He's the guy with 
          the big sword who dominates the space 2-3 character lengths away. Unlike Noctis, he doesn't 
          have full-screen gimmicks — instead, he has <strong>the best mid-range tools in the game</strong>.
        </p>

        <KeyConcept title="The Clive Mindset" icon="⚔️">
          <p>Clive wants to:</p>
          <ul>
            <li><strong>Control mid-range with his sword</strong> — f+1+2 (Prominence) and b+2 dominate this space</li>
            <li><strong>Transition into Phoenix Shift</strong> — His stance gives him terrifying mixups</li>
            <li><strong>Build Zantetsuken meter</strong> — His unique mechanic adds massive combo damage</li>
            <li><strong>Punish movement</strong> — Almost all his key moves have excellent tracking</li>
            <li><strong>Play patient but explosive</strong> — Wait for the right moment, then delete health bars</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Core Identity">
          Clive plays Tekken like a 2D fighter. His long-range pokes feel almost like projectiles. 
          When opponents get impatient trying to close the distance, that's when you blow them up.
        </TipBox>
      </Section>

      <Section title="The Big Sword Philosophy">
        <p>
          Clive's sword isn't just for show — it defines his entire gameplan. His sword attacks have 
          <span className="highlight">incredible range</span> but many deal <strong>recoverable damage</strong> 
          (gray health). This is by design — you're trading immediate damage for <strong>space control</strong>.
        </p>

        <KeyConcept title="Understanding Recoverable Damage" icon="💡">
          <p>Many of Clive's "Odin Sword" moves deal recoverable damage:</p>
          <ul>
            <li><strong>f,f+2</strong> — Ranged poke that builds Zantetsuken</li>
            <li><strong>4,4,2</strong> — Safe counter-hit launcher, builds meter</li>
            <li><strong>1,2</strong> — Your 10-frame punish, builds meter</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This is <strong>intentional</strong>. You're investing in Zantetsuken meter for huge 
            damage later. Don't worry about the gray health — focus on positioning and meter.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="The Trap">
          New Clive players get frustrated when opponents recover gray health. Don't chase. Stay at 
          your range. Your job is to control space and build meter — the damage comes later with 
          Zantetsuken or wall combos.
        </TipBox>
      </Section>

      <Section title="Strengths & Weaknesses">
        <h3>Strengths</h3>
        <ul>
          <li><strong>Best mid-range in Tekken 8</strong> — f+1+2 is arguably the best move in the game</li>
          <li><strong>Incredible tracking</strong> — Most key moves track both directions</li>
          <li><strong>Strong punishment</strong> — i14 launcher (df+2), great 10-frame punish</li>
          <li><strong>Phoenix Shift mixups</strong> — Stance creates terrifying 50/50s</li>
          <li><strong>Best parry in the game</strong> — b+3 parries highs, mids, and even weapons</li>
          <li><strong>Explosive damage</strong> — Zantetsuken + wall carry = devastating</li>
          <li><strong>Hit confirm heavy</strong> — Great for learning fighting games</li>
        </ul>

        <h3>Weaknesses</h3>
        <ul>
          <li><strong>Stubby jab range</strong> — His 1 doesn't reach like most characters</li>
          <li><strong>Weak up close</strong> — Tracking suffers at point-blank range</li>
          <li><strong>df+1 is i14</strong> — Slower than the standard i13, limits close-range options</li>
          <li><strong>No crouch jab</strong> — FC d+1 is a special low, not a jab</li>
          <li><strong>Recoverable damage trade-off</strong> — Some moves don't deal "real" damage</li>
        </ul>
      </Section>

      <Section title="The Optimal Range">
        <p>
          Think of Clive as a <span className="highlight">sniper</span>, not a brawler. There's a 
          sweet spot — roughly 2-3 character lengths away — where nobody can contest him.
        </p>

        <KeyConcept title="Range Control" icon="🎯">
          <ul>
            <li><strong>Far range (3+ lengths)</strong> — Move forward, establish mid-range</li>
            <li><strong>Mid-range (2-3 lengths)</strong> — <span className="highlight">YOUR DOMAIN</span>. f+1+2, b+2, f,f+2, Titan</li>
            <li><strong>Close range (0-1 length)</strong> — Use 1,1, 1+2, parry, or create distance</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Adjustment">
          When you're too close and Clive feels awkward, <strong>don't panic-press</strong>. Use 
          backdash, 1,1, or d+1 to create space, then re-establish your preferred range. Clive 
          wins by playing his game, not theirs.
        </TipBox>
      </Section>

      <Section title="Phoenix Shift Preview">
        <p>
          Phoenix Shift (PHX) is Clive's stance, and it's where his mixups live. You'll learn it 
          in detail in Chapter 3, but here's what you need to know now:
        </p>

        <KeyConcept title="Phoenix Shift Basics" icon="🔥">
          <ul>
            <li><strong>Entry</strong> — Hold forward or press 4 after certain moves (b+2, f,f,f+2, 1,1, etc.)</li>
            <li><strong>PHX 2</strong> — i15 safe mid, your go-to option</li>
            <li><strong>PHX 4</strong> — i15 fast low, -13 on block</li>
            <li><strong>PHX 1+2</strong> — i13 heat engager, safe</li>
            <li><strong>PHX 3,2</strong> — Hell sweep (launch punishable but scary)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Overthink Yet">
          You don't need to master Phoenix Shift immediately. Start with PHX 2 and PHX 4, learn 
          when you enter stance, and the rest will come naturally.
        </TipBox>
      </Section>

      <Section title="Quick Quiz">
        <Quiz
          question="What is Clive's primary gameplan?"
          options={[
            { text: 'Rush the opponent down with constant jab pressure', isCorrect: false },
            { text: 'Control mid-range with long sword attacks, then mix with Phoenix Shift', isCorrect: true },
            { text: 'Focus on grappling and throws like King', isCorrect: false },
            { text: 'Stay at full-screen and use projectiles', isCorrect: false },
          ]}
          correctFeedback="Exactly! Clive dominates at mid-range with his sword and then mixes with Phoenix Shift when he has plus frames."
          incorrectFeedback="Not quite. Clive is a mid-range monster who controls space with f+1+2 and b+2, then transitions into Phoenix Shift for mixups."
        />
      </Section>

      <Section title="Your Learning Path">
        <p>
          This guide is structured to build your Clive skills <strong>progressively</strong>. 
          Each chapter adds new tools on top of what you've already learned.
        </p>

        <ProgressMilestone
          title="Clive Mastery Path"
          steps={[
            { id: 'foundation', label: 'Foundation', description: 'Identity, neutral game, core buttons' },
            { id: 'phoenix', label: 'Phoenix Shift', description: 'Stance entries, mixups, frame traps' },
            { id: 'lows', label: 'Lows & Pressure', description: 'd+1, FC df+2, db+4, ws+3' },
            { id: 'combos', label: 'Combos', description: 'Staple routes, wall carry, wall combos' },
            { id: 'punishment', label: 'Punishment', description: 'Standing, crouching, whiff' },
            { id: 'mechanics', label: 'Heat & Zantetsuken', description: 'Heat strings, meter building, 1+4' },
            { id: 'defense', label: 'Defense', description: 'b+3 parry, b+1+2 power crush' },
            { id: 'mastery', label: 'Complete Clive', description: 'Full gameplan and matchup strategy' },
          ]}
          currentStep={0}
        />

        <TipBox variant="tip" title="How to Use This Guide">
          <strong>Don't skip ahead.</strong> Each chapter builds on the previous. Master your 
          mid-range buttons before diving into Phoenix Shift. Learn combos before worrying about 
          Zantetsuken. The foundation matters.
        </TipBox>
      </Section>
    </Chapter>
  )
}
