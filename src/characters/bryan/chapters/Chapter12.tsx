import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Punishment Guide"
      intro="Bryan has excellent punishment. Knowing what to do when you block unsafe moves is critical — it's free damage. This chapter covers standing, crouching, and whiff punishment."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Learn Heat"
    >
      <Section title="Punishment Philosophy">
        <p>
          Punishment is <span className="highlight">guaranteed damage</span>. When your opponent 
          does something unsafe, you get a free hit. The better your punishment, the more 
          damage you extract from their mistakes.
        </p>

        <KeyConcept title="Bryan's Punishment Profile" icon="📊">
          <ul>
            <li><strong>i10:</strong> 1,4 (good) or 2,3 (more damage, less range)</li>
            <li><strong>i12:</strong> 4,1 (good damage)</li>
            <li><strong>i13:</strong> df+2,1 or uf+2,2,2,3 (with SNE)</li>
            <li><strong>i14:</strong> f,b+2 (LAUNCH)</li>
            <li><strong>i15+:</strong> f+2,1,4</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Standing Punishment">
        <SubSection title="i10 Punish">
          <MoveCard character="bryan"
            move={{
              input: '1,4',
              hitLevel: ['h', 'h'],
              damage: '5, 14',
              startup: 'i10',
              onBlock: '-7',
              onHit: '+4',
              tags: ['High', 'Punish'],
              description: 'Go-to i10 punish. Great range for a jab string.',
            }}
          showVideo
          />
          <MoveCard character="bryan"
            move={{
              input: '2,3',
              hitLevel: ['h', 'm'],
              damage: '10, 14',
              startup: 'i10',
              onBlock: '-10',
              onHit: '+6',
              tags: ['High', 'Mid', 'Punish'],
              description: 'More damage but worse range and pushes far on hit.',
            }}
          showVideo
          />
          <TipBox variant="tip" title="When to Use Which">
            Use 1,4 when unsure about range. Use 2,3 when you're close and want max damage.
          </TipBox>
        </SubSection>

        <SubSection title="i12 Punish">
          <MoveCard character="bryan"
            move={{
              input: '4,1',
              hitLevel: ['h', 'h'],
              damage: '15, 15',
              startup: 'i12',
              onBlock: '-1',
              onHit: '+7',
              tags: ['High', 'Punish', 'Sway Transition'],
              description: 'Good damage. Can transition to Sway with B.',
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="i13 Punish">
          <MoveCard character="bryan"
            move={{
              input: 'df+2,1',
              hitLevel: ['m', 'h'],
              damage: '12, 11',
              startup: 'i13',
              onBlock: '-4',
              onHit: '+5',
              tags: ['Mid', 'Punish', 'Sway Transition'],
              description: 'Safe mid punish. Sway transition with B.',
            }}
          showVideo
          />
          <MoveCard character="bryan"
            move={{
              input: 'uf+2,2,2,3',
              hitLevel: ['m', 'm', 'm', 'm'],
              damage: '6, 4, 4, 20',
              startup: 'i13',
              onBlock: '-15',
              onHit: '+30a (+12)',
              tags: ['Mid', 'Punish', 'Knockdown'],
              description: 'With Snake Eyes, use SNE uf+2,2,2,2,2,3 for more damage.',
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="i14 Punish (LAUNCH)">
          <MoveCard character="bryan"
            move={{
              input: 'f,b+2',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i14-15',
              onBlock: '-7',
              onHit: '+43a (+33)',
              tags: ['High', 'Launch Punish'],
              description: 'YOUR BEST PUNISH. i14 launch. Use this on anything -14 or worse.',
            }}
          showVideo
          />
          <TipBox variant="warning" title="f,b+2 is High">
            Because it's a high, moves that recover crouching can't be punished with f,b+2. 
            Use df+2,1 or iws1 instead.
          </TipBox>
        </SubSection>

        <SubSection title="i15+ Punish">
          <MoveCard character="bryan"
            move={{
              input: 'f+2,1,4',
              hitLevel: ['m', 'm', 'm'],
              damage: '10, 12, 20',
              startup: 'i15',
              onBlock: '-13',
              onHit: '+3a',
              tags: ['Mid', 'Punish', 'Snake Eyes'],
              description: 'Gives Snake Eyes on hit. Good for big punishes.',
            }}
          showVideo
          />
        </SubSection>
      </Section>

      <Section title="While Standing Punishment">
        <SubSection title="ws4 (i11)">
          <MoveCard character="bryan"
            move={{
              input: 'ws4',
              hitLevel: ['m'],
              damage: '16',
              startup: 'i11-12',
              onBlock: '-6',
              onHit: '+5',
              tags: ['Mid', 'WS Punish'],
              description: 'Generic ws4. Use for -11 to -12 lows.',
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="ws3 (i12)">
          <MoveCard character="bryan"
            move={{
              input: 'ws3',
              hitLevel: ['m'],
              damage: '17',
              startup: 'i12',
              onBlock: '-10',
              onHit: '+4',
              onCH: '+33a (+27)',
              tags: ['Mid', 'WS Punish', 'CH Launcher'],
              description: 'Slightly more damage than ws4. CH launches.',
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="FC df+2,1 (i13)">
          <MoveCard character="bryan"
            videoId="FC.df+2,1"
            move={{
              input: 'FC df+2,1',
              hitLevel: ['m', 'h'],
              damage: '12, 25',
              startup: 'i13',
              onBlock: '-8',
              onHit: '+34a (+8)',
              tags: ['Mid', 'WS Punish'],
              description: 'Great damage for i13 WS punish. Second hit is high.',
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="ws1 (i15) LAUNCH">
          <MoveCard character="bryan"
            move={{
              input: 'ws1',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i15-16',
              onBlock: '-14',
              onHit: '+35a (+25)',
              tags: ['Mid', 'Launch Punish'],
              description: 'Your crouching launch punish. Use on -15 or worse lows.',
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="ws2 Fisherman Slam (i19)">
          <MoveCard character="bryan"
            move={{
              input: 'ws2',
              hitLevel: ['m'],
              damage: '10, 20',
              startup: 'i19',
              onBlock: '-10',
              onHit: '+50a',
              tags: ['Mid', 'WS Punish', 'Throw'],
              description: 'For heavily minus lows. Can power up with f+2 or b+2 timing.',
            }}
          showVideo
          />
          <TipBox variant="tip" title="Blue Spark ws2">
            Input f+2 or b+2 during the grab for +5 damage and blue sparks. Timing is tricky.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Whiff Punishment">
        <KeyConcept title="Whiff Punisher Tiers" icon="🎯">
          <ul>
            <li><strong>Close range:</strong> f,b+2 (i14 launch)</li>
            <li><strong>Mid range:</strong> qcb+2,4 → qcb+4 (huge damage)</li>
            <li><strong>Far range:</strong> f+4,1 (long range launch, -13c)</li>
          </ul>
        </KeyConcept>

        <MoveCard character="bryan"
          move={{
            input: 'qcb+2,4',
            hitLevel: ['m', 'h'],
            damage: '16, 25',
            startup: 'i15-16',
            onBlock: '-9',
            onHit: '+15a',
            tags: ['Mid', 'Whiff Punish'],
            description: 'Great range whiff punish. Guaranteed qcb+4 on hit (59 total).',
          }}
        />

        <MoveCard character="bryan"
          move={{
            input: 'f+4,1',
            hitLevel: ['m', 'm'],
            damage: '10, 10',
            startup: 'i18',
            onBlock: '-13c',
            onHit: '+40a (+32)',
            tags: ['Mid', 'Whiff Punish', 'Launch'],
            description: 'Very long range. Launches for full combo. -13 leaves you crouching.',
          }}
        />
      </Section>

      <Section title="Punishment Chart">
        <Collapsible title="Full Punishment Reference" icon="📋" defaultOpen>
          <p><strong>Standing:</strong></p>
          <ul>
            <li>i10: 1,4 (19 dmg) or 2,3 (24 dmg)</li>
            <li>i12: 4,1 (30 dmg)</li>
            <li>i13: df+2,1 (23 dmg) or uf+2,2,2,3 (34 dmg)</li>
            <li>i14: f,b+2 (LAUNCH ~65+ dmg)</li>
            <li>i15: f+2,1,4 (42 dmg + SNE)</li>
          </ul>
          <p><strong>While Standing:</strong></p>
          <ul>
            <li>i11: ws4 (16 dmg)</li>
            <li>i12: ws3 (17 dmg)</li>
            <li>i13: FC df+2,1 (37 dmg)</li>
            <li>i15: ws1 (LAUNCH ~55+ dmg)</li>
            <li>i19: ws2 (50+ dmg)</li>
          </ul>
          <p><strong>Whiff:</strong></p>
          <ul>
            <li>Close: f,b+2 (LAUNCH)</li>
            <li>Mid: qcb+2,4 → qcb+4 (59 dmg)</li>
            <li>Far: f+4,1 (LAUNCH)</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Practice">
        <PracticeBox
          title="Punishment Drill"
          setup="Set dummy to do various unsafe moves. Practice reacting with correct punish."
          tasks={[
            { id: 'i10', text: 'Punish -10 move with 1,4', type: 'counter', target: 10 },
            { id: 'i14', text: 'Punish -14 move with f,b+2 → combo', type: 'counter', target: 10 },
            { id: 'ws', text: 'Punish unsafe low with ws1 → combo', type: 'counter', target: 10 },
            { id: 'whiff', text: 'Whiff punish with qcb+2,4 → qcb+4', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
