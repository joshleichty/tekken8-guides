import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Punishment Into Pressure"
      intro="Most characters punish and reset to neutral. Reina punishes and starts a mixup. Every time your opponent makes a mistake, you don't just hurt them — you begin your offense. This chapter teaches you to turn defense into attack."
      hasPrevious
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Heaven's Wrath"
    >
      <Section title="Why Reina's Punishment Matters More">
        <p>
          In Tekken, blocking an unsafe move earns you guaranteed damage. For most characters, that's
          where it ends — you punish, the opponent recovers, and you're back to neutral. Reina is different.
        </p>
        <p>
          Her 10-frame punish goes into Sentai at <strong>+11</strong>. Her 11-frame crouching punish goes
          into Heaven's Wrath at <strong>+6</strong>. Her 13-frame crouching punish goes into Sentai at
          <strong> +13</strong>. Every time your opponent does something unsafe, Reina doesn't just punish —
          she begins a mixup that can lead to another 30-50 damage on top of the punishment itself.
        </p>
        <p>
          This is her identity as a fighting game character. Other Mishimas have stronger individual tools.
          Other stance characters have better evasion. But nobody else converts punishment into pressure
          the way Reina does.
        </p>
      </Section>

      <Section title="Standing Punishment">
        <MoveCard
          character="reina"
          videoId="1,1,2"
          move={{
            input: '1,1,2',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 6, 12',
            startup: 'i10',
            onBlock: '-17',
            onHit: '+11 SEN',
            tags: ['10f Punish', 'Hit Confirmable', 'Key Move'],
            description: 'Your bread and butter. Hit confirmable — only complete the string when you see the first two hits connect. On hit, transitions to Sentai at +11 for uninterruptible mixups. At the wall, hold back to cancel the transition for +14 wall crush instead.',
          }}
          showVideo
        />

        <KeyConcept title="Always Hit Confirm 1,1,2" icon="🎯">
          <p>
            The third hit is <strong>-17 on block</strong> — launch punishable by the entire cast.
            Never throw the full string unless you've confirmed the first two hits connected.
            Set the dummy to random guard and practice only pressing 2 when you see 1,1 hit.
          </p>
          <p>
            Your other 10-frame option is <strong>1,2,2</strong> (23 damage, neutral on hit). Use this
            when you want damage without commitment, or transition it into Unsoku by holding up or down.
            But 1,1,2 into Sentai mixup is almost always the better choice.
          </p>
        </KeyConcept>

        <MoveCard
          character="reina"
          videoId="2,2,1"
          move={{
            input: '2,2,1',
            hitLevel: ['h', 'h', 'm'],
            damage: '5, 5, 20',
            startup: 'i12',
            onBlock: '-14',
            onHit: 'KND',
            tags: ['12f Punish', 'Hit Confirmable', 'Wall Splat'],
            description: 'Heavy 12-frame punish. Hit confirmable — delay the last hit and only complete it on hit. Knockdown in the open, wall splat at the wall. 30 damage makes it one of the hardest-hitting 12f punishes in the game.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="df+1,2"
          move={{
            input: 'df+1,2',
            hitLevel: ['m', 'm'],
            damage: '8, 20',
            startup: 'i13',
            onBlock: '-14',
            onHit: 'KND',
            tags: ['13f Punish', 'Heat Engager', 'Wall Splat'],
            description: 'Your 13-frame punish and primary heat engager from standing. Mid-mid, wall splats, 28 damage. In heat, the heat dash guarantees a follow-up. This is the move you use to enter heat from punishment most often.',
          }}
          showVideo
        />

        <Collapsible title="Other Standing Punishes" icon="📋">
          <ul>
            <li><strong>f+2,3 (i13):</strong> Use when df+1,2 won't reach. Good range, transitions to Sentai with F. Safe at -9 without the transition.</li>
            <li><strong>2~1 (i11-14):</strong> Just frame punish. Hard to execute consistently but very rewarding — guaranteed CD3 follow-up. Most players skip this in favor of df+1,2.</li>
            <li><strong>df+2 (i15):</strong> Standard launcher. Good range, reliable. Use this when you can't do an electric consistently.</li>
            <li><strong>EWGF (i11-13):</strong> The optimal 15-frame punish if you have the execution. Much more combo damage than df+2. Worth practicing but not required.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Crouching Punishment">
        <p>
          Crouching punishment is where Reina really shines. Blocking lows is already good in Tekken —
          with Reina, it's devastating because every crouching punish feeds into stance pressure.
        </p>

        <MoveCard
          character="reina"
          videoId="ws4,4"
          move={{
            input: 'ws+4,4',
            hitLevel: ['m', 'm'],
            damage: '10, 15',
            startup: 'i11',
            onBlock: '-17',
            onHit: '-1',
            tags: ['11f WS Punish', 'Stance Transition', 'Key Move'],
            description: 'Your 11-frame crouching punish. On its own, only -1 on hit. But hold down to transition into Heaven\'s Wrath at +6 — turning a minor punish into a full stance mixup. Always hold down after this connects.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="ws1"
          move={{
            input: 'ws+1',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i13',
            onBlock: '-13',
            onHit: '+13 SEN',
            tags: ['13f WS Punish', 'Stance Transition'],
            description: 'Transitions directly into Sentai at +13 on hit. This guarantees SEN 3 (heat engager) or SEN 2 (safe mid). Incredibly strong crouching punish — blocking any -13 low gives Reina a free heat engage.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="FC.df+4"
          move={{
            input: 'FC df+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i15',
            onBlock: '-14',
            onHit: 'Launch',
            tags: ['15f WS Launcher'],
            description: 'Standard crouching launcher for -15 or worse moves. Full combo on hit. Use FC df+3 instead for stagger lows (-20 or worse) — it does 5 more damage and has better wall carry, but is -17 on block.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="Wall Punishing From Crouch">
          Near the wall, if you block a -15 low, use <strong>ws+3,4</strong> instead of FC df+4.
          It gives a clean wall splat for much more total damage. The range is short, but most lows
          leave you close enough. At -14, <strong>ws+3+4</strong> is another option — it's +14 on hit
          and gives a guaranteed f,f+2 if you're fast enough.
        </TipBox>
      </Section>

      <Section title="Punishment Feeds Offense">
        <p>
          Here's what makes this system so powerful in practice. Every time you block something unsafe:
        </p>
        <ul>
          <li><strong>-10 standing:</strong> 1,1,2 → Sentai at +11 → free mixup (SEN 2/SEN 3/throw/low)</li>
          <li><strong>-11 crouching:</strong> ws+4,4 → hold D → Heaven's Wrath at +6 → frame trap with WRA 1 or WRA 2</li>
          <li><strong>-12 standing:</strong> 2,2,1 → knockdown → okizeme pressure</li>
          <li><strong>-13 standing:</strong> df+1,2 → heat engager → heat dash follow-up OR wall splat</li>
          <li><strong>-13 crouching:</strong> ws+1 → Sentai at +13 → guaranteed SEN 3 (heat engage) or SEN 2</li>
        </ul>
        <p>
          The opponent doesn't just lose health from the punish. They lose health from the punish
          <em> and then</em> they're immediately in a guessing situation where they can lose even more.
          This is why blocking unsafe moves against Reina feels so much worse than against other characters.
        </p>

        <KeyConcept title="Punishment Rules of Thumb" icon="📏">
          <p>
            You don't need to memorize every opponent's frame data. These general rules cover most situations:
          </p>
          <ul>
            <li>Most hopkicks: <strong>-13</strong> → df+1,2 for heat engage</li>
            <li>Strings ending in mid: usually <strong>-10 to -12</strong> → 1,1,2 or 2,2,1</li>
            <li>Big launchers: usually <strong>-15 or worse</strong> → df+2 or EWGF</li>
            <li>Quick low pokes: <strong>-11 to -13</strong> → ws+4,4 or ws+1</li>
            <li>Stagger lows: <strong>-20 or worse</strong> → FC df+3 or FC df+4</li>
            <li>Shoulders/power crushes: often <strong>-13 to launch punishable</strong></li>
          </ul>
          <p>
            When in doubt, jab test. Use 1,1 to check if a move is punishable. If it works,
            try bigger punishes next time you block it.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Long-Range Punishment">
        <p>
          Some moves push Reina back on block, making standard punishes whiff. For these situations:
        </p>
        <ul>
          <li><strong>f+2,3 (i13):</strong> Great range. Transitions to Sentai at +9 on hit. Use for moves like Bryan's df+2,3.</li>
          <li><strong>3+4 (i18):</strong> Long range, safe. Low crushes. Catches opponents who throw out moves with pushback.</li>
          <li><strong>f,f+2 (i12):</strong> Your fastest long-range option. Plus on block in Sentai, hit confirmable into SEN 3.</li>
        </ul>
      </Section>

      <Section title="Practice: Punishment">
        <PracticeBox
          title="Standing Punishment Drill"
          setup="Practice Mode. Record the opponent doing a -10, -12, -13, and -15 move (check their move list). Set to playback and practice punishing each one."
          tasks={[
            { id: 'punish-10', text: 'Punish -10 with 1,1,2 → SEN mixup (hit confirm!)', type: 'counter', target: 10 },
            { id: 'punish-12', text: 'Punish -12 with 2,2,1 (hit confirm the last hit)', type: 'counter', target: 10 },
            { id: 'punish-13', text: 'Punish -13 with df+1,2 (heat engage)', type: 'counter', target: 5 },
            { id: 'punish-15', text: 'Punish -15 with df+2 → full combo', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Crouching Punishment Drill"
          setup="Practice Mode. Record the opponent doing a -11, -13, and -15 low. Punish from crouch."
          tasks={[
            { id: 'ws-punish-11', text: 'Punish -11 low with ws+4,4 → hold D → Heaven\'s Wrath mixup', type: 'counter', target: 10 },
            { id: 'ws-punish-13', text: 'Punish -13 low with ws+1 → SEN 3 (guaranteed heat engage)', type: 'counter', target: 10 },
            { id: 'ws-punish-15', text: 'Punish -15 low with FC df+4 → full combo', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
