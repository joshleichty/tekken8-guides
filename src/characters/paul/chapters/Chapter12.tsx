import { Chapter, Section, SubSection } from '../../../components/guide'
import { TipBox, KeyConcept, Flowchart, DecisionGrid, SkillCheck, GameChallenge, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="The Complete Paul"
      intro="You know the moves. You know the combos. You know the systems. This final chapter puts it all together into a complete game plan. This is where the Gorilla and the Scholar become one player."
      onPrevious={() => goToChapter(11)}
      hasNext={false}
    >
      <Section title="The Kill Chain — Complete">
        <Flowchart
          title="Paul's Complete Round Plan"
          nodes={[
            { type: 'start', label: 'Round Start — Identify wall position' },
            { type: 'decision', label: 'Step 1: Neutral Game (Scholar Paul)', branches: [
              { label: 'At range', action: 'Use df+2, f+4, uf+2 to control space and fish for Heat Engagers' },
              { label: 'At mid-range', action: 'df+1~b sway pressure, qcb+4 counter-hit fishing, b+4 low pokes' },
              { label: 'Opponent whiffs', action: 'Whiff punish with qcf+2 (Death Fist) or df+2 → combo' },
            ]},
            { type: 'decision', label: 'Step 2: Land a Heat Engager', branches: [
              { label: 'uf+2 / f+4 / qcb+2 connects', action: 'You\'re +17 in Heat. Kill chain activated.' },
              { label: 'qcf+2 (Death Fist) connects', action: 'Heat + wall splat. Wall combo. Possibly round over already.' },
              { label: 'Can\'t land engager', action: 'Use Heat Burst as backup. +2 on hit. Less ideal but still Heat.' },
            ]},
            { type: 'decision', label: 'Step 3: The 50/50 (Gorilla Paul)', branches: [
              { label: 'They block standing', action: 'Demo Man / Heat Smash → 60+ damage, wall splat' },
              { label: 'They block crouching', action: 'Death Fist → 45-51 damage, wall splat from anywhere in Heat' },
              { label: 'They press buttons', action: 'Counter hit → combo → probably dead' },
              { label: 'They try to move', action: 'Death Fist or f+4 tracks everything. They don\'t escape.' },
            ]},
            { type: 'end', label: 'Wall combo → Round over. Repeat.' },
          ]}
        />
      </Section>

      <Section title="The Two Pauls — When to Switch">
        <KeyConcept title="Reading the Moment" icon="🧠">
          <p>
            The art of Paul is knowing when to be the Scholar and when to be the Gorilla. Here's the rule of thumb:
          </p>
          <ul>
            <li><strong>Be the Scholar</strong> at the start of rounds, when you're at disadvantage, when you need to
              defend, when you're fishing for Heat Engagers, and when your opponent respects you.</li>
            <li><strong>Be the Gorilla</strong> when you have Heat, when you have plus frames, when you're near a wall,
              when your opponent is scared, and when you smell blood.</li>
          </ul>
          <p>
            The transition between the two should be seamless. You're poking with df+1, fishing with f+4, being patient...
            and then uf+2 lands. Instantly, you're the Gorilla. Crouch dash. Guess. Wall splat. Round over.
            Then next round, you're the Scholar again.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Matchup Philosophy">
        <SubSection title="Against Aggressive Characters">
          <DecisionGrid
            title="Handling Rushdown"
            description="Characters like Law, Hwoarang, and Steve who want to be in your face."
            rows={[
              {
                situation: 'They rush in with strings',
                response: 'df+2 (evasive launcher) or backdash → whiff punish',
                reason: 'df+2\'s evasion beats highs. Backdash creates whiff opportunities.',
                risk: 'df+2 loses to lows. Backdash loses to tracking moves.',
              },
              {
                situation: 'They\'re in your face pressing buttons',
                response: 'b+3 (14f crumple) for punishment, 4 for counter-hit fishing',
                reason: 'Punish their unsafe moves harder than anyone. Fish for CH 4 crumple.',
                risk: 'Need to identify punish windows correctly.',
              },
              {
                situation: 'They won\'t let you breathe',
                response: 'Power crush (b+1+2 or db+1+2) or parry (b+1+3)',
                reason: 'Emergency escapes. Power crush absorbs mids/highs.',
                risk: 'Power crush loses to lows and throws. Parry needs timing.',
              },
            ]}
          />
        </SubSection>

        <SubSection title="Against Defensive Characters">
          <DecisionGrid
            title="Breaking Turtles"
            description="Characters who block everything and wait for you to make mistakes."
            rows={[
              {
                situation: 'They backdash and block everything',
                response: 'uf+2 (+5 on block), f+1+2 (+3 on block), df+1~b sway pressure',
                reason: 'Plus-frame moves force them to deal with your pressure. They can\'t just block forever.',
              },
              {
                situation: 'They block the 50/50 correctly',
                response: 'Throws — b+1+4, df+1+3, f,f+1+2',
                reason: 'Throws beat blocking. Mix with the 50/50 to create a three-way guess.',
              },
              {
                situation: 'They duck Death Fist',
                response: 'f+4 (homing mid), qcf+3+4 (safe mid from crouch dash)',
                reason: 'Mid alternatives that punish crouching without the risk of raw Death Fist.',
              },
            ]}
          />
        </SubSection>

        <SubSection title="Against Movement-Heavy Characters">
          <DecisionGrid
            title="Catching Evasion"
            description="Characters who rely on sidestepping and backdashing."
            rows={[
              {
                situation: 'They sidestep everything',
                response: 'f+4 (homing), qcb+4 (homing), f+3 (homing)',
                reason: 'All three track both directions. They can\'t step these.',
              },
              {
                situation: 'They backdash out of range',
                response: 'uf+2 (absurd range), Death Fist (reaches far), f,f+2:1 (approach)',
                reason: 'Paul has excellent range on his approach tools. Close the gap.',
              },
              {
                situation: 'They create too much space',
                response: 'Wave dash (qcf,df) → ws+1,2~b → sway offense',
                reason: 'Paul\'s new wave dash closes distance quickly and immediately enters offense.',
              },
            ]}
          />
        </SubSection>
      </Section>

      <Section title="Common Mistakes to Avoid">
        <TipBox title="Paul Pitfalls" variant="danger">
          <ul>
            <li><strong>Raw Demo Man from range:</strong> The #1 Paul mistake. Demo Man needs clean hit. If you're not point blank, don't do it. The trip won't happen and you're -17 on hit.</li>
            <li><strong>Heat Burst instead of Heat Engager:</strong> +2 vs +17. Always fish for the engager. Heat Burst is plan B.</li>
            <li><strong>Always going for the optimal combo:</strong> The qcf+1 after df+2 timing is brutal. Drop it in a real match and you lose your launch for nothing. Use the easy combo.</li>
            <li><strong>Ignoring defense:</strong> Paul is explosive but he still needs to block. Don't try to Death Fist through everything.</li>
            <li><strong>Predictable 50/50:</strong> If you always Death Fist first, they'll start crouching. If you always Demo Man first, they'll stand. Vary it. Read your opponent.</li>
            <li><strong>Not using df+1~b:</strong> Scholar Paul's best tool. If you're not using df+1 into sway, you're playing half a character.</li>
            <li><strong>Forgetting wall position:</strong> Paul's damage doubles near walls. Always know where the wall is.</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Round-by-Round Adaptation">
        <KeyConcept title="How to Read Your Opponent" icon="👁️">
          <p>
            Paul's game plan evolves during a set. Pay attention to patterns:
          </p>
          <ul>
            <li><strong>Round 1:</strong> Go for the 50/50 to establish fear. If you land Death Fist, they'll start ducking. If you land Demo Man, they'll start standing.</li>
            <li><strong>Round 2:</strong> Pick the opposite of what worked round 1. They adjusted? So do you.</li>
            <li><strong>Round 3+:</strong> Mix unpredictably. Throw in throws, sway options, guard breaks. The more options you show, the harder they are to read you.</li>
            <li><strong>When behind:</strong> Go Gorilla. Random Death Fist, aggressive crouch dash, yolo. Paul has the damage to steal rounds with one good read.</li>
            <li><strong>When ahead:</strong> Play Scholar. Use df+1 pressure, safe pokes, punishment. Make them come to you and punish their desperation.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Additional Moves to Know">
        <Collapsible title="Situational Moves" icon="📖">
          <p>These moves didn't make it into earlier chapters but are worth knowing:</p>
          <ul>
            <li><strong>SS.1 (sidestep 1):</strong> i20, +8 on block with chip. Elbow from sidestep. Good for sidestep punishment.</li>
            <li><strong>SS.3 (sidestep 3):</strong> i19 low from sidestep. -12 on block. Good quick low after stepping.</li>
            <li><strong>f+3,1:</strong> i16 homing high into mid. Wall splats. Good for catching sidesteps and punishing from range.</li>
            <li><strong>db+3:</strong> i15 generic low. -18 on block. High crush. Keeps them honest.</li>
            <li><strong>d+1,4,2:</strong> d+1 into low into mid. Counter hit on the low gives combo. Mix with d+1,2 charge for mind games.</li>
            <li><strong>ub+2:</strong> i18 mid, -5 on block. Can charge for homing chip version at +1.</li>
            <li><strong>f,f+4:</strong> i27 jumping mid, +2 on block with chip. Low crush. Low-risk approach.</li>
            <li><strong>4,4,2:1 / 4,4,2,1:</strong> Your wall carry string. Just frame high or non-just-frame mid-mid. Covered in wall chapter but essential in combos.</li>
            <li><strong>b+2:</strong> i18 mid spike, -5 on block. b+2,1 is a mid-mid string with charge options.</li>
            <li><strong>d+2 (OTG):</strong> Ground hit. Use after knockdowns for guaranteed damage on grounded opponents.</li>
          </ul>
        </Collapsible>

        <Collapsible title="Counter-Hit Guaranteed Follow-ups" icon="📖">
          <ul>
            <li><strong>CH qcf+3 (clean):</strong> Guaranteed Demo Man (d+4,2:1+2)</li>
            <li><strong>CH 4:</strong> Dash → db+2</li>
            <li><strong>CH qcb+1 / CH b+2,1 / CH FC df+4:</strong> Guaranteed db+2</li>
            <li><strong>CH f+1+2:</strong> Various follow-ups depending on charge state</li>
            <li><strong>CH df+4:</strong> Guaranteed d+1+2</li>
            <li><strong>CH d+1+2:</strong> Guaranteed d+1+2 again</li>
            <li><strong>CH b+4:</strong> +17 → crouch dash mixup (Death Fist or Demo Man)</li>
            <li><strong>SS.1 on hit:</strong> Guaranteed SS.1 (sidestep elbow)</li>
            <li><strong>CH f,f,F+2:</strong> Follow up for extra damage</li>
            <li><strong>db+1+2 on hit:</strong> Guaranteed qcf+2</li>
            <li><strong>qcf+3+4 on hit:</strong> Guaranteed Death Fist (tight timing) or d+1+2</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="The Final Challenge">
        <GameChallenge
          title="The Complete Paul"
          scenario="Play a full set against the CPU (or a friend) using everything you've learned. Every chapter's concepts, every tool, every system. This is the test."
          setup={{
            opponent: 'Any character',
            cpuBehavior: 'CPU Level 6-8 or a human opponent',
          }}
          goal="Win a best-of-5 set while consciously using every aspect of Paul's game plan."
          successCriteria="Win the set while landing at least one Heat Engager 50/50, one wall combo, one sway pressure sequence, and one throw."
          duration="15-20 minutes"
          levels={[
            {
              name: 'Gorilla',
              description: 'Win using only the 50/50. Crouch dash → Death Fist or Demo Man. No sway, no pokes, just raw reads.',
              goal: 'Win 3 rounds with nothing but the 50/50',
              successCriteria: 'You understand how terrifying Paul is when he commits to the mix',
            },
            {
              name: 'Scholar',
              description: 'Win using only fundamental tools. df+1, df+2, punishment, sway. No raw crouch dash 50/50.',
              goal: 'Win 3 rounds with only pokes and punishment',
              successCriteria: 'You understand that Paul has a solid fundamental game beyond the mix',
            },
            {
              name: 'Complete',
              description: 'Play the full game plan. Fish for Heat Engagers. Use sway. Force the 50/50 at the wall. Punish. Throw. Switch between Gorilla and Scholar based on the moment.',
              goal: 'Win a best-of-5 set using the complete toolkit',
              successCriteria: 'You\'re making conscious decisions about when to be aggressive and when to be patient',
            },
          ]}
          whyThisWorks="By playing both styles separately first, then combining them, you internalize that Paul is both characters at once. The best Paul players don't think about which mode they're in — they flow between them naturally based on the situation."
        />
      </Section>

      <Section title="Mastery Checklist">
        <SkillCheck
          title="Are You a Paul Player?"
          subtitle="Check off each skill you can confidently perform in a real match (not just practice mode)."
          skills={[
            { id: 'df', skill: 'Death Fist on demand', description: 'Clean qcf+2 from crouch dash every time' },
            { id: 'dm', skill: 'Demo Man with just frame', description: 'd+4,2:1+2 with blue spark consistently' },
            { id: 'df1-sway', skill: 'df+1~b sway transitions', description: 'Smooth transition from poke to sway pressure' },
            { id: 'ws12-sway', skill: 'ws+1,2~b from Deep Dive', description: 'Wave dash into sway offense' },
            { id: 'heat-engager', skill: 'Heat Engager fishing', description: 'Landing uf+2 / f+4 / qcb+2 to start Heat' },
            { id: 'heat-5050', skill: 'Heat 50/50 at the wall', description: 'Converting Heat Engager into wall kill' },
            { id: 'bnb', skill: 'Easy BnB combo consistently', description: 'df+2 → 4 → df+4 → 3,2~b → qcb+1+2 T! → ender' },
            { id: 'wall-combo', skill: 'Wall combo consistently', description: '3,2 → d+1+2 or 3,2 → qcb+2 every time' },
            { id: 'b3-punish', skill: 'b+3 at i14 punishment', description: 'Launching -14 moves on reaction' },
            { id: 'throw-game', skill: 'Using all three throw breaks', description: 'Mixing b+1+4, df+1+3, 2+4,b, f,f+1+2' },
            { id: 'ch-fishing', skill: 'Counter-hit fishing with qcb+4 or 4', description: 'Patient CH bait into full combo' },
            { id: 'adaptation', skill: 'Reading and adapting', description: 'Switching between Gorilla and Scholar based on opponent' },
          ]}
          requiredToPass={8}
        />
      </Section>

      <Section title="What's Next">
        <p>
          If you've made it through this entire guide, you have everything you need to take Paul to a high level.
          The character rewards both your brain and your gut instincts. Play matches. Lots of them. Every loss teaches
          you something — especially which side of the 50/50 to pick next time.
        </p>
        <p>
          Paul Phoenix has been the strongest in the universe since 1994. Now it's your turn to prove it.
        </p>
        <TipBox title="Go Hit People" variant="tip">
          The best way to improve at Paul is to play matches. Not practice mode. Matches. The reads you need to develop —
          when to Death Fist, when to Demo Man, when to throw, when to sway — these only develop against real opponents.
          Take what you've learned, go online, and start swinging. Paul wouldn't have it any other way.
        </TipBox>
      </Section>
    </Chapter>
  )
}
