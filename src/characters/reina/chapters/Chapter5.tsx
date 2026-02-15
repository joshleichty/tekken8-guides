import { Chapter, Section } from '../../../components/guide'
import { MoveCard, TipBox, PracticeBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Space and Pokes"
      intro="Stances are where Reina shines, but you can't live in stance forever. Between mixups, you need tools to control space, chip away at health, keep the opponent honest, and create the openings that let you start your real offense. This chapter covers everything outside of stance — the neutral game that sets everything else up."
      hasPrevious
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Combos"
    >
      <Section title="Mid Pokes and Space Control">
        <MoveCard
          character="reina"
          videoId="df+1"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '8',
            startup: 'i13',
            onBlock: '-3',
            onHit: '+4',
            tags: ['Mid', 'Poke', 'Key Move'],
            description: 'Your primary mid poke. Great range, only -3 on block. Extensions: df+1,1 (mid-high, -4 on block) and df+1,2 (heat engager, -14). Can transition to Sentai by holding F after df+1 alone, but -3 in SEN means opponents can interrupt — use this transition sparingly.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="f+4"
          move={{
            input: 'f+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i19',
            onBlock: '+2c',
            onHit: '+5c',
            tags: ['Mid', 'Plus on Block', 'Forces Crouch', 'Key Move'],
            description: 'Plus on block and forces crouch. At +2 with the opponent crouching, their fastest option is i11 — so your jab (i10) and df+1 (i13) become frame traps. On crouching hit, +13 guarantees df+1,2 (heat engage) or a demon\'s breath. Slow, but one of your best pressure starters.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="d+2"
          move={{
            input: 'd+2',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i15',
            onBlock: '+0c',
            onHit: '+3c',
            onCH: 'KND',
            tags: ['Mid', 'Elbow', 'Forces Crouch'],
            description: 'Forces the opponent into crouch on hit or block. Guaranteed CD3 on counter hit. An elbow, so most parries can\'t parry it. Neutral on block in crouch means it\'s effectively safe. Great for harassing opponents who keep trying to press.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="b+2"
          move={{
            input: 'b+2',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i16',
            onBlock: '-9',
            onHit: '+3',
            tags: ['Mid', 'Homing'],
            description: 'Your primary homing mid. Not much damage, but it stops sidesteps cold. Use it to keep the opponent from walking around your linear moves like f,f+2. Think of it as a tax — small damage that forces the opponent to play honest.',
          }}
          showVideo
        />
      </Section>

      <Section title="Counter Hit Tools">
        <MoveCard
          character="reina"
          videoId="f,F+3+4"
          move={{
            input: 'f,f+3+4',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i16',
            onBlock: '-2',
            onHit: 'KND',
            onCH: 'Launch',
            tags: ['High', 'CH Launcher', 'Safe', 'Low Crush'],
            description: 'Safe counter hit launcher with three active frames. Knockdown on normal hit, full launch on counter hit. Wall splats. Low crushes. At -2 on block, the opponent can\'t punish. A strong keep-out tool for opponents charging in recklessly.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="b+4"
          move={{
            input: 'b+4',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i18',
            onBlock: '-8',
            onHit: 'KND',
            onCH: 'Launch',
            tags: ['High', 'CH Launcher', 'Tornado', 'High Crush'],
            description: 'High-crushing high that gives guaranteed CD3 on normal hit or a full combo on counter hit. Also serves as a tornado in combos. Useful against jab-happy opponents and in the Mishima/Steve matchup (beats electrics and Steve\'s b+1). Near the wall, a counter hit gives a clean wall combo.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="df+4,2,3"
          move={{
            input: 'df+4,2,3',
            hitLevel: ['m', 'm', 'h'],
            damage: '14, 10, 20',
            startup: 'i15',
            onBlock: '-8',
            onHit: '+35a',
            tags: ['String', 'CH Launcher', 'Delayable'],
            description: 'Three-hit string with two different CH properties. If the second hit counter hits, the full string is guaranteed plus a free CD3. If only the third hit counter hits (common against mashers), full combo. The third hit is highly delayable. df+4,2 by itself transitions to WRA with D at +8 on hit.',
          }}
          showVideo
        />
      </Section>

      <Section title="Tracking and Homing">
        <p>
          Reina's biggest weakness is linearity. Many of her key moves — f,f+2, the electric, SEN options —
          can be sidestepped. You need tracking tools to keep opponents honest.
        </p>

        <MoveCard
          character="reina"
          videoId="3"
          move={{
            input: '3',
            hitLevel: ['h'],
            damage: '12',
            startup: 'i18',
            onBlock: '-11',
            onHit: '+5',
            tags: ['High', 'Homing', 'High Crush'],
            description: 'Homing high with extensions. 3,2 is -9 (high, CH launcher on first hit CH). 3,4 is -14 (mid, catches duckers, CH launcher). In heat, both gain a safe third hit for massive chip damage. Mix 3,2 and 3,4 to keep ducking opponents honest.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="Heat Extensions: 3,4,4 and 3+4,4,4">
          In heat, standing 3,4 and 3+4 both gain a safe third hit (only -8). These do huge chip
          damage, have great range, and the <strong>3+4,4,4</strong> extension is also an incredible
          whiff punisher since it covers enormous distance. Low crushes on the first hit (3+4) and
          triggers wall gimmicks. Throw these out liberally when you have heat — even on block, the
          chip damage adds up fast.
        </TipBox>

        <MoveCard
          character="reina"
          videoId="4"
          move={{
            input: '4',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i13',
            onBlock: '-8',
            onHit: '+11g',
            tags: ['High', 'Wall Splat Tool'],
            description: 'Fast high with some weak-side tracking. At the wall, this catches opponents trying to sidestep and gives a wall splat. Not a move you spam in the open, but a valuable wall tool.',
          }}
          showVideo
        />
      </Section>

      <Section title="Lows — The Weak Link">
        <p>
          Reina's lows are weak. This is her biggest compromise. You don't open people up with raw lows —
          you make them so scared of your mids and stances that they stop ducking, and <em>then</em>
          the lows land.
        </p>

        <MoveCard
          character="reina"
          videoId="db+2"
          move={{
            input: 'db+2',
            hitLevel: ['l', 'l'],
            damage: '10, 12',
            startup: 'i20',
            onBlock: '-16',
            onHit: '-3',
            tags: ['Low', 'Poke'],
            description: 'Your best standing low poke by damage (22). Launch punishable on block at -16, and only -3 on hit — no real advantage. Use sparingly when the opponent is clearly not blocking low. The frame situation on hit is the same as df+1 on block (-3), so you can follow up the same way.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="db+4"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '7',
            startup: 'i16',
            onBlock: '-13',
            onHit: '-2',
            onCH: '+2',
            tags: ['Low', 'Fast', 'CH Confirmable'],
            description: 'Fast low poke. Low damage but quick. The extension db+4,1+2 is natural on counter hit and CH confirmable — listen for the counter hit sound and let the extension rip. At the wall, the extension gives a clean wall splat. Use near round\'s end when you need chip damage to close it out.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="SS.4"
          move={{
            input: 'SS 4',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i18',
            onBlock: '-13',
            onHit: '+0',
            onCH: '+13g',
            tags: ['Low', 'Sidestep', 'Key Move'],
            description: 'One of Reina\'s best low pokes. Neutral on hit, plus 13 on counter hit with stagger. Comes out of a sidestep, making it delayable and unpredictable. Mix with f+4 — sidestep into f+4 or sidestep into SS 4 creates a simple but effective high-low mixup.',
          }}
          showVideo
        />

        <Collapsible title="Hellsweep and Crouch Dash Lows" icon="📋">
          <p>
            Hellsweep is covered in detail in the Sentai and Heaven's Wrath chapters since it primarily
            functions as a stance entry tool. Quick summary:
          </p>
          <ul>
            <li><strong>CD4,2 → hold D:</strong> Enters WRA at +6. Very linear. Your primary low for starting offense.</li>
            <li><strong>CD4,4:</strong> Plus 2, both crouching. Homing. Less reward but much harder to step.</li>
            <li><strong>f,n+4 (Season 2):</strong> High-crushing low from crouch dash. Enters SEN at +3 on hit. Guarantees SEN 2 or SEN 3 on counter hit. Hold B to cancel transition for neutral on hit.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Approach Tools">
        <p>
          Reina needs to close the gap to start her stance game. These are your approach tools:
        </p>

        <MoveCard
          character="reina"
          videoId="f,f,F+3"
          move={{
            input: 'WR 3',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i24',
            onBlock: '+6',
            onHit: 'KND',
            tags: ['While Running', 'Plus on Block', 'Chip Damage'],
            description: 'Plus 6 on block with chip damage. Guaranteed CD3 on hit. A powerful approach tool that gives you frame advantage even on block. Can be sidestepped, so mix with WR 4.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="f,f,F+4"
          move={{
            input: 'WR 4',
            hitLevel: ['h'],
            damage: '23',
            startup: 'i26',
            onBlock: '+4',
            onHit: 'KND',
            tags: ['While Running', 'Homing', 'Plus on Block'],
            description: 'Homing while running high. Plus 4 on block, transitions to WRA at +8 with D. Catches sidesteps that beat WR 3. On hit, strong aerial tail spin for combos. The WRA transition gives you the full Heaven\'s Wrath game at +8.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="The Running Mixup">
          WR 3 (mid, +6) and WR 4 (homing high, +4) complement each other perfectly. If the opponent
          ducks WR 4, they eat WR 3 for a full knockdown. If they step WR 3, WR 4 catches them. Both
          are plus on block. Once you've trained them to block, the hellsweep from the same crouch
          dash motion becomes a real threat.
        </TipBox>
      </Section>

      <Section title="Frame Traps From Neutral">
        <p>
          Even without stance transitions, Reina has strong frame traps from her plus-on-block moves.
          Understanding when your opponent isn't allowed to press is key to converting small advantages
          into big ones.
        </p>

        <Collapsible title="Plus Frame Cheat Sheet" defaultOpen>
          <ul>
            <li><strong>+1 (1 jab, SEN 3):</strong> Another jab is uninterruptible. 1,1 is a great trap — hit confirm the 2 if it connects.</li>
            <li><strong>+2 (f,f+2 → SEN, f+4):</strong> SEN 3 trades favorably with jabs. f+4 leaves them crouching — 1 and df+1 become frame traps against their i11 options.</li>
            <li><strong>+4 (SEN 4, WR 4):</strong> df+1,1 and 1+2 are frame traps. uf+1 on counter hit gives free WRA mixup.</li>
            <li><strong>+5 (EWGF):</strong> f,f+2 is great here but can be sidestepped. At the wall, another electric or any previous option works.</li>
            <li><strong>+6 (WR 3, WRA 3,4):</strong> d+2 on counter hit gives guaranteed CD3. df+4,2 into WRA is strong here.</li>
            <li><strong>+8 (WR 4 → WRA, WRA 3,4 → WRA):</strong> Almost everything from WRA is a frame trap. WRA 1 → SEN → SEN 1+2 is the highest-threat option (68 damage on CH).</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Throws">
        <p>
          Reina has an above-average throw game, especially from stances:
        </p>
        <ul>
          <li><strong>Generic throws (1+3, 2+4):</strong> Standard throws. The 1 throw activates floor gimmicks. The 2 throw side switches on break — useful when your back is to the wall.</li>
          <li><strong>uf+1+2:</strong> Side switches on break. Use with your back to the wall to escape the corner.</li>
          <li><strong>qcb,f+2:</strong> 2-break command throw. Activates wall gimmicks (balcony break). Doesn't wall splat but triggers wall breaks on balcony stages.</li>
          <li><strong>SEN 1+3:</strong> Unbreakable. Low damage but forces a knockdown. Chapter 2 covers this.</li>
          <li><strong>WRA 1+3:</strong> Unbreakable. 20 damage in the open, 35 at the wall. Chapter 4 covers this.</li>
        </ul>
      </Section>

      <Section title="Practice: Neutral Game">
        <PracticeBox
          title="Poke and Approach Drill"
          setup="Practice Mode. Set dummy to approach with jabs. Practice your spacing and poke game."
          tasks={[
            { id: 'poke-df1', text: 'Use df+1 to check the opponent\'s approach (10 clean hits)', type: 'counter', target: 10 },
            { id: 'poke-f4', text: 'Land f+4 on block → follow up with 1 or df+1 (5 frame trap sequences)', type: 'counter', target: 5 },
            { id: 'approach-ff2', text: 'Approach with f,f+2 → hit confirm SEN 3 on hit, hold on block', type: 'counter', target: 10 },
            { id: 'approach-wr', text: 'Mix WR 3 and WR 4 approach (alternate between them)', type: 'counter', target: 10 },
            { id: 'ch-tool', text: 'Catch jab-happy opponents with b+4 or f,f+3+4', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
