import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Flash (1+4)"
      intro="Flash is the fastest move in Tekken at i6 (or i8 in No Sword Stance). It's not a parry — it's an attack where the hitbox is inside Yoshimitsu. Master Flash and you master Yoshimitsu's defense."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Learn Manji Spin"
    >
      <Section title="Understanding Flash">
        <MoveCard character="yoshimitsu"
          move={{
            input: '1+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i6-9 (i8-11 in NSS)',
            onBlock: '-20',
            onHit: '+14c',
            tags: ['Mid', 'FASTEST IN TEKKEN', 'Panic Tool', 'Chip Damage'],
            description: 'The fastest move in Tekken. Not a parry — the hitbox is inside Yoshimitsu. Punishes anything that extends into his body.',
          }}
          showVideo
        />

        <p>
          Flash is <span className="highlight">NOT a parry</span>. It's an attack where the hitbox 
          exists inside Yoshimitsu's body. When an opponent's limb extends into your hitbox, Flash 
          hits them. This is why some moves "don't get Flashed" — their limb doesn't enter your body.
        </p>

        <KeyConcept title="How Flash Works" icon="⚡">
          <ul>
            <li><strong>i6 startup</strong> — Faster than any other move in Tekken</li>
            <li><strong>Hitbox inside Yoshi</strong> — Must connect with extending limbs</li>
            <li><strong>NOT a parry</strong> — It's an attack, not a defensive option</li>
            <li><strong>-20 on block</strong> — Very punishable if they block</li>
            <li><strong>+14c on hit</strong> — Guaranteed b+2,2 follow-up</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Flash is Intuitive, Not Reactive">
          You can't react to most moves with Flash. You have to predict when they'll attack and 
          input Flash at the right time. It's a read-based tool, not a reaction tool.
        </TipBox>
      </Section>

      <Section title="Flash Follow-ups">
        <p>
          On hit, Flash gives you <span className="highlight">+14c</span>. These follow-ups are guaranteed:
        </p>

        <KeyConcept title="Guaranteed After Flash" icon="🎯">
          <ul>
            <li><code>b+2,2</code> — Your standard follow-up. Heat engager in Heat.</li>
            <li><code>f,n,d,df+2</code> — Crouch dash 2, launches on counter-hit</li>
            <li><code>f,n,d,df+1</code> — Crouch dash launcher (risky, but max damage)</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            In Heat, <code>b+2,2</code> after Flash becomes a launcher for full combo.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Flash Combo">
          In Heat: Flash → b+2,2 (launches) → full combo. This is devastating. Opponents who 
          mash buttons during your Heat get launched for 70+ damage.
        </TipBox>
      </Section>

      <Section title="When to Use Flash">
        <KeyConcept title="Good Flash Situations" icon="✓">
          <ul>
            <li><strong>After blocking -2 to +1 moves</strong> — They press a button, Flash beats it</li>
            <li><strong>b+1 frame trap</strong> — b+1 is +1, Flash beats their response</li>
            <li><strong>During string gaps</strong> — Flash between hits of slow strings</li>
            <li><strong>Against predictable pressure</strong> — When you know they'll attack</li>
            <li><strong>Punishing "safe" moves</strong> — Some -9 moves can be Flash punished</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Bad Flash Situations" icon="✗">
          <ul>
            <li><strong>Random neutral</strong> — They block, you're -20</li>
            <li><strong>Against lows</strong> — Flash is a mid, doesn't beat lows</li>
            <li><strong>When minus</strong> — At -5 or worse, they can block and punish</li>
            <li><strong>Against moves with short hitboxes</strong> — Some moves don't reach inside you</li>
            <li><strong>From far range</strong> — Flash has almost no range</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Flash Punishes">
        <p>
          Some moves that are "safe" (-9 or better) can be <span className="highlight">punished with Flash</span> 
          because the opponent's recovery animation keeps their hitbox extended.
        </p>

        <Collapsible title="Notable Flash Punishes" icon="📋">
          <div style={{ marginTop: '12px' }}>
            <p style={{ marginBottom: '12px' }}>
              These are examples — there are many more. Test in practice mode.
            </p>
            <ul>
              <li><strong>Alisa's f,f+4</strong> — Safe on block but Flash punishable</li>
              <li><strong>Many running 3s</strong> — Plus on block but Flash catches recovery</li>
              <li><strong>Extended jab strings</strong> — Flash between hits</li>
              <li><strong>-9 moves at close range</strong> — Some can be Flashed</li>
            </ul>
            <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
              Flash punishes depend on spacing and the specific move. When you find one, remember it.
            </p>
          </div>
        </Collapsible>

        <TipBox variant="tip" title="Wall Flash">
          When your back is to the wall, opponents get pushed closer to you on block. This makes 
          more moves Flash punishable because their hitbox stays in your body longer.
        </TipBox>
      </Section>

      <Section title="NSS Flash (NSS 1+4)">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'NSS.1+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i8-11',
            onBlock: '-20',
            onHit: '+14, +64a (Tailspin)',
            tags: ['Mid', 'Tailspin', 'Combo Ender'],
            description: 'Flash in No Sword Stance. Slower (i8) but gives Tailspin on hit. Essential combo tool.',
          }}
          showVideo
        />

        <p>
          In NSS, Flash is <span className="highlight">i8 instead of i6</span>, but gains Tailspin 
          property. This is why NSS 1+4 is used in combos — it extends combos after Tornado.
        </p>

        <KeyConcept title="NSS Flash Properties" icon="🔄">
          <ul>
            <li><strong>i8 startup</strong> — Slower than regular Flash</li>
            <li><strong>Tailspin on hit</strong> — Extends combos</li>
            <li><strong>More chip damage</strong> — 4 chip vs regular Flash</li>
            <li><strong>Heals Yoshimitsu</strong> — Recovers health on hit</li>
            <li><strong>Combo essential</strong> — Used in BnB combos</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Flash in Stances">
        <p>
          Flash is available in several stances:
        </p>

        <KeyConcept title="Stance Flash Options" icon="📋">
          <ul>
            <li><strong>KIN 1+4</strong> — Flash from Kincho (i10-13)</li>
            <li><strong>MED 1+4</strong> — Flash from Meditation (i6-9)</li>
            <li><strong>NSS KIN 1+4</strong> — NSS version from Kincho</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            KIN Flash and MED Flash let you punish people attacking into your stances. When they 
            see you in stance and try to jab, Flash catches them.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Flash Mindgame">
        <p>
          Flash's true power isn't just the damage — it's the <span className="highlight">threat</span>. 
          When opponents know you can Flash, they stop pressing buttons. This gives you freedom.
        </p>

        <KeyConcept title="The Psychological Effect" icon="🧠">
          <ol>
            <li><strong>Show them Flash</strong> — Land it once or twice</li>
            <li><strong>They stop pressing</strong> — Now they're scared to attack</li>
            <li><strong>Free offense</strong> — You can do what you want</li>
            <li><strong>Mix it up</strong> — Sometimes Flash, sometimes don't</li>
            <li><strong>They can't predict</strong> — Your defense becomes unpredictable</li>
          </ol>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Over-Flash">
          If you Flash constantly, opponents adapt. They'll bait Flash and launch you for -20. 
          Use Flash sparingly but effectively. The threat is often more valuable than the move itself.
        </TipBox>
      </Section>

      <Section title="Practice Drills">
        <KeyConcept title="Flash Training" icon="🎮">
          <ol>
            <li><strong>Record jab strings</strong> — Practice Flashing between hits</li>
            <li><strong>b+1 → Flash setup</strong> — Practice the frame trap</li>
            <li><strong>Flash punishes</strong> — Record "safe" moves, find Flash punishes</li>
            <li><strong>Flash → b+2,2</strong> — Make the follow-up muscle memory</li>
            <li><strong>Heat Flash combos</strong> — Practice Flash → b+2,2 → combo</li>
          </ol>
        </KeyConcept>
      </Section>

      <Collapsible title="Flash Frame Data" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Version</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Startup</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Hit</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>1+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i6-9</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-20</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+14c</td>
                <td style={{ padding: '8px' }}>Standard Flash</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>NSS 1+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i8-11</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-20</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+14, +64a</td>
                <td style={{ padding: '8px' }}>Tailspin, heals</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>KIN 1+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>i10-13</td>
                <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-20</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>+14c</td>
                <td style={{ padding: '8px' }}>From Kincho</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
