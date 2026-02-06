import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard, 
  TipBox,
  PracticeBox,
  KeyConcept,
  Collapsible,
  StanceBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Art of Phoenix"
      intro="Art of Phoenix (AOP) is the stance that defines Ling Xiaoyu. It crushes highs, evades mids, and turns your opponent's offense into your opportunity. Learning when and how to use AOP is what separates good Xiaoyu players from great ones."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn Rain Dance"
    >
      <Section title="Understanding AOP">
        <StanceBox name="Art of Phoenix (AOP)" input="d+1+2" icon="🔥">
          <p>
            AOP is entered manually with <code>d+1+2</code> or from many moves. Xiaoyu drops into a 
            low crouch position that <strong>crushes all highs</strong> and <strong>evades many mids</strong>. 
            She cannot block in this stance — everything is a commitment.
          </p>
          <ul>
            <li><strong>Built-in sidestep right</strong> — Entering AOP shifts her to the right, adding evasion</li>
            <li><strong>AOP.d (Butterfly)</strong> — Press D in AOP to go even lower, evading even more mids</li>
            <li><strong>From Full Crouch</strong> — Entering AOP from FC automatically does the butterfly version</li>
          </ul>
        </StanceBox>

        <KeyConcept title="AOP Is Not About Going Under — It's About Stepping" icon="👟">
          <p>
            A common misconception: "Xiaoyu went under my mid with AOP." In reality, AOP's evasion comes 
            from its <strong>built-in sidestep right</strong>, not just the crouch. When you do 
            <code>SSR → d+1+2</code>, you're getting the benefit of <em>two</em> sidesteps. This is why 
            AOP evades moves that should technically hit her — she's not under them, she's beside them.
          </p>
          <p>
            In Tekken 8, sidestep movement has been overall buffed. Mastering the timing of 
            <code>SSR → d+1+2</code> is one of the most impactful things you can learn with Xiaoyu.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Entering AOP">
        <p>
          You rarely want to enter AOP manually from neutral — it's too telegraphed. The best entries come 
          from moves that naturally transition:
        </p>

        <KeyConcept title="Best AOP Entry Points" icon="🚪">
          <ul>
            <li><strong>d+1+2</strong> — Manual entry. Best used from SSR for double sidestep</li>
            <li><strong>f,f,F+3 (WR3)</strong> — +7 on block in AOP. Your forced AOP mixup</li>
            <li><strong>f,f+1,D</strong> — -5 on block, +13 on hit. Great mid approach tool</li>
            <li><strong>3+4,D</strong> — 0 on block, +4c on hit in AOP</li>
            <li><strong>uf+4,d+1+2</strong> — From the safe keepout mid</li>
            <li><strong>FC.df+4</strong> — Low poke that transitions to AOP (+4 on hit)</li>
            <li><strong>AOP.uf+3,1</strong> — After the hop kick extension, back in AOP at -4</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="AOP From Block">
          When entering AOP from a <em>blocked</em> move, you're often minus. This means the opponent 
          gets to act first. But "first" doesn't mean "free" — they still have to choose the right option, 
          and many of their attacks will whiff against AOP's evasion. The mind game is real even when 
          you're technically minus.
        </TipBox>
      </Section>

      <Section title="Key Moves From AOP">

        <SubSection title="AOP.2,1 — The Heat Engager">
          <MoveCard character="xiaoyu"
            videoId="AOP.2,1"
            move={{
              input: 'AOP 2,1',
              hitLevel: ['m', 'm'],
              damage: '10, 20',
              startup: 'i13',
              onBlock: '-12',
              onHit: '+13a',
              tags: ['Mid', 'Heat Engager', 'Confirmable'],
              description: 'Your primary whiff punisher from AOP and main heat engager. Hit-confirmable with delay — if the first hit lands, you can confirm the second. The second hit can also be canceled with AOP.2,1,B.',
              notes: [
                'Heat engager — activates heat on hit',
                'Hit-confirmable: delay the 1 and only press it on hit',
                'Cancel second hit with B to stay BT if unsure',
                '-12 on block — punishable, so only commit on hit',
                'Best used after SSR d+1+2 evasion or from f,f,F+3 on block/hit'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="AOP.d+1+2 — The Safe Launcher">
          <MoveCard character="xiaoyu"
            videoId="AOP.d+1+2"
            move={{
              input: 'AOP d+1+2',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i26',
              onBlock: '-8',
              onHit: '+42a',
              tags: ['Mid', 'Launcher'],
              description: 'Safe but slow mid launcher from AOP. At -8 on block, you won\'t get launched. Mix this with AOP.3+4 (low sweep) — opponents must guess mid or low.',
              notes: [
                '-8 on block — safe',
                'Slow at i26 — opponents can interrupt if they read it',
                'High crushes while performing — goes under highs',
                'Mix with AOP.3+4 for the AOP 50/50'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="AOP.1+2 — The Counter-Hit Monster">
          <MoveCard character="xiaoyu"
            videoId="AOP.1+2"
            move={{
              input: 'AOP 1+2',
              hitLevel: ['m'],
              damage: '25',
              startup: 'i19',
              onBlock: '-1',
              onHit: '+19a',
              onCH: '+64a',
              tags: ['Mid', 'CH Launcher'],
              description: 'One of Xiaoyu\'s strongest moves. A mid that\'s only -1 on block and counter-hit launches. Excellent range for closing gaps. At -1, opponents want to retaliate — which sets up more counter hits or SSR d+1+2 evasion.',
              notes: [
                '-1 on block — essentially neutral. Opponents WILL try to press',
                'On CH: full launch combo, wall splats too',
                'Great for approaching from mid-range',
                'After block: SSR d+1+2 (AOP) catches many retaliations',
                'After block: df+1 or db+2 to check their response'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="AOP.uf+3 — The Hop Kick Launcher">
          <MoveCard character="xiaoyu"
            videoId="AOP.uf+3"
            move={{
              input: 'AOP uf+3',
              hitLevel: ['m'],
              damage: '14',
              startup: 'i15',
              onBlock: '-17',
              onHit: '+27a',
              tags: ['Mid', 'Launcher'],
              description: 'Faster than AOP.d+1+2 but unsafe at -17. Has two follow-ups: AOP.uf+3,4 (high-mid launcher, -14) and AOP.uf+3,1 (high-mid, goes back to AOP at -4).',
              notes: [
                '-17 on block alone — launch punishable',
                'AOP.uf+3,4: -14 on block, launches',
                'AOP.uf+3,1: -4 on block, returns to AOP for more evasion',
                'None of the extensions are truly safe, but AOP.uf+3,1 lets you evade the punish attempt',
                'Low crushes'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="AOP.4 — The Fast Safe Mid">
          <MoveCard character="xiaoyu"
            videoId="AOP.4"
            move={{
              input: 'AOP 4',
              hitLevel: ['m'],
              damage: '14',
              startup: 'i12',
              onBlock: '-3',
              onHit: '+8',
              tags: ['Mid'],
              description: 'The fastest move out of AOP at i12. A generic safe mid poke. Guaranteed after BT.uf+1 and f,f+1,D on hit. Your safest way to get out of AOP with a button.',
              notes: [
                'i12 — fastest AOP move',
                '-3 on block — safe',
                'Guaranteed after f,f+1,D on hit and BT.uf+1 on hit',
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="AOP.3+4 — Firecracker">
          <MoveCard character="xiaoyu"
            videoId="AOP.3+4"
            move={{
              input: 'AOP 3+4',
              hitLevel: ['l'],
              damage: '22',
              startup: 'i23',
              onBlock: '-33',
              onHit: '+1d',
              tags: ['Low'],
              description: 'The infamous firecracker. A relatively unseeable knockdown low with amazing okizeme potential. At -33 on block, you will get launched. But the setup potential after hit is enormous.',
              notes: [
                'On hit: knockdown with Oki potential',
                'After knockdown: ws4 catches most wakeup options',
                'CC b+1+2 or ws2 launch opponents who stand up or get-up kick',
                'FC.db+3+4 → BT.4 catches side rollers',
                'Mix with AOP.d+1+2 (safe mid launcher) for a terrifying 50/50 from AOP',
                '-33 on block — death on block'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="AOP.1 Series — The Extension Game">
          <MoveCard character="xiaoyu"
            videoId="AOP.1"
            move={{
              input: 'AOP 1',
              hitLevel: ['m'],
              damage: '11',
              startup: 'i18',
              onBlock: '-5',
              onHit: '+6',
              tags: ['Mid', 'Extension'],
              description: 'The starter for three different extensions, creating a guessing game. AOP.1,2 (mid-high, safe, into BT), AOP.1,4 (mid-mid tornado, -9 on block), and AOP.1,B (transition to HYP).',
              notes: [
                'AOP.1,2: mid-high, -3 on block, safe. Opponents can duck the high',
                'AOP.1,4: mid-mid, -9 on block, tornado on airborne. Catches duckers',
                'AOP.1,B: transition to Hypnotist. Opens up HYP 50/50',
                'Both AOP.1,2 and AOP.1,4 are heavily delayable',
                'AOP.1 alone transitions to crouch for ws2 fishing'
              ]
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="AOP Evasion Tools">

        <SubSection title="AOP.d — Butterfly">
          <p>
            Pressing <code>D</code> during AOP makes Xiaoyu go even lower, evading additional mids that 
            would normally hit AOP. This is called "butterfly." Entering AOP from Full Crouch 
            automatically triggers butterfly.
          </p>
          <TipBox variant="tip" title="When To Butterfly">
            Use butterfly when you anticipate a mid that barely hits AOP normally. Against characters 
            with tracking mids (like generic df+1), the regular AOP sidestep might not be enough. 
            Adding butterfly gives extra evasion, but also delays your retaliation slightly.
          </TipBox>
        </SubSection>

        <SubSection title="AOP.f+3+4 — Forward Roll">
          <p>
            A fast forward roll that goes over highs and closes distance. Great for approaching, but 
            a fast mid can interrupt it. Transitions back to AOP with <code>D</code>.
          </p>
        </SubSection>

        <SubSection title="AOP.b+3+4 — Quick BT Transition">
          <p>
            Instantly transitions from AOP to Rain Dance (BT). Useful when you want to switch from 
            evasion mode to BT mixup mode without committing to an attack.
          </p>
        </SubSection>

        <SubSection title="AOP Side Rolls (AOP.1+3 / AOP.2+4)">
          <p>
            These are throws that can be <strong>canceled</strong> by holding any directional input. 
            <code>AOP.1+3</code> rolls left (1 break), <code>AOP.2+4</code> rolls right (2 break). 
            The roll animations provide extra evasion. Cancel them to bait opponents, then punish with 
            ws2 or a full launcher.
          </p>
        </SubSection>
      </Section>

      <Section title="The AOP Game Plan">
        <p>
          AOP isn't about randomly going low and hoping for the best. It's about creating situations where 
          your opponent's options are limited, then picking the right response.
        </p>

        <KeyConcept title="The AOP Decision Making" icon="🧠">
          <p>After entering AOP (e.g., from f,f,F+3 on block at +7):</p>
          <ul>
            <li><strong>Opponent presses a high?</strong> → AOP crushes it. Punish with AOP.2,1 or AOP.uf+3</li>
            <li><strong>Opponent presses a linear mid?</strong> → AOP's sidestep evades it. Punish with AOP.2,1</li>
            <li><strong>Opponent does a low?</strong> → AOP.uf jumps it. Punish from while standing</li>
            <li><strong>Opponent freezes?</strong> → Go for AOP.3+4 (low) or AOP.d+1+2 (mid launcher)</li>
            <li><strong>Opponent backdashes?</strong> → AOP.1+2 has great range to chase them</li>
          </ul>
        </KeyConcept>

        <PracticeBox
          title="AOP Evasion Drill"
          setup="Record the opponent doing common strings. Practice entering AOP with d+1+2 or SSR d+1+2 and punishing the whiff."
          tasks={[
            { id: 'xiao-aop-jab', text: 'Evade opponent\'s 1,2 with AOP → AOP.2,1 punish — 5 times', type: 'counter', target: 5 },
            { id: 'xiao-aop-df1', text: 'SSR d+1+2 to evade df+1 → AOP.uf+3 punish — 5 times', type: 'counter', target: 5 },
            { id: 'xiao-aop-wr3', text: 'f,f,F+3 on block → AOP.2,1 beats opponent mashing — 5 times', type: 'counter', target: 5 },
            { id: 'xiao-aop-mix', text: 'From AOP, alternate AOP.d+1+2 and AOP.3+4 — 10 reps', type: 'counter', target: 10 },
          ]}
        />

        <Collapsible title="Moves That Transition Into AOP">
          <ul>
            <li><code>d+1+2</code> — Manual entry</li>
            <li><code>f,f,F+3</code> — While running 3 (forced AOP mixup)</li>
            <li><code>f,f+1,D</code> — Forward approach into AOP</li>
            <li><code>3+4,D</code> — From the safe CH mid</li>
            <li><code>uf+4,d+1+2</code> — From the keepout kick</li>
            <li><code>FC.df+4</code> — From the full crouch low poke</li>
            <li><code>AOP.uf+3,1</code> — Loops back into AOP from hop kick</li>
            <li><code>ub+3</code> — The new launcher recovers in AOP</li>
            <li><code>BT.2,2,1,D</code> — From BT string into AOP</li>
          </ul>
        </Collapsible>

        <TipBox variant="tip" title="Don't Live In AOP">
          AOP is a tool, not a home. Enter it when you have advantage or when you've conditioned the 
          opponent to press buttons. If you stay in AOP too long, smart opponents will use moves that 
          hit grounded or track well to the right. Get in, do your thing, get out.
        </TipBox>
      </Section>
    </Chapter>
  )
}
