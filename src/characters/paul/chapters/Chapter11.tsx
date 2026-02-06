import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, TipBox, PracticeBox, KeyConcept, Collapsible, SituationDrill } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="The Punisher"
      intro="Paul can't always be on offense. You need to know how to defend, how to punish, and how to survive until your moment comes. This chapter covers Paul's punishment table, his defensive tools, and how to handle pressure."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="The Complete Paul"
    >
      <Section title="Standing Punishment">
        <p>
          Punishment is the bread and butter of defense in Tekken. When your opponent does something unsafe on block,
          you need the fastest, most damaging response for that frame window. Paul's punishment has one glaring weakness
          (i10) and one standout strength (i14).
        </p>

        <SubSection title="i10 — The Weakness">
          <MoveCard
            character="paul"
            move={{
              input: '1,2',
              hitLevel: ['h', 'h'],
              damage: '17',
              startup: 'i10',
              onBlock: '-3',
              onHit: '+8',
              tags: ['high'],
              description: 'Paul\'s 10-frame punish. Just jabs. 17 damage. Nothing magical happening here. This is Paul\'s biggest weakness — other characters get 30+ damage from i10 punishes.',
              notes: [
                '17 damage is below average for a 10f punish',
                '1,2,3 does 24 damage but the third hit is -25 on block AND -14 on hit',
                'Only use 1,2,3 if it literally wins you the round',
                'This is the one area where Paul is definitively weak',
              ],
            }}
            showVideo
          />

          <TipBox title="Accepting the Weakness" variant="warning">
            Paul's i10 punishment is bad. There's no way around it. 1,2 does 17 damage. 1,2,3 does 24 but is punishable 
            even ON HIT (-14). Some characters get full launches for things Paul can only jab punish. Accept this and 
            move on — Paul makes up for it everywhere else.
          </TipBox>
        </SubSection>

        <SubSection title="i12 — Solid">
          <MoveCard
            character="paul"
            move={{
              input: 'b+1,2',
              hitLevel: ['h', 'm'],
              damage: '10, 21',
              startup: 'i12~13',
              onBlock: '-14',
              onHit: '+16d',
              tags: ['high', 'mid', 'tornado', 'wall splat'],
              description: '12-frame punish. First hit is a high but jails from a punish situation. Second hit wall splats and gives Tornado. Significant upgrade from jabs.',
              notes: [
                'Jails from block stun — they can\'t duck the second hit in a punish',
                'Tornado — can extend into combos in certain situations',
                'Wall splats — enormous damage near walls',
                'Your standard punish for -12 moves',
              ],
            }}
            videoId="b+1,2"
            showVideo
          />
        </SubSection>

        <SubSection title="i13 — f+2 (Heat Engager)">
          <MoveCard
            character="paul"
            move={{
              input: 'f+2',
              hitLevel: ['h', 't'],
              damage: '12, 22',
              startup: 'i13',
              onBlock: '-5',
              onHit: '+9',
              tags: ['high', 'heat engager'],
              description: 'Fast high Heat Engager. At i13, this punishes -13 moves AND starts your Heat activation. Transitions to throw on front hit.',
              notes: [
                'Heat Engager — punishing a -13 move starts your Heat',
                'Transitions to throw on front hit for extra damage',
                '+9 on hit / +32a without throw transition',
                'Safe on block at -5',
              ],
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="i14 — The Paul Special">
          <MoveCard
            character="paul"
            move={{
              input: 'b+3',
              hitLevel: ['h'],
              damage: '16',
              startup: 'i14~15',
              onBlock: '-6',
              onHit: '+31a',
              tags: ['high', 'launcher'],
              description: 'b+3 is a 14-frame crumple launcher. Most characters must wait until i15 for a launcher punish. Paul gets it at i14. This makes EVERY -14 move extra deadly against Paul.',
              notes: [
                'i14 launcher — one frame faster than most characters\' launcher punish',
                'Full combo on hit — 60+ damage',
                'Anything -14 against Paul is a death sentence',
                'This is one of Paul\'s most underrated strengths',
              ],
            }}
            showVideo
          />

          <KeyConcept title="Why i14 Matters So Much" icon="⚡">
            <p>
              Most characters can only punish -14 moves with a regular mid for ~25 damage. Paul gets a full combo launcher.
              That means moves that are "safe enough" against most of the cast become launch-punishable against Paul.
              Things like certain hopkicks, snake edges, and power moves that are -14 on block — Paul gets 60+ damage
              where other characters get 25. This is a huge, underappreciated advantage.
            </p>
          </KeyConcept>
        </SubSection>

        <SubSection title="i15+ — Full Launch">
          <MoveCard
            character="paul"
            move={{
              input: 'df+2',
              hitLevel: ['m'],
              damage: '13',
              startup: 'i15~16',
              onBlock: '-8',
              onHit: '+33a',
              tags: ['mid', 'launcher'],
              description: 'Your standard i15 launcher for -15 and worse moves. Safe on block. Full combo.',
              notes: [
                'Use for anything -15 or worse',
                'Also: uf+3,4 for an alternative i15 punish',
              ],
            }}
            showVideo
          />

          <p>
            For more specific punishes: f+3,1 (i16 with range) is good for moves that push back far, like
            certain Death Fist-type moves from other characters. qcf+2 is your go-to when you have time and
            want maximum single-hit damage as whiff punishment.
          </p>
        </SubSection>
      </Section>

      <Section title="Crouching Punishment">
        <Collapsible title="While Standing Punishment Table" icon="📋" defaultOpen>
          <ul>
            <li><strong>ws+4 (i11):</strong> Fast while-standing kick. 18 damage. Your standard low block punish.</li>
            <li><strong>ws+3,2 (i13):</strong> Better damage, the 2 follow-up wall splats on hit. CH gives huge damage.</li>
            <li><strong>ws+2 (i15):</strong> While-standing launcher. Full combo off blocked lows that are -15 or worse.</li>
            <li><strong>uf+3,4 (i15):</strong> Alternative launcher from standing after low block (use the hop kick).</li>
          </ul>
        </Collapsible>

        <TipBox title="Whiff Punishment" variant="tip">
          Paul's best whiff punishers are qcf+2 (Death Fist, maximum damage), b+1,2 (Tornado from range), 
          and df+2 (safe launcher). For whiff punishing at long range, Death Fist is king — the range and 
          damage are unmatched. If you're unsure, df+2 is the safest option since it's -8 even if they recover.
        </TipBox>
      </Section>

      <Section title="Defensive Tools">
        <SubSection title="Parries">
          <MoveCard
            character="paul"
            move={{
              input: 'b+1+3',
              hitLevel: ['special'],
              damage: '-',
              startup: '-',
              onBlock: '-',
              onHit: '+1d',
              tags: ['evasive'],
              description: 'High/mid parry. Active frames 5-12. Reverses highs and mids. Not many characters have parries — Paul does. Use against predictable strings.',
              notes: [
                'Also b+2+4 — same parry, different input',
                'Active frames 5-12 — not a huge window, need to read the timing',
                'Use against characters with predictable mid strings',
                'Not essential but a nice tool for matchup-specific defense',
              ],
            }}
            videoId="b+1+3"
            showVideo
          />
        </SubSection>

        <SubSection title="Power Crush">
          <MoveCard
            character="paul"
            move={{
              input: 'b+1+2',
              hitLevel: ['h'],
              damage: '28',
              startup: 'i24',
              onBlock: '-9',
              onHit: '+21d',
              tags: ['high', 'power crush'],
              description: 'Power crush that absorbs hits. i24 startup, chip damage if attack is absorbed. -9 on block, wall splats on hit.',
              notes: [
                'Power crush 7-23 — absorbs mids and highs during these frames',
                'Chip damage (11) to opponent if their attack is absorbed',
                '-9 on block — safe enough',
                'Use when you need to power through strings',
              ],
            }}
            showVideo
          />

          <MoveCard
            character="paul"
            move={{
              input: 'db+1+2',
              hitLevel: ['M'],
              damage: '21',
              startup: 'i20~21',
              onBlock: '-14',
              onHit: '+30a',
              tags: ['mid', 'power crush'],
              description: 'Mid power crush shoulder. -14 on block (punishable) but launches on hit. Absorbs hits.',
              notes: [
                'Power crush 7-19',
                '-14 on block — risky, but launches on hit',
                'Good as a combo breaker when you predict mid attacks',
                'Can be punished by Paul\'s own b+3 if you fight a mirror match',
              ],
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="Evasion">
          <p>
            Paul's df+2 has natural high evasion — use it to evade jabs while launching. Paul's crouch dash also
            provides high crush throughout, going under highs while approaching. And back sway creates backward
            movement that can make whiffed attacks punishable.
          </p>
          <p>
            f+1+4 is a special evasive shoulder move that ducks hard left. At -4 on block with sharp leftward
            movement, it's a niche but useful evasion tool against certain linear attacks.
          </p>
        </SubSection>
      </Section>

      <Section title="Dealing with Pressure">
        <SituationDrill
          title="Handling Aggressive Opponents"
          situation="The opponent is in your face, pressing buttons constantly. They're running jab strings, frame traps, and you can't find space to breathe."
          context="Paul is not a string character — you need space to set up your offense. This drill teaches you how to create it."
          opponentActions={[
            {
              slot: 1,
              action: 'Jab jab (1,2)',
              yourResponse: 'df+2 — Paul\'s df+2 evades highs. Launch them for pressing jabs.',
              timing: 'After blocking the first jab, input df+2 immediately',
            },
            {
              slot: 2,
              action: 'df+1 pressure',
              yourResponse: 'Backdash → whiff punish with qcf+2 or df+2',
              timing: 'Backdash on block, watch for the whiff, punish',
            },
            {
              slot: 3,
              action: 'Aggressive approach (running moves)',
              yourResponse: 'f+4 — homing mid Heat Engager. Catches everything.',
              timing: 'When you see them running forward, f+4 checks them',
            },
          ]}
          setup={{
            cpuBehavior: 'Record Actions',
            playbackMode: 'Random',
            position: 'Midscreen',
          }}
          goal="Survive the pressure and find a punish opportunity. Create space, then counter-attack."
          successCriteria="Successfully defending and counter-attacking 3 out of 5 recorded sequences."
          commonMistakes={[
            'Mashing buttons during their pressure — Paul\'s i10 is weak, so mashing often trades poorly',
            'Trying to Death Fist through pressure — it\'s too slow at i13 for most gaps',
            'Not using backdash — Paul needs space; create it with movement',
          ]}
          mentalCue="When under pressure, think \'survive, then punish.\' Don't try to out-mash — find the gap, then make one big decision."
        />
      </Section>

      <Section title="Punishment Quick Reference">
        <Collapsible title="Full Punishment Table" icon="📋" defaultOpen>
          <p><strong>Standing:</strong></p>
          <ul>
            <li><strong>i10:</strong> 1,2 (17 damage) — jabs only</li>
            <li><strong>i12:</strong> b+1,2 (31 damage) — Tornado, wall splat</li>
            <li><strong>i13:</strong> f+2 (34 damage with throw) — Heat Engager</li>
            <li><strong>i14:</strong> b+3 (60+ damage combo) — crumple launcher, Paul special</li>
            <li><strong>i15:</strong> df+2 (70+ damage combo) — safe launcher</li>
            <li><strong>i16+:</strong> f+3,1 (32 damage, range) or uf+3,4 → combo</li>
            <li><strong>Whiff:</strong> qcf+2 (45 damage + wall carry) or df+2 → combo</li>
          </ul>
          <p><strong>Crouching (after blocking lows):</strong></p>
          <ul>
            <li><strong>i11:</strong> ws+4 (18 damage)</li>
            <li><strong>i13:</strong> ws+3,2 (37 damage, wall splat)</li>
            <li><strong>i15:</strong> ws+2 → combo (67+ damage)</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Practice: Defense">
        <PracticeBox
          title="Punishment Drill"
          setup="Practice Mode. Record CPU doing various unsafe moves."
          tasks={[
            { id: 'pun-10', text: 'Block a -10 move → 1,2. Muscle memory. 10 times.', type: 'counter', target: 10 },
            { id: 'pun-12', text: 'Block a -12 move → b+1,2. 10 times.', type: 'counter', target: 10 },
            { id: 'pun-14', text: 'Block a -14 move → b+3 → full combo. 10 times. This is your money punish.', type: 'counter', target: 10 },
            { id: 'pun-15', text: 'Block a -15 move → df+2 → full combo. 5 times.', type: 'counter', target: 5 },
            { id: 'pun-ws', text: 'Block a -15 low → ws+2 → combo. 5 times.', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
