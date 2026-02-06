import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Wall Game"
      intro="Jin's wall game is elite — possibly top 3 in the cast. Between electric chip loops, ZEN pressure, and devastating wall combos, getting your opponent to the wall is where Jin closes out rounds."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Defense"
    >
      <Section title="Getting to the Wall">
        <p>
          Jin has several moves that carry opponents to the wall from mid-range:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {[
            { move: 'f,f,F+3 (Running 3)', note: 'Best approach tool. +6 on block, wall splats, chip damage. Covers distance fast.' },
            { move: 'b+2,1 (Long range mid-mid)', note: 'Reaches from far away. Wall splats on hit. Use to push them back.' },
            { move: 'f,f+2 (Heat engager)', note: 'Great range. Wall splats. Heat activation option for wall pressure.' },
            { move: 'EWHF (Electric)', note: '+5 at the wall is a death sentence. If you can do it, it\'s the best wall-pushing tool.' },
            { move: 'b,f+2,3 or b,f+2,1,2', note: 'b,f+2,3 → ZEN at the wall is strong. b,f+2,1,2 wall breaks.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'var(--background-secondary)', borderRadius: '6px' }}>
              <code style={{ color: 'var(--accent)' }}>{item.move}</code>
              <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Wall Pressure (They're Near the Wall)">
        <p>
          When the opponent has their back to the wall, Jin's pressure becomes almost unbeatable. 
          Here's the priority system:
        </p>

        <Flowchart
          title="Wall Pressure Gameplan"
          nodes={[
            { type: 'start', label: 'Opponent is at the wall' },
            { type: 'decision', label: 'Do you have frame advantage?', branches: [
              { label: 'Yes (+5 or more)', action: 'Electric → free +5 loop. ZEN 3+4 → +9 chip. Running 3 → +6. Loop these.' },
              { label: 'Neutral (0 to +3)', action: 'df+1 check. Magic four for trades. db+4 for low poke. Build advantage with pokes.' },
              { label: 'They\'re frozen (not pressing)', action: 'Throw → wall splat. d+2 → guaranteed oki. df+3~3 → forced crouch mixup.' },
              { label: 'They\'re pressing buttons', action: 'Electric beats everything at +5. df+3 beats jab. Just block and punish.' },
            ]},
          ]}
        />

        <KeyConcept title="The Wall Chip Loop" icon="🧱">
          <p>
            The dream at the wall:
          </p>
          <ol style={{ lineHeight: '2' }}>
            <li><code>ZEN 3+4</code> — +9 on block, ~8 chip damage</li>
            <li><code>EWHF</code> — uninterruptible at +9, +5 on block, ~5 chip damage</li>
            <li>Repeat step 1, or go for <code>f,f,F+3</code> (+6, ~9 chip, wall pushback)</li>
            <li>When heat timer expires → <code>Heat Smash</code></li>
          </ol>
          <p style={{ marginTop: '8px' }}>
            Three loops of this does <strong>40-60+ chip damage</strong>. Against an opponent 
            who respects the highs and doesn't duck, this is free damage.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="When They Duck">
          The weakness of the chip loop is ducking — both ZEN 3+4 and electric are highs. 
          If they start ducking: use <code>ZEN 4</code> (mid dive, plus on block), 
          <code>ZEN 1,2</code> (mid-mid wall splat), <code>df+1</code> (fast mid check), 
          or <code>f,f,F+3</code> (running mid, +6 on block). Read the duck and punish it hard.
        </TipBox>
      </Section>

      <Section title="Wall Splat Setups">
        <p>
          These moves wall splat from different ranges:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '16px' }}>
          {[
            { range: 'Close', moves: '2,4 · b,f+2,3 · ZEN 1,2 · 1+2 · df+1,4', color: '#ef4444' },
            { range: 'Mid', moves: 'b+1,2 · f+1+2 · f,f+2 · b+2,1', color: '#f59e0b' },
            { range: 'Far', moves: 'f,f,F+3 · b+2,1 · EWHF', color: '#10b981' },
          ].map((level, i) => (
            <div key={i} style={{ padding: '14px 16px', background: 'var(--background-secondary)', borderRadius: '6px', borderLeft: `3px solid ${level.color}` }}>
              <span style={{ fontWeight: 700, color: level.color }}>{level.range} Range</span>
              <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)' }}><code>{level.moves}</code></p>
            </div>
          ))}
        </div>

        <TipBox variant="tip" title="b+1,2 Is Your Wall Splat Cheat Code">
          <code>b+1,2</code> wall splats from a distance that looks unfair. It's hit confirmable, 
          i12, and reaches far. At the wall, this is often your best option because you can 
          confirm it on hit (wall splat) and not throw the second hit on block.
        </TipBox>
      </Section>

      <Section title="After Wall Splat">
        <p>
          You got the wall splat. Now maximize damage:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ fontWeight: 600, color: 'var(--accent)', margin: '0 0 8px' }}>Standard Wall Combo</p>
            <code style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              1 (jab) → db+2,2,3
            </code>
            <p style={{ margin: '8px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Simple, reliable, good damage. The jab aligns them, db+2,2,3 is the ender.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <p style={{ fontWeight: 600, color: 'var(--accent-secondary)', margin: '0 0 8px' }}>Tornado Wall Combo (if tornado available)</p>
            <code style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              f,n,d,df+1 T! → EWHF → 1 → db+2,2,3
            </code>
            <p style={{ margin: '8px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Much more damage. Uses tornado for the extra hits. CD1 into electric at the wall is stylish AND optimal.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
            <p style={{ fontWeight: 600, color: '#10b981', margin: '0 0 8px' }}>Easy Wall Combo</p>
            <code style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              b,f+2,1,df+2
            </code>
            <p style={{ margin: '8px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              The simplest wall combo. Works in almost every situation. Slightly less damage but you'll never drop it.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Wall Break Situations">
        <p>
          At breakable walls, you have to decide: do you break the wall for more damage or 
          keep them at the wall for pressure?
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <p style={{ fontWeight: 600, color: 'var(--accent)', margin: '0 0 8px' }}>Break the Wall When:</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, paddingLeft: '20px' }}>
              <li>The break leads to another wall (corner stages)</li>
              <li>You have rage and want max damage</li>
              <li>Breaking leads to a balcony break or floor break</li>
              <li>The wall ender will kill</li>
            </ul>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <p style={{ fontWeight: 600, color: 'var(--accent-secondary)', margin: '0 0 8px' }}>Keep Wall Pressure When:</p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, paddingLeft: '20px' }}>
              <li>You have heat and want chip loop damage</li>
              <li>Breaking leads to open space (no more wall)</li>
              <li>Opponent has no heat/rage (free chip loop)</li>
              <li>You're ahead on life and want to run clock</li>
            </ul>
          </div>
        </div>

        <TipBox variant="tip" title="Wall Break Move">
          <code>b,f+2,1,2</code> is your standard wall break move. The third hit breaks the wall. 
          You can also use heat smash for a wall break if you're in heat.
        </TipBox>
      </Section>

      <Section title="Oki (After Knockdown at the Wall)">
        <p>
          After a wall combo, you're close and plus. Here's what to do:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {[
            { option: 'ZEN 4 (diving kick)', note: 'Hits grounded. Plus on block vs wakeup stand. Safe and rewarding.' },
            { option: 'd+2 (gut punch)', note: 'Guaranteed if they stay grounded. Safe oki tool.' },
            { option: 'CD1 (tornado mid)', note: 'Hits grounded. Flips them for more oki. Good for continuous pressure.' },
            { option: 'Dash into throw', note: 'Catches tech rolls and wakeup stand. Especially effective if they\'re too scared to press.' },
            { option: 'Backdash → whiff punish', note: 'If they wake up with a risky option, just step back and electric their whiff.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '10px 16px', background: 'var(--background-secondary)', borderRadius: '6px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <code style={{ color: 'var(--accent)', minWidth: '140px' }}>{item.option}</code>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.note}</span>
            </div>
          ))}
        </div>
      </Section>
    </Chapter>
  )
}
