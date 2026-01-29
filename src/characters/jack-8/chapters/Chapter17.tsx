import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Flowchart,
  SkillCheck,
  CompletionBadge
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter17({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={17}
      title="The Complete Jack"
      intro="You've learned all the tools. Now it's time to put them together into a coherent gameplan. This chapter gives you the mental framework to play Jack at any level."
      onPrevious={() => goToChapter(16)}
      hasPrevious={true}
      hasNext={false}
    >
      <Section title="The Jack Gameplan">
        <p>
          After 16 chapters, here's <span className="highlight">everything distilled into 
          one coherent gameplan</span>.
        </p>

        <Flowchart
          title="Jack Match Flow"
          nodes={[
            { 
              type: 'start', 
              label: 'Round Start' 
            },
            {
              type: 'decision',
              label: 'Establish Range 2',
              branches: [
                { label: 'Backdash to spacing', action: '→ Your tools dominate here' },
                { label: 'Opponent rushes', action: '→ f+4,1, df+1, or armor' },
              ]
            },
            {
              type: 'decision',
              label: 'Poke Loop',
              branches: [
                { label: 'They block high', action: '→ db+1, FC db+1 (lows)' },
                { label: 'They block low', action: '→ df+1, f+4,1, 2,1 (mids)' },
                { label: 'They press', action: '→ df+1,1 CH, f+4,1 CH' },
              ]
            },
            {
              type: 'decision',
              label: 'From Crouch',
              branches: [
                { label: 'They block mid', action: '→ More lows (FC db+1)' },
                { label: 'They block low', action: '→ ws4, FC df+2 (mids)' },
                { label: 'They mash', action: '→ ws4 CH, FC df+1,2,1' },
              ]
            },
            {
              type: 'decision',
              label: 'GMH Pressure',
              branches: [
                { label: 'They stand-block', action: '→ GMH 2 (+11), GMH 1+2 throw' },
                { label: 'They duck', action: '→ GMH 1 (homing mid)' },
                { label: 'They press', action: '→ Armor options' },
              ]
            },
            {
              type: 'decision',
              label: 'Heat Mode',
              branches: [
                { label: 'Enter via combo', action: '→ Heat Burst extension' },
                { label: 'GMC pressure', action: '→ GMC 2 guard break → Heat Smash' },
                { label: 'Need punish', action: '→ i10 Heat Smash (50 damage)' },
              ]
            },
            {
              type: 'decision',
              label: 'At the Wall',
              branches: [
                { label: 'Wall splat', action: '→ b+3,2 D → GMH f+2' },
                { label: 'Wall pressure', action: '→ db+1,1 natural, GMH mixup' },
                { label: 'Your back to wall', action: '→ ub+1+2, 2+4 throw swap' },
              ]
            },
            {
              type: 'end',
              label: 'Win through attrition'
            }
          ]}
        />
      </Section>

      <Section title="Range-Based Gameplan">
        <SubSection title="Range 2 (Your Home)">
          <KeyConcept title="Mid-Range Priorities" icon="🏠">
            <ol>
              <li><strong>f+4,1</strong> — Jackhammer. Your best mid-range tool.</li>
              <li><strong>db+1</strong> — Fast low to chip and enter crouch</li>
              <li><strong>df+2</strong> — Whiff punish from incredible range</li>
              <li><strong>Backdash</strong> — Create whiff opportunities</li>
              <li><strong>1+2</strong> — Homing mid for sidesteppers</li>
            </ol>
          </KeyConcept>
        </SubSection>

        <SubSection title="Range 1 (Close)">
          <KeyConcept title="Close-Range Priorities" icon="👊">
            <ol>
              <li><strong>2</strong> — Jab. +1 on block, triple range.</li>
              <li><strong>db+1</strong> — Fast low into crouch mixups</li>
              <li><strong>df+1</strong> — Mid check with CH extensions</li>
              <li><strong>Throws</strong> — When they freeze up</li>
              <li><strong>GMH transitions</strong> — f+4,1 D, b+3,2 D</li>
            </ol>
          </KeyConcept>
        </SubSection>

        <SubSection title="Range 0 (Defensive)">
          <KeyConcept title="Defensive Priorities" icon="🛡️">
            <ol>
              <li><strong>Block</strong> — Wait for their mistake</li>
              <li><strong>3+4 armor</strong> — If you read their attack</li>
              <li><strong>ub+1+2</strong> — Safe power crush</li>
              <li><strong>f+2</strong> — i10 panic (risky)</li>
              <li><strong>Heat Smash</strong> — i10 in Heat (best option)</li>
            </ol>
          </KeyConcept>
        </SubSection>

        <SubSection title="Wall Game">
          <KeyConcept title="Wall Priorities" icon="🧱">
            <ol>
              <li><strong>Wall carry</strong> — f,f+4 ender for distance</li>
              <li><strong>Wall combo</strong> — b+3,2 D → GMH f+2</li>
              <li><strong>db+1,1</strong> — Natural combo at wall</li>
              <li><strong>GMH pressure</strong> — +11 GMH 2, throw, guard break</li>
              <li><strong>Heat at wall</strong> — GMC 2 → Heat Smash guaranteed</li>
            </ol>
          </KeyConcept>
        </SubSection>
      </Section>

      <Section title="Quick Reference">
        <SubSection title="Your Best Moves">
          <ul>
            <li><strong>db+1</strong> — i12 low, +1c on hit, foundation of your game</li>
            <li><strong>2</strong> — i11 jab, +1 on block, triple range</li>
            <li><strong>f+4,1</strong> — i15 mid, +8 on hit, CH knockdown, GMH transition</li>
            <li><strong>df+1</strong> — i14 mid, safe, CH launching extensions</li>
            <li><strong>df+2</strong> — i15 launcher, incredible range</li>
            <li><strong>FC db+1</strong> — i14 crouch low, huge range, extensions</li>
            <li><strong>ub+1+2</strong> — Safe power crush, homing, wall splat</li>
            <li><strong>f,f,f+1+2</strong> — Running shoulder, +4 on block</li>
          </ul>
        </SubSection>

        <SubSection title="Key Frame Data">
          <ul>
            <li><strong>db+1:</strong> i12, -12 on block, +1c on hit</li>
            <li><strong>2:</strong> i11, +1 on block, +9 on hit</li>
            <li><strong>f+4,1:</strong> i15, -6 on block (safe with pushback), +8 on hit</li>
            <li><strong>df+1:</strong> i14, -4 on block, +3 on hit</li>
            <li><strong>df+2:</strong> i15, -14 on block (launcher)</li>
            <li><strong>GMH 2:</strong> i20, +11 on block</li>
            <li><strong>Heat Smash:</strong> i10, -9 on block</li>
          </ul>
        </SubSection>

        <SubSection title="What to Practice">
          <ol>
            <li><strong>db+1 spam</strong> — Build muscle memory for your main low</li>
            <li><strong>Crouch transitions</strong> — db+1 → crouch moves</li>
            <li><strong>GMH transitions</strong> — b+3,2 D → GMH moves</li>
            <li><strong>Combos</strong> — Start with beginner, move to optimal</li>
            <li><strong>Punishment</strong> — Know your punishes by frame</li>
            <li><strong>Wall carry</strong> — Practice carrying to wall consistently</li>
          </ol>
        </SubSection>
      </Section>

      <Section title="Common Mistakes">
        <KeyConcept title="Avoid These" icon="❌">
          <ul>
            <li><strong>Spamming f+4,1</strong> — It's linear; they'll step it</li>
            <li><strong>Forgetting lows</strong> — Pure mid/high is predictable</li>
            <li><strong>Not using crouch</strong> — db+1 leads to your best offense</li>
            <li><strong>GMH without purpose</strong> — Don't enter stance randomly</li>
            <li><strong>Wasting Heat Smash</strong> — GMC access is often more valuable</li>
            <li><strong>Dropping combos</strong> — Consistency over optimization</li>
            <li><strong>Cornering yourself</strong> — Watch your wall position</li>
            <li><strong>Trying to sidestep</strong> — Your hitbox is too big</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Jack Philosophy">
        <TipBox variant="tip" title="How Jack Wins">
          Jack wins through <strong>attrition</strong>. You don't need the big 50/50. You 
          need to hit 30 pokes. db+1 here, 2 there, df+1 again. Each one is 5-15 damage. 
          Each one is a decision they have to make. They crack eventually — everyone does.
          <br /><br />
          When they crack, you launch them. When they're at the wall, you delete them. 
          When you're in Heat, GMC 2 makes blocking a losing strategy.
          <br /><br />
          <strong>Jack beats you the old-fashioned way.</strong>
        </TipBox>
      </Section>

      <Section title="Final Skill Assessment">
        <SkillCheck
          title="Complete Jack Checklist"
          subtitle="You're ready to play Jack competitively when you can check all of these"
          skills={[
            { id: 'db1', skill: 'I use db+1 constantly to chip and enter crouch', description: 'Foundation of Jack\'s game' },
            { id: 'pokes', skill: 'I mix lows (db+1) and mids (df+1, f+4,1) effectively', description: 'The poke loop' },
            { id: 'crouch', skill: 'I use crouch mixups after db+1 hits', description: 'FC db+1, ws4, FC df+2' },
            { id: 'gmh', skill: 'I enter GMH from transitions and use its options', description: 'GMH 4, GMH 2, GMH 1' },
            { id: 'combos', skill: 'I land my combos 80%+ of the time', description: 'Consistent damage' },
            { id: 'punish', skill: 'I know my punishes (especially i10 Heat Smash)', description: 'Maximize opponent mistakes' },
            { id: 'heat', skill: 'I use Heat for GMC access and guard break', description: 'Not just Heat Smash spam' },
            { id: 'wall', skill: 'I carry to wall and apply wall pressure', description: 'db+1,1 natural, GMH pressure' },
            { id: 'defense', skill: 'I use ub+1+2 and 3+4 armor appropriately', description: 'Not mashing when minus' },
            { id: 'spacing', skill: 'I maintain Range 2 and backdash into whiff punishes', description: 'Movement and positioning' },
          ]}
          requiredToPass={8}
        />
      </Section>

      <Section title="Congratulations">
        <CompletionBadge 
          title="Jack-8 Mastery Complete"
          description="You've completed the comprehensive Jack-8 guide. Now take these skills to real matches and develop your own style."
        />

        <TipBox variant="tip" title="What's Next">
          <p>Your Jack journey is just beginning. Here's how to continue improving:</p>
          <ul>
            <li><strong>Play matches</strong> — Theory becomes skill through practice</li>
            <li><strong>Review your replays</strong> — Find where you're getting hit</li>
            <li><strong>Lab matchups</strong> — Learn what to punish vs each character</li>
            <li><strong>Practice crouch game</strong> — This is where Jack shines</li>
            <li><strong>Develop your timing</strong> — When to GMH, when to throw, when to low</li>
          </ul>
        </TipBox>

        <KeyConcept title="The Jack Identity" icon="🤖">
          <p>
            Jack is not the gimmick character. Jack is not the "just press buttons" character. 
            Jack is the <strong>fundamentals character</strong> who happens to be a big robot.
          </p>
          <p style={{ marginTop: '12px' }}>
            You win with Jack by understanding fighting games. By knowing when it's your turn. 
            By making correct reads. By not dropping your combos. By punishing every mistake.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>Welcome to the Poke Empire.</strong>
          </p>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
