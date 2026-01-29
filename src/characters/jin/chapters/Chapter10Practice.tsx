import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  GameChallenge,
  MatchScenario,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10Practice({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Bringing Jin Together"
      intro="You've learned pokes, strings, combos, the Electric, ZEN stance, and punishment. Now it's time to feel how they all connect into one gameplan."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Heat System"
    >
      <Section title="Everything Connects">
        <p>
          At this point, you have all the core Jin tools. The question isn't "what moves do I have?" 
          It's "how do I use them together?"
        </p>

        <p>
          Good news: you've already been doing this. Every poke can lead to a combo. Every combo 
          leads to oki or wall. Every wall situation uses ZEN. It's all one system.
        </p>

        <KeyConcept title="Jin's Game Flow" icon="🔄">
          <div style={{ display: 'grid', gap: '12px' }}>
            <div><strong>Neutral</strong> → Poke with jab, df+1, f+4</div>
            <div style={{ paddingLeft: '20px', color: 'var(--text-secondary)' }}>
              ↳ Land a low → <strong>+Frames</strong> (db+4 is +3, jab is +1)
            </div>
            <div style={{ paddingLeft: '20px', color: 'var(--text-secondary)' }}>
              ↳ They mess up → <strong>Launch</strong> (uf+4, ws2, CH f+4, EWHF)
            </div>
            <div><strong>+Frames</strong> → Continue poking or fish for CH f+4</div>
            <div><strong>Launch</strong> → Always leads to <strong>Combo</strong></div>
            <div><strong>Combo</strong> → Carry to <strong>Wall</strong> or knockdown for <strong>Oki</strong></div>
            <div><strong>Wall</strong> → ZEN pressure. They escape? Back to neutral. Read them? Another launch.</div>
            <div><strong>Oki</strong> → d+2, ZEN.4, mixup. They get up clean? Back to neutral.</div>
          </div>
          <p style={{ marginTop: '16px', fontStyle: 'italic' }}>
            Everything loops back. Neutral leads to damage, damage leads to pressure, pressure leads back to neutral or more damage.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Situational Awareness">
        <p>
          The key to playing Jin well is knowing what situation you're in and what options you have.
        </p>

        <MatchScenario
          title="You're in Neutral"
          situation="Round start. Neither player has advantage. What's your plan?"
          options={[
            {
              action: 'Poke and see',
              input: 'df+1 or 1',
              result: 'Safe information gathering. See how they respond.',
              isOptimal: true,
              followup: 'Best opening strategy'
            },
            {
              action: 'Fish for CH',
              input: 'f+4',
              result: 'High reward if they press. Safe if they block.',
              followup: 'Good once you know they\'re aggressive'
            },
            {
              action: 'Go for mixup',
              input: 'Wave dash → hellsweep or mid',
              result: 'Risky without reads. Could work, could get launched.',
              followup: 'Save for when you have a read'
            },
            {
              action: 'Backdash and watch',
              result: 'Gives up space but gains information.',
              followup: 'Good against aggressive players'
            }
          ]}
          keyTakeaway="Neutral is about gathering information. Poke, see what they do, then make reads based on their tendencies."
        />

        <MatchScenario
          title="You Have Plus Frames"
          situation="You landed db+4 and you're +3. What now?"
          options={[
            {
              action: 'f+4',
              input: 'f+4',
              result: 'If they press anything, CH launch. Your +3 makes it nearly uncontestable.',
              isOptimal: true,
              followup: 'Huge damage potential'
            },
            {
              action: 'Electric',
              input: 'EWHF',
              result: 'If they press, it hits. If they block, you\'re +5.',
              followup: 'Even better if you have the execution'
            },
            {
              action: 'Another low',
              input: 'db+4 or d+4',
              result: 'More chip, but they might have learned to block low.',
              followup: 'Mix it up — don\'t always go low'
            },
            {
              action: 'Mid poke',
              input: 'df+1',
              result: 'Safe, keeps pressure, but no big reward.',
              followup: 'When you\'re not sure'
            }
          ]}
          keyTakeaway="+3 after db+4 is one of Jin's best situations. Use it to fish for CH with f+4 or Electric. They can't contest safely."
        />

        <MatchScenario
          title="You're at the Wall"
          situation="You've pushed them to the wall. They're blocking. What do you do?"
          options={[
            {
              action: 'ZEN dive kick',
              input: 'ff+3~f → ZEN.3+4',
              result: 'Plus on block, chip damage. Can loop it.',
              followup: 'Main wall pressure tool'
            },
            {
              action: 'ZEN.1,2',
              input: 'ff+3~f → ZEN.1,2',
              result: 'Wall splat on hit. Confirmable. -14 on block.',
              isOptimal: true,
              followup: 'Best reward when they\'re scared to press'
            },
            {
              action: 'Mix low',
              input: 'db+4 or ZEN.1+2',
              result: 'Catches stand blockers. Creates hesitation.',
              followup: 'Opens up the mid game'
            },
            {
              action: 'Throw',
              result: 'Breaks blocking. Resets situation.',
              followup: 'Mix it in when they freeze up'
            }
          ]}
          keyTakeaway="Wall = ZEN pressure. Use ff+3~f to enter safely, then mix dive kick, ZEN.1,2, and lows. Make them guess."
        />
      </Section>

      <Section title="The Full Game">
        <p>
          Here's a challenge that puts everything together. Play full rounds using your complete toolkit.
        </p>

        <GameChallenge
          title="Complete Jin Rounds"
          scenario="Play full rounds against CPU using everything you've learned. Neutral, combos, wall, oki — the whole package."
          setup={{
            opponent: 'Any character',
            cpuBehavior: 'Ultra Hard (or a friend)',
            position: 'Random stage',
          }}
          goal="Win a set (best of 5) using your full Jin toolkit"
          successCriteria="You used pokes, converted launches, applied wall pressure, and felt in control of the gameplan"
          hints={[
            'Don\'t force anything — let the game flow to you',
            'Neutral → plus frames → CH fishing → combo → wall is the ideal pattern',
            'If you\'re losing neutral, backdash more and look for whiff punishes',
            'At the wall, don\'t panic. ZEN pressure is your strength.'
          ]}
          levels={[
            {
              name: 'Neutral',
              description: 'Focus on winning neutral exchanges',
              goal: 'Win the first hit in at least half of the neutral exchanges',
              successCriteria: 'You\'re landing pokes and reads consistently'
            },
            {
              name: 'Combos',
              description: 'Focus on converting every opportunity',
              goal: 'Don\'t drop any combos when you get a launch',
              successCriteria: 'Every launch becomes damage'
            },
            {
              name: 'Wall',
              description: 'Focus on wall pressure and kills',
              goal: 'Close out rounds at the wall with ZEN pressure',
              successCriteria: 'You\'re using ZEN.3+4 and ZEN.1,2 effectively'
            },
            {
              name: 'Complete',
              description: 'Put it all together',
              goal: 'Win the set feeling like a complete Jin player',
              successCriteria: 'All phases feel connected and intentional'
            }
          ]}
          whyThisWorks="This forces you to think about the full game, not just individual situations. Real Tekken is connecting all the phases."
        />
      </Section>

      <Section title="Self Assessment">
        <p>
          Before moving to Heat and Defense, take stock of where you are. 
          Check off what feels comfortable.
        </p>

        <SkillCheck
          title="Core Jin Skills"
          subtitle="Check what you can do consistently"
          skills={[
            { id: 'pokes', skill: 'I can poke with jab, df+1, and f+4', description: 'The basic neutral game' },
            { id: 'lows', skill: 'I use d+4 and db+4 to chip', description: 'Low game' },
            { id: 'launch', skill: 'I can launch punish -15 moves', description: 'Basic punishment' },
            { id: 'ws', skill: 'I can ws2 after blocking lows', description: 'While standing punishment' },
            { id: 'combo', skill: 'I can do the beginner combo consistently', description: 'Basic conversion' },
            { id: 'chf4', skill: 'I can convert CH f+4 into a combo', description: 'Counter-hit conversion' },
            { id: 'electric', skill: 'I can do Electric (at least sometimes)', description: 'Not required, but helpful' },
            { id: 'zen', skill: 'I understand ZEN and can do basic pressure', description: 'Wall game foundation' },
            { id: 'punish', skill: 'I know my standing and WS punishers', description: '2,4 for 10f, ws2 for 14f, etc.' },
          ]}
          requiredToPass={6}
        />

        <TipBox variant="tip" title="It's Okay If Some Aren't Checked">
          You don't need to be perfect. If you have 6+ checked, you have a solid foundation. 
          The unchecked items will improve as you play more. Move on and keep growing.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          The next chapters cover <strong>Heat System</strong> and <strong>Defense</strong>. 
          These are powerful additions to your game:
        </p>

        <KeyConcept title="Coming Up" icon="→">
          <ul>
            <li><strong>Heat</strong> — Free electrics, best heat smash in the game, Omen stance</li>
            <li><strong>Defense</strong> — Jin's parry, panic moves, movement defense</li>
            <li><strong>Complete Jin</strong> — Oki, counter-hit fishing, adapting to opponents</li>
          </ul>
        </KeyConcept>

        <p>
          You now have a working Jin. The rest is refinement and adding tools to handle specific 
          situations. The core gameplan? You've already got it.
        </p>
      </Section>
    </Chapter>
  )
}
