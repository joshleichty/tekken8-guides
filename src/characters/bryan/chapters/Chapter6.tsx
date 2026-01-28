import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  DrillMode,
  MatchScenario,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Low Pokes"
      intro="Bryan's lows are exceptional. This chapter covers all your low options and when to use each one. Mix these with your mids to keep opponents guessing."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Learn Jab Pressure"
    >
      <Section title="Why Lows Matter">
        <p>
          If you only use mids and highs, opponents can just <span className="highlight-secondary">hold back 
          forever</span>. Lows force them to make a decision: <strong>block low and get hit by mids, 
          or block high and eat low damage</strong>.
        </p>

        <KeyConcept title="Bryan's Low Tier List" icon="📊">
          <ul>
            <li><strong>S-Tier:</strong> qcb+3 (Hatchet Kick) — Best power low in the game</li>
            <li><strong>A-Tier:</strong> d+4 — Fast, spacing tool, zero on hit</li>
            <li><strong>A-Tier:</strong> db+3 — High crushing low, good tracking</li>
            <li><strong>B-Tier:</strong> d+3,2 — Low-high string, risky but rewarding</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="qcb+3 (Hatchet Kick) — Your Power Low">
        <MoveCard
          move={{
            input: 'qcb+3',
            hitLevel: ['l'],
            damage: '23',
            startup: 'i19-20',
            onBlock: '-13',
            onHit: '+5',
            onCH: '+26a',
            tags: ['Low', 'Power Low', 'Plus on Hit', 'Tracking'],
            description: 'You learned this in Chapter 2. It remains your most important low.',
            notes: [
              'Tracks sidesteps excellently',
              'Free qcb+4 on counter-hit (45 total damage)',
              '+5 on hit lets you continue offense',
              '-13 means ws4 punish maximum for most characters'
            ]
          }}
        />

        <TipBox variant="tip" title="Hatchet Risk/Reward">
          If blocked: ~16 damage (ws4). If it hits: 23 damage + advantage. If CH: 45 damage. 
          <strong>The math is heavily in your favor.</strong> Use it liberally.
        </TipBox>

        <SubSection title="When to Use Hatchet">
          <ul>
            <li><strong>After qcb+1 is blocked</strong> — You're +5, condition them with the low</li>
            <li><strong>From mid-range</strong> — The range is massive</li>
            <li><strong>When opponents are turtling</strong> — Forces them to respect lows</li>
            <li><strong>To catch sidesteps</strong> — Tracks very well</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="d+4 — The Spacing Low">
        <MoveCard
          move={{
            input: 'd+4',
            hitLevel: ['L'],
            damage: '13',
            startup: 'i15',
            onBlock: '-11',
            onHit: '+0',
            tags: ['Low', 'Fast', 'Spacing'],
            description: 'Fast standing low with huge range. Creates spacing on hit.',
            notes: [
              'Zero on hit — resets neutral',
              'Creates pushback, putting you at range 2',
              '-11 makes it relatively safe',
              'Great tracking'
            ]
          }}
        />

        <SubSection title="The Spacing Magic">
          <p>
            d+4 is special because <span className="highlight">on hit, it pushes you back to 
            range 2</span> — exactly where Bryan wants to be. You're back at your keepout range 
            with frame neutrality.
          </p>

          <KeyConcept title="d+4 Philosophy" icon="📍">
            <p>Think of d+4 as a <strong>spacing tool that happens to do damage</strong>:</p>
            <ul>
              <li>Deals 13 damage while resetting position</li>
              <li>After d+4 hits, you're at perfect 3+4 range</li>
              <li>Can be spaced to be completely safe</li>
              <li>Against Alisa specifically, it's always safe (she can't punish)</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <TipBox variant="tip" title="Tip-Range d+4">
          At max range, d+4 pushes back so far that even ws4 can whiff. Practice hitting 
          it from the tip of its range for nearly risk-free damage.
        </TipBox>
      </Section>

      <Section title="db+3 — The High Crush Low">
        <MoveCard
          move={{
            input: 'db+3',
            hitLevel: ['L'],
            damage: '11',
            startup: 'i16-17',
            onBlock: '-12',
            onHit: '-1',
            onCH: '+4',
            tags: ['Low', 'High Crush', 'Tracking'],
            description: 'High crushing low that puts you in crouch. Great for avoiding jab checks.',
            notes: [
              'High crush frames 6+',
              'Good tracking to both sides',
              'Leaves you in crouch for FC mixups'
            ]
          }}
        />

        <SubSection title="Why Use db+3?">
          <KeyConcept title="db+3 Situations" icon="🎯">
            <ul>
              <li><strong>When opponent jabs a lot</strong> — You crush their highs</li>
              <li><strong>After your poke is blocked</strong> — They press jab, you crush it</li>
              <li><strong>To access FC options</strong> — Leaves you crouching for ws3, FC df+4</li>
              <li><strong>Tracking situations</strong> — Catches sidesteps better than d+4</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <SubSection title="After db+3 Hits">
          <p>
            You're -1 and crouching. But opponents often don't know this, giving you <strong>mental 
            frames</strong> similar to your mid pokes. You can:
          </p>
          <ul>
            <li><strong>ws3</strong> — Counter-hit launcher, -10 on block</li>
            <li><strong>FC df+4 (slide)</strong> — Plus on hit, knockdown on CH, evasive</li>
            <li><strong>Stand up and continue</strong> — If they're respecting your FC options</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="d+3,2 — The Risk/Reward Low">
        <MoveCard
          move={{
            input: 'd+3,2',
            hitLevel: ['l', 'h'],
            damage: '10, 22',
            startup: 'i16, i21',
            onBlock: '-7',
            onHit: '+35a (+9)',
            tags: ['Low', 'High', 'Snake Eyes'],
            description: 'Low-high string. Second hit is duckable, but gives Snake Eyes on hit.',
            notes: [
              'Second hit can be ducked and launched',
              'Grants Snake Eyes install on hit',
              'Good for conditioning'
            ]
          }}
        />

        <TipBox variant="warning" title="Risky String">
          The second hit is a <span className="highlight-secondary">duckable high</span>. 
          Good players will duck and launch you. Use this string to <strong>condition opponents</strong>, 
          then stop at d+3 alone when they start ducking.
        </TipBox>
      </Section>

      <Section title="Low Poke Scenarios">
        <MatchScenario
          title="Opponent Won't Stop Blocking"
          situation="You've hit them with qcb+1 multiple times, but they just keep blocking."
          context="You're +5 after qcb+1 is blocked. They're in a defensive shell."
          options={[
            {
              action: 'Hatchet Kick',
              input: 'qcb+3',
              result: '23 damage, +5 on hit. Perfect answer to turtling.',
              isOptimal: true,
              followup: 'Continue pressure or reset to mid-range'
            },
            {
              action: 'Keep using qcb+1',
              result: 'Works, but they\'ll eventually stop respecting it.',
            },
            {
              action: 'd+4',
              result: 'Lower damage but safer. Resets spacing.',
            },
          ]}
          keyTakeaway="When opponents turtle, hatchet kick is your answer. +5 on hit lets you continue."
        />

        <MatchScenario
          title="Getting Jab Checked"
          situation="Every time you do a move, the opponent jabs you out of it."
          context="They're aggressively checking with 1 jab after everything you do."
          options={[
            {
              action: 'db+3 (high crush)',
              input: 'db+3',
              result: 'Goes under their jab, hits them, puts you in crouch advantage.',
              isOptimal: true,
              followup: 'FC df+4 or ws3 to continue crushing their highs'
            },
            {
              action: 'Block and wait',
              result: 'Safe but passive. Gives up your offense.',
            },
            {
              action: 'Trade with your own jab',
              result: 'Even trade at best. Not optimal.',
            },
          ]}
          keyTakeaway="db+3 is your anti-jab low. It crushes highs and sets up crouch mixups."
        />
      </Section>

      <Section title="Low Poke Drills">
        <DrillMode
          title="Low Poke Integration"
          objective="Mix lows naturally into your pressure"
          setup="Dummy on random guard"
          difficulty="intermediate"
          estimatedTime="5 min"
          steps={[
            { instruction: 'qcb+1 (blocked) → qcb+3', detail: '+5 into power low', targetReps: 10 },
            { instruction: 'd+4 from max range', detail: 'Tip-range for spacing', targetReps: 10 },
            { instruction: 'db+3 → ws3 on CH', detail: 'Set dummy to attack after blocking', targetReps: 10 },
            { instruction: 'Mix: qcb+3, d+4, db+3 randomly', targetReps: 10 },
          ]}
        />
      </Section>

      <Section title="Checkpoint">
        <SkillCheck
          title="Low Poke Mastery"
          subtitle="Confirm you understand Bryan's lows"
          skills={[
            { id: 'hatchet-usage', skill: 'I know when to use qcb+3', description: 'After qcb+1, vs turtles, for tracking' },
            { id: 'd4-spacing', skill: 'I understand d+4\'s spacing purpose', description: 'It resets you to range 2' },
            { id: 'db3-crush', skill: 'I can use db+3 to crush jabs', description: 'High crush + crouch mixups' },
            { id: 'low-mix', skill: 'I can mix lows with my mid pokes', description: 'Not predictable with just one low' },
          ]}
          requiredToPass={3}
        />
      </Section>
    </Chapter>
  )
}
