import { Chapter, Section, SubSection } from '../../../../components/guide'
import { MoveCard } from '../../../../components/ui/MoveCard'
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
      title="The Chainsaw Blender"
      intro="This is the chapter most people need. Destructive Form (DES) is what makes people hate Alisa. But once you understand its structure, it stops being chaos and starts being a solvable problem."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
    >
      <Section title="The One Rule That Changes Everything">
        <div className={s.summaryCard}>
          <p>
            <strong>If Alisa blocks anything while in Destructive Form, the chainsaws retract.</strong> She goes back to normal stance. All the plus frames, all the chip damage, all the frame traps — gone. One blocked hit ends it.
          </p>
          <p>
            This means your primary goal in DES isn't to "defend against chainsaws." It's to <strong>find a window to press a button</strong>. Even if she blocks it, you win — because she's out of stance.
          </p>
        </div>
      </Section>

      <Section title="How She Gets In">
        <p>
          The frame situation when Alisa enters DES depends entirely on what move she transitioned from. This determines whether you can immediately act or have to hold.
        </p>

        <div className={s.transitionList}>
          <div className={`${s.transitionItem} ${s.respect}`}>
            <span className={s.transitionLabel}>RESPECT (+5)</span>
            <span className={s.transitionMoves}>WR2 / 1,1 / FC 1+2 — she's plus. Don't press. Block and wait for your window.</span>
          </div>
          <div className={`${s.transitionItem} ${s.challenge}`}>
            <span className={s.transitionLabel}>CHALLENGE (-2 to -4)</span>
            <span className={s.transitionMoves}>3,2 / uf2 / f2,1 / f2,3 / b4,3 — she's minus. Your 13f mid interrupts everything.</span>
          </div>
          <div className={`${s.transitionItem} ${s.launch}`}>
            <span className={s.transitionLabel}>PUNISH (-10 or worse)</span>
            <span className={s.transitionMoves}>f3,1+2 (-33) / DES f1+2,1+2 (-53) / b1+2 (-13) / df1,1,2 (duck 2nd) — launch or heavy punish.</span>
          </div>
        </div>

        <TipBox variant="tip" title="The simple version">
          If you blocked the transition: act. The vast majority of DES transitions are minus. Only WR2, 1,1, and FC 1+2 are plus — everything else is your turn. A quick df1 will interrupt her options and force her out of chainsaws.
        </TipBox>

        <SubSection title="Special Case: df1,1,2 (+6 on block)">
          <p>
            This string is +6 into DES on block, making it her best transition. However, the second and third hits are both high — you can duck them and launch. If she does df1,4 (the mid mix) instead, it's -11. See Chapter 2 for the visual cue (360 spin = duck).
          </p>
        </SubSection>
      </Section>

      <Section title="Inside the Chainsaw Blender">
        <p>
          You're in DES. She's at some frame advantage. Here's what she has and what to do about it.
        </p>

        <SubSection title="Her Key DES Moves">
          <MoveCard character="alisa" move={{
            input: 'DES f1',
            hitLevel: ['h'],
            damage: '10',
            startup: '11',
            onBlock: '+3',
            onHit: '+9',
            tags: ['high', 'plus on block'],
            description: 'Her fastest DES move. 11 frames, +3 on block. This is her ONLY frame trap from stance. Two f1s in a row frame-traps you. It\'s a high — but ducking is risky because of her mids.',
            notes: ['Tracks step RIGHT', 'Steppable LEFT'],
          }} showVideo videoId="DES.f+1" />

          <MoveCard character="alisa" move={{
            input: 'DES 1+2',
            hitLevel: ['m'],
            damage: '22',
            startup: '16',
            onBlock: '+4',
            onHit: 'KND',
            tags: ['mid', 'homing', 'plus on block'],
            description: 'Homing mid. 16 frames, +4 on block. This is why you can\'t always step. At range it has pushback — back dash after blocking to escape. At the wall, she gets frame traps from this.',
          }} showVideo videoId="DES.1+2" />

          <MoveCard character="alisa" move={{
            input: 'DES d1',
            hitLevel: ['l'],
            damage: '12',
            startup: '21',
            onBlock: '-12',
            onHit: '+3 (FC)',
            tags: ['low'],
            description: 'Her main chainsaw low. 21 frames, -12 on block. Steppable left. The damage is mediocre. This is why you stand block — eating this is way better than eating a mid launcher.',
          }} showVideo videoId="DES.d+1" />

          <MoveCard character="alisa" move={{
            input: 'DES d2',
            hitLevel: ['l'],
            damage: '20',
            startup: '22',
            onBlock: '-14',
            onHit: '+4 (FC)',
            tags: ['low', 'homing'],
            description: 'Homing low. -14 on block — some characters can launch it. This is her answer to stepping left. But it\'s 22 frames and takes her out of DES. Higher risk for her.',
          }} showVideo videoId="DES.d+2" />

          <MoveCard character="alisa" move={{
            input: 'DES b2,1',
            hitLevel: ['m', 'm'],
            damage: '15, 18',
            startup: '18',
            onBlock: '-3 (FC)',
            onHit: 'KND',
            tags: ['mid', 'homing'],
            description: 'Effectively homing mid at 18 frames. -3 on block, leaves her crouching. This catches people stepping left. But at 18f, a 12f mid beats it clean.',
          }} showVideo videoId="DES.b+2,1" />
        </SubSection>

        <SubSection title="The Practical Flowchart">
          <p>At the frame situations you'll actually face:</p>

          <div className={`${s.decisionBlock} ${s.negative}`}>
            <div className={s.decisionLabel}>She's +5 (WR2, 1,1, FC 1+2)</div>
            <div className={s.decisionContent}>
              <ul>
                <li><strong>Sidewalk LEFT</strong> beats DES 1 (her next likely move), f1+2, f2,1,2, and more.</li>
                <li><strong>DES f1</strong> tracks RIGHT, so walking left dodges it too.</li>
                <li><strong>DES 1+2 and DES b2,1</strong> are homing but 16f and 18f — you can power crush or rage art through them.</li>
                <li>Her lows are 21f+ so even at +5, a <strong>12f mid will trade favorably or beat every low.</strong></li>
              </ul>
            </div>
          </div>

          <div className={`${s.decisionBlock} ${s.positive}`}>
            <div className={s.decisionLabel}>She's -2 to -4 (most transitions)</div>
            <div className={s.decisionContent}>
              <ul>
                <li><strong>Press df1</strong> (or your fastest mid). At -2 to -3, your 13f mid interrupts everything she can do — or trades favorably with DES f1.</li>
                <li>Even if she absorbs your df1 with her power crush (df1+2), you still have time to block and punish the power crush.</li>
                <li>Hitting her — even on block — <strong>forces her out of DES.</strong> You win.</li>
              </ul>
            </div>
          </div>

          <KeyConcept title="The DES f1 Loop Problem" icon="🔄">
            <p>
              After DES f1 hits (+9), she can loop into another f1 — frame trap. After f1 is blocked (+3), another f1 is still a frame trap (11f move at +3 = i8 effective). Two blocked f1s creates enough pushback that <strong>one back dash puts you out of range</strong> of most follow-ups. This is the escape valve. Block, block, back dash.
            </p>
          </KeyConcept>
        </SubSection>
      </Section>

      <Section title="DES Movement Tricks">
        <p>
          Better Alisa players don't just press buttons in DES. They use evasive movement.
        </p>

        <SubSection title="The Super Sidestep (ub/uf 3+4)">
          <p>
            Alisa has a command sidestep in DES that's extremely evasive, with a -13 follow-up. The answer: <strong>use a tracking move</strong> or dash to realign. If you see her do the evasive hop, she's committed — whatever she does next is minus.
          </p>
        </SubSection>

        <SubSection title="DES Back Dash and Forward Dash">
          <p>
            In Season 2, Alisa can back dash and forward dash in DES, which mixes up timing. This makes the "just press df1" answer harder against good Alisas because she can bait your button and whiff punish. At this point, you're fighting the player, not the character — mix up your timing, watch their habits.
          </p>
        </SubSection>
      </Section>

      <Section title="Flying Moves">
        <p>
          When Alisa flies toward you from DES, it looks scary but is mostly interruptible.
        </p>

        <KeyConcept title="13f mid beats everything" icon="✈️">
          <p>
            A 13-frame mid (df1 for most characters) can interrupt <strong>all</strong> of her flying approach options. The flying low is too slow to crush your mid. The flying 1+2 is technically steppable but hard to time. Just press a quick mid when you see her start flying — even on block, she leaves DES.
          </p>
          <p>
            Exception: at long range, DES flying 1+2 (Dual Boot 1+2) is extremely hard to challenge. Use armor or heat burst to deal with it. Alisa can counter-read this with Boot 4 (CH launcher), but if you have rage, rage art beats everything.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Wall Situations">
        <p>
          Alisa's wall game is genuinely strong and involves true guesses. Be honest about this.
        </p>

        <div className={s.phaseList}>
          <div className={s.readCard}>
            <div className={s.readTitle}>Wall combo → b3,4~DES or f2,3~DES</div>
            <p className={s.readDesc}>True 50/50: DES low or DES mid. Can't interrupt after tech. Eat the low if you're guessing — it does less damage. The real answer is don't get carried to the wall.</p>
          </div>
          <div className={s.readCard}>
            <div className={s.readTitle}>b2,4 wall setup</div>
            <p className={s.readDesc}>After wall combo ending in b2,4: if you tech, she gets a resplat with the follow-up. Stay down or tech roll LEFT to avoid it.</p>
          </div>
          <div className={s.readCard}>
            <div className={s.readTitle}>Heat smash → flying mixup</div>
            <p className={s.readDesc}>After heat smash at wall, she flies toward you. Block by default — the unblockable (Boot 1+2) is reactable at 27 frames. Duck it on reaction.</p>
          </div>
        </div>

        <TipBox variant="warning" title="Wall = Alisa's win condition">
          The wall is where Alisa gets truly oppressive 50/50s you can't solve with knowledge. Everything else in this guide helps you avoid getting there. Use movement, don't get backed up, and if you end up there — accept the guess and move on.
        </TipBox>
      </Section>
    </Chapter>
  )
}
