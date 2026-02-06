import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Punishment"
      intro="Jin has arguably the best all-around punishment in Tekken 8. This isn't just a reference table — it's about turning your opponent's mistakes into your offense."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Heat System"
    >
      <Section title="Why Punishment Matters More for Jin">
        <p>
          Here's a secret about Jin: <strong>punishment IS offense.</strong> Because Jin's 
          pressure is built on conditioning, every time you punish correctly, you're doing 
          two things: dealing damage AND teaching the opponent that their move is unsafe.
        </p>

        <p>
          A Jin player who punishes perfectly is terrifying because their opponent can't 
          throw out anything unsafe. This limits them to safe moves — which are exactly the 
          moves Jin's poke game is designed to beat.
        </p>

        <KeyConcept title="Punishment Creates Offense" icon="⚡">
          <p>
            When you punish a -12 move with <code>b+1,2</code> (wall splatting from across the stage), 
            your opponent stops doing that move. When they stop doing risky moves, they're forced 
            into safe pokes — which is exactly where your conditioning game dominates.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Standing Punishment">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '16px' }}>
          {[
            { frames: 'i10 (-10)', move: '2,4', damage: '29', note: 'Wall splats from incredible range. Enter ZEN with F for mixup. Your go-to punish for most blocked moves.' },
            { frames: 'i12 (-12)', move: 'b+1,2', damage: '31', note: 'Hit confirmable. Wall splats from absurd distance. THE move that makes opponents afraid to press unsafe stuff.' },
            { frames: 'i13 (-13)', move: '1+2 (heat) or df+1,4', damage: '24/28', note: '1+2 activates heat — use when you want pressure. df+1,4 for raw damage and wall splat.' },
            { frames: 'i14 (-14)', move: 'f+1+2 or 4,3,1 (heat)', damage: '38/29+heat', note: 'f+1+2 does great damage and wall splats. In heat, 4,3,1 into heat dash = full launch. Huge punish.' },
            { frames: 'i15 (-15)', move: 'd+3+4 or EWHF', damage: '20/25 + combo', note: 'Can-can (d+3+4) is consistent. Electric if you have the execution. Both = full combo for 70+ damage.' },
            { frames: 'i16+ (-16+)', move: 'f,f+2 or b+2,1 or f+4,2', damage: 'Various', note: 'For moves with pushback. f,f+2 has great range. b+2,1 reaches far. f+4,2 consistent and long range.' },
          ].map((row, i) => (
            <div key={i} style={{ padding: '14px 16px', background: 'var(--background-secondary)', borderRadius: '6px', borderLeft: `3px solid ${i <= 1 ? 'var(--text-secondary)' : i <= 3 ? 'var(--accent)' : 'var(--accent-secondary)'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontWeight: 700, color: 'var(--accent)' }}>{row.frames}</span>
                <code style={{ color: 'var(--text-primary)' }}>{row.move}</code>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>{row.damage} dmg</span>
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{row.note}</p>
            </div>
          ))}
        </div>

        <TipBox variant="tip" title="Start With 2,4 for Everything">
          If you're not sure how unsafe a move is, just use <code>2,4</code>. It's i10, it wall splats, 
          and you can transition to ZEN. You'll never miss a punish and you'll never get counter-hit 
          for trying to punish something that wasn't actually unsafe. As you learn matchups, upgrade 
          specific punishes to b+1,2, f+1+2, etc.
        </TipBox>
      </Section>

      <Section title="While Standing (Crouching) Punishment">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '16px' }}>
          {[
            { frames: 'i11 (-11)', move: 'ws+4,4', damage: '28', note: 'Plus 4 on hit. The high extension must be actively ducked — it\'s a natural combo. Better than 95% of the cast\'s ws punish.' },
            { frames: 'i13 (-13)', move: 'ws+1,3,2,1,4,2', damage: '37', note: 'The full Kazama combo. Knockdown. Floor breaks. Great damage for a ws13 punish. Or use ws+1,3~3 for +6 and Breaking Step.' },
            { frames: 'i14 (-14)', move: 'ws+2', damage: '14 + full combo', note: 'LAUNCHER. Only -12 on block. Jin launches -14 lows from crouch. This is a huge privilege most characters don\'t have.' },
          ].map((row, i) => (
            <div key={i} style={{ padding: '14px 16px', background: 'var(--background-secondary)', borderRadius: '6px', borderLeft: `3px solid ${i === 2 ? 'var(--accent-secondary)' : 'var(--accent)'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontWeight: 700, color: 'var(--accent)' }}>{row.frames}</span>
                <code style={{ color: 'var(--text-primary)' }}>{row.move}</code>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 600 }}>{row.damage} dmg</span>
              </div>
              <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{row.note}</p>
            </div>
          ))}
        </div>

        <KeyConcept title="ws+2 Is Broken" icon="💥">
          <p>
            Most characters need a 15-16 frame ws move to launch. Jin launches at i14 with ws+2. 
            This means lows that are "safe" against most of the cast get full-combo launched by Jin. 
            If you block any low that's -14 or worse, ws+2 into full combo is free. This alone wins matchups.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          When your opponent whiffs a move (misses completely), you get a free launch:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {[
            { move: 'EWHF', range: 'Close-mid', note: 'Best whiff punish in the game. +5 on block as backup. Practice this.' },
            { move: 'f,f+2', range: 'Mid-long', note: 'Heat engager with great range. Safe if it gets blocked. Consistent.' },
            { move: '1+2', range: 'Close', note: 'Fast heat engager. i13 is quick enough to punish tight whiffs.' },
            { move: 'f+1+2', range: 'Mid', note: 'i14 with good range. Wall splats. Use when f,f+2 is too far.' },
            { move: 'b+2,1', range: 'Long', note: 'Reaches from very far. Safe. Good for whiff punishing at range.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'var(--background-secondary)', borderRadius: '6px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <code style={{ color: 'var(--accent)', minWidth: '80px' }}>{item.move}</code>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', minWidth: '80px' }}>{item.range}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.note}</span>
            </div>
          ))}
        </div>

        <TipBox variant="warning" title="Electric Whiff Punish">
          The electric is the best whiff punish because even if you mistime it, the WGF version 
          still launches on hit. Only risk: if they somehow block it, WGF is -10 (jab punishable). 
          EWHF at +5 is obviously better, but either version works for whiff punishment.
        </TipBox>
      </Section>

      <Collapsible title="Punishment Training Tips" icon="🎯">
        <div style={{ marginTop: '12px' }}>
          <p>Go to <strong>Punishment Training</strong> in Practice Mode for each character you face frequently.</p>
          <ol style={{ lineHeight: '2.2' }}>
            <li><strong>Start with 2,4 for everything</strong> — Never miss a punish</li>
            <li><strong>Upgrade to b+1,2 for -12 moves</strong> — The wall splat range is absurd</li>
            <li><strong>Learn which lows are -14</strong> — ws+2 launch changes matchups</li>
            <li><strong>Practice electric whiff punish</strong> — Set opponent to random actions, step back, electric when they whiff</li>
          </ol>
        </div>
      </Collapsible>
    </Chapter>
  )
}
