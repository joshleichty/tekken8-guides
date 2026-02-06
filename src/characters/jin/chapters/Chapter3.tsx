import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart,
  Collapsible,
  DecisionGrid
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="Counter-Hit Weapons"
      intro="Your pokes create openings. Your counter-hit tools exploit them. This chapter covers the moves that punish opponents for pressing buttons — and how to set them up so they actually land."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Opening People Up"
    >
      <Section title="Why Counter-Hits Matter for Jin">
        <p>
          In Chapter 2, you learned to poke. But poking alone doesn't kill people. You need 
          <strong> counter-hits</strong> — moves that deal massive damage specifically because 
          your opponent was pressing buttons when they shouldn't have been.
        </p>

        <p>
          The trick is: <strong>pokes create the situations where counter-hit moves land.</strong> 
          After blocking your 2,1 three times, your opponent WILL press a button eventually. 
          When they do, these moves are waiting.
        </p>
      </Section>

      <Section title="The Magic Four">
        <MoveCard character="jin"
          move={{
            input: '4',
            hitLevel: ['h'],
            damage: '15',
            startup: 'i13',
            onBlock: '-9',
            onHit: '+10g',
            onCH: '+13c (guaranteed follow-up)',
            tags: ['High', 'Homing', 'CH Tool', 'Heat Engager'],
            description: 'Jin\'s most important counter-hit tool. Homing (catches sidestep). On CH, guarantees df+1,4 or 1+2 for heat. At +3 after db+4, it TRADES with opponent jabs — and the trade gives Jin a full combo.',
          }}
          showVideo
        />

        <KeyConcept title="The +3 Trade" icon="💥">
          <p>
            This is critical to understand. When you're at +3 (after <code>db+4</code> hit or 
            <code>1,3,4</code> hit), and you do <code>4</code> while they jab:
          </p>
          <ul>
            <li>Their jab (i10) hits at frame 10 → you're +3, so from YOUR perspective it's frame 7</li>
            <li>Your <code>4</code> (i13) hits at frame 13 → from their perspective that's frame 10</li>
            <li><strong>Both moves hit at the same time = trade</strong></li>
            <li>But Jin's trade situation gives him +27 → guaranteed full combo follow-up</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            In other words: after <code>db+4</code> hits, pressing jab is a death sentence for 
            your opponent if you're ready with <code>4</code>.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="When to Use Magic Four">
          After db+4 hit (+3), after 1,3,4 hit (+3), in neutral when opponent is stepping, 
          or whenever you suspect your opponent is about to press a button. It's homing so 
          it catches sidesteps too — one move covering two defensive options.
        </TipBox>
      </Section>

      <Section title="Forward Four — The Range Monster">
        <MoveCard character="jin"
          move={{
            input: 'f+4',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i16',
            onBlock: '-8',
            onHit: '+4',
            onCH: '+42a (full combo)',
            tags: ['Mid', 'Safe', 'CH Launcher', 'Keep-Out', 'ZEN Transition'],
            description: 'One of the best moves in Tekken. Safe mid with enormous range that counter-hit launches. Can transition into ZEN with F. Use it to punish people pressing from range 2+.',
          }}
          showVideo
        />

        <p>
          <code>f+4</code> is your answer to opponents who like to press buttons from mid-range. 
          The range is deceptive — it reaches much further than it looks.
        </p>

        <Flowchart
          title="f+4 Situations"
          nodes={[
            { type: 'start', label: 'Throw out f+4 in neutral' },
            { type: 'decision', label: 'What happens?', branches: [
              { label: 'CH (they pressed)', action: 'Dash in → b+3~F → ZEN combo. Easy 70+ damage.' },
              { label: 'Normal hit (+4)', action: 'You\'re +4. Go to df+1 or db+4. Keep pressure.' },
              { label: 'Blocked (-8)', action: 'It\'s safe. They can\'t launch you. You lose your turn but nothing bad happens.' },
              { label: 'Whiffs', action: 'Recover is decent. Not ideal but you won\'t die for it usually.' },
            ]},
          ]}
        />

        <TipBox variant="tip" title="f+4 Into ZEN">
          On hit, you can hold F to transition into ZEN stance at +11. From there, 
          ZEN 3 (homing mid) beats everything. This is a free mixup opportunity — 
          we'll cover ZEN fully in Chapter 6.
        </TipBox>
      </Section>

      <Section title="b,f+2 String Series — The Mid Pressure">
        <MoveCard character="jin"
          move={{
            input: 'b,f+2,1',
            hitLevel: ['m', 'h'],
            damage: '15, 14',
            startup: 'i15',
            onBlock: '-5',
            onHit: '+6',
            onCH: '+9',
            tags: ['Mid-High', 'Safe', 'Great Range', 'Delayable'],
            description: 'Mid-high string with excellent range and tracking. The high can be ducked, but the delay catches people pressing. On CH of the second hit, the third hits (safe mid or launcher) are guaranteed.',
            notes: ['Can be delayed significantly to catch mashers'],
          }}
          videoId="b,f+2,1"
          showVideo
        />

        <MoveCard character="jin"
          move={{
            input: 'b,f+2,3',
            hitLevel: ['m', 'm'],
            damage: '15, 17',
            startup: 'i15',
            onBlock: '-9',
            onHit: '+6',
            onCH: '+59a (full combo)',
            tags: ['Mid-Mid', 'Safe', 'CH Launcher', 'ZEN Transition'],
            description: 'The safer extension. Both hits are mids. -9 on block. On CH, full combo. Can transition into ZEN with F for plus frames (+2 on block, +17 on hit).',
          }}
          videoId="b,f+2,3"
          showVideo
        />

        <p>
          The <code>b,f+2</code> series is Jin's mid-range pressure string. By itself, <code>b,f+2</code> 
          is only -7 on block with great range. The extensions create a mental game:
        </p>

        <DecisionGrid
          title="b,f+2 Extension Mixup"
          rows={[
            { situation: 'Opponent blocks b,f+2 and presses', response: 'b,f+2,1 or b,f+2,3', reason: 'The extension catches them pressing', risk: 'Low (both safe)' },
            { situation: 'Opponent blocks and waits', response: 'Just b,f+2 → sidestep or dash in', reason: 'You\'re only -7, can still move', risk: 'None' },
            { situation: 'Opponent ducks after b,f+2', response: 'b,f+2,3 (both mids)', reason: 'They expected the high (b,f+2,1)', risk: 'Low' },
            { situation: 'Opponent tries to sidestep', response: 'b,f+2,1 tracks well', reason: 'Good tracking on the second hit', risk: 'Low' },
          ]}
        />

        <TipBox variant="tip" title="b,f+2,3~F at the Wall">
          Transition to ZEN with F after <code>b,f+2,3</code> at the wall. On hit you're +17 in ZEN — 
          basically a free mixup. On block you're +2 in ZEN, which is still your turn.
        </TipBox>
      </Section>

      <Section title="df+3~3 — The Secret Mid">
        <MoveCard character="jin"
          move={{
            input: 'df+3~3',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i23',
            onBlock: '+6c',
            onHit: '+13c',
            tags: ['Mid', 'Plus on Block', 'Forced Crouch', 'Breaking Step'],
            description: 'A 23-frame mid that is PLUS SIX on block and forces crouch. This is huge — at +6 in forced crouch, you can enforce a mixup. On hit at +13, you get a guaranteed follow-up (df+1,4 or 1+2 for heat).',
          }}
          videoId="df+3,3"
          showVideo
        />

        <p>
          This move is slower (i23) so you can't just throw it out raw in neutral. But after 
          conditioning with pokes, when your opponent is scared to press, <code>df+3~3</code> 
          is devastating:
        </p>

        <ul>
          <li><strong>On block (+6, forced crouch)</strong> — Your opponent is crouching. You can go for ws+4,4, another df+3~3, throw, or electric.</li>
          <li><strong>On hit (+13)</strong> — Guaranteed <code>df+1,4</code> or <code>1+2</code> for heat engage.</li>
          <li><strong>You can enter Breaking Step</strong> — Hold df to go into Breaking Step for free electric inputs.</li>
        </ul>

        <TipBox variant="warning" title="Timing Matters">
          At 23 frames, this move will lose to anyone pressing jabs in neutral. Only use it when 
          you've conditioned the opponent to block — after landing multiple pokes, at the wall 
          when they're scared, or in situations where you're already plus.
        </TipBox>
      </Section>

      <Section title="The Counter-Hit Setup Flow">
        <p>
          Here's how all these pieces connect to your poke loops from Chapter 2:
        </p>

        <div style={{ padding: '20px', background: 'var(--background-secondary)', borderRadius: '8px', marginTop: '16px', borderLeft: '3px solid var(--accent)' }}>
          <p style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '12px' }}>Phase 1: Establish your pokes (Chapter 2)</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            <code>2,1</code> · <code>df+1</code> · <code>d+4</code> · <code>db+4</code> — chip, annoy, condition.
          </p>

          <p style={{ fontWeight: 700, color: 'var(--accent-secondary)', marginBottom: '12px' }}>Phase 2: Punish their frustration (This Chapter)</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            They start pressing → <code>f+4</code> CH launch · <code>4</code> trade combo · <code>2,1,4</code> knockdown · <code>b,f+2,3</code> CH combo
          </p>

          <p style={{ fontWeight: 700, color: '#10b981', marginBottom: '12px' }}>Phase 3: Exploit their respect (Chapter 4)</p>
          <p style={{ color: 'var(--text-secondary)' }}>
            They stop pressing → hell sweep · throws · df+3~3 · EWHF pressure — the real mixups.
          </p>
        </div>

        <p style={{ marginTop: '16px' }}>
          <strong>This is the cycle.</strong> Poke → they press → you counter-hit → they stop pressing → 
          you mixup → they start pressing again → you counter-hit again. Jin's entire game is 
          reading which phase your opponent is in and choosing the right weapon.
        </p>
      </Section>

      <Section title="Drill It">
        <Collapsible title="Counter-Hit Practice" icon="🎯" defaultOpen>
          <div style={{ marginTop: '12px' }}>
            <ol style={{ lineHeight: '2.2' }}>
              <li><strong>f+4 CH combo</strong> — Set opponent to "after block, 1". Do 2,1 on block → f+4. The f+4 will CH their jab. Practice the pickup: dash → b+3,f → ZEN combo.</li>
              <li><strong>Magic four trade</strong> — Set opponent to "after hit, 1". Do db+4 → 4. You'll trade and get the combo opportunity.</li>
              <li><strong>df+3~3 pressure</strong> — Practice df+3~3 on block, then immediately doing ws+4 or EWHF from the forced crouch advantage.</li>
              <li><strong>b,f+2,3 CH</strong> — Set opponent to mash after b,f+2. The second hit catches them for a CH combo.</li>
            </ol>
          </div>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
