import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="Launchers"
      intro="When you launch someone, you convert that hit into 60+ damage. Yoshimitsu has several launchers for different situations — safe launchers, punishment launchers, and counter-hit launchers."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Learn Core Combos"
    >
      <Section title="The Safe Launcher: df+2">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'df+2',
            hitLevel: ['m'],
            damage: '13',
            startup: 'i15-16',
            onBlock: '-7',
            onHit: '+34a (launches)',
            tags: ['Mid', 'Launcher', 'SAFE', '15f Punish'],
            description: 'Safe mid launcher. Your main launcher for punishment and neutral. -7 on block is unpunishable.',
          }}
          showVideo
        />

        <p>
          df+2 is your <span className="highlight">main launcher</span>. At -7 on block, it's 
          completely safe. Use it for:
        </p>

        <KeyConcept title="df+2 Applications" icon="🎯">
          <ul>
            <li><strong>15f punish</strong> — For moves that are -15 or worse</li>
            <li><strong>Keepout</strong> — Safe launcher with great range</li>
            <li><strong>Neutral launch</strong> — Low risk way to start combos</li>
            <li><strong>Whiff punish</strong> — Recovery is fast enough</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Crouching Opponents">
          df+2 is +4s against crouching opponents. Even if they crouch, you're plus. On CH 
          against crouchers, it launches. This makes it excellent vs duck-happy players.
        </TipBox>
      </Section>

      <Section title="The Hopkick: uf+3">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'uf+3',
            hitLevel: ['m'],
            damage: '15',
            startup: 'i15',
            onBlock: '-13',
            onHit: '+32a (launches)',
            tags: ['Mid', 'Launcher', 'Low Crushes', 'Evasive'],
            description: 'Hopkick launcher. Low crushes and can evade some mids. -13 on block is punishable.',
          }}
          showVideo
        />

        <p>
          uf+3 is Yoshimitsu's <span className="highlight">hopkick</span>. It's faster than df+2 
          at i15, low crushes, and can evade some mids. The tradeoff is -13 on block.
        </p>

        <KeyConcept title="When to Use uf+3 vs df+2" icon="⚖️">
          <ul>
            <li><strong>uf+3</strong> — When you want to low crush, need speed, or as a callout</li>
            <li><strong>df+2</strong> — When you want safety, keepout, or don't need low crush</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            In general, df+2 is safer. Use uf+3 when you specifically need the low crush property.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Sidestep Launcher: SS 1">
        <MoveCard character="yoshimitsu"
          videoId="SS.1"
          move={{
            input: 'SS 1',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i17-18',
            onBlock: '-9',
            onHit: '+2',
            onCH: '+27a (launches)',
            tags: ['Mid', 'Counter-Hit Launcher', 'Safe', 'Evasive'],
            description: 'Sidestep into mid. Safe on block, counter-hit launches. Great for catching linear moves.',
          }}
          showVideo
        />

        <p>
          SS 1 is your <span className="highlight">sidestep launcher</span>. It's safe at -9, 
          and on counter-hit, it launches for a full combo. The sidestep makes it evasive.
        </p>

        <KeyConcept title="SS 1 Applications" icon="🔄">
          <ul>
            <li><strong>Against linear moves</strong> — Sidestep their attack, launch on CH</li>
            <li><strong>Safe mid option</strong> — Even on block, -9 is safe</li>
            <li><strong>Plus on normal hit</strong> — +2 on regular hit</li>
            <li><strong>Mix with SS 2</strong> — SS 2 is also a launcher</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Counter-Hit Launchers">
        <MoveCard character="yoshimitsu"
          videoId="FC.df+4"
          move={{
            input: 'CH FC df+4',
            hitLevel: ['L'],
            damage: '18',
            startup: 'i18-19',
            onBlock: '-26',
            onHit: '+4c',
            onCH: '+31a (launches)',
            tags: ['Low', 'Counter-Hit Launcher', 'From Crouch'],
            description: 'Counter-hit launching low from full crouch. Insane range, launches on CH.',
          }}
          showVideo
        />

        <p>
          We covered FC df+4 in Chapter 3, but it's worth repeating: on counter-hit, this 
          <span className="highlight">low launches for a full combo</span>. It's one of the 
          best CH launchers in the game.
        </p>

        <MoveCard character="yoshimitsu"
          videoId="uf+2"
          move={{
            input: 'CH uf+2',
            hitLevel: ['L'],
            damage: '25',
            startup: 'i35-36',
            onBlock: '-16',
            onHit: '+6g',
            onCH: '+25a',
            tags: ['Low', 'Counter-Hit Knockdown', 'Evasive'],
            description: 'Jumping low. Plus on hit, huge knockdown on CH. Low crushes during the jump.',
          }}
          showVideo
        />

        <p>
          uf+2 is a sneaky <span className="highlight">jumping low</span>. It looks like an overhead 
          but it's a low! On CH, it gives a big knockdown.
        </p>

        <TipBox variant="tip" title="The uf+2 Trick">
          uf+2 looks like an overhead because Yoshimitsu is in the air. Many players instinctively 
          stand block. Use this against opponents who don't know the matchup.
        </TipBox>
      </Section>

      <Section title="The Crouch Dash Launcher">
        <MoveCard character="yoshimitsu"
          move={{
            input: 'f,n,d,df+1 (CD 1)',
            hitLevel: ['M'],
            damage: '22',
            startup: 'i17-18',
            onBlock: '-17',
            onHit: '+35a (launches)',
            tags: ['Mid', 'Launcher', 'From Crouch Dash', 'Punishable'],
            description: 'Crouch dash launcher. High crushes during the crouch dash. Very punishable on block.',
          }}
          showVideo
        />

        <p>
          CD 1 (<code>f,n,d,df+1</code>) is Yoshimitsu's <span className="highlight">crouch dash launcher</span>. 
          The crouch dash high crushes, making this great for punishing jab-heavy opponents.
        </p>

        <KeyConcept title="Crouch Dash Applications" icon="⚡">
          <ul>
            <li><strong>After db+4 on hit</strong> — They jab? CD+1 crushes and launches.</li>
            <li><strong>High crushing reads</strong> — Against jab strings</li>
            <li><strong>KIN transition</strong> — Can go to Kincho with 1+2</li>
            <li><strong>Punishable</strong> — -17 on block, use on reads only</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Other Launch Scenarios">
        <KeyConcept title="Moves That Launch in Specific Situations" icon="📋">
          <ul>
            <li><strong>b+2,2 in Heat</strong> — Becomes a launcher during Heat</li>
            <li><strong>CH (1),1 in NSS/Heat</strong> — Second jab launches on CH</li>
            <li><strong>DGF 2,4</strong> — Dragonfly launcher (covered in Chapter 10)</li>
            <li><strong>CH DGF 1</strong> — Dragonfly CH launcher</li>
            <li><strong>KIN 2</strong> — Kincho launcher (covered in Chapter 11)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Launcher Priority">
          For now, focus on these launchers:
          <ol>
            <li><strong>df+2</strong> — Your main, safe launcher</li>
            <li><strong>uf+3</strong> — When you need low crush</li>
            <li><strong>SS 1</strong> — Against linear pressure</li>
            <li><strong>CH FC df+4</strong> — Keepout CH launcher</li>
          </ol>
          The stance launchers come later once you've mastered the basics.
        </TipBox>
      </Section>

      <Section title="Launcher Summary">
        <Collapsible title="Frame Data Reference" icon="📊" defaultOpen>
          <div style={{ marginTop: '12px', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                  <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Speed</th>
                  <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>On Block</th>
                  <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr>
                  <td style={{ padding: '8px' }}><code>df+2</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>i15-16</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-7</td>
                  <td style={{ padding: '8px' }}>SAFE, main launcher</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>uf+3</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>i15</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-13</td>
                  <td style={{ padding: '8px' }}>Hopkick, low crushes</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>SS 1</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>i17-18</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-9</td>
                  <td style={{ padding: '8px' }}>Safe, CH launcher</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>FC df+4</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>i18-19</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-26</td>
                  <td style={{ padding: '8px' }}>CH launcher low</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}><code>CD 1</code></td>
                  <td style={{ textAlign: 'center', padding: '8px' }}>i17-18</td>
                  <td style={{ textAlign: 'center', padding: '8px', color: 'var(--danger)' }}>-17</td>
                  <td style={{ padding: '8px' }}>High crushes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
