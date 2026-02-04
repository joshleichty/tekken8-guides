import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Trap"
      intro="Jun doesn't overwhelm you with offense. She creates situations where every choice you make is wrong. This chapter teaches you the one concept that makes Jun terrifying."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="The Jab String Web"
    >
      <Section title="The Kazama Philosophy">
        <p>
          Most characters in Tekken want to hit you. Jun wants you to <em>try</em> to hit her.
        </p>

        <p>
          When an opponent presses a button at the wrong time against Jun, they don't just lose their turn—they 
          get launched, combo'd, and carried to the wall. Jun's entire gameplan is built around one idea: 
          <strong> create situations where pressing buttons is suicide.</strong>
        </p>

        <KeyConcept title="Jun's Win Condition" icon="🎯">
          <p>
            Jun wins by putting you in "+3 to +6 jail." When she's plus, you can't press buttons fast 
            enough to interrupt her. If you try, you get counter-hit launched. If you don't try, she 
            throws you or chips away your health.
          </p>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            Your job isn't to "do offense." Your job is to create these traps, over and over.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Magic Number: +3">
        <p>
          Here's the secret: Jun has multiple moves that leave her +3 to +6 on block. And they all 
          lead to the same place—her command throw.
        </p>

        <MoveCard character="jun"
          videoId="df+2+3"
          move={{
            input: 'df+2+3',
            hitLevel: ['t'],
            damage: '40',
            startup: 'i12',
            onBlock: '-6',
            onHit: '-6d',
            tags: ['Throw', 'Floor Break'],
            description: 'Jun\'s command throw. Requires a 2 break. This is where all your pressure leads.',
            notes: ['Floor breaks for extra damage', 'Throw break is 2 (uncommon)', 'Sets up oki on hit']
          }}
          showVideo
        />

        <p>
          Why does the throw break being 2 matter? Because most players instinctively break with 1. 
          At intermediate ranks, this throw lands constantly.
        </p>

        <KeyConcept title="The +3 Rule" icon="⚡">
          <p>When Jun is +3 or more on block, <code>df+2+3</code> throw cannot be interrupted.</p>
          <ul style={{ marginTop: '8px' }}>
            <li>SS4 is <strong>+6</strong> → Throw is uninterruptible</li>
            <li>f,f+1+2 is <strong>+6</strong> → Throw is uninterruptible</li>
            <li>f+4 is <strong>+3</strong> → Throw is uninterruptible</li>
            <li>db+3 counter-hit is <strong>+6</strong> → Throw is uninterruptible</li>
          </ul>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            Every plus move in Jun's kit funnels into this same situation.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Why This Matters">
          You don't need to memorize frame data. You need to understand that when you block 
          certain Jun moves, she can throw you and you cannot interrupt it. Period.
        </TipBox>
      </Section>

      <Section title="Your First Trap: SS4">
        <p>
          Let's build your first trap. SS4 (sidestep 4) is one of Jun's signature moves. It's a 
          safe mid that leaves you +6 on block—the maximum advantage before a move becomes "guaranteed."
        </p>

        <MoveCard character="jun"
          videoId="SS.4"
          move={{
            input: 'SS 4',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i18~20',
            onBlock: '+6',
            onHit: '+8c',
            tags: ['Mid', 'Heat Engager', 'Plus on Block'],
            description: 'Sidestep into a spinning kick. +6 on block. Heat engager on hit. Your main pressure tool.',
            notes: ['Press up or down, then 4', 'Can be done from built-in sidesteps', 'Spike on hit gives great oki']
          }}
          showVideo
        />

        <p>
          When SS4 gets blocked, your opponent is frozen. They can't jab you. They can't hopkick. 
          They have to sit there and guess what's coming next.
        </p>

        <Flowchart 
          title="SS4 On Block"
          nodes={[
            { type: 'start', label: 'SS4 gets blocked (+6)' },
            { type: 'decision', label: 'What does opponent do?', branches: [
              { label: 'Mashes', action: 'They get counter-hit by df+2 → Full combo' },
              { label: 'Stands still', action: 'Throw them with df+2+3' },
              { label: 'Ducks', action: 'df+2 launches crouchers' }
            ]},
            { type: 'end', label: 'Every choice they make is wrong' }
          ]}
        />

        <TipBox variant="warning" title="Don't Get Greedy">
          SS4 is amazing, but it's also a commitment. You're stepping, then attacking. If your 
          opponent reads it, you can get clipped. Use it from safe ranges, after blocked pokes, 
          or when you've conditioned them to respect your other moves.
        </TipBox>
      </Section>

      <Section title="The Follow-Up: df+2">
        <p>
          When you're plus and the opponent is frozen, you need a move that beats everything except 
          blocking. That move is <code>df+2</code>.
        </p>

        <MoveCard character="jun"
          videoId="df+2"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '14',
            startup: 'i16~17',
            onBlock: '-12',
            onHit: '+29a (+19)',
            tags: ['Mid', 'Launcher'],
            description: 'Launcher that catches mashers and crouchers. -12 on block, so be sure before you commit.',
            notes: ['Launches crouching opponents', 'Can extend with df+2,1+2 for heat engager', 'Your go-to "mash buster"']
          }}
          showVideo
        />

        <p>
          The threat of <code>df+2</code> is what makes the throw work. If opponents know you'll 
          launch them for pressing buttons, they'll stand still. If they stand still, throw them.
        </p>

        <KeyConcept title="The Core Mix" icon="🔀">
          <p>After any +3 or better move:</p>
          <ol>
            <li><strong>df+2+3</strong> (throw) beats standing/blocking</li>
            <li><strong>df+2</strong> beats mashing AND crouching</li>
          </ol>
          <p style={{ marginTop: '8px' }}>
            This is a true 50/50. They have to guess. And when they guess wrong, they take huge damage.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Practice: Building Your First Loop">
        <p>
          Before you play a single match with Jun, drill this sequence until it's automatic.
        </p>

        <PracticeBox
          title="SS4 Pressure Drill"
          setup="Set opponent to Guard All. Stand at close-mid range."
          tasks={[
            { id: 'ss4-basic', text: 'Perform SS4 10 times', detail: 'Press up/down, then 4. Get the motion smooth.', type: 'counter', target: 10 },
            { id: 'ss4-throw', text: 'SS4 → df+2+3 throw 10 times', detail: 'Buffer the throw immediately after SS4', type: 'counter', target: 10 },
            { id: 'ss4-launch', text: 'SS4 → df+2 launcher 10 times', detail: 'This catches anyone pressing buttons', type: 'counter', target: 10 },
          ]}
        />

        <PracticeBox
          title="Reading the Opponent"
          setup="Set opponent to Random Guard, then 2nd Action: Punish with fast attack"
          tasks={[
            { id: 'read-1', text: 'Land SS4 → throw 5 times when they block', detail: 'Watch for them standing still', type: 'counter', target: 5 },
            { id: 'read-2', text: 'Land SS4 → df+2 5 times when they mash', detail: 'Counter-hit for full combo', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="How to Know You've Got It">
          When you land SS4 in a real match, your hands should automatically go to one of two 
          options: throw or df+2. No thinking. Just reading what the opponent does and reacting.
        </TipBox>
      </Section>

      <Section title="Getting Into SS4">
        <p>
          SS4 is powerful, but you can't just raw sidestep into 4 from neutral. You'll get clipped. 
          Here are the safe ways to access it:
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>After Jabs</div>
            <code>1 → SS4</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '8px' }}>
              Jab, then immediately sidestep 4. The jab freezes them, giving you time to step.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>From f+3</div>
            <code>f+3~u/d → 4</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '8px' }}>
              f+3 has a built-in sidestep option. Use this to keep pressure while evading.
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>From 1,2</div>
            <code>1,2~u/d → 4</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '8px' }}>
              The 1,2 jab string also has a built-in step. Great for checking their response to jabs.
            </div>
          </div>
        </div>

        <TipBox variant="tip" title="The Jab → SS4 Pattern">
          "Jab, sidestep 4" is your bread and butter. It checks if they're respecting your jabs, 
          evades their potential retaliation, AND gives you +6 pressure. Make this a habit.
        </TipBox>
      </Section>

      <Section title="Your First Match Game Plan">
        <p>
          You now know one trap. That's enough to play your first 50 matches with Jun. Here's your 
          entire game plan:
        </p>

        <Flowchart 
          title="Chapter 1 Game Plan"
          nodes={[
            { type: 'start', label: 'Round starts' },
            { type: 'decision', label: 'Poke with jab (1)', branches: [
              { label: 'They block', action: 'Sidestep 4 → You\'re +6' },
              { label: 'They press', action: 'They hit you → Learn the timing' }
            ]},
            { type: 'decision', label: 'After SS4 blocks (+6)', branches: [
              { label: 'They stand', action: 'Throw (df+2+3)' },
              { label: 'They press', action: 'Launch (df+2)' }
            ]},
            { type: 'end', label: 'Repeat until round ends' }
          ]}
        />

        <KeyConcept title="What You're Learning" icon="📚">
          <p>This loop teaches you two fundamental Tekken skills:</p>
          <ol>
            <li><strong>Conditioning</strong> — Making opponents fear your pressure</li>
            <li><strong>Reading</strong> — Recognizing what the opponent wants to do</li>
          </ol>
          <p style={{ marginTop: '8px' }}>
            Every Jun win comes from reading the opponent and punishing their choice. Start training 
            those eyes now.
          </p>
        </KeyConcept>
      </Section>

      <Section title="When Things Go Wrong">
        <p>
          You're going to lose. A lot. Here's what to do when the loop doesn't work:
        </p>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--warning)', fontWeight: 600, marginBottom: '8px' }}>"They keep hitting me before SS4"</div>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              You're doing SS4 too close. Back up, use jab first to freeze them, THEN sidestep 4. 
              Range management is key.
            </p>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--warning)', fontWeight: 600, marginBottom: '8px' }}>"They keep breaking my throw"</div>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              Good! They're respecting your throw. Now use df+2 instead. If they're focused on 
              breaking, they're not pressing buttons—which means df+2 will catch them standing.
            </p>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--warning)', fontWeight: 600, marginBottom: '8px' }}>"They keep sidestepping my SS4"</div>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              SS4 doesn't track well. If they're stepping you, use f+4 (homing) instead, or go 
              straight into df+2+3 throw after your jab. We'll cover more options in future chapters.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="The Learning Mindset">
          Every time you lose, ask: "What was I trying to do? What did they do to beat it? What's 
          my answer?" Jun rewards players who think. Start thinking now.
        </TipBox>
      </Section>

      <Section title="Quick Reference">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>The Trap</div>
            <code style={{ fontSize: '1.1em' }}>SS4</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              +6 on block<br/>
              Heat engager on hit
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>The Throw</div>
            <code style={{ fontSize: '1.1em' }}>df+2+3</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Beats blocking<br/>
              Break is 2
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>The Punish</div>
            <code style={{ fontSize: '1.1em' }}>df+2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Beats mashing<br/>
              Launches crouchers
            </div>
          </div>
        </div>

        <p style={{ marginTop: '24px' }}>
          Next chapter: We'll expand your pressure with the 1,2,2 jab string and introduce Izumo 
          stance. The trap gets deeper.
        </p>
      </Section>
    </Chapter>
  )
}
