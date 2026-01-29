import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Mid Pokes"
      intro="Mid pokes exist to make throws work. They condition opponents to stand, so your throws can connect. Without mids, opponents will duck everything."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Learn Low Pokes"
    >
      <Section title="Why Mids Matter">
        <p>
          If opponents always duck your throws, throws don't work. That's why <span className="highlight">mid 
          pokes are critical</span>. They condition opponents to stand, so throws can connect.
        </p>

        <KeyConcept title="The Conditioning Game" icon="🧠">
          <ul>
            <li><strong>Hit them with mids</strong> — df+1, df+2, f+3</li>
            <li><strong>They start standing</strong> — Afraid of getting hit by mids</li>
            <li><strong>Now throws work</strong> — They're standing, throws connect</li>
            <li><strong>If they duck</strong> — Hit them with mids again</li>
            <li><strong>Repeat</strong> — Keep them guessing between mids and throws</li>
          </ul>
        </KeyConcept>

        <p>
          This is the <span className="highlight-secondary">strike-throw mixup</span>. Mids make them stand. 
          Throws punish standing. If they duck, mids hit them. If they stand, throws hit them. They can't win.
        </p>
      </Section>

      <Section title="df+1 — The Workhorse">
        <MoveCard character="king"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i14',
            onBlock: '-1',
            onHit: '+3',
            tags: ['Mid', 'Safe', 'Poke'],
            description: 'Your main mid poke. Safe, decent range, conditions opponents to stand.',
          }}
          showVideo
        />

        <p>
          df+1 is <span className="highlight">King's primary mid poke</span>. It's safe at -1, has decent 
          range, and conditions opponents to stand. After they block df+1, you're only -1, meaning you can 
          still throw (though it's riskier).
        </p>

        <KeyConcept title="After df+1" icon="✅">
          <ul>
            <li><strong>On block (-1)</strong> — Still your turn, but risky. Can throw or poke again.</li>
            <li><strong>On hit (+3)</strong> — Perfect for throwing. Buffer Giant Swing or Shining Wizard.</li>
            <li><strong>Mix with throws</strong> — After df+1, they're conditioned to stand</li>
            <li><strong>Has delayable extension</strong> — df+1,2 catches people who press after df+1</li>
          </ul>
        </KeyConcept>

        <Collapsible title="df+1,2 Extension" icon="📖">
          <div style={{ marginTop: '12px' }}>
            <MoveCard character="king"
              move={{
                input: 'df+1,2',
                hitLevel: ['m', 'm'],
                damage: '15, 15',
                startup: 'i14',
                onBlock: '-10',
                onHit: '+5',
                tags: ['Mid', 'Mid', 'Delayable'],
                description: 'Extension catches people who press after df+1. Can be delayed.',
              }}
              showVideo
            />
            <p style={{ marginTop: '12px' }}>
              If your opponent presses buttons after blocking df+1, use df+1,2 to catch them. The second hit 
              can be delayed to catch different timings.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="df+2,1 — The Counter-Hit Launcher">
        <MoveCard character="king"
          move={{
            input: 'df+2,1',
            hitLevel: ['m', 'h'],
            damage: '12, 15',
            startup: 'i13',
            onBlock: '-4',
            onHit: '+24a',
            onCH: '+24a (Launch!)',
            tags: ['Mid', 'High', 'CH Launcher'],
            description: 'Counter-hit launcher. On CH, launches for 76 damage combo. Great for checking opponents.',
          }}
          showVideo
        />

        <p>
          df+2,1 is <span className="highlight-secondary">King's best counter-hit tool</span>. On counter-hit, 
          it launches for a 76 damage combo. Use it when you think your opponent will press buttons.
        </p>

        <KeyConcept title="Using df+2,1" icon="⚡">
          <ul>
            <li><strong>As a check</strong> — If they press, counter-hit launches them</li>
            <li><strong>After plus frames</strong> — From +1 or more, it's uninterruptible</li>
            <li><strong>Has delayable second hit</strong> — Can delay to catch different timings</li>
            <li><strong>Conditions standing</strong> — Opponents fear the counter-hit</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Delay">
          The second hit (1) can be delayed. If your opponent blocks df+2 and tries to press, delay the 1 
          to catch them. This makes df+2,1 a powerful conditioning tool.
        </TipBox>
      </Section>

      <Section title="f+3 — The Throw Extension">
        <MoveCard character="king"
          move={{
            input: 'f+3',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i15',
            onBlock: '-8',
            onHit: '+1',
            tags: ['Mid', 'Safe', 'Throw Extension'],
            description: 'Safe mid with built-in throw extension. Hit 1+2 during the move to go into DDT.',
          }}
          showVideo
        />

        <p>
          f+3 is a <span className="highlight">unique tool</span>. It's a safe mid that has a built-in throw 
          extension. If you press 1+2 during f+3, King goes into a DDT (drop-down takedown) for ~40 damage.
        </p>

        <KeyConcept title="f+3 Properties" icon="🎯">
          <ul>
            <li><strong>Safe on block</strong> — -8 is safe, not launch punishable</li>
            <li><strong>Plus on hit</strong> — +1 means you can throw after</li>
            <li><strong>Throw extension</strong> — Press 1+2 during f+3 for DDT</li>
            <li><strong>Conditions standing</strong> — Opponents stand to avoid the mid</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The f+3 Mixup">
          f+3 → 1+2 (DDT) is a powerful mixup. If they block f+3, you can do the throw extension. If they 
          duck, f+3 hits them. If they stand and block, you're still safe and can throw.
        </TipBox>
      </Section>

      <Section title="b+1,2 — The Range Check">
        <MoveCard character="king"
          move={{
            input: 'b+1,2',
            hitLevel: ['h', 'h'],
            damage: '13, 20',
            startup: 'i12',
            onBlock: '-13',
            onHit: '+5',
            onCH: '+70a (Launch!)',
            tags: ['High', 'High', 'CH Launcher', 'Long Range'],
            description: 'Long-range high poke. Counter-hit launches. Great for whiff punishment.',
          }}
          showVideo
        />

        <p>
          b+1,2 has <span className="highlight">excellent range</span>. Use it to check opponents from further 
          away. On counter-hit, it launches for big damage.
        </p>

        <KeyConcept title="Using b+1,2" icon="📏">
          <ul>
            <li><strong>Long range check</strong> — Hits from further away than df+1</li>
            <li><strong>Counter-hit launcher</strong> — On CH, launches for combo</li>
            <li><strong>Whiff punishment</strong> — Great for punishing whiffed moves</li>
            <li><strong>Conditions standing</strong> — Opponents respect the range</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Mid-Throw Mixup">
        <p>
          Here's how mids and throws work together:
        </p>

        <KeyConcept title="The Conditioning Loop" icon="🔄">
          <ol>
            <li><strong>Hit with mid</strong> — df+1, df+2, or f+3</li>
            <li><strong>They start standing</strong> — Afraid of getting hit by mids</li>
            <li><strong>Now throw</strong> — They're standing, throw connects</li>
            <li><strong>If they duck</strong> — Hit them with mid again</li>
            <li><strong>If they break throw</strong> — Hit them with mid again</li>
            <li><strong>Repeat</strong> — Keep them guessing</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="The Balance">
          You need both mids AND throws. Too many mids, and they'll duck. Too many throws, and they'll duck. 
          Mix them to keep opponents guessing. This is the strike-throw mixup.
        </TipBox>
      </Section>

      <Section title="Practice Time">
        <PracticeBox
          title="Mid-Throw Mixup Practice"
          setup="Set dummy to Guard All. Practice mixing mids and throws."
          tasks={[
            { id: 'ch7-df1-throw', text: 'df+1 → throw 10 times', detail: 'Hit with df+1, then throw', type: 'counter', target: 10 },
            { id: 'ch7-mid-condition', text: 'Hit with 3 mids, then throw', detail: 'Condition with mids first, then throw', type: 'counter', target: 10 },
            { id: 'ch7-mixup', text: 'Mix mids and throws randomly', detail: 'Keep opponent guessing', type: 'counter', target: 10 },
          ]}
        />
      </Section>

      <Section title="The Complete Picture">
        <p>
          Mids exist to make throws work. Without mids, opponents will duck everything. With mids, opponents 
          must stand, and throws can connect. This is the <span className="highlight">strike-throw mixup</span>.
        </p>

        <KeyConcept title="Master the Mixup" icon="👑">
          <ul>
            <li><strong>Use mids to condition</strong> — df+1, df+2, f+3</li>
            <li><strong>Then throw</strong> — They're standing, throw connects</li>
            <li><strong>If they duck</strong> — Hit them with mids</li>
            <li><strong>If they break</strong> — Hit them with mids</li>
            <li><strong>Keep mixing</strong> — Don't be predictable</li>
          </ul>
        </KeyConcept>

        <p>
          Master this mixup, and you'll dominate. Opponents will be stuck between standing (throws) and 
          ducking (mids). They can't win.
        </p>
      </Section>
    </Chapter>
  )
}
