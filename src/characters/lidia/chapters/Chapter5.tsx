import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, OptionTest, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Reading the Stance"
      intro="This is where Lidia becomes Lidia. Her stances aren't autopilot sequences — they're decision trees. Every option you have from CAT and HRS exists to beat a specific thing the opponent does. Your job isn't to 'run the mixup.' It's to observe what they do and pick the option that punishes it."
      hasPrevious
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="The Wolf's Patience"
    >
      <Section title="Cat Stance (CAT)">
        <p>
          You enter CAT from <strong>1,2,2</strong> (+8), <strong>df+2</strong> (+11 hit / -8 real block),{' '}
          <strong>2,2</strong> (+11), <strong>ws4,2</strong> (+8), or <strong>3+4</strong> (0). The
          frame advantage you have determines what the opponent can do, which determines what you should do.
        </p>

        <SubSection title="The Three Core Options">
          <MoveCard
            character="lidia"
            videoId="CAT.1"
            move={{
              input: 'CAT 1',
              hitLevel: ['m'],
              damage: '26',
              startup: 'i17',
              onBlock: '-4',
              onHit: '+18a',
              onCH: '+38a',
              tags: ['mid'],
              description: 'Safe mid. Catches opponents who duck or sidestep left. On counter-hit, guarantees f,f+1+2 (clean hit does more damage). Wall splats. Your default "honest" option.',
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="CAT.3"
            move={{
              input: 'CAT 3',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i13',
              onBlock: '-4',
              onHit: '+11g',
              tags: ['heat engager'],
              description: "Fastest CAT option (i13). High heat engager. Beats opponents pressing buttons, using armor, or trying to power crush. Can be ducked. Use this when you KNOW they're going to press.",
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="CAT.4"
            move={{
              input: 'CAT 4',
              hitLevel: ['l'],
              damage: '14',
              startup: 'i19',
              onBlock: '-6 (-14 real)',
              onHit: '+8c',
              onCH: '+33a',
              tags: ['low', 'ch launcher'],
              description: "Low into WLF stance. High crushes. On counter-hit, launches for a full combo. On block, the real frames are -14 (launch punishable). On hit, transitions to WLF at +8 where you can continue pressure.",
              notes: ['Launch punishable on block (-14 real)', 'CH launches for full combo', 'Transitions to WLF on hit or block'],
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="The Secret Weapon: CAT 1+2">
          <MoveCard
            character="lidia"
            videoId="CAT.1+2"
            move={{
              input: 'CAT 1+2',
              hitLevel: ['m'],
              damage: '25',
              startup: 'i16',
              onBlock: '-1',
              onHit: '+27g',
              onCH: '+37',
              tags: ['tracking', 'tornado'],
              description: "The best move from CAT. Mid, tracks both directions, -1 on block (effectively safe), transitions to WLF. On hit you're +27 in WLF — everything is guaranteed. On counter-hit even more plus. This is the move that makes CAT stance genuinely threatening. Use it when you expect the opponent to sidestep or when you want a safe stance check.",
            }}
            showVideo
          />
        </SubSection>

        <OptionTest
          title="What To Do From CAT (After 1,2,2 at +8)"
          situation="You landed 1,2,2 as a punish. You're in CAT at +8. What does the opponent do?"
          frameData="+8 in CAT stance"
          testResults={[
            {
              option: 'They jab (i10)',
              input: 'CAT 3',
              result: 'works',
              detail: 'CAT 3 is i13 from +8, so you strike at frame 5. Their jab strikes at frame 2. They hit you first — BUT CAT 3 beats their jab if they committed to a full string like 1,2. If they only jab, you trade unfavorably. CAT 3 is best when they press anything slower than a single jab.',
              verdict: 'CAT 3 beats strings, 1+2s, and armor. Against naked jabs, you trade or lose.',
            },
            {
              option: 'They armor / power crush',
              input: 'CAT 3',
              result: 'works',
              detail: 'CAT 3 beats armor at +8. The high connects before their armor activates. This is the primary reason to use CAT 3 — it catches every aggressive response.',
            },
            {
              option: 'They hold back (stand block)',
              input: 'CAT 4 or CAT 1',
              result: 'works',
              detail: 'If they respect you, use CAT 4 (low into WLF) or CAT 1 (safe mid). CAT 1+2 is also excellent as a safe mid that tracks. The mixup is: do they block mid or low?',
            },
            {
              option: 'They duck',
              input: 'CAT 1 or CAT 1+2',
              result: 'works',
              detail: 'Both mids catch ducking opponents. CAT 1 is faster, CAT 1+2 tracks better.',
            },
            {
              option: 'They sidestep right',
              input: 'CAT 1+2',
              result: 'works',
              detail: 'CAT 1+2 tracks both directions. It catches sidesteps that would beat CAT 1 and CAT 4.',
            },
          ]}
          bestOption="Hold back first. Then choose based on what you observe."
          reasoning="At +8, you CAN press — but the opponent can still jab you out of some options. The safest approach is to hold back after 1,2,2, see what the opponent does (do they jab? armor? stand block?), and then next time you're in this situation, pick the option that beats their habit. Lidia is a reading character, not a gambling character."
          practiceNote="In training mode, set the opponent to different responses after blocking 1,2,2. Practice choosing the right CAT option for each."
        />
      </Section>

      <Section title="Horse Stance (HRS)">
        <p>
          You enter HRS from <strong>f,f+2</strong> (+5 block / +15 hit), <strong>db+3</strong> (+7 hit),{' '}
          <strong>f+3,4</strong> (+5 block), or <strong>qcf+4</strong> (+5 block). The frame advantage
          and your opponent's tendencies together determine your option.
        </p>

        <SubSection title="HRS Options">
          <MoveCard
            character="lidia"
            videoId="HRS.1"
            move={{
              input: 'HRS 1',
              hitLevel: ['h'],
              damage: '22',
              startup: 'i17',
              onBlock: '+1',
              onHit: '+16g',
              tags: ['homing', 'power crush'],
              description: "Homing high with power crush. Catches sidesteps and beats buttons through armor. On hit at +16, transitions to WLF with massive advantage. On block at +1, transitions to WLF — but +1 means your WLF options (fastest i15) can be interrupted by i13 or faster. Don't press after HRS 1 on block.",
              notes: ['+16 on hit: everything from WLF is a frame trap', '+1 on block: hold back, do NOT press'],
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="HRS.2"
            move={{
              input: 'HRS 2',
              hitLevel: ['m', 't'],
              damage: '18, 10',
              startup: 'i16',
              onBlock: '-10',
              onHit: '+8',
              tags: ['heat engager'],
              description: "Mid heat engager with throw follow-up on hit. -10 on block (punishable). On hit, activates heat and transitions to HAE if heat is still active. This is your big reward button — use it when you've confirmed a hit (after f,f+2 hit) or when you're making a read that the opponent won't punish.",
              notes: ['Guaranteed after f,f+2 on hit (normal or CH)', 'Transitions to HAE on hit when heat is active'],
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="HRS.3"
            move={{
              input: 'HRS 3',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i22',
              onBlock: '-4',
              onHit: '+14',
              tags: ['homing'],
              description: "The anti-d+1 option. This move jumps over low pokes and hits mid. When opponents start d+1-checking your HRS transitions, HRS 3 is the answer. Homing, safe at -4. On hit at +14, guarantees f+1+2 (Political Storm first three hits) for heat engage, or f,f+2 for a just-frame link into heat dash combo if you're already in heat.",
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="HRS.4"
            move={{
              input: 'HRS 4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i28',
              onBlock: '+8',
              onHit: '+22d',
              onCH: '+44a',
              tags: ['plus on block'],
              description: "Slow axe kick that's +8 on block and transitions to WLF. At +8, WLF 2 is a frame trap. On counter-hit, launches. This is your option when the opponent is being very passive — they hold back and wait. The +8 advantage gives you real WLF pressure.",
              notes: ['On CH: full combo', '+8 into WLF: WLF 2 is a frame trap'],
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="HRS.1+2"
            move={{
              input: 'HRS 1+2',
              hitLevel: ['l'],
              damage: '17',
              startup: 'i20',
              onBlock: '-18',
              onHit: '-1c',
              onCH: '+67a',
              tags: ['low', 'ch launcher'],
              description: "The risky low. High crushes. On counter-hit, launches for a devastating combo. On block, launch punishable. This is a hard read — use it when you're confident the opponent will press a high after your HRS transition.",
            }}
            showVideo
          />
        </SubSection>

        <KeyConcept title="The HRS Decision Framework" icon="🧠">
          <p>After f,f+2 on block (+5 in HRS), here's your decision tree:</p>
          <ul>
            <li><strong>They jab:</strong> HRS 3 jumps over d+1 and beats standing jabs at this advantage. HRS 1 power-crushes through buttons.</li>
            <li><strong>They d+1 (down jab):</strong> HRS 3 is the ONLY option that reliably beats d+1. This is critical.</li>
            <li><strong>They sidestep:</strong> HRS 1 is homing and catches all sidesteps.</li>
            <li><strong>They stand block:</strong> HRS 4 for +8 into WLF, or just hold back.</li>
            <li><strong>They armor:</strong> HRS 1 power-crushes through it.</li>
            <li><strong>You're unsure:</strong> Hold back. You're +5 — you gave up nothing by blocking. Next time, you'll have information.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Most Important Lesson">
        <p>
          New Lidia players get in trouble because they feel obligated to press a button every time
          they enter stance. <strong>You are not.</strong> Holding back to exit stance is always an
          option, and it's often the best one.
        </p>
        <p>
          Think of it this way: every time you enter stance, you're gathering information. What did
          the opponent do? Did they jab? Duck? Sidestep? Armor? Just block? That answer tells you
          what to do <em>next time</em> you're in the same situation. The first time you enter
          stance in a match, you should probably just block and observe. The second time, you have
          a read. The third time, you adapt if they changed.
        </p>

        <TipBox variant="tip" title="The Observation Stance">
          Try this: play three rounds where every time you enter CAT or HRS, you hold back and
          exit stance without pressing anything. Watch what the opponent does. Do they jab? Armor?
          Stand there? After three rounds, you'll know exactly which option beats them every time.
        </TipBox>

        <PracticeBox
          title="Stance Reading Drill"
          setup="Set opponent to random actions after blocking f,f+2 (jab, d+1, sidestep, stand block)"
          tasks={[
            { id: 'ff2-observe', text: 'Do f,f+2 → hold back 5 times. Watch what the opponent does each time', type: 'counter', target: 5 },
            { id: 'hrs3-d1', text: 'Set opponent to d+1 after f,f+2. Confirm HRS 3 beats it', type: 'toggle' },
            { id: 'hrs1-ss', text: 'Set opponent to sidestep. Confirm HRS 1 catches it', type: 'toggle' },
            { id: 'cat-read', text: 'After 1,2,2 punish: choose the correct CAT option vs 3 different responses', type: 'counter', target: 9 },
          ]}
        />

        <Collapsible title="Quick Reference: When to Hold Back">
          <ul>
            <li><strong>After df+2 on block (CAT, -8 real):</strong> Almost always hold back. You're minus.</li>
            <li><strong>After 1,2,2 on block (CAT, -16 real):</strong> This shouldn't happen (it's a punish-only move), but if it does — you're getting launched.</li>
            <li><strong>After f,f+2 on block (HRS, +5):</strong> Safe to hold back and gather info. You lost nothing.</li>
            <li><strong>After db+3 on hit (HRS, +7):</strong> You can press, but the opponent can still do a mid wake-up kick that beats your options. Be careful.</li>
            <li><strong>After HRS 1 on block (WLF, +1):</strong> Hold back. Your fastest WLF option is i15, they can interrupt with anything i13 or faster.</li>
          </ul>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
