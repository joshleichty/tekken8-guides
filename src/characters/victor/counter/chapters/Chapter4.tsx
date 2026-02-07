import { Chapter, Section, SubSection } from '../../../../components/guide'
import { KeyConcept } from '../../../../components/ui/KeyConcept'
import { Collapsible } from '../../../../components/ui/Collapsible'
import s from './counter-styles.module.css'

interface ChapterProps {
  characterSlug: string
  chapterId: number
  goToChapter: (id: number) => void
}

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Quick Reference"
      intro="Everything distilled into a cheat sheet. Pull this up when you're about to face a Victor."
      onPrevious={() => goToChapter(3)}
      hasNext={false}
      nextLabel="Finish"
    >
      <Section title="The Four Golden Rules">
        <div className={s.ruleGrid}>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>🔫</span>
            <span className={s.ruleTitle}>Duck the Gun</span>
            <p className={s.ruleDesc}>Every gunshot is a high. Every time. Free launch.</p>
          </div>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>🗡️</span>
            <span className={s.ruleTitle}>Punish the Handle</span>
            <p className={s.ruleDesc}>Sword handle hit = -13 or worse. Punish.</p>
          </div>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>🚶</span>
            <span className={s.ruleTitle}>Sidewalk Left</span>
            <p className={s.ruleDesc}>Beats ~80% of his movelist. Watch for homing.</p>
          </div>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>💀</span>
            <span className={s.ruleTitle}>PRF on Block = Launch</span>
            <p className={s.ruleDesc}>Blocked into Perfumer? Hopkick. Nothing beats it.</p>
          </div>
        </div>
      </Section>

      <Section title="Punishment Quick Ref">
        <Collapsible title="Launch Punishable (15f+)" icon="💥" defaultOpen>
          <table className={s.dataTable}>
            <tbody>
              <tr><td>uf4 (hopkick)</td><td className={s.frameRed}>-19</td></tr>
              <tr><td>u1+2 (lunge, non-heat)</td><td className={s.frameRed}>-20</td></tr>
              <tr><td>Heat Smash</td><td className={s.frameRed}>-15</td></tr>
              <tr><td>db4 (snake edge)</td><td className={s.frameRed}>-26</td></tr>
              <tr><td>d1,2 (low, high)</td><td className={s.frameRed}>-17</td></tr>
              <tr><td>FC d1+2 (full crouch)</td><td className={s.frameRed}>-23</td></tr>
              <tr><td>IAI d1+2 (stance low)</td><td className={s.frameRed}>-29</td></tr>
              <tr><td>All Perfumer on block</td><td className={s.frameRed}>Launch</td></tr>
            </tbody>
          </table>
        </Collapsible>

        <Collapsible title="Standing Punishable (10–14f)" icon="👊" defaultOpen>
          <table className={s.dataTable}>
            <tbody>
              <tr><td>b3,1 / f2,2,2 / 4,3,2 / PRF 2,2,1+2</td><td className={s.frameRed}>-13</td></tr>
              <tr><td>1,2,1 / 1,1,2 / 2,2 / f4,2</td><td className={s.frameRed}>-12</td></tr>
              <tr><td>f2,2,1 / f2</td><td className={s.frameAmber}>-11</td></tr>
              <tr><td>4,3 / f4 / df4</td><td className={s.frameMuted}>-10</td></tr>
            </tbody>
          </table>
        </Collapsible>

        <Collapsible title="Duckable Highs" icon="⬇️" defaultOpen>
          <table className={s.dataTable}>
            <tbody>
              <tr><td>df4,2</td><td className={s.frameGreen}>2nd hit gun = high</td></tr>
              <tr><td>2,2,2</td><td className={s.frameGreen}>3rd hit gun = high</td></tr>
              <tr><td>b1,2</td><td className={s.frameGreen}>2nd hit = high</td></tr>
              <tr><td>4,4</td><td className={s.frameGreen}>Both hits = high</td></tr>
              <tr><td>df1,1,1</td><td className={s.frameGreen}>2nd hit = high</td></tr>
              <tr><td>d1,2</td><td className={s.frameGreen}>2nd hit = high</td></tr>
            </tbody>
          </table>
        </Collapsible>
      </Section>

      <Section title="Stance Decision Trees">
        <SubSection title="IAI Stance (Hand on Sword)">
          <div className={`${s.decisionBlock} ${s.positive}`}>
            <div className={s.decisionLabel}>You BLOCKED the transition</div>
            <div className={s.decisionContent}>
              <ul>
                <li>Most transitions = you're plus. Challenge or step left.</li>
                <li>WR2 on block = he's +5. Don't press, block and wait.</li>
                <li>Anything from f4,2 or similar = launch him.</li>
              </ul>
            </div>
          </div>
          <div className={`${s.decisionBlock} ${s.negative}`}>
            <div className={s.decisionLabel}>You GOT HIT</div>
            <div className={s.decisionContent}>
              <ul>
                <li>He's plus. Block and wait.</li>
                <li>Watch for IAI d1+2 (homing low). Block low = launch.</li>
                <li>IAI d2 is +4 on block. Just hold the pressure.</li>
              </ul>
            </div>
          </div>
        </SubSection>

        <SubSection title="Perfumer Stance (Knives Out)">
          <div className={`${s.decisionBlock} ${s.positive}`}>
            <div className={s.decisionLabel}>You BLOCKED the transition</div>
            <div className={s.decisionContent}>
              <p>LAUNCH HIM. Always. 15f launcher beats everything he can do from Perfumer on block. No exceptions.</p>
            </div>
          </div>
          <div className={`${s.decisionBlock} ${s.negative}`}>
            <div className={s.decisionLabel}>You GOT HIT</div>
            <div className={s.decisionContent}>
              <ul>
                <li>50/50: low (PRF 1, -12) or mid knee (PRF 3).</li>
                <li>Guess. If you block the low, punish it.</li>
                <li>If you block the knee, take your turn.</li>
              </ul>
            </div>
          </div>
        </SubSection>
      </Section>

      <Section title="Heat Behavior">
        <KeyConcept title="What changes in Heat" icon="🔥">
          <table className={s.dataTable}>
            <tbody>
              <tr><td><strong>u1+2</strong></td><td>-20 → -4. Unpunishable. Let him burn meter.</td></tr>
              <tr><td><strong>IAI d2</strong></td><td>+4 → +8 on block. Very scary. Block and hold.</td></tr>
              <tr><td><strong>Heat Smash</strong></td><td>It's a LOW. -15. Block low and launch.</td></tr>
              <tr><td><strong>General</strong></td><td>Extra plus frames, scarier pressure. Be patient.</td></tr>
            </tbody>
          </table>
        </KeyConcept>
      </Section>

      <Section title="Matchup Summary">
        <div className={s.summaryCard}>
          <p>
            Victor is a <strong>knowledge check character</strong>. His moves look scary but have consistent, exploitable weaknesses. Every gun is duckable. Every sword handle is punishable. Every blocked Perfumer transition is launchable. He's extremely linear to your left. His lows are terrible on block.
          </p>
          <p>
            The Victor matchup is won by <strong>patience, recognition, and correct punishment</strong>. Don't mash. Don't panic. Block, identify, punish. He'll hand you full combos for free if you know what to look for.
          </p>
        </div>
      </Section>
    </Chapter>
  )
}
