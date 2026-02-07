import { Chapter, Section, SubSection } from '../../../../components/guide'
import { KeyConcept } from '../../../../components/ui/KeyConcept'
import { TipBox } from '../../../../components/ui/TipBox'
import { Collapsible } from '../../../../components/ui/Collapsible'
import s from './counter-styles.module.css'

interface ChapterProps {
  characterSlug: string
  chapterId: number
  goToChapter: (id: number) => void
}

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="Know Your Enemy"
      intro="Before you train a single reaction, you need to understand what Victor is trying to do to you. This chapter gives you the mental model that makes everything else click."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
    >
      <Section title="What Victor Wants">
        <p>
          Victor's entire gameplan is simple: <strong>push you to the wall and run his wall mixup</strong>. Every move in his kit serves this purpose. His approach tools build plus frames into stances, his stances create pressure that pushes you backwards, and once your back touches the wall, his mixup is among the most oppressive in the game.
        </p>
        <p>
          He's also a deeply <em>committal</em> character. His strings have duckable highs. His stances are launch punishable on block. His lows are almost universally terrible. This means that if you're solid defensively, Victor has to take increasingly desperate risks to open you up — and those risks get him killed.
        </p>
        <p>
          Your goal against Victor is patience. Don't panic. Don't mash. Block, identify what he did, and make him pay for it. He will hand you launch punishes constantly if you know what to look for.
        </p>
      </Section>

      <Section title="The Four Golden Rules">
        <p>
          These four rules cover the vast majority of the Victor matchup. Internalize these before anything else — they're worth more than memorizing every frame number in his movelist.
        </p>

        <div className={s.ruleGrid}>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>🔫</span>
            <span className={s.ruleTitle}>Duck the Gun</span>
            <p className={s.ruleDesc}>
              Every gunshot in every Victor string is a <strong>high</strong>. See the gun, duck, launch. This covers 2,2,2 / df4,2 and every other gunshot string. No exceptions.
            </p>
          </div>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>🗡️</span>
            <span className={s.ruleTitle}>Punish the Handle</span>
            <p className={s.ruleDesc}>
              If Victor hits you with the <strong>handle of his sword</strong> (not the blade), it's -13 or worse on block. Consistent visual cue across his movelist. See the handle, punish.
            </p>
          </div>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>🚶</span>
            <span className={s.ruleTitle}>Sidewalk Left</span>
            <p className={s.ruleDesc}>
              Victor is extremely linear to his right (your left). At -5 or worse, <strong>sidewalk left beats ~80% of his movelist</strong>.
            </p>
            <p className={s.ruleNote}>
              Exceptions: WR1+2 (homing low), uf2 (homing mid), db4 (homing at plus frames).
            </p>
          </div>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>💀</span>
            <span className={s.ruleTitle}>Perfumer on Block = Launch</span>
            <p className={s.ruleDesc}>
              If you <strong>blocked</strong> the move that transitioned into Perfumer, he's dead. He can't block in stance. 15f launcher wins 100% of the time. Always.
            </p>
            <p className={s.ruleNote}>
              On hit he gets a real mixup. The block/hit distinction is the key.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="How much are these rules worth?">
          Just knowing these four things — no drilling, no frame data memorization — gives you roughly 60% of the Victor matchup. Most of your improvement against Victor comes from pure knowledge, not reactions.
        </TipBox>
      </Section>

      <Section title="Get Inside Victor's Head">
        <p>
          The fastest way to understand what Victor is trying to do is to <strong>briefly play as him</strong>. This isn't about learning Victor — it's about building intuition for his patterns from the inside. Spend 10–15 minutes on this.
        </p>

        <SubSection title="Exercise: Play as Victor">
          <KeyConcept title="Step 1: Feel His Approach" icon="1️⃣">
            <p>
              Set the training dummy to block. Pick Victor. Do while-running 2 (WR2) by dashing forward and pressing 2. Notice how it goes into IAI stance and you're plus. Try pressing buttons from the stance — IAI 1, IAI d2, IAI 4. This is what Victor players are doing to you.
            </p>
          </KeyConcept>

          <KeyConcept title="Step 2: Feel His Stances" icon="2️⃣">
            <p>
              Do f3 to manually enter Perfumer stance. Try the options: Perfumer 1 (low), Perfumer 3 (mid knee), Perfumer 2,2 (mids into IAI). Then try transitioning from a string: do 1,1,2~f to go to Perfumer on hit.
            </p>
          </KeyConcept>

          <KeyConcept title="Step 3: Feel the Wall" icon="3️⃣">
            <p>
              Push the dummy to the wall. Do a combo that wall splats. Then try the wall pressure: heat activation into options. Notice how once Victor gets you to the wall, the situation feels inescapable. This is what he's building toward the entire round.
            </p>
          </KeyConcept>
        </SubSection>

        <TipBox variant="tip" title="What to take away">
          You don't need to learn Victor's combos. You just need to feel the rhythm of his offense: dash in, get plus frames, transition to stance, push to wall. That rhythm is what you're defending against.
        </TipBox>
      </Section>

      <Section title="The Match at a Glance">
        <p>
          A match against Victor flows through a few distinct phases. Recognizing which phase you're in tells you what to do:
        </p>

        <Collapsible title="Phase Map" defaultOpen>
          <div className={s.phaseList}>
            <div className={s.phaseCard}>
              <div className={s.phaseLabel}>Neutral / Approach</div>
              <p className={s.phaseDesc}>
                Victor dashes in with WR2 or WR1+2. Block WR2, duck WR1+2 on read. If he does f,f+2, just block it and take your turn. Step left when you have the space.
              </p>
            </div>
            <div className={s.phaseCard}>
              <div className={s.phaseLabel}>Strings / Close Range</div>
              <p className={s.phaseDesc}>
                He's in your face doing jab strings and pokes. Watch for the gun (duck it). Watch for the handle (punish it). Don't press into his plus frames. Wait for your turn.
              </p>
            </div>
            <div className={s.phaseCard}>
              <div className={s.phaseLabel}>IAI Stance</div>
              <p className={s.phaseDesc}>
                He transitioned to IAI (hand on sword). If you blocked the transition, challenge with a fast mid or step left. If he hit you into it, respect and react to his option.
              </p>
            </div>
            <div className={s.phaseCard}>
              <div className={s.phaseLabel}>Perfumer Stance</div>
              <p className={s.phaseDesc}>
                If you blocked the transition: LAUNCH HIM. Always. If he hit you into it: block and guess between the low and the knee. That's a true 50/50 — no drill fixes it, just reads.
              </p>
            </div>
            <div className={s.phaseCard}>
              <div className={s.phaseLabel}>Wall</div>
              <p className={s.phaseDesc}>
                Your back is to the wall. This is Victor's best position. His wall pressure is extremely strong. Armor on read, survive the mix. The main goal is to not end up here.
              </p>
            </div>
          </div>
        </Collapsible>

        <TipBox variant="warning" title="The critical distinction">
          Throughout this matchup, the most important thing to track is: <strong>did I block that, or did I get hit?</strong> This one question answers most of "what should I do now?" If you blocked and he transitioned to a stance, you can almost always act. If you got hit and he transitioned, you almost always have to hold.
        </TipBox>
      </Section>
    </Chapter>
  )
}
