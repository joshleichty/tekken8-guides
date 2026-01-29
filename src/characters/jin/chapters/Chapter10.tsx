import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter10({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={11}
      title="Heat System"
      intro="Heat is Tekken 8's biggest new mechanic. Jin gets free Electrics, one of the best Heat Smashes in the game, and access to Omen stance. Here's how to use it."
      onPrevious={() => goToChapter(10)}
      onNext={() => goToChapter(12)}
      nextLabel="Defense & Parry"
    >
      <Section title="Heat Basics">
        <p>
          You get <span className="highlight">one Heat activation per round</span>. When activated, 
          your health bar glows and a timer appears. Heat gives Jin several benefits:
        </p>

        <KeyConcept title="Jin's Heat Benefits" icon="🔥">
          <ul>
            <li><strong>Free Electrics</strong> — No just-frame timing required</li>
            <li><strong>Recoverable health</strong> — White health regenerates while in Heat</li>
            <li><strong>Chip damage</strong> — Your attacks do chip on block</li>
            <li><strong>Heat Dash</strong> — Extend combos with Heat Dash cancel</li>
            <li><strong>Heat Smash</strong> — Powerful finisher move</li>
            <li><strong>Omen Stance</strong> — Access to Devil Jin moves (via ff+1+2)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Free Electrics">
          In Heat, you get EWHF (+5 on block) even if you mess up the timing. This makes 
          Jin's Heat pressure terrifying — every crouch dash is a threat.
        </TipBox>
      </Section>

      <Section title="Heat Engagers">
        <p>
          <span className="highlight">Heat Engagers</span> are moves that activate Heat on hit. 
          Using them is better than Heat Burst (manual activation) because:
        </p>

        <ul>
          <li>You don't lose 1/3 of your Heat bar</li>
          <li>You get a guaranteed combo/pressure situation</li>
          <li>White health regenerates on hit</li>
        </ul>

        <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
          <MoveCard character="jin"
            move={{
              input: 'ff+2',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i14-15',
              onBlock: '-8',
              onHit: '+15a (Heat Engager)',
              tags: ['Mid', 'Heat Engager', 'Safe', 'Wall Splat'],
              description: 'Jin\'s BEST heat engager. Safe mid, great range, wall splats. This is your go-to.',
            }}
          />

          <MoveCard character="jin"
            move={{
              input: '1+2',
              hitLevel: ['m', 'm', 'm'],
              damage: '4,4,16',
              startup: 'i13',
              onBlock: '-14',
              onHit: 'Heat Engager',
              tags: ['Mid', 'Heat Engager', '13f Punish'],
              description: 'Fast heat engager. Use as 13f punish to go into Heat.',
            }}
          />

          <MoveCard character="jin"
            move={{
              input: 'f+3,1',
              hitLevel: ['m', 'm'],
              damage: '12, 17',
              startup: 'i14',
              onBlock: '-12',
              onHit: 'Heat Engager',
              tags: ['Mid', 'Mid', 'Heat Engager', 'Punishable'],
              description: 'Mid string heat engager. Good for 14f punishment situations.',
            }}
          />

          <MoveCard character="jin"
            move={{
              input: 'df+4',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i20-21',
              onBlock: '+0',
              onHit: 'Heat Engager',
              tags: ['Mid', 'Heat Engager', 'Neutral on Block'],
              description: 'Completely safe heat engager. Slower but zero risk.',
            }}
          />

          <MoveCard character="jin"
            move={{
              input: 'ZEN.1,2',
              hitLevel: ['m', 'm'],
              damage: '14, 21',
              startup: 'i16-17',
              onBlock: '-14',
              onHit: 'Heat Engager + Wall Splat',
              tags: ['Mid', 'Mid', 'Heat Engager', 'Wall Splat', 'Confirmable'],
              description: 'Heat engager from ZEN. Confirm the first hit before completing.',
            }}
          />
        </div>

        <KeyConcept title="Which Engager to Use?" icon="🎯">
          <ul>
            <li><strong>ff+2</strong> — Default. Safe, good range, wall splats.</li>
            <li><strong>1+2</strong> — For 13f punishment.</li>
            <li><strong>f+3,1</strong> — For 14f punishment or pressure.</li>
            <li><strong>df+4</strong> — When you want zero risk.</li>
            <li><strong>ZEN.1,2</strong> — At the wall for massive damage.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Heat Smash">
        <p>
          Jin's Heat Smash has <strong>two versions</strong>, which is unique. The input determines 
          which one you get:
        </p>

        <MoveCard character="jin"
          move={{
            input: 'H.2+3',
            hitLevel: ['m', 'h', 'm'],
            damage: '57',
            startup: 'i15-16',
            onBlock: '+3 (ZEN)',
            onHit: 'Throw',
            tags: ['Heat Smash', 'Balanced', 'ZEN Transition'],
            description: 'Balanced version. More damage, transitions to ZEN on block for mixups.',
          }}
        />

        <MoveCard character="jin"
          move={{
            input: 'H.2+3,4',
            hitLevel: ['m', 'h', 'm'],
            damage: '48',
            startup: 'i15-16',
            onBlock: '+9',
            onHit: 'Wall Splat from ANYWHERE',
            tags: ['Heat Smash', 'Wall Carry', 'Broken'],
            description: 'Wall carry version. Less damage but sends them FLYING to the wall.',
          }}
        />

        <KeyConcept title="Which Heat Smash?" icon="💥">
          <ul>
            <li><strong>H.2+3</strong> — More damage, use when wall is far</li>
            <li><strong>H.2+3,4</strong> — Use when you need wall carry. Sends them to Mars.</li>
          </ul>
          <p style={{ marginTop: '12px' }}>
            The wall carry version is infamous. Even from spawn, it can wall splat on some stages.
          </p>
        </KeyConcept>

        <TipBox variant="warning" title="Heat Smash is Duckable">
          The second hit of Heat Smash is a HIGH. Good players will duck and launch you. 
          Don't throw it out predictably. Use it in combos or when you're sure it'll hit.
        </TipBox>
      </Section>

      <Section title="Omen Stance (Heat Only)">
        <p>
          In Heat, Jin can access <span className="highlight">Omen Stance</span> — a special 
          stance with Devil Jin moves.
        </p>

        <KeyConcept title="How to Access Omen" icon="👁️">
          <p><code>ff+1+2</code> (in Heat)</p>
          <p style={{ marginTop: '8px' }}>
            This mid move puts you into Omen stance on hit OR block. It's unique because 
            you get the stance transition either way.
          </p>
        </KeyConcept>

        <p style={{ marginTop: '16px' }}>
          From Omen stance (DVS), you have access to:
        </p>

        <ul>
          <li><code>DVS.1</code> — Mid launcher with Tornado</li>
          <li><code>DVS.2</code> — +4 on block mid (like a mini-Electric)</li>
          <li><code>DVS.3</code> — Mid spike</li>
          <li><code>DVS.4</code> — Low kick, can extend with <code>DVS.4,4</code></li>
          <li><code>DVS.df+3</code> — Very slow low launcher</li>
        </ul>

        <TipBox variant="warning" title="Omen is Situational">
          Omen stance is cool but not essential. The moves are slow and consume Heat bar 
          rapidly. Use it for style points or when you have a specific read, but don't force it.
        </TipBox>
      </Section>

      <Section title="Heat Strategy">
        <KeyConcept title="When to Activate Heat" icon="⏱️">
          <ul>
            <li><strong>After a launch</strong> — Heat Dash extends combos for more damage</li>
            <li><strong>When you have life lead</strong> — Pressure them with free Electrics</li>
            <li><strong>At the wall</strong> — Heat makes wall pressure even scarier</li>
            <li><strong>To close out a round</strong> — Heat Smash for the kill</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Heat Pressure Plan" icon="🔥">
          <ol>
            <li><strong>Engage with ff+2</strong> — Start Heat safely</li>
            <li><strong>Spam Electrics</strong> — Free +5 on block pressure</li>
            <li><strong>Mix with lows</strong> — CD.df+4,2 or db+4</li>
            <li><strong>Get to wall</strong> — ZEN pressure with chip</li>
            <li><strong>Heat Smash to close</strong> — When you have them locked down</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Waste Heat">
          Many players activate Heat and then... do nothing special. Plan your Heat activation. 
          Know what you want to accomplish before you commit.
        </TipBox>
      </Section>

      <Collapsible title="Heat Combo Extension" icon="📖" defaultOpen={false}>
        <div style={{ marginTop: '12px' }}>
          <p style={{ marginBottom: '16px' }}>
            Heat Dash lets you extend combos. The basic idea:
          </p>

          <p><strong>Standard Heat Extension</strong></p>
          <p style={{ fontFamily: 'monospace', background: 'var(--background-secondary)', padding: '12px', borderRadius: '4px', marginBottom: '16px' }}>
            ...standard combo → (2),4~f → ZEN.2 → Heat Dash → bf+2,1,df+2 T! → ender
          </p>

          <p>
            The Heat Dash after ZEN.2 lets you get a second Tornado, which significantly 
            increases damage.
          </p>

          <p style={{ marginTop: '16px' }}><strong>When to Heat Extend</strong></p>
          <ul>
            <li>You need extra damage to win the round</li>
            <li>Wall carry would secure a wall combo</li>
            <li>It's late game and Heat doesn't matter anymore</li>
          </ul>
        </div>
      </Collapsible>

      <Collapsible title="Heat Move Reference" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Move</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>ff+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Best engager, safe, wall splats</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>13f punish engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+3,1</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>14f punish engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>df+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Safe engager (+0)</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.1,2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Wall engager, confirmable</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ZEN.2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Engager</td>
                <td style={{ padding: '8px' }}>Power crush engager</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>H.2+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Smash</td>
                <td style={{ padding: '8px' }}>57 dmg, ZEN on block</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>H.2+3,4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Smash</td>
                <td style={{ padding: '8px' }}>48 dmg, insane wall carry</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>ff+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>Heat Only</td>
                <td style={{ padding: '8px' }}>Omen stance access</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
