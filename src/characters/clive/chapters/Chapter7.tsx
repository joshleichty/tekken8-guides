import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Heat & Zantetsuken"
      intro="Clive's mechanics are what separate good Clive players from great ones. Understanding Heat mode and the Zantetsuken gauge lets you maximize damage and close out rounds."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Learn Defense"
    >
      <Section title="Heat Mode">
        <p>
          Clive gains access to several powerful tools in Heat mode, including <span className="highlight">Ifrit moves</span> 
          and <span className="highlight">enhanced Torgal attacks</span>. His Heat mode is strong.
        </p>

        <KeyConcept title="What Changes in Heat" icon="🔥">
          <ul>
            <li><strong>f+1+2 becomes a launcher</strong> — Heat Dash for full combo</li>
            <li><strong>New string extensions</strong> — df+1,1 and f+2,2,1 (guard break)</li>
            <li><strong>Enhanced PHX Heat Smash</strong> — +8 on block, builds tons of meter</li>
            <li><strong>PHX 3,2 powered up</strong> — More damage on hell sweep</li>
            <li><strong>ws+3 powered up</strong> — Extra damage on the homing mid</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Engagers">
        <p>
          These moves enter Heat and give you access to your enhanced toolkit:
        </p>

        <SubSection title="f+1+2 (Primary)">
          <MoveCard character="clive"
            move={{
              input: 'f+1+2',
              hitLevel: ['m', 'm'],
              damage: '10, 18',
              startup: 'i16-17',
              onBlock: '-12',
              onHit: '+20a (+10)',
              tags: ['Mid', 'Heat Engager', 'Homing'],
              description: 'Your best heat engager. Huge range, tracks, launches in Heat.',
              notes: [
                'Heat Dash: +5, +45a (+35)',
                'In Heat: becomes a launcher for full combo',
              ],
            }}
          />
        </SubSection>

        <SubSection title="f+2,2,2 (Confirmable)">
          <MoveCard character="clive"
            move={{
              input: 'f+2,2,2',
              hitLevel: ['m', 'm', 'm'],
              damage: '10, 7, 20',
              startup: 'i15',
              onBlock: '-13',
              onHit: '+9a',
              tags: ['Mid', 'Heat Engager', 'CH Confirmable'],
              description: 'Counter-hit confirmable heat engager. If first hit CHs, mash the string.',
              notes: [
                'Heat Dash: +5, +67a (+50)',
                'Interrupt with i8 from 2nd block',
              ],
            }}
          />
        </SubSection>

        <SubSection title="1+2 / ws+1+2">
          <MoveCard character="clive"
            move={{
              input: '1+2',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i13',
              onBlock: '-9',
              onHit: '+2',
              tags: ['Mid', 'Heat Engager', 'Fast'],
              description: 'Fast heat engager. Great for punishing or as a panic button.',
            }}
          />
        </SubSection>

        <SubSection title="PHX 1+2">
          <MoveCard character="clive"
            move={{
              input: 'PHX 1+2',
              hitLevel: ['m', 'm'],
              damage: '10, 23',
              startup: 'i23-24',
              onBlock: '-7',
              onHit: '+9a (+0)',
              tags: ['Mid', 'Heat Engager', 'Safe', 'Stance'],
              description: 'Safe heat engager from Phoenix Shift. Great for frame traps.',
            }}
          />
        </SubSection>

        <SubSection title="SS 2,1">
          <MoveCard character="clive"
            move={{
              input: 'SS 2,1',
              hitLevel: ['m', 'm'],
              damage: '12, 23',
              startup: 'i17-18',
              onBlock: '-15',
              onHit: '+35d (-23d)',
              tags: ['Mid', 'Heat Engager', 'Sidestep'],
              description: 'Sidestep heat engager. Hit confirmable - delay the 1 on hit.',
              notes: [
                'Just frame input adds +3 damage',
                'Combo from first hit with 11f delay',
              ],
            }}
          />
        </SubSection>
      </Section>

      <Section title="Heat Mode Strings">
        <p>
          In Heat, Clive gains access to powerful new string extensions:
        </p>

        <SubSection title="df+1,1 Series (Heat Only)">
          <MoveCard character="clive"
            move={{
              input: 'H.df+1,1',
              hitLevel: ['m', 'm', 'm'],
              damage: '10, 13, 15',
              startup: 'i14-15',
              onBlock: '-12 (PHX -1)',
              onHit: '+3c (PHX +14c)',
              tags: ['Mid', 'Heat Only', 'PHX Transition'],
              description: 'New mid extension in Heat. Goes into PHX at +14 on hit!',
              notes: [
                'PHX transition with F or 4',
                'At +14 in PHX, everything is guaranteed',
                'Consumes Heat',
              ],
            }}
          />
          <MoveCard character="clive"
            move={{
              input: 'H.df+1,1,1',
              hitLevel: ['m', 'm', 'm', 'm', 'm'],
              damage: '10, 13, 15, 17, 22',
              startup: 'i14-15',
              onBlock: '-8',
              onHit: '+14a (+4a)',
              tags: ['Mid', 'Heat Only', 'Balcony Break'],
              description: 'Full extension. Safe on block, huge damage.',
              notes: [
                'Interrupt with i3 from 3rd block',
                '14 chip damage on block',
              ],
            }}
          />
          <TipBox variant="tip" title="The Heat Loop">
            In Heat: df+1,1~F puts you at +14 in PHX. At +14, PHX 1+2 becomes a frame trap. 
            This is Clive's scariest Heat pressure.
          </TipBox>
        </SubSection>

        <SubSection title="f+2,2,1 (Guard Break)">
          <MoveCard character="clive"
            move={{
              input: 'H.f+2,2,1',
              hitLevel: ['m', 'm', 'm'],
              damage: '10, 7, 25',
              startup: 'i15',
              onBlock: '-9',
              onHit: '+40d (-18d)',
              tags: ['Mid', 'Heat Only', 'Balcony Break'],
              description: 'New extension in Heat. Can be charged for guard break.',
              notes: [
                'Consumes Heat',
                '7 chip damage on block',
              ],
            }}
          />
          <MoveCard character="clive"
            move={{
              input: 'H.f+2,2,1*',
              hitLevel: ['m', 'm', 'm'],
              damage: '10, 7, 30',
              startup: 'i15',
              onBlock: '+11 (Guard Break)',
              onHit: '+52a',
              tags: ['Mid', 'Heat Only', 'Guard Break'],
              description: 'Charged version is a guard break! +11 on block.',
              notes: [
                'Consumes Heat',
                'Interrupt with i24 from 2nd block',
              ],
            }}
          />
          <TipBox variant="warning" title="The Guard Break">
            If you hold 1 during f+2,2,1, it becomes a guard break that's +11 on block. 
            On guard break, 1,2 is guaranteed. This is how you open up turtles in Heat.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Heat Combos">
        <KeyConcept title="Heat Dash Conversions" icon="💥">
          <ul>
            <li><strong>f+1+2~F (Heat):</strong> Full launch combo (see Chapter 5)</li>
            <li><strong>f+2,2,2~F:</strong> On counter hit, becomes a full combo</li>
            <li><strong>4,2,2~F (CH):</strong> Counter hit confirmable launcher</li>
            <li><strong>PHX 1+2~F:</strong> df+3,1 guaranteed in Heat</li>
          </ul>
        </KeyConcept>

        <p>
          All of Clive's heat dashes are <span className="highlight">hit confirmable</span>. 
          If you see the first hit land, hold forward to Heat Dash and get the full conversion.
        </p>
      </Section>

      <Section title="Zantetsuken Gauge">
        <p>
          The Zantetsuken gauge is Clive's unique mechanic. Build meter by using specific 
          "Odin Sword" attacks, then cash out with 1+4 for massive damage.
        </p>

        <KeyConcept title="How Zantetsuken Works" icon="⚡">
          <ul>
            <li><strong>Level 1:</strong> 1+4 does nothing useful</li>
            <li><strong>Level 2:</strong> 1+4 does 45 damage, transitions to attack throw</li>
            <li><strong>Level 3:</strong> 1+4 does 55 damage</li>
            <li><strong>Level 4:</strong> 1+4 does 65 damage, wall splats</li>
            <li><strong>Level 5:</strong> 1+4 does 80 damage, removes recoverable health!</li>
          </ul>
        </KeyConcept>

        <SubSection title="1+4 — Zantetsuken">
          <MoveCard character="clive"
            move={{
              input: '1+4',
              hitLevel: ['m'],
              damage: '10-80',
              startup: 'i22',
              onBlock: '-15',
              onHit: '+9a (ZAN1)',
              tags: ['Mid', 'Zantetsuken', 'Weapon'],
              description: 'The payoff move. Damage scales with Zantetsuken level.',
              notes: [
                'Level 1: 10 damage (useless)',
                'Level 2-5: Transitions to attack throw',
                'Level 5: Removes recoverable health',
                'Best used at end of combos',
              ],
            }}
          />
          <TipBox variant="tip" title="Combo Ender">
            The best use of Zantetsuken is at the end of a long combo. The damage barely 
            scales — you'll still do 33-34 damage even in a long combo at Level 5.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Building Zantetsuken">
        <p>
          These moves build Zantetsuken meter. Incorporate them into your gameplan:
        </p>

        <Collapsible title="Meter Building Moves" icon="📊" defaultOpen>
          <div style={{ marginTop: '12px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                  <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Hit</th>
                  <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr><td style={{ padding: '8px' }}>4,4,2</td><td style={{ textAlign: 'center', padding: '8px' }}>Good</td><td style={{ textAlign: 'center', padding: '8px' }}>Some</td><td style={{ padding: '8px' }}>Safe, CH launcher</td></tr>
                <tr><td style={{ padding: '8px' }}>1,2</td><td style={{ textAlign: 'center', padding: '8px' }}>0.30</td><td style={{ textAlign: 'center', padding: '8px' }}>0.14</td><td style={{ padding: '8px' }}>i10 punish</td></tr>
                <tr><td style={{ padding: '8px' }}>ws+1,2</td><td style={{ textAlign: 'center', padding: '8px' }}>0.40</td><td style={{ textAlign: 'center', padding: '8px' }}>0.14</td><td style={{ padding: '8px' }}>i13 WS punish</td></tr>
                <tr><td style={{ padding: '8px' }}>f,f+2</td><td style={{ textAlign: 'center', padding: '8px' }}>0.40</td><td style={{ textAlign: 'center', padding: '8px' }}>0.14</td><td style={{ padding: '8px' }}>Safe poke</td></tr>
                <tr><td style={{ padding: '8px' }}>PHX 2,2</td><td style={{ textAlign: 'center', padding: '8px' }}>0.72</td><td style={{ textAlign: 'center', padding: '8px' }}>0.10</td><td style={{ padding: '8px' }}>Side switch, combo ender</td></tr>
                <tr><td style={{ padding: '8px' }}>2,2,1+2</td><td style={{ textAlign: 'center', padding: '8px' }}>0.70</td><td style={{ textAlign: 'center', padding: '8px' }}>0.24</td><td style={{ padding: '8px' }}>Wall combo option</td></tr>
                <tr><td style={{ padding: '8px' }}>b+3,P,1+2</td><td style={{ textAlign: 'center', padding: '8px' }}>0.72</td><td style={{ textAlign: 'center', padding: '8px' }}>0.10</td><td style={{ padding: '8px' }}>Parry followup</td></tr>
                <tr><td style={{ padding: '8px' }}>PHX Heat Smash</td><td style={{ textAlign: 'center', padding: '8px' }}>1.16</td><td style={{ textAlign: 'center', padding: '8px' }}>0.66</td><td style={{ padding: '8px' }}>Best meter builder, +8 block!</td></tr>
              </tbody>
            </table>
          </div>
        </Collapsible>

        <TipBox variant="tip" title="Meter Strategy">
          The PHX Heat Smash is your fastest way to build meter — almost a full bar on hit! 
          In Heat, spam this when you have plus frames in PHX to quickly reach Level 5.
        </TipBox>
      </Section>

      <Section title="Using Zantetsuken Effectively">
        <KeyConcept title="When to Use 1+4" icon="⏰">
          <ul>
            <li><strong>End of long combos:</strong> Barely scales, still does 30+ damage at Level 5</li>
            <li><strong>Wall combos:</strong> Levels 2-4 wall splat for extended damage</li>
            <li><strong>Round closer:</strong> Level 5 removes gray health — use to secure kills</li>
            <li><strong>Never raw:</strong> -15 on block, don't throw it out in neutral</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Waste It">
          1+4 at Level 1 is useless. Wait until at least Level 2 before using it. Ideally, 
          save it for Level 4-5 where you get wall splat and max damage.
        </TipBox>
      </Section>

      <Section title="Practice">
        <PracticeBox
          title="Heat Mode Practice"
          setup="Enter Heat with f+1+2, then practice Heat strings."
          tasks={[
            { id: 'f12heat', text: 'f+1+2~F Heat Dash combo', type: 'counter', target: 10 },
            { id: 'df11', text: 'H.df+1,1~F → PHX mixup', type: 'counter', target: 10 },
            { id: 'guardbreak', text: 'H.f+2,2,1* guard break', type: 'counter', target: 5 },
            { id: 'heatsmash', text: 'PHX Heat Smash from plus frames', type: 'counter', target: 10 },
          ]}
        />

        <PracticeBox
          title="Zantetsuken Practice"
          setup="Build meter, then use 1+4 in combos."
          tasks={[
            { id: 'build', text: 'Reach Level 3 in a round', type: 'toggle' },
            { id: 'comboend', text: '1+4 at end of combo (Level 2+)', type: 'counter', target: 5 },
            { id: 'wallend', text: '1+4 as wall combo ender', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
