import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Heat System"
      intro="Jin's Heat mode is uniquely powerful because it gives him free electrics — removing the execution barrier that normally limits his plus frame pressure. Understanding when and how to activate Heat is a critical layer of his game."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Wall Game"
    >
      <Section title="Heat Engagers">
        <p>
          Heat Engagers are moves that can be dash-cancelled into Heat activation on hit 
          (or sometimes block). Jin has several, but these are the ones that matter:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {[
            { move: 'f,f+2', frames: 'i18', note: 'Best engager. Long range, safe (-7 on block). Heat dash on hit = free electric = full combo. Your primary way to activate heat.' },
            { move: '1+2', frames: 'i13', note: 'Fast mid. Use for guaranteed heat activation (after CH 4, df+3~3 hit). Safe at -6.' },
            { move: 'ZEN 1,2', frames: 'i16', note: 'Mid-mid from ZEN. Hit confirmable. Wall splats. Heat activation in ZEN pressure.' },
            { move: 'ZEN 2', frames: 'i21', note: 'Power crush from ZEN. Homing. Heat activation while absorbing attacks.' },
            { move: '4,3,1', frames: 'i14', note: 'Incredible for punishment. i14 into heat = launch from punish. Hit confirmable string.' },
            { move: 'b+3,4', frames: 'i17', note: 'Mid-mid. Enters ZEN on hit. Heat activation option in poking.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'var(--background-secondary)', borderRadius: '6px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <code style={{ color: 'var(--accent)', minWidth: '80px', fontWeight: 600 }}>{item.move}</code>
              <div>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{item.frames}</span>
                <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Heat Burst">
        <MoveCard character="jin"
          videoId="heat_burst"
          move={{
            input: '2+3',
            hitLevel: ['m'],
            damage: '20',
            startup: 'i15',
            onBlock: '+2',
            onHit: '+10a',
            tags: ['Mid', 'Plus on Block', 'Heat Activation', 'Chip Damage'],
            description: 'Direct heat activation. +2 on block as a mid. On hit, +10 with guaranteed follow-up. Costs your heat activation but gives you immediate frame advantage. Best used in combos or when you need the clock running.',
          }}
          showVideo
        />

        <p>
          Heat Burst is your "panic" heat activation. It's plus on block, hits mid, and gives 
          you the heat state immediately. Use it:
        </p>
        <ul>
          <li>When you want heat <strong>right now</strong> (timer pressure, rage situation)</li>
          <li>In combos to extend damage with heat combo</li>
          <li>When you can't safely land an engager</li>
        </ul>
      </Section>

      <Section title="What Heat Does for Jin">
        <KeyConcept title="Free Electrics" icon="⚡">
          <p>
            In Heat mode, <strong>all electric inputs come out as EWHF</strong> — the just-frame 
            version with +5 on block. No execution needed. <code>f,n,d,df+2</code> just works. 
            This means every Jin player, regardless of execution level, gets access to the best 
            move in the game during Heat.
          </p>
        </KeyConcept>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {[
            { benefit: 'Free EWHF (+5 on block)', detail: 'No just-frame timing. Every electric is +5. Spam it.' },
            { benefit: 'Enhanced chip damage', detail: 'Blocked moves do more chip. Plus frame loop does massive damage.' },
            { benefit: 'Heat Smash', detail: 'New move: big damage mid launcher. Use as your closer when heat timer is running out.' },
            { benefit: 'Heat Dash cancel', detail: 'Heat engagers on hit → heat dash → free electric → full combo. Standard combo extension.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'var(--background-secondary)', borderRadius: '6px' }}>
              <p style={{ fontWeight: 600, color: 'var(--accent)', margin: 0 }}>{item.benefit}</p>
              <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="When to Activate Heat">
        <Flowchart
          title="Heat Activation Decision"
          nodes={[
            { type: 'start', label: 'Should I activate heat?' },
            { type: 'decision', label: 'Current situation:', branches: [
              { label: 'Guaranteed combo', action: 'YES — Heat dash after engager for extra damage. Or heat burst mid-combo for extension.' },
              { label: 'Wall pressure', action: 'YES — Free electrics at the wall is devastating. Chip loop does insane damage in heat.' },
              { label: 'Need execution help', action: 'YES — If you struggle with electrics, heat is your window. Go crazy.' },
              { label: 'Round start / no advantage', action: 'CONSIDER — Heat burst is +2 mid, safe way to start heat. Or fish for f,f+2.' },
              { label: 'Behind on life', action: 'SAVE — Keep heat for comeback potential. Heat + rage = huge damage.' },
            ]},
          ]}
        />

        <TipBox variant="tip" title="Don't Save Heat Forever">
          A common mistake is hoarding heat for the "perfect moment." Heat gives you free 
          electrics and massive chip damage. If you're not using it, you're leaving damage on 
          the table. Activate it early in a round when you have advantage (after a poke hits, 
          at the wall, or in a combo). The only time to save it is if you're significantly 
          behind on life and need it for a comeback.
        </TipBox>
      </Section>

      <Section title="Heat Smash">
        <MoveCard character="jin"
          videoId="heat_smash"
          move={{
            input: '2+3 (in Heat)',
            hitLevel: ['m'],
            damage: '45',
            startup: 'i19',
            onBlock: '-15',
            onHit: 'KND (combo in rage)',
            tags: ['Mid', 'Heat Only', 'High Damage', 'Unsafe', 'Closer'],
            description: 'Your heat closer. 45 damage mid that ends heat. -15 on block — launch punishable by many characters. Use when you have frame advantage or as a hard read. Don\'t throw this out raw in neutral.',
          }}
          showVideo
        />

        <p>
          Heat Smash is your timer-is-running-out move. When you're in Heat and the bar is 
          about to expire:
        </p>

        <ul>
          <li><strong>After electric on block (+5)</strong> — opponent can't interrupt. The safest heat smash.</li>
          <li><strong>After ZEN 3+4 on block (+9)</strong> — completely free.</li>
          <li><strong>On wakeup pressure</strong> — when opponent is getting up and you want to close the round.</li>
          <li><strong>Don't</strong> use it raw in neutral. -15 is launch punishable.</li>
        </ul>
      </Section>

      <Section title="Heat Mode Pressure Loop">
        <div style={{ padding: '20px', background: 'var(--background-secondary)', borderRadius: '8px', marginTop: '16px', borderLeft: '3px solid var(--accent)' }}>
          <p style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '12px' }}>The Dream Sequence (in Heat, at the wall)</p>
          <ol style={{ color: 'var(--text-secondary)', lineHeight: '2.2' }}>
            <li>Activate heat (via combo or heat burst)</li>
            <li><code>EWHF</code> (free in heat) → +5 on block, chip damage</li>
            <li><code>ZEN 3+4</code> → +9 on block, massive chip</li>
            <li><code>EWHF</code> → +5, more chip</li>
            <li>Loop until heat timer runs out</li>
            <li><code>Heat Smash</code> as the closer or throw if they're frozen</li>
          </ol>
          <p style={{ marginTop: '12px', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            This sequence can do 40-60% of a health bar in pure chip damage. In Heat with 
            free electrics, this is close to unbeatable for opponents without Heat of their own.
          </p>
        </div>
      </Section>

      <Collapsible title="Heat vs Non-Heat Electrics" icon="⚡">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Property</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>EWHF (Just-Frame)</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>WGF (Regular)</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Heat Electric</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              {[
                { prop: 'On Block', ewhf: '+5', wgf: '-10', heat: '+5' },
                { prop: 'On Hit', ewhf: 'Launch', wgf: 'Launch', heat: 'Launch' },
                { prop: 'Execution', ewhf: 'Hard (just-frame)', wgf: 'Easy', heat: 'Free' },
                { prop: 'Chip Damage', ewhf: 'Standard', wgf: 'Standard', heat: 'Enhanced' },
                { prop: 'Available', ewhf: 'Always', wgf: 'Always', heat: 'Heat only (~15 sec)' },
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '8px', fontWeight: 600 }}>{row.prop}</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>{row.ewhf}</td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>{row.wgf}</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>{row.heat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
