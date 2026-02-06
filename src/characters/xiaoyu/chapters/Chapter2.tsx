import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard, 
  TipBox,
  PracticeBox,
  KeyConcept
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter2({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={2}
      title="Your First Buttons"
      intro="Before you touch a stance, you need a foundation. Xiaoyu's neutral pokes are fast, safe, and set up everything else she does. Master these and you can win rounds without ever entering AOP."
      onPrevious={() => goToChapter(1)}
      onNext={() => goToChapter(3)}
      nextLabel="Learn Counter Hits & Lows"
    >
      <Section title="The Poking Foundation">
        <p>
          Every Xiaoyu expert recommends the same thing for beginners: <strong>focus on pokes first</strong>. 
          Her neutral game is surprisingly strong on its own. Pokes chip health, create frame advantages, 
          frustrate opponents into making mistakes, and naturally transition into her stances.
        </p>

        <p>
          The moves in this chapter are your bread and butter. They're what you'll use 70% of the time, 
          even at the highest level. Learn them well.
        </p>
      </Section>

      <Section title="Essential Mid Pokes">

        <SubSection title="df+1 — Your Go-To Mid Check">
          <MoveCard character="xiaoyu"
            move={{
              input: 'df+1',
              hitLevel: ['m'],
              damage: '13',
              startup: 'i14',
              onBlock: '-2',
              onHit: '+9',
              tags: ['Mid', 'High Crush'],
              description: 'Your most important poke. A safe i14 mid that high-crushes and transitions into BT. This is the move you throw out to check opponents, fish for counter-hit setups, and start your offense. Hold DF to stay front-facing.',
              notes: [
                'Transitions to BT on hit/block (unless you hold DF to stay neutral)',
                '+7 on hit if you stay front-facing with DF+1',
                'High crushes frames 6-14 — excellent for ducking jab checks',
                'Slightly vulnerable to sidestep left'
              ]
            }}
            showVideo
          />
          <p>
            After <code>df+1</code> hits and you're in BT, your opponent has to respect your options. 
            You can sidestep (BT sidestep is superior), do <code>BT.d+3</code> for a low, <code>BT.4</code> if they 
            whiff, or retreat with <code>BT.db</code> to bait a whiff. On block at -2, you're barely minus — 
            they can't really punish you, and if they try a high, your BT naturally evades it.
          </p>
        </SubSection>

        <SubSection title="f+2,1 — The Jailing Mid-High">
          <MoveCard character="xiaoyu"
            move={{
              input: 'f+2,1',
              hitLevel: ['m', 'h'],
              damage: '12, 14',
              startup: 'i16',
              onBlock: '-6',
              onHit: '+5',
              onCH: '+7',
              tags: ['Mid', 'Confirmable'],
              description: 'One of Xiaoyu\'s best safe strings. A mid-high that jails (opponent can\'t duck the second hit after blocking the first). At -6 on block, completely safe. Transitions to HYP by holding back.',
              notes: [
                'Jails on block — the high is guaranteed if the mid is blocked',
                'Decent tracking on both sides',
                'Hold B after to enter Hypnotist (+0 on block in HYP)',
                'Has extensions: f+2,1,4 (unsafe mid launcher) and H.f+2,1,2 (heat only, +6 on block)',
                '26 damage total — solid poke damage'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="d+4 — Quick Mid Check">
          <MoveCard character="xiaoyu"
            videoId="df+4"
            move={{
              input: 'df+4',
              hitLevel: ['m'],
              damage: '12',
              startup: 'i12',
              onBlock: '-4',
              onHit: '+7',
              tags: ['Mid'],
              description: 'A fast i12 mid poke. Not flashy but useful for quick checks when you need a mid that\'s faster than df+1. At -4 on block, completely safe.',
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="Jab Strings">

        <SubSection title="1 Series — The Swiss Army Knife">
          <MoveCard character="xiaoyu"
            move={{
              input: '1',
              hitLevel: ['h'],
              damage: '5',
              startup: 'i10',
              onBlock: '+1',
              onHit: '+8',
              tags: ['High', 'Plus on Block'],
              description: 'Your i10 jab. Plus on block (+1) and very plus on hit (+8). From here you have access to several extensions that create different situations.',
              notes: [
                '1,2 — jailing high-high string, your 10f punisher',
                '1,2,1 — safe knockdown mid (wall splats!). Delayable and catches people pressing after 1,2',
                '1,d+2 — transitions to BT. Hold D to stay neutral. Hold B to enter HYP',
                '1,d+2,1+2 — launcher extension for people pressing after 1,d+2 (punishable on block)',
              ]
            }}
            showVideo
          />
          <p>
            The <code>1</code> jab is your conversation starter. At +1 on block, you can frame-trap opponents 
            with <code>4</code> (i11 magic four) to check if they press. At +8 on hit, you have time for 
            almost anything.
          </p>

          <KeyConcept title="The 1,d+2 Decision Tree" icon="🌳">
            <p>After <code>1,d+2</code> you have three stance options:</p>
            <ul>
              <li><strong>Let go (BT)</strong> — Enter Rain Dance for mixups (+8 on hit)</li>
              <li><strong>Hold D (neutral)</strong> — Stay front-facing (+7 on hit)</li>
              <li><strong>Hold B (HYP)</strong> — Enter Hypnotist (+9 on hit)</li>
            </ul>
            <p>
              On block (-3), the BT transition is safest. Don't go into HYP on block — 
              fast moves can interrupt you. The <code>1,d+2</code> is very delayable, which 
              helps you realign with opponents and creates counter-hit opportunities.
            </p>
          </KeyConcept>
        </SubSection>
      </Section>

      <Section title="Approach Tools">

        <SubSection title="f,f+3 — The Raccoon Swing">
          <MoveCard character="xiaoyu"
            videoId="f,F+3"
            move={{
              input: 'f,f+3',
              hitLevel: ['m'],
              damage: '12',
              startup: 'i14~15',
              onBlock: '-5',
              onHit: '+6',
              onCH: '+12g',
              tags: ['Mid'],
              description: 'Long-range mid poke that transitions into BT. One of your best approach tools thanks to its speed, range, and tracking (double-tap forward inputs track naturally). On counter hit, forces the opponent into your BT mixup.',
              notes: [
                'Delay the second f input to extend range',
                'Transitions to BT on hit and block',
                'At tip range, BT.db creates space for whiff punishment',
                'On CH (+12g): BT.2,2,1 and BT.1 are fast enough to interrupt opponents'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="f,f,F+3 — While Running 3">
          <MoveCard character="xiaoyu"
            videoId="f,f,F+3"
            move={{
              input: 'f,f,F+3',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i23~30',
              onBlock: '+7',
              onHit: '+29a',
              tags: ['Mid', 'Plus on Block', 'Launcher'],
              description: 'Plus on block running launcher that transitions into AOP. This is your main way to force an AOP mixup. Covers huge range. The downside: it\'s linear and predictable if overused — opponents can poke you out of the run.',
              notes: [
                '+7 on block in AOP — huge advantage',
                'On hit: full launch combo',
                'After block: AOP.2,1 beats mashers and power crush',
                'Linear — don\'t run at opponents who are ready'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="f,f+4 — Hypnotist Entry">
          <MoveCard character="xiaoyu"
            videoId="f,F+4"
            move={{
              input: 'f,f+4',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i20~23',
              onBlock: '+9',
              onHit: '+13g c',
              onCH: '+58a',
              tags: ['High', 'Plus on Block'],
              description: 'High attack that automatically transitions into Hypnotist. Plus on both block (+9) and hit (+13g). On counter hit, it launches for massive damage. This is your main tool for initiating HYP pressure, especially against defensive opponents.',
              notes: [
                'Transitions to HYP on hit AND block',
                'On hit: forces opponent into the HYP 50/50',
                'On block: still very plus — HYP options are dangerous',
                'On CH: full launcher, one of Xiaoyu\'s most damaging combos',
                'High — can be ducked and launched, so don\'t overuse it'
              ]
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="Safe Pressure Mids">

        <SubSection title="3+4 — The All-Purpose Mid">
          <MoveCard character="xiaoyu"
            move={{
              input: '3+4',
              hitLevel: ['m'],
              damage: '23',
              startup: 'i23',
              onBlock: '-1c',
              onHit: '+3c',
              onCH: '+19a',
              tags: ['Mid', 'CH Launcher'],
              description: 'Safe counter-hit launching mid. At -1 on block, Xiaoyu doesn\'t lose her turn. On hit she\'s +3 in a crouching state. On counter hit, full launcher. Can transition to AOP by holding D.',
              notes: [
                '-1 on block — you keep your turn',
                'S2 change: recovers standing, not full crouch',
                'Hold D to enter AOP (0 on block, +4c on hit)',
                'Good for baiting opponents into pressing after block',
                'Low crushes from frame 10'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="u+4 — The Versatile Kick">
          <MoveCard character="xiaoyu"
            videoId="uf+4"
            move={{
              input: 'uf+4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i23~26',
              onBlock: '-7',
              onHit: '+4c',
              onCH: '+24a',
              tags: ['Mid', 'CH Launcher'],
              description: 'Safe keepout mid that spikes on counter hit. Transitions to crouch with D, to AOP with d+1+2, or stays standing. A great tool for controlling space at range 2.',
              notes: [
                'Low crushes from frame 9',
                'Can hold D to go to crouch, d+1+2 to enter AOP',
                'Guaranteed ub+4 follow-up on CH',
              ]
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="The Panic Button">

        <MoveCard character="xiaoyu"
          move={{
            input: 'b+1',
            hitLevel: ['m'],
            damage: '10',
            startup: 'i8~13',
            onBlock: '-12',
            onHit: '+1~+6',
            tags: ['Mid'],
            description: 'The second fastest move in the game at 8 frames. A mid that interrupts nearly anything. When opponents pressure you and you need to escape, this is your panic button. On hit, Xiaoyu enters BT at +1. Hold B+1 to stay front-facing.',
            notes: [
              'i8 startup — faster than any jab in the game (tied with Yoshi Flash)',
              '-12 on block — punishable, so don\'t throw it out randomly',
              'Use it to interrupt opponents who are pressuring you',
              'Limits many stance options from opponents (e.g., interrupts Reina\'s f,f+2,f options)',
              'On hit: +1 in BT (hold B+1 for -1~+4 in neutral)'
            ]
          }}
          showVideo
        />

        <TipBox variant="tip" title="When To Use b+1">
          Save <code>b+1</code> for moments when you're being pressured and need to steal your turn back. 
          It's not a poke — it's an emergency interrupt. If your opponent keeps pushing buttons after their 
          moves, <code>b+1</code> will catch them. But at -12 on block, you'll eat a punish if they read it.
        </TipBox>
      </Section>

      <Section title="Safe Launchers Worth Knowing">

        <SubSection title="1+2 — The Safe Launcher">
          <MoveCard character="xiaoyu"
            move={{
              input: '1+2',
              hitLevel: ['m'],
              damage: '24',
              startup: 'i20~21',
              onBlock: '-7',
              onHit: '+20a',
              tags: ['Mid', 'Launcher'],
              description: 'A safe mid launcher at -7. Slow and linear, but the safety makes it invaluable. Mix this with ss4 from sidestep — both have similar speed and the opponent must guess mid or low.',
              notes: [
                '-7 on block — completely safe',
                'Linear — can be sidestepped',
                'Great from sidestep as a mixup with ss4',
                'On hit: guaranteed 2+4 follow-up or full f,f+3 combo pickup'
              ]
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="3 — The Fast Launcher">
          <MoveCard character="xiaoyu"
            move={{
              input: '3',
              hitLevel: ['h'],
              damage: '17',
              startup: 'i14',
              onBlock: '-11',
              onHit: '+22a',
              tags: ['High', 'Launcher', 'Whiff Punish'],
              description: 'Your fastest one-button launcher at i14. High but has decent range. One of the best whiff punishers in the game. At -11 on block, it\'s technically punishable but many opponents aren\'t ready.',
              notes: [
                'Can be performed out of sidestep — huge buff for evasion into launch',
                'Primary whiff punisher alongside b+1+2 and ub+3',
                '-11 on block — some characters can punish with i11 moves',
                'High — be careful against crouching opponents'
              ]
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="f+1+2 — Your 12f Punisher">
        <MoveCard character="xiaoyu"
          move={{
            input: 'f+1+2',
            hitLevel: ['m'],
            damage: '30',
            startup: 'i12',
            onBlock: '-16',
            onHit: '+15d',
            tags: ['Mid', 'Punish'],
            description: 'Your 12-frame mid punisher. Knocks down and wall splats. Extremely unsafe on block (-16) so only use it as a guaranteed punish, never as a poke.',
            notes: [
              '12f standing punisher — knocks down',
              'Wall splats for additional damage',
              'Also used to break walls in combos',
              '-16 on block — launch punishable, never throw this out raw'
            ]
          }}
          showVideo
        />
      </Section>

      <Section title="Putting It Together">
        <p>
          Your basic neutral game loop looks like this: <code>df+1</code> to check with mids, <code>1</code> series 
          for jab pressure and transitions, <code>f+2,1</code> for a safe string with HYP access, <code>f,f+3</code> to 
          approach, and <code>3</code> or <code>b+1+2</code> to punish whiffs.
        </p>

        <PracticeBox
          title="Neutral Poke Drill"
          setup="Set opponent to Guard All. Practice these moves until you can do them cleanly without thinking about the input."
          tasks={[
            { id: 'xiao-df1', text: 'df+1 into BT, then BT.db to retreat — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-1d2', text: '1,d+2 then hold D to stay neutral — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-1d2-bt', text: '1,d+2 into BT (let go) — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-f21', text: 'f+2,1 then hold B for HYP transition — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-ff3', text: 'f,f+3 at max range, then BT.db retreat — 10 times', type: 'counter', target: 10 },
          ]}
        />

        <TipBox variant="tip" title="The Poking Mindset">
          You don't need to finish strings. Poking is about throwing out the first one or two hits of a string, 
          then watching what the opponent does. If they press after your <code>df+1</code>, you can counter-hit 
          them. If they freeze, you can go for a low or a throw. If they step, you track them. The poke is 
          the question — their response is the answer.
        </TipBox>
      </Section>
    </Chapter>
  )
}
