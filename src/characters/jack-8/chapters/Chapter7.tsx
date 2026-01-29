import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  StanceBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Gamma Howl Defense"
      intro="Gamma Howl (GMH) is Jack's new stance in Tekken 8. This chapter covers its defensive applications — the power crush armor that makes Jack terrifying to pressure."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="GMH Offense"
    >
      <Section title="What is Gamma Howl?">
        <p>
          Gamma Howl (3+4) is Jack's new stance where he <span className="highlight">literally 
          flexes on you</span>. It has power crush properties, meaning it absorbs mid and high 
          attacks. But it's better than regular power crush in several ways.
        </p>

        <StanceBox
          title="Gamma Howl (GMH)"
          input="3+4"
          description="Jack's signature stance with power crush armor. Can absorb attacks to charge up moves."
          properties={[
            'Power crush frames 7~22',
            'Takes half chip damage when absorbing',
            'Low profiles at startup',
            'Absorbing attacks grants Gamma Charge (GMC)',
            'GMC buffs GMH 1 and GMH 2',
          ]}
          notes={[
            'Can transition from many moves by holding D (down)',
            'Also accessible via ws3+4',
          ]}
        />
      </Section>

      <Section title="Why GMH Armor is Superior">
        <p>
          Regular power crush moves have armor. GMH armor is <span className="highlight">better 
          than regular armor</span> for multiple reasons:
        </p>

        <KeyConcept title="GMH vs Regular Power Crush" icon="🛡️">
          <ul>
            <li><strong>Half chip damage</strong> — You take 50% less chip when absorbing</li>
            <li><strong>Low profiles at startup</strong> — Can evade some mids/highs</li>
            <li><strong>Faster than your buttons</strong> — Armor starts frame 7, faster than f+2 (i10)</li>
            <li><strong>Grants Gamma Charge</strong> — Powered-up moves after absorbing</li>
            <li><strong>Heals when absorbing</strong> — First hit recovers 10 HP, subsequent 5 HP each</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Key Insight">
          When you're minus and can't interrupt with buttons (gaps smaller than 10 frames), 
          <strong>GMH armor goes live faster</strong>. You can armor through situations where 
          your i10 f+2 would lose.
        </TipBox>
      </Section>

      <Section title="Gamma Charge (GMC)">
        <p>
          When you absorb an attack in GMH, you gain <span className="highlight">Gamma Charge</span>. 
          This powers up two specific moves:
        </p>

        <SubSection title="GMC 1 — Safe Homing Launcher">
          <MoveCard character="jack-8"
            move={{
              input: 'GMC 1',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i22',
              onBlock: '-6',
              onHit: '+73a (+57)',
              tags: ['Mid', 'Homing', 'Launcher', 'Safe', 'GMC Only'],
              description: 'Charged version of GMH 1. Now SAFE (-6) and launches on hit.',
              notes: [
                'Without charge: -10, just knockdown',
                'With charge: -6, FULL LAUNCH',
                'Homing — catches sidesteps',
                'Only available after absorbing attack or in Heat'
              ]
            }}
          />
        </SubSection>

        <SubSection title="GMC 2 — Guard Break">
          <MoveCard character="jack-8"
            move={{
              input: 'GMC 2',
              hitLevel: ['h'],
              damage: '42',
              startup: 'i20',
              onBlock: '+11 (Guard Break)',
              onHit: '+31a (+5)',
              tags: ['High', 'Guard Break', 'Tornado', 'GMC Only'],
              description: 'Charged version of GMH 2. Guard break gives guaranteed damage!',
              notes: [
                'GUARD BREAK on block — they can\'t block the next move',
                'Guaranteed 2,3 after guard break (19 damage)',
                'In Heat: guaranteed Heat Smash (36 damage)',
                'It\'s high, so can be ducked'
              ]
            }}
          />
          
          <TipBox variant="warning" title="High Move">
            GMC 2 is a <span className="highlight-secondary">high</span>. Good players will 
            duck it. But when it connects or is blocked, they pay the price. Mix with GMC 1 
            (mid) to keep them honest.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Defensive GMH Usage">
        <p>
          The primary defensive use of GMH is <span className="highlight">armoring through 
          pressure you can't interrupt</span>.
        </p>

        <KeyConcept title="When to Use GMH Defensively" icon="🛡️">
          <ul>
            <li><strong>When minus but not launch punishable</strong> — Armor their follow-up</li>
            <li><strong>Against predictable strings</strong> — Absorb the string, punish after</li>
            <li><strong>When they're plus but you read an attack</strong> — GMH beats their button</li>
            <li><strong>To escape pressure loops</strong> — Armor out and reset</li>
          </ul>
        </KeyConcept>

        <SubSection title="Example Scenario">
          <p>
            You block a move that leaves you at -7. They go for a jab (i10). If you press 
            your fastest button (f+2, i10), you lose — 10 &gt; 7 means their jab hits first.
          </p>
          <p>
            But GMH armor starts at frame 7. <strong>You can armor through their jab</strong>, 
            absorb the hit, gain Gamma Charge, and punish with GMC 1 or GMC 2.
          </p>
        </SubSection>

        <TipBox variant="tip" title="The Math">
          If the gap is 7 frames or larger, GMH armor goes live in time. This means any 
          situation where you're -7 to -9, you can <strong>armor instead of blocking</strong> 
          if you read they'll press.
        </TipBox>
      </Section>

      <Section title="Entering GMH">
        <p>
          You can enter Gamma Howl from:
        </p>

        <KeyConcept title="GMH Transitions" icon="➡️">
          <ul>
            <li><strong>3+4</strong> — Manual entry with power crush</li>
            <li><strong>ws3+4</strong> — From crouch</li>
            <li><strong>f+4,1 D (hold down)</strong> — After Jackhammer</li>
            <li><strong>f+3+4 D</strong> — After headbutt</li>
            <li><strong>b+3,2 D</strong> — After string</li>
            <li><strong>4,3 D</strong> — After kick string</li>
            <li><strong>uf+3</strong> — Jumping low automatically enters GMH</li>
          </ul>
        </KeyConcept>

        <SubSection title="Best Defensive Entry">
          <p>
            For pure defensive use, <strong>raw 3+4</strong> is usually best. It has the 
            power crush frames immediately. Transitioning from moves works better offensively 
            (covered in next chapter).
          </p>
        </SubSection>
      </Section>

      <Section title="GMH Defensive Options">
        <SubSection title="After Absorbing an Attack">
          <p>Once you absorb an attack and have Gamma Charge:</p>
          <ul>
            <li><strong>GMC 1</strong> — Safe mid launcher. Your default punish.</li>
            <li><strong>GMC 2</strong> — Guard break high. Forces damage if blocked.</li>
            <li><strong>Wait</strong> — Sometimes the best option is to block their follow-up.</li>
          </ul>
        </SubSection>

        <SubSection title="If Nothing Happens">
          <p>
            You entered GMH expecting an attack, but they didn't press:
          </p>
          <ul>
            <li><strong>GMH 4</strong> — Fast high kick, +4 on block, heat engager</li>
            <li><strong>GMH 3</strong> — Mid stomp, +4 on block</li>
            <li><strong>Exit stance</strong> — Backdash or sidestep out</li>
          </ul>
        </SubSection>

        <TipBox variant="warning" title="Don't Get Thrown">
          GMH armor doesn't stop throws. If opponents read your GMH, they can throw you 
          for free. Don't become predictable with stance entry.
        </TipBox>
      </Section>

      <Section title="GMH 3+4 — The Panic Armor">
        <MoveCard character="jack-8"
          move={{
            input: 'GMH 3+4',
            hitLevel: ['sm'],
            damage: '20',
            startup: 'i20',
            onBlock: '-13',
            onHit: '+40d (-18)',
            tags: ['SM', 'Heat Engager', 'Power Crush', 'Panic Option'],
            description: 'Power crush move FROM GMH. Use when stance pressure goes wrong.',
            notes: [
              'Has its own power crush frames (6+)',
              'Heat engager',
              'Safer than it looks due to pushback',
              'Use when GMH mixup fails'
            ]
          }}
        />

        <SubSection title="The Second Layer">
          <p>
            If you enter GMH and they start pressing to challenge your stance, 
            <span className="highlight">GMH 3+4 armors through that too</span>. It's armor 
            inside armor — another layer of power crush.
          </p>
        </SubSection>
      </Section>

      <Section title="Chapter Summary">
        <p>GMH defensive uses:</p>
        <ul>
          <li><strong>3+4</strong> — Enter stance with power crush (frames 7-22)</li>
          <li><strong>Half chip damage</strong> — Take less damage when absorbing</li>
          <li><strong>Gamma Charge</strong> — Absorbing powers up GMH 1 and GMH 2</li>
          <li><strong>GMC 1</strong> — Safe (-6) mid launcher after absorbing</li>
          <li><strong>GMC 2</strong> — Guard break high, forces damage</li>
          <li><strong>Use when minus</strong> — Armor through situations you can't interrupt</li>
        </ul>
        <p>
          Next chapter covers GMH offense — how to use the stance to pressure opponents.
        </p>
      </Section>
    </Chapter>
  )
}
