import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, TipBox, DecisionGrid, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="The Complete Lee"
      intro="Everything you've learned, synthesized into a complete gameplan. Defense, frame traps, matchup awareness, and the patience that makes Lee unstoppable."
      onPrevious={() => goToChapter(10)}
      hasNext={false}
    >
      <Section title="Defense">
        <p>
          Lee's defense is underrated. He doesn't have a panic button, but he has excellent
          tools for specific defensive situations.
        </p>

        <KeyConcept title="Defensive Tools" icon="🛡️">
          <ul>
            <li><strong>b+1+3 (Punch Parry):</strong> Parries high and mid punches. Gives a guaranteed follow-up. Use against characters with heavy punch-based pressure (like Law's jab strings).</li>
            <li><strong>b+3+4 (Power Crush):</strong> Absorbs hits during startup. Use as a get-off-me tool when pressured. Not safe on block, so use sparingly.</li>
            <li><strong>Backdash:</strong> Lee has a good backdash. Your best defensive tool. Create space and transition to your keepout range.</li>
            <li><strong>d+3 (High Crush):</strong> Goes under highs. Use when you read a high attack from close range.</li>
            <li><strong>b+2,4,3 (Low Crush):</strong> The string low crushes. Use against predictable low patterns.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Defense = Patience">
          Lee's best defense is <strong>not pressing buttons when it's not your turn</strong>. Block,
          backdash, and wait for the opening. Your punishment is so strong that blocking and punishing
          is often more rewarding than trying to interrupt with power crush or panic moves.
        </TipBox>
      </Section>

      <Section title="Frame Traps">
        <p>
          Frame traps are situations where you're plus enough that pressing a button beats the
          opponent's fastest response. Lee has several natural frame traps from his toolkit:
        </p>

        <DecisionGrid
          title="Frame Trap Situations"
          description="When you're plus, your follow-up beats their response."
          rows={[
            {
              situation: 'After HMS u+4 on block (+5)',
              response: 'df+1 (i13) or 4,4 (i11)',
              reason: '+5 means your i11 magic 4 beats their i15 or slower. df+1 beats everything slower than i12.',
              risk: 'They can jab (i10) to beat df+1, but magic 4 still beats the jab.',
            },
            {
              situation: 'After f,f+2 on block (+2)',
              response: '4,4 (i11) or df+1 (i13)',
              reason: '+2 means magic 4 comes out at effective i9. Nothing beats that.',
              risk: 'f,f+2 is high, so they might duck it next time.',
            },
            {
              situation: 'After H.d+1+2 on block (+6)',
              response: 'df+1, 4,4, or another H.d+1+2',
              reason: '+6 means even your i13 df+1 beats their fastest jab. Loop the pressure.',
              risk: 'They can duck the H.d+1+2 if they read it. Mix with Heat Smash.',
            },
            {
              situation: 'After slide on hit (+5)',
              response: 'ws+4 (i11) or ws+2,4 (i14)',
              reason: 'Slide puts you in crouch at +5. ws tools beat their responses.',
              risk: 'They might not press, giving you a free mix opportunity.',
            },
            {
              situation: 'After jab hit (+8)',
              response: '4,4 (i11) or df+1 (i13)',
              reason: '+8 is massive. Magic 4 at effective i3. Nothing beats it if they press.',
              risk: 'They block and wait. Go for a low or throw.',
            },
          ]}
        />
      </Section>

      <Section title="The Full Gameplan">
        <p>
          After 10 chapters, here's everything assembled into how a complete Lee match plays out:
        </p>

        <KeyConcept title="Lee's Game Flow" icon="🌊">
          <ol>
            <li>
              <strong>Opening — Establish Range (Ch 4)</strong><br />
              Backdash to range 2-3. Throw out b+4 and f,f+2 to establish that approaching is dangerous.
              Use f,f+3 to close distance when needed.
            </li>
            <li>
              <strong>Poke Game — Test the Opponent (Ch 2)</strong><br />
              df+1 and jab at close range. Watch what they do after. Do they press? Do they duck? Do they step?
            </li>
            <li>
              <strong>Counter-Hit Web — Punish Their Habits (Ch 3)</strong><br />
              They press → magic 4. They duck → 1+2. They jab → d+3. Every habit has a punish.
            </li>
            <li>
              <strong>Crouch Mixup — Open Turtles (Ch 7)</strong><br />
              They just block? Access crouch and mix slide vs ws+2,4. Force a guess. Wrong guess = combo.
            </li>
            <li>
              <strong>Hitman Pressure — Stance Reads (Ch 8)</strong><br />
              From b+4 or 1+2 block, enter HMS. Read their response and deploy the correct option.
            </li>
            <li>
              <strong>Punishment — Cash In (Ch 5-6)</strong><br />
              Every blocked unsafe move gets Acid Rain or b+1:1,2. Your punishment alone removes options from their gameplan.
            </li>
            <li>
              <strong>Heat — The Spike (Ch 10)</strong><br />
              Activate heat from f,f+3 or combo. Use the f,f+3 launcher and wall mixup for explosive damage.
            </li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="The Patience Principle">
        <p>
          The thread connecting everything in Lee's game is <strong>patience</strong>. Lee does not
          rush. He does not autopilot. He waits, reads, and punishes. Every tool in his kit
          is designed around this principle:
        </p>

        <KeyConcept title="The Lee Mentality" icon="🌹">
          <ul>
            <li><strong>You don't chase damage.</strong> You let damage come to you through punishment and counter-hits.</li>
            <li><strong>You don't force offense.</strong> You create opportunities through spacing and pokes, then capitalize when the opponent makes a mistake.</li>
            <li><strong>You don't panic under pressure.</strong> You block, backdash, and wait. Your punishment means every blocked move is an opportunity.</li>
            <li><strong>You invest in execution.</strong> Every just frame you master makes your existing gameplan stronger — not by adding new situations, but by increasing the damage from situations you're already in.</li>
          </ul>
          <p>
            Playing Lee at his best means accepting that some rounds will be slow. You'll chip with pokes,
            fish for counter-hits, and wait for the moment to strike. And when that moment comes — Acid Rain
            into full combo, CH b+4 at the wall, slide into heat burst — the damage is devastating.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="The Win Condition">
          Lee wins by <strong>chipping and reading</strong>. You don't need to open the opponent up with
          risky mixups. You poke, you punish, you counter-hit. Over the course of a round, the damage
          adds up. And when they get frustrated and start pressing — that's when the counter-hit
          launchers come out. Lee rewards patience more than any other character in Tekken.
        </TipBox>
      </Section>

      <Section title="Season 2 Identity">
        <p>
          Season 2 shifted Lee's identity slightly. The ws+2,3 nerf (-13 on block) means you can't
          spam it as a safe mid launcher from crouch anymore. This pushes Lee further toward:
        </p>
        <ul>
          <li><strong>More counter-hit fishing:</strong> With ws+2,3 riskier, CH damage from standing becomes more important.</li>
          <li><strong>More careful crouch mixup:</strong> ws+2,4 as the default mid option, ws+2,3 only for confirmed punishes.</li>
          <li><strong>Same core gameplan:</strong> Keepout, punishment, and counter-hits are unchanged. Lee's identity is intact.</li>
        </ul>
      </Section>

      <Section title="Matchup Awareness">
        <Collapsible title="General Matchup Tips" icon="🎮">
          <ul>
            <li><strong>vs Aggressive characters (Hwoarang, Law, Xiaoyu):</strong> Focus on b+4 keepout and magic 4 counter-hits. They press a lot — punish it.</li>
            <li><strong>vs Defensive characters (Kazuya, Jack-8):</strong> Use the crouch mixup to open them up. They won't give you free counter-hits.</li>
            <li><strong>vs Evasive characters (Xiaoyu, Zafina, Yoshimitsu):</strong> Use 1+2 (homing) and df+1 (mid) to track movement. b,b+4 catches sidesteps at range.</li>
            <li><strong>vs Mishimas:</strong> Block the hellsweep, ws+2,3 launch. Your crouch punishment is excellent against Mishima lows.</li>
            <li><strong>vs Characters with safe pressure:</strong> Be patient. Block, punish what's unsafe, and wait for the counter-hit opening.</li>
          </ul>
        </Collapsible>

        <Collapsible title="Slide-Specific Punishment" icon="📋">
          <p>
            Some characters have moves that are only punishable by specific Lee options. Your slide
            can punish moves that push you into full crouch from blocking, and your Acid Rain punishes
            moves that other characters can't punish at -10.
          </p>
          <ul>
            <li><strong>Any -10 move:</strong> Acid Rain changes the matchup. Characters who rely on -10 strings (Kazuya's 1,1,2; Law's b+2,3,4; etc.) lose their bread and butter.</li>
            <li><strong>Snake edges and deep lows:</strong> Block → FC uf+4 for massive launch punishment.</li>
            <li><strong>-14 on block:</strong> b+1:1,2 gives knockdown into oki. Better than most characters' i14 options.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Where to Go From Here">
        <KeyConcept title="Your Growth Path" icon="🪜">
          <ul>
            <li><strong>Immediate:</strong> Play matches. Use the beginner combos, the poke game, and b+4 keepout. Don't worry about just frames yet.</li>
            <li><strong>Short-term:</strong> Drill Acid Rain until it's consistent. This single upgrade transforms your punishment game.</li>
            <li><strong>Medium-term:</strong> Add 4,4:4 just frame and b+2 loop combos. Your damage spikes significantly.</li>
            <li><strong>Long-term:</strong> Master all just frames, optimize combos with f+4:1, learn matchup-specific punishment. This is where Lee keeps rewarding you forever.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Final Word">
          Lee Chaolan gives back exactly what you put in. Low investment = a solid, patient character
          with good keepout and punishment. High investment = a terrifying precision instrument that
          punishes harder than anyone, converts every stray hit into wall carry, and makes opponents
          afraid to press buttons. The ceiling is as high as your dedication. Enjoy the climb.
        </TipBox>
      </Section>
    </Chapter>
  )
}
