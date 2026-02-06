import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Punishment Arsenal"
      intro="Lars has arguably the best punishment in the game. At every frame level from -10 to -17+, he has a devastating answer. A 14-frame launcher. Stance mixups off punishes. Long-range kicks for pushback moves. No mistake goes unpunished."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="The Stance Chain"
    >
      <Section title="Why Punishment Matters More for Lars">
        <p>
          For most characters, punishment is just damage. For Lars, <strong>punishment is the 
          starting gun for his entire offense</strong>. Every punish either leads into a stance 
          mixup, gives you plus frames for pressure, or does devastating damage that makes 
          your opponent afraid to press buttons.
        </p>

        <KeyConcept title="The Punishment Philosophy" icon="🦁">
          <p>
            Your opponent will make mistakes every single round. A jab string that's -10. 
            A hopkick that's -13. A power move that's -14. Each one is an opportunity 
            not just for damage, but to <strong>start your offense</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            If you're not punishing correctly, you're leaving free damage AND free pressure 
            on the table. That's the difference between trading rounds and dominating them.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Standing Punishment">
        <p>
          Here's your complete standing punishment toolkit, frame by frame.
        </p>

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>10 Frames — The Foundation</h3>
        <MoveCard character="lars"
          move={{
            input: '2,1',
            hitLevel: ['h', 'm'],
            damage: '10, 12',
            startup: 'i10',
            onBlock: '-6',
            onHit: '+8',
            tags: ['10f Punish', 'LEN Transition', 'Mixup'],
            description: 'Your go-to 10-frame punish. 22 damage plus a free LEN mixup on hit. Always use this.',
            notes: ['Auto-transitions to LEN', '+8 = real 50/50 mixup', 'Use for anything -10 to -11']
          }}
          showVideo
        />

        <TipBox variant="tip" title="When to Use 1,2 Instead">
          1,2 is also i10 but does 14 damage with no stance transition. The only time you'd use it 
          over 2,1 is if you want safer frames on block (-3 vs -6). In practice, always go 2,1.
        </TipBox>

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>12 Frames — Damage or Stance</h3>
        <MoveCard character="lars"
          videoId="f+2,4"
          move={{
            input: 'f+2,4',
            hitLevel: ['h', 'h'],
            damage: '10, 22',
            startup: 'i12',
            onBlock: '-12',
            onHit: '+15 (+6)',
            tags: ['12f Punish', 'Knockdown', 'Wall Splat', 'Damage'],
            description: 'Your maximum damage 12-frame punish. 32 damage, knockdown, wall splats. Use for -12 and -13.',
            notes: ['Knockdown on hit = oki pressure', 'Wall splats for big combos', 'Go-to punish for damage']
          }}
          showVideo
        />

        <MoveCard character="lars"
          videoId="f+2,1"
          move={{
            input: 'f+2,1',
            hitLevel: ['h', 'h'],
            damage: '10, 15',
            startup: 'i12',
            onBlock: '-5',
            onHit: '+6',
            tags: ['12f Punish', 'SEN Transition', 'Mixup Alternative'],
            description: 'Lower damage (25) but transitions to Silent Entry at +6 on hit. Choose this when you want stance pressure instead of raw damage.',
            notes: ['Transitions to SEN (cancel with B)', '+6 in SEN = strong follow-up options', 'Safer on block than f+2,4']
          }}
          showVideo
        />

        <KeyConcept title="f+2,4 vs f+2,1 — When to Choose" icon="⚖️">
          <ul>
            <li><strong>f+2,4</strong> — Maximum damage (32), knockdown, wall splat. Your default.</li>
            <li><strong>f+2,1</strong> — Less damage (25) but SEN transition at +6. Use when you want to keep pressure going or when near the wall already.</li>
          </ul>
        </KeyConcept>

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>13 Frames — The Long Arm</h3>
        <MoveCard character="lars"
          move={{
            input: 'f+1+4',
            hitLevel: ['m'],
            damage: '28',
            startup: 'i13~14',
            onBlock: '-18',
            onHit: '+18 (+8)',
            tags: ['13f Punish', 'Long Range', 'Shoulder'],
            description: 'The shoulder. Furthest-reaching standing punish. Use when f+2,4 doesn\'t reach, like against moves with slight pushback.',
            notes: ['Best reach of any standing punish', 'Knockdown on hit', 'Unsafe if whiffed — only use as punishment']
          }}
          showVideo
        />

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>14 Frames — The Legend</h3>
        <MoveCard character="lars"
          videoId="f,n,b+2,1"
          move={{
            input: 'f,b+2,1',
            hitLevel: ['m', 'm'],
            damage: '10, 10',
            startup: 'i14',
            onBlock: '-18',
            onHit: '+47a (+39)',
            tags: ['14f LAUNCHER', 'Full Combo', 'Lars\' Signature'],
            description: 'THE move that makes Lars\' punishment the best in the game. A 14-frame launcher. Most characters can\'t launch until 15 frames. This one extra frame of speed is MASSIVE.',
            notes: ['Full combo on hit (60-80+ damage)', 'Input: f, neutral, b+2,1 (practice the motion!)', 'One of the few 14f launchers in the game']
          }}
          showVideo
        />

        <KeyConcept title="Why i14 Launch Is Broken" icon="💀">
          <p>
            In Tekken 8, a huge number of strong moves are -14 on block. Hopkicks, key mid 
            strings, power moves. Most characters can only do 30-40 damage to punish these. 
            Lars gets a <strong>full combo for 60-80+ damage</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            This means moves that are "safe" against 90% of the cast are <strong>death sentences 
            against Lars</strong>. Your opponents will think twice about pressing anything 
            remotely unsafe. That fear alone changes the entire dynamic of the match.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Practice the Input">
          f,b+2,1 (technically f, neutral, b+2,1) requires a clean directional input. 
          In the beginning, you'll drop it. That's fine. Go to practice mode and do it 
          50 times. Get it into muscle memory. This single move will win you more rounds 
          than any other tool in your kit.
        </TipBox>

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>15 Frames — The Arc Blast</h3>
        <MoveCard character="lars"
          videoId="f+1+2"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i15~16',
            onBlock: '-13',
            onHit: '+28',
            tags: ['15f Launcher', 'Full Combo', 'Mid'],
            description: 'Your 15-frame launcher. Easier execution than f,b+2,1. Use for -15 and beyond, or when you\'re not confident in the 14f input.',
            notes: ['Full combo on hit', 'Easier input than f,b+2,1', 'Also a great whiff punisher']
          }}
          showVideo
        />

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>17+ Frames — The Pushback Answer</h3>
        <MoveCard character="lars"
          move={{
            input: '3+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i17~18',
            onBlock: '-8',
            onHit: '+17d',
            tags: ['17f Punish', 'Heat Engager', 'Long Range'],
            description: 'For moves with massive pushback that leave the opponent -17 or worse but too far for launchers. Covers huge distance and is a heat engager.',
            notes: ['Incredible range', 'Heat engager — activates heat on hit', 'Safe at -8', 'Example: Paul\'s Deathfist on block']
          }}
          showVideo
        />

        <TipBox variant="tip" title="The Deathfist Rule">
          Paul's Deathfist is -17 on block with huge pushback. Most characters can't launch it. 
          Lars can reach with 3+4 for 22 damage AND a heat engager. This alone makes Lars 
          a nightmare for Paul players.
        </TipBox>
      </Section>

      <Section title="While Standing Punishment">
        <p>
          When you block a low attack, you're in crouch. Here's what to do from there:
        </p>

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>11 Frames — Quick Check</h3>
        <MoveCard character="lars"
          videoId="ws4"
          move={{
            input: 'ws+4',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i11~12',
            onBlock: '-6',
            onHit: '+5',
            tags: ['11f WS Punish', 'Quick', 'Mid'],
            description: 'Standard while standing kick. Use for -11 and -12 lows.',
          }}
          showVideo
        />

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>13 Frames — The New Standard</h3>
        <MoveCard character="lars"
          videoId="ws2,3"
          move={{
            input: 'ws+2,3',
            hitLevel: ['m', 'h'],
            damage: '13, 20',
            startup: 'i13~14',
            onBlock: '-15',
            onHit: '-3',
            tags: ['13f WS Punish', 'LEN Transition', 'Damage'],
            description: 'The optimal 13-frame WS punish. 33 damage AND transitions to LEN when you hold down. This replaced ws+2,1 in Season 2.',
            notes: ['Hold D to enter LEN at +6 on hit', '33 damage vs ws+2,1\'s 30', 'LEN transition = another mixup opportunity']
          }}
          showVideo
        />

        <TipBox variant="warning" title="Get This In Muscle Memory">
          ws+2,3 into LEN (hold down) is new in Season 2. Even veteran Lars players are 
          still adjusting after 9+ years of using ws+2,1. Start with ws+2,3 from day one — 
          don't build the old habit.
        </TipBox>

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>15 Frames — The Launcher</h3>
        <MoveCard character="lars"
          videoId="ws1"
          move={{
            input: 'ws+1',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i15~16',
            onBlock: '-12',
            onHit: '+38a',
            tags: ['15f WS Launcher', 'Tornado', 'Full Combo'],
            description: 'Standard while standing launcher. Use for any low that\'s -15 or worse.',
            notes: ['Tornado on hit', 'Full combo starter', 'Can hold F to enter SEN on hit']
          }}
          showVideo
        />

        <h3 style={{ color: 'var(--accent)', marginTop: '24px', marginBottom: '12px' }}>20 Frames — The Stagger Destroyer</h3>
        <MoveCard character="lars"
          videoId="ws3"
          move={{
            input: 'ws+3',
            hitLevel: ['h'],
            damage: '30',
            startup: 'i20',
            onBlock: '0',
            onHit: '+21 (+15)',
            tags: ['20f WS Punish', 'LEN Transition', 'Maximum Damage'],
            description: 'For stagger lows and hellsweeps that are VERY minus (like -26 or more). Hold down to enter LEN for a combo with LEN 2.',
            notes: ['Hold D to go to LEN for LEN 2 combo', 'Much more damage than ws+1 combo', 'Use against hellsweeps and stagger lows']
          }}
          showVideo
        />

        <KeyConcept title="ws+3 vs ws+1 — Know When" icon="💡">
          <ul>
            <li><strong>ws+1</strong> — Use for -15 to -19 lows. Standard launcher.</li>
            <li><strong>ws+3~D → LEN 2</strong> — Use for -20 or worse lows (hellsweeps, stagger lows). Way more damage because ws+3 alone does 30 and LEN 2 gives a full combo.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          When your opponent misses a move entirely, you get a free punish. Here are your best options:
        </p>

        <KeyConcept title="Whiff Punish Priority" icon="🎯">
          <table style={{ width: '100%', marginTop: '12px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Range</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Move</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Result</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}>Close</td>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ padding: '8px' }}>Fast, safe, LEN mixup</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Medium</td>
                <td style={{ padding: '8px' }}><code>f+1+2</code></td>
                <td style={{ padding: '8px' }}>Full combo launcher</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Long</td>
                <td style={{ padding: '8px' }}><code>b+3,4</code></td>
                <td style={{ padding: '8px' }}>Knockdown, wall splat</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>Any (quick)</td>
                <td style={{ padding: '8px' }}><code>df+2</code></td>
                <td style={{ padding: '8px' }}>Fast mid, SEN transition</td>
              </tr>
            </tbody>
          </table>
        </KeyConcept>

        <TipBox variant="tip" title="The Back Dash Whiff Punish">
          A powerful technique: do a move like 2,1 on block, then immediately back dash. 
          If your opponent tries to retaliate with a short-range move, it whiffs. 
          Then you launch them with f+1+2. This is how you create whiff punishment opportunities.
        </TipBox>
      </Section>

      <Section title="Practice: The Punishment Gauntlet">
        <PracticeBox
          title="Standing Punishment Drill"
          setup="Set opponent to repeat moves at different minus frames. Use the frame display."
          tasks={[
            { id: 'pun-10', text: 'Punish a -10 move with 2,1 ten times', detail: 'This is your most common punish', type: 'counter', target: 10 },
            { id: 'pun-12', text: 'Punish a -12 move with f+2,4 ten times', type: 'counter', target: 10 },
            { id: 'pun-14', text: 'Punish a -14 move with f,b+2,1 ten times', detail: 'This is the hardest one. Take your time with the input.', type: 'counter', target: 10 },
            { id: 'pun-15', text: 'Punish a -15 move with f+1+2 five times', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="While Standing Punishment Drill"
          setup="Set opponent to repeat lows at different minus frames."
          tasks={[
            { id: 'ws-11', text: 'Block a low and punish with ws+4 five times', type: 'counter', target: 5 },
            { id: 'ws-13', text: 'Block a -13 low and punish with ws+2,3~D (into LEN) five times', detail: 'Hold down after ws+2,3 to enter LEN', type: 'counter', target: 5 },
            { id: 'ws-15', text: 'Block a -15 low and punish with ws+1 five times', type: 'counter', target: 5 },
            { id: 'ws-20', text: 'Block a hellsweep and punish with ws+3~D → LEN 2 five times', detail: 'This is the big damage punish', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="The f,b+2,1 Grind"
          setup="Stand at close range. Opponent on Guard All."
          tasks={[
            { id: 'fnb-1', text: 'Input f,b+2,1 cleanly 20 times', detail: 'Forward, let stick return to neutral, back+2,1. Slow at first.', type: 'counter', target: 20 },
            { id: 'fnb-2', text: 'Punish a -14 move with f,b+2,1 into full combo 5 times', detail: 'This is the drill that will win you the most rounds', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Collapsible title="Complete Punishment Cheat Sheet" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Standing</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Damage</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Bonus</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10</td>
                <td style={{ padding: '8px' }}><code>2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>22</td>
                <td style={{ padding: '8px' }}>+8 LEN mixup</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ padding: '8px' }}><code>f+2,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>32</td>
                <td style={{ padding: '8px' }}>Knockdown, wall splat</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i12</td>
                <td style={{ padding: '8px' }}><code>f+2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>25</td>
                <td style={{ padding: '8px' }}>SEN transition at +6</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ padding: '8px' }}><code>f+1+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>28</td>
                <td style={{ padding: '8px' }}>Longest range punish</td>
              </tr>
              <tr style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)', fontWeight: 600 }}>i14</td>
                <td style={{ padding: '8px', fontWeight: 600 }}><code>f,b+2,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px', fontWeight: 600 }}>60-80+</td>
                <td style={{ padding: '8px', fontWeight: 600, color: 'var(--accent)' }}>FULL COMBO LAUNCHER</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ padding: '8px' }}><code>f+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>60-80+</td>
                <td style={{ padding: '8px' }}>Full combo launcher</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i17+</td>
                <td style={{ padding: '8px' }}><code>3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>22</td>
                <td style={{ padding: '8px' }}>Heat engager, long range</td>
              </tr>
            </tbody>
          </table>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>While Standing (After Blocking a Low)</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Frames</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Damage</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Bonus</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i11</td>
                <td style={{ padding: '8px' }}><code>ws+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>16</td>
                <td style={{ padding: '8px' }}>Quick check</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i13</td>
                <td style={{ padding: '8px' }}><code>ws+2,3~D</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>33</td>
                <td style={{ padding: '8px' }}>LEN transition at +6</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                <td style={{ padding: '8px' }}><code>ws+1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>60+</td>
                <td style={{ padding: '8px' }}>Full combo launcher</td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', padding: '8px' }}>i20</td>
                <td style={{ padding: '8px' }}><code>ws+3~D → LEN 2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>70+</td>
                <td style={{ padding: '8px' }}>Maximum damage (stagger lows)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
