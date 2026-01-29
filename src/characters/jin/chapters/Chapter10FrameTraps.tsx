import { Chapter, Section } from '../../../components/guide'
import { KeyConcept, TipBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10FrameTraps({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Frame Traps & Setups"
      intro="Frame traps are how you punish opponents for pressing buttons when it's not their turn. Jin has excellent frame traps that lead to counter-hit launches and big damage. Master these and you'll control the pace of every match."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Heat System"
    >
      <Section title="What is a Frame Trap?">
        <KeyConcept title="Frame Trap Definition" icon="🪤">
          <p>
            A <strong>frame trap</strong> is using a plus frame move to keep yourself at advantage, 
            then following up with a fast attack that beats your opponent's retaliation.
          </p>
          <p style={{ marginTop: '12px' }}>
            If you're <strong>+3</strong> and do a <strong>13 frame</strong> move, it effectively 
            comes out in <strong>10 frames</strong> — the same speed as a jab. If they try to jab back, 
            you trade or beat them.
          </p>
        </KeyConcept>

        <p>
          The key insight: when you have plus frames, your opponent's options are limited. 
          If they press buttons, they get counter-hit. If they respect you, you get to keep pressuring.
        </p>
      </Section>

      <Section title="Jin's Best Frame Traps">
        <Collapsible title="1,2,3 → Follow-up (0 on block)" defaultOpen>
          <p>
            <strong>1,2,3</strong> leaves you at <strong>0 frames</strong> (neutral). Not plus, but not minus either.
            You can comfortably select your next move.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>uf+2</strong> — Evasive mid check, catches mashers</li>
            <li><strong>2,1</strong> — Pressure string, +6 on hit</li>
            <li><strong>Sidestep → punish</strong> — If they whiff, launch them</li>
          </ul>

          <TipBox variant="warning" title="Don't Use 2,4 Here">
            Both hits are high. Smart opponents will duck and launch you. 
            Only use 2,4 after a sidestep when you're punishing a whiff.
          </TipBox>

          <p style={{ marginTop: '12px' }}>
            <strong>Note:</strong> At high level, 1,2,3 can be jabbed out before the third hit. 
            If opponents interrupt, stop at 1,2 and use uf+2 as your frame trap instead.
          </p>
        </Collapsible>

        <Collapsible title="ff+3,1 → Follow-up (+1 on block)">
          <p>
            <strong>ff+3,1</strong> is a heat engager that leaves you at <strong>+1 on block</strong>.
            Same follow-ups as 1,2,3, but slightly better because you have actual advantage.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>2,1</strong> — Your 10f string now beats their 10f jab</li>
            <li><strong>uf+2</strong> — Evasive mid, catches pressing</li>
            <li><strong>Sidestep</strong> — Bait whiffs</li>
          </ul>
        </Collapsible>

        <Collapsible title="ff+4 → d+2 (Pushback Trap)">
          <p>
            <strong>ff+4</strong> is <strong>-7 on block</strong> — technically not your turn. 
            But the pushback is so large that most punishes whiff.
          </p>
          
          <KeyConcept title="The ff+4 Trap" icon="💡">
            <p>
              After blocked ff+4, opponents often try to punish. Their move whiffs due to pushback.
              Your <strong>d+2</strong> catches them pressing and gives a <strong>full combo on counter-hit</strong>.
            </p>
          </KeyConcept>

          <p style={{ marginTop: '12px' }}>
            This isn't a "true" frame trap — you're minus. But it works because opponents 
            don't respect the distance. If they know the matchup and just block, you'll go -7 for free.
            Mix it up.
          </p>
        </Collapsible>

        <Collapsible title="Electric (EWHF) → Follow-up (+5 on block)">
          <p>
            <strong>Electric</strong> is <strong>+5 on block</strong> with pushback. 
            Your opponent can't punish, but the distance limits your options.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>Standing 4</strong> — 13f, becomes 8f effective. CH gives heat engager. <em>High, so risky vs duck.</em></li>
            <li><strong>b+2,1</strong> — 14f safe mid, becomes 9f effective. Consistent and safe.</li>
            <li><strong>f+4</strong> — 16f, becomes 11f effective. Trades with jab but you get CH launch.</li>
            <li><strong>Sidestep</strong> — Bait their whiff, then launch.</li>
          </ul>

          <TipBox variant="warning" title="Don't Do Electric After Electric">
            While it looks cool, electric after electric requires frame-perfect execution due to 
            the input time. Use b+2,1 or standing 4 instead — much more consistent.
          </TipBox>
        </Collapsible>

        <Collapsible title="db+4 on hit → Follow-up (+3 on hit)">
          <p>
            <strong>db+4</strong> is <strong>+3 on hit</strong>. This is huge — you landed a chunky low 
            AND you're plus.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>Best follow-ups:</strong></p>
          <ul>
            <li><strong>f+4</strong> — 16f CH launcher, becomes 13f effective. Trades with jab, you get full combo.</li>
            <li><strong>Standing 4</strong> — 13f, becomes 10f effective. Beats jab clean.</li>
            <li><strong>1+2</strong> — 13f heat engager if you want to activate.</li>
          </ul>

          <KeyConcept title="The db+4 Situation" icon="⚡">
            <p>
              If they jab after db+4 and you do <strong>f+4</strong>, it trades — but you're +27 on the trade.
              That's a <strong>guaranteed hopkick</strong> for a full combo. They die for pressing.
            </p>
          </KeyConcept>
        </Collapsible>

        <Collapsible title="2,1 on hit → f+4 (+6 on hit)">
          <p>
            <strong>2,1</strong> is <strong>+6 on hit</strong>. Your opponent blocked the jab string? 
            Time to fish for counter-hits.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>The Setup:</strong></p>
          <ul>
            <li><strong>f+4</strong> — 16f CH launcher, becomes 10f effective. Beats jab, full combo on CH.</li>
            <li><strong>EWHF</strong> — If you have the execution, beats everything except high crush.</li>
          </ul>

          <p style={{ marginTop: '12px' }}>
            This is one of Jin's best situations. Land 2,1 → f+4. If they press anything, they die.
            If they block, you're only -8 (safe).
          </p>
        </Collapsible>
      </Section>

      <Section title="Mental Frame Traps">
        <KeyConcept title="What Are Mental Frames?" icon="🧠">
          <p>
            <strong>Mental frames</strong> exist because your strings have extensions that your opponent 
            knows about. They block expecting the extension, even though you're technically minus.
          </p>
          <p style={{ marginTop: '12px' }}>
            You're not <em>actually</em> plus — but they <em>think</em> they need to block.
          </p>
        </KeyConcept>

        <Collapsible title="2,1,4 Mental Frame Trap" defaultOpen>
          <p>
            <strong>2,1</strong> is <strong>-3 on block</strong>. Technically their turn.
            But 2,1 has a delayable <strong>4</strong> extension that's a CH knockdown.
          </p>
          
          <p style={{ marginTop: '12px' }}><strong>The Mind Game:</strong></p>
          <ol>
            <li>Do <strong>2,1,4</strong> — they mash, they get hit and knocked down</li>
            <li>They start blocking the 4 — now you can stop at <strong>2,1</strong> and mixup</li>
            <li>Stop at 2,1, do <strong>d+4</strong> or <strong>throw</strong> — they were blocking for the 4</li>
            <li>They start mashing to stop your mixup — go back to doing <strong>2,1,4</strong></li>
          </ol>

          <TipBox variant="tip" title="The 2,1,4~4 Option">
            <strong>2,1,4~4</strong> changes the last hit to a low sweep. Mix this in when they're 
            conditioned to block the mid. It's not launch punishable anymore in Season 2.
          </TipBox>
        </Collapsible>

        <TipBox variant="warning" title="Mental Frames at Low Ranks">
          At low ranks, opponents mash regardless. Don't bother with mental frame games — 
          just do your strings and frame traps. They'll press buttons and die.
          Mental frames matter more at higher levels where opponents actually respect extensions.
        </TipBox>
      </Section>

      <Section title="The 'Do Nothing' Technique">
        <KeyConcept title="Why Doing Nothing Works" icon="⏸️">
          <p>
            After a plus frame move, you have options: frame trap, mixup, or <strong>do nothing</strong>.
          </p>
          <p style={{ marginTop: '12px' }}>
            If you do nothing, your opponent might think "it's my turn now" and press a button.
            Then you frame trap them. They die for being impatient.
          </p>
        </KeyConcept>

        <p><strong>The Pattern:</strong></p>
        <ol>
          <li>Do plus frame move (2,1, db+4, etc.)</li>
          <li><strong>Do nothing</strong> — just block</li>
          <li>They press a button thinking you gave up your turn</li>
          <li>Next time, do the <strong>frame trap</strong> — they die</li>
        </ol>

        <p style={{ marginTop: '16px' }}>
          This is incredibly effective from beginner ranks through tournament play. 
          Alternating between "do nothing" and "frame trap" makes your pressure unpredictable 
          while staying completely safe.
        </p>

        <TipBox variant="tip" title="Watch Pro Jin Players">
          High-level Jin players do 2,1 over and over, mixing in "do nothing" and the 4 extension.
          The opponent has to guess when to press. When they guess wrong, they eat a full combo.
        </TipBox>
      </Section>

      <Section title="Quick Reference">
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)' }}>
                <th style={{ padding: '12px 8px', textAlign: 'left' }}>Setup Move</th>
                <th style={{ padding: '12px 8px', textAlign: 'left' }}>Frames</th>
                <th style={{ padding: '12px 8px', textAlign: 'left' }}>Best Follow-up</th>
                <th style={{ padding: '12px 8px', textAlign: 'left' }}>Reward</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>1,2,3 (block)</td>
                <td style={{ padding: '10px 8px' }}>0</td>
                <td style={{ padding: '10px 8px' }}>uf+2 or 2,1</td>
                <td style={{ padding: '10px 8px' }}>CH knockdown / pressure</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>ff+3,1 (block)</td>
                <td style={{ padding: '10px 8px' }}>+1</td>
                <td style={{ padding: '10px 8px' }}>2,1 or uf+2</td>
                <td style={{ padding: '10px 8px' }}>Pressure / CH knockdown</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>Electric (block)</td>
                <td style={{ padding: '10px 8px' }}>+5</td>
                <td style={{ padding: '10px 8px' }}>b+2,1 or standing 4</td>
                <td style={{ padding: '10px 8px' }}>Safe mid / CH heat engager</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>db+4 (hit)</td>
                <td style={{ padding: '10px 8px' }}>+3</td>
                <td style={{ padding: '10px 8px' }}>f+4</td>
                <td style={{ padding: '10px 8px' }}>CH launch (full combo)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '10px 8px' }}>2,1 (hit)</td>
                <td style={{ padding: '10px 8px' }}>+6</td>
                <td style={{ padding: '10px 8px' }}>f+4</td>
                <td style={{ padding: '10px 8px' }}>CH launch (full combo)</td>
              </tr>
              <tr>
                <td style={{ padding: '10px 8px' }}>ff+4 (block)</td>
                <td style={{ padding: '10px 8px' }}>-7 (pushback)</td>
                <td style={{ padding: '10px 8px' }}>d+2</td>
                <td style={{ padding: '10px 8px' }}>CH launch (full combo)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Putting It Together">
        <KeyConcept title="Jin's Pressure Gameplan" icon="🎯">
          <ol>
            <li><strong>Land 2,1 or db+4</strong> — Get your plus frames</li>
            <li><strong>Mix "do nothing" and frame traps</strong> — Condition them to respect</li>
            <li><strong>When they freeze</strong> — Go for mixups (throw, low, mid)</li>
            <li><strong>When they mash</strong> — Frame trap with f+4 for full combo</li>
            <li><strong>Repeat</strong> — Jin's pressure is a loop</li>
          </ol>
        </KeyConcept>

        <p>
          Frame traps are how Jin converts small advantages into big damage. 
          Every db+4 that hits is a potential 70+ damage combo if they press the wrong button.
          That threat alone makes opponents respect your pressure.
        </p>
      </Section>
    </Chapter>
  )
}
