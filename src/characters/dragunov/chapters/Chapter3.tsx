import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter3({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={3}
      title="The Hunt"
      intro="You know your basic weapons. Now it's time to learn how to close the gap. WR+2 is Dragunov's signature move — the tool that turns a patient stalker into an aggressive predator."
      onPrevious={() => goToChapter(2)}
      onNext={() => goToChapter(4)}
      nextLabel="Learn Plus Frame Pressure"
    >
      <Section title="While Running 2 (WR+2)">
        <MoveCard character="dragunov"
          videoId="f,f,F+2"
          move={{
            input: 'f,f,F+2',
            hitLevel: ['m'],
            damage: '22 (26)',
            startup: 'i15-17',
            onBlock: '+4',
            onHit: '+32d (KND)',
            onCH: '+44a (Launch!)',
            tags: ['Mid', 'Plus on Block', 'CH Launcher', 'Approach'],
            description: 'Dragunov\'s signature move. Plus on block, counter-hit launcher, defines his gameplan.',
            notes: ['Blue spark version does 26 damage + 7 chip', 'Delay during run for better tracking'],
          }}
          showVideo
        />

        <p>
          WR+2 is <span className="highlight">the move that makes Dragunov Dragunov</span>. 
          It's a mid approach tool that's +4 on block, knocks down on hit, and launches on counter-hit. 
          This one move is the engine of his entire gameplan.
        </p>

        <KeyConcept title="Why WR+2 is Broken" icon="💀">
          <ul>
            <li><strong>+4 on block</strong> — You get to keep pressing after they block</li>
            <li><strong>Knockdown on hit</strong> — Free pressure/oki situation</li>
            <li><strong>CH launch</strong> — Full combo if they press into it</li>
            <li><strong>Chip damage</strong> — Even blocked, it hurts</li>
            <li><strong>Mid</strong> — Can't be ducked</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Input">
          To do WR+2, tap forward twice then hold forward and press 2. The notation <code>f,f,F+2</code> 
          means dash (f,f), then hold forward (F) to start running, then press 2. Practice this 
          until it's second nature.
        </TipBox>
      </Section>

      <Section title="Regular vs Blue Spark WR+2">
        <p>
          There are two versions of WR+2:
        </p>

        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--text-secondary)' }}>
            <p style={{ fontWeight: 600, marginBottom: '8px' }}>Regular WR+2</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>22 damage</li>
              <li>4 chip on block</li>
              <li>Easier to execute</li>
            </ul>
          </div>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <p style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--accent)' }}>Blue Spark WR+2 (Just Frame)</p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>26 damage</li>
              <li>7 chip on block</li>
              <li>Press 2 faster during the run</li>
              <li>Visual blue sparks on the fist</li>
            </ul>
          </div>
        </div>

        <TipBox variant="tip" title="Don't Stress the Just Frame">
          The blue spark version does more damage, but regular WR+2 is still amazing. 
          Focus on landing it consistently first. The just frame will come with practice.
        </TipBox>
      </Section>

      <Section title="When to Use WR+2">
        <p>
          WR+2 is not a "run in and press 2" move. You need to pick your moments:
        </p>

        <KeyConcept title="Good Times for WR+2" icon="✅">
          <ul>
            <li><strong>After knockdown</strong> — Run in while they're getting up</li>
            <li><strong>After blocked moves</strong> — Especially if you're at range and they're minus</li>
            <li><strong>When they're hesitating</strong> — Passive opponents get run over</li>
            <li><strong>At proper range</strong> — 2-3 character lengths, not point blank</li>
            <li><strong>After fake run-ins</strong> — Dash forward, block, see what they do, then commit</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Bad Times for WR+2" icon="❌">
          <ul>
            <li><strong>Point blank</strong> — You need run distance, not crouch dash</li>
            <li><strong>Against sidesteppers</strong> — WR+2 is linear, gets stepped right</li>
            <li><strong>When they're pressing</strong> — Use 1,2,1 to counter-hit instead</li>
            <li><strong>Full screen</strong> — They'll just block and you're +4 but far away</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Sidestep Right Beats WR+2">
          WR+2 is Dragunov's biggest tracking weakness. Good players will sidestep right to 
          avoid it. You need to condition them with throws and homing moves (b+3, df+3+4) 
          before you can freely run in.
        </TipBox>
      </Section>

      <Section title="The Fake Run-In">
        <p>
          One of Dragunov's most important techniques is the <span className="highlight">fake run-in</span>. 
          Instead of committing to WR+2, you dash forward then block.
        </p>

        <KeyConcept title="How to Fake Run-In" icon="🎭">
          <ol>
            <li><strong>Dash forward (f,f)</strong> — Start running toward them</li>
            <li><strong>Block</strong> — Let go of forward or tap back</li>
            <li><strong>Watch</strong> — What do they do?</li>
            <li><strong>React</strong> — If they attack, block and punish. If they don't, note it.</li>
            <li><strong>Next time</strong> — Commit to WR+2 if they were passive</li>
          </ol>
        </KeyConcept>

        <p>
          The fake run-in teaches you what your opponent does under pressure. Some will attack. 
          Some will sidestep. Some will freeze. Once you know their habit, you can exploit it.
        </p>
      </Section>

      <Section title="After WR+2 on Block (+4)">
        <p>
          When WR+2 is blocked, you're +4. This is where Dragunov's pressure begins.
        </p>

        <KeyConcept title="Options at +4" icon="➕">
          <ul>
            <li><strong>df+1</strong> — 13f mid, beats their 10f jab</li>
            <li><strong>Throw</strong> — They're close, command grab them</li>
            <li><strong>d+2</strong> — Low option, but trades with their fast buttons</li>
            <li><strong>1,2,1</strong> — Counter-hit them if they press</li>
            <li><strong>Block</strong> — See if they do something punishable</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Throw Option">
          Remember: throws are your primary offense. After WR+2 block, you're close and +4. 
          Throw them. If they start ducking, then your mids work. Build the fear first.
        </TipBox>
      </Section>

      <Section title="After WR+2 on Hit">
        <p>
          When WR+2 hits, they're knocked down. This is your opportunity to maintain pressure.
        </p>

        <KeyConcept title="Oki Options" icon="⬇️">
          <ul>
            <li><strong>Run in again</strong> — Another WR+2 catches many wake-up options</li>
            <li><strong>qcf+4</strong> — Hits grounded, plus on block</li>
            <li><strong>d+2</strong> — Catches side rolls and get-up attacks</li>
            <li><strong>Dash → throw</strong> — If they stand block expecting a mid</li>
            <li><strong>Wait</strong> — Whiff punish their get-up attack</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Get Greedy">
          WR+2 on hit is already good damage. You don't NEED to continue pressure. 
          If you're unsure, just get into range and threaten another WR+2. The fear is enough.
        </TipBox>
      </Section>

      <Section title="Movement Basics">
        <p>
          WR+2 is only effective if you can control spacing. Here are the movement fundamentals:
        </p>

        <KeyConcept title="Dragunov Movement" icon="🏃">
          <ul>
            <li><strong>Backdash</strong> — Tap b,b to create space. Dragunov has good backdash.</li>
            <li><strong>Sidestep</strong> — Tap u or d to step. Dragunov steps well to both sides.</li>
            <li><strong>Korean Backdash (KBD)</strong> — b,b,db,b,b,db... for continuous movement</li>
            <li><strong>Dash block</strong> — f,f then block. Approach safely.</li>
          </ul>
        </KeyConcept>

        <p>
          The ideal Dragunov dance is: <span className="highlight">backdash to create space, 
          sidestep to bait whiffs, dash in when they hesitate, WR+2</span>. Practice this flow.
        </p>

        <Collapsible title="KBD Tips" icon="🎮">
          <div style={{ marginTop: '12px' }}>
            <p style={{ marginBottom: '12px' }}>
              Korean Backdash is essential for high-level Tekken, but don't stress if you can't 
              do it yet. For now, focus on:
            </p>
            <ul>
              <li>Simple backdash (b,b) to create space</li>
              <li>Recognizing when to approach</li>
              <li>Fake run-ins to test the opponent</li>
            </ul>
            <p style={{ marginTop: '12px' }}>
              KBD will come with time. The fundamentals matter more.
            </p>
          </div>
        </Collapsible>
      </Section>

      <Section title="The Hunt Pattern">
        <p>
          Putting it all together, here's how you approach with Dragunov:
        </p>

        <KeyConcept title="The Complete Pattern" icon="🎯">
          <ol>
            <li><strong>Start at range</strong> — 2-3 character lengths</li>
            <li><strong>Observe</strong> — Are they aggressive or passive?</li>
            <li><strong>Fake run-in</strong> — Dash forward, block, see their response</li>
            <li><strong>If they attack</strong> — Block, punish, they now fear pressing</li>
            <li><strong>If they freeze</strong> — Next time, commit to WR+2</li>
            <li><strong>If they sidestep</strong> — Use d+2 or homing moves</li>
            <li><strong>After WR+2</strong> — Apply plus frame pressure (next chapter)</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Drill">
          In practice mode, set the opponent to guard all, then practice: 
          backdash → sidestep → dash forward → WR+2. Feel the rhythm of creating space, 
          then closing. This is Dragunov's core movement pattern.
        </TipBox>
      </Section>

      <Collapsible title="Instant While Running (Advanced)" icon="⚡">
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '12px' }}>
            At higher levels, players do "instant" WR+2 from very close range by tapping 
            forward three times very quickly: <code>f,f,f+2</code>.
          </p>
          <p style={{ marginBottom: '12px' }}>
            This lets you do WR+2 almost immediately, giving opponents less time to react. 
            However, it requires execution practice.
          </p>
          <p>
            For now, focus on the regular version. Instant WR will come naturally as you 
            play more.
          </p>
        </div>
      </Collapsible>
    </Chapter>
  )
}
