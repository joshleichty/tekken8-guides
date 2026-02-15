import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Heat System"
      intro="Heat amplifies everything Reina already does well. Auto-electrics remove the execution barrier. Her Taido kicks gain safe extensions for massive chip damage. Heaven's Wrath becomes a parry that shuts down retaliation. And d+2,1+2 — her Season 2 addition — makes post-engage pressure absolutely brutal. This chapter teaches you when to pop heat, what changes when you do, and how to squeeze every frame of advantage from it."
      hasPrevious
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="The Complete Reina"
    >
      <Section title="Heat Engagers">
        <p>
          Reina has five heat engagers, but you'll primarily use two or three in practice:
        </p>

        <MoveCard
          character="reina"
          videoId="SEN.3"
          move={{
            input: 'SEN 3',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i12',
            onBlock: '+1',
            onHit: '+7',
            tags: ['Heat Engager', 'Homing', 'Primary'],
            description: 'Your primary heat engager. Guaranteed after f,f+2 on hit or 1,1,2 on hit. The most natural way to enter heat — it flows directly from your core game plan. In heat, heat dash gives +5 and a guaranteed follow-up.',
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
            tags: ['Heat Engager', '13f Punish', 'Wall Splat'],
            description: 'Your punishment heat engager. Use this off 13-frame punishment to enter heat from blocking unsafe moves. In heat, heat dash guarantees a follow-up. Wall splats make this extra strong at the wall.',
          }}
          showVideo
        />

        <Collapsible title="Other Heat Engagers" icon="📋">
          <ul>
            <li><strong>f,f+3 (i20):</strong> Safe mid from range (-3 on block). More useful in heat as a combo starter since f,f+3 heat dash gives a full combo, whereas f,f+2 → SEN 3 heat dash only guarantees a follow-up.</li>
            <li><strong>WRA 2 (i15):</strong> Safe mid from Heaven's Wrath (-9 on block). In heat, launches for a full heat dash combo. Makes ducking in WRA much riskier for the opponent.</li>
            <li><strong>UNS 4 (i18):</strong> Long-range mid from Unsoku. Safe at -8. High crushes. In heat, fully launches for a heat dash combo. Used less frequently but incredible when it lands.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="What Heat Changes">
        <KeyConcept title="Auto-Electrics" icon="⚡">
          <p>
            In heat, Reina can perform EWGF and EWGK without perfect input. This means:
          </p>
          <ul>
            <li>Consistent +5 on block electrics for pressure</li>
            <li>Electrics from Heaven's Wrath crouch dash cancel — normally impossible to get the just-frame version</li>
            <li>More reliable 14-frame punishment with electric</li>
          </ul>
          <p>
            Auto-electrics use some remaining heat time, so don't spam them endlessly. But they remove
            the biggest execution barrier Reina has, making heat her strongest phase.
          </p>
        </KeyConcept>

        <KeyConcept title="Safe Taido Extensions" icon="🦶">
          <p>
            Three of Reina's strings gain safe extensions in heat:
          </p>
          <ul>
            <li><strong>3,4,4:</strong> High crush on first hit, -8 on block. Huge chip damage. The third hit makes the normally -14 string safe.</li>
            <li><strong>3+4,4,4:</strong> Low crush on first hit, -8 on block. Incredible whiff punisher — covers enormous range. Triggers wall gimmicks.</li>
            <li><strong>f+3+4,4:</strong> Guard break roll gains a safe followup. The charged version into the extension is devastating at the wall.</li>
          </ul>
          <p>
            Both 3,4,4 and 3+4,4,4 do massive chip damage even on block. Throw them out liberally in heat —
            the opponent bleeds health just by blocking.
          </p>
        </KeyConcept>

        <KeyConcept title="Heaven's Wrath Auto-Parry" icon="🛡️">
          <p>
            In heat, Heaven's Wrath automatically parries mid and high limb-based attacks (not knees,
            elbows, or weapons). This has enormous implications:
          </p>
          <ul>
            <li><strong>ws+4,4 → WRA becomes safe:</strong> Normally -10 in WRA, opponents can't punish because the parry catches their retaliation. Only hopkicks and lows beat it.</li>
            <li><strong>SEN 1+2 → WRA becomes nearly unpunishable:</strong> Normally -6 in WRA. In heat, only lows, throws, and hopkicks work.</li>
            <li><strong>WR 4 → WRA becomes safe against while standing punishment:</strong> Even if they duck it.</li>
          </ul>
          <p>
            The parry does 40 damage and leaves you at +1 in knockdown. Your opponent is forced to
            use hopkicks, lows, or throws to beat it — all of which you can bait and punish by canceling
            WRA with df~b.
          </p>
        </KeyConcept>
      </Section>

      <Section title="d+2,1+2 — The Season 2 Weapon">
        <MoveCard
          character="reina"
          videoId="H.d+2,1+2"
          move={{
            input: 'H.d+2,1+2',
            hitLevel: ['m', 'm'],
            damage: '17, 28',
            startup: 'i15',
            onBlock: '+7 UNS',
            onHit: 'KND',
            tags: ['Heat Only', 'Wall Splat', 'Key Move'],
            description: 'Reina\'s Season 2 signature heat move. 45 damage on hit with wall splat. On block, +7 into Unsoku — the opponent is locked down. Beats power crush, catches movement, and is an elbow so most parries can\'t stop it. Consumes heat time.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="d+2,1+2 After Heat Engage">
          <p>
            After landing a heat engager, opponents can sidestep and power crush your old follow-ups
            (WR 3, WR 4) since Season 2 reduced heat engage advantage to +9. But <strong>d+2,1+2</strong>
            is fast enough (i15) to frame trap from +9, beating sidesteps and power crush.
          </p>
          <p>
            This makes it the ideal follow-up after any heat engage. 45 damage, wall splat, and if they
            block it you're +7 in Unsoku. The only risk is they hard duck — but if they're scared of
            ducking from your mids, the hellsweep becomes free.
          </p>
        </TipBox>
      </Section>

      <Section title="Heat Smashes">
        <MoveCard
          character="reina"
          videoId="H.2+3"
          move={{
            input: 'Heat Smash (standing)',
            hitLevel: ['m', 'm'],
            damage: '20, 25',
            startup: 'i21',
            onBlock: '+8 WRA',
            onHit: 'KND',
            tags: ['Heat Smash', 'Wall Break', 'Key Move'],
            description: 'Slowest heat smash in the game but has enormous range. Use as a whiff punisher from range — opponents consistently underestimate how far it reaches. On block, +8 into Heaven\'s Wrath for a free mixup. Breaks walls in one hit. On wall break stages, this leads to a full combo.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="H.WRA.d+3+4"
          move={{
            input: 'WRA Heat Smash',
            hitLevel: ['l', 'm', 'm', 'm'],
            damage: '12, 8, 3, 12',
            startup: 'i18',
            onBlock: '-17',
            onHit: 'KND',
            tags: ['Heat Smash', 'Low', 'Floor Break', 'Risky'],
            description: 'Low heat smash from Heaven\'s Wrath. Floor breaks for a full combo. 35 damage total. Gives Reina a real low threat from WRA in the open. Launch punishable at -17 — one of the most punishable heat smashes in the game. Use it when the opponent is frozen and respecting your mids, or on floor break stages for guaranteed combos.',
          }}
          showVideo
        />
      </Section>

      <Section title="Heat Recovery">
        <p>
          Reina can extend her heat timer by entering Unsoku stance — she recovers some heat gauge
          each time. You can chain Unsoku stances together (back three → down three → up three) to
          maintain heat nearly indefinitely while baiting the opponent into approaching.
        </p>
        <p>
          Landing a successful <strong>b+1+3 / b+2+4</strong> parry also restores some heat. In heat,
          this parry becomes even more valuable since it both defends and extends your power window.
        </p>

        <TipBox variant="warning" title="Managing Heat Time">
          Auto-electrics, d+2,1+2, and the WRA heat smash all consume heat time. Don't waste your
          heat doing auto-electrics in neutral — save them for punishment or combos where the damage
          matters. Your heat time is finite. Spend it on high-value interactions: post-engage d+2,1+2,
          auto-parry setups, or chip damage with the Taido extensions.
        </TipBox>
      </Section>

      <Section title="When to Use Heat">
        <p>
          Reina's heat is strongest in these situations:
        </p>
        <ul>
          <li><strong>After punishment:</strong> 1,1,2 → SEN 3 heat engage → d+2,1+2 is devastating. Turns a 10-frame punish into 80+ total damage.</li>
          <li><strong>Near the wall:</strong> Auto-parry WRA shuts down retaliation. Chip damage extensions bleed the opponent. WRA heat smash threatens a floor break.</li>
          <li><strong>When you have a life lead:</strong> Chip damage from 3,4,4 and 3+4,4,4 makes blocking painful. You can win rounds purely through chip.</li>
          <li><strong>In combos:</strong> Heat burst at the end of a long combo adds significant damage. Auto-electrics in combos increase consistency.</li>
        </ul>
        <p>
          Don't pop heat in neutral unless you have a clear plan. Raw 2+3 heat burst is cancelable with
          b,b if the opponent doesn't approach, but wasted heat is wasted offense. Let heat come naturally
          from your engagers.
        </p>
      </Section>

      <Section title="Practice: Heat">
        <PracticeBox
          title="Heat Engage Follow-Up Drill"
          setup="Practice Mode. Land a heat engager, then practice the optimal follow-up."
          tasks={[
            { id: 'engage-d2', text: 'SEN 3 heat engage → heat dash → d+2,1+2', type: 'counter', target: 10 },
            { id: 'engage-ff3', text: 'f,f+3 heat engage → heat dash → full combo', type: 'counter', target: 5 },
            { id: 'wra2-launch', text: 'WRA 2 heat engage → heat dash → full combo', type: 'counter', target: 5 },
            { id: 'chip-loop', text: 'In heat: 3,4,4 on block → continue pressure (feel the chip)', type: 'counter', target: 5 },
            { id: 'auto-parry', text: 'In heat: SEN 1+2 → WRA → opponent jabs → auto parry', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
