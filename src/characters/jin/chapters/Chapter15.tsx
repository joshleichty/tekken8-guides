import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter15({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={15}
      title="The Complete Jin"
      intro="You've learned all the pieces. Now let's put them together into a cohesive gameplan. This is how you play Jin at a high level."
      onPrevious={() => goToChapter(14)}
      hasNext={false}
    >
      <Section title="The Jin Gameplan">
        <p>
          Jin is a <strong>jack of all trades</strong>. He can play any style effectively. 
          The best Jin players adapt their approach based on the opponent and situation.
        </p>

        <KeyConcept title="Jin's Core Loop" icon="🔄">
          <ol>
            <li><strong>Establish respect with pokes</strong> — 1, df+1, f+4</li>
            <li><strong>Fish for counter hits</strong> — f+4 from plus frames</li>
            <li><strong>Chip with lows</strong> — d+4, db+4 when they turtle</li>
            <li><strong>Punish everything</strong> — Make them fear unsafe moves</li>
            <li><strong>Carry to wall</strong> — Jin's combos wall carry well</li>
            <li><strong>ZEN pressure at wall</strong> — Don't let them escape</li>
            <li><strong>Close rounds with Heat</strong> — Free Electrics seal games</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Adapting Your Style">
        <SubSection title="Against Aggressive Opponents">
          <p>
            When they can't stop pressing buttons:
          </p>
          <ul>
            <li><strong>Let them come to you</strong> — f+4 catches approaches</li>
            <li><strong>Counter hit fishing</strong> — They give you free CHs</li>
            <li><strong>Backdash and whiff punish</strong> — Electric their whiffs</li>
            <li><strong>Parry their strings</strong> — b+1+3 on reads</li>
          </ul>
        </SubSection>

        <SubSection title="Against Defensive Opponents">
          <p>
            When they block everything:
          </p>
          <ul>
            <li><strong>Chip with lows</strong> — d+4, db+4 add up</li>
            <li><strong>Wave dash mixup</strong> — Hellsweep forces reactions</li>
            <li><strong>Throws</strong> — qcb+1+3, df+2+4, uf+1+2</li>
            <li><strong>ZEN pressure</strong> — Plus frames forever</li>
            <li><strong>Wall carry</strong> — Get them to the wall for real mixups</li>
          </ul>
        </SubSection>

        <SubSection title="Against Steppers">
          <p>
            When they sidestep your moves:
          </p>
          <ul>
            <li><strong>4 (homing)</strong> — Tracks both directions</li>
            <li><strong>ZEN 2</strong> — Homing from stance</li>
            <li><strong>ZEN 3</strong> — Homing mid</li>
            <li><strong>df+3</strong> — Tracks decently</li>
            <li><strong>Delay your strings</strong> — Catches step attempts</li>
          </ul>
        </SubSection>

        <SubSection title="When You Have Life Lead">
          <p>
            When ahead, play safe:
          </p>
          <ul>
            <li><strong>Safe mids only</strong> — f+4, df+1, df+3</li>
            <li><strong>Don't take risks</strong> — Skip the hellsweeps</li>
            <li><strong>Whiff punish</strong> — Let them make mistakes</li>
            <li><strong>Run the clock</strong> — They have to come to you</li>
          </ul>
        </SubSection>

        <SubSection title="When You're Behind">
          <p>
            When you need damage:
          </p>
          <ul>
            <li><strong>Activate Heat</strong> — Free Electrics = pressure</li>
            <li><strong>Take risks</strong> — Hellsweep, EWHF in neutral</li>
            <li><strong>Parry on hard reads</strong> — High reward</li>
            <li><strong>Counter hit fish</strong> — f+4 and pray</li>
            <li><strong>Get to wall</strong> — Jin's wall damage is massive</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Round-by-Round Strategy">
        <Collapsible title="Round Start" icon="🎬" defaultOpen>
          <p>Round start options:</p>
          <ul>
            <li><strong>f+4</strong> — Checks aggressive starts, CH launches</li>
            <li><strong>df+1</strong> — Safe mid poke</li>
            <li><strong>Backdash</strong> — See what they do</li>
            <li><strong>1</strong> — Quick jab to establish tempo</li>
          </ul>
          <p>
            Avoid: EWHF (can be ducked), hopkick (risky), hellsweep (too slow)
          </p>
        </Collapsible>

        <Collapsible title="Mid-Round" icon="⚔️">
          <ul>
            <li><strong>Establish your pokes</strong> — 1, df+1, f+4</li>
            <li><strong>Identify their habits</strong> — Do they step? Duck? Press?</li>
            <li><strong>Adapt your offense</strong> — Counter their tendencies</li>
            <li><strong>Punish every mistake</strong> — Jin's punishment is elite</li>
            <li><strong>Build toward wall</strong> — Combo carry matters</li>
          </ul>
        </Collapsible>

        <Collapsible title="Late Round" icon="🏁">
          <ul>
            <li><strong>If ahead</strong> — Safe pokes, run clock</li>
            <li><strong>If behind</strong> → Heat activation, take risks</li>
            <li><strong>Low HP kills</strong> → d+4, db+4 chip, Heat Smash</li>
            <li><strong>Timeout closing</strong> → Block and let clock run</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Heat Usage">
        <KeyConcept title="When to Activate Heat" icon="🔥">
          <ul>
            <li><strong>When you have wall</strong> — ZEN + Heat = death</li>
            <li><strong>When ahead</strong> — Snowball with free Electrics</li>
            <li><strong>When you need comeback</strong> — Heat Smash can flip rounds</li>
            <li><strong>Mid-combo</strong> — Heat Dash extends damage</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Waste Heat">
          Heat is a limited resource. Don't activate just because you can. Wait for 
          situations where Heat gives you real advantage — wall pressure, combo extension, 
          or when you need the free Electrics to close a round.
        </TipBox>
      </Section>

      <Section title="Common Mistakes">
        <KeyConcept title="Avoid These Habits" icon="❌">
          <ul>
            <li><strong>Random hellsweeps</strong> — It's reactable, use on reads only</li>
            <li><strong>Spamming EWHF</strong> — It's high, mix with mids</li>
            <li><strong>Not punishing</strong> → Jin's punishment is too good to waste</li>
            <li><strong>Ignoring wall</strong> — Always carry to wall when possible</li>
            <li><strong>Same strings always</strong> — Vary your extensions</li>
            <li><strong>Mashing parry</strong> — Use it on reads, not randomly</li>
            <li><strong>Dropping combos</strong> — Beginner combo beats dropped optimal</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Practice Priorities">
        <p>
          What to work on, in order of importance:
        </p>

        <ol>
          <li>
            <strong>Punishment</strong> — 2,4, ws4,4, d+3+4, ws2. Know when to use each.
          </li>
          <li>
            <strong>Basic combos</strong> — Get beginner combos to 90%+ consistency.
          </li>
          <li>
            <strong>Poke game</strong> — 1, df+1, f+4 should be automatic.
          </li>
          <li>
            <strong>Counter hit confirms</strong> — Especially f+4 CH.
          </li>
          <li>
            <strong>Electric execution</strong> — Practice EWHF regularly.
          </li>
          <li>
            <strong>Wall combos</strong> — Jin's wall damage is huge.
          </li>
          <li>
            <strong>ZEN pressure</strong> — Especially at the wall.
          </li>
          <li>
            <strong>Parry timing</strong> — Advanced but rewarding.
          </li>
        </ol>
      </Section>

      <Section title="The Journey Ahead">
        <p>
          Jin is a character with unlimited depth. This guide covers the fundamentals, 
          but there's always more to learn:
        </p>

        <ul>
          <li><strong>Matchup knowledge</strong> — Learn what to punish against each character</li>
          <li><strong>Optimal combos</strong> — Execution-heavy routes for more damage</li>
          <li><strong>Advanced oki</strong> — Character-specific setups</li>
          <li><strong>Parry mastery</strong> — Knowing when parry is guaranteed</li>
          <li><strong>Mental game</strong> — Conditioning and reads</li>
        </ul>

        <p>
          The more you play Jin, the more you'll discover. He rewards practice and 
          game knowledge like few other characters.
        </p>

        <TipBox variant="tip" title="Final Advice">
          Don't try to play the "complete" Jin immediately. Start with pokes and punishment. 
          Add pieces gradually. Jin's strength is his versatility — but that comes with time 
          and matchup experience. Play games, identify your weaknesses, and practice those 
          specific things. That's how you level up.
        </TipBox>
      </Section>

      <Section title="Quick Reference">
        <Collapsible title="Essential Moves" icon="📋" defaultOpen>
          <ul>
            <li><strong>Pokes:</strong> 1, df+1, f+4, d+4, db+4</li>
            <li><strong>CH Tools:</strong> f+4, 4, 2,1,4</li>
            <li><strong>Launchers:</strong> uf+4, d+3+4, EWHF, ws2</li>
            <li><strong>Heat Engagers:</strong> ff+2, df+4, 1+2</li>
            <li><strong>Panic:</strong> uf+4, uf+3, ZEN u+1</li>
            <li><strong>Wall:</strong> ZEN 3+4, ZEN 4</li>
          </ul>
        </Collapsible>

        <Collapsible title="Punishment Quick Ref" icon="⚖️">
          <ul>
            <li><strong>10f:</strong> 2,4 (or 1,2)</li>
            <li><strong>12f:</strong> b+1,2</li>
            <li><strong>13f:</strong> 1+2 (Heat) or df+1,4</li>
            <li><strong>14f:</strong> f+1+2 or f+3,1</li>
            <li><strong>15f:</strong> d+3+4 or EWHF</li>
            <li><strong>ws11:</strong> ws4,4</li>
            <li><strong>ws14:</strong> ws2</li>
          </ul>
        </Collapsible>

        <Collapsible title="Beginner Combo" icon="💥">
          <p>
            <strong>uf+4 → b,f+2,3~f → ZEN u+1 T! → b+3,2</strong>
          </p>
          <p>~55 damage. Works from most launchers. Master this first.</p>
        </Collapsible>
      </Section>

      <Section title="Congratulations">
        <p>
          You've completed the Jin guide. You now have the knowledge to play Jin at a 
          competitive level. The rest is practice, matchup experience, and refinement.
        </p>
        <p>
          Jin is the main character of Tekken for a reason. He has everything. Now go 
          show people what the Lightning of Fate can do.
        </p>
        <p style={{ marginTop: '24px', fontSize: '1.1rem' }}>
          <strong>⚡ Good luck in ranked. ⚡</strong>
        </p>
      </Section>
    </Chapter>
  )
}
