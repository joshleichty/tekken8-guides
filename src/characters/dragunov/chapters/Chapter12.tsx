import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Complete Dragunov"
      intro="You've learned every tool. Now it's time to put it all together. This chapter is about how to THINK as Dragunov — the complete game plan from round start to round end."
      onPrevious={() => goToChapter(11)}
      hasNext={false}
      nextLabel="You've completed the guide!"
    >
      <Section title="The Dragunov Identity">
        <p>
          After 11 chapters, let's revisit who Dragunov is:
        </p>

        <KeyConcept title="Dragunov Core Identity" icon="🪖">
          <ul>
            <li><strong>Pressure monster</strong> — Once you're in, you're a nightmare</li>
            <li><strong>Plus frame king</strong> — WR+2, b+1+2, qcf+4 all keep you advantaged</li>
            <li><strong>Throw-heavy</strong> — Command grabs are primary, not secondary</li>
            <li><strong>Movement-based</strong> — Create space, find openings, run in</li>
            <li><strong>Linear but oppressive</strong> — Weak to sidesteps, strong when respected</li>
          </ul>
        </KeyConcept>

        <p>
          You are a <span className="highlight">stalker who suffocates prey</span>. You don't 
          play reactive Tekken — you impose your gameplan and make them deal with it.
        </p>
      </Section>

      <Section title="Round Start">
        <p>
          The round starts at roughly 3.0 range — the ideal distance for Dragunov. 
          Here's your opening flowchart:
        </p>

        <KeyConcept title="Round Start Options" icon="🏁">
          <ul>
            <li><strong>Backdash</strong> — Safe option, observe their tendencies</li>
            <li><strong>Fake run-in</strong> — f,f then block, see what they do</li>
            <li><strong>df+1</strong> — Quick mid check at range</li>
            <li><strong>d+2</strong> — Low check, catches approaching opponents</li>
            <li><strong>f+3~df</strong> — Safe mid into Sneak, test the waters</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Commit Early">
          Round 1 is for gathering information. What do they do when you dash forward? 
          When you're minus? When you're plus? Use the first round to learn their habits, 
          then exploit them for the rest of the set.
        </TipBox>
      </Section>

      <Section title="Neutral Game">
        <p>
          In neutral (no one has advantage), your goal is to find an opening:
        </p>

        <KeyConcept title="Neutral Tools" icon="🎯">
          <ul>
            <li><strong>Movement</strong> — Backdash, sidestep, create whiff opportunities</li>
            <li><strong>d+2</strong> — Tracking low, catches steps</li>
            <li><strong>df+3+4</strong> — Homing mid, catches sidesteps</li>
            <li><strong>b+3</strong> — Fast homing high, wall splats</li>
            <li><strong>f+3</strong> — Safe mid approach into Sneak</li>
            <li><strong>qcf+1</strong> — Whiff punisher, react to their mistakes</li>
          </ul>
        </KeyConcept>

        <p>
          Your neutral is about <span className="highlight">creating an opening for WR+2 or throw</span>. 
          Condition them to respect your mids, then once they freeze, run in.
        </p>
      </Section>

      <Section title="Offense - The Pressure Loop">
        <p>
          Once you're plus (after WR+2 block, b+1+2 block, qcf+4 block, etc.):
        </p>

        <KeyConcept title="Plus Frame Flowchart" icon="➕">
          <ol>
            <li><strong>At +1 to +4</strong></li>
            <ul>
              <li>Throw — primary option</li>
              <li>df+1 — mid check</li>
              <li>1,2,1 — CH attempt if they press</li>
              <li>d+2 — low mix</li>
            </ul>
            <li><strong>At +5 to +7</strong></li>
            <ul>
              <li>Throw — strong option</li>
              <li>b+1+2 — +6 mid for more pressure</li>
              <li>FC df+1,4 — low mix</li>
              <li>ws+3 — mid mix with FC df+1,4</li>
            </ul>
            <li><strong>At +8 or more</strong></li>
            <ul>
              <li>Almost anything works</li>
              <li>Crouch throw if in FC</li>
              <li>Continue pressure with any mid</li>
            </ul>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Throws First">
          Remember the core lesson: throws are your primary offense. At any plus frame 
          situation, throw is always a strong option until they prove they can break on reaction.
        </TipBox>
      </Section>

      <Section title="The 50/50s">
        <p>
          Dragunov has two main 50/50 situations:
        </p>

        <KeyConcept title="Standing 50/50" icon="🎲">
          <p><strong>After WR+2 block / qcf+4 block / b+1+2 block:</strong></p>
          <ul>
            <li><strong>Throw</strong> — Beats standing block</li>
            <li><strong>df+1 / b+4</strong> — Mid that beats duck attempts</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            If they duck → mid hits. If they respect → throw hits.
          </p>
        </KeyConcept>

        <KeyConcept title="Crouch 50/50" icon="🎲">
          <p><strong>After qcf+4 block / b+2 hit / d+2 hit:</strong></p>
          <ul>
            <li><strong>FC df+1,4</strong> — Low option, +7 in SNK on hit</li>
            <li><strong>ws+3</strong> — Mid option, knockdown, wall splats</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            Same speed (i16-17), pure guess. At wall, favor ws+3 for wall splat.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Wall Game">
        <p>
          The wall is where Dragunov truly shines. With no room to escape, your pressure 
          becomes inescapable:
        </p>

        <KeyConcept title="Wall Pressure Tools" icon="🧱">
          <ul>
            <li><strong>b+1+2</strong> — +6 on block, wall splats on hit</li>
            <li><strong>qcf+4</strong> — +7c on block, minimal pushback</li>
            <li><strong>b+4,3</strong> — Heat engager, wall splat</li>
            <li><strong>Throws</strong> — Wall throws do extra damage</li>
            <li><strong>db+3+4</strong> — Risky low for hard reads</li>
            <li><strong>WR+2</strong> — The threat continues</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Wall Kill Zone">
          At the wall with plus frames: it's throw or mid. They MUST guess correctly 
          multiple times to escape. Keep the pressure on until they're dead.
        </TipBox>
      </Section>

      <Section title="Heat Usage">
        <p>
          Save Heat for when it matters:
        </p>

        <KeyConcept title="When to Activate Heat" icon="🔥">
          <ul>
            <li><strong>After knockdown</strong> — Run in with WR+2 tackle threat</li>
            <li><strong>With life lead</strong> — Snowball the advantage</li>
            <li><strong>At the wall</strong> — Maximum pressure</li>
            <li><strong>Comeback time</strong> — When you need big damage</li>
          </ul>
        </KeyConcept>

        <p>
          Don't burn Heat randomly. The unbreakable tackle is terrifying — make sure 
          you're in position to abuse it.
        </p>
      </Section>

      <Section title="Adapting to Opponents">
        <p>
          Not every opponent plays the same. Here's how to adapt:
        </p>

        <KeyConcept title="Against Different Playstyles" icon="🎭">
          <p><strong>Against turtles:</strong></p>
          <ul>
            <li>Throws, throws, throws</li>
            <li>FC df+1,4 to open them up</li>
            <li>b+1+2 for plus frame pressure</li>
          </ul>

          <p style={{ marginTop: '16px' }}><strong>Against aggressive players:</strong></p>
          <ul>
            <li>1,2,1 counter-hit punish</li>
            <li>d+2 under their highs</li>
            <li>Block and punish unsafe moves</li>
          </ul>

          <p style={{ marginTop: '16px' }}><strong>Against sidesteppers:</strong></p>
          <ul>
            <li>d+2 — excellent tracking</li>
            <li>df+3+4 — homing mid</li>
            <li>b+3 — homing high</li>
            <li>Throws — throws are homing!</li>
          </ul>

          <p style={{ marginTop: '16px' }}><strong>Against throw breakers:</strong></p>
          <ul>
            <li>Finally use d+2 and FC df+1,4</li>
            <li>Mix your command grabs (1, 2, 1+2 breaks)</li>
            <li>Keep them guessing with mid pressure</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Common Mistakes to Avoid">
        <KeyConcept title="What NOT to Do" icon="❌">
          <ul>
            <li><strong>Running in blindly</strong> — WR+2 gets stepped if you're predictable</li>
            <li><strong>Using d+2 before throws</strong> — Throws are better at low/mid level</li>
            <li><strong>Spamming db+3+4</strong> — The snake edge is a death sentence on block</li>
            <li><strong>Full committing to 1,2,1</strong> — Only on confirmed CH</li>
            <li><strong>Ignoring sidesteps</strong> — Use homing moves to condition</li>
            <li><strong>Panic power crushing</strong> — 1+2 is -14, use wisely</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Skill Checklist">
        <p>
          Before you consider yourself a competent Dragunov, make sure you can:
        </p>

        <KeyConcept title="Fundamentals Checklist" icon="✓">
          <ul>
            <li>□ Execute WR+2 consistently from various ranges</li>
            <li>□ Apply throws after every plus frame situation</li>
            <li>□ Punish -10, -12, -14, and -15 moves correctly</li>
            <li>□ Complete at least one combo route from df+2/ws+2</li>
            <li>□ Use d+2 and df+3+4 to catch sidesteps</li>
            <li>□ Access FC game from b+2 and qcf+4</li>
            <li>□ Execute the FC df+1,4 / ws+3 50/50</li>
            <li>□ Use Heat for unbreakable tackles effectively</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Advanced Checklist" icon="✓">
          <ul>
            <li>□ Blue spark WR+2 consistently</li>
            <li>□ Instant while running execution</li>
            <li>□ Wall carry combos without using Tornado</li>
            <li>□ Optimal wall combos with WR+4</li>
            <li>□ Confirm 1,2,1 on counter-hit</li>
            <li>□ Confirm b+4,2,1 on counter-hit</li>
            <li>□ Low parry consistently</li>
            <li>□ Match-specific punishment (snake edges, etc.)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Final Words">
        <p>
          Dragunov is a character who rewards fundamentals. He doesn't have gimmicks or 
          cheese — he has <span className="highlight">honest, oppressive pressure</span> 
          backed by strong tools.
        </p>

        <p>
          Your path to improvement:
        </p>

        <KeyConcept title="The Path Forward" icon="📈">
          <ol>
            <li><strong>Master WR+2</strong> — This move IS Dragunov</li>
            <li><strong>Abuse throws</strong> — Until people prove they can break</li>
            <li><strong>Learn one combo well</strong> — Consistency over optimization</li>
            <li><strong>Develop movement</strong> — Create whiff opportunities</li>
            <li><strong>Add layers gradually</strong> — Sneak, FC mix, Heat</li>
            <li><strong>Play matches</strong> — Theory only goes so far</li>
          </ol>
        </KeyConcept>

        <p>
          The White Angel of Death doesn't speak. He doesn't need to. His Combat Sambo 
          speaks for him — and after this guide, it will speak for you too.
        </p>

        <TipBox variant="tip" title="Congratulations">
          You've completed the Dragunov guide. Now go hunt.
        </TipBox>
      </Section>

      <Collapsible title="Quick Reference Summary" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '12px' }}><strong>Key Moves:</strong></p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>WR+2</code> — Signature approach, +4 on block</li>
            <li><code>b+1+2</code> — +6 on block, crouch throw on hit</li>
            <li><code>qcf+4</code> — Heat engager, +7c on block</li>
            <li><code>d+2</code> — Tracking low, high crush</li>
            <li><code>FC df+1,4</code> — Plus on hit low</li>
            <li><code>1,2,1</code> — CH confirmable heat engager</li>
            <li><code>b+4,3</code> — 14f heat engager punish</li>
          </ul>

          <p style={{ marginBottom: '12px' }}><strong>Throws:</strong></p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>f+1+4</code> — 1 break</li>
            <li><code>f+2+3</code> — 2 break</li>
            <li><code>uf+1+2</code> — 1+2 break, floor break</li>
          </ul>

          <p style={{ marginBottom: '12px' }}><strong>Launchers:</strong></p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>df+2</code> — i15 standing</li>
            <li><code>ws+2</code> — i15 from crouch</li>
            <li><code>qcf+1</code> — Safe high launcher</li>
            <li><code>qcf+2</code> — Mid launcher</li>
          </ul>

          <p style={{ marginBottom: '12px' }}><strong>Main Punishes:</strong></p>
          <ul>
            <li>-10: <code>2,1</code></li>
            <li>-12: <code>4,1</code> / <code>ws+1+2</code></li>
            <li>-14: <code>b+4,3</code> / <code>uf+1</code></li>
            <li>-15: <code>df+2</code> / <code>ws+2</code></li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
