import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  DrillMode,
  MatchScenario,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Counter-Hit Fishing"
      intro="Counter-hits are Bryan's bread and butter. This chapter teaches you how to actively fish for counter-hits and turn single buttons into massive damage."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="String Extensions"
    >
      <Section title="What is Counter-Hit Fishing?">
        <p>
          <span className="highlight">Counter-hit fishing</span> means throwing out moves 
          specifically designed to catch opponents pressing buttons. You're not just hoping 
          for a CH — you're <strong>creating the situation</strong> where it happens.
        </p>

        <KeyConcept title="Counter-Hit Fishing Philosophy" icon="🎣">
          <ol>
            <li><strong>Create pressure</strong> — Make them want to press</li>
            <li><strong>Throw a CH launcher</strong> — When they press, they die</li>
            <li><strong>Profit</strong> — Massive damage combo</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Primary CH Launchers">
        <SubSection title="f+3 — The Close Range Fish">
          <MoveCard
            move={{
              input: 'f+3',
              hitLevel: ['m'],
              damage: '18',
              startup: 'i16-18',
              onBlock: '+0 to +2',
              onHit: '+4 to +6',
              onCH: '+50a',
              tags: ['Mid', 'CH Launcher', 'Neutral/Plus on Block', 'Knee'],
              description: 'Zero on block CH launcher. THE move for fishing up close.',
              notes: [
                'Frame advantage varies by range (better at tip)',
                'Wonky tracking — can be stepped',
                'Poor range — must be close',
                'Being 0 on block is incredible for a CH launcher'
              ]
            }}
          />

          <KeyConcept title="Why f+3 is Special" icon="⭐">
            <p>
              Most CH launchers are minus on block. f+3 is <span className="highlight">neutral to plus</span>. 
              This means:
            </p>
            <ul>
              <li>You can throw it out without losing your turn</li>
              <li>If they block, you're even — do another f+3 or something else</li>
              <li>If they press, they eat a full combo</li>
            </ul>
            <p>The tradeoff: terrible range and tracking. Use it close range only.</p>
          </KeyConcept>
        </SubSection>

        <SubSection title="b+1 — The Plus Frame Beast">
          <MoveCard
            move={{
              input: 'b+1',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i20-21',
              onBlock: '+4',
              onHit: '+7c',
              onCH: '+78a (+58)',
              tags: ['Mid', 'CH Launcher', '+4 on Block', 'Elbow', 'Spike'],
              description: 'Plus on block mid that launches on CH. Starts your pressure.',
            }}
          />

          <p>
            b+1 is <span className="highlight">+4 on block</span>. This is insane. You're at 
            advantage even when they block it. Use it to:
          </p>
          <ul>
            <li>Start your offense from mid-range</li>
            <li>Fish for CH at range 1.5</li>
            <li>Force respect — they MUST block after b+1</li>
          </ul>

          <TipBox variant="warning" title="No Tracking">
            b+1 tracks almost <span className="highlight-secondary">nothing</span>. If they 
            sidestep, you whiff. Use it when you've conditioned them to stand still.
          </TipBox>
        </SubSection>

        <SubSection title="3+4 — The Mid-Range Terror">
          <p>
            You learned 3+4 in Chapter 2. From a CH fishing perspective:
          </p>
          <MoveCard
            move={{
              input: '3+4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i18',
              onBlock: '-13 (safe with pushback)',
              onHit: '+8',
              onCH: '+59a',
              tags: ['Mid', 'CH Launcher', 'Keepout'],
              description: 'Your mid-range CH launcher. Catches approaches.',
            }}
          />
        </SubSection>

        <SubSection title="qcb+1 — The All-Rounder">
          <MoveCard
            move={{
              input: 'qcb+1',
              hitLevel: ['h'],
              damage: '22',
              startup: 'i13-14',
              onBlock: '+5',
              onHit: '+36a (+28)',
              onCH: '+72a (+56)',
              tags: ['High', 'CH Launcher', '+5 on Block'],
              description: 'Your best button. Plus on block, launches on CH.',
            }}
          />
          <p>
            qcb+1 is technically a CH launcher too, but it's so good on block and normal 
            hit that it's less about "fishing" and more about "use it all the time."
          </p>
        </SubSection>
      </Section>

      <Section title="CH Fishing Decision Tree">
        <Flowchart
          title="When to Fish for Counter-Hits"
          nodes={[
            { 
              type: 'start', 
              label: 'You want to fish for CH' 
            },
            { 
              type: 'decision', 
              label: 'What range are you at?',
              branches: [
                { label: 'Close (range 0-1)', action: '→ Use f+3' },
                { label: 'Mid (range 1.5)', action: '→ Use b+1 or qcb+1' },
                { label: 'Far (range 2)', action: '→ Use 3+4 or u+4' },
              ]
            },
            {
              type: 'decision',
              label: 'Is opponent stepping?',
              branches: [
                { label: 'Yes', action: '→ Use 1+2 (homing) or qcb+3' },
                { label: 'No', action: '→ Fish with your CH launchers' },
              ]
            },
            {
              type: 'end',
              label: 'Get the CH → Full combo'
            }
          ]}
        />
      </Section>

      <Section title="Setting Up Counter-Hits">
        <p>
          The best Bryan players don't just throw out CH moves randomly. They <span className="highlight">
          create situations</span> where opponents feel compelled to press.
        </p>

        <KeyConcept title="CH Setup Techniques" icon="🎯">
          <ul>
            <li><strong>After df+2 is blocked</strong> — You're -6. Opponents might check. f+3.</li>
            <li><strong>After jab string ends</strong> — You're -3 to -6. Opponents want their turn.</li>
            <li><strong>After slight hesitation</strong> — Do nothing for a beat. They press. You launch.</li>
            <li><strong>After qcb+3 hits</strong> — You're +5. Opponents often jab. f+3.</li>
          </ul>
        </KeyConcept>

        <MatchScenario
          title="The Bait"
          situation="You just did df+2 and it was blocked. You're -6."
          context="Opponent knows they have advantage. They want to press."
          options={[
            {
              action: 'Throw out f+3',
              input: 'f+3',
              result: 'If they press, they eat CH f+3 for full combo. If they block, you\'re even.',
              isOptimal: true,
              followup: 'Full combo off CH, or continue pressure if blocked'
            },
            {
              action: 'Block',
              result: 'Safe, but you give up potential damage.',
            },
            {
              action: 'Press jab',
              result: 'You\'re -6, so their jab beats yours. Not optimal.',
            },
          ]}
          keyTakeaway="Your minus frames are CH bait. Smart opponents will press — make them pay."
        />
      </Section>

      <Section title="CH Fishing Drills">
        <DrillMode
          title="f+3 Fishing"
          objective="Land CH f+3 consistently"
          setup="Dummy set to do jab after blocking your move"
          difficulty="intermediate"
          estimatedTime="5 min"
          steps={[
            { instruction: 'df+2 → f+3 (catch their jab)', targetReps: 10 },
            { instruction: 'f+3 → f+3 (fish twice)', detail: 'You\'re 0 on block, so fish again', targetReps: 10 },
            { instruction: '1,2 → f+3', targetReps: 10 },
            { instruction: 'Land CH f+3 → full combo', targetReps: 5 },
          ]}
        />

        <DrillMode
          title="b+1 Pressure"
          objective="Use b+1 to create pressure situations"
          setup="Dummy on random guard and response"
          difficulty="intermediate"
          estimatedTime="5 min"
          steps={[
            { instruction: 'b+1 → df+2', detail: 'You\'re +4, df+2 is i13, they can\'t press', targetReps: 10 },
            { instruction: 'b+1 → throw', detail: '+4 into throw mixup', targetReps: 5 },
            { instruction: 'b+1 → b+1', detail: 'Fish again!', targetReps: 5 },
            { instruction: 'Land CH b+1 → full combo', targetReps: 5 },
          ]}
        />
      </Section>

      <Section title="Common Mistakes">
        <KeyConcept title="CH Fishing Errors" icon="❌">
          <ul>
            <li><strong>Wrong range for the move</strong> — f+3 at range 2 will whiff</li>
            <li><strong>Fishing when they're not pressing</strong> — Passive opponents won't give you CHs</li>
            <li><strong>Being predictable</strong> — Same setup every time gets ducked/stepped</li>
            <li><strong>Neglecting normal hits</strong> — qcb+1 and b+1 are great even without CH</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Read Your Opponent">
          CH fishing only works if your opponent presses buttons. Against turtles, use your 
          lows and throws instead. Against aggressive players, fish all day.
        </TipBox>
      </Section>
    </Chapter>
  )
}
