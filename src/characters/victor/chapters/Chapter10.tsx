import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Wall Combos & Oki"
      intro="Victor's wall game is where he truly shines. Devastating wall combos, strong okizeme (wake-up pressure), and the IAI stance 50/50 make Victor's wall pressure among the scariest in Tekken 8."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Learn Punishment"
    >
      <Section title="Standard Wall Combos">
        <ComboCard
          title="Standard Wall Splat"
          starter="Wall Splat"
          route={['4,3,2 (delay the 2)']}
          damage="~35-40"
          difficulty="beginner"
          notes={[
            'Delay the 2 slightly for grounded hit',
            'Simple and consistent',
            'Works from most wall splats'
          ]}
        />

        <KeyConcept title="Why Delay the 2?" icon="⏱️">
          <p>
            The <code>4,3,2</code> string does more damage if you delay the final 2. 
            The delay lets the opponent fall slightly, and the 2 hits them grounded for 
            extra damage.
          </p>
        </KeyConcept>

        <ComboCard
          title="Alternative Wall Combo"
          starter="Wall Splat"
          route={['df+3,4,2']}
          damage="~32"
          difficulty="beginner"
          notes={[
            'Simpler timing than 4,3,2',
            'Good when you\'re not sure about spacing'
          ]}
        />

        <ComboCard
          title="Jab Starter Wall Combo"
          starter="Wall Splat"
          route={['1', 'f+4,2~d (IAI oki)']}
          damage="~28 + oki"
          difficulty="beginner"
          notes={[
            'Less damage but sets up IAI oki',
            'Jab stabilizes the splat',
            'f+4,2~d puts you in IAI for pressure'
          ]}
        />
      </Section>

      <Section title="Wall Combos with Tornado">
        <ComboCard
          title="Tornado at Wall"
          starter="Wall Splat (T! available)"
          route={['uf+1,1 T!', 'f+2,2,1,1']}
          damage="~45"
          difficulty="intermediate"
          notes={[
            'uf+1,1 uses tornado at the wall',
            'f+2,2,1,1 is the max damage follow-up',
            'Only use if you haven\'t used T! in the combo'
          ]}
        />

        <ComboCard
          title="Alternative Tornado Wall"
          starter="Wall Splat (T! available)"
          route={['f,f+2 T!', '4,3,2 (delay)']}
          damage="~42"
          difficulty="intermediate"
          notes={[
            'f,f+2 as tornado at wall',
            'Standard 4,3,2 ender'
          ]}
        />

        <ComboCard
          title="Tornado Wall with IAI Oki"
          starter="Wall Splat (T! available)"
          route={['d+1+2 T!', '1', 'f+4,2~d (IAI oki)']}
          damage="~38 + oki"
          difficulty="intermediate"
          notes={[
            'd+1+2 tornado at wall',
            'Sets up IAI stance oki'
          ]}
        />
      </Section>

      <Section title="IAI Wall Oki Setup">
        <KeyConcept title="The IAI Wall Setup" icon="🧱">
          <p>After certain wall combos, you can end in IAI stance for devastating oki:</p>
          <ol>
            <li>Wall splat → <code>1 → f+4,2~d</code> (puts you in IAI)</li>
            <li>Now you're in IAI with opponent on the ground</li>
            <li>Mix between IAI.d+2, IAI.2, and IAI.d+1+2</li>
          </ol>
        </KeyConcept>

        <ComboCard
          title="IAI Oki Setup"
          starter="Wall Splat"
          route={['2,1~f', 'PRF.2,2 (IAI oki)']}
          damage="~25 + oki"
          difficulty="intermediate"
          notes={[
            '2,1~f to PRF, then PRF.2,2 to IAI',
            'You\'re now in IAI stance at the wall',
            'Opponent must guess your next move'
          ]}
        />

        <TipBox variant="tip" title="IAI Wall Options">
          From IAI oki at the wall:
          <ul>
            <li><code>IAI.4</code> — Check if they try to attack</li>
            <li><code>IAI.d+2</code> — Hits grounded, plus on block</li>
            <li><code>IAI.2</code> — Wall splat if they stand</li>
            <li><code>IAI.d+1+2</code> — Low mixup</li>
            <li><code>IAI.3</code> — If they try wake-up attacks</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Okizeme (Wake-up Pressure)">
        <KeyConcept title="Victor's Oki Options" icon="⬇️">
          <ul>
            <li><strong>Grounded hits</strong> — PRF.1, PRF.1+2, IAI.d+2, f+1+2</li>
            <li><strong>Tech roll catch</strong> — f,f,f+2, dash d+2</li>
            <li><strong>Stay down punish</strong> — IAI.d+1, f+1+2</li>
            <li><strong>Wake-up attack punish</strong> — Block → launch</li>
          </ul>
        </KeyConcept>

        <p>
          Victor has excellent oki because many of his moves hit grounded. The key is reading 
          what your opponent wants to do on wake-up.
        </p>
      </Section>

      <Section title="Oki Decision Tree">
        <KeyConcept title="After Knockdown" icon="🎯">
          <ol>
            <li><strong>They stay down</strong> → PRF.1+2 or f+1+2 (hit grounded)</li>
            <li><strong>They tech roll</strong> → Dash up, repeat pressure</li>
            <li><strong>They back roll</strong> → f,f,f+2 catches them</li>
            <li><strong>They wake-up attack</strong> → Block and launch punish</li>
            <li><strong>They quick rise</strong> → IAI mixup or standard pressure</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="After PRF.1+2 Ender">
          If your combo ended with PRF.1+2:
          <ul>
            <li>Opponent stays down → PRF.1+2 again (hits grounded)</li>
            <li>Opponent tries to rise → PRF.1 (low) or PRF.3 (mid)</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Wall Break Combos">
        <ComboCard
          title="Wall Break Route"
          starter="Wall Break"
          route={['f+4,1 (wall break)']}
          damage="Wall break + follow-up"
          notes={[
            'f+4,1 is your main wall break move',
            'After wall break, do shortened combo'
          ]}
        />

        <ComboCard
          title="Post-Wall Break"
          starter="After Wall Break"
          route={['df+4,2', 'IAI.2 T!', 'ender']}
          damage="Varies"
          notes={[
            'Shortened combo after wall break',
            'Still get good damage'
          ]}
        />
      </Section>

      <Section title="Advanced Wall Setups">
        <KeyConcept title="The 50/50 Setup" icon="🎲">
          <p>After any wall combo that ends in IAI (like <code>f+4,2~d</code>):</p>
          <ul>
            <li><code>IAI.d+2</code> on block → +4 in IAI</li>
            <li>Now mix: <code>IAI.2</code> (wall splat) vs <code>IAI.d+1+2</code> (low)</li>
            <li>Both options do massive damage</li>
            <li>Opponent has to guess — and if they guess wrong, they take another combo</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Risk vs Reward">
          IAI.d+1+2 is -29 on block. If they read your low and block, you're getting launched. 
          Only go for it when the round is close or you've conditioned them to block high.
        </TipBox>
      </Section>

      <Collapsible title="Wall Combo Quick Reference" icon="📋">
        <div style={{ marginTop: '12px' }}>
          <p><strong>Standard Wall (35-40 dmg)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            Wall splat → 4,3,2 (delay the 2)
          </p>

          <p><strong>Tornado at Wall (45 dmg)</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            Wall splat → uf+1,1 T! → f+2,2,1,1
          </p>

          <p><strong>IAI Oki Setup</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            Wall splat → 1 → f+4,2~d (IAI) → IAI pressure
          </p>

          <p><strong>Alternative Setup</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '8px', borderRadius: '4px', marginBottom: '12px' }}>
            Wall splat → 2,1~f → PRF.2,2 (IAI) → IAI pressure
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
