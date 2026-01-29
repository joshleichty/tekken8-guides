import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Mid-Range Control"
      intro="Jack's long arms dominate mid-range. This chapter teaches you the tools that make opponents fear approaching and give you free damage when they whiff."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Learn GMH Defense"
    >
      <Section title="Why Mid-Range Matters">
        <p>
          Mid-range (Range 2) is <span className="highlight">where Jack thrives</span>. 
          His tools reach further than most characters' attacks. From here, you can:
        </p>
        <ul>
          <li>Hit them when their moves whiff</li>
          <li>Poke safely because they can't punish at this distance</li>
          <li>Control the pace of the match</li>
          <li>Force them to take risks to approach</li>
        </ul>

        <KeyConcept title="Mid-Range Philosophy" icon="📏">
          <ul>
            <li><strong>Your attacks reach</strong> — Their attacks don't</li>
            <li><strong>Safe pressure</strong> — Minus moves become safe with pushback</li>
            <li><strong>Whiff punishment heaven</strong> — df+2 catches everything</li>
            <li><strong>They must approach</strong> — And you punish their approach</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="f,f,f+1+2 — Running Shoulder">
        <MoveCard character="jack-8"
          move={{
            input: 'f,f,f+1+2',
            hitLevel: ['m'],
            damage: '34',
            startup: 'i20-23',
            onBlock: '+4',
            onHit: '+7a (-2)',
            tags: ['Mid', 'Running', 'Plus on Block', 'Wall Splat', 'Chip'],
            description: 'Your approach tool. +4 on block, wall splats, does chip damage.',
            notes: [
              '+4 on block lets you continue pressure',
              'Wall splats for combo',
              '10 chip damage on block',
              'Great oki tool after knockdowns'
            ]
          }}
        />

        <SubSection title="The Shoulder is Your Friend">
          <p>
            Running 1+2 is <span className="highlight">one of the best running moves in 
            Tekken</span>. It's +4 on block — that's insane for a running attack. Use it:
          </p>
          <ul>
            <li><strong>After knockdowns</strong> — Run up shoulder while they're getting up</li>
            <li><strong>To approach</strong> — Close distance and stay plus</li>
            <li><strong>Near walls</strong> — Wall splat for huge damage</li>
            <li><strong>For chip</strong> — 10 chip damage if they block</li>
          </ul>
        </SubSection>

        <TipBox variant="tip" title="After Every Knockdown">
          When you knock them down, <strong>run up and shoulder</strong>. If they try to 
          wake up with an attack, you armor through (it's a mid). If they block, you're +4. 
          If they stay down, you hit them grounded. Win-win-win.
        </TipBox>
      </Section>

      <Section title="f+2 — The Panic Button">
        <MoveCard character="jack-8"
          move={{
            input: 'f+2',
            hitLevel: ['h'],
            damage: '22',
            startup: 'i10',
            onBlock: '-12',
            onHit: '+5',
            onCH: '+32a (+24)',
            tags: ['High', 'i10', 'CH Knockdown', 'Panic Move'],
            description: 'Jack\'s fastest move at i10. CH splats for guaranteed f,f+4.',
            notes: [
              'Your 10-frame punish option',
              'Punishable on block (-12)',
              'On CH: f,f+4 guaranteed (50+ damage)',
              'Use when panicking or for punishes'
            ]
          }}
        />

        <SubSection title="Jack's 10-Framer">
          <p>
            Most characters have i10 jabs. Jack's jab (1) is i12, and even his 2 is i11. 
            <span className="highlight">f+2 is his only i10 move</span>. It's punishable, 
            but on counter-hit, it's devastating.
          </p>

          <KeyConcept title="When to Use f+2" icon="⚡">
            <ul>
              <li><strong>10-frame punishment</strong> — When you block something -10</li>
              <li><strong>Panic situations</strong> — Under pressure, need to check</li>
              <li><strong>CH fishing</strong> — If you read they're pressing</li>
              <li><strong>NOT as a poke</strong> — -12 is risky for general use</li>
            </ul>
          </KeyConcept>
        </SubSection>
      </Section>

      <Section title="f,f+4 — The Big Boot">
        <MoveCard character="jack-8"
          move={{
            input: 'f,f+4',
            hitLevel: ['m'],
            damage: '32',
            startup: 'i16',
            onBlock: '-10',
            onHit: '+15d (+5)',
            tags: ['Mid', 'Tornado', 'Wall Splat', 'Guaranteed Follow-up'],
            description: 'Big damage boot. Tornado in combos, wall splats, +15d on hit.',
            notes: [
              'Tornado property for combos',
              'Wall splats',
              '12 chip damage on block',
              'Guaranteed after CH f+2, ss2, etc.'
            ]
          }}
        />

        <SubSection title="The Boot's Uses">
          <p>
            f,f+4 is your <span className="highlight">big damage mid from range</span>. Use it:
          </p>
          <ul>
            <li><strong>As guaranteed follow-up</strong> — After CH f+2, ss2 hit, etc.</li>
            <li><strong>For wall splats</strong> — Near wall it leads to huge damage</li>
            <li><strong>In combos</strong> — Tornado property extends juggles</li>
            <li><strong>Sparingly in neutral</strong> — -10 is punishable</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="df+2 — The Whiff Punisher">
        <MoveCard character="jack-8"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15',
            onBlock: '-14',
            onHit: '+31a (+21)',
            tags: ['Mid', 'Launcher', 'Whiff Punisher', 'Long Range'],
            description: 'Generic launcher with exceptional range. Your primary whiff punish.',
            notes: [
              'Range is much longer than most df+2s',
              'Has df+2,1 extension',
              'df+2,1 (hold) charges for more damage',
              '-14 on block, use for punishes not pokes'
            ]
          }}
        />

        <SubSection title="Whiff Punish King">
          <p>
            Jack's df+2 reaches <span className="highlight">distances other launchers can't 
            dream of</span>. When the opponent whiffs, don't hesitate — df+2 into full combo.
          </p>

          <TipBox variant="tip" title="The Formula">
            <strong>Backdash → They whiff → df+2 → Full combo (60+ damage)</strong>
            <br /><br />
            This is your primary damage source from neutral. Make it muscle memory.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="b+2 — The Heat Engager">
        <MoveCard character="jack-8"
          move={{
            input: 'b+2',
            hitLevel: ['m'],
            damage: '27',
            startup: 'i19',
            onBlock: '+2',
            onHit: '+2a',
            tags: ['Mid', 'Heat Engager', 'Plus on Block', 'Chargeable', 'Wall Splat'],
            description: 'Strong mid heat engager. Plus on block. Can charge for more damage.',
            notes: [
              'Heat engager',
              'b+2* (charged) is 40 damage, wall crushes, gives GMC',
              '+2 on block means it\'s your turn',
              'Wall splats'
            ]
          }}
        />

        <SubSection title="Heat Activation Tool">
          <p>
            When you want to enter heat mid-match, <span className="highlight">b+2 is your 
            go-to</span>. It's plus on block, wall splats, and can be charged for extra damage 
            and GMC.
          </p>
        </SubSection>
      </Section>

      <Section title="b+1+2 — Long Range Launcher">
        <MoveCard character="jack-8"
          move={{
            input: 'b+1+2',
            hitLevel: ['m'],
            damage: '28',
            startup: 'i14',
            onBlock: '-19',
            onHit: '-1d (-10)',
            tags: ['Mid', 'Heat Engager', 'Long Range', 'Launch Punish'],
            description: 'Long range mid heat engager. Very useful for punishment but very unsafe.',
            notes: [
              'Heat engager',
              'Incredible range for an i14 move',
              '-19 on block is very punishable',
              'Use for punishing, not poking'
            ]
          }}
        />

        <TipBox variant="warning" title="Punishment Only">
          b+1+2 is <span className="highlight-secondary">-19 on block</span>. That's 
          guaranteed launch for most characters. Use it for punishing unsafe moves, 
          not as a poking tool.
        </TipBox>
      </Section>

      <Section title="1+2 — The Homing Mid">
        <MoveCard character="jack-8"
          move={{
            input: '1+2',
            hitLevel: ['m', 'm'],
            damage: '8, 14',
            startup: 'i15',
            onBlock: '-13',
            onHit: '+67a (+51)',
            tags: ['Mid', 'Mid', 'Homing', 'Tornado', 'Instant Tornado'],
            description: 'Homing mid that catches sidesteps. Tornado property for combos.',
            notes: [
              'Homing — catches sidesteps',
              'Tornado and Instant Tornado property',
              'Use when they\'re stepping your linear moves'
            ]
          }}
        />

        <SubSection title="Anti-Sidestep">
          <p>
            When opponents start sidestepping your f+4,1 and other linear moves, 
            <span className="highlight">1+2 tracks them down</span>. Mix it in to keep 
            them honest.
          </p>
        </SubSection>
      </Section>

      <Section title="Mid-Range Gameplan">
        <KeyConcept title="Controlling Mid-Range" icon="🎯">
          <ol>
            <li><strong>Establish range</strong> — Backdash to Range 2</li>
            <li><strong>Poke with f+4,1</strong> — Safe at this distance, +8 on hit</li>
            <li><strong>Watch for whiffs</strong> — df+2 punishes everything</li>
            <li><strong>Catch sidesteps</strong> — 1+2 when they're evasive</li>
            <li><strong>Approach with shoulder</strong> — f,f,f+1+2 when you need to close</li>
            <li><strong>Mix in lows</strong> — db+1 from range still works</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Range is Your Defense">
          At mid-range, many moves that are minus on block become <strong>effectively safe</strong> 
          because of pushback. f+4,1 is -6 but opponents can't punish from that distance. 
          This is why range control matters so much for Jack.
        </TipBox>
      </Section>

      <Section title="Checkpoint">
        <SkillCheck
          title="Mid-Range Control Check"
          subtitle="Confirm you understand Jack's mid-range game"
          skills={[
            { id: 'shoulder', skill: 'I use running 1+2 for approach and oki', description: '+4 on block approach' },
            { id: 'whiff', skill: 'I punish whiffs with df+2', description: 'React to whiffs' },
            { id: 'range', skill: 'I understand why mid-range is Jack\'s home', description: 'Range advantage' },
            { id: 'homing', skill: 'I use 1+2 against sidesteppers', description: 'Track evasion' },
          ]}
          requiredToPass={3}
        />
      </Section>

      <Section title="Chapter Summary">
        <p>Mid-range tools:</p>
        <ul>
          <li><strong>f,f,f+1+2</strong> — Running shoulder, +4 on block, approach and oki</li>
          <li><strong>f+2</strong> — i10 panic button, CH into f,f+4</li>
          <li><strong>f,f+4</strong> — Big boot, guaranteed after CH f+2</li>
          <li><strong>df+2</strong> — Whiff punish launcher, exceptional range</li>
          <li><strong>b+2</strong> — Heat engager, plus on block</li>
          <li><strong>1+2</strong> — Homing mid to catch sidesteps</li>
        </ul>
        <p>
          Next chapter covers Gamma Howl defense — Jack's new stance and how it changes his 
          defensive game.
        </p>
      </Section>
    </Chapter>
  )
}
