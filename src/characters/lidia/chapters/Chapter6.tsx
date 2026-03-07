import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, DecisionGrid } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="The Wolf's Patience"
      intro="Stalking Wolf is Lidia's reward stance. You earn your way here through CAT or HRS, and it's where your honest reads pay off with real damage. But WLF demands patience — every option has a clear counter, and pressing the wrong button gets you killed."
      hasPrevious
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Combos"
    >
      <Section title="How You Get Here">
        <p>
          WLF cannot be entered directly from neutral. You reach it by:
        </p>
        <ul>
          <li><strong>HRS 1 on hit</strong> (+16) or block (+1) — homing power crush</li>
          <li><strong>HRS 4 on hit</strong> (+22d) or block (+8) — slow axe kick</li>
          <li><strong>CAT 4 on hit</strong> (+8c) or block (-14 real) — low</li>
          <li><strong>CAT → F</strong> — manual transition (inherits your frame advantage)</li>
          <li><strong>HRS → F</strong> — manual transition</li>
          <li><strong>qcf+1+2,2</strong> on hit (+24g) or block (-4) — from neutral (rare)</li>
        </ul>
        <p>
          Your frame advantage going into WLF determines everything. At +1 (HRS 1 on block),
          you can't press. At +8 (HRS 4 on block or CAT 4 on hit), you have frame traps. At
          +16 or higher (HRS 1 on hit, qcf+1+2,2 on hit), everything is guaranteed.
        </p>
      </Section>

      <Section title="WLF Options">
        <MoveCard
          character="lidia"
          videoId="WLF.1"
          move={{
            input: 'WLF 1',
            hitLevel: ['m'],
            damage: '24',
            startup: 'i22',
            onBlock: '+2',
            onHit: '+30a',
            description: "Slow chargeable mid. +2 on block, knocks down on normal hit. Can be charged to a launcher that's +7 on block with 17 chip damage. Very linear — can be sidestepped right. Has some jab evasion during the animation. Use against opponents who are just holding back and not stepping.",
            notes: [
              'Fully charged: becomes a normal hit launcher, +7 on block',
              'Linear — loses to SSR',
              'Some jab evasion',
            ],
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          videoId="WLF.2"
          move={{
            input: 'WLF 2',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i15',
            onBlock: '-7',
            onHit: '+22a',
            tags: ['wall splat'],
            description: "Your fastest WLF option (i15). Safe at -7. Wall splats. Tracks to Lidia's weak side. This is your go-to safe mid from Wolf — use it to check opponents who are pressing buttons, and always consider it near walls for the splat.",
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          videoId="WLF.3,1"
          move={{
            input: 'WLF 3,1',
            hitLevel: ['m', 'm'],
            damage: '10, 21',
            startup: 'i17',
            onBlock: '-6',
            onHit: '+37a',
            tags: ['natural on ch'],
            description: "Mid-mid string. Natural combo on counter-hit for a guaranteed f,f+1+2 follow-up. Safe at -6. The first hit alone (WLF 3) is +4 on hit and -6 on block, giving you a safe string mind game: do you finish with the 1 or not?",
            notes: ['CH: second hit guaranteed → f,f+1+2 follow-up', 'Weak to SSR but second hit can track in some cases'],
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          videoId="WLF.4"
          move={{
            input: 'WLF 4',
            hitLevel: ['l', 'm'],
            damage: '30',
            startup: 'i20',
            onBlock: '-14c',
            onHit: '+5c',
            tags: ['low'],
            description: "The WLF low. 30 permanent damage with a guaranteed mid follow-up. Floor breaks. Launch punishable on block. This is your damage option — use it when the opponent is respecting your mids and just holding back.",
            notes: ['Floor break', 'Second hit comes automatically on hit or block', 'Launch punishable on block'],
          }}
          showVideo
        />

        <KeyConcept title="No Highs, No Crush, No Armor" icon="🐺">
          <p>
            WLF has zero highs, zero high-crushing moves, zero low-crushing moves, and zero armor.
            This means you play honest. The only thing the opponent needs to duck is WLF 4 — everything
            else is mid. There's no "one move beats everything" from Wolf. You read the opponent
            and pick the right tool, or you block and wait.
          </p>
        </KeyConcept>
      </Section>

      <Section title="WLF by Frame Advantage">
        <p>
          The frame advantage you have entering WLF changes your options dramatically.
        </p>

        <SubSection title="+1 (HRS 1 on block)">
          <p>
            Your fastest move is WLF 2 at i15. At +1, that's effectively i14 — the opponent can
            interrupt with any i13 or faster move. <strong>Don't press.</strong> Hold back. If the
            opponent gets greedy with a slower move, WLF 2 or WLF 3,1 can catch them. But the
            correct default here is to exit stance and block.
          </p>
        </SubSection>

        <SubSection title="+8 (HRS 4 on block / CAT 4 on hit)">
          <p>
            This is your most common real WLF frame situation. Here the math changes:
          </p>
          <ul>
            <li><strong>WLF 2</strong> (i15 from +8 = frame 7): Frame trap. The opponent cannot jab or sidestep before it connects. Safe, wall splats.</li>
            <li><strong>WLF 3,1</strong> (i17 from +8): Also a frame trap. Bigger reward on counter-hit.</li>
            <li><strong>WLF 1</strong> (i22 from +8): NOT a frame trap. Can be jabbed. Can be sidestepped.</li>
            <li><strong>WLF 4</strong> (i20 from +8): Low. Not a frame trap but requires the opponent to crouch to block.</li>
          </ul>

          <DecisionGrid
            title="WLF Options at +8"
            description="Your most common Wolf stance situation. Use WLF 2 as your safe default."
            rows={[
              { situation: 'They press buttons', response: 'WLF 2 or WLF 3,1', reason: 'Frame traps at +8', risk: 'None — both are safe' },
              { situation: 'They stand block', response: 'WLF 4', reason: 'Low for 30 damage', risk: 'Launch punishable on block' },
              { situation: 'They sidestep right', response: 'WLF 2', reason: 'Tracks weak side', risk: '-7 on block if they just stand' },
              { situation: 'They armor', response: 'Block', reason: "WLF has no armor-beating options. Block and punish — most armor moves are -12 or worse", risk: 'None' },
              { situation: 'They crouch', response: 'WLF 1 or WLF 2', reason: 'Both hit crouching opponents', risk: 'WLF 1 is slow and steppable' },
            ]}
          />
        </SubSection>

        <SubSection title="+16 or higher (HRS 1 on hit / qcf+1+2,2 on hit)">
          <p>
            Everything is a frame trap except fully charged WLF 1. Go wild. WLF 2 for safe damage
            and wall splats. WLF 4 for the low if they're blocking. WLF 1 uncharged for knockdown.
            At these frames, it's a genuine mixup where the opponent has to guess.
          </p>
        </SubSection>

        <TipBox variant="warning" title="Armor in WLF">
          If the opponent is armoring through your WLF options at +8, the best response is to just
          block. WLF has no counter-hit launching lows or armor-beating properties. Blocking their
          armor move gives you a punish (most armor moves are at least -12 on block), and the punish
          leads back into your stance pressure. Don't fight armor with WLF — outsmart it.
        </TipBox>
      </Section>

      <Section title="WLF in Heat">
        <p>
          While in heat, WLF gains access to <strong>Heaven and Earth (HAE)</strong> by pressing up.
          This adds a new layer even when WLF options are normally unsafe or interruptible.
        </p>
        <p>
          For example, after HRS 1 on block at +1, we said don't press. But in heat, you can
          transition to HAE by pressing up. The HAE parry activates on frame 5, meaning you can
          parry any i10 jab or slower. The opponent can't simply jab you out of it — they need
          to use a low, d+1, or a grab. This changes the entire dynamic of WLF in heat, which
          we'll cover fully in Chapter 9.
        </p>

        <PracticeBox
          title="Wolf Stance Drill"
          setup="Do f,f+2 → HRS 4 to enter WLF at +8"
          tasks={[
            { id: 'wlf2-trap', text: 'Confirm WLF 2 beats the opponent jabbing at +8', type: 'toggle' },
            { id: 'wlf4-low', text: 'Land WLF 4 against a blocking opponent, then hold back if it was blocked', type: 'counter', target: 5 },
            { id: 'wlf1-charge', text: 'Try charged WLF 1 — notice how slow it is and how the opponent can step it', type: 'toggle' },
            { id: 'wlf-block', text: 'Enter WLF at +1 (HRS 1 on block). Practice holding back and exiting safely', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
