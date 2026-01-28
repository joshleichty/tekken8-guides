import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  PracticeBox,
  DrillMode,
  MatchScenario,
  ConceptBuilder
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Movement & Spacing"
      intro="Bryan's gameplan depends on being at the right distance. This chapter teaches you how to move like a Bryan player — creating the space where your tools shine."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Keepout"
    >
      <Section title="Why Movement Matters for Bryan">
        <p>
          Most Tekken characters can force their gameplan from any range. Bryan can't. 
          His tools are <span className="highlight">range-specific</span>:
        </p>

        <KeyConcept title="Bryan's Range Zones" icon="📏">
          <ul>
            <li><strong>Range 0 (kissing distance):</strong> Bryan struggles here. Weak panic options.</li>
            <li><strong>Range 1 (close):</strong> Jab pressure works, but risky vs good players.</li>
            <li><strong>Range 2 (mid):</strong> <span className="highlight">BRYAN'S HOME.</span> qcb+1, 3+4, orbital dominate here.</li>
            <li><strong>Range 3+ (far):</strong> Too far for your tools. Need to advance carefully.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Goal">
          Your movement goal is simple: <strong>Get to range 2 and stay there.</strong> 
          If you're closer, create space. If you're farther, close in safely.
        </TipBox>
      </Section>

      <Section title="Bryan's Movement Profile">
        <SubSection title="The Bad News">
          <p>
            Bryan has <span className="highlight-secondary">average movement</span>. His backdash 
            isn't elite like Lee or Steve. His sidestep is mediocre. You won't win with movement 
            alone against characters with better mobility.
          </p>
        </SubSection>

        <SubSection title="The Good News">
          <p>
            Bryan doesn't need elite movement. His <span className="highlight">buttons control space 
            so well</span> that you only need functional movement to position yourself. Then your 
            moves do the work.
          </p>
        </SubSection>

        <ConceptBuilder
          title="Bryan's Spacing Philosophy"
          foundation={[
            { label: 'Average movement', description: 'Not elite, but functional' },
            { label: 'Incredible buttons', description: 'qcb+1, 3+4, orbital have huge range' },
          ]}
          newAddition={{
            label: 'Smart positioning',
            description: 'Use basic movement to get to range 2',
          }}
          result="You control the match from mid-range even without elite movement"
        />
      </Section>

      <Section title="Core Movement Techniques">
        <SubSection title="Backdash">
          <p>
            Backdashing creates the space Bryan needs. One backdash from range 1 puts you 
            at range 2 — your sweet spot.
          </p>

          <KeyConcept title="When to Backdash" icon="⬅️">
            <ul>
              <li><strong>After blocking a string:</strong> Creates space to whiff punish their next move</li>
              <li><strong>At round start:</strong> Instantly goes to range 2</li>
              <li><strong>When opponent is rushing:</strong> Make them whiff, then punish</li>
              <li><strong>After your poke is blocked:</strong> Reset to neutral spacing</li>
            </ul>
          </KeyConcept>

          <TipBox variant="tip" title="Korean Backdash (KBD)">
            Bryan benefits from KBD but doesn't require it. Focus on <strong>clean double-backdashes</strong> 
            first. You can learn KBD later once your fundamentals are solid.
          </TipBox>
        </SubSection>

        <SubSection title="Sidestepping">
          <p>
            Bryan's sidestep isn't amazing, but it's still essential. Most characters are weak to 
            one side — learn which and exploit it.
          </p>

          <KeyConcept title="Sidestep Guidelines" icon="↔️">
            <ul>
              <li><strong>SSL (Sidestep Left):</strong> Beats right-handed characters (most of them)</li>
              <li><strong>SSR (Sidestep Right):</strong> Beats left-handed characters (few)</li>
              <li><strong>After qcb+1 is blocked:</strong> You're +5, sidestep their response</li>
              <li><strong>After their string ends:</strong> Step and launch their follow-up</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <SubSection title="Walking">
          <p>
            Walking (holding forward/back) is underrated. It lets you <span className="highlight">micro-adjust 
            your spacing</span> while keeping your guard.
          </p>
          <ul>
            <li><strong>Walk back slightly</strong> → Whiff punish their jab attempt</li>
            <li><strong>Walk forward slightly</strong> → Get into range for 3+4</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Movement Drills">
        <DrillMode
          title="Basic Backdash Spacing"
          objective="Learn to create range 2 spacing on command"
          setup="Practice Mode, dummy set to stand at round-start distance"
          difficulty="beginner"
          estimatedTime="3 min"
          steps={[
            { instruction: 'Backdash 1x → throw qcb+1', detail: 'qcb+1 should hit from this range', targetReps: 10 },
            { instruction: 'Backdash 2x → throw 3+4', detail: '3+4 reaches further than qcb+1', targetReps: 10 },
            { instruction: 'Backdash until opponent whiffs → f,b+2', detail: 'Jet Upper punishes the whiff', targetReps: 5 },
          ]}
        />

        <DrillMode
          title="Sidestep Practice"
          objective="Develop sidestep into punish reflexes"
          setup="Set dummy to do a linear attack (like df+1)"
          difficulty="intermediate"
          estimatedTime="3 min"
          steps={[
            { instruction: 'SSL the dummy attack', targetReps: 10 },
            { instruction: 'SSL → launch (f,b+2 or ws1)', targetReps: 10 },
            { instruction: 'Block → sidestep their follow-up → punish', targetReps: 5 },
          ]}
        />
      </Section>

      <Section title="Movement in Context">
        <MatchScenario
          title="Round Start"
          situation="The round just started. You're at range 1.5."
          context="Both characters are neutral. The opponent might rush in or throw out a move."
          options={[
            {
              action: 'Backdash immediately',
              result: 'Creates range 2. Now your keepout tools (3+4, qcb+1) are optimal.',
              isOptimal: true,
              followup: 'Throw out qcb+1 or look for opponent approach'
            },
            {
              action: 'Throw out a jab',
              result: 'Works, but you\'re not at Bryan\'s best range yet.',
            },
            {
              action: 'Rush forward with f,f+2',
              result: 'Aggressive, but not Bryan\'s style. You\'re gambling.',
            },
          ]}
          keyTakeaway="At round start, your first instinct should be to create space. Backdash puts you in control."
        />

        <MatchScenario
          title="After Blocking a String"
          situation="You just blocked the opponent's jab string. It's your turn."
          context="You're at range 0-1. Close distance."
          options={[
            {
              action: 'Jab back (1,2)',
              result: 'Safe option, but doesn\'t give you much advantage.',
            },
            {
              action: 'Backdash → qcb+1',
              input: 'b,b → qcb+1',
              result: 'Creates space AND throws out a +5 tool. Best of both worlds.',
              isOptimal: true,
              followup: 'If qcb+1 hits, qcb+4. If blocked, you\'re +5.'
            },
            {
              action: 'f+3 counter-hit attempt',
              result: 'Can work as a read, but risky at close range.',
            },
          ]}
          keyTakeaway="Backdash after blocking is a core Bryan habit. It resets spacing and lets you use your best tools."
        />
      </Section>

      <Section title="Practice: Real Match Spacing">
        <PracticeBox
          title="Spacing Homework"
          setup="Play 5 matches vs CPU or online with ONE goal: maintain range 2"
          tasks={[
            { id: 'backdash-start', text: 'Backdash at round start in every round', type: 'toggle' },
            { id: 'range2-qcb', text: 'Only use qcb+1 and 3+4 from range 2', type: 'toggle' },
            { id: 'no-chase', text: 'Never chase a backdashing opponent', detail: 'Let them come to you', type: 'toggle' },
            { id: 'backdash-block', text: 'Backdash after blocking strings', type: 'toggle' },
          ]}
        />

        <TipBox variant="warning" title="You Will Lose Games">
          Following these rules strictly will probably lose you some games. That's okay. 
          You're <strong>building habits</strong>. Once they're automatic, you'll adapt them 
          intelligently. But first, drill the fundamentals.
        </TipBox>
      </Section>
    </Chapter>
  )
}
