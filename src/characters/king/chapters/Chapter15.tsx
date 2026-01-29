import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter15({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={15}
      title="Complete King"
      intro="You've learned all the pieces. Now it's time to put them together into a complete gameplan. This is how you play King at a high level."
      onPrevious={() => goToChapter(14)}
      nextLabel=""
    >
      <Section title="The Complete Gameplan">
        <p>
          King's gameplan is simple: <span className="highlight">get plus frames, throw, repeat</span>. 
          Everything else exists to make throws work.
        </p>

        <KeyConcept title="The King Flowchart" icon="🔄">
          <ol>
            <li><strong>Get plus frames</strong> — Jab (+1), f+1+4 (+3), f,f,n+1+2 (+7)</li>
            <li><strong>Buffer throw</strong> — Giant Swing, Shining Wizard, or Tombstone</li>
            <li><strong>They must guess</strong> — Duck, break 1, break 1+2, or break 2</li>
            <li><strong>If they duck</strong> — Launch with hopkick or mid launcher</li>
            <li><strong>If they break</strong> — You're still plus, throw again</li>
            <li><strong>If they press</strong> — Counter-hit with df+2,1</li>
            <li><strong>Repeat</strong> — The pressure never stops</li>
          </ol>
        </KeyConcept>

        <p>
          This is King's core loop. Master it, and you'll dominate. Everything else — mids, lows, movement, 
          Heat — exists to support this loop.
        </p>
      </Section>

      <Section title="The Mental Stack">
        <p>
          King wins by creating an <span className="highlight-secondary">impossible mental stack</span>:
        </p>

        <KeyConcept title="What Opponents Must Think About" icon="🧠">
          <ul>
            <li><strong>Standing</strong> — Throws hit them</li>
            <li><strong>Ducking</strong> — Mids hit them</li>
            <li><strong>Pressing</strong> — Counter-hits hit them</li>
            <li><strong>Breaking throws</strong> — 1, 1+2, or 2?</li>
            <li><strong>Sidestepping</strong> — Throws track</li>
            <li><strong>Backdashing</strong> — Throws track</li>
            <li><strong>Blocking</strong> — You're plus, throw again</li>
          </ul>
        </KeyConcept>

        <p>
          That's <strong>7+ options</strong> your opponent must consider. <span className="highlight">You 
          only think about: throw, mid, or counter-hit.</span> The mental advantage is massive.
        </p>
      </Section>

      <Section title="The Complete Flowchart">
        <Flowchart
          title="King's Complete Gameplan"
          nodes={[
            { type: 'start', label: 'Neutral: Get plus frames' },
            { type: 'decision', label: 'Do you have plus frames?', branches: [
              { label: 'YES', action: 'Buffer throw (Giant Swing, Shining Wizard, or Tombstone)' },
              { label: 'NO', action: 'Get plus frames (jab, f+1+4, f,f,n+1+2)' },
            ]},
            { type: 'decision', label: 'What did opponent do?', branches: [
              { label: 'Ducked', action: 'Launch with hopkick or mid launcher → combo → oki' },
              { label: 'Broke throw', action: 'You\'re still plus → throw again' },
              { label: 'Pressed', action: 'Counter-hit with df+2,1 → combo → oki' },
              { label: 'Blocked', action: 'You\'re plus → throw again' },
            ]},
            { type: 'decision', label: 'Are you in Heat?', branches: [
              { label: 'YES', action: 'Use armored Jaguar Sprint → throw → restore Heat → repeat' },
              { label: 'NO', action: 'Continue normal pressure' },
            ]},
            { type: 'end', label: 'Knockdown → Oki → Repeat the loop' },
          ]}
        />
      </Section>

      <Section title="Neutral Game">
        <p>
          In neutral, King wants to:
        </p>

        <KeyConcept title="Neutral Goals" icon="🎯">
          <ul>
            <li><strong>Get plus frames</strong> — Jab, f+1+4, f,f,n+1+2</li>
            <li><strong>Condition with mids</strong> — df+1, df+2, f+3</li>
            <li><strong>Threaten with lows</strong> — f,f,n+2, db+3</li>
            <li><strong>Control space</strong> — Use range to your advantage</li>
            <li><strong>Wait for mistakes</strong> — Punish whiffs and unsafe moves</li>
          </ul>
        </KeyConcept>

        <p>
          King's neutral is about <span className="highlight">creating opportunities to get plus frames</span>. 
          Once you have plus frames, throws become unreactable.
        </p>
      </Section>

      <Section title="Pressure Game">
        <p>
          When you have plus frames, apply pressure:
        </p>

        <KeyConcept title="Pressure Options" icon="💪">
          <ul>
            <li><strong>Throw</strong> — Giant Swing, Shining Wizard, or Tombstone</li>
            <li><strong>Mid</strong> — df+1, df+2, f+3</li>
            <li><strong>Low</strong> — f,f,n+2, db+3</li>
            <li><strong>Counter-hit</strong> — df+2,1 if they press</li>
            <li><strong>Launcher</strong> — Hopkick if they duck</li>
          </ul>
        </KeyConcept>

        <p>
          The key is to <span className="highlight-secondary">mix your options</span>. Don't always throw. 
          Don't always do mids. Mix throws, mids, lows, and counter-hits to keep opponents guessing.
        </p>
      </Section>

      <Section title="Defense">
        <p>
          When you're on defense, King has options:
        </p>

        <KeyConcept title="Defensive Tools" icon="🛡️">
          <ul>
            <li><strong>Block</strong> — Standard defense</li>
            <li><strong>Muscle Armor</strong> — Absorb attacks, cancel into offense</li>
            <li><strong>Power crushes</strong> — b+3, uf+3+4</li>
            <li><strong>Parries</strong> — b+1+3 (right punch), b+2+4 (kick)</li>
            <li><strong>Back Jaguar Step</strong> — Create space</li>
            <li><strong>Throw interrupt</strong> — Counter-hit throw if they press</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Counter-Hit Throws">
          Counter-hit throws are nearly unbreakable (8-frame break window). If your opponent presses buttons 
          while you're plus, throw them. They'll eat massive damage and won't be able to break.
        </TipBox>
      </Section>

      <Section title="Wall Game">
        <p>
          At the wall, King is terrifying:
        </p>

        <KeyConcept title="Wall Options" icon="🧱">
          <ul>
            <li><strong>Wall Giant Swing</strong> — Unbreakable at wall, 45-50 damage</li>
            <li><strong>Wall combos</strong> — 3,2,2 for 81 damage</li>
            <li><strong>Wall throws</strong> — Unbreakable throws at wall</li>
            <li><strong>Oki pressure</strong> — Ground throws and wakeup mixups</li>
            <li><strong>Heat Smash</strong> — 64 damage, transitions to Jaguar Sprint</li>
          </ul>
        </KeyConcept>

        <p>
          The wall is <span className="highlight">King's strongest position</span>. Wall Giant Swing is 
          unbreakable, and wall combos deal massive damage. Get opponents to the wall, and you'll dominate.
        </p>
      </Section>

      <Section title="Match Strategy">
        <p>
          Here's how to approach matches:
        </p>

        <KeyConcept title="Match Flow" icon="🎮">
          <ol>
            <li><strong>Round 1</strong> — Test their throw breaks. Do they know Giant Swing vs Shining Wizard?</li>
            <li><strong>If they break</strong> — Mix your throws. Switch between 1, 1+2, and 2 breaks.</li>
            <li><strong>If they duck</strong> — Hit them with mids. Condition them to stand.</li>
            <li><strong>Round 2</strong> — They're scared of throws. Use mids more.</li>
            <li><strong>Round 3</strong> — Mix everything. Throws, mids, lows, counter-hits.</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Adaptation">
          Good King players adapt. If opponent breaks throws, use mids. If opponent ducks, use mids. If 
          opponent presses, counter-hit. Adapt to what they do, and you'll dominate.
        </TipBox>
      </Section>

      <Section title="Common Mistakes">
        <p>
          Avoid these common mistakes:
        </p>

        <KeyConcept title="What Not to Do" icon="❌">
          <ul>
            <li><strong>Throwing from neutral</strong> — Throws need plus frames</li>
            <li><strong>Always doing same throw</strong> — Mix your throws</li>
            <li><strong>Ignoring mids</strong> — Mids make throws work</li>
            <li><strong>Spamming chain throws</strong> — Use situationally</li>
            <li><strong>Not adapting</strong> — If they duck, use mids</li>
            <li><strong>Forgetting buffering</strong> — Buffered throws are unreactable</li>
          </ul>
        </KeyConcept>

        <p>
          Avoid these mistakes, and you'll play King correctly. Remember: throws need plus frames, mix your 
          options, and adapt to what opponents do.
        </p>
      </Section>

      <Section title="Final Thoughts">
        <p>
          You've learned everything you need to play King at a high level. Remember:
        </p>

        <KeyConcept title="The King Way" icon="👑">
          <ul>
            <li><strong>Throws are primary</strong> — Not backup plan, primary offense</li>
            <li><strong>Plus frames enable throws</strong> — Get plus, then throw</li>
            <li><strong>Mix everything</strong> — Throws, mids, lows, counter-hits</li>
            <li><strong>Adapt</strong> — Switch based on what opponent does</li>
            <li><strong>Master buffering</strong> — Buffered throws are unreactable</li>
            <li><strong>Use Heat</strong> — Armored Jaguar Sprint is broken</li>
            <li><strong>End combos with throws</strong> — Psychological damage is real</li>
          </ul>
        </KeyConcept>

        <p>
          Master these concepts, and you'll dominate. King is the best grappler in Tekken. Play him like 
          one, and you'll win.
        </p>

        <TipBox variant="tip" title="You Are Ready">
          You now have everything you need to play King at a high level. Go practice, play matches, and 
          dominate. Remember: you're a wrestler. You're here to grab people. Everything else serves the grab.
        </TipBox>
      </Section>
    </Chapter>
  )
}
