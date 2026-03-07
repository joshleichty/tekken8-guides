import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, ComboCard, StanceBox, PracticeBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Warrior Prime Minister"
      intro="Lidia Sobieska is a contradiction. She looks like a rushdown character — stances, mixups, aggressive transitions. But she plays like a counter-puncher. The Lidia players who win tournaments aren't the ones mashing buttons in stance. They're the ones who watch, wait, and punish every mistake with devastating precision."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="The Lie on the Screen"
    >
      <Section title="Who Lidia Is">
        <p>
          Playing Lidia feels like being a chess grandmaster who also happens to be a black belt.
          You don't rush in. You control the space with Political Storm — her signature move that
          covers half the screen and activates heat. You wait for your opponent to overextend. Then
          you make them pay with some of the best punishment tools in the game, transition into your
          stances, and run a mixup that's earned, not forced.
        </p>
        <p>
          She has four stances: <strong>Cat (CAT)</strong>, <strong>Horse (HRS)</strong>,{' '}
          <strong>Stalking Wolf (WLF)</strong>, and <strong>Heaven and Earth (HAE)</strong>. They
          chain together — neutral tools go into CAT or HRS, those flow into WLF, and in heat,
          any stance can transition into HAE. But here's the crucial thing most new Lidia players
          get wrong: <strong>these stances are not autopilot pressure sequences</strong>. Every stance
          option is a read. You choose what to do based on what you observe the opponent doing.
        </p>
        <p>
          Lidia rewards players who are patient, observant, and precise. If you're the kind of player
          who enjoys reading your opponent and making them feel helpless once you've figured them
          out — Lidia is your character. If you want to mash through stances and hope for the best,
          she will actively punish you for it.
        </p>

        <KeyConcept title="The Core Loop" icon="🔑">
          <p>Lidia's gameplay follows this rhythm:</p>
          <ol>
            <li><strong>Control space</strong> — Use pokes and Political Storm to keep opponents honest at range</li>
            <li><strong>Observe</strong> — Watch how they respond to your pressure and pokes</li>
            <li><strong>Enter stance with purpose</strong> — Choose a transition based on what you expect them to do</li>
            <li><strong>Read and respond</strong> — Pick the stance option that beats their habit</li>
            <li><strong>Activate heat</strong> — Land a heat engager and become unstoppable</li>
          </ol>
          <p>
            Getting into heat with Lidia is more impactful than with almost any other character
            in the game. Her Heaven and Earth stance turns blocked moves into chip damage, gives
            her parry properties, and lets her stack power across rounds. One heat activation can
            win you the entire round.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Your First Tools">
        <p>
          Before we touch stances, you need a foundation. These four moves are what you'll use
          90% of the time in neutral. Master these before anything else.
        </p>

        <MoveCard
          character="lidia"
          move={{
            input: '1,2',
            hitLevel: ['h', 'h'],
            damage: '5, 8',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+4',
            description: 'Your 10-frame jab string. Plus on hit, safe on block. Use it to check the opponent, interrupt pressure, and establish your turn. At +4, you can start conditioning them to respect your options.',
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          move={{
            input: 'df+1',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i13',
            onBlock: '-5',
            onHit: '+2',
            description: "Your 13-frame mid poke. Critical because it tracks to Lidia's weak side (sidestep right). When opponents start sidestepping everything you do, df+1 catches them. It also has extensions: df+1,2 is a natural combo, and df+1,3 launches on counter hit.",
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          videoId="f+1+2,3,1+2"
          move={{
            input: 'f+1+2,3,1+2',
            hitLevel: ['h', 'm', 'm', 'm', 'm'],
            damage: '38',
            startup: 'i14',
            onBlock: '-15',
            onHit: '+20d',
            tags: ['heat engager'],
            description: "Political Storm. Lidia's signature move and the backbone of her gameplan. Your 14-frame standing punisher, your whiff punisher, and your primary space-control tool. Hit confirmable from the third hit — always input f+1+2,3 and only finish with 1+2 if you see it connect. Activates heat on hit.",
            notes: ['Hit confirm from the 3rd hit (the knee)', 'Can power up with qcf+1+2 at the end for extra damage'],
          }}
          showVideo
        />

        <MoveCard
          character="lidia"
          move={{
            input: 'd+2',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i18',
            onBlock: '-14',
            onHit: '-4',
            onCH: '+12',
            description: 'Your primary low poke. High-crushes under jabs and standing highs. On counter hit, guarantees FC.df+2 — a heat engager. This makes d+2 one of your best tools for stealing heat activation when the opponent is pressing buttons.',
          }}
          showVideo
        />

        <TipBox variant="tip" title="Start Simple">
          Your first 50 matches with Lidia should focus on these four moves plus punishment.
          Don't worry about stances yet. Poke with 1,2 and df+1. Catch approaches with Political
          Storm. Sneak in d+2 when they press buttons. Punish everything you block. This alone
          will take you surprisingly far.
        </TipBox>
      </Section>

      <Section title="Your First Combos">
        <p>
          Lidia's combos can get complex with quarter-circle inputs, but you don't need those yet.
          Start with these and upgrade later.
        </p>

        <ComboCard
          title="Hopkick Combo (Easy)"
          starter="uf+4"
          route={['uf+4', 'hold b', 'f+2', '2', 'b+3,4', '1+2']}
          damage="~63"
          difficulty="beginner"
          notes="Hold back after uf+4 to cancel out of CAT stance. The b+3,4,1+2 ender can be upgraded to b+3,4,qcf+1+2 for more damage once you're comfortable with quarter-circle motions."
        />

        <ComboCard
          title="3,2 Combo (Easy)"
          starter="3,2"
          route={['3,2', 'f,f+2', 'HRS 2', 'df+4,2 T!', 'b+3,4', '1+2']}
          damage="~74"
          difficulty="beginner"
          notes="3,2 is your 15-frame launcher (high, high). The just-frame version adds 2 extra damage. After f,f+2, you automatically enter HRS — press 2 for the heat engager follow-up."
        />

        <ComboCard
          title="ws2 Combo (Easy)"
          starter="ws2"
          route={['ws2', 'df+2', '4', 'WLF 2', 'df+4,2 T!', 'b+3,4', '1+2']}
          damage="~71"
          difficulty="beginner"
          notes="ws2 is your 15-frame crouching launcher. After df+2 you enter CAT — press 4 to go to WLF, then press 2 for the wall-splatting mid."
        />

        <PracticeBox
          title="Foundation Drill"
          setup="Practice Mode, any opponent"
          tasks={[
            { id: 'jab-poke', text: 'Throw out 1,2 ten times and watch how plus you are on hit', type: 'counter', target: 10 },
            { id: 'df1-track', text: 'Set opponent to sidestep right. Confirm df+1 catches them', type: 'toggle' },
            { id: 'ps-confirm', text: 'Practice hit confirming Political Storm: always do f+1+2,3 — only finish with 1+2 on hit', type: 'counter', target: 10 },
            { id: 'hopkick-combo', text: 'Land the easy hopkick combo 5 times in a row', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="The Stance Ecosystem (Preview)">
        <p>
          Before we go deeper in later chapters, here's the mental map of how Lidia's stances connect.
          You don't need to memorize this now — just understand the flow.
        </p>

        <StanceBox name="Cat Stance (CAT)" input="b+3+4" icon="🐱">
          <p>
            Entered from 1,2,2 / df+2 / 2,2 / ws4,2 / 3+4. Your first-level stance with safe mids,
            a heat engager high, and a low that flows into Wolf. Think of CAT as your "I just hit
            them with a string — now what do they do?" stance.
          </p>
        </StanceBox>

        <StanceBox name="Horse Stance (HRS)" input="f+3+4" icon="🐴">
          <p>
            Entered from f,f+2 / db+3 / f+3,4 / qcf+4. Your pressure stance with a power-crush
            homing high, a heat engager mid, an anti-d+1 jumping mid, and a low CH launcher. HRS
            is where you test what the opponent is willing to do.
          </p>
        </StanceBox>

        <StanceBox name="Stalking Wolf (WLF)" input="CAT or HRS → F" icon="🐺">
          <p>
            Cannot be entered directly from neutral. Reached by pressing forward in CAT or HRS,
            or through specific stance moves (HRS 1, HRS 4, CAT 4). Your reward stance with
            a charged mid, a fast safe mid, and a damaging low. Wolf is where honest reads pay off.
          </p>
        </StanceBox>

        <StanceBox name="Heaven and Earth (HAE)" input="Any stance → U (heat only)" icon="⚡">
          <p>
            Heat-only stance. Press up from any other stance while heat is active. Gains a stack
            each entry (max 3, persist across rounds). Has a mid launcher with armor, a safe wall-splatting
            mid with chip damage, and an unblockable high. The parry on entry catches anything except
            lows and grabs. This is where Lidia becomes terrifying.
          </p>
        </StanceBox>

        <TipBox variant="warning" title="Stances Are Not Safe">
          In every stance except standing neutral, Lidia cannot block. She takes 8 extra frames
          to exit stance and block. This means the frame data displayed on stance moves is a lie —
          the real minus frames are much worse than what you see. We'll cover this in detail in the
          next chapter.
        </TipBox>
      </Section>
    </Chapter>
  )
}
