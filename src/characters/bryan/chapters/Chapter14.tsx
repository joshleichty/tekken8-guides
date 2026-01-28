import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter14({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={14}
      title="Snake Eyes Install"
      intro="Snake Eyes is Bryan's unique mechanic — an install state that powers up specific moves. This chapter teaches you how to get Snake Eyes and use it effectively."
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
      nextLabel="Learn Defense"
    >
      <Section title="What is Snake Eyes?">
        <p>
          <span className="highlight">Snake Eyes (SNE)</span> is an install state Bryan can 
          achieve through certain moves. While active, Bryan gains access to powered-up 
          versions of some moves with extra hits and damage.
        </p>

        <KeyConcept title="Snake Eyes Basics" icon="🐍">
          <ul>
            <li><strong>Gained by:</strong> Hitting certain moves or completing taunt</li>
            <li><strong>Lost by:</strong> Using a Snake Eyes move</li>
            <li><strong>In Heat:</strong> Permanent Snake Eyes (doesn't deplete)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="How to Get Snake Eyes">
        <SubSection title="Moves That Give Snake Eyes">
          <MoveCard
            move={{
              input: 'f+2,1,4',
              hitLevel: ['m', 'm', 'm'],
              damage: '10, 12, 20',
              startup: 'i15',
              onBlock: '-13',
              onHit: '+3a',
              tags: ['Mid', 'Snake Eyes Gain'],
              description: 'Grants Snake Eyes on hit (with 1+2 input).',
            }}
          />
          <MoveCard
            move={{
              input: 'd+3,2',
              hitLevel: ['l', 'h'],
              damage: '10, 22',
              startup: 'i16',
              onBlock: '-7',
              onHit: '+35a (+9)',
              tags: ['Low', 'High', 'Snake Eyes Gain'],
              description: 'Grants Snake Eyes on hit. Second hit is duckable.',
            }}
          />
          <MoveCard
            move={{
              input: 'uf+3+4',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i16-17',
              onBlock: '-7',
              onHit: '+8a',
              tags: ['Mid', 'Tornado', 'Snake Eyes Gain'],
              description: 'Tornado move that gives Snake Eyes. Used in combos.',
            }}
          />
          <MoveCard
            move={{
              input: 'uf+1',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i20-21',
              onBlock: '-13',
              onHit: '+15a',
              tags: ['Mid', 'Power Crush', 'Snake Eyes Gain'],
              description: 'Power crush that gives Snake Eyes on hit.',
            }}
          />
          <MoveCard
            move={{
              input: '1+3+4 (Taunt)',
              hitLevel: ['m!'],
              damage: '0',
              startup: 'i28-31',
              onBlock: 'N/A',
              onHit: '+16',
              tags: ['Unblockable', 'Snake Eyes Gain'],
              description: 'Completing taunt gives Snake Eyes (doesn\'t need to hit).',
            }}
          />
        </SubSection>

        <TipBox variant="tip" title="In Combos">
          The easiest way to get Snake Eyes is through <strong>uf+3+4</strong> in combos. 
          This is your Tornado move anyway, so you naturally get Snake Eyes after combos.
        </TipBox>
      </Section>

      <Section title="Snake Eyes Moves">
        <SubSection title="SNE 3+4,2">
          <MoveCard
            move={{
              input: 'SNE 3+4,2',
              hitLevel: ['m', 'm'],
              damage: '20, 20',
              startup: 'i18, i14-15',
              onBlock: '-1',
              onHit: '+25a (+20)',
              tags: ['Mid', 'Consumes SNE', 'Wall Splat'],
              description: 'Natural combo follow-up to 3+4. Only -1 on block!',
              notes: [
                '8% chip on block',
                'Consumes Snake Eyes',
                'Unparryable by traditional parries'
              ]
            }}
          />
          <p>
            This is <span className="highlight">your main Snake Eyes tool</span>. When you 
            land 3+4, you get a free 3+4,2 for massive damage. The 2 extension is only 
            available with Snake Eyes.
          </p>
        </SubSection>

        <SubSection title="SNE 3+4,2 (Charged)">
          <MoveCard
            move={{
              input: 'SNE 3+4,2*',
              hitLevel: ['m', 'M'],
              damage: '20, 30',
              startup: 'i18, i55-56',
              onBlock: '+9g to +10g',
              onHit: '+66a (+50)',
              tags: ['Mid', 'Unblockable', 'Wall Splat'],
              description: 'Charged version is UNBLOCKABLE. Guard breaks on block.',
              notes: [
                'Tornado on hit',
                'Reversal break',
                '12% chip damage',
                'Can be interrupted on reaction'
              ]
            }}
          />
          <TipBox variant="warning" title="Wall Mixup">
            At the wall, you can mix 3+4,2 (fast) with 3+4,2* (charged unblockable). 
            Opponents have to guess. This is one of Bryan's scariest wall tools.
          </TipBox>
        </SubSection>

        <SubSection title="SNE uf+2,2,2,2,2,3">
          <MoveCard
            move={{
              input: 'SNE uf+2,2,2,2,2,3',
              hitLevel: ['m x6'],
              damage: '6, 4, 4, 9, 9, 23',
              startup: 'i13',
              onBlock: '-15',
              onHit: '+3a',
              tags: ['Mid', 'Consumes SNE', 'Extended'],
              description: 'Extended version of uf+2 string. More damage.',
            }}
          />
          <p>
            Use this in wall combos or as a punish when you have Snake Eyes. The extra 
            hits add significant damage.
          </p>
        </SubSection>

        <SubSection title="SNE f+2,1,2,3,2">
          <MoveCard
            move={{
              input: 'SNE f+2,1,2,3,2',
              hitLevel: ['m', 'm', 'm', 'm', 'm'],
              damage: '10, 12, 5, 7, 20',
              startup: 'i15',
              onBlock: '-10',
              onHit: '+25a (-1)',
              tags: ['Mid', 'Consumes SNE', 'Extended'],
              description: 'Extended version of f+2,1,4. Safer at -10.',
            }}
          />
        </SubSection>

        <SubSection title="SNE f,f+1+2">
          <MoveCard
            move={{
              input: 'SNE f,f+1+2',
              hitLevel: ['h'],
              damage: '36',
              startup: 'i13',
              onBlock: '+5',
              onHit: '+33a (+7)',
              tags: ['High', 'Consumes SNE', 'Parry'],
              description: 'Attack reversal that parries mid/high attacks. +5 on block, wall splats.',
              notes: [
                'Parries all mid/high attacks except throws and unblockables',
                'Cannot be buffered',
                '14% chip damage',
                'Unparryable'
              ]
            }}
          />
          <TipBox variant="tip" title="Pseudo-Parry">
            This move <strong>parries attacks</strong>. Use it when you expect the opponent 
            to press. It's +5 on block anyway, so even if they block, you're at advantage.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Snake Eyes Strategy">
        <KeyConcept title="When to Use Snake Eyes" icon="🎯">
          <ul>
            <li><strong>After 3+4 hits:</strong> Immediate 3+4,2 for guaranteed damage</li>
            <li><strong>At the wall:</strong> 3+4,2 vs 3+4,2* mixup</li>
            <li><strong>Wall combos:</strong> SNE uf+2,2,2,2,2,3 for max damage</li>
            <li><strong>Punishes:</strong> SNE uf+2 strings for more damage</li>
            <li><strong>In heat:</strong> You have unlimited SNE, use it freely</li>
          </ul>
        </KeyConcept>

        <Collapsible title="Snake Eyes in Heat" icon="🔥">
          <p>
            In heat, you have <strong>permanent Snake Eyes</strong>. Each SNE move still 
            drains some heat gauge, but you can use multiple SNE moves per heat.
          </p>
          <p>
            This makes heat Bryan's best opportunity for:
          </p>
          <ul>
            <li>Wall mixups with 3+4,2 variants</li>
            <li>Extended combo damage with SNE strings</li>
            <li>f,f+1+2 attack reversal pressure</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Getting Snake Eyes">
        <p>
          To practice Snake Eyes, focus on these sources:
        </p>
        <ul>
          <li><strong>uf+3+4 in combos</strong> — Easiest SNE source</li>
          <li><strong>f+2,1,4 on hit</strong> — Gives SNE and starts your pressure</li>
          <li><strong>Heat</strong> — You have permanent SNE while in Heat</li>
        </ul>
        <p>
          Once you have SNE, prioritize landing SNE 3+4,2 — the damage boost is significant.
        </p>
      </Section>
    </Chapter>
  )
}
