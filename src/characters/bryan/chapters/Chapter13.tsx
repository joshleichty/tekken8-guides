import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Quiz
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter13({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={13}
      title="Heat System"
      intro="Bryan's heat is one of the weaker heat systems in Tekken 8. But that doesn't mean you should ignore it. This chapter teaches you how to use heat effectively despite its limitations."
      onPrevious={() => goToChapter(12)}
      onNext={() => goToChapter(14)}
      nextLabel="Learn Snake Eyes"
    >
      <Section title="Bryan's Heat: The Truth">
        <p>
          Let's be honest: <span className="highlight-secondary">Bryan's heat is bad compared to 
          most characters</span>. His heat smash is weak, his heat engagers are situational, 
          and he doesn't gain huge offensive buffs in heat.
        </p>

        <KeyConcept title="Why Bryan's Heat is Weak" icon="📉">
          <ul>
            <li><strong>Heat Smash:</strong> i16, low crushes, but only 44 damage and ends heat</li>
            <li><strong>Limited offensive gains:</strong> No scary mixups unlocked</li>
            <li><strong>Better to stay in heat:</strong> Permanent Snake Eyes is the main benefit</li>
            <li><strong>Chip damage:</strong> All moves chip in heat, but that's standard</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Silver Lining">
          Bryan gains <span className="highlight">permanent Snake Eyes</span> in heat. This is 
          actually valuable for wall pressure and combo extensions. The key is knowing when 
          to enter heat and how to use it.
        </TipBox>
      </Section>

      <Section title="Heat Engagers">
        <SubSection title="1,2,4 — The Panic Engager">
          <MoveCard character="bryan"
            move={{
              input: '1,2,4',
              hitLevel: ['h', 'h', 'h'],
              damage: '5, 8, 24',
              startup: 'i10',
              onBlock: '-5',
              onHit: '+20a (+11)',
              tags: ['High', 'Heat Engager', 'i10', 'Wall Splat'],
              description: 'i10 heat engager. All hits natural on 1st hit CH.',
              notes: [
                'Third hit is a duckable high',
                'Wall splats',
                'Your fastest way into heat'
              ]
            }}
          />
          <p>
            Use this when you need to enter heat <strong>immediately</strong>. It's i10, so 
            it works as a panic tool or a frame trap finisher.
          </p>
        </SubSection>

        <SubSection title="qcf+1+2 — The Mid-Range Engager">
          <MoveCard character="bryan"
            move={{
              input: 'qcf+1+2 (SLS.1+2)',
              hitLevel: ['m'],
              damage: '28',
              startup: 'i15-16',
              onBlock: '-9',
              onHit: '+23a (+13)',
              tags: ['Mid', 'Heat Engager', 'Safe', 'Elbow'],
              description: 'Your main heat engager. Safe, long range, evasive.',
              notes: [
                'Wall splats',
                '8% chip damage on block',
                'Heat dash gives +5, +36a (+26)'
              ]
            }}
          />
          <p>
            This is your <span className="highlight">go-to heat engager</span>. It's similar 
            to Jin/Kazuya's ff+2 — safe, long range, and you can throw it out from mid-range.
          </p>
        </SubSection>

        <SubSection title="Other Engagers">
          <MoveCard character="bryan"
            move={{
              input: 'db+1+2',
              hitLevel: ['m', 'h'],
              damage: '8, 16',
              startup: 'i15',
              onBlock: '-9',
              onHit: '+4',
              tags: ['Mid', 'High', 'Heat Engager'],
              description: 'Jails on block. Situational engager.',
            }}
          />
          <MoveCard character="bryan"
            move={{
              input: 'SS 2,1',
              hitLevel: ['M', 'h'],
              damage: '15, 20',
              startup: 'i17-18',
              onBlock: '-5',
              onHit: '+43d (-15)',
              tags: ['Mid', 'High', 'Heat Engager'],
              description: 'First hit is safe. Second is a duckable high.',
            }}
          />
          <MoveCard character="bryan"
            move={{
              input: 'f,f+2',
              hitLevel: ['h'],
              damage: '29',
              startup: 'i13',
              onBlock: '-9',
              onHit: '+41d (-17)',
              tags: ['High', 'Heat Engager'],
              description: 'Fast approach engager. Wall splats. 8% chip.',
            }}
          />
        </SubSection>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="bryan"
          move={{
            input: 'H.2+3',
            hitLevel: ['m', 'm'],
            damage: '20, 20, 35',
            startup: 'i16',
            onBlock: '+9',
            onHit: '-1d',
            tags: ['Mid', 'Heat Smash', 'Reversal Break', 'Spike'],
            description: 'Bryan\'s heat smash. Low crushes but mediocre overall.',
            notes: [
              'Reversal break',
              'Spike on hit',
              'Ends your heat',
              '+9 on block is nice but the damage is bad'
            ]
          }}
        showVideo
        />

        <TipBox variant="warning" title="Avoid Heat Smash">
          Bryan's heat smash is generally <span className="highlight-secondary">not worth using</span>. 
          44 damage to end your heat is terrible. You're better off staying in heat for 
          permanent Snake Eyes and using heat for combo extensions.
        </TipBox>
      </Section>

      <Section title="How to Use Bryan's Heat">
        <KeyConcept title="Optimal Heat Usage" icon="✅">
          <ol>
            <li><strong>Enter heat via combo</strong> — Heat burst during combos for damage</li>
            <li><strong>Stay in heat</strong> — Permanent Snake Eyes is valuable</li>
            <li><strong>Use Snake Eyes moves</strong> — 3+4,2 at wall, uf+2 strings for damage</li>
            <li><strong>Chip damage</strong> — All your moves chip in heat</li>
            <li><strong>Don't heat smash</strong> — Keep your heat active</li>
          </ol>
        </KeyConcept>

        <SubSection title="Heat Combo Extension">
          <p>
            The best use of heat is <strong>mid-combo</strong>. Pop heat after Tornado for 
            unscaled damage:
          </p>
          <ul>
            <li>Launcher → filler → Tornado → <strong>Heat Burst</strong> → b+3~f+1+2 → qcf+1+2</li>
          </ul>
          <p>
            This gives you the heat damage bonus AND keeps you in heat for Snake Eyes pressure.
          </p>
        </SubSection>

        <SubSection title="Heat Burst as Panic">
          <p>
            Heat burst (raw heat activation) is <strong>plus on block and safe</strong>. You 
            can use it as a panic tool when you need to create space or enter heat immediately.
          </p>
        </SubSection>
      </Section>

      <Section title="Knowledge Check">
        <Quiz
          question="What's the best way to use Bryan's heat?"
          options={[
            { text: 'Save it for heat smash', isCorrect: false },
            { text: 'Use heat burst mid-combo and stay in heat for Snake Eyes', isCorrect: true },
            { text: 'Enter heat immediately at round start', isCorrect: false },
            { text: 'Never enter heat', isCorrect: false },
          ]}
          correctFeedback="Correct! Heat burst mid-combo gives damage, and staying in heat gives you permanent Snake Eyes for wall pressure."
          incorrectFeedback="Bryan's best heat usage is popping heat during combos for extra damage and then staying in heat for permanent Snake Eyes access."
        />
      </Section>
    </Chapter>
  )
}
