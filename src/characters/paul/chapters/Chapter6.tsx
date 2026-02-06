import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, TipBox, PracticeBox, StanceBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="The Crouch Dash"
      intro="If back sway is your defense-to-offense engine, the crouch dash is your approach engine. It's the motion that delivers Death Fist and Demo Man, and in Tekken 8, Paul's new Deep Dive makes it more versatile than ever."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Learn Combos"
    >
      <Section title="Crouch Dash Basics">
        <StanceBox name="Crouch Dash (CD)" input="qcf (quarter circle forward)" icon="💨">
          <p>
            The crouch dash is a quarter circle forward motion (d, df, f). Paul slides forward in a crouching state
            with high crush properties, gaining access to his most powerful moves. This is the delivery mechanism for
            both Death Fist and Demo Man — the animation looks identical regardless of which option comes next.
          </p>
          <p>
            High crush during frames 1-21 means highs will fly over you. This makes crouch dash a powerful approach
            against jab-heavy opponents — their jabs whiff while you slide underneath and deliver the 50/50.
          </p>
        </StanceBox>
      </Section>

      <Section title="Crouch Dash Attacks">
        <p>
          You already know qcf+2 (Death Fist) from Chapter 2. Here are the other crouch dash options:
        </p>

        <MoveCard
          character="paul"
          move={{
            input: 'qcf+1',
            hitLevel: ['h'],
            damage: '21',
            startup: 'i16~17',
            onBlock: '-4',
            onHit: '+33a',
            tags: ['high', 'launcher'],
            description: 'Crouch dash elbow. Natural launcher, completely safe on block. A high, so it can be ducked — but if it hits, full combo. Critical in combo routes for wall carry.',
            notes: [
              'Safe launcher (-4 on block)',
              'High — can be ducked. Don\'t use as raw approach against cautious opponents.',
              'Chip damage (4) on block',
              'Essential in combos — qcf+1 is used for wall carry after juggles',
              'The timing after df+2 launch is tight — wait for them to fall, then execute',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="paul"
          move={{
            input: 'qcf+3',
            hitLevel: ['L'],
            damage: '18',
            startup: 'i18~19',
            onBlock: '-14c',
            onHit: '0',
            onCH: '+20a',
            tags: ['low'],
            description: 'Crouch dash low kick. Your approaching low when Demo Man is too risky (too far for clean hit). On counter hit, guarantees Demo Man for 50+ damage.',
            notes: [
              'Neutral on hit — go for jab pressure afterward',
              'Counter hit: guaranteed Demo Man (d+4,2:1+2)',
              'Clean hit range 2.0 — longer range than Demo Man',
              'High crush during crouch dash — goes under jabs',
              'Use this to approach and threaten the low game from further away',
            ],
          }}
          showVideo
        />

        <TipBox title="qcf+3 Is Your Working Low" variant="tip">
          Demo Man only works point blank. qcf+3 works from approach range. The damage on normal hit is modest (18), 
          but the counter hit reward (guaranteed Demo Man for 50+ damage) makes it a powerful approach tool. 
          When you're crouch dashing in and they see the crouch dash, their instinct is to block the Death Fist. 
          That's exactly when qcf+3 sneaks in underneath.
        </TipBox>

        <MoveCard
          character="paul"
          move={{
            input: 'qcf+3+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i19~20',
            onBlock: '-9',
            onHit: '+35a',
            onCH: '+74a',
            tags: ['mid', 'tornado'],
            description: 'Crouch dash knee. Safe on block (-9). Guarantees Death Fist on hit. Tornado on counter hit. A safer mid option when you\'re scared of committing to raw Death Fist.',
            notes: [
              'Safe on block at -9 — lost your turn but not punished',
              'On hit: guarantees Death Fist or d+1+2 (tight timing for DF)',
              'Tornado on normal and counter hit',
              'Slower than Death Fist (19f vs 13f) but much safer',
              'Good for opponents who are conditioned to duck Demo Man',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="paul"
          move={{
            input: 'qcf+1+2',
            hitLevel: ['L'],
            damage: '20',
            startup: 'i32~33',
            onBlock: '-12c',
            onHit: '+71a',
            tags: ['low', 'launcher', 'tornado'],
            description: 'Crouch dash power low sweep. Launches on hit with Tornado. 20 damage and full combo. Slow at i32, but devastating if it lands.',
            notes: [
              'Launches on hit — full combo potential',
              'Uses Tornado, so shorter combo than generic launcher',
              'Slow (i32) — use on reads, not as a poke',
              'Cancel to crouch by holding B',
              'High crush 1-33 — goes under everything',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="Deep Dive (DPD)">
        <StanceBox name="Deep Dive (DPD)" input="df+3+4 or qcf,df" icon="⬇️">
          <p>
            New in Tekken 8, Deep Dive is entered by pressing df+3+4, or by holding df during a crouch dash (qcf, then hold df).
            Paul goes even lower to the ground than normal crouch dash. From here, he can access while-standing moves
            (release to neutral and press buttons) or unique DPD-specific attacks.
          </p>
          <p>
            Deep Dive is what enables the "wave dash" playstyle — crouch dash into Deep Dive, access ws+1,2 from far range,
            or use DPD-specific moves. It extends Paul's approach game significantly.
          </p>
        </StanceBox>

        <SubSection title="DPD Attacks">
          <MoveCard
            character="paul"
            move={{
              input: 'DPD df+2,1',
              hitLevel: ['m', 'h'],
              damage: '10, 30',
              startup: 'i14',
              onBlock: '+4',
              onHit: '+23d',
              tags: ['mid', 'high', 'tornado', 'plus on block'],
              description: 'Deep Dive elbow into high. Natural hidden combo, 40 total damage. Mid-high with +4 on block and insane pushback. Completely safe approach tool.',
              notes: [
                '+4 on block with huge pushback — totally safe',
                'Tornado on hit — wall carry potential',
                'Second hit is a high — can be ducked on read',
                'Use DPD df+2,3 (mid stomp) if they duck the high',
                'At the wall, +7 on hit — very dangerous',
              ],
            }}
            videoId="DPD.df+2,1"
            showVideo
          />

          <MoveCard
            character="paul"
            move={{
              input: 'DPD df+2,3',
              hitLevel: ['m', 'M'],
              damage: '10, 22',
              startup: 'i14',
              onBlock: '-13c',
              onHit: '+10d',
              onCH: '+46a',
              tags: ['mid', 'mid'],
              description: 'Deep Dive elbow into mid stomp. Counter hit on the stomp bounces for full combo. The mid-mid option when they duck DPD df+2,1.',
              notes: [
                'If they duck the high of DPD df+2,1, this stomp catches them',
                'Counter hit on the stomp = full combo bounce',
                '-13 on block — punishable, so don\'t always go for this',
              ],
            }}
            videoId="DPD.df+2,3"
            showVideo
          />

          <MoveCard
            character="paul"
            move={{
              input: 'DPD df+4',
              hitLevel: ['L'],
              damage: '17',
              startup: 'i17',
              onBlock: '-13',
              onHit: '+3',
              onCH: '+24d',
              tags: ['low'],
              description: 'Deep Dive low kick. A quick low to keep opponents honest when they\'re blocking high in Deep Dive. Counter hit gives a knockdown.',
              notes: [
                'Clean Hit range 1 — must be close',
                'Keeps opponents from autopiloting stand block against DPD approaches',
                'Counter hit gives good knockdown',
              ],
            }}
            videoId="DPD.df+4"
            showVideo
          />
        </SubSection>

        <SubSection title="While Standing from Deep Dive">
          <p>
            If you enter Deep Dive and then release to neutral, you gain access to while-standing moves.
            This is how you access ws+1,2 from a wave dash approach. The sequence is: crouch dash (qcf) → hold df
            for Deep Dive → release to neutral → ws+1,2. This lets Paul slide across the screen and immediately
            start sway pressure from crouching.
          </p>
          <TipBox title="Wave Dash Into ws+1,2" variant="tip">
            The ability to wave dash into ws+1,2~b is one of Paul's strongest new tools. It means your sway offense
            isn't limited to point blank — you can approach from mid-range with wave dash and immediately enter sway pressure.
            This makes Paul's mid-based offense nearly inescapable at the ranges where it matters.
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Crouch Dash Mixup Summary">
        <Collapsible title="All Crouch Dash / Deep Dive Options At a Glance" icon="📋" defaultOpen>
          <ul>
            <li><strong>qcf+2 (Death Fist):</strong> THE mid. 45 damage. Heat Engager. -17 on block (safe in Heat).</li>
            <li><strong>qcf+1:</strong> Safe launcher (high). -4 on block. Essential in combos.</li>
            <li><strong>qcf+3:</strong> Approaching low. Neutral on hit. CH guarantees Demo Man.</li>
            <li><strong>qcf+3+4:</strong> Safe mid knee. -9 on block. Guarantees Death Fist on hit. Tornado.</li>
            <li><strong>qcf+1+2:</strong> Power low sweep. i32, launches on hit. High crush. Read-only.</li>
            <li><strong>Demo Man (d+4,2:1+2):</strong> THE low. 62 damage. Requires clean hit. -31 on block.</li>
            <li><strong>DPD df+2,1:</strong> Mid-high, +4 on block. Safe approach. Tornado.</li>
            <li><strong>DPD df+2,3:</strong> Mid-mid stomp. CH bounces. Beats duck.</li>
            <li><strong>DPD df+4:</strong> Quick low. Keeps them honest.</li>
            <li><strong>DPD → ws+1,2~b:</strong> Wave dash into sway pressure. Paul's new approach weapon.</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Practice: Crouch Dash Mastery">
        <PracticeBox
          title="Crouch Dash Options"
          setup="Practice Mode. CPU Guard All. Any walled stage."
          tasks={[
            { id: 'cd-df', text: 'Do 10 Death Fists from crouch dash. Smooth quarter circle.', type: 'counter', target: 10 },
            { id: 'cd-dm', text: 'Do 10 Demo Mans from crouch dash. Same animation, different button.', type: 'counter', target: 10 },
            { id: 'cd-3', text: 'Crouch dash 3 into Demo Man on counter hit — set CPU to "After block, 2nd action, attack". 5 times.', type: 'counter', target: 5 },
            { id: 'cd-knee', text: 'Crouch dash 3+4 into Death Fist on hit. 5 times.', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="Deep Dive Practice"
          setup="Practice Mode. Any stage."
          tasks={[
            { id: 'dpd-enter', text: 'Enter Deep Dive from crouch dash: qcf, hold df. Observe the stance. 10 times.', type: 'counter', target: 10 },
            { id: 'dpd-21', text: 'DPD df+2,1 — land the mid-high. Observe the +4 on block pushback.', type: 'counter', target: 5 },
            { id: 'dpd-ws12', text: 'Wave dash (qcf, df) into neutral → ws+1,2~b. The full approach sequence.', type: 'counter', target: 10 },
            { id: 'dpd-mix', text: 'From DPD, alternate between df+2,1 and df+4 to create a mini-mixup.', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
