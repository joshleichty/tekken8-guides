import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  Collapsible,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Heat System"
      intro="Let's be honest: heat is not Azucena's strength. Other characters transform when heat activates. Azucena gets some nice upgrades but nothing game-changing. The good news? It's free — and using it efficiently adds up over a match."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Defense and Panic"
    >
      <Section title="The Honest Assessment">
        <p>
          Some characters live for heat. Jin's heat dash cancels are terrifying. Dragunov's heat smash is
          oppressive. Azucena's heat is... fine. It gives her enhanced Libertador (auto-counters), a few
          heat dash cancels, and a solid heat smash. None of it fundamentally changes how she plays.
        </p>

        <p>
          But "fine" still means "free damage." You're leaving value on the table if you don't use it. The
          key is using heat efficiently — not saving it for the perfect moment, but activating it when it
          naturally comes up and extracting value before it runs out.
        </p>
      </Section>

      <Section title="Heat Engagers">
        <p>
          These moves activate heat when they connect. Use whichever comes up naturally in your gameplan —
          don't force heat activation at the cost of your pressure.
        </p>

        <MoveCard character="azucena"
          move={{
            input: '3,3',
            hitLevel: ['h', 'h'],
            damage: '14, 21',
            startup: 'i14',
            onBlock: '-5',
            onHit: '+6 (Heat)',
            tags: ['Heat Engager', 'New S2', '14f'],
            description: 'Season 2 heat engager. Use as a 14f punish to activate heat naturally from punishment — the most efficient way to engage.',
            notes: ['14f punish + heat activation', 'Both hits are high', '-5 safe on block', 'Best heat engager for natural gameplay']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          videoId="LIB.2"
          move={{
            input: 'LIB 2',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i16',
            onBlock: '-9',
            onHit: '+7 (Heat)',
            tags: ['Heat Engager', 'From Stance', 'Safe Mid'],
            description: 'Heat engager from Libertador. If you\'re in LIB and haven\'t used heat yet, this activates it while being safe.',
            notes: ['Safe heat activation from LIB', '-9 on block', '+7 on hit → heat active + advantage', 'Good when you want heat from stance']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'b+3',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i20',
            onBlock: '-9',
            onHit: '+3 (Heat)',
            tags: ['Heat Engager', 'Mid', 'Slow'],
            description: 'A slower mid heat engager. Safe at -9 but i20 makes it hard to use in pressure. Better in situations where you have time.',
            notes: ['i20 — slow', '-9 safe on block', 'Useful mid heat engager', 'Works at range']
          }}
          showVideo
        />

        <MoveCard character="azucena"
          move={{
            input: 'f+4,4',
            hitLevel: ['m', 'h'],
            damage: '13, 25',
            startup: 'i14',
            onBlock: '-7',
            onHit: 'KND (Heat)',
            tags: ['Heat Engager', 'Homing', 'High Risk'],
            description: 'A homing heat engager. The second hit can be ducked if the first is blocked, so mix with her other f+4 extensions and stance cancel.',
            notes: ['Homing — catches sidesteps', 'Second hit is high — duckable on block', '-7 on block if not ducked', 'Use as a homing heat activation']
          }}
          showVideo
        />

        <TipBox variant="tip" title="Don't Force Heat">
          The worst thing you can do is abandon your gameplan to activate heat. Let it happen naturally:
          3,3 as a 14f punish, LIB 2 from stance, or f+4,4 as a homing check. If heat activates, great.
          If it doesn't, your non-heat gameplan is already excellent.
        </TipBox>
      </Section>

      <Section title="Enhanced Libertador">
        <KeyConcept title="Heat LIB: Auto-Counter" icon="🔥">
          <p>
            In heat, Libertador gains <strong>auto-counter properties against highs AND lows</strong>.
            This means:
          </p>
          <ul>
            <li>Opponent jabs (high) → auto-countered → guaranteed db+1+2 follow-up</li>
            <li>Opponent does a low → auto-countered → tornado follow-up</li>
            <li>Successful counters also <strong>restore heat meter</strong></li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            This is the biggest heat upgrade. In heat, LIB becomes nearly risk-free: highs get countered,
            lows get countered, and only mids beat you. Opponents who know this will only use mids — which
            makes your low options from LIB more reliable.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Heat Dash Cancels">
        <p>
          A few moves gain heat dash cancel properties, making them plus on block for continued pressure.
        </p>

        <MoveCard character="azucena"
          videoId="b+2"
          move={{
            input: 'b+2~F (Heat)',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i14',
            onBlock: '+5 (HD)',
            onHit: '+8 (HD)',
            tags: ['Heat Dash', 'Plus on Block', 'Homing'],
            description: 'In heat, b+2 can be dash-cancelled for plus frames on block. Homing. This is your best heat pressure tool — plus on block, homing, into LIB or continued offense.',
            notes: ['Heat dash cancel → plus on block', 'Homing — catches sidesteps', '+5 on block → free LIB entry', 'Your best heat-specific pressure tool']
          }}
          showVideo
        />

        <Collapsible title="Other Heat Dash Options" icon="🔥">
          <div style={{ padding: '12px', color: 'var(--text-secondary)' }}>
            <p><strong>LIB 1,2~F</strong> — Heat-only combo starter from LIB. Heat dash cancel on block gives plus frames.</p>
            <p style={{ marginTop: '8px' }}><strong>b+1,1,2~F</strong> — String with heat dash cancel. Pressure tool in heat.</p>
            <p style={{ marginTop: '8px' }}>These are situational. b+2~F is your primary heat pressure tool. Focus on that one.</p>
          </div>
        </Collapsible>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="azucena"
          videoId="H.2+3"
          move={{
            input: 'Heat Smash (2+3)',
            hitLevel: ['m'],
            damage: '40',
            startup: 'i15',
            onBlock: '+3',
            onHit: 'KND → LIB',
            tags: ['Heat Smash', 'Plus on Block', 'LIB Entry'],
            description: 'Your heat smash. 15 frames, plus on block, enters LIB on hit. This is your "I have heat, use it" button. Plus on block means even if they block it, you get free stance pressure.',
            notes: ['i15 — fast for a heat smash', '+3 on block → LIB pressure', 'KND on hit → LIB', '40 damage', 'Use when heat timer is low']
          }}
          showVideo
        />

        <TipBox variant="warning" title="Use It Before You Lose It">
          Heat drains over time. If you've activated heat and haven't used the smash, watch the timer. As
          it runs low, throw out the heat smash. It's plus on block and enters LIB — there's very little
          downside to using it. Don't let heat expire without getting value.
        </TipBox>
      </Section>

      <Section title="Heat Combos">
        <KeyConcept title="Heat Combo Routes" icon="💥">
          <p>
            When you activate heat from an engager, you get a heat dash that can extend combos. The key routes:
          </p>
          <ul>
            <li><strong>b+3~F (heat activate)</strong> → f+3,4 → d+2,3 → LIB 3+4 → f,f+3 T! → f+2,1,4</li>
            <li><strong>f+4,4~F (heat activate)</strong> → similar route</li>
            <li><strong>LIB 2~F (heat activate)</strong> → similar route</li>
            <li><strong>b+2~F (in heat)</strong> → LIB 3+4 → d+2,3 → LIB 3+4 → f,f+3 T! → f+2,1,4</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            The combos use the same d+2,3 → LIB 3+4 → f,f+3 T! → f+2,1,4 structure you already know.
            The heat dash just gives you a different entry point.
          </p>
        </KeyConcept>
      </Section>

      <Section title="What's Next">
        <p>
          Heat is a bonus, not the main event. The main event is Azucena's pressure, and everything you've
          learned so far assumes you're on offense. But what happens when you're NOT? When the opponent is
          in your face, running their offense, and you need to escape? That's <strong>defense</strong> —
          and Azucena has some surprisingly good panic tools.
        </p>
      </Section>
    </Chapter>
  )
}
