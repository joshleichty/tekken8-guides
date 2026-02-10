import { Chapter, Section } from '../../../components/guide'
import {
  KeyConcept,
  TipBox,
  PracticeBox,
  ComboCard,
  Collapsible,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Combos"
      intro="The best thing about Azucena's combos: one route works from almost every launcher. Learn one sequence and you can convert df+2, ws+2, uf+4, db+1+2, and most counter hits into 60+ damage. No character-specific weirdness. No launcher-dependent routes. Just one combo."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Neutral and Poking"
    >
      <Section title="The Universal Route">
        <p>
          This is your bread and butter. Learn this first, and it covers 90% of situations.
        </p>

        <ComboCard
          title="Universal BNB"
          starter="df+2, ws+2, uf+4, db+1+2"
          route={['d+2,3', 'LIB 3+4', 'f,f+3 T!', 'f+2,1,4']}
          damage="~65"
          difficulty="beginner"
          notes={[
            'Works from almost every launcher',
            'd+2,3 picks up into LIB 3+4 for the screw',
            'f,f+3 is the tornado (T!) move',
            'f+2,1,4 is the ender — consistent damage',
          ]}
        />

        <KeyConcept title="Breaking Down the Route" icon="📋">
          <ul>
            <li><strong>d+2,3</strong> — The pickup. Puts you into LIB automatically.</li>
            <li><strong>LIB 3+4</strong> — Screw/bound. Launches them into the air for the tornado.</li>
            <li><strong>f,f+3 T!</strong> — The tornado (tailspin). Slams them into the ground for the final hit.</li>
            <li><strong>f+2,1,4</strong> — The ender. Three hits of consistent damage.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Dash After LIB 3+4">
          After LIB 3+4 connects, you need a short forward dash before f,f+3. The timing is:
          LIB 3+4 (hits) → tiny dash → f,f+3. If f,f+3 whiffs, you dashed too early. If it
          doesn't come out, you didn't dash. Practice the rhythm.
        </TipBox>
      </Section>

      <Section title="Beginner Alternative">
        <p>
          If the universal route feels too fast, here's an easier version with less damage but more
          forgiving timing.
        </p>

        <ComboCard
          title="Easy BNB"
          starter="df+2, ws+2, uf+4"
          route={['4,3', 'd+2,3', 'LIB 1+2', 'f+2,1,4']}
          damage="~58"
          difficulty="beginner"
          notes={[
            'Easier timing — 4,3 is a very forgiving pickup',
            'Less damage than the universal route',
            'Good while you\'re learning, upgrade later',
          ]}
        />
      </Section>

      <Section title="Counter Hit Routes">
        <p>
          Counter hit launchers have different animations, so the pickup changes. Here are the key CH routes.
        </p>

        <ComboCard
          title="CH 1+2 (Crumple)"
          starter="CH 1+2"
          route={['d+2,3', 'LIB 3+4', 'f,f+3 T!', 'f+2,1,4']}
          damage="~62"
          notes={['Same route as universal — crumple allows the same pickup']}
        />

        <ComboCard
          title="CH d+1"
          starter="CH d+1"
          route={['ws+4', 'd+2,3', 'LIB 3+4', 'f,f+3 T!', 'f+2,1,4']}
          damage="~60"
          notes={[
            'ws+4 picks up from the CH d+1 crumple',
            'Then same universal route',
          ]}
        />

        <ComboCard
          title="CH ws+1"
          starter="CH ws+1"
          route={['d+2,3', 'LIB 3+4', 'f,f+3 T!', 'f+2,1,4']}
          damage="~58"
          notes={['Standard universal route from the CH launch']}
        />

        <ComboCard
          title="CH LIB 4,1"
          starter="CH LIB 4,1"
          route={['d+2,3', 'LIB 3+4', 'f,f+3 T!', 'f+2,1,4']}
          damage="~60"
          notes={['Confirmable — if you see the CH flash, complete the combo']}
        />
      </Section>

      <Section title="Wall Carry Options">
        <p>
          When you need to push the opponent to the wall instead of maximizing raw damage.
        </p>

        <KeyConcept title="Wall Carry Choices" icon="🧱">
          <ul>
            <li><strong>4,3</strong> — Long carry distance. High wallsplat. Use when the wall is far.</li>
            <li><strong>df+4,1</strong> — Mid-distance carry. Use when the wall is closer.</li>
            <li><strong>f,f+3</strong> — Tornado into carry. Standard option.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            After the tornado, replace the ender based on wall distance:
          </p>
          <ul>
            <li>Wall close → <strong>f,f+3 T! → df+1,4,1~2</strong> (wall splat)</li>
            <li>Wall far → <strong>f,f+3 T! → 4,3</strong> (max carry)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Wall Combos">
        <ComboCard
          title="Standard Wall Combo"
          starter="Wall splat"
          notation="df+1,4,1~2"
          damage="~35"
          notes={['Your go-to wall combo after any splat', 'The 1~2 ender does good wall damage']}
        />

        <ComboCard
          title="Low Wallsplat Combo"
          starter="Low wall splat"
          route={['LIB d+3', 'FC df+4']}
          damage="~30"
          notes={[
            'For low wallsplats (like from hellsweep)',
            'LIB d+3 into FC df+4 for maximum damage',
          ]}
        />

        <ComboCard
          title="Tornado at Wall"
          starter="Tornado near wall"
          route={['f,f+3 T!', 'df+1,4,1~2']}
          damage="~40"
          notes={['When tornado happens near the wall', 'df+1,4,1~2 splats for extra damage']}
        />

        <ComboCard
          title="Tornado at Wall (Alt)"
          starter="Tornado near wall"
          route={['df+4,1 T!', 'LIB d+3', 'FC df+4']}
          damage="~42"
          notes={['Higher damage wall combo', 'df+4,1 tornado into LIB d+3 → FC df+4']}
        />
      </Section>

      <Section title="Small Combos and Guaranteed Follow-ups">
        <p>
          Not every hit leads to a full combo. These are guaranteed follow-ups from specific moves.
        </p>

        <Collapsible title="Guaranteed Follow-ups" icon="📋">
          <div style={{ display: 'grid', gap: '12px', marginTop: '12px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600 }}>uf+2 → 3,3 (in heat)</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>Guaranteed follow-up. In heat, 3,3 is confirmed.</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600 }}>LIB 3,1 → BT 3</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>LIB 3,1 hit guarantees BT 3 follow-up.</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600 }}>LIB 3+4 → (dash) db+1+2</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>The armor move on hit guarantees db+1+2 with a dash.</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600 }}>f+3,2 → db+1+2</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>f+3,2 on hit guarantees db+1+2.</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600 }}>f,f+4 → d+1+3 (or d+2+4)</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>Running kick on hit guarantees the crouch throw.</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600 }}>CH (3),2 → f,f+3</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>Counter hit 3 guarantees the 2 extension, which guarantees f,f+3.</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 600 }}>CH (1),1 → LIB 1+2</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>Counter hit jab confirms the 1,1 into LIB 1+2.</div>
            </div>
          </div>
        </Collapsible>
      </Section>

      <Section title="Heat Burst Combo Ender">
        <ComboCard
          title="Heat Burst Ender"
          starter="Any launcher (in heat)"
          route={['...combo...', 'Heat Burst', 'f+4,4~F', 'db+3+4']}
          damage="~75+"
          notes={[
            'Replace the standard ender with heat burst',
            'Heat burst → f+4,4~F → db+3+4 for extra damage',
            'Only available once per round (consumes heat)',
          ]}
        />
      </Section>

      <Section title="Floor and Wall Breaks">
        <KeyConcept title="Breaking Stuff" icon="💥">
          <ul>
            <li><strong>Floor breaks</strong> — Use d+1. It's your floor break move.</li>
            <li><strong>Wall breaks</strong> — Use f+1+2 or f,f,f+3,2. Both break walls and continue the combo.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Practice: The One Combo">
        <PracticeBox
          title="Universal BNB Drill"
          setup="Practice Mode. Set opponent to stand. Launch with df+2."
          tasks={[
            { id: 'az-combo-bnb', text: 'Do df+2 → d+2,3 → LIB 3+4 → f,f+3 → f+2,1,4 ten times', detail: 'The universal route. Get it consistent from df+2 first.', type: 'counter', target: 10 },
            { id: 'az-combo-ws2', text: 'Same combo from ws+2 five times', detail: 'Same route, different starter. Make sure the timing works from WS.', type: 'counter', target: 5 },
            { id: 'az-combo-uf4', text: 'Same combo from uf+4 five times', detail: 'uf+4 has a different launch height — adjust timing.', type: 'counter', target: 5 },
            { id: 'az-combo-wall', text: 'Do the combo with wall carry (4,3 ender) three times', detail: 'Replace f+2,1,4 with 4,3 for wall carry. Practice near the wall.', type: 'counter', target: 3 },
            { id: 'az-combo-wallsplat', text: 'Do wall combo: splat → df+1,4,1~2 five times', detail: 'After a wall splat, immediately do df+1,4,1~2.', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="Combo Priority">
          Get the universal BNB consistent before learning any variations. One reliable combo is worth more
          than five dropped ones. When you can hit df+2 → full combo 10 out of 10 times, then start
          learning wall carry and CH routes.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          You know how to approach, poke, punish, use stances, fish for counter hits, and convert damage.
          Now it's time for the subtler game: <strong>neutral</strong>. How do you control space? What tools
          work at each range? Where does Azucena want to be on the screen?
        </p>
      </Section>
    </Chapter>
  )
}
