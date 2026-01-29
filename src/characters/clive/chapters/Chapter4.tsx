import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Lows & Pressure"
      intro="Clive's lows aren't flashy, but they're essential. This chapter covers how to open up blocking opponents and start your offense outside of Phoenix Shift."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn Combos"
    >
      <Section title="Understanding Clive's Lows">
        <p>
          Clive doesn't have a plus-on-hit unseeable low like Dragunov's d+2. Instead, his lows 
          are about <span className="highlight">creating opportunities</span> — chip damage, 
          frame advantage, and setting up his real mixups.
        </p>

        <KeyConcept title="Low Strategy" icon="📉">
          <ul>
            <li><strong>d+1</strong> — Plus on hit, sets up frame traps. Your main poke low.</li>
            <li><strong>FC df+2</strong> — Long range weapon low, safe-ish at -12.</li>
            <li><strong>db+4</strong> — Counter-hit launcher, unseeable, good tracking.</li>
            <li><strong>PHX 4</strong> — Fast stance low covered in Chapter 3.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Core Lows">
        <SubSection title="d+1 — The Main Poke">
          <MoveCard character="clive"
            move={{
              input: 'd+1',
              hitLevel: ['l'],
              damage: '14',
              startup: 'i18-19',
              onBlock: '-13',
              onHit: '+2',
              tags: ['Low', 'High Crush', 'Long Range'],
              description: 'Your primary poking low. Plus 2 on hit lets you frame trap with ws+4.',
              notes: [
                'High crush frames 6+',
                'Incredible range for a low poke',
                'Sets up the d+1 → ws+4 frame trap',
              ],
            }}
          />
          <p>
            d+1 is your <span className="highlight">bread and butter low</span>. At +2 on hit, 
            you can frame trap with ws+4 (i11), which goes into Phoenix Shift.
          </p>

          <KeyConcept title="The d+1 Loop" icon="🔄">
            <ul>
              <li><strong>d+1 (hit)</strong> → You're +2</li>
              <li><strong>ws+4~F</strong> → If they press, you hit them. If they block, you're in PHX at -5.</li>
              <li><strong>PHX mixup</strong> → Continue pressure or block</li>
            </ul>
          </KeyConcept>

          <TipBox variant="tip" title="The Mind Game">
            d+1 on hit doesn't guarantee anything, but opponents who respect ws+4 will stop 
            pressing. That's when you can start running the PHX mixup or go for FC df+2.
          </TipBox>
        </SubSection>

        <SubSection title="FC df+2 — Long Range Low">
          <MoveCard character="clive"
            move={{
              input: 'FC df+2',
              hitLevel: ['l'],
              damage: '18',
              startup: 'i19-20',
              onBlock: '-12',
              onHit: '+3c',
              tags: ['Low', 'Weapon', 'High Crush', 'Long Range'],
              description: 'Great range low that can\'t be low parried (weapon). -12 is manageable.',
              notes: [
                'High crush 1-20',
                'Cannot be low parried',
                'Enter FC from d+1 or crouch block',
              ],
            }}
          />
          <p>
            FC df+2 is <span className="highlight">Clive's best "real" low</span>. It has incredible 
            range, can't be low parried, and is only -12. The weapon property makes it unique.
          </p>

          <TipBox variant="tip" title="How to Access FC">
            The easiest way to get FC df+2 is from d+1. Do d+1, stay crouching, then df+2. 
            You can also access it from crouch block or full crouch.
          </TipBox>
        </SubSection>

        <SubSection title="db+4 — Counter-Hit Launcher">
          <MoveCard character="clive"
            move={{
              input: 'db+4',
              hitLevel: ['l'],
              damage: '20',
              startup: 'i19-20',
              onBlock: '-18',
              onHit: '+4c',
              onCH: '+67a (+51a)',
              tags: ['Low', 'CH Launcher', 'Homing-ish'],
              description: 'Unseeable low that launches on counter-hit. Very good tracking.',
              notes: [
                'Effectively homing (catches most sidesteps)',
                'On CH: full combo',
              ],
            }}
          />
          <p>
            db+4 is your <span className="highlight">high-risk, high-reward low</span>. It's launch 
            punishable at -18, but the counter-hit launch is devastating. Use it when opponents 
            are pressing buttons or stepping.
          </p>
          <TipBox variant="warning" title="Risk Management">
            db+4 is -18 — most characters can launch punish it. Don't spam this. Use it to 
            catch mashers or when opponents stop respecting your other lows.
          </TipBox>
        </SubSection>

        <SubSection title="ws+3 — The Mixup Launcher">
          <MoveCard character="clive"
            move={{
              input: 'ws+3',
              hitLevel: ['m', 'm'],
              damage: '20, 15 (20)',
              startup: 'i20-21',
              onBlock: '-8',
              onHit: '+21a (+11a)',
              tags: ['Mid', 'Homing', 'Launcher', 'Safe'],
              description: 'Homing mid launcher from crouch. Pairs with FC df+2 for a 50/50.',
              notes: [
                'Power up in Heat: 20 damage, +20a (+10a) on hit',
                'Jails from first attack',
                'Incredible pushback on block',
              ],
            }}
          />
          <p>
            ws+3 is the <span className="highlight">mid option for your crouch mixup</span>. From 
            d+1 or crouch, you can do ws+3 (mid launcher) or FC df+2 (low). Both are the same timing.
          </p>

          <KeyConcept title="The Crouch Mixup" icon="⚔️">
            <ul>
              <li><strong>From d+1:</strong> Stay crouching</li>
              <li><strong>FC df+2:</strong> Low option, +3 on hit, -12</li>
              <li><strong>ws+3:</strong> Mid option, launches, -8 and safe</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              This is a true 50/50. They have to guess.
            </p>
          </KeyConcept>
        </SubSection>
      </Section>

      <Section title="Supplementary Lows">
        <SubSection title="d+4 — Generic Low">
          <MoveCard character="clive"
            move={{
              input: 'd+4',
              hitLevel: ['l'],
              damage: '6',
              startup: 'i12',
              onBlock: '-15',
              onHit: '-4',
              tags: ['Low', 'Fast', 'High Crush'],
              description: 'Standard d+4. Fast but minus on hit. Use for quick pokes.',
            }}
          />
        </SubSection>

        <SubSection title="df+3 — Slow Low">
          <MoveCard character="clive"
            move={{
              input: 'df+3',
              hitLevel: ['l'],
              damage: '20',
              startup: 'i29-30',
              onBlock: '-26',
              onHit: '+3c',
              tags: ['Low', 'Homing', 'High Crush'],
              description: 'Slow homing low sweep. Has a just frame extension for more damage.',
              notes: [
                'df+3,1 is guaranteed on hit',
                'Just frame input adds +4 damage',
              ],
            }}
          />
        </SubSection>
      </Section>

      <Section title="Pressure Strings">
        <p>
          Beyond lows, Clive has several strings that create pressure situations:
        </p>

        <SubSection title="4,4 — Safe Into PHX">
          <MoveCard character="clive"
            move={{
              input: '4,4',
              hitLevel: ['m', 'h'],
              damage: '8, 13',
              startup: 'i12',
              onBlock: '-8',
              onHit: '+0',
              tags: ['Mid', 'High', 'PHX Transition'],
              description: 'Safe mid-high that goes into PHX at +6 on block.',
              notes: [
                'PHX transition: +6 block, +14 hit',
                'First hit is i12, good for pokes',
              ],
            }}
          />
          <p>
            4,4 is a <span className="highlight">great poke that transitions to PHX</span>. The 
            first hit is i12 mid, and the full string leaves you at +6 in Phoenix Shift.
          </p>
        </SubSection>

        <SubSection title="f+2,2 — Counter-Hit Confirmable">
          <MoveCard character="clive"
            move={{
              input: 'f+2,2',
              hitLevel: ['m', 'm'],
              damage: '10, 7',
              startup: 'i15',
              onBlock: '-8',
              onHit: '+3',
              tags: ['Mid', 'Poke', 'PHX Transition', 'Weapon'],
              description: 'Fast mid poke with PHX transition option. Counter-hit confirmable into heat engager.',
              notes: [
                'PHX transition: -5 block, +6 hit',
                'f+2,2,2 is a heat engager (confirm from CH)',
              ],
            }}
          />
          <p>
            f+2,2 is a <span className="highlight">workhorse poke</span>. In Heat, f+2,2,2 is 
            counter-hit confirmable into a heat engager — if you see the first hit counter, 
            mash out the full string.
          </p>
        </SubSection>
      </Section>

      <Section title="The Pressure Flowchart">
        <KeyConcept title="Opening Up Opponents" icon="🔓">
          <ul>
            <li><strong>Mid-range:</strong> f+1+2, b+2 → PHX mixups (covered in previous chapters)</li>
            <li><strong>Close range:</strong> 1,1 → PHX or 4,4 → PHX for plus frames into mixup</li>
            <li><strong>From crouch:</strong> d+1 → ws+4 frame trap OR stay crouching → FC df+2 / ws+3 50/50</li>
            <li><strong>When they're pressing:</strong> db+4 for CH launch or 1+2 as i13 mid check</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Layers">
          <p>Your pressure has layers:</p>
          <ol>
            <li>Establish mid-range dominance (f+1+2, b+2)</li>
            <li>Enter PHX for mid/low mixups</li>
            <li>Mix with d+1 → ws+4 / FC df+2 / ws+3 when close</li>
            <li>Catch mashers with db+4 or 1+2</li>
          </ol>
        </TipBox>
      </Section>

      <Section title="Practice">
        <PracticeBox
          title="Low Game Fundamentals"
          setup="Set dummy to guard all, then random guard."
          tasks={[
            { id: 'd1ws4', text: 'd+1 hit → ws+4~F (frame trap)', type: 'counter', target: 10 },
            { id: 'fcdf2', text: 'd+1 → stay crouching → FC df+2', type: 'counter', target: 10 },
            { id: 'ws3', text: 'd+1 → stay crouching → ws+3 (mid option)', type: 'counter', target: 10 },
            { id: 'db4ch', text: 'Land CH db+4 → convert to combo', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
