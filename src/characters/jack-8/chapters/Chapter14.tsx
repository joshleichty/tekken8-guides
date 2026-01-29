import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter14({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={14}
      title="Throws & Grabs"
      intro="Jack has an above-average throw game with all three break types and good damage. This chapter covers when and how to use his grabs."
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
      nextLabel="Wall Game"
    >
      <Section title="Jack's Throw Game">
        <p>
          Jack's throw game isn't King-level, but it's <span className="highlight">very 
          serviceable</span>. He has all three break types, good damage, and some throws 
          with floor/wall breaks.
        </p>

        <KeyConcept title="Throw Overview" icon="🤼">
          <ul>
            <li><strong>1 break:</strong> qcf+1 — 40 damage, floor break</li>
            <li><strong>2 break:</strong> qcb+2 — 65 total with guaranteed follow-up</li>
            <li><strong>1+2 break:</strong> db,n,f+1+2 — 50 damage, floor break</li>
            <li><strong>Crouch throw:</strong> d+1+3 — Unbreakable, floor break</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Big Arms Problem">
          Jack's arms are <span className="highlight-secondary">huge</span>. This makes 
          throw breaks easier to see — opponents can more easily tell which break it is. 
          The trade-off: his arms reach further, so he can grab from longer range.
        </TipBox>
      </Section>

      <Section title="Generic Throws">
        <SubSection title="1+3 / 2+4 — Basic Throws">
          <MoveCard character="jack-8"
            move={{
              input: '1+3',
              hitLevel: ['th'],
              damage: '35',
              startup: 'i12',
              onBlock: '+0',
              onHit: '+1d',
              tags: ['Throw', '1 or 2 break', 'Side Switch'],
              description: 'Basic throw. 1 or 2 break. Swaps positions on break.',
            }}
          />

          <MoveCard character="jack-8"
            move={{
              input: '2+4',
              hitLevel: ['th'],
              damage: '35',
              startup: 'i12',
              onBlock: '-6',
              onHit: '-3d',
              tags: ['Throw', '1 or 2 break', 'Side Switch'],
              description: 'Basic throw. 1 or 2 break. Side switch on hit.',
              notes: [
                'At wall: if teched, positions swap — good when your back is to wall'
              ]
            }}
          />
        </SubSection>
      </Section>

      <Section title="Command Throws">
        <SubSection title="qcf+1 — 1 Break">
          <MoveCard character="jack-8"
            move={{
              input: 'qcf+1',
              hitLevel: ['th'],
              damage: '40',
              startup: 'i11',
              onBlock: '-2',
              onHit: '-2d',
              tags: ['Throw', '1 break', 'Floor Break'],
              description: 'Your 1 break throw. Floor breaks.',
              notes: [
                '40 damage base',
                'Floor breaks for combo on relevant stages'
              ]
            }}
          />
        </SubSection>

        <SubSection title="qcb+2 — 2 Break (Best Throw)">
          <MoveCard character="jack-8"
            move={{
              input: 'qcb+2',
              hitLevel: ['th'],
              damage: '45',
              startup: 'i11',
              onBlock: '-2',
              onHit: '+5d',
              tags: ['Throw', '2 break', 'Guaranteed Follow-up'],
              description: 'Your best throw. Guarantees db+1+2 for 65 total damage.',
              notes: [
                '45 damage + guaranteed db+1+2 (20) = 65 total',
                'No escape from the follow-up',
                'Your go-to command throw'
              ]
            }}
          />

          <TipBox variant="tip" title="The Money Throw">
            qcb+2 into db+1+2 is <span className="highlight">65 guaranteed damage</span>. 
            This is your primary command throw. Use it when you want big damage.
          </TipBox>
        </SubSection>

        <SubSection title="db+2+3 — 2 Break Alternative">
          <MoveCard character="jack-8"
            move={{
              input: 'db+2+3',
              hitLevel: ['th'],
              damage: '25',
              startup: 'i11',
              onBlock: '-2',
              onHit: '+14c',
              tags: ['Throw', '2 break', 'Floor Break'],
              description: 'Alternative 2 break. Less damage but floor breaks.',
            }}
          />
        </SubSection>

        <SubSection title="db,n,f+1+2 — 1+2 Break">
          <MoveCard character="jack-8"
            move={{
              input: 'db,n,f+1+2',
              hitLevel: ['th'],
              damage: '50',
              startup: 'i11',
              onBlock: '-6',
              onHit: '-1d',
              tags: ['Throw', '1+2 break', 'Floor Break'],
              description: 'Your 1+2 break pile driver. Floor breaks.',
              notes: [
                'More damage than qcf+1',
                'Floor breaks on relevant stages'
              ]
            }}
          />
        </SubSection>

        <SubSection title="uf+1+2 — Wall Throw">
          <MoveCard character="jack-8"
            move={{
              input: 'uf+1+2',
              hitLevel: ['th'],
              damage: '35',
              startup: 'i11',
              onBlock: '-6',
              onHit: '-10d',
              tags: ['Throw', '1+2 break', 'Floor Break'],
              description: 'Standard 1+2 break. Has wall splat extension.',
              notes: [
                'uf+1+2,d,df+2 — wall splat version',
                'Wall version does 40 damage + wall splat (85 total potential)'
              ]
            }}
          />
        </SubSection>

        <SubSection title="df+2+4 / df,df+2+4 — 2 Break">
          <MoveCard character="jack-8"
            move={{
              input: 'df+2+4',
              hitLevel: ['th'],
              damage: '10',
              startup: 'i11',
              onBlock: '-2',
              onHit: '+26a',
              tags: ['Throw', '2 break', 'Combo'],
              description: 'Low damage but gives combo. df,df+2+4 variant also exists.',
              notes: [
                'Can do df,df+2+4 for more range',
                'Combo after: u+1+2 pickup'
              ]
            }}
          />
        </SubSection>
      </Section>

      <Section title="Crouch Throws">
        <SubSection title="d+1+3 — Crouch Throw">
          <MoveCard character="jack-8"
            move={{
              input: 'd+1+3',
              hitLevel: ['th'],
              damage: '30',
              startup: 'i12',
              onBlock: '-',
              onHit: '+0d',
              tags: ['Throw', 'Crouch Throw', 'Unbreakable', 'Floor Break'],
              description: 'Unbreakable crouch throw. Floor breaks.',
              notes: [
                'Can be done from crouch or with d+1+3 input',
                'Also available as GMH 1+3'
              ]
            }}
          />
        </SubSection>

        <SubSection title="d+2+4 — Heat Engager Crouch Throw">
          <MoveCard character="jack-8"
            move={{
              input: 'd+2+4',
              hitLevel: ['th'],
              damage: '25',
              startup: 'i12',
              onBlock: '-',
              onHit: '+6d',
              tags: ['Throw', 'Crouch Throw', 'Unbreakable', 'Heat Engager'],
              description: 'Unbreakable crouch throw that activates Heat.',
              notes: [
                'Heat engager',
                'Also available as GMH 2+4'
              ]
            }}
          />
        </SubSection>

        <SubSection title="GMH 1+2 — Stance Throw">
          <MoveCard character="jack-8"
            move={{
              input: 'GMH 1+2',
              hitLevel: ['th'],
              damage: '45 (57)',
              startup: 'i16',
              onBlock: '-6',
              onHit: '+0d',
              tags: ['Throw', '1+2 break', 'Wall Splat'],
              description: 'Throw from GMH. 57 damage at wall.',
              notes: [
                '1+2 break only',
                'Wall splats for 57 damage',
                'Catches people blocking GMH mixups'
              ]
            }}
          />
        </SubSection>
      </Section>

      <Section title="Wall Throw">
        <MoveCard character="jack-8"
          move={{
            input: '1+3 or 2+4 (at wall)',
            hitLevel: ['th'],
            damage: '33',
            startup: 'i12',
            onBlock: '-',
            onHit: '+0d',
            tags: ['Throw', 'Wall Throw', 'Unbreakable'],
            description: 'Unbreakable wall throw. uf+1+2 also works.',
          }}
        />
      </Section>

      <Section title="When to Use Throws">
        <KeyConcept title="Throw Situations" icon="🤼">
          <ul>
            <li><strong>After plus frames</strong> — You're +5 or more, they're scared to press</li>
            <li><strong>Against heavy blockers</strong> — They won't let go of back</li>
            <li><strong>From crouch</strong> — After db+1 hits, crouch throw is strong</li>
            <li><strong>At range</strong> — Jack's long arms grab from further</li>
            <li><strong>From GMH</strong> — GMH 1+2 catches people blocking stance mixups</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Mix">
          Throws complement your poke game. If they're blocking all your lows and mids, 
          throw them. If they're mashing, poke them. <strong>Make them guess.</strong>
        </TipBox>
      </Section>

      <Section title="Special Wall Tech">
        <KeyConcept title="2+4 at Wall" icon="🧱">
          <p>
            When your back is to the wall, use <strong>2+4</strong>. If they tech it, 
            positions swap — now THEIR back is to the wall. You turned a defensive 
            position into an offensive one with zero risk.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Chapter Summary">
        <p>Jack's throw game:</p>
        <ul>
          <li><strong>qcb+2 (2 break)</strong> — Best throw, 65 total with db+1+2</li>
          <li><strong>qcf+1 (1 break)</strong> — 40 damage, floor break</li>
          <li><strong>db,n,f+1+2 (1+2 break)</strong> — 50 damage, floor break</li>
          <li><strong>d+1+3</strong> — Unbreakable crouch throw</li>
          <li><strong>GMH 1+2</strong> — Stance throw, 57 at wall</li>
        </ul>
        <p>
          Next chapter covers Jack's devastating wall game.
        </p>
      </Section>
    </Chapter>
  )
}
