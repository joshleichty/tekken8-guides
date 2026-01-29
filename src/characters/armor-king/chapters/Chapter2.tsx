import { Chapter, Section } from '../../../components/guide'
import { MoveCard, TipBox, PracticeBox, Quiz } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Core Pokes"
      intro="Every strong Armor King starts with solid pokes. These are the moves you'll use constantly to check your opponent, create frame advantage, and set up your throws and counter-hit tools."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Continue to Strings"
    >
      <Section title="Your Bread & Butter: df+1">
        <p>
          Like most characters, <span className="highlight">df+1</span> is your go-to mid poke. 
          It's fast, it's safe, and it checks opponents who are being too aggressive.
        </p>

        <MoveCard character="armor-king"
          input="df+1"
          tags={['mid']}
          description="A quick elbow check. This is your 'stop pressing buttons' move. Use it to interrupt pressure, check opponents, and reset to neutral."
          stats={{
            startup: 'i13',
            onBlock: '-3',
            onHit: '+7',
          }}
        />

        <TipBox title="Critical Weakness" variant="warning">
          <p>
            Armor King's df+1 <strong>does not track to either side</strong>. In Tekken 8, it has 
            essentially no tracking. Be aware that opponents can sidestep your primary poke — use 
            homing moves to keep them honest.
          </p>
        </TipBox>

        <h3>The df+1,2 Extension</h3>
        <p>df+1 has a mid-high follow-up. The high can be ducked, but it's useful in certain situations:</p>

        <MoveCard character="armor-king"
          input="df+1,2"
          tags={['mid', 'high', 'Tornado']}
          description={
            <>
              The second hit is a high that can be ducked. On <span className="highlight-secondary">counter hit</span> on 
              the first hit, the full string combos and gives you a Tornado launch. Use sparingly — opponents 
              who know the matchup will duck and launch you.
            </>
          }
          stats={{
            startup: 'i13',
            onBlock: '-6',
            onCH: 'Tornado',
          }}
        />
      </Section>

      <Section title="d+2 — The Safe Mid Poke">
        <MoveCard character="armor-king"
          input="d+2"
          tags={['mid']}
          description={
            <>
              A solid mid poke with great plus frames on hit. On <span className="highlight-secondary">counter hit</span>, 
              you get +13 which guarantees a <span className="highlight">ws+3,1</span> follow-up! This is one of your key moves 
              for pressure.
            </>
          }
          stats={{
            startup: 'i17',
            onBlock: '-5',
            onHit: '+5',
            onCH: '+13',
          }}
        />

        <TipBox title="Counter Hit Follow-up">
          <p>
            When d+2 lands on counter hit, you're +13. This guarantees{' '}
            <span className="highlight">ws+3,1</span> (a heat engager) for significant damage. 
            Learn to recognize the counter hit animation!
          </p>
        </TipBox>
      </Section>

      <Section title="df+4 — The 12-Frame Mid">
        <MoveCard character="armor-king"
          input="df+4"
          tags={['mid']}
          description="Your fastest mid poke. Great for checking buttons and as a safe i12 block punish. Gives excellent +7 on hit."
          stats={{
            startup: 'i12',
            onBlock: '-4',
            onHit: '+7',
          }}
        />
      </Section>

      <Section title="Homing Pokes">
        <p>Since df+1 doesn't track, you need homing moves to stop sidesteppers. Here are your key options:</p>

        <MoveCard character="armor-king"
          input="b+3+4"
          tags={['mid', 'homing']}
          description="Your go-to homing mid. Safe at -9, knocks down on hit for oki. Use this when you suspect your opponent is stepping."
          stats={{
            startup: 'i20',
            onBlock: '-9',
            onHit: '+12a KND',
          }}
        />

        <MoveCard character="armor-king"
          input="ub+1"
          tags={['high', 'homing']}
          description={
            <>
              A homing high that's <span className="highlight">+5 on block</span>! Knocks down on hit for 
              a guaranteed f+1+4 shoulder. Does chip damage too. Very strong move — but be careful, it's a high.
            </>
          }
          stats={{
            startup: 'i24',
            onBlock: '+5',
            onHit: '+39d KND',
          }}
        />

        <TipBox title="ub+1 Setup">
          <p>
            When ub+1 is blocked (+5), you're in prime position for a throw mixup. Your opponent 
            must respect Giant Swing / Tombstone, which sets up your mids. This is a core AK pressure tool.
          </p>
        </TipBox>
      </Section>

      <PracticeBox
        title="Poke Practice — Learning Your Tools"
        setup="Set the dummy to Guard All. Position at roughly range 1-2 (close but not point blank). We're building muscle memory for your pokes."
        tasks={[
          { id: 'ch2-df1', text: 'Do df+1 and watch the frame data show -3', detail: 'This is your "reset" poke — safe on block', type: 'counter', target: 15 },
          { id: 'ch2-d2', text: "Do d+2 — notice it's also safe at -5", detail: 'This gives amazing +5 on hit for pressure', type: 'counter', target: 15 },
          { id: 'ch2-df4', text: "Do df+4 — your fastest mid at i12", detail: 'Great for checking and as a punish', type: 'counter', target: 10 },
          { id: 'ch2-homing', text: 'Do b+3+4 (homing mid)', detail: 'This is your anti-sidestep tool — memorize the motion', type: 'counter', target: 10 },
          { id: 'ch2-ub1', text: 'Do ub+1 (plus on block homing high)', detail: 'Note the +5 on block — this sets up throws!', type: 'counter', target: 10 },
        ]}
      />

      <Quiz
        question="You've been poking with df+1 but your opponent keeps sidestepping it successfully. What should you do?"
        options={[
          { text: 'Keep doing df+1 — it should track eventually', isCorrect: false },
          { text: 'Mix in b+3+4 or ub+1 to catch their sidestep', isCorrect: true },
          { text: 'Only use jabs from now on', isCorrect: false },
          { text: 'Stop poking and only go for throws', isCorrect: false },
        ]}
        correctFeedback="Correct! Armor King's df+1 doesn't track, so you need homing moves like b+3+4 (safe mid) or ub+1 (+5 on block high) to punish steppers."
        incorrectFeedback="Not quite. Since df+1 has no tracking, you need to use homing moves to catch sidesteppers. b+3+4 is your safe mid homing option."
      />
    </Chapter>
  )
}
