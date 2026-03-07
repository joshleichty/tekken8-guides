import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, DecisionGrid, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Frame Traps & Pressure"
      intro="Lidia's plus frames aren't just 'your turn.' They're invitations for the opponent to make a mistake. Every plus frame situation has specific moves that catch specific responses. This chapter maps out exactly what beats what at each frame advantage tier, so you stop guessing and start trapping."
      hasPrevious
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="The Complete Lidia"
    >
      <Section title="How Frame Traps Work">
        <p>
          A frame trap is when you're plus enough that a fast move from you hits the opponent
          before their fastest move can come out. If you're +2 and do an i13 move, it reaches
          the opponent at frame 11. Their i10 jab reaches you at frame 8 — they win. But if
          you do an i12 move from +2, it reaches at frame 10, tying with their jab. From +3,
          your i13 beats their i10. The math is simple: <strong>your startup minus your plus
          frames must be less than their fastest option</strong>.
        </p>
        <p>
          Lidia doesn't have a lot of plus frame situations from neutral. She earns them through
          stances, on-hit confirms, and blocked moves. Each plus frame tier opens different
          trapping opportunities. Learn the tiers, and you'll always know what to press.
        </p>

        <KeyConcept title="The Trading Zone" icon="~">
          <p>
            Between +4 and +6, Lidia enters a zone where she doesn't cleanly beat jabs — she
            <em>trades</em> with them. And those trades are devastatingly in her favor. Chapter 8
            covered the theory. This chapter shows every setup that gets you there.
          </p>
        </KeyConcept>
      </Section>

      <Section title="+1 to +2: Thin Advantage">
        <SubSection title="+1 (after b+3,1 on block)">
          <p>
            At +1, none of Lidia's moves beat a jab. Your fastest option is df+1 at i13, which
            reaches at frame 12 — the opponent's jab hits you at frame 9. This is not a pressing
            situation. You have the right to continue, but no frame trap exists.
          </p>
          <p>
            What +1 does give you: the ability to use moves that would normally lose to jabs.
            d+2 (i18, high crush) comes out at frame 17 — still slow, but with high crush active,
            it goes under their jab for a counter-hit into heat. The opponent has to respect your
            turn enough not to sidestep or use mids.
          </p>
        </SubSection>

        <SubSection title="+2 (after b+1 on block)">
          <p>
            b+1 on block leaves you at +2. This is one of your most important situations because
            b+1 is a heat engager you'll use constantly.
          </p>
          <ul>
            <li><strong>df+1 (i13) from +2:</strong> Reaches frame 11. Opponent's jab reaches frame 8. No frame trap — they jab you out.</li>
            <li><strong>d+2 (i18, high crush) from +2:</strong> Crushes under their jab attempt. Counter-hit into FC.df+2 heat engager. This is the key play.</li>
            <li><strong>df+2 (i15) from +2:</strong> Reaches frame 13. Loses to jab (frame 8). BUT: if they do df+1 (i13), it reaches frame 11 — your df+2 also reaches at frame 13. You lose. However, if they delay even slightly, df+2 trades favorably. Against opponents who use slow pokes (df+1 at i13), the math starts working.</li>
          </ul>

          <TipBox variant="tip" title="The b+1 → d+2 Trap">
            After b+1 on block (+2), d+2 is your highest-reward option. It high crushes their
            jab response and on counter-hit guarantees FC.df+2 into heat. The opponent learns
            to stop jabbing after b+1. Once they stop jabbing, you can do b+1 again — another
            heat engager attempt. This loop is how Lidia forces heat activation from close range.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="+4 to +5: The Trade Zone">
        <SubSection title="+4 (after d+3,1 on hit)">
          <p>
            At +4, df+1 (i13) reaches frame 9 — tying with their jab at frame 6. This is
            borderline. The important option here is df+2 (i15), which reaches frame 11 while
            their jab reaches frame 6. Still no clean frame trap, but you're getting closer.
          </p>
          <p>
            The real value of +4 is d+2 (i18): it reaches frame 14, and with high crush active
            during startup, it ducks under any standing jab. Counter-hit into heat. At +4,
            the opponent's options are thinning.
          </p>
        </SubSection>

        <SubSection title="+5 (after f,f+2 on block, qcf+4 on block, f+3,4 on block)">
          <p>
            This is the first truly dangerous plus frame for Lidia, and you reach it from
            several common situations.
          </p>

          <MoveCard
            character="lidia"
            videoId="df+2"
            move={{
              input: 'df+2 (from +5)',
              hitLevel: ['m'],
              damage: '17',
              startup: 'i15',
              onBlock: '-8',
              onHit: '+11',
              description: "At +5, df+2 (i15) reaches frame 10. The opponent's jab (i10) also reaches frame 10. You TRADE. The trade leaves you at approximately +29 — guaranteed 3,2 for a full combo. A jab trade that becomes a launch.",
              notes: [
                'Trade with jab at +5 → +29 → 3,2 full combo',
                'On clean hit: +11 into CAT stance',
                'Setups: f,f+2 block, qcf+4 block, f+3,4 block',
              ],
            }}
            showVideo
          />

          <p>
            The +5 df+2 trade is one of Lidia's most powerful tools. After f,f+2 on block,
            the opponent is conditioned to jab you out of HRS options. df+2 punishes that
            instinct with a full combo. And if they don't jab, you get to run HRS for free.
          </p>
        </SubSection>
      </Section>

      <Section title="+6 to +8: True Frame Traps">
        <SubSection title="+6 (after HAE 2 on block, WR+1 on block, WR+3 on block)">
          <p>
            +6 is where Lidia's frame traps become real and where the db+3 trade becomes
            available.
          </p>

          <MoveCard
            character="lidia"
            videoId="db+3"
            move={{
              input: 'db+3 (from +6)',
              hitLevel: ['l'],
              damage: '17',
              startup: 'i16',
              onBlock: '-11',
              onHit: '+7',
              tags: ['homing'],
              description: "At +6, db+3 (i16) reaches frame 10. The opponent's jab (i10) reaches frame 4. They hit first — but the TRADE math works: the simultaneous hit leaves you at approximately +14, which guarantees Political Storm (f+1+2,3,1+2). That's a heat engager from a trade. 87 total damage from what should have been 'their turn.'",
              notes: [
                'Trade with jab → +14 → Political Storm guaranteed',
                'After HAE 2 block: the nastiest setup — 87 damage from a "blocked" HAE 2',
                'Against d+1: trade only gives +9 (no Political Storm)',
              ],
            }}
            showVideo
          />

          <DecisionGrid
            title="Options at +6"
            description="After HAE 2 on block, WR+1 on block, or WR+3 on block"
            rows={[
              { situation: 'They jab', response: 'db+3 (trade → Political Storm)', reason: 'Trade at +14 guarantees heat engager', risk: 'Against d+1, only +9' },
              { situation: 'They d+1', response: 'df+2', reason: 'd+2 high crushes d+1; df+2 reaches frame 9', risk: 'df+2 can still be beaten by fast mids' },
              { situation: 'They stand block', response: 'db+3 or f,f+2', reason: 'db+3 is a free low; f,f+2 restarts the stance game', risk: 'db+3 is -11 if they low-parry' },
              { situation: 'They sidestep', response: 'db+3 (homing)', reason: 'Homing low catches all sidesteps', risk: 'None — homing tracks both directions' },
              { situation: 'They duck', response: 'df+2 or df+1', reason: 'Mids catch ducking', risk: 'They might be ducking to launch your high' },
            ]}
          />
        </SubSection>

        <SubSection title="+7 (after db+3 on hit)">
          <p>
            db+3 on hit transitions to HRS at +7. This is one of Lidia's best mid-game
            situations because HRS 2 (i16) becomes a frame trap.
          </p>
          <ul>
            <li><strong>HRS 2 (i16) from +7:</strong> Reaches frame 9. Opponent's jab at frame 3. No clean trap against jab — BUT HRS 2 is a mid, so they can't duck it. Against any response slower than i9, HRS 2 is guaranteed.</li>
            <li><strong>HRS 1 (i17, power crush) from +7:</strong> Absorbs hits during startup. Even if they jab, the power crush eats it and you get +16 into WLF on hit.</li>
            <li><strong>HRS 3 (i22) from +7:</strong> Jumps over d+1. If they try to d+1-check your HRS, this is the answer.</li>
          </ul>

          <TipBox variant="tip" title="The db+3 → HRS 2 Pipeline">
            Land db+3 → HRS 2 heat engage → HAE 2 on block (+6) → db+3 trade → Political Storm.
            This is a full pressure chain that starts from a single low poke and ends in heat
            activation with massive damage. Each step is earned, not random.
          </TipBox>
        </SubSection>

        <SubSection title="+8 (after 1,2,2 on block, ws4,2 on block, CAT 4 on hit → WLF, HRS 4 on block → WLF)">
          <p>
            At +8, you have genuine frame traps with multiple moves.
          </p>
          <ul>
            <li><strong>df+1 (i13) from +8:</strong> Reaches frame 5. Opponent's jab at frame 2. Still loses to jab.</li>
            <li><strong>df+2 (i15) from +8:</strong> Reaches frame 7. Trades with jab at frame 2 — but the trade at +8 is even more devastating than at +5.</li>
            <li><strong>db+3 (i16) from +8:</strong> Reaches frame 8. Trades with jab. At this advantage, the trade guarantees Political Storm cleanly.</li>
          </ul>
          <p>
            In WLF at +8 (from HRS 4 block or CAT 4 hit), you get even better options:
          </p>
          <ul>
            <li><strong>WLF 2 (i15) from +8:</strong> Reaches frame 7. This is a real frame trap — the opponent cannot jab before WLF 2 connects. Safe, wall splats, tracks weak side.</li>
            <li><strong>WLF 3,1 (i17) from +8:</strong> Also a frame trap. Bigger CH reward.</li>
            <li><strong>WLF 4 (i20, low):</strong> Not a frame trap but requires crouch to block. The "they respect you" option.</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Wall Pressure">
        <p>
          Near the wall, every plus frame becomes more dangerous because wall splats convert
          into massive damage. Lidia's wall game centers on a few key situations.
        </p>

        <SubSection title="WLF 2 at the Wall">
          <p>
            WLF 2 wall splats. At +8 in WLF near the wall, WLF 2 is almost always the correct
            option — it's a frame trap, it's safe, and it wall splats for a full combo. The
            opponent can't jab, can't sidestep (it tracks), and blocking means they eat the
            wall splat. Their only out is ducking — which loses to every other WLF option.
          </p>
        </SubSection>

        <SubSection title="HAE 2 Wall Chip">
          <p>
            In heat near the wall, HAE 2 on block does 7-12 chip damage and leaves you +6.
            At level 3 HAE, the pushback on <em>hit</em> causes wall splats from further away.
            The wall chip loop — HAE 2, +6, re-enter stance, HAE 2 again — can drain
            significant health even if the opponent blocks everything.
          </p>
        </SubSection>

        <SubSection title="Political Storm Wall Carry">
          <p>
            f+1+2,3,1+2 (Political Storm) has excellent wall carry. After any launch in the
            open, combo routes that end with b+3,4,qcf+1+2 push the opponent toward the wall.
            Once at the wall, your combos convert into qcf+1+2,2 wall splat into wall combo
            for devastating damage.
          </p>
        </SubSection>

        <KeyConcept title="Wall Pressure Framework" icon="||">
          <p>
            Near the wall, your priorities shift. You don't need lows to condition — the threat
            of a wall splat from any mid is enough. Focus on:
          </p>
          <ul>
            <li><strong>Mids that wall splat:</strong> WLF 2, df+2 into wall, f+1+2,3,1+2 (Political Storm)</li>
            <li><strong>Plus-frame moves:</strong> b+1 (+2), db+3 (+7 on hit into HRS), HAE 2 (+6 on block)</li>
            <li><strong>Quick lows for chip:</strong> d+2 for high crush, db+3 for homing, d+3,1 for jail</li>
          </ul>
          <p>
            The opponent's back is to the wall. Every blocked mid pushes them closer. Every
            hit from a wall-splat move ends the round. You don't need to be fancy — steady
            mid pressure with occasional lows does the work.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Putting It Together: The Pressure Map">
        <p>
          Here's how all the frame trap tiers connect in a real match. This isn't a flowchart
          to memorize — it's a map of how one plus frame situation leads to another.
        </p>

        <Collapsible title="The Pressure Chain">
          <ol>
            <li><strong>b+1 on block (+2):</strong> d+2 crushes their jab → CH FC.df+2 → heat activation</li>
            <li><strong>f,f+2 on block (+5):</strong> df+2 trades with jab → 3,2 full combo. Or enter HRS for stance pressure.</li>
            <li><strong>HAE 2 on block (+6):</strong> db+3 trades with jab → Political Storm. Or continue HAE mixups.</li>
            <li><strong>db+3 on hit (+7 HRS):</strong> HRS 2 frame trap → heat engage → HAE stance</li>
            <li><strong>1,2,2 punish (+8 CAT):</strong> CAT options with frame advantage. CAT 1+2 tracks, CAT 3 beats buttons, CAT 4 for low.</li>
            <li><strong>WLF at +8:</strong> WLF 2 is a genuine frame trap. Wall splat threat near walls.</li>
          </ol>
          <p>
            Notice the pattern: each plus frame situation either leads to heat activation (the
            primary goal) or creates another plus frame situation. Lidia's pressure is a chain
            of earned advantages, not a single big read.
          </p>
        </Collapsible>

        <PracticeBox
          title="Frame Trap Drill"
          setup="Practice Mode, set opponent to jab after blocking"
          tasks={[
            { id: 'b1-d2', text: 'b+1 on block → d+2 high crush → confirm CH into FC.df+2', type: 'counter', target: 5 },
            { id: 'ff2-df2', text: 'f,f+2 on block → df+2 trade → 3,2 combo', type: 'counter', target: 5 },
            { id: 'hae2-db3', text: 'HAE 2 on block → db+3 trade → Political Storm', type: 'counter', target: 3 },
            { id: 'db3-hrs2', text: 'db+3 on hit → HRS 2 frame trap (confirm it beats their jab)', type: 'counter', target: 5 },
            { id: 'wlf2-trap', text: 'At +8 in WLF: WLF 2 frame trap beats opponent pressing buttons', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
