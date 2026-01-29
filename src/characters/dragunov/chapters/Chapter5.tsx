import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Command Grabs"
      intro="This is the most important chapter in this guide. Dragunov has a COMPLETE throw game — command grabs for every break direction. Until opponents can break throws on reaction, this is your primary offense."
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="Learn Sneak Stance"
    >
      <Section title="Why Throws Are Primary">
        <p>
          Most guides put throws as an afterthought. That's backwards for Dragunov. 
          <span className="highlight">Throws should be your MAIN offense</span> until you face 
          opponents who can break them consistently on reaction.
        </p>

        <KeyConcept title="The Throw Advantage" icon="🤼">
          <ul>
            <li><strong>Can't be blocked</strong> — Ducking is the only defense</li>
            <li><strong>40 damage</strong> — More than most lows risk/reward</li>
            <li><strong>11-frame startup</strong> — Faster than most mids</li>
            <li><strong>Complete coverage</strong> — Dragunov has 1, 2, AND 1+2 break throws</li>
            <li><strong>Great oki</strong> — Guaranteed follow-ups after some throws</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="The Key Insight">
          d+2 (hatchet kick) is -13 on block and only -1 on hit for 14 damage. 
          Throws are i11, do 40 damage, and only lose to ducking. Until players break throws 
          on reaction (Tekken God level), spam throws relentlessly. They're simply better.
        </TipBox>
      </Section>

      <Section title="Generic Throws">
        <MoveCard character="dragunov"
          videoId="1+3"
          move={{
            input: '1+3 or 2+4',
            hitLevel: ['throw'],
            damage: '35',
            startup: 'i12',
            onBlock: '-2 (break)',
            onHit: '+1d',
            tags: ['Throw', 'Homing', '1 or 2 break'],
            description: 'Standard throws. 1+3 breaks with 1, 2+4 breaks with 2. Both are homing.',
          }}
          showVideo
        />

        <p>
          Generic throws are <span className="highlight">homing</span> — they catch sidesteps. 
          Mix these with your command grabs to cover every break option.
        </p>
      </Section>

      <Section title="f+1+4 — 1 Break Command Grab">
        <MoveCard character="dragunov"
          move={{
            input: 'f+1+4',
            hitLevel: ['throw'],
            damage: '40',
            startup: 'i11',
            onBlock: '-2 (break)',
            onHit: '+0d',
            tags: ['Throw', '1 break', 'Side switch'],
            description: 'Command grab with 1 break. Side switches on hit.',
          }}
          showVideo
        />

        <p>
          f+1+4 does 40 damage and side switches. Use when you want to push them toward the wall.
        </p>
      </Section>

      <Section title="f+2+3 — 2 Break Command Grab">
        <MoveCard character="dragunov"
          move={{
            input: 'f+2+3',
            hitLevel: ['throw'],
            damage: '40',
            startup: 'i11',
            onBlock: '-2 (break)',
            onHit: '-1d',
            tags: ['Throw', '2 break'],
            description: 'Command grab with 2 break. Good oki position.',
          }}
          showVideo
        />

        <p>
          f+2+3 leaves you in a good oki position. Alternate between this and f+1+4 to 
          make break attempts harder.
        </p>
      </Section>

      <Section title="uf+1+2 — 1+2 Break Command Grab">
        <MoveCard character="dragunov"
          move={{
            input: 'uf+1+2',
            hitLevel: ['throw'],
            damage: '40',
            startup: 'i12',
            onBlock: '-6 (break)',
            onHit: '-5d',
            tags: ['Throw', '1+2 break', 'Floor break', 'Side switch'],
            description: 'Command grab with 1+2 break. Floor breaks, side switches.',
          }}
          showVideo
        />

        <p>
          uf+1+2 is the <span className="highlight">1+2 break throw</span>. It floor breaks and 
          side switches. Use on stages with breakable floors for extra damage.
        </p>

        <TipBox variant="tip" title="The Complete Coverage">
          Between f+1+4 (1 break), f+2+3 (2 break), and uf+1+2 (1+2 break), you have 
          throws that cover every break option. Rotate between them to make breaking impossible.
        </TipBox>
      </Section>

      <Section title="uf+3+4 — The Unbreakable">
        <MoveCard character="dragunov"
          move={{
            input: 'uf+3+4',
            hitLevel: ['throw'],
            damage: '35',
            startup: 'i38-42',
            onBlock: 'N/A',
            onHit: '-12d',
            tags: ['Throw', 'Unbreakable', 'Jump'],
            description: 'Slow jumping throw that cannot be broken. Only countered by ducking or attacking.',
          }}
          showVideo
        />

        <p>
          uf+3+4 is a <span className="highlight">slow but unbreakable throw</span>. It's so slow 
          that opponents can react by ducking or attacking, but it's useful for conditioning.
        </p>

        <TipBox variant="tip" title="When to Use">
          Use uf+3+4 sparingly — maybe once or twice a match to keep them scared of throws. 
          If they freeze expecting fast throws, the slow unbreakable catches them.
        </TipBox>
      </Section>

      <Section title="Crouch Throws">
        <MoveCard character="dragunov"
          videoId="d+1+3"
          move={{
            input: 'd+1+3 or d+2+4',
            hitLevel: ['throw'],
            damage: '35',
            startup: 'i12',
            onBlock: 'N/A',
            onHit: '+1d',
            tags: ['Throw', 'Crouch throw', '1 or 2 break'],
            description: 'Crouch throw. Use after moves that leave you in crouch.',
          }}
          showVideo
        />

        <p>
          Crouch throws are essential after moves like b+1+2 (which guarantees the crouch throw on hit), 
          qcf+4, and d+2. If you're in crouch and plus, crouch throw them.
        </p>

        <KeyConcept title="Crouch Throw Setups" icon="⬇️">
          <ul>
            <li><strong>b+1+2 hit</strong> — Crouch throw GUARANTEED (+13c)</li>
            <li><strong>qcf+4 block</strong> — +7c, crouch throw beats slow responses</li>
            <li><strong>d+2 CH</strong> — +13c, crouch throw guaranteed</li>
            <li><strong>uf+1 hit</strong> — +12c, crouch throw guaranteed</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="When to Throw">
        <p>
          Knowing WHEN to throw is as important as knowing the throws:
        </p>

        <KeyConcept title="Best Throw Moments" icon="🎯">
          <ul>
            <li><strong>After plus frames</strong> — WR+2 block (+4), b+1+2 block (+6)</li>
            <li><strong>After jab</strong> — 1 on block (+1), 1 on hit (+8)</li>
            <li><strong>After 2,1 hit</strong> — +8, perfect throw opportunity</li>
            <li><strong>After 4,1 hit</strong> — +8, same situation</li>
            <li><strong>At the wall</strong> — Wall throws do extra damage</li>
            <li><strong>When they freeze</strong> — Passive opponents eat throws</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Jab → Throw Loop">
          Simple but deadly: Jab (+1) → Throw. If they block the jab and freeze, throw them. 
          If they start ducking after jab, df+1 mid hits them. Repeat until they're dead.
        </TipBox>
      </Section>

      <Section title="Breaking Throws Defense">
        <p>
          To break throws in Tekken, you press the same button as the throw's first input:
        </p>

        <KeyConcept title="How to Break" icon="🛡️">
          <ul>
            <li><strong>1+3</strong> → Break with 1</li>
            <li><strong>2+4</strong> → Break with 2</li>
            <li><strong>f+1+4</strong> → Break with 1</li>
            <li><strong>f+2+3</strong> → Break with 2</li>
            <li><strong>uf+1+2</strong> → Break with 1+2</li>
          </ul>
        </KeyConcept>

        <p>
          Most online players can't break throws on reaction — they guess. By rotating your 
          throws, you make their guesses wrong 2/3 of the time.
        </p>
      </Section>

      <Section title="Tackle (Ambush Tackle)">
        <p>
          Dragunov also has a unique ground throw called the <span className="highlight">Tackle</span>. 
          We'll cover this more in the Heat chapter, but here's the basics:
        </p>

        <KeyConcept title="Tackle Basics" icon="🤼">
          <ul>
            <li><strong>From Pigeon Roll (3+4)</strong> → Press 1+2 for tackle</li>
            <li><strong>Tackle has three follow-ups:</strong></li>
            <ul style={{ marginTop: '8px' }}>
              <li><code>1</code> — Less damage but removes recoverable health</li>
              <li><code>2</code> — Medium damage</li>
              <li><code>1+2</code> — Most damage, best oki</li>
            </ul>
            <li><strong>In Heat</strong> — Tackle becomes UNBREAKABLE</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Heat Tackle is Scary">
          In Heat, your tackle becomes unbreakable. This is why Dragunov's Heat is so dangerous. 
          We'll cover the specifics in Chapter 10.
        </TipBox>
      </Section>

      <Section title="The Throw Gameplan">
        <p>
          Here's how to use throws in actual matches:
        </p>

        <KeyConcept title="Throw-Based Offense" icon="🎯">
          <ol>
            <li><strong>Close distance</strong> — WR+2 or qcf+4</li>
            <li><strong>First mix</strong> — Throw. Just throw.</li>
            <li><strong>They eat it?</strong> — Keep throwing until they start ducking.</li>
            <li><strong>They duck?</strong> — Now your mids work (df+1, b+4, b+1+2).</li>
            <li><strong>They respect mids?</strong> — Go back to throwing.</li>
            <li><strong>Rinse and repeat</strong> — Adapt to their adaptation.</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="Don't Be Shy">
          Throw them 10 times in a row if they're not breaking. It's not "cheap" — it's efficient. 
          If they can't defend against throws, why would you do anything else? Make them prove 
          they can break throws before you start using lows.
        </TipBox>
      </Section>

      <Collapsible title="Throw Frame Data" icon="📊">
        <div style={{ marginTop: '12px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Throw</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Damage</th>
                <th style={{ textAlign: 'center', padding: '8px', color: 'var(--accent)' }}>Break</th>
                <th style={{ textAlign: 'left', padding: '8px', color: 'var(--accent)' }}>Notes</th>
              </tr>
            </thead>
            <tbody style={{ color: 'var(--text-secondary)' }}>
              <tr>
                <td style={{ padding: '8px' }}><code>1+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>35</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>1 or 2</td>
                <td style={{ padding: '8px' }}>Generic, homing</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>2+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>35</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>1 or 2</td>
                <td style={{ padding: '8px' }}>Generic, homing, side switch</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+1+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>40</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>1</td>
                <td style={{ padding: '8px' }}>Side switch</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>f+2+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>40</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>2</td>
                <td style={{ padding: '8px' }}>Good oki</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+1+2</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>40</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>1+2</td>
                <td style={{ padding: '8px' }}>Floor break, side switch</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>uf+3+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>35</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>None</td>
                <td style={{ padding: '8px' }}>Unbreakable but slow</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+1+3</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>35</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>1</td>
                <td style={{ padding: '8px' }}>Crouch throw</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}><code>d+2+4</code></td>
                <td style={{ textAlign: 'center', padding: '8px' }}>35</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>2</td>
                <td style={{ padding: '8px' }}>Crouch throw</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Collapsible>
    </Chapter>
  )
}
