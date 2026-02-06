import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Dancing Phoenix"
      intro="Ling Xiaoyu doesn't play Tekken the way everyone else does. She dances. She evades. She makes opponents question every button they press. This chapter introduces who she is, how she thinks, and why mastering her is one of the most rewarding journeys in the game."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Your First Buttons"
    >
      <Section title="Who Is Xiaoyu?">
        <p>
          Xiaoyu is the <strong>queen of evasion</strong>. She doesn't overpower opponents with raw damage or 
          smother them with plus frames — she makes them <em>miss</em>. Her three stances allow her to duck under 
          highs, sidestep mids, and flow between positions that make opponents second-guess every attack they throw.
        </p>

        <p>
          She is not a 50/50 monster in neutral. She is a <span className="highlight">stance-heavy character who thrives 
          on constant antagonization</span>. Her outstanding poking game and evasive abilities expose flowcharts 
          and punish bad habits. With the Tekken 8 heat system amplifying her Hypnotist stance into a terrifying 
          50/50, she now has the pressure tools to match her evasion.
        </p>

        <p>
          Every Xiaoyu player is different. Unlike most characters where the optimal play converges on one style, 
          Xiaoyu rewards creativity. Some players lean fundamental — poking, punishing, spacing. Others embrace the 
          "Sodam style" — dancing between stances, canceling moves, creating chaos. The best players blend both. 
          This guide will give you the tools for all three approaches.
        </p>

        <KeyConcept title="What Xiaoyu Wants To Do" icon="🦋">
          <ul>
            <li><strong>Poke and prod</strong> — Use quick, safe moves to chip health and create frame advantages</li>
            <li><strong>Evade and punish</strong> — Use AOP and BT sidestep to dodge attacks, then launch the whiff</li>
            <li><strong>Read and adapt</strong> — Watch what opponents do after your moves, then pick the counter</li>
            <li><strong>Build momentum</strong> — Chain poke damage into stance transitions into more pressure</li>
            <li><strong>Explode at the wall in heat</strong> — Her wall game in heat is among the most terrifying in the game</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Three Stances">
        <p>
          Xiaoyu has three stances that form a triangle of movement and mixups. Understanding what each stance 
          <em>does</em> at a high level is essential before diving into specific moves. Think of them as different 
          modes of operation:
        </p>

        <KeyConcept title="Art of Phoenix (AOP) — The Evasion Stance" icon="🔥">
          <p>Input: <code>d+1+2</code></p>
          <p>
            AOP crushes highs, evades many mids, and comes with a built-in sidestep right. It reduces the 
            opponent's effective movelist dramatically. Xiaoyu cannot block in this stance — she commits 
            to evading and retaliating. This is the stance that defines her identity.
          </p>
          <ul>
            <li><strong>Purpose:</strong> Evasion and whiff punishment</li>
            <li><strong>Cannot block</strong></li>
            <li>Crushes all highs, evades many mids and even some lows</li>
            <li>Built-in sidestep right on entry</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Rain Dance (RDS / BT) — The Pressure Stance" icon="💃">
          <p>Input: <code>b+3+4</code> (or from many moves on hit/block)</p>
          <p>
            Rain Dance is Xiaoyu's back-turned stance. Her sidestep in BT is <em>superior</em> to her normal 
            sidestep — it covers more distance and evades more moves. From here she has fast pokes, launchers, 
            lows, throws, and the ability to retreat or transition into other stances.
          </p>
          <ul>
            <li><strong>Purpose:</strong> Mixups, pressure, superior lateral movement</li>
            <li>Enhanced sidestep compared to neutral</li>
            <li>Access to back-turned throws (including a 3-way mixup)</li>
            <li>Parry available (BT.b+1+3)</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Hypnotist (HYP) — The 50/50 Stance" icon="🌀">
          <p>Input: <code>db+1+2</code> or <code>ub+1+2</code></p>
          <p>
            Hypnotist is Xiaoyu's mixup stance. She takes up to three steps, and each step amplifies three 
            key moves: a mid (HYP.2), a low (HYP.3), and an unblockable (HYP.2+3). In heat, she skips the 
            first step, making the 50/50 immediately dangerous. This is where she becomes truly scary.
          </p>
          <ul>
            <li><strong>Purpose:</strong> Forced 50/50 mixups, especially in heat</li>
            <li>Cannot block — must commit</li>
            <li>Moves get stronger the more steps she takes</li>
            <li>In heat: skips first step for instant powered-up options</li>
            <li>Also has a punch parry (HYP.1+2)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Rush The Stances">
          The biggest mistake new Xiaoyu players make is trying to learn all three stances immediately. 
          Start with her <strong>neutral pokes</strong>. Her poking game alone can carry you through early 
          ranks. Add stances one at a time as you get comfortable. AOP first, then BT, then HYP.
        </TipBox>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Unmatched evasion</strong> — AOP crushes highs and evades mids; BT sidestep is among the best in the game</li>
          <li><strong>Outstanding poking game</strong> — Quick, safe moves that chip health and create frame advantages</li>
          <li><strong>Strong counter-hit tools</strong> — Many moves guarantee devastating follow-ups on counter hit</li>
          <li><strong>Small hitbox</strong> — Some combos and moves whiff on her that work on everyone else</li>
          <li><strong>Buffed combo damage in T8</strong> — Her damage output is significantly better than Tekken 7</li>
          <li><strong>Excellent whiff punishment</strong> — Standing 3 (i14 launcher), b+1+2, ub+3 all cover huge ranges</li>
          <li><strong>Terrifying wall game in heat</strong> — Hypnotist 50/50 with powered-up options</li>
          <li><strong>Two heat smashes</strong> — One from neutral, one from BT (the BT version is much stronger)</li>
          <li><strong>Creative freedom</strong> — Her extensive movelist rewards experimentation and personal style</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Short range</strong> — Her limbs are small; backdashing opponents can make her whiff</li>
          <li><strong>No fast WS launcher</strong> — Her fastest WS launcher (uf+3) is i16; no i13-i15 WS launcher</li>
          <li><strong>Weak to sidestep left</strong> — Many of her key moves track poorly to her left</li>
          <li><strong>Difficult to open turtles without heat</strong> — Outside of heat, her pressure is honest</li>
          <li><strong>Risky stances</strong> — AOP and HYP cannot block; committed movement can be floated</li>
          <li><strong>Heat game isn't true 50/50 outside HYP</strong> — Opponents have more defensive options</li>
          <li><strong>Steep learning curve</strong> — Three stances with many transitions take time to internalize</li>
        </ul>

        <TipBox variant="warning" title="The Investment Pays Off">
          Xiaoyu is not the easiest character to pick up. But every Xiaoyu expert — Mr. Croft, Cilantro, 
          King Jay — says the same thing: once you overcome the initial learning curve, she becomes one of 
          the most fun and rewarding characters in the game. The key is starting with fundamentals and 
          building up.
        </TipBox>
      </Section>

      <Section title="Notation In This Guide">
        <p>
          This guide uses standard Tekken notation. Here are Xiaoyu-specific abbreviations you'll see throughout:
        </p>

        <KeyConcept title="Xiaoyu Notation" icon="📝">
          <ul>
            <li><strong>AOP</strong> — Art of Phoenix stance (<code>d+1+2</code>)</li>
            <li><strong>RDS / BT</strong> — Rain Dance stance / Back-Turned (<code>b+3+4</code>)</li>
            <li><strong>HYP</strong> — Hypnotist stance (<code>db+1+2</code> or <code>ub+1+2</code>)</li>
            <li><strong>FC</strong> — Full Crouch</li>
            <li><strong>ws</strong> — While Standing (rising from crouch)</li>
            <li><strong>ss</strong> — Side Step</li>
            <li><strong>WR / f,f,F</strong> — While Running</li>
            <li><strong>CH</strong> — Counter Hit</li>
            <li><strong>HE</strong> — Heat Engager</li>
            <li><strong>T!</strong> — Tornado (tailspin)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Road Ahead">
        <p>
          This guide is structured to build your Xiaoyu from the ground up. We start with neutral pokes — the 
          foundation that every strong Xiaoyu player is built on. Then we layer in counter-hit fishing, stance 
          knowledge, combos, heat, punishment, and wall game. By the end, you'll have a complete Xiaoyu that 
          can handle any situation.
        </p>

        <Collapsible title="Chapter Overview">
          <ol>
            <li><strong>The Dancing Phoenix</strong> — You are here. Understanding who Xiaoyu is.</li>
            <li><strong>Your First Buttons</strong> — Essential neutral pokes and safe moves.</li>
            <li><strong>Damage From Pokes</strong> — Counter hits, guaranteed follow-ups, and low attacks.</li>
            <li><strong>Art of Phoenix</strong> — Deep dive into AOP evasion and offense.</li>
            <li><strong>Rain Dance</strong> — Back-turned stance mastery.</li>
            <li><strong>First Combos</strong> — Launchers, routes, wall carry, and combo enders.</li>
            <li><strong>Hypnotist & Heat</strong> — The 50/50 stance and the heat system.</li>
            <li><strong>Punishment</strong> — Block and whiff punishment.</li>
            <li><strong>Wall Game & Oki</strong> — Wall combos, wall pressure, and okizeme setups.</li>
            <li><strong>The Complete Xiaoyu</strong> — Throws, stance flow, and building your playstyle.</li>
          </ol>
        </Collapsible>

        <TipBox variant="tip" title="Play While You Read">
          This guide is designed to be used with Practice Mode open. After each section, hop into practice 
          and try the moves. Don't memorize — internalize. The difference is that memorizing tells you what 
          buttons to press; internalizing tells you <em>when</em>.
        </TipBox>
      </Section>
    </Chapter>
  )
}
