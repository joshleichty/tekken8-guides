import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter16({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={16}
      title="Defense & Power Crush"
      intro="Jack has multiple power crush options and armor through Gamma Howl. This chapter covers how to defend and escape pressure."
      onPrevious={() => goToChapter(15)}
      onNext={() => goToChapter(17)}
      nextLabel="Complete Jack"
    >
      <Section title="Jack's Defensive Profile">
        <p>
          Jack has <span className="highlight-secondary">some defensive weaknesses</span> — 
          his i10 option is punishable, his hitbox is large, and his movement is limited. 
          But he has <span className="highlight">excellent power crush options</span>.
        </p>

        <KeyConcept title="Defensive Strengths & Weaknesses" icon="🛡️">
          <p><strong>Strengths:</strong></p>
          <ul>
            <li>Multiple power crush options</li>
            <li>GMH armor is faster than i10 buttons</li>
            <li>Safe power crush (ub+1+2 is -9)</li>
            <li>Homing power crush</li>
          </ul>
          <p style={{ marginTop: '12px' }}><strong>Weaknesses:</strong></p>
          <ul>
            <li>f+2 (i10) is -12 on block</li>
            <li>Large hitbox makes evasion difficult</li>
            <li>Poor sidestep</li>
            <li>No true panic launcher</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Power Crush Options">
        <SubSection title="ub+1+2 — The Safe Power Crush">
          <MoveCard character="jack-8"
            move={{
              input: 'ub+1+2',
              hitLevel: ['h'],
              damage: '30',
              startup: 'i20',
              onBlock: '-9',
              onHit: '+23d',
              tags: ['High', 'Power Crush', 'Homing', 'Safe', 'Wall Splat'],
              description: 'Your best power crush. Safe, homing, wall splats.',
              notes: [
                'Power crush frames 7+',
                'Full circle tracking — no sidestep',
                '-9 on block is completely safe',
                'Half chip damage when absorbing',
                'Wall splats for combo'
              ]
            }}
          />

          <TipBox variant="tip" title="The Go-To Armor">
            ub+1+2 is <span className="highlight">safe on block</span>. For a power crush, 
            this is rare. Use it when you need to armor through pressure without risking 
            launch punishment.
          </TipBox>
        </SubSection>

        <SubSection title="f+1+2 — Close Range Armor">
          <MoveCard character="jack-8"
            move={{
              input: 'f+1+2',
              hitLevel: ['m', 'm'],
              damage: '12, 20',
              startup: 'i27',
              onBlock: '-12',
              onHit: '+32d (+6)',
              tags: ['Mid', 'Mid', 'Power Crush', 'Balcony Break'],
              description: 'Power crush at close range. -12 but has uses.',
              notes: [
                'Power crush frames 7+',
                'Half chip when absorbing',
                'Balcony break'
              ]
            }}
          />
        </SubSection>

        <SubSection title="3+4 (GMH) — The Superior Armor">
          <MoveCard character="jack-8"
            move={{
              input: '3+4',
              hitLevel: ['-'],
              damage: '-',
              startup: 'i-',
              onBlock: '-',
              onHit: '-',
              tags: ['Stance', 'Power Crush', 'Superior Armor'],
              description: 'Enter GMH with power crush. Better than regular armor.',
              notes: [
                'Power crush frames 7-22',
                'Half chip damage when absorbing',
                'Low profiles at startup',
                'Absorbing grants Gamma Charge',
                'Heals 10 HP on first absorb'
              ]
            }}
          />

          <KeyConcept title="Why GMH Armor is Better" icon="💪">
            <ul>
              <li><strong>Faster than buttons</strong> — Armor starts frame 7</li>
              <li><strong>Half chip</strong> — Take 50% less chip damage</li>
              <li><strong>Heals you</strong> — First absorb recovers 10 HP</li>
              <li><strong>Gives GMC</strong> — Powered-up moves after absorbing</li>
              <li><strong>Low profiles</strong> — Can evade some attacks</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <SubSection title="GMH 3+4 — Stance Power Crush">
          <MoveCard character="jack-8"
            move={{
              input: 'GMH 3+4',
              hitLevel: ['sm'],
              damage: '20',
              startup: 'i20',
              onBlock: '-13',
              onHit: '+40d (-18)',
              tags: ['SM', 'Power Crush', 'Heat Engager'],
              description: 'Power crush from within GMH. Second layer of armor.',
              notes: [
                'Power crush frames 6+',
                'Heat engager',
                'Use when GMH mixup fails'
              ]
            }}
          />
        </SubSection>
      </Section>

      <Section title="Defensive Options by Situation">
        <SubSection title="When Minus but Not Launch Punishable">
          <KeyConcept title="-7 to -9 Situations" icon="⚠️">
            <p>You're minus but can't get launched. Options:</p>
            <ul>
              <li><strong>3+4 (GMH)</strong> — Armor through their attack</li>
              <li><strong>Block</strong> — Let them have their turn</li>
              <li><strong>Sidestep</strong> — If you read a linear move</li>
              <li><strong>Backdash</strong> — Create space</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <SubSection title="Under Heavy Pressure">
          <KeyConcept title="Escaping Pressure" icon="🚨">
            <ul>
              <li><strong>ub+1+2</strong> — Safe power crush, homing</li>
              <li><strong>3+4 → GMC 1</strong> — Armor → safe launcher</li>
              <li><strong>Block and wait</strong> — Wait for unsafe move</li>
              <li><strong>Low parry</strong> — If they're using lows in pressure</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <SubSection title="Wakeup Options">
          <p>
            When getting up from the ground:
          </p>
          <ul>
            <li><strong>Stay down</strong> — Sometimes safest option</li>
            <li><strong>Tech roll</strong> — Get up and block</li>
            <li><strong>Getup 4</strong> — Low sweep, risky</li>
            <li><strong>Getup 3</strong> — Mid kick</li>
            <li><strong>Spring kick</strong> — Very risky but can work</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="f+2 as Panic Option">
        <MoveCard character="jack-8"
          move={{
            input: 'f+2',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i10',
            onBlock: '-12',
            onHit: '+5',
            onCH: '+32a (+24)',
            tags: ['High', 'i10', 'Panic Move', 'CH Splat'],
            description: 'Your fastest move. -12 on block is the cost of speed.',
            notes: [
              'Only i10 option outside Heat',
              'CH splats → f,f+4 guaranteed',
              'Risky but necessary sometimes'
            ]
          }}
        showVideo
        />

        <TipBox variant="warning" title="Use Sparingly">
          f+2 is <span className="highlight-secondary">-12 on block</span>. Use it when 
          you absolutely need i10 speed. In Heat, Heat Smash is the better i10 option.
        </TipBox>
      </Section>

      <Section title="Low Parry">
        <p>
          Jack's low parry leads to decent damage:
        </p>

        <KeyConcept title="Low Parry Combo" icon="🦵">
          <p><strong>Low Parry → df+1 → b+3,2 D → GMH f+1 T! → 2,1,uf+1+2 → GMH f+1</strong></p>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>~48 damage</p>
        </KeyConcept>

        <TipBox variant="tip" title="When to Parry">
          Low parry against characters with predictable lows in their pressure strings. 
          It's a better option than blocking when you read the low coming.
        </TipBox>
      </Section>

      <Section title="Dealing with Specific Pressure">
        <SubSection title="Against Rushdown">
          <ul>
            <li><strong>ub+1+2</strong> — Safe armor catches their offense</li>
            <li><strong>3+4 armor</strong> — GMH absorbs and punishes</li>
            <li><strong>Backdash</strong> — Create your preferred range</li>
          </ul>
        </SubSection>

        <SubSection title="Against Sidestep Happy Players">
          <ul>
            <li><strong>1+2</strong> — Homing mid</li>
            <li><strong>ub+1+2</strong> — Full circle tracking</li>
            <li><strong>GMH 1</strong> — Homing from stance</li>
          </ul>
        </SubSection>

        <SubSection title="Against Throw Happy Players">
          <ul>
            <li><strong>Throw break on reaction</strong> — Practice the breaks</li>
            <li><strong>Duck and launch</strong> — df+2 if you read the throw</li>
            <li><strong>Backdash</strong> — Create space, throw whiffs</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Chapter Summary">
        <p>Jack's defensive tools:</p>
        <ul>
          <li><strong>ub+1+2</strong> — Safe (-9) power crush, homing, wall splat</li>
          <li><strong>3+4 (GMH)</strong> — Superior armor, heals, gives GMC</li>
          <li><strong>f+1+2</strong> — Close range power crush (-12)</li>
          <li><strong>f+2</strong> — i10 panic option (-12)</li>
          <li><strong>Heat Smash</strong> — i10 panic in Heat (50 damage)</li>
          <li><strong>Low parry</strong> — ~48 damage conversion</li>
        </ul>
        <p>
          Next chapter brings everything together into the complete Jack gameplan.
        </p>
      </Section>
    </Chapter>
  )
}
