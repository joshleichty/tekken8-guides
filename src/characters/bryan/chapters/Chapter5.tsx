import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  DrillMode,
  ConceptBuilder,
  Quiz
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Mid Pokes & Mental Frames"
      intro="Bryan's mid pokes are WEIRD. They're more minus than normal, but have counter-hit extensions that create 'mental frames.' Understanding this concept is key to Bryan's pressure game."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn Lows"
    >
      <Section title="What Are Mental Frames?">
        <p>
          Most characters have pokes that are -5 to -3 on block. Bryan's pokes are more 
          like <span className="highlight-secondary">-6 to -10</span>. So why doesn't he 
          get punished constantly?
        </p>

        <KeyConcept title="Mental Frames Explained" icon="🧠">
          <p>
            <strong>Mental frames</strong> are when opponents respect a follow-up even though 
            you're technically at disadvantage. Bryan's mid pokes all have <span className="highlight">
            counter-hit launching extensions</span>. Opponents who press buttons into these 
            extensions get launched and die.
          </p>
          <p>
            So even though you're -6, the opponent plays like you're +0 or even +2 because 
            they're scared of eating a CH launcher.
          </p>
        </KeyConcept>

        <ConceptBuilder
          title="Mental Frames in Action"
          foundation={[
            { label: 'df+2 is -6 on block', description: 'Technically opponent can press' },
            { label: 'df+2,3 is a CH launcher', description: 'If they press, they die' },
          ]}
          newAddition={{
            label: 'Opponent respects the extension',
            description: 'They treat -6 like it\'s +0',
          }}
          result="You're at 'mental advantage' despite being technically minus"
        />
      </Section>

      <Section title="Your Mid Pokes">
        <SubSection title="df+2">
          <MoveCard
            move={{
              input: 'df+2',
              hitLevel: ['m'],
              damage: '12',
              startup: 'i13',
              onBlock: '-6',
              onHit: '+5',
              tags: ['Mid', 'Elbow', 'Poke'],
              description: 'Your primary i13 mid poke. Has a deadly CH extension.',
            }}
          />
          
          <MoveCard
            move={{
              input: 'df+2,3',
              hitLevel: ['m', 'm'],
              damage: '12, 20',
              startup: 'i13, i23',
              onBlock: '-13',
              onHit: '+8',
              onCH: '+59a',
              tags: ['Mid', 'CH Launcher', 'Extension'],
              description: 'The second hit launches on counter-hit. This is why opponents respect df+2.',
            }}
          />

          <TipBox variant="warning" title="Don't Finish the String Automatically">
            df+2,3 is <strong>-13 on block</strong>. If you always do the full string, 
            good players will just block and punish. The power is in the <strong>threat</strong>, 
            not the execution. Mix single df+2 with occasional df+2,3 on reads.
          </TipBox>
        </SubSection>

        <SubSection title="d+2">
          <MoveCard
            move={{
              input: 'd+2',
              hitLevel: ['m'],
              damage: '17',
              startup: 'i14-15',
              onBlock: '-2',
              onHit: '+8c',
              tags: ['Mid', 'Elbow', 'Forces Crouch'],
              description: 'Slightly slower than df+2 but better frames and forces crouch on hit.',
            }}
          />
          
          <MoveCard
            move={{
              input: 'd+2,3',
              hitLevel: ['m', 'm'],
              damage: '17, 21',
              startup: 'i14-15, i22',
              onBlock: '-10',
              onHit: '+16a (-1)',
              onCH: '+32a (+18)',
              tags: ['Mid', 'CH Launcher', 'Extension'],
              description: 'd+2,3 is confirmable on counter-hit. You have time to see the CH and input 3.',
            }}
          />

          <TipBox variant="tip" title="d+2,3 is Confirmable">
            Unlike df+2,3, you can actually <strong>confirm</strong> d+2,3 on counter-hit. 
            When d+2 hits, there's a noticeable stagger if it counter-hits. Practice recognizing 
            this and only finishing the string on CH.
          </TipBox>
        </SubSection>

        <SubSection title="db+2">
          <MoveCard
            move={{
              input: 'db+2',
              hitLevel: ['m'],
              damage: '13',
              startup: 'i15-17',
              onBlock: '-6',
              onHit: '+8',
              tags: ['Mid', 'Evasive', 'Low Hitbox'],
              description: 'Great all-rounder mid. Low hitbox catches evasive moves. Tracks well.',
              notes: [
                'Excellent at catching sidestepping',
                'Low hitbox makes it evasion-proof',
                '+8 on hit is great for pressure'
              ]
            }}
          />
        </SubSection>
      </Section>

      <Section title="Using Mental Frames">
        <KeyConcept title="The Mental Frame Flowchart" icon="🔄">
          <ol>
            <li><strong>Poke with df+2 or d+2</strong></li>
            <li><strong>Watch the opponent:</strong>
              <ul>
                <li>If they <strong>press back</strong> → Do the CH extension next time</li>
                <li>If they <strong>respect</strong> → Continue offense or throw a low</li>
              </ul>
            </li>
            <li><strong>Condition them:</strong> Once they're scared of the extension, 
              you can use your minus frames freely</li>
          </ol>
        </KeyConcept>

        <DrillMode
          title="Mental Frame Conditioning"
          objective="Learn to read when to use extensions"
          setup="Set dummy to random: block or retaliate with jab"
          difficulty="intermediate"
          estimatedTime="5 min"
          steps={[
            { instruction: 'df+2 only - watch dummy response', targetReps: 10 },
            { instruction: 'df+2,3 when dummy attacks back (catch the CH)', targetReps: 10 },
            { instruction: 'd+2 → if blocked, check if they press', targetReps: 10 },
            { instruction: 'd+2,3 on CH confirmation (watch for stagger)', targetReps: 5 },
          ]}
        />
      </Section>

      <Section title="df+1,1,1,1,2 String">
        <p>
          Bryan has a unique string that's all about <span className="highlight">mental stack 
          and punish mixups</span>.
        </p>

        <MoveCard
          move={{
            input: 'DF+1,1,1,1,2',
            hitLevel: ['m', 'm', 'm', 'm', 'm'],
            damage: '8, 2, 2, 2, 20',
            startup: 'i15',
            onBlock: '-5 (first), -10 (1s), -15 (final 2)',
            onHit: '+1 (1s), +1 (final 2)',
            tags: ['Mid', 'Hit Confirmable', 'Delayable'],
            description: 'A five-hit string where each hit is delayable. Hit confirmable after the second 1.',
            notes: [
              'Hold DF for extensions',
              'Every 1 after the first is -10',
              'The final 2 is -15',
              'Heavily delayable - keep them guessing',
              'Good tracking'
            ]
          }}
        />

        <SubSection title="How to Use This String">
          <KeyConcept title="DF+1 Mind Games" icon="🎭">
            <p>The power is in the <strong>delay and the uncertainty</strong>:</p>
            <ul>
              <li><strong>DF+1 alone</strong> — Safe, resets neutral</li>
              <li><strong>DF+1,1</strong> — If they tried to punish the first hit, they get hit</li>
              <li><strong>DF+1,1,1</strong> — Even more timing mixup</li>
              <li><strong>Full string</strong> — Only on hit confirm or hard reads</li>
            </ul>
            <p>
              The opponent has to guess when you'll stop. If they try to punish and you 
              continue, they get hit. If they wait, you're at only -5/-10.
            </p>
          </KeyConcept>
        </SubSection>

        <TipBox variant="warning" title="Don't Autopilot">
          This string is great for conditioning but <strong>terrible when predictable</strong>. 
          Vary your timing. Sometimes stop at 1 hit. Sometimes do 4. Keep them guessing.
        </TipBox>
      </Section>

      <Section title="Knowledge Check">
        <Quiz
          question="Your df+2 is blocked and you're -6. What should you do?"
          options={[
            { text: 'Always finish with df+2,3 to be safe', isCorrect: false },
            { text: 'Read your opponent - if they press, use df+2,3 next time', isCorrect: true },
            { text: 'Never use df+2 again since you\'re minus', isCorrect: false },
            { text: 'Backdash immediately every time', isCorrect: false },
          ]}
          correctFeedback="Correct! Mental frames are about reads. Use the extension when you expect them to press."
          incorrectFeedback="Mental frames require reading your opponent. If they respect your strings, you can continue offense. If they press, the CH extension destroys them."
        />

        <Quiz
          question="What makes d+2,3 different from df+2,3?"
          options={[
            { text: 'd+2,3 is faster', isCorrect: false },
            { text: 'd+2,3 is confirmable on counter-hit', isCorrect: true },
            { text: 'd+2,3 is safe on block', isCorrect: false },
            { text: 'There\'s no difference', isCorrect: false },
          ]}
          correctFeedback="Right! d+2,3 gives you enough time to confirm the counter-hit and only input the 3 on CH."
          incorrectFeedback="The key difference is d+2,3 can be confirmed on counter-hit - you can react to the CH stagger before inputting 3."
        />
      </Section>
    </Chapter>
  )
}
