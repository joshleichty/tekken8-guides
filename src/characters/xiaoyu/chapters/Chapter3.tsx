import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard, 
  TipBox,
  PracticeBox,
  KeyConcept,
  SituationCard
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Damage From Pokes"
      intro="Xiaoyu's real damage doesn't come from raw launchers — it comes from counter hits and guaranteed follow-ups on her pokes. Learning these connections is how you turn chip damage into round-winning momentum."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Art of Phoenix"
    >
      <Section title="Why This Matters">
        <p>
          Many of Xiaoyu's pokes are <em>much</em> more rewarding than they look. Moves like <code>f+4</code>, 
          <code>db+4</code>, and <code>f,f+1,d</code> guarantee follow-ups on hit that add 20-30 extra damage 
          and can activate heat. Missing these follow-ups means leaving massive damage on the table every round.
        </p>

        <KeyConcept title="The Plus Frame System" icon="⚡">
          <p>
            When a move hits and leaves you very plus (like +13 or +14), certain follow-ups become 
            <strong>guaranteed</strong>. The opponent literally cannot block them. Xiaoyu has more of 
            these than almost any character in Tekken 8. Learn which moves guarantee what, and your 
            damage output transforms.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Guaranteed Follow-Ups On Normal Hit">

        <SubSection title="f+4 — The Homing Keep-Out">
          <MoveCard character="xiaoyu"
            move={{
              input: 'f+4',
              hitLevel: ['h'],
              damage: '23',
              startup: 'i19',
              onBlock: '+1',
              onHit: '+13',
              tags: ['High', 'Homing', 'Plus on Block'],
              description: 'A homing high that guarantees follow-ups on hit. At +13, both f+1+2 (30 damage shoulder) and b+4,1 (heat engager) are guaranteed. This means every time f+4 hits, you get free damage AND the option to go into heat.',
              notes: [
                'On hit (+13): f+1+2 guaranteed (30 dmg knockdown)',
                'On hit (+13): b+4,1 guaranteed (heat engager — free heat activation!)',
                '+1 on block — you keep your turn',
                'Homing — catches sidesteppers',
                'High — can be ducked, so don\'t overuse it'
              ]
            }}
            showVideo
          />
          <TipBox variant="tip" title="Free Heat Off f+4">
            Every time <code>f+4</code> hits, you should be going into <code>b+4,1</code> for a free heat 
            engager. That's 23 + 30 = 53 damage AND you're now in heat with a mixup. This is one of 
            Xiaoyu's most important connections.
          </TipBox>
        </SubSection>

        <SubSection title="f,f+1,d — The AOP Pressure Tool">
          <MoveCard character="xiaoyu"
            videoId="f,F+1"
            move={{
              input: 'f,f+1',
              hitLevel: ['m'],
              damage: '13',
              startup: 'i15',
              onBlock: '-11',
              onHit: '+7c',
              tags: ['Mid'],
              description: 'A mid that transitions into AOP by holding D. On hit, you\'re +13 in AOP which guarantees AOP.4 and even AOP.2,1 (your heat engager). This is huge — a safe mid that leads to free heat activation.',
              notes: [
                'Hold D to enter AOP: -5 on block, +13 on hit',
                'On hit (+13 in AOP): AOP.4 and AOP.2,1 guaranteed',
                'AOP.2,1 is a heat engager — free heat off a mid poke!',
                'Has extensions: f,f+1,3 (safe high) and f,f+1,4 (unsafe mid launcher)',
                'In heat: gains H.f,f+1,2 extension (+6 on block, CH launcher)'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="f,f+4 — Into Hypnotist">
          <MoveCard character="xiaoyu"
            videoId="f,F+4"
            move={{
              input: 'f,f+4',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i20~23',
              onBlock: '+9',
              onHit: '+13g c',
              onCH: '+58a',
              tags: ['High', 'Plus on Block'],
              description: 'On hit, transitions to HYP with +13g forcing the opponent into a crouching state. This sets up the full Hypnotist 50/50. On block, still +9 in HYP — your options are live.',
              notes: [
                'On hit: opponent forced to crouch, must deal with HYP.2 / HYP.3 mixup',
                'On block (+9 in HYP): HYP.4 and HYP options are all advantaged',
                'On CH: full launcher — one of her most damaging combos',
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="BT.3 — The Plus Mid From Rain Dance">
          <MoveCard character="xiaoyu"
            videoId="BT.3"
            move={{
              input: 'BT.3',
              hitLevel: ['m'],
              damage: '13',
              startup: 'i16',
              onBlock: '-5',
              onHit: '+12',
              tags: ['Mid'],
              description: 'A BT mid that\'s +12 on hit. Guarantees BT.2,1 for additional damage and transitions. On counter hit, knocks down and guarantees follow-ups like BT.d+4 and BT.3+4.',
              notes: [
                'On hit (+12): BT.2,1 guaranteed',
                'On CH: knockdown, BT.3+4 guaranteed',
                'Low crushes from frame 5',
              ]
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="Counter Hit Fishing">
        <p>
          Counter hits happen when your move hits an opponent during their attack startup. Many of Xiaoyu's 
          moves become dramatically more rewarding on counter hit. The key is recognizing <em>when</em> 
          opponents are likely to press buttons, then throwing out the right move.
        </p>

        <SubSection title="4 — Magic Four">
          <MoveCard character="xiaoyu"
            move={{
              input: '4',
              hitLevel: ['h'],
              damage: '15',
              startup: 'i11',
              onBlock: '-9',
              onHit: '+8',
              onCH: '+33a',
              tags: ['High', 'CH Launcher'],
              description: 'Your i11 magic four. On counter hit, guarantees 3+4 or ub+4 for significant damage. Use it after plus frames to check if opponents are pressing.',
              notes: [
                'On CH: 3+4 guaranteed (38 damage total) or dash ub+4 (35 damage)',
                'On regular hit: +8, good for continued pressure',
                'Use after moves that leave you +1 or more (like 1 on block)',
                'High — opponents can duck it'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="ss4 — Side Step Low">
          <MoveCard character="xiaoyu"
            videoId="SS.4"
            move={{
              input: 'ss4',
              hitLevel: ['l'],
              damage: '19',
              startup: 'i18',
              onBlock: '-13',
              onHit: '-2',
              onCH: '+29a',
              tags: ['Low', 'CH Launcher'],
              description: 'A low from sidestep that counter-hit launches. Good range and decent damage. On CH, full combo. Mix with ss 1+2 (safe mid launcher) for a sidestep 50/50.',
              notes: [
                'On CH: full launch combo',
                'On hit: -2, you\'re slightly minus but can go into d+1+2 (AOP) or ws2 to fish for CH',
                '-13 on block — launch punishable',
                'High crushes from frame 6',
                'Mix with SS 1+2 for a sidestep mid/low mixup'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="3+4 — CH Launcher From Neutral">
          <p>
            Already covered in Chapter 2, but worth emphasizing: <code>3+4</code> at -1 on block means 
            opponents <em>will</em> try to take their turn back. When they do, the counter hit launches 
            for a full combo. Use it as bait.
          </p>
        </SubSection>

        <SubSection title="ws2 — The Crouch Fishing Rod">
          <MoveCard character="xiaoyu"
            videoId="ws2"
            move={{
              input: 'ws2',
              hitLevel: ['m'],
              damage: '17',
              startup: 'i13~14',
              onBlock: '-3',
              onHit: '+7',
              onCH: '+38a',
              tags: ['Mid', 'CH Launcher'],
              description: 'An i13 while-standing mid that\'s safe (-3) and CH launches. This is your premier tool for fishing counter hits from crouch. Common setups: after BT.db, after AOP.u, after throw cancel (BT.f+1+3,d). On block, you\'re in BT at -3.',
              notes: [
                'On CH: full launch combo',
                'On block: -3 in BT — basically neutral, can use BT options',
                'Common setups: BT.db, AOP.uf~n, BT.f+1+3~D (throw cancel)',
                'Essential keepout tool alongside uf+4 and f+4',
                'Charged version (ws2*) is i22, safe, always launches'
              ]
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="Low Attacks">
        <p>
          Xiaoyu's lows aren't devastating on their own, but they serve a crucial purpose: making opponents 
          duck. Once they duck, your mids and launchers become that much more effective.
        </p>

        <SubSection title="db+2 — The Premier Low Poke">
          <MoveCard character="xiaoyu"
            move={{
              input: 'db+2',
              hitLevel: ['l'],
              damage: '13',
              startup: 'i18~19',
              onBlock: '-8',
              onHit: '+5c',
              onCH: '+12',
              tags: ['Low', 'High Crush'],
              description: 'Your best low poke. Tracks to Xiaoyu\'s weak right side, high crushes, and transitions to BT. At -8 in BT, you can use BT.b+1+3 (parry) to make many punish attempts fail.',
              notes: [
                'Transitions to BT',
                'High crushes from frame 6',
                'At -8 in BT, opponents must be careful how they punish',
                'On CH (+12): BT.2,1 guaranteed for extra damage into HYP',
                'Great round ender — safe-ish and chips health reliably'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="db+3 — The Plus-On-Block Low">
          <MoveCard character="xiaoyu"
            move={{
              input: 'db+3',
              hitLevel: ['l'],
              damage: '0',
              startup: 'i15',
              onBlock: '+2c',
              onHit: '+2c',
              onCH: '+14',
              tags: ['Low', 'Plus on Block'],
              description: 'A fast i15 low that does 0 chip damage but is +2 on both block AND hit. Its purpose is frame advantage, not damage. After heat dash at the wall, creates a frame trap guaranteeing df+2,1+2 on CH — deadly wall splat potential.',
              notes: [
                '+2 on block AND hit — always plus',
                '0 damage on hit — used for frame advantage only',
                'On CH (+14): b+4,1 (heat engager) or df+2,3 guaranteed',
                'At the wall after heat dash: df+2,1+2 frame trap on CH = wall splat'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="db+4 — The Rewarding Low Poke">
          <MoveCard character="xiaoyu"
            move={{
              input: 'db+4',
              hitLevel: ['l'],
              damage: '14',
              startup: 'i18',
              onBlock: '-12',
              onHit: '+4c',
              onCH: '+14',
              tags: ['Low'],
              description: 'A low poke that\'s +4c on hit and +14 on counter hit. On CH, guarantees i14 follow-ups like df+2,1+2 (wall splat potential) or b+4,1 (heat engager).',
              notes: [
                'On hit (+4c): opponent is forced to crouch',
                'On CH (+14): df+2,1+2 guaranteed (wall splat!), b+4,1 guaranteed (heat!)',
                '-12 on block — punishable but not launch punishable',
                'Great at the wall where CH df+2,1+2 = wall splat for huge damage'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="d+3 — The Fast Low">
          <MoveCard character="xiaoyu"
            move={{
              input: 'd+3',
              hitLevel: ['l'],
              damage: '12',
              startup: 'i14',
              onBlock: '-12',
              onHit: '-3',
              onCH: '+1',
              tags: ['Low'],
              description: 'A fast i14 low. Not plus on hit, but it has a high follow-up: d+3,4 is guaranteed on counter hit. The d+3 alone is useful for quick checks.',
              notes: [
                'd+3,4: high extension, guaranteed on CH',
                '-12 on block — punishable but not launchable',
                'High crushes from frame 6'
              ]
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="The Counter-Hit Follow-Up Map">
        <p>
          Here's a cheat sheet of the most important follow-up connections. Drill these in practice mode 
          until they become automatic.
        </p>

        <KeyConcept title="Guaranteed Follow-Ups (Normal Hit)" icon="✅">
          <ul>
            <li><strong>f+4 → b+4,1</strong> — 53 damage + heat engager</li>
            <li><strong>f+4 → f+1+2</strong> — 53 damage knockdown</li>
            <li><strong>f,f+1,d → AOP.2,1</strong> — Damage + heat engager</li>
            <li><strong>f,f+1,d → AOP.4</strong> — Quick safe mid follow-up</li>
            <li><strong>BT.3 → BT.2,1</strong> — Damage + transitions</li>
            <li><strong>AOP.uf,n,3 → 3+4 or ub+4</strong> — Knockdown + damage</li>
            <li><strong>CH 4 → 3+4 or ub+4</strong> — 38 damage from magic four</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Counter Hit Guaranteed Follow-Ups" icon="💥">
          <ul>
            <li><strong>CH db+3 → b+4,1</strong> — Heat engager (+14 on CH)</li>
            <li><strong>CH db+4 → df+2,1+2</strong> — Wall splat potential (+14 on CH)</li>
            <li><strong>CH db+4 → b+4,1</strong> — Heat engager (+14 on CH)</li>
            <li><strong>CH db+2 → BT.2,1</strong> — From BT (+12 on CH)</li>
            <li><strong>CH (1),d+2 → BT.b+3</strong> — Mini combo from BT</li>
            <li><strong>CH (1),d+2 → (1,d+2),1+2</strong> — Full launcher string</li>
            <li><strong>CH ss4 → full combo</strong> — Full launch</li>
            <li><strong>CH 3+4 → full combo</strong> — Full launch</li>
            <li><strong>CH ws2 → full combo</strong> — Full launch</li>
            <li><strong>CH f,f+4 → full combo</strong> — Full launch (massive damage)</li>
          </ul>
        </KeyConcept>

        <PracticeBox
          title="Guaranteed Follow-Up Drill"
          setup="Set opponent to Stand and Guard After First Hit. Practice confirming these connections."
          tasks={[
            { id: 'xiao-f4-b41', text: 'f+4 → b+4,1 (heat engager) — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-ff1d-a21', text: 'f,f+1,D → AOP.2,1 (heat engager) — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-ch4-34', text: 'Set opponent to Counter Hit. 4 → 3+4 — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-chdb4-df213', text: 'Set CH. db+4 → df+2,1+2 — 10 times', type: 'counter', target: 10 },
          ]}
        />

        <TipBox variant="warning" title="Don't Autopilot The Follow-Ups">
          These follow-ups are only guaranteed <em>on hit</em>. If the move gets blocked, doing 
          <code>b+4,1</code> afterwards will get you launched. Practice hit-confirming: watch if the 
          move hits, <em>then</em> press the follow-up. For <code>f+4</code>, this is easier because 
          you have +13 frames to react. For faster connections, you'll need practice.
        </TipBox>
      </Section>

      <Section title="Putting Damage Together">
        <p>
          The goal isn't to launch every round. It's to accumulate damage through pokes and follow-ups while 
          making your opponent hesitate. Here's a typical round where Xiaoyu wins through pokes:
        </p>

        <SituationCard title="A Poke-Heavy Round">
          <ol>
            <li><code>df+1</code> checks them, transitions to BT → <code>BT.d+3</code> chips 12 damage</li>
            <li><code>f+4</code> catches them stepping → <code>b+4,1</code> for 53 damage + heat activation</li>
            <li>In heat: <code>f+2,1,B</code> → HYP.2 or HYP.3 for the 50/50</li>
            <li><code>db+2</code> chips again, they panic and press → <code>ws2</code> counter-hit launches</li>
          </ol>
          <p>
            That's a round won with zero raw launchers. The damage came from poke follow-ups, a heat 
            engager, and a single counter-hit read. This is how Xiaoyu plays.
          </p>
        </SituationCard>
      </Section>
    </Chapter>
  )
}
