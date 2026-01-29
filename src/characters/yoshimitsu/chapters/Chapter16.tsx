import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter16({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={16}
      title="Complete Yoshimitsu"
      intro="You've learned the pieces. Now let's assemble them into a complete gameplan. This chapter covers how Yoshimitsu plays at each stage of a round, adaptation strategies, and the mindset that wins."
      onPrevious={() => goToChapter(15)}
      hasNext={false}
    >
      <Section title="The Yoshimitsu Philosophy">
        <p>
          Yoshimitsu is a <span className="highlight">defensive aggressor</span>. You control space, 
          make opponents scared to press, and capitalize when they make mistakes. Unlike rushdown 
          characters, you don't force your way in — you make opponents come to you.
        </p>

        <KeyConcept title="Core Principles" icon="🗡️">
          <ol>
            <li><strong>Control mid-range</strong> — df+2, d+2 series, FC df+4</li>
            <li><strong>Make them scared</strong> — Flash and Spin threats stop offense</li>
            <li><strong>Punish mistakes hard</strong> — Every whiff is a combo opportunity</li>
            <li><strong>Dominate knockdowns</strong> — Your oki is best in Tekken</li>
            <li><strong>Wall = Victory</strong> — Get them to the wall, win the round</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Round Phases">
        <KeyConcept title="Round Start" icon="🏁">
          <ul>
            <li><code>df+1</code> — Safe mid check, see what they do</li>
            <li><code>df+2</code> — Long range keepout</li>
            <li><code>Backdash</code> — Information gathering</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Feel out your opponent. Don't commit to gimmicks early. Establish respect with fundamentals.
          </p>
        </KeyConcept>

        <KeyConcept title="Neutral Game" icon="⚔️">
          <ol>
            <li><strong>Keepout with df+2, d+2</strong> — Control mid-range</li>
            <li><strong>Poke with df+1, df+4</strong> — Check their movement</li>
            <li><strong>FC df+4</strong> — CH launcher threat from crouch</li>
            <li><strong>b+2,2</strong> — Whiff punish everything</li>
            <li><strong>Work towards wall</strong> — Slow, methodical pressure</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="Pressure/Advantage" icon="🔥">
          <p>When you have momentum:</p>
          <ol>
            <li><code>3,1 → DGF</code> — Plus frames into stance pressure</li>
            <li><code>Running 3 → DGF</code> — Approach into mixups</li>
            <li><code>db+4</code> — Condition them to crouch</li>
            <li><code>Throws</code> — Against passive opponents</li>
            <li><code>Heat activation</code> — When you have life lead</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="Defense/Disadvantage" icon="🛡️">
          <p>When they're pressing you:</p>
          <ol>
            <li><strong>Block and wait</strong> — Look for punish opportunities</li>
            <li><strong>Flash</strong> — When you read their attack timing</li>
            <li><strong>Manji Spin</strong> — Escape pressure, reposition</li>
            <li><strong>uf+3</strong> — Hopkick for low crush reads</li>
            <li><strong>df+4</strong> — i12 mid to interrupt</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="Wall Pressure" icon="🧱">
          <ol>
            <li><code>3,1 → DGF</code> — Your primary wall tool</li>
            <li><code>DGF f+1+2</code> — Chip, minus but Flash frame trap</li>
            <li><code>DGF 4</code> — Wall splat for combo</li>
            <li><code>DGF 3+4</code> — Unbreakable throw</li>
            <li><code>KIN pressure</code> — Long range wall pokes</li>
          </ol>
        </KeyConcept>

        <KeyConcept title="Oki Pressure" icon="💀">
          <ol>
            <li><code>FC df+1</code> — Unblockable if they stay down</li>
            <li><code>db+4 / d+3</code> — Catch tech rolls</li>
            <li><code>Block</code> — Beat get-up kicks, then punish</li>
            <li><code>Throw</code> — Against standing recoveries</li>
            <li><code>DGF mixups</code> — Enter stance for guessing games</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Adapting to Opponents">
        <KeyConcept title="Against Aggressive Players" icon="🔥">
          <ul>
            <li><strong>Flash frame traps</strong> — b+1 (+1) → Flash catches mashing</li>
            <li><strong>Backdash → df+2</strong> — Make them whiff, launch</li>
            <li><strong>Manji Spin</strong> — Escape their pressure, reposition</li>
            <li><strong>df+4</strong> — i12 mid interrupts most pressure</li>
            <li>Let them kill themselves on your defense</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Against Turtles" icon="🐢">
          <ul>
            <li><strong>db+4 chip</strong> — Force reactions with lows</li>
            <li><strong>3,1 → DGF pressure</strong> — Make them deal with mixups</li>
            <li><strong>Throws</strong> — They can't block throws</li>
            <li><strong>DGF 3+4</strong> — Unbreakable throw at wall</li>
            <li><strong>Work towards wall</strong> — They can't turtle forever</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Against Sidestepping" icon="🔄">
          <ul>
            <li><strong>uf+4</strong> — Homing mid, tracks both directions</li>
            <li><strong>KIN f+2</strong> — Homing from Kincho</li>
            <li><strong>KIN 4</strong> — Homing, neutral on block</li>
            <li><strong>Delay your attacks</strong> — Catch movement with timing</li>
            <li>Most Yoshi moves track left better</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Against Knowledge Players" icon="📚">
          <p>When they know the matchup:</p>
          <ul>
            <li><strong>Play more fundamental</strong> — Less gimmicks, more df+1/df+2</li>
            <li><strong>Mix your stance entries</strong> — Don't always 3,1 → DGF</li>
            <li><strong>Vary oki timing</strong> — They'll adapt to patterns</li>
            <li><strong>Use less-common moves</strong> — They can't lab everything</li>
            <li><strong>Respect their punishes</strong> — Don't throw unsafe moves</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="When Ahead vs Behind">
        <KeyConcept title="With Life Lead" icon="📈">
          <ul>
            <li><strong>Stay patient</strong> — You don't need to take risks</li>
            <li><strong>Keepout harder</strong> — df+2, d+2, make them approach</li>
            <li><strong>Activate Heat</strong> — Plus frame pressure is safe</li>
            <li><strong>Chip them down</strong> — DGF f+1+2, sword moves do chip</li>
            <li><strong>Timeout is fine</strong> — You're winning</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="When Behind" icon="📉">
          <ul>
            <li><strong>Save Heat</strong> — You'll need it for comeback</li>
            <li><strong>Go for big reads</strong> — Flash, FC df+4, launchers</li>
            <li><strong>Force the wall</strong> — One wall combo can flip the round</li>
            <li><strong>Don't panic</strong> — Yoshimitsu can kill from any deficit</li>
            <li><strong>Oki is your friend</strong> — Every knockdown extends your comeback</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Mental Game">
        <TipBox variant="tip" title="Fear is Your Weapon">
          Half of Yoshimitsu's power is in your opponent's head. Once they've been Flashed, 
          they stop pressing. Once they've eaten FC df+1, they stop lying down. The THREAT 
          of your options is often stronger than the options themselves.
        </TipBox>

        <TipBox variant="tip" title="Conditioning">
          <ol>
            <li>Show them db+4 → they start crouch blocking</li>
            <li>Now df+2 becomes a free launch</li>
            <li>Show them 3,1 → DGF f+1+2 → they start ducking</li>
            <li>Now DGF 4 wall splats</li>
          </ol>
          Everything is about conditioning. Use less-effective options to set up more-effective ones.
        </TipBox>

        <TipBox variant="warning" title="Avoid the Gimmick Trap">
          New Yoshimitsu players rely on gimmicks — random spins, unblockables, confusing stances. 
          This works at low ranks but teaches nothing. Your fundamentals carry you. Gimmicks are 
          seasoning, not the meal.
        </TipBox>
      </Section>

      <Section title="Quick Reference Card">
        <Collapsible title="Essential Moves" icon="📋" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Pokes</p>
            <ul style={{ marginBottom: '16px' }}>
              <li><code>1,1</code> — 10f punish</li>
              <li><code>df+1</code> — Main mid poke</li>
              <li><code>df+4</code> — i12 fastest mid</li>
              <li><code>db+4</code> — Main low poke</li>
            </ul>

            <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Keepout</p>
            <ul style={{ marginBottom: '16px' }}>
              <li><code>df+2</code> — Safe launcher</li>
              <li><code>d+2 series</code> — Long range sword</li>
              <li><code>FC df+4</code> — CH launcher low</li>
              <li><code>uf+4</code> — Homing mid</li>
            </ul>

            <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Panic Tools</p>
            <ul style={{ marginBottom: '16px' }}>
              <li><code>1+4</code> — Flash (i6)</li>
              <li><code>b+3/b+4</code> — Manji Spin</li>
            </ul>

            <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Pressure</p>
            <ul>
              <li><code>3,1</code> — Heat engager, +7 DGF</li>
              <li><code>f,f,F+3</code> — Plus on block</li>
              <li><code>b+2,2</code> — 14f punish, Heat engager</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="BnB Combo" icon="📋">
          <div style={{ marginTop: '12px' }}>
            <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px' }}>
              df+2 → d+2,2~B → df+1,2,1 T! → NSS 1+4 → dash → d+2,2
            </p>
          </div>
        </Collapsible>

        <Collapsible title="Punishment" icon="📋">
          <div style={{ marginTop: '12px' }}>
            <ul style={{ fontFamily: 'monospace' }}>
              <li>-10: 1,1</li>
              <li>-14: b+2,2</li>
              <li>-15: df+2 (launcher)</li>
              <li>ws-11: ws+4</li>
              <li>ws-15: ws+2,1</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="You're Ready">
        <p>
          Congratulations — you now have a complete Yoshimitsu toolkit. You understand:
        </p>

        <ul>
          <li>Pokes and keepout with df+1, df+2, and the d+2 series</li>
          <li>Low game with db+4 and db+3,3 series</li>
          <li>Launchers and full combos from every starter</li>
          <li>Flash and Manji Spin — Yoshimitsu's signature defense</li>
          <li>DGF and KIN stances for pressure</li>
          <li>Punishment at every frame level</li>
          <li>Heat system and when to activate</li>
          <li>Wall game and oki that no one escapes</li>
          <li>The complete gameplan for any situation</li>
        </ul>

        <p style={{ marginTop: '16px' }}>
          Now go into ranked and put it into practice. Remember: you'll lose matches while 
          learning. That's part of the process. Every loss teaches you something about the 
          matchup, about your habits, about what works and what doesn't.
        </p>

        <TipBox variant="tip" title="The Journey">
          Yoshimitsu has incredible depth. You'll discover new tech, new setups, new ways to 
          confuse opponents for years. That's what makes him special. The rabbit hole is infinite.
        </TipBox>

        <p style={{ marginTop: '16px' }}>
          <strong>May your Flash be swift and your spins never make you dizzy.</strong> 🗡️
        </p>
      </Section>
    </Chapter>
  )
}
