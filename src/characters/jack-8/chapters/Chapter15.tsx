import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  ComboCard
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter15({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={15}
      title="Wall Game"
      intro="Jack's wall game is devastating. His long arms, wall-specific combos, and GMH pressure make him a nightmare when your back is to the wall."
      onPrevious={() => goToChapter(14)}
      onNext={() => goToChapter(16)}
      nextLabel="Defense Guide"
    >
      <Section title="Why Jack's Wall Game is Elite">
        <p>
          Jack <span className="highlight">loves the wall</span>. His wall carry is excellent, 
          his wall combos do massive damage, and his plus moves become even scarier with the 
          wall behind opponents.
        </p>

        <KeyConcept title="Wall Game Strengths" icon="🧱">
          <ul>
            <li><strong>Excellent wall carry</strong> — Gets opponents to wall from mid-stage</li>
            <li><strong>db+1,1 natural combo</strong> — At wall, both hits guaranteed</li>
            <li><strong>GMH pressure</strong> — Guard break threat with wall behind them</li>
            <li><strong>Wall splat damage</strong> — Multiple high-damage wall options</li>
            <li><strong>Wall throw</strong> — Unbreakable 33 damage</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Getting to the Wall">
        <p>
          Jack's combos naturally carry to the wall. Key wall carry moves:
        </p>
        <ul>
          <li><strong>f,f+4</strong> — Big boot carries far</li>
          <li><strong>2,1,uf+1+2 → GMH f+1</strong> — Standard ender with good carry</li>
          <li><strong>f,f,f+1+2</strong> — Running shoulder splats near wall</li>
        </ul>

        <SubSection title="Wall Carry Combo">
          <ComboCard
            title="Max Wall Carry"
            starter="df+2"
            route={['b+3,2 D', '2,1,uf+1+2', 'GMH f+1 T!', 'dash', 'f,f+4']}
            damage="~62"
            difficulty="intermediate"
            notes="End with f,f+4 for maximum wall carry."
            wallCarry={true}
          />
        </SubSection>
      </Section>

      <Section title="Wall Splat Moves">
        <MoveCard character="jack-8"
          move={{
            input: 'b+2',
            hitLevel: ['m'],
            damage: '27',
            startup: 'i19',
            onBlock: '+2',
            onHit: '+2a',
            tags: ['Mid', 'Wall Splat', 'Heat Engager'],
            description: 'Wall splats. Use near wall for combo.',
          }}
        showVideo
        />

        <MoveCard character="jack-8"
          videoId="f,f,F+1+2"
          move={{
            input: 'f,f,f+1+2',
            hitLevel: ['m'],
            damage: '34',
            startup: 'i20-23',
            onBlock: '+4',
            onHit: '+7a (-2)',
            tags: ['Mid', 'Wall Splat', 'Plus on Block'],
            description: 'Running shoulder. Wall splats near wall.',
          }}
        showVideo
        />

        <MoveCard character="jack-8"
          move={{
            input: 'ss2',
            hitLevel: ['h'],
            damage: '20',
            startup: 'i17',
            onBlock: '+9',
            onHit: '+35d (+27)',
            tags: ['High', 'Wall Splat', 'Plus on Block'],
            description: 'Sidestep 2. Wall splats for combo.',
          }}
        showVideo
        />

        <MoveCard character="jack-8"
          move={{
            input: 'ub+1+2',
            hitLevel: ['h'],
            damage: '30',
            startup: 'i20',
            onBlock: '-9',
            onHit: '+23d',
            tags: ['High', 'Homing', 'Power Crush', 'Wall Splat'],
            description: 'Power crush that wall splats. Great panic option near wall.',
            notes: [
              'Full circle tracking',
              'Power crush frames 7+',
              'Wall splat leads to huge damage'
            ]
          }}
        showVideo
        />
      </Section>

      <Section title="Wall Combos">
        <SubSection title="Standard Wall Combo">
          <ComboCard
            title="Basic Wall"
            starter="Wall splat"
            route={['b+3,2 D', 'GMH f+2']}
            damage="~38 (wall)"
            difficulty="beginner"
            notes="Your standard wall combo. Consistent and good damage."
            wallCarry={false}
          />
        </SubSection>

        <SubSection title="With GMH Okizeme">
          <ComboCard
            title="GMH Oki"
            starter="Wall splat"
            route={['2', 'f,f+1 D (GMH okizeme)']}
            damage="~25 + oki"
            difficulty="intermediate"
            notes="Less damage but sets up GMH pressure after."
            wallCarry={false}
          />
        </SubSection>

        <SubSection title="Tornado at Wall">
          <ComboCard
            title="Tailspin Wall Ender"
            starter="T! at wall"
            route={['df+1,1 T!', 'f+4', 'df+3+4']}
            damage="~42 (wall)"
            difficulty="intermediate"
            notes="Maximum damage if Tornado happens at wall."
            wallCarry={false}
          />
        </SubSection>
      </Section>

      <Section title="db+1 at Wall">
        <KeyConcept title="Wall db+1,1" icon="💥">
          <p>
            Normally, db+1,1 doesn't combo because the pushback makes the second hit whiff. 
            <span className="highlight">At the wall, both hits are guaranteed</span> because 
            the wall stops the pushback.
          </p>
        </KeyConcept>

        <MoveCard character="jack-8"
          videoId="db+1,1"
          move={{
            input: 'db+1,1 (at wall)',
            hitLevel: ['l', 'l'],
            damage: '13, 5',
            startup: 'i12',
            onBlock: '-12',
            onHit: '-1',
            tags: ['Low', 'Low', 'Wall Only Natural'],
            description: 'At wall, both hits combo naturally. Free 18 damage.',
          }}
        showVideo
        />

        <TipBox variant="tip" title="Wall Pressure Loop">
          At the wall: <strong>db+1 → db+1,1 natural → crouch pressure</strong>. They're 
          pinned and eating chip constantly. This is Jack's specialty.
        </TipBox>
      </Section>

      <Section title="Wall Pressure">
        <SubSection title="Plus Moves at Wall">
          <p>
            Your plus moves become even scarier at the wall because opponents can't 
            backdash to create space:
          </p>
          <ul>
            <li><strong>2 (+1 on block)</strong> — Continue pressure</li>
            <li><strong>f,f,f+1+2 (+4 on block)</strong> — Wall splats if you get hit</li>
            <li><strong>ss2 (+9 on block)</strong> — Huge plus, wall splat on hit</li>
            <li><strong>GMH 2 (+11 on block)</strong> — In Heat, guard break → Heat Smash</li>
          </ul>
        </SubSection>

        <SubSection title="GMH at Wall">
          <p>
            GMH becomes <span className="highlight">terrifying at the wall</span>:
          </p>
          <ul>
            <li><strong>GMH 4</strong> — +4 on block, they're still pinned</li>
            <li><strong>GMH 2</strong> — +11 on block, massive plus</li>
            <li><strong>GMH 1+2</strong> — Throw for 57 damage at wall</li>
            <li><strong>In Heat: GMC 2 → Heat Smash</strong> — 36 guaranteed damage</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Wall/Floor Breaks">
        <KeyConcept title="Break Options" icon="💣">
          <ul>
            <li><strong>df+3+4</strong> — Wall break move</li>
            <li><strong>f,f+1</strong> — Floor break</li>
            <li><strong>db+1+2</strong> — Floor break low</li>
            <li><strong>Various throws</strong> — qcf+1, db,n,f+1+2 floor break</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="When Your Back is to Wall">
        <p>
          Jack doesn't want his back to the wall — he can't backdash and his large hitbox 
          makes escape harder.
        </p>

        <KeyConcept title="Escape Options" icon="🚪">
          <ul>
            <li><strong>2+4 throw</strong> — If teched, positions swap</li>
            <li><strong>ub+1+2</strong> — Power crush, tracking, wall splats THEM</li>
            <li><strong>3+4 (GMH)</strong> — Armor through their pressure</li>
            <li><strong>Sidestep</strong> — Limited, but better than nothing</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Danger Zone">
          Jack at wall is vulnerable. His wide hitbox makes escaping pressure difficult. 
          Use armor options (ub+1+2, 3+4) to create opportunities to reverse positions.
        </TipBox>
      </Section>

      <Section title="Chapter Summary">
        <p>Jack's wall game:</p>
        <ul>
          <li><strong>Excellent wall carry</strong> — f,f+4 ender for distance</li>
          <li><strong>Wall combo</strong> — b+3,2 D → GMH f+2</li>
          <li><strong>db+1,1 at wall</strong> — Natural combo</li>
          <li><strong>GMH pressure</strong> — +11 GMH 2, throw for 57, guard break</li>
          <li><strong>When trapped</strong> — 2+4 throw swaps, ub+1+2 power crush</li>
        </ul>
        <p>
          Next chapter covers Jack's defensive options and power crush.
        </p>
      </Section>
    </Chapter>
  )
}
