import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, DecisionGrid } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Hitman Stance — A Reactive Toolkit"
      intro="Hitman Stance isn't a flowchart to memorize. It's a question you ask the opponent — and each answer they give has a punish."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Combos"
    >
      <Section title="Rethinking Stances">
        <p>
          Most guides teach stances as a move list: "From HMS, you can do 1, 2, 3, 4, u+3, u+4..."
          and expect you to memorize all options. That's backwards.
        </p>
        <p>
          Instead, think of Hitman Stance as a <strong>question you pose to the opponent</strong>.
          When you enter HMS, you're saying: "What are you going to do?" Their response determines
          your option. You're not choosing from a menu — you're <em>reacting</em> to their choice.
        </p>

        <KeyConcept title="HMS as a Read" icon="🎭">
          <p>
            You enter HMS. The opponent has to make a decision. Every decision they make has a punish:
          </p>
          <ul>
            <li>They press buttons → you beat them</li>
            <li>They jab → you crush under it</li>
            <li>They go low → you jump over it</li>
            <li>They respect → you take free plus frames or lows</li>
            <li>They sidestep duck → you cancel and realign</li>
          </ul>
          <p>You don't memorize HMS options. You learn to read the opponent's answer.</p>
        </KeyConcept>
      </Section>

      <Section title="How to Enter Hitman">
        <p>
          HMS isn't something you enter randomly. You enter it from specific situations where the
          transition is safe or advantageous:
        </p>
        <ul>
          <li><strong>3+4 (raw):</strong> Direct stance entry. Use at range where the opponent can't jab you out of it.</li>
          <li><strong>b+4,3:</strong> After your keepout mid. Even on block, the HMS transition gives you options.</li>
          <li><strong>df+4,3+4:</strong> After your i13 mid. HMS transition on hit or block.</li>
          <li><strong>1+2,3+4:</strong> After your homing mid. On block (-1), HMS gives you a mixup.</li>
          <li><strong>b+2,4,3+4:</strong> After the high string. On block (0), HMS is free.</li>
        </ul>

        <TipBox variant="tip" title="Safest Entries">
          The safest way to enter HMS is from <strong>b+4,3</strong> (b+4 is -3 on block, so they
          can't easily interrupt the transition) or from <strong>1+2,3+4</strong> (1+2 is -1 on block).
          Raw 3+4 from neutral is risky up close because fast jabs can hit you during the transition.
        </TipBox>
      </Section>

      <Section title="They Press Buttons">
        <MoveCard
          character="lee"
          videoId="HMS.1,1,1"
          move={{
            input: 'HMS 1,1,1',
            hitLevel: ['h', 'h', 'h'],
            damage: '7, 7, 20',
            startup: 'i12',
            onBlock: '-7',
            onHit: '+44d',
            tags: ['Heat Engager', 'Knockdown'],
            description: 'Your go-to when they press. i12 from HMS beats most responses. Heat engager. Knockdown on hit into oki. Safe at -7 on block.',
            notes: ['Heat Engager. Balcony Break.'],
          }}
          showVideo
        />

        <p>
          HMS 1,1,1 is fast (i12 from stance), safe (-7), and heat engages. If the opponent presses
          anything slower than a jab, this beats them. It's your default HMS option until you learn
          to read what they're doing.
        </p>
      </Section>

      <Section title="They Jab">
        <MoveCard
          character="lee"
          videoId="HMS.2"
          move={{
            input: 'HMS 2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16',
            onBlock: '-9',
            onHit: '+35a',
            tags: ['Mid', 'Launcher', 'High Crush'],
            description: 'High-crushing mid launcher from HMS. When they try to jab you out of stance, this goes under the jab and launches them. The reward for reading their panic.',
          }}
          showVideo
        />

        <p>
          When the opponent learns that HMS 1,1,1 beats their slow buttons, they'll start jabbing.
          Jabs are high. HMS 2 crushes highs. It's a mid launcher that goes under their jab and
          sends them airborne. This is where the stance game gets rewarding.
        </p>
      </Section>

      <Section title="They Go Low">
        <MoveCard
          character="lee"
          videoId="HMS.u+3"
          move={{
            input: 'HMS u+3',
            hitLevel: ['m'],
            damage: '18',
            startup: 'i18',
            onBlock: '-9',
            onHit: '+28a',
            tags: ['Mid', 'Low Crush', 'Launcher'],
            description: 'Low-crushing mid from HMS. When they try to downjab or low poke you out of stance, this jumps over it and launches.',
          }}
          showVideo
        />

        <p>
          Some opponents try to downjab or sweep Lee out of HMS. HMS u+3 is the answer — it jumps
          over lows and launches. At -9 on block, it's safe if they block it standing.
        </p>
      </Section>

      <Section title="They Respect">
        <MoveCard
          character="lee"
          videoId="HMS.u+4"
          move={{
            input: 'HMS u+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i26',
            onBlock: '+5c',
            onHit: '+8c',
            tags: ['Mid', 'Plus on Block', 'Low Crush'],
            description: 'The "respect" punish. If they just block, you get +5 on block (crumple) and +8 on hit (crumple). From +5, your df+1 beats everything, your magic 4 is nearly unbeatable.',
            notes: ['Low crush from frame 16.'],
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          videoId="HMS.4"
          move={{
            input: 'HMS 4',
            hitLevel: ['l'],
            damage: '20',
            startup: 'i22',
            onBlock: '-13',
            onHit: '+4c',
            onCH: '+72a',
            tags: ['Low', 'High Crush', 'CH Launcher'],
            description: 'Risky low from HMS. -13 on block but crumples on hit and launches on CH. Use sparingly when they\'re over-respecting.',
            notes: ['Instant Tornado on CH. High crush from frame 6.'],
          }}
          showVideo
        />

        <p>
          When they block and wait, HMS u+4 gives you +5 on block. This is incredible — you're
          massively plus after a stance move. From there, df+1 or magic 4 catches anything they try.
          HMS 4 is the risky low option — use it when they're too afraid to press buttons.
        </p>
      </Section>

      <Section title="They Sidestep Duck">
        <MoveCard
          character="lee"
          videoId="HMS.3"
          move={{
            input: 'HMS 3',
            hitLevel: ['h'],
            damage: '21, 20',
            startup: 'i18',
            onBlock: '-3',
            onHit: '0d',
            tags: ['Homing', 'Power Crush', 'Throw'],
            description: 'Power crush that catches sidestepping. Homing. Transitions to a throw on frontal hit. Use when the opponent tries to step around your HMS options.',
            notes: ['Homing. Power crush from frame 8.'],
          }}
          showVideo
        />

        <TipBox variant="warning" title="HMS Weakness">
          The opponent's best answer to HMS is <strong>sidestep duck</strong>. This avoids HMS 1,1,1 (high, linear),
          HMS u+4 (slow enough to step), and most other options. HMS 3 catches the sidestep, but it's high
          so the duck avoids it. If you notice them consistently sidestepping, <strong>cancel HMS</strong> (press b)
          and use a homing mid like 1+2 instead. Don't force the stance against someone who knows the counter.
        </TipBox>
      </Section>

      <Section title="The Decision Map">
        <DecisionGrid
          title="HMS Response Guide"
          description="Enter HMS, read their response, punish accordingly."
          rows={[
            {
              situation: 'They press slow buttons (df+1, etc.)',
              response: 'HMS 1,1,1',
              reason: 'i12 beats most responses. Heat engager. Safe.',
              risk: 'They jab first (only loses to i10 jabs)',
            },
            {
              situation: 'They jab (i10 high)',
              response: 'HMS 2',
              reason: 'High crush mid launcher. Goes under jab.',
              risk: 'They block (safe at -9)',
            },
            {
              situation: 'They downjab or low poke',
              response: 'HMS u+3',
              reason: 'Low crush mid launcher. Jumps over lows.',
              risk: 'They mid check (-9 on block if read)',
            },
            {
              situation: 'They stand-block and wait',
              response: 'HMS u+4 or HMS 4',
              reason: 'u+4 for +5 frames, HMS 4 for risky low.',
              risk: 'u+4 is slow (i26). They might press before it comes out.',
            },
            {
              situation: 'They sidestep duck',
              response: 'Cancel HMS (b) → 1+2 or realign',
              reason: 'Don\'t force stance against someone who knows the counter.',
              risk: 'You lose HMS pressure. Reset to neutral.',
            },
          ]}
        />
      </Section>

      <Section title="Drill: Hitman Reactions">
        <PracticeBox
          title="HMS Response Training"
          setup="Record dummy with random 2nd actions after blocking b+4: (1) jab, (2) downjab, (3) nothing, (4) sidestep."
          tasks={[
            { id: 'hms-111', text: 'From b+4,3 (HMS), use HMS 1,1,1 when they press buttons', type: 'toggle' },
            { id: 'hms-2', text: 'From HMS, use HMS 2 when they jab (see the high whiff)', type: 'toggle' },
            { id: 'hms-u3', text: 'From HMS, use HMS u+3 when they downjab', type: 'toggle' },
            { id: 'hms-u4', text: 'From HMS, use HMS u+4 when they respect, then press df+1', type: 'toggle' },
          ]}
        />

        <TipBox variant="tip" title="Start Simple">
          Don't try to react to everything immediately. Start by defaulting to HMS 1,1,1. Once
          you notice the opponent adapting (jabbing, ducking), switch to the appropriate counter.
          HMS mastery is about pattern recognition, not reaction speed.
        </TipBox>
      </Section>
    </Chapter>
  )
}
