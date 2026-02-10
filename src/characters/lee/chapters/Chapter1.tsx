import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, TipBox, PracticeBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Silver-Haired Demon"
      intro="Before you touch a button, understand who Lee Chaolan is — and why playing him well feels like nothing else in Tekken."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Your First Buttons"
    >
      <Section title="The Elegant Rival">
        <p>
          Lee Chaolan is Heihachi's adopted son, Kazuya's rival, and the most stylish character in Tekken.
          He doesn't fight like a Mishima — he doesn't have hellsweep or electric. Instead, Lee brings
          something rarer: <span className="highlight">precision</span>. Every move in his kit is a
          scalpel. Where other characters overwhelm you with options, Lee dismantles you with
          the <em>right</em> option at the <em>right</em> time.
        </p>
        <p>
          In Tekken 8 Season 2, Lee is a <span className="highlight-secondary">counter-hit specialist</span> who
          wins by reading his opponent, controlling space, and punishing mistakes harder than almost anyone
          in the cast. He doesn't chase you down. He creates distance, tests your patience, and when you
          crack — when you press a button you shouldn't have — he converts that single mistake into
          devastating damage.
        </p>
        <p>
          Playing Lee well feels like conducting a fight, not brawling in one. You set the tempo. You
          choose when to strike. And when your execution is sharp, every round feels like a statement.
        </p>
      </Section>

      <Section title="Who Is Lee For?">
        <p>
          Lee rewards a specific kind of player. If any of these resonate with you, you're in the right place:
        </p>
        <ul>
          <li><strong>You enjoy reading opponents.</strong> Lee's best damage comes from predicting what people will do, not from memorizing flowcharts.</li>
          <li><strong>You find satisfaction in clean punishment.</strong> Landing Acid Rain (1,3:3:3) on a -10 move and watching the opponent realize they can never throw that move out again — that feeling is why people play Lee.</li>
          <li><strong>You want a character that keeps rewarding practice.</strong> Lee has more execution depth than almost anyone. Hundreds of hours in, you're still finding ways to optimize.</li>
          <li><strong>You appreciate style.</strong> Lee is the most aesthetically satisfying character in Tekken. His combos look good. His punishment looks good. Even his idle stance looks good.</li>
        </ul>

        <TipBox variant="warning" title="The Honest Truth">
          Lee is not a character who gives you free wins. His lows are risky. His offense is linear.
          His best tools require just frame inputs. If you want easy damage and autopilot pressure,
          Lee will frustrate you. But if you want a character that makes you a <strong>better player</strong> — one
          that teaches you to read, react, and punish — Lee is unmatched.
        </TipBox>
      </Section>

      <Section title="Lee's Core Identity">
        <KeyConcept title="The Best 10-Frame Punish in the Game" icon="🎯">
          <p>
            <strong>Acid Rain (1,3:3:3)</strong> — When someone does something -10 on block, most characters get
            a jab string for 20-25 damage. Lee gets a launching punish that leads to a full combo. This single
            move changes how opponents play against you. They can't throw out "mildly unsafe" moves because
            the punishment is catastrophic.
          </p>
        </KeyConcept>

        <KeyConcept title="An 11-Frame Counter-Hit Launcher" icon="⚡">
          <p>
            <strong>Magic 4 (4,4:4)</strong> — At i11, this is the fastest counter-hit launcher in the game.
            When someone presses a button at the wrong time, you launch them. This means Lee can
            challenge in situations where other characters can only block and wait.
          </p>
        </KeyConcept>

        <KeyConcept title="Keepout That Terrifies" icon="🛡️">
          <p>
            <strong>b+4</strong> — A -3 on block mid that launches on counter-hit and transitions into Hitman
            Stance. At i20 with massive range, this move makes approaching Lee feel like running into a wall.
            Opponents have to think twice about dashing forward.
          </p>
        </KeyConcept>

        <KeyConcept title="The Crouch Mixup" icon="🌀">
          <p>
            <strong>Slide (FC df,d,DF+3)</strong> — Lee has access to a full crouch low launcher from multiple
            situations. Combined with ws+2,4 as the mid option, this creates a mixup that threatens from any
            range where Lee can access crouch. It's his primary offensive tool for opening people up.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Strengths and Weaknesses">
        <p>
          Lee's strengths and weaknesses aren't just a list — they're the <em>reason</em> he plays the way
          he does. His strengths pull you toward a defensive, read-based style. His weaknesses punish
          you for trying to play him any other way.
        </p>

        <h3>Why Lee Wins</h3>
        <ul>
          <li><strong>Punishment:</strong> Best i10 punish (Acid Rain), strong i11 (4,4:4), great whiff punishment (Acid Storm, df+2)</li>
          <li><strong>Counter-hits:</strong> i11 magic 4, b+4 keepout launcher, 1+2 homing CH launcher, d+3 high-crush CH launcher</li>
          <li><strong>Keepout:</strong> b+4, f,f+2 (+2 on block), b,b+4 (homing, +2 on block), movement</li>
          <li><strong>Crouch game:</strong> Slide from multiple entries, ws+2,4 safe mid, threatening from full crouch</li>
          <li><strong>Wall game:</strong> Excellent wall carry combos, strong wall pressure with HMS mixups</li>
        </ul>

        <h3>Why Lee Struggles</h3>
        <ul>
          <li><strong>Risky lows:</strong> b+3,3 is -12, d+3 is -15, slide is launch punishable at close range — no safe chip tool</li>
          <li><strong>Linear offense:</strong> Most of Lee's pressure is steppable to his left (your right). Good movement beats his rushdown.</li>
          <li><strong>Execution tax:</strong> Acid Rain, magic 4 just frame, and slide all require precise timing. Drop the input and you lose the damage.</li>
          <li><strong>No panic button:</strong> No reliable get-off-me tool under heavy pressure except generic options</li>
        </ul>

        <TipBox variant="tip" title="The Tradeoff That Defines Lee">
          Lee's weaknesses <em>force</em> his playstyle. You can't mash lows because they're risky.
          You can't autopilot pressure because it's linear. So you learn to read. You learn to space.
          You learn to punish. And that's exactly where Lee is strongest.
        </TipBox>
      </Section>

      <Section title="The Execution Dimension">
        <p>
          Let's talk about the elephant in the room. Lee has just frame inputs — moves where the timing
          window is extremely tight. <strong>You don't need them day one.</strong> Here's how it works:
        </p>
        <ul>
          <li><strong>Base version:</strong> Every just frame move has a "normal" version that works without tight timing. 1,2,4 is your i10 punish before you learn Acid Rain. 4,4 is your i11 tool before you add the :4.</li>
          <li><strong>Just frame version:</strong> The upgraded version with tighter timing but dramatically more reward. Acid Rain turns a 20-damage punish into a full combo.</li>
          <li><strong>Heat version:</strong> Heat gives you automatic just frames — so you can experience the full power immediately while learning to do it manually.</li>
        </ul>
        <p>
          This guide teaches the base version and the just frame version together in every chapter.
          Your brain learns <em>when</em> to use the move while your hands learn <em>how</em> to execute it.
          By the end, both catch up to each other.
        </p>
      </Section>

      <Section title="What This Guide Will Build">
        <p>
          By the end of this guide, you'll have a complete Lee — not a list of moves, but a <strong>way of
          thinking</strong> about every match. You'll know:
        </p>
        <ul>
          <li>How to control space so opponents play on your terms</li>
          <li>When to fish for counter-hits and which tool to use for each situation</li>
          <li>How to punish every common situation harder than any other character can</li>
          <li>When and how to access your crouch mixup to open people up</li>
          <li>How to use Hitman Stance as a reactive toolkit, not a memorized flowchart</li>
          <li>Combos that carry to the wall and convert every stray hit into real damage</li>
        </ul>

        <PracticeBox
          title="Warm-Up: Meet Your Character"
          setup="Go to Practice Mode with Lee. Set the dummy to stand guard."
          tasks={[
            { id: 'try-acid-rain', text: 'Try 1,3:3:3 (Acid Rain) — don\'t worry about timing yet, just feel the input', type: 'toggle' },
            { id: 'try-b4', text: 'Press b+4 at max range — watch how far it reaches', type: 'toggle' },
            { id: 'try-magic4', text: 'Try 4,4 — just the two hits. Feel the rhythm.', type: 'toggle' },
            { id: 'try-slide', text: 'Hold d/b to crouch, then do df,d,DF+3 (Slide) — feel the crouch entry', type: 'toggle' },
          ]}
        />

        <TipBox variant="tip" title="How to Use This Guide">
          Open Practice Mode alongside the guide. Each chapter introduces concepts with immediate
          practice. Don't skip ahead — later chapters assume you've drilled earlier ones.
          Lee rewards patience in the lab just as much as in the match.
        </TipBox>
      </Section>
    </Chapter>
  )
}
