import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  InputNotation
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Your First Session"
      intro="Let's get you playing Jack immediately. This chapter gives you 3 essential moves that form the foundation of everything else. Master these before moving on."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Movement"
    >
      <Section title="The Three Pillars">
        <p>
          Every Jack player, from beginner to tournament champion, uses these three moves 
          constantly. Learn them first, and you have a functional Jack.
        </p>

        <KeyConcept title="Your First Three Moves" icon="🎯">
          <ul>
            <li><strong>db+1</strong> — The fastest standing low in the game. Your foundation.</li>
            <li><strong>2</strong> — Jack's jab. Triple the range of normal jabs.</li>
            <li><strong>df+2</strong> — Your generic launcher with massive range.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Why Just Three?">
          Information overload kills learning. These three moves cover lows, jab pressure, 
          and launches — the core of Jack's game. Everything else builds on this foundation.
        </TipBox>
      </Section>

      <Section title="Move 1: db+1 (Machine Gun Blast)">
        <MoveCard character="jack-8"
          move={{
            input: 'db+1',
            hitLevel: ['l'],
            damage: '13',
            startup: 'i12',
            onBlock: '-12',
            onHit: '+1c',
            tags: ['Low', 'Fast', 'Plus on Hit', 'Crouch Transition'],
            description: 'Possibly the single fastest low in the game from standing. This is THE move for Jack.',
            notes: [
              'Leaves you in crouch on hit (+1c)',
              'Has follow-ups: db+1,1 and db+1,1,1,2',
              'At the wall, db+1,1 is a natural combo',
              '-12 on block means ws4 punish at worst'
            ]
          }}
        showVideo
        />

        <SubSection title="Why This Move is Everything">
          <p>
            <span className="highlight">db+1 is the foundation Jack's empire is built on.</span> Here's why:
          </p>
          <ul>
            <li><strong>i12 startup</strong> — Most lows are i16-20+. This is absurdly fast.</li>
            <li><strong>+1 on hit (crouching)</strong> — You're advantaged AND in crouch for mixups</li>
            <li><strong>Low commitment</strong> — 13 damage, low risk</li>
            <li><strong>Multiple follow-ups</strong> — Can chain into db+1,1 or db+1,1,1,2</li>
            <li><strong>Wall combo</strong> — At the wall, db+1,1 becomes guaranteed</li>
          </ul>
        </SubSection>

        <SubSection title="What Happens After db+1 Hits">
          <p>
            When db+1 connects, you're +1 and <strong>crouching</strong>. This is huge because 
            Jack has one of the best crouch movesets in the game. Your opponent is now terrified:
          </p>
          <ul>
            <li>Do you go for another low?</li>
            <li>Do you use a crouch mid?</li>
            <li>Do you stand up and continue pressure?</li>
          </ul>

          <TipBox variant="tip" title="Simple Follow-up">
            After db+1 hits, try ws4. It's a quick i11 mid that's +5 on hit. If they press 
            a button after blocking your low, they get smacked. This simple sequence teaches 
            opponents to respect your crouch game.
          </TipBox>
        </SubSection>

        <SubSection title="Execution">
          <InputNotation notation="↙ + 1" size="large" />
          <p>
            Hold down-back and press 1. Simple. The motion should be instant — no thinking, 
            just muscle memory. Practice until you can do ten in a row without missing.
          </p>
        </SubSection>
      </Section>

      <Section title="Move 2: 2 (Jack's Jab)">
        <MoveCard character="jack-8"
          move={{
            input: '2',
            hitLevel: ['h'],
            damage: '10',
            startup: 'i11',
            onBlock: '+1',
            onHit: '+9',
            tags: ['High', 'Plus on Block', 'Long Range', 'Pressure Starter'],
            description: 'Jack\'s jab is 1 frame slower than most, but has TRIPLE the range.',
            notes: [
              'Plus on block (+1) — it\'s your turn after',
              'Plus on hit (+9) — continue pressure freely',
              'Has many extensions: 2,1 / 2,1,2 / 2,3',
              'Recovers 2f faster on hit or block'
            ]
          }}
        showVideo
        />

        <SubSection title="The Range Monster">
          <p>
            Most characters' jabs are i10. Jack's is i11. But here's the thing: 
            <span className="highlight">Jack's 2 has roughly triple the range</span> of a 
            normal jab. He can hit you from distances where other characters' jabs whiff completely.
          </p>

          <KeyConcept title="Why 2 is Your Pressure Starter" icon="👊">
            <ul>
              <li><strong>+1 on block</strong> — Even when blocked, it's your turn</li>
              <li><strong>+9 on hit</strong> — Huge advantage to continue</li>
              <li><strong>Insane range</strong> — Outranges most standing pokes</li>
              <li><strong>String extensions</strong> — 2,1 is high-mid; 2,1,2 is a mid launcher</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <SubSection title="Key Extensions">
          <ul>
            <li><strong>2,1</strong> — High-mid string. If they duck the jab, the mid catches them. +2 on block.</li>
            <li><strong>2,1,1+2</strong> — Machine gun follow-up. Safe on block, resets spacing.</li>
            <li><strong>2,1,2</strong> — Mid launcher. Catches people who try to duck after 2,1.</li>
            <li><strong>2,3</strong> — Quick 28 damage. Not safe, but good guaranteed punish at +11.</li>
          </ul>
        </SubSection>

        <TipBox variant="tip" title="The Game Plan">
          Hit them with 2. If blocked, you're +1. Hit them with db+1 (low). If they block that, 
          you're in crouch. Mix them up with crouch moves. <strong>This is the Jack loop.</strong>
        </TipBox>
      </Section>

      <Section title="Move 3: df+2 (Generic Launcher)">
        <MoveCard character="jack-8"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15',
            onBlock: '-14',
            onHit: '+31a (+21)',
            tags: ['Mid', 'Launcher', 'Whiff Punisher', 'Long Range'],
            description: 'Your generic launcher with absurd range. Punish whiffs from distances others can\'t.',
            notes: [
              'Much longer range than most df+2s',
              'Also has df+2,1 extension (hold for charged version)',
              '-14 on block, so don\'t throw it out carelessly',
              'Primary whiff punisher'
            ]
          }}
        showVideo
        />

        <SubSection title="Range is Everything">
          <p>
            Most characters' generic launchers barely reach from round start position. 
            <span className="highlight">Jack's df+2 can hit from much further away.</span> 
            This means:
          </p>
          <ul>
            <li><strong>Better whiff punishment</strong> — Catch limbs others can't reach</li>
            <li><strong>Safer at range</strong> — Pushback makes it harder to punish</li>
            <li><strong>Space control</strong> — Opponents fear approaching</li>
          </ul>
        </SubSection>

        <SubSection title="When to Use df+2">
          <KeyConcept title="df+2 Situations" icon="🎯">
            <ul>
              <li><strong>Whiff punishment</strong> — They miss, you launch. Don't think, just do it.</li>
              <li><strong>As a hard read</strong> — If you KNOW they're going to press</li>
              <li><strong>i15 punish situations</strong> — When you block something -15</li>
              <li><strong>NOT as a poke</strong> — It's -14 on block. Save it for punishes.</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <TipBox variant="warning" title="Don't Spam This">
          df+2 is <span className="highlight-secondary">-14 on block</span>. That means 
          opponents get a free launch punish if they block it. Use it for whiff punishment 
          and hard reads, not as a poking tool.
        </TipBox>
      </Section>

      <Section title="Putting It Together">
        <p>
          With just these three moves, you have a complete gameplan:
        </p>

        <KeyConcept title="Basic Jack Flow" icon="🔄">
          <ol>
            <li><strong>Start with 2:</strong> Establish your range, get plus frames</li>
            <li><strong>Mix in db+1:</strong> Force them to block low, end up in crouch</li>
            <li><strong>Continue from crouch:</strong> ws4 or more lows</li>
            <li><strong>Punish whiffs:</strong> df+2 when they miss</li>
            <li><strong>Repeat:</strong> The loop never ends</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice This">
          Go into practice mode with <strong>only these three moves</strong> and try to 
          play complete rounds. You'll discover they're genuinely enough to compete. 
          The skill isn't knowing more moves — it's knowing when to use each one.
        </TipBox>
      </Section>

      <Section title="Chapter Summary">
        <p>You now have the foundation of Jack's game:</p>
        <ul>
          <li><strong>db+1</strong> — Your fastest low. +1 on hit into crouch mixups.</li>
          <li><strong>2</strong> — Your jab. +1 on block, triple range, pressure starter.</li>
          <li><strong>df+2</strong> — Your launcher. Whiff punish from range.</li>
        </ul>
        <p>
          If you can do the above, you already play better Jack than beginners who know 
          30 moves but don't understand when to use them. Next, we'll add movement to make 
          these tools even more dangerous.
        </p>
      </Section>
    </Chapter>
  )
}
