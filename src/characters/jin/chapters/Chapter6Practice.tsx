import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  GameChallenge,
  MatchScenario,
  SituationDrill
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6Practice({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Converting Your Hits"
      intro="You can do the combo in practice mode. Now let's make sure you can land it when it matters. This chapter bridges the gap between 'knowing the combo' and 'using the combo.'"
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="The Electric"
    >
      <Section title="The Real Challenge">
        <p>
          Combos in practice mode are easy. Combos in a match are hard. The difference?
        </p>

        <KeyConcept title="What Changes in a Match" icon="⚡">
          <ul>
            <li><strong>Recognition</strong> — Knowing you CAN combo right now</li>
            <li><strong>Adrenaline</strong> — Your hands don't work the same when stakes are high</li>
            <li><strong>Timing</strong> — Hits happen at weird moments, not when you expect</li>
            <li><strong>Context</strong> — You're thinking about the game, not the combo</li>
          </ul>
        </KeyConcept>

        <p>
          The solution? Practice in situations that feel more like real matches.
        </p>
      </Section>

      <Section title="When Do Combos Happen?">
        <p>
          Jin gets combos from specific situations. Know these, and you'll be ready.
        </p>

        <KeyConcept title="Your Combo Starters" icon="🚀">
          <ul>
            <li><strong>uf+4</strong> — When you read a low or need to challenge</li>
            <li><strong>d+3+4</strong> — Your 15f punish launcher</li>
            <li><strong>ws2</strong> — After blocking a -14 low</li>
            <li><strong>CH f+4</strong> — When they press into your counter-hit tool</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Mental Shift">
          Don't think "I want to do a combo." Think "They did something unsafe" or 
          "I read their low." The combo is automatic — the recognition is the skill.
        </TipBox>
      </Section>

      <Section title="Recognizing Your Moments">
        <MatchScenario
          title="They Did Something Unsafe"
          situation="You blocked a move and see 'Punish' flash on screen. You don't know the exact frames but you know it's punishable."
          context="Most players freeze here, unsure what punish to use."
          options={[
            {
              action: 'Quick jab punish',
              input: '2,4',
              result: 'Always works. 29 damage, wall splats, ZEN transition.',
              isOptimal: true,
              followup: 'Default choice. Can\'t go wrong.'
            },
            {
              action: 'Try to launch',
              input: 'd+3+4',
              result: 'If it\'s -15, full combo. If not, you get punished.',
              followup: 'Only if you KNOW it\'s -15'
            },
            {
              action: 'Hesitate',
              result: 'Missed punish. They recover for free.',
              followup: 'Worst outcome. Always do something.'
            },
            {
              action: 'Throw',
              result: 'Not a punish, but still deals with their recovery.',
              followup: 'Better than nothing if you\'re unsure'
            }
          ]}
          keyTakeaway="When in doubt, 2,4. It's your 10f punish, it always works, and it leads to good damage. Don't overthink it."
        />

        <MatchScenario
          title="Counter-Hit f+4"
          situation="You threw out f+4 and it landed. The opponent crumples. You have a moment before they hit the ground."
          context="This is your biggest damage opportunity from neutral."
          options={[
            {
              action: 'Dash and combo',
              input: 'dash → b+3,f,1 → combo',
              result: '75+ damage. This is what you practiced.',
              isOptimal: true,
              followup: 'Recognition → dash → muscle memory'
            },
            {
              action: 'Freeze and then combo',
              result: 'Might drop it. The crumple doesn\'t last forever.',
              followup: 'The dash needs to be immediate'
            },
            {
              action: 'Simple follow-up',
              input: 'dash → bf+2,3~f → ZEN.u+1 → ender',
              result: '~62 damage. Less optimal but more consistent.',
              followup: 'Use this if the full route is unreliable'
            }
          ]}
          keyTakeaway="The crumple animation is your cue. See it → dash → combo. Don't confirm with your eyes, confirm with the animation."
        />
      </Section>

      <Section title="Practice Converting">
        <p>
          Here's a way to practice recognizing and converting launcher opportunities.
        </p>

        <SituationDrill
          title="Punish Recognition"
          situation="Your opponent does unsafe moves randomly. You need to recognize and punish."
          context="This simulates real matches where you don't know exactly when the opening comes."
          opponentActions={[
            { 
              slot: 1, 
              action: 'A -15 move (like hopkick on block)', 
              yourResponse: 'd+3+4 → full combo',
              timing: 'Immediate on block'
            },
            { 
              slot: 2, 
              action: 'A -10 move (like a blocked jab string)', 
              yourResponse: '2,4 (don\'t overcommit)',
              timing: 'Immediate on block'
            },
            { 
              slot: 3, 
              action: 'A -14 low (like a snake edge)', 
              yourResponse: 'ws2 → full combo',
              timing: 'From crouch block'
            },
          ]}
          setup={{
            cpuBehavior: 'Random playback',
            playbackMode: 'Random',
            position: 'Mid-range'
          }}
          goal="Successfully punish each situation when it appears"
          successCriteria="You react correctly without hesitating to think about which punish to use"
          commonMistakes={[
            'Using d+3+4 on -10 moves (it\'s too slow, gets blocked)',
            'Using 2,4 on -15 moves (works but you\'re leaving damage on the table)',
            'Hesitating and missing the punish window entirely'
          ]}
          mentalCue="See the block → body moves automatically → combo happens"
        />

        <GameChallenge
          title="CH f+4 Conversion"
          scenario="Practice recognizing and converting counter-hit f+4 specifically. This is one of Jin's biggest damage sources."
          setup={{
            opponent: 'Any character',
            cpuBehavior: 'After Block: Attack (1 or df+1)',
            position: 'Open stage, mid-range',
            recordings: [
              'They approach and press a button'
            ]
          }}
          goal="Land CH f+4 and convert to full combo 5 times"
          successCriteria="You see the crumple and your hands move to dash → combo without conscious thought"
          failureTeaches="If you're dropping it, slow down. The crumple lasts longer than you think. Dash first, then start the combo."
          hints={[
            'Watch for the crumple animation, not the "Counter" text',
            'The dash is more important than speed — dash THEN combo',
            'If you keep dropping, use the easier route (bf+2,3~f → ZEN.u+1 → ender)'
          ]}
          whyThisWorks="f+4 counter-hits happen when opponents press. By setting CPU to attack after block, you simulate real match pressure."
        />
      </Section>

      <Section title="The Mental Game">
        <p>
          The difference between "can do combos" and "does combos in matches" is mental.
        </p>

        <KeyConcept title="Three Stages of Combo Confidence" icon="🧠">
          <ol>
            <li><strong>Conscious</strong> — "I blocked something, was it punishable? What's my punish? Okay, let me try..."</li>
            <li><strong>Reactive</strong> — "I blocked it, that's punishable" → hands move</li>
            <li><strong>Automatic</strong> — You don't even think about it. Block → combo happens.</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            You're aiming for Reactive right now. Automatic comes with time.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="It's About Reps">
          Every time you successfully convert in practice, you're building the pathway. 
          Every time you convert in a real match — even against a friend or CPU — it gets stronger.
          Don't stress about being perfect. Stress about getting reps.
        </TipBox>
      </Section>

      <Section title="Moving Forward">
        <p>
          You're ready for the next chapter when:
        </p>

        <ul>
          <li>You can punish obvious unsafe moves without thinking about <em>which</em> punish</li>
          <li>CH f+4 conversions feel mostly reliable</li>
          <li>You're not dropping combos from <em>nerves</em> — maybe from execution, but not from panic</li>
        </ul>

        <p style={{ marginTop: '16px' }}>
          Next up is the Electric — Jin's most iconic and rewarding move. The good news? 
          You don't need perfect electrics to play Jin. But when you get them, everything you've learned 
          so far becomes even more dangerous.
        </p>
      </Section>
    </Chapter>
  )
}
