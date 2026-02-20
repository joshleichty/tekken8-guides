import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Punishment Into Pressure"
      intro="Most characters punish and return to neutral. Hwoarang punishes and starts a loop. Every punisher in his kit transitions into a stance — which means every mistake your opponent makes doesn't just cost them health, it costs them their turn."
      hasPrevious
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Getting In"
    >
      <Section title="Your Defense IS Your Offense">
        <p>
          Chapters 2 and 3 taught you how to pressure. But that pressure has to start somewhere.
          Against good players, you can't just walk up and d+3,4. They'll keep you out, whiff
          punish your approaches, and force you to play their game. So how do you get in?
        </p>
        <p>
          One of the best ways: <strong>let them come to you, block what's unsafe, and punish
          into a stance transition</strong>. Most characters punish a -10 move for 25 damage and
          go back to neutral. Hwoarang punishes a -10 move for 25 damage and enters LFS or RFS —
          and suddenly the opponent is in the same pressure situation they'd be in if you'd landed d+3,4.
        </p>
        <p>
          This is especially powerful because the opponent just did something risky and got punished.
          They're mentally defensive. They're more likely to block and respect — which is exactly when
          your flamingo pressure is most effective.
        </p>
      </Section>

      <Section title="Standing Punishment">
        <h3>10-Frame — The Foundation</h3>
        <p>
          At 10 frames, you have a choice that defines Hwoarang's punishment philosophy: safe damage
          or risky transition. This decision comes up constantly because most punishable moves in Tekken
          are -10 to -12.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: '2,f+3',
            hitLevel: ['h', 'm'],
            damage: '9, 14',
            startup: 'i10',
            onBlock: '-8',
            onHit: '+9',
            tags: ['10f Punish', 'Safe', 'Wall Crush'],
            description: 'Your safe 10-frame punish. The second hit is a mid, so it catches people trying to duck after the first jab. -8 on block means nobody can punish you for using it. On hit, +9 gives you a strong follow-up position. At the wall, wall crushes for +21g. This is your go-to when you want guaranteed damage without risk.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="1,2"
          move={{
            input: '1,2,3',
            hitLevel: ['h', 'h', 'l'],
            damage: '5, 10, 10',
            startup: 'i10',
            onBlock: '-12',
            onHit: '-1 (LFS)',
            tags: ['10f Punish', 'Transition', 'LFS Entry'],
            description: 'The transition option. Same speed as 2,f+3 but the third hit is a low that puts you into Left Flamingo. The trade-off: -12 on block means you get punished if they block all three hits. On hit, you\'re in LFS where d+3,4 restarts your loops or LFS f+3 gives you the heat engager. Use this when the punish is guaranteed — it turns defense into offense.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="1,2"
          move={{
            input: '1,2,4',
            hitLevel: ['h', 'h', 'h'],
            damage: '5, 10, 15',
            startup: 'i10',
            onBlock: '-2',
            onHit: '+35d (+27)',
            tags: ['10f Punish', 'Transition', 'RFS Entry'],
            description: 'The other transition option. Third hit is a high that goes into Right Flamingo. Safer on block at -2, but all three hits are high — a ducking opponent avoids the last hit entirely. On hit, you\'re in RFS where your entire Chapter 2 menu opens up. Best of both worlds when the opponent is standing.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="Which 10f Punish When?">
          <strong>2,f+3</strong> when you're not sure the move is punishable (safe if you're wrong).{' '}
          <strong>1,2,4</strong> when you know it's guaranteed (enters RFS at -2 on block as backup).{' '}
          <strong>1,2,3</strong> when you know it's guaranteed AND want LFS options (riskier at -12).
          In practice, 1,2,4 into RFS is your most common choice because it's the safest transition
          and puts you exactly where d+3,4 would — but without needing to approach.
        </TipBox>

        <h3>11-Frame — The Workhorse</h3>

        <MoveCard
          character="hwoarang"
          move={{
            input: '4,3',
            hitLevel: ['h', 'm'],
            damage: '14, 16',
            startup: 'i11',
            onBlock: '-6',
            onHit: '+5',
            onCH: '+20a (+11)',
            tags: ['11f Punish', 'Safe', 'LFS Cancel'],
            description: 'Your 11-frame punish. 30 damage, safe at -6, and the second hit can be cancelled into LFS by pressing F. On normal hit, +5 in LFS — your mid options beat anything they press. On counter hit, the first hit combos into the second for a balcony break. This is your most-used standing punish because so many moves are -11 to -12.',
          }}
          showVideo
        />

        <h3>13-Frame — The Big Choice</h3>

        <MoveCard
          character="hwoarang"
          videoId="df+1,3"
          move={{
            input: 'df+1,3',
            hitLevel: ['m', 'm'],
            damage: '10, 15',
            startup: 'i13',
            onBlock: '-2',
            onHit: '+6 (LFS)',
            tags: ['13f Punish', 'Safe', 'LFS Transition', 'Key Move'],
            description: 'The pressure punish. Mid-mid at i13, safe on block at -2, transitions directly to LFS at +6 on hit. From LFS at +6, your LFS f+3 (heat engager, i14) comes out at frame 8 — faster than the opponent\'s jab. This turns any -13 move into the start of a full loop sequence. Your best 13f option in most situations.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="df+3+4"
          move={{
            input: 'df+3+4',
            hitLevel: ['m', 'h', 'm'],
            damage: '7, 4, 17',
            startup: 'i13',
            onBlock: '-14',
            onHit: '+4c',
            tags: ['13f Punish', 'Heat Engager', 'Risky'],
            description: 'The heat engage punish. Same speed as df+1,3 but this is a heat engager — on hit, heat dash gives +5 and +43d(+35) for massive damage. The catch: -14 on block means you eat a full launch if the opponent blocks it. Only use this as a guaranteed punish, never as a poke. Jails on block, so the opponent can\'t duck mid-string.',
          }}
          showVideo
        />

        <h3>14-Frame and Above</h3>

        <MoveCard
          character="hwoarang"
          videoId="uf+3+4,4"
          move={{
            input: 'uf+3+4,4',
            hitLevel: ['m', 'h', 'm'],
            damage: '10, 8, 13',
            startup: 'i14',
            onBlock: '-10',
            onHit: '+7 (RFF)',
            tags: ['14f Punish', 'Transition', 'RFF Entry'],
            description: 'Your 14-frame punish that transitions to RFF on hit. 31 damage and +7 in RFF — from here, RFF f+3 into LFS or RFF b+2 for plus frames continue the pressure. The first hit combos into the rest on hit. Low crushes from frame 1. Transitions to LFS with F instead (-2 block / +9 hit).',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15',
            onBlock: '-7',
            onHit: 'Launch',
            tags: ['15f Punish', 'Safe Launcher', 'Key Move'],
            description: 'Your safe mid launcher. -7 on block — nobody can punish it. On hit, full combo. This is your go-to for any move that\'s -15 or worse. Available from both LFF and RFF, meaning you always have access to it. One of only two safe mid launchers in your kit (the other is JFSR).',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'b+3',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i16',
            onBlock: '-19',
            onHit: 'Tornado',
            tags: ['16f Punish', 'Tornado', 'Whiff Punish'],
            description: 'Your Tornado launcher. i16 with massive range — one of the scariest whiff punishers in Tekken 8. On hit, Tornado into full combo. At -19 on block, never throw this out raw in pressure. Its value is pure punishment: whiffed moves at range 3+, or standing -16 punishes for maximum damage.',
          }}
          showVideo
        />
      </Section>

      <Section title="Crouching Punishment">
        <p>
          When you block a low, you're in crouch. These punishes are critical because Tekken is built
          on lows — every character has them, and blocking them should be rewarding. Hwoarang's
          crouching punishes are especially strong because they all transition into stances.
        </p>

        <MoveCard
          character="hwoarang"
          videoId="ws4,4"
          move={{
            input: 'ws+4,4',
            hitLevel: ['m', 'm'],
            damage: '12, 13',
            startup: 'i11',
            onBlock: '-9',
            onHit: '+4c (RFF)',
            tags: ['11f WS Punish', 'Key Move', 'RFF Transition'],
            description: 'Your bread-and-butter crouching punish. Jails on first block (the opponent can\'t duck the second hit). On hit, transitions to RFF at +4 in forced crouch — from here, d+3,4 starts your loop or RFF b+2 keeps pressure going. You\'ll use this more than any other ws move because most punishable lows are -11 to -13.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="ws1,4"
          move={{
            input: 'ws+1,4',
            hitLevel: ['m', 'm'],
            damage: '12, 18',
            startup: 'i12',
            onBlock: '0',
            onHit: '+8 (RFS)',
            tags: ['12f WS Punish', 'Season 2', 'RFS Transition'],
            description: 'New in Season 2. Mid-mid at i12 that goes directly into RFS at +8 on hit — the exact same situation as landing d+3,4 on block. Even on block, you\'re even at 0 in RFS. 30 total damage. This fills the gap between ws+4,4 and ws+3 and gives you the best possible stance transition from crouch.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="ws3"
          move={{
            input: 'ws+3',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i14',
            onBlock: '-12',
            onHit: '+14c',
            tags: ['14f WS Punish', 'Guaranteed Follow-up'],
            description: 'Heavy mid kick from crouch. On hit at +14 in forced crouch, uf+3+4,4 is guaranteed for an additional 31 damage — or in heat, use df+3+4 for guaranteed heat engage instead. The total damage from ws+3 into the guaranteed follow-up is massive. Use this for -14 to -15 lows.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="ws2,3"
          move={{
            input: 'ws+2,3',
            hitLevel: ['m', 'h'],
            damage: '8, 10',
            startup: 'i15',
            onBlock: '+3',
            onHit: 'Launch (Tornado)',
            tags: ['15f WS Punish', 'Safe Launcher', 'Tornado', 'LFS Transition'],
            description: 'One of the best crouching launchers in the game. +3 on block — it\'s not just safe, it\'s plus. On hit, Tornado launcher for full combo damage. Transitions to LFS. The second hit is a high, but it combos naturally from the first hit. For any low that\'s -15 or worse, this is your answer.',
          }}
          showVideo
        />

        <TipBox variant="warning" title="Don't Sleep on ws+1,4">
          Season 2 gave Hwoarang ws+1,4 and it changed his crouching punishment completely. Before,
          you had an 11f punish (ws+4,4 → RFF) and a 14f punish (ws+3) with nothing in between.
          Now ws+1,4 at i12 fills that gap AND goes to RFS at +8 — the exact position your entire
          loop system is built around. Any time you block a -12 or -13 low, ws+1,4 into RFS pressure
          is one of the strongest punishes in the game for its speed.
        </TipBox>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          Whiff punishment is when the opponent misses a move entirely and you hit them during their
          recovery. This is where b+3 lives — and it's one of Hwoarang's most feared tools.
        </p>

        <KeyConcept title="b+3 at Range" icon="🎯">
          <p>
            b+3 reaches from distances where most characters can't punish anything. When you're at range
            3-4 and the opponent whiffs a big move — a hopkick, a running move, a big mid — b+3 connects
            for a Tornado and full combo. The damage from this one move can swing an entire round.
          </p>
          <p>
            The trick is patience. At long range, don't approach. Let them come to you. Backdash,
            wait for the whiff, and punish with b+3. This is especially effective because opponents
            expect Hwoarang to be in their face constantly — they don't expect the patient whiff
            punish game.
          </p>
        </KeyConcept>

        <Collapsible title="Other Whiff Punishers">
          <ul>
            <li><strong>4,3 (i11):</strong> Faster than b+3 but shorter range. Use for close-range whiffs — jabs, df+1 type moves that barely miss. 30 damage, safe.</li>
            <li><strong>uf+3+4,4 (i14):</strong> Mid-range whiff punisher that transitions to RFF. Good for moves that whiff at medium distance where 4,3 won't reach but b+3 is too slow to react in time.</li>
            <li><strong>df+2 (i15):</strong> Safe launcher. If you have time to confirm the whiff, this gives the most combo damage. Use for big, slow whiffs at close-medium range.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="The Conversion Map">
        <KeyConcept title="Every Punish Starts a Loop" icon="🔄">
          <p>
            This is what makes Hwoarang's punishment unique. Here's how each punish level connects
            to the loop system from Chapters 2 and 3:
          </p>
          <ul>
            <li><strong>-10 standing → 1,2,4 → RFS:</strong> You're in the same position as landing d+3,4. Full RFS menu is open — f+4, df+4, d+4,3, 4,3, everything.</li>
            <li><strong>-10 standing → 1,2,3 → LFS:</strong> You're in LFS where d+3,4 restarts the core loop, or LFS f+3 gives the heat engager at +4.</li>
            <li><strong>-11 standing → 4,3~F → LFS:</strong> Cancel the second hit into LFS. From here, same as above — d+3,4 or LFS f+3.</li>
            <li><strong>-13 standing → df+1,3 → LFS:</strong> At +6 in LFS, your LFS f+3 comes out at frame 8. The opponent can't interrupt with a jab. Free pressure.</li>
            <li><strong>-11 crouching → ws+4,4 → RFF:</strong> At +4 in RFF. d+3,4 starts the loop, or RFF b+2 gives +4~5 for continued pressure.</li>
            <li><strong>-12 crouching → ws+1,4 → RFS:</strong> At +8 in RFS — identical to landing d+3,4 on block. Your entire loop system activates.</li>
            <li><strong>-14 standing → uf+3+4,4 → RFF:</strong> At +7 in RFF. Even better than ws+4,4 — everything from RFF is available.</li>
          </ul>
          <p>
            Notice the pattern: <strong>every transition leads to a stance you already know from the
            loops</strong>. You're never entering unfamiliar territory. The punishment system and the
            loop system are the same system viewed from different entry points.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practice: Punishment">
        <PracticeBox
          title="Standing Punishment Drill"
          setup="Practice Mode. Record the opponent doing a -10, -11, -13, and -15 move. Set to playback random."
          tasks={[
            { id: 'punish-10-safe', text: '10f: Punish -10 with 2,f+3 (safe option)', type: 'counter', target: 5 },
            { id: 'punish-10-rfs', text: '10f: Punish -10 with 1,2,4 → RFS pressure', type: 'counter', target: 10 },
            { id: 'punish-11', text: '11f: Punish -11 with 4,3 (cancel to LFS with F)', type: 'counter', target: 10 },
            { id: 'punish-13', text: '13f: Punish -13 with df+1,3 → LFS → LFS f+3 or d+3,4', type: 'counter', target: 10 },
            { id: 'punish-15', text: '15f: Punish -15 with df+2 → full combo', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Crouching Punishment Drill"
          setup="Practice Mode. Record the opponent doing a -11, -12, -14, and -15 low. Punish from crouch."
          tasks={[
            { id: 'ws-11', text: 'Punish -11 low with ws+4,4 → RFF → d+3,4 loop', type: 'counter', target: 10 },
            { id: 'ws-12', text: 'Punish -12 low with ws+1,4 → RFS pressure', type: 'counter', target: 10 },
            { id: 'ws-14', text: 'Punish -14 low with ws+3 → uf+3+4,4 (guaranteed)', type: 'counter', target: 5 },
            { id: 'ws-15', text: 'Punish -15 low with ws+2,3 → full combo', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Whiff Punishment Drill"
          setup="Practice Mode. Set dummy to approach with a whiffable move (hopkick, running move). Practice backdash → b+3."
          tasks={[
            { id: 'whiff-b3', text: 'Backdash → b+3 whiff punish at range 3+', type: 'counter', target: 10 },
            { id: 'whiff-df2', text: 'Close-range whiff → df+2 full combo', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
