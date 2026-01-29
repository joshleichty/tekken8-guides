import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Counter-Hit Fishing"
      intro="Counter-hits are Bryan's bread and butter. This chapter teaches you how to actively fish for counter-hits and turn single buttons into massive damage."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="String Extensions"
    >
      <Section title="What is Counter-Hit Fishing?">
        <p>
          <span className="highlight">Counter-hit fishing</span> means throwing out moves 
          specifically designed to catch opponents pressing buttons. You're not just hoping 
          for a CH — you're <strong>creating the situation</strong> where it happens.
        </p>

        <KeyConcept title="Counter-Hit Fishing Philosophy" icon="🎣">
          <ol>
            <li><strong>Create pressure</strong> — Make them want to press</li>
            <li><strong>Throw a CH launcher</strong> — When they press, they die</li>
            <li><strong>Profit</strong> — Massive damage combo</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Primary CH Launchers">
        <SubSection title="f+3 — The Close Range Fish">
          <MoveCard character="bryan"
            move={{
              input: 'f+3',
              hitLevel: ['m'],
              damage: '18',
              startup: 'i16-18',
              onBlock: '+0 to +2',
              onHit: '+4 to +6',
              onCH: '+50a',
              tags: ['Mid', 'CH Launcher', 'Neutral/Plus on Block', 'Knee'],
              description: 'Zero on block CH launcher. THE move for fishing up close.',
              notes: [
                'Frame advantage varies by range (better at tip)',
                'Wonky tracking — can be stepped',
                'Poor range — must be close',
                'Being 0 on block is incredible for a CH launcher'
              ]
            }}
          />

          <KeyConcept title="Why f+3 is Special" icon="⭐">
            <p>
              Most CH launchers are minus on block. f+3 is <span className="highlight">neutral to plus</span>. 
              This means:
            </p>
            <ul>
              <li>You can throw it out without losing your turn</li>
              <li>If they block, you're even — do another f+3 or something else</li>
              <li>If they press, they eat a full combo</li>
            </ul>
            <p>The tradeoff: terrible range and tracking. Use it close range only.</p>
          </KeyConcept>
        </SubSection>

        <SubSection title="b+1 — The Plus Frame Beast">
          <MoveCard character="bryan"
            move={{
              input: 'b+1',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i20-21',
              onBlock: '+4',
              onHit: '+7c',
              onCH: '+78a (+58)',
              tags: ['Mid', 'CH Launcher', '+4 on Block', 'Elbow', 'Spike'],
              description: 'Plus on block mid that launches on CH. Starts your pressure.',
            }}
          />

          <p>
            b+1 is <span className="highlight">+4 on block</span>. This is insane. You're at 
            advantage even when they block it. Use it to:
          </p>
          <ul>
            <li>Start your offense from mid-range</li>
            <li>Fish for CH at range 1.5</li>
            <li>Force respect — they MUST block after b+1</li>
          </ul>

          <TipBox variant="warning" title="No Tracking">
            b+1 tracks almost <span className="highlight-secondary">nothing</span>. If they 
            sidestep, you whiff. Use it when you've conditioned them to stand still.
          </TipBox>
        </SubSection>

        <SubSection title="3+4 — The Mid-Range Terror">
          <p>
            You learned 3+4 in Chapter 2. From a CH fishing perspective:
          </p>
          <MoveCard character="bryan"
            move={{
              input: '3+4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i18',
              onBlock: '-13 (safe with pushback)',
              onHit: '+8',
              onCH: '+59a',
              tags: ['Mid', 'CH Launcher', 'Keepout'],
              description: 'Your mid-range CH launcher. Catches approaches.',
            }}
          />
        </SubSection>
      </Section>

      <Section title="CH Fishing Decision Tree">
        <Flowchart
          title="When to Fish for Counter-Hits"
          nodes={[
            { 
              type: 'start', 
              label: 'You want to fish for CH' 
            },
            { 
              type: 'decision', 
              label: 'What range are you at?',
              branches: [
                { label: 'Close (range 0-1)', action: '→ Use f+3' },
                { label: 'Mid (range 1.5)', action: '→ Use b+1 or qcb+1' },
                { label: 'Far (range 2)', action: '→ Use 3+4 or u+4' },
              ]
            },
            {
              type: 'decision',
              label: 'Is opponent stepping?',
              branches: [
                { label: 'Yes', action: '→ Use 1+2 (homing) or qcb+3' },
                { label: 'No', action: '→ Fish with your CH launchers' },
              ]
            },
            {
              type: 'end',
              label: 'Get the CH → Full combo'
            }
          ]}
        />
      </Section>

      <Section title="Learning to Read Button Presses">
        <p>
          The best Bryan players don't just throw out CH moves randomly. They <span className="highlight">
          recognize when opponents want to press</span> and exploit that.
        </p>

        <KeyConcept title="When Opponents Press Buttons" icon="👀">
          <p><strong>After you block their string:</strong> Impatient players will try to press again. Use f+3.</p>
          <p><strong>After your move is blocked (-6):</strong> They know they're plus. They WILL press. Perfect f+3 timing.</p>
          <p><strong>After they whiff unpunished:</strong> They think they got away with it. Confidence = pressing.</p>
          <p><strong>When you've been blocking too long:</strong> They think you're scared. Time to fish with 3+4.</p>
          <p><strong>Low life situations:</strong> Desperate players mash. Any CH launcher works.</p>
        </KeyConcept>

        <TipBox variant="tip" title="Reading the Transition">
          Watch for moments when the opponent transitions from blocking to attacking. 
          That transition is when you fish. The read isn't random — it's recognizing 
          patterns and predicting behavior.
        </TipBox>
      </Section>

      <Section title="The Bait and Punish">
        <p>
          Now let's talk about <strong>creating</strong> the situations where CHs happen.
        </p>

        <SubSection title="The Minus Frame Trap">
          <p>
            When you're -6 (like after df+2 is blocked), opponents know they're plus. 
            Good players will try to take their turn with a fast poke. 
            <span className="highlight">This is exactly when you fish with f+3.</span>
          </p>
          <ul>
            <li><strong>If they jab:</strong> f+3 catches it for a full CH combo</li>
            <li><strong>If they df+1:</strong> f+3 still works — their mid is slower</li>
            <li><strong>If they block:</strong> f+3 is blocked but you're 0. Fish again or go low.</li>
          </ul>
          <p>
            <strong>Mental cue:</strong> "When I'm minus and close: fish time. My minus frames are bait."
          </p>
        </SubSection>

        <TipBox variant="warning" title="Common Mistakes">
          <ul>
            <li><strong>f+3 too early</strong> — No counter-hit because their move hasn't started</li>
            <li><strong>f+3 too late</strong> — They block it, you're back to neutral</li>
            <li><strong>Wrong range</strong> — f+3 at far range will whiff</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Range-Specific CH Fishing">
        <p>
          Bryan has different CH launchers for different ranges. Using the wrong one at the 
          wrong range = whiff = death.
        </p>

        <KeyConcept title="Match Your Tool to Your Range" icon="📍">
          <p><strong>Close range (0-1):</strong> f+3 — Your close-range CH tool</p>
          <p><strong>Mid range (1.5):</strong> b+1 — Reaches further, +4 on block</p>
          <p><strong>Far range (2):</strong> 3+4 — Max range CH launcher</p>
        </KeyConcept>

        <TipBox variant="tip" title="Mental Cue">
          Close = f+3. Mid = b+1. Far = 3+4. Range determines tool.
        </TipBox>
      </Section>

      <Section title="When to Stop Fishing">
        <p>
          Here's the hardest part: sometimes the fish isn't biting. You need to know when 
          to stop fishing and go low instead.
        </p>

        <p>
          <span className="highlight">If the opponent is blocking everything and not pressing</span>, 
          don't keep throwing CH moves at them. Turtles get opened up with lows (qcb+3) and throws, 
          not CH launchers.
        </p>

        <KeyConcept title="Adapting to the Opponent" icon="🔄">
          <ul>
            <li><strong>Against mashers:</strong> Fish all day. f+3, b+1, 3+4.</li>
            <li><strong>Against turtles:</strong> Chip with lows. qcb+3, throws, pressure.</li>
            <li><strong>Mix both:</strong> When they block f+3 (you're 0), go low with qcb+3.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Common Mistakes">
        <KeyConcept title="CH Fishing Errors" icon="❌">
          <ul>
            <li><strong>Wrong range for the move</strong> — f+3 at range 2 will whiff</li>
            <li><strong>Fishing when they're not pressing</strong> — Passive opponents won't give you CHs</li>
            <li><strong>Being predictable</strong> — Same setup every time gets ducked/stepped</li>
            <li><strong>Neglecting normal hits</strong> — qcb+1 and b+1 are great even without CH</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Read Your Opponent">
          CH fishing only works if your opponent presses buttons. Against turtles, use your 
          lows and throws instead. Against aggressive players, fish all day.
        </TipBox>
      </Section>

      <Section title="Chapter Summary">
        <p>
          Counter-hit fishing is about reading your opponent and punishing their aggression:
        </p>
        <ul>
          <li><strong>f+3</strong> — Close range (0 on block, launches on CH)</li>
          <li><strong>b+1</strong> — Mid range (+4 on block, launches on CH)</li>
          <li><strong>3+4</strong> — Far range (safe with pushback, launches on CH)</li>
        </ul>
        <p>
          Create situations where they want to press (minus frames, hesitation), then 
          punish them for it. But stay adaptable — against turtles, go low instead.
        </p>
      </Section>
    </Chapter>
  )
}
