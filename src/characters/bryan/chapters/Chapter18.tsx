import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Flowchart,
  SkillCheck,
  CompletionBadge
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter18({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={18}
      title="The Complete Bryan"
      intro="You've learned all the tools. Now it's time to put them together into a coherent gameplan. This chapter gives you the mental framework to play Bryan at any level."
      onPrevious={() => goToChapter(17)}
      hasPrevious={true}
      hasNext={false}
    >
      <Section title="The Bryan Gameplan">
        <p>
          After 17 chapters, here's <span className="highlight">everything distilled into 
          one coherent gameplan</span>.
        </p>

        <Flowchart
          title="Bryan Match Flow"
          nodes={[
            { 
              type: 'start', 
              label: 'Round Start' 
            },
            {
              type: 'decision',
              label: 'Establish Range 2',
              branches: [
                { label: 'Backdash to spacing', action: '→ You\'re at your range' },
                { label: 'Opponent rushes', action: '→ Use 3+4 or qcb+1 to check' },
              ]
            },
            {
              type: 'decision',
              label: 'Control Mid-Range',
              branches: [
                { label: 'They approach', action: '→ 3+4, u+4, qcb+1' },
                { label: 'They wait', action: '→ Walk forward, qcb+1, qcb+3' },
                { label: 'They whiff', action: '→ f,b+2 or qcb+2,4 punish' },
              ]
            },
            {
              type: 'decision',
              label: 'Up Close',
              branches: [
                { label: 'You\'re plus', action: '→ Frame trap or low' },
                { label: 'Neutral', action: '→ f+3 or pokes with extensions' },
                { label: 'You\'re minus', action: '→ Block or read-based panic' },
              ]
            },
            {
              type: 'decision',
              label: 'At the Wall',
              branches: [
                { label: 'Post-combo', action: '→ Taunt oki or pressure' },
                { label: 'Neutral wall', action: '→ 3+4 mixups, SNE options' },
              ]
            },
            {
              type: 'end',
              label: 'Win via damage, carries, and wall pressure'
            }
          ]}
        />
      </Section>

      <Section title="Range-Based Gameplan">
        <SubSection title="Range 2 (Your Home)">
          <KeyConcept title="Mid-Range Priorities" icon="🏠">
            <ol>
              <li><strong>qcb+1</strong> — Your best button. +5 on block, knockdown on hit.</li>
              <li><strong>3+4</strong> — CH launcher to punish approaches.</li>
              <li><strong>u+4</strong> — Orbital for evasion and low reads.</li>
              <li><strong>qcb+3</strong> — Power low when they're blocking.</li>
              <li><strong>Backdash</strong> — Create whiff opportunities.</li>
            </ol>
          </KeyConcept>
        </SubSection>

        <SubSection title="Range 1 (Close)">
          <KeyConcept title="Close-Range Priorities" icon="👊">
            <ol>
              <li><strong>df+2 / d+2</strong> — Mid pokes with CH extensions</li>
              <li><strong>1,2,1</strong> — Jab pressure with CH option</li>
              <li><strong>f+3</strong> — 0 on block CH launcher</li>
              <li><strong>db+3</strong> — High crushing low</li>
              <li><strong>Throw</strong> — When they're frozen</li>
            </ol>
          </KeyConcept>
        </SubSection>

        <SubSection title="Range 0 (Minus/Defensive)">
          <KeyConcept title="Defensive Priorities" icon="🛡️">
            <ol>
              <li><strong>Block</strong> — Wait for their unsafe move</li>
              <li><strong>Punish</strong> — Use correct punish</li>
              <li><strong>u+4</strong> — Read-based low crush</li>
              <li><strong>1,2,4</strong> — Panic heat engager if available</li>
            </ol>
          </KeyConcept>
        </SubSection>

        <SubSection title="Wall Game">
          <KeyConcept title="Wall Priorities" icon="🧱">
            <ol>
              <li><strong>Wall carry combos</strong> — Get them there</li>
              <li><strong>Wall combo damage</strong> — 1+2,1 → uf+2,2,2,3 (SNE version if available)</li>
              <li><strong>Taunt oki</strong> — If they tech roll</li>
              <li><strong>SNE 3+4,2 mixups</strong> — If you have Snake Eyes</li>
              <li><strong>Ground pressure</strong> — If they stay down</li>
            </ol>
          </KeyConcept>
        </SubSection>
      </Section>

      <Section title="Quick Reference">
        <SubSection title="Your Best Moves">
          <ul>
            <li><strong>qcb+1</strong> — Best button in the game. Use constantly.</li>
            <li><strong>3+4</strong> — Mid-range CH launcher.</li>
            <li><strong>qcb+3</strong> — Best power low in the game.</li>
            <li><strong>f+3</strong> — 0 on block CH launcher.</li>
            <li><strong>b+1</strong> — +4 on block CH launcher.</li>
            <li><strong>u+4</strong> — Safe launcher, low crush, evasive.</li>
            <li><strong>f,b+2</strong> — i14 launch punish and whiff punish.</li>
          </ul>
        </SubSection>

        <SubSection title="Key Frame Data">
          <ul>
            <li><strong>qcb+1:</strong> i13-14, +5 on block</li>
            <li><strong>3+4:</strong> i18, -13 (safe with pushback)</li>
            <li><strong>b+1:</strong> i20-21, +4 on block</li>
            <li><strong>f+3:</strong> i16-18, +0 to +2 on block</li>
            <li><strong>df+2:</strong> i13, -6 on block</li>
            <li><strong>qcb+3:</strong> i19-20, -13 on block, +5 on hit</li>
          </ul>
        </SubSection>

        <SubSection title="What to Practice">
          <ol>
            <li><strong>Execution:</strong> qcb motions, combos, iws3,4</li>
            <li><strong>Spacing:</strong> Backdash, maintaining range 2</li>
            <li><strong>CH confirms:</strong> d+2,3 on CH, recognizing CH opportunities</li>
            <li><strong>Punishment:</strong> Know your punishes by frame</li>
            <li><strong>Mental game:</strong> Reading opponents, conditioning</li>
          </ol>
        </SubSection>
      </Section>

      <Section title="Common Mistakes">
        <KeyConcept title="Avoid These" icon="❌">
          <ul>
            <li><strong>Chasing opponents</strong> — Let them come to you</li>
            <li><strong>Mashing when minus</strong> — Block and wait</li>
            <li><strong>Autopilot extensions</strong> — Read, don't guess</li>
            <li><strong>Neglecting lows</strong> — Pure mid/high is predictable</li>
            <li><strong>Forcing heat smash</strong> — Stay in heat for SNE instead</li>
            <li><strong>Dropping combos</strong> — Consistency over optimization</li>
            <li><strong>Impatience</strong> — Bryan wins through patience</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Final Skill Assessment">
        <SkillCheck
          title="Complete Bryan Checklist"
          subtitle="You're ready to play Bryan competitively when you can check all of these"
          skills={[
            { id: 'keepout', skill: 'I control mid-range with qcb+1, 3+4, u+4', description: 'Consistent keepout game' },
            { id: 'pokes', skill: 'I use mid pokes (df+2, d+2) with mental frame awareness', description: 'Know when to extend' },
            { id: 'lows', skill: 'I mix in qcb+3 and db+3 effectively', description: 'Not predictable high/mid only' },
            { id: 'ch', skill: 'I fish for counter-hits with f+3, b+1', description: 'Active CH attempts, not just hoping' },
            { id: 'combos', skill: 'I land my combos 80%+ of the time', description: 'Consistent damage conversion' },
            { id: 'punish', skill: 'I know my punishes', description: 'Correct punish for each situation' },
            { id: 'heat', skill: 'I use heat for combo extensions, not just heat smash', description: 'Optimal heat usage' },
            { id: 'defense', skill: 'I survive pressure through blocking and reads', description: 'Not mashing' },
            { id: 'spacing', skill: 'I maintain range 2 consistently', description: 'Movement and positioning' },
            { id: 'reads', skill: 'I read opponent tendencies and adapt', description: 'Conditioning and mental game' },
          ]}
          requiredToPass={8}
        />
      </Section>

      <Section title="Congratulations">
        <CompletionBadge 
          title="Bryan Mastery Complete"
          description="You've completed the comprehensive Bryan guide. Now take these skills to real matches and develop your own style."
        />

        <TipBox variant="tip" title="What's Next">
          <p>Your Bryan journey is just beginning. Here's how to continue improving:</p>
          <ul>
            <li><strong>Play matches</strong> — Theory becomes skill through practice</li>
            <li><strong>Review your replays</strong> — Find where you're getting hit</li>
            <li><strong>Lab matchups</strong> — Learn what to punish vs each character</li>
            <li><strong>Watch pro Bryan players</strong> — Knee, Ty, others</li>
            <li><strong>Be patient</strong> — Bryan mastery takes years, not weeks</li>
          </ul>
        </TipBox>

        <KeyConcept title="The Bryan Philosophy" icon="💀">
          <p>
            Bryan rewards patience, timing, and reads. He punishes impatience and autopilot. 
            Play like a sniper: position, wait, strike. One counter-hit can win the round. 
            One dropped combo can lose it. That's the Bryan life.
          </p>
          <p><strong>Good luck. Make them fear the counter-hit.</strong></p>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
