import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  DrillMode,
  Quiz
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="String Extensions"
      intro="Bryan's poking strings all have deadly CH extensions. This chapter deep-dives into reading when to use them and when to hold back."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Learn Combos"
    >
      <Section title="The Extension Philosophy">
        <p>
          We covered mental frames in Chapter 5, but now let's go deeper. <span className="highlight">
          Using extensions is a read, not an autopilot decision</span>.
        </p>

        <KeyConcept title="Extension Decision Framework" icon="🎯">
          <p>Ask yourself before using an extension:</p>
          <ol>
            <li><strong>Is my opponent pressing?</strong> — If yes, use the extension</li>
            <li><strong>Is my opponent blocking?</strong> — If yes, stop or use a low</li>
            <li><strong>What did they do last time?</strong> — Adjust accordingly</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Extension Reference">
        <SubSection title="df+2,3">
          <MoveCard
            move={{
              input: 'df+2,3',
              hitLevel: ['m', 'm'],
              damage: '12, 20',
              startup: 'i13, i23',
              onBlock: '-13',
              onHit: '+8',
              onCH: '+59a',
              tags: ['Mid', 'CH Launcher'],
              description: 'Extension after your i13 mid poke.',
            }}
          />
          <ul>
            <li><strong>Use when:</strong> Opponent is pressing back after df+2</li>
            <li><strong>Don't use when:</strong> They're blocking patiently or stepping</li>
            <li><strong>Risk:</strong> -13 on block = punished</li>
          </ul>
        </SubSection>

        <SubSection title="d+2,3">
          <MoveCard
            move={{
              input: 'd+2,3',
              hitLevel: ['m', 'm'],
              damage: '17, 21',
              startup: 'i14-15, i22',
              onBlock: '-10',
              onHit: '+16a (-1)',
              onCH: '+32a (+18)',
              tags: ['Mid', 'CH Launcher', 'Confirmable'],
              description: 'Confirmable CH extension. React to the stagger.',
            }}
          />
          <ul>
            <li><strong>Use when:</strong> You SEE the counter-hit stagger</li>
            <li><strong>Don't use when:</strong> It's a normal hit (not confirmable on NH)</li>
            <li><strong>Risk:</strong> -10 on block = light punish</li>
          </ul>
          <TipBox variant="tip" title="Practice Confirming">
            d+2,3 is one of Bryan's few confirmable CH strings. Drill this until you can 
            reliably tell the difference between normal hit and counter-hit stagger.
          </TipBox>
        </SubSection>

        <SubSection title="1,2,1">
          <MoveCard
            move={{
              input: '1,2,1',
              hitLevel: ['h', 'h', 'm'],
              damage: '5, 8, 18',
              startup: 'i10',
              onBlock: '-6',
              onHit: '+6',
              onCH: '+65a',
              tags: ['High', 'Mid', 'CH Launcher', 'Delayable'],
              description: '10 frames of delay make this a mixup tool.',
            }}
          />
          <ul>
            <li><strong>Use when:</strong> You've conditioned them to press after 1,2</li>
            <li><strong>Don't use when:</strong> They're blocking or ducking</li>
            <li><strong>The delay:</strong> Vary timing between 0-10 frames to be unpredictable</li>
          </ul>
        </SubSection>

        <SubSection title="b+3,2,1,2">
          <MoveCard
            move={{
              input: 'b+3,2,1,2',
              hitLevel: ['m', 'h', 'm', 'm'],
              damage: '12, 12, 10, 14',
              startup: 'i19',
              onBlock: '-10',
              onHit: '+19a (+10)',
              tags: ['Mid', 'Extension'],
              description: 'Long string from b+3. Useful for pressure.',
            }}
          />
          <ul>
            <li><strong>Note:</strong> b+3 transitions to Slither Step with f</li>
            <li><strong>b+3,1+2</strong> is another option that spikes on CH</li>
          </ul>
        </SubSection>

        <SubSection title="4,3,4">
          <MoveCard
            move={{
              input: '4,3,4',
              hitLevel: ['h', 'm', 'm'],
              damage: '15, 12, 16',
              startup: 'i12',
              onBlock: '-12',
              onHit: '+14a (+5)',
              onCH: '+33d (+25)',
              tags: ['High', 'Mid', 'CH Knockdown'],
              description: 'Extension from 4 jab. Can be charged for more damage.',
            }}
          />
          <MoveCard
            move={{
              input: '4,3,f+4',
              hitLevel: ['h', 'm', 'h'],
              damage: '15, 12, 18',
              startup: 'i12',
              onBlock: '-5',
              onHit: '+6',
              onCH: '+31a (+21)',
              tags: ['High', 'Mid', 'Safer'],
              description: 'Alternative ender that\'s safer but high.',
            }}
          />
        </SubSection>
      </Section>

      <Section title="Reading Opponent Tendencies">
        <KeyConcept title="Player Type Detection" icon="🔍">
          <ul>
            <li><strong>Aggressive:</strong> Press after everything → Use extensions freely</li>
            <li><strong>Defensive:</strong> Block and wait → Stop strings early, use lows</li>
            <li><strong>Predictable:</strong> Same response every time → Hard read extensions</li>
            <li><strong>Unpredictable:</strong> Random responses → Mix extensions randomly</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The First Round Test">
          In round 1, do df+2 or 1,2 and DON'T finish. Watch what they do. If they press, 
          you know to use extensions in round 2. If they block, focus on lows and throws.
        </TipBox>
      </Section>

      <Section title="Extension Drills">
        <DrillMode
          title="d+2,3 Confirmation"
          objective="Learn to confirm d+2,3 only on counter-hit"
          setup="Dummy: random attack or block. If they attack, you get CH."
          difficulty="intermediate"
          estimatedTime="5 min"
          steps={[
            { instruction: 'd+2 only (watch for CH stagger)', targetReps: 20 },
            { instruction: 'd+2,3 ONLY when you see CH stagger', detail: 'Don\'t finish on block or normal hit', targetReps: 10 },
            { instruction: 'Confirmed d+2,3 CH → combo', targetReps: 5 },
          ]}
        />

        <DrillMode
          title="1,2,1 Timing Mixup"
          objective="Vary 1,2,1 timing to catch different responses"
          setup="Dummy: random delay before pressing back"
          difficulty="intermediate"
          estimatedTime="5 min"
          steps={[
            { instruction: '1,2,1 immediate', targetReps: 10 },
            { instruction: '1,2,1 with 5 frame delay', targetReps: 10 },
            { instruction: '1,2,1 with max delay (10 frames)', targetReps: 10 },
            { instruction: 'Mix all timings randomly', targetReps: 10 },
          ]}
        />
      </Section>

      <Section title="Knowledge Check">
        <Quiz
          question="When should you NOT use the df+2,3 extension?"
          options={[
            { text: 'When the opponent is pressing buttons after df+2', isCorrect: false },
            { text: 'When the opponent is blocking patiently', isCorrect: true },
            { text: 'When you want to do damage', isCorrect: false },
            { text: 'At mid-range', isCorrect: false },
          ]}
          correctFeedback="Correct! Extensions are for catching opponents who press. Against turtles, stop the string and use lows/throws."
          incorrectFeedback="Extensions punish opponents who press back. If they're blocking patiently, the extension just gets blocked and you get punished at -13."
        />

        <Quiz
          question="What makes d+2,3 different from df+2,3?"
          options={[
            { text: 'd+2,3 does more damage', isCorrect: false },
            { text: 'd+2,3 can be confirmed on counter-hit', isCorrect: true },
            { text: 'd+2,3 is safer on block', isCorrect: false },
            { text: 'There\'s no meaningful difference', isCorrect: false },
          ]}
          correctFeedback="Right! d+2,3 has a visible CH stagger that lets you confirm before inputting the 3."
          incorrectFeedback="The key difference is d+2,3 is confirmable - you can react to the counter-hit stagger before pressing 3."
        />
      </Section>
    </Chapter>
  )
}
