import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="Purple Lightning"
      intro="Before you touch a button, understand who Reina is. She's not just another Mishima — she's something new. This chapter introduces her identity, then hands you the one move that makes the whole character click."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Why This Works"
    >
      <Section title="Who Is Reina?">
        <p>
          Reina is Heihachi Mishima's secret daughter — the newest member of Tekken's most infamous bloodline.
          But calling her "another Mishima" misses the point. Her fighting style fuses <span className="highlight">Mishima Karate</span> with
          {' '}<span className="highlight">Taido</span>, a real Japanese martial art built on evasive, acrobatic movement.
          Where Kazuya plants his feet and waits for the perfect moment, Reina never stops moving. Where Jin alternates
          between patient defense and explosive punishment, Reina chains pressure until something breaks.
        </p>

        <p>
          She has the electric — the signature Mishima tool — but it's not the center of her game. It's one weapon
          among many. The center of her game is <em>stance flow</em>: three interconnected stances (Sentai, Heaven's Wrath,
          and Unsoku) that feed into each other like a machine. You enter one, threaten an option, transition to
          the next, threaten again. The opponent is never defending one thing — they're defending a current.
        </p>
      </Section>

      <Section title="What Playing Reina Feels Like">
        <p>
          Most characters have a rhythm: poke, wait, react. Reina's rhythm is different. You poke — then flow
          into a stance. From that stance, you threaten — then flow into another stance. There's no pause. No
          reset to neutral where the opponent gets to breathe. When Reina is playing well, it feels like being
          a river: always moving, always finding the path of least resistance, always pressing forward.
        </p>

        <p>
          This doesn't mean she's mindless aggression. Every stance transition is a decision. Every option has a
          counter. The skill is knowing which branch to take, when to keep pressing, and when to step back and
          start the current again from neutral. Reina rewards players who think two moves ahead — not because
          they memorized a flowchart, but because they <em>feel</em> where the pressure should go next.
        </p>
      </Section>

      <Section title="Who Reina Is For">
        <p>
          Reina is for players who want <span className="highlight">Mishima tools without pure Mishima rigidity</span>. If you've
          looked at Kazuya or Heihachi and liked the electric, the hellsweep, the powerful 50/50 game — but
          wished the character had more flow, more creativity, more routes through a round — Reina is your answer.
        </p>

        <p>
          She's also for players who enjoy stance characters but want real power behind the transitions. Reina
          isn't doing stance tricks for style points. Every transition leads to genuine threats — launchers,
          counter-hit tools, plus frames. The stances aren't gimmicks. They're the engine.
        </p>

        <KeyConcept title="Be Honest With Yourself" icon="⚠️">
          <p>
            Reina is rated advanced difficulty for a reason. Her execution ceiling is high, her stance transitions
            demand muscle memory, and her electric (while not required early) becomes important at higher levels.
            This guide will build you up gradually — but know that Reina gives back exactly what you put in.
            She's one of the strongest characters in Season 2, and she rewards investment like few others.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Strengths & Weaknesses">
        <p>
          Reina's strengths are numerous and genuine. Her approach tool — f,f+2 into Sentai — is one of the
          best in the game, leaving her plus on block and in a stance loaded with options. Her three stances
          interconnect, meaning she can chain pressure for as long as her opponent lets her. She has an i11
          electric that's +5 on block — a Mishima trademark that most characters would kill for. In Heat,
          her WRA stance gains an auto-parry, making her close-range pressure even scarier. Her movement is
          excellent (one of the best sidesteps in the game), and she's consistently rated S-tier in Season 2.
        </p>

        <p>
          But she has clear weaknesses. Her best low poke, d+4, is launch punishable at -15 on block — risky
          for a move you'd want to throw out casually. Her electric, while powerful, is linear and doesn't
          track opponents stepping to her right. Her combo damage is lower than other Mishimas, meaning she
          needs more openings to close out rounds. And her execution demands are real — as you climb ranks,
          the things she needs you to do get harder. None of these are dealbreakers. They're tradeoffs, and
          they're worth understanding now so you know what you're investing in.
        </p>
      </Section>

      <Section title="What This Guide Will Build">
        <p>
          This guide teaches Reina in three layers. First, <strong>the core loop</strong> — the single approach
          tool and follow-up that wins rounds from day one. Then, <strong>stance flow</strong> — learning
          Sentai, Heaven's Wrath, and Unsoku not as separate move lists but as one connected system.
          Finally, <strong>the full arsenal</strong> — neutral tools, combos, punishment, defense, Heat,
          wall game, and the electric. Each layer builds on the last. Nothing is wasted.
        </p>

        <p>
          By the end, you won't just know Reina's moves. You'll understand <em>how she thinks</em> — and
          you'll be able to construct your own pressure, adapt to any opponent, and keep growing long after
          this guide is finished.
        </p>

        <TipBox variant="tip" title="Let's Start">
          Everything begins with one move. One approach. One follow-up. Forget the move list.
          Forget frame data. In five minutes, you'll have a loop that works against anyone.
        </TipBox>
      </Section>

      <Section title="The Move That Starts Everything">
        <p>
          Every Reina round starts the same way. Not with a jab. Not with a poke. 
          With <span className="highlight">f,f+2</span> into Sentai stance.
        </p>

        <MoveCard character="reina"
          videoId="f,F+2"
          move={{
            input: 'f,f+2',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i12',
            onBlock: '-9',
            onHit: '+2',
            tags: ['Mid', 'Safe', 'Stance Transition'],
            description: 'Your main approach tool. Hold forward after to enter Sentai at +2 on block, +13 on hit.',
            notes: ['Hold F to transition to Sentai', 'Safe on block by itself (-9)', 'Amazing range for getting in']
          }}
          showVideo
        />

        <p>
          This single move is why Reina is terrifying. Watch what happens when you hold forward:
        </p>

        <KeyConcept title="The Magic Happens When You Hold Forward" icon="⚡">
          <ul>
            <li><strong>f,f+2 alone</strong> — Safe mid, -9 on block, nothing special</li>
            <li><strong>f,f+2~F (hold forward)</strong> — Transitions to Sentai at <span className="highlight">+2 on block</span></li>
            <li><strong>On hit</strong> — You're +13 in Sentai. Your opponent is FROZEN.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="This Is Your Key">
          That +2 on block means your opponent can't press buttons. They have to sit there and respect 
          your next move. And in Sentai, your next move is SCARY.
        </TipBox>
      </Section>

      <Section title="The Follow-Up That Makes Them Scared">
        <p>
          You've hit f,f+2 and held forward. You're in Sentai stance. Now what?
        </p>

        <MoveCard character="reina"
          videoId="SEN.3"
          move={{
            input: 'SEN 3',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i12~13',
            onBlock: '+1',
            onHit: '+7',
            tags: ['High', 'Heat Engager', 'Homing', 'Plus on Block'],
            description: 'Fast homing high from Sentai. Heat engager. +1 on block means you keep pressure.',
            notes: ['Deals chip damage', 'Your fastest stance option', 'Hit confirms from f,f+2']
          }}
          showVideo
        />

        <p>
          Here's the beautiful part: <strong>f,f+2 on hit guarantees SEN 3</strong>. 
          It's a true combo—they can't block it.
        </p>

        <KeyConcept title="The Core Hit Confirm" icon="🎯">
          <ol>
            <li>Do <code>f,f+2</code> and hold forward</li>
            <li>Watch if it hits or gets blocked</li>
            <li><strong>If it hits</strong> → Press 3 for guaranteed SEN 3 (heat engager!)</li>
            <li><strong>If blocked</strong> → You're +2, mix them up (next chapter)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="SEN 3 is a High">
          If your opponent is crouching when you enter Sentai, SEN 3 will whiff. 
          We'll cover what to do about duckers in Chapter 3. For now, just drill the loop.
        </TipBox>
      </Section>

      <Section title="The Loop In Action">
        <Flowchart 
          title="Your First Game Plan"
          nodes={[
            { type: 'start', label: 'Approach with f,f+2~F' },
            { type: 'decision', label: 'Did it hit?', branches: [
              { label: 'Yes (Hit)', action: 'Press 3 → Free heat engager!' },
              { label: 'No (Block)', action: 'You\'re +2 → Keep pressing (Ch. 2)' }
            ]},
            { type: 'end', label: 'Repeat the loop' }
          ]}
        />

        <p>
          That's it. That's the whole game plan for your first 50 matches with Reina.
        </p>

        <KeyConcept title="Why This Works at Every Level" icon="💡">
          <ul>
            <li><strong>In lower ranks</strong> — People don't know what Sentai is. They mash. They die.</li>
            <li><strong>In mid ranks</strong> — They try to challenge your +2. They get counter-hit.</li>
            <li><strong>In high ranks</strong> — The mind games begin. But the loop is still your foundation.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Practice: Drill Until It's Automatic">
        <PracticeBox
          title="The f,f+2 Loop Drill"
          setup="Set opponent to Guard All. Stand at mid-range."
          tasks={[
            { id: 'ff2-basic', text: 'Do f,f+2 by itself 5 times', detail: 'Get the dash motion comfortable', type: 'counter', target: 5 },
            { id: 'ff2-sen', text: 'Do f,f+2~F (transition) 10 times', detail: 'Hold forward to enter Sentai', type: 'counter', target: 10 },
            { id: 'ff2-sen3', text: 'Do f,f+2~F → SEN 3 as one motion 10 times', detail: 'This is your bread and butter', type: 'counter', target: 10 },
          ]}
        />

        <PracticeBox
          title="The Hit Confirm Drill"
          setup="Set opponent to Random Guard. Stand at mid-range."
          tasks={[
            { id: 'hitconfirm-1', text: 'Hit confirm f,f+2~F → SEN 3 five times', detail: 'Only press 3 when you see it HIT', type: 'counter', target: 5 },
            { id: 'hitconfirm-2', text: 'Complete 10 attempts without messing up', detail: 'No pressing 3 when they block!', type: 'counter', target: 10 },
          ]}
        />

        <TipBox variant="tip" title="How to Know You've Got It">
          You've internalized this when you stop thinking about inputs. You dash in, 
          your fingers automatically hold forward, and SEN 3 only comes out when you see the hit.
        </TipBox>
      </Section>

      <Section title="What About Everything Else?">
        <p>
          You might be thinking: "Wait, what about electrics? What about her other moves? 
          What about punishment?"
        </p>

        <p>
          All of that's coming. But here's the truth about Reina:
        </p>

        <KeyConcept title="The 80/20 Rule" icon="📊">
          <p>
            80% of your Reina wins will come from <strong>f,f+2 pressure</strong> and 
            <strong>Sentai mixups</strong>. The electrics, the fancy stances, the parries—that's 
            the other 20%.
          </p>
          <p style={{ marginTop: '12px' }}>
            We're building the 80% first. Once that's automatic, we'll add layers.
          </p>
        </KeyConcept>

        <p>
          In the next chapter, you'll learn <strong>why</strong> this loop works and what to do 
          when your opponent starts blocking. Spoiler: that's when Reina gets really fun.
        </p>
      </Section>

      <Section title="Quick Reference">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>The Approach</div>
            <code style={{ fontSize: '1.1em' }}>f,f+2~F</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              +2 on block → Your turn<br/>
              +13 on hit → Free follow-up
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>The Follow-Up</div>
            <code style={{ fontSize: '1.1em' }}>SEN 3</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              i12 heat engager<br/>
              Guaranteed after f,f+2 hit
            </div>
          </div>
        </div>

        <TipBox variant="tip" title="Notebook Time" icon="📝">
          Write this down: <strong>"f,f+2~F is my approach. SEN 3 is my hit confirm."</strong>
          <br/><br/>
          Every time you play Reina today, your goal is ONE thing: land f,f+2 and hit confirm SEN 3.
        </TipBox>
      </Section>
    </Chapter>
  )
}
