import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, TipBox, PracticeBox, KeyConcept, StanceBox, Flowchart } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="The Sway"
      intro="Back Sway is the engine that powers Paul's offense. It turns ordinary pokes into plus-frame pressure, creates devastating counter-hit opportunities, and gives you access to some of Paul's best moves. If df+1 is the Scholar's handshake, back sway is the Scholar's briefcase full of weapons."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn The Crouch Dash"
    >
      <Section title="What Is Back Sway?">
        <StanceBox name="Back Sway (SWA)" input="qcb (quarter circle back)" icon="🔄">
          <p>
            Back sway is performed by doing a quarter circle back motion (d, db, b). Paul slides backward while gaining
            access to powerful attack options. You can also enter sway by cancelling certain moves — df+1~b, ws+1,2~b, and 3,2~b
            are the most important transitions.
          </p>
          <p>
            The key concept: <strong>moves that cancel into back sway become more plus on block.</strong> df+1 alone is -2 on block.
            df+1~b (cancelling into sway) is +3 on block. That extra 5 frames of advantage is the difference between
            "their turn" and "your turn with scary options loaded."
          </p>
        </StanceBox>

        <KeyConcept title="The Sway Advantage" icon="⚡">
          <p>
            Back sway is not a blocking state — you cannot guard while swaying. But you gain backward movement
            and access to attacks. The trade-off: you sacrifice defense for offense. This means committing to sway
            is a commitment to attacking. If they call it out, you eat whatever they throw.
          </p>
          <p>
            But here's the secret: you can cancel the startup of back sway into a sidestep, or into literally
            any other move. So if you enter sway and see them doing something you don't like, you can cancel
            out of it into a sidestep, a launcher, a throw — anything. You're not married to sway.
          </p>
        </KeyConcept>
      </Section>

      <Section title="How to Enter Sway">
        <SubSection title="Raw Back Sway">
          <p>
            Quarter circle back (d, db, b) enters sway directly. This is the simplest entry but doesn't give
            you the frame advantage of a move cancel. Use raw sway for backdash-sway patterns — backdash,
            sway, check if they chase with a button, punish if they do.
          </p>
        </SubSection>

        <SubSection title="The Important Transitions">
          <p>These are the moves that transition into back sway and WHY they matter:</p>

          <p><strong>df+1~b</strong> — Your bread and butter. df+1 is -2 on block, but df+1~b is +3. At +3, your fastest
          sway option (qcb+4 at i15) becomes a 12-frame effective attack. That beats everything the opponent has.</p>

          <p><strong>ws+1,2~b</strong> — The while-standing version. ws+1,2 is -11 on block normally, but ws+1,2~b is +1.
          On counter hit, ws+1,2~b is +14 — which starts guaranteeing sway moves. This is huge for crouch dash offense.</p>

          <p><strong>3,2~b</strong> — 3,2 cancelled into sway gives +4 on block. Even better than df+1~b. Use after
          combos or when you want maximum sway advantage.</p>
        </SubSection>
      </Section>

      <Section title="Sway Attacks">

        <MoveCard
          character="paul"
          move={{
            input: 'qcb+4',
            hitLevel: ['h'],
            damage: '17',
            startup: 'i15~16',
            onBlock: '+1',
            onHit: '+23d',
            onCH: '+59a',
            tags: ['high', 'homing', 'plus on block'],
            description: 'The best all-around sway option. +1 on block with chip. Homing. On counter hit, crumples for full combo. Low risk, enormous reward on CH.',
            notes: [
              'Full circle tracking — beats sidestep attempts',
              'After df+1~b (+3), this is effectively i12',
              'If it counter hits, full combo — devastating',
              'It\'s a high — can be ducked, but they have to commit early',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="paul"
          move={{
            input: 'qcb+1',
            hitLevel: ['M'],
            damage: '24',
            startup: 'i21~22',
            onBlock: '0c',
            onHit: '+21d',
            onCH: '+53a',
            tags: ['mid'],
            description: 'A mid sway option. Neutral on block with chip. Forces crouch on block. On counter hit, bounces for full combo. Your answer to people ducking qcb+4.',
            notes: [
              'Mid — cannot be ducked unlike qcb+4',
              'Neutral on block with chip + force crouch = effectively plus',
              'Forces crouching on block — opponent\'s fastest option becomes ws+4',
              'Counter hit bounce = full combo',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="paul"
          move={{
            input: 'qcb+2',
            hitLevel: ['m'],
            damage: '27',
            startup: 'i15',
            onBlock: '-9',
            onHit: '+39d',
            tags: ['mid', 'heat engager'],
            description: 'Mid Heat Engager from sway. Safe on block at -9 with pushback (jabs often whiff). Launches on hit. Your sway-to-Heat transition.',
            notes: [
              'Heat Engager — landing this from sway starts Heat with +17',
              '-9 on block but pushback means jabs often whiff',
              'Clean Hit range 2.45 — needs to be relatively close',
              'Can natural combo from ws+1,2 if second hit counter hits',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="paul"
          move={{
            input: 'qcb+3',
            hitLevel: ['L'],
            damage: '14',
            startup: 'i18~19',
            onBlock: '-21c',
            onHit: '-10g',
            onCH: '+21a',
            tags: ['low'],
            description: 'Low from sway. Has follow-ups: qcb+3,2,1 (low-mid-high, safe) or qcb+3,2,3 (low-mid-mid stomp). The low option to keep them honest.',
            notes: [
              'qcb+3,2 is always guaranteed after the low',
              'qcb+3,2,1 — high finisher, safe on block at -5, Tornado on hit',
              'qcb+3,2,3 — mid stomp, -13 on block, counter hit bounces',
              'If they duck the high (3,2,1), use the stomp (3,2,3)',
              'On CH from first hit: qcb+3,2 gives +20d, guaranteed Demo Man',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="paul"
          move={{
            input: 'qcb+1+2',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i16~17',
            onBlock: '-14',
            onHit: '+37a',
            tags: ['mid', 'launcher', 'tornado'],
            description: 'The sway launcher. Long range, Tornado on hit, high evasion. But -14 on block — punishable. Use for whiff punishment from sway, not as a pressure tool.',
            notes: [
              'Launches on hit — no counter hit needed',
              '-14 on block — punishable, unlike qcb+1 or qcb+4',
              'High evasion built in',
              'Best as whiff punishment from sway distance',
              'If you SEE the whiff, this is maximum damage',
            ],
          }}
          showVideo
        />
      </Section>

      <Section title="The Sway Decision Tree">
        <Flowchart
          title="After df+1~b (you're +3)"
          nodes={[
            { type: 'start', label: 'df+1~b blocked — you are +3 in back sway' },
            { type: 'decision', label: 'What is the opponent doing?', branches: [
              { label: 'Pressing buttons', action: 'qcb+4 — counter hits mashers for full combo. +1 if blocked.' },
              { label: 'Ducking the high', action: 'qcb+1 — mid, neutral on block, forces crouch. CH bounces.' },
              { label: 'Standing and blocking', action: 'qcb+3 — low to keep them honest. Follow with 3,2,1 or 3,2,3.' },
              { label: 'Stepping or moving', action: 'qcb+4 (tracks) or cancel sway → f+4 (homing mid)' },
              { label: 'Respecting you', action: 'qcb+2 — Heat Engager. If it hits, +17 into the kill.' },
            ]},
            { type: 'end', label: 'Every response they have, you have an answer for.' },
          ]}
        />

        <TipBox title="Don't Always Commit" variant="tip">
          Sometimes the best sway option is to cancel out of sway into something else entirely. df+1~b into sidestep catches opponents
          who try to linear retaliation. df+1~b into another df+1 resets the pressure. df+1~b into throw catches the patient blocker. 
          The sway options are your primary threats, but the ability to cancel out is what makes the system truly unbeatable.
        </TipBox>
      </Section>

      <Section title="ws+1,2 — The Crouch Dash Gateway">
        <MoveCard
          character="paul"
          move={{
            input: 'ws+1,2',
            hitLevel: ['m', 'm'],
            damage: '16, 17',
            startup: 'i15~16',
            onBlock: '-11',
            onHit: '+2',
            onCH: '+3',
            tags: ['mid'],
            description: 'New in Tekken 8. Both hits are mids. Not a natural combo normally, but becomes natural on counter hit (36 damage). Cancelable into back sway. The while-standing version of df+1 pressure.',
            notes: [
              'ws+1,2~b is +1 on block — sway pressure from crouching',
              'On CH: natural combo, ws+1,2~b is +14 on CH',
              'Second hit alone on CH into back sway: +15',
              'At +15, qcb+2 (Heat Engager) becomes guaranteed',
              'Access from crouch dash deep dive → ws moves',
            ],
          }}
          videoId="ws1,2"
          showVideo
        />

        <p>
          ws+1,2 is one of Paul's best additions in Tekken 8. It does for his crouching game what df+1 does for standing:
          it's a mid poke that cancels into back sway and generates plus frames. Since Paul can now access while-standing
          moves out of his crouch dash Deep Dive, this essentially means he can wave dash across the screen and immediately
          start sway pressure with ws+1,2~b. That's incredibly powerful.
        </p>
        <p>
          The counter-hit properties are where it gets truly nasty. If ws+1,2 hits on counter hit and you cancel into sway,
          you're +14. And if just the second hit counter hits into sway, you're +15 — which makes qcb+2 (Heat Engager)
          a guaranteed follow-up. Counter-hit ws+1,2~b into qcb+2 starts your Heat and the kill chain in one sequence.
        </p>
      </Section>

      <Section title="Practice: The Sway Engine">
        <PracticeBox
          title="Sway Transitions"
          setup="Practice Mode. CPU Guard All."
          tasks={[
            { id: 'df1-sway', text: 'df+1~b — do this 20 times until the cancel is muscle memory', type: 'counter', target: 20 },
            { id: 'ws12-sway', text: 'ws+1,2~b — practice from crouching. 10 times.', type: 'counter', target: 10 },
            { id: '32-sway', text: '3,2~b — cancel into sway. 10 times.', type: 'counter', target: 10 },
          ]}
        />

        <PracticeBox
          title="Sway Options"
          setup="Practice Mode. CPU set to Guard After First Hit. Record CPU doing jabs after blocking."
          tasks={[
            { id: 'sway-4', text: 'df+1~b, qcb+4 — land the counter hit on a mashing opponent. 5 times.', type: 'counter', target: 5 },
            { id: 'sway-1', text: 'df+1~b, qcb+1 — practice the mid option. Observe force crouch on block.', type: 'counter', target: 5 },
            { id: 'sway-2', text: 'df+1~b, qcb+2 — land the Heat Engager from sway. 5 times on hit.', type: 'counter', target: 5 },
            { id: 'sway-low', text: 'df+1~b, qcb+3,2,1 — the low string. Safe high ender. 5 times.', type: 'counter', target: 5 },
            { id: 'sway-cancel', text: 'df+1~b, cancel sway into sidestep or df+2. Prove you\'re not locked into sway.', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
