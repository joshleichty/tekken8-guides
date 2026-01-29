import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Punishment"
      intro="Clive has excellent punishment across the board. His i14 launcher and strong 10-frame options give him free damage when opponents make mistakes."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Learn Heat & Zantetsuken"
    >
      <Section title="Punishment Philosophy">
        <p>
          Punishment is <span className="highlight">guaranteed damage</span>. When your opponent 
          does something unsafe, you get a free hit. Clive's punishment is above average, with 
          a fast launch punish and meter-building options.
        </p>

        <KeyConcept title="Clive's Punishment Profile" icon="📊">
          <ul>
            <li><strong>i10:</strong> 1,2 (builds ZAN meter) or 1,1~F (PHX entry)</li>
            <li><strong>i12:</strong> 2:1 (just frame) or 4,2</li>
            <li><strong>i13:</strong> 1+2 (Heat mode)</li>
            <li><strong>i14:</strong> df+1,2:1 (just frame for extra damage)</li>
            <li><strong>i15:</strong> df+2 (LAUNCH)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Standing Punishment">
        <SubSection title="i10 Punish">
          <MoveCard character="clive"
            move={{
              input: '1,2',
              hitLevel: ['h', 'm'],
              damage: '5, 20',
              startup: 'i10',
              onBlock: '-14',
              onHit: '+22a (+17)',
              tags: ['High', 'Mid', 'Punish', 'Zantetsuken'],
              description: 'Go-to i10 punish. Builds Zantetsuken meter on hit.',
              notes: [
                'Builds 0.30 ZAN on hit, 0.14 on block',
                'Deals recoverable damage only',
              ],
            }}
          showVideo
          />
          <MoveCard character="clive"
            videoId="1,1"
            move={{
              input: '1,1~F',
              hitLevel: ['h', 'h'],
              damage: '5, 13',
              startup: 'i10',
              onBlock: '-3 (PHX)',
              onHit: '+6 (PHX)',
              tags: ['High', 'Punish', 'PHX Transition'],
              description: 'Alternative i10 that goes into PHX. Use when you want stance pressure.',
            }}
          showVideo
          />
          <TipBox variant="tip" title="When to Use Which">
            Use 1,2 for damage and meter building. Use 1,1~F when you want to continue pressure 
            from Phoenix Shift afterward.
          </TipBox>
        </SubSection>

        <SubSection title="i12 Punish">
          <MoveCard character="clive"
            videoId="2,1"
            move={{
              input: '2:1',
              hitLevel: ['h', 'h'],
              damage: '11, 23',
              startup: 'i12',
              onBlock: '-13',
              onHit: '+8a (-1)',
              tags: ['High', 'Punish', 'Just Frame'],
              description: 'Just frame punish for extra damage. Input 1 on frames 10-12 of 2.',
              notes: [
                'Just frame adds +3 damage',
                'If you miss timing, just does 2,1 normally',
              ],
            }}
          showVideo
          />
          <MoveCard character="clive"
            move={{
              input: '4,2',
              hitLevel: ['m', 'm'],
              damage: '8, 17',
              startup: 'i12',
              onBlock: '-11',
              onHit: '+3',
              tags: ['Mid', 'Punish', 'Weapon'],
              description: 'Safer i12 option. Use at range where 2,1 might whiff.',
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="i13 Punish (Heat Only)">
          <MoveCard character="clive"
            move={{
              input: '1+2',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i13',
              onBlock: '-9',
              onHit: '+2',
              tags: ['Mid', 'Heat Engager', 'Punish'],
              description: 'i13 mid punish that heat engages. Use this in Heat mode.',
              notes: [
                'Heat Dash: +5, +43d (+35d)',
                'Heals 5 recoverable health',
              ],
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="i14 Punish">
          <MoveCard character="clive"
            videoId="df+1,2,1"
            move={{
              input: 'df+1,2:1',
              hitLevel: ['m', 'h', 'm'],
              damage: '10, 13, 18',
              startup: 'i14-15',
              onBlock: '-15',
              onHit: '+32a (+11)',
              tags: ['Mid', 'Punish', 'Just Frame'],
              description: 'Your i14 punish with just frame. Good damage for non-launch.',
              notes: [
                'Just frame input on frames 21-23 adds +3 damage',
                'Natural combo from first hit',
              ],
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="i15 Punish (LAUNCH)">
          <MoveCard character="clive"
            move={{
              input: 'df+2',
              hitLevel: ['m', 'm'],
              damage: '5, 10',
              startup: 'i15-16',
              onBlock: '-13',
              onHit: '+30a (+20)',
              tags: ['Mid', 'Launch', 'Punish', 'Weapon'],
              description: 'YOUR LAUNCH PUNISH. Use on anything -15 or worse.',
              notes: [
                'Leads to full combo (65+ damage)',
                'Second hit only available on hit or block',
              ],
            }}
          showVideo
          />
          <TipBox variant="warning" title="The Launch Threshold">
            df+2 is your launch punish. Anything -15 or worse = full combo. This is Clive's 
            best punishment option — don't miss these opportunities.
          </TipBox>
        </SubSection>

        <SubSection title="Long Range Punish">
          <MoveCard character="clive"
            move={{
              input: 'f+1+2',
              hitLevel: ['m', 'm'],
              damage: '10, 18',
              startup: 'i16-17',
              onBlock: '-12',
              onHit: '+20a (+10)',
              tags: ['Mid', 'Heat Engager', 'Punish'],
              description: 'Use when df+2 is too short. Heat engager with huge range.',
            }}
          showVideo
          />
          <MoveCard character="clive"
            move={{
              input: '1+2',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i13',
              onBlock: '-9',
              onHit: '+2',
              tags: ['Mid', 'Heat Engager', 'Punish'],
              description: 'Another option for range when df+2 won\'t reach.',
            }}
          showVideo
          />
        </SubSection>
      </Section>

      <Section title="While Standing Punishment">
        <SubSection title="ws+4 (i11)">
          <MoveCard character="clive"
            videoId="ws4"
            move={{
              input: 'ws+4',
              hitLevel: ['m'],
              damage: '14',
              startup: 'i11-12',
              onBlock: '-5',
              onHit: '+6',
              tags: ['Mid', 'WS Punish', 'PHX Transition'],
              description: 'Your generic i11 WS punish. Goes into PHX.',
              notes: [
                'PHX transition: -5 block, +6 hit',
                'Use for -11 to -12 lows',
              ],
            }}
          showVideo
          />
          <TipBox variant="warning" title="No FC d+1">
            Clive doesn't have a standard crouch jab. His FC d+1 is i10 but it's a special low, 
            not a jab. Use ws+4 for your WS punishment.
          </TipBox>
        </SubSection>

        <SubSection title="ws+1,2 / ws+1+2 (i13)">
          <MoveCard character="clive"
            videoId="ws1,2"
            move={{
              input: 'ws+1,2',
              hitLevel: ['m', 'm'],
              damage: '11, 19',
              startup: 'i13-14',
              onBlock: '-12',
              onHit: '+9',
              tags: ['Mid', 'WS Punish', 'Zantetsuken'],
              description: 'i13 WS punish that builds Zantetsuken meter.',
              notes: [
                'Builds 0.40 ZAN on hit, 0.14 on block',
                'Good damage for i13',
              ],
            }}
          showVideo
          />
          <MoveCard character="clive"
            move={{
              input: 'ws+1+2',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i13-14',
              onBlock: '-9',
              onHit: '+2',
              tags: ['Mid', 'WS Punish', 'Heat Engager'],
              description: 'Alternative i13 WS punish. Heat engager in Heat mode.',
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="ws+2 (i15) LAUNCH">
          <MoveCard character="clive"
            videoId="ws2"
            move={{
              input: 'ws+2',
              hitLevel: ['m'],
              damage: '15',
              startup: 'i15-16',
              onBlock: '-14 to -13',
              onHit: '+53a',
              tags: ['Mid', 'Launch', 'WS Punish', 'Weapon'],
              description: 'Your WS launch punish. Use on -15 or worse lows.',
              notes: [
                'Leads to full combo',
                '-14 to -13 on block depending on timing',
              ],
            }}
          showVideo
          />
        </SubSection>
      </Section>

      <Section title="Whiff Punishment">
        <KeyConcept title="Whiff Punisher Tiers" icon="🎯">
          <ul>
            <li><strong>Close range:</strong> df+2 (i15 launch)</li>
            <li><strong>Mid range:</strong> f+1+2 (i16 heat engager, huge range)</li>
            <li><strong>Far range:</strong> f+3 (i20 launcher, long reach)</li>
          </ul>
        </KeyConcept>

        <MoveCard character="clive"
          move={{
            input: 'f+3',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i20-21',
            onBlock: '-14',
            onHit: '+37a',
            tags: ['Mid', 'Launch', 'Whiff Punish'],
            description: 'Long range whiff punisher. Launches for full combo.',
            notes: [
              'Low crush 9-24',
              'Use when df+2 won\'t reach',
            ],
          }}
        />
      </Section>

      <Section title="Matchup-Specific Punishment">
        <p>
          Some moves from other characters require specific punishment. Here are common ones:
        </p>

        <Collapsible title="Matchup Punishment Reference" icon="📋">
          <div style={{ marginTop: '12px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Punish</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr><td style={{ padding: '8px' }}>Slide (generic)</td><td style={{ padding: '8px' }}>ws+4 float → combo</td></tr>
                <tr><td style={{ padding: '8px' }}>Asuka's b+3</td><td style={{ padding: '8px' }}>f+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>Kazuya db+1,2</td><td style={{ padding: '8px' }}>f+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>Ling RDS f+3+4,3+4</td><td style={{ padding: '8px' }}>1,2 / df+2 / f+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>Ling AOP 3+4</td><td style={{ padding: '8px' }}>ws+4 float</td></tr>
                <tr><td style={{ padding: '8px' }}>Leo's b+1,4 (evade)</td><td style={{ padding: '8px' }}>b+3 parry 2nd hit</td></tr>
                <tr><td style={{ padding: '8px' }}>Paul's Deathfist</td><td style={{ padding: '8px' }}>f+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>Bryan's Demoman (3rd hit)</td><td style={{ padding: '8px' }}>f+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>Alisa's b+3+4,(3+4)</td><td style={{ padding: '8px' }}>...</td></tr>
                <tr><td style={{ padding: '8px' }}>Claudio's f+2,2</td><td style={{ padding: '8px' }}>b+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>Kuma's f,f+2</td><td style={{ padding: '8px' }}>f+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>Heihachi's f,f+2</td><td style={{ padding: '8px' }}>f+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>Jack's d+1+2</td><td style={{ padding: '8px' }}>f+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>Jack's df+1,2,1,2</td><td style={{ padding: '8px' }}>f+1+2</td></tr>
                <tr><td style={{ padding: '8px' }}>King's JGS 4</td><td style={{ padding: '8px' }}>FC df+2 / cc d+1+2</td></tr>
              </tbody>
            </table>
          </div>
        </Collapsible>
      </Section>

      <Section title="Punishment Chart">
        <Collapsible title="Full Punishment Reference" icon="📋" defaultOpen>
          <p><strong>Standing:</strong></p>
          <ul>
            <li>i10: 1,2 (25 dmg, builds ZAN) or 1,1~F (PHX entry)</li>
            <li>i12: 2:1 (34 dmg) or 4,2 (25 dmg)</li>
            <li>i13: 1+2 (21 dmg, heat engager in Heat)</li>
            <li>i14: df+1,2:1 (41 dmg)</li>
            <li>i15: df+2 (LAUNCH ~65+ dmg)</li>
          </ul>
          <p><strong>While Standing:</strong></p>
          <ul>
            <li>i11: ws+4 (14 dmg, PHX entry)</li>
            <li>i13: ws+1,2 (30 dmg) or ws+1+2 (21 dmg, heat engager)</li>
            <li>i15: ws+2 (LAUNCH ~60+ dmg)</li>
          </ul>
          <p><strong>Whiff:</strong></p>
          <ul>
            <li>Close: df+2 (LAUNCH)</li>
            <li>Mid: f+1+2 (heat engager)</li>
            <li>Far: f+3 (LAUNCH)</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Practice">
        <PracticeBox
          title="Punishment Drill"
          setup="Set dummy to do various unsafe moves. Practice reacting with correct punish."
          tasks={[
            { id: 'i10', text: 'Punish -10 move with 1,2', type: 'counter', target: 10 },
            { id: 'i15', text: 'Punish -15 move with df+2 → combo', type: 'counter', target: 10 },
            { id: 'ws', text: 'Punish unsafe low with ws+2 → combo', type: 'counter', target: 10 },
            { id: 'whiff', text: 'Whiff punish with f+1+2', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
