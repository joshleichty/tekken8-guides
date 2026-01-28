import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  DrillMode,
  Collapsible,
  ConceptBuilder
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Jab Pressure"
      intro="Bryan's jab strings are central to his up-close game. This chapter teaches you how to use 1,2 extensions to create pressure, fish for counter-hits, and keep opponents guessing."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Counter-Hit Fishing"
    >
      <Section title="The Bryan Jab">
        <MoveCard
          move={{
            input: '1',
            hitLevel: ['h'],
            damage: '5',
            startup: 'i10',
            onBlock: '+1',
            onHit: '+8',
            tags: ['High', 'Jab', 'Excellent Range'],
            description: 'Bryan\'s jab has exceptional range compared to most characters.',
          }}
        />

        <p>
          Bryan's jab is <span className="highlight">one of the better jabs in the game</span> 
          due to its range. But the real power comes from the extensions.
        </p>
      </Section>

      <Section title="Core Jab Strings">
        <SubSection title="1,2 — Your Bread and Butter">
          <MoveCard
            move={{
              input: '1,2',
              hitLevel: ['h', 'h'],
              damage: '5, 8',
              startup: 'i10, i12',
              onBlock: '-3',
              onHit: '+8',
              tags: ['High', 'Natural Combo', 'Jail'],
              description: 'Standard jab string. Jails on block, meaning opponent can\'t duck the second hit.',
            }}
          />

          <TipBox variant="tip" title="1,2 as a Check">
            1,2 is your safe pressure tool up close. -3 on block means you give up your 
            turn, but the extensions make opponents hesitant to press back.
          </TipBox>
        </SubSection>

        <SubSection title="1,2,1 — The CH Extension">
          <MoveCard
            move={{
              input: '1,2,1',
              hitLevel: ['h', 'h', 'm'],
              damage: '5, 8, 18',
              startup: 'i10, i12, i19',
              onBlock: '-6',
              onHit: '+6',
              onCH: '+65a',
              tags: ['High', 'Mid', 'CH Launcher', 'Delayable'],
              description: 'Third hit is a mid that launches on counter-hit. 10 frames of delay possible.',
              notes: [
                'Natural combo from 2nd CH (32 damage + plus frames)',
                '10 frames of delay on the third hit',
                '-6 on block but safe'
              ]
            }}
          />

          <KeyConcept title="1,2,1 Mind Games" icon="🧠">
            <p>The 10-frame delay is huge:</p>
            <ul>
              <li><strong>Immediate 1,2,1</strong> — Catches people pressing immediately</li>
              <li><strong>Delayed 1,2,1</strong> — Catches people who wait then press</li>
              <li><strong>1,2 only</strong> — Safe reset when they're blocking</li>
            </ul>
            <p>The opponent has to guess when (or if) the third hit is coming.</p>
          </KeyConcept>
        </SubSection>

        <SubSection title="1,2,3 — The Low Mixup">
          <MoveCard
            move={{
              input: '1,2,3',
              hitLevel: ['h', 'h', 'L'],
              damage: '5, 8, 15',
              startup: 'i10, i12, i24',
              onBlock: '-12',
              onHit: '+2',
              onCH: '+14a',
              tags: ['High', 'Low', 'Knockdown on CH'],
              description: 'Third hit is a low. Combos from 1st or 2nd counter-hit.',
            }}
          />

          <TipBox variant="tip" title="Use Sparingly">
            1,2,3 is -12 on block. It's there to keep opponents honest — if they always 
            stand block expecting 1,2,1, the low hits. But don't overuse it.
          </TipBox>
        </SubSection>

        <SubSection title="1,2,4 — The Heat Engager">
          <MoveCard
            move={{
              input: '1,2,4',
              hitLevel: ['h', 'h', 'h'],
              damage: '5, 8, 24',
              startup: 'i10, i12, i20',
              onBlock: '-5',
              onHit: '+20a (+11)',
              tags: ['High', 'Heat Engager', 'Wall Splat', 'Natural on CH'],
              description: 'All three hits are natural on first hit counter-hit. Heat engages and wall splats.',
              notes: [
                'Third hit is a duckable high',
                'All natural on 1st hit CH',
                'Great for entering heat at i10'
              ]
            }}
          />

          <TipBox variant="warning" title="Duckable">
            The third hit is high and can be ducked. But it's your <span className="highlight">i10 
            heat engager</span> — incredibly valuable for entering heat as a panic option.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="How to Use Jab Pressure">
        <ConceptBuilder
          title="Jab String Layering"
          foundation={[
            { label: '1,2 is safe', input: '-3', description: 'Resets neutral' },
            { label: '1,2,1 launches on CH', description: 'Opponents fear pressing' },
          ]}
          newAddition={{
            label: '1,2,3 is a low',
            description: 'Catches blocking opponents',
          }}
          result="Opponents can't safely block OR press after 1,2 — you control the situation"
        />

        <KeyConcept title="Jab Pressure Flow" icon="🔄">
          <ol>
            <li><strong>Start with 1,2</strong> — Safe, establishes presence</li>
            <li><strong>Mix in 1,2,1 (delayed)</strong> — Catches people pressing back</li>
            <li><strong>If they block everything:</strong> 1,2,3 or stop at 1,2 and throw</li>
            <li><strong>If you need Heat:</strong> 1,2,4 on a hard read</li>
          </ol>
        </KeyConcept>

        <DrillMode
          title="Jab String Mixups"
          objective="Get comfortable varying your jab strings"
          setup="Dummy on random: block, jab back, or duck"
          difficulty="intermediate"
          estimatedTime="5 min"
          steps={[
            { instruction: 'Do 1,2 only (don\'t finish)', targetReps: 10 },
            { instruction: 'Do 1,2,1 (immediate)', targetReps: 10 },
            { instruction: 'Do 1,2,1 (delayed)', detail: 'Wait a beat before the last hit', targetReps: 10 },
            { instruction: 'Do 1,2,3', targetReps: 5 },
            { instruction: 'Mix all four randomly', targetReps: 10 },
          ]}
        />
      </Section>

      <Section title="1,4 String">
        <SubSection title="The Safe Mid Ender">
          <MoveCard
            move={{
              input: '1,4',
              hitLevel: ['h', 'h'],
              damage: '5, 14',
              startup: 'i10, i15',
              onBlock: '-7',
              onHit: '+4',
              tags: ['High', 'Jail', 'Safe'],
              description: 'Alternative jab string. Jails on block.',
            }}
          />

          <MoveCard
            move={{
              input: '1,4,2,1',
              hitLevel: ['h', 'h', 'h', 'h'],
              damage: '5, 14, 18, 16',
              startup: 'i10',
              onBlock: '+0',
              onHit: '+55a',
              tags: ['High', 'Slither Step', 'Natural on CH'],
              description: 'Long string that goes into Slither Step with forward. Natural on 2nd hit CH.',
              notes: [
                'Can transition to Slither Step with forward (+7, +62a r13)',
                'Massively delayable',
                '1,4,2,1,2 and 1,4,2,1,4 are follow-ups'
              ]
            }}
          />
        </SubSection>

        <Collapsible title="Advanced: 1,4 String Extensions" icon="📖">
          <p>
            The 1,4 string has multiple extensions with different properties:
          </p>
          <ul>
            <li><strong>1,4,2,1</strong> → f enters Slither Step (+7)</li>
            <li><strong>1,4,2,1,2</strong> — Balcony break, -9</li>
            <li><strong>1,4,2,1,4</strong> — Tornado, strong aerial tailspin</li>
            <li><strong>1,4,2,4</strong> — Low crush, balcony break</li>
            <li><strong>1,4,3</strong> → Can continue with 1,4,3,3</li>
          </ul>
          <p>
            These are situational but add another layer of unpredictability. Don't worry 
            about these until you've mastered the basics.
          </p>
        </Collapsible>
      </Section>

      <Section title="When Jab Pressure Works (And Doesn't)">
        <KeyConcept title="Good Situations for Jabs" icon="✅">
          <ul>
            <li><strong>After your plus frame moves</strong> — qcb+1 blocked (+5), 1,2,1</li>
            <li><strong>After hatchet hits</strong> — You're +5, jab away</li>
            <li><strong>When you need to check</strong> — i10 is your fastest button</li>
            <li><strong>To set up frame traps</strong> — 1,2 blocked, then CH tool</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Bad Situations for Jabs" icon="❌">
          <ul>
            <li><strong>From range 2</strong> — You have better options (qcb+1, 3+4)</li>
            <li><strong>Against duck-happy players</strong> — All extensions are high or mid</li>
            <li><strong>Predictably</strong> — If you always do the same thing, you'll get punished</li>
          </ul>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
