import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard, 
  TipBox,
  PracticeBox,
  KeyConcept,
  Collapsible,
  StanceBox,
  SituationCard
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Hypnotist & Heat"
      intro="Hypnotist (HYP) is Xiaoyu's crouching stance — and it's the source of her most terrifying 50/50 mixup. Combined with Tekken 8's Heat system, Xiaoyu becomes a relentless offensive threat."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Learn Punishment"
    >
      <Section title="Understanding Hypnotist">
        <StanceBox name="Hypnotist (HYP)" input="d+1+2" icon="🌀">
          <p>
            Hypnotist is Xiaoyu's crouching stance. She goes into a low crouch that <strong>high crushes</strong> and 
            gives access to a true 50/50 mixup between a mid launcher and a low launcher. The mixup is unreactable — 
            your opponent must guess.
          </p>
          <ul>
            <li><strong>d+1+2</strong> — Manual entry from neutral</li>
            <li><strong>BT.d+1+2</strong> — Enter from BT</li>
            <li><strong>AOP.f+1+2</strong> — Enter from AOP</li>
            <li><strong>High crushes</strong> — Evades all highs during the crouch</li>
            <li><strong>Extremely fast transitions</strong> — Can enter from BT moves like BT.2,1,B</li>
          </ul>
        </StanceBox>
      </Section>

      <Section title="The HYP 50/50">
        <KeyConcept title="The Unreactable Mixup" icon="🎰">
          <p>
            This is Xiaoyu's most dangerous offensive tool. From HYP, you have two options your opponent 
            <em>cannot react to</em>:
          </p>
          <ul>
            <li><strong>HYP.1</strong> — Mid launcher (opponent must stand to block)</li>
            <li><strong>HYP.4</strong> — Low launcher (opponent must crouch to block)</li>
          </ul>
          <p>
            Both are full launchers. Both lead to combos. The opponent must guess. Getting this 50/50 
            is the endgame of Xiaoyu's pressure.
          </p>
        </KeyConcept>

        <SubSection title="HYP.1 — The Mid Launcher">
          <MoveCard character="xiaoyu"
            videoId="HYP.1"
            move={{
              input: 'HYP 1',
              hitLevel: ['m'],
              damage: '18',
              startup: 'i18~20',
              onBlock: '-13',
              onHit: '+30a',
              tags: ['Mid', 'Launcher'],
              description: 'The mid option of the HYP 50/50. Launches on hit for a full combo. -13 on block — punishable but not launch punishable by most characters.',
              notes: [
                'Full launch on hit',
                '-13 on block — 13f punish from most characters',
                'High crushes during HYP crouch',
                'Combo: HYP.1 → f+3,1 → BT.2 → BT.1,2 T! → ender',
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="HYP.4 — The Low Launcher">
          <MoveCard character="xiaoyu"
            videoId="HYP.4"
            move={{
              input: 'HYP 4',
              hitLevel: ['l'],
              damage: '22',
              startup: 'i22~24',
              onBlock: '-26',
              onHit: '+40a',
              tags: ['Low', 'Launcher'],
              description: 'The low option of the HYP 50/50. Full launch on hit. Extremely punishable on block (-26), but the opponent must guess correctly to block it.',
              notes: [
                'Full launch on hit',
                '-26 on block — launch punishable',
                'The opponent must actively low block to avoid this',
                'Combo: HYP.4 → b+3 → BT.2 → BT.1,2 T! → ender',
              ]
            }}
            showVideo
          />
        </SubSection>

        <TipBox variant="tip" title="When To Use The 50/50">
          <p>The HYP 50/50 is your <strong>round-closer</strong>. Use it when:</p>
          <ul>
            <li>You've conditioned the opponent with pokes and they're respecting your turn</li>
            <li>The opponent is at the wall and guessing wrong means the round</li>
            <li>You need to come back from a life deficit</li>
            <li>Your opponent is turtling and won't press buttons</li>
          </ul>
          <p>
            Don't spam it from neutral — it's slow to enter and can be interrupted. Set it up with 
            frame advantage from moves like <code>BT.2,1</code> or after a knockdown.
          </p>
        </TipBox>
      </Section>

      <Section title="Other HYP Moves">

        <SubSection title="HYP.3+4 — The Safe High">
          <MoveCard character="xiaoyu"
            videoId="HYP.3+4"
            move={{
              input: 'HYP 3+4',
              hitLevel: ['h'],
              damage: '25',
              startup: 'i18',
              onBlock: '-1',
              onHit: '+8a',
              tags: ['High', 'Launcher'],
              description: 'A high launcher from HYP that\'s -1 on block. Launches on normal hit. Used in combos as an ender component and as a safe option from HYP. Can be ducked, so it\'s not a replacement for the 50/50 — but punishes opponents who try to hop kick you out of HYP.',
              notes: [
                '-1 on block — essentially safe',
                'Launches on normal hit',
                'High — can be ducked',
                'Hold B to enter BT on block',
                'Key combo component (ub+1+2 → HYP.3+4 ender)'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="HYP.2 — Wall Ender">
          <MoveCard character="xiaoyu"
            videoId="HYP.2"
            move={{
              input: 'HYP 2',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i21~23',
              onBlock: '-10',
              onHit: '+32a',
              tags: ['Mid', 'Launcher'],
              description: 'A mid launcher from HYP. Primarily used as a wall combo ender (after f+2,1,B → HYP.2) and at the end of optimal combos. In open field, HYP.1 is usually the better choice.',
              notes: [
                '-10 on block — safe against most characters',
                'Launches on normal hit',
                'Primary wall combo ender',
                'Used at the end of the optimal combo ender: f,f+4 → HYP.2'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="HYP.f+2 — The Low Poke">
          <MoveCard character="xiaoyu"
            videoId="HYP.f+2"
            move={{
              input: 'HYP f+2',
              hitLevel: ['l'],
              damage: '11',
              startup: 'i17~18',
              onBlock: '-14',
              onHit: '+2',
              tags: ['Low'],
              description: 'A quick low poke from HYP. Safer than HYP.4 (-14 vs -26). Good for chipping when you don\'t want to commit to the launcher. Leaves you in HYP on hit for another mixup.',
              notes: [
                '-14 on block — punishable but safer than HYP.4',
                'On hit: +2, still in HYP',
                'Use as the low option when you don\'t want the full 50/50 risk',
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="HYP.f+3+4 — The Unblockable">
          <MoveCard character="xiaoyu"
            videoId="HYP.f+3+4"
            move={{
              input: 'HYP f+3+4',
              hitLevel: ['m'],
              damage: '50',
              startup: 'i70',
              onBlock: 'UB',
              onHit: 'KND',
              tags: ['Mid', 'Unblockable'],
              description: 'Xiaoyu\'s unblockable. Extremely slow, but guaranteed in specific situations like after a wall combo when the opponent is grounded. Also used as a psychological tool at the wall.',
              notes: [
                'Unblockable — must be evaded or interrupted',
                'Guaranteed after certain wall combo enders',
                'Hold B to cancel into BT',
              ]
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="Entering Hypnotist">
        <Collapsible title="All HYP Transitions">
          <ul>
            <li><code>d+1+2</code> — Manual entry from neutral</li>
            <li><code>BT.d+1+2</code> — From BT</li>
            <li><code>AOP.f+1+2</code> — From AOP</li>
            <li><code>BT.2,1,B</code> — From BT jab string (hold B)</li>
            <li><code>f+2,1,B</code> — From combo string (hold B)</li>
            <li><code>f,f+4</code> — From the approach kick (auto-enters HYP)</li>
            <li><code>ub+1+2</code> — From the combo transition (auto-enters HYP)</li>
            <li><code>1+2,1+2</code> — From the power crush string</li>
            <li><code>After knockdown</code> — Manual d+1+2 during opponent's wakeup</li>
          </ul>
        </Collapsible>

        <SituationCard title="Setting Up The 50/50">
          <p>The best setups for the HYP 50/50:</p>
          <ul>
            <li><code>BT.2,1,B</code> — From +6 on hit, hold B to enter HYP. The 50/50 is guaranteed to come out before most interrupts.</li>
            <li><code>f,f+3 on hit (+12)</code> — Massive frame advantage. Enter HYP with d+1+2 and the 50/50 is uninterruptable.</li>
            <li><code>After knockdown</code> — Opponent must wakeup into your 50/50. They can't mash out in time.</li>
            <li><code>Wall pressure</code> — At the wall, the 50/50 carries extra weight because both options lead to wall combos.</li>
          </ul>
        </SituationCard>
      </Section>

      <Section title="Xiaoyu's Heat System">

        <KeyConcept title="Heat Overview" icon="🔥">
          <p>
            Xiaoyu's heat system amplifies her stance game. Her heat engager is <code>AOP.2,1</code> 
            (from Art of Phoenix), which puts her in heat and gives access to enhanced moves. In heat, 
            she gains chip damage on block, plus access to Heat Smash and Heat Dash.
          </p>
        </KeyConcept>

        <SubSection title="Heat Engagers">
          <ul>
            <li><code>AOP.2,1</code> — Primary heat engager (from AOP, confirmable)</li>
            <li><code>BT.1+2,4</code> — High extension from BT.1+2 (+3 on block in BT, heat engager)</li>
            <li><code>f+4</code> — Standing mid kick (heat engager on hit)</li>
            <li><code>db+4,2</code> — Low into mid string (heat engager, -9 on block)</li>
          </ul>
        </SubSection>

        <SubSection title="Heat Smash — H.df+1+2">
          <MoveCard character="xiaoyu"
            videoId="H.df+1+2"
            move={{
              input: 'H.df+1+2',
              hitLevel: ['m'],
              damage: '30',
              startup: 'i20~22',
              onBlock: '-13',
              onHit: '+40a',
              tags: ['Mid', 'Launcher', 'Heat Smash'],
              description: 'Xiaoyu\'s Heat Smash. A mid launcher that depletes your heat bar. Launches for a full combo. Use it when you\'re about to lose heat timer or when you have a read. -13 on block.',
              notes: [
                'Depletes heat bar on use',
                '-13 on block',
                'Use it or lose it — burn heat before timer expires',
                'Full combo on hit'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="Heat Burst">
          <p>
            Heat Burst (<code>2+3</code> in heat) cancels your current move's recovery and enters heat mode. 
            Key uses for Xiaoyu:
          </p>
          <ul>
            <li><strong>After tornado in combos</strong> — Cancel into heat for extended wall carry:
              <code> T! → f+2 → Heat Burst → b+3+4 → BT.1,2</code></li>
            <li><strong>Making unsafe moves safe</strong> — Use after a blocked move to cancel recovery</li>
            <li><strong>Wall pressure</strong> — Heat Burst at the wall for chip damage and continued pressure</li>
          </ul>
        </SubSection>

        <SubSection title="Heat Dash">
          <p>
            Heat Dash (<code>f,f</code> during heat) is a dash that costs heat. It's useful for:
          </p>
          <ul>
            <li>Closing distance quickly after pokes</li>
            <li>Following up hits with additional pressure</li>
            <li>Extending combos at the wall with additional hits</li>
          </ul>
        </SubSection>

        <TipBox variant="tip" title="Heat Strategy">
          <p>Xiaoyu's heat is best used for:</p>
          <ol>
            <li><strong>Combo extension</strong> — Heat Burst after tornado for more wall carry</li>
            <li><strong>Wall pressure</strong> — Chip damage + enhanced moves at the wall</li>
            <li><strong>Heat Smash round closer</strong> — When life leads are close, the raw damage matters</li>
          </ol>
          <p>
            Don't burn heat randomly. Save it for situations where the extra damage or wall carry matters. 
            If your heat timer is about to expire, use Heat Smash rather than letting it go to waste.
          </p>
        </TipBox>
      </Section>

      <Section title="Putting It All Together">
        <PracticeBox
          title="Hypnotist & Heat Drill"
          setup="Set opponent to Guard All / Guard Random for 50/50 practice."
          tasks={[
            { id: 'xiao-hyp-50', text: 'BT.2,1,B → HYP → HYP.1 (mid) — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-hyp-low', text: 'BT.2,1,B → HYP → HYP.4 (low) — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-hyp-combo-m', text: 'HYP.1 full combo — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-hyp-combo-l', text: 'HYP.4 full combo — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-heat-combo', text: 'Any launcher → T! → Heat Burst → wall carry ender — 5 times', type: 'counter', target: 5 },
            { id: 'xiao-heat-smash', text: 'Enter heat with AOP.2,1 → pressure → Heat Smash when timer is low — 5 times', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
