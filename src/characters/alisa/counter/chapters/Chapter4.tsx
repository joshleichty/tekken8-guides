import { Chapter, Section, SubSection } from '../../../../components/guide'
import { KeyConcept } from '../../../../components/ui/KeyConcept'
import { TipBox } from '../../../../components/ui/TipBox'
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
      title="Training"
      intro="Every drill here requires you to see something different and respond differently. No single-option drills. No 50/50 guessing. If you can pass these drills, you can handle Alisa in ranked."
      onPrevious={() => goToChapter(3)}
      hasNext={false}
      nextLabel="Finish"
    >
      <Section title="Before You Start">
        <KeyConcept title="Why These Drills Work" icon="📐">
          <ul>
            <li><strong>Every drill has 2+ recordings</strong> with different correct responses. If there's only one, your brain learns timing, not recognition.</li>
            <li><strong>No 50/50 drills.</strong> If two options look identical, drilling them is just coin-flipping. We skip those.</li>
            <li><strong>The brain takes shortcuts.</strong> If one response beats everything, that's all you'll learn. Each drill forces different responses to different stimuli.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Practice mode setup">
          Practice Settings: turn off Player Heat and Opponent Heat. Display Settings: hide attack info and frame data — you want to see what you'd see in a real match. Keep Command History on.
        </TipBox>
      </Section>

      <Section title="Drill 1: The df1 Spin Read">
        <p>
          <strong>Skill trained:</strong> Distinguishing df1,1,2 (duck and launch) from df1,4 (block and punish) by the 360-degree spin animation.
        </p>
        <p>
          <strong>Why it matters:</strong> df1,1,2 on block is +6 into DES — one of her best transitions. df1,4 is -11. If you can distinguish these, you either launch her or punish her every time. She loses the string entirely.
        </p>

        <SubSection title="Setup">
          <div className={s.slotList}>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 1</span>
              <span className={s.slotDesc}>Alisa does <strong>df1,1,2</strong> (mid, high, high → DES) then holds back</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 2</span>
              <span className={s.slotDesc}>Alisa does <strong>df1,4</strong> (mid, mid) then holds back</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 3</span>
              <span className={s.slotDesc}>Alisa does <strong>df1</strong> alone then holds back</span>
            </div>
          </div>
        </SubSection>

        <SubSection title="How to Train">
          <p>
            Block the first hit (df1). Watch for the spin. If she starts rotating — <strong>duck and launch</strong>. If she does the quick mid kick (df1,4) — <strong>stay standing, punish at -11</strong>. If she stops after df1 alone — <strong>take your turn, she's -1</strong>.
          </p>
          <p>
            Start with Slots 1 and 2 only. Get the spin recognition down. Then add Slot 3 to practice not over-committing when she stops early.
          </p>
        </SubSection>

        <div className={s.successBox}>
          <div className={s.successLabel}>You've got it when</div>
          <p className={s.successDesc}>
            You duck every df1,1,2 and never duck df1,4. Correct response 8 out of 10 times. The spin should look obvious to you.
          </p>
        </div>
      </Section>

      <Section title="Drill 2: 3,2 Duck vs Block">
        <p>
          <strong>Skill trained:</strong> Recognizing whether to duck the second hit of 3-strings or stand and punish.
        </p>
        <p>
          <strong>Why it matters:</strong> 3,2 is one of her main heat engagers and constantly used. Ducking it is a free launch. But she has 3,f2 (mid-mid, -12) as the mix. You need to see which one it is.
        </p>

        <SubSection title="Setup">
          <div className={s.slotList}>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 1</span>
              <span className={s.slotDesc}>Alisa does <strong>3,2</strong> (mid, high → DES) then holds back</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 2</span>
              <span className={s.slotDesc}>Alisa does <strong>3,f2</strong> (mid, mid → DES) then holds back</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 3</span>
              <span className={s.slotDesc}>Alisa does <strong>3</strong> alone then holds back</span>
            </div>
          </div>
        </SubSection>

        <SubSection title="How to Train">
          <p>
            Block the first hit (the kick). Watch the second hit. 3,2 has a distinct upward gun-arm animation — <strong>duck and launch</strong>. 3,f2 has a forward-thrusting mid — <strong>block and punish (-12)</strong>. If she stops after 3 alone, take your turn.
          </p>
        </SubSection>

        <div className={s.successBox}>
          <div className={s.successLabel}>You've got it when</div>
          <p className={s.successDesc}>
            You duck 3,2 and stand-block 3,f2 correctly 7 out of 10 times. If this is hard, just blocking both is fine — 3,2 is only -2 and 3,f2 is -12.
          </p>
        </div>
      </Section>

      <Section title="Drill 3: Interrupt Chainsaw Transitions">
        <p>
          <strong>Skill trained:</strong> Recognizing when you can act after blocking a DES transition vs when you have to hold.
        </p>
        <p>
          <strong>Why it matters:</strong> This is the "hit her out of chainsaws" principle in action. Most transitions are minus. Pressing a mid after them ends the stance immediately. But WR2 is +5 — pressing there gets you counter-hit.
        </p>

        <SubSection title="Setup">
          <div className={s.slotList}>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 1</span>
              <span className={s.slotDesc}>Alisa does <strong>3,2</strong> into DES, then DES f1 — you should <strong>interrupt between with df1</strong></span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 2</span>
              <span className={s.slotDesc}>Alisa does <strong>f2,1</strong> into DES, then DES f1 — you should <strong>interrupt between with df1</strong></span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 3</span>
              <span className={s.slotDesc}>Alisa does <strong>WR2</strong> into DES, then DES f1 — you should <strong>block both</strong> (she's +5)</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 4</span>
              <span className={s.slotDesc}>Alisa does <strong>1,1</strong> into DES, then DES f1 — you should <strong>block both</strong> (she's -3 but pushback makes df1 whiff, just block)</span>
            </div>
          </div>
        </SubSection>

        <SubSection title="How to Train">
          <p>
            Start with Slots 1 and 3 — the clearest contrast. After 3,2 (minus), press df1 immediately. After WR2 (plus), block. The visual distinction: WR2 is a running high where she dashes in. 3,2 is a close-range kick string. Very different animations.
          </p>
          <p>
            Once you're solid, add Slots 2 and 4. f2,1 is -10 — always interrupt. 1,1 is tricky — she's only -3 but the pushback makes some mids whiff. Safest to block.
          </p>
        </SubSection>

        <div className={s.successBox}>
          <div className={s.successLabel}>You've got it when</div>
          <p className={s.successDesc}>
            You interrupt minus transitions and block plus transitions 7 out of 10 times. Your command history shows clean df1 inputs after minus transitions, and clean blocks after WR2.
          </p>
        </div>
      </Section>

      <Section title="Drill 4: DES Defense Mix">
        <p>
          <strong>Skill trained:</strong> Handling the core chainsaw pressure — DES f1 loops, sidewalking, and recognizing the low.
        </p>
        <p>
          <strong>Why it matters:</strong> This simulates actual chainsaw pressure where you have to choose between blocking, stepping, and eating a low. The low (DES d1) is the only option you can't step left — and it does less damage than the mids.
        </p>

        <SubSection title="Setup">
          <div className={s.slotList}>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 1</span>
              <span className={s.slotDesc}>Alisa does <strong>DES f1, DES f1</strong> (the f1 loop) then holds back</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 2</span>
              <span className={s.slotDesc}>Alisa does <strong>DES 1+2</strong> (homing mid) then holds back</span>
            </div>
            <div className={s.slot}>
              <span className={s.slotLabel}>Slot 3</span>
              <span className={s.slotDesc}>Alisa does <strong>DES d1</strong> (low) then holds back</span>
            </div>
          </div>
        </SubSection>

        <SubSection title="How to Train">
          <p>
            Set Alisa in DES at +3 (after a blocked DES f1). Your options: <strong>sidewalk left</strong> (beats Slot 1 and partial coverage on Slot 2) or <strong>stand block</strong> (safe against everything, eats the low for small damage).
          </p>
          <p>
            The real skill: after blocking two f1s, <strong>back dash</strong>. This gets you out of range and resets the situation. If she does 1+2 (homing), you block it at range and the pushback means she can't follow up. If she does d1, you eat a 12-damage low — acceptable.
          </p>
          <p>
            Don't try to duck the low. The risk/reward is terrible. Block, step, back dash — never duck.
          </p>
        </SubSection>

        <div className={s.successBox}>
          <div className={s.successLabel}>You've got it when</div>
          <p className={s.successDesc}>
            You consistently escape the f1 loop with a back dash. You don't duck. You don't get launched by mids. Eating the occasional low is fine.
          </p>
        </div>
      </Section>

      <Section title="Warm-Up Routine">
        <p>
          Before queuing into ranked against Alisa:
        </p>
        <div className={s.schedule}>
          <div className={s.scheduleRow}>
            <span className={s.scheduleTime}>3 min</span>
            <span className={s.scheduleTask}>Drill 1 (df1 spin read) — wake up the visual recognition</span>
          </div>
          <div className={s.scheduleRow}>
            <span className={s.scheduleTime}>3 min</span>
            <span className={s.scheduleTask}>Drill 2 (3,2 duck) — calibrate the duck timing</span>
          </div>
          <div className={s.scheduleRow}>
            <span className={s.scheduleTime}>5 min</span>
            <span className={s.scheduleTask}>Drill 3 (interrupt transitions) — build the "act vs hold" instinct</span>
          </div>
          <div className={s.scheduleRow}>
            <span className={s.scheduleTime}>4 min</span>
            <span className={s.scheduleTask}>Drill 4 (DES defense) — practice the back dash escape</span>
          </div>
        </div>
        <p>
          15 minutes. This isn't about getting perfect — it's about having the patterns fresh in your head when you queue in.
        </p>
      </Section>

      <Section title="What This Guide Didn't Cover">
        <p>
          Being honest about what's left:
        </p>
        <div className={s.phaseList}>
          <div className={s.readCard}>
            <div className={s.readTitle}>Wall 50/50s</div>
            <p className={s.readDesc}>True guesses after wall combos. Not drillable. Eat the low, it does less damage. The real answer is wall awareness — don't get carried there.</p>
          </div>
          <div className={s.readCard}>
            <div className={s.readTitle}>d3 reaction</div>
            <p className={s.readDesc}>Her d3 low is 23 frames. Some people say reactable, others don't. If you can react, launch it (-15 effective). If you can't, step or sidewalk at range to avoid it entirely.</p>
          </div>
          <div className={s.readCard}>
            <div className={s.readTitle}>Advanced DES movement</div>
            <p className={s.readDesc}>Good Alisas use back dash, forward dash, and command sidestep in DES to bait your buttons. At this point you're fighting the player. Watch their habits and adapt.</p>
          </div>
          <div className={s.readCard}>
            <div className={s.readTitle}>Character-specific answers</div>
            <p className={s.readDesc}>Some characters have power crushes from crouch that beat all DES options at +5. Some have tracking mids that catch the command sidestep. Lab your character's tools against DES specifically.</p>
          </div>
        </div>

        <div className={s.summaryCard}>
          <p>
            Alisa's reputation is worse than her reality. She has weak lows, mediocre frames in neutral, and a stance that <em>disappears when she blocks anything</em>. The matchup is won by patience, mid-checking, and refusing to duck. Stand block, press df1 when it's your turn, back dash when the f1 loop pushes you out, and punish every unsafe transition. She will hand you free damage constantly if you know what to look for.
          </p>
        </div>
      </Section>
    </Chapter>
  )
}
