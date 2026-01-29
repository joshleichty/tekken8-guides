import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="Complete Hwoarang"
      intro="You've learned the stances, the pressure, the combos, and the systems. Now it's time to put everything together into a complete gameplan that takes you from beginner to God of Destruction."
      onPrevious={() => goToChapter(12)}
      hasNext={false}
    >
      <Section title="The Complete Gameplan">
        <KeyConcept title="Hwoarang's Round Strategy" icon="📋">
          <ol>
            <li><strong>Opening</strong> — Establish your low threat (d+3,4)</li>
            <li><strong>Mid-round</strong> — Build pressure, activate Heat</li>
            <li><strong>Heat phase</strong> — Apply 50/50, chip them down</li>
            <li><strong>Close-out</strong> — Wall pressure or Heat Smash</li>
          </ol>
        </KeyConcept>

        <p>
          Every round follows this flow. You start by training them to respect your lows. 
          Once they're scared to stand block, you activate Heat and apply the full 50/50. 
          In Heat, both options lead to huge damage or chip.
        </p>
      </Section>

      <Section title="Opening the Round">
        <p>
          The first 10 seconds establish who controls the match:
        </p>

        <KeyConcept title="Round Start Options" icon="🎬">
          <ul>
            <li><code>d+3,4</code> — Immediate RFS entry, establish low threat</li>
            <li><code>df+4</code> — Homing mid, tracks early sidesteps</li>
            <li><code>ff+3</code> — Plus on hit/block, approach tool</li>
            <li><code>Backdash → b+3</code> — Whiff punish their approach</li>
            <li><code>RFF df+3</code> — Long-range Heat engager approach</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Read the Opponent">
          Your first few interactions are information gathering. Do they mash? Step? 
          Block? Adjust your gameplan based on their habits.
        </TipBox>
      </Section>

      <Section title="Establishing Pressure">
        <p>
          Once you've landed d+3,4, the pressure begins:
        </p>

        <KeyConcept title="Pressure Priority" icon="🔥">
          <ol>
            <li><strong>d+3,4 → RFS</strong> — Your bread and butter</li>
            <li><strong>RFS f+4,4</strong> — Check if they mash</li>
            <li><strong>RFS 2 → RFF → RFF 2,4~f</strong> — Loop back to RFS</li>
            <li><strong>Mix RFS df+4, 4,3, d+4,3</strong> — The 50/50</li>
            <li><strong>Heat engager when ready</strong> — RFS b+3 or RFF df+3</li>
          </ol>
        </KeyConcept>

        <p>
          Your goal is to get to RFS with plus frames over and over. The loop:
        </p>

        <div style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px', marginTop: '12px' }}>
          <p>d+3,4 → RFS → pressure → RFS 2 → RFF → RFF 2,4~f → RFS → repeat</p>
        </div>
      </Section>

      <Section title="Heat Activation Timing">
        <KeyConcept title="When to Engage" icon="⏱️">
          <ul>
            <li><strong>After landing d+3,4</strong> — You're in RFS, do RFS b+3</li>
            <li><strong>From neutral at range</strong> — RFF df+3 for safe +1 approach</li>
            <li><strong>As 13f punishment</strong> — df+3+4 punish → Heat</li>
            <li><strong>Near the wall</strong> — Heat chip is devastating at the wall</li>
            <li><strong>When you have life lead</strong> — Press advantage with Heat</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Waste Heat">
          Heat is your win condition. Don't activate it randomly. Have a plan: engage → 
          pressure → 50/50 → close. Wasted Heat is a wasted round.
        </TipBox>
      </Section>

      <Section title="In-Heat Pressure">
        <p>
          Once Heat is active, your pressure transforms:
        </p>

        <KeyConcept title="Heat Pressure Loop" icon="🔥">
          <ol>
            <li><strong>d+3,4 → RFS</strong> — Same as always</li>
            <li><strong>50/50 is deadly now:</strong></li>
            <ul style={{ marginLeft: '24px', marginTop: '8px' }}>
              <li><code>RFS d+4,3,4</code> — Full combo, wall splat</li>
              <li><code>RFS 4,3</code> — +4 LFS, wall splat</li>
              <li><code>RFS f+4,4</code> — Natural combo (no CH needed)</li>
            </ul>
            <li><strong>Chip damage on block</strong> — They lose health either way</li>
            <li><strong>Heat Smash to close</strong> — When they're locked down</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Wall Game">
        <p>
          Hwoarang's wall pressure is among the best in the game:
        </p>

        <KeyConcept title="Wall Pressure Options" icon="🧱">
          <ul>
            <li><code>d+3,4 → RFS 4,3</code> — Wall splats on hit/CH</li>
            <li><code>RFS df+4</code> — +1 on block, CH launches at wall</li>
            <li><code>df+4</code> — CH wall splat</li>
            <li><code>Throws</code> — Full throw game at wall is devastating</li>
            <li><code>2,f+3</code> — Wall crush on hit</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Wall Splat = Heat Smash">
          After a wall splat, you can do Heat Smash for massive damage. Wall splat → 
          H.2+3 is often a round-ender.
        </TipBox>
      </Section>

      <Section title="Matchup Awareness">
        <p>
          Hwoarang has specific challenges against certain archetypes:
        </p>

        <KeyConcept title="Archetype Adjustments" icon="🎯">
          <div style={{ display: 'grid', gap: '12px', marginTop: '12px' }}>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>vs. Rushdown (Nina, Law, Shaheen)</strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                They want to pressure you too. Use df+3,4 power crush, don't try to 
                out-mash them. Find gaps, then start YOUR pressure.
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>vs. Keep-out (Dragunov, Jack, Alisa)</strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                Use RFF df+3 to approach. Don't run in recklessly. Whiff punish their 
                keep-out with b+3.
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>vs. Mixup Characters (Xiaoyu, Lei, Eddy)</strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                Don't guess — block and wait for their pressure to end. df+4 homing 
                catches stance transitions. Don't enter flamingo without advantage.
              </p>
            </div>
            <div style={{ padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <strong>vs. Punishment-Heavy (Dragunov, Jin, Paul)</strong>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px' }}>
                Be careful with unsafe moves. They'll punish df+3,4, b+1, and any whiffs 
                hard. Use safe options, fish with d+3,4.
              </p>
            </div>
          </div>
        </KeyConcept>
      </Section>

      <Section title="Common Mistakes to Avoid">
        <KeyConcept title="What Kills New Hwoarangs" icon="💀">
          <ul>
            <li><strong>Entering flamingo without advantage</strong> — You can't block. Only enter from plus frames.</li>
            <li><strong>Predictable patterns</strong> — Always d+3,4 → RFS f+4,4 = they'll duck</li>
            <li><strong>Ignoring mids</strong> — You have great mids. Use RFS 4,3, df+4, JFSR.</li>
            <li><strong>No movement</strong> — Standing still = getting hit. Use backdash and sidestep.</li>
            <li><strong>Mashing on defense</strong> — Your panic moves are weak. Block and wait.</li>
            <li><strong>Wasting Heat</strong> — Random Heat activation = wasted potential.</li>
            <li><strong>Dropping combos</strong> — Practice until combos are muscle memory.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Rank-Specific Advice">
        <Collapsible title="Beginner to Fighter" defaultOpen>
          <KeyConcept title="Focus: Fundamentals" icon="🥋">
            <ul>
              <li>Master d+3,4 → RFS → RFS 2 loop</li>
              <li>Land your combos consistently</li>
              <li>Punish with 1,2,4 and 4,3</li>
              <li>Don't worry about JFSR yet</li>
              <li>Use df+4 against steppers</li>
            </ul>
          </KeyConcept>
        </Collapsible>

        <Collapsible title="Warrior to Vanquisher">
          <KeyConcept title="Focus: Pressure & Heat" icon="🔥">
            <ul>
              <li>Add RFF 2,4~f to your loops</li>
              <li>Start using Heat engagers intentionally</li>
              <li>Learn the RFS 50/50 (hell sweep vs 4,3)</li>
              <li>Practice JFSR consistency</li>
              <li>Improve wall game</li>
            </ul>
          </KeyConcept>
        </Collapsible>

        <Collapsible title="Ruler to Tekken King">
          <KeyConcept title="Focus: Adaptation & Reads" icon="👁️">
            <ul>
              <li>JFSR should be consistent</li>
              <li>Read when they'll duck vs mash</li>
              <li>Use db+4~f for CH setups</li>
              <li>Optimize combos for damage</li>
              <li>Develop movement to avoid pressure</li>
            </ul>
          </KeyConcept>
        </Collapsible>

        <Collapsible title="Tekken God to God of Destruction">
          <KeyConcept title="Focus: Mastery & Mind Games" icon="🧠">
            <ul>
              <li>Mental frames and "do nothing" pressure</li>
              <li>Matchup-specific adjustments</li>
              <li>Frame-perfect punishment</li>
              <li>Creative flowchart variations</li>
              <li>Tournament mentality</li>
            </ul>
          </KeyConcept>
        </Collapsible>
      </Section>

      <Section title="The Hwoarang Mentality">
        <KeyConcept title="Play Like a Champion" icon="🏆">
          <p>
            Hwoarang is not a character for the timid. He rewards aggression, conditioning, 
            and reads. Every round, your job is to suffocate your opponent with pressure 
            until they crack.
          </p>
          <p style={{ marginTop: '12px' }}>
            When you lose, it's not because Hwoarang is bad — it's because you got outread 
            or made mistakes. Watch your replays. See when you entered flamingo without 
            advantage, when you got predictable, when you dropped combos.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>The best Hwoarang players don't mash — they flow.</strong> They transition 
            between stances smoothly, read their opponent's habits, and punish every mistake. 
            That's what you're working toward.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Your Journey">
        <p>
          You now have all the tools you need to reach God of Destruction with Hwoarang:
        </p>

        <ul>
          <li><strong>Foundation</strong> — Jabs, stances, transitions</li>
          <li><strong>Core offense</strong> — d+3,4, mids, lows</li>
          <li><strong>Combos</strong> — Beginner to optimized routes</li>
          <li><strong>RFS mastery</strong> — The 8-frame CH launcher, hell sweep, 50/50</li>
          <li><strong>JFSR</strong> — The safe mid launcher</li>
          <li><strong>Punishment</strong> — Every frame window covered</li>
          <li><strong>Frame traps</strong> — Inescapable pressure</li>
          <li><strong>Heat</strong> — Devastating enhancements</li>
          <li><strong>Defense</strong> — Working with weak tools</li>
          <li><strong>Complete gameplan</strong> — Opening to close-out</li>
        </ul>

        <KeyConcept title="The Path Forward" icon="🚀">
          <ol>
            <li>Practice combos until they're automatic</li>
            <li>Drill the d+3,4 → RFS → pressure loop</li>
            <li>Work on JFSR consistency</li>
            <li>Play ranked matches and apply what you've learned</li>
            <li>Watch your replays and identify mistakes</li>
            <li>Repeat</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="You've Got This">
          Hwoarang is complex, but that complexity is your strength. Once you master his 
          stances and flowcharts, you'll have tools for every situation. Your opponents 
          won't know what hit them.
          <br /><br />
          Go make them guess. Go make them scared. Go to God of Destruction.
        </TipBox>
      </Section>

      <Section title="Quick Reference">
        <Collapsible title="Essential Moves" icon="📋" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p><strong>Pressure:</strong> d+3,4, RFS f+4,4, RFS 4,3, RFS df+4</p>
            <p><strong>Launchers:</strong> df+2, b+3, JFSR, u+3+4</p>
            <p><strong>Punishment:</strong> 1,2,4, 4,3, df+3+4, ws4,4, ws2,3</p>
            <p><strong>Heat:</strong> RFF df+3, ff+4, RFS b+3, LFS f+3</p>
            <p><strong>Defense:</strong> df+3,4, b+1, RFF 3~4</p>
          </div>
        </Collapsible>

        <Collapsible title="Essential Combos" icon="💥">
          <div style={{ marginTop: '12px', fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '16px', borderRadius: '8px' }}>
            <p><strong>Standard:</strong></p>
            <p>df+2 → f+4 → RFS 3~4 → uf+3+4~f → LFS uf+4 T! → uf+3,4,3</p>
            <p style={{ marginTop: '12px' }}><strong>JFSR:</strong></p>
            <p>JFSR → 3+4 → RFF 3~4 → f+4 → RFS 3~4 → d+4,4 T! → uf+3,4,3</p>
            <p style={{ marginTop: '12px' }}><strong>Wall:</strong></p>
            <p>Wall splat → SS 3,3 → LFS 3,2</p>
          </div>
        </Collapsible>

        <Collapsible title="Frame Data Cheat Sheet" icon="📊">
          <div style={{ marginTop: '12px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                  <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Note</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr><td style={{ padding: '6px' }}>d+3,4</td><td style={{ textAlign: 'center' }}>+8~+10</td><td>→ RFS</td></tr>
                <tr><td style={{ padding: '6px' }}>1,2,4</td><td style={{ textAlign: 'center' }}>+3</td><td>→ RFS</td></tr>
                <tr><td style={{ padding: '6px' }}>RFF 2,4~f</td><td style={{ textAlign: 'center' }}>+4</td><td>→ RFS</td></tr>
                <tr><td style={{ padding: '6px' }}>RFS f+4,4</td><td style={{ textAlign: 'center' }}>-6</td><td>8f CH launch</td></tr>
                <tr><td style={{ padding: '6px' }}>RFS 4,3</td><td style={{ textAlign: 'center' }}>+4</td><td>Safe mid</td></tr>
                <tr><td style={{ padding: '6px' }}>RFS df+4</td><td style={{ textAlign: 'center' }}>+1</td><td>Plus mid</td></tr>
                <tr><td style={{ padding: '6px' }}>JFSR</td><td style={{ textAlign: 'center' }}>-8</td><td>Safe launch</td></tr>
                <tr><td style={{ padding: '6px' }}>RFF df+3</td><td style={{ textAlign: 'center' }}>+1</td><td>Heat engager</td></tr>
                <tr><td style={{ padding: '6px' }}>b+3</td><td style={{ textAlign: 'center' }}>-19</td><td>Whiff punish</td></tr>
              </tbody>
            </table>
          </div>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
