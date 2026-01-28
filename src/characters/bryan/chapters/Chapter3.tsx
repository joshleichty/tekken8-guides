import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  MatchScenario
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
          <p>
            The formula: <strong>Average movement + Incredible buttons + Smart positioning = Mid-range control.</strong>
          </p>
        </SubSection>
      </Section>

      <Section title="Understanding Bryan's Ranges">
        <p>
          Before we practice movement, you need to <strong>feel</strong> what each range is like. 
          This isn't about memorizing distances — it's about developing an intuition.
        </p>

        <KeyConcept title="Bryan's Four Ranges" icon="📏">
          <p><strong>Range 0 (Kissing Distance)</strong></p>
          <p>Danger zone. You can throw, but Bryan struggles here — most characters have better panic options. Tools: 1,2, throw, sidestep.</p>
          
          <p style={{ marginTop: '16px' }}><strong>Range 1 (Jab Range)</strong></p>
          <p>Both players' fast moves connect. Bryan can function here but isn't dominant. Tools: 1,2, df+2, qcb+3, d+4.</p>
          
          <p style={{ marginTop: '16px' }}><strong>Range 2 (Bryan's Kingdom)</strong></p>
          <p><span className="highlight">This is where you want to be.</span> Far enough that their jabs whiff. Close enough that YOUR tools connect. Tools: qcb+1, 3+4, u+4, qcb+3, f,b+2.</p>
          
          <p style={{ marginTop: '16px' }}><strong>Range 3 (Too Far)</strong></p>
          <p>Even your long moves whiff. Don't chase — let them come to you. Tools: ff+2 (approach), wait.</p>
        </KeyConcept>

        <TipBox variant="tip" title="Quick Range Check">
          <ul>
            <li>One backdash from close = Range 2</li>
            <li>If their jab hits you = Range 1 or closer</li>
            <li>If your qcb+1 whiffs = Range 3 (too far)</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Movement Techniques">
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
      </Section>

      <Section title="Movement in Practice">
        <p>
          Movement practice is about building habits, not completing challenges. Here's how to develop your spacing instincts:
        </p>

        <SubSection title="The Range 2 Game">
          <p>
            Set the CPU to Aggressive and focus on <strong>staying at Range 2</strong>. Not on winning — just spacing. 
            If they get in your face, backdash. If you end up too far, let them approach.
          </p>
          <p>
            Start by maintaining Range 2 for 15 seconds. Then 30. Then 60. When you can hold your preferred range 
            without thinking about it, it's becoming instinct.
          </p>
        </SubSection>

        <SubSection title="Backdash into Whiff Punish">
          <p>
            The real power of backdash is <strong>creating whiff punishes</strong>. When you backdash and they 
            attack into nothing, f,b+2 (Jet Upper) punishes for a full combo.
          </p>
          <p>
            Practice this against an aggressive CPU: watch for their attacks, backdash to make them whiff, 
            then launch with f,b+2. This turns every backdash into a potential 60+ damage opportunity.
          </p>
        </SubSection>

        <TipBox variant="tip" title="Movement Tips">
          <ul>
            <li>One backdash = roughly one range increment</li>
            <li>Don't run away forever — the corner will trap you</li>
            <li>Walking back is often better than backdashing (keeps guard up)</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Movement in Match Situations">
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

      <Section title="Wall Awareness">
        <p>
          Bryan hates the corner. All that backdashing will put you there if you're not careful.
        </p>

        <KeyConcept title="Avoiding the Corner" icon="🧱">
          <ul>
            <li><strong>When near the wall:</strong> Stop backdashing — sidestep instead</li>
            <li><strong>Offense creates space:</strong> qcb+1 on block pushes THEM back</li>
            <li><strong>3+4 pushback:</strong> Even blocked, it gives you breathing room</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="You Will Lose Games">
          Following these rules strictly will probably lose you some games. That's okay. 
          You're <strong>building habits</strong>. Once they're automatic, you'll adapt them 
          intelligently. But first, drill the fundamentals.
        </TipBox>
      </Section>

      <Section title="Chapter Summary">
        <p>
          Bryan's movement isn't elite, but it doesn't need to be. Your goal is simple:
        </p>
        <ul>
          <li><strong>Get to Range 2</strong> — One backdash from close</li>
          <li><strong>Stay at Range 2</strong> — Your buttons do the work here</li>
          <li><strong>Backdash into whiff punishes</strong> — f,b+2 turns their whiffs into your combos</li>
          <li><strong>Don't corner yourself</strong> — Sidestep when near the wall</li>
        </ul>
      </Section>
    </Chapter>
  )
}
