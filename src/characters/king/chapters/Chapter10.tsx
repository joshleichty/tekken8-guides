import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Jaguar Sprint & Step"
      intro="King has the worst backdash in Tekken, but he has unique mobility tools that compensate. Master Jaguar Sprint and Step to control space."
      onPrevious={() => goToChapter(9)}
      onNext={() => goToChapter(11)}
      nextLabel="Learn Muscle Armor"
    >
      <Section title="King's Movement Problem">
        <p>
          King has <span className="highlight-secondary">the worst backdash in Tekken</span>. You can't retreat 
          like other characters. But King has unique tools that compensate: <span className="highlight">Jaguar 
          Sprint</span> and <span className="highlight">Jaguar Step</span>.
        </p>

        <KeyConcept title="King's Mobility Tools" icon="🏃">
          <ul>
            <li><strong>Jaguar Sprint (f+3+4)</strong> — Running stance with throws and mids</li>
            <li><strong>Jaguar Step (3+4)</strong> — Backward/forward hop for spacing</li>
            <li><strong>Back Jaguar Step</strong> — Best way to create space</li>
            <li><strong>In Heat</strong> — Jaguar Sprint gains armor</li>
          </ul>
        </KeyConcept>

        <p>
          These tools don't replace backdash, but they give King unique mobility options that other characters 
          don't have.
        </p>
      </Section>

      <Section title="Jaguar Sprint (f+3+4)">
        <MoveCard character="king"
          videoId="f+3+4"
          move={{
            input: 'f+3+4',
            hitLevel: [''],
            damage: '',
            startup: '',
            onBlock: '',
            onHit: '',
            tags: ['Stance', 'Running'],
            description: 'Jaguar Sprint stance. Running stance with throws, mids, and lows. In Heat, gains armor.',
          }}
          showVideo
        />

        <p>
          Jaguar Sprint is King's <span className="highlight">running stance</span>. From this stance, you 
          can do throws, mids, and lows. In Heat, it gains armor, making it even stronger.
        </p>

        <KeyConcept title="Jaguar Sprint Options" icon="🎯">
          <ul>
            <li><strong>JGR 1</strong> — Mid elbow, safe on block</li>
            <li><strong>JGR 1+3</strong> — RKO (unbreakable throw, heat engager)</li>
            <li><strong>JGR 2</strong> — High clothesline, chip damage</li>
            <li><strong>JGR 3</strong> — Mid tracking kick</li>
            <li><strong>JGR 4</strong> — Low slide</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The RKO">
          JGR 1+3 (RKO) is an unbreakable throw that activates Heat. It's one of King's strongest tools. 
          We'll cover Heat in Chapter 14.
        </TipBox>
      </Section>

      <Section title="Jaguar Step (3+4)">
        <MoveCard character="king"
          move={{
            input: '3+4',
            hitLevel: [''],
            damage: '',
            startup: '',
            onBlock: '',
            onHit: '',
            tags: ['Stance', 'Movement'],
            description: 'Jaguar Step. Backward or forward hop for spacing. King\'s best mobility tool.',
          }}
          showVideo
        />

        <p>
          Jaguar Step is King's <span className="highlight-secondary">best mobility tool</span>. It's a 
          backward or forward hop that creates space or closes distance.
        </p>

        <KeyConcept title="Jaguar Step Directions" icon="🦘">
          <ul>
            <li><strong>3+4</strong> — Forward hop</li>
            <li><strong>b+3+4</strong> — Backward hop (best for creating space)</li>
            <li><strong>Can be held</strong> — Hold 3+4 to double hop</li>
            <li><strong>Options from hop</strong> — Can do attacks during the hop</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Back Jaguar Step">
          Back Jaguar Step (b+3+4) is King's best way to create space. Use it after blocking to create 
          distance and reset to neutral.
        </TipBox>
      </Section>

      <Section title="Jaguar Step Options">
        <p>
          From Jaguar Step, you have several attack options:
        </p>

        <MoveCard character="king"
          videoId="JGS.1"
          move={{
            input: 'JGS 1',
            hitLevel: ['h'],
            damage: '21/25/31',
            startup: 'i17',
            onBlock: '-7/-1',
            onHit: '+47d/+53d',
            tags: ['High', 'Crumple', 'Jaguar Step'],
            description: 'Jaguar Step punch. Crumples on hit. Damage increases with spins.',
          }}
          showVideo
        />

        <MoveCard character="king"
          videoId="JGS.2"
          move={{
            input: 'JGS 2',
            hitLevel: ['m'],
            damage: '15/18/22',
            startup: 'i11',
            onBlock: '-9/-2/0c',
            onHit: '+12c',
            tags: ['Mid', 'Jaguar Step', 'Forces Crouch'],
            description: 'Jaguar Step mid. Forces crouch on hit. Plus on block from 3rd spin.',
          }}
          showVideo
        />

        <MoveCard character="king"
          videoId="JGS.4"
          move={{
            input: 'JGS 4',
            hitLevel: ['h'],
            damage: '40/42/52',
            startup: 'i17',
            onBlock: '+8/+15',
            onHit: '+5a/+10a',
            tags: ['High', 'Guard Break', 'Jaguar Step'],
            description: 'Jaguar Step guard break. Plus on block, chip damage. Damage increases with spins.',
          }}
          showVideo
        />
      </Section>

      <Section title="Using Jaguar Sprint & Step">
        <p>
          Here's how to use these tools effectively:
        </p>

        <KeyConcept title="When to Use Jaguar Sprint" icon="🏃">
          <ul>
            <li><strong>To approach</strong> — Run forward and threaten throws/mids</li>
            <li><strong>In Heat</strong> — Armored approach is unstoppable</li>
            <li><strong>For mixups</strong> — JGR has throws, mids, and lows</li>
            <li><strong>At range</strong> — Close distance quickly</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="When to Use Jaguar Step" icon="🦘">
          <ul>
            <li><strong>To create space</strong> — Back Jaguar Step after blocking</li>
            <li><strong>To whiff punish</strong> — Forward Jaguar Step into attack</li>
            <li><strong>To evade</strong> — Hop over low attacks</li>
            <li><strong>For mixups</strong> — Jaguar Step has multiple attack options</li>
          </ul>
        </KeyConcept>
      </Section>

      <Collapsible title="Jaguar Sprint in Heat" icon="🔥">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '12px' }}>
            In Heat, Jaguar Sprint gains <span className="highlight">armor</span>. This makes it incredibly 
            strong:
          </p>
          <ul>
            <li><strong>Armored approach</strong> — Can't be interrupted by attacks</li>
            <li><strong>JGR 1 becomes launcher</strong> — In Heat, JGR 1 launches on hit</li>
            <li><strong>JGR 2 enhanced</strong> — More damage and chip</li>
            <li><strong>RKO unbreakable</strong> — JGR 1+3 is always unbreakable</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            We'll cover Heat in detail in Chapter 14. For now, know that Jaguar Sprint becomes much stronger 
            in Heat.
          </p>
        </div>
      </Collapsible>

      <Section title="Practice Time">
        <PracticeBox
          title="Jaguar Sprint & Step Practice"
          setup="Practice entering and using Jaguar Sprint and Step."
          tasks={[
            { id: 'ch10-jgr', text: 'Enter Jaguar Sprint 10 times', detail: 'f+3+4', type: 'counter', target: 10 },
            { id: 'ch10-jgs', text: 'Enter Jaguar Step 10 times', detail: '3+4 forward, b+3+4 backward', type: 'counter', target: 10 },
            { id: 'ch10-rko', text: 'Land RKO from Jaguar Sprint 5 times', detail: 'JGR 1+3', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="The Complete Picture">
        <p>
          Jaguar Sprint and Step are King's unique mobility tools. They don't replace backdash, but they 
          give King options that other characters don't have.
        </p>

        <KeyConcept title="Master the Movement" icon="👑">
          <ul>
            <li><strong>Jaguar Sprint for approach</strong> — Run forward and threaten</li>
            <li><strong>Jaguar Step for spacing</strong> — Create space or close distance</li>
            <li><strong>In Heat</strong> — Jaguar Sprint gains armor</li>
            <li><strong>Mix with throws</strong> — JGR has unbreakable throws</li>
            <li><strong>Use situationally</strong> — Not always the right choice</li>
          </ul>
        </KeyConcept>

        <p>
          Master these tools, and you'll have better control over spacing. King's movement is weak, but 
          these tools help compensate.
        </p>
      </Section>
    </Chapter>
  )
}
