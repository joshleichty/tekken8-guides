import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter14({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={14}
      title="Heat System"
      intro="King's Heat system is unique — certain throws restore Heat gauge, and Jaguar Sprint gains armor. Master Heat, and you'll dominate."
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
      nextLabel="Complete King"
    >
      <Section title="Heat Engagers">
        <p>
          King has <span className="highlight">five Heat engagers</span>. These moves activate Heat when they hit:
        </p>

        <KeyConcept title="Heat Engagers" icon="🔥">
          <ul>
            <li><strong>f+2,1</strong> — Long-range heat engager, safe on block</li>
            <li><strong>f+2+3</strong> — Safe mid heat engager</li>
            <li><strong>db+1+2,2</strong> — Emerald Elbow from Muscle Armor</li>
            <li><strong>JGR 1+3</strong> — RKO (unbreakable throw)</li>
            <li><strong>d+1+4</strong> — Crouch throw heat engager</li>
          </ul>
        </KeyConcept>

        <MoveCard character="king"
          move={{
            input: 'f+2,1',
            hitLevel: ['m', 'h'],
            damage: '12, 25',
            startup: 'i15',
            onBlock: '-9',
            onHit: '+16a',
            tags: ['Mid', 'High', 'Heat Engager'],
            description: 'Long-range heat engager. Safe on block, great for whiff punishment.',
          }}
          showVideo
        />

        <MoveCard character="king"
          move={{
            input: 'f+2+3',
            hitLevel: ['m'],
            damage: '27',
            startup: 'i20',
            onBlock: '-9',
            onHit: '+8a',
            tags: ['Mid', 'Heat Engager', 'Safe'],
            description: 'Safe mid heat engager. Good approach tool.',
          }}
          showVideo
        />
      </Section>

      <Section title="Heat Powers Up Jaguar Sprint">
        <p>
          When King is in Heat, <span className="highlight-secondary">Jaguar Sprint gains armor</span>. This 
          makes it incredibly strong:
        </p>

        <KeyConcept title="Armored Jaguar Sprint" icon="🛡️">
          <ul>
            <li><strong>Absorbs attacks</strong> — Highs and mids are absorbed</li>
            <li><strong>JGR 1 becomes launcher</strong> — In Heat, JGR 1 launches on hit</li>
            <li><strong>JGR 2 enhanced</strong> — More damage and chip</li>
            <li><strong>RKO unbreakable</strong> — JGR 1+3 is always unbreakable</li>
            <li><strong>Loses to lows</strong> — Lows hit you out of it</li>
            <li><strong>Loses to throws</strong> — Throws hit you out of it</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Armored Approach">
          In Heat, Jaguar Sprint becomes an armored approach tool. Run forward, absorb attacks, then throw 
          or launch. This is one of King's strongest tools in Heat.
        </TipBox>
      </Section>

      <Section title="Throws Restore Heat">
        <p>
          This is <span className="highlight">King's unique Heat mechanic</span>. Certain throws restore 
          Heat gauge, allowing you to stay in Heat longer:
        </p>

        <KeyConcept title="Heat-Restoring Throws" icon="🔄">
          <ul>
            <li><strong>Giant Swing</strong> — Restores Heat gauge</li>
            <li><strong>Shining Wizard</strong> — Restores Heat gauge</li>
            <li><strong>Tombstone</strong> — Restores Heat gauge</li>
            <li><strong>Tijuana Twister</strong> — Restores Heat gauge</li>
            <li><strong>RKO (JGR 1+3)</strong> — Restores Heat gauge</li>
            <li><strong>Pedigree (d+1+4)</strong> — Restores Heat gauge</li>
          </ul>
        </KeyConcept>

        <p>
          This means you can <span className="highlight-secondary">stay in Heat almost indefinitely</span> 
          if you keep landing throws. The more you throw, the longer you stay in Heat. This is incredibly 
          strong.
        </p>

        <TipBox variant="warning" title="The Heat Loop">
          In Heat, you can create a loop: throw → restore Heat → throw again → restore Heat → repeat. This 
          is why King's Heat is so strong. Keep throwing, keep staying in Heat.
        </TipBox>
      </Section>

      <Section title="Heat Dash Combos">
        <p>
          Heat engagers can be canceled into Heat Dash for combos:
        </p>

        <KeyConcept title="Heat Dash Routes" icon="⚡">
          <ul>
            <li><strong>f+2,1~F</strong> — Heat Dash cancel, launches</li>
            <li><strong>f+2+3~F</strong> — Heat Dash cancel, launches</li>
            <li><strong>db+1+2,2~F</strong> — Heat Dash cancel, launches</li>
            <li><strong>+5 on block</strong> — Heat Dash moves are +5 on block</li>
            <li><strong>+36a on hit</strong> — Heat Dash moves launch on hit</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Dash">
          Heat Dash (hold forward after heat engager) cancels the move and launches. This gives you big 
          combo damage. Practice Heat Dash combos in Training Mode.
        </TipBox>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="king"
          videoId="H.2+3"
          move={{
            input: 'H.2+3',
            hitLevel: ['m', 't'],
            damage: '20, 40',
            startup: 'i17',
            onBlock: '+12 JGR',
            onHit: '+0d',
            tags: ['Mid', 'Throw', 'Heat Smash'],
            description: 'King\'s Heat Smash. 64 damage, incredible range. On block, transitions to Jaguar Sprint at +12.',
          }}
          showVideo
        />

        <p>
          King's Heat Smash is <span className="highlight">one of the best in the game</span>. It has 
          incredible range, deals 64 damage, and on block transitions to Jaguar Sprint at +12.
        </p>

        <KeyConcept title="Heat Smash Properties" icon="💥">
          <ul>
            <li><strong>64 damage</strong> — Massive damage</li>
            <li><strong>Incredible range</strong> — Hits from very far away</li>
            <li><strong>+12 on block</strong> — Transitions to Jaguar Sprint</li>
            <li><strong>Hits grounded</strong> — Can hit opponents on the ground</li>
            <li><strong>Floor break</strong> — Breaks floors on certain stages</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Heat Smash">
          King's Heat Smash is one of the best in Tekken. Use it from range to catch opponents off guard. 
          Even on block, you're at +12 in Jaguar Sprint — perfect for mixups.
        </TipBox>
      </Section>

      <Section title="Heat Strategy">
        <p>
          Here's how to use Heat effectively:
        </p>

        <KeyConcept title="Heat Gameplan" icon="🎯">
          <ol>
            <li><strong>Activate Heat</strong> — Use heat engager when safe</li>
            <li><strong>Use armored Jaguar Sprint</strong> — Approach with armor</li>
            <li><strong>Throw constantly</strong> — Throws restore Heat gauge</li>
            <li><strong>Stay in Heat</strong> — Keep throwing to maintain Heat</li>
            <li><strong>Use Heat Smash</strong> — Cash out before Heat ends</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="The Heat Loop">
          In Heat, create a loop: armored Jaguar Sprint → throw → restore Heat → repeat. This keeps you 
          in Heat almost indefinitely. Use Heat Smash to cash out before Heat ends.
        </TipBox>
      </Section>

      <Section title="The Complete Picture">
        <p>
          King's Heat system is unique because throws restore Heat gauge. Master Heat, and you'll dominate. 
          Stay in Heat by throwing, use armored Jaguar Sprint to approach, and cash out with Heat Smash.
        </p>

        <KeyConcept title="Master Heat" icon="👑">
          <ul>
            <li><strong>Activate safely</strong> — Use heat engagers when safe</li>
            <li><strong>Use armored Jaguar Sprint</strong> — Approach with armor</li>
            <li><strong>Throw constantly</strong> — Throws restore Heat gauge</li>
            <li><strong>Stay in Heat</strong> — Keep throwing to maintain Heat</li>
            <li><strong>Cash out</strong> — Use Heat Smash before Heat ends</li>
          </ul>
        </KeyConcept>

        <p>
          Master Heat, and you'll have one of the strongest Heat systems in Tekken. The throw-heat loop 
          is incredibly powerful.
        </p>
      </Section>
    </Chapter>
  )
}
