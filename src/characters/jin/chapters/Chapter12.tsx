import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Flowchart
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Putting It All Together"
      intro="You've learned Jin's tools individually. Now let's assemble them into a complete gameplan — how to play the beginning, middle, and end of a round, and how to adapt to different opponents."
      onPrevious={() => goToChapter(11)}
      nextLabel="Complete"
    >
      <Section title="The Round Start">
        <p>
          Round start is important in Tekken because both players are at range 0. Jin has 
          several strong round-start options:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {[
            { move: 'df+1', risk: 'Low', reward: 'Low', note: 'Safe mid check. If it hits, +7 and you start your poke game. Best default option.' },
            { move: '1,2', risk: 'Low', reward: 'Low', note: 'Fast jab string. Creates frametraps on block. Low commitment round start.' },
            { move: 'f+4', risk: 'Medium', reward: 'High', note: 'CH launcher. If they press, you get a full combo. -12 if they block. High risk/reward.' },
            { move: 'db+4', risk: 'Low', reward: 'Medium', note: 'Low poke that high crushes. Evades round-start highs. Sets up magic four on hit.' },
            { move: 'Backdash', risk: 'None', reward: 'High', note: 'Create space. Bait a whiff. Electric the whiff. The safest option.' },
            { move: 'b+3+4', risk: 'Low', reward: 'Medium', note: 'High crush into ZEN. Evades round-start jabs. Choose ZEN option based on what happens.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'var(--background-secondary)', borderRadius: '6px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '80px' }}>
                <code style={{ color: 'var(--accent)' }}>{item.move}</code>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.8rem', color: item.risk === 'None' ? 'var(--success)' : item.risk === 'Low' ? '#10b981' : item.risk === 'Medium' ? '#f59e0b' : '#ef4444' }}>
                    Risk: {item.risk}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: item.reward === 'Low' ? 'var(--text-muted)' : item.reward === 'Medium' ? '#f59e0b' : '#ef4444' }}>
                    Reward: {item.reward}
                  </span>
                </div>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.note}</p>
              </div>
            </div>
          ))}
        </div>

        <TipBox variant="tip" title="Default Round Start">
          Until you know your opponent, start with <code>df+1</code> or <code>backdash</code>. 
          These are zero-risk options that give you information. If they press, your df+1 checks 
          them. If they whiff, your backdash creates a punish opportunity. Upgrade to riskier 
          options once you've read their habits.
        </TipBox>
      </Section>

      <Section title="Phase 1: Information Gathering (First 20 Seconds)">
        <p>
          The first moments of a round are about figuring out your opponent. Are they aggressive? 
          Passive? Do they duck? Do they press when minus?
        </p>

        <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', marginTop: '16px' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', margin: '0 0 12px' }}>What to Look For</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { q: 'Do they press after your plus moves?', a: 'If yes → stop being fancy, just df+1 and punish. If no → escalate to electric and ZEN.' },
              { q: 'Do they duck your highs?', a: 'If yes → use more mids (df+1, f+4, ZEN 4). If no → electric and ZEN 3+4 freely.' },
              { q: 'Do they sidestep?', a: 'If yes → use homing moves (ZEN 3, b+4). If no → standard pressure.' },
              { q: 'How do they respond to lows?', a: 'If they eat them → more db+4 and d+2. If they low parry → fake the low, go mid.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '12px', background: 'var(--background)', borderRadius: '6px' }}>
                <p style={{ fontWeight: 600, color: 'var(--accent)', margin: '0 0 4px', fontSize: '0.9rem' }}>{item.q}</p>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Phase 2: Executing the Gameplan">
        <Flowchart
          title="Jin's Core Gameplan"
          nodes={[
            { type: 'start', label: 'You\'ve read the opponent' },
            { type: 'decision', label: 'Opponent type:', branches: [
              { label: 'Aggressive (presses a lot)', action: 'Keep-out with f+4 and electric. Backdash → punish. Parry reads. Let them hang themselves.' },
              { label: 'Passive (blocks everything)', action: 'Escalate: db+4 → d+2 → electric chip → ZEN 3+4 loop. Climb the plus frame ladder. Chip them out.' },
              { label: 'Balanced (adapts)', action: 'This is the real game. Mix your tools. Sometimes poke, sometimes electric, sometimes ZEN. Be unpredictable.' },
              { label: 'Unfamiliar character', action: 'Block and punish. Use 2,4 to punish everything. Don\'t take risks against unknown strings.' },
            ]},
          ]}
        />

        <KeyConcept title="The Jin Triangle" icon="🔺">
          <p>
            Jin's gameplan is a triangle that adapts to the opponent:
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px', marginBottom: '16px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '20px' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>POKES</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '80px' }}>
                <span style={{ color: 'var(--accent-secondary)', fontWeight: 700 }}>PLUS FRAMES</span>
                <span style={{ color: '#f59e0b', fontWeight: 700 }}>DEFENSE</span>
              </div>
              <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontSize: '0.9rem' }}>
                Pokes condition → Plus frames punish respect → Defense punishes aggression → Loop
              </p>
            </div>
          </div>
          <ul>
            <li><strong>Pokes</strong> (Chapter 3-4) condition the opponent to stop pressing</li>
            <li><strong>Plus frames</strong> (Chapter 5) punish opponents who respect your pokes</li>
            <li><strong>Defense</strong> (Chapter 11) punishes opponents who get aggressive against your plus frame game</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            Cycle through all three based on what the opponent is doing. That's the complete Jin game.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Phase 3: Closing the Round">
        <p>
          You've built your lead. Now close it:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
            <p style={{ fontWeight: 600, color: '#10b981', margin: '0 0 8px' }}>You're Ahead on Life</p>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Play safe. Use df+1, backdash, and punishment. Let them take risks. They have to approach you — 
              that's where your whiff punishment and keep-out shine. Don't yolo when you're winning.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid #f59e0b' }}>
            <p style={{ fontWeight: 600, color: '#f59e0b', margin: '0 0 8px' }}>Even Life</p>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Push to the wall if possible. Use running 3 and electric to create wall situations. 
              At the wall, the chip loop can close out rounds even when you're even. Activate heat 
              for the free electric pressure.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid #ef4444' }}>
            <p style={{ fontWeight: 600, color: '#ef4444', margin: '0 0 8px' }}>You're Behind on Life</p>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Time to take calculated risks. f+4 for CH launch attempts. Heat activation for 
              free electrics. Electric whiff punishes from backdash. If you have rage, electric 
              into rage art is always available as a closer. Don't panic — Jin's comeback tools 
              are among the best.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Common Mistakes to Avoid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {[
            { mistake: 'Overusing electric in neutral', fix: 'Electric is a whiff punish and pressure tool, not a neutral poke. In neutral, use df+1, f+4, and movement. Save electric for when you\'re plus or they whiff.' },
            { mistake: 'Entering ZEN randomly', fix: 'ZEN on block from most transitions is minus. Only enter ZEN from plus situations (f+4 hit, b,f+2,3 hit, wall pressure).' },
            { mistake: 'Not punishing consistently', fix: 'Use 2,4 for everything at first. Graduate to optimal punishes over time. A bad punish is better than no punish.' },
            { mistake: 'Ignoring defense', fix: 'Jin CAN play defense. Use backdash, parry, and high crush. Don\'t try to out-aggro aggressive players — out-defend them.' },
            { mistake: 'Using the same options every round', fix: 'If you always do the same thing, opponents adapt. Mix your round-start, your poke patterns, and your ZEN options.' },
            { mistake: 'Dropping combos chasing max damage', fix: 'Use the universal BnB until it\'s muscle memory. Consistent 75 damage > occasional 85 damage with frequent drops.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '14px 16px', background: 'var(--background-secondary)', borderRadius: '6px' }}>
              <p style={{ fontWeight: 600, color: '#ef4444', margin: '0 0 4px' }}>{item.mistake}</p>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.fix}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Practice Priorities">
        <p>
          Here's what to practice, in order of importance:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '16px' }}>
          {[
            { priority: '1', task: 'Punishment', detail: '2,4 for everything, then b+1,2 for -12, then ws+2 for lows. This wins games immediately.' },
            { priority: '2', task: 'Universal combo', detail: 'One combo from every launcher. 75+ damage every time you launch. No drops.' },
            { priority: '3', task: 'Poke game (df+1, db+4, d+2)', detail: 'Know your frametraps and poke patterns from Chapter 3. This is your bread and butter.' },
            { priority: '4', task: 'Electric consistency', detail: 'Practice EWHF input. Even 30% consistency changes the game. Heat mode gives you free ones.' },
            { priority: '5', task: 'Movement (backdash, sidestep)', detail: 'Clean backdashes create whiff opportunities. Practice backdash → electric.' },
            { priority: '6', task: 'Wall pressure loop', detail: 'ZEN 3+4 → electric → running 3 at the wall. Practice the timing and rhythm.' },
            { priority: '7', task: 'ZEN transitions', detail: 'Learn which moves go to ZEN and what frames you have. Start with f+4~F and b,f+2,3~F.' },
            { priority: '8', task: 'Parry timing', detail: 'Lab specific strings from characters you face often. Parry the third hit of common jab strings.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'var(--background-secondary)', borderRadius: '6px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '1.1rem', minWidth: '24px' }}>{item.priority}</span>
              <div>
                <p style={{ fontWeight: 600, margin: 0 }}>{item.task}</p>
                <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="You're Ready">
        <div style={{ padding: '24px', background: 'linear-gradient(135deg, var(--background-secondary), var(--background))', borderRadius: '12px', marginTop: '16px', border: '1px solid var(--accent)', textAlign: 'center' }}>
          <p style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--accent)', margin: '0 0 16px' }}>
            That's the complete Jin gameplan.
          </p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
            You don't need to master everything at once. Start with pokes and punishment. 
            Add electric when you're comfortable. Layer in ZEN when the time is right. 
            Jin rewards patience — both in matches and in learning. 
          </p>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontStyle: 'italic' }}>
            The strongest steel is forged in the hottest fire. Go fight.
          </p>
        </div>
      </Section>
    </Chapter>
  )
}
