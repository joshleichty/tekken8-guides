import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="The Jab String Web"
      intro="Your jabs aren't just pokes. They're the gateway to Jun's most dangerous stance. Every jab string leads somewhere—and everywhere leads to damage."
      hasPrevious={true}
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Making Them Freeze"
    >
      <Section title="The String That Changes Everything">
        <p>
          In Chapter 1, you learned jab → SS4. Now we're going deeper. Jun's <code>1,2,2</code> 
          string doesn't just check opponents—it transitions directly into her Izumo stance with 
          massive plus frames.
        </p>

        <MoveCard character="jun"
          videoId="1,2,2"
          move={{
            input: '1,2,2',
            hitLevel: ['h', 'h', 'h'],
            damage: '5, 8, 12',
            startup: 'i10',
            onBlock: '+4',
            onHit: '+11',
            onCH: '+20c',
            tags: ['High', 'Homing', 'Plus on Block', 'Stance Transition'],
            description: 'Jab string that ends with a homing high. +4 on block, +11 on hit. Transitions to Izumo automatically.',
            notes: ['All three hits jail on block', 'Hit-confirmable into stance pressure', 'The second 2 heals Jun slightly']
          }}
          showVideo
        />

        <p>
          Look at those numbers. +4 on block. <strong>+11 on hit.</strong> When this string lands, 
          your opponent is completely frozen—and you're already in Izumo stance ready to mix.
        </p>

        <KeyConcept title="Why 1,2,2 Is Your Foundation" icon="🏗️">
          <ul>
            <li><strong>i10 startup</strong> — As fast as a jab, but with extensions</li>
            <li><strong>Homing</strong> — The final hit tracks sidesteps</li>
            <li><strong>+4 on block</strong> — Opponents can't interrupt your stance options</li>
            <li><strong>+11 on hit</strong> — Free stance mixup, every single time</li>
            <li><strong>Heals Jun</strong> — The final hit restores a small amount of health</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="It's All Highs">
          1,2,2 can be ducked and launched. But the string jails on block—if they blocked the 
          first jab, they're blocking the whole thing. If they try to duck after blocking the 
          first hit, use 1,1 instead (we'll cover this soon).
        </TipBox>
      </Section>

      <Section title="Welcome to Izumo">
        <p>
          When 1,2,2 finishes, Jun automatically enters Izumo stance. You don't have to do anything—just 
          finish the string and you're there. Now the real game begins.
        </p>

        <div style={{ 
          background: 'var(--bg-secondary)', 
          padding: '20px', 
          borderRadius: '12px',
          border: '2px solid var(--accent)',
          marginBottom: '24px'
        }}>
          <div style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '1.1em', marginBottom: '12px' }}>
            Izumo Stance (IZU)
          </div>
          <p style={{ color: 'var(--text-secondary)', margin: 0, marginBottom: '12px' }}>
            Jun's signature spin stance. Accessible from multiple strings and transitions. Home to 
            her scariest mix-up.
          </p>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>
            Manual entry: <code>u+2</code> or <code>1,1</code>
          </div>
        </div>

        <p>
          From Izumo, you have two primary options that form a deadly 50/50:
        </p>

        <MoveCard character="jun"
          videoId="IZU.4,1"
          move={{
            input: 'IZU 4,1',
            hitLevel: ['l', 'm'],
            damage: '10, 21',
            startup: 'i19',
            onBlock: '-14~-13',
            onHit: '+14a (+3)',
            tags: ['Low', 'Launcher', 'Hellsweep'],
            description: 'Jun\'s "hellsweep." Low into launching mid. The low is -37 on its own, but the mid is only -14.',
            notes: ['Low can be low parried', 'The mid is a true combo from the low', 'Deals self-damage but scary reward']
          }}
          showVideo
        />

        <MoveCard character="jun"
          videoId="IZU.3"
          move={{
            input: 'IZU 3',
            hitLevel: ['m', 'h'],
            damage: '10, 16',
            startup: 'i16~15',
            onBlock: '-6',
            onHit: '+12a (+3)',
            tags: ['Mid', 'Heat Engager', 'Safe'],
            description: 'Safe mid heat engager. Beats anyone trying to duck your hellsweep. -6 on block means you\'re fine.',
            notes: ['Jails from first to second hit', 'Heat engager on hit', 'Low crushes during startup']
          }}
          showVideo
        />

        <Flowchart 
          title="The Izumo 50/50"
          nodes={[
            { type: 'start', label: '1,2,2 lands → Izumo (+11 on hit, +4 on block)' },
            { type: 'decision', label: 'Does opponent duck?', branches: [
              { label: 'Yes (Duck)', action: 'IZU 3 → Heat engager!' },
              { label: 'No (Stand)', action: 'IZU 4,1 → Launch combo!' }
            ]},
            { type: 'end', label: 'They have to guess. You get damage either way.' }
          ]}
        />

        <TipBox variant="tip" title="Start With the Low">
          At intermediate ranks, start every Izumo mix with IZU 4,1 (the hellsweep). Players 
          instinctively stand after blocking strings. Once they start ducking, switch to IZU 3.
        </TipBox>
      </Section>

      <Section title="The 1,1 Alternative">
        <p>
          What if your opponent starts ducking 1,2,2? You have an answer: <code>1,1</code>.
        </p>

        <MoveCard character="jun"
          videoId="1,1"
          move={{
            input: '1,1',
            hitLevel: ['h', 'm'],
            damage: '5, 15',
            startup: 'i10',
            onBlock: '-1',
            onHit: '+8',
            onCH: '+13',
            tags: ['High', 'Mid', 'Safe'],
            description: 'Jab into mid. The second hit catches duckers and also transitions to Izumo.',
            notes: ['The 1,1 string heals Jun', 'Transitions to Izumo like 1,2,2', '-1 on block is completely safe']
          }}
          showVideo
        />

        <p>
          The second hit of 1,1 is a <strong>mid</strong>. If someone ducks your 1,2,2, switch to 
          1,1. The mid catches them standing back up. And it STILL goes into Izumo.
        </p>

        <KeyConcept title="The Jab Mix" icon="🔀">
          <p>Both strings start with jab (1). Your opponent can't tell which one is coming.</p>
          <ul>
            <li><code>1,2,2</code> — High, high, high. +11 on hit. Massive reward but can be ducked.</li>
            <li><code>1,1</code> — High, mid. +8 on hit. Catches duckers, slightly less reward.</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            Both lead to Izumo. They have to guess which one you're doing.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Overthink It">
          Default to 1,2,2. It's better on block, better on hit, and heals you. Only switch to 
          1,1 when you notice the opponent specifically trying to duck your second hit.
        </TipBox>
      </Section>

      <Section title="Other Ways Into Izumo">
        <p>
          1,2,2 and 1,1 aren't your only doors to Izumo. Here are the other key transitions:
        </p>

        <Collapsible title="Izumo Entry Routes">
          <div style={{ display: 'grid', gap: '16px' }}>
            <MoveCard character="jun"
              move={{
                input: '4,2',
                hitLevel: ['h', 'm'],
                damage: '17, 12',
                startup: 'i12',
                onBlock: '+4',
                onHit: '+11',
                tags: ['High', 'Mid', 'Plus on Block'],
                description: 'Standing 4 into mid. Enters Izumo at +4 on block, +11 on hit.',
                notes: ['CH 4 gives +32d knockdown first', 'Transitions to Izumo automatically']
              }}
            />

            <MoveCard character="jun"
              videoId="u+2"
              move={{
                input: 'u+2',
                hitLevel: ['h'],
                damage: '17',
                startup: 'i23~24',
                onBlock: '+4',
                onHit: '+11',
                onCH: '+20c',
                tags: ['High', 'Homing', 'Plus on Block'],
                description: 'Manual Izumo entry. Homing high that gives huge plus frames.',
                notes: ['Homing attack', 'Heals Jun on hit', 'Risky but rewarding way to enter stance']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="b+2,1~B"
              move={{
                input: 'b+2,1~B',
                hitLevel: ['m', 'h'],
                damage: '10, 7',
                startup: 'i14~15',
                onBlock: '+0',
                onHit: '+11g',
                tags: ['Mid', 'High', 'Stance Transition'],
                description: 'b+2,1 into hold back transitions to Miare, then 1+2 goes to Izumo.',
                notes: ['Hold B after b+2,1 for Miare', 'From Miare, press 1+2 for Izumo entry']
              }}
              showVideo
            />
          </div>
        </Collapsible>

        <TipBox variant="tip" title="Focus on 1,2,2 First">
          These other routes exist, but for now, master 1,2,2 → Izumo. It's your fastest, safest, 
          and most rewarding entry. Add the others once this is automatic.
        </TipBox>
      </Section>

      <Section title="Practice: The Jab String Web">
        <PracticeBox
          title="1,2,2 Into Stance Drill"
          setup="Set opponent to Guard All. Stand at close range."
          tasks={[
            { id: '122-basic', text: 'Perform 1,2,2 10 times', detail: 'Notice how you end in Izumo', type: 'counter', target: 10 },
            { id: '122-hellsweep', text: '1,2,2 → IZU 4,1 10 times', detail: 'The hellsweep mix', type: 'counter', target: 10 },
            { id: '122-mid', text: '1,2,2 → IZU 3 10 times', detail: 'The safe mid option', type: 'counter', target: 10 },
          ]}
        />

        <PracticeBox
          title="Hit Confirm Drill"
          setup="Set opponent to Random Guard. Stand at close range."
          tasks={[
            { id: 'confirm-1', text: 'Land 1,2,2 on hit → IZU 4,1 five times', detail: 'Only go for hellsweep when 1,2,2 HITS', type: 'counter', target: 5 },
            { id: 'confirm-2', text: 'Blocked 1,2,2 → IZU 3 five times', detail: 'Use the safe option when blocked', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="The Hit Confirm Logic">
          When 1,2,2 HITS (+11), you're so plus that IZU 4,1 is harder to react to. Go for the 
          big reward. When it's BLOCKED (+4), use IZU 3 for the safe heat engager or throw.
        </TipBox>
      </Section>

      <Section title="More Than Just Mix-Ups">
        <p>
          Izumo isn't only about the 50/50. You have other options for different situations:
        </p>

        <Collapsible title="Izumo Toolkit">
          <div style={{ display: 'grid', gap: '16px' }}>
            <MoveCard character="jun"
              videoId="IZU.1+3"
              move={{
                input: 'IZU 1+3',
                hitLevel: ['t'],
                damage: '35',
                startup: 'i14',
                onBlock: '-6',
                onHit: '+0d',
                tags: ['Throw', 'Heal'],
                description: 'Stance throw. 1+2 break. Heals Jun for 8 health and 12 recoverable.',
                notes: ['Heals significant health', 'Great for closing rounds', '1+2 break is less common']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="IZU.f+1+2"
              move={{
                input: 'IZU f+1+2',
                hitLevel: ['m'],
                damage: '21',
                startup: 'i16~17',
                onBlock: '-6',
                onHit: '+5',
                onCH: '+25',
                tags: ['Mid', 'Homing', 'Safe'],
                description: 'Safe homing mid from stance. Evades jabs. +5 on hit, CH launches.',
                notes: ['Jab evasion built in', 'Homing - catches sidesteps', 'Safe at -6']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="IZU.1,1"
              move={{
                input: 'IZU 1,1',
                hitLevel: ['h', 'h'],
                damage: '7, 26',
                startup: 'i13~14',
                onBlock: '-4',
                onHit: '+30a (+20)',
                tags: ['High', 'Tornado', 'Combo Tool'],
                description: 'Jab into big spin. Primary combo filler and tornado tool.',
                notes: ['Heals Jun slightly', 'Tornado on hit', 'Your main combo route']
              }}
              showVideo
            />
          </div>
        </Collapsible>

        <p>
          For now, focus on IZU 3 and IZU 4,1 as your primary mix. The other options become 
          relevant when opponents adapt to your basic gameplan.
        </p>
      </Section>

      <Section title="Putting It All Together">
        <p>
          Your game plan is expanding. Here's how SS4 and 1,2,2 work together:
        </p>

        <Flowchart 
          title="Updated Game Plan"
          nodes={[
            { type: 'start', label: 'Neutral / Close Range' },
            { type: 'decision', label: 'What to do?', branches: [
              { label: 'They\'re pressing', action: 'Jab (1) to check them' },
              { label: 'They\'re respecting', action: '1,2,2 or SS4 for pressure' }
            ]},
            { type: 'decision', label: 'After jab hits/blocks', branches: [
              { label: 'Want sidestep mix', action: 'SS4 → throw/df+2' },
              { label: 'Want stance mix', action: '1,2,2 → Izumo 50/50' }
            ]},
            { type: 'end', label: 'Both paths lead to damage' }
          ]}
        />

        <KeyConcept title="The Pattern" icon="🔄">
          <ol>
            <li>Poke with jab to establish respect</li>
            <li>From jab, branch into SS4 OR 1,2,2</li>
            <li>From SS4: throw/df+2 mix</li>
            <li>From 1,2,2: IZU 3/IZU 4,1 mix</li>
            <li>Every branch ends in damage if they guess wrong</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Quick Reference">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Main String</div>
            <code style={{ fontSize: '1.1em' }}>1,2,2</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              +4 on block, +11 on hit<br/>
              → Izumo automatically
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Hellsweep</div>
            <code style={{ fontSize: '1.1em' }}>IZU 4,1</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              Low into launcher<br/>
              Beats standing guard
            </div>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>Safe Mid</div>
            <code style={{ fontSize: '1.1em' }}>IZU 3</code>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9em', marginTop: '4px' }}>
              -6 on block, heat engager<br/>
              Beats ducking
            </div>
          </div>
        </div>

        <p style={{ marginTop: '24px' }}>
          Next chapter: More plus frame tools. We'll cover f,f+1+2, f+4, and how to make opponents 
          freeze at any range.
        </p>
      </Section>
    </Chapter>
  )
}
