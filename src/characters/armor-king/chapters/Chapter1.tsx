import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  Collapsible, 
  InputNotation, 
  ExecutionBox, 
  PracticeBox 
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="Meet Armor King"
      intro="Welcome to the world of the Dark Supernova. Armor King is a grappler with incredible whiff punishment, devastating throws, and one of the best oki games in Tekken 8. Let's master this masked luchador."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="Continue to Pokes"
    >
      <Section title="Who is Armor King?">
        <p>
          Armor King is a <span className="highlight">grappler-hybrid</span> character who excels at{' '}
          <span className="highlight-secondary">whiff punishment</span>,{' '}
          <span className="highlight">throw mixups</span>, and{' '}
          <span className="highlight-secondary">oki pressure</span>. Unlike King who relies heavily 
          on chain throws, Armor King focuses more on fundamental Tekken with powerful single throws 
          and excellent counter-hit tools.
        </p>

        <KeyConcept title="The Armor King Identity" icon="🦁">
          <p>Armor King wants to:</p>
          <ul>
            <li><strong>Whiff punish with Dark Upper</strong> — One of the best whiff punishers in the game</li>
            <li><strong>Use throws as mixups</strong> — Giant Swing, Tombstone, Shining Wizard force guesses</li>
            <li><strong>Fish for counter hits</strong> — Multiple safe mids that launch on CH</li>
            <li><strong>Dominate oki</strong> — Ground throws and stomp setups are terrifying</li>
            <li><strong>Pressure from plus frames</strong> — Use plus frame moves to set up throws</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Strengths">
        <ul>
          <li><strong>Elite whiff punishment</strong> — Dark Upper (CD2) is fast, long range, and only -10</li>
          <li><strong>Excellent block punishment</strong> — b+1,2 at i12 gives huge damage and stance entry</li>
          <li><strong>Multiple safe CH launchers</strong> — df+3, uf+3, SS4, ff+2 are all safe and launch on CH</li>
          <li><strong>Strong throw game</strong> — Giant Swing, Tombstone, Shining Wizard create scary mixups</li>
          <li><strong>Great oki</strong> — Ground throws, stomp, and shoulder setups</li>
          <li><strong>Big plus frame swings</strong> — f+4, ub+1, CD1 give +3 to +5 for throw setups</li>
          <li><strong>Heat makes throws homing</strong> — Giant Swing and Shining Wizard track in Heat</li>
        </ul>
      </Section>

      <Section title="Weaknesses">
        <ul>
          <li><strong>Weak to sidestep</strong> — Many key moves are linear, especially CH tools</li>
          <li><strong>df+1 doesn't track</strong> — His main poke can be stepped both ways</li>
          <li><strong>Complex gameplan</strong> — Requires utilizing many different tools</li>
          <li><strong>Execution heavy</strong> — Wave dash, Giant Swing, Tombstone need practice</li>
          <li><strong>Few panic options</strong> — Not many "get off me" moves</li>
          <li><strong>Conditioning required</strong> — Throws don't work if opponent ducks/steps</li>
        </ul>
      </Section>

      <Section title="Key Notation">
        <p>Before we dive in, let's clarify some Armor King-specific notation:</p>

        <Collapsible title="Armor King Notation Guide" icon="📖" defaultOpen>
          <p><strong>Motion Inputs:</strong></p>
          <ul>
            <li><strong>CD</strong> = Crouch Dash (f, n, d, df) — The wave dash motion</li>
            <li><strong>hcf</strong> = Half Circle Forward (b, db, d, df, f)</li>
            <li><strong>qcb</strong> = Quarter Circle Back (d, db, b)</li>
            <li><strong>f,f,F</strong> = While Running (hold forward to run)</li>
            <li><strong>ws</strong> = While Standing (from crouch)</li>
            <li><strong>FC</strong> = Full Crouch (hold down)</li>
          </ul>
          <p><strong>Stance:</strong></p>
          <ul>
            <li><strong>BAD</strong> = Bad Jaguar Stance (f+3+4)</li>
            <li><strong>BT</strong> = Back Turned</li>
          </ul>
          <p><strong>Throw Breaks:</strong></p>
          <ul>
            <li><strong>1 break</strong> = Press 1 to escape</li>
            <li><strong>2 break</strong> = Press 2 to escape</li>
            <li><strong>1+2 break</strong> = Press 1+2 to escape</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="The Crouch Dash (Wave Dash)">
        <p>
          Armor King has a <strong>crouch dash</strong> (CD), which is the foundation 
          of his movement and offense. Let's learn it properly.
        </p>

        <InputNotation notation="f → n → d → df" size="large" />

        <ExecutionBox title="How to Execute the Crouch Dash" icon="🎮">
          <ol>
            <li><strong>Tap forward</strong> — A quick tap, don't hold it</li>
            <li><strong>Return to neutral</strong> — Let the stick/pad return to center briefly</li>
            <li><strong>Roll to down-forward</strong> — Go d, then df in one smooth motion</li>
          </ol>
          <p><strong>Common mistakes:</strong></p>
          <ul>
            <li>Holding forward too long — You'll get a dash instead</li>
            <li>Skipping neutral — You need that brief return to center</li>
            <li>Going too slow — The motion should be quick and fluid</li>
          </ul>
          <p><strong>Tip:</strong> Think of it as a "swooping" motion. Forward, release, then swoop down to down-forward.</p>
        </ExecutionBox>

        <h3>Wave Dashing</h3>
        <p>To wave dash (move forward while crouch dashing repeatedly), do:</p>

        <InputNotation notation="f, n, d, df → f, n, d, df → f, n, d, df..." />

        <p>
          Each crouch dash ends in df, so you tap f again to start the next one. This lets you 
          close distance while threatening CD moves.
        </p>

        <PracticeBox
          title="First Steps — Movement Practice"
          setup="Go to Practice Mode. No specific dummy settings needed yet — we're just getting used to Armor King's movement."
          tasks={[
            { id: 'ch1-backdash', text: 'Practice backdashing across the stage', detail: "Note: AK's backdash is average — not elite like some characters", type: 'toggle' },
            { id: 'ch1-cd', text: 'Perform a crouch dash (f, n, d, df)', detail: 'You should see AK duck slightly as he moves forward', type: 'counter', target: 20 },
            { id: 'ch1-wave', text: 'Wave dash across the stage (3+ crouch dashes in a row)', detail: 'Keep the rhythm smooth — f,n,d,df, f,n,d,df...', type: 'counter', target: 10 },
            { id: 'ch1-darkupper', text: 'Do Dark Upper from crouch dash (CD+2)', detail: 'Input: f, n, d, df+2 — He should do an uppercut', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
