import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Manji Spin (b+3 / b+4)"
      intro="Manji Spin lets Yoshimitsu delete mixups, escape pressure, and reposition. It evades almost everything in the game — even some homing moves. The cost? A little bit of your health."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Learn Dragonfly Stance"
    >
      <Section title="Understanding Manji Spin">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'b+3 or b+4',
            hitLevel: ['Evasive'],
            damage: '8 self-damage',
            startup: 'Variable',
            onBlock: '—',
            onHit: '—',
            tags: ['Evasive', 'Panic Tool', 'Self-Damage', 'Repositions'],
            description: 'Yoshimitsu spins backward, evading almost every move in the game. Costs 8 HP per spin.',
          }}
          showVideo
        />

        <p>
          Manji Spin is <span className="highlight">Yoshimitsu's signature evasion tool</span>. 
          When you spin, you move backward and to the side, making most attacks whiff completely. 
          It costs 8 HP per spin, but the positioning advantage is often worth it.
        </p>

        <KeyConcept title="Why Manji Spin is Broken" icon="🌀">
          <ul>
            <li><strong>Evades almost everything</strong> — Highs, mids, even some homing moves</li>
            <li><strong>Repositions you</strong> — Can switch wall position</li>
            <li><strong>Deletes mixups</strong> — Opponents' 50/50s just whiff</li>
            <li><strong>Multiple spins</strong> — Can keep pressing 3/4 to continue spinning</li>
            <li><strong>Back Turn</strong> — Can perform BT moves from the spin</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Self-Damage">
          Each spin costs 8 HP. Multiple spins add up. Don't kill yourself! Be mindful of your 
          health when spinning, especially at low HP.
        </TipBox>
      </Section>

      <Section title="Spin Applications">
        <KeyConcept title="When to Spin" icon="✓">
          <ul>
            <li><strong>Under pressure</strong> — When their mixup is about to land</li>
            <li><strong>Escaping the wall</strong> — Spin to switch positions</li>
            <li><strong>Against linear pressure</strong> — Strings that don't track</li>
            <li><strong>50/50 deletion</strong> — Their high/low mixups whiff</li>
            <li><strong>As a callout</strong> — When you predict a specific attack</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Spin Follow-ups" icon="🔄">
          <p>After spinning, you're in Back Turn. You can do:</p>
          <ul>
            <li><code>b+3,3</code> — Continue spinning (another 10 self-damage)</li>
            <li><code>BT 1</code> — Quick high elbow from back turn</li>
            <li><code>BT d+1</code> — Low attack from back turn</li>
            <li><code>Just block</code> — Recover normally</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Position Switching">
        <p>
          One of Manji Spin's best uses is <span className="highlight">switching positions</span>. 
          When your back is to the wall, spin to make the opponent's back face the wall instead.
        </p>

        <KeyConcept title="Wall Position Reset" icon="🧱">
          <ol>
            <li><strong>Your back is at wall</strong> — Bad position for you</li>
            <li><strong>Spin (b+3)</strong> — Move around them</li>
            <li><strong>Positions switch</strong> — Now THEIR back is to wall</li>
            <li><strong>Continue pressure</strong> — You're in advantage now</li>
          </ol>
        </KeyConcept>

        <p>
          This also works to avoid balcony breaks. About to get knocked off? Spin to reposition 
          away from the balcony edge.
        </p>

        <TipBox variant="tip" title="Practice Position Switching">
          Go to Practice Mode at a wall stage. Put yourself against the wall and practice spinning 
          to switch positions. This is a crucial Yoshimitsu skill.
        </TipBox>
      </Section>

      <Section title="Spin vs Yoshimitsu's Sidestep">
        <p>
          Yoshimitsu has <span className="highlight">one of the worst sidesteps in Tekken</span>. 
          His sidestep consistency is about as bad as the Bears. Manji Spin compensates for this.
        </p>

        <KeyConcept title="Why Spin Beats Sidestep" icon="⚖️">
          <ul>
            <li><strong>Sidestep</strong> — Inconsistent, gets clipped by many moves</li>
            <li><strong>Manji Spin</strong> — Evades almost everything, repositions</li>
            <li><strong>Cost/benefit</strong> — 8 HP is worth avoiding a 70+ damage combo</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            When other characters would sidestep, Yoshimitsu often just spins instead.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Multiple Spin Game">
        <p>
          You can keep pressing 3 or 4 to continue spinning. This lets you evade strings and 
          create massive distance. But be careful — too many spins and you get dizzy.
        </p>

        <KeyConcept title="Spin Dizzy Mechanic" icon="😵">
          <ul>
            <li><strong>5-6 spins</strong> — Safe zone, no dizzy</li>
            <li><strong>7+ spins</strong> — Risk of getting dizzy and falling</li>
            <li><strong>Dizzy state</strong> — Yoshimitsu falls over, free punish</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Don't mash spins mindlessly. 2-3 spins is usually enough for most situations.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Spin from Strings">
        <p>
          Several moves can cancel into Manji Spin:
        </p>

        <KeyConcept title="Spin Transitions" icon="📋">
          <ul>
            <li><code>b+1 → b+3/b+4</code> — After b+1 poke</li>
            <li><code>b+1,1 → b+3/b+4</code> — After spin jab string</li>
            <li><code>ws+1,1 → b+3/b+4</code> — After while standing string</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            These transitions let you create space and avoid punishment after strings.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Flash + Spin Synergy">
        <p>
          Flash and Spin work together as your <span className="highlight">defensive duo</span>:
        </p>

        <KeyConcept title="Defense Decision Tree" icon="🛡️">
          <ol>
            <li><strong>If they're attacking close range</strong> → Flash</li>
            <li><strong>If they're applying pressure from mid-range</strong> → Spin</li>
            <li><strong>If it's a linear string</strong> → Spin through it</li>
            <li><strong>If it's a frame trap</strong> → Flash beats it</li>
            <li><strong>If unsure</strong> → Block and wait for information</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Yoshi Defense Package">
          Good Yoshimitsu players switch between Flash, Spin, and blocking. Opponents can't 
          predict which one you'll use. This unpredictability is your defensive strength.
        </TipBox>
      </Section>

      <Section title="When NOT to Spin">
        <KeyConcept title="Bad Spin Situations" icon="✗">
          <ul>
            <li><strong>Against homing moves</strong> — Some homings track spin</li>
            <li><strong>When very low on health</strong> — Self-damage might kill you</li>
            <li><strong>Against throws</strong> — Throws catch spin</li>
            <li><strong>Against quick lows</strong> — Some lows catch you mid-spin</li>
            <li><strong>When it's predictable</strong> — Opponents can bait spin and punish</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Over-Spin">
          Like Flash, spinning too much makes you predictable. Good opponents will bait your spin 
          with delayed attacks and punish your recovery. Mix spin with blocking and Flash.
        </TipBox>
      </Section>

      <Section title="Practice Drills">
        <KeyConcept title="Spin Training" icon="🎮">
          <ol>
            <li><strong>Record pressure strings</strong> — Practice spinning through them</li>
            <li><strong>Wall position switching</strong> — Practice at wall stages</li>
            <li><strong>Spin → BT moves</strong> — Practice follow-ups from back turn</li>
            <li><strong>Health management</strong> — Notice the self-damage adding up</li>
            <li><strong>Mix with Flash</strong> — Alternate between defensive tools</li>
          </ol>
        </KeyConcept>
      </Section>

      <Collapsible title="Spin Reference" icon="📊">
        <div style={{ marginTop: '12px' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>Spin Costs</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>b+3</code> — 8 self-damage</li>
            <li><code>b+3,3</code> — 10 additional (18 total)</li>
            <li><code>b+3,3,3</code> — 5 additional (23 total)</li>
            <li>Each additional spin: 5 damage</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>Back Turn Follow-ups</p>
          <ul style={{ marginBottom: '16px' }}>
            <li><code>BT 1</code> — Quick elbow, -3 on block</li>
            <li><code>BT 2</code> — High poke into extensions</li>
            <li><code>BT d+1</code> — Low attack</li>
            <li><code>BT 3</code> — Mid floor break</li>
          </ul>

          <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '12px' }}>Spin Properties</p>
          <ul>
            <li>Evades highs and most mids</li>
            <li>Moves backward and to the side</li>
            <li>Some homing moves can still track</li>
            <li>Throws will catch you</li>
            <li>Can be performed from Back Turn</li>
          </ul>
        </div>
      </Collapsible>
    </Chapter>
  )
}
