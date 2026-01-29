import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Quiz,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="The Indistinguishable Mixup"
      intro="This is King's signature technique. Two throws that look EXACTLY the same but require different breaks. Master this, and opponents will fear you."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn Chain Throws"
    >
      <Section title="The Unreactable Mixup">
        <p>
          Most throws in Tekken are reactable. You see the animation, you recognize the throw, you break it. 
          But King has something <span className="highlight">unfair</span>:
        </p>

        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '24px', 
          borderRadius: '8px', 
          border: '2px solid var(--accent)',
          margin: '20px 0',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎭</div>
          <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>
            Giant Swing and Shining Wizard
          </div>
          <div style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
            Look EXACTLY the same
          </div>
          <div style={{ fontSize: '16px', color: 'var(--text-muted)', marginTop: '12px' }}>
            But require different breaks
          </div>
        </div>

        <p>
          Your opponent sees King run forward and grab them. They cannot tell if it's Giant Swing (1 break) 
          or Shining Wizard (1+2 break) until they've already been grabbed. They must <strong>guess</strong>.
        </p>
      </Section>

      <Section title="Giant Swing vs Shining Wizard">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
          <div>
            <MoveCard character="king"
              move={{
                input: 'f,hcf+1',
                hitLevel: ['t'],
                damage: '45-50',
                startup: 'i10',
                onBlock: '',
                onHit: '',
                tags: ['Throw', '1 Break'],
                description: 'Giant Swing — requires 1 to break',
              }}
              showVideo
            />
          </div>
          <div>
            <MoveCard character="king"
              videoId="f,f,F+2+4"
              move={{
                input: 'f,f,F+2+4',
                hitLevel: ['t'],
                damage: '40-45',
                startup: 'i10',
                onBlock: '',
                onHit: '',
                tags: ['Throw', '1+2 Break'],
                description: 'Shining Wizard — requires 1+2 to break',
              }}
              showVideo
            />
          </div>
        </div>

        <KeyConcept title="The Visual Test" icon="👁️">
          <p>Watch both throws side-by-side. Notice:</p>
          <ul>
            <li><strong>Same run animation</strong> — King runs forward identically</li>
            <li><strong>Same grab animation</strong> — King grabs identically</li>
            <li><strong>Same throw animation</strong> — King throws identically</li>
            <li><strong>Different breaks</strong> — But one needs 1, the other needs 1+2</li>
          </ul>
          <p>Your opponent cannot tell which is which until it's too late. They must guess.</p>
        </KeyConcept>
      </Section>

      <Section title="How to Use the Mixup">
        <p>
          From plus frames, you have two options that look identical:
        </p>

        <KeyConcept title="The Mixup Flowchart" icon="🔄">
          <ol>
            <li><strong>Get plus frames</strong> — Jab (+1), f+1+4 (+3), etc.</li>
            <li><strong>Buffer a throw</strong> — Choose Giant Swing OR Shining Wizard</li>
            <li><strong>They see the same animation</strong> — Cannot tell which throw it is</li>
            <li><strong>They must guess</strong>:
              <ul>
                <li>Press 1 → Wrong if Shining Wizard</li>
                <li>Press 1+2 → Wrong if Giant Swing</li>
                <li>Duck → Launch them</li>
              </ul>
            </li>
            <li><strong>If they guess wrong</strong> → They eat 40-50 damage</li>
            <li><strong>If they guess right</strong> → You're still plus, throw again</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The 50/50">
          This is a true 50/50. Your opponent has a 50% chance to break correctly. But even if they break, 
          you're still plus and can throw again. The pressure never stops.
        </TipBox>
      </Section>

      <Section title="Adding Tombstone to the Mix">
        <p>
          You can make it even harder by adding Tombstone:
        </p>

        <KeyConcept title="The Three-Way Mixup" icon="🎲">
          <ul>
            <li><strong>Giant Swing</strong> — 1 break, 45-50 damage</li>
            <li><strong>Shining Wizard</strong> — 1+2 break, 40-45 damage</li>
            <li><strong>Tombstone</strong> — 2 break, 53 damage</li>
          </ul>
          <p>Now your opponent must guess between three break directions. Even if they guess right, you're 
          still plus and can throw again.</p>
        </KeyConcept>

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
            description: 'Tombstone — requires 2 to break. Highest damage single throw.',
          }}
          showVideo
        />

        <TipBox variant="warning" title="The Mental Stack">
          Your opponent now has to think about: ducking, breaking 1, breaking 1+2, breaking 2, pressing buttons, 
          sidestepping. That's 6+ options. <strong>You only think about: which throw to do.</strong> The mental 
          advantage is massive.
        </TipBox>
      </Section>

      <Section title="When They Start Breaking">
        <p>
          Good players will start breaking your throws. Here's how to adapt:
        </p>

        <KeyConcept title="Adapting to Breaks" icon="🧠">
          <ul>
            <li><strong>They break 1</strong> → Switch to Shining Wizard (1+2 break) or Tombstone (2 break)</li>
            <li><strong>They break 1+2</strong> → Switch to Giant Swing (1 break) or Tombstone (2 break)</li>
            <li><strong>They break 2</strong> → Switch to Giant Swing (1 break) or Shining Wizard (1+2 break)</li>
            <li><strong>They duck</strong> → Hit them with df+1, df+2, or hopkick</li>
            <li><strong>They press buttons</strong> → Counter-hit them with df+2,1</li>
          </ul>
        </KeyConcept>

        <p>
          The key is to <span className="highlight">mix your throws</span>. Don't always do Giant Swing. 
          Don't always do Shining Wizard. Mix between all three throws to keep them guessing.
        </p>
      </Section>

      <Section title="Quick Check">
        <Quiz
          question="From +3 after f+1+4, you buffer Giant Swing. Your opponent presses 1+2 to break. What happens?"
          options={[
            { text: 'They break it successfully because 1+2 breaks Giant Swing', isCorrect: false },
            { text: 'They get thrown because Giant Swing requires 1 to break, not 1+2', isCorrect: true },
            { text: 'They duck under it', isCorrect: false },
            { text: 'They interrupt it with a jab', isCorrect: false },
          ]}
          correctFeedback="Exactly! Giant Swing requires 1 to break. If they press 1+2, they get thrown. This is why the mixup is so strong — they must guess correctly."
          incorrectFeedback="Not quite. Giant Swing requires 1 to break. If they press 1+2, they're pressing the wrong break and will get thrown."
        />
      </Section>

      <Section title="Practice Time">
        <PracticeBox
          title="The Indistinguishable Mixup Practice"
          setup="Set dummy to Guard All. Practice mixing Giant Swing and Shining Wizard from plus frames."
          tasks={[
            { id: 'ch5-gs-sw', text: 'Mix Giant Swing and Shining Wizard 10 times', detail: 'From f+1+4, randomly choose GS or SW', type: 'counter', target: 10 },
            { id: 'ch5-three-way', text: 'Mix all three throws (GS, SW, Tombstone)', detail: 'Make them guess between 1, 1+2, and 2 breaks', type: 'counter', target: 10 },
            { id: 'ch5-adapt', text: 'If dummy breaks 1, switch to Shining Wizard', detail: 'Practice adapting to their break patterns', type: 'counter', target: 10 },
          ]}
        />
      </Section>

      <Section title="The Complete Picture">
        <p>
          This is <span className="highlight-secondary">King's signature technique</span>. No other character 
          has throws that look identical but require different breaks. This is what makes King the best 
          grappler in Tekken.
        </p>

        <KeyConcept title="Master the Mixup" icon="👑">
          <ul>
            <li><strong>Learn both throws</strong> — Giant Swing and Shining Wizard</li>
            <li><strong>Buffer from plus frames</strong> — Make them unreactable</li>
            <li><strong>Mix randomly</strong> — Don't be predictable</li>
            <li><strong>Adapt to breaks</strong> — Switch throws based on what they break</li>
            <li><strong>Add Tombstone</strong> — Three-way mixup is even stronger</li>
          </ul>
        </KeyConcept>

        <p>
          Master this mixup, and you'll dominate. Opponents will fear your throws. They'll duck, and you'll 
          launch them. They'll break wrong, and you'll throw them. This is King's power.
        </p>
      </Section>
    </Chapter>
  )
}
