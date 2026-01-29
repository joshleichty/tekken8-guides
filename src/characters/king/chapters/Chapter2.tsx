import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  ExecutionBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Your First Throws"
      intro="These three throws are the foundation of King's entire gameplan. Master them, and you'll dominate. Don't master them, and you'll struggle. It's that simple."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn to Get Plus Frames"
    >
      <Section title="The Holy Trinity">
        <p>
          King has dozens of throws, but you only need <span className="highlight">three</span> to start winning:
        </p>

        <KeyConcept title="The Three Throws" icon="👑">
          <ul>
            <li><strong>Giant Swing</strong> — 1 break, 45-50 damage, i10 startup</li>
            <li><strong>Shining Wizard</strong> — 1+2 break, 40-45 damage, i10 startup</li>
            <li><strong>Tombstone</strong> — 2 break, 53 damage, i11 startup</li>
          </ul>
        </KeyConcept>

        <p>
          These three throws cover all three break directions (1, 2, and 1+2). Your opponent must guess which 
          one you're doing. If they guess wrong, they eat massive damage. If they guess right, you're still 
          plus and can throw again.
        </p>
      </Section>

      <Section title="Giant Swing — The King of Throws">
        <MoveCard character="king"
          move={{
            input: 'f,hcf+1',
            hitLevel: ['t'],
            damage: '45-50',
            startup: 'i10',
            onBlock: '',
            onHit: '',
            tags: ['Throw', '1 Break', 'Fastest Throw'],
            description: 'The fastest throw in Tekken. 10-frame startup means it comes out as fast as a jab. With perfect execution, deals 50 damage.',
          }}
          showVideo
        />

        <p>
          Giant Swing is <span className="highlight">King's signature throw</span>. At i10, it's the fastest 
          throw in the game. From +1 (after a jab), Giant Swing is uninterruptible. Your opponent literally 
          cannot press any button fast enough to stop it.
        </p>

        <ExecutionBox title="Giant Swing Execution" icon="🎮">
          <p>The input is <code>f,hcf+1</code>:</p>
          <ol>
            <li><strong>f</strong> — Tap forward</li>
            <li><strong>hcf</strong> — Half circle forward: b → db → d → df → f</li>
            <li><strong>+1</strong> — Press 1 at the end</li>
          </ol>
          <p><strong>Blue Spark:</strong> Input the throw perfectly within a dash for +5 damage (50 total). 
          The timing is tight but worth learning.</p>
          <p><strong>Shortcut:</strong> Some players find <code>f,d,df,f+1</code> easier. Both work.</p>
        </ExecutionBox>

        <KeyConcept title="Why Giant Swing is Broken" icon="⚡">
          <ul>
            <li><strong>i10 startup</strong> — Faster than any other command grab</li>
            <li><strong>1 break</strong> — Most common break direction, but...</li>
            <li><strong>Looks like Shining Wizard</strong> — Same animation, different break. Unreactable.</li>
            <li><strong>Wall splat</strong> — Throws opponent behind you. If wall is there, unbreakable.</li>
            <li><strong>Massive damage</strong> — 45-50 damage is more than most combos</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Wall Giant Swing">
          When your opponent's back is to the wall, Giant Swing becomes <strong>unbreakable</strong>! This is 
          45-50 free damage. Always look for wall Giant Swing opportunities — it's one of King's strongest 
          tools at the wall.
        </TipBox>
      </Section>

      <Section title="Shining Wizard — The Mixup Partner">
        <MoveCard character="king"
          videoId="f,f,F+2+4"
          move={{
            input: 'f,f,F+2+4',
            hitLevel: ['t'],
            damage: '40-45',
            startup: 'i10',
            onBlock: '',
            onHit: '',
            tags: ['Throw', '1+2 Break', 'Indistinguishable'],
            description: 'Running throw that looks identical to Giant Swing but requires 1+2 to break. The core of King\'s unreactable mixup.',
          }}
          showVideo
        />

        <p>
          Shining Wizard is <span className="highlight-secondary">the other half of King's unreactable mixup</span>. 
          It looks EXACTLY like Giant Swing, but requires 1+2 to break instead of just 1. Your opponent cannot 
          tell which throw you're doing until it's too late.
        </p>

        <ExecutionBox title="Shining Wizard Execution" icon="🎮">
          <p>The input is <code>f,f,F+2+4</code>:</p>
          <ol>
            <li><strong>f,f</strong> — Dash forward (tap forward twice)</li>
            <li><strong>F</strong> — Hold forward to run</li>
            <li><strong>+2+4</strong> — Press 2+4 while running</li>
          </ol>
          <p><strong>Blue Spark:</strong> Input 2+4 within 6 frames of starting the run for +5 damage (45 total).</p>
          <p><strong>Close Range:</strong> You can do Shining Wizard from point-blank range. The run animation 
          is very short, making it hard to react to.</p>
        </ExecutionBox>

        <KeyConcept title="The Indistinguishable Mixup" icon="🎭">
          <p>Giant Swing and Shining Wizard share the exact same animation. Your opponent sees:</p>
          <ul>
            <li>King runs forward</li>
            <li>King grabs them</li>
            <li>King throws them</li>
          </ul>
          <p>They cannot tell if it's Giant Swing (1 break) or Shining Wizard (1+2 break) until they've already 
          been grabbed. They must <strong>guess</strong>.</p>
        </KeyConcept>

        <TipBox variant="warning" title="The Mixup">
          This is King's core offense. From plus frames, do Giant Swing or Shining Wizard. They look identical. 
          If they guess 1 break, Shining Wizard hits. If they guess 1+2 break, Giant Swing hits. If they duck, 
          launch them. This is why King is so strong.
        </TipBox>
      </Section>

      <Section title="Tombstone Piledriver — The Damage Dealer">
        <MoveCard character="king"
          videoId="qcb+1+2"
          move={{
            input: 'qcb+1+2',
            hitLevel: ['t'],
            damage: '53',
            startup: 'i11',
            onBlock: '',
            onHit: '',
            tags: ['Throw', '2 Break', 'High Damage'],
            description: 'The highest damage single throw. 53 damage and leaves opponent facing away from you for oki pressure.',
          }}
          showVideo
        />

        <p>
          Tombstone is <span className="highlight">King's highest damage single throw</span>. At 53 damage, 
          it's more than most combos. It also leaves your opponent facing away from you, giving you massive 
          advantage on their wakeup.
        </p>

        <ExecutionBox title="Tombstone Execution" icon="🎮">
          <p>The input is <code>qcb+1+2</code>:</p>
          <ol>
            <li><strong>qcb</strong> — Quarter circle back: d → db → b</li>
            <li><strong>+1+2</strong> — Press 1+2 at the end</li>
          </ol>
          <p>This throw is slightly slower than Giant Swing (i11 vs i10), but the damage and oki make it worth it.</p>
        </ExecutionBox>

        <KeyConcept title="When to Use Tombstone" icon="💀">
          <ul>
            <li><strong>From plus frames</strong> — Mix with Giant Swing and Shining Wizard</li>
            <li><strong>When they're breaking 1</strong> — Switch to 2 break to catch them</li>
            <li><strong>For oki</strong> — Leaves opponent facing away, perfect for wakeup pressure</li>
            <li><strong>Ground break stages</strong> — Has ground break properties on certain stages</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Three-Way Mixup">
          From plus frames, you have three throws: Giant Swing (1), Tombstone (2), and Shining Wizard (1+2). 
          Your opponent must guess between three break directions. Even if they guess right, you're still plus 
          and can throw again. The pressure never stops.
        </TipBox>
      </Section>

      <Section title="Throw Break System">
        <p>
          Understanding how throw breaks work is critical. Here's the system:
        </p>

        <KeyConcept title="Throw Breaks" icon="🔓">
          <ul>
            <li><strong>1 break</strong> — Press 1 (left punch) to escape. Breaks Giant Swing.</li>
            <li><strong>2 break</strong> — Press 2 (right punch) to escape. Breaks Tombstone.</li>
            <li><strong>1+2 break</strong> — Press 1+2 (both punches) to escape. Breaks Shining Wizard and Tombstone.</li>
            <li><strong>20-frame window</strong> — Standard throws give 20 frames to break</li>
            <li><strong>8-frame window</strong> — Counter-hit throws reduce break window to 8 frames (nearly unbreakable)</li>
          </ul>
        </KeyConcept>

        <p>
          The key insight: <span className="highlight">Even the best players cannot react to throw breaks</span>. 
          They must guess. And if they guess wrong, they eat 40-53 damage. That's why King is so strong.
        </p>
      </Section>

      <Section title="Practice Time">
        <PracticeBox
          title="Throw Execution Practice"
          setup="Set dummy to Stand, No Guard. Practice until you can execute each throw consistently."
          tasks={[
            { id: 'ch2-gs', text: 'Land 10 Giant Swings (f,hcf+1)', detail: 'Focus on the half circle motion — b, db, d, df, f+1', type: 'counter', target: 10 },
            { id: 'ch2-gs-blue', text: 'Land a Blue Spark Giant Swing', detail: 'Dash into the throw input for +5 damage', type: 'counter', target: 3 },
            { id: 'ch2-sw', text: 'Land 10 Shining Wizards (f,f,F+2+4)', detail: 'Run forward then 2+4', type: 'counter', target: 10 },
            { id: 'ch2-sw-blue', text: 'Land a Blue Spark Shining Wizard', detail: 'Input 2+4 within 6 frames of run start', type: 'counter', target: 3 },
            { id: 'ch2-tomb', text: 'Land 10 Tombstones (qcb+1+2)', detail: 'Quarter circle back then 1+2', type: 'counter', target: 10 },
          ]}
        />
      </Section>

      <Collapsible title="Other Important Throws" icon="📖">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '12px' }}>While Giant Swing, Shining Wizard, and Tombstone are your core throws, 
          King has other useful throws:</p>
          
          <MoveCard character="king"
            videoId="f,hcf+2"
            move={{
              input: 'f,hcf+2',
              hitLevel: ['t'],
              damage: '50-55',
              startup: 'i12',
              onBlock: '',
              onHit: '',
              tags: ['Throw', '2 Break'],
              description: 'Tijuana Twister. 2 break throw with high damage. Mixup option with Tombstone.',
            }}
            showVideo
          />

          <MoveCard character="king"
            videoId="JGR.1+3"
            move={{
              input: 'JGR 1+3',
              hitLevel: ['t'],
              damage: '45',
              startup: 'i23',
              onBlock: '',
              onHit: '',
              tags: ['Throw', 'Unbreakable', 'Heat Engager'],
              description: 'RKO from Jaguar Sprint. Unbreakable throw that activates Heat. We\'ll cover this in Chapter 10.',
            }}
            showVideo
          />

          <p style={{ marginTop: '12px' }}>
            For now, focus on mastering the three core throws. These other throws will make more sense once 
            you understand the foundation.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
