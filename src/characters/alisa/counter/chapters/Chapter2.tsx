import { Chapter, Section, SubSection } from '../../../../components/guide'
import { MoveCard } from '../../../../components/ui/MoveCard'
import { KeyConcept } from '../../../../components/ui/KeyConcept'
import { TipBox } from '../../../../components/ui/TipBox'
import { Collapsible } from '../../../../components/ui/Collapsible'
import s from './counter-styles.module.css'

interface ChapterProps {
  characterSlug: string
  chapterId: number
  goToChapter: (id: number) => void
}

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="What You'll Actually Face"
      intro="This chapter covers the moves and strings you'll see in a real match — not Alisa's full movelist. Everything is classified by what you need to do: duck it, punish it, or hold it."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
    >
      <Section title="Her Approach">
        <p>
          At range, Alisa has three main approach tools. All of them are linear — sidewalk then block on her timing is the safe answer.
        </p>

        <MoveCard character="alisa" move={{
          input: 'f1+2',
          hitLevel: ['m'],
          damage: '22',
          startup: '16',
          onBlock: '-12',
          onHit: 'KND',
          tags: ['mid', 'tracking'],
          description: 'Her main approaching mid. Good tracking. -12 on block — punish it every time. On counter hit she gets a guaranteed heat engager (3,2) for 49 total damage. Don\'t throw slow keepout moves at her carelessly.',
        }} showVideo videoId="f+1+2" />

        <MoveCard character="alisa" move={{
          input: 'WR2',
          hitLevel: ['h'],
          damage: '25',
          startup: '15~18',
          onBlock: '+5 (DES)',
          onHit: '+5 (DES)',
          tags: ['high', 'plus on block'],
          description: 'Running high that transitions to chainsaws at +5. Super linear — steppable to both sides. It\'s a high, so you can duck and launch on a read. If you misread and she did f1+2 instead, you eat a mid, but it\'s only 22 damage.',
        }} showVideo videoId="f,f,F+2" />

        <MoveCard character="alisa" move={{
          input: 'd3',
          hitLevel: ['l'],
          damage: '17',
          startup: '23',
          onBlock: '-15 (backup)',
          onHit: '+8 (backup)',
          tags: ['low', 'long range'],
          description: 'Long-range low into backup stance. Technically -10 displayed, but she\'s in stance — effectively -15. Launch punish if you block it. Reactable at longer ranges (23f). On hit at tip range, the follow-up (backup 1) is guaranteed for ~50 total damage.',
        }} showVideo videoId="d+3" />

        <KeyConcept title="Approaching Alisa" icon="🚶">
          <p>
            Her uf2 is a long-range homing high heat engager that checks your approach. If she's spamming it, duck it and launch. Otherwise, <strong>dash block</strong> — move forward in short bursts, blocking between dashes. This baits out her keepout tools and lets you punish whiffs.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The f2 Conditioning Tool">
        <p>
          This is Alisa's most important move and the one you need to understand the most. Good Alisa players build their entire neutral around it.
        </p>

        <MoveCard character="alisa" move={{
          input: 'f2',
          hitLevel: ['m'],
          damage: '15',
          startup: '15',
          onBlock: '-4',
          onHit: '+7',
          tags: ['mid'],
          description: 'The single hit alone is -4, safe. She uses this to probe — do f2, then watch your response. The danger isn\'t this move. The danger is what comes after it.',
          notes: ['f2 alone = safe probe', 'f2,1 = DES transition (-10)', 'f2,3 = DES transition (-10)'],
        }} showVideo videoId="f+2" />

        <p>
          After f2, Alisa is watching you. If you press a button, she can step and launch your whiff. If you stand still, she transitions to DES next time. If you step, she uses a tracking move. The answer: <strong>block f2, take your turn with a fast mid</strong>. She's -4. You act. Don't overcommit — a quick 12-13f mid is enough.
        </p>

        <TipBox variant="warning" title="The f2,1 transition in heat">
          In heat, f2,1 becomes a heat dash launcher — much riskier to interrupt because the second hit launches on counter hit. Be more conservative in heat. Block the string and take your turn after.
        </TipBox>
      </Section>

      <Section title="Strings You Need to Duck">
        <p>
          These are the strings with <strong>duckable highs</strong> that you'll see regularly. Each one has a mix — a mid alternative — so you can't always duck. The skill is recognizing which extension she chose.
        </p>

        <SubSection title="3,2 vs 3,f2">
          <MoveCard character="alisa" move={{
            input: '3,2',
            hitLevel: ['m', 'h'],
            damage: '17, 21',
            startup: '14',
            onBlock: '-2 (DES)',
            onHit: '+9 (DES)',
            tags: ['mid', 'high', 'heat engager'],
            description: 'Mid, high heat engager into DES. The second hit is a HIGH — duck it and launch. This is one of her main heat engagers. You\'ll see it constantly.',
          }} showVideo videoId="3,2" />

          <MoveCard character="alisa" move={{
            input: '3,f2',
            hitLevel: ['m', 'm'],
            damage: '17, 15',
            startup: '14',
            onBlock: '-12 (DES)',
            onHit: '+3 (DES)',
            tags: ['mid', 'mid'],
            description: 'Mid, mid into DES. The mix — if you duck the second hit expecting 3,2, this catches you. But it\'s -12 on block. If you just stand and block, you punish it.',
          }} showVideo videoId="3,f+2" />

          <KeyConcept title="The practical answer" icon="💡">
            <p>
              If you're confident: duck the second hit and launch 3,2. If you're not: just block. 3,2 is only -2 into DES (annoying but manageable), and 3,f2 is -12 (free punish). Blocking both is fine. Ducking 3,2 is a bonus.
            </p>
          </KeyConcept>
        </SubSection>

        <SubSection title="df1,1,2 vs df1,4">
          <MoveCard character="alisa" move={{
            input: 'df1,1,2',
            hitLevel: ['m', 'h', 'h'],
            damage: '12, 8, 18',
            startup: '13',
            onBlock: '+6 (DES)',
            onHit: '+8 (DES)',
            tags: ['mid', 'high', 'high'],
            description: 'Mid, high, high into DES at +6. Probably her strongest string. Duck the second hit and launch. The visual cue: her body rotates 360 degrees during the full string. See the spin = duck.',
          }} showVideo videoId="df+1,1,2" />

          <MoveCard character="alisa" move={{
            input: 'df1,4',
            hitLevel: ['m', 'm'],
            damage: '12, 14',
            startup: '13',
            onBlock: '-11',
            onHit: '+5',
            tags: ['mid', 'mid'],
            description: 'The mid-mid mix. If you duck expecting df1,1,2 you eat this. But it\'s -11 on block. The animations look different — df1,4 does NOT have the 360 spin.',
            notes: ['No 360 spin = block and punish', '360 spin = duck and launch'],
          }} showVideo videoId="df+1,4" />

          <TipBox variant="tip" title="The visual cue">
            This is one of the most trainable distinctions in the Alisa matchup. The full string (df1,1,2) has a clear spinning animation. The short mid-mid (df1,4) doesn't spin. If you see her body rotate — duck. If you don't — block and punish at -11. This is drillable.
          </TipBox>
        </SubSection>

        <SubSection title="Other Duckable Strings">
          <Collapsible title="More Duckable Highs" icon="⬇️">
            <table className={s.dataTable}>
              <tbody>
                <tr><td>1,2,2</td><td className={s.frameGreen}>3rd hit high, duck and launch</td></tr>
                <tr><td>ws1,2</td><td className={s.frameGreen}>2nd hit high, duck and launch</td></tr>
                <tr><td>b2,4 (vs b2,1)</td><td className={s.frameGreen}>7f fuzzy: high first, then mid. Just block.</td></tr>
                <tr><td>1,2 extensions</td><td className={s.frameGreen}>1,2,2 = high. 1,2,d2 = low. Duck beats both.</td></tr>
              </tbody>
            </table>
          </Collapsible>
        </SubSection>
      </Section>

      <Section title="Moves You Must Punish">
        <p>
          Not every punishable move matters. These are the ones Alisa players <em>actually use</em> that you <em>will</em> block.
        </p>

        <SubSection title="Launch Punishable">
          <table className={s.dataTable}>
            <tbody>
              <tr><td>d3 (into backup stance)</td><td className={s.frameRed}>-15 effective</td></tr>
              <tr><td>b1,1+2</td><td className={s.frameRed}>-16</td></tr>
              <tr><td>b4,4 (without stance cancel)</td><td className={s.frameRed}>-37</td></tr>
              <tr><td>uf3</td><td className={s.frameRed}>-52</td></tr>
              <tr><td>DES f1+2,1+2</td><td className={s.frameRed}>-53</td></tr>
            </tbody>
          </table>
        </SubSection>

        <SubSection title="Standing Punishable (-10 to -13)">
          <table className={s.dataTable}>
            <tbody>
              <tr><td>f1+2 / DES f2,1 / DES b2</td><td className={s.frameRed}>-12</td></tr>
              <tr><td>b1+2 (power crush) / DES f2,1,2</td><td className={s.frameRed}>-13</td></tr>
              <tr><td>df1,4 / b4,3</td><td className={s.frameAmber}>-11</td></tr>
              <tr><td>f2,1 / f2,3 / ff3,4 / ws1,2,3</td><td className={s.frameMuted}>-10</td></tr>
            </tbody>
          </table>
        </SubSection>

        <SubSection title="Safe but Minus — Take Your Turn">
          <table className={s.dataTable}>
            <tbody>
              <tr><td>uf2 (homing high)</td><td className={s.frameMuted}>-2</td></tr>
              <tr><td>3,2 (into DES)</td><td className={s.frameMuted}>-2</td></tr>
              <tr><td>1,1 (into DES, pushback)</td><td className={s.frameMuted}>-3</td></tr>
              <tr><td>f2 alone</td><td className={s.frameMuted}>-4</td></tr>
              <tr><td>b1 (leaves Alisa crouching)</td><td className={s.frameMuted}>-5</td></tr>
            </tbody>
          </table>
        </SubSection>
      </Section>

      <Section title="Backup Stance (from d3)">
        <p>
          When Alisa does d3 and waits, she enters backup stance. This looks scarier than it is.
        </p>

        <KeyConcept title="Fuzzy Guard Beats It" icon="🛡️">
          <p>
            Her highs from backup are 11 frames. Her mids are 18+ frames. That's a <strong>7-frame fuzzy window</strong>. Quickly tap down-back (dodge the highs), then immediately hold back (block the mids). The only thing this doesn't cover is the slow unblockable (backup 1+2) — react to that and duck it. If she goes to full crouch instead, your ws4 interrupts everything she can do from there.
          </p>
        </KeyConcept>

        <TipBox variant="tip" title="Or just launch d3">
          If you blocked d3, she's -15 in stance. Launch her. Don't even worry about the backup options. The fact that she entered backup doesn't protect her from the punishment for d3 itself.
        </TipBox>
      </Section>

      <Section title="b3+4 Gimmick">
        <p>
          Alisa's b3+4 is -7 on block. Seems fine. But if she does it twice (b3+4, 3+4), she ends up +5 in your face. The answer is simple: <strong>jab her out of the air</strong> after the first b3+4. You get a float combo. Don't respect the second one.
        </p>
        <p>
          Similarly, b4,4 is -37 by itself, but she can cancel into boot/chainsaw stance. If she does the full string and cancels, find your character's option select. Many characters have a mid that launches b3+4 and floats the b3+4,3+4 follow-up.
        </p>
      </Section>

      <Section title="Heat Changes">
        <KeyConcept title="What Gets Scary in Heat" icon="🔥">
          <ul>
            <li><strong>Massive chip damage</strong> in DES. DES f2,1,2 heat dash does 31 chip — second highest in the game.</li>
            <li><strong>uf2 and f2,1 become safe heat dash launchers.</strong> Way riskier to whiff or move around needlessly.</li>
            <li><strong>f2,1 transition becomes safer</strong> — interrupting it risks getting launched by the heat dash.</li>
            <li><strong>DES f2,1,2 becomes a launcher</strong> in heat. Sidewalk left still works.</li>
          </ul>
          <p>
            In heat, <strong>take more risks to interrupt chainsaws</strong>. The chip damage from letting her loop DES pressure will kill you. This is the one time ducking or using armor is higher value — you can't just stand block through heat chainsaw chip.
          </p>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
