import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter11({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Defense"
      intro="Jin is a rare character who can play defense and offense equally well. His defensive tools — parries, crushes, and evasion — let him escape pressure that most characters have to just eat. This chapter is about getting out of trouble."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Putting It Together"
    >
      <Section title="The Kazama Parry (b+1+2)">
        <MoveCard character="jin"
          videoId="b+1+2"
          move={{
            input: 'b+1+2',
            hitLevel: ['Special'],
            damage: '0 (auto-reversal)',
            startup: 'i1~20',
            onBlock: 'N/A',
            onHit: 'Reversal → guaranteed follow-up',
            tags: ['Parry', 'Punch Reversal', 'Defensive', 'Core Tool'],
            description: 'Parries all punch attacks and some mids. On successful parry, auto-reversal for damage + guaranteed follow-up. Active frames 1-20. This is the move that makes approaching Jin terrifying.',
            notes: ['Parries: Jabs, strings with punch extensions, many mids', 'Does NOT parry: Knees, elbows, kicks, lows, throws'],
          }}
          showVideo
        />

        <KeyConcept title="When to Parry" icon="🛡️">
          <p>
            The parry is best used on <strong>reads</strong>, not as a panic option:
          </p>
          <ul>
            <li><strong>String extensions</strong> — When you block 1,2 and know a third hit is coming, parry it</li>
            <li><strong>Jab pressure</strong> — When opponent is in your face doing jab strings, parry reads</li>
            <li><strong>Predictable patterns</strong> — When they always do the same string on wakeup or in pressure</li>
            <li><strong>On their turn</strong> — When you're minus and they're going to jab check, parry reads</li>
          </ul>
          <p style={{ marginTop: '8px' }}>
            After a successful parry: <code>f,f+4</code>, <code>f,f+2</code>, or electric if you're fast.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Parry Baits">
          Good players will bait your parry with delayed strings or kicks. If you parry and nothing 
          comes out, you're stuck in recovery and can be launched. Don't spam parry — use it as a 
          read-based option, maybe 2-3 times per match.
        </TipBox>
      </Section>

      <Section title="High Crush Options">
        <p>
          "High crushing" means going under highs. Jin has several options for this:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {[
            { move: 'b+3+4 (ZENSHIN)', note: 'Steps back + high crushes. Frames 6-39. Best high crush because you can choose your ZEN response. ZEN 3 (homing mid) or ZEN 4 (mid dive) are safe choices.' },
            { move: 'db+4 (low poke)', note: 'Crushes highs from frame 5. Your "I think they\'re going to jab" option. On hit, sets up magic four.' },
            { move: 'd+3+4 (can-can)', note: 'Full crouch launcher that high crushes. Launch punish their jab pressure reads.' },
            { move: 'FC df+4 (crouch low)', note: 'From full crouch, high crushes naturally. On CH, leads to combo. Good for tech crouching jab pressure.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'var(--background-secondary)', borderRadius: '6px' }}>
              <code style={{ color: 'var(--accent)' }}>{item.move}</code>
              <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Getting Out of Pressure">
        <Flowchart
          title="Escape Options When Minus"
          nodes={[
            { type: 'start', label: 'You blocked something, you\'re minus' },
            { type: 'decision', label: 'How minus are you?', branches: [
              { label: '-1 to -5 (slight minus)', action: 'Jab check (1,2 or df+1). Sidewalk. Magic four for trades. b+3+4 to high crush. Can still "play your turn."' },
              { label: '-6 to -9 (real minus)', action: 'Block and wait. Backdash. b+3+4 to crush a jab read. Parry if you know they\'ll jab. Duck if they\'re predictably going high.' },
              { label: '-10 or worse', action: 'You\'re being punished — accept it. Block, don\'t press buttons. If they drop the punish, take your turn back with a jab.' },
            ]},
          ]}
        />

        <KeyConcept title="Backdash Is Your Best Defensive Tool" icon="↩️">
          <p>
            Before any fancy technique, master the backdash. Jin has a good backdash and it 
            solves most pressure situations. If you're minus and the opponent is in your face, 
            backdash creates space where their follow-up whiffs — and you can electric the whiff.
          </p>
          <p style={{ marginTop: '8px' }}>
            The pattern: <strong>Block → Backdash → Electric whiff punish.</strong> This is how 
            top Jin players play defense. Simple but devastating.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Dealing with Common Pressure">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          {[
            { pressure: 'Jab pressure (1,2 into more jabs)', counter: 'Duck, parry read (b+1+2), or db+4 to high crush. Magic four trades also work.' },
            { pressure: 'Pressure strings with mids', counter: 'Block and punish the ender. Most strings are minus or launch punishable. Learn the matchup.' },
            { pressure: 'Throw pressure (shimmy/throw)', counter: 'Fuzzy duck (quick crouch then stand). Or just break the throw — 1 for left, 2 for right.' },
            { pressure: 'Low spam', counter: 'Block the low and ws+2 launch. Jin launches -14 lows. Or low parry (df) for a combo.' },
            { pressure: 'Stance mixups', counter: 'Often a character knowledge issue. Lab the matchup. In general: interrupt with df+1 or jab when you can, duck highs, block mids.' },
            { pressure: 'Rushdown (constant approach)', counter: 'Backdash + electric whiff punish. b+3+4 to high crush approaches. f+4 as a long range CH tool.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '14px 16px', background: 'var(--background-secondary)', borderRadius: '6px' }}>
              <p style={{ fontWeight: 600, color: 'var(--accent)', margin: '0 0 6px' }}>{item.pressure}</p>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.counter}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Sidewalking">
        <p>
          Jin can sidestep left (SSL) effectively against many characters. Sidestepping creates 
          whiff opportunities that electric can punish.
        </p>

        <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', marginTop: '16px' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', margin: '0 0 12px' }}>General Sidestep Strategy</p>
          <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
            <li><strong>SSL (left)</strong> is generally Jin's better side</li>
            <li>Step after blocking a minus move — the opponent's follow-up may track poorly</li>
            <li>Step into <strong>b+3+4 (ZENSHIN)</strong> — combines evasion with high crush + ZEN options</li>
            <li>After stepping, <strong>electric</strong> the whiff or <strong>f,f+2</strong> for heat engage</li>
            <li>Don't step when significantly minus — you'll get clipped</li>
          </ul>
        </div>

        <TipBox variant="tip" title="The Step-Block-Punish Pattern">
          Against aggressive opponents: <strong>Sidestep → Block → Punish</strong>. Step to make 
          their attack whiff, block in case it tracks, then punish if it whiffed. This is lower 
          risk than committing to a whiff punish immediately.
        </TipBox>
      </Section>

      <Section title="Low Parry">
        <p>
          <code>df</code> during a low attack gives you a low parry — a universal defensive tool. 
          Jin gets a full combo from low parry:
        </p>

        <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', marginTop: '16px', borderLeft: '3px solid var(--accent)' }}>
          <p style={{ fontWeight: 600, color: 'var(--accent)', margin: '0 0 8px' }}>Low Parry Combo</p>
          <code style={{ color: 'var(--text-secondary)' }}>
            df (parry) → b+3~F → ZEN 1 → b,f+2,3~F → ZEN u+1 T! → (2),4~F → ZEN 1,3
          </code>
          <p style={{ margin: '8px 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            ~60 damage from a low parry. Against characters with heavy low pressure (Lei, Eddy, Xiaoyu), 
            this is a game-changer. You don't even need to block low — just parry and full combo.
          </p>
        </div>

        <TipBox variant="tip" title="When to Low Parry vs Block Low">
          Low parry (<code>df</code>) when you <strong>know</strong> a low is coming — it gives 
          a full combo. Block low (<code>db</code>) when you're unsure — it's safer because 
          a mistimed low parry gets you launched by mids.
        </TipBox>
      </Section>

      <Collapsible title="Defensive Quick Reference" icon="🛡️">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Situation</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Best Response</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Backup Option</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              {[
                { sit: 'Predictable jab pressure', best: 'b+1+2 parry', backup: 'Duck → ws+2 launch' },
                { sit: 'They\'re in your face', best: 'Backdash → electric whiff', backup: 'db+4 high crush' },
                { sit: 'Heavy low mixup', best: 'Low parry → combo', backup: 'Block low → ws+2' },
                { sit: 'String pressure', best: 'Block → punish ender', backup: 'Parry mid read' },
                { sit: 'After their whiff', best: 'Electric', backup: 'f,f+2 or 1+2' },
                { sit: 'They\'re approaching', best: 'f+4 keep-out', backup: 'b+3+4 high crush' },
                { sit: 'You\'re at the wall', best: 'Sidestep → electric', backup: 'Power crush (read)' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '8px' }}>{row.sit}</td>
                  <td style={{ padding: '8px' }}><code>{row.best}</code></td>
                  <td style={{ padding: '8px' }}><code>{row.backup}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
