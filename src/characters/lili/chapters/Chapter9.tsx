import { Chapter, Section } from '../../../components/guide'
import {
  ComboCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Combo Architecture"
      intro="Lili hits like a truck. Thanks to qcf+3 as a single-hit tornado, her combos do enormous damage for minimal execution. This chapter teaches the combos you'll actually use — staple routes from every launcher, wall combos, and the small combos that turn counter hits into real damage."
      hasPrevious
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="The Ranked Playbook"
    >
      <Section title="Combo Theory">
        <p>
          Lili's combo structure follows a consistent pattern: launcher → filler → tornado → wall
          carry → wall ender. Understanding this pattern lets you adapt on the fly rather than
          memorizing dozens of routes.
        </p>

        <KeyConcept title="The Combo Skeleton" icon="🦴">
          <ul>
            <li><strong>Launcher</strong> — the move that starts the juggle (uf+3, df+2, ws+2, etc.)</li>
            <li><strong>Filler</strong> — moves that carry and position before tornado (f+2,3 / df+1 / b+2,1~F)</li>
            <li><strong>Tornado</strong> — <code>qcf+3</code> (DEW 3) for one-hit tornado, or <code>b+1,4</code> / <code>BT 1,2</code> for multi-hit tornado</li>
            <li><strong>Wall Carry</strong> — moves after tornado that push toward the wall (f+2,3 / b+1,4 / 3+4)</li>
            <li><strong>Wall Ender</strong> — the final hits at the wall (uf+4,3 / ws+1,2~F → 3 / FC df+1)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Dash After Tornado">
          In Tekken 8, you have enough time to dash up after tornado before doing your wall carry.
          This gives significantly better wall carry than doing the next move immediately. Always
          micro-dash after your tornado connects before starting the carry sequence.
        </TipBox>
      </Section>

      <Section title="Staple Combos">
        <p>
          These are the combos you'll use in 90% of situations. Learn the beginner version first,
          then upgrade to the optimal version when the execution feels comfortable.
        </p>

        <ComboCard
          title="Hop Kick / df+2 Launch"
          damage="65~70"
          difficulty="intermediate"
          starter="uf+3 or df+2"
          route={['df+2', 'f+2,3', 'df+3+4', 'BT 1,2', 'u+1+2 (hold)', 'qcf+1,4']}
          notes={[
            'df+2 after launch relaunches into f+2,3 knockdown',
            'BT 1,2 is a tornado from backturn after the cartwheel',
            'Charge u+1+2 briefly for homing tailspin wall carry',
          ]}
        />

        <ComboCard
          title="Hop Kick / df+2 (Beginner)"
          damage="55~60"
          difficulty="beginner"
          starter="uf+3 or df+2"
          route={['df+2~B', 'BT 1,2', 'f,f+3~F', 'DEW 1,4']}
          notes={[
            'df+2~B enters backturn, BT 1,2 is your tornado',
            'f,f+3~F into DEW 1,4 for wall carry and ender',
            'Start here — get this consistent before upgrading',
          ]}
        />

        <ComboCard
          title="ws+3 / db+4 / Low Parry"
          damage="60~65"
          difficulty="intermediate"
          starter="ws+3 or db+4 or low parry"
          route={['qcf+3', 'df+1', 'b+2,1~F', 'f+3+4', 'WR 1+2', 'qcf+1,4']}
          notes={[
            'ws+3 and db+4 have instant tornado — qcf+3 is the tornado itself',
            'b+2,1~F transitions into Dew Glide for the approach',
            'WR 1+2 running mid carries to the wall',
          ]}
        />

        <ComboCard
          title="ws+3 / db+4 (Beginner)"
          damage="50~55"
          difficulty="beginner"
          starter="ws+3 or db+4 or low parry"
          route={['df+2~B', 'BT 3,4', 'b+1~F', 'DEW 1,4']}
          notes={[
            'df+2~B enters backturn for BT 3,4 relaunch',
            'b+1~F into DEW 1,4 for carry and ender',
          ]}
        />

        <ComboCard
          title="ws+2 / d+3+4 (Matterhorn)"
          damage="65~70"
          difficulty="intermediate"
          starter="ws+2 or d+3+4"
          route={['u+3,3~F', 'f+3+4', 'df+3+4', 'BT 1,2', 'u+1+2 (hold)', 'qcf+3']}
          notes={[
            'u+3,3~F transitions into Dew Glide approach',
            'Cartwheel (df+3+4) into BT 1,2 for tornado',
            'Charge u+1+2 briefly, then qcf+3 ender',
          ]}
        />

        <ComboCard
          title="ws+2 / d+3+4 (Beginner)"
          damage="55~60"
          difficulty="beginner"
          starter="ws+2 or d+3+4"
          route={['u+3,3~F', 'DEW 3', 'f,f+3~F', 'DEW 1,4']}
          notes={[
            'u+3,3~F into DEW 3 for tornado',
            'f,f+3~F into DEW 1,4 for carry and ender',
          ]}
        />

        <ComboCard
          title="df+3+4 / ss+4 (Backturn Launch)"
          damage="65~70"
          difficulty="intermediate"
          starter="df+3+4 or CH ss+4"
          route={['BT 3,4', 'b+1~F', 'f+3+4', 'df+3+4', 'BT 1,2', 'u+1+2 (hold)', 'qcf+3']}
          notes={[
            'You start in backturn naturally from these launchers',
            'BT 3,4 into b+1~F transitions to Dew Glide approach',
            'Second cartwheel into BT 1,2 for tornado',
          ]}
        />
      </Section>

      <Section title="Counter Hit Combos">
        <p>
          Counter hits are where Lili's damage truly shines. These are the conversions you need
          for your main CH launchers.
        </p>

        <ComboCard
          title="CH f+4 / CH qcf+1,2 / CH 1,1,3"
          damage="60~65"
          difficulty="intermediate"
          starter="CH f+4"
          route={['qcf+3', 'qcf+3', '3,2~F', 'f+3+4', 'WR 1+2', 'qcf+1,4']}
          notes={[
            'Double qcf+3 filler requires good timing',
            '3,2~F into Dew Glide approach for the spike',
            'WR 1+2 running mid carry into ender',
          ]}
        />

        <ComboCard
          title="CH FC df+3 (Slide)"
          damage="60~65"
          difficulty="intermediate"
          starter="CH FC df+3"
          route={['d+1,2~B', 'BT 3,4', 'b+1,4', 'u+1+2 (hold)', 'qcf+3']}
          notes={[
            'd+1,2~B enters backturn for BT 3,4',
            'b+1,4 is the tornado',
            'Charge u+1+2 briefly, then qcf+3 ender',
          ]}
        />
      </Section>

      <Section title="Small Combos (Mini Combos)">
        <p>
          Not every hit leads to a full juggle. These "small combos" convert knockdowns and
          counter hits into guaranteed follow-up damage. Learn these — they add up fast.
        </p>

        <KeyConcept title="Guaranteed Follow-Ups" icon="📋">
          <ul>
            <li><strong>CH f,f+4~B:</strong> BT 1,2 (knockdown) or BT 1,4 (heat engager) — both guaranteed</li>
            <li><strong>CH f+3 / db+3 on NH / WR 1+2 on hit:</strong> qcf+3 on the ground — guaranteed</li>
            <li><strong>CH BT d+2:</strong> Crouch cancel (tap u) → qcf+3 on ground — guaranteed</li>
            <li><strong>BT 3,4 on hit:</strong> qcf+3 on ground, or FC df+1 for flip-over oki</li>
            <li><strong>ss+3 on hit:</strong> qcf+3 or f+4 on the ground — guaranteed</li>
            <li><strong>CH f+1+2:</strong> 1+2 guaranteed follow-up</li>
            <li><strong>f,f+3 on hit:</strong> f,f+3,3+4 extension or f,f+3~F → DEW 2,1 or DEW 3+4</li>
            <li><strong>CH b+1~F / 3,2~F:</strong> DEW 2,1 (heat engager) or DEW 3+4 guaranteed</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Wall Combos">
        <p>
          When your combo reaches the wall, the wall ender you choose depends on what tornado
          move you used.
        </p>

        <KeyConcept title="Wall Ender Rules" icon="🧱">
          <ul>
            <li><strong>One-hit tornado (qcf+3):</strong> ws+1,2~F → 3 or 2 → db+2 → FC df+1 (flip-over oki)</li>
            <li><strong>Two-hit tornado (b+1,4 / BT 1,2):</strong> uf+4,3</li>
            <li><strong>Three-hit tornado (d+2,2,4):</strong> f+2,3 or f+3+4 → oki setup</li>
            <li><strong>For BT oki at wall:</strong> qcf+3 → BT 4,3,3+4 leaves you in BT for BT d+4 guaranteed setup</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            <strong>FC df+1 at the wall</strong> is a special ender that flips the opponent over,
            letting you set up Feisty Rabbit pressure on their wakeup. Slightly less damage than
            other enders, but the oki position is worth more than the 5 damage you sacrifice.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The f+3+4 Spike into qcf+3 Oki">
          End combos with <code>f+3+4</code> (spike) then immediately <code>qcf+3</code>. The
          DEW 3 hits every wakeup option except standing up or toe kick. If they stand up,
          <code>qcf+3</code> is blocked but safe at -11. If they toe kick, low parry or
          <code>df+3+4</code> catches them. This is one of Lili's strongest oki setups — use it
          after any combo where you don't want to go to the wall.
        </TipBox>
      </Section>

      <Section title="Practice: Combo Consistency">
        <PracticeBox
          title="The Essential Combo Drill"
          setup="Practice Mode. Lili vs any opponent. Start at center stage."
          tasks={[
            { id: 'lili-combo-hopkick', text: 'Land the uf+3 beginner combo five times without dropping', detail: 'uf+3 → df+2~B → BT 1,2 → ff+3~F → DEW 1,4. Get this consistent first — it\'s your foundation.', type: 'counter', target: 5 },
            { id: 'lili-combo-ch-f4', text: 'Land the CH f+4 combo three times', detail: 'CH f+4 → qcf+3 → qcf+3 → 3,2~F → f+3+4 → WR 1+2 → qcf+1,4. The double qcf+3 requires timing — get the rhythm.', type: 'counter', target: 3 },
            { id: 'lili-combo-ws3', text: 'Land the ws+3 combo three times', detail: 'ws+3 → qcf+3 → df+1 → b+2,1~F → f+3+4 → WR 1+2 → qcf+1,4. This is your punish combo for blocked lows.', type: 'counter', target: 3 },
            { id: 'lili-combo-wall', text: 'Wall splat and do uf+4,3 wall ender five times', detail: 'Launch near the wall, carry, and wall splat. Do uf+4,3 as the wall ender. This is your default wall finish.', type: 'counter', target: 5 },
            { id: 'lili-combo-ch-ff4', text: 'Land CH f,f+4~B into BT 1,4 (heat engager) three times', detail: 'Set dummy to Counter Hit. Do f,f+4, hold B on hit, then press 1,4 for the guaranteed heat engager.', type: 'counter', target: 3 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
