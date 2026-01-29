import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, Collapsible, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Key Strings"
      intro="Armor King has several important strings that form the backbone of his pressure game. Understanding when to use each extension — and when to stop — is crucial."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Continue to Lows"
    >
      <Section title="The 1,2,1 String">
        <p>Your 10-frame jab string with a key tactical property — the ability to cancel into Bad Jaguar stance.</p>

        <MoveCard character="armor-king"
          input="1,2,1"
          tags={['high', 'high', 'mid']}
          description={
            <>
              A high-high-mid string. The third hit is confirmable on <span className="highlight-secondary">counter hit</span> — 
              if the second hit counter hits, you're guaranteed the full string. The important part: <strong>hold forward 
              after 1,2,1 to cancel into Bad Jaguar stance</strong>.
            </>
          }
          stats={{
            startup: 'i10',
            onBlock: '-5',
            onHit: '+1',
            onCH: '+11',
          }}
        />

        <Collapsible title="1,2,1~F Cancel Explained" icon="📖">
          <p>After 1,2,1 you can hold forward to cancel the recovery and go into <span className="highlight">Bad Jaguar stance</span>.</p>
          <p><strong>On Block:</strong> You're -19 to -21. Very dangerous! Only use in Heat (where it becomes safer due to Heat moves).</p>
          <p><strong>On Hit:</strong> You're -11. Still negative, but you're in stance with options.</p>
          <p><strong>Best Use:</strong> In Heat, or as a conditioning tool when you've trained them to respect your pressure.</p>
        </Collapsible>
      </Section>

      <Section title="The 2,1 Punish String">
        <MoveCard character="armor-king"
          input="2,1"
          tags={['high', 'mid']}
          description={
            <>
              Your <span className="highlight">10-frame punish</span>. High-mid natural combo. Use this to punish 
              moves that are -10 or worse. Clean, reliable damage.
            </>
          }
          stats={{
            startup: 'i10',
            onBlock: '-3',
            onHit: '+7',
          }}
        />
      </Section>

      <Section title="The b+1,2 String — Your 12-Frame Punish">
        <p>This is one of Armor King's most important strings. It's your 12-frame block punish AND your whiff punish tool.</p>

        <MoveCard character="armor-king"
          input="b+1,2"
          tags={['high', 'mid']}
          description={
            <>
              <strong>Outstanding range</strong> for a 12-frame punish. The second hit is delayable and on{' '}
              <span className="highlight-secondary">counter hit</span> guarantees a follow-up.{' '}
              <strong>Hold forward after to enter Bad Jaguar at +8!</strong>
            </>
          }
          stats={{
            startup: 'i12',
            onBlock: '-12',
            onHit: '+8',
            onCH: '+11',
          }}
        />

        <KeyConcept title="b+1,2~F into Bad Jaguar" icon="🔑">
          <p>When b+1,2 hits (as a punish or whiff punish), hold forward to enter Bad Jaguar stance at <span className="highlight">+8</span>. From +8 in stance, your opponent must guess between:</p>
          <ul>
            <li><strong>BAD 4</strong> — Low (17f, +3 on hit)</li>
            <li><strong>BAD 2,4</strong> — Mid into throw (confirmable)</li>
            <li><strong>BAD 1+3 / 2+4</strong> — Giant Swing or other throws</li>
            <li><strong>BAD 1+2</strong> — Plus frame headbutt</li>
          </ul>
          <p>Only go into Bad Jaguar when you HIT with b+1,2, not on block!</p>
        </KeyConcept>
      </Section>

      <Section title="The b+2,1,2 String — Counter Hit Confirmable">
        <MoveCard character="armor-king"
          input="b+2,1,2"
          tags={['mid', 'mid', 'high']}
          description={
            <>
              A mid-mid-high string that's <span className="highlight-secondary">counter hit confirmable</span>. 
              If either the first or second hit counter hits, you can confirm the third hit which wallsplats 
              for massive damage at the wall.
            </>
          }
          stats={{
            startup: 'i13',
            onBlock: '-7',
            onHit: '+19a',
            onCH: 'Wallsplat',
          }}
        />
      </Section>

      <Section title="The f+3,2 String — Crouch Dash Cancel">
        <MoveCard character="armor-king"
          input="f+3,2"
          tags={['mid', 'mid']}
          description="A mid-mid string that's -11 on block. The key property: you can cancel the recovery into crouch dash with df!"
          stats={{
            startup: 'i15',
            onBlock: '-11',
            onHit: '+5',
          }}
        />

        <KeyConcept title="f+3,2~df Crouch Dash Cancel" icon="🔑">
          <p>After f+3,2 hits or is blocked, input df to crouch dash. From there you can:</p>
          <ul>
            <li><strong>CD+2</strong> — Dark Upper for a launcher if they whiff</li>
            <li><strong>CD+1</strong> — Plus on block mid for pressure</li>
            <li><strong>CD+1+3/2+4</strong> — Crouch throw mixup</li>
          </ul>
          <p>This cancel is essential for Armor King's combo routes!</p>
        </KeyConcept>
      </Section>

      <Section title="The 4,3 String">
        <MoveCard character="armor-king"
          input="4,3"
          tags={['high', 'high']}
          description={
            <>
              A high-high string. On <span className="highlight-secondary">counter hit</span> on the first hit, 
              the second hit wallsplats! The second hit can be cancelled into standing with B, giving you a 
              frame trap at -16 on block but -5 on hit.
            </>
          }
          stats={{
            startup: 'i13',
            onBlock: '0',
            onHit: '+9',
            onCH: '+27d Wallsplat',
          }}
        />
      </Section>

      <PracticeBox
        title="String Practice"
        setup="Set dummy to Guard All. Practice each string until you can do them smoothly, then practice the cancels."
        tasks={[
          { id: 'ch3-21', text: 'Do 2,1 (10f punish)', detail: 'Your go-to for punishing -10 moves', type: 'counter', target: 10 },
          { id: 'ch3-b12', text: 'Do b+1,2 (12f punish)', detail: 'Notice the excellent range', type: 'counter', target: 10 },
          { id: 'ch3-b12f', text: 'Do b+1,2~F (stance cancel)', detail: 'Hold forward after b+1,2 — you should enter Bad Jaguar', type: 'counter', target: 10 },
          { id: 'ch3-f32', text: 'Do f+3,2 repeatedly', detail: 'Get the timing down', type: 'counter', target: 10 },
          { id: 'ch3-f32df', text: 'Do f+3,2~df (crouch dash cancel)', detail: 'After f+3,2 hits or is blocked, input df to crouch dash', type: 'counter', target: 10 },
        ]}
      />

      <Quiz
        question="You block punish a -12 move with b+1,2 and it hits. What's the optimal follow-up?"
        options={[
          { text: 'Do another b+1,2 for more damage', isCorrect: false },
          { text: 'Hold forward to enter Bad Jaguar at +8 and mix up', isCorrect: true },
          { text: 'Backdash and wait for their next move', isCorrect: false },
          { text: "Do nothing — you're at frame disadvantage", isCorrect: false },
        ]}
        correctFeedback="Correct! When b+1,2 hits, you're +8. Hold forward to enter Bad Jaguar stance where you have a deadly mixup between lows, mids, and throws."
        incorrectFeedback="Not quite. After b+1,2 hits, you're +8. The optimal play is to hold forward and enter Bad Jaguar stance for a mixup!"
      />
    </Chapter>
  )
}
