import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  ComboCard,
  KeyConcept, 
  TipBox,
  SkillCheck,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Combos"
      intro="Clive's combos are flexible and rewarding. These routes prioritize consistency while still delivering strong damage and wall carry. Master these before optimizing."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn Punishment"
    >
      <Section title="Combo Philosophy">
        <p>
          Clive has <span className="highlight">extremely flexible combo routes</span>. You can 
          choose between wall carry, Zantetsuken meter building, or raw damage depending on the 
          situation. These combos focus on consistency first.
        </p>

        <KeyConcept title="Combo Decision Making" icon="🧠">
          <ul>
            <li><strong>Near wall:</strong> Short filler → wall splat → wall combo</li>
            <li><strong>Mid-stage:</strong> Full combo with wall carry enders</li>
            <li><strong>Building meter:</strong> Use enders that build Zantetsuken (PHX 2,2)</li>
            <li><strong>Max damage:</strong> PHX 2,1 tornado ender</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Universal Staple Combo">
        <p>
          This combo works off most launchers and is your go-to until you're comfortable:
        </p>

        <ComboCard
          title="Universal Staple"
          starter="df+2 / ws+2 / f+3"
          route={['d+1', 'ws+4', 'db+1+2,1', 'updraft 2,2 T!', 'df+1,2~F', 'PHX 2,1']}
          damage="~65-70"
          difficulty="beginner"
          notes="Works on all characters. Consistent wall carry and good damage."
          wallCarry={true}
        />

        <TipBox variant="tip" title="The Key Parts">
          <ul>
            <li><strong>d+1 → ws+4:</strong> Easy pickup that works from most launchers</li>
            <li><strong>db+1+2,1:</strong> Sets up for updraft</li>
            <li><strong>updraft 2,2:</strong> Your tornado move</li>
            <li><strong>df+1,2~F → PHX 2,1:</strong> Wall carry ender</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Launcher-Specific Combos">
        <SubSection title="df+2 / ws+2 / f+3 (Standard Launchers)">
          <ComboCard
            title="Standard Launcher Combo"
            starter="df+2 / ws+2 / f+3"
            route={['d+1', 'ws+4', 'db+1+2,1', 'updraft 2,2 T!', 'df+1,2~F', 'PHX 2,1']}
            damage="~65-70"
            difficulty="beginner"
            notes="Your bread and butter. Consistent on all characters."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH f,f+2 (Counter-Hit Running 2)">
          <ComboCard
            title="CH f,f+2 Combo"
            starter="CH f,f+2"
            route={['d+1', 'ws+4', 'db+1+2,1', 'updraft 2,2 T!', 'df+1,2~F', 'PHX 2,1']}
            damage="~68"
            difficulty="beginner"
            notes="Same combo as standard launchers. f,f+2 spikes on CH."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH db+4 (Counter-Hit Low)">
          <ComboCard
            title="CH db+4 Combo"
            starter="CH db+4"
            route={['b+2', 'd+1', 'ws+4', '4,4~F', 'PHX 3,1+2']}
            damage="~55"
            difficulty="beginner"
            notes="db+4 uses tornado immediately. Different route."
            wallCarry={true}
          />

          <ComboCard
            title="CH db+4 (Meter Build)"
            starter="CH db+4"
            route={['b+2', 'd+1', 'ws+4', '4,4~F', 'PHX 2,1']}
            damage="~52"
            difficulty="beginner"
            notes="Alternative ender if you want more wall carry."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH d+1+2 (Counter-Hit Sword Slam)">
          <ComboCard
            title="CH d+1+2 Combo"
            starter="CH d+1+2"
            route={['b+2', 'd+1', 'ws+4', '4,4~F', 'PHX 2,1']}
            damage="~58"
            difficulty="beginner"
            notes="d+1+2 tornado launches on CH. Same route as CH db+4."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="CH b+1 / CH b+4 (Counter-Hit Mids)">
          <ComboCard
            title="CH b+1 Combo"
            starter="CH b+1"
            route={['db+1+2,1', 'updraft 2,2 T!', 'df+1,2~F', 'PHX 2,1']}
            damage="~62"
            difficulty="beginner"
            notes="b+1 launches high on CH. Skip the first filler."
            wallCarry={true}
          />

          <ComboCard
            title="CH b+4 Combo"
            starter="CH b+4"
            route={['b+4']}
            damage="~40"
            difficulty="beginner"
            notes="b+4 gives steel pedal. Just do another b+4 for guaranteed damage."
          />
        </SubSection>

        <SubSection title="Low Parry">
          <ComboCard
            title="Low Parry Combo"
            starter="Low Parry (3+4)"
            route={['d+1', 'ws+4', 'db+1+2,1', 'updraft 2,2 T!', 'df+1,2~F', 'PHX 2,1']}
            damage="~55"
            difficulty="beginner"
            notes="Same as standard combo. Low parry gives good height."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="Sidestep 1+2 (Normal Hit Launcher)">
          <ComboCard
            title="SS 1+2 Combo"
            starter="SS 1+2"
            route={['d+1', 'ws+4', 'db+1+2,1', 'updraft 2,2 T!', 'df+1,2~F', 'PHX 2,1']}
            damage="~65"
            difficulty="beginner"
            notes="SS 1+2 launches on normal hit. Standard combo applies."
            wallCarry={true}
          />
        </SubSection>
      </Section>

      <Section title="Wall Carry Options">
        <p>
          After tornado, you have several wall carry options depending on distance:
        </p>

        <KeyConcept title="Wall Carry Enders" icon="🧱">
          <ul>
            <li><strong>Short distance:</strong> b+2 (single hit, close to wall)</li>
            <li><strong>Medium distance:</strong> df+1,4 or db+2,1</li>
            <li><strong>Long distance:</strong> df+1,2~F → PHX 2,1 (standard)</li>
            <li><strong>Meter build:</strong> df+1,2~F → PHX 2,2 (less wall carry, more meter)</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Wall Combos">
        <SubSection title="Standard Wall Combo">
          <ComboCard
            title="Basic Wall Combo"
            starter="Wall Splat"
            route={['df+1,2~F', 'PHX 2,1']}
            damage="~35 (wall)"
            difficulty="beginner"
            notes="Your go-to wall combo. Consistent and good damage."
          />

          <ComboCard
            title="Alternative Wall Combo"
            starter="Wall Splat"
            route={['f+2,1', '1+2']}
            damage="~33 (wall)"
            difficulty="beginner"
            notes="Simpler execution if you struggle with PHX timing."
          />
        </SubSection>

        <SubSection title="Wall Combo with Tornado">
          <ComboCard
            title="Tornado Wall Combo"
            starter="Wall Splat (with tornado)"
            route={['d+1+2 T!', 'df+1,2~F', 'PHX 2,1']}
            damage="~42 (wall)"
            difficulty="intermediate"
            notes="Use when you still have tornado available."
          />

          <ComboCard
            title="High Damage Tornado Wall"
            starter="Wall Splat (with tornado)"
            route={['df+1,4,3 T!', 'BHT 2']}
            damage="~45 (wall)"
            difficulty="intermediate"
            notes="More damage but tighter timing."
          />
        </SubSection>

        <SubSection title="Zantetsuken Wall Ender">
          <ComboCard
            title="Zantetsuken Level 2+ Ender"
            starter="Wall Splat (with tornado)"
            route={['db+1,1+2 T!', '1+4']}
            damage="~50-80 (wall)"
            difficulty="intermediate"
            notes="Use 1+4 at end for massive damage if you have Zantetsuken meter."
          />
        </SubSection>

        <SubSection title="Oki Setup Wall Ender">
          <ComboCard
            title="Wall Mixup Ender"
            starter="Wall Splat"
            route={['df+1,4', '(delay) 3', 'dash', 'PHX mixup']}
            damage="~30 (wall) + mixup"
            difficulty="intermediate"
            notes="df+1,4,3 with delayed 3 puts you in PHX for oki mixup on tech roll."
          />
        </SubSection>
      </Section>

      <Section title="Heat Combos">
        <SubSection title="Heat Dash Combo">
          <ComboCard
            title="f+1+2 Heat Dash Combo"
            starter="f+1+2 (in Heat)"
            route={['Heat Dash', 'b+2', 'db+1+2,1', 'updraft 2,2 T!', 'df+1,2~F', 'PHX 2,1']}
            damage="~75"
            difficulty="intermediate"
            notes="f+1+2 launches in Heat. Heat Dash into full combo."
            wallCarry={true}
          />
        </SubSection>

        <SubSection title="Heat Burst Extension">
          <ComboCard
            title="Heat Burst Combo"
            starter="Any launcher"
            route={['(combo)', 'T!', 'b+2', 'Heat Burst', 'b+2', 'df+3,1']}
            damage="+15-20"
            difficulty="intermediate"
            notes="After tornado, use b+2 → Heat Burst → b+2 → df+3,1 for extra damage."
          />
        </SubSection>
      </Section>

      <Section title="Combo Reference">
        <Collapsible title="Full Combo List" icon="📋" defaultOpen>
          <p><strong>Standard Launchers (df+2, ws+2, f+3, SS 1+2):</strong></p>
          <p style={{ fontFamily: 'monospace', fontSize: '14px', marginLeft: '16px' }}>
            d+1 → ws+4 → db+1+2,1 → updraft 2,2 T! → df+1,2~F → PHX 2,1
          </p>

          <p style={{ marginTop: '16px' }}><strong>Counter-Hit Instant Tornado (CH db+4, CH d+1+2):</strong></p>
          <p style={{ fontFamily: 'monospace', fontSize: '14px', marginLeft: '16px' }}>
            b+2 → d+1 → ws+4 → 4,4~F → PHX 2,1
          </p>

          <p style={{ marginTop: '16px' }}><strong>Wall Combo (Standard):</strong></p>
          <p style={{ fontFamily: 'monospace', fontSize: '14px', marginLeft: '16px' }}>
            df+1,2~F → PHX 2,1
          </p>

          <p style={{ marginTop: '16px' }}><strong>Wall Combo (with Tornado):</strong></p>
          <p style={{ fontFamily: 'monospace', fontSize: '14px', marginLeft: '16px' }}>
            d+1+2 T! → df+1,2~F → PHX 2,1
          </p>
        </Collapsible>
      </Section>

      <Section title="Checkpoint">
        <SkillCheck
          title="Combo Readiness"
          subtitle="Confirm you can land these consistently"
          skills={[
            { id: 'staple', skill: 'I can do the staple combo 8/10 times', description: 'd+1 → ws+4 → db+1+2,1 → updraft 2,2 T! → df+1,2~F → PHX 2,1' },
            { id: 'chdb4', skill: 'I can convert CH db+4', description: 'b+2 → d+1 → ws+4 route' },
            { id: 'wall', skill: 'I can do wall combo', description: 'df+1,2~F → PHX 2,1' },
            { id: 'lowparry', skill: 'I can convert low parry', description: 'Same as staple combo' },
          ]}
          requiredToPass={3}
        />
      </Section>
    </Chapter>
  )
}
