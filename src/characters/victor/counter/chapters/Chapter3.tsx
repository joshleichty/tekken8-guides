import { Chapter, Section, SubSection } from '../../../../components/guide'
import { KeyConcept } from '../../../../components/ui/KeyConcept'
import { TipBox } from '../../../../components/ui/TipBox'
import s from './counter-styles.module.css'

interface ChapterProps {
  characterSlug: string
  chapterId: number
  goToChapter: (id: number) => void
}

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Training"
      intro="Every drill here trains a specific, identified skill with a genuine perceptual distinction. No single-option drills (that's just timing). No 50/50 drills (that's just guessing). Each drill requires you to see something different and respond differently."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
    >
      <Section title="Before You Start">
        <KeyConcept title="Drill Design Principles" icon="📐">
          <ul>
            <li><strong>Every drill has 2+ recordings</strong> with different correct responses. If there's only one option, your brain learns timing, not recognition.</li>
            <li><strong>The distinction must be visible.</strong> If you can't tell the difference between two options, it's a coin flip, not a skill.</li>
            <li><strong>Be correct before being fast.</strong> If you keep doing the wrong response, slow down and isolate the one you're struggling with.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Mode setup">
          Go to Practice Settings. Turn off Player Heat and Opponent Heat. In Display Settings, turn off attack info, frame info, and hit properties — you want to see what you'd see in a real match. Keep Command History on.
        </TipBox>
      </Section>

      <Section title="Drill 1: Duck the Gun">
        <p>
          <strong>Skill trained:</strong> Distinguishing gun strings from non-gun strings while blocking.
        </p>
        <p>
          <strong>Why it matters:</strong> Every gunshot is a free launch. But you can't just always duck after a mid — sometimes there's no gun and you'll eat a mid extension. The skill is seeing the gun animation and reacting.
        </p>

        <SubSection title="Setup">
          <div className={s.slotList}>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 1</span>
              <span className={s.slotDesc}>Victor does <strong>df4,2</strong> (mid, gun) then holds back</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 2</span>
              <span className={s.slotDesc}>Victor does <strong>df4</strong> alone then holds back</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 3</span>
              <span className={s.slotDesc}>Victor does <strong>2,2,2</strong> (jab, mid, gun) then holds back</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 4</span>
              <span className={s.slotDesc}>Victor does <strong>2,2</strong> alone then holds back</span>
            </div>
          </div>
        </SubSection>

        <SubSection title="How to Train">
          <p>
            Start with just Slots 1 and 2 (df4,2 vs df4). Block the first hit. If you see the gun pull, duck and launch. If the string ends after the mid, stay standing and punish (-10).
          </p>
          <p>
            Once consistent, add Slots 3 and 4 (2,2,2 vs 2,2). Same principle: see the gun, duck. String ends, take your turn. Then turn on all four.
          </p>
        </SubSection>

        <div className={s.successBox}>
          <div className={s.successLabel}>You've got it when</div>
          <p className={s.successDesc}>
            You duck every gun and never duck when the string ends early, 8 out of 10 times. Your command history shows clean inputs — no speculative ducks.
          </p>
        </div>
      </Section>

      <Section title="Drill 2: Punish Correctly">
        <p>
          <strong>Skill trained:</strong> Applying the right weight of punishment. Not every blocked move gets a launch.
        </p>
        <p>
          <strong>Why it matters:</strong> If you launch-attempt something that's -10, you'll whiff and get launched yourself. If you jab-punish something that's -15, you left damage on the table.
        </p>

        <SubSection title="Setup">
          <div className={s.slotList}>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 1</span>
              <span className={s.slotDesc}>Victor does <strong>b1,2</strong> — duck 2nd hit, LAUNCH</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 2</span>
              <span className={s.slotDesc}>Victor does <strong>uf4</strong> — block, LAUNCH punish (-19)</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 3</span>
              <span className={s.slotDesc}>Victor does <strong>1,1,2</strong> — block, standing punish (-12)</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 4</span>
              <span className={s.slotDesc}>Victor does <strong>df1</strong> — block, SAFE, take your turn</span>
            </div>
          </div>
        </SubSection>

        <SubSection title="How to Train">
          <p>
            Start with Slots 1 and 2: b1,2 (duck and launch) vs uf4 (block and launch). Both get launched but for different reasons — one is a duck, one is a block punish.
          </p>
          <p>
            Add Slot 3: 1,1,2 is -12. Your response is a standing punish (10–12f), NOT a launch. Add Slot 4: df1 is -1, it's safe — take your turn, don't swing big.
          </p>
        </SubSection>

        <div className={s.successBox}>
          <div className={s.successLabel}>You've got it when</div>
          <p className={s.successDesc}>
            Correct punish weight 7 out of 10 times. You never launch-attempt safe moves. You never jab-punish launch-punishable moves.
          </p>
        </div>
      </Section>

      <Section title="Drill 3: Stance Transition Recognition">
        <p>
          <strong>Skill trained:</strong> Recognizing whether a stance transition happened on block (you act) or on hit (you hold).
        </p>
        <p>
          <strong>Why it matters:</strong> This is the foundation of the "block = act, hit = hold" principle. It applies to EVERY stance transition, not just specific moves.
        </p>

        <SubSection title="Setup">
          <div className={s.slotList}>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 1</span>
              <span className={s.slotDesc}>Victor does <strong>2,1~f</strong> (Perfumer transition) — hold BACK so you block it</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 2</span>
              <span className={s.slotDesc}>Victor does <strong>dash, 2,1~f</strong> (Perfumer) — don't hold back, let it hit</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 3</span>
              <span className={s.slotDesc}>Victor does <strong>f4,2~d</strong> (IAI transition) — hold BACK so you block it</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 4</span>
              <span className={s.slotDesc}>Victor does <strong>WR2</strong> into IAI — don't hold back, let it hit</span>
            </div>
          </div>
        </SubSection>

        <SubSection title="How to Train">
          <p>
            Start with Slots 1 and 2 only. Both end in Perfumer. In Slot 1 you blocked — <strong>launch immediately</strong>. In Slot 2 he hit you — <strong>block and wait</strong>.
          </p>
          <p>
            The visual distinction: when you block, there's a block flash and your character stays solid. When you get hit, there's a hit spark and your character recoils. Train yourself to recognize this in the chaos of the string.
          </p>
        </SubSection>

        <TipBox variant="warning" title="This is harder than it sounds">
          In a real match, strings happen fast and the block/hit distinction can be subtle. Don't rush this drill. It's one of the highest-value things you can train for the Victor matchup.
        </TipBox>

        <div className={s.successBox}>
          <div className={s.successLabel}>You've got it when</div>
          <p className={s.successDesc}>
            You launch blocked Perfumer, challenge blocked IAI, and hold on-hit transitions — correctly distinguishing all four, 7 out of 10 times.
          </p>
        </div>
      </Section>

      <Section title="Drill 4: Step Left in Neutral">
        <p>
          <strong>Skill trained:</strong> Positioning against Victor's linear tools vs respecting his homing options.
        </p>

        <SubSection title="Setup">
          <div className={s.slotList}>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 1</span>
              <span className={s.slotDesc}>Victor does <strong>df1</strong> — linear poke, steppable</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 2</span>
              <span className={s.slotDesc}>Victor does <strong>df2</strong> — linear launcher, steppable</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 3</span>
              <span className={s.slotDesc}>Victor does <strong>db4</strong> — homing, catches step</span>
            </div>
          </div>
        </SubSection>

        <SubSection title="How to Train">
          <p>
            Sidewalk left. If his move whiffs (Slots 1/2), launch the whiff. If his move tracks you (Slot 3), block it. Don't over-drill this one — 5–10 minutes max. Stepping is more about feel and timing than pure recognition.
          </p>
        </SubSection>

        <div className={s.successBox}>
          <div className={s.successLabel}>You've got it when</div>
          <p className={s.successDesc}>
            You're comfortable stepping left and recover-blocking when you see a homing move. You don't get clipped by linear moves because you're committed to standing still.
          </p>
        </div>
      </Section>

      <Section title="Putting It Together">
        <p>
          A good warm-up routine before ranked:
        </p>
        <div className={s.schedule}>
          <div className={s.scheduleRow}>
            <span className={s.scheduleTime}>3 min</span>
            <span className={s.scheduleTask}>Drill 1 (duck the gun) — quick reaction wake-up</span>
          </div>
          <div className={s.scheduleRow}>
            <span className={s.scheduleTime}>5 min</span>
            <span className={s.scheduleTask}>Drill 2 (punish correctly) — calibrate punish weight</span>
          </div>
          <div className={s.scheduleRow}>
            <span className={s.scheduleTime}>5 min</span>
            <span className={s.scheduleTask}>Drill 3 (stance transitions) — sharpen block/hit distinction</span>
          </div>
          <div className={s.scheduleRow}>
            <span className={s.scheduleTime}>2 min</span>
            <span className={s.scheduleTask}>Drill 4 (step left) — quick movement warm-up</span>
          </div>
        </div>
        <p>
          15 minutes total. This isn't about perfection — it's about being warmed up and mentally ready to apply what you've learned.
        </p>
      </Section>
    </Chapter>
  )
}
