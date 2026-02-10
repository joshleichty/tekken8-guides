import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="Purple Lightning"
      intro="Before you touch a button, understand who Reina is. She's not just another Mishima — she's something new."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Learn Why This Works"
    >
      <Section title="Who Is Reina?">
        <p>
          Reina is Heihachi Mishima's secret daughter — the newest member of Tekken's most infamous
          bloodline. But calling her "another Mishima" misses the point. Her fighting style
          fuses <span className="highlight">Mishima Karate</span> with{' '}
          <span className="highlight">Taido</span>, a real Japanese martial art built on evasive,
          acrobatic movement. Where Kazuya plants his feet and waits for the perfect moment, Reina
          never stops moving. Where Jin alternates between patient defense and explosive punishment,
          Reina chains pressure until something breaks.
        </p>

        <p>
          She has the electric — the signature Mishima tool — but it's not the center of her game. The
          center is <em>stance flow</em>: three interconnected stances (Sentai, Heaven's Wrath, and
          Unsoku) that feed into each other. You enter one, threaten an option, transition to the next,
          threaten again. The opponent is never defending one thing — they're defending a current.
        </p>

        <p>
          Reina is for players who want Mishima tools without pure Mishima rigidity — more flow, more
          creativity, more routes through a round. She's rated advanced difficulty for a reason: her
          execution ceiling is high and her stances demand muscle memory. But she's one of the strongest
          characters in Season 2, and she rewards investment like few others. Her main weaknesses are
          risky lows (d+4 is -15 on block), a linear electric, and lower combo damage than other Mishimas.
        </p>
      </Section>

      <Section title="The Move That Starts Everything">
        <p>
          Every Reina round starts the same way. Not with a jab. Not with a poke.
          With <span className="highlight">f,f+2</span> into Sentai stance.
        </p>

        <MoveCard character="reina"
          videoId="f,F+2"
          move={{
            input: 'f,f+2',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i12',
            onBlock: '-9',
            onHit: '+2',
            tags: ['Mid', 'Safe', 'Stance Transition'],
            description: 'Your main approach tool. Hold forward after to enter Sentai at +2 on block, +13 on hit.',
            notes: ['Hold F to transition to Sentai', 'Safe on block by itself (-9)', 'Amazing range for getting in']
          }}
          showVideo
        />

        <p>
          By itself, f,f+2 is a safe mid at -9 on block. But hold forward and it transitions to
          Sentai at <span className="highlight">+2 on block</span> — your opponent can't press
          buttons. On hit, you're +13 in Sentai and they're frozen. From there, <strong>SEN 3</strong>
          (a fast homing high, heat engager, +1 on block) is guaranteed as a true combo.
        </p>

        <KeyConcept title="The Core Loop" icon="⚡">
          <ol>
            <li>Approach with <code>f,f+2</code> and hold forward</li>
            <li><strong>If it hits</strong> → Press 3 for guaranteed SEN 3 (heat engager)</li>
            <li><strong>If blocked</strong> → You're +2 in Sentai, mix them up (next chapter)</li>
          </ol>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            That's the whole game plan for your first 50 matches. 80% of your Reina wins will come
            from f,f+2 pressure and Sentai mixups.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="SEN 3 is a High">
          If your opponent is crouching when you enter Sentai, SEN 3 will whiff.
          We'll cover what to do about duckers in Chapter 3. For now, just drill the loop.
        </TipBox>
      </Section>

      <Section title="What's Coming Next">
        <p>
          In the next chapter, you'll learn <strong>why</strong> this loop works — what +2 on block
          actually means, and what to do when your opponent starts respecting it. That's when Reina
          gets really fun.
        </p>

        <TipBox variant="tip" title="Your One Goal">
          Every time you play Reina today, focus on ONE thing: land f,f+2, hold forward, and hit
          confirm SEN 3. Don't worry about electrics, other stances, or punishment yet.
        </TipBox>
      </Section>
    </Chapter>
  )
}
