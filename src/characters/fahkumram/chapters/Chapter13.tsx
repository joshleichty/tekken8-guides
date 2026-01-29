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
      title="Complete Fahkumram"
      intro="You've learned the tools — now let's put it all together. This chapter covers the complete Fahkumram gameplan, from round start to wall pressure, and how to adapt to different opponents."
      onPrevious={() => goToChapter(12)}
      hasNext={false}
    >
      <Section title="The Fahkumram Gameplan">
        <KeyConcept title="Core Philosophy" icon="🎯">
          <p>
            Fahkumram is a <strong>mid-range specialist</strong>. Unlike rushdown characters who 
            want to be in your face, Fahkumram wants to fight at a distance where his kicks reach 
            but opponent's attacks whiff.
          </p>
          <p style={{ marginTop: '12px' }}>
            Your goal: <strong>Control space → Earn GRF → Execute Rama mixups</strong>
          </p>
        </KeyConcept>

        <KeyConcept title="The Three Phases" icon="📊">
          <ol>
            <li><strong>Neutral (No GRF)</strong> — Control space, fish for combos, earn GRF</li>
            <li><strong>With GRF</strong> — Look for Rama entry with GRF df+3+4,3 or guard breaks</li>
            <li><strong>Wall/Heat</strong> — Maximum pressure with Rama and chip damage</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Neutral Game">
        <p>
          In neutral, your job is to <strong>control space</strong> and look for opportunities 
          to earn Garuda Force:
        </p>

        <KeyConcept title="Neutral Tools" icon="⚔️">
          <ul>
            <li><strong>3</strong> — Your main poke. i13, great range, extensions.</li>
            <li><strong>df+4</strong> — Safe mid with extensions. Tracks right.</li>
            <li><strong>3+4</strong> — CH launcher. Tracks right.</li>
            <li><strong>b,f+4</strong> — +6 high launcher. Tracks left.</li>
            <li><strong>f,f,f+3</strong> — +6 approach. Wall splats.</li>
            <li><strong>d+4 / f,f+3</strong> — Lows to condition blocking.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Range Game">
          Stay at a range where your 3 reaches but their df+1 doesn't. This is Fahkumram's 
          "happy zone" — you can poke them but they can't poke you back.
        </TipBox>

        <Collapsible title="Round Start Options" icon="🏁" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p><strong>Aggressive:</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li><code>b,f+4</code> — Jet kick catches forward movement</li>
              <li><code>3</code> — Quick mid check</li>
              <li><code>3+4</code> — CH launcher if they press</li>
            </ul>
            
            <p><strong>Defensive:</strong></p>
            <ul style={{ marginBottom: '12px' }}>
              <li><code>Backdash → whiff punish</code> — Let them whiff, launch</li>
              <li><code>d+4</code> — Low crushes some round start attacks</li>
            </ul>
            
            <p><strong>Mixup:</strong></p>
            <ul>
              <li><code>f,f+3</code> — Low approach catches standing</li>
              <li><code>f,f,f+3</code> — Running knee if they backdash</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Earning Garuda Force">
        <p>
          Getting GRF is your priority. Here's how to earn it in different situations:
        </p>

        <KeyConcept title="GRF Acquisition Methods" icon="⚡">
          <ul>
            <li><strong>Combos</strong> — End with b+4,3,2 or df+1,2</li>
            <li><strong>Follow-ups</strong> — After b+1 knockdown, do f,f+1+2</li>
            <li><strong>Power crush</strong> — f+3+4 on read</li>
            <li><strong>Punch parry</strong> — b+2+4 success</li>
            <li><strong>Heat</strong> — Permanent GRF during Heat</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Combo into GRF">
          After any launch, make sure your combo ends with a GRF-granting move. This sets up 
          your next interaction to be a potential Rama entry.
        </TipBox>
      </Section>

      <Section title="With Garuda Force">
        <p>
          Once you have GRF, your goal is to <strong>land GRF df+3+4,3 or get a guard break</strong>:
        </p>

        <KeyConcept title="GRF Pressure Plan" icon="🔥">
          <ol>
            <li><strong>Look for GRF df+3+4,3</strong> — Hit-confirmable into Rama</li>
            <li><strong>Pressure with GRF f+2,1,2</strong> — +2 on block</li>
            <li><strong>Mix in charged kicks</strong> — Guard break into Rama on block</li>
            <li><strong>Use GRF 1+2 parry</strong> — If they try to interrupt</li>
          </ol>
        </KeyConcept>

        <p>
          GRF is consumed when you use a GRF move, so don't waste it. Make sure your GRF 
          move either hits (into Rama) or is blocked (guard break into Rama).
        </p>
      </Section>

      <Section title="Rama Stance Execution">
        <p>
          Once you're in Rama, you have the <strong>5-way mixup</strong>:
        </p>

        <KeyConcept title="Rama Decision Tree" icon="🌳">
          <ul>
            <li><strong>RAM.1</strong> — Default. Beats mashing, parries, rage art. +1 on block.</li>
            <li><strong>RAM.3,4</strong> — Damage option. Use when they're freezing.</li>
            <li><strong>RAM.4</strong> — Low. Use when they're conditioned to stand block.</li>
            <li><strong>RAM.1+3</strong> — Throw. Use when they're ducking nothing.</li>
            <li><strong>RAM.2</strong> — Unblockable. Use sparingly when they're completely frozen.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Start with RAM.1">
          In most situations, start with RAM.1. It's the safest option that beats most responses.
          Once they learn to just block, then start mixing in low and throw.
        </TipBox>
      </Section>

      <Section title="Wall Pressure">
        <p>
          Fahkumram's wall game is strong, especially with GRF:
        </p>

        <KeyConcept title="Wall Options" icon="🧱">
          <ul>
            <li><strong>3,4~3 / 4,3~4 (charged)</strong> — Guard break into Rama at wall</li>
            <li><strong>GRF df+3+4,3</strong> — Hit into Rama at wall (wall splat on RAM options)</li>
            <li><strong>f,f,f+3</strong> — +6 approach, chip damage</li>
            <li><strong>d+4</strong> — Low poke</li>
            <li><strong>df+3~3</strong> — Low fake-out, +2 on block</li>
          </ul>
        </KeyConcept>

        <p>
          At the wall, Rama becomes even scarier because <strong>RAM.1, RAM.3,4, and RAM.4 all wall splat</strong>. 
          Every option leads to big damage.
        </p>
      </Section>

      <Section title="Adapting to Opponents">
        <Collapsible title="Against Aggressive Players" icon="😤" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <ul>
              <li>Backdash and whiff punish</li>
              <li>Use 3+4 to fish for counter-hits</li>
              <li>Parry their predictable strings (b+1+3 for kicks, b+2+4 for punches)</li>
              <li>f+3+4 power crush when they're being reckless</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Against Defensive Players" icon="🛡️">
          <div style={{ marginTop: '12px' }}>
            <ul>
              <li>Use lows (d+4, f,f+3) to force reactions</li>
              <li>Approach with f,f,f+3 (+6 on block)</li>
              <li>Mix b,f+4 (high, +6) with 3+4 (mid, CH launcher)</li>
              <li>Go for throws when they freeze up</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Against Steppy Players" icon="🕺">
          <div style={{ marginTop: '12px' }}>
            <ul>
              <li><strong>Step left</strong> — Use b,f+4 (tracks left)</li>
              <li><strong>Step right</strong> — Use 3+4 or df+4 (track right)</li>
              <li>b+3 is homing — catches both directions</li>
              <li>df+1 tracks left</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Against Knowledge Checkers" icon="❓">
          <div style={{ marginTop: '12px' }}>
            <p><strong>Common knowledge checks opponents might not know:</strong></p>
            <ul>
              <li><strong>GRF f+2,1,2</strong> — Can be SSL between hits 2-3</li>
              <li><strong>3,1</strong> — Second hit is high, can be ducked</li>
              <li><strong>df+1,4</strong> — Second hit is high, can be ducked</li>
              <li><strong>RAM options</strong> — RAM.1 beats mashing, but everything else can be beaten</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              If opponents know these, you need to adapt: mix 3,4 with 3,1, use single hits 
              instead of strings, and vary your Rama options.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="Key Matchup Tips">
        <Collapsible title="Matchup-Specific Punishes" icon="📋">
          <div style={{ marginTop: '12px' }}>
            <p>Some specific punishes from the Applay sheet:</p>
            <ul>
              <li><strong>Asuka's b+3</strong> — Punish with b+1 → uf+3</li>
              <li><strong>Kazuya db+1,2</strong> — Punish with b,f+4 → uf+3</li>
              <li><strong>Ling RDS f+3+4,3+4</strong> — Punish with 1,2,1,4</li>
              <li><strong>Paul's Deathfist</strong> — Punish with b+1 → uf+3</li>
              <li><strong>Claudio's f+2,2</strong> — Punish with uf+4 → f,f+1+2</li>
              <li><strong>Jack's d+1+2</strong> — Punish with b,f+4 → uf+3</li>
              <li><strong>King's JGS 4</strong> — Punish with FC df+2 → CC d+3,4 float</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Final Tips">
        <KeyConcept title="Keys to Success" icon="🔑">
          <ol>
            <li><strong>Play your range</strong> — Don't fight close if you don't have to</li>
            <li><strong>Always end combos with GRF</strong> — Set up your next interaction</li>
            <li><strong>Don't force Rama</strong> — It's strong but not unbeatable</li>
            <li><strong>Use your parries</strong> — They're good, especially kick parry</li>
            <li><strong>Mix your strings</strong> — Don't be predictable with 3,1 vs 3,4</li>
            <li><strong>Respect your lows' risk</strong> — All are at least -13</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Fahkumram Mindset">
          Think of yourself as a sniper, not a brawler. Create distance, pick your shots, 
          and when you have the advantage (GRF, wall, Heat), go for the kill with Rama.
        </TipBox>

        <p>
          Congratulations on completing the Fahkumram guide! You now have all the tools to 
          dominate with the Apex Predator. Practice your combos, learn the matchups, and 
          most importantly — respect your range. Good luck!
        </p>
      </Section>

      <Collapsible title="Quick Reference Card" icon="📇" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Key Moves</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>3</code> — Main poke (i13, -9)</li>
            <li><code>b,f+4</code> — Jet kick (+6 high launcher)</li>
            <li><code>3+4</code> — CH launcher (-9 mid)</li>
            <li><code>f,f,f+3</code> — Running knee (+6 approach)</li>
            <li><code>d+4</code> — Fast low (-15)</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>GRF Moves</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>GRF df+3+4,3</code> — Hit into Rama</li>
            <li><code>GRF f+2,1,2</code> — +2 on block pressure</li>
            <li><code>3,4~3* (charged)</code> — Guard break → Rama</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Punishment</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>10f: 1,4</code></li>
            <li><code>12f: 2,1</code></li>
            <li><code>13f: 3,1</code> (range!)</li>
            <li><code>14f: b+1</code></li>
            <li><code>15f: df+2,3</code> (launch)</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Rama Options</p>
          <ul>
            <li><code>RAM.1</code> — Safe mid (+1)</li>
            <li><code>RAM.3,4</code> — Damage string</li>
            <li><code>RAM.4</code> — Low (-13)</li>
            <li><code>RAM.1+3</code> — Unbreakable throw</li>
            <li><code>RAM.2</code> — Unblockable (slow)</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
