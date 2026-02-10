import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="Keepout — The Wall of Back Four"
      intro="Lee's mid-range game is a fortress. This chapter teaches you to control space so opponents play on your terms."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Just Frame Mastery"
    >
      <Section title="Why Keepout Matters">
        <p>
          Most Tekken characters want to get close. Lee wants to stay at range 2-3 — close enough
          to threaten, far enough that their pokes whiff. From this range, Lee has some of the best
          tools in the game. The opponent has to <em>earn</em> the right to get close, and the
          price of admission is eating a b+4 or f,f+2.
        </p>

        <KeyConcept title="Lee's Ideal Range" icon="📏">
          <p>
            Imagine two character lengths apart. You can't jab them. They can't jab you. But your
            b+4, f,f+2, and f,f+3 all reach. This is Lee's kingdom. If you can keep the match here,
            you win the war of attrition because your tools at this range are better than almost
            everyone's.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Centerpiece: b+4">
        <MoveCard
          character="lee"
          move={{
            input: 'b+4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i20',
            onBlock: '-3',
            onHit: '+7c',
            onCH: '+64a',
            tags: ['Mid', 'CH Launcher', 'Keepout'],
            description: 'Lee\'s signature keepout tool. -3 on block means it\'s essentially safe. On normal hit, it crumples (+7c) for guaranteed followups. On counter-hit, it launches for a full combo. Transitions to Hitman Stance with 3.',
            notes: ['Floor Break. Spike. HMS transition with 3.'],
          }}
          showVideo
        />

        <p>
          b+4 is the move that defines Lee's neutral game. At i20, it's not fast — but its <strong>range
          is massive</strong>. It catches people trying to close distance. It's only -3 on block, so the
          opponent can't punish it. And the reward structure is incredible:
        </p>
        <ul>
          <li><strong>On block (-3):</strong> You're barely minus. Backdash and you're back at your ideal range.</li>
          <li><strong>On normal hit (+7c):</strong> Crumple stun. You get guaranteed damage — HMS u+4 or another follow-up.</li>
          <li><strong>On counter-hit (+64a):</strong> Full launch. Full combo. This is the payoff for all your patience.</li>
        </ul>

        <TipBox variant="tip" title="b+4 into Hitman Stance">
          After b+4, pressing 3 transitions you into Hitman Stance. This is covered fully in Chapter 8,
          but for now know that b+4,3 on block gives you access to HMS mixups from a safe position.
          Even if they blocked b+4, the HMS transition keeps your options open.
        </TipBox>
      </Section>

      <Section title="Plus Frames at Range">
        <MoveCard
          character="lee"
          videoId="f,F+2"
          move={{
            input: 'f,f+2',
            hitLevel: ['h'],
            damage: '23',
            startup: 'i15',
            onBlock: '+2',
            onHit: '+18gc',
            onCH: '+69a',
            tags: ['High', 'Plus on Block', 'Tornado'],
            description: 'Plus on block from range. On CH, it tornadoes for a full combo. Use this to push forward while staying safe. The opponent CANNOT punish this — they have to respect it.',
            notes: ['Tornado. Balcony Break.'],
          }}
          showVideo
        />

        <KeyConcept title="f,f+2 — The Pressure Enabler" icon="💎">
          <p>
            <strong>+2 on block</strong> at range is exceptional. After they block f,f+2, you can:
          </p>
          <ul>
            <li>Press df+1 — your i13 mid now beats their i14 or slower options</li>
            <li>Press 4,4 — your i11 magic 4 now beats everything except their fastest jab, and trades favorably</li>
            <li>Do another f,f+2 — if they respect, keep stacking plus frames</li>
          </ul>
          <p>
            The catch: it's <strong>high</strong>. If they duck on read, they get a full crouch punish.
            Mix f,f+2 with f,f+3 (mid) to prevent ducking.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Homing Keepout">
        <MoveCard
          character="lee"
          move={{
            input: 'b,B+4',
            hitLevel: ['h'],
            damage: '23',
            startup: 'i19',
            onBlock: '+2',
            onHit: '+25a',
            tags: ['High', 'Homing', 'Plus on Block', 'Tailspin'],
            description: 'Homing high with strong aerial tailspin. +2 on block and tracks both directions. Use this when opponents try to sidestep your keepout.',
            notes: ['6 chip damage. Homing.'],
          }}
          showVideo
        />

        <p>
          b,b+4 solves a specific problem: opponents who sidestep your b+4 and f,f+2. It homes,
          it's +2 on block, and it does 6 chip damage. The downside is it's high — but combined
          with your mid keepout tools, the opponent can't just duck everything.
        </p>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          Keepout isn't just about pressing buttons at range. It's about making the opponent whiff,
          then punishing. Lee has excellent whiff punishment tools.
        </p>

        <MoveCard
          character="lee"
          videoId="f+3,3,3,3,3,4"
          move={{
            input: 'f+3,3,3,3,3,4',
            hitLevel: ['m', 'm', 'h', 'h', 'h', 'h'],
            damage: '6, 3, 3, 3, 3, 25',
            startup: 'i15',
            onBlock: '-9',
            onHit: '+69a',
            tags: ['Whiff Punish', 'Tornado', 'Launcher'],
            description: 'Acid Storm. Lee\'s premier whiff punishment tool. Huge range, launches on hit, tornado for full combo. The first hit has long reach and the string carries forward.',
            notes: ['Tornado. Low crush. Combos from 1st hit.'],
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i15',
            onBlock: '-7',
            onHit: '+34a',
            tags: ['Mid', 'Launcher', 'Whiff Punish'],
            description: 'Standing mid launcher. -7 on block makes it safe. Use as whiff punishment when Acid Storm won\'t reach or when you need a quick, safe launch.',
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          move={{
            input: 'df+4,4',
            hitLevel: ['m', 'h'],
            damage: '14, 22',
            startup: 'i13',
            onBlock: '-9',
            onHit: '+10g',
            tags: ['Mid-High', 'Heat Engager', 'Whiff Punish'],
            description: 'Fast mid into high. The first hit transitions to HMS on hit. The full string is a heat engager and balcony breaks. Use for medium-range whiff punishment.',
            notes: ['Heat Engager. Balcony Break. 7F delay window on 1st hit.'],
          }}
          showVideo
        />

        <TipBox variant="tip" title="Whiff Punishment Priority">
          When the opponent whiffs at range: <strong>Acid Storm</strong> (most damage, most range).
          When they whiff at mid-range: <strong>df+2</strong> (safe launcher) or <strong>df+4,4</strong> (heat engager).
          Whiff punishment is where keepout becomes lethal — you make them miss, then you make them pay.
        </TipBox>
      </Section>

      <Section title="The Mist Step Dance">
        <p>
          Lee's movement at range isn't just backdashing. He has <strong>Mist Step</strong> (f,n) — a
          forward dash that gives him access to his full crouch game and allows threatening slide
          from standing. Combined with backdash, this creates a dance where Lee weaves in and out
          of range.
        </p>

        <KeyConcept title="Movement as Keepout" icon="👣">
          <ul>
            <li><strong>Backdash</strong> — Create space, make their pokes whiff. Lee has a good backdash.</li>
            <li><strong>Sidestep left</strong> — Lee's best step direction. Many characters' key moves track right.</li>
            <li><strong>Mist Step (f,n)</strong> — Quick forward movement that threatens slide and can be cancelled into block.</li>
          </ul>
          <p>
            The pattern: backdash to create space → watch them whiff → punish with Acid Storm or df+2.
            Or: Mist Step forward → threaten slide → they freeze → b+4 or f,f+2 on their hesitation.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Drill: Keepout Spacing">
        <PracticeBox
          title="b+4 at Max Range"
          setup="Set dummy to approach. Practice maintaining your ideal range and catching approaches with b+4."
          tasks={[
            { id: 'b4-range', text: 'Land b+4 from max range five times', type: 'counter', target: 5 },
            { id: 'b4-block', text: 'Do b+4, they block it, backdash — feel how you\'re back to your range', type: 'toggle' },
            { id: 'b4-ch', text: 'Set dummy to approach with jab. Land CH b+4 three times.', type: 'counter', target: 3 },
          ]}
        />

        <PracticeBox
          title="Whiff Punishment"
          setup="Set dummy to do a whiffable move (like a hopkick). Stand at range where it whiffs."
          tasks={[
            { id: 'acid-storm', text: 'Punish the whiff with Acid Storm (f+3,3,3,3,3,4)', type: 'counter', target: 5 },
            { id: 'df2-punish', text: 'Punish the whiff with df+2 from closer range', type: 'counter', target: 5 },
            { id: 'ff2-plus', text: 'After they whiff, step forward and do f,f+2 for plus frames', type: 'toggle' },
          ]}
        />
      </Section>
    </Chapter>
  )
}
