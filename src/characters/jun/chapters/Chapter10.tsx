import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  PracticeBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={10}
      title="Reading the Opponent"
      intro="Jun's strength isn't her moves—it's making the right choice at the right time. This chapter is about recognizing patterns and adapting your game plan."
      hasPrevious={true}
      onPrevious={() => goToChapter(9)}
      hasNext={false}
    >
      <Section title="The Fundamental Question">
        <p>
          Every interaction in Tekken comes down to one question: <strong>What does my opponent 
          want to do?</strong> Jun is built to punish every answer.
        </p>

        <KeyConcept title="Jun's Answer Key" icon="🔑">
          <ul>
            <li><strong>They want to press buttons</strong> → Counter-hit tools (d+3+4, ws+2, df+4)</li>
            <li><strong>They want to block</strong> → Plus frames into throw (SS4/f,f+1+2 → df+2+3)</li>
            <li><strong>They want to sidestep</strong> → Homing moves (f+4, df+3, MIA 1+2)</li>
            <li><strong>They want to duck</strong> → Mids (df+2, IZU 3, 1,1)</li>
            <li><strong>They want to low parry</strong> → Throws and mids</li>
          </ul>
        </KeyConcept>

        <p>
          Your job is to figure out what they want, then pick the answer that punishes it.
        </p>
      </Section>

      <Section title="Recognizing Patterns">
        <p>
          Watch for these common behaviors and know your counters:
        </p>

        <Collapsible title="The Masher" defaultOpen>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            marginBottom: '12px'
          }}>
            <div style={{ color: 'var(--warning)', fontWeight: 600, marginBottom: '8px' }}>
              Signs: Presses buttons after everything. Rarely respects plus frames. Gets hit by 
              counter-hits constantly.
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              <strong>Your answer:</strong> More counter-hit tools. d+3+4 after any blocked move. 
              df+2 after plus frames. ws+2 after lows. Let them run into damage.
            </div>
          </div>
        </Collapsible>

        <Collapsible title="The Turtle" defaultOpen>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            marginBottom: '12px'
          }}>
            <div style={{ color: 'var(--warning)', fontWeight: 600, marginBottom: '8px' }}>
              Signs: Blocks everything. Never presses. Waits for you to make a mistake. Breaks 
              throws.
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              <strong>Your answer:</strong> More throws and lows. Use plus frames into throw 
              (df+2+3). Mix IZU 4,1 more. Use GEN 1 for chip. Don't overcommit to big moves—
              chip them out.
            </div>
          </div>
        </Collapsible>

        <Collapsible title="The Stepper" defaultOpen>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            marginBottom: '12px'
          }}>
            <div style={{ color: 'var(--warning)', fontWeight: 600, marginBottom: '8px' }}>
              Signs: Sidesteps constantly. Makes your linear moves whiff. Hard to pin down.
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              <strong>Your answer:</strong> Homing moves. f+4 (high), df+3 (mid), MIA 1+2 (stance). 
              Once they respect the tracking, go back to your regular pressure.
            </div>
          </div>
        </Collapsible>

        <Collapsible title="The Ducker" defaultOpen>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            marginBottom: '12px'
          }}>
            <div style={{ color: 'var(--warning)', fontWeight: 600, marginBottom: '8px' }}>
              Signs: Ducks your jab strings. Gets launched by mids. Tries to low parry everything.
            </div>
            <div style={{ color: 'var(--text-secondary)' }}>
              <strong>Your answer:</strong> Use 1,1 instead of 1,2,2. More IZU 3 than IZU 4,1. 
              df+2 catches crouching. Stop doing lows until they stop ducking.
            </div>
          </div>
        </Collapsible>
      </Section>

      <Section title="The Adaptation Cycle">
        <p>
          Good Tekken is a constant cycle of action → observation → adaptation.
        </p>

        <Flowchart 
          title="The Learning Loop"
          nodes={[
            { type: 'start', label: 'Do something (e.g., SS4 → throw)' },
            { type: 'decision', label: 'What happened?', branches: [
              { label: 'It worked', action: 'Do it again until they adapt' },
              { label: 'They blocked', action: 'Note: They respect this. Mix harder.' },
              { label: 'They counter-hit you', action: 'Note: They don\'t respect this. Use CH tools.' },
              { label: 'They sidestepped', action: 'Note: Use homing next time.' }
            ]},
            { type: 'end', label: 'Adjust and repeat' }
          ]}
        />

        <KeyConcept title="The Golden Rule" icon="📚">
          <p>
            <strong>If something works, keep doing it until it stops working.</strong>
          </p>
          <p style={{ marginTop: '8px', color: 'var(--text-secondary)' }}>
            Don't preemptively mix. Don't show all your options in round 1. Find what works 
            against this specific opponent and exploit it until they prove they can stop it.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Range Management">
        <p>
          Jun excels at specific ranges. Understanding where to be is half the battle.
        </p>

        <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>
              Range 0-1: Close
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              Your jab strings (1,2,2 / 1,1), throws, and close-range pressure. This is where 
              your plus frame traps shine. Use SS4, df+2+3, stance mix-ups.
            </p>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--accent)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>
              Range 2: Mid — Jun's Sweet Spot
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              This is where Jun thrives. f,f+1+2 and f,f+2 to approach. df+4 and b+3 for keepout. 
              f+2 for whiff punishment. Control this range and you control the match.
            </p>
          </div>
          
          <div style={{ 
            background: 'var(--bg-card)', 
            padding: '16px', 
            borderRadius: '8px',
            border: '1px solid var(--border)'
          }}>
            <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px' }}>
              Range 3+: Long
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
              MIA 2 with Divine Aura becomes relevant. Heat smash. Otherwise, move into range 2.
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="Backdash Into Range 2">
          When in doubt, backdash. Jun's backdash is solid, and range 2 is where her tools 
          work best. Don't let opponents rush you down—create space and make them come to you.
        </TipBox>
      </Section>

      <Section title="Match-Specific Adjustments">
        <p>
          Different characters require different approaches:
        </p>

        <Collapsible title="vs Rushdown Characters (Law, Hwoarang, etc.)">
          <div style={{ padding: '16px', background: 'var(--bg-card)', borderRadius: '8px' }}>
            <ul>
              <li>Backdash to range 2. Don't let them in for free.</li>
              <li>d+3+4 catches aggressive approaches.</li>
              <li>b+3 and df+4 for keepout.</li>
              <li>Genjitsu auto-parry helps vs low-heavy pressure.</li>
              <li>Don't panic—their pressure often has gaps. Find them.</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="vs Defensive Characters (Asuka, Jack, etc.)">
          <div style={{ padding: '16px', background: 'var(--bg-card)', borderRadius: '8px' }}>
            <ul>
              <li>Be patient. They want you to overextend.</li>
              <li>Chip with lows (db+3, GEN 1, FC df+2).</li>
              <li>Throws are key—they can't parry throws.</li>
              <li>Don't throw out big moves. Poke and condition.</li>
              <li>Heat smash chips even on block.</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="vs Mishimas (Devil Jin, Kazuya, etc.)">
          <div style={{ padding: '16px', background: 'var(--bg-card)', borderRadius: '8px' }}>
            <ul>
              <li>Respect their hellsweep. Don't duck too much.</li>
              <li>Sidestep left when possible (most Mishima moves are weak to SSL).</li>
              <li>d+3+4 jumps over their lows if timed right.</li>
              <li>Punish blocked hellsweeps with ws+3 or ws+3+4.</li>
              <li>In heat, their EWGF pressure is scary. Block and wait for gaps.</li>
            </ul>
          </div>
        </Collapsible>

        <Collapsible title="vs Stance Characters (Zafina, Lei, etc.)">
          <div style={{ padding: '16px', background: 'var(--bg-card)', borderRadius: '8px' }}>
            <ul>
              <li>Learn their common stance moves. Lab the matchup.</li>
              <li>d+1+2 is great for hitting grounded/low stance characters.</li>
              <li>Don't let them get comfortable in stance—pressure early.</li>
              <li>df+3 tracks and hits most evasive stances.</li>
              <li>When in doubt, block and wait for the punishable option.</li>
            </ul>
          </div>
        </Collapsible>
      </Section>

      <Section title="Round Management">
        <p>
          How you play should change based on the round situation:
        </p>

        <KeyConcept title="Round-by-Round Strategy" icon="🎲">
          <ul>
            <li><strong>Round 1</strong> — Gather information. What does this player do? Test their 
            reactions with jabs and SS4. Don't show everything.</li>
            <li><strong>Round 2</strong> — Implement counters. If they mashed, fish for CH. If they 
            blocked, throw more. Adapt to what you learned.</li>
            <li><strong>Life Lead</strong> — Play safe. Backdash, poke, chip. Don't take risks. 
            Make them come to you.</li>
            <li><strong>Life Deficit</strong> — Take calculated risks. IZU 4,1, CH fishing, heat 
            activation for damage. You need to open them up.</li>
            <li><strong>Round 3+</strong> — Divine Aura should be ready. Look for MIA 2 snipes. 
            Heat pressure becomes premium.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Jun Mindset">
        <p>
          Everything in this guide comes back to one idea: <strong>Jun punishes impatience.</strong>
        </p>

        <KeyConcept title="How to Think as Jun" icon="🧠">
          <ol>
            <li>Create situations where pressing buttons is dangerous (plus frames, CH setups)</li>
            <li>Watch what the opponent does in those situations</li>
            <li>Punish their choice with the correct answer</li>
            <li>If they adapt, adapt harder</li>
            <li>Stay calm, stay patient, stay deadly</li>
          </ol>
        </KeyConcept>

        <p>
          You don't need to rush. You don't need to overwhelm. You need to create traps and wait 
          for them to walk into them. That's the Kazama way.
        </p>
      </Section>

      <Section title="Practice: Putting It Together">
        <PracticeBox
          title="Pattern Recognition Drill"
          setup="Play ranked matches with specific observation goals."
          tasks={[
            { id: 'pattern-1', text: 'Identify a masher and counter-hit them 3 times', detail: 'Notice when they press buttons', type: 'toggle' },
            { id: 'pattern-2', text: 'Identify a turtle and open them with throws', detail: 'Notice when they over-block', type: 'toggle' },
            { id: 'pattern-3', text: 'Catch a stepper with homing moves', detail: 'Notice when they sidestep', type: 'toggle' },
          ]}
        />

        <PracticeBox
          title="Adaptation Drill"
          setup="Play a best-of-5 set. Consciously adapt each round."
          tasks={[
            { id: 'adapt-1', text: 'Round 1: Note what opponent does', detail: 'Don\'t try to win - gather data', type: 'toggle' },
            { id: 'adapt-2', text: 'Round 2+: Implement counters based on data', detail: 'Apply what you learned', type: 'toggle' },
            { id: 'adapt-3', text: 'Win using adaptation (not just better moves)', detail: 'The goal is outthinking, not outpressing', type: 'toggle' },
          ]}
        />
      </Section>

      <Section title="What's Next">
        <p>
          You now have everything you need to play Jun at a competent level. But mastery takes 
          practice. Here's your path forward:
        </p>

        <KeyConcept title="The Path to Fujin" icon="🎯">
          <ol>
            <li><strong>Master the basics</strong> — SS4 pressure, 1,2,2 into Izumo, core combos</li>
            <li><strong>Add counter-hit tools</strong> — d+3+4, ws+2, df+4</li>
            <li><strong>Learn punishment</strong> — Know your punishes for common moves</li>
            <li><strong>Understand stances</strong> — Flow between Izumo, Genjitsu, Miare</li>
            <li><strong>Maximize heat</strong> — Heat smash, parry, extended combos</li>
            <li><strong>Read opponents</strong> — Adapt your game plan in real-time</li>
          </ol>
          <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>
            You don't need to be perfect. You need to be consistent. Drill your combos, 
            understand your options, and make smart reads. Jun does the rest.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Final Thought">
          The best Jun players aren't the most aggressive. They're the most patient. They wait 
          for the moment. They read the opponent. And when the time is right, they punish.
          <br/><br/>
          <strong>Be water, my friend.</strong>
        </TipBox>
      </Section>
    </Chapter>
  )
}
