import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="First Combos"
      intro="You've learned the stances and strings. Now it's time to convert your launchers into damage. Hwoarang's combos can be complex, but we'll start simple and build up."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Master Right Flamingo"
    >
      <Section title="How Hwoarang Combos Work">
        <p>
          Hwoarang's combos flow through his stances. Most routes follow this pattern:
        </p>

        <KeyConcept title="The Combo Structure" icon="📐">
          <ol>
            <li><strong>Launcher</strong> — df+2, b+3, ws2,3, etc.</li>
            <li><strong>Filler</strong> — f+4, RFS 3~4, stance transitions</li>
            <li><strong>Tornado (T!)</strong> — Usually from a stance move</li>
            <li><strong>Ender</strong> — uf+3,4,3 or wall carry options</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="What is Tornado (T!)?" icon="🌀">
          <p>
            <strong>Tornado</strong> is a spinning state that extends combos. When you hit 
            someone with a Tornado move, they spin in place and fall slowly, letting you 
            add more hits.
          </p>
          <p style={{ marginTop: '12px' }}>
            <strong>You only get ONE Tornado per combo.</strong> Plan your route accordingly.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Main Launchers">
        <p>
          These moves start combos. Know which one to use when:
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>df+2</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>i15-16 launcher — Your standing launch punish</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>b+3</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>i16-17 launcher — Best whiff punisher</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>ws2,3</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>i15-16 — WS launcher from crouch</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>LFS uf+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>i19-20 — Tornado launcher from LFS</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>u+3+4</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>i25-26 — Orbital/hopkick, low crushes</p>
            </div>
            <div style={{ flex: '1', minWidth: '200px', padding: '12px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
              <code style={{ color: 'var(--accent)' }}>JFSR (f,n,df:4)</code>
              <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>i16 — Safe launcher (Chapter 8)</p>
            </div>
          </div>
        </div>

        <TipBox variant="tip" title="When to Use Each Launcher">
          <ul>
            <li><strong>df+2</strong> — 15f block punish (standard)</li>
            <li><strong>b+3</strong> — Whiff punishes at range</li>
            <li><strong>ws2,3</strong> — After blocking lows</li>
            <li><strong>u+3+4</strong> — Read a low, low crush it</li>
            <li><strong>JFSR</strong> — Safe mid launcher (requires execution)</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="The Beginner Combo">
        <p>
          This is your first combo. It works off df+2 and b+3, does good damage, and has 
          excellent wall carry. Learn this before anything else.
        </p>

        <ComboCard
          title="Universal Beginner Route"
          starter="df+2 / b+3"
          route={['f+4', 'RFS.3~4', 'uf+3+4~f', 'LFS.uf+4 T!', 'uf+3,4,3']}
          damage="~57"
          difficulty="beginner"
          wallCarry
          notes={[
            'f+4 transitions to RFS',
            'RFS.3~4 is the Flying Eagle (slide 3 into 4)',
            'uf+3+4~f goes to LFS',
            'LFS.uf+4 is your Tornado',
            'uf+3,4,3 is the standard ender'
          ]}
        />

        <KeyConcept title="Breaking Down the Route" icon="📝">
          <ol>
            <li><code>f+4</code> — Puts you in RFS on hit</li>
            <li><code>RFS 3~4</code> — Flying Eagle (slide 3 into 4 quickly)</li>
            <li><code>uf+3+4~f</code> — Double kick into LFS stance</li>
            <li><code>LFS uf+4</code> — <span className="highlight">Tornado</span> launcher</li>
            <li><code>uf+3,4,3</code> — Three-kick ender with good carry</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Tips">
          <ul>
            <li>Start with df+2 as your launcher</li>
            <li>RFS 3~4 means slide from 3 to 4 quickly (like a piano)</li>
            <li>The ~f after uf+3+4 means hold forward to transition</li>
            <li>Practice 10 times in a row before trying in matches</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="WS2,3 Combo">
        <p>
          After blocking a low attack, ws2,3 launches. The combo is slightly different:
        </p>

        <ComboCard
          title="WS2,3 Route"
          starter="ws2,3"
          route={['(whiff LFS 1)', 'u+3', 'LFS.uf+3+4~f', 'uf+3+4~f', 'uf+3+4']}
          damage="~43"
          difficulty="beginner"
          notes={[
            'The ws2,3 already spins them',
            'Whiff LFS 1 is to adjust timing',
            'u+3 picks them up into LFS',
            'Chain uf+3+4 moves for carry'
          ]}
        />

        <TipBox variant="warning" title="ws2,3 is Different">
          ws2,3 causes Tornado by itself, so you can't use another Tornado move. This combo 
          is shorter but still does decent damage. Use it to punish blocked lows.
        </TipBox>
      </Section>

      <Section title="Low Parry Combo">
        <p>
          When you low parry an opponent, you get a mini-launch. The combo is similar to 
          your standard route but without the Tornado:
        </p>

        <ComboCard
          title="Low Parry Route"
          starter="Low Parry (df)"
          route={['f+4', 'RFS.3~4', 'uf+3+4~f', 'uf+3+4~f', 'uf+3+4']}
          damage="~34"
          difficulty="beginner"
          notes={[
            'No Tornado available after low parry',
            'Same opener as standard combo',
            'Just chain uf+3+4 for ender'
          ]}
        />
      </Section>

      <Section title="Counter-Hit Combos">
        <p>
          Hwoarang has several counter-hit launchers. Here are the key ones:
        </p>

        <ComboCard
          title="CH RFS f+4,4"
          starter="CH RFS f+4,4"
          route={['RFS.3~4', 'RFS.b+4']}
          damage="~45"
          difficulty="beginner"
          notes={[
            'The 8-frame CH launcher',
            'Simple route for big damage',
            'In Heat, this is guaranteed!'
          ]}
        />

        <ComboCard
          title="CH RFS df+4"
          starter="CH RFS df+4"
          route={['d+4,4', 'f+4', 'RFS.3~4', 'LFS.f+3']}
          damage="~50"
          difficulty="intermediate"
          notes={[
            'CH RFS df+4 launches',
            'd+4,4 picks up (Tornado)',
            'f+4 into RFS for ender'
          ]}
        />

        <ComboCard
          title="CH db+4,4"
          starter="CH db+4,4"
          route={['ff+3']}
          damage="~35"
          difficulty="beginner"
          notes={[
            'Simple guaranteed follow-up',
            'Can do fancier routes but this is reliable'
          ]}
        />

        <ComboCard
          title="CH b+4"
          starter="CH b+4"
          route={['RFF.3~4', 'uf+3+4~f', 'LFS.uf+4 T!', 'uf+3,4,3']}
          damage="~65"
          difficulty="intermediate"
          notes={[
            'i13 CH launcher',
            'RFF.3~4 is Backlash from RFF',
            'Standard combo after'
          ]}
        />
      </Section>

      <Section title="JFSR Combo">
        <p>
          The Just Frame Skyrocket is covered in Chapter 8, but here's the combo:
        </p>

        <ComboCard
          title="JFSR Route"
          starter="JFSR (f,n,df:4)"
          route={['3+4', 'RFF.3~4', 'f+4', 'RFS.3~4', 'd+4,4 T!', 'uf+3,4,3']}
          damage="~65"
          difficulty="intermediate"
          notes={[
            '3+4 switches to RFF',
            'RFF.3~4 is Backlash',
            'Standard f+4 → RFS 3~4 filler',
            'd+4,4 is Tornado',
            'Massive damage and wall carry'
          ]}
        />
      </Section>

      <Section title="Wall Combos">
        <p>
          When your combo wall splats, finish with these:
        </p>

        <ComboCard
          title="Standard Wall Ender"
          starter="Wall Splat"
          route={['SS 3,3', 'LFS.3,2']}
          damage="Varies"
          difficulty="beginner"
          notes={[
            'Sidestep 3,3 picks up',
            'LFS.3,2 is the finisher',
            'Works after most wall splats'
          ]}
        />

        <ComboCard
          title="Alternative Wall Ender"
          starter="Wall Splat"
          route={['RFF.f+3', 'LFS.f+3', 'LFS.3,f+4']}
          damage="Varies"
          difficulty="intermediate"
          notes={[
            'More damage than simple ender',
            'Requires RFF to start'
          ]}
        />

        <ComboCard
          title="Wall Tornado Ender"
          starter="Wall Splat with T!"
          route={['b+3 T!', '3+4', 'RFF.f+3', 'LFS.f+3', 'LFS.3,f+4']}
          damage="High"
          difficulty="intermediate"
          notes={[
            'Use when you still have Tornado',
            'b+3 is your Tornado at wall',
            'Full wall ender after'
          ]}
        />
      </Section>

      <Section title="What to Focus On">
        <KeyConcept title="Combo Learning Priority" icon="🎯">
          <ol>
            <li><strong>Master the beginner route</strong> — df+2/b+3 → standard combo</li>
            <li><strong>Get it consistent</strong> — 10 reps without dropping</li>
            <li><strong>Learn ws2,3 route</strong> — For punishing lows</li>
            <li><strong>Add CH RFS f+4,4</strong> — This happens often in pressure</li>
            <li><strong>Wall enders</strong> — Don't drop damage at the wall</li>
            <li><strong>JFSR route</strong> — Once you learn the input (Chapter 8)</li>
          </ol>
        </KeyConcept>

        <p>
          Dropped combos do zero damage. A completed beginner combo does full damage. 
          Consistency first, optimization later.
        </p>
      </Section>

      <Collapsible title="Combo Enders Explained" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Different enders have different purposes:
          </p>

          <p><strong>uf+3,4,3</strong> — Standard ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Good wall carry</li>
            <li>Reliable and consistent</li>
          </ul>

          <p><strong>d+4,4</strong> — Tornado ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Use when you haven't used Tornado yet</li>
            <li>Good damage addition</li>
          </ul>

          <p><strong>RFF f+3 → LFS 4~3</strong> — Damage ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>More damage but less carry</li>
            <li>Use at wall or when carry doesn't matter</li>
          </ul>

          <p><strong>ff+3</strong> — Floor break</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Breaks floors/balconies</li>
            <li>Use on stages with breakable floors</li>
          </ul>

          <p><strong>uf+3+4 chain</strong> — Wall carry</p>
          <ul>
            <li>Maximum wall carry</li>
            <li>Slightly less damage</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
