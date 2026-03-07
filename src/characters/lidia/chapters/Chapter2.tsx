import { Chapter, Section, SubSection } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, Collapsible } from '../../../components/ui'
import { FrameTruth } from '../../../components/ui/FrameTruth'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="The Lie on the Screen"
      intro="Lidia's frame data lies to you. Every move that transitions into stance shows better numbers than reality because the game doesn't account for the 8 frames it takes to exit stance and block. Understanding this changes everything about how you play her — and it's the single most important concept for any Lidia player."
      hasPrevious
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Controlling the Arena"
    >
      <Section title="The Stance Exit Penalty">
        <p>
          When Lidia does a move that transitions into stance, the game shows the frame data
          for that move as if she could immediately block. But she can't — she's in stance.
          It takes <strong>8 additional frames</strong> to hold back and exit the stance before
          she can block again.
        </p>
        <p>
          This means you need to mentally subtract 8 from whatever the game shows. A move
          that displays -8 on block is actually <strong>-16</strong> — launch punishable.
          A move that shows -5 is really <strong>-13</strong> — punishable. This isn't a minor
          detail. It fundamentally changes which moves are safe to throw out and which are
          reserved for punishes or confirmed hits only.
        </p>

        <FrameTruth
          title="The Real Frame Data"
          description="The game shows one number. Here's what it actually means after you account for the 8-frame stance exit penalty."
          entries={[
            { input: '1,2,2', displayed: '-8', penalty: '-8 more', actual: '-16', consequence: 'Launch punishable', severity: 'danger' },
            { input: 'uf+4', displayed: '-5', penalty: '-8 more', actual: '-13', consequence: 'Punishable', severity: 'danger' },
            { input: '2,2', displayed: '-4', penalty: '-8 more', actual: '-12', consequence: 'Punishable', severity: 'warning' },
            { input: 'CAT 4', displayed: '-6', penalty: '-8 more', actual: '-14', consequence: 'Launch punishable', severity: 'danger' },
            { input: 'df+2', displayed: '0', penalty: '-8 more', actual: '-8', consequence: 'Safe but contestable', severity: 'warning' },
            { input: 'HRS 2', displayed: '-10', penalty: '—', actual: '-10', consequence: 'Punishable (no stance)', severity: 'warning' },
          ]}
          explanation="Every move that shows a stance transition icon has this hidden penalty. The only moves that show real numbers are ones that don't transition (like HRS 2 which ends stance on block) or moves where you remain standing. Always check if a move transitions before trusting the displayed frames."
        />

        <KeyConcept title="What This Means For You" icon="🔑">
          <ol>
            <li><strong>1,2,2 is a punish-only move.</strong> Don't throw it out in neutral. The -16 reality means any character can launch you. Reserve it for guaranteed 10-frame punishment.</li>
            <li><strong>uf+4 (hopkick) is -13, not -5.</strong> It's punishable like every other hopkick in the game. Don't get fooled by the display.</li>
            <li><strong>2,2 is risky in neutral.</strong> At real -12, opponents can punish you even if they don't duck the second high.</li>
            <li><strong>df+2 into CAT is contestable.</strong> At real -8, a 10-frame jab will beat every CAT option you have (fastest CAT move is i13). You must hold back or make a hard read with CAT 3.</li>
            <li><strong>Stance moves are commitments.</strong> Every time you enter stance, you're betting that you read the opponent correctly. If you guessed wrong, you eat damage.</li>
          </ol>
        </KeyConcept>

        <TipBox variant="tip" title="The Silver Lining">
          The stance exit penalty also means that when your stance moves HIT, you're more plus
          than you might think. If 1,2,2 is +8 on hit and you transition to CAT, you get a genuine
          mixup where even the opponent's armor moves can't beat your fastest options if you're plus
          enough. The key is knowing which situations give you real pressure and which don't.
        </TipBox>
      </Section>

      <Section title="Standing Punishment">
        <p>
          Lidia has excellent punishment. Her 10-frame and 11-frame punishes both transition into
          CAT stance for continued pressure — and her 14-frame punish activates heat. Knowing
          when to use each is crucial.
        </p>

        <SubSection title="10 Frame: 1,2,2">
          <MoveCard
            character="lidia"
            move={{
              input: '1,2,2',
              hitLevel: ['h', 'h', 'm'],
              damage: '5, 8, 10',
              startup: 'i10',
              onBlock: '-8 (-16 real)',
              onHit: '+8',
              tags: ['punish'],
              description: "Your go-to 10-frame punish. Transitions to CAT at +8 on hit. From there, CAT 1 (mid) and CAT 4 (low) give you a mixup — but the opponent CAN armor through CAT 1 at +8. Use CAT 3 (heat engager) if they're pressing buttons, as it beats everything including armor.",
              notes: ['NEVER throw this out in neutral — it is launch punishable on block'],
            }}
            showVideo
          />

          <p>
            Alternative 10-frame option: <strong>1,4</strong> (h,h, -8 on block, +1 on hit). Simpler
            and doesn't transition to stance, making it safer if you're worried about the stance
            commitment. Good for quick punishes where you don't want the risk.
          </p>
        </SubSection>

        <SubSection title="11 Frame: 2,2">
          <MoveCard
            character="lidia"
            move={{
              input: '2,2',
              hitLevel: ['h', 'h'],
              damage: '8, 20',
              startup: 'i11',
              onBlock: '-4 (-12 real)',
              onHit: '+11',
              tags: ['wall splat', 'punish'],
              description: "Wall splats, tornado on aerial hit, and +11 into CAT stance. At +11 the opponent CANNOT armor through your CAT 1 — it will counter-hit them. This makes your 11-frame punish actually better than your 10-frame in many situations. Use this for 11f and even 12f punishes instead of the technically optimal f+2,4.",
              notes: ['Wall splats for huge damage near walls', 'Second hit is a duckable high — punish only'],
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="12 Frame: f+2,4">
          <MoveCard
            character="lidia"
            videoId="f+2,4"
            move={{
              input: 'f+2,4',
              hitLevel: ['h', 'h'],
              damage: '10, 23',
              startup: 'i12',
              onBlock: '-13',
              onHit: '+16a',
              tags: ['wall splat', 'punish'],
              description: "Long-range 12-frame punish that wall splats. In practice, 2,2 is usually better at 12 frames because of the CAT mixup. Save f+2,4 for situations where 2,2 won't reach or when you need the wall splat specifically.",
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="13 Frame: b+2,3">
          <MoveCard
            character="lidia"
            videoId="b+2,3"
            move={{
              input: 'b+2,3',
              hitLevel: ['h', 'm'],
              damage: '14, 14',
              startup: 'i13',
              onBlock: '-10',
              onHit: '+6',
              tags: ['punish'],
              description: "13-frame punish with a just-frame version that adds 3 damage (input 3 within a 3-frame window). Leaves you at +6 on hit. In practice, 2,2 still works here for the CAT mixup. Use b+2,3 when you want guaranteed damage without the stance commitment.",
              notes: ['Just frame version: input 3 precisely for 31 damage total'],
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="14 Frame: Political Storm">
          <MoveCard
            character="lidia"
            videoId="f+1+2,3,1+2"
            move={{
              input: 'f+1+2,3,1+2',
              hitLevel: ['h', 'm', 'm', 'm', 'm'],
              damage: '38',
              startup: 'i14',
              onBlock: '-15',
              onHit: '+20d',
              tags: ['heat engager', 'punish'],
              description: "Your 14-frame punish activates heat. This is massive. Landing this as a punish can single-handedly win you the round because Lidia in heat is one of the most dangerous states in the game. Power up the last hit with qcf+1+2 for extra damage.",
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="15 Frame: 3,2 or uf+4">
          <MoveCard
            character="lidia"
            move={{
              input: '3,2',
              hitLevel: ['h', 'h'],
              damage: '9, 10',
              startup: 'i15',
              onBlock: '-4',
              onHit: '+58a',
              tags: ['launcher'],
              description: "15-frame launcher. Both hits are high, so if you mistime the punish, you get launched yourself. The just-frame version adds 2 damage. Higher damage ceiling than hopkick but riskier on whiff. Serious Lidia players learn this as their 15-frame punish.",
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="Crouching Punishment">
        <p>
          Your crouching punishes are just as important. FC.df+2 at 12 frames is a heat engager
          that wall splats — it's one of the best crouching punishers in the game.
        </p>

        <Collapsible title="Full Crouching Punishment Table">
          <MoveCard
            character="lidia"
            videoId="ws4,2"
            move={{
              input: 'ws4,2',
              hitLevel: ['m', 'h'],
              damage: '13, 12',
              startup: 'i11',
              onBlock: '0',
              onHit: '+8',
              tags: ['punish'],
              description: '11-frame ws punish. Transitions to CAT at +8 on hit, same situation as 1,2,2. Good for punishing lows that leave you at -11 or worse.',
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="FC.df+2"
            move={{
              input: 'FC.df+2',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i12',
              onBlock: '-14',
              onHit: '+9a',
              tags: ['heat engager', 'wall splat', 'punish'],
              description: "12-frame heat engager from crouch. Wall splats. This is incredible — many lows are -12 on block, and punishing them with a heat engager changes the entire round. Always look for this near the wall.",
              notes: ['Be careful throwing this out in neutral — -14 on block'],
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="ws1,4"
            move={{
              input: 'ws1,4',
              hitLevel: ['m', 'm'],
              damage: '12, 20',
              startup: 'i13',
              onBlock: '-13',
              onHit: '+21a',
              tags: ['wall splat', 'punish'],
              description: '13-frame ws punish. Wall splats. Alternative: ws1,2 (m,h) transitions to CAT for continued pressure.',
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="ws3"
            move={{
              input: 'ws3',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i14',
              onBlock: '-12',
              onHit: '+32a',
              tags: ['punish'],
              description: '14-frame ws punish. Guarantees f,f+1+2 or d+2 on hit. A mini combo that does solid damage.',
            }}
            showVideo
          />

          <MoveCard
            character="lidia"
            videoId="ws2"
            move={{
              input: 'ws2',
              hitLevel: ['m'],
              damage: '15',
              startup: 'i15',
              onBlock: '-12',
              onHit: '+29a',
              tags: ['launcher', 'punish'],
              description: '15-frame ws launcher. Full combo opportunity. Great range makes it reliable even at slightly awkward distances.',
            }}
            showVideo
          />
        </Collapsible>

        <KeyConcept title="Punishment Priority" icon="🏆">
          <p>You don't need to memorize every punish frame perfectly. Simplify it:</p>
          <ul>
            <li><strong>Small punish window (10-11f):</strong> Use 1,2,2 or ws4,2 → CAT mixup</li>
            <li><strong>Medium punish window (12-13f):</strong> Standing: 2,2 → CAT mixup. Crouching: FC.df+2 (heat engager!)</li>
            <li><strong>Big punish window (14f):</strong> Political Storm → heat activation</li>
            <li><strong>Launch punish (15f):</strong> 3,2 for damage, uf+4 for safety</li>
          </ul>
          <p>
            The pattern is simple: small windows get stance mixups, medium gets heat or wall splats,
            big windows get launched. The most important punish to remember is <strong>Political Storm
            at 14 frames</strong> because it activates heat.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Whiff Punishment">
        <p>
          Whiff punishment is where Lidia truly shines. When you see the opponent throw out a move
          that misses, these are your go-to responses ranked by reward.
        </p>
        <ul>
          <li><strong>Political Storm (f+1+2,3,1+2)</strong> — Best whiff punisher. Huge range, activates heat. Hit confirm from the knee.</li>
          <li><strong>b+3,4,1+2 or b+3,4,qcf+1+2</strong> — Three guaranteed hits with good damage. The trick for the just-frame: press b+3, then d+4, then f+1+2.</li>
          <li><strong>3,2</strong> — Full launch for maximum damage. Riskier because both hits are high.</li>
          <li><strong>1,4</strong> — Fast and safe. Use when you're not confident the whiff window is large enough for something bigger.</li>
        </ul>

        <TipBox variant="tip" title="The Backdash Bait">
          Lidia's best neutral strategy at mid-range is to backdash and wait for whiffs. Political
          Storm's range makes it perfect for catching overextended opponents. Don't be afraid to
          spend the first few seconds of a round just moving and watching.
        </TipBox>
      </Section>
    </Chapter>
  )
}
