import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, TipBox, PracticeBox, KeyConcept, Flowchart, DecisionGrid, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Burning"
      intro="Paul's Heat mode isn't just good — it might be the best in the entire game. While other characters get nice bonuses, Paul gets a game-ending mixup that forces the opponent to guess right or lose the round. This chapter teaches you how to activate Heat optimally and why it changes everything."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Learn The Throw Game"
    >
      <Section title="Heat Engager vs Heat Burst">
        <KeyConcept title="The Most Important Paul Concept" icon="🔥">
          <p>
            This might be the single most important concept in this entire guide: <strong>Heat Engager into the 50/50
            is Paul's actual win condition.</strong> Not combos. Not pokes. Not defense. The moment you land a Heat Engager
            with their back toward a wall, the round is functionally over.
          </p>
          <p>
            Heat Burst (2+3) gives you +2 on hit, +1 on block. That's baby plus frames. You're in Heat, sure,
            but the opponent isn't scared. They can still move, still block, still contest.
          </p>
          <p>
            Heat Engager gives you <strong>+17</strong>. At +17, your crouch dash comes out before any move they have.
            Death Fist or Demo Man — their only option is to guess correctly. And both options end the round near a wall.
          </p>
          <p>
            Would you rather be +2 or +17? That's the difference between heat burst and heat engager.
            <strong>Always fish for Heat Engagers. Never settle for raw Heat Burst unless you have no choice.</strong>
          </p>
        </KeyConcept>
      </Section>

      <Section title="What Heat Gives Paul">
        <SubSection title="Enhanced Death Fist">
          <MoveCard
            character="paul"
            move={{
              input: 'H.qcf+2',
              hitLevel: ['m'],
              damage: '51',
              startup: 'i13~14',
              onBlock: '-13',
              onHit: '+26a',
              tags: ['mid', 'wall splat'],
              description: 'Heat Death Fist. More damage (51 vs 45), less punishable (-13 vs -17), and absurd wall carry. With pushback, effectively unpunishable for most of the cast.',
              notes: [
                'Clean hit 51 damage (up from 45)',
                '-13 on block with massive pushback — practically safe',
                'Wall carry is nearly full screen — wall splats from midscreen',
                'Heat Dash available: +5 on block, +36a on hit',
                'This is the single scariest move in the game during Heat',
              ],
            }}
            videoId="H.qcf+2"
            showVideo
          />
        </SubSection>

        <SubSection title="Heat Smash — Safer Demo Man">
          <MoveCard
            character="paul"
            move={{
              input: 'H.2+3',
              hitLevel: ['L', 'm', 't'],
              damage: '53',
              startup: 'i18',
              onBlock: '-14',
              onHit: '+3d',
              tags: ['low', 'mid'],
              description: 'Heat Smash. A safer version of Demo Man. -14 on block vs Demo Man\'s -31. Does NOT need clean hit. Any part of the foot connecting triggers the full launch. 53 damage (or 40 with throw transition).',
              notes: [
                '-14 on block vs Demo Man\'s -31 — much safer',
                'Does NOT require clean hit — works from further range than Demo Man',
                'If any part of the sweep connects, the full combo happens',
                'Fully consumes Heat gauge',
                'Chip damage on the first hit',
              ],
            }}
            videoId="H.2+3"
            showVideo
          />

          <TipBox title="Heat Smash vs Demo Man" variant="tip">
            Heat Smash is Demo Man with training wheels. It's less damage (53 vs 62 for just frame Demo Man) and -14 on block
            instead of -31. But it doesn't need clean hit — meaning it works from further away. If you're not confident
            in your Demo Man range or you want to reduce risk in a critical moment, Heat Smash is your lower-risk low option
            during Heat. Regular Demo Man is still better at point blank when you're confident.
          </TipBox>
        </SubSection>

        <SubSection title="Guard Breaks">
          <p>
            In Heat mode, held versions of certain moves become true guard breaks:
          </p>

          <MoveCard
            character="paul"
            move={{
              input: 'H.d+1,2*',
              hitLevel: ['m', 'm'],
              damage: '16, 45',
              startup: 'i14~15',
              onBlock: '+12',
              onHit: '+30d',
              tags: ['mid', 'mid', 'plus on block'],
              description: 'Heat guard break version of d+1,2 (held). +12 on block — guarantees d+1+2 or b+1,2. A true guard break that gives free damage.',
              notes: [
                'Must charge to 27+ frames for guard break version',
                '+12 on block guarantees d+1+2 (28 damage) or b+1,2',
                'Consumes Heat',
                'The charge can be interrupted — use when you have frame advantage',
              ],
            }}
            videoId="H.d+1,2"
            showVideo
          />

          <MoveCard
            character="paul"
            move={{
              input: 'H.b+2,1*',
              hitLevel: ['m', 'm'],
              damage: '22, 35',
              startup: 'i18',
              onBlock: '+12',
              onHit: '+56a',
              tags: ['mid', 'mid', 'plus on block'],
              description: 'Heat guard break version of b+2,1 (held). Same +12 on block — guarantees follow-ups. Another option for Heat pressure.',
              notes: [
                'Must charge to 42+ frames for guard break version',
                '+12 guarantees d+1+2 or b+1,2',
                'Can be interrupted during charge — use when plus',
                'Consumes Heat',
              ],
            }}
            videoId="H.b+2,1*"
            showVideo
          />
        </SubSection>

        <SubSection title="Heat Extension: f,f+2,1+2">
          <MoveCard
            character="paul"
            move={{
              input: 'H.f,F+2,1+2',
              hitLevel: ['m', 'm'],
              damage: '14, 31',
              startup: 'i15~17',
              onBlock: '+1',
              onHit: '+25a',
              tags: ['mid', 'mid', 'plus on block'],
              description: 'Heat-only extension of f,f+2. Jails from first hit, +1 on block, chip damage. A safe, strong pressure tool available only during Heat.',
              notes: [
                'Only available during Heat — consumes 300F of Heat gauge',
                '+1 on block — you stay plus',
                'Jails from first hit — both hits are guaranteed if first connects',
                '7 chip damage on block',
              ],
            }}
            videoId="H.f,F+2,1+2"
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="Heat Strategy: The Kill Sequence">
        <Flowchart
          title="Paul's Ideal Kill Sequence"
          nodes={[
            { type: 'start', label: 'Land a Heat Engager (uf+2, f+4, qcf+2, qcb+2, f+2)' },
            { type: 'decision', label: 'You\'re +17 in Heat. Crouch dash in their face.', branches: [
              { label: 'They stand block (fearing Death Fist)', action: 'Demo Man or Heat Smash → wall splat → 70+ damage' },
              { label: 'They crouch block (fearing low)', action: 'Heat Death Fist → wall splat from midscreen → 80-100+ damage' },
              { label: 'They press buttons', action: 'They get counter hit by whatever you throw. Dead.' },
            ]},
            { type: 'end', label: 'Round is over in one or two guesses. This is Paul.' },
          ]}
        />
      </Section>

      <Section title="Which Heat Engager to Fish For">
        <DecisionGrid
          title="Choosing Your Heat Engager"
          description="The Heat Engager you land determines your positioning for the 50/50. Choose based on situation."
          rows={[
            {
              situation: 'Long range, need to close gap',
              response: 'uf+2 or f+4',
              reason: 'Both have huge range. uf+2 is plus on block. f+4 is homing.',
              risk: 'uf+2 is a high. f+4 is -5.',
            },
            {
              situation: 'From back sway offense',
              response: 'qcb+2',
              reason: 'Flows naturally from df+1~b pressure. Mid Heat Engager.',
              risk: '-9 on block, but pushback makes it safe.',
            },
            {
              situation: 'As punishment',
              response: 'f+2 (i13) or qcf+2',
              reason: 'f+2 is fast at i13. qcf+2 for bigger punishes.',
              risk: 'f+2 is a high. qcf+2 is -17.',
            },
            {
              situation: 'Random yolo from mid-range',
              response: 'qcf+2 (Death Fist)',
              reason: 'Death Fist IS a Heat Engager. If it lands, heat + wall splat.',
              risk: '-17 on block, but pushback often saves you.',
            },
          ]}
        />

        <TipBox title="Heat Burst Is Plan B" variant="warning">
          Raw Heat Burst (2+3) should be your last resort for entering Heat — when you can't land an engager and you need
          Heat for its other benefits (guard breaks, enhanced Death Fist, Heat Smash). Heat Burst gives +2 on hit, +1 on block.
          That's nothing compared to Heat Engager's +17. Always prefer the engager.
        </TipBox>
      </Section>

      <Section title="Heat Guard Break Pressure">
        <Collapsible title="Guard Break Setup Details" icon="📖">
          <p>
            When you're in Heat with plus frames, the guard break moves (H.d+1,2* and H.b+2,1*) become very threatening.
            The opponent sees the charge animation and has to decide: interrupt it or let it rock.
          </p>
          <ul>
            <li>If they let it rock: +12 guard break → guaranteed d+1+2 (28 damage) or b+1,2 (Tornado)</li>
            <li>If they try to interrupt: release early for the non-charged version, or cancel and punish their approach</li>
            <li>You can vary the charge timing to catch them off guard — release early sometimes to bait their response</li>
          </ul>
          <p>
            Guard breaks are a bonus layer of pressure on top of the 50/50. The opponent now has to worry about mids, lows,
            AND guard breaks. Heat Paul doesn't give you time to think.
          </p>
        </Collapsible>
      </Section>

      <Section title="Practice: Heat Mastery">
        <PracticeBox
          title="Heat Engager Fishing"
          setup="Practice Mode. CPU Guard After First Hit. Walled stage."
          tasks={[
            { id: 'heat-uf2', text: 'Land uf+2 Heat Engager → crouch dash → Death Fist. Feel the +17.', type: 'counter', target: 5 },
            { id: 'heat-f4', text: 'Land f+4 Heat Engager → crouch dash → Demo Man. Same idea, homing.', type: 'counter', target: 5 },
            { id: 'heat-sway', text: 'df+1~b → qcb+2 Heat Engager → crouch dash → Death Fist. From sway.', type: 'counter', target: 5 },
            { id: 'heat-df', text: 'In Heat: qcf+2 from midscreen. Observe the wall splat carry. It\'s insane.', type: 'counter', target: 3 },
          ]}
        />

        <PracticeBox
          title="Heat Tools"
          setup="Practice Mode. Activate Heat first."
          tasks={[
            { id: 'hsmash', text: 'Heat Smash (H.2+3) — land it 5 times. Observe: no clean hit needed.', type: 'counter', target: 5 },
            { id: 'guardbreak', text: 'H.d+1,2* guard break → d+1+2 follow-up. 5 times.', type: 'counter', target: 5 },
            { id: 'heat-ext', text: 'H.f,F+2,1+2 — practice the Heat extension. Observe +1 on block.', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
