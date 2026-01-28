import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  InputNotation
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Your First 10 Minutes"
      intro="Let's get you playing Bryan immediately. This chapter gives you 3 essential moves that form the foundation of everything else. Master these before moving on."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Movement"
    >
      <Section title="The Three Pillars">
        <p>
          Every Bryan player, from beginner to world champion, uses these three moves constantly. 
          Learn them first, and you have a functional Bryan.
        </p>

        <KeyConcept title="Your First Three Moves" icon="🎯">
          <ul>
            <li><strong>qcb+1</strong> — Your best button. Period.</li>
            <li><strong>3+4</strong> — Mid-range monster. Safe CH launcher.</li>
            <li><strong>qcb+3</strong> — Hatchet kick. One of the best lows in Tekken.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Why Just Three?">
          Information overload kills learning. These three moves cover keepout, counter-hits, 
          and lows — the core of Bryan's game. Everything else builds on this foundation.
        </TipBox>
      </Section>

      <Section title="Move 1: qcb+1">
        <MoveCard
          move={{
            input: 'qcb+1',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i13-14',
            onBlock: '+5',
            onHit: '+36a (+28)',
            onCH: '+72a (+56)',
            tags: ['High', 'CH Launcher', 'Plus on Block', 'Keepout'],
            description: 'Bryan\'s single best move. Plus on block, knocks down on hit, launches on CH. Use it constantly.',
            notes: [
              'Chip damage on block (6)',
              'Free qcb+4 or qcf+1+2 on hit',
              'Huge range and excellent recovery'
            ]
          }}
        />

        <SubSection title="Why This Move is Broken">
          <p>
            <span className="highlight">qcb+1 is arguably the best move in Tekken 8.</span> Here's why:
          </p>
          <ul>
            <li><strong>+5 on block</strong> — You're at advantage even when they block it</li>
            <li><strong>i13-14 startup</strong> — Incredibly fast for what it does</li>
            <li><strong>Massive range</strong> — Controls space you wouldn't expect</li>
            <li><strong>Great recovery</strong> — Safe to throw out</li>
            <li><strong>Knockdown on normal hit</strong> — Free followup with qcb+4</li>
            <li><strong>Full launch on CH</strong> — Massive damage</li>
          </ul>
        </SubSection>

        <SubSection title="Execution">
          <InputNotation notation="↓ ↙ ← + 1" size="large" />
          <p>
            This is a quarter-circle back motion plus 1 (left punch). Roll from down to back 
            in a smooth arc, then press 1.
          </p>

          <TipBox variant="tip" title="Common Mistake">
            New players input this too slowly. The quarter-circle should be <strong>one fluid motion</strong>, 
            not three separate directions. Practice until you can do it from standing instantly.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Move 2: 3+4">
        <MoveCard
          move={{
            input: '3+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i18',
            onBlock: '-13',
            onHit: '+8',
            onCH: '+59a',
            tags: ['Mid', 'CH Launcher', 'Keepout', 'Safe (pushback)'],
            description: 'Your mid-range CH launcher. -13 but pushes back so far it\'s effectively safe.',
            notes: [
              'Massive range',
              'Safe due to pushback on block',
              'Full combo on counter-hit',
              'Balcony break on airborne hit'
            ]
          }}
        />

        <SubSection title="The Mid-Range Monster">
          <p>
            3+4 is <span className="highlight">why opponents fear Bryan at range 2</span>. It's a mid 
            that counter-hit launches, has massive range, and is practically unpunishable because 
            of pushback.
          </p>

          <KeyConcept title="When to Use 3+4" icon="📍">
            <ul>
              <li><strong>When the opponent dashes in</strong> — They run into it and eat a full combo</li>
              <li><strong>To check button presses</strong> — If they press after your poke, they get launched</li>
              <li><strong>At round start</strong> — Catches aggressive players</li>
              <li><strong>After creating space</strong> — Backdash → 3+4</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <TipBox variant="warning" title="Don't Spam It">
          3+4 is -13 on block. While pushback usually saves you, some characters can still punish 
          it. Use it as a <strong>read</strong>, not a spam button. Observe when opponents like to 
          press, then time your 3+4 to catch them.
        </TipBox>
      </Section>

      <Section title="Move 3: qcb+3 (Hatchet Kick)">
        <MoveCard
          move={{
            input: 'qcb+3',
            hitLevel: ['l'],
            damage: '23',
            startup: 'i19-20',
            onBlock: '-13',
            onHit: '+5',
            onCH: '+26a',
            tags: ['Low', 'Power Low', 'Plus on Hit', 'Tracking'],
            description: 'One of the best lows in Tekken. Huge damage, plus on hit, great tracking.',
            notes: [
              'Balcony break on airborne hit',
              'Free qcb+4 on counter-hit',
              '+5 on normal hit starts your offense'
            ]
          }}
        />

        <SubSection title="The Power Low">
          <p>
            Hatchet kick is <span className="highlight">23 damage, plus on hit, and tracks</span>. 
            For context, most lows do 10-15 damage and leave you minus. This low is absurd.
          </p>

          <KeyConcept title="Why Hatchet is Elite" icon="💥">
            <ul>
              <li><strong>23 damage</strong> — More than most jabs + follow-up</li>
              <li><strong>+5 on hit</strong> — You're at advantage after landing it</li>
              <li><strong>Great tracking</strong> — Catches sidesteps</li>
              <li><strong>Mini combo on CH</strong> — qcb+3 CH → qcb+4 guaranteed (45 damage!)</li>
              <li><strong>-13 on block</strong> — Risky, but the reward is massive</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <TipBox variant="tip" title="Use It Liberally">
          Unlike unsafe snake edges, hatchet kick's risk/reward is excellent. Even if blocked, you 
          only eat a ws4 (~16 damage). If it hits, you get 23 damage AND plus frames. 
          <strong>Use it to open up turtles.</strong>
        </TipBox>
      </Section>

      <Section title="Putting It All Together">
        <p>
          With just these three moves, you have a complete gameplan:
        </p>

        <KeyConcept title="Basic Bryan Flow" icon="🔄">
          <ol>
            <li><strong>At mid-range:</strong> Throw out qcb+1 and 3+4 to control space</li>
            <li><strong>If they block:</strong> You're +5 from qcb+1, continue pressure</li>
            <li><strong>If they press:</strong> 3+4 catches them for a full combo</li>
            <li><strong>If they turtle:</strong> Hatchet kick (qcb+3) chips them down</li>
            <li><strong>Repeat</strong></li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice This">
          Go into practice mode and try playing with <strong>only these three moves</strong> for 
          a few rounds. You'll discover they're genuinely enough to compete. The skill isn't in 
          knowing more moves — it's in choosing the right one.
        </TipBox>
      </Section>

      <Section title="Chapter Summary">
        <p>
          You now have the foundation of Bryan's game:
        </p>
        <ul>
          <li><strong>qcb+1</strong> — Your best button. +5 on block, knockdown on hit.</li>
          <li><strong>3+4</strong> — Your approach stopper. CH launches.</li>
          <li><strong>qcb+3</strong> — Your low game. Opens up blockers.</li>
        </ul>
        <p>
          If you can do the above, you already play better Bryan than most beginners who know 
          20 moves but don't understand when to use them. Next, we'll add movement to make 
          these tools even more dangerous.
        </p>
      </Section>
    </Chapter>
  )
}
