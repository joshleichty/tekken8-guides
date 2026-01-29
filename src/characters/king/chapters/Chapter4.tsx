import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  ExecutionBox,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Throw Buffering"
      intro="This is THE technique that separates good King players from great ones. Master throw buffering, and your throws become unreactable. Skip it, and you'll struggle."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn the Mixup"
    >
      <Section title="What is Throw Buffering?">
        <p>
          Throw buffering is the technique of <span className="highlight">inputting the throw motion during 
          another move's recovery</span>. Tekken's input buffer is generous — you can start inputting the throw 
          while your poke is still on screen, and the throw will come out on the first possible frame.
        </p>

        <KeyConcept title="Why Buffering Matters" icon="⚡">
          <ul>
            <li><strong>Without buffering</strong> — You wait for poke to recover, then input throw. Slow.</li>
            <li><strong>With buffering</strong> — You input throw during poke recovery. Fast.</li>
            <li><strong>The difference</strong> — Buffered throws come out 5-10 frames faster</li>
            <li><strong>The result</strong> — From +1, buffered Giant Swing is truly uninterruptible</li>
          </ul>
        </KeyConcept>

        <p>
          This is <span className="highlight-secondary">the most important technique for King</span>. Without 
          buffering, throws are reactable. With buffering, throws are unreactable. Master this, and you'll 
          dominate.
        </p>
      </Section>

      <Section title="How to Buffer Giant Swing">
        <ExecutionBox title="Buffering Giant Swing from Jab" icon="🎮">
          <p>From a jab (1) on block (+1):</p>
          <ol>
            <li><strong>Press 1</strong> — Jab connects or is blocked</li>
            <li><strong>During jab recovery</strong> — Start inputting f,hcf+1</li>
            <li><strong>Input timing</strong> — Start the motion around frame 15-20 of jab recovery</li>
            <li><strong>Press 1 at the end</strong> — Complete the throw input</li>
            <li><strong>Result</strong> — Giant Swing comes out on frame 1 after jab recovery</li>
          </ol>
          <p><strong>Key insight:</strong> You don't wait for the jab to finish. You start the throw motion 
          while the jab is still recovering.</p>
        </ExecutionBox>

        <KeyConcept title="The Buffer Window" icon="⏱️">
          <ul>
            <li><strong>Tekken's buffer is generous</strong> — You can input moves 10-15 frames early</li>
            <li><strong>Start during recovery</strong> — Begin throw motion when poke is 50-75% through recovery</li>
            <li><strong>Complete before recovery ends</strong> — Finish the motion so it's ready when recovery ends</li>
            <li><strong>Practice makes perfect</strong> — The timing becomes muscle memory</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Visual Cue">
          Watch King's animation. When he's about 2/3 through the poke recovery, start your throw motion. 
          By the time recovery ends, your throw input is complete and ready to execute.
        </TipBox>
      </Section>

      <Section title="Buffering from f+1+4">
        <p>
          f+1+4 is King's best plus frame tool. Here's how to buffer throws from it:
        </p>

        <ExecutionBox title="Buffering from Chest Bump" icon="🎮">
          <p>From f+1+4 on block (+3):</p>
          <ol>
            <li><strong>Press f+1+4</strong> — Chest bump connects or is blocked</li>
            <li><strong>During recovery</strong> — Start inputting throw motion</li>
            <li><strong>For Giant Swing</strong> — Input f,hcf+1 during recovery</li>
            <li><strong>For Shining Wizard</strong> — Input f,f,F+2+4 during recovery</li>
            <li><strong>Result</strong> — Throw comes out frame 1 after recovery</li>
          </ol>
          <p><strong>Note:</strong> f+1+4 has longer recovery than jab, so you have more time to buffer. 
          This makes it easier to learn.</p>
        </ExecutionBox>

        <KeyConcept title="Buffering Different Throws" icon="🔄">
          <ul>
            <li><strong>Giant Swing</strong> — Buffer f,hcf+1 during recovery</li>
            <li><strong>Shining Wizard</strong> — Buffer f,f,F+2+4 during recovery</li>
            <li><strong>Tombstone</strong> — Buffer qcb+1+2 during recovery</li>
            <li><strong>Mix them up</strong> — Buffer different throws to keep opponent guessing</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Forward Trick">
        <p>
          Here's a <span className="highlight">pro tip</span> that makes buffering easier:
        </p>

        <KeyConcept title="The Forward Trick" icon="💡">
          <p>Many of King's plus frame moves already have forward in them:</p>
          <ul>
            <li><strong>f+1+4</strong> — Already has forward</li>
            <li><strong>f,f+2</strong> — Already has forward</li>
            <li><strong>f,f,n+1+2</strong> — Already has forward</li>
          </ul>
          <p>This forward input <strong>counts as the first forward</strong> for Giant Swing! So from f+1+4:</p>
          <ul>
            <li>f+1+4 (the f counts!) → hcf+1 = Giant Swing</li>
            <li>You don't need to input f again</li>
            <li>Just do hcf+1 after f+1+4</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Easier Buffering">
          This makes buffering much easier. From f+1+4, you just need to do hcf+1 (not f,hcf+1) because the 
          forward from f+1+4 counts. Practice this — it'll make your throw game much faster.
        </TipBox>
      </Section>

      <Section title="What Can't Be Buffered">
        <p>
          Not all throws can be buffered. Understanding this is important:
        </p>

        <KeyConcept title="Buffering Limitations" icon="⚠️">
          <ul>
            <li><strong>Shining Wizard</strong> — Requires a run first. Can't buffer the run.</li>
            <li><strong>Chain throws</strong> — Complex inputs can't be fully buffered</li>
            <li><strong>Jaguar Sprint throws</strong> — Need to enter stance first</li>
          </ul>
          <p><strong>What CAN be buffered:</strong></p>
          <ul>
            <li><strong>Giant Swing</strong> — Fully bufferable</li>
            <li><strong>Tombstone</strong> — Fully bufferable</li>
            <li><strong>Tijuana Twister</strong> — Fully bufferable</li>
            <li><strong>Generic throws</strong> — Fully bufferable</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Shining Wizard Exception">
          Shining Wizard requires a run (f,f,F), and you can't buffer a run. So from plus frames, if you 
          need a 1+2 break throw, use Muscle Buster (f+1+3) instead — it's bufferable and also 1+2 break.
        </TipBox>
      </Section>

      <Section title="Practice Time">
        <PracticeBox
          title="Throw Buffering Practice"
          setup="Set dummy to Guard All. Practice buffering throws from plus frame moves."
          tasks={[
            { id: 'ch4-jab-buffer', text: 'Buffer Giant Swing from jab 10 times', detail: '1 on block → buffer f,hcf+1 during recovery', type: 'counter', target: 10 },
            { id: 'ch4-chest-buffer', text: 'Buffer Giant Swing from f+1+4 10 times', detail: 'f+1+4 on block → buffer hcf+1 (forward trick!)', type: 'counter', target: 10 },
            { id: 'ch4-tomb-buffer', text: 'Buffer Tombstone from f+1+4 10 times', detail: 'f+1+4 on block → buffer qcb+1+2', type: 'counter', target: 10 },
            { id: 'ch4-mix-buffer', text: 'Mix buffered Giant Swing and Tombstone', detail: 'Make them guess between 1 break and 2 break', type: 'counter', target: 10 },
          ]}
        />
      </Section>

      <Section title="The Complete Picture">
        <p>
          Now you understand the full picture:
        </p>

        <KeyConcept title="The Buffered Throw Loop" icon="🔄">
          <ol>
            <li><strong>Get plus frames</strong> — Jab (+1), f+1+4 (+3), etc.</li>
            <li><strong>Buffer throw during recovery</strong> — Input throw motion while poke is recovering</li>
            <li><strong>Throw comes out frame 1</strong> — Uninterruptible from plus frames</li>
            <li><strong>They must guess</strong> — Duck, break 1, break 1+2, or break 2</li>
            <li><strong>If they break</strong> — You're still plus, buffer another throw</li>
            <li><strong>Repeat</strong> — The pressure never stops</li>
          </ol>
        </KeyConcept>

        <p>
          This is <span className="highlight">King's core offense</span>. Master throw buffering, and you'll 
          dominate. Skip it, and you'll struggle. Practice until it's muscle memory.
        </p>
      </Section>
    </Chapter>
  )
}
