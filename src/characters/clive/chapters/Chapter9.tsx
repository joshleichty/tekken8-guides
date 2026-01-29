import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Complete Clive"
      intro="You've learned the pieces. Now it's time to put them together. This chapter covers the complete Clive gameplan, match strategy, and how to adapt to different opponents."
      onPrevious={() => goToChapter(8)}
      hasNext={false}
    >
      <Section title="The Clive Gameplan">
        <p>
          After eight chapters, here's how everything fits together. This is the 
          <span className="highlight"> complete mental model</span> for playing Clive.
        </p>

        <KeyConcept title="The Core Loop" icon="🔄">
          <ol>
            <li><strong>Establish mid-range</strong> — This is your domain (2-3 character lengths)</li>
            <li><strong>Control space with f+1+2 and b+2</strong> — Stop movement, start mixups</li>
            <li><strong>Enter Phoenix Shift</strong> — From b+2, f,f,F+2, 4,4, or 1,1</li>
            <li><strong>Run the mixup</strong> — PHX 2 (mid) vs PHX 4 (low)</li>
            <li><strong>Build Zantetsuken</strong> — Use meter-building moves throughout</li>
            <li><strong>Cash out damage</strong> — Wall combos + Zantetsuken 1+4 ender</li>
            <li><strong>Repeat</strong> — Reset to mid-range and start again</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Patience Game">
          Clive is NOT a rushdown character. Don't chase. Control space, make them come to you, 
          then punish their approach with your superior mid-range tools.
        </TipBox>
      </Section>

      <Section title="Range-Based Strategy">
        <SubSection title="Far Range (Full Screen)">
          <p>You're too far away — close the distance but don't overextend.</p>
          <ul>
            <li>Walk forward or dash forward carefully</li>
            <li>Use f,f+2 to poke and build meter</li>
            <li>Don't whiff f+1+2 at this range</li>
          </ul>
        </SubSection>

        <SubSection title="Mid-Range (Your Home)">
          <p>This is where Clive dominates. Stay here as much as possible.</p>
          <ul>
            <li><strong>f+1+2</strong> — Stops all movement, heat engages</li>
            <li><strong>b+2</strong> — High but leads to PHX mixups</li>
            <li><strong>b+1+2 (Titan)</strong> — Beats approaches, power crush</li>
            <li><strong>f,f+2</strong> — Safe poke, builds meter</li>
            <li><strong>f,f,F+2</strong> — Approach tool, +14 in PHX</li>
          </ul>
        </SubSection>

        <SubSection title="Close Range (Danger Zone)">
          <p>Your weakest range. Escape or use specific tools.</p>
          <ul>
            <li><strong>1,1</strong> — Stubby but fast, goes to PHX</li>
            <li><strong>1+2</strong> — i13 panic button, heals, heat engages</li>
            <li><strong>b+3</strong> — Parry their pressure</li>
            <li><strong>Backdash</strong> — Create space immediately</li>
            <li><strong>d+1</strong> — Low poke that leads to crouch mixup</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Matchup Approach">
        <KeyConcept title="Against Rushdown" icon="💨">
          <p>Characters like Law, Steve, Hwoarang who want to stay in your face:</p>
          <ul>
            <li>Prioritize backdash and parry (b+3)</li>
            <li>Use 1+2 to interrupt gaps</li>
            <li>Once you create space, don't let them back in</li>
            <li>f+1+2 stops their approach attempts</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Against Keepout" icon="🧱">
          <p>Characters like Bryan, Feng who want to control space:</p>
          <ul>
            <li>You win the range war — f+1+2 outranges most keepout</li>
            <li>Be patient, don't rush in</li>
            <li>f,f,F+2 is your approach tool</li>
            <li>Titan (b+1+2) beats their pokes</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Against Mixup Characters" icon="🎲">
          <p>Characters with scary 50/50s like King, Yoshimitsu:</p>
          <ul>
            <li>Don't let them get close — they win close-range</li>
            <li>Use parry against predictable attacks</li>
            <li>Punish hard when they whiff</li>
            <li>Make them play YOUR game at mid-range</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Against Turtles" icon="🐢">
          <p>Players who just block and wait:</p>
          <ul>
            <li>d+1 → ws+4 frame trap to start offense</li>
            <li>FC df+2 / ws+3 crouch mixup</li>
            <li>PHX 4 and PHX 3,2 for lows from stance</li>
            <li>Heat mode guard break (H.f+2,2,1*)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Round Management">
        <SubSection title="Round Start">
          <p>At round start, establish position:</p>
          <ul>
            <li>Backdash to create space OR</li>
            <li>f+1+2 to immediately assert mid-range OR</li>
            <li>1,1 if they rush in</li>
            <li>Don't panic — you want space anyway</li>
          </ul>
        </SubSection>

        <SubSection title="Mid-Round (Building)">
          <p>Focus on damage AND meter:</p>
          <ul>
            <li>Use meter-building moves (f,f+2, 1,2, ws+1,2, PHX 2,2)</li>
            <li>Chip away with d+1, FC df+2</li>
            <li>Land combos for wall carry</li>
            <li>Enter Heat when you have opportunities</li>
          </ul>
        </SubSection>

        <SubSection title="Round Close (Killing)">
          <p>When opponent is low, close it out:</p>
          <ul>
            <li>Wall combos + 1+4 (Zantetsuken) for max damage</li>
            <li>Don't get greedy — take guaranteed damage</li>
            <li>Level 5 Zantetsuken removes gray health — use to secure kills</li>
            <li>Remember: dropped combos lose rounds</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Common Mistakes">
        <KeyConcept title="What NOT to Do" icon="❌">
          <ul>
            <li><strong>Chasing opponents</strong> — Let them come to you</li>
            <li><strong>Spamming PHX 3,2</strong> — It's -26, you'll get launched</li>
            <li><strong>Ignoring meter</strong> — Zantetsuken is free damage, build it</li>
            <li><strong>Panicking up close</strong> — Backdash, parry, or 1+2. Don't mash.</li>
            <li><strong>Throwing raw 1+4</strong> — -15 on block. Use in combos only.</li>
            <li><strong>Forcing df+1</strong> — It's i14, not i13. Use 1+2 or 1,1 when they're faster.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Quick Reference">
        <Collapsible title="Move Cheat Sheet" icon="📋" defaultOpen>
          <p><strong>Neutral (Mid-Range):</strong></p>
          <ul>
            <li>f+1+2 — God button, tracks, heat engager</li>
            <li>b+2 — High, into PHX mixup</li>
            <li>b+1+2 — Power crush, huge range</li>
            <li>f,f+2 — Safe poke, builds meter</li>
            <li>f,f,F+2 — Approach, +14 in PHX</li>
          </ul>

          <p style={{ marginTop: '16px' }}><strong>Close Range:</strong></p>
          <ul>
            <li>1,1 — Fast, into PHX</li>
            <li>1+2 — i13 panic button</li>
            <li>df+1 — i14 mid poke</li>
            <li>4,4 — Into PHX at +6</li>
          </ul>

          <p style={{ marginTop: '16px' }}><strong>Lows:</strong></p>
          <ul>
            <li>d+1 — Main poke, +2 on hit</li>
            <li>FC df+2 — Long range, -12</li>
            <li>db+4 — CH launcher</li>
            <li>PHX 4 — Stance low, -13</li>
          </ul>

          <p style={{ marginTop: '16px' }}><strong>Phoenix Shift:</strong></p>
          <ul>
            <li>PHX 2 — Safe mid, +4 on hit</li>
            <li>PHX 4 — Fast low, -13</li>
            <li>PHX 1+2 — Heat engager, -7</li>
            <li>PHX 3,2 — Hell sweep, -26</li>
            <li>PHX 3+4 — Plus 7 homing mid</li>
          </ul>

          <p style={{ marginTop: '16px' }}><strong>Defense:</strong></p>
          <ul>
            <li>b+3 — Parry highs/mids/weapons</li>
            <li>b+3,P,2 — Wall splat followup</li>
            <li>b+3,P,1+2 — Meter followup, side switch</li>
            <li>b+1+2 — Power crush</li>
          </ul>
        </Collapsible>

        <Collapsible title="Punishment Summary" icon="📊">
          <p><strong>Standing:</strong></p>
          <ul>
            <li>i10: 1,2</li>
            <li>i12: 2:1 or 4,2</li>
            <li>i14: df+1,2:1</li>
            <li>i15: df+2 (LAUNCH)</li>
          </ul>

          <p style={{ marginTop: '16px' }}><strong>While Standing:</strong></p>
          <ul>
            <li>i11: ws+4</li>
            <li>i13: ws+1,2 or ws+1+2</li>
            <li>i15: ws+2 (LAUNCH)</li>
          </ul>
        </Collapsible>

        <Collapsible title="Combo Reference" icon="💥">
          <p><strong>Staple (df+2, ws+2, f+3):</strong></p>
          <p style={{ fontFamily: 'monospace', fontSize: '14px', marginLeft: '16px' }}>
            d+1 → ws+4 → db+1+2,1 → updraft 2,2 T! → df+1,2~F → PHX 2,1
          </p>

          <p style={{ marginTop: '16px' }}><strong>CH db+4 / CH d+1+2:</strong></p>
          <p style={{ fontFamily: 'monospace', fontSize: '14px', marginLeft: '16px' }}>
            b+2 → d+1 → ws+4 → 4,4~F → PHX 2,1
          </p>

          <p style={{ marginTop: '16px' }}><strong>Wall Combo:</strong></p>
          <p style={{ fontFamily: 'monospace', fontSize: '14px', marginLeft: '16px' }}>
            df+1,2~F → PHX 2,1
          </p>
        </Collapsible>
      </Section>

      <Section title="Final Checkpoint">
        <SkillCheck
          title="Clive Mastery Assessment"
          subtitle="You should be confident in all of these before ranking up"
          skills={[
            { id: 'neutral', skill: 'I dominate mid-range with f+1+2 and b+2', description: 'These are your bread and butter' },
            { id: 'phx', skill: 'I can run PHX mixups from multiple entries', description: 'PHX 2 vs PHX 4 is your core mixup' },
            { id: 'combos', skill: 'I land the staple combo 8/10 times', description: 'd+1 → ws+4 route' },
            { id: 'punish', skill: 'I know my punishes (especially i15 launch)', description: 'df+2 for standing, ws+2 for crouching' },
            { id: 'defense', skill: 'I use b+3 parry effectively', description: 'One of the best parries in the game' },
            { id: 'heat', skill: 'I understand Heat strings and conversions', description: 'df+1,1, f+2,2,1, and Heat Dash combos' },
            { id: 'meter', skill: 'I build and use Zantetsuken meter', description: 'Use 1+4 at end of combos for bonus damage' },
            { id: 'adapt', skill: 'I can adjust my range based on matchup', description: 'Know when to stay out vs when to pressure' },
          ]}
          requiredToPass={6}
        />
      </Section>

      <Section title="What's Next">
        <p>
          Congratulations! You now have a complete Clive gameplan. From here, your growth comes from:
        </p>

        <KeyConcept title="Continued Learning" icon="📈">
          <ul>
            <li><strong>Play matches</strong> — Knowledge only matters if you can apply it</li>
            <li><strong>Watch top Clive players</strong> — See how they apply these concepts</li>
            <li><strong>Lab matchups</strong> — Learn what you can punish from each character</li>
            <li><strong>Optimize combos</strong> — Once consistent, look for more damage</li>
            <li><strong>Explore the move list</strong> — There are tools we didn't cover</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Clive Brotherhood">
          As the guides said: "Clive is the GOAT." Now go prove it. Control mid-range, 
          run your mixups, and make your opponents fear Prominence.
        </TipBox>
      </Section>
    </Chapter>
  )
}
