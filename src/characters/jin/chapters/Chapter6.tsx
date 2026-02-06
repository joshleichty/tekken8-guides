import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Flowchart,
  Collapsible,
  StanceBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="ZEN Stance"
      intro="ZEN (Zenshin) is Jin's signature stance. Unlike typical stance characters who loop pressure automatically, ZEN gives you situational weapons you deploy at the right moment — powerful options with big rewards when used correctly."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Combos"
    >
      <Section title="How to Enter ZEN">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent)' }}>
            <code style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>b+3+4</code>
            <span style={{ marginLeft: '12px', fontWeight: 600 }}>ZENSHIN (Manual Entry)</span>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Steps backward, high crushes frames 6-39. Can cancel with <code>f</code> (forward) into dash, 
              letting you do <code>f,f+2</code> or any forward move. <strong>This is the safest entry</strong> — 
              you can cancel out if you change your mind.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid var(--accent-secondary)' }}>
            <code style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem' }}>f+3+4</code>
            <span style={{ marginLeft: '12px', fontWeight: 600 }}>ZANSHIN (Forward Entry)</span>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Steps forward, high crushes. Can enter Breaking Step with <code>df</code>. 
              Cannot be cancelled with <code>f</code>. Use for approaching and in combos.
            </p>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px', borderLeft: '3px solid #10b981' }}>
            <span style={{ color: '#10b981', fontSize: '1.1rem', fontWeight: 600 }}>Move Transitions</span>
            <p style={{ marginTop: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Many moves transition to ZEN by holding <code>F</code>: 
              <code>f+4~F</code> · <code>b,f+2,3~F</code> · <code>3,1~F</code> · <code>f,f,F+3~F</code> · 
              <code>f+3,3~F</code> · <code>2,4~F</code> · <code>ws+1,2~F</code>
            </p>
          </div>
        </div>

        <TipBox variant="tip" title="b+3+4 vs f+3+4">
          Use <code>b+3+4</code> (ZENSHIN) in neutral — it steps back and lets you cancel. 
          Use <code>f+3+4</code> (ZANSHIN) to approach or in combos. Both give access to the 
          same moves once you're in stance.
        </TipBox>
      </Section>

      <Section title="ZEN Moves You Need">
        <StanceBox name="ZEN Stance" input="b+3+4 or F after moves" icon="⚡">
          <MoveCard character="jin"
            videoId="ZEN.3"
            move={{
              input: 'ZEN 3',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i17',
              onBlock: '-9',
              onHit: '+10g',
              onCH: '+22a (combo)',
              tags: ['Mid', 'Homing', 'Safe', 'CH combo'],
              description: 'Homing mid from ZEN. Safe at -9. On CH, guaranteed d+2 on the ground or CD1 for the flip. Your go-to ZEN move when you need something safe that catches stepping.',
            }}
            showVideo
          />

          <MoveCard character="jin"
            videoId="ZEN.4"
            move={{
              input: 'ZEN 4',
              hitLevel: ['M'],
              damage: '25',
              startup: 'i27~33',
              onBlock: '+2~+8',
              onHit: '+17d~+23d',
              tags: ['Mid', 'Plus on Block', 'Oki Tool', 'Spike'],
              description: 'Diving mid kick. Plus on block (+2 to +8 depending on range). Spikes on hit for guaranteed d+2. Great oki tool — hits grounded opponents. Slow startup but very rewarding when it lands.',
            }}
            showVideo
          />

          <MoveCard character="jin"
            videoId="ZEN.3+4"
            move={{
              input: 'ZEN 3+4',
              hitLevel: ['h'],
              damage: '25',
              startup: 'i21~27',
              onBlock: '+9g~+15g',
              onHit: '+19a',
              tags: ['High', 'Massively Plus', 'Chip Damage', 'Wall Pressure'],
              description: 'The wall pressure king. +9 to +15 on block. Massive chip. Enters Breaking Step with df. Can be ducked. Use when opponent is conditioned to block.',
            }}
            showVideo
          />

          <MoveCard character="jin"
            videoId="ZEN.1,2"
            move={{
              input: 'ZEN 1,2',
              hitLevel: ['m', 'm'],
              damage: '14, 21',
              startup: 'i16',
              onBlock: '-14',
              onHit: '+32a (wall splat)',
              tags: ['Mid-Mid', 'Heat Engager', 'Wall Splat', 'Hit Confirmable'],
              description: 'Hit confirmable mid-mid string. Wall splats from huge distance. Heat engager. -14 on block, so confirm it — don\'t just throw it out. At the wall, this is your go-to ZEN punish when they freeze.',
            }}
            showVideo
          />

          <MoveCard character="jin"
            videoId="ZEN.1+2"
            move={{
              input: 'ZEN 1+2',
              hitLevel: ['l', 't'],
              damage: '10, 20',
              startup: 'i21',
              onBlock: '-14',
              onHit: '+4 (+8 at wall)',
              tags: ['Low', 'Throw Follow-up', 'ZEN Transition on Hit'],
              description: 'Low chop from ZEN. On standing hit, transitions to throw for good damage. Transitions to CD with df on hit. Wall crush at the wall. The low option from ZEN when they\'re stand-blocking.',
            }}
            showVideo
          />

          <MoveCard character="jin"
            videoId="ZEN.2"
            move={{
              input: 'ZEN 2',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i21',
              onBlock: '-5',
              onHit: '+17a',
              tags: ['High', 'Power Crush', 'Homing', 'Heat Engager', 'Wall Splat'],
              description: 'Power crush from ZEN. Homing, wall splats, heat engager. Use to blow through opponents who press into your ZEN stance. Slow at i21, but absorbs hits.',
            }}
            showVideo
          />

          <MoveCard character="jin"
            videoId="ZEN.u+1"
            move={{
              input: 'ZEN u+1',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i14',
              onBlock: '-16',
              onHit: '+31a (tornado)',
              tags: ['Mid', 'Launcher', 'Tornado', 'Evasive', 'Unsafe'],
              description: 'Samsara — evasive mid launcher. Crushes lows, evades some mids and highs. -16 on block (launch punishable). High risk, high reward panic option. Also used in combos.',
            }}
            showVideo
          />
        </StanceBox>
      </Section>

      <Section title="ZEN Decision-Making">
        <p>
          The key question in ZEN is always: <strong>"Is my opponent pressing or blocking?"</strong>
        </p>

        <Flowchart
          title="ZEN Stance Options"
          nodes={[
            { type: 'start', label: 'You enter ZEN stance' },
            { type: 'decision', label: 'What is opponent doing?', branches: [
              { label: 'Pressing buttons', action: 'ZEN 3 (safe homing mid) or ZEN 2 (power crush through their attack)' },
              { label: 'Standing and blocking', action: 'ZEN 1+2 (low chop) or ZEN 3+4 (chip + massive plus) or ZEN 1,2 (wall splat if confirmed)' },
              { label: 'Ducking', action: 'ZEN 4 (mid dive, plus on block) or ZEN 1,2 (mid-mid)' },
              { label: 'Sidestepping', action: 'ZEN 3 (homing) or ZEN 2 (homing power crush)' },
              { label: 'You need to bail out', action: 'Cancel with f (ZENSHIN only) → block or backdash' },
            ]},
          ]}
        />
      </Section>

      <Section title="Breaking Step">
        <p>
          Breaking Step is Jin's Season 2 mechanic — a special forward step where his eyes glow red. 
          During Breaking Step, electric inputs come out automatically (no just-frame needed).
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>How to Enter Breaking Step</p>
            <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingLeft: '20px' }}>
              <li><code>f+3+4~df</code> — From ZANSHIN, hold df</li>
              <li><code>ZEN 3+4~df</code> — After the plus frame high</li>
              <li><code>df+3~3~df</code> — After Brazilian Kick</li>
              <li><code>df+2~df</code> — After the mid poke</li>
            </ul>
          </div>

          <div style={{ padding: '16px', background: 'var(--background-secondary)', borderRadius: '8px' }}>
            <p style={{ fontWeight: 600, color: 'var(--accent)', marginBottom: '8px' }}>Breaking Step Options</p>
            <ul style={{ color: 'var(--text-secondary)', margin: 0, paddingLeft: '20px' }}>
              <li><strong>BRS 2 (Electric)</strong> — Comes out at i11. No just-frame needed. +4 on block as special mid.</li>
              <li><strong>BRS 1 (CD1)</strong> — Mid tornado. Hits grounded. Great for oki.</li>
              <li><strong>uf+3 (Running 3)</strong> — Uninterruptible follow-up. +6 on block, chip damage.</li>
            </ul>
          </div>
        </div>

        <TipBox variant="tip" title="The Uninterruptible Wall Sequence">
          At the wall: <code>ZEN 3+4 → Breaking Step → Running 3</code>. This is completely 
          uninterruptible (except heat burst or rage art). It does ~20 chip damage total and 
          leaves you +6. If you then do electric, that's also uninterruptible. 
          Against opponents without heat or rage, this loop is free damage.
        </TipBox>
      </Section>

      <Section title="When to Use ZEN (Not a Flowchart Character)">
        <p>
          Here's the critical difference from Law's DSS: <strong>you don't enter ZEN after 
          every move</strong>. ZEN is a weapon you deploy in specific situations:
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          {[
            { when: 'At the wall', why: 'ZEN 3+4 into electric chip loop is devastating', icon: '🧱' },
            { when: 'After f+4 hit (+4, ZEN at +11)', why: 'Free ZEN mixup — anything you do comes out first', icon: '✅' },
            { when: 'After b,f+2,3 hit (ZEN at +17)', why: 'Completely uninterruptible. Go for ZEN 1,2 or ZEN 3+4', icon: '✅' },
            { when: 'On oki (opponent knocked down)', why: 'ZEN 4 hits grounded, ZEN 1+2 low catches wakeup', icon: '⬇️' },
            { when: 'When you want to high-crush', why: 'b+3+4 evades highs — bait a high, crush it, punish from ZEN', icon: '🦆' },
          ].map((item, i) => (
            <div key={i} style={{ padding: '12px 16px', background: 'var(--background-secondary)', borderRadius: '6px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--accent)', margin: 0 }}>{item.when}</p>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.why}</p>
              </div>
            </div>
          ))}
        </div>

        <KeyConcept title="ZEN Is Situational, Not Automatic" icon="🧘">
          <p>
            Don't try to enter ZEN after every poke. It doesn't work like DSS. Enter ZEN when 
            you have frame advantage (from a move transition or on hit), when you're at the wall, 
            or when you want to high-crush a predictable opponent. The rest of the time, just poke.
          </p>
        </KeyConcept>
      </Section>

      <Collapsible title="All ZEN Transitions Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>ZEN Frames (Block)</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>ZEN Frames (Hit)</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              {[
                { move: 'f+4~F', block: '-1', hit: '+11', notes: 'Best transition. Free ZEN mixup on hit.' },
                { move: 'b,f+2,3~F', block: '+2', hit: '+17', notes: 'Plus on block AND hit. Incredible.' },
                { move: '3,1~F', block: '+4', hit: '+12', notes: 'Plus on block. Good for pressure.' },
                { move: 'f,f,F+3~F', block: '+6', hit: '+13a', notes: 'Running 3 into ZEN. Wall pressure.' },
                { move: 'f+3,3~F', block: '-7', hit: '+9', notes: 'Minus on block — careful.' },
                { move: '2,4~F', block: '-6', hit: '+14g', notes: 'From punish into ZEN pressure.' },
                { move: 'ws+1,2~F', block: '-9', hit: '+2c', notes: 'Crouch punish into ZEN.' },
                { move: 'df+2~df (BRS)', block: '-2', hit: '+13g', notes: 'Into Breaking Step, not full ZEN.' },
              ].map((row, i) => (
                <tr key={i}>
                  <td style={{ padding: '8px' }}><code>{row.move}</code></td>
                  <td style={{ textAlign: 'center', padding: '8px', color: row.block.startsWith('+') ? 'var(--success)' : 'var(--danger)' }}>{row.block}</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--success)' }}>{row.hit}</td>
                  <td style={{ padding: '8px' }}>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
