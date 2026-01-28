import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="The Keepout Game"
      intro="Keepout is Bryan's bread and butter. These moves control mid-range and make opponents afraid to approach. Master these, and you'll frustrate every rushdown player."
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Learn Pokes"
    >
      <Section title="What is Keepout?">
        <p>
          <span className="highlight">Keepout</span> means using moves to prevent the opponent 
          from approaching. Instead of going to them, you make <strong>them come to you</strong> — 
          and punish them for trying.
        </p>

        <KeyConcept title="Bryan's Keepout Philosophy" icon="🛡️">
          <p>Bryan's keepout works because:</p>
          <ul>
            <li><strong>Huge range</strong> — Your moves reach further than theirs</li>
            <li><strong>CH launches</strong> — They get launched for pressing into you</li>
            <li><strong>Safe on block</strong> — Low risk, high reward</li>
            <li><strong>Whiff punishment</strong> — When they miss, you destroy them</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Primary Keepout Tools">
        <SubSection title="qcb+1 (Review)">
          <p>
            You learned this in Chapter 2, but it's crucial for keepout. qcb+1 is your 
            <span className="highlight">primary space control tool</span>.
          </p>
          <MoveCard
            move={{
              input: 'qcb+1',
              hitLevel: ['h'],
              damage: '22',
              startup: 'i13-14',
              onBlock: '+5',
              onHit: '+36a (+28)',
              onCH: '+72a (+56)',
              tags: ['High', 'CH Launcher', 'Plus on Block'],
              description: 'Throw this out at mid-range constantly. +5 on block means even if they block, you\'re at advantage.',
            }}
          />
        </SubSection>

        <SubSection title="3+4 (Review)">
          <p>
            The mid-range counter-hit launcher. Use this to <span className="highlight">catch 
            approaching opponents</span>.
          </p>
          <MoveCard
            move={{
              input: '3+4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i18',
              onBlock: '-13',
              onHit: '+8',
              onCH: '+59a',
              tags: ['Mid', 'CH Launcher', 'Safe (pushback)'],
              description: 'Huge range, CH launches, safe due to pushback. The ultimate keepout mid.',
            }}
          />
        </SubSection>

        <SubSection title="u+4 (Orbital)">
          <MoveCard
            move={{
              input: 'u+4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i24-26',
              onBlock: '-5',
              onHit: '+26a',
              tags: ['Mid', 'Launcher', 'Low Crush', 'Evasive'],
              description: 'Bryan\'s iconic orbital heel. Evades lows, launches on hit, safe on block.',
              notes: [
                'Do u+4, NOT uf+4 (less forward momentum = more evasion)',
                'Great at catching dashes and moves',
                'Can low crush heat smashes',
                'Difficult to whiff punish due to quick recovery'
              ]
            }}
          />
          <TipBox variant="tip" title="u+4 vs uf+4">
            Always use <strong>u+4</strong> for keepout. The uf+4 version moves you forward, 
            reducing evasion and putting you at risk. u+4 stays in place with better high evasion.
          </TipBox>
        </SubSection>

        <SubSection title="f,b+2 (Jet Upper)">
          <MoveCard
            move={{
              input: 'f,b+2',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i14-15',
              onBlock: '-7',
              onHit: '+43a (+33)',
              tags: ['High', 'Launcher', 'Whiff Punisher'],
              description: 'Your primary whiff punisher. i14 launch from a movement mixup input.',
              notes: [
                'One of few i14 launchers in the game',
                'Safe on block',
                'Can be buffered from crouch dash',
                'Use after sidesteps and backdashes'
              ]
            }}
          />
        </SubSection>
      </Section>

      <Section title="Keepout Decision Tree">
        <Flowchart
          title="Mid-Range Decision Making"
          nodes={[
            { 
              type: 'start', 
              label: 'You\'re at Range 2' 
            },
            { 
              type: 'decision', 
              label: 'What is opponent doing?',
              branches: [
                { label: 'Approaching', action: '→ Use 3+4 or u+4' },
                { label: 'Standing/Waiting', action: '→ Use qcb+1 or qcb+3' },
                { label: 'Pressing buttons', action: '→ Let them whiff, f,b+2' },
              ]
            },
            {
              type: 'decision',
              label: 'Did they block qcb+1?',
              branches: [
                { label: 'Yes', action: '→ You\'re +5, continue pressure' },
                { label: 'Hit', action: '→ Free qcb+4 follow-up' },
                { label: 'CH', action: '→ Full combo' },
              ]
            },
            {
              type: 'end',
              label: 'Reset to Range 2, repeat'
            }
          ]}
        />
      </Section>

      <Section title="Keepout in Practice">
        <p>
          The key to keepout is being <strong>predictive, not reactive</strong>. Throw out your 
          buttons BEFORE they arrive, not after.
        </p>

        <SubSection title="Against Dashers">
          <p>
            When the opponent is dash-blocking towards you, <span className="highlight">3+4 is your answer</span>. 
            If they dash into it, they eat a full combo. If they block, pushback resets the spacing.
          </p>
        </SubSection>

        <SubSection title="Against Passive Players">
          <p>
            If they're respecting your keepout and standing back, <span className="highlight">walk forward 
            slightly and throw qcb+1</span>. It chips them and you're +5 if blocked. Mix in qcb+3 (hatchet) 
            when they start blocking too much.
          </p>
        </SubSection>

        <TipBox variant="tip" title="Keepout Mindset">
          <ul>
            <li><strong>qcb+1</strong> — General space control, safe even if you mistime</li>
            <li><strong>3+4</strong> — When you KNOW they're coming (full combo on CH)</li>
            <li><strong>u+4</strong> — Beats low approaches and catches commitment</li>
          </ul>
        </TipBox>
      </Section>

      <Section title="Common Keepout Mistakes">
        <KeyConcept title="What NOT to Do" icon="❌">
          <ul>
            <li><strong>Don't spam 3+4</strong> — It's -13. Thoughtful use beats spam.</li>
            <li><strong>Don't chase</strong> — Let them come to you. That's the point.</li>
            <li><strong>Don't forget lows</strong> — Pure keepout gets predictable. Mix in hatchet.</li>
            <li><strong>Don't panic when rushed</strong> — Backdash, reset. Don't mash.</li>
            <li><strong>Don't use uf+4 for keepout</strong> — u+4 is better (more evasion).</li>
          </ul>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
