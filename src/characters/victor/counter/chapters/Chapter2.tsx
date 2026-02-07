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
      title="Victor's Offense"
      intro="Now you know what Victor wants. This chapter shows you what you'll actually face — the moves, strings, and stances you need to recognize. Everything is classified by how you learn it: knowledge (just know this), reactable (trainable), or reads (you guess)."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
    >
      <Section title="His Approach Tools">
        <p>
          Victor closes distance with a few key moves. You don't need to drill these — you just need to know what each one means for you.
        </p>

        <MoveCard character="victor" move={{
          input: 'WR2',
          hitLevel: ['m'],
          damage: '17',
          startup: '15~16',
          onBlock: '+2 (+5 IAI)',
          onHit: '+8 (+5 IAI)',
          tags: ['mid', 'plus on block'],
          description: 'Victor\'s primary approach. Goes into IAI stance. On block he\'s +5 in stance — don\'t press. On hit he\'s even more plus. This is what initiates most of his pressure.',
        }} showVideo videoId="f,f,F+2" />

        <MoveCard character="victor" move={{
          input: 'WR1+2',
          hitLevel: ['l'],
          damage: '17',
          startup: '22~23',
          onBlock: '-14',
          onHit: '+4 (IAI)',
          tags: ['low', 'homing'],
          description: 'Homing low. Can\'t be stepped. -14 on block but most characters can\'t launch it (pushback). Duck this on a read — it\'s his main low from range.',
        }} showVideo videoId="f,f,F+1+2" />

        <MoveCard character="victor" move={{
          input: 'f,f+2',
          hitLevel: ['m'],
          damage: '24',
          startup: '18~22',
          onBlock: '-16',
          onHit: 'KND',
          tags: ['mid'],
          description: 'Looks launch punishable at -16, but massive pushback makes it effectively safe. Just block it and take your turn. Don\'t try to launch.',
        }} showVideo videoId="f,F+2" />

        <KeyConcept title="What this means for you" icon="💡">
          <p>
            Block WR2, handle the stance situation (covered below). Duck WR1+2 on a hard read — it's homing so you can't step it. Block f,f+2 and take your turn. None of them require drilling — it's pure knowledge.
          </p>
        </KeyConcept>
      </Section>

      <Section title="Duckable Strings">
        <p>
          These are the strings where Victor has a <strong>high you can duck and launch</strong>. This is the "gun rule" and more.
        </p>

        <SubSection title="The Gun Strings">
          <MoveCard character="victor" move={{
            input: 'df4,2',
            hitLevel: ['m', 'h'],
            damage: '13, 22',
            startup: '13',
            onBlock: '-12 (stance)',
            onHit: '+5 (IAI)',
            tags: ['mid', 'high'],
            description: 'Mid into gunshot. The gunshot is ALWAYS a high. Duck the second hit and launch. If he only does df4 alone, it\'s -10 on block.',
            notes: ['Gun animation = always duck'],
          }} showVideo videoId="df+4,2" />

          <MoveCard character="victor" move={{
            input: '2,2,2',
            hitLevel: ['h', 'm', 'h'],
            damage: '10, 11, 20',
            startup: '10',
            onBlock: '-12 (IAI)',
            onHit: '+5 (IAI)',
            tags: ['high', 'mid', 'high'],
            description: 'Jab string. Last hit is a high (gunshot). Duck the third hit and launch. The safe version (2,2 alone) is -9 into IAI.',
            notes: ['2,2 is a safe option Victor can stop at'],
          }} showVideo videoId="2,2,2" />
        </SubSection>

        <SubSection title="Other Duckable Highs">
          <MoveCard character="victor" move={{
            input: 'b1,2',
            hitLevel: ['m', 'h'],
            damage: '14, 22',
            startup: '14',
            onBlock: '-13 (b1 alone)',
            onHit: 'KND',
            tags: ['mid', 'high'],
            description: 'Mid into high. b1 alone is -13, so Victors often finish the string to avoid punishment. Duck the second hit and launch.',
          }} showVideo videoId="b+1,2" />

          <MoveCard character="victor" move={{
            input: '4,4',
            hitLevel: ['h', 'h'],
            damage: '12, 20',
            startup: '11',
            onBlock: '-12 (stance)',
            onHit: '+5 (IAI)',
            tags: ['high', 'high', 'heat engager'],
            description: 'Both hits are high. The second hit is a heat engager. Duck the second hit and launch.',
          }} showVideo />

          <MoveCard character="victor" move={{
            input: 'df1,1,1',
            hitLevel: ['m', 'h', 'm'],
            damage: '12, 8, 18',
            startup: '13',
            onBlock: '-14',
            onHit: '+6',
            tags: ['mid', 'high'],
            description: 'Mid, high, mid. You can duck after the first hit to dodge the second. Harder to react to because of the mid extension, but the high is there.',
          }} showVideo videoId="df+1,1,1" />
        </SubSection>

        <TipBox variant="tip" title="The common thread">
          Nearly every Victor string has a duckable high somewhere. The gun is the easiest to spot. Train yourself to see these and Victor loses a massive chunk of his offense.
        </TipBox>
      </Section>

      <Section title="Punishable Moves">
        <p>
          Not every punishable move matters equally. These are the ones Victor players <em>actually use</em> and that you'll <em>actually block</em>.
        </p>

        <SubSection title="Launch Punishable (-15 or worse)">
          <MoveCard character="victor" move={{
            input: 'uf4',
            hitLevel: ['m'],
            damage: '25',
            startup: '22',
            onBlock: '-19',
            onHit: 'Launch',
            tags: ['mid', 'launcher'],
            description: 'His hopkick equivalent. -19 on block. Always launch punish.',
          }} showVideo videoId="uf+4" />

          <MoveCard character="victor" move={{
            input: 'u1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: '23',
            onBlock: '-20',
            onHit: 'KND',
            tags: ['mid'],
            description: 'The big lunging sword move. -20 on block. Launch punish. In heat this becomes -4 and unpunishable — just let him waste meter.',
            notes: ['In heat: -4, unpunishable'],
          }} showVideo videoId="u+1+2" />

          <MoveCard character="victor" move={{
            input: 'Heat Smash',
            hitLevel: ['l'],
            damage: '30',
            startup: '20',
            onBlock: '-15',
            onHit: 'KND',
            tags: ['low', 'heat'],
            description: 'A low heat smash — unusual. -15 on block. Block low and launch.',
          }} showVideo videoId="H.2+3" />
        </SubSection>

        <SubSection title="Standing Punishable (-10 to -14)">
          <table className={s.dataTable}>
            <tbody>
              <tr><td>4,3,2 / f2,2,2 / b3,1 / PRF 2,2,1+2</td><td className={s.frameRed}>-13</td></tr>
              <tr><td>1,2,1 / 1,1,2 / 2,2 / f4,2</td><td className={s.frameRed}>-12</td></tr>
              <tr><td>f2,2,1 / f2</td><td className={s.frameAmber}>-11</td></tr>
              <tr><td>4,3 / f4 (pushback)</td><td className={s.frameMuted}>-10</td></tr>
            </tbody>
          </table>
        </SubSection>

        <SubSection title="His Lows Are Terrible">
          <p>
            Nearly every Victor low is launch punishable on block. If you duck a low, you almost always get a full combo.
          </p>
          <table className={s.dataTable}>
            <tbody>
              <tr><td>db4 (snake edge)</td><td className={s.frameRed}>-26, launch</td></tr>
              <tr><td>d1,2 (low, high)</td><td className={s.frameRed}>-17, launch</td></tr>
              <tr><td>FC d1+2 (full crouch)</td><td className={s.frameRed}>-23, launch</td></tr>
              <tr><td>IAI d1+2 (stance low)</td><td className={s.frameRed}>-29, launch</td></tr>
              <tr><td>d3 / d4</td><td className={s.frameMuted}>-13</td></tr>
              <tr><td>PRF 1 (perfumer low)</td><td className={s.frameMuted}>-12</td></tr>
            </tbody>
          </table>
        </SubSection>
      </Section>

      <Section title="IAI Stance (Hand on Sword)">
        <p>
          IAI is Victor's primary stance. He enters it from many moves. The most important thing is understanding <strong>what you can do based on how he got there</strong>.
        </p>

        <KeyConcept title="The Block/Hit Distinction" icon="⚡">
          <p>
            <strong>If you BLOCKED the move that transitioned to IAI:</strong> You can usually challenge. His best transition on block is +5 (WR2), where you should respect. Most other blocked transitions leave him at -4 to -12 — you can challenge with a fast mid, step left, or even launch.
          </p>
          <p>
            <strong>If you GOT HIT:</strong> He's plus. Respect the stance and wait for his option. Don't press buttons.
          </p>
        </KeyConcept>

        <Collapsible title="IAI Transition Frame Data">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0 0 12px' }}>On block values — these tell you what you can do:</p>
          <div className={s.transitionList}>
            <div className={`${s.transitionItem} ${s.launch}`}>
              <span className={s.transitionLabel}>LAUNCH HIM</span>
              <span className={s.transitionMoves}>f4,2 (-12 stance) / IAI 1 (-12) / uf1,1 (-10 stance) / IAI 4 (-13)</span>
            </div>
            <div className={`${s.transitionItem} ${s.challenge}`}>
              <span className={s.transitionLabel}>CHALLENGE</span>
              <span className={s.transitionMoves}>2,1 (-4) / df4,2 (-3) / db1,1 (-5) / b1 (-5)</span>
            </div>
            <div className={`${s.transitionItem} ${s.respect}`}>
              <span className={s.transitionLabel}>RESPECT</span>
              <span className={s.transitionMoves}>WR2 (+5) / PRF 2,2 on hit (+5) / db1+2 (+6 in heat)</span>
            </div>
          </div>
        </Collapsible>

        <SubSection title="Key IAI Options">
          <MoveCard character="victor" move={{
            input: 'IAI 1',
            hitLevel: ['m'],
            damage: '18',
            startup: '13',
            onBlock: '-12',
            onHit: '+1 (IAI)',
            tags: ['mid'],
            description: 'His fastest move from IAI. Leads into extensions (1,1 wall splat, 1,2 wall splat, 1,1+2 homing high). On block the extensions are all punishable.',
          }} showVideo videoId="IAI.1" />

          <MoveCard character="victor" move={{
            input: 'IAI d2',
            hitLevel: ['m'],
            damage: '22',
            startup: '23',
            onBlock: '+4 (+8 in heat)',
            onHit: 'Launch',
            tags: ['mid', 'plus on block'],
            description: 'Plus on block mid. In heat it\'s +8 — very scary. Tracks well both directions. You mostly just have to block this and hold the plus frames.',
          }} showVideo videoId="IAI.d+2" />

          <MoveCard character="victor" move={{
            input: 'IAI d1+2',
            hitLevel: ['l'],
            damage: '24',
            startup: '25',
            onBlock: '-29',
            onHit: 'KND',
            tags: ['low', 'homing'],
            description: 'His homing low from IAI. Catches step left. -29 on block = free launch. The exception to the "step left" rule.',
          }} showVideo videoId="IAI.d+1+2" />
        </SubSection>

        <TipBox variant="tip" title="The practical summary">
          At minus: step left and punish what whiffs. Watch for d1+2 (homing low) — if you block it, launch it. At plus (WR2 on block, etc.): block and react. Don't try to challenge +5 with anything slow.
        </TipBox>
      </Section>

      <Section title="Perfumer Stance (Knives Out)">
        <p>
          Perfumer is simpler than IAI because the rule is nearly absolute:
        </p>

        <div className={`${s.decisionBlock} ${s.positive}`}>
          <div className={s.decisionLabel}>You BLOCKED the transition</div>
          <div className={s.decisionContent}>
            <p>LAUNCH HIM. Always. The best Perfumer transition on block is -4. His fastest Perfumer option is 12 frames. With a 15f launcher, there is <strong>literally nothing he can do</strong>. Hopkick every time.</p>
          </div>
        </div>

        <div className={`${s.decisionBlock} ${s.negative}`}>
          <div className={s.decisionLabel}>You GOT HIT</div>
          <div className={s.decisionContent}>
            <p>True 50/50. He has:</p>
            <ul>
              <li><strong>PRF 1</strong> — 19f low, -12 on block, +4 on hit</li>
              <li><strong>PRF 3</strong> — 15f mid knee, heat engager</li>
              <li><strong>PRF 2,2</strong> — Mid string into IAI, -4 on block</li>
              <li><strong>PRF 1+2</strong> — Linear mid, +6 into IAI</li>
            </ul>
            <p>This is a guess. Block the low, punish it. Block the knee, take your turn.</p>
          </div>
        </div>
      </Section>

      <Section title="Reads and 50/50s">
        <p>
          Some parts of the Victor matchup are pure reads. No amount of training makes these reactable. Know what they are and the correct response to each side.
        </p>
        <div className={s.phaseList}>
          <div className={s.readCard}>
            <div className={s.readTitle}>Perfumer on hit</div>
            <p className={s.readDesc}>Low (PRF 1) or mid (PRF 3). True 50/50. If you block the low, punish. If you block the knee, take your turn.</p>
          </div>
          <div className={s.readCard}>
            <div className={s.readTitle}>Wall pressure</div>
            <p className={s.readDesc}>Victor's wall mix is extremely strong. Heat into plus frames, mid/low/throw mix. Armor on a read. The goal is to not be at the wall.</p>
          </div>
          <div className={s.readCard}>
            <div className={s.readTitle}>IAI d2 in heat (+8)</div>
            <p className={s.readDesc}>Very plus, good tracking. Be patient and don't panic-press. His heat runs out.</p>
          </div>
          <div className={s.readCard}>
            <div className={s.readTitle}>u1+2 in heat</div>
            <p className={s.readDesc}>Becomes -4 on block with huge pushback. Unpunishable. Just block it and let him waste his heat meter.</p>
          </div>
        </div>
      </Section>
    </Chapter>
  )
}
