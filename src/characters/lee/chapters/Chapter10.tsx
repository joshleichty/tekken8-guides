import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, PracticeBox, ComboCard } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Heat System"
      intro="Heat transforms Lee from a precision tool into a wrecking ball. Free just frames, a launching f,f+3, and devastating wall pressure — but only for a limited time."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="The Complete Lee"
    >
      <Section title="Heat Activation">
        <p>
          Heat is a once-per-round resource. When you activate it, Lee gets automatic just frames,
          enhanced moves, and access to heat-only attacks. Choosing <em>when</em> to activate matters
          more than any individual heat move.
        </p>

        <KeyConcept title="Heat Engagers" icon="🔥">
          <p>These moves activate heat when they hit:</p>
          <ul>
            <li><strong>f,f+3</strong> — Safest activation. Long range mid. Your default heat starter.</li>
            <li><strong>df+4,4</strong> — Mid-range heat engage from your i13 punish.</li>
            <li><strong>4,4:4</strong> — Counter-hit magic 4 into heat. Devastating when it lands.</li>
            <li><strong>HMS 1,1,1</strong> — Heat engage from Hitman. Good when you're already in stance.</li>
            <li><strong>df+3,2,3</strong> — String heat engager. -14 on block, so be careful.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="When to Activate">
          The best heat activation is from <strong>f,f+3 on hit</strong>. It's safe, ranged, and gives you
          a combo into heat activation. If f,f+3 doesn't land, activating off df+4,4 in punishment
          situations is the next best option. Don't waste heat activation on raw moves that get blocked.
        </TipBox>
      </Section>

      <Section title="What Heat Changes">
        <KeyConcept title="Free Just Frames" icon="✨">
          <p>
            During heat, all of Lee's just frame inputs become automatic. This means:
          </p>
          <ul>
            <li><strong>Acid Rain (1,3:3:3)</strong> — Perfect every time. Every -10 punish becomes a full combo.</li>
            <li><strong>4,4:4</strong> — Always the full just frame version. Automatic heat engage from CH.</li>
            <li><strong>b+1:1,2</strong> — Perfect i14 punish. Knockdown every time.</li>
            <li><strong>f+4:1</strong> — Perfect tornado ender. Max combo damage.</li>
          </ul>
          <p>
            This is the "experience the payoff" mechanic. In heat, you play the Lee you're <em>working toward</em>.
            Use it to feel what max-execution Lee is like, and it'll motivate your just frame practice.
          </p>
        </KeyConcept>

        <KeyConcept title="f,f+3 Becomes a Launcher" icon="🚀">
          <p>
            The biggest heat change: <strong>f,f+3 launches in heat</strong>. Your safe, ranged mid approach
            tool — the one that's normally just a knockdown — now leads to a full combo. This
            completely transforms your ranged game. Opponents who were comfortable blocking f,f+3
            now have to respect it as a launch threat.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Heat Moves">
        <MoveCard
          character="lee"
          videoId="H.df+3+4"
          move={{
            input: 'H.df+3+4',
            hitLevel: ['m'],
            damage: '35',
            startup: 'i16',
            onBlock: '0',
            onHit: '+26a',
            tags: ['Mid', 'Homing', 'Heat Move'],
            description: 'Homing mid that\'s zero on block. 35 damage on hit with aerial knockdown. Catches sidesteps and is completely safe. A strong neutral tool in heat.',
            notes: ['Homing. Balcony Break. Consumes Heat Time.'],
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          videoId="H.d+1+2"
          move={{
            input: 'H.d+1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i18',
            onBlock: '+6',
            onHit: '+21a',
            tags: ['Mid', 'Plus on Block', 'Heat Move'],
            description: 'Plus on block mid (+6). In heat, this is terrifying — block it and Lee is massively plus. Leads to pressure and can transition to HMS. 30 damage on hit.',
            notes: ['Balcony Break. HMS transition with 3+4.'],
          }}
          showVideo
        />

        <MoveCard
          character="lee"
          videoId="H.2+3"
          move={{
            input: 'H.2+3 (Heat Smash)',
            hitLevel: ['l'],
            damage: '40',
            startup: 'i20',
            onBlock: '-14',
            onHit: '0d',
            tags: ['Low', 'Heat Smash', 'Throw'],
            description: 'Heat Smash. Low into throw on hit. 40 damage. -14 on block so it\'s punishable. Use as a mix with H.d+1+2 — they have to guess low or mid.',
            notes: ['Heat Smash. Balcony Break.'],
          }}
          showVideo
        />
      </Section>

      <Section title="Heat Pressure at the Wall">
        <p>
          Lee's heat is strongest at the wall. The combination of H.d+1+2 (+6 on block) and H.2+3
          (Heat Smash low) creates a wall mixup that's extremely hard to deal with.
        </p>

        <KeyConcept title="Wall Heat Mixup" icon="🧱">
          <ul>
            <li><strong>H.d+1+2 (mid, +6 on block):</strong> If they stand-block, you're +6. Do it again, or press df+1, or go for magic 4.</li>
            <li><strong>H.2+3 (Heat Smash, low):</strong> 40 damage low that catches crouch-blockers. -14 on block but massive reward.</li>
            <li><strong>The mix:</strong> They have to guess mid or low. Wrong guess = huge damage at the wall. Right guess = they blocked one move but you still have heat.</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Heat Smash Timing">
          Don't throw out Heat Smash raw. Set it up: do H.d+1+2 first (they block, you're +6),
          then threaten it again. After they've blocked two H.d+1+2s and are scared to press,
          <strong>that's</strong> when you go for the Heat Smash. The conditioning makes the low land.
        </TipBox>
      </Section>

      <Section title="Heat Combos">
        <ComboCard
          title="f,f+3 Heat Launch"
          starter="f,f+3 (in Heat)"
          notation="f,f+3 (Heat) → Heat Dash → b+2,4,3~f → b+2,4,3~f → f+2,1 → f+4:1 T! → d+3"
          damage="~70"
          difficulty="intermediate"
          wallCarry={true}
          notes="f,f+3 launches in heat. Heat Dash into standard b+2 loops. Just frame f+4:1 is free in heat."
        />

        <ComboCard
          title="Heat Burst Extension"
          starter="ws+2,3 → Heat Burst"
          notation="ws+2,3 → Heat Burst → dash → b+2,4,3~f → b+2,4,3~f → f+2,1 → d+3"
          damage="~68"
          difficulty="intermediate"
          wallCarry={true}
          notes="ws+2,3 into heat burst extends crouch punishes. Uses heat meter but turns -14 punish into a full combo."
        />
      </Section>

      <Section title="Best Heat Usage">
        <KeyConcept title="Heat Game Plan" icon="📋">
          <p>Priority order for using heat:</p>
          <ol>
            <li><strong>From f,f+3 hit:</strong> Safest activation. Leads to full combo in heat. Best option.</li>
            <li><strong>From combo (heat burst):</strong> ws+2,3 into heat burst extends crouch punishment dramatically.</li>
            <li><strong>Wall pressure:</strong> If you have wall position, activate heat for the H.d+1+2 / H.2+3 mixup.</li>
            <li><strong>Save for punishment:</strong> If execution is inconsistent, save heat for guaranteed Acid Rain punishes.</li>
          </ol>
          <p>
            <strong>The goal:</strong> Learn real just frames so you don't <em>need</em> heat for punishment.
            Then heat becomes a pure offensive tool — wall pressure, f,f+3 launches, combo extensions.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Drill: Heat Practice">
        <PracticeBox
          title="Heat Combos"
          setup="Activate heat in Practice Mode. Practice heat-specific combos."
          tasks={[
            { id: 'heat-ff3', text: 'Land f,f+3 (heat launcher) into full combo 5 times', type: 'counter', target: 5 },
            { id: 'heat-burst', text: 'Land ws+2,3 → heat burst → combo 3 times', type: 'counter', target: 3 },
            { id: 'heat-wall', text: 'At the wall: do H.d+1+2 twice, then H.2+3 (feel the mixup)', type: 'toggle' },
            { id: 'heat-jf', text: 'During heat, punish a -10 move with Acid Rain (automatic just frame)', type: 'counter', target: 5 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
