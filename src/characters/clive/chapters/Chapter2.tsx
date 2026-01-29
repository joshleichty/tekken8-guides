import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Controlling Space"
      intro="These are the moves that make Clive terrifying at mid-range. Master these buttons and you'll dominate the neutral game before you even touch Phoenix Shift."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Phoenix Shift"
    >
      <Section title="The God Buttons">
        <p>
          Clive has two moves that define his entire neutral game. Learn these first — 
          they're why people say <span className="highlight">"Clive is the GOAT."</span>
        </p>

        <SubSection title="f+1+2 — Prominence (My Prominence!)">
          <MoveCard character="clive"
            move={{
              input: 'f+1+2',
              hitLevel: ['m', 'm'],
              damage: '10, 18',
              startup: 'i16-17',
              onBlock: '-12',
              onHit: '+20a (+10)',
              tags: ['Mid', 'Heat Engager', 'Homing', 'Weapon'],
              description: 'Arguably the best move in Tekken 8. Insane range, tracks both ways, heat engager, safe at distance.',
              notes: [
                'Heat Dash gives +5, +45a (+35) on hit',
                'Launches in Heat for full combo',
                '5 chip damage on block, 7 in Heat',
              ],
            }}
            showVideo
          />
          <p>
            This is your <strong>signature move</strong>. It's a mid-range nuclear option that:
          </p>
          <ul>
            <li>Tracks both sidewalk directions</li>
            <li>Has nearly full-screen range</li>
            <li>Is a heat engager</li>
            <li>Is safe at max range (minus 12 but too far to punish)</li>
            <li>Launches for full combo in Heat</li>
          </ul>
          <TipBox variant="tip" title="When in Doubt">
            If you don't know what to do, f+1+2. It beats sidesteps, has huge range, and even 
            if they block it from mid-range, most characters can't punish it.
          </TipBox>
        </SubSection>

        <SubSection title="b+2 — The Setup Move">
          <MoveCard character="clive"
            move={{
              input: 'b+2',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i20-21',
              onBlock: '-4',
              onHit: '+9',
              tags: ['High', 'Homing', 'PHX Transition', 'Weapon'],
              description: 'Long range high that goes into Phoenix Shift on hit. +6 into stance on block, +23 on hit.',
              notes: [
                'Hold F or press 4 to enter PHX',
                'PHX transition: +6 on block, +23 on hit',
                'On hit, EVERY PHX option is guaranteed except PHX 3+4',
              ],
            }}
          showVideo
          />
          <p>
            b+2 is your <span className="highlight">mixup starter</span>. On hit, you get 
            guaranteed Phoenix Shift followups. On block, you're +6 in stance — perfect for mixups.
          </p>
          <TipBox variant="warning" title="It's a High">
            b+2 is high, so it can be ducked. That's why you need f+1+2 — it's mid and tracks. 
            Mix these two and your opponent can't move or duck safely.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Complementary Neutral Tools">
        <SubSection title="Titan (b+1+2) — Power Crush">
          <MoveCard character="clive"
            move={{
              input: 'b+1+2',
              hitLevel: ['m'],
              damage: '25',
              startup: 'i24-25',
              onBlock: '-14',
              onHit: '+14a (+4a)',
              tags: ['Mid', 'Power Crush', 'Weapon'],
              description: 'Almost full-screen power crush. Minus 14 but unpunishable at range due to pushback.',
              notes: [
                'Absorbs hits from frame 7-23',
                '34 damage after absorbing an attack',
                'Massive pushback makes it safe at distance',
              ],
            }}
          showVideo
          />
          <p>
            Titan is your <strong>answer to everything</strong> at range. Opponent mashing? Titan. 
            Opponent trying to approach? Titan. It's minus 14, but at max range nobody can punish it.
          </p>
        </SubSection>

        <SubSection title="f,f+2 — Zantetsuken Builder">
          <MoveCard character="clive"
            videoId="f,F+2"
            move={{
              input: 'f,f+2',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i19-20',
              onBlock: '-7',
              onHit: '+13a',
              tags: ['Mid', 'Spike', 'Weapon', 'Zantetsuken'],
              description: 'Safe ranged mid that builds Zantetsuken meter. Use this to poke and accumulate meter.',
              notes: [
                'Builds 0.40 ZAN on hit, 0.14 on block',
                'Deals recoverable damage only',
                'Great for chip damage and meter building',
              ],
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="f,f,F+2 — Running 2 (Plus Frame Monster)">
          <MoveCard character="clive"
            move={{
              input: 'f,f,F+2',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i24-26',
              onBlock: '+2',
              onHit: '+31d (+10)',
              tags: ['Mid', 'PHX Transition', 'Weapon'],
              description: 'Plus 2 on block mid that goes into Phoenix Shift at +14. Incredible pressure tool.',
              notes: [
                'PHX transition: +14 on block, +43d on hit',
                'At +14 in PHX, everything is guaranteed',
                '4 chip damage on block',
              ],
            }}
          showVideo
          />
          <p>
            Running 2 is <span className="highlight">insane</span>. You're +14 in Phoenix Shift 
            on block. That means PHX 1+2 (the heat engager) becomes a frame trap. This is one of 
            your best approach tools.
          </p>
          <TipBox variant="tip" title="The OP Move">
            Running 2 into Phoenix Shift is Clive's "secret" op move. At +14, even the hell sweep 
            becomes a frame trap. Abuse this until opponents learn to stop it.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Quick Pokes">
        <SubSection title="1,1 — Jab String">
          <MoveCard character="clive"
            move={{
              input: '1,1',
              hitLevel: ['h', 'h'],
              damage: '5, 13',
              startup: 'i10',
              onBlock: '-3',
              onHit: '+6',
              tags: ['High', 'Jail', 'PHX Transition'],
              description: 'Your fastest button. Jails on block, goes into Phoenix Shift with F or 4.',
              notes: [
                'PHX transition: -3 on block, +6 on hit',
                'Second hit has tracking',
                'Use this when people are in your face',
              ],
            }}
          showVideo
          />
          <p>
            1,1 is what you use when people get close. It jails (they can't duck the second hit), 
            and you can go into Phoenix Shift from it. At -3 in stance, you're still safe to block.
          </p>
        </SubSection>

        <SubSection title="df+1 — Mid Poke">
          <MoveCard character="clive"
            move={{
              input: 'df+1',
              hitLevel: ['m'],
              damage: '10',
              startup: 'i14-15',
              onBlock: '-3',
              onHit: '+4',
              tags: ['Mid', 'Poke'],
              description: 'Your generic mid poke. Slower than most at i14, but still essential.',
              notes: [
                'Can chain into df+1,2 for PHX transition',
                'df+1,4 is a natural combo mid ender',
              ],
            }}
          showVideo
          />
          <TipBox variant="warning" title="i14 Not i13">
            Clive's df+1 is i14, not the standard i13. This means you can't poke as freely as 
            other characters. Compensate with 1+2 (i13 mid) or better spacing.
          </TipBox>
        </SubSection>

        <SubSection title="1+2 — The i13 Mid">
          <MoveCard character="clive"
            move={{
              input: '1+2',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i13',
              onBlock: '-9',
              onHit: '+2',
              tags: ['Mid', 'Heat Engager', 'Weapon'],
              description: 'Your fastest mid and a heat engager. Use this as your close-range check.',
              notes: [
                'Heat Dash: +5, +43d (+35d)',
                'Heals 5 recoverable health on hit',
                'Best defensive button up close',
              ],
            }}
          showVideo
          />
          <p>
            1+2 is your <span className="highlight">panic button</span>. It's i13, mid, heat engager, 
            and heals you. When opponents are pressuring you up close, this is your answer.
          </p>
        </SubSection>

        <SubSection title="4,2 — Mid Check">
          <MoveCard character="clive"
            move={{
              input: '4,2',
              hitLevel: ['m', 'm'],
              damage: '8, 17',
              startup: 'i12',
              onBlock: '-11',
              onHit: '+3',
              tags: ['Mid', 'Weapon'],
              description: 'i12 mid that leaves you at range. Good for checking opponents.',
            }}
          showVideo
          />
        </SubSection>
      </Section>

      <Section title="Homing Moves">
        <p>
          Clive's tracking is <strong>exceptional</strong>. If opponents try to sidestep your 
          f+1+2 and b+2, these moves catch them:
        </p>

        <SubSection title="db+1 — Homing High">
          <MoveCard character="clive"
            move={{
              input: 'db+1',
              hitLevel: ['h'],
              damage: '10',
              startup: 'i17-18',
              onBlock: '+0',
              onHit: '+4',
              onCH: '+12a',
              tags: ['High', 'Homing'],
              description: 'Homing high that\'s even on block. Counter-hit gives combo.',
              notes: [
                'On CH: db+1,1 guaranteed for tornado combo',
                '5 chip damage on block',
              ],
            }}
          showVideo
          />
        </SubSection>

        <SubSection title="b+1 — Homing Mid Launcher">
          <MoveCard character="clive"
            move={{
              input: 'b+1',
              hitLevel: ['m'],
              damage: '18',
              startup: 'i17-18',
              onBlock: '-13',
              onHit: '+10g',
              onCH: '+57a',
              tags: ['Mid', 'Homing', 'CH Launcher', 'Weapon'],
              description: 'Homing mid that launches on counter-hit. Minus 13 but great range.',
            }}
          showVideo
          />
          <TipBox variant="tip" title="When to Use">
            Use b+1 when opponents are stepping your f+1+2 and b+2. It's riskier at -13, but 
            the CH launch is devastating.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="The Neutral Flowchart">
        <KeyConcept title="Mid-Range Decision Tree" icon="🎮">
          <ul>
            <li><strong>Default option:</strong> f+1+2 — beats sidesteps, huge range, heat engager</li>
            <li><strong>If they're not ducking:</strong> b+2 → PHX mixup</li>
            <li><strong>If they're mashing/approaching:</strong> Titan (b+1+2)</li>
            <li><strong>If they're stepping your mids:</strong> b+1 or db+1</li>
            <li><strong>Building meter:</strong> f,f+2 spam</li>
            <li><strong>Running in:</strong> f,f,F+2 → PHX at +14</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Simple Gameplan">
          At mid-range: f+1+2 to stop movement → b+2 to start mixups → PHX options. 
          That's 80% of Clive right there. Add Titan when they get aggressive.
        </TipBox>
      </Section>

      <Section title="Practice">
        <PracticeBox
          title="Neutral Fundamentals"
          setup="Set dummy to random guard. Practice at mid-range distance."
          tasks={[
            { id: 'prominence', text: 'Hit f+1+2 at max range 10 times', type: 'counter', target: 10 },
            { id: 'b2', text: 'Hit b+2~F into PHX 2 on hit', type: 'counter', target: 10 },
            { id: 'running', text: 'Do f,f,F+2~F into PHX mixup', type: 'counter', target: 10 },
            { id: 'jab', text: 'Use 1,1~F into PHX when close', type: 'counter', target: 10 },
          ]}
        />
      </Section>

      <Section title="Checkpoint">
        <SkillCheck
          title="Neutral Game Readiness"
          subtitle="Confirm you understand these fundamentals"
          skills={[
            { id: 'f12', skill: 'I know f+1+2 is my go-to mid-range button', description: 'Tracks, huge range, heat engager' },
            { id: 'b2', skill: 'I know b+2~F gives PHX mixups', description: '+6 on block, +23 on hit in PHX' },
            { id: 'titan', skill: 'I use Titan (b+1+2) vs aggression', description: 'Power crush, safe at range' },
            { id: 'running', skill: 'I know f,f,F+2~F is +14 in PHX', description: 'Best approach tool' },
            { id: 'close', skill: 'I use 1+2 when pressured up close', description: 'i13 mid heat engager' },
          ]}
          requiredToPass={4}
        />
      </Section>
    </Chapter>
  )
}
