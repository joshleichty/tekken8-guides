import { Chapter, Section } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  PracticeBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter5({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={5}
      title="Punishment"
      intro="When opponents make mistakes, Jun makes them hurt. Her punishment is unconventional but devastating—especially her i10 options."
      hasPrevious={true}
      onPrevious={() => goToChapter(4)}
      onNext={() => goToChapter(6)}
      nextLabel="The Stance Web"
    >
      <Section title="Why Jun's Punishment Is Special">
        <p>
          Most characters have a standard 1,2 as their i10 punish. Jun has that too—but she also 
          has <code>uf+1</code> and <code>FC df+1</code>, two i10 moves that knock down and carry 
          to the wall.
        </p>

        <KeyConcept title="The i10 Knockdowns" icon="💥">
          <p>
            Jun's signature punishment tools deal self-damage but give insane reward. An i10 
            knockdown with wall carry is almost unheard of in Tekken. Use it wisely.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Standing Punishment">
        <div style={{ display: 'grid', gap: '20px' }}>
          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i10 — Your Options</h4>
            
            <MoveCard character="jun"
              videoId="1,2"
              move={{
                input: '1,2',
                hitLevel: ['h', 'h'],
                damage: '5, 8',
                startup: 'i10',
                onBlock: '-3',
                onHit: '+6',
                tags: ['High', 'Jab String', 'Safe'],
                description: 'Standard jab punish. Use when you need consistency.',
                notes: ['Transitions to SS with u/d', 'Safe and reliable', '1,2,2 extends into Izumo']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="uf+1"
              move={{
                input: 'uf+1',
                hitLevel: ['h', 'h'],
                damage: '6, 30',
                startup: 'i10',
                onBlock: '-14',
                onHit: '+22a',
                tags: ['High', 'Knockdown', 'Punish'],
                description: 'i10 knockdown punish. Deals 12 self-damage. Insane reward.',
                notes: ['The second hit is automatic', 'Deals self-damage (8 recoverable)', 'Wall carries on hit', 'DO NOT use if it gets blocked']
              }}
              showVideo
            />

            <TipBox variant="warning" title="uf+1 Risk">
              uf+1 is -14 on block and deals self-damage even when blocked. Only use it when you 
              are 100% certain your punish will connect. If you're unsure, use 1,2 instead.
            </TipBox>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i12 — 2,1,4</h4>
            
            <MoveCard character="jun"
              videoId="2,1,4"
              move={{
                input: '2,1,4',
                hitLevel: ['h', 'm', 'm'],
                damage: '7, 9, 12',
                startup: 'i12',
                onBlock: '-12',
                onHit: '-1',
                tags: ['Mid', 'Punish', 'Hit Confirmable'],
                description: 'i12 punish string. Can stop at 2,1 safely (-6). Full string is -12.',
                notes: ['2,1,4,1 extension is -9 with knockdown', '2,1,4,3 gives balcony break', 'Hit confirm the extensions']
              }}
              showVideo
            />
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i13 — 1+2 or b+4,2</h4>
            
            <MoveCard character="jun"
              videoId="1+2"
              move={{
                input: '1+2',
                hitLevel: ['m'],
                damage: '26',
                startup: 'i13',
                onBlock: '-12',
                onHit: '+28a',
                tags: ['Mid', 'Heat Engager', 'Punish'],
                description: 'i13 heat engager. Solid damage and knockdown.',
                notes: ['Heat engager on hit', 'Heat dash is +5', 'Primary i13 punish']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="b+4,2"
              move={{
                input: 'b+4,2',
                hitLevel: ['m', 'm'],
                damage: '14, 17',
                startup: 'i13~14',
                onBlock: '-13',
                onHit: '+5',
                onCH: '+28a (+18)',
                tags: ['Mid', 'Knee', 'Punish'],
                description: 'Alternative i13 punish. Hit confirmable, CH launches.',
                notes: ['b+4 alone is -7', 'Knee - cannot be parried', 'Hit confirm the 2 extension']
              }}
              showVideo
            />
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i15 — db+1,1,1+2</h4>
            
            <MoveCard character="jun"
              videoId="db+1,1,1+2"
              move={{
                input: 'db+1,1,1+2',
                hitLevel: ['m', 'm', 'm', 'm', 'm'],
                damage: '7, 8, 5, 5, 20',
                startup: 'i15~16',
                onBlock: '-15',
                onHit: '+21a (+11)',
                tags: ['Mid', 'Punish', 'Wall Combo'],
                description: 'Big damage i15 punish. Hit confirmable at db+1,1. Heals Jun.',
                notes: ['Stop at db+1,1 (-11) if unsure', 'Full string heals Jun', 'Great wall combo ender too']
              }}
              showVideo
            />
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i16+ — Launchers</h4>
            
            <MoveCard character="jun"
              videoId="df+2,1+2"
              move={{
                input: 'df+2,1+2',
                hitLevel: ['m', 'm'],
                damage: '14, 12',
                startup: 'i16~17',
                onBlock: '-9',
                onHit: '+38a (+28)',
                tags: ['Mid', 'Launcher', 'Heat Engager'],
                description: 'i16 launcher into heat engager. Your go-to launch punish.',
                notes: ['Launches crouching', 'Second hit makes it a heat engager', 'Best i16 punish option']
              }}
              showVideo
            />

            <MoveCard character="jun"
              videoId="f+2"
              move={{
                input: 'f+2',
                hitLevel: ['m'],
                damage: '20',
                startup: 'i17~18',
                onBlock: '-18',
                onHit: '+33a (+23)',
                tags: ['Mid', 'Launcher', 'Whiff Punish'],
                description: 'i17 launcher. Great range for whiff punishment.',
                notes: ['f+2,1+2 is safe heat engager', 'Primary whiff punish tool', 'Cancel to FC with D']
              }}
              showVideo
            />
          </div>
        </div>
      </Section>

      <Section title="Crouching Punishment">
        <p>
          Jun's while standing punishment is where she really shines. FC df+1 is an i10 knockdown 
          from crouch—absolutely devastating.
        </p>

        <div style={{ display: 'grid', gap: '20px' }}>
          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i10 — FC df+1</h4>
            
            <MoveCard character="jun"
              videoId="FC.df+1"
              move={{
                input: 'FC df+1',
                hitLevel: ['sl', 'm'],
                damage: '6, 30',
                startup: 'i10',
                onBlock: '-19',
                onHit: '+26a (+11)',
                tags: ['Mid', 'Knockdown', 'Punish'],
                description: 'i10 low punish that knockdowns and wall carries. THE move.',
                notes: ['Deals 18 self-damage (12 recoverable)', 'Insane wall carry on hit', 'DO NOT miss this punish']
              }}
              showVideo
            />

            <TipBox variant="danger" title="The Big Risk">
              FC df+1 is -19 on block and deals significant self-damage. If your punish gets 
              blocked (because the move wasn't actually punishable), you're eating a launch. 
              Only use when you KNOW you have the punish.
            </TipBox>
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i11 — ws+4</h4>
            
            <MoveCard character="jun"
              videoId="ws4"
              move={{
                input: 'ws+4',
                hitLevel: ['m'],
                damage: '21',
                startup: 'i11~12',
                onBlock: '-12',
                onHit: '+18a (+11)',
                tags: ['Mid', 'Knockdown', 'Safe Punish'],
                description: 'Safe i11 WS punish. Knockdown with good oki.',
                notes: ['Much safer than FC df+1', 'Use when unsure about punish', 'Solid oki setup']
              }}
              showVideo
            />
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i13 — ws+2,1</h4>
            
            <MoveCard character="jun"
              videoId="ws2,1"
              move={{
                input: 'ws+2,1',
                hitLevel: ['m', 'm'],
                damage: '12, 20',
                startup: 'i13~14',
                onBlock: '-12',
                onHit: '+19a (+10)',
                tags: ['Mid', 'Knockdown', 'Wall Splat'],
                description: 'i13 WS punish with wall splat. Hit confirmable.',
                notes: ['ws+2 alone is -8', 'Confirm the 1 extension', 'Wall splats for combo']
              }}
              showVideo
            />
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i14 — ws+3</h4>
            
            <MoveCard character="jun"
              videoId="ws3"
              move={{
                input: 'ws+3',
                hitLevel: ['m'],
                damage: '16',
                startup: 'i14~15',
                onBlock: '-13',
                onHit: '+25a (+5)',
                tags: ['Mid', 'Launcher'],
                description: 'i14 WS launcher. Low crushes during startup.',
                notes: ['Fastest WS launcher', 'Low crush frames', 'Full combo on hit']
              }}
              showVideo
            />
          </div>

          <div>
            <h4 style={{ color: 'var(--accent)', marginBottom: '12px' }}>i18 — ws+3+4</h4>
            
            <MoveCard character="jun"
              videoId="ws3+4"
              move={{
                input: 'ws+3+4',
                hitLevel: ['m'],
                damage: '23',
                startup: 'i18~19',
                onBlock: '-21',
                onHit: '+38a (+28)',
                tags: ['Mid', 'Launcher', 'Big Damage'],
                description: 'Big WS launcher. Use for heavily punishable lows.',
                notes: ['Tornado on hit', 'Very unsafe on block', 'Maximum damage WS punish']
              }}
              showVideo
            />
          </div>
        </div>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          When opponents whiff, you need to make them pay. Jun has excellent whiff punishment tools.
        </p>

        <Collapsible title="Whiff Punish Tools">
          <KeyConcept title="Whiff Punish Priorities" icon="🎯">
            <ol>
              <li><strong>f+2</strong> — Long range launcher. Your primary whiff punish.</li>
              <li><strong>df+4</strong> — i15 mid with great range. Tornado on hit.</li>
              <li><strong>1,2,2</strong> — Fast, confirms into Izumo pressure.</li>
              <li><strong>uf+3+4</strong> — Long range flip. Guaranteed follow-up on hit.</li>
            </ol>
          </KeyConcept>

          <MoveCard character="jun"
            videoId="uf+3+4"
            move={{
              input: 'uf+3+4',
              hitLevel: ['m', 'm'],
              damage: '5, 21',
              startup: 'i20~23',
              onBlock: '-8~-4',
              onHit: '+18a',
              tags: ['Mid', 'Spike', 'Whiff Punish'],
              description: 'Flip kick with guaranteed follow-up. Safe on block.',
              notes: ['Run up f+2 guaranteed on hit', 'Low crushes', 'Great range for whiff punishment']
            }}
            showVideo
          />
        </Collapsible>

        <TipBox variant="tip" title="Whiff Punish Priority">
          See something whiff at range? f+2 first. If you're not sure you can reach, use df+4 
          for the safer option. Only go for uf+3+4 if you have time to read the whiff.
        </TipBox>
      </Section>

      <Section title="Practice: Punishment">
        <PracticeBox
          title="Standing Punish Drill"
          setup="Record opponent doing punishable moves at various speeds."
          tasks={[
            { id: 'punish-10', text: 'i10 punish with 1,2 5 times', detail: 'Consistent, safe option', type: 'counter', target: 5 },
            { id: 'punish-10-uf1', text: 'i10 punish with uf+1 5 times', detail: 'Only when you\'re SURE', type: 'counter', target: 5 },
            { id: 'punish-13', text: 'i13 punish with 1+2 5 times', detail: 'Heat engager punish', type: 'counter', target: 5 },
            { id: 'punish-16', text: 'i16 launch punish with df+2,1+2 5 times', detail: 'Full combo starter', type: 'counter', target: 5 },
          ]}
        />

        <PracticeBox
          title="WS Punish Drill"
          setup="Record opponent doing punishable lows."
          tasks={[
            { id: 'ws-10', text: 'Block low → FC df+1 5 times', detail: 'The big damage option', type: 'counter', target: 5 },
            { id: 'ws-11', text: 'Block low → ws+4 5 times', detail: 'The safe option', type: 'counter', target: 5 },
            { id: 'ws-14', text: 'Block snake edge → ws+3 full combo 5 times', detail: 'Heavily punishable lows', type: 'counter', target: 5 },
          ]}
        />
      </Section>

      <Section title="Quick Reference">
        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '20px', 
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '16px' }}>Standing Punishers</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '8px', fontSize: '0.9em' }}>
            <div style={{ fontWeight: 600 }}>Speed</div>
            <div style={{ fontWeight: 600 }}>Safe</div>
            <div style={{ fontWeight: 600 }}>Max Damage</div>
            
            <div>i10</div>
            <div>1,2 or 1,2,2</div>
            <div>uf+1 (risky)</div>
            
            <div>i12</div>
            <div>2,1,4</div>
            <div>2,1,4,1</div>
            
            <div>i13</div>
            <div>1+2</div>
            <div>b+4,2</div>
            
            <div>i15</div>
            <div>db+1,1</div>
            <div>db+1,1,1+2</div>
            
            <div>i16</div>
            <div style={{ gridColumn: 'span 2' }}>df+2,1+2</div>
            
            <div>i17</div>
            <div style={{ gridColumn: 'span 2' }}>f+2</div>
          </div>
        </div>

        <div style={{ 
          background: 'var(--bg-card)', 
          padding: '20px', 
          borderRadius: '12px',
          border: '1px solid var(--border)',
          marginTop: '16px'
        }}>
          <h4 style={{ color: 'var(--accent)', marginBottom: '16px' }}>WS Punishers</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr', gap: '8px', fontSize: '0.9em' }}>
            <div style={{ fontWeight: 600 }}>Speed</div>
            <div style={{ fontWeight: 600 }}>Safe</div>
            <div style={{ fontWeight: 600 }}>Max Damage</div>
            
            <div>i10</div>
            <div>ws+4</div>
            <div>FC df+1 (risky)</div>
            
            <div>i13</div>
            <div style={{ gridColumn: 'span 2' }}>ws+2,1</div>
            
            <div>i14</div>
            <div style={{ gridColumn: 'span 2' }}>ws+3 (launch)</div>
            
            <div>i18</div>
            <div style={{ gridColumn: 'span 2' }}>ws+3+4 (big launch)</div>
          </div>
        </div>

        <p style={{ marginTop: '24px' }}>
          Next chapter: Jun's three stances aren't separate tools—they're one connected system. 
          Let's learn how they flow together.
        </p>
      </Section>
    </Chapter>
  )
}
