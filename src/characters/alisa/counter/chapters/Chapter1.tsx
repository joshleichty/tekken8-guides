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
      title="The Alisa Problem"
      intro="Alisa feels overwhelming because chainsaws look like chaos. They're not. This chapter strips away the noise and gives you the mental model that makes everything else simple."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
    >
      <Section title="What Alisa Wants">
        <p>
          Alisa is a <strong>movement and stance character</strong>. Her neutral game is about creating space, baiting whiffs, and punishing you for overextending. But the thing people actually hate — the thing that makes ranked miserable — is <em>Destructive Form</em> (chainsaws).
        </p>
        <p>
          In chainsaws, Alisa gets plus-frame mids, chip damage, tracking options, and frame traps that make you feel like you can't do anything. Her entire gameplan builds toward getting into this stance and pressuring you inside it.
        </p>
        <p>
          But here's the thing most people never learn: <strong>Alisa's chainsaws disappear the moment she blocks something.</strong> Hit her — even if she blocks it — and the chainsaws retract. This one fact changes the entire matchup.
        </p>
        <p>
          Outside of chainsaws, Alisa is surprisingly honest. Her lows are bad. Her frames are mediocre (-1 to -5 on most key moves). She relies on your fear and your passivity far more than she relies on actually safe pressure.
        </p>
      </Section>

      <Section title="Three Things That Matter">
        <p>
          Before any drilling, any frame data, any string knowledge — these three pieces of knowledge cover the majority of the Alisa matchup. Just knowing them, with no practice, makes you dramatically better.
        </p>

        <div className={s.ruleGrid}>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>🪚</span>
            <span className={s.ruleTitle}>Hit Her Out of Chainsaws</span>
            <p className={s.ruleDesc}>
              If Alisa is in Destructive Form and <strong>she blocks any attack you throw</strong>, the chainsaws retract. She returns to normal stance. The entire chainsaw pressure ends. This means your goal isn't to "solve" chainsaws — it's to hit her.
            </p>
            <p className={s.ruleNote}>
              Most chainsaw transitions are minus on block. A simple 13f mid (df1) interrupts most of her options and forces her out of stance.
            </p>
          </div>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>🧱</span>
            <span className={s.ruleTitle}>Stand Block by Default</span>
            <p className={s.ruleDesc}>
              Alisa does not have scary lows to open you up. Her dangerous moves are all mids. If you duck against chainsaws you will eat enormous damage. <strong>Stand block and be patient.</strong> The lows she has are either slow, low damage, or both.
            </p>
            <p className={s.ruleNote}>
              This is the opposite of what your instincts tell you. Every pro guide says the same thing: against Alisa, just block.
            </p>
          </div>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>🔄</span>
            <span className={s.ruleTitle}>Direction Flips: SSR Neutral, SWL Chainsaws</span>
            <p className={s.ruleDesc}>
              In neutral, <strong>step RIGHT</strong> to avoid hopkick, df2, df1, f2, b1, d4, db4, and more. Against chainsaws, <strong>sidewalk LEFT</strong> to avoid DES 1, DES f2,1,2, DES f1+2, and most options. Opposite directions for opposite stances.
            </p>
            <p className={s.ruleNote}>
              Exception: DES f1 (her fastest chainsaw move) tracks left. DES b2,1 is homing. See Chapter 3.
            </p>
          </div>
          <div className={s.ruleCard}>
            <span className={s.ruleIcon}>⚡</span>
            <span className={s.ruleTitle}>Most Chainsaw Transitions Are Punishable</span>
            <p className={s.ruleDesc}>
              Almost every move that puts Alisa into chainsaws is unsafe or launch punishable on block. If you blocked the transition, <strong>punish it</strong>. Don't let her enter chainsaws for free.
            </p>
            <p className={s.ruleNote}>
              Key exceptions: WR2 (+5), 1,1 (-3 with pushback), FC 1+2 (+5). These are the ones you have to respect.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="How much is this worth?">
          Just knowing these three things — don't duck, hit her out of chainsaws, and punish unsafe transitions — makes you better against Alisa than memorizing her entire movelist. This is pure knowledge. No drilling needed.
        </TipBox>
      </Section>

      <Section title="Her Gameplan in 60 Seconds">
        <p>
          Understanding what Alisa is <em>trying to do</em> at each stage of a round tells you what to look for. She has a clear flow:
        </p>

        <Collapsible title="The Match Flow" defaultOpen>
          <div className={s.phaseList}>
            <div className={s.phaseCard}>
              <div className={s.phaseLabel}>Range 3 — Keepout</div>
              <p className={s.phaseDesc}>
                Alisa wants you to come to her. Her uf2 is a long-range homing high heat engager that checks your approach. d3 is a long-range low that's borderline reactable. f1+2 is a tracking mid. She fishes for whiffs with movement and punishes with df2 or b4.
              </p>
            </div>
            <div className={s.phaseCard}>
              <div className={s.phaseLabel}>Range 1–2 — Conditioning</div>
              <p className={s.phaseDesc}>
                f2 is her most important neutral tool. She does f2, then watches. Did you press? She steps and launches your whiff. Did you stand still? She transitions to DES and starts pressure. Did you step? She uses a tracking option. f2 is a conditioning tool, not a combo starter.
              </p>
            </div>
            <div className={s.phaseCard}>
              <div className={s.phaseLabel}>Chainsaw Pressure</div>
              <p className={s.phaseDesc}>
                Once in DES, she loops f1 (+3 on block, 11f — her only real frame trap), mixes with the homing 1+2 mid (+4) and DES d1/d2 lows, and uses evasive movement (ub/uf 3+4). Your job: interrupt with a mid, sidewalk left, or use armor. Don't duck.
              </p>
            </div>
            <div className={s.phaseCard}>
              <div className={s.phaseLabel}>Wall</div>
              <p className={s.phaseDesc}>
                This is where Alisa is genuinely scary. After wall combos ending in b3,4~DES or f2,3~DES, she gets a true 50/50 between the DES low and a mid. This is a guess. Eat the low — it does less damage. The goal is to not be at the wall.
              </p>
            </div>
          </div>
        </Collapsible>
      </Section>

      <Section title="Play as Alisa (10 Minutes)">
        <p>
          The point of this exercise is simple: <strong>you need to see Alisa's animations from the other side.</strong> When you're defending, everything happens fast. By doing these moves yourself, slowly, you'll recognize them instantly when they're used against you. You don't need to know Alisa. You just need to see what her moves look like.
        </p>
        <p>
          Go to Practice Mode. Pick Alisa. Set the training dummy to Guard All.
        </p>

        <SubSection title="Step 1: Her Neutral Poke">
          <KeyConcept title="Press: f2" icon="1️⃣">
            <p>
              Tap forward and 2 (right punch). Watch the animation — a quick mid poke. Look at the frame data: you're -4 on block. The dummy doesn't punish you. This is Alisa's main neutral tool. It's safe and it probes.
            </p>
            <p>
              Now press <strong>f2,1</strong> (forward+2, then 1). Watch: the first hit is the same poke, but now a second hit comes out and <strong>chainsaws appear on her arms</strong>. She's in Destructive Form. That chainsaw transition animation is what you need to recognize in a match — it means she committed.
            </p>
          </KeyConcept>
        </SubSection>

        <SubSection title="Step 2: Chainsaw Options">
          <KeyConcept title="You're in DES. Press these one at a time:" icon="2️⃣">
            <p>
              Enter chainsaws first: press <strong>d1+2</strong> (down + both punches). Her arms turn into chainsaws. Now you're in Destructive Form (DES). Try each of these moves and <strong>watch what the animation looks like</strong>:
            </p>
            <ul>
              <li><strong>f1</strong> (forward+1) — a quick high swipe. This is her fastest chainsaw move. +3 on block. Do it twice — see how it loops.</li>
              <li><strong>1+2</strong> (both punches) — a big homing mid. Slower, more committal. This is the one that catches people stepping.</li>
              <li><strong>d1</strong> (down+1) — a low poke. Notice how small and unimpressive it is compared to the mids. 12 damage.</li>
              <li><strong>d2</strong> (down+2) — another low, homing. Similar animation but she reaches further.</li>
              <li><strong>f1+2</strong> (forward + both punches) — a big plus-frame mid. Slow (24f) but +5 on block. Watch the big forward lunge.</li>
            </ul>
            <p>
              Now set the dummy to <strong>Stand</strong> (not Guard All). Have the dummy do a jab (record 1). Play it back. Enter chainsaws, then let the dummy jab you. <strong>Watch the chainsaws retract.</strong> One jab — chainsaws gone. This is the most important thing to see. The stance is fragile.
            </p>
          </KeyConcept>
        </SubSection>

        <SubSection title="Step 3: The Strings You'll See">
          <KeyConcept title="Press these and watch the animations:" icon="3️⃣">
            <p>
              Back in normal stance (no chainsaws). Try each string and pay attention to <strong>what the animation looks like</strong> — these are the ones you'll be defending against:
            </p>
            <ul>
              <li><strong>3,2</strong> (left kick, right punch) — mid then high. Watch the second hit: she raises her arm to shoot. That's a duckable high. Now try <strong>3,f2</strong> — mid, mid. See how the second hit looks different? Forward thrust instead of upward arm. That visual difference is what you'll react to.</li>
              <li><strong>df1,1,2</strong> (down-forward+1, then 1, then 2) — mid, high, high into chainsaws. Watch: <strong>her body does a full 360-degree spin</strong>. Now try <strong>df1,4</strong> (down-forward+1, then 4) — mid, mid. No spin. The spin vs no-spin is the visual cue you'll train later.</li>
              <li><strong>d3</strong> (down+3) from range — a long-reaching low kick. See how far it reaches. If you wait a moment after it hits, she goes into backup stance (crouching position with options).</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <TipBox variant="tip" title="What you should take away">
          You've now seen the key animations from the other side. The f2 probe into chainsaw transition. The fragile chainsaws that disappear on block. The 3,2 high vs 3,f2 mid. The df1 spin vs no-spin. The d3 long-range low. When you face these in a match, they won't be visual noise anymore — they'll be things you recognize.
        </TipBox>
      </Section>
    </Chapter>
  )
}
