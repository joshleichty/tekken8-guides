import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  TipBox,
  PracticeBox,
  KeyConcept,
  SituationCard
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Wall Game & Oki"
      intro="Xiaoyu excels at the wall. Her stances, mixups, and combo extensions all become more dangerous when the opponent has nowhere to retreat. This chapter covers wall combos, wall pressure, and okizeme (wakeup pressure)."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="The Complete Xiaoyu"
    >
      <Section title="Wall Combos">
        <KeyConcept title="Wall Splat Follow-ups" icon="🧱">
          <p>
            When your combo carries to the wall and the opponent splats, you need consistent follow-ups. 
            Xiaoyu has several options depending on whether you've already used your tornado in the combo.
          </p>
        </KeyConcept>

        <SubSection title="Without Tornado (Most Common)">
          <SituationCard title="Standard Wall Combo">
            <p><strong>Wall splat →</strong> <code>ub+4 T!</code> → <code>f+2,1,B</code> → <code>HYP.2</code></p>
            <p>Damage: ~40-45. The go-to wall combo. <code>ub+4</code> is your wall tornado, then 
            <code>f+2,1,B</code> into HYP for the <code>HYP.2</code> wall re-splat.</p>
          </SituationCard>

          <SituationCard title="High Damage Wall Combo">
            <p><strong>Wall splat →</strong> <code>ub+4 T!</code> → <code>f+2,1,B</code> → <code>HYP.1</code></p>
            <p>Damage: ~45-50. Uses <code>HYP.1</code> instead of <code>HYP.2</code> for slightly more 
            damage, but less consistent at certain angles.</p>
          </SituationCard>

          <SituationCard title="Heat Wall Combo">
            <p><strong>Wall splat →</strong> <code>ub+4 T!</code> → <code>Heat Burst</code> → <code>H.f+2,1,2</code> → <code>BT.f+3+4,3+4</code></p>
            <p>Damage: ~55+. Burns your heat but gives massive wall damage. The Cali Roll ender 
            is the best option here.</p>
          </SituationCard>
        </SubSection>

        <SubSection title="With Tornado Already Used">
          <SituationCard title="Post-Tornado Wall Combo">
            <p><strong>Wall splat →</strong> <code>f+2,1,B</code> → <code>HYP.2</code></p>
            <p>Damage: ~30-35. Simple and effective when tornado is spent.</p>
          </SituationCard>

          <SituationCard title="Simple Wall Combo">
            <p><strong>Wall splat →</strong> <code>1,2</code> → <code>f+1+2</code></p>
            <p>Damage: ~25. The easiest option. Use when you're not confident about execution.</p>
          </SituationCard>
        </SubSection>

        <TipBox variant="tip" title="Wall Combo Consistency">
          The most important thing about wall combos is <strong>consistency</strong>. A simple wall combo 
          you land every time is worth more than an optimal one you drop half the time. Start with 
          <code>f+2,1,B → HYP.2</code> and only upgrade when you can land it 9/10 times.
        </TipBox>
      </Section>

      <Section title="Wall Pressure">
        <KeyConcept title="Why Xiaoyu Is Scary At The Wall" icon="😈">
          <p>
            At the wall, everything Xiaoyu does becomes more dangerous:
          </p>
          <ul>
            <li>The opponent can't backdash to escape your pressure</li>
            <li>Your stances (AOP, BT, HYP) are harder to deal with in tight space</li>
            <li>Your 50/50 (HYP.1 / HYP.4) leads to wall combos instead of open-field combos</li>
            <li>CH launches lead to wall splats for massive damage</li>
            <li>Throws wall splat for guaranteed follow-ups</li>
          </ul>
        </KeyConcept>

        <SubSection title="Wall Pressure Tools">
          <SituationCard title="The Wall Toolkit">
            <ul>
              <li><strong>df+1 → BT</strong> — Your standard poke transitions to BT at the wall. From BT:
                <ul>
                  <li><code>BT.1</code> — CH launches into wall combo</li>
                  <li><code>BT.d+3</code> — Low chip at the wall</li>
                  <li><code>BT.d+4</code> — Knockdown low, guarantees 3+4</li>
                  <li><code>BT.1+2</code> — Tracking mid</li>
                </ul>
              </li>
              <li><strong>db+2 → BT</strong> — Low poke into BT at the wall. Risky but rewarding.</li>
              <li><strong>f,f+3</strong> — Wall splats on CH. Safe on block. Transitions to BT.</li>
              <li><strong>d+1+2 → HYP 50/50</strong> — The 50/50 at the wall is devastating. Both options wall splat.</li>
              <li><strong>Throws</strong> — Most throws wall splat, giving free wall combos.</li>
              <li><strong>AOP at the wall</strong> — AOP.d+1+2 is safe and launches. AOP.3+4 is the big low.</li>
            </ul>
          </SituationCard>
        </SubSection>

        <SubSection title="Wall Pressure Flowchart">
          <SituationCard title="After Getting Opponent To The Wall">
            <ol>
              <li><strong>Poke with df+1</strong> — Safe, transitions to BT</li>
              <li><strong>From BT, choose:</strong>
                <ul>
                  <li>BT.1 — If they're pressing buttons (CH launch → wall combo)</li>
                  <li>BT.d+3 — If they're standing and blocking (low chip)</li>
                  <li>BT.d+4 — If they're blocking mid (knockdown low)</li>
                  <li>BT.1+2 — If they're sidestepping (tracks)</li>
                </ul>
              </li>
              <li><strong>If they respect you:</strong> Enter HYP for the 50/50</li>
              <li><strong>If they try to escape:</strong> f,f+3 catches backdash and sidestep</li>
              <li><strong>If they freeze:</strong> Throw them (wall splat → wall combo)</li>
            </ol>
          </SituationCard>
        </SubSection>
      </Section>

      <Section title="Okizeme (Wakeup Pressure)">
        <KeyConcept title="What Is Oki?" icon="⏰">
          <p>
            Okizeme is the pressure you apply when the opponent is on the ground. In Tekken 8, wakeup 
            options are limited, and Xiaoyu can apply strong pressure after knockdowns. The goal is to 
            keep your turn going after scoring a hit.
          </p>
        </KeyConcept>

        <SubSection title="After Combo Enders">
          <SituationCard title="After f+2,1,4 (Beginner Combo Ender)">
            <ul>
              <li><code>dash → df+1</code> — Catches quickrise, transitions to BT</li>
              <li><code>dash → db+4</code> — Low poke to catch late tech</li>
              <li><code>dash → d+1+2</code> — Enter HYP for the 50/50 against quickrise</li>
              <li><code>dash → throw</code> — Catches opponents who stand and block</li>
            </ul>
          </SituationCard>

          <SituationCard title="After HYP.3+4 → f,f+4 → HYP.2 (Optimal Ender)">
            <ul>
              <li><code>dash → df+1</code> — Standard post-ender pressure</li>
              <li><code>d+1+2</code> — You're close enough for immediate HYP</li>
              <li><code>f,f+3</code> — Catches rolls and delayed wakeup</li>
            </ul>
          </SituationCard>

          <SituationCard title="After BT.d+4 Knockdown">
            <ul>
              <li><code>3+4</code> — Guaranteed follow-up (always do this!)</li>
              <li>After 3+4: <code>dash → df+1</code> or <code>d+1+2</code> for continued pressure</li>
            </ul>
          </SituationCard>
        </SubSection>

        <SubSection title="Opponent Wakeup Options & Your Answers">
          <SituationCard title="Reading Wakeup Options">
            <ul>
              <li><strong>Quickrise</strong> — They get up immediately. Apply pressure with df+1 or the 50/50.</li>
              <li><strong>Delayed getup</strong> — They stay on the ground. Use f,f+3 or db+4 to hit grounded.</li>
              <li><strong>Backroll</strong> — They roll away. Chase with f,f+3 or dash → throw.</li>
              <li><strong>Wake-up kick</strong> — They attack from the ground. Block and punish, or AOP to evade.</li>
              <li><strong>Spring kick</strong> — Risky getup attack. Block → full punish.</li>
              <li><strong>Tech roll (side)</strong> — They roll to the side. Track with BT.1+2 or f,f+3.</li>
            </ul>
          </SituationCard>

          <TipBox variant="tip" title="Don't Over-Chase">
            It's tempting to always chase after a knockdown, but sometimes the best oki is to simply 
            take space and let the opponent come to you. If you're at a life lead, let them approach — 
            they'll be more likely to make mistakes under pressure.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Stage Awareness">
        <SubSection title="Wall Break Stages">
          <p>
            On stages with breakable walls, <code>f+1+2</code> (shoulder) is your wall break tool. 
            After a wall break, you get a guaranteed follow-up in the next area. Use this when breaking 
            the wall leads to another wall (for re-splat) or to an area advantageous for your stance game.
          </p>
        </SubSection>

        <SubSection title="Floor Break Stages">
          <p>
            On stages with breakable floors, <code>3+4</code> (stomps) can break the floor for a 
            guaranteed follow-up combo on the lower level. If you see a floor break spot, end your 
            combo with 3+4 instead of your normal ender.
          </p>
        </SubSection>

        <SubSection title="Infinite Stages">
          <p>
            On stages with no walls (like Colosseum of Fate), Xiaoyu loses some of her wall pressure 
            advantage. Focus on:
          </p>
          <ul>
            <li>Maximizing combo damage (use optimal enders, not wall carry enders)</li>
            <li>Oki pressure after knockdowns</li>
            <li>Keepout with ss4, f,f+3, and AOP evasion</li>
          </ul>
        </SubSection>

        <PracticeBox
          title="Wall & Oki Drill"
          setup="Set training mode to a walled stage. Practice carrying to the wall and following up."
          tasks={[
            { id: 'xiao-wall-carry', text: 'b+1+2 → optimal combo → wall carry to wall → wall combo — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-wall-heat', text: 'Wall combo with Heat Burst extension — 5 times', type: 'counter', target: 5 },
            { id: 'xiao-oki-quickrise', text: 'Combo ender → dash → df+1 (catch quickrise) → BT pressure — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-wall-throw', text: 'At wall: throw → wall combo — 5 times', type: 'counter', target: 5 },
            { id: 'xiao-wall-50', text: 'At wall: d+1+2 → HYP 50/50 → wall combo — 5 times each option', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
