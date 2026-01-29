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
      title="Complete Law"
      intro="You've learned Law's tools. Now it's time to put it all together into a complete gameplan. Here's how professional Law players approach matches."
      onPrevious={() => goToChapter(12)}
      hasNext={false}
    >
      <Section title="The Law Gameplan">
        <p>
          Law is a <span className="highlight">rushdown control character</span>. Your goal is 
          to get in close and make opponents guess constantly. Every blocked option leads to 
          another mixup. Every hit leads to more pressure.
        </p>

        <KeyConcept title="Core Philosophy" icon="🎯">
          <ol>
            <li><strong>Get to jab range</strong> — Use movement, b+2, and wr+3 to close distance</li>
            <li><strong>Establish jab pressure</strong> — Your jab is +1, start your offense</li>
            <li><strong>Condition with db+3/f+1+2</strong> — Make them respect your plus frame tools</li>
            <li><strong>Threaten slide</strong> — Force reactions with crouch animation</li>
            <li><strong>Counter-hit fish</strong> — 1,1,1, f+1+2, and 1+2 punish button presses</li>
            <li><strong>Launch runners into df+2</strong> — Cash out when they crack</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="90% of Law">
          According to pro player Landon D: "90% of the time you want people to run into df+2, 
          Heat 1+2, b+1,2,2, or dragon hammer." If they aren't running into your launchers, 
          hit them until they do.
        </TipBox>
      </Section>

      <Section title="Neutral Game">
        <p>
          In neutral (mid-range), Law struggles compared to characters with long-range pokes. 
          Here's how to close the gap:
        </p>

        <KeyConcept title="Approaching" icon="🏃">
          <ul>
            <li><strong>b+2</strong> — Safe mid poke, threatens junkyard follow-up</li>
            <li><strong>f,f+2</strong> — Safe approach mid, confirms into f,f+2,3 on hit</li>
            <li><strong>wr+3</strong> — +6 on block, chip damage, wall splat</li>
            <li><strong>1+2</strong> — Good range (especially in Heat), counter-hit launches</li>
            <li><strong>Sidestep → df+2</strong> — Whiff punish their pokes</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Keep-Out" icon="🛑">
          <ul>
            <li><strong>b+4</strong> — Homing mid, i14, safe</li>
            <li><strong>b+3</strong> — Homing mid, slower but more range</li>
            <li><strong>3+4,4</strong> — Whiff punish, good range</li>
            <li><strong>df+2</strong> — Launch their whiffs</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Point Blank Pressure">
        <p>
          Once you're in jab range, this is where Law dominates:
        </p>

        <KeyConcept title="The Pressure Loop" icon="🔄">
          <ol>
            <li><strong>Jab (+1)</strong> → See what they do</li>
            <li><strong>If they press</strong> → 1,1,1 confirms counter-hit into Heat</li>
            <li><strong>If they block</strong> → db+3 or f+1+2 for plus frames</li>
            <li><strong>If they step right</strong> → b+1 or b+4 catches them</li>
            <li><strong>If they duck</strong> → df+1 or f+1+2 hits them</li>
            <li><strong>If they respect</strong> → Crouch → slide mixup</li>
            <li><strong>Repeat until they die</strong></li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Slide Threat">
          You don't always have to slide. The threat of slide is often enough. Crouch walk 
          toward them, see them panic, then hit them with ws+4~f or uf+3. The slide creates 
          openings for everything else.
        </TipBox>
      </Section>

      <Section title="Wall Game">
        <p>
          Law's wall game is among the best in Tekken:
        </p>

        <KeyConcept title="Wall Pressure" icon="🧱">
          <ul>
            <li><strong>1,1,1 / 1,2,2,1+2</strong> — Wall splat strings</li>
            <li><strong>b+1,2,2</strong> — Tracks right, heat engager, wall splat</li>
            <li><strong>Junkyard (b+2,3,4)</strong> — Safe, sets up +6 oki</li>
            <li><strong>ss+2 / ss+3</strong> — 50/50 mixup</li>
            <li><strong>wr+3</strong> — +6 on block, chip damage</li>
            <li><strong>DSS f+4</strong> — Legend Kick for chip</li>
            <li><strong>Slide</strong> → 1+2 → slide again</li>
          </ul>
        </KeyConcept>

        <p>
          Near the wall, your plus frame tools become even stronger. f+1+2 wall splats on 
          counter-hit. b+1,2,2 wall splats. Even blocked Heat Smash leads to guaranteed 
          wall combo.
        </p>
      </Section>

      <Section title="Offense Summary">
        <p>
          Here's a quick flowchart for Law's offense:
        </p>

        <KeyConcept title="Offense Flowchart" icon="📊">
          <p style={{ fontWeight: 600, marginBottom: '12px' }}>Getting In:</p>
          <ul style={{ marginBottom: '16px' }}>
            <li>b+2 (safe mid, threatens junkyard)</li>
            <li>f,f+2 (safe approach)</li>
            <li>wr+3 (+6 on block)</li>
          </ul>

          <p style={{ fontWeight: 600, marginBottom: '12px' }}>At Jab Range:</p>
          <ul style={{ marginBottom: '16px' }}>
            <li>1 → db+3/f+1+2 for plus frames</li>
            <li>1 → 1,1,1 for counter-hit confirm</li>
            <li>df+1 to check duckers</li>
            <li>b+1 to catch right steppers</li>
          </ul>

          <p style={{ fontWeight: 600, marginBottom: '12px' }}>With Plus Frames:</p>
          <ul style={{ marginBottom: '16px' }}>
            <li>Continue jab pressure</li>
            <li>Crouch → slide/uf+3 mixup</li>
            <li>Frame trap with f+1+2</li>
          </ul>

          <p style={{ fontWeight: 600, marginBottom: '12px' }}>In Heat:</p>
          <ul>
            <li>Spam 1+2 (safe launcher)</li>
            <li>DSS pressure with auto-parry</li>
            <li>Slide → 1+2 → repeat</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Strengths & Weaknesses Recap">
        <KeyConcept title="Law Excels At" icon="✅">
          <ul>
            <li>Point-blank pressure</li>
            <li>Counter-hit fishing</li>
            <li>Plus frame stacking</li>
            <li>Wall game</li>
            <li>Heat pressure</li>
            <li>Teaching Tekken fundamentals</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Law Struggles Against" icon="❌">
          <ul>
            <li>Characters with crouch hurtboxes (Ling, Zafina)</li>
            <li>Long-range zoners who keep him out</li>
            <li>Characters with fast evasive moves</li>
            <li>Opponents who sidestep right consistently</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Matchup Tips">
        <Collapsible title="General Matchup Advice" icon="📖" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <ul>
              <li>Against <strong>crouch characters</strong>: Be careful with jabs, use more mids</li>
              <li>Against <strong>zoners</strong>: Patience, use movement, wr+3 to approach</li>
              <li>Against <strong>steppers</strong>: b+4, b+1, and db+3 catch movement</li>
              <li>Against <strong>mashers</strong>: 1,1,1 and f+1+2 counter-hit launch them</li>
              <li>Against <strong>turtles</strong>: Slide them to death</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Final Tips">
        <KeyConcept title="Pro Tips from Top Players" icon="💡">
          <ol>
            <li><strong>Slide isn't everything</strong> — It's a tool, not your entire game</li>
            <li><strong>Get in jab range</strong> — That's where Law dominates</li>
            <li><strong>Don't drop combos</strong> — Consistency beats optimization</li>
            <li><strong>Use Heat wisely</strong> — Plan before you activate</li>
            <li><strong>Adapt</strong> — Change your approach based on what works</li>
            <li><strong>Have fun</strong> — Law is one of the most satisfying characters to play</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Keep Learning">
          This guide covers the essentials, but there's always more to learn. Watch top Law 
          players like Landon D, Double, and others. Join the Law Discord. Experiment in 
          practice mode. The more you play, the better you get.
        </TipBox>
      </Section>

      <Section title="Quick Reference">
        <Collapsible title="Move Priority List" icon="📋" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p style={{ fontWeight: 600, marginBottom: '8px' }}>Must Use:</p>
            <ul style={{ marginBottom: '12px' }}>
              <li><code>1</code> / <code>1,2</code> / <code>1,1,1</code> — Jab and strings</li>
              <li><code>df+1</code> — Mid poke</li>
              <li><code>f+1+2</code> — Plus frame mid</li>
              <li><code>db+3</code> — Best low poke</li>
              <li><code>df+2</code> — Safe launcher</li>
              <li><code>ws+4~f</code> — DSS pressure</li>
              <li><code>Slide + 1+2</code> — The signature mixup</li>
            </ul>

            <p style={{ fontWeight: 600, marginBottom: '8px' }}>Important:</p>
            <ul style={{ marginBottom: '12px' }}>
              <li><code>b+1,2,2</code> — Rekka, tracks, heat engager</li>
              <li><code>b+4</code> — Homing mid</li>
              <li><code>b+2,3,4</code> — Junkyard</li>
              <li><code>uf+3</code> — Heat engager from crouch</li>
              <li><code>3+4,4</code> — Whiff punisher</li>
              <li><code>1+2</code> — Counter-hit launcher (god move in Heat)</li>
            </ul>

            <p style={{ fontWeight: 600, marginBottom: '8px' }}>Situational:</p>
            <ul>
              <li><code>DSS moves</code> — All of them depending on situation</li>
              <li><code>ss+3</code> — Side step low for mixups</li>
              <li><code>wr+3</code> — Approach tool</li>
              <li><code>d+2,3</code> — Panic move</li>
              <li><code>BT options</code> — Occasional mixup</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <TipBox variant="tip" title="You're Ready">
        You now have everything you need to play Law at a high level. The fundamentals in 
        this guide will carry you through ranked. Practice your combos, learn your matchups, 
        and most importantly — have fun rushing people down.
      </TipBox>
    </Chapter>
  )
}
