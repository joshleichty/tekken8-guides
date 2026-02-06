import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Plus Frame Weapons"
      intro="Once you've conditioned the opponent to stop pressing, you can skip straight to the endgame: plus frame moves that lock them in place and force real 50/50s. This is where Jin becomes truly dangerous."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="ZEN Stance"
    >
      <Section title="The Electric — EWHF">
        <MoveCard character="jin"
          videoId="f,n,d,df+2"
          move={{
            input: 'f,n,d,df:2 (EWHF)',
            hitLevel: ['h'],
            damage: '25',
            startup: 'i11~12',
            onBlock: '+5',
            onHit: '+76a (full combo)',
            tags: ['High', 'Plus on Block', 'Launcher', 'Core Tool'],
            description: 'The best move in Tekken, tied with other electrics. +5 on block means your opponent CANNOT press after blocking this. Launches on hit. The entire game changes when you can do this consistently.',
            notes: ['Just-frame input: f,n,d,df:2 — must press 2 on the df frame', 'Non-just-frame (WGF) is -10 on block'],
          }}
          showVideo
        />

        <KeyConcept title="Why +5 Matters" icon="⚡">
          <p>
            At +5 on block, here's what your opponent CAN'T do:
          </p>
          <ul>
            <li><strong>Jab</strong> — Your df+3 (i12) beats their jab (i10). That's a 12-frame mid check that beats jab at +5.</li>
            <li><strong>Sidestep</strong> — You're too plus. Most movement gets stuffed.</li>
            <li><strong>Power crush</strong> — Your i12 mid (df+3) or magic four beats it.</li>
            <li><strong>Do nothing</strong> — Free throw, free poke, free low, free everything.</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            Electric on block is effectively a free turn. That's why it's the best move in the game.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Panic About Execution">
          The just-frame electric (EWHF) requires practice but it's much easier in Tekken 8 
          than previous games. In Heat mode, you get free electrics without the just-frame timing. 
          Even the non-just-frame version (WGF) is usable — it's -10 on block, which means only 
          jab punishable. Not ideal, but not a death sentence.
        </TipBox>

        <Flowchart
          title="After Electric on Block (+5)"
          nodes={[
            { type: 'start', label: 'EWHF blocked (+5)' },
            { type: 'decision', label: 'Opponent responds:', branches: [
              { label: 'They freeze', action: 'Throw, d+2, db+4, or another electric. Free mixup.' },
              { label: 'They press jab', action: 'df+3 (i12 mid) beats their jab. Or magic four trades for full combo.' },
              { label: 'They try to duck', action: 'Another electric launches. Or df+1 checks.' },
              { label: 'They power crush', action: 'df+3 or d+2 beats power crush at +5.' },
            ]},
          ]}
        />
      </Section>

      <Section title="While Running 3 (f,f,F+3)">
        <MoveCard character="jin"
          videoId="f,f,F+3"
          move={{
            input: 'f,f,F+3',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i22',
            onBlock: '+6',
            onHit: '+13a',
            tags: ['Mid', 'Plus on Block', 'Wall Splat', 'Chip Damage', 'ZEN Transition'],
            description: 'While running 3. Plus SIX on block as a MID. Wall splats. 9 chip damage on block. Transitions into ZEN with F. This is how you close distance and start wall pressure.',
          }}
          showVideo
        />

        <p>
          At +6 on block, <code>f,f,F+3</code> gives you the same benefits as electric but 
          it's a <strong>mid</strong> — meaning it can't be ducked. The trade-off is it's slower (i22) 
          and requires running momentum. Use it to approach and at the wall.
        </p>

        <TipBox variant="tip" title="Breaking Step Into Running 3">
          You can cancel Breaking Step into running 3 with the <code>uf+3</code> input. 
          At the wall, the sequence <code>ZEN 3+4 → Breaking Step → running 3</code> is 
          completely uninterruptible and does massive chip damage.
        </TipBox>
      </Section>

      <Section title="ZEN 3+4 — Wall Pressure King">
        <MoveCard character="jin"
          videoId="ZEN.3+4"
          move={{
            input: 'ZEN 3+4',
            hitLevel: ['h'],
            damage: '25',
            startup: 'i21~27',
            onBlock: '+9g~+15g',
            onHit: '+19a',
            tags: ['High', 'Massively Plus', 'Chip Damage', 'Wall Pressure', 'Breaking Step'],
            description: 'The wall pressure move. +9 to +15 on block depending on spacing. Huge chip damage. Transitions to Breaking Step with df. At the wall, this into electric is uninterruptible. Can be ducked — that\'s the weakness.',
          }}
          showVideo
        />

        <p>
          <code>ZEN 3+4</code> is Jin's version of Law's Legend Kick — massively plus on block 
          with chip damage. The catch: it's a <strong>high</strong>, so opponents can duck it. 
          That's why you only use it when they're conditioned to block:
        </p>

        <Flowchart
          title="ZEN 3+4 at the Wall"
          nodes={[
            { type: 'start', label: 'ZEN 3+4 blocked (about +9)' },
            { type: 'decision', label: 'Opponent response:', branches: [
              { label: 'They freeze', action: 'Another ZEN 3+4, or electric, or throw. Loop the pressure.' },
              { label: 'They duck', action: 'ZEN 4 (diving mid, +2 on block) or electric (launches). Switch to mids.' },
              { label: 'They press', action: 'Electric is uninterruptible at +9. Free launch. Or BRS running 3 into +6.' },
              { label: 'They sidestep', action: 'ZEN 3 (homing mid, safe) catches stepping.' },
            ]},
          ]}
        />
      </Section>

      <Section title="df+3~3 (Brazilian Kick) — The Setup Mid">
        <MoveCard character="jin"
          videoId="df+3,3"
          move={{
            input: 'df+3~3',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i23',
            onBlock: '+6c',
            onHit: '+13c (guaranteed follow-up)',
            tags: ['Mid', 'Plus on Block', 'Forced Crouch', 'Breaking Step'],
            description: 'A slow mid that is +6 on block and forces crouch. On hit, +13 with guaranteed df+1,4 or 1+2 (heat). Enters Breaking Step with df. Use when opponent is scared to press.',
          }}
          showVideo
        />

        <p>
          We covered this in Chapter 3 but it deserves emphasis here. After <code>df+3~3</code> 
          on block, your opponent is <strong>crouching at -6</strong>. From here:
        </p>

        <ul>
          <li><strong>Electric from Breaking Step</strong> — uninterruptible mid(special mid), +4 on block from BRS</li>
          <li><strong>Another df+3~3</strong> — loop the pressure if they keep blocking</li>
          <li><strong>Throw</strong> — they can't interrupt at -6</li>
          <li><strong>Hell sweep</strong> — catches crouch blockers expecting a mid</li>
        </ul>
      </Section>

      <Section title="The Plus Frame Ladder">
        <p>
          Think of Jin's plus frame moves as a <strong>ladder</strong> you climb based on how 
          much respect the opponent is showing:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '16px' }}>
          {[
            { frames: '+1 to +3', moves: 'Jab hit, db+4 hit, df+1 hit', color: 'var(--text-secondary)', note: 'Enough for poke loops. Can enforce magic four trades.' },
            { frames: '+4 to +6', moves: 'EWHF block, f,f,F+3 block, df+3~3 block, d+2 hit', color: 'var(--accent)', note: 'Real advantage. Your 12f mid beats their jab. Free mixup territory.' },
            { frames: '+7 to +9', moves: 'ZEN 3+4 block (low end)', color: '#f59e0b', note: 'Opponent can\'t do anything fast enough. Electric is uninterruptible.' },
            { frames: '+10 to +15', moves: 'ZEN 3+4 block (tip range), ZEN 4 hit, f+4 hit into ZEN', color: '#ef4444', note: 'Total lockdown. Any move you throw is guaranteed to come out first.' },
          ].map((level, i) => (
            <div key={i} style={{ padding: '14px 16px', background: 'var(--background-secondary)', borderRadius: '6px', borderLeft: `3px solid ${level.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: level.color }}>{level.frames}</span>
                <code style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{level.moves}</code>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)' }}>{level.note}</p>
            </div>
          ))}
        </div>

        <KeyConcept title="Climb the Ladder" icon="📈">
          <p>
            Start with pokes (+1 to +3). If the opponent respects those, escalate to electric 
            and df+3~3 (+4 to +6). If they still don't move, go to ZEN 3+4 and running 3 (+7+). 
            If they ever start pressing, drop back down to pokes and counter-hit them. 
            <strong>The ladder goes both ways.</strong>
          </p>
        </KeyConcept>
      </Section>

      <Section title="Looping Plus Frames Against Patient Opponents">
        <p>
          Against turtles who just block everything, you can loop plus frame moves to chip 
          them down. This is unique to Jin and it's devastating:
        </p>

        <div style={{ padding: '20px', background: 'var(--background-secondary)', borderRadius: '8px', marginTop: '16px', borderLeft: '3px solid var(--accent)' }}>
          <p style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '12px' }}>Plus Frame Loop (at the wall)</p>
          <ol style={{ color: 'var(--text-secondary)', lineHeight: '2' }}>
            <li><code>ZEN 3+4</code> on block → +9, chip damage</li>
            <li><code>EWHF</code> → +5, chip damage (uninterruptible at +9)</li>
            <li><code>f,f,F+3</code> → +6, chip damage, wall pushback</li>
            <li>Electric again → +5, more chip</li>
            <li>Eventually go for <code>heat smash</code> or throw when they're too scared</li>
          </ol>
          <p style={{ marginTop: '12px', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Three ZEN 3+4s worth of chip damage is nearly half a health bar. Against patient 
            opponents, this is how Jin wins rounds without ever opening them up.
          </p>
        </div>

        <TipBox variant="warning" title="Respect the Duck">
          ZEN 3+4 and electric are both highs. If your opponent starts ducking, they can launch 
          you. The counter: mix in ZEN 4 (mid), ZEN 1,2 (mid string), or just throw them. 
          Read whether they're blocking or ducking and adjust.
        </TipBox>
      </Section>
    </Chapter>
  )
}
