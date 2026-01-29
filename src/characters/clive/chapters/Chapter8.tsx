import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Defense & Parry"
      intro="Clive has one of the best parries in Tekken 8 and solid defensive tools. This chapter covers how to survive pressure and turn the tables when you're on defense."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Complete Clive"
    >
      <Section title="The Defense Problem">
        <p>
          Clive's <span className="highlight-secondary">weakest range is up close</span>. His jab 
          is stubby, his df+1 is slow at i14, and his tracking suffers at point-blank range. 
          When opponents get in your face, you need specific tools to escape.
        </p>

        <KeyConcept title="Close-Range Survival" icon="🛡️">
          <ul>
            <li><strong>b+3 (Parry):</strong> One of the best parries in the game</li>
            <li><strong>1+2:</strong> i13 mid, heals, heat engager — your panic button</li>
            <li><strong>b+1+2 (Titan):</strong> Power crush with insane range</li>
            <li><strong>1,1:</strong> Stubby but it's i10 and jails into stance</li>
            <li><strong>Backdash:</strong> Create space, return to your preferred range</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Parry — b+3">
        <p>
          Clive's parry is <span className="highlight">one of the best in the game</span>. It 
          parries highs, mids, punches, kicks, AND weapons. Only throws, unblockables, and some 
          charge moves go through it.
        </p>

        <SubSection title="b+3 — Vapaad">
          <MoveCard character="clive"
            move={{
              input: 'b+3',
              hitLevel: ['—'],
              damage: '—',
              startup: 'i5',
              onBlock: '—',
              onHit: '—',
              tags: ['Parry', 'High/Mid', 'Weapons'],
              description: 'Parries highs and mids, including weapons. Active frames 5-13.',
              notes: [
                'Parry state: frames 5-13 (8 active frames)',
                'Does NOT parry throws, unblockables, or some charge moves',
                'Slows down time on successful parry',
                'Two followup options',
              ],
            }}
          />
        </SubSection>

        <SubSection title="Parry Followups">
          <MoveCard character="clive"
            move={{
              input: 'b+3,P,2',
              hitLevel: ['m'],
              damage: '35',
              startup: 'i20-21',
              onBlock: '+3',
              onHit: '+16a (+6a)',
              tags: ['Mid', 'Parry Followup', 'Knockback'],
              description: 'Knockback followup. Use when you have wall behind opponent.',
              notes: [
                'Reversal break',
                'Keeps same side',
                'Wall splats',
              ],
            }}
          />
          <MoveCard character="clive"
            move={{
              input: 'b+3,P,1+2',
              hitLevel: ['m', 't'],
              damage: '35',
              startup: 'i20-21',
              onBlock: '-13',
              onHit: '+5d',
              tags: ['Mid', 'Parry Followup', 'Zantetsuken', 'Side Switch'],
              description: 'Meter building followup. Use when your back is to the wall.',
              notes: [
                'Builds 0.72 Zantetsuken on hit',
                'Side switch on hit',
                'Transitions to attack throw',
              ],
            }}
          />
          <TipBox variant="tip" title="Which Followup?">
            <ul>
              <li><strong>b+3,P,2:</strong> Use when opponent has wall behind them (wall splat)</li>
              <li><strong>b+3,P,1+2:</strong> Use when YOUR back is to wall (side switch) or for meter</li>
            </ul>
          </TipBox>
        </SubSection>

        <KeyConcept title="What b+3 Beats" icon="✅">
          <ul>
            <li>All highs (jabs, high kicks, etc.)</li>
            <li>All mids (df+1, df+2, hopkicks, etc.)</li>
            <li>Weapon attacks (sword moves, etc.)</li>
            <li>Power crushes (the attack portion)</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="What b+3 Loses To" icon="❌">
          <ul>
            <li>Throws (all types)</li>
            <li>Unblockables (most of them — some work)</li>
            <li>Charge moves</li>
            <li>Lows</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Parry Quirks">
          The parry actually DOES work against some "unblockables" like Heihachi's homing high. 
          Test in the lab for specific matchups.
        </TipBox>
      </Section>

      <Section title="Power Crush — b+1+2">
        <SubSection title="b+1+2 — Titan">
          <MoveCard character="clive"
            move={{
              input: 'b+1+2',
              hitLevel: ['m'],
              damage: '25 (34 absorb)',
              startup: 'i24-25',
              onBlock: '-14 (-7 absorb)',
              onHit: '+14a (+4a)',
              tags: ['Mid', 'Power Crush', 'Long Range'],
              description: 'Obnoxious power crush with insane range. Safe at distance.',
              notes: [
                'Power crush frames 7-23',
                'Damage taken during absorb is recoverable',
                'At max range, -14 is often unpunishable',
              ],
            }}
          />
          <p>
            Titan is your <span className="highlight">get-off-me tool</span>. The range is absurd — 
            you can use it from mid-range and most characters can't punish even at -14 due to pushback.
          </p>
          <TipBox variant="tip" title="The Range Trick">
            At max range, b+1+2 is effectively safe. Use it when opponents are approaching 
            or pressuring from slight distance. Up close, it's risky at -14.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Panic Buttons">
        <SubSection title="1+2 — Fast Mid">
          <MoveCard character="clive"
            move={{
              input: '1+2',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i13',
              onBlock: '-9',
              onHit: '+2',
              tags: ['Mid', 'Heat Engager', 'Fast'],
              description: 'Your best close-range defensive button. Fast, safe-ish, heals, heat engages.',
              notes: [
                'Heals 5 recoverable health on hit',
                'Heat engager',
                'Great timing for defense',
              ],
            }}
          />
          <p>
            When you're being pressured and need to interrupt, 1+2 is your best option. It's 
            i13, mid, heals you, and can heat engage. Learn the timing for gaps in opponent pressure.
          </p>
        </SubSection>

        <SubSection title="1,1 — Jab Check">
          <MoveCard character="clive"
            move={{
              input: '1,1',
              hitLevel: ['h', 'h'],
              damage: '5, 13',
              startup: 'i10',
              onBlock: '-3',
              onHit: '+6',
              tags: ['High', 'Jail', 'PHX Transition'],
              description: 'Your fastest button. Use to interrupt and go into stance.',
            }}
          />
          <p>
            1,1 is stubby but it's i10. Use it when you need speed. On hit, you can go into 
            Phoenix Shift for pressure. On block, you're only -3.
          </p>
        </SubSection>

        <SubSection title="3+4 — Low Parry Stance">
          <MoveCard character="clive"
            move={{
              input: '3+4',
              hitLevel: ['—'],
              damage: '—',
              startup: '—',
              onBlock: '—',
              onHit: '—',
              tags: ['Stance', 'Low Parry', 'Movement'],
              description: 'Special stance with built-in low parry. Can move forward/backward.',
              notes: [
                'Strong low parry effect (active while moving)',
                'Move with b or f',
                'Cancel with db, d, or df',
              ],
            }}
          />
          <TipBox variant="tip" title="Situational Tool">
            3+4 is useful against opponents who spam lows, especially predictable lows like 
            snake edges. It's not something you'll use constantly, but know it exists.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Escaping Pressure">
        <KeyConcept title="Defensive Flowchart" icon="🔄">
          <ul>
            <li><strong>They're jabbing:</strong> b+3 parry their jabs</li>
            <li><strong>They're doing strings:</strong> Find the gap, 1+2 or b+3</li>
            <li><strong>They're approaching:</strong> b+1+2 (Titan) or backdash to range</li>
            <li><strong>They're doing lows:</strong> Low parry or 3+4 stance</li>
            <li><strong>You need space:</strong> Backdash → f+1+2 to establish range</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Panic">
          Clive players often panic when pressured because his close-range game feels awkward. 
          Stay calm. Use b+3 to parry, backdash to create space, then re-establish mid-range.
        </TipBox>
      </Section>

      <Section title="Movement Basics">
        <p>
          Clive's movement is average — not elite like Mishimas, but serviceable. Focus on:
        </p>

        <KeyConcept title="Movement Priorities" icon="🏃">
          <ul>
            <li><strong>Backdash:</strong> Your primary escape tool. Create space constantly.</li>
            <li><strong>Sidestep:</strong> Use sparingly. Your tracking moves handle most sidesteppers.</li>
            <li><strong>Forward movement:</strong> Walk forward or dash into f,f,F+2 to approach.</li>
            <li><strong>Don't chase:</strong> Let them come to you at mid-range.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Practice">
        <PracticeBox
          title="Parry Practice"
          setup="Set dummy to do jab strings. Practice parry timing."
          tasks={[
            { id: 'parry', text: 'Parry jab with b+3', type: 'counter', target: 10 },
            { id: 'followup2', text: 'b+3,P,2 followup (wall splat)', type: 'counter', target: 10 },
            { id: 'followup12', text: 'b+3,P,1+2 followup (meter)', type: 'counter', target: 10 },
          ]}
        />

        <PracticeBox
          title="Escape Pressure"
          setup="Set dummy to do various pressure strings. Practice escaping."
          tasks={[
            { id: 'interrupt', text: 'Interrupt with 1+2 in a gap', type: 'counter', target: 10 },
            { id: 'titan', text: 'Use b+1+2 to escape approach', type: 'counter', target: 10 },
            { id: 'backdash', text: 'Backdash → f+1+2 to create space', type: 'counter', target: 10 },
          ]}
        />
      </Section>

      <Section title="Checkpoint">
        <SkillCheck
          title="Defense Readiness"
          subtitle="Confirm you understand defensive tools"
          skills={[
            { id: 'parry', skill: 'I can parry and followup with b+3', description: 'Parries highs, mids, and weapons' },
            { id: 'titan', skill: 'I use b+1+2 as a get-off-me tool', description: 'Power crush with huge range' },
            { id: 'panic', skill: 'I use 1+2 as my panic button', description: 'i13 mid that heals' },
            { id: 'backdash', skill: 'I backdash to create space', description: 'Return to mid-range' },
          ]}
          requiredToPass={3}
        />
      </Section>
    </Chapter>
  )
}
