import { Chapter, Section } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter8({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={8}
      title="Standard Combos"
      intro="Now that you understand DSS and the slide, let's optimize your combos. Law's combos aren't the hardest in the game, but they have good damage and wall carry."
      onPrevious={() => goToChapter(7)}
      onNext={() => goToChapter(9)}
      nextLabel="Punishment"
    >
      <Section title="Standard Launch Combos">
        <p>
          These combos work from <code>df+2</code>, <code>uf+4</code>, <code>ws+2</code>, 
          <code>uf,n,4</code>, and most other launchers.
        </p>

        <ComboCard
          title="Staple Route"
          starter="df+2 / uf+4 / ws+2"
          route={['4,u+3', 'dash', 'f,f+4', '2', 'f,f+2,3 T!', '4,3~f', 'DSS.f+4']}
          damage="~65"
          difficulty="intermediate"
          wallCarry
          notes={[
            '4,u+3 is your main filler',
            'f,f+2,3 gives Tornado',
            '4,3~f → DSS f+4 is the ender'
          ]}
        />

        <ComboCard
          title="Optimized Route"
          starter="df+2 / uf+4 / ws+2"
          route={['4,u+3', 'dash', '4,3~f', 'DSS.uf+2', 'dash', '1+2 T!', '4,3~f', 'DSS.f+4']}
          damage="~70"
          difficulty="advanced"
          wallCarry
          notes={[
            'Uses DSS uf+2 as filler',
            '1+2 (nunchuck) for Tornado',
            'More damage, tighter timing'
          ]}
        />

        <ComboCard
          title="Max Damage Route"
          starter="df+2 / uf+4 / ws+2"
          route={['4,u+3', 'dash', 'df+1,2', 'f,f+4', '1+2 T!', 'df+1,2', 'f,f+4']}
          damage="~72"
          difficulty="advanced"
          wallCarry
          notes={[
            'Uses df+1,2 for max damage filler',
            'Better wall carry than DSS route'
          ]}
        />
      </Section>

      <Section title="Counter-Hit Combos">
        <p>
          Counter-hit launchers have specific routes:
        </p>

        <ComboCard
          title="CH f+1+2 (Dragon Hammer)"
          starter="CH f+1+2"
          route={['dash', '4,u+3', 'f,f+4', '2', 'f,f+2,3 T!', '4,3~f', 'DSS.f+4']}
          damage="~68"
          difficulty="intermediate"
          notes={[
            'Dash forward after the crumple',
            'Same route as standard launch after pickup'
          ]}
        />

        <ComboCard
          title="CH 1+2 (Nunchuck)"
          starter="CH 1+2"
          route={['d+1+2 (DSS)', 'DSS.3', 'b+2,3,4~f', 'DSS.f+4']}
          damage="~55"
          difficulty="intermediate"
          notes={[
            'CH 1+2 is instant Tornado',
            'd+1+2 enters DSS manually',
            'Alternative: df+1,2 → b+2,3,4~f → DSS f+4'
          ]}
        />

        <ComboCard
          title="CH ws+4,3"
          starter="CH ws+4,3"
          route={['d+1+2 (DSS)', 'DSS.3', 'b+2,3,4~f', 'DSS.f+4']}
          damage="~60"
          difficulty="intermediate"
          notes={[
            'Same concept as CH 1+2',
            'ws+4,3 is Tornado on CH'
          ]}
        />

        <ComboCard
          title="CH 4,3~f (Magic 4 DSS)"
          starter="CH 4,3~f"
          route={['DSS.f+2', 'df+1,2', '1+2 T!', '4,3~f', 'DSS.f+4']}
          damage="~65"
          difficulty="advanced"
          notes={[
            '4,3 counter-hit into DSS',
            'DSS.allows full combo off magic 4'
          ]}
        />
      </Section>

      <Section title="Wall Combos">
        <p>
          When your combo reaches the wall:
        </p>

        <ComboCard
          title="Wall Splat Combo"
          starter="Wall Splat"
          route={['4,3~f', 'DSS.f+3']}
          damage="~25"
          difficulty="beginner"
          notes={[
            'Simple wall combo',
            'DSS.f+3 is heat engager'
          ]}
        />

        <ComboCard
          title="Wall Combo with Tornado"
          starter="Wall Splat (with T! available)"
          route={['1+2 T!', '4,3~f', 'DSS.f+3']}
          damage="~45"
          difficulty="intermediate"
          notes={[
            'Use when you haven\'t used Tornado',
            'More damage with the extra juggle'
          ]}
        />

        <ComboCard
          title="Optimized Wall Combo"
          starter="Wall Splat (with T! available)"
          route={['b+2,3,4~f', 'DSS.3', '1,2,2,1+2']}
          damage="~55"
          difficulty="advanced"
          notes={[
            'Junkyard into DSS route',
            'Delay the 1+2 for max damage'
          ]}
        />

        <TipBox variant="tip" title="Wall Oki Secret">
          After junkyard (b+2,3,4) at the wall, you're +6 and in perfect slide mixup range. 
          This sets up: slide → 1+2 follow-up → slide again. This is how Law steals rounds.
        </TipBox>
      </Section>

      <Section title="Heat Combos">
        <p>
          When Heat is activated mid-combo:
        </p>

        <ComboCard
          title="Heat Dash Extension"
          starter="Heat Engager (e.g., 1,1,1)"
          route={['Heat Dash', 'df+1,2', 'f,f+4', '1+2 T!', '4,3~f', 'DSS.f+4']}
          damage="~75"
          difficulty="intermediate"
          notes={[
            'Heat dash after engager',
            'Extra juggle before Tornado'
          ]}
        />

        <ComboCard
          title="Heat 1+2 Combo"
          starter="Heat 1+2 (normal hit launcher)"
          route={['4,u+3', 'b+2,3,4~f', 'DSS.f+4']}
          damage="~60"
          difficulty="intermediate"
          notes={[
            'In Heat, 1+2 launches on normal hit',
            'Instant Tornado, so shorter combo'
          ]}
        />
      </Section>

      <Section title="Special Situation Combos">
        <ComboCard
          title="Low Parry"
          starter="Low Parry (df)"
          route={['f,f+2,3 T!', '4,3~f', 'DSS.f+4']}
          damage="~40"
          difficulty="beginner"
          notes={[
            'Less damage due to scaling',
            'Can also use 3,1 → b+2,3,4~f → DSS f+4'
          ]}
        />

        <ComboCard
          title="Flip Kick (UF+4,3)"
          starter="UF+4,3"
          route={['SSL', 'dash', 'd+1+2 (DSS)', 'DSS.3', 'b+2,3,4~f', 'DSS.f+4']}
          damage="~67"
          difficulty="advanced"
          notes={[
            'Flip kick launches differently',
            'Sidestep left to align',
            'Alternative easy route: dash, 4,u+3 → 4,3~f → DSS f+4'
          ]}
        />

        <ComboCard
          title="Throw Launcher (f,f+3+4)"
          starter="f,f+3+4"
          route={['4,u+3', 'f,f+4', '1+2 T!', '4,3~f', 'DSS.f+4']}
          damage="~55"
          difficulty="intermediate"
          notes={[
            'Running throw that launches',
            '1+2 break, -3 if they break'
          ]}
        />
      </Section>

      <Section title="Blue Spark Timing">
        <p>
          For maximum damage, practice getting <span className="highlight">blue sparks</span> on 
          DSS moves:
        </p>

        <KeyConcept title="Blue Spark Practice" icon="✨">
          <ol>
            <li>Do a move that transitions to DSS (like 4,3~f)</li>
            <li>Press the DSS move (like f+3 or f+4) exactly when Law enters stance</li>
            <li>If timed right, you see a blue spark and get extra damage</li>
          </ol>
          <p style={{ marginTop: '12px' }}>
            The timing cue: Law makes a small sound ("whoosh") when entering DSS. Press your 
            button right as you hear that sound.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Sweat Blue Sparks">
          Blue sparks are nice but not essential. A completed combo without blue sparks does 
          more damage than a dropped combo trying for perfect timing. Focus on consistency first.
        </TipBox>
      </Section>

      <Collapsible title="Combo Ender Reference" icon="📖">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Different enders for different situations:
          </p>

          <p><strong>4,3~f → DSS f+4</strong> — Standard</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Good damage</li>
            <li>Decent wall carry</li>
          </ul>

          <p><strong>4,3~f → DSS f+3</strong> — Heat Engager</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Activates Heat if not active</li>
            <li>Wall break and floor break</li>
          </ul>

          <p><strong>d+2,3</strong> — Tornado Ender</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Use when you need late Tornado</li>
            <li>Good for specific routes</li>
          </ul>

          <p><strong>f,f+2,3</strong> — Wall Carry Tornado</p>
          <ul style={{ marginBottom: '12px' }}>
            <li>Good wall carry</li>
            <li>Easier execution</li>
          </ul>

          <p><strong>3,4</strong> — Simple Knockdown</p>
          <ul>
            <li>Quick and easy</li>
            <li>Use when you just need to finish</li>
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="Combo Practice Checklist" icon="✅" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Practice these combos in order:
          </p>

          <ol>
            <li style={{ marginBottom: '8px' }}>□ df+2 → staple route (10 in a row)</li>
            <li style={{ marginBottom: '8px' }}>□ uf+4 → staple route (10 in a row)</li>
            <li style={{ marginBottom: '8px' }}>□ ws+2 → staple route (10 in a row)</li>
            <li style={{ marginBottom: '8px' }}>□ CH f+1+2 → combo (recognize the crumple)</li>
            <li style={{ marginBottom: '8px' }}>□ CH 1+2 → combo</li>
            <li style={{ marginBottom: '8px' }}>□ Wall combo (any splat → 4,3~f → DSS f+3)</li>
            <li style={{ marginBottom: '8px' }}>□ Low parry → combo</li>
            <li style={{ marginBottom: '8px' }}>□ Slide → turn around 1+2</li>
          </ol>

          <p style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
            Once you can do all of these consistently, you have tournament-ready combos.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
