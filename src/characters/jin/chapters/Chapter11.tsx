import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={14}
      title="Defense & Parry"
      intro="Good Jin players don't just attack — they know when to block, when to move, and when to parry. Jin has one of the best parries in Tekken. Here's how to use it."
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
      nextLabel="Complete Jin"
    >
      <Section title="Jin's Parry">
        <MoveCard
          move={{
            input: 'b+1+3 or b+2+4',
            hitLevel: ['Parry'],
            damage: '—',
            startup: 'Active frames 3-9',
            onBlock: '—',
            onHit: 'Varies by parried move',
            tags: ['Parry', 'High/Mid', 'Defensive Tool'],
            description: 'Parries high and mid attacks. One of the best parries in Tekken.',
          }}
          videoId="b+1+3"
          showVideo
        />

        <p>
          Jin's parry can catch <span className="highlight">highs and mids</span>. When you 
          successfully parry, the opponent's attack is deflected and you get a punish window.
        </p>

        <KeyConcept title="What Can/Can't Be Parried" icon="🛡️">
          <p><strong>CAN Parry:</strong></p>
          <ul>
            <li>Most high attacks</li>
            <li>Most mid attacks</li>
            <li>Even some strings mid-string</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>CANNOT Parry:</strong></p>
          <ul>
            <li>Lows (obviously)</li>
            <li>Throws</li>
            <li>Unblockables</li>
            <li>Some specific "unparryable" moves</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Tight Timing">
          The parry window is only <strong>7 frames</strong> (frames 3-9). This is stricter 
          than Tekken 7. You need good reads, not reactions. Parry when you predict an attack.
        </TipBox>
      </Section>

      <Section title="Parry Follow-ups">
        <p>
          After a successful parry, you have frame advantage. What you can punish depends on 
          the move you parried:
        </p>

        <KeyConcept title="After Parry" icon="⚡">
          <ul>
            <li><code>ff+2</code> — Guaranteed vs most attacks</li>
            <li><code>ff+4</code> — Longer range option</li>
            <li><code>EWHF</code> — If you're confident in execution</li>
          </ul>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            The best follow-up depends on what you parried. Test in practice mode.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Parry Setups">
          Good times to go for parry:
          <ul>
            <li>Against predictable strings you've seen before</li>
            <li>When opponent is finishing a blocked string</li>
            <li>On wake-up when you predict a mid attack</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="The Punch Parry (b+1+2)">
        <MoveCard
          move={{
            input: 'b+1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i23-24',
            onBlock: '-12',
            onHit: '+6',
            tags: ['Mid', 'Punch Sabaki', 'Risky'],
            description: 'Sabaki that catches punches (1 and 2 button attacks). Gives guaranteed ff+2 on success.',
          }}
          showVideo
        />

        <p>
          b+1+2 is a <span className="highlight">punch sabaki</span> — it automatically parries 
          punch attacks and hits the opponent. When it connects as a sabaki, you get a guaranteed 
          <code>ff+2</code> follow-up.
        </p>

        <TipBox variant="warning" title="High Risk">
          If your read is wrong and they don't punch, you're -12 on block. Use sparingly 
          against opponents who rely heavily on jab strings.
        </TipBox>
      </Section>

      <Section title="Panic Moves">
        <p>
          When you're under heavy pressure and need to escape, these are your panic options:
        </p>

        <MoveCard
          move={{
            input: 'uf+4',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15-17',
            onBlock: '-13',
            onHit: 'Launch',
            tags: ['Mid', 'Hopkick', 'Low Crush', 'Panic Move'],
            description: 'Classic hopkick. Crushes lows, but -13 on block.',
          }}
          showVideo
        />

        <MoveCard
          move={{
            input: 'ZEN.u+1',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i14-16',
            onBlock: '-16',
            onHit: 'T! Launch',
            tags: ['Mid', 'Launcher', 'Evasive', 'Panic Move'],
            description: 'Samsara. Evasive launcher from ZEN. Low crushes and can evade some mids.',
          }}
          showVideo
        />

        <MoveCard
          move={{
            input: 'uf+2',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i15-16',
            onBlock: '-10 to -9',
            onHit: '+6 to +7',
            onCH: 'Knockdown',
            tags: ['Mid', 'Evasive', 'Sidestep Built-in'],
            description: 'Has built-in sidestep. Good for escaping linear pressure. Knockdown on CH.',
          }}
          showVideo
        />

        <MoveCard
          move={{
            input: '4~3',
            hitLevel: ['m'],
            damage: '27',
            startup: 'i24-34',
            onBlock: '-11 to -2',
            onHit: 'Spike',
            tags: ['Mid', 'Low Crush', 'Evasive'],
            description: 'Weird jump move. Low crushes and leaves you grounded. Situational escape.',
          }}
          showVideo
        />

        <KeyConcept title="When to Panic Move" icon="🚨">
          <ul>
            <li><strong>uf+4</strong> — When you predict a low</li>
            <li><strong>ZEN.u+1</strong> — From ZEN when pressured</li>
            <li><strong>uf+2</strong> — Against linear pressure</li>
            <li><strong>Power Crush</strong> — When they're committing to mids/highs</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            Don't panic move randomly. Good opponents will bait them and launch you.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Movement Defense">
        <p>
          Sometimes the best defense is not being there. Jin's movement is <strong>below average</strong>, 
          but proper spacing still works.
        </p>

        <KeyConcept title="Movement Options" icon="🏃">
          <ul>
            <li><strong>Backdash</strong> — Create space, make attacks whiff</li>
            <li><strong>Sidestep Right</strong> — Jin's stronger side vs most linear moves</li>
            <li><strong>Sidestep Left</strong> — Against specific moves that track right</li>
            <li><strong>Crouch</strong> — Against high-heavy opponents</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Sidestep into Electric">
          A common Jin tactic: sidestep their whiff → EWHF punish. Practice this. It's 
          satisfying and does huge damage.
        </TipBox>

        <KeyConcept title="What to Do After Backdash" icon="📏">
          <p>After backdashing to create space:</p>
          <ul>
            <li><code>f+4</code> — Catch them approaching</li>
            <li><code>EWHF</code> — If they whiffed</li>
            <li><code>ff+2</code> — Safe approach if nothing to punish</li>
            <li><code>Keep backdashing</code> — If they're still pressing</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Defensive Power Crush">
        <MoveCard
          move={{
            input: 'd+1',
            hitLevel: ['m', 't'],
            damage: '21, 10',
            startup: 'i21',
            onBlock: '-13 (or -9 after absorb)',
            onHit: 'Throw',
            tags: ['Mid', 'Power Crush', 'Throw Follow-up'],
            description: 'Jin\'s power crush. Absorbs mid/high attacks and transitions to a throw.',
          }}
          showVideo
        />

        <MoveCard
          move={{
            input: 'ZEN.2',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i21-22',
            onBlock: '-5',
            onHit: 'Knockdown',
            tags: ['High', 'Power Crush', 'Heat Engager'],
            description: 'Power crush from ZEN. Absorbs attacks and can activate Heat.',
          }}
          showVideo
        />

        <p>
          Power crushes absorb mid and high attacks during their armor window. Use them when 
          you predict the opponent will attack and you want to trade.
        </p>

        <TipBox variant="warning" title="Power Crush Loses to Lows">
          Power crushes get hit by lows and throws. Don't rely on them if your opponent 
          knows to mix in lows.
        </TipBox>
      </Section>

      <Collapsible title="Common Parry Setups" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Situations where parry is strong:
          </p>

          <p><strong>After blocking jab strings</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Many characters have mid enders after 1,2</li>
            <li>If you know the string, parry the mid</li>
          </ul>

          <p><strong>Against predictable pressure</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Opponent always does df+1 after approach? Parry it.</li>
            <li>They love magic 4 on defense? Parry it.</li>
          </ul>

          <p><strong>On wake-up</strong></p>
          <ul style={{ marginBottom: '12px' }}>
            <li>If they always meaty with a mid, parry on wake-up</li>
            <li>Very risky but very rewarding</li>
          </ul>

          <p><strong>Specific matchup knowledge</strong></p>
          <ul>
            <li>Kazuya's df+1,4 — parry the 4</li>
            <li>Paul's qcb+3,2 — parry the 2</li>
            <li>Practice against characters you face often</li>
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="Defense Decision Tree" icon="🌳" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            When under pressure:
          </p>

          <ol>
            <li style={{ marginBottom: '12px' }}>
              <strong>Can you just block?</strong> → Block and wait for your turn.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Are they using plus moves?</strong> → Sidestep or backdash.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Can you predict their attack?</strong> → Parry or power crush.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Do they use lots of lows?</strong> → Hopkick (uf+4) or low parry.
            </li>
            <li>
              <strong>Nothing working?</strong> → Just block and punish what you can.
            </li>
          </ol>

          <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
            Blocking is always an option. Don't feel pressured to parry or panic move. 
            Sometimes just blocking and waiting is the right play.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
