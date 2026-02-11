import { Chapter, Section } from '../../../components/guide'
import {
  ComboCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Combos"
      intro="You know the stances. You know the 50/50. You know what Mandinga does. Now you need to convert hits into real damage. Eddy's combos all share the same skeleton — they just start from different launchers. Learn one route and you've learned most of them."
      hasPrevious={true}
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Punishment"
    >
      <Section title="The Universal Skeleton">
        <p>
          Nearly every Eddy combo follows the same structure:
        </p>
        <ol>
          <li><strong>Launcher</strong> — the move that starts the combo</li>
          <li><strong>Filler</strong> — <code>b+3,3</code> into <code>RLX 2,4~D</code> (staple pickup)</li>
          <li><strong>Connector</strong> — <code>RLX 2</code> (mid from Relax)</li>
          <li><strong>Tornado</strong> — <code>qcf+3</code> (the tailspin move)</li>
          <li><strong>Ender</strong> — <code>db+4,4</code> (Mandinga builder) or alternatives</li>
        </ol>
        <p>
          Some launchers skip steps or use a different tornado. But the core is always the same:
          <strong> pick up → RLX 2,4~D → RLX 2 → qcf+3 T! → ender</strong>. Once your hands know
          this sequence, new launchers just mean learning the first one or two hits.
        </p>

        <KeyConcept title="Why db+4,4 Ends Everything" icon="🔥">
          <p>
            <code>db+4,4</code> builds one level of Mandinga. That means every combo you land is also
            charging your install. By mid-round, between combos and natural RLX play, you'll usually
            have Mandinga level 1. This is why <code>db+4,4</code> is the default ender — you're
            converting damage into future power.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Primary Launchers">
        <h3>df+3 — Your Main Launcher</h3>
        <p>
          Standing i15 mid launcher. -16 on block, so it's punishable — but it's your fastest
          standing launcher and the move you'll combo from most often in real matches. Use it to
          punish -15 moves and as a whiff punisher from midrange.
        </p>

        <ComboCard
          title="df+3 Staple"
          starter="df+3"
          route={['f+2', 'b+3,3', 'RLX 2,4~D', 'RLX 2', 'qcf+3 T!', 'db+4,4']}
          damage="~68"
          difficulty="intermediate"
          wallCarry={true}
          notes={[
            'f+2 is the initial pickup — must be fast',
            'b+3,3 goes into RLX automatically',
            'RLX 2,4~D: hold D after 2,4 to stay in RLX',
            'qcf+3 is your tornado — quarter circle forward 3',
            'db+4,4 ender builds Mandinga',
          ]}
        />

        <h3>ws+2 — Crouching i15 Launcher</h3>
        <p>
          Same route, different starter. You'll get this from blocking lows or from crouch.
          Skips the <code>f+2</code> pickup — go straight into the filler.
        </p>

        <ComboCard
          title="ws+2 Staple"
          starter="ws+2"
          route={['b+3,3', 'RLX 2,4~D', 'RLX 2', 'qcf+3 T!', 'db+4,4']}
          damage="~65"
          difficulty="intermediate"
          wallCarry={true}
          notes={[
            'Same route as df+3 but without the f+2 pickup',
            'ws+2 is i15 — your crouching launcher',
            'Use after blocking snake edges, hellsweeps, etc.',
          ]}
        />

        <h3>ws+1,3 — The i13 Crouching Punisher</h3>
        <p>
          This is special. <code>ws+1,3</code> launches at i13 from crouch — faster than most
          characters' crouching launchers. It punishes lows that other characters can only jab after.
          The combo route is different because <code>ws+1,3</code> instantly tornadoes.
        </p>

        <ComboCard
          title="ws+1,3 Staple"
          starter="ws+1,3"
          route={['RLX 3+4 T!', 'uf+4', 'RLX 2,4~D', 'RLX 3,3']}
          damage="~60"
          difficulty="intermediate"
          notes={[
            'ws+1,3 goes directly into RLX — press 3+4 for the tornado',
            'uf+4 relaunches after the tornado',
            'Ends with RLX 3,3 for Mandinga instead of db+4,4',
            'This combo gets you Mandinga AND punishes lows hard',
          ]}
        />

        <h3>SS 3+4 — Safe Launcher</h3>
        <p>
          Your only safe launcher (-7 on block). Comes from sidestep, making it a reactive keepout
          tool. Different combo route because it leaves you standing.
        </p>

        <ComboCard
          title="SS 3+4 Staple"
          starter="SS 3+4"
          route={['ws+3 T!', 'uf+4', 'RLX 2,4~D', 'RLX 3,3']}
          damage="~58"
          difficulty="intermediate"
          notes={[
            'ws+3 comes out after the sidestep launch — gives tornado',
            'Same uf+4 pickup as the ws+1,3 route',
            'Ends with RLX 3,3 — Mandinga builder',
            'Slightly less damage than df+3 route, but started from a safe move',
          ]}
        />

        <TipBox variant="tip" title="Two Route Families">
          Notice there are really just two combo families. <strong>Family A</strong> (df+3, ws+2,
          u+1+2, f,f+4): uses <code>b+3,3 → RLX 2,4~D → RLX 2 → qcf+3 T! → db+4,4</code>.
          <strong> Family B</strong> (ws+1,3, SS 3+4, ws+3): uses <code>T! → uf+4 → RLX 2,4~D
          → RLX 3,3</code>. Learn these two skeletons and you can combo from anything.
        </TipBox>
      </Section>

      <Section title="Counter Hit Combos">
        <p>
          Eddy has several moves that launch or give guaranteed follow-ups on counter hit.
          These are smaller conversions but they happen frequently in real matches.
        </p>

        <ComboCard
          title="CH b+3,3"
          starter="CH b+3,3"
          route={['RLX 3+4 T!', 'uf+4', 'RLX 2,4~D', 'RLX 3,3']}
          damage="~55"
          difficulty="beginner"
          notes={[
            'b+3,3 on CH goes into RLX — press 3+4 for tornado',
            'Same Family B route from there',
            'b+3,3 is a natural combo on CH — just let it rip',
          ]}
        />

        <ComboCard
          title="CH f,f+3 Confirm"
          starter="CH f,f+3"
          notation="RLX 4,3 (heat engager) → d+2+4 (crouch throw)"
          damage="~50 + heat activation"
          difficulty="beginner"
          notes={[
            'On CH f,f+3, you\'re +15 — RLX 4,3 is guaranteed',
            'RLX 4,3 activates heat on hit',
            'Follow up with d+2+4 for the crouch throw (also guaranteed)',
            'Massive reward from a single low approach',
          ]}
        />

        <ComboCard
          title="CH (2,1),4"
          starter="CH 2,1"
          route={['4', 'b+3,3', 'RLX 2,4~D', 'RLX 2', 'qcf+3 T!', 'db+4,4']}
          damage="~62"
          difficulty="intermediate"
          notes={[
            '2,1 on CH confirms into 4 for a full launch',
            'Family A route from there',
            '2,1 is a fast high-high — use to challenge at close range',
          ]}
        />

        <ComboCard
          title="CH HSP 4,2"
          starter="CH HSP 4"
          notation="HSP 4,2 (tornado)"
          damage="Full combo from tornado"
          difficulty="beginner"
          notes={[
            'HSP 4 on CH → HSP 4,2 gives tornado',
            'Follow with standard post-tornado route',
            'This is why HSP 4 is so scary at +8 — any button from the opponent means full combo',
          ]}
        />
      </Section>

      <Section title="Guaranteed Follow-Ups">
        <p>
          Several of Eddy's moves give guaranteed follow-ups that aren't full combos but deal
          significant damage. Know these — they add up fast.
        </p>
        <ul>
          <li><strong><code>uf+2</code></strong> on hit → <code>f+3+4 → qcf+3</code> guaranteed</li>
          <li><strong><code>db+1+2</code> / <code>HSP 1+2</code> / CH <code>1+2</code></strong> → <code>uf+1,4</code> → <code>df+1,3</code></li>
          <li><strong><code>ub+3</code> / CH <code>uf+3</code> / CH <code>db+3</code></strong> → <code>f,f+4 → qcf+3</code></li>
          <li><strong>CH <code>HSP 1</code> / CH <code>b+1,4,3+4</code></strong> → <code>RLX 3+4</code> (tornado for full combo)</li>
          <li><strong>CH <code>HSP 4</code> / CH <code>FC df+4</code></strong> → <code>HSP 1</code> into RLX pressure</li>
          <li><strong>CH <code>d+4,3</code></strong> → <code>d+1+3</code> (crouch throw, heat engager) → <code>d+2+4</code></li>
        </ul>

        <TipBox variant="warning" title="Don't Memorize, Categorize">
          You don't need to memorize every guaranteed follow-up on day one. Start with the full
          combo routes from the primary launchers. Add the CH confirms as you get comfortable. The
          guaranteed follow-ups are icing — they'll come naturally as you learn the situations that
          produce them.
        </TipBox>
      </Section>

      <Section title="Wall Combos">
        <p>
          When you combo someone into the wall, you need a wall combo to cash out. Eddy has
          strong wall damage, especially with Mandinga.
        </p>

        <ComboCard
          title="Standard Wall Combo"
          notation="b+2,3,3"
          damage="~35"
          difficulty="beginner"
          notes={[
            'Your go-to wall combo — simple and reliable',
            'Works after any wall splat',
            'Just press b+2,3,3 when they hit the wall',
          ]}
        />

        <ComboCard
          title="Tornado Wall Combo"
          notation="qcf+3 T! → b+2,3,3"
          damage="~45"
          difficulty="intermediate"
          notes={[
            'If you haven\'t used tornado in the combo yet',
            'qcf+3 gives tornado at the wall, then b+2,3,3 cashes out',
            'More damage but requires tornado to be available',
          ]}
        />

        <ComboCard
          title="Mandinga Wall Combo"
          notation="df+1,3 T! → (f+1+2) HSP b+4~D → RLX 3+4"
          damage="~50"
          difficulty="advanced"
          notes={[
            'Requires Mandinga level 1 or higher',
            'df+1,3 gives tornado, then enter HSP and use Mandinga b+4',
            'Hold D after HSP b+4 to go into RLX, then 3+4 finishes',
            'Maximum wall damage — the install reward',
          ]}
        />

        <ComboCard
          title="RLX Wall Combo"
          notation="RLX 2,4,4"
          damage="~30"
          difficulty="beginner"
          notes={[
            'Alternative wall combo if you\'re in RLX at the wall',
            'Simpler execution from RLX position',
          ]}
        />
      </Section>

      <Section title="Combo Enders and Choices">
        <p>
          Not every combo needs to end the same way. Your ender choice depends on the situation:
        </p>
        <ul>
          <li><strong><code>db+4,4</code></strong> — Default ender. Builds Mandinga. Good damage. Safe.</li>
          <li><strong><code>4,4</code></strong> — Medium wall carry. Use when you're mid-stage and want to push toward the wall.</li>
          <li><strong><code>uf+3+4</code></strong> — Short carry. Slams them close to you for oki.</li>
          <li><strong><code>uf+4</code></strong> — Sets up RLX wall combo at the wall. Deposits you in RLX for pressure.</li>
          <li><strong><code>f+3+4</code></strong> — Wall break. Use near breakable walls for stage transitions.</li>
          <li><strong><code>u+1+2</code> / <code>f,f+3+4</code></strong> — Floor break. Use on stages with breakable floors.</li>
        </ul>

        <KeyConcept title="Heat Burst Extension" icon="⚡">
          <p>
            After tornado, you can end with <code>uf+4</code> into heat burst to extend the combo
            for extra damage. For launchers that instantly tornado (like <code>ws+1,3</code> into{' '}
            <code>RLX 3+4</code>), activate heat burst after <code>RLX 2,4~D</code>. This sacrifices
            your heat activation for extra combo damage — only do it when the extra damage kills
            or you don't need heat for the current round.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practice: Combo Routes">
        <PracticeBox
          title="Learning the Combos"
          setup="Practice Mode. Set dummy to Stand. Turn on combo damage display."
          tasks={[
            { id: 'eddy-df3-combo', text: 'Land the df+3 staple combo five times clean', detail: 'df+3 → f+2 → b+3,3 → RLX 2,4~D → RLX 2 → qcf+3 T! → db+4,4. This is the combo you\'ll use most.', type: 'counter', target: 5 },
            { id: 'eddy-ws2-combo', text: 'Land the ws+2 staple combo five times', detail: 'ws+2 → b+3,3 → RLX 2,4~D → RLX 2 → qcf+3 T! → db+4,4. Same route, no f+2 pickup needed.', type: 'counter', target: 5 },
            { id: 'eddy-ws13-combo', text: 'Land the ws+1,3 combo five times', detail: 'ws+1,3 → RLX 3+4 T! → uf+4 → RLX 2,4~D → RLX 3,3. The Family B route.', type: 'counter', target: 5 },
            { id: 'eddy-ss34-combo', text: 'Land the SS 3+4 combo five times', detail: 'SS 3+4 → ws+3 T! → uf+4 → RLX 2,4~D → RLX 3,3. Another Family B starter.', type: 'counter', target: 5 },
            { id: 'eddy-wall-combo', text: 'Practice wall combo: b+2,3,3 after wall splat', detail: 'Launch with df+3 near the wall, end the combo with a wall splat, then b+2,3,3.', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="The RLX 2,4~D Input">
          The trickiest part of Eddy's combos is the <code>RLX 2,4~D</code> input. You press 2,
          then 4, then hold down to stay in RLX. If you don't hold down, you'll pop out of Relax
          and drop the combo. Practice just this piece in isolation until it's muscle memory:
          enter RLX (<code>d+3+4</code>), press 2, press 4, hold D. Repeat until it's automatic.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          You can convert hits into damage. But defense wins rounds too — knowing exactly how hard
          to punish every blocked move is the difference between -10 and death for your opponent.
          Next chapter covers Eddy's punishment from standing and crouching, spotlighting the
          devastating <code>ws+1,3</code> that makes people afraid to throw lows at you.
        </p>
      </Section>
    </Chapter>
  )
}
