import { Chapter, Section } from '../../../components/guide'
import { MoveCard, TipBox, KeyConcept, ReadingChallenge, GameChallenge } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Defense Without Panic"
      intro="Kazuya’s defense is built on patience and punishment. You do not swing your way out — you move, block, and wait."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Finish The Long Set"
    >
      <Section title="Your Defensive Tools">
        <MoveCard
          character="kazuya"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i25',
            onBlock: '-9',
            onHit: '+11a',
            tags: ['Parry', 'Mid'],
            description: 'Punch parry that deletes predictable highs and mids.',
          }}
          showVideo
        />

        <MoveCard
          character="kazuya"
          move={{
            input: 'f+2',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i20',
            onBlock: '-12',
            onHit: '+13a',
            tags: ['Power Crush', 'Mid'],
            description: 'Risky power crush to interrupt relentless pressure. Use as a read, not a habit.',
          }}
          showVideo
        />

        <MoveCard
          character="kazuya"
          move={{
            input: 'ws4',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i11',
            onBlock: '-3',
            onHit: '+8',
            tags: ['Mid', 'Fast'],
            description: 'Fast while-standing mid. Great after ducking highs or blocking lows.',
          }}
          videoId="ws4"
          showVideo
        />
      </Section>

      <Section title="The Real Defense">
        <KeyConcept title="Defensive Priorities" icon="🛡️">
          <ul>
            <li><strong>Backdash</strong> to create whiffs</li>
            <li><strong>Sidestep</strong> to escape linear pressure</li>
            <li><strong>Block</strong> and punish instead of swinging</li>
            <li><strong>Parry/power crush</strong> only when you have a read</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Do Not Mash">
          If you are under pressure, you are losing because you are swinging too early. 
          Kazuya is strongest when you defend first and punish second.
        </TipBox>
      </Section>

      <Section title="Reading Challenge">
        <ReadingChallenge
          title="Recognize Pressure Patterns"
          scenario="Record three common pressure strings your training partner uses."
          theTells={[
            { observation: 'They always end with a high', meaning: 'They are giving you a duck window', response: 'Duck → ws1,2' },
            { observation: 'They stop short after two hits', meaning: 'They want you to press', response: 'Hold block → punish' },
            { observation: 'They sidestep after block', meaning: 'They fear retaliation', response: 'b+4 homing' },
          ]}
          setup={{
            cpuBehavior: 'Playback (Random)',
            recordings: ['String ends high', 'String ends safe', 'String ends with sidestep']
          }}
          whatToWatch="Look for the last hit and the recovery. That tells you if you can punish."
          goal="Correctly identify the ender and respond 10 times"
          progressionLevels={[
            { level: 'Level 1', description: 'Identify the string ender only.' },
            { level: 'Level 2', description: 'Punish the unsafe ender on reaction.' },
            { level: 'Level 3', description: 'Sidestep and whiff punish after safe enders.' },
          ]}
          realMatchApplication="Once you can read the ender, you can take your turn back without guessing."
        />
      </Section>

      <Section title="Defense Challenge">
        <GameChallenge
          title="Survive the Pressure"
          scenario="Set the CPU to run a pressure loop. Your job is to block and punish without panic."
          setup={{
            cpuBehavior: 'Repeat Action',
            recordings: [
              'Safe string into jab',
              'Unsafe mid (punishable)',
              'Low into stand pressure'
            ],
            otherSettings: ['Guard All', 'Counter Hit Off']
          }}
          goal="Block and punish correctly three times in a row"
          successCriteria="You punish the unsafe option and block the safe one"
          failureTeaches="If you swing early, you eat counter hits. If you hesitate too long, you lose your turn."
          hints={[
            'Look for the unsafe ender and punish it on reaction.',
            'Do not chase your turn until you see the opening.'
          ]}
          duration="8 minutes"
          whyThisWorks="Defense is where Kazuya earns his vortex. If you can defend calmly, your opponent has to respect you."
        />
      </Section>
    </Chapter>
  )
}
