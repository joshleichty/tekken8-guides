import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Complete Zafina"
      intro="You've learned the moves, stances, combos, and pressure. Now let's put it all together into a cohesive gameplan. This is how you play Zafina at a high level."
      onPrevious={() => goToChapter(11)}
      hasNext={false}
    >
      <Section title="The Zafina Identity">
        <p>
          Zafina is a <span className="highlight">defensive-offensive hybrid</span>. She excels at 
          evasion and movement, but her offense comes from continuous stance pressure. Unlike 
          rushdown characters who overwhelm with speed, Zafina overwhelms with options.
        </p>

        <KeyConcept title="Core Identity" icon="🔮">
          <ul>
            <li><strong>70% Defensive, 30% Offensive</strong> — Use movement to create openings</li>
            <li><strong>Backdash is your best friend</strong> — One of the best in the game</li>
            <li><strong>Constant options</strong> — Never be predictable</li>
            <li><strong>Heat smash defines her</strong> — Her strongest tool in heat</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Complete Gameplan">
        <KeyConcept title="Phase 1: Neutral Game" icon="1️⃣">
          <ul>
            <li>Poke with <strong>df+1</strong> and <strong>1</strong> to establish presence</li>
            <li>Use <strong>f,f+4</strong> to control space and catch stepping</li>
            <li>Fish for <strong>CH f,f+3</strong> — your best heat engage opportunity</li>
            <li>Apply <strong>d+3</strong> and <strong>db+3</strong> for low damage</li>
            <li>When minus, <strong>backdash</strong> and look for whiff punishes</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Phase 2: Heat Activation" icon="2️⃣">
          <ul>
            <li><strong>Primary</strong>: CH f,f+3 → SCR 2,1 (52 damage + heat)</li>
            <li><strong>Secondary</strong>: Raw SCR 2,1 from any SCR entry</li>
            <li><strong>Neutral</strong>: f+1+2 when you can't get to stance</li>
            <li><strong>Punishment</strong>: df+4,1 for 13f punishes</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Phase 3: Heat Pressure" icon="3️⃣">
          <ul>
            <li>Get to <strong>Scarecrow</strong> via f,f+3, 1,3, WR3</li>
            <li>Apply the <strong>heat smash 50/50</strong>:
              <ul style={{ marginTop: '8px' }}>
                <li><strong>SCR Heat Smash</strong> — Low option</li>
                <li><strong>SCR 2,1 / SCR 1+2</strong> — Mid options</li>
              </ul>
            </li>
            <li>At wall, heat smash becomes even stronger (56 damage)</li>
            <li>Don't waste heat on random Azazel moves — save for smash</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Phase 4: Stance Flow" icon="4️⃣">
          <ul>
            <li>Flow between stances to maintain pressure</li>
            <li><strong>SCR → TRT</strong>: via SCR 1+2 or SCR 1,4</li>
            <li><strong>SCR → MNT</strong>: via SCR df+4</li>
            <li><strong>MNT → SCR</strong>: via MNT 1,3</li>
            <li><strong>MNT → TRT</strong>: via MNT df+4 or MNT 4</li>
            <li><strong>TRT → MNT</strong>: via TRT d+1+2</li>
            <li>Cancel with <strong>db</strong> to reset or bait</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Matchup Considerations">
        <KeyConcept title="General Strategies by Archetype" icon="🎮">
          <ul>
            <li>
              <strong>vs Rushdown</strong> (Law, Hwoarang, Nina)
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Use backdash heavily. Fish for CH 1+2 and CH d+3. Don't contest their strings — 
                wait for gaps and whiff punish.
              </p>
            </li>
            <li>
              <strong>vs Keep-out</strong> (Jack-8, Fahkumram)
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Use WR1+2 and WR3 to close distance. Your movement is better than theirs. 
                Sidestep their linear pokes.
              </p>
            </li>
            <li>
              <strong>vs Mixup Characters</strong> (King, Yoshimitsu)
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Respect their offense. Use d+3 high crush and MNT evasion. Don't give them 
                free throws — stay active.
              </p>
            </li>
            <li>
              <strong>vs Defensive Characters</strong> (Claudio, Shaheen)
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Your stance pressure shines here. Be patient, build advantage, apply continuous 
                mixups. They have to guess.
              </p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Common Mistakes to Avoid">
        <KeyConcept title="Mistakes That Will Get You Killed" icon="⚠️">
          <ul>
            <li>
              <strong>Pressing in SCR/TRT when minus</strong>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                You can't block. If you're minus, cancel the stance or use armor (risky).
              </p>
            </li>
            <li>
              <strong>Being predictable with stance options</strong>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Good players will read you. Mix up mids, lows, cancels, and armor.
              </p>
            </li>
            <li>
              <strong>Wasting heat on Azazel moves</strong>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                The heat smash mixup is too strong. Save heat for it.
              </p>
            </li>
            <li>
              <strong>Spamming unsafe moves</strong>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                SCR 4 and SCR b+1+2 are very punishable. Use them as reads, not spam.
              </p>
            </li>
            <li>
              <strong>Forgetting about backdash</strong>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Her backdash is top tier. Use it constantly when minus.
              </p>
            </li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Advanced Tips">
        <Collapsible title="Optimization Tips" icon="🎯" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <ul>
              <li>
                <strong>ws+3 is your secret weapon</strong> — 12f WS punish that goes to SCR at +9. 
                Duck lows and immediately ws+3 for huge reward.
              </li>
              <li>
                <strong>b+2 sets up heat smash</strong> — b+2 on hit is +12. In heat, that's 
                guaranteed neutral heat smash for 51 damage.
              </li>
              <li>
                <strong>Delay df+1,2,1 at wall</strong> — The delayed last hit gets 50% scaling 
                for significantly more damage.
              </li>
              <li>
                <strong>MNT 3,1 is safe</strong> — It's your only safe low in the game. Use it 
                liberally for CH fishing.
              </li>
              <li>
                <strong>TRT 3 always beats TRT 1</strong> — Opponents should block low, but 
                mid hits harder. Condition them with lows, then mid.
              </li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="Knowledge Check Moves" icon="🧠">
          <div style={{ marginTop: '12px' }}>
            <p style={{ marginBottom: '12px' }}>
              These moves punish opponents who don't know the matchup:
            </p>
            <ul>
              <li><strong>df+1,2,1</strong> — Third hit catches punish attempts</li>
              <li><strong>1+2,4,4</strong> — Second hit catches interrupt attempts</li>
              <li><strong>TRT 4,3</strong> — Second hit CH launches</li>
              <li><strong>db+4,2</strong> — Extension catches punish attempts</li>
              <li><strong>2,1,3~D</strong> — Low extension into Mantis</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Practice Routine">
        <KeyConcept title="Daily Practice" icon="📅">
          <ol>
            <li>
              <strong>Combos (10 min)</strong>
              <ul style={{ marginTop: '4px', marginBottom: '8px' }}>
                <li>df+2 combo × 10</li>
                <li>CH d+3 combo × 10</li>
                <li>CH f,f+3 → SCR 2,1 × 10</li>
                <li>Wall combo × 10</li>
              </ul>
            </li>
            <li>
              <strong>Punishment (5 min)</strong>
              <ul style={{ marginTop: '4px', marginBottom: '8px' }}>
                <li>Record common unsafe moves</li>
                <li>Practice 10f, 13f, and 16f punishes</li>
                <li>Practice ws+3 punish for lows</li>
              </ul>
            </li>
            <li>
              <strong>Stance Flow (10 min)</strong>
              <ul style={{ marginTop: '4px', marginBottom: '8px' }}>
                <li>Practice f,f+3 → SCR mixups</li>
                <li>Practice d+3~D → MNT mixups</li>
                <li>Practice WR1+2 → TRT df+1</li>
              </ul>
            </li>
            <li>
              <strong>Movement (5 min)</strong>
              <ul style={{ marginTop: '4px' }}>
                <li>Korean backdash practice</li>
                <li>Sidestep → launch practice</li>
              </ul>
            </li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Final Thoughts">
        <p>
          Zafina rewards <span className="highlight">patience and adaptation</span>. She's not about 
          one big mixup — she's about continuous pressure that eventually breaks the opponent's 
          mental stack.
        </p>

        <p>
          Her combo damage is lower than many characters, but her mixup potential and evasion 
          make up for it. In heat, she becomes one of the scariest characters in the game.
        </p>

        <TipBox variant="tip" title="The Zafina Mindset">
          <ul>
            <li>When in doubt, backdash</li>
            <li>When plus, mix them up</li>
            <li>When they guess wrong, make them pay</li>
            <li>When in heat, get to Scarecrow</li>
            <li>Never be predictable</li>
          </ul>
        </TipBox>

        <KeyConcept title="You're Ready" icon="🎉">
          <p>
            You now have everything you need to play Zafina at a competitive level. The rest 
            comes from experience — playing matches, learning matchups, and refining your reads.
          </p>
          <p style={{ marginTop: '12px' }}>
            Go out there and show them why they should fear the Mystic Stargazer.
          </p>
        </KeyConcept>
      </Section>

      <Collapsible title="Quick Reference Sheet" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Key Moves</h4>
          <ul style={{ fontSize: '13px', marginBottom: '16px' }}>
            <li><strong>Pokes</strong>: 1, df+1, d+3, db+3</li>
            <li><strong>Plus frames</strong>: f,f+3, WR3, WR1+2, MNT df+1</li>
            <li><strong>Counter-hit</strong>: 1+2, f,f+3, d+3, MNT 3,1</li>
            <li><strong>Launchers</strong>: df+2, uf+4, ws+1,2, ws+2</li>
            <li><strong>Heat engagers</strong>: SCR 2,1, f+1+2, df+4,1</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Stance Notation</h4>
          <ul style={{ fontSize: '13px', marginBottom: '16px' }}>
            <li><strong>SCR</strong>: 3+4 (Scarecrow)</li>
            <li><strong>MNT</strong>: d+3+4 (Mantis)</li>
            <li><strong>TRT</strong>: d+1+2 (Tarantula)</li>
          </ul>

          <h4 style={{ color: 'var(--accent)', marginBottom: '8px' }}>Core Combos</h4>
          <ul style={{ fontSize: '13px' }}>
            <li><strong>df+2</strong>: uf+1 → df+1 → f+2,3 → SCR 4 T! → f,f,f+1+2 → TRT df+1</li>
            <li><strong>CH d+3</strong>: ws+3 → SCR 4 T! → 2,1,3</li>
            <li><strong>CH f,f+3</strong>: SCR 2,1 (heat engage)</li>
            <li><strong>Wall</strong>: 2,1,3 or uf+1 → df+1,2,1 (delay)</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
