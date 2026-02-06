import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard, 
  TipBox,
  KeyConcept,
  Collapsible,
  SituationCard
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="The Complete Xiaoyu"
      intro="This final chapter ties everything together. We cover the full throw game, advanced stance transitions, round-winning flowcharts, matchup awareness, and the mindset that makes Xiaoyu players dangerous."
      onPrevious={() => goToChapter(9)}
    >
      <Section title="The Full Throw Game">
        <KeyConcept title="Xiaoyu's Throws" icon="🤼">
          <p>
            Xiaoyu has a deep throw game that complements her mid/low mixups. Throws beat opponents who 
            block everything — and Xiaoyu's throws from BT are especially potent because of the Waning 
            Moon guaranteed combo.
          </p>
        </KeyConcept>

        <SubSection title="Standing Throws">
          <MoveCard character="xiaoyu"
            move={{
              input: '1+3',
              hitLevel: ['h'],
              damage: '35',
              startup: 'i12',
              onBlock: 'N/A',
              onHit: 'KND',
              tags: ['Throw', '1 Break'],
              description: 'Standard 1-break throw. Side switches with the opponent.',
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            move={{
              input: '2+4',
              hitLevel: ['h'],
              damage: '35',
              startup: 'i12',
              onBlock: 'N/A',
              onHit: 'KND',
              tags: ['Throw', '2 Break'],
              description: 'Standard 2-break throw. Side switches with the opponent.',
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            move={{
              input: 'f+2+3',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i12',
              onBlock: 'N/A',
              onHit: 'KND',
              tags: ['Throw', '1+2 Break'],
              description: 'Wang\'s Waning Moon. Only 20 damage from the throw itself, but guarantees a full follow-up combo for 50+ additional damage. The highest damage throw option in Xiaoyu\'s arsenal. 1+2 break.',
              notes: [
                'Guaranteed combo: db+2 → BT.d+3,4 → ub+3 → AOP.uf,n,3 → dash → df+2,1+2',
                'Total damage: ~70-79',
                'One of the most damaging throws in the game',
                '1+2 break — harder for opponents to break on reaction'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="BT Throws (Hop Throws)">
          <p>
            From BT, Xiaoyu has four throw options. The first three are "hop throws" — she hops onto 
            the opponent. Each has a different break and all can be <strong>canceled by holding D</strong> 
            into a crouching mixup.
          </p>
          <MoveCard character="xiaoyu"
            videoId="BT.f+1+3"
            move={{
              input: 'BT f+1+3',
              hitLevel: ['h'],
              damage: '40',
              startup: 'i12',
              onBlock: 'N/A',
              onHit: 'KND',
              tags: ['Throw', '1 Break'],
              description: '1-break hop throw from BT. 40 damage. Hold D to cancel into crouch.',
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            videoId="BT.f+2+4"
            move={{
              input: 'BT f+2+4',
              hitLevel: ['h'],
              damage: '40',
              startup: 'i12',
              onBlock: 'N/A',
              onHit: 'KND',
              tags: ['Throw', '2 Break'],
              description: '2-break hop throw from BT. 40 damage. Hold D to cancel into crouch.',
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            videoId="BT.f+2+3"
            move={{
              input: 'BT f+2+3',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i12',
              onBlock: 'N/A',
              onHit: 'KND',
              tags: ['Throw', '1+2 Break'],
              description: 'BT Waning Moon. Same as standing f+2+3 — 20 damage throw with guaranteed combo follow-up. Total damage 70-79.',
              notes: [
                'Same guaranteed combo as standing f+2+3',
                'Hold D to cancel into crouch for ws2 fishing',
                '1+2 break — hardest to break on reaction'
              ]
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            videoId="BT.f,f+3+4"
            move={{
              input: 'BT f,f+3+4',
              hitLevel: ['h'],
              damage: '40',
              startup: 'i12~15',
              onBlock: 'N/A',
              onHit: 'KND',
              tags: ['Throw', 'Unbreakable'],
              description: 'Unbreakable throw from BT. Xiaoyu lands on the opponent\'s head. 40 damage that cannot be broken. Requires f,f input from BT, so it\'s slower to come out. Opponents can only avoid this by ducking or backdashing.',
              notes: [
                'UNBREAKABLE — opponent cannot tech this',
                'Must be avoided by ducking or creating space',
                'Punishes opponents who try to stand-block against your BT game',
              ]
            }}
            showVideo
          />

          <TipBox variant="tip" title="The Throw Cancel Mixup">
            <p>
              All three hop throws (BT.f+1+3, BT.f+2+4, BT.f+2+3) can be <strong>canceled by holding D</strong>. 
              This puts you in crouch for a ws2 or ws4 follow-up. The mixup works like this:
            </p>
            <ul>
              <li>Opponent sees the throw hop → tries to break → you cancel with D → ws2 counter hits them</li>
              <li>Opponent ducks to avoid the throw → you let the throw complete → it connects because they stopped blocking</li>
            </ul>
            <p>
              This creates a throw/mid 50/50 <em>on top of</em> the existing mid/low game from BT.
            </p>
          </TipBox>
        </SubSection>
      </Section>

      <Section title="Advanced Stance Transitions">
        <KeyConcept title="The Stance Flow" icon="🌊">
          <p>
            Xiaoyu's three stances (AOP, BT, HYP) flow into each other. Mastering these transitions 
            is what separates good Xiaoyu players from great ones. The goal is to always have another 
            option, another layer, another guess your opponent must make.
          </p>
        </KeyConcept>

        <SubSection title="Stance Transition Map">
          <SituationCard title="From Neutral">
            <ul>
              <li><code>d+1+2</code> → AOP</li>
              <li><code>b+3+4</code> → BT</li>
              <li><code>d+1+2</code> → HYP</li>
              <li><code>df+1</code> → BT (on use)</li>
              <li><code>1,d+2</code> → BT (on use)</li>
            </ul>
          </SituationCard>

          <SituationCard title="From AOP">
            <ul>
              <li><code>AOP.1,2</code> → BT</li>
              <li><code>AOP.1,4</code> → BT</li>
              <li><code>AOP.f+1+2</code> → HYP</li>
              <li><code>AOP.2,1,B</code> → BT (cancel)</li>
              <li><code>AOP.u</code> → Neutral (stand up)</li>
            </ul>
          </SituationCard>

          <SituationCard title="From BT">
            <ul>
              <li><code>BT.d+1+2</code> → AOP</li>
              <li><code>BT.2,1,B</code> → HYP</li>
              <li><code>BT.f+3+4</code> → Cali Roll (still BT technically)</li>
              <li><code>BT.b+3+4</code> → BT (spin, resets position)</li>
              <li><code>BT.db</code> → Crouch</li>
            </ul>
          </SituationCard>

          <SituationCard title="From HYP">
            <ul>
              <li><code>HYP.3+4,B</code> → BT (cancel the launcher)</li>
              <li><code>HYP.f+3+4</code> → Unblockable (or cancel with B to BT)</li>
              <li><code>Stand up</code> → Neutral</li>
            </ul>
          </SituationCard>
        </SubSection>

        <TipBox variant="tip" title="Always Have A Next Move">
          <p>
            The key to advanced Xiaoyu play is never stopping. Every move should flow into another option. 
            Don't do <code>df+1</code> and then freeze in BT — always have a plan. Your "plan" can simply 
            be: sidestep → see what happens → react. But you should always be ready to act.
          </p>
        </TipBox>
      </Section>

      <Section title="Round-Winning Flowcharts">
        <SubSection title="The Opening">
          <SituationCard title="Round Start">
            <ul>
              <li><strong>Respect option:</strong> Backdash → see what opponent does</li>
              <li><strong>Poke option:</strong> <code>df+1</code> (i13 mid, transitions to BT)</li>
              <li><strong>Evasion option:</strong> <code>d+1+2</code> (AOP to duck highs/evade)</li>
              <li><strong>Aggressive option:</strong> <code>ss4</code> (sidestep into CH-launching low)</li>
              <li><strong>Risk option:</strong> <code>f,f+3</code> (approach mid, +12 on CH)</li>
            </ul>
            <p>
              Mix these up. Don't always open the same way. Against aggressive opponents, backdash or AOP. 
              Against passive opponents, approach with f,f+3 or df+1.
            </p>
          </SituationCard>
        </SubSection>

        <SubSection title="When You Have The Lead">
          <SituationCard title="Life Lead Strategy">
            <ul>
              <li><strong>Play keepout:</strong> Backdash, <code>ss4</code>, <code>df+1</code>, <code>b+4</code></li>
              <li><strong>Use AOP defensively:</strong> Duck under approaches, punish with AOP.uf+3</li>
              <li><strong>Don't take risks:</strong> No 50/50, no unsafe launchers. Make them come to you.</li>
              <li><strong>Poke and retreat:</strong> <code>df+1 → BT.db</code> — poke, retreat, repeat</li>
              <li><strong>Time is your friend:</strong> Every second that passes is in your favor</li>
            </ul>
          </SituationCard>
        </SubSection>

        <SubSection title="When You're Behind">
          <SituationCard title="Coming From Behind">
            <ul>
              <li><strong>Go for the 50/50:</strong> Set up HYP and make them guess. Both options launch.</li>
              <li><strong>Use throws:</strong> f+2+3 (Waning Moon) does 70+ total damage</li>
              <li><strong>Counter-hit fishing:</strong> ws2 from BT.db, CH ss4, CH 3+4</li>
              <li><strong>Take calculated risks:</strong> AOP.3+4, BT.d+4 — high damage if they guess wrong</li>
              <li><strong>Don't panic:</strong> One good read with Xiaoyu can flip the round</li>
            </ul>
          </SituationCard>
        </SubSection>

        <SubSection title="At The Wall">
          <SituationCard title="Wall Pressure Flowchart">
            <ol>
              <li>Poke with <code>df+1</code> → BT</li>
              <li>From BT: <code>BT.1</code> (CH mid) / <code>BT.d+4</code> (knockdown low) / throw</li>
              <li>If they respect: <code>d+1+2</code> → HYP 50/50</li>
              <li>If they try to escape: <code>f,f+3</code> catches movement</li>
              <li>If they freeze: throw → wall combo</li>
              <li>Repeat until round over</li>
            </ol>
          </SituationCard>
        </SubSection>
      </Section>

      <Section title="Matchup Awareness">
        <SubSection title="General Matchup Tips">
          <Collapsible title="Against Aggressive Characters (Hwoarang, Law, etc.)">
            <ul>
              <li>Use AOP to duck under their strings</li>
              <li>BT.b+1+3 parry catches common extensions</li>
              <li>Don't try to out-rushdown them — use evasion and whiff punishment</li>
              <li>Backdash and <code>3</code> (standing launcher) is your best friend</li>
              <li>Power crush (1+2,1+2) can absorb their pressure</li>
            </ul>
          </Collapsible>

          <Collapsible title="Against Defensive Characters (Jack, Claudio, etc.)">
            <ul>
              <li>They want to keep you out — use <code>f,f+3</code> and <code>ss4</code> to approach</li>
              <li>Apply pressure with df+1 → BT transitions</li>
              <li>The 50/50 is your best tool against turtles</li>
              <li>Don't play their game — force stance transitions and make them guess</li>
            </ul>
          </Collapsible>

          <Collapsible title="Against Big Bodies (Jack, King, Kuma)">
            <ul>
              <li>Some combos don't work on big characters — test your routes</li>
              <li>AOP goes even lower under their highs (bigger hitboxes = more evasion)</li>
              <li>Your throws do the same damage regardless of size</li>
              <li>Watch for their grab game — King especially</li>
            </ul>
          </Collapsible>

          <Collapsible title="Against Small Characters (Xiaoyu Mirror, Lili)">
            <ul>
              <li>Some combos may whiff on small hitboxes — adjust routes</li>
              <li>The optimal ender doesn't work on Xiaoyu mirror — use beginner enders</li>
              <li>Tracking moves (BT.1+2, b+2) become more important</li>
              <li>In the mirror match: whoever enters AOP/BT first usually wins the exchange</li>
            </ul>
          </Collapsible>
        </SubSection>
      </Section>

      <Section title="The Xiaoyu Mindset">
        <KeyConcept title="Play Like Water" icon="🌊">
          <p>
            Xiaoyu is a character about <strong>flow</strong>. Don't think of her moves as individual 
            tools — think of them as parts of a continuous sequence. Every move transitions into 
            something. Every block is an opportunity to evade. Every whiff is a chance to launch.
          </p>
          <p>
            The best Xiaoyu players don't play a list of moves — they play a <em>rhythm</em>. Poke, 
            transition, evade, punish, mixup, repeat. When your opponent is constantly guessing, 
            constantly reacting, constantly off-balance — that's when Xiaoyu is at her best.
          </p>
        </KeyConcept>

        <SubSection title="Key Principles">
          <ol>
            <li><strong>Always be in a stance.</strong> Neutral Xiaoyu is average. Stance Xiaoyu is terrifying.</li>
            <li><strong>Make them guess.</strong> Mid/low, throw/mid, attack/evade — every interaction should require a read.</li>
            <li><strong>Punish their mistakes.</strong> The evasion creates whiffs. The whiffs create damage.</li>
            <li><strong>Know when to be safe.</strong> df+1, BT.1, AOP.d+1+2 — you have safe options. Use them when the risk isn't worth it.</li>
            <li><strong>Know when to be scary.</strong> HYP 50/50, BT.d+4, AOP.3+4 — when you need damage, take the risk.</li>
            <li><strong>Adapt.</strong> If they're blocking your lows, go mid. If they're standing, go low. If they're mashing, counter-hit them. Xiaoyu has an answer for everything.</li>
          </ol>
        </SubSection>

        <TipBox variant="tip" title="The Journey Ahead">
          <p>
            You've covered everything from basic pokes to advanced stance transitions. But knowledge 
            isn't execution. The next step is practice:
          </p>
          <ol>
            <li>Go through each chapter's practice boxes until they're muscle memory</li>
            <li>Play ranked matches and focus on one concept per session</li>
            <li>Watch high-level Xiaoyu players and steal their habits</li>
            <li>Most importantly — have fun. Xiaoyu is one of the most creative characters in fighting games.</li>
          </ol>
          <p>
            Now go out there and make them guess. <strong>The Dancing Phoenix awaits.</strong>
          </p>
        </TipBox>
      </Section>
    </Chapter>
  )
}
