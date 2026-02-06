import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, TipBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Strongest in the Universe"
      intro="Paul Phoenix doesn't do complicated. He walks forward, makes you guess, and if you guess wrong, the round is over. That's not a simplification — that's the actual game plan."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn The 50/50"
    >
      <Section title="Who Is Paul?">
        <p>
          Paul Phoenix has been in Tekken since the very first game. He's the quintessential "regular guy" of the franchise — not a demon,
          not a ninja, not a cyborg. Just an American martial artist with an impossible hairdo and enough punching power to end rounds
          in a single decision.
        </p>
        <p>
          In Tekken 8, Paul is one of the most rewarding characters you can pick up. His game plan is honest and direct:
          get in your opponent's face, force them to guess between a devastating mid and a devastating low, and cash out
          when they guess wrong. No elaborate stance transitions. No 15-hit strings to memorize. Just raw power, clean reads,
          and enormous damage.
        </p>
        <p>
          But don't confuse "simple" with "shallow." Underneath the caveman exterior is a character with genuinely excellent
          fundamental tools, a back sway system that creates frame advantages out of thin air, approach options from every range,
          and arguably the single best Heat activation in the entire game. Paul can be played brain-dead or played brilliantly,
          and the beauty is you can switch between the two on a dime.
        </p>
      </Section>

      <Section title="The Two Pauls">
        <KeyConcept title="The Gorilla and the Scholar" icon="🦍">
          <p>
            There are two ways to play Paul, and great Paul players use both constantly:
          </p>
          <p>
            <strong>Gorilla Paul</strong> is the one people fear. Crouch dash into their face. Death Fist or Demo Man. Did they
            guess right? Do it again. Did they guess wrong? Round over. This is the ignorant, terrifying side of Paul that
            turns every interaction into a coin flip where both outcomes deal massive damage.
          </p>
          <p>
            <strong>Scholar Paul</strong> is the one that wins tournaments. Using df+1 into back sway to create plus frames.
            Whiff punishing with the best df+2 in the game. Poking with f+4 and uf+2 from range to fish for Heat Engagers.
            Playing patient, fundamental Tekken until the moment is right — and then switching to Gorilla for the kill.
          </p>
          <p>
            This guide teaches both. You'll learn when to think and when to swing.
          </p>
        </KeyConcept>
      </Section>

      <Section title="What Paul Does Well">
        <p>Let's be specific about what makes this character strong:</p>
        <ul>
          <li><strong>The most feared 50/50 in the game.</strong> Death Fist (qcf+2) is one of the highest-damage mids you can throw. Demo Man (d+4,2:1+2) is the most damaging basic low in Tekken. When Paul is in your face, you're gambling your life bar on a guess.</li>
          <li><strong>Possibly the best Heat in the game.</strong> Heat Engager into the 50/50 at +17 is Paul's actual win condition. Death Fist becomes safe on block in Heat with absurd wall carry. Heat Smash is a safer Demo Man. Heat guard breaks guarantee damage.</li>
          <li><strong>Excellent ranged tools.</strong> uf+2 (+5 on block, Heat Engager), f+4 (homing, Heat Engager), f,f+2:1 — Paul controls mid-range better than most characters.</li>
          <li><strong>Best df+2 in the game.</strong> Safe on block (-8), has built-in evasion against highs, and launches on hit. Most characters get punished when their launcher is blocked. Paul doesn't.</li>
          <li><strong>Enormous wall damage.</strong> Every combo carries to the wall. Every wall interaction leads to massive damage. Paul at the wall is where rounds go to die.</li>
          <li><strong>Back sway creates offense from nothing.</strong> Core moves like df+1 and ws+1,2 cancel into back sway, turning neutral or minus situations into plus frames with terrifying follow-ups.</li>
          <li><strong>14-frame launcher for punishment.</strong> b+3 crumples at 14 frames, giving Paul full combo punishment earlier than almost any other character.</li>
        </ul>
      </Section>

      <Section title="What Paul Struggles With">
        <TipBox variant="warning" title="Honest Weaknesses">
          <ul>
            <li><strong>10-frame punishment is bad.</strong> Paul's jab punish is just 1,2 for 17 damage. No magic happening at i10. Some characters get launched for things Paul can only jab punish.</li>
            <li><strong>Not a string character.</strong> Paul doesn't overwhelm you with long pressure strings. He relies on single powerful strikes and knowledge checks. Against opponents who mash freely, you need to know your counter-hit tools.</li>
            <li><strong>Demo Man needs clean hit.</strong> The most dangerous low in the game only works at close range. From far away, even if it connects, you don't get the trip. You have to be in their face.</li>
            <li><strong>Back sway is not blocking.</strong> When you commit to back sway, you cannot block. If they call it out, you eat whatever they throw.</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="The Game Plan in One Paragraph">
        <KeyConcept title="Paul's Kill Chain" icon="🔗">
          <p>
            Every round of Paul follows the same chain: <strong>survive the opening → close distance → land a Heat Engager → force the 50/50 near a wall</strong>.
            That's it. Every tool you'll learn in this guide serves one of those four links. Your approach moves (uf+2, f+4) fish for Heat Engagers.
            Your fundamental tools (df+1, df+2) keep you alive and create opportunities. Your back sway creates plus frames that make
            your offense inescapable. And everything — absolutely everything — funnels toward the moment where your opponent is near a wall,
            you're in Heat, and they have to guess Death Fist or Demo Man.
          </p>
          <p>
            Get the kill chain into your head now. Every chapter that follows is building one link of it.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Who Should Play Paul?">
        <p>
          Paul is perfect for you if:
        </p>
        <ul>
          <li>You want a character where every hit <em>matters</em> — no death by a thousand tiny pokes</li>
          <li>You enjoy forcing hard reads and making your opponent sweat</li>
          <li>You want a character that works at every skill level, from beginner to tournament</li>
          <li>You like having the option to play stupid OR smart depending on the moment</li>
          <li>You want the satisfaction of ending rounds in one or two explosive decisions</li>
        </ul>
        <p>
          Paul might not be for you if you want elaborate combo creativity, long flashy strings, or a character that
          wins by being tricky. Paul doesn't trick people. Paul punches people. There's a difference.
        </p>
      </Section>

      <Section title="How This Guide Works">
        <p>
          This guide is structured around Paul's kill chain. We start with the destination — the 50/50 that ends rounds —
          then work backward through every tool that gets you there. Each chapter builds one piece of your game plan,
          and by the end, you'll have a complete understanding of how to play Paul at a high level.
        </p>
        <p>
          Have practice mode open. Every concept comes with something to try immediately. Paul is a character you learn
          by doing, not by reading.
        </p>
      </Section>
    </Chapter>
  )
}
