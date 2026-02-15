import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, MatchScenario, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Heaven's Wrath"
      intro="Sentai is where Reina's pressure starts. Heaven's Wrath is where it becomes terrifying. This stance offers frame traps, unbreakable throws, chip damage loops, and in heat — an automatic parry that shuts down retaliation. Learning when and how to enter it is the difference between a Reina who pressures and a Reina who suffocates."
      hasPrevious
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Space and Pokes"
    >
      <Section title="Entering Heaven's Wrath">
        <p>
          You almost never enter Heaven's Wrath manually (d+1+2). Instead, you flow into it from moves
          that leave you at advantage. The two frame situations you'll encounter most are <strong>+6</strong>
          and <strong>+8</strong>.
        </p>

        <KeyConcept title="Plus 6 Entries" icon="⚡">
          <ul>
            <li><strong>ws+4,4 → hold D:</strong> Your 11-frame crouching punish. The most common entry.</li>
            <li><strong>Hellsweep (CD4,2) → hold D:</strong> On hit, transitions to WRA at +6. Always hold down after landing a hellsweep.</li>
          </ul>
          <p>
            At +6, WRA 1 (i12) becomes a true frame trap — it beats everything including power crush.
            On counter hit, WRA 1 into Sentai gives 68 damage. This is the threat that makes opponents
            afraid to press.
          </p>
        </KeyConcept>

        <KeyConcept title="Plus 8 Entries" icon="🔥">
          <ul>
            <li><strong>SEN 2 → hold D:</strong> Safe mid from Sentai transitions to WRA at +8 on hit.</li>
            <li><strong>df+4,2 → hold D:</strong> Mid string that transitions to WRA at +8 on hit.</li>
            <li><strong>While running 4 → hold D:</strong> Homing approach tool, +8 in WRA.</li>
            <li><strong>WRA 3,4 → hold D:</strong> The chip damage loop. +8 back into WRA.</li>
          </ul>
          <p>
            At +8, most characters can't sidestep effectively. WRA 4,2,2,1+2 becomes uninterruptible.
            This is the frame situation where Heaven's Wrath becomes truly oppressive.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Heaven's Wrath Options">
        <MoveCard
          character="reina"
          videoId="WRA.1"
          move={{
            input: 'WRA 1',
            hitLevel: ['h'],
            damage: '12',
            startup: 'i12',
            onBlock: '-4',
            onHit: '+8',
            onCH: '+14c',
            tags: ['High', 'Homing', 'Fastest', 'Chip Damage'],
            description: 'Your fastest Heaven\'s Wrath option. Homing, so it catches all sidesteps. At +6, this is a frame trap against everything. Transitions to Sentai at +13 on hit (SEN 3 guaranteed). On counter hit, +18 into Unsoku (UNS 4 guaranteed) or +14 crouching into Sentai (SEN 1+2 guaranteed for 68 damage).',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="WRA.2"
          move={{
            input: 'WRA 2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i15',
            onBlock: '-9',
            onHit: 'KND',
            tags: ['Mid', 'Heat Engager', 'Safe', 'Key Move'],
            description: 'Safe mid heat engager from stance. High damage, wall splats. In heat, this launches for a full combo off heat dash. Vulnerable to sidestep right — use WRA 1 to stop stepping first. Your go-to mid when the opponent is ducking WRA 1.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="WRA.3,4"
          move={{
            input: 'WRA 3,4',
            hitLevel: ['m', 'm'],
            damage: '17, 20',
            startup: 'i28',
            onBlock: '+6',
            onHit: 'KND',
            tags: ['Mid-Mid', 'Plus on Block', 'Chip Damage', 'Low Crush'],
            description: 'Slow but devastating on block. Chip damage and +6 — can transition back into WRA with D for +8, creating a chip damage loop. Low crushes early. On hit, wall splats at certain distances. On block without transition, still +6. The move that makes passive opponents bleed.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="WRA.1+2"
          move={{
            input: 'WRA 1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i15',
            onBlock: '-13',
            onHit: 'KND',
            tags: ['Power Crush', 'Wall Splat'],
            description: 'Power crush from stance. Wall splats. Use when you expect the opponent to press buttons or use a heat burst. Unsafe at -13, but the threat of WRA 1 frame trapping makes opponents hesitant to punish — especially if they have to guess between this and WRA 2.',
          }}
          showVideo
        />

        <MoveCard
          character="reina"
          videoId="WRA.d+4,3"
          move={{
            input: 'WRA d+4,3',
            hitLevel: ['l', 'm'],
            damage: '9, 20',
            startup: 'i16',
            onBlock: '-16',
            onHit: '+48',
            onCH: '+53a',
            tags: ['Low-Mid', 'CH Confirmable', 'Risky'],
            description: 'Low option from Heaven\'s Wrath. Not natural on normal hit — the second hit is a counter hit launcher if they press after blocking the low. First hit alone is -15. Very risky but keeps opponents from just holding down-back. CH confirmable with practice.',
          }}
          showVideo
        />

        <Collapsible title="Other WRA Options" icon="📋">
          <ul>
            <li><strong>WRA 1+3 / 2+4:</strong> Unbreakable throw. Low damage in the open (20) but 35 at the wall. Forces opponents to duck, which opens them up to all your mids.</li>
            <li><strong>WRA 3+4:</strong> Knockdown on hit, 0 on block with chip damage. Forces the opponent into crouch. Hits grounded opponents.</li>
            <li><strong>WRA 4,2,2,1+2:</strong> Five-hit string. Only the first hit connects on normal hit, but if the first hit counter hits (the stomp), the rest is guaranteed. The last hit can be empowered with qcf+1+2 for 6 extra damage. Hit confirmable from the stomp counter hit.</li>
            <li><strong>WRA 1,4:</strong> Natural combo from WRA 1 on hit. Safe at -9. Good alternative to the Sentai transition when you want guaranteed damage without committing to a read.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="The Heaven's Wrath Game Plan">
        <MatchScenario
          title="Heaven's Wrath at +6"
          situation="You've landed ws+4,4 or hellsweep and transitioned into Heaven's Wrath. You're at +6. What does the opponent do?"
          options={[
            {
              action: 'They press buttons',
              input: 'WRA 1',
              result: 'WRA 1 is a frame trap at +6. Beats everything including power crush. On counter hit, transition to Sentai for 68 damage (SEN 1+2 → WRA 2).',
              isOptimal: true,
              followup: 'Once they stop pressing, your slower options become available.',
            },
            {
              action: 'They sidestep right',
              input: 'WRA 1',
              result: 'WRA 1 is homing — catches all sidesteps. Once they stop stepping, WRA 2 and WRA 3,4 become threats.',
            },
            {
              action: 'They stand block',
              input: 'WRA 3,4 or WRA throw',
              result: 'WRA 3,4 does chip damage and is +6 on block — you can loop back into WRA for more chip. The throw does 20 damage (35 at wall) and is unbreakable.',
              followup: 'Standing block is what you want them to do. Chip damage and throws add up.',
            },
            {
              action: 'They duck',
              input: 'WRA 2 or WRA 1+2',
              result: 'WRA 2 is a safe 30-damage mid heat engager. WRA 1+2 power crush wall splats. Both devastate ducking opponents.',
            },
            {
              action: 'They power crush',
              input: 'WRA 1 or block',
              result: 'At +6, WRA 1 beats power crush. You can also cancel WRA (df~b) and block, then launch their power crush.',
            },
          ]}
          keyTakeaway="WRA 1 is your default at +6. It beats pressing, stepping, and power crush. Only ducking beats it, and that opens you up to your scariest mids. Start with WRA 1, then adapt based on what the opponent does."
        />

        <TipBox variant="tip" title="The Chip Damage Loop">
          <p>
            WRA 3,4 on block is +6 with chip damage. If you hold D, you re-enter Heaven's Wrath at +8.
            Do WRA 3,4 again — more chip, back to +8. The opponent is slowly bleeding while you're plus.
            This loop forces them to either interrupt (risky — WRA 1 frame traps) or accept the chip.
          </p>
          <p>
            At the wall, this loop becomes especially deadly because WRA 3,4 can wall splat at certain
            distances, turning safe chip pressure into a full wall combo.
          </p>
        </TipBox>
      </Section>

      <Section title="Canceling and Transitioning">
        <p>
          Heaven's Wrath isn't a trap you're stuck in. You can cancel or transition at any time:
        </p>
        <ul>
          <li><strong>df~b (crouch dash cancel):</strong> Exit Heaven's Wrath into standing. Use this to block power crushes, hopkicks, or just reset the situation.</li>
          <li><strong>f+3 (to Sentai):</strong> Transition directly to Sentai for a different set of mixups. Useful when you want SEN options instead of WRA options.</li>
          <li><strong>df (crouch dash):</strong> Access all Mishima tools — hellsweep, electric, CD3. In heat, you can get auto-electrics from this cancel.</li>
        </ul>

        <KeyConcept title="WRA 1 → Sentai Confirm" icon="🎯">
          <p>
            This is one of the most important confirms to practice. WRA 1 on hit transitions to
            Sentai at +13 with F. At +13, SEN 3 is guaranteed. On counter hit, SEN 1+2 is guaranteed
            for 68 total damage (which launches in heat for even more).
          </p>
          <p>
            <strong>Practice drill:</strong> Set the dummy to shuffle (random block/hit). Do WRA 1.
            On normal hit, confirm SEN 3. On counter hit, confirm SEN 1+2. On block, do nothing
            or use WRA 1,4 as a safe alternative.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practice: Heaven's Wrath">
        <PracticeBox
          title="Heaven's Wrath Entry Drill"
          setup="Practice Mode. Practice entering WRA from different moves."
          tasks={[
            { id: 'wra-ws44', text: 'ws+4,4 → hold D → WRA (feel the +6 timing)', type: 'counter', target: 10 },
            { id: 'wra-hellsweep', text: 'Hellsweep (CD4,2) → hold D → WRA 1 (frame trap)', type: 'counter', target: 10 },
            { id: 'wra-sen2', text: 'SEN 2 → hold D → WRA 2 (mid into heat engager)', type: 'counter', target: 5 },
            { id: 'wra-wr4', text: 'While running 4 → hold D → WRA 3,4 (chip loop)', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="WRA 1 Counter Hit Confirm"
          setup="Practice Mode. Set dummy to Player Counter: Shuffle. Enter WRA and practice confirming WRA 1."
          tasks={[
            { id: 'wra1-hit', text: 'WRA 1 on hit → hold F → SEN 3 (normal hit confirm)', type: 'counter', target: 10 },
            { id: 'wra1-ch', text: 'WRA 1 on CH → hold F → SEN 1+2 (counter hit confirm)', type: 'counter', target: 10 },
            { id: 'wra1-block', text: 'WRA 1 on block → do nothing or WRA 1,4 (block discipline)', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
