import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Getting the Clinch"
      intro="Throws don't work from neutral. You need plus frames. These moves give you the advantage you need to make throws uninterruptible."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Throw Buffering"
    >
      <Section title="Why Plus Frames Matter">
        <p>
          A throw from neutral is <span className="highlight-secondary">reactable</span>. Your opponent can 
          duck, sidestep, or even interrupt it. But a throw from <span className="highlight">plus frames</span> 
          is <strong>uninterruptible</strong>.
        </p>

        <KeyConcept title="The Math" icon="🔢">
          <ul>
            <li><strong>Giant Swing is i10</strong> — 10-frame startup</li>
            <li><strong>Jab is i10</strong> — Fastest move in the game</li>
            <li><strong>From +1</strong> — Your throw starts on frame 1, their jab starts on frame 11</li>
            <li><strong>You win</strong> — Your throw hits before their jab</li>
          </ul>
        </KeyConcept>

        <p>
          This is why plus frames are critical. From +1 or more, Giant Swing (i10) beats any button your 
          opponent presses. They must duck or break the throw. They cannot interrupt it.
        </p>
      </Section>

      <Section title="The Jab (1) — Your Foundation">
        <MoveCard character="king"
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Plus on Block'],
            description: 'Your fastest move. Plus on block means you can throw immediately after.',
          }}
          showVideo
        />

        <p>
          King's jab is <span className="highlight">+1 on block</span>. This is huge. After they block your 
          jab, you're at +1, meaning your next move comes out before theirs. From +1, Giant Swing (i10) is 
          uninterruptible.
        </p>

        <KeyConcept title="After Jab on Block (+1)" icon="🎯">
          <ul>
            <li><strong>Giant Swing</strong> — Uninterruptible. They must duck or break.</li>
            <li><strong>Jab again</strong> — Interrupts their fastest moves</li>
            <li><strong>df+1</strong> — Mid check, safe at -1</li>
            <li><strong>Throw mixup</strong> — Giant Swing, Shining Wizard, or Tombstone</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Jab into Throw">
          One of King's dirtiest tricks: jab → Giant Swing. It's simple, it's fast, and it works. Your 
          opponent blocks the jab, expects pressure, and eats a throw. Try it.
        </TipBox>
      </Section>

      <Section title="f+1+4 — The Chest Bump">
        <MoveCard character="king"
          move={{
            input: 'f+1+4',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i17',
            onBlock: '+3',
            onHit: '+7',
            tags: ['Mid', 'Plus on Block', 'Plus on Hit'],
            description: 'The chest bump. Plus on block AND hit. Your best tool for getting plus frames.',
          }}
          showVideo
        />

        <p>
          f+1+4 is <span className="highlight-secondary">King's best plus frame tool</span>. It's +3 on block 
          and +7 on hit. Whether they block or get hit, you're plus. This is your primary way to get into 
          throw range.
        </p>

        <KeyConcept title="After f+1+4" icon="💪">
          <ul>
            <li><strong>On block (+3)</strong> — Giant Swing (i10) is uninterruptible. They must duck or break.</li>
            <li><strong>On hit (+7)</strong> — Even more advantage. You can do slower throws or continue pressure.</li>
            <li><strong>Mix with mids</strong> — If they start ducking, hit them with df+1 or df+2</li>
            <li><strong>Repeat</strong> — f+1+4 → throw → if they break, f+1+4 again</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The f+1+4 Loop">
          This move is so good that you can loop it: f+1+4 → throw → if they break, f+1+4 → throw again. 
          The pressure never stops. If they duck, hit them with a mid. This is King's core pressure pattern.
        </TipBox>
      </Section>

      <Section title="f,f+2 — The Crouch Forcer">
        <MoveCard character="king"
          videoId="f,F+2"
          move={{
            input: 'f,f+2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i31',
            onBlock: '+7',
            onHit: '+12c',
            tags: ['Mid', 'Forces Crouch', 'Plus on Block'],
            description: 'Forces opponent into crouch on hit. Sets up unbreakable crouch throws.',
          }}
          showVideo
        />

        <p>
          f,f+2 is a <span className="highlight">unique tool</span>. On hit, it forces your opponent into 
          crouch. From crouch, they cannot break throws — King's crouch throws are unbreakable.
        </p>

        <KeyConcept title="After f,f+2 on Hit" icon="⬇️">
          <ul>
            <li><strong>Opponent is crouching</strong> — Cannot break throws</li>
            <li><strong>Crouch throws are unbreakable</strong> — d+1+3, d+2+4, d+1+4</li>
            <li><strong>Guaranteed damage</strong> — They must take the throw</li>
            <li><strong>On block (+7)</strong> — Still plus, can throw or continue pressure</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Crouch Throw Setup">
          f,f+2 on hit → crouch throw (d+1+3, d+2+4, or d+1+4) is guaranteed. They cannot escape. This is 
          one of King's strongest setups. We'll cover crouch throws more in later chapters.
        </TipBox>
      </Section>

      <Section title="f,f,n+1+2 — The Push">
        <MoveCard character="king"
          videoId="f,f,n,1+2"
          move={{
            input: 'f,f,n+1+2',
            hitLevel: ['m'],
            damage: '0',
            startup: 'i9',
            onBlock: '+0',
            onHit: '+7',
            tags: ['Mid', 'Plus on Hit', 'No Damage'],
            description: 'The push. No damage but +7 on hit. Perfect for setting up throws.',
          }}
          showVideo
        />

        <p>
          f,f,n+1+2 is a <span className="highlight">push</span> — it does no damage but gives you +7 on hit. 
          This is perfect for setting up throws. Your opponent takes no damage, but you're at massive advantage.
        </p>

        <KeyConcept title="After f,f,n+1+2 on Hit (+7)" icon="👋">
          <ul>
            <li><strong>Any throw works</strong> — +7 is enough for even slow throws</li>
            <li><strong>They're expecting it</strong> — But they still must guess the break</li>
            <li><strong>Mix with mids</strong> — If they duck, launch them</li>
            <li><strong>Neutral on block</strong> — Safe, but no advantage</li>
          </ul>
        </KeyConcept>

        <p>
          The push is especially useful because it's <span className="highlight-secondary">i9</span> — faster 
          than a jab. If you confirm it hits, you're at +7 and can throw immediately.
        </p>
      </Section>

      <Section title="Other Plus Frame Moves">
        <p>
          King has several other moves that give plus frames:
        </p>

        <MoveCard character="king"
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 15',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['High', 'High', 'Plus on Hit'],
            description: 'Jab string. Plus on hit, minus on block. Use when you confirm it will hit.',
          }}
          showVideo
        />

        <MoveCard character="king"
          move={{
            input: '2,1',
            hitLevel: ['h', 'm'],
            damage: '10, 15',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['High', 'Mid', 'Plus on Hit'],
            description: 'Alternative jab string. Mid on second hit catches duck attempts.',
          }}
          showVideo
        />

        <MoveCard character="king"
          videoId="f,f,n,2"
          move={{
            input: 'f,f,n+2',
            hitLevel: ['l'],
            damage: '17',
            startup: 'i18',
            onBlock: '-13',
            onHit: '+7',
            tags: ['Low', 'Plus on Hit', 'CH Launcher'],
            description: 'Low poke that gives +7 on hit. On counter-hit, launches for 55 damage combo.',
          }}
          showVideo
        />
      </Section>

      <Section title="The Plus Frame Flowchart">
        <p>
          Here's how to use plus frames to enable throws:
        </p>

        <KeyConcept title="The Clinch Loop" icon="🔄">
          <ol>
            <li><strong>Get plus frames</strong> — Jab (+1), f+1+4 (+3), or f,f,n+1+2 (+7)</li>
            <li><strong>Buffer a throw</strong> — Input Giant Swing or Shining Wizard during the plus move's recovery</li>
            <li><strong>They must guess</strong> — Duck (launch), break 1 (wrong if SW), break 1+2 (wrong if GS)</li>
            <li><strong>If they break</strong> — You're still plus, throw again</li>
            <li><strong>If they duck</strong> — Hit them with df+1 or hopkick</li>
            <li><strong>Repeat</strong> — The pressure never stops</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Mental Stack">
          Your opponent has to think about: ducking, breaking 1, breaking 1+2, breaking 2, pressing buttons, 
          sidestepping. That's 6+ options. <strong>You only think about: throw or mid.</strong> The mental 
          advantage is massive.
        </TipBox>
      </Section>

      <Section title="Practice Time">
        <PracticeBox
          title="Plus Frame to Throw Practice"
          setup="Set dummy to Guard All. Practice getting plus frames and immediately throwing."
          tasks={[
            { id: 'ch3-jab-throw', text: 'Jab → Giant Swing 10 times', detail: '1 on block (+1) → buffer f,hcf+1', type: 'counter', target: 10 },
            { id: 'ch3-chest-throw', text: 'f+1+4 → Shining Wizard 10 times', detail: 'f+1+4 on block (+3) → buffer f,f,F+2+4', type: 'counter', target: 10 },
            { id: 'ch3-push-throw', text: 'f,f,n+1+2 → Tombstone 10 times', detail: 'Push on hit (+7) → buffer qcb+1+2', type: 'counter', target: 10 },
            { id: 'ch3-mixup', text: 'Mix Giant Swing and Shining Wizard from f+1+4', detail: 'Make them guess between 1 break and 1+2 break', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
