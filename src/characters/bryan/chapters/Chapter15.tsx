import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  MatchScenario,
  Quiz
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter15({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={15}
      title="Defense & Panic Options"
      intro="Bryan is WEAK on defense. This is his biggest vulnerability. This chapter teaches you how to survive pressure and what limited panic options you have."
      onPrevious={() => goToChapter(14)}
      onNext={() => goToChapter(16)}
      nextLabel="Learn Taunt"
    >
      <Section title="The Defensive Reality">
        <p>
          Let's be clear: <span className="highlight-secondary">Bryan's defense is bad</span>. 
          He has no good power crush, limited panic moves, and average movement. When 
          you're under pressure, your best option is often to <strong>just block</strong>.
        </p>

        <KeyConcept title="Bryan's Defensive Limitations" icon="⚠️">
          <ul>
            <li><strong>Power crush (f+1+2):</strong> Slow and only mid, not good for panic</li>
            <li><strong>No evasive move:</strong> No magic 4, no dickjab that crushes</li>
            <li><strong>Movement:</strong> Average backdash and sidestep</li>
            <li><strong>When rushed:</strong> You must make reads or accept trades</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Mindset">
          Because defense is weak, Bryan players must <strong>avoid being pressured</strong> 
          in the first place. This is why spacing and keepout are so important. Prevention 
          is better than cure.
        </TipBox>
      </Section>

      <Section title="Panic Options">
        <SubSection title="u+4 (Orbital)">
          <MoveCard character="bryan"
            move={{
              input: 'u+4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i24-26',
              onBlock: '-5',
              onHit: '+26a',
              tags: ['Mid', 'Launcher', 'Low Crush', 'Evasive'],
              description: 'Your best panic tool. Evades lows and some mids.',
              notes: [
                'Low crushes heat smashes',
                'Some high evasion built in',
                'Good recovery even on whiff'
              ]
            }}
          />
          <p>
            Orbital is your <span className="highlight">best escape option</span>. It low 
            crushes, has some evasion, and launches on hit. Use it when you expect a low 
            or aggressive approach.
          </p>
        </SubSection>

        <SubSection title="uf+3+4 (Hopkick Alternative)">
          <MoveCard character="bryan"
            move={{
              input: 'uf+3+4',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i16-17',
              onBlock: '-7',
              onHit: '+8a',
              tags: ['Mid', 'Tornado', 'Low Crush'],
              description: 'Fast low crush with Tornado. Gives Snake Eyes.',
            }}
          />
          <p>
            Faster than orbital but less evasive. Use when you need a quick low crush.
          </p>
        </SubSection>

        <SubSection title="uf+1 (Power Crush)">
          <MoveCard character="bryan"
            move={{
              input: 'uf+1',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i20-21',
              onBlock: '-13',
              onHit: '+15a',
              tags: ['Mid', 'Power Crush', 'Snake Eyes'],
              description: 'Bryan\'s power crush. Absorbs attacks but -13 on block.',
              notes: [
                'Power crush frames 7-19',
                'Gives Snake Eyes on hit',
                'Wall splats',
                '-9 with chip after absorbing'
              ]
            }}
          />
          <TipBox variant="warning" title="Risky Power Crush">
            At -13 on block, this power crush is <span className="highlight-secondary">very 
            punishable</span>. Only use it when you're confident they'll attack, not as 
            a blind panic tool.
          </TipBox>
        </SubSection>

        <SubSection title="f,f+4 (Mock Kick)">
          <MoveCard character="bryan"
            move={{
              input: 'f,f+4',
              hitLevel: ['h'],
              damage: '32',
              startup: 'i16-19',
              onBlock: '-9c to -6c',
              onHit: '+15a',
              tags: ['High', 'Evasive', 'SSL Built-in'],
              description: 'Has built-in sidestep left. More evasive than it looks.',
              notes: [
                'Guaranteed qcb+4 on hit',
                'Recovers crouching',
                'Built-in sidestep left evades some attacks'
              ]
            }}
          />
          <p>
            Mock kick's <strong>built-in SSL</strong> makes it surprisingly evasive. Against 
            characters weak to SSL (like Mishimas), this can steal turns.
          </p>
        </SubSection>

        <SubSection title="1,2,4 (Heat Panic)">
          <p>
            Your i10 heat engager. When you're being pressured and have heat available, 
            mashing 1,2,4 can get you out AND into heat, recovering health and gaining 
            Snake Eyes.
          </p>
        </SubSection>

        <SubSection title="Crouch Options">
          <MoveCard character="bryan"
            move={{
              input: 'ws3',
              hitLevel: ['m'],
              damage: '17',
              startup: 'i12',
              onBlock: '-10',
              onHit: '+4',
              onCH: '+33a (+27)',
              tags: ['Mid', 'CH Launcher'],
              description: 'From crouch, ws3 CH launches. Use after db+3 or as a panic tool.',
            }}
          />
          <MoveCard character="bryan"
            move={{
              input: 'FC df+4',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i15-16',
              onBlock: '-10',
              onHit: '+13g',
              onCH: '+25d',
              tags: ['Mid', 'Slide', 'Evasive'],
              description: 'Evasive slide from crouch. Great for crushing highs.',
            }}
          />
        </SubSection>
      </Section>

      <Section title="Defensive Scenarios">
        <MatchScenario
          title="Under Pressure"
          situation="Opponent is in your face doing jab strings. You're blocking."
          context="They're plus after a poke. You need to escape."
          options={[
            {
              action: 'Keep blocking',
              result: 'Safest option. Wait for their minus move, then take your turn.',
              isOptimal: true,
              followup: 'Punish unsafe move or use mental frame reads'
            },
            {
              action: 'Orbital (u+4)',
              result: 'If they go low, you crush and launch. If they go mid, you might get hit.',
            },
            {
              action: 'Power crush (uf+1)',
              result: 'Risky. If they block, -13. Only if you\'re sure they\'ll attack.',
            },
            {
              action: 'Mash jab',
              result: 'Can work to interrupt, but they might be plus enough to beat you.',
            },
          ]}
          keyTakeaway="When pressured, blocking is usually correct. Bryan doesn't have great panic tools, so patience wins."
        />

        <MatchScenario
          title="Reading a Low"
          situation="Opponent has been doing lows repeatedly. You expect another."
          context="You're minus but think they'll go low."
          options={[
            {
              action: 'Orbital (u+4)',
              input: 'u+4',
              result: 'Crushes the low, full launch. Best if you\'re right.',
              isOptimal: true,
              followup: 'Full combo'
            },
            {
              action: 'uf+3+4',
              result: 'Faster low crush but less damage.',
            },
            {
              action: 'Low parry',
              result: 'Safer than orbital if they do something else. Decent damage.',
            },
            {
              action: 'Block low',
              result: 'Safest. ws4 punish minimum.',
            },
          ]}
          keyTakeaway="When you read a low, orbital is your best reward. But be sure — if they do a mid, you eat it."
        />
      </Section>

      <Section title="Defensive Priorities">
        <KeyConcept title="Bryan Defense Hierarchy" icon="🛡️">
          <ol>
            <li><strong>Don't get pressured</strong> — Maintain spacing, use keepout</li>
            <li><strong>Block and wait</strong> — When pressured, patient blocking wins</li>
            <li><strong>Punish unsafe moves</strong> — Make them pay for committal attacks</li>
            <li><strong>Make reads</strong> — Orbital on low reads, ws3 on predictable patterns</li>
            <li><strong>Trade if necessary</strong> — Sometimes eating damage to escape is worth it</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Quiz">
        <Quiz
          question="You're being pressured at -3. What's usually the best option?"
          options={[
            { text: 'Power crush with uf+1', isCorrect: false },
            { text: 'Block and wait for their unsafe move', isCorrect: true },
            { text: 'Orbital (u+4)', isCorrect: false },
            { text: 'Backdash', isCorrect: false },
          ]}
          correctFeedback="Correct! Blocking patiently and waiting to punish is Bryan's best defensive strategy."
          incorrectFeedback="Bryan's panic options are weak. At -3, blocking and waiting for an unsafe move to punish is usually best."
        />
      </Section>
    </Chapter>
  )
}
