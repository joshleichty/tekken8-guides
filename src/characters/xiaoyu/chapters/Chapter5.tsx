import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard, 
  TipBox,
  PracticeBox,
  KeyConcept,
  Collapsible,
  StanceBox,
  SituationCard
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Rain Dance"
      intro="Rain Dance (RDS / BT) is Xiaoyu's back-turned stance — and it's where she becomes most dangerous. With a superior sidestep, fast launchers, a throw mixup, and a parry, BT is the stance that controls matches."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn Combos"
    >
      <Section title="Understanding Rain Dance">
        <StanceBox name="Rain Dance (RDS / BT)" input="b+3+4" icon="💃">
          <p>
            Rain Dance is Xiaoyu's back-turned stance. Unlike most characters who are vulnerable when 
            back-turned, Xiaoyu <em>thrives</em> here. Her BT sidestep is superior to her normal sidestep, 
            she has fast pokes and launchers, access to a throw mixup, and a parry that protects her back.
          </p>
          <ul>
            <li><strong>Superior sidestep</strong> — Covers more distance than her neutral SS</li>
            <li><strong>BT.b+1+3 parry</strong> — Active from frame 1, parries punches and kicks</li>
            <li><strong>BT.db retreat</strong> — Creates space and transitions to crouch for ws2 fishing</li>
            <li><strong>Access to throws</strong> — 3-way throw mixup plus an unbreakable throw</li>
          </ul>
        </StanceBox>

        <KeyConcept title="The BT Sidestep Advantage" icon="↔️">
          <p>
            Xiaoyu's sidestep in BT is one of the most underrated tools in the game. In Tekken 8, sidestep 
            movement has been buffed overall, and this applies to BT as well. Her BT sidestep covers 
            significantly more distance than her normal sidestep, letting her evade moves that would track 
            in neutral. After <code>df+1</code> or <code>1,d+2</code> puts you in BT, a sidestep into 
            <code>BT.4</code> (launcher) catches an enormous number of responses.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Entering Rain Dance">
        <KeyConcept title="Key BT Transitions" icon="🚪">
          <ul>
            <li><strong>b+3+4</strong> — Manual entry</li>
            <li><strong>df+1</strong> — Your most common BT entry (from the mid poke)</li>
            <li><strong>1,d+2</strong> — From the jab string (let go of D)</li>
            <li><strong>db+2</strong> — From the low poke</li>
            <li><strong>f,f+3</strong> — From the approach tool</li>
            <li><strong>b+2</strong> — From the homing mid</li>
            <li><strong>b+3</strong> — From the keepout high</li>
            <li><strong>4,4,3</strong> — Mid string that puts you BT on hit/block</li>
            <li><strong>AOP.1,2 / AOP.1,4</strong> — From AOP extensions</li>
            <li><strong>AOP.2,1,B</strong> — Cancel the heat engager into BT</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Key Moves From BT">

        <SubSection title="BT.4 — The Fast Launcher">
          <MoveCard character="xiaoyu"
            videoId="BT.4"
            move={{
              input: 'BT 4',
              hitLevel: ['m'],
              damage: '13',
              startup: 'i13~15',
              onBlock: '-18',
              onHit: '+33a',
              tags: ['Mid', 'Launcher'],
              description: 'Your fastest BT launcher at i13. Effective against grounded opponents, impressive range. Mostly used as a combo re-enter after BT.2,2 or after retreating with BT.b+3+4 to whiff punish. At -18, very unsafe — use it when you\'re sure it will connect.',
              notes: [
                'i13 — fastest BT launcher',
                '-18 on block — launch punishable, don\'t throw it out randomly',
                'Excellent whiff punisher from BT (like standing 3 from neutral)',
                'Used after BT.db retreat when opponent whiffs',
                'Hits grounded opponents'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="BT.1 — The Counter-Hit Launcher">
          <MoveCard character="xiaoyu"
            videoId="BT.1"
            move={{
              input: 'BT 1',
              hitLevel: ['m'],
              damage: '17',
              startup: 'i16~18',
              onBlock: '-5',
              onHit: '+4',
              onCH: '+64a',
              tags: ['Mid', 'CH Launcher'],
              description: 'A safe CH-launching mid from BT. At -5 on block, you keep your turn. On CH, devastating full launch combo. Has a follow-up (BT.1,2) that makes opponents hesitate — the tornado can be canceled to crouch for more options.',
              notes: [
                '-5 on block — safe, you keep BT access',
                'On CH: full launch combo',
                'BT.1,2: tornado extension, -13 on block, combo from 1st hit',
                'BT.1,2,D: cancel tornado into crouch for ws2 fishing',
                'Great at the wall — CH launches into wall combo',
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="BT.1+2 Series — The Tracking Mid">
          <MoveCard character="xiaoyu"
            videoId="BT.1+2"
            move={{
              input: 'BT 1+2',
              hitLevel: ['m', 'm'],
              damage: '6, 6',
              startup: 'i16~18',
              onBlock: '-6',
              onHit: '+8',
              tags: ['Mid'],
              description: 'A hit-confirmable mid poke from BT with good tracking. Can\'t be sidewalked. Has two extensions: BT.1+2,1+2 (mid, knockdown, guarantees 3+4) and BT.1+2,4 (high, heat engager, +3 on block).',
              notes: [
                '-6 on block — safe',
                'Cannot be sidewalked — great tracking',
                'BT.1+2,1+2: -13 on block, but on hit: knockdown + 3+4 guaranteed',
                'BT.1+2,4: heat engager, +3 on block in BT. High can be ducked',
                'Both extensions are hit-confirmable — only press on hit'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="BT.2 Series — The Jab Strings">
          <MoveCard character="xiaoyu"
            videoId="BT.2"
            move={{
              input: 'BT 2',
              hitLevel: ['h'],
              damage: '9',
              startup: 'i12',
              onBlock: '0',
              onHit: '+6',
              tags: ['High'],
              description: 'Your generic BT jab. At 0 on block, it\'s neutral. Has two key extensions: BT.2,1 (jab-jab into HYP by holding B) and BT.2,2,1 (natural combo on 2nd hit, high damage, transitions to AOP with D).',
              notes: [
                'BT.2,1: jails, +6 on hit, hold B for HYP transition',
                'BT.2,1,4: extension that CH launches from the delayed 4',
                'BT.2,2: hit confirmable into BT.2,2,1 (high damage, -11 on block)',
                'BT.2,2,1: natural combo from 2nd hit, AOP transition with D',
                'After CH f,f+3 (+12g): BT.2,2,1 is fast enough to catch mashers'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="BT.d+3 — The Go-To BT Low">
          <MoveCard character="xiaoyu"
            videoId="BT.d+3"
            move={{
              input: 'BT d+3',
              hitLevel: ['l'],
              damage: '12',
              startup: 'i16',
              onBlock: '-12',
              onHit: '+7c',
              tags: ['Low'],
              description: 'Your main low from BT. Has a high follow-up (BT.d+3,4) that\'s CH confirmable. Great round ender — opponents expecting a low get hit by the high extension.',
              notes: [
                'BT.d+3,4: high follow-up, confirmable on CH',
                'On hit (+7c): opponent forced to crouch',
                '-12 on block — punishable but not launchable',
                'Mix with BT.1 and BT.1+2 for the BT mid/low game',
                'Using only BT.d+3 (without the 4) returns to neutral'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="BT.d+4 — The Unseeable Knockdown Low (Season 2)">
          <MoveCard character="xiaoyu"
            videoId="BT.d+4"
            move={{
              input: 'BT d+4',
              hitLevel: ['l'],
              damage: '19',
              startup: 'i20~22',
              onBlock: '-26',
              onHit: '-1',
              tags: ['Low'],
              description: 'Season 2 change: Now an unreactable low that knocks down and guarantees 3+4 follow-up. This makes the BT 50/50 between BT.1 (safe CH mid) and BT.d+4 (knockdown low) much stronger. The catch: -26 on block means death if they read it.',
              notes: [
                'S2 change: now unreactable knockdown low',
                'Guarantees 3+4 on hit for additional damage',
                '-26 on block — launch punishable, don\'t be predictable',
                'Creates a real BT 50/50: BT.1 (mid) vs BT.d+4 (low)',
                'Instant Tornado on hit'
              ]
            }}
            showVideo
          />
          <TipBox variant="warning" title="High Risk, High Reward">
            <code>BT.d+4</code> is launch punishable on block. Use it when you've conditioned the 
            opponent to respect your BT mids. If they're always blocking mid after your <code>df+1</code> 
            transitions, one <code>BT.d+4</code> knocks them down and gives you oki. But if they read 
            it, you eat a full combo.
          </TipBox>
        </SubSection>

        <SubSection title="BT.f+3+4,3+4 — Cali Roll">
          <MoveCard character="xiaoyu"
            videoId="BT.f+3+4,3+4"
            move={{
              input: 'BT f+3+4,3+4',
              hitLevel: ['m'],
              damage: '23',
              startup: 'i12',
              onBlock: '-11',
              onHit: '+40a',
              tags: ['Mid', 'Launcher', 'Evasive'],
              description: 'The Cali Roll. A super evasive mid launcher that high crushes and evades certain mids. Known for going through attacks after blocked moves like f,f+3. One of Xiaoyu\'s most damaging launchers. At -11, 10f punishers work but slower moves can be parried.',
              notes: [
                'High crushes and evades many mids during the roll',
                '-11 on block — 10f punishers guaranteed, slower ones can be parried',
                'Against hop kicks (which can\'t be parried in T8): float yourself with f+1+3 or f+2+4',
                'One of the most damaging launchers',
                'Excellent vs opponents who don\'t know the Xiaoyu matchup'
              ]
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="BT Defense">

        <SubSection title="BT.b+1+3 — The Back Parry">
          <p>
            Active from <strong>frame 1</strong>. This parry protects Xiaoyu's back from punches and 
            kicks. Use it when you're in BT and expect the opponent to attack. It's essential for making 
            <code>db+2</code> safe — after the low gets blocked (-8 in BT), parrying catches many punish 
            attempts.
          </p>
          <TipBox variant="tip" title="Parry After db+2">
            <code>db+2</code> is -8 in BT. Many opponents will try to punish with fast moves. Input 
            <code>BT.b+1+3</code> immediately and you'll parry their retaliation. This makes <code>db+2</code> 
            much safer than the frame data suggests.
          </TipBox>
        </SubSection>

        <SubSection title="BT.b+1+2 — Power Crush (Season 2)">
          <MoveCard character="xiaoyu"
            videoId="BT.b+1+2"
            move={{
              input: 'BT b+1+2',
              hitLevel: ['m'],
              damage: '25',
              startup: 'i17~18',
              onBlock: '-14',
              onHit: '+21a',
              tags: ['Mid', 'Power Crush'],
              description: 'Season 2 addition: A power crush from BT. When opponents try to interrupt your BT game, this absorbs their attack. Especially useful after blocked db+2, blocked BT.3, or any time you\'re in BT and expect pressure.',
              notes: [
                'S2 new move — power crush from BT',
                '-14 on block — punishable',
                'Absorbs attacks during power crush frames (6-16)',
                'Forces opponents to respect your BT even more',
                'Good situational tool — don\'t overuse'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="BT.db — The Retreat">
          <p>
            Holding <code>db</code> from BT makes Xiaoyu crouch and retreat. This creates space for whiff 
            punishment. Common follow-ups:
          </p>
          <ul>
            <li><code>BT.db → ws2</code> — Fish for a counter-hit launch</li>
            <li><code>BT.db → ub+3</code> — Launch a big whiff</li>
            <li><code>BT.db → ws1+2,1+2</code> — Safe punish option</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="BT Movement Options">

        <KeyConcept title="Movement From BT" icon="🏃">
          <ul>
            <li><strong>BT sidestep</strong> — Superior to neutral sidestep, covers more distance</li>
            <li><strong>BT.b+3+4</strong> — Spin away from opponent while staying in BT</li>
            <li><strong>BT.db</strong> — Retreat and go to crouch (for ws2 fishing or space creation)</li>
            <li><strong>BT.d+1+2</strong> — Enter AOP from BT</li>
            <li><strong>BT.d+3+4</strong> — Step right (or u+3+4 for step left)</li>
          </ul>
        </KeyConcept>

        <p>
          Combining these movement options is what Xiaoyu players call "dancing." It's not random movement — 
          it's purposeful transitions that bait opponents into whiffing, then punishing. For example:
        </p>

        <SituationCard title="A BT Dance Sequence">
          <p>
            <code>df+1</code> → BT → BT sidestep → opponent whiffs → <code>BT.4</code> (launch) 
          </p>
          <p>
            <code>f,f+3</code> → BT → <code>BT.b+3+4</code> (spin away) → opponent chases → 
            <code>BT.4</code> (whiff punish)
          </p>
          <p>
            <code>db+2</code> → BT → <code>BT.db</code> (retreat) → <code>ws2</code> (CH fish)
          </p>
        </SituationCard>
      </Section>

      <Section title="BT Throw Game">
        <p>
          Xiaoyu has a unique throw game from BT that adds another layer of pressure. We'll cover the 
          full throw game in Chapter 10, but here are the essentials:
        </p>

        <ul>
          <li><strong>BT.f+1+3</strong> — 1 break throw</li>
          <li><strong>BT.f+2+4</strong> — 2 break throw</li>
          <li><strong>BT.f+2+3</strong> — 1+2 break throw (Wang's Waning Moon — guaranteed follow-up combo!)</li>
          <li><strong>BT.f,f+3+4</strong> — Unbreakable throw (lands on opponent's head)</li>
        </ul>

        <p>
          All three hop throws can be <strong>canceled by holding D</strong>, which leads into ws2 for 
          a counter-hit launch against opponents who try to jab out of the throw. This adds a throw/mid 
          mixup on top of the existing high/mid/low game from BT.
        </p>
      </Section>

      <Section title="Putting BT Together">
        <PracticeBox
          title="Rain Dance Drill"
          setup="Set opponent to Guard All. Practice entering BT and using key options."
          tasks={[
            { id: 'xiao-bt-df1', text: 'df+1 → BT → BT sidestep → BT.4 (pretend whiff punish) — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-bt-db', text: 'df+1 → BT → BT.db → ws2 — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-bt-d3', text: '1,d+2 → BT → BT.d+3 — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-bt-12', text: 'f,f+3 → BT → BT.1+2 (check tracking) — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-bt-parry', text: 'db+2 → BT → BT.b+1+3 (parry against recorded punish) — 5 times', type: 'counter', target: 5 },
          ]}
        />

        <Collapsible title="Moves That Transition Into BT">
          <ul>
            <li><code>b+3+4</code> — Manual entry</li>
            <li><code>df+1</code> — Primary BT transition from mid poke</li>
            <li><code>1,d+2</code> — From jab string</li>
            <li><code>db+2</code> — From the low poke</li>
            <li><code>f,f+3</code> — From the approach mid</li>
            <li><code>b+2</code> / <code>b+2,2</code> — Homing mid + low extension</li>
            <li><code>b+3</code> — Keepout high (+3 on block)</li>
            <li><code>f+3,1</code> — From the combo filler string</li>
            <li><code>AOP.1,2</code> / <code>AOP.1,4</code> — From AOP extensions</li>
            <li><code>f,f+2,1,B</code> — Cancel wall carry into BT</li>
            <li><code>HYP.3+4,B</code> — Cancel the high launcher into BT</li>
          </ul>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
