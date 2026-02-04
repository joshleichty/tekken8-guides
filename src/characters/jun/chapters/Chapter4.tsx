import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter4({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={4}
      title="The Counter-Hit Arsenal"
      intro="Jun doesn't need to be plus to be dangerous. When opponents press buttons, these moves make them pay. Hard."
      hasPrevious={true}
      onPrevious={() => goToChapter(3)}
      onNext={() => goToChapter(5)}
      nextLabel="Punishment"
    >
      <Section title="Why Counter-Hits Matter">
        <p>
          Counter-hits happen when you hit an opponent during their attack startup. In Jun's case, 
          counter-hits don't just deal extra damage—they launch for full combos.
        </p>

        <KeyConcept title="Jun's Counter-Hit Game" icon="⚡">
          <p>
            Jun has multiple moves that become launchers on counter-hit. This means every time 
            the opponent presses a button, they're risking 80+ damage. Your job is to condition 
            them to stop pressing—then throw them.
          </p>
        </KeyConcept>

        <p>
          Let's go through your counter-hit tools, from most important to situational.
        </p>
      </Section>

      <Section title="d+3+4: The Cancans">
        <p>
          Jun's most infamous move. The "Cancans" are a low-high string that counter-hit launches 
          for massive damage. They also low-crush, meaning they go over most low attacks.
        </p>

        <MoveCard character="jun"
          videoId="d+3+4"
          move={{
            input: 'd+3+4',
            hitLevel: ['l', 'h'],
            damage: '5, 20',
            startup: 'i14',
            onBlock: '-25',
            onHit: '+30a (+20)',
            tags: ['Low', 'High', 'CH Launcher', 'Low Crush'],
            description: 'The infamous Cancans. Low crush on startup, CH launcher, absolutely devastating.',
            notes: ['Airborne from frame 5 - cannot be low parried', 'Second hit can be ducked on block', '-6 if only second hit blocked', 'Spike on hit for oki']
          }}
          showVideo
        />

        <KeyConcept title="Why Cancans Are Terrifying" icon="💀">
          <ul>
            <li><strong>i14 startup</strong> — Faster than most launchers</li>
            <li><strong>Low crushes on frame 5</strong> — Goes over snake edges, d+4, etc.</li>
            <li><strong>Cannot be low parried</strong> — The aerial status prevents it</li>
            <li><strong>Full combo on CH</strong> — 80+ damage for pressing a button</li>
            <li><strong>Spike on hit</strong> — Even on normal hit, you get oki pressure</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Risk">
          Cancans are -25 on block if they duck the second hit. At high levels, people will 
          react and launch you. Use them when you've conditioned the opponent to respect your 
          pressure, not as a random panic button.
        </TipBox>

        <TipBox variant="tip" title="When to Use Cancans">
          Best used when you read an opponent pressing buttons (especially lows). After they 
          block your pressure tools and want to retaliate, that's Cancan time.
        </TipBox>
      </Section>

      <Section title="ws+2: The Crouching Check">
        <p>
          Your opponent can't stand and press, so they crouch. That's where ws+2 comes in.
        </p>

        <MoveCard character="jun"
          videoId="ws2"
          move={{
            input: 'ws+2',
            hitLevel: ['m'],
            damage: '12',
            startup: 'i13~14',
            onBlock: '-8',
            onHit: '+5',
            onCH: '+32a',
            tags: ['Mid', 'CH Launcher', 'Fast'],
            description: 'i13 mid from crouch. Safe on block. Counter-hit launches.',
            notes: ['Excellent tracking', 'ws+2,1 extension for i13 WS punish', 'Primary tool after db+2 or FC moves']
          }}
          showVideo
        />

        <p>
          ws+2 is fast (i13), safe (-8), and tracks well. On counter-hit, you get a full launch. 
          The beauty is that you access it from crouch—so after blocking lows, or after db+2, 
          you're already in position.
        </p>

        <MoveCard character="jun"
          videoId="db+2"
          move={{
            input: 'db+2',
            hitLevel: ['l'],
            damage: '15',
            startup: 'i23~24',
            onBlock: '-12',
            onHit: '+2',
            onCH: '+14g',
            tags: ['Low', 'High Crush', 'FC Transition'],
            description: 'Low poke that high crushes and leaves you in full crouch. +2 on hit sets up ws+2.',
            notes: ['High crush from frame 15', 'Transitions to FC for ws options', 'CH gives spinning stun']
          }}
          showVideo
        />

        <KeyConcept title="The db+2 → ws+2 Trap" icon="🪤">
          <ol>
            <li>db+2 hits (+2) → You're in crouch</li>
            <li>Opponent tries to press → ws+2 counter-hits</li>
            <li>ws+2 CH → Full combo</li>
          </ol>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            Even on normal hit db+2, your ws+2 will beat any i14 or slower retaliation.
          </p>
        </KeyConcept>
      </Section>

      <Section title="df+4: The Long-Range Check">
        <p>
          When you need a counter-hit tool with range, df+4 is your answer.
        </p>

        <MoveCard character="jun"
          videoId="df+4"
          move={{
            input: 'df+4',
            hitLevel: ['m'],
            damage: '22',
            startup: 'i15',
            onBlock: '-14',
            onHit: '+48a (+17)',
            onCH: '+52a',
            tags: ['Mid', 'Tornado', 'CH Launcher', 'Long Range'],
            description: 'Long range mid. Tornado on normal hit. Crumple stun on counter-hit.',
            notes: ['Excellent keepout tool', '-14 on block but has pushback', 'Balcony breaks on airborne']
          }}
          showVideo
        />

        <p>
          df+4 is -14, which is technically launch punishable. But it has pushback, so most 
          characters can't get their full punish. And the reward on hit is massive—tornado on 
          normal hit, crumple stun on CH.
        </p>

        <TipBox variant="tip" title="Keepout Tool">
          Use df+4 at range 2-3 when opponents are trying to approach. If they run into it, 
          you get a combo. If they block it at max range, they often can't punish properly.
        </TipBox>
      </Section>

      <Section title="uf+3: The Evasive Check">
        <p>
          Sometimes you need a counter-hit tool that also evades. uf+3 low crushes and CH launches.
        </p>

        <MoveCard character="jun"
          videoId="uf+3"
          move={{
            input: 'uf+3',
            hitLevel: ['m'],
            damage: '17',
            startup: 'i20~21',
            onBlock: '-6',
            onHit: '+5',
            onCH: '+30a',
            tags: ['Mid', 'CH Launcher', 'Low Crush', 'Safe'],
            description: 'Safe mid that low crushes. +5 on hit, CH launches.',
            notes: ['Low crush from frame 11', 'Safe at -6', 'Balcony breaks on airborne']
          }}
          showVideo
        />

        <KeyConcept title="uf+3 Uses" icon="🎯">
          <ul>
            <li>Reading low pokes → Crush and CH launch</li>
            <li>After plus frames → Evasive CH check</li>
            <li>Pressure reset → Safe, +5 on hit</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="FC df+2: The Crouching Low">
        <p>
          From full crouch, you have access to a low that CH launches.
        </p>

        <MoveCard character="jun"
          videoId="FC.df+2"
          move={{
            input: 'FC df+2',
            hitLevel: ['l'],
            damage: '12',
            startup: 'i16~17',
            onBlock: '-11',
            onHit: '+0',
            onCH: '+18',
            tags: ['Low', 'CH Launcher'],
            description: 'Full crouch low. On counter-hit, ws+3 is guaranteed for a launch.',
            notes: ['Requires full crouch', 'CH into ws+3 for full combo', 'Good tracking to both sides']
          }}
          showVideo
        />

        <p>
          On counter-hit, you get <code>ws+3</code> guaranteed, which launches. This creates a 
          deadly crouch mix: FC df+2 (low, CH launches) vs ws+2 (mid, CH launches).
        </p>

        <TipBox variant="tip" title="The Crouch Mix">
          After db+2 or any move that leaves you in crouch, you have FC df+2 (low) vs ws+2 (mid). 
          Both counter-hit launch. Your opponent has to guess.
        </TipBox>
      </Section>

      <Section title="Other CH Tools">
        <Collapsible title="Situational Counter-Hit Moves">
          <div style={{ display: 'grid', gap: '16px' }}>
            <MoveCard character="jun"
              videoId="ws1+2"
              move={{
                input: 'ws+1+2',
                hitLevel: ['m'],
                damage: '20',
                startup: 'i21',
                onBlock: '-2',
                onHit: '+5',
                onCH: '+14 +63a',
                tags: ['Mid', 'CH Launcher', 'Safe'],
                description: 'Slow but safe ws mid. Can be cancelled into FC. CH launches.',
                notes: ['Cancel to FC with D', '-2 on block is safe', 'CH gives huge stun']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="d+2"
              move={{
                input: 'd+2',
                hitLevel: ['m'],
                damage: '18',
                startup: 'i20~21',
                onBlock: '-4c',
                onHit: '+9c',
                onCH: '+18a',
                tags: ['Mid', 'Spike', 'CH Launcher'],
                description: 'Mid spike that leads to FC df+2 pressure on CH.',
                notes: ['Spike on any hit', 'Leaves you in crouch', 'Good for setting up FC mix']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="4"
              move={{
                input: '4',
                hitLevel: ['h'],
                damage: '17',
                startup: 'i12',
                onBlock: '-9',
                onHit: '+7',
                onCH: '+32d',
                tags: ['High', 'CH Knockdown', 'Fast'],
                description: 'Magic 4. Fast high that gives guaranteed follow-up on CH.',
                notes: ['CH into f+2 or 3+4', '-9 on block is safe', 'Classic "magic 4" properties']
              }}
              showVideo
            />
          </div>
        </Collapsible>
      </Section>

      <Section title="Practice: Counter-Hit Fishing">
        <PracticeBox
          title="Cancans Drill"
          setup="Set opponent to Guard 1 hit, then attack with fast mid."
          tasks={[
            { id: 'cancan-1', text: 'Block → d+3+4 counter-hit 5 times', detail: 'Time the Cancans to catch their retaliation', type: 'counter', target: 5 },
            { id: 'cancan-2', text: 'Convert CH d+3+4 into combo 5 times', detail: 'The follow-up is 4 → combo', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="ws+2 Drill"
          setup="Set opponent to 2nd Action: Fast attack after block."
          tasks={[
            { id: 'ws2-1', text: 'db+2 → ws+2 CH 5 times', detail: 'Catch their retaliation', type: 'counter', target: 5 },
            { id: 'ws2-2', text: 'Convert CH ws+2 into d+1+2 combo 5 times', detail: 'd+1+2 gives tornado after CH ws+2', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="Reading the Opponent">
          The best Jun players don't spam CH moves. They watch for patterns—when does this 
          opponent press buttons? After jabs? After blocked lows? That's when you CH fish.
        </TipBox>
      </Section>

      <Section title="Quick Reference">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Standing CH</div>
            <code>d+3+4</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>i14, low crush, full combo</div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Crouching CH</div>
            <code>ws+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>i13, safe, full combo</div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Range CH</div>
            <code>df+4</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>i15, long range, tornado</div>
          </div>
        </div>

        <p style={{ marginTop: '24px' }}>
          Next chapter: What to do when THEY hit YOU. Jun's punishment is surprisingly strong.
        </p>
      </Section>
    </Chapter>
  )
}
