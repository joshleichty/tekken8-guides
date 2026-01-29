import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  ProgressMilestone,
  Quiz
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Jack Identity"
      intro="Before you press a button, understand WHO Jack is. He's not what you expect from a 'big body' character. This chapter gives you the mental framework that makes everything click."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Start Learning"
    >
      <Section title="The Big Body Misconception">
        <p>
          Jack-8 is the <span className="highlight">biggest character in Tekken 8</span> alongside 
          the bears. When you see that massive robot frame, you probably think: slow, lumbering, 
          big damage swings, overwhelming force.
        </p>

        <p>
          <strong>You'd be wrong.</strong>
        </p>

        <p>
          Jack is actually a <span className="highlight">super solid fundamentals character</span> 
          whose strength lies in exceptional pokes, relentless low/mid pressure, and chipping you 
          down through a thousand paper cuts. Yes, he has some devastating attacks — but that's 
          not where his gameplan lives.
        </p>

        <KeyConcept title="What Jack Actually Does" icon="🤖">
          <ul>
            <li><strong>Dominates with pokes</strong> — His basic pokes have absurd range and frame data</li>
            <li><strong>Chips you down</strong> — Constant low/mid mixups that slowly drain your HP</li>
            <li><strong>Controls space</strong> — His long arms cover distances other characters can't reach</li>
            <li><strong>Armors through attacks</strong> — New Gamma Howl stance gives him power crush options</li>
            <li><strong>Punishes with precision</strong> — 10-frame heat smash makes his punish game elite</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Truth">
          When you beat someone with Jack, you beat them the old-fashioned way — you outpoked them, 
          out-neutraled them, and frustrated them with your low/mid game. Jack is low on gimmicks. 
          He wins through <strong>fundamentals</strong>.
        </TipBox>
      </Section>

      <Section title="Jack's Unique Movement">
        <p>
          Here's something that defies expectations: <span className="highlight">Jack moves fast</span>.
        </p>

        <p>
          In strictly 2D terms (forward and backward), Jack's backdash is actually faster than some 
          characters' Korean backdash canceling. He moves well. The catch? Being 3D, his massive 
          hitbox makes sidestepping difficult — he'll get clipped by moves that other characters 
          cleanly evade.
        </p>

        <KeyConcept title="Movement Profile" icon="🏃">
          <ul>
            <li><strong>Excellent backdash</strong> — Fast and covers good distance</li>
            <li><strong>Good forward movement</strong> — Can approach effectively</li>
            <li><strong>Wide hitbox</strong> — Struggles to sidestep; gets hit by more moves</li>
            <li><strong>Must respect tracking</strong> — Opponent's homing moves are extra dangerous</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Trade-off">
          Jack compensates for poor sidestepping with <strong>superior range</strong>. Where other 
          characters need to sidestep and punish, Jack can often just hit them from further away.
        </TipBox>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Best poke game in Tekken</strong> — db+1 may be the fastest standing low in the game (i12)</li>
          <li><strong>Exceptional range</strong> — His arms reach distances other characters dream about</li>
          <li><strong>Incredible crouch game</strong> — FC moves are among the best in the game</li>
          <li><strong>Great plus frames</strong> — Many moves leave him massively advantaged on block</li>
          <li><strong>Fastest heat smash (i10)</strong> — Punishes things other characters can't</li>
          <li><strong>Strong throws</strong> — All three break types with good damage</li>
          <li><strong>Gamma Howl stance</strong> — Power crush with half chip damage and move buffs</li>
          <li><strong>Wall carry</strong> — Gets opponents to the wall easily</li>
          <li><strong>Wall damage</strong> — Devastating wall combos and pressure</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Wide hitbox</strong> — Gets hit by moves that whiff on smaller characters</li>
          <li><strong>Poor sidestep</strong> — Can't evade as effectively as most of the cast</li>
          <li><strong>Slower buttons at i10</strong> — His jab is i12; fastest move is f+2 at i10</li>
          <li><strong>Linear key moves</strong> — f+4,1 (Jackhammer) can be stepped</li>
          <li><strong>Readable throws</strong> — His large arms make throw breaks easier to see</li>
          <li><strong>Combo damage requires stance</strong> — Optimal combos use GMH transitions</li>
        </ul>
      </Section>

      <Section title="The Gamma Howl Era">
        <p>
          Tekken 8 introduced <span className="highlight">Gamma Howl (GMH)</span> — a stance where 
          Jack literally flexes on you. This is the biggest addition to the character and changes 
          everything:
        </p>

        <KeyConcept title="What Gamma Howl Brings" icon="💪">
          <ul>
            <li><strong>Power crush frames</strong> — Absorbs mids and highs</li>
            <li><strong>Half chip damage</strong> — Takes 50% less chip when armoring</li>
            <li><strong>Low profiles at startup</strong> — Can evade some highs/mids</li>
            <li><strong>Gamma Charge moves</strong> — Powered-up versions of stance attacks</li>
            <li><strong>Guard break option</strong> — GMC 2 forces guaranteed damage when charged</li>
          </ul>
        </KeyConcept>

        <p>
          We'll dedicate two full chapters to Gamma Howl later. For now, just know that armoring 
          through attacks and getting guaranteed punishes is now a core part of Jack's game.
        </p>
      </Section>

      <Section title="Mental Model: The Pressure Cooker">
        <p>
          Think of Jack as a <span className="highlight">pressure cooker</span>. He doesn't look 
          flashy. He doesn't have crazy mixups. But the constant, relentless pressure of his 
          pokes — low, mid, low, mid — slowly builds until something gives.
        </p>

        <KeyConcept title="The Pressure Cooker Mindset" icon="🔥">
          <ul>
            <li><strong>Never stop poking</strong> — Every blocked poke builds mental pressure</li>
            <li><strong>Use range as a weapon</strong> — Hit them from distances they can't retaliate</li>
            <li><strong>Chip them down</strong> — 5 damage here, 10 damage there — it adds up</li>
            <li><strong>Punish impatience</strong> — When they crack and do something stupid, delete them</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Jack Experience">
          Playing Jack well feels like watching a meter slowly fill. Your opponent's frustration 
          grows with each poke. Then they do something desperate — and you launch them. The big 
          damage swings happen <strong>because</strong> of the poke game, not instead of it.
        </TipBox>
      </Section>

      <Section title="Quick Quiz">
        <Quiz
          question="What is Jack's primary gameplan?"
          options={[
            { text: 'Use slow, powerful attacks to overwhelm opponents', isCorrect: false },
            { text: 'Rely on gimmicks and 50/50 mixups', isCorrect: false },
            { text: 'Chip down opponents with relentless low/mid pokes', isCorrect: true },
            { text: 'Focus on throws and command grabs', isCorrect: false },
          ]}
          correctFeedback="Exactly! Jack wins through fundamental poke pressure, chipping opponents down with constant low/mid mixups until they crack."
          incorrectFeedback="Jack is actually a poke-based character who chips opponents down with relentless low/mid pressure. He's more fundamentally sound than flashy."
        />
      </Section>

      <Section title="Your Learning Path">
        <p>
          This guide teaches Jack progressively. Each chapter builds on the last. 
          <strong>Don't skip ahead</strong> — the poke game is the foundation everything else 
          rests on.
        </p>

        <ProgressMilestone
          title="Jack Mastery Path"
          steps={[
            { id: 'foundation', label: 'Foundation', description: 'Identity, first moves, movement' },
            { id: 'pokes', label: 'Core Pokes', description: 'The poke empire, lows, mid-range' },
            { id: 'stance', label: 'Gamma Howl', description: 'Defensive and offensive stance use' },
            { id: 'crouch', label: 'Crouch Game', description: 'One of the best crouch movesets' },
            { id: 'combos', label: 'Combos', description: 'Beginner to optimal routes' },
            { id: 'punish', label: 'Punishment', description: 'Standing, crouching, whiff' },
            { id: 'heat', label: 'Heat System', description: 'GMC access and fastest heat smash' },
            { id: 'throws', label: 'Throws', description: 'All three breaks, command grabs' },
            { id: 'wall', label: 'Wall & Defense', description: 'Wall pressure and power crush' },
            { id: 'mastery', label: 'Complete Jack', description: 'Full gameplan and match flow' },
          ]}
          currentStep={0}
        />

        <TipBox variant="tip" title="How to Use This Guide">
          Take each chapter seriously. Practice the moves until they're automatic. 
          Jack rewards <strong>consistency</strong> — you'll use db+1 a hundred times per match. 
          Make sure it's second nature before moving on.
        </TipBox>
      </Section>
    </Chapter>
  )
}
