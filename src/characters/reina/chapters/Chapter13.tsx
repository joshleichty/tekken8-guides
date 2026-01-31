import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  SkillCheck,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="Complete Reina"
      intro="You've learned the pieces. Now let's put them together into a complete game plan. This is how you think as a Reina player—from round start to round end."
      onPrevious={() => goToChapter(12)}
      hasNext={false}
    >
      <Section title="The Reina Mindset">
        <p>
          Reina wins by <strong>relentless pressure</strong>. Your goal is to get plus frames, 
          keep plus frames, and force your opponent to guess. When they guess wrong, you punish 
          hard.
        </p>

        <KeyConcept title="The Core Philosophy" icon="🧠">
          <ol>
            <li><strong>Get in</strong> — f,f+2 is your entry ticket</li>
            <li><strong>Stay plus</strong> — SEN 3, SEN 4, f+4 keep you ahead</li>
            <li><strong>Force decisions</strong> — Mids, lows, throws—they have to guess</li>
            <li><strong>Punish mistakes</strong> — Block and punish, whiff and launch</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Aggression with Control">
          Reina isn't about random offense. She's about <em>controlled</em> aggression. 
          You attack with purpose, watch for responses, and adapt.
        </TipBox>
      </Section>

      <Section title="Round Start Game Plan">
        <Flowchart 
          title="Round Start Options"
          nodes={[
            { type: 'start', label: 'Round Start' },
            { type: 'decision', label: 'What to do?', branches: [
              { label: 'Aggressive', action: 'f,f+2~F → SEN pressure' },
              { label: 'Safe', action: 'df+1 check or backdash' },
              { label: 'CH fish', action: 'b+4 or standing 4' },
              { label: 'Read opponent', action: 'Block, see what they do' }
            ]},
            { type: 'end', label: 'Adapt based on result' }
          ]}
        />

        <p>
          Most of the time, <strong>f,f+2~F</strong> is your best round start. It's fast, 
          safe, and puts you in your best position. Only deviate if you have a specific read.
        </p>
      </Section>

      <Section title="Mid-Round Strategy">
        <KeyConcept title="Situation Priorities" icon="🎯">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Priority</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Neutral (mid-range)</td>
                <td style={{ padding: '8px' }}>f,f+2~F to start pressure</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Plus frames</td>
                <td style={{ padding: '8px' }}>Keep pressuring—SEN options, throws</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Minus frames</td>
                <td style={{ padding: '8px' }}>Block and reset. Don't panic.</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Opponent pressing</td>
                <td style={{ padding: '8px' }}>SEN 1,2 armor or frame trap them</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Opponent sidestepping</td>
                <td style={{ padding: '8px' }}>b+2 or SEN 3 (homing)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Opponent turtling</td>
                <td style={{ padding: '8px' }}>More throws, chip with SEN 3/4</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Near wall</td>
                <td style={{ padding: '8px' }}>f+4, WRA throw, hell sweep loop</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="Adaptation Patterns">
        <KeyConcept title="If They..." icon="🔄">
          <ul>
            <li><strong>Duck your SEN 3</strong> → Use SEN 4, SEN 2, or SEN 1+2</li>
            <li><strong>Press after f,f+2~F</strong> → SEN 3 trades favorably; SEN 1,2 armors</li>
            <li><strong>Block everything</strong> → More throws, more chip, more patience</li>
            <li><strong>Sidestep</strong> → b+2, SEN 3, or pause and punish their whiff</li>
            <li><strong>Backdash</strong> → UNS 4 has massive range</li>
            <li><strong>Parry/reversal</strong> → Pause, bait it, launch punish</li>
            <li><strong>Power crush</strong> → Block it, launch punish</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Pay Attention">
          The best Reina players watch their opponents. What do they do after f,f+2? Do they 
          press? Crouch? Sidestep? Once you know their habit, you can punish it.
        </TipBox>
      </Section>

      <Section title="Heat Usage">
        <KeyConcept title="Heat Strategy" icon="🔥">
          <ul>
            <li><strong>Activate early</strong> — Get pressure, auto-electrics, WRA parry</li>
            <li><strong>Use heat smash</strong> — +8 on block, wall carry, wall break</li>
            <li><strong>WRA auto-parry</strong> — Just standing in WRA is scary in heat</li>
            <li><strong>UNS heat recovery</strong> — Entering Unsoku restores meter</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Closing Out Rounds">
        <p>
          When you have the life lead or opponent is low:
        </p>

        <KeyConcept title="Round-Ender Toolkit" icon="🏆">
          <ul>
            <li><strong>Safe chip</strong> — SEN 3, SEN 4, WRA 3+4</li>
            <li><strong>Unbreakable throw</strong> — SEN 1+3, WRA 1+3</li>
            <li><strong>Wall splat</strong> — 2,2,1, df+1,2 (if they're -13+)</li>
            <li><strong>Safe launcher</strong> — df+2 if they're impatient</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Get Greedy">
          With a life lead, you don't need to take risks. Chip them out safely. 
          Desperation leads to dropped combos and thrown rounds.
        </TipBox>
      </Section>

      <Section title="Skill Check: Are You Ready?">
        <SkillCheck
          title="Complete Reina Checklist"
          subtitle="Can you do all of this consistently?"
          skills={[
            { id: 'skill-1', skill: 'f,f+2~F → SEN 3 hit confirm', description: 'Your bread and butter' },
            { id: 'skill-2', skill: 'SEN high/mid mixup', description: 'SEN 3 vs SEN 4' },
            { id: 'skill-3', skill: 'WRA entry and options', description: 'Via SEN 1+2 or df+4,2~D' },
            { id: 'skill-4', skill: '10f standing punish (1,1,2)', description: 'And 15f (df+2)' },
            { id: 'skill-5', skill: 'Basic combo', description: 'From any launcher' },
            { id: 'skill-6', skill: 'Wall combo', description: 'At least the easy one' },
            { id: 'skill-7', skill: 'Heat activation and use', description: 'Via SEN 3 or other engagers' },
            { id: 'skill-8', skill: 'Unsoku defense', description: 'b+3 chains, UNS 4 punish' },
          ]}
          requiredToPass={6}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You now have everything you need to play Reina at a high level. But learning never stops:
        </p>

        <KeyConcept title="Continued Growth" icon="📈">
          <ul>
            <li><strong>Matchup knowledge</strong> — Learn what to punish for each character</li>
            <li><strong>Execution</strong> — Work on electrics if you want them</li>
            <li><strong>Optimization</strong> — Better combos, better oki, better reads</li>
            <li><strong>Watch top players</strong> — See how they use Reina in tournament</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Final Word">
          Reina rewards players who <strong>understand pressure and frame advantage</strong>. 
          Every time you play, ask yourself: "Why did that work? Why did that fail?" 
          The answers will make you better.
        </TipBox>
      </Section>

      <Collapsible title="Complete Quick Reference" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Core Loop</h4>
          <p style={{ color: 'var(--text-secondary)' }}>f,f+2~F → SEN 3 (hit confirm) or SEN options on block</p>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>Key Moves</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li><strong>f,f+2~F</strong> — Approach, +2 on block into SEN</li>
            <li><strong>SEN 3</strong> — Fast high, heat engager, +1 on block</li>
            <li><strong>SEN 4</strong> — Slower mid, +4 on block</li>
            <li><strong>df+2</strong> — 15f launcher, no-execution whiff punish</li>
            <li><strong>f+4</strong> — +2c at wall</li>
            <li><strong>UNS 4</strong> — Massive range keepout</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>Punishment</h4>
          <ul style={{ color: 'var(--text-secondary)' }}>
            <li><strong>-10:</strong> 1,1,2</li>
            <li><strong>-12:</strong> 2,2,1</li>
            <li><strong>-15:</strong> df+2 or EWGF</li>
            <li><strong>ws -11:</strong> ws+4,4~D</li>
            <li><strong>ws -15:</strong> FC df+4</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px', marginTop: '16px' }}>Remember</h4>
          <p style={{ color: 'var(--text-secondary)' }}>
            Get plus frames. Keep plus frames. Make them guess. Punish when they guess wrong.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
