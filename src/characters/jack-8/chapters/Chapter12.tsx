import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Punishment Guide"
      intro="Jack has excellent punishment, including the fastest Heat Smash in the game at i10. This chapter teaches you what to do when you block unsafe moves."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Heat System"
    >
      <Section title="Punishment Philosophy">
        <p>
          Punishment is <span className="highlight">guaranteed damage</span>. When opponents do 
          something unsafe, you get a free hit. Better punishment = more damage from their mistakes.
        </p>

        <KeyConcept title="Jack's Punishment Profile" icon="📊">
          <ul>
            <li><strong>i10:</strong> f+2 — risky but leads to CH combo</li>
            <li><strong>i10 (Heat):</strong> Heat Smash — 50 damage, fastest in game</li>
            <li><strong>i11:</strong> 2,3 — solid damage</li>
            <li><strong>i12:</strong> 1,1 — quick punish</li>
            <li><strong>i13:</strong> df+3+4 — big damage, heat engager</li>
            <li><strong>i14:</strong> f+1,1 — good damage</li>
            <li><strong>i15:</strong> df+2 (LAUNCH) — full combo</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Standing Punishment">
        <SubSection title="i10 Punish">
          <MoveCard character="jack-8"
            move={{
              input: 'f+2',
              hitLevel: ['h'],
              damage: '22',
              startup: 'i10',
              onBlock: '-12',
              onHit: '+5',
              onCH: '+32a (+24)',
              tags: ['High', 'i10 Punish'],
              description: 'Your fastest punish. Risky at -12 but the only i10 option.',
              notes: [
                'Only use for -10 punishes',
                'On CH would give f,f+4, but punishes aren\'t CH'
              ]
          }}
        showVideo
        />

          <MoveCard character="jack-8"
            videoId="H.2+3"
            move={{
              input: 'Heat Smash',
              hitLevel: ['h', 'm', 't'],
              damage: '50',
              startup: 'i10',
              onBlock: '-9',
              onHit: '-2d (-12)',
              tags: ['Heat Only', 'i10 Punish', 'Best in Game'],
              description: 'THE FASTEST HEAT SMASH IN TEKKEN. Use for i10 punishes in Heat.',
              notes: [
                'Only available in Heat',
                '50 damage i10 punish is insane',
                'Wall breaks'
              ]
          }}
        showVideo
        />

          <TipBox variant="tip" title="In Heat = Better Punish">
            In Heat, <strong>Heat Smash replaces f+2</strong> for i10 punishment. 50 damage 
            vs 22 damage. This alone makes Jack's Heat incredibly valuable.
          </TipBox>
        </SubSection>

        <SubSection title="i11 Punish">
          <MoveCard character="jack-8"
            move={{
              input: '2,3',
              hitLevel: ['h', 'm'],
              damage: '10, 18',
              startup: 'i11',
              onBlock: '-13',
              onHit: '+5',
              onCH: '+30d (+22)',
              tags: ['High', 'Mid', 'i11 Punish'],
              description: 'Your go-to i11 punish. Good damage, safe followup.',
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="i12 Punish">
          <MoveCard character="jack-8"
            move={{
              input: '1,1',
              hitLevel: ['h', 'm'],
              damage: '10, 22',
              startup: 'i12',
              onBlock: '-14c',
              onHit: '+4c',
              onCH: '+12d',
              tags: ['High', 'Mid', 'i12 Punish'],
              description: 'Quick i12 punish. Can transition to GMH with D.',
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="i13 Punish">
          <MoveCard character="jack-8"
            move={{
              input: 'df+3+4',
              hitLevel: ['m'],
              damage: '28',
              startup: 'i13',
              onBlock: '-23',
              onHit: '+10a (+1)',
              tags: ['Mid', 'i13 Punish', 'Big Damage'],
              description: 'Big damage i13 punish. Very unsafe on block, punish only.',
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="i14 Punish">
          <MoveCard character="jack-8"
            move={{
              input: 'f+1,1',
              hitLevel: ['m', 'h'],
              damage: '13, 25',
              startup: 'i14',
              onBlock: '-7',
              onHit: '+8d (-1)',
              onCH: '+40d (-7)',
              tags: ['Mid', 'High', 'i14 Punish'],
              description: 'Good i14 punish with knockdown.',
          }}
        showVideo
        />

          <MoveCard character="jack-8"
            move={{
              input: 'b+1+2',
              hitLevel: ['m'],
              damage: '28',
              startup: 'i14',
              onBlock: '-19',
              onHit: '-1d (-10)',
              tags: ['Mid', 'Heat Engager', 'i14 Punish', 'Long Range'],
              description: 'Long range i14 punish. Heat engager. -19 on block.',
              notes: [
                'Use when you need the extra range',
                'Heat engager for activation'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="i15 Punish (LAUNCH)">
          <MoveCard character="jack-8"
            move={{
              input: 'df+2',
              hitLevel: ['m'],
              damage: '13',
              startup: 'i15',
              onBlock: '-14',
              onHit: '+31a (+21)',
              tags: ['Mid', 'Launcher', 'i15 Punish'],
              description: 'Your launch punish. Full combo on -15 or worse moves.',
          }}
        showVideo
        />

          <MoveCard character="jack-8"
            videoId="df+2,1"
            move={{
              input: 'df+2,1 (hold)',
              hitLevel: ['m', 'h'],
              damage: '13, 22',
              startup: 'i15',
              onBlock: '-46',
              onHit: '+69a (+53)',
              tags: ['Mid', 'High', 'Charged Punish'],
              description: 'Charged version for more damage. Gets GMC on hit.',
          }}
        showVideo
        />
        </SubSection>
      </Section>

      <Section title="While Standing Punishment">
        <SubSection title="ws4 (i11)">
          <MoveCard character="jack-8"
            move={{
              input: 'ws4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i11',
              onBlock: '-6',
              onHit: '+5',
              tags: ['Mid', 'WS Punish', 'i11'],
              description: 'Standard WS punish for -11 to -13 lows.',
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="FC df+4,2 (i12)">
          <MoveCard character="jack-8"
            videoId="FC.df+4,2"
            move={{
              input: 'FC df+4,2',
              hitLevel: ['m', 'M'],
              damage: '10, 17',
              startup: 'i12',
              onBlock: '-14',
              onHit: '+4c',
              onCH: '+19d',
              tags: ['Mid', 'Mid', 'WS Punish', 'i12'],
              description: 'Better damage than ws4 for -12 lows.',
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="ws2,1 / ws2,4 (i14)">
          <MoveCard character="jack-8"
            move={{
              input: 'ws2,1',
              hitLevel: ['m', 'm'],
              damage: '10, 17',
              startup: 'i14',
              onBlock: '-14c',
              onHit: '+3d',
              onCH: '+49a',
              tags: ['Mid', 'Mid', 'WS Punish', 'i14'],
              description: 'WS punish for -14 lows. Also ws2,4 for chip.',
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="ws1 (i15) LAUNCH">
          <MoveCard character="jack-8"
            move={{
              input: 'ws1',
              hitLevel: ['m'],
              damage: '14',
              startup: 'i15',
              onBlock: '-13',
              onHit: '+34a (+24)',
              tags: ['Mid', 'Launcher', 'WS Punish', 'i15'],
              description: 'WS launcher for -15 lows. Full combo.',
          }}
        showVideo
        />
        </SubSection>
      </Section>

      <Section title="Whiff Punishment">
        <KeyConcept title="Whiff Punish Options" icon="🎯">
          <ul>
            <li><strong>Close range:</strong> df+2 (i15 launch)</li>
            <li><strong>Mid range:</strong> df+2 (amazing range)</li>
            <li><strong>Far range:</strong> b+1+2 (long range, heat engager)</li>
            <li><strong>Very far:</strong> f,f+4 (running boot)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="df+2 Range">
          Jack's df+2 has <span className="highlight">exceptional range</span> for a launcher. 
          You can whiff punish moves that other characters simply can't reach. This is a 
          huge advantage.
        </TipBox>
      </Section>

      <Section title="Punishment Chart">
        <Collapsible title="Full Punishment Reference" icon="📋" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <p><strong>Standing:</strong></p>
            <ul>
              <li>i10: f+2 (22 dmg) or <strong>Heat Smash (50 dmg)</strong></li>
              <li>i11: 2,3 (28 dmg)</li>
              <li>i12: 1,1 (32 dmg)</li>
              <li>i13: df+3+4 (28 dmg)</li>
              <li>i14: f+1,1 (38 dmg) or b+1+2 (28 dmg, heat engager)</li>
              <li>i15: df+2 (LAUNCH ~60+ dmg)</li>
            </ul>
            <p style={{ marginTop: '16px' }}><strong>While Standing:</strong></p>
            <ul>
              <li>i11: ws4 (20 dmg)</li>
              <li>i12: FC df+4,2 (27 dmg)</li>
              <li>i14: ws2,1 (27 dmg)</li>
              <li>i15: ws1 (LAUNCH ~55+ dmg)</li>
            </ul>
            <p style={{ marginTop: '16px' }}><strong>Whiff:</strong></p>
            <ul>
              <li>Close/Mid: df+2 (LAUNCH)</li>
              <li>Far: b+1+2 or f,f+4</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Chapter Summary">
        <p>Key punishment points:</p>
        <ul>
          <li><strong>i10 in Heat:</strong> Heat Smash (50 damage) — fastest in game</li>
          <li><strong>i15 launch:</strong> df+2 with exceptional range</li>
          <li><strong>WS launch:</strong> ws1 for -15 lows</li>
          <li><strong>Whiff punishment:</strong> df+2 range is your best friend</li>
        </ul>
        <p>
          Next chapter covers Jack's Heat system and how GMC works.
        </p>
      </Section>
    </Chapter>
  )
}
