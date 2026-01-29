import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible,
  StanceBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Phoenix Shift"
      intro="Phoenix Shift (PHX) is where Clive becomes truly terrifying. This stance gives you mid/low mixups, frame traps, and explosive damage. Master this, and opponents will fear blocking your b+2."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Lows"
    >
      <Section title="What is Phoenix Shift?">
        <StanceBox name="Phoenix Shift (PHX)" input="F or 4 after certain moves">
          <p>Clive's signature stance. Enter from many moves to access powerful mixups.</p>
          <p style={{ marginTop: '8px' }}><strong>Key Features:</strong></p>
          <ul>
            <li>Can still block in PHX (unlike Hwoarang's flamingo)</li>
            <li>Mid/low mixup at same speed (i15)</li>
            <li>Heat engager option (PHX 1+2)</li>
            <li>Plus frame option (PHX 3+4 is +7)</li>
          </ul>
          <p style={{ marginTop: '8px' }}><strong>Main Entries:</strong></p>
          <ul>
            <li>b+2~F (+6 block / +23 hit)</li>
            <li>df+1,2~F (+6 block / +14 hit)</li>
            <li>f,f,F+2~F (+14 block / +43d hit)</li>
            <li>1,1~F (-3 block / +6 hit)</li>
            <li>4,4~F (+6 block / +14 hit)</li>
            <li>ws+4~F (-5 block / +6 hit)</li>
          </ul>
        </StanceBox>

        <TipBox variant="tip" title="The Key Difference">
          Unlike Hwoarang's flamingo stances, you CAN still block in Phoenix Shift. This makes 
          it much safer to enter. You're not committed — you can block if they challenge you.
        </TipBox>
      </Section>

      <Section title="The Core PHX Options">
        <p>
          Phoenix Shift has two tiers of options: <strong>fast options</strong> (i13-15) for 
          frame traps and <strong>slow options</strong> for when opponents respect you.
        </p>

        <SubSection title="PHX 2 — The Safe Mid">
          <MoveCard character="clive"
            videoId="PHX.2"
            move={{
              input: 'PHX 2',
              hitLevel: ['m'],
              damage: '12',
              startup: 'i15',
              onBlock: '-7',
              onHit: '+4',
              onCH: '+35d (+27)',
              tags: ['Mid', 'Safe', 'Weapon'],
              description: 'Your go-to PHX option. Safe on block, counter-hit gives combo.',
              notes: [
                'PHX 2,1 is a tornado followup (combo from 1st hit with 4f delay)',
                'PHX 2,2 gives Zantetsuken meter',
                '3 chip damage on block',
              ],
            }}
          showVideo
          />
          <p>
            PHX 2 is your <span className="highlight">default option</span>. It's safe, it's mid, 
            and on counter-hit you get massive damage. If you don't know what to do, PHX 2.
          </p>

          <KeyConcept title="PHX 2 Extensions" icon="➕">
            <ul>
              <li><strong>PHX 2,1</strong> — Tornado, wall carry. Use in combos.</li>
              <li><strong>PHX 2,2</strong> — Builds Zantetsuken meter (+0.72 on hit). Side switches.</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <SubSection title="PHX 4 — The Fast Low">
          <MoveCard character="clive"
            videoId="PHX.4"
            move={{
              input: 'PHX 4',
              hitLevel: ['l'],
              damage: '15',
              startup: 'i15-16',
              onBlock: '-13',
              onHit: '-1c',
              onCH: '+13c',
              tags: ['Low', 'High Crush'],
              description: 'Fast low at same speed as PHX 2. The core of your mixup.',
              notes: [
                'On CH: ws+1+2 or ws+1,2 guaranteed',
                'High crush frames 6+',
              ],
            }}
          showVideo
          />
          <p>
            PHX 4 is your <span className="highlight">main low from stance</span>. It's the same 
            speed as PHX 2 (i15), creating a true 50/50. On counter-hit, you get a full combo.
          </p>
          <TipBox variant="tip" title="Counter-Hit Conversion">
            On CH PHX 4, do ws+1+2 (heat engager, +8 on block) or ws+1,2 (builds meter). 
            Both are guaranteed and give you strong follow-up positions.
          </TipBox>
        </SubSection>

        <SubSection title="PHX 1+2 — Heat Engager">
          <MoveCard character="clive"
            videoId="PHX.1+2"
            move={{
              input: 'PHX 1+2',
              hitLevel: ['m', 'm'],
              damage: '10, 23',
              startup: 'i23-24',
              onBlock: '-7',
              onHit: '+9a (+0)',
              tags: ['Mid', 'Heat Engager', 'Safe', 'Weapon'],
              description: 'Safe heat engager from stance. i13 startup makes it a frame trap from +14.',
              notes: [
                'Heat Dash: +5, +43d (+35)',
                'Heals 3 recoverable health on hit',
                '6 chip damage on block (8 in Heat)',
              ],
            }}
          showVideo
          />
          <p>
            PHX 1+2 is <strong>i13</strong> internally (i23-24 total), making it a frame trap 
            from your +14 transitions (f,f,F+2~F, df+1,1~F in Heat). Use this to blow up mashers.
          </p>
        </SubSection>

        <SubSection title="PHX 3,2 — Hell Sweep">
          <MoveCard character="clive"
            videoId="PHX.3,2"
            move={{
              input: 'PHX 3,2',
              hitLevel: ['l', 'm', 'm'],
              damage: '8, 18, 20',
              startup: 'i21',
              onBlock: '-26 (stagger)',
              onHit: '+39a (+29)',
              tags: ['Low', 'Launcher', 'High Risk'],
              description: 'Launch punishable low but gives huge damage on hit. Use sparingly.',
              notes: [
                'First hit only is i21, -26 on block',
                'Full string is combo on hit',
                'Power up in Heat (36 damage on final hit)',
              ],
            }}
          showVideo
          />
          <TipBox variant="warning" title="High Risk, High Reward">
            PHX 3,2 is launch punishable. Use it when opponents are heavily respecting PHX 4 and 
            not ducking. Once you've conditioned them, this steals rounds.
          </TipBox>
        </SubSection>

        <SubSection title="PHX 3+4 — Plus Frame Option">
          <MoveCard character="clive"
            videoId="PHX.3+4"
            move={{
              input: 'PHX 3+4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i28-29',
              onBlock: '+7',
              onHit: '+18a (+8)',
              tags: ['Mid', 'Homing', 'Plus Frames'],
              description: 'Plus 7 on block homing mid. Use when you want to keep pressure safely.',
              notes: [
                'Low crush 18-39',
                'At +7, you can frame trap with anything',
              ],
            }}
          showVideo
          />
          <p>
            PHX 3+4 is your <span className="highlight">safe pressure option</span>. It's +7 on 
            block, homing, and lets you continue offense. Use this when opponents are respecting 
            but you don't want to risk the hell sweep.
          </p>
        </SubSection>
      </Section>

      <Section title="Frame Advantage in PHX">
        <KeyConcept title="The Key Numbers" icon="📊">
          <ul>
            <li><strong>+6 (b+2, 4,4, df+1,2):</strong> PHX 2 and PHX 4 are frame traps. Opponents can't jab.</li>
            <li><strong>+14 (f,f,F+2, Heat df+1,1):</strong> PHX 1+2 becomes a frame trap. Everything works.</li>
            <li><strong>+23 (b+2 on hit):</strong> EVERYTHING is guaranteed, even the hell sweep.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The b+2 Hit Confirm">
          If b+2 hits, hold forward immediately. At +23 in PHX, you can do PHX 2,1 for guaranteed 
          tornado combo, or PHX 3,2 for the hell sweep — both are guaranteed on hit!
        </TipBox>

        <p>
          The key to Phoenix Shift is knowing <strong>what's guaranteed at each frame advantage</strong>:
        </p>

        <Collapsible title="PHX Frame Trap Reference" icon="📋" defaultOpen>
          <div style={{ marginTop: '12px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Entry</th>
                  <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Advantage</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>What Works</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr>
                  <td style={{ padding: '8px' }}>b+2~F (block)</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                  <td style={{ padding: '8px' }}>PHX 2, PHX 4 frame trap jabs</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>b+2~F (hit)</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>+23</td>
                  <td style={{ padding: '8px', color: 'var(--success)' }}>EVERYTHING guaranteed</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>f,f,F+2~F (block)</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>+14</td>
                  <td style={{ padding: '8px' }}>PHX 1+2, PHX 2, PHX 4 all frame trap</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>1,1~F (block)</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>-3</td>
                  <td style={{ padding: '8px' }}>Can still block; use PHX 1 armor</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>4,4~F (block)</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                  <td style={{ padding: '8px' }}>PHX 2, PHX 4 frame trap</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>df+1,2~F (block)</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>+6</td>
                  <td style={{ padding: '8px' }}>PHX 2, PHX 4 frame trap</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>ws+4~F (block)</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>-5</td>
                  <td style={{ padding: '8px' }}>Risky; block or use PHX 1 armor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Collapsible>
      </Section>

      <Section title="PHX Armor Move">
        <SubSection title="PHX 1 — Power Crush">
          <MoveCard character="clive"
            videoId="PHX.1"
            move={{
              input: 'PHX 1',
              hitLevel: ['m', 'm', 't'],
              damage: '16, 15, 10',
              startup: 'i21',
              onBlock: '-14',
              onHit: '+0d',
              tags: ['Mid', 'Power Crush', 'Attack Throw', 'Weapon'],
              description: 'Armor move from PHX. Use when you expect them to challenge.',
              notes: [
                'Power crush 7-20',
                'Transitions to attack throw on front standing hit',
                'Heals 5 recoverable health on hit',
              ],
            }}
          showVideo
          />
          <p>
            PHX 1 is your <span className="highlight">answer to mashers</span>. If you enter PHX 
            from 1,1 (-3) or ws+4 (-5), opponents might try to jab you out. PHX 1 absorbs their 
            attack and converts into damage.
          </p>
        </SubSection>
      </Section>

      <Section title="The PHX Flowchart">
        <KeyConcept title="Decision Making in PHX" icon="🔄">
          <ul>
            <li><strong>At +14 or higher:</strong> PHX 1+2 (frame trap heat engager) or PHX 3,2 (guaranteed hell sweep)</li>
            <li><strong>At +6:</strong> PHX 2/PHX 4 mixup — they can't jab, must guess mid or low</li>
            <li><strong>At 0 or minus:</strong> Block, or PHX 1 if you expect them to press</li>
            <li><strong>If they're respecting:</strong> PHX 3+4 for +7 and continue pressure</li>
            <li><strong>If they never duck:</strong> PHX 3,2 hell sweep to teach them</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Start Simple">
          If this feels overwhelming, start with just <strong>PHX 2 and PHX 4</strong>. They're the 
          same speed, same startup, pure 50/50. Add the other options as you get comfortable.
        </TipBox>
      </Section>

      <Section title="Heat Mode PHX">
        <p>
          In Heat, Clive gets a new PHX option from his Heat Smash:
        </p>

        <SubSection title="H.PHX 2+3 — Heat Smash">
          <MoveCard character="clive"
            videoId="H.PHX.2+3"
            move={{
              input: 'H.PHX 2+3',
              hitLevel: ['m'],
              damage: '42',
              startup: 'i15-16',
              onBlock: '+8',
              onHit: '+0',
              tags: ['Mid', 'Heat Smash', 'Zantetsuken'],
              description: 'Heat Smash from PHX. Builds massive Zantetsuken meter and is +8 on block!',
              notes: [
                'Builds 1.16 ZAN on hit, 0.66 on block',
                'Floor break',
                'Deals recoverable damage only',
                '9 chip damage on block',
              ],
            }}
          showVideo
          />
          <p>
            The PHX Heat Smash is <span className="highlight">+8 on block</span> and builds nearly 
            a full bar of Zantetsuken. This is incredible for maintaining pressure while building meter.
          </p>
        </SubSection>
      </Section>

      <Section title="Practice">
        <PracticeBox
          title="Phoenix Shift Fundamentals"
          setup="Set dummy to guard all. Practice entering PHX from different moves."
          tasks={[
            { id: 'b2phx', text: 'b+2~F into PHX 2 (safe mid)', type: 'counter', target: 10 },
            { id: 'mixup', text: 'b+2~F into PHX 4 (low mixup)', type: 'counter', target: 10 },
            { id: 'running', text: 'f,f,F+2~F into PHX 1+2 (frame trap)', type: 'counter', target: 10 },
            { id: 'plus', text: 'Any entry into PHX 3+4 (plus frames)', type: 'counter', target: 10 },
          ]}
        />

        <PracticeBox
          title="Hit Confirm Practice"
          setup="Set dummy to random guard. Confirm b+2 hit into combo."
          tasks={[
            { id: 'confirm', text: 'b+2 hit → PHX 2,1 (tornado combo)', type: 'counter', target: 10 },
            { id: 'block', text: 'b+2 block → PHX mixup (don\'t commit to combo)', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
