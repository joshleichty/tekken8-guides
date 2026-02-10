import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, Collapsible } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Punishment"
      intro="This is where your execution investment pays off. Lee's punishment is unique — the better your just frames, the harder every blocked move hurts."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="The Crouch Game"
    >
      <Section title="Why Lee's Punishment Is Special">
        <p>
          Most characters have fixed punishment. Their i10 does X, their i14 does Y, and that's it.
          Lee is different: his punishment <strong>scales with execution</strong>. An i10 Acid Rain
          does more damage than most characters' i15 launcher. An i14 b+1:1,2 gives a knockdown
          into oki. This means opponents can't throw out "mildly unsafe" moves against Lee the way
          they can against other characters.
        </p>

        <KeyConcept title="Punishment Changes the Matchup" icon="⚖️">
          <p>
            When an opponent knows you can Acid Rain their -10 move, they <strong>stop using that move</strong>.
            This isn't just free damage — it removes options from their gameplan. Characters who rely on
            -10 strings suddenly can't use half their offense. That's the meta-game of Lee's punishment.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Standing Punishment">
        <h3>i10 — The Game Changer</h3>
        <MoveCard
          character="lee"
          videoId="1,3"
          move={{
            input: '1,3:3:3 (Acid Rain)',
            hitLevel: ['h', 'h', 'm', 'h'],
            damage: '5, 5, 4, 14',
            startup: 'i10',
            onBlock: '-17',
            onHit: '+14',
            tags: ['Just Frame', 'i10 Punish'],
            description: 'The best i10 punish in Tekken. Just frame version leads to a full combo on hit with timestop. If you can\'t land it consistently yet, use 1,2,4 as the fallback.',
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          move={{
            input: '1,2,4',
            hitLevel: ['h', 'h', 'l'],
            damage: '5, 8, 11',
            startup: 'i10',
            onBlock: '-13',
            onHit: '-2',
            tags: ['i10 Punish', 'Fallback'],
            description: 'Your reliable i10 punish when Acid Rain isn\'t consistent. Less damage but always comes out.',
          }}
          showVideo
        />

        <h3>i11 — Counter-Hit Into Punishment</h3>
        <MoveCard
          character="lee"
          videoId="4,4,4"
          move={{
            input: '4,4:4',
            hitLevel: ['h', 'h', 'h'],
            damage: '14, 5, 12',
            startup: 'i11',
            onBlock: '-9',
            onHit: '+15a',
            tags: ['i11 Punish', 'Heat Engager'],
            description: 'Doubles as i11 standing punishment. The just frame version is a heat engager. Without the just frame, 4,4 still works as i11 punishment.',
          }}
          showVideo
        />

        <h3>i13 — Mid Punish</h3>
        <MoveCard
          character="lee"
          move={{
            input: 'df+4,4',
            hitLevel: ['m', 'h'],
            damage: '14, 22',
            startup: 'i13',
            onBlock: '-9',
            onHit: '+10g',
            tags: ['i13 Punish', 'Heat Engager'],
            description: 'Fast mid punish at i13. Heat engager on hit. Use when the move is -13 or more and you need a mid (they might be crouching).',
          }}
          showVideo
        />

        <h3>i14 — The Just Frame Punish</h3>
        <MoveCard
          character="lee"
          videoId="b+1,1,2"
          move={{
            input: 'b+1:1,2',
            hitLevel: ['h', 'm', 'h'],
            damage: '12, 6, 23',
            startup: 'i14',
            onBlock: '-6',
            onHit: '+39d',
            tags: ['Just Frame', 'i14 Punish', 'Knockdown'],
            description: 'Just frame i14 punish. Knockdown on hit into oki. Enhanced during Heat. The just frame is the :1 — press it as b+1 connects.',
          }}
          showVideo
        />

        <h3>i15 — Full Launch</h3>
        <MoveCard
          character="lee"
          move={{
            input: 'uf+4',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i15',
            onBlock: '-13',
            onHit: '+31a',
            tags: ['i15 Punish', 'Launcher'],
            description: 'Standard hopkick. Your go-to i15 launcher for punishing unsafe moves. Low crushes.',
            notes: ['Knee. Low crush.'],
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          videoId="f+3,3,3,3,3,4"
          move={{
            input: 'f+3,3,3,3,3,4 (Acid Storm)',
            hitLevel: ['m', 'm', 'h', 'h', 'h', 'h'],
            damage: '6, 3, 3, 3, 3, 25',
            startup: 'i15',
            onBlock: '-9',
            onHit: '+69a',
            tags: ['i15 Punish', 'Tornado', 'Range'],
            description: 'Alternative i15 punish with massive range. Better than uf+4 when you need reach. Tornado on hit for full combo.',
          }}
          showVideo
        />
      </Section>

      <Section title="Crouching Punishment">
        <p>
          When you block a low, you're in full crouch. Here's what you have from crouch:
        </p>

        <h3>ws i10 — Quick Crouch Punish</h3>
        <MoveCard
          character="lee"
          videoId="ws3,3"
          move={{
            input: 'ws+3,3',
            hitLevel: ['m', 'm'],
            damage: '10, 10',
            startup: 'i10',
            onBlock: '-3',
            onHit: '+8',
            tags: ['ws Punish', 'i10'],
            description: 'Fast while-standing punish. Solid damage for i10 from crouch. Use on lows that are -10 to -12.',
          }}
          showVideo
        />

        <h3>ws i11 — The Mid Check</h3>
        <MoveCard
          character="lee"
          videoId="ws4"
          move={{
            input: 'ws+4',
            hitLevel: ['m'],
            damage: '16',
            startup: 'i11',
            onBlock: '-6',
            onHit: '+5',
            tags: ['ws Punish', 'i11'],
            description: 'Fast ws mid. Transitions to HMS with 3. Use for i11-i12 crouch punishment or as a quick mid from crouch.',
            notes: ['HMS transition with 3.'],
          }}
          showVideo
        />

        <h3>ws i14 — The Launch</h3>
        <MoveCard
          character="lee"
          videoId="ws2,3"
          move={{
            input: 'ws+2,3',
            hitLevel: ['m', 'm'],
            damage: '12, 24',
            startup: 'i14',
            onBlock: '-13',
            onHit: '+32a',
            tags: ['ws Punish', 'Launcher', 'Tornado'],
            description: 'Your crouch launcher. Tornado on hit. -13 on block (punishable). Season 2 nerfed this — it\'s riskier now, so save it for confirmed punishes, not as a whiff punish from crouch.',
            notes: ['Tornado. -13 on block. Combos from 1st hit.'],
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          videoId="ws2,4"
          move={{
            input: 'ws+2,4',
            hitLevel: ['m', 'h'],
            damage: '12, 23',
            startup: 'i14',
            onBlock: '-2',
            onHit: '+13g',
            onCH: '+37a',
            tags: ['ws Punish', 'Safe', 'Wallsplat'],
            description: 'Safe alternative to ws+2,3. Only -2 on block. Wallsplats. Use when the low is only -14 and you don\'t want the -13 risk of ws+2,3.',
            notes: ['Tailspin. Balcony Break. -2 on block.'],
          }}
          showVideo
        />

        <h3>ws i18 — The Big Punish</h3>
        <MoveCard
          character="lee"
          videoId="uf+4"
          move={{
            input: 'FC uf+4',
            hitLevel: ['m'],
            damage: '25',
            startup: 'i18',
            onBlock: '-17',
            onHit: '+28a',
            tags: ['ws Punish', 'Launcher'],
            description: 'Catapult kick from full crouch. Massive damage launcher for heavily negative lows (-18 or worse). Unsafe on block, so only use on confirmed punishes.',
            notes: ['Low crush.'],
          }}
          showVideo
        />

        <TipBox variant="tip" title="ws+2,3 vs ws+2,4">
          Season 2 made this decision important. ws+2,3 launches (tornado) but is -13 on block.
          ws+2,4 is safe (-2) and wallsplats but doesn't tornado. <strong>Rule of thumb:</strong> Use ws+2,3
          for confirmed punishes where you KNOW it will hit. Use ws+2,4 when in doubt or near a wall.
        </TipBox>
      </Section>

      <Section title="Quick Reference">
        <Collapsible title="Standing Punishment Table" icon="📋">
          <ul>
            <li><strong>i10:</strong> 1,3:3:3 (Acid Rain) / 1,2,4 (fallback)</li>
            <li><strong>i11:</strong> 4,4:4 (magic 4)</li>
            <li><strong>i13:</strong> df+4,4 (heat engager)</li>
            <li><strong>i14:</strong> b+1:1,2 (knockdown)</li>
            <li><strong>i15:</strong> uf+4 (hopkick) / f+3,3,3,3,3,4 (range)</li>
          </ul>
        </Collapsible>

        <Collapsible title="Crouching Punishment Table" icon="📋">
          <ul>
            <li><strong>ws i10:</strong> ws+3,3</li>
            <li><strong>ws i11:</strong> ws+4</li>
            <li><strong>ws i13:</strong> ws+1,4 or ws+1,2~f</li>
            <li><strong>ws i14:</strong> ws+2,3 (launch) / ws+2,4 (safe, wallsplat)</li>
            <li><strong>ws i18:</strong> FC uf+4 (big launch)</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Drill: Punishment Practice">
        <PracticeBox
          title="Standing Punishment Drill"
          setup="Record dummy doing moves at different frame disadvantages. Practice applying the correct punish."
          tasks={[
            { id: 'i10-ar', text: 'Punish a -10 move with Acid Rain five times', type: 'counter', target: 5 },
            { id: 'i14-b11', text: 'Punish a -14 move with b+1:1,2 three times', type: 'counter', target: 3 },
            { id: 'i15-uf4', text: 'Punish a -15 move with uf+4 into combo', type: 'counter', target: 3 },
          ]}
        />

        <PracticeBox
          title="Crouch Punishment Drill"
          setup="Record dummy doing unsafe lows. Practice blocking low then punishing from crouch."
          tasks={[
            { id: 'ws-i10', text: 'Block a -10 low, punish with ws+3,3', type: 'counter', target: 5 },
            { id: 'ws-i14', text: 'Block a -14 low, punish with ws+2,3', type: 'counter', target: 3 },
            { id: 'ws-safe', text: 'Block a -14 low near wall, punish with ws+2,4 for wallsplat', type: 'counter', target: 3 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
