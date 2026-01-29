import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  ExecutionBox,
  PracticeBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Muscle Armor"
      intro="Muscle Armor is King's unique power crush stance. It absorbs attacks and can be canceled into throws, mids, or stance transitions. Master it, and you'll have a powerful defensive tool."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Learn Combos"
    >
      <Section title="What is Muscle Armor?">
        <p>
          Muscle Armor (db+1+2) is King's <span className="highlight">unique power crush stance</span>. It 
          absorbs high and mid attacks, then can be canceled into throws, mids, or stance transitions.
        </p>

        <MoveCard character="king"
          videoId="db+1+2"
          move={{
            input: 'db+1+2',
            hitLevel: [''],
            damage: '',
            startup: '',
            onBlock: '',
            onHit: '',
            tags: ['Stance', 'Power Crush'],
            description: 'Muscle Armor stance. Absorbs high and mid attacks. Can be canceled into attacks or stances.',
          }}
          showVideo
        />

        <KeyConcept title="Muscle Armor Properties" icon="💪">
          <ul>
            <li><strong>Absorbs attacks</strong> — Highs and mids are absorbed</li>
            <li><strong>Loses to lows</strong> — Lows hit you out of it</li>
            <li><strong>Loses to throws</strong> — Throws hit you out of it</li>
            <li><strong>Can be canceled</strong> — Cancel into attacks or stances</li>
            <li><strong>In Heat</strong> — Activates faster</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Weaknesses">
          Muscle Armor loses to lows and throws. Don't use it when you expect lows or throws. Use it when 
          you expect mids or highs.
        </TipBox>
      </Section>

      <Section title="Muscle Armor Options">
        <p>
          From Muscle Armor, you have several cancel options:
        </p>

        <MoveCard character="king"
          videoId="db+1+2,2"
          move={{
            input: 'db+1+2,2',
            hitLevel: ['m', 't'],
            damage: '15, 20',
            startup: 'i15',
            onBlock: '-9',
            onHit: '+35g',
            tags: ['Mid', 'Throw', 'Heat Engager'],
            description: 'Emerald Elbow from Muscle Armor. Heat engager. Safe on block.',
          }}
          showVideo
        />

        <KeyConcept title="Muscle Armor Cancels" icon="🔄">
          <ul>
            <li><strong>db+1+2,2</strong> — Emerald Elbow (heat engager, safe)</li>
            <li><strong>db+1+2,3+4</strong> — Cancel into Jaguar Sprint</li>
            <li><strong>db+1+2 → throw</strong> — Cancel into throw</li>
            <li><strong>db+1+2 → mid</strong> — Cancel into mid attack</li>
            <li><strong>db+1+2 → backdash</strong> — Cancel into movement</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Cancel">
          Muscle Armor can be canceled on frame 40. This gives you time to see what attack you absorbed, 
          then choose your cancel option. Practice canceling into different options.
        </TipBox>
      </Section>

      <Section title="When to Use Muscle Armor">
        <p>
          Muscle Armor is situational. Here's when to use it:
        </p>

        <KeyConcept title="Muscle Armor Situations" icon="🎯">
          <ul>
            <li><strong>Against predictable pressure</strong> — When opponent does same move repeatedly</li>
            <li><strong>To absorb mids</strong> — Absorb mid attacks, then punish</li>
            <li><strong>In Heat</strong> — Activates faster, more useful</li>
            <li><strong>For mixups</strong> — Cancel into throw or mid</li>
            <li><strong>To escape pressure</strong> — Absorb attack, then counter-attack</li>
          </ul>
        </KeyConcept>

        <p>
          <strong>Don't use Muscle Armor:</strong>
        </p>
        <ul>
          <li>When you expect lows</li>
          <li>When you expect throws</li>
          <li>Against unpredictable opponents</li>
          <li>When you're already winning</li>
        </ul>
      </Section>

      <Section title="Muscle Armor Execution">
        <ExecutionBox title="How to Use Muscle Armor" icon="🎮">
          <p>Basic Muscle Armor usage:</p>
          <ol>
            <li><strong>Input db+1+2</strong> — Enter Muscle Armor stance</li>
            <li><strong>Absorb attack</strong> — Let opponent hit you</li>
            <li><strong>Choose cancel</strong> — Cancel into attack or stance</li>
            <li><strong>Punish</strong> — Deal damage or continue pressure</li>
          </ol>
          <p><strong>Common cancels:</strong></p>
          <ul>
            <li>db+1+2,2 — Emerald Elbow (heat engager)</li>
            <li>db+1+2,3+4 — Cancel into Jaguar Sprint</li>
            <li>db+1+2 → throw — Cancel into throw</li>
          </ul>
        </ExecutionBox>
      </Section>

      <Section title="Practice Time">
        <PracticeBox
          title="Muscle Armor Practice"
          setup="Set dummy to do a mid attack. Practice absorbing and canceling."
          tasks={[
            { id: 'ch11-armor', text: 'Absorb 10 mid attacks with Muscle Armor', detail: 'db+1+2', type: 'counter', target: 10 },
            { id: 'ch11-cancel', text: 'Cancel Muscle Armor into Emerald Elbow 10 times', detail: 'db+1+2,2', type: 'counter', target: 10 },
            { id: 'ch11-jgr', text: 'Cancel Muscle Armor into Jaguar Sprint 5 times', detail: 'db+1+2,3+4', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="The Complete Picture">
        <p>
          Muscle Armor is King's unique defensive tool. It absorbs attacks and can be canceled into offense. 
          Master it, and you'll have a powerful tool for escaping pressure.
        </p>

        <KeyConcept title="Master Muscle Armor" icon="👑">
          <ul>
            <li><strong>Use against predictable pressure</strong> — When opponent does same move repeatedly</li>
            <li><strong>Cancel into offense</strong> — Emerald Elbow, Jaguar Sprint, or throws</li>
            <li><strong>Know the weaknesses</strong> — Loses to lows and throws</li>
            <li><strong>Use situationally</strong> — Not always the right choice</li>
            <li><strong>In Heat</strong> — Activates faster, more useful</li>
          </ul>
        </KeyConcept>

        <p>
          Master Muscle Armor, and you'll have a powerful defensive tool. But remember: it's situational. 
          Don't rely on it exclusively.
        </p>
      </Section>
    </Chapter>
  )
}
