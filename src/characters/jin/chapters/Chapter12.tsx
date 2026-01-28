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
      title="Complete Jin"
      intro="You've learned the pieces. Now let's put them together into a complete gameplan. This chapter covers oki, counter-hit fishing, and how Jin plays at each stage of a round."
      onPrevious={() => goToChapter(11)}
      hasNext={false}
    >
      <Section title="Jin's Oki (Wake-up Pressure)">
        <p>
          <span className="highlight">Oki</span> is the pressure you apply when your opponent is 
          knocked down. Jin got significant oki buffs in Tekken 8.
        </p>

        <KeyConcept title="Grounded Hit Moves" icon="⬇️">
          <ul>
            <li><code>d+2</code> — Hits grounded, high crushes. Your main oki tool.</li>
            <li><code>CD.df+1</code> — Flips grounded opponents (must be Electric timing)</li>
            <li><code>ZEN.4</code> — Hits grounded, gives guaranteed d+2 on hit</li>
            <li><code>d+4</code> — Flips grounded opponents, resets situation</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Oki Decision Tree" icon="🎯">
          <p>When opponent is knocked down:</p>
          <ol>
            <li><strong>If they stay down</strong> → <code>d+2</code> or <code>ZEN.4</code></li>
            <li><strong>If they tech roll</strong> → Mix with hellsweep / ff+4 / throws</li>
            <li><strong>If they back roll</strong> → Dash in and repeat pressure</li>
            <li><strong>If they wake-up kick</strong> → Block and launch punish</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Respect Wake-up Options">
          Don't always go for oki. Sometimes just dashing in and blocking is safer, 
          especially if they have rage (rage art on wake-up).
        </TipBox>
      </Section>

      <Section title="Counter-Hit Fishing">
        <p>
          Jin has excellent <span className="highlight">counter-hit tools</span>. The goal is to 
          make opponents scared to press buttons.
        </p>

        <KeyConcept title="Top Counter-Hit Moves" icon="⚡">
          <ul>
            <li><code>f+4</code> — The star. CH launches for full combo.</li>
            <li><code>4</code> — Magic 4. Homing, CH gives guaranteed df+1,4.</li>
            <li><code>df+1,4</code> — Second hit CH knocks down.</li>
            <li><code>2,1,4</code> — Third hit CH wall splats.</li>
            <li><code>b+4</code> — CH gives bigger knockdown.</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="How to Fish for Counter-Hits" icon="🎣">
          <ol>
            <li><strong>Establish respect</strong> — Land jabs, show you'll pressure</li>
            <li><strong>Create uncertainty</strong> — Mix timing, make them guess</li>
            <li><strong>Use plus frames</strong> — After db+4 (+3), f+4 catches mashers</li>
            <li><strong>Delay your offense</strong> — Small gaps bait them to press</li>
            <li><strong>Profit</strong> — CH f+4 = 75+ damage</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Frame Traps">
          Classic trap: <code>1 (+1)</code> → <code>f+4 (i16)</code>. If they press anything 
          slower than i14 after the jab, f+4 counter-hits them.
        </TipBox>
      </Section>

      <Section title="The Complete Gameplan">
        <KeyConcept title="Round Start" icon="🏁">
          <ul>
            <li><code>f+4</code> — Catches aggressive openers</li>
            <li><code>df+1</code> — Safe mid check</li>
            <li><code>Backdash → see what they do</code> — Information</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Feel out your opponent early. Don't commit to big moves until you know their tendencies.
          </p>
        </KeyConcept>

        <KeyConcept title="Neutral Game" icon="⚔️">
          <ol>
            <li><strong>Poke with jabs and df+1</strong> — Establish your turn</li>
            <li><strong>Fish with f+4</strong> — Catch them pressing</li>
            <li><strong>Mix lows</strong> — db+4 for plus frames, d+4 for speed</li>
            <li><strong>Look for whiff punish</strong> — EWHF or ff+2</li>
            <li><strong>Work towards wall</strong> — That's where Jin dominates</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="Wall Pressure" icon="🧱">
          <ol>
            <li><strong>Get to ZEN</strong> — Via ff+3~f, 2,4~f, or b+3+4</li>
            <li><strong>Dive kick (ZEN.3+4)</strong> — Plus on block, chip damage</li>
            <li><strong>Mix ZEN.4</strong> — Mid option, catches duckers</li>
            <li><strong>ZEN.1,2</strong> — Wall splat for heat or combos</li>
            <li><strong>Electric from BRS</strong> — Uninterruptible pressure</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            The wall is Jin's domain. Get there and don't let them escape.
          </p>
        </KeyConcept>

        <KeyConcept title="When Behind" icon="📉">
          <ul>
            <li><strong>Save Heat</strong> — You'll need it for comeback</li>
            <li><strong>Go for big reads</strong> — CH f+4, parry, hellsweep</li>
            <li><strong>Don't panic</strong> — Jin can kill from 30% life lead deficit</li>
            <li><strong>Get to wall</strong> — One wall carry combo can flip the round</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="When Ahead" icon="📈">
          <ul>
            <li><strong>Stay patient</strong> — You don't need to take risks</li>
            <li><strong>Poke them out</strong> — Chip damage with safe moves</li>
            <li><strong>Use your life lead</strong> — Force them to approach</li>
            <li><strong>Punish their desperation</strong> — They'll get risky</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Adapting to Opponents">
        <KeyConcept title="Against Aggressive Players" icon="🔥">
          <ul>
            <li>Use f+4 to fish for counter-hits</li>
            <li>Parry their predictable pressure</li>
            <li>Backdash and whiff punish with EWHF</li>
            <li>Let them kill themselves on your defense</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Against Turtles" icon="🐢">
          <ul>
            <li>Use lows to force reactions (db+4, d+4)</li>
            <li>Work towards wall — they can't run forever</li>
            <li>Mix throws — Jin has command grabs</li>
            <li>Use ZEN chip damage</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Against Sidestepping" icon="🔄">
          <ul>
            <li>Use homing moves: 4 (magic 4), ZEN.3</li>
            <li>Delay your attacks to catch movement</li>
            <li>Mix hellsweep (tracks well)</li>
            <li>Electric tracks both ways</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Final Tips">
        <TipBox variant="tip" title="Jin is a Marathon, Not a Sprint">
          Jin has depth. You won't master him quickly, and that's okay. Focus on fundamentals 
          first, then layer in advanced tools as they become comfortable. Every pro Jin 
          player started with jabs and df+1.
        </TipBox>

        <TipBox variant="tip" title="Record Your Matches">
          Watch your replays. Look for:
          <ul>
            <li>Missed punishes</li>
            <li>Dropped combos</li>
            <li>Patterns you're doing that got punished</li>
            <li>Situations where you didn't know what to do</li>
          </ul>
          Then practice those specific scenarios.
        </TipBox>

        <TipBox variant="tip" title="Have Fun">
          Jin is the main character for a reason. He's satisfying to play, has iconic moves, 
          and can win in any style. Enjoy the journey of mastering him.
        </TipBox>
      </Section>

      <Collapsible title="Quick Reference Card" icon="📋" defaultOpen>
        <div style={{ marginTop: '12px' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>Essential Moves</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>1</code> / <code>1,2</code> — Jabs</li>
            <li><code>df+1</code> — Mid poke</li>
            <li><code>f+4</code> — CH launcher</li>
            <li><code>db+4</code> — Plus low</li>
            <li><code>2,4</code> — Punish + ZEN</li>
            <li><code>EWHF</code> — Everything</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>Punishment</p>
          <ul style={{ marginBottom: '16px' }}>
            <li>-10: <code>2,4</code></li>
            <li>-12: <code>b+1,2</code></li>
            <li>-13: <code>1+2</code></li>
            <li>-14: <code>f+1+2</code></li>
            <li>-15: <code>d+3+4</code></li>
            <li>ws-14: <code>ws2</code></li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>Heat Engagers</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>ff+2</code> — Best, safe</li>
            <li><code>1+2</code> — 13f punish</li>
            <li><code>df+4</code> — Zero risk</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>Bread and Butter Combo</p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px' }}>
            uf+4 → bf+2,3~f → ZEN.u+1 T! → b+3~f → ZEN.1,3
          </p>
        </div>
      </Collapsible>

      <Collapsible title="Command Grabs Reference" icon="🤼" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <ul>
            <li><code>qcb+1+3</code> — 1 break. Leaves them face-up.</li>
            <li><code>df+2+4</code> — 2 break. Quick command grab.</li>
            <li><code>uf+1+2</code> — 1+2 break. Floor breaks.</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Mix these in against turtles. Many players can't break command grabs.
          </p>
        </div>
      </Collapsible>

      <Collapsible title="Matchup Quick Tips" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Brief notes on common matchups:
          </p>

          <p><strong>vs Kazuya</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Respect his 50/50 from crouch dash</li>
            <li>Your f+4 outranges his</li>
            <li>Parry df+1,4 series</li>
          </ul>

          <p><strong>vs Law</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Duck highs in his strings</li>
            <li>Sidestep right vs Dragon Tail</li>
            <li>Punish slides with ws2</li>
          </ul>

          <p><strong>vs King</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Learn throw breaks (1, 2, 1+2)</li>
            <li>Don't let him get close</li>
            <li>f+4 controls mid-range well</li>
          </ul>

          <p><strong>vs Paul</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Punish Deathfist with ff+2 or Electric</li>
            <li>Respect his 50/50 mixups</li>
            <li>Stay patient — he wants you to panic</li>
          </ul>

          <p><strong>vs Bryan</strong></p>
          <ul>
            <li>Don't press into his keepout (b+1, f+4)</li>
            <li>Punish Snake Edge with ws2</li>
            <li>Force him to the wall where you dominate</li>
          </ul>
        </div>
      </Collapsible>

      <Section title="You're Ready">
        <p>
          Congratulations — you now have a complete Jin toolkit. You understand:
        </p>

        <ul>
          <li>Pokes and pressure with jabs, df+1, and f+4</li>
          <li>Combo routes from every starter</li>
          <li>The Electric and how to use it (or Breaking Step alternatives)</li>
          <li>ZEN stance and wall pressure</li>
          <li>Punishment for every frame range</li>
          <li>Heat system and when to engage</li>
          <li>Defense with parry and movement</li>
          <li>The complete gameplan for any situation</li>
        </ul>

        <p style={{ marginTop: '16px' }}>
          Now go into ranked and put it into practice. Remember: you'll lose matches while 
          learning. That's part of the process. Every loss teaches you something. Every win 
          proves your improvement.
        </p>

        <p>
          <strong>Good luck. Make the Mishima bloodline proud.</strong> ⚡
        </p>
      </Section>
    </Chapter>
  )
}
