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
      title="Your First Weapon"
      intro="Forget the move list. Forget frame data. In five minutes, you'll have a loop that works against anyone. This is how Reina plays—and it starts with one move."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Why This Works"
    >
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
