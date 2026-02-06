import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Your Poke Loops"
      intro="Jin's offense starts with pokes — but not random pokes. Specific sequences that create real pressure. This chapter gives you the three poke loops that form the backbone of all Jin offense."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Counter-Hit Weapons"
    >
      <Section title="The Foundation: 2,1">
        <p>
          <code>2,1</code> is not just 'a good poke.' It IS your offense. It is the single most 
          important string Jin has. Everything branches from this.
        </p>

        <MoveCard character="jin"
          move={{
            input: '2,1',
            hitLevel: ['h', 'm'],
            damage: '9, 9',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+6',
            tags: ['High-Mid', 'Natural Combo', 'Core Poke'],
            description: 'Your main string. High-mid natural combo. At -3 on block, you can still sidestep or poke. At +6 on hit, you can enforce your next move.',
          }}
          showVideo
        />

        <KeyConcept title="Why 2,1 Is Everything" icon="⚡">
          <ul>
            <li><strong>+6 on hit</strong> — At +6, your 16-frame moves now trade with their jab. Your 15-frame moves beat their jab. You have real frame advantage.</li>
            <li><strong>-3 on block</strong> — At -3, their jab beats your jab, but you can <strong>sidestep or backdash</strong>. You are NOT stuck. In Tekken 8, sidestepping is effective up to about -5.</li>
            <li><strong>It has a mid extension (2,1,4)</strong> — This creates a mental game: will the 4 come out or won't it?</li>
          </ul>
        </KeyConcept>

        <MoveCard character="jin"
          move={{
            input: '2,1,4',
            hitLevel: ['h', 'm', 'm'],
            damage: '9, 9, 18',
            startup: 'i10',
            onBlock: '-10',
            onHit: '+3',
            onCH: '+19a (wall splat)',
            tags: ['High-Mid-Mid', 'Safe-ish', 'CH Wall Splat'],
            description: 'The mid extension. If they press after 2,1, they eat this for a knockdown. On CH at the wall, free wall splat combo. -10 on block means only jab punishable.',
          }}
          showVideo
        />
      </Section>

      <Section title="Poke Loop #1: The Jab Loop">
        <p>
          This is the most basic Jin pressure sequence and it works from round start to Tekken God.
        </p>

        <Flowchart
          title="The Jab Loop"
          nodes={[
            { type: 'start', label: '2,1 hits (+6)' },
            { type: 'decision', label: 'What does opponent do?', branches: [
              { label: 'They press buttons', action: '2,1,4 — the mid catches them. Knockdown. Free d+2 on the ground. Restart.' },
              { label: 'They block', action: '2,1 again (it\'s only -3, so +6 on hit, you\'re looping). Or go to d+4/db+4 for the low.' },
              { label: 'They sidestep', action: '4 (magic four) — homing, catches sidestep, CH gives free combo.' },
              { label: 'They duck (reading the jab)', action: 'df+1 or df+3 — quick mids that check ducking.' },
            ]},
          ]}
        />

        <p>
          <strong>The key insight:</strong> At +6, you don't need to do anything fancy. Just <code>2,1</code> again. 
          If they keep blocking, you're building mental pressure. If they press, <code>2,1,4</code> 
          catches them. This is a <em>real</em> loop — not just "poke and hope."
        </p>

        <TipBox variant="tip" title="The 2,1 Trap">
          After landing 2,1 on hit two or three times, your opponent WILL start pressing buttons. 
          That's when you go for the full 2,1,4 string. The delayed 4 catches mashers. 
          At the wall, the CH version wall splats for a full combo.
        </TipBox>
      </Section>

      <Section title="Poke Loop #2: The Low Harassment">
        <p>
          Once opponents start respecting your jabs, you need lows to make them duck. 
          Jin has two key low pokes:
        </p>

        <MoveCard character="jin"
          move={{
            input: 'd+4',
            hitLevel: ['L'],
            damage: '11',
            startup: 'i16',
            onBlock: '-12',
            onHit: '-1',
            tags: ['Low', 'High Crush', 'Fast', 'Main Low Poke'],
            description: 'Your fastest low poke. High crushes — goes under jabs and standing highs. Only -1 on hit, meaning it\'s essentially neutral. Use this constantly to chip and annoy.',
          }}
          showVideo
        />

        <MoveCard character="jin"
          move={{
            input: 'db+4',
            hitLevel: ['l'],
            damage: '18',
            startup: 'i20',
            onBlock: '-13',
            onHit: '+3',
            onCH: '+13g',
            tags: ['Low', 'Plus on Hit', 'Great Range', 'Core Low'],
            description: 'Your big low poke. Slower but much more rewarding. +3 on hit means you\'re plus and can enforce moves. Incredible range — catches people from distances they don\'t expect.',
          }}
          showVideo
        />

        <Flowchart
          title="The Low Harassment Loop"
          nodes={[
            { type: 'start', label: 'db+4 hits (+3)' },
            { type: 'decision', label: 'What does opponent do?', branches: [
              { label: 'They jab back', action: '4 (magic four) — at +3, magic four trades with their jab. You get a full combo from the trade.' },
              { label: 'They block mid', action: 'Another db+4 or d+4 — keep chipping. They\'re scared to press.' },
              { label: 'They start ducking', action: 'df+1 or b,f+2,1 — mid check. Catch the duck.' },
              { label: 'They do nothing', action: 'Throw (qcb+1+3 or df+2+4) or 2,1 to restart jab loop.' },
            ]},
          ]}
        />

        <KeyConcept title="The +3 Magic" icon="✨">
          <p>
            +3 is Jin's magic number. At +3, his <code>4</code> (magic four, i13) will trade with 
            the opponent's jab (i10). The trade gives Jin a guaranteed follow-up for a full combo 
            because magic four's trade situation leaves Jin at massive advantage.
          </p>
          <p style={{ marginTop: '8px' }}>
            This means after <code>db+4</code> hits, your opponent literally cannot jab safely. If they jab 
            and you do <code>4</code>, they eat a full combo. If they block, you get to poke again. 
            <strong>This is real pressure.</strong>
          </p>
        </KeyConcept>
      </Section>

      <Section title="Poke Loop #3: The Mid Check">
        <p>
          When opponents start ducking your lows, you need mid pokes to keep them honest.
        </p>

        <MoveCard character="jin"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i13',
            onBlock: '-3',
            onHit: '+4',
            tags: ['Mid', 'Safe', 'Core Mid Poke'],
            description: 'Your main mid check. Fast, safe, and +4 on hit. Has extensions (df+1,4 and df+1,4~4) that catch people pressing after.',
          }}
          showVideo
        />

        <MoveCard character="jin"
          move={{
            input: 'df+3',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i12',
            onBlock: '-8',
            onHit: '+3',
            tags: ['Mid', 'Fast', '12-frame Mid'],
            description: 'Jin\'s fastest mid at i12. Safe at -8. Good for frame traps when you need a quick mid check that beats power crushes.',
          }}
          showVideo
        />

        <Flowchart
          title="The Mid Check Loop"
          nodes={[
            { type: 'start', label: 'df+1 hits (+4)' },
            { type: 'decision', label: 'What does opponent do?', branches: [
              { label: 'They press', action: 'df+1,4 — the natural high extension catches them. Wallsplats on CH.' },
              { label: 'They duck (expecting more df+1)', action: 'df+1,4~4 — the mid ender instead of the high. Knocks down.' },
              { label: 'They block', action: 'Go back to 2,1 or throw. Keep the loop going.' },
              { label: 'They sidestep', action: '4 (magic four) — homing, catches all stepping.' },
            ]},
          ]}
        />

        <TipBox variant="warning" title="Don't Over-Extend">
          The extensions <code>df+1,4</code> (high) and <code>df+1,4~4</code> (mid) are strong but 
          the high can be ducked and the mid is -12. Use them when you've seen the opponent mash, 
          not every time. Most of the time, just <code>df+1</code> by itself is perfect.
        </TipBox>
      </Section>

      <Section title="Connecting the Loops">
        <p>
          These three loops aren't separate — they feed into each other. Here's how a typical 
          Jin offensive sequence actually looks in a real match:
        </p>

        <div style={{ padding: '20px', background: 'var(--background-secondary)', borderRadius: '8px', marginTop: '16px', borderLeft: '3px solid var(--accent)' }}>
          <p style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '12px' }}>Example Sequence</p>
          <ol style={{ color: 'var(--text-secondary)', lineHeight: '2' }}>
            <li><code>2,1</code> on hit (+6) — start the jab loop</li>
            <li><code>d+4</code> — they were standing, so the low chips them. You're at -1.</li>
            <li><code>2,1</code> again — you're roughly neutral, but they're rattled from the low</li>
            <li>They start pressing → <code>2,1,4</code> catches them → knockdown</li>
            <li>On their wakeup → <code>db+4</code> hits (+3) — now you're plus from a low</li>
            <li>They try to jab → you do <code>4</code> (magic four) → trade → full combo</li>
          </ol>
        </div>

        <p style={{ marginTop: '16px' }}>
          See how it works? No single move is doing the heavy lifting. The <strong>sequence of decisions</strong> 
          creates the pressure. This is what Jin players mean when they say "conditioning."
        </p>

        <KeyConcept title="The Core Idea" icon="🎯">
          <p>
            <strong>Jin's offense is a conversation.</strong> You say something with a poke. 
            Your opponent answers with their response. You punish that answer with the right follow-up. 
            After enough exchanges, they stop answering — and that's when you go for the big moves.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Drill It">
        <p>
          Go into Practice Mode. Set the opponent to guard randomly. Practice these sequences 
          until they feel natural — not memorized, but natural.
        </p>

        <Collapsible title="Practice Checklist" icon="🎯" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <ol style={{ lineHeight: '2.2' }}>
              <li><strong>2,1 × 10 reps</strong> — Get the timing crisp. Make sure both hits come out clean.</li>
              <li><strong>2,1 → 2,1 → 2,1</strong> — Practice chaining the jab loop. Feel the +6 rhythm.</li>
              <li><strong>2,1 → d+4 → 2,1</strong> — Mix the low into your jab pressure.</li>
              <li><strong>2,1 → db+4 → 4</strong> — The magic four trade setup after db+4.</li>
              <li><strong>df+1 → df+1 → 2,1</strong> — Mid checks flowing back to jabs.</li>
              <li><strong>Set opponent to "after block, 1" and practice 2,1,4 catching their mash</strong></li>
            </ol>
          </div>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
