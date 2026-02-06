import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard, 
  TipBox,
  PracticeBox,
  KeyConcept,
  ComboCard
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter6({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={6}
      title="First Combos"
      intro="Xiaoyu's combo damage got significantly buffed in Tekken 8. Learning her key launchers and optimal routes will transform your damage output. This chapter covers everything from beginner-friendly combos to optimal wall carry."
      onPrevious={() => goToChapter(5)}
      onNext={() => goToChapter(7)}
      nextLabel="Learn Hypnotist & Heat"
    >
      <Section title="Your Launchers">
        <p>
          Xiaoyu has many launchers across her stances. Here are the ones you'll use most often, organized 
          by situation rather than by frame data.
        </p>

        <SubSection title="Standing Launchers">
          <MoveCard character="xiaoyu"
            move={{
              input: '3',
              hitLevel: ['h'],
              damage: '17',
              startup: 'i14',
              onBlock: '-11',
              onHit: '+22a',
              tags: ['High', 'Launcher', 'Whiff Punish'],
              description: 'Your fastest standing launcher (i14). High, but excellent range. Primary whiff punisher. Can be done from sidestep for evasion into launch.',
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            move={{
              input: 'b+1+2',
              hitLevel: ['m', 'm'],
              damage: '8, 12',
              startup: 'i15~16',
              onBlock: '-13',
              onHit: '+29a',
              tags: ['Mid', 'Launcher', 'Whiff Punish'],
              description: 'Your i15 launch punisher and primary whiff punisher. Tracks both sides with great range. Only the second hit needs to connect for a launch. -13 on block.',
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            move={{
              input: 'ub+3',
              hitLevel: ['m'],
              damage: '23',
              startup: 'i20~21',
              onBlock: '-13',
              onHit: '+36a',
              tags: ['Mid', 'Launcher', 'Whiff Punish'],
              description: 'Your most damaging launcher with incredible range. Recovers in AOP. At i20, it\'s slow but the range makes it your go-to for punishing big whiffs from far away. Also your WS punisher at i20.',
              notes: ['Recovers in AOP', 'Low crushes from frame 18', 'Tornado move — can be used in combos']
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            move={{
              input: '1+2',
              hitLevel: ['m'],
              damage: '24',
              startup: 'i20~21',
              onBlock: '-7',
              onHit: '+20a',
              tags: ['Mid', 'Launcher'],
              description: 'Safe mid launcher at -7 on block. Slow and linear, but the safety makes it worth using. Mix from sidestep with ss4.',
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            move={{
              input: 'uf+3',
              hitLevel: ['m'],
              damage: '13',
              startup: 'i16~17',
              onBlock: '-13',
              onHit: '+29a',
              tags: ['Mid', 'Launcher'],
              description: 'Hop kick. Your i16 launcher and fastest WS launcher. Low crushes. -13 on block — punishable but standard for a hop kick.',
            }}
            showVideo
          />
        </SubSection>

        <SubSection title="Stance Launchers">
          <MoveCard character="xiaoyu"
            videoId="AOP.d+1+2"
            move={{
              input: 'AOP d+1+2',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i26',
              onBlock: '-8',
              onHit: '+42a',
              tags: ['Mid', 'Launcher'],
              description: 'Safe AOP launcher. Slow at i26 but -8 on block. Mix with AOP.3+4.',
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            videoId="BT.4"
            move={{
              input: 'BT 4',
              hitLevel: ['m'],
              damage: '13',
              startup: 'i13~15',
              onBlock: '-18',
              onHit: '+33a',
              tags: ['Mid', 'Launcher'],
              description: 'Fast BT launcher. Your BT whiff punisher. -18 on block — use only when it will land.',
            }}
            showVideo
          />
          <MoveCard character="xiaoyu"
            videoId="BT.f+3+4,3+4"
            move={{
              input: 'BT f+3+4,3+4',
              hitLevel: ['m'],
              damage: '23',
              startup: 'i12',
              onBlock: '-11',
              onHit: '+40a',
              tags: ['Mid', 'Launcher', 'Evasive'],
              description: 'Cali Roll. Evasive launcher from BT. -11 on block. High damage.',
            }}
            showVideo
          />
        </SubSection>
      </Section>

      <Section title="Beginner Combos">
        <p>
          Start with these. They work from most launchers and are consistent. Once you can land these 
          every time, move to the optimal versions.
        </p>

        <ComboCard
          title="Standard Launch Combo (Beginner)"
          starter="b+1+2 / uf+3 / ws2*,f / CH 3+4 / CH uf+4 / BT.4"
          route={['f+3,1', 'BT.2', 'BT.1,2 T!', 'f+2,1,4']}
          damage="~58-62"
          difficulty="beginner"
          notes={[
            'Works from most standard launchers',
            'f+2,1,4 is a reliable combo ender',
            'Practice the f+3,1 pickup — it takes practice to land consistently'
          ]}
        />

        <ComboCard
          title="AOP.d+1+2 / BT.4 Combo (Beginner)"
          starter="AOP.d+1+2 / BT.4"
          route={['b+3', 'BT.2', 'BT.2', 'BT.1,2 T!', 'f+2,1,4']}
          damage="~55-60"
          difficulty="beginner"
          notes={[
            'b+3 is the pickup after AOP.d+1+2 and BT.4',
            'Three BT hits before the tornado',
          ]}
        />

        <ComboCard
          title="Cali Roll Combo (Beginner)"
          starter="BT.f+3+4,3+4"
          route={['BT.f+3+4,3+4', 'BT.2', 'BT.2', 'BT.1,2 T!', 'f+2,1,4']}
          damage="~62"
          difficulty="beginner"
          notes={['Same route structure as BT.4 combo']}
        />

        <ComboCard
          title="3 / 1+2 / HYP.3+4 Combo (Beginner)"
          starter="3 / 1+2 / HYP.3+4"
          route={['f,f+3', 'BT.d+3,4', 'ub+3 T!', 'AOP.uf,n,3', 'dash', 'df+2,1+2']}
          damage="~60-65"
          difficulty="beginner"
          notes={[
            'f,f+3 is the pickup after standing 3 launch',
            'The AOP.uf,n,3 requires a short neutral input between uf and 3',
          ]}
        />

        <ComboCard
          title="CH ss4 Combo (Beginner)"
          starter="CH ss4"
          route={['f,f+3', 'BT.2', 'BT.2', 'BT.1,2 T!', 'f+2,1,4']}
          damage="~58"
          difficulty="beginner"
          notes={['f,f+3 is the pickup after CH ss4']}
        />
      </Section>

      <Section title="Optimal Combos">
        <p>
          These deal more damage and carry to the wall more effectively. The key difference is the combo ender 
          — using <code>ub+1+2 → HYP.3+4 → f,f+4 → HYP.2</code> instead of <code>f+2,1,4</code>.
        </p>

        <ComboCard
          title="Standard Optimal"
          starter="b+1+2 / uf+3 / BT.4"
          route={['b+2', 'BT.b+3', 'f+3,1', 'BT.1,2 T!', 'ub+1+2', 'HYP.3+4', 'f,f+4', 'HYP.2']}
          damage="~70-75"
          difficulty="intermediate"
          wallCarry
          notes={[
            'The HYP.3+4 → f,f+4 → HYP.2 ender adds significant damage',
            'ub+1+2 enters HYP, then 3+4 gives the tailspin launch',
            'f,f+4 connects into HYP for the final HYP.2',
            'Does NOT work on Xiaoyu and Bears — use beginner combo instead'
          ]}
        />

        <ComboCard
          title="AOP.d+1+2 / ws2*,f Optimal"
          starter="AOP.d+1+2 / ws2*,f / CH ws2,f"
          route={['b+3', 'BT.2', 'BT.f+3+4,3+4', 'BT.2', 'BT.1,2 T!', 'ub+1+2', 'HYP.3+4', 'f,f+4', 'HYP.2']}
          damage="~72-76"
          difficulty="intermediate"
          wallCarry
          notes={[
            'Cali Roll in the middle adds big damage',
            'Does NOT work on Xiaoyu and Bears'
          ]}
        />

        <ComboCard
          title="ub+3 Optimal"
          starter="ub+3"
          route={['AOP.uf,n,4', 'f+2', 'f+3,1', 'BT.2', 'BT.1,2 T!', 'ub+1+2', 'HYP.3+4', 'f,f+4', 'HYP.2']}
          damage="~78"
          difficulty="advanced"
          wallCarry
          notes={[
            'ub+3 recovers in AOP — use AOP.uf,n,4 for the pickup',
            'Requires clean execution on the AOP.uf neutral input',
          ]}
        />

        <ComboCard
          title="f+2+3 / BT.f+2+3 (Waning Moon Throw)"
          starter="f+2+3 / BT.f+2+3"
          route={['db+2', 'BT.d+3,4', 'ub+3', 'AOP.uf,n,3', 'dash', 'df+2,1+2']}
          damage="~70-79"
          difficulty="intermediate"
          notes={[
            'Guaranteed follow-up combo after the throw',
            'The throw itself does 20 damage, then the combo continues',
            'One of the highest damage throws in the game'
          ]}
        />

        <ComboCard
          title="f,f,F+3 (While Running 3)"
          starter="f,f,F+3"
          route={['AOP.1,2', 'BT.2', 'BT.2', 'BT.1,2 T!', 'ub+1+2', 'HYP.3+4', 'f,f+4', 'HYP.2']}
          damage="~68"
          difficulty="intermediate"
          notes={['AOP.1 is the pickup after WR3 launches']}
        />

        <ComboCard
          title="CH f,f+4 (Counter Hit)"
          starter="CH f,f+4"
          route={['HYP.3+4', 'hold F', 'f+3,1', 'BT.2', 'BT.1,2 T!', 'ub+1+2', 'HYP.3+4', 'dash', 'df+2,1+2']}
          damage="~80+"
          difficulty="advanced"
          notes={[
            'Hold F after HYP.3+4 to stay front-facing',
            'One of Xiaoyu\'s most damaging combos',
          ]}
        />
      </Section>

      <Section title="Combo Enders">
        <KeyConcept title="Choose Your Ender Based On The Situation" icon="🎯">
          <ul>
            <li><strong>Maximum damage:</strong> <code>ub+1+2 → HYP.3+4 → f,f+4 → HYP.2</code></li>
            <li><strong>Wall carry (long range):</strong> <code>f+2,1</code> or <code>df+2,3</code></li>
            <li><strong>Wall carry (heat burst):</strong> After T!, do <code>f+2 → Heat Burst → b+3+4 → BT.1,2</code></li>
            <li><strong>Floor break:</strong> <code>3+4</code></li>
            <li><strong>Wall break:</strong> <code>f+1+2</code></li>
            <li><strong>Guaranteed oki:</strong> <code>uf+4 → ws4</code> (ws4 is guaranteed, sets up oki)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The uf+4 → ws4 Ender">
          After tornado, <code>uf+4 → ws4</code> is your most reliable ender. The <code>ws4</code> is 
          guaranteed after <code>uf+4</code> and does unscaled 16 damage. Sometimes <code>ws4</code> can 
          whiff if you're not aligned — side step left slightly before the ender to fix this.
        </TipBox>
      </Section>

      <Section title="Wall Combos">
        <p>
          When you splat the opponent at the wall, these are your follow-ups:
        </p>

        <ComboCard
          title="Standard Wall Combo"
          starter="Wall splat"
          notation="f+2,1,B → HYP.2"
          damage="~30-35"
          difficulty="beginner"
          notes={['Simple and consistent. HYP.2 is a wall-splatting mid.']}
        />

        <ComboCard
          title="Wall Combo (With Tornado)"
          starter="Wall splat (with tornado available)"
          notation="ub+4 → f+2,1,B → HYP.2"
          damage="~40-45"
          difficulty="intermediate"
          notes={[
            'ub+4 is your tornado at the wall',
            'Follow with the standard f+2,1,B → HYP.2'
          ]}
        />

        <ComboCard
          title="Heat Wall Combo"
          starter="Wall splat (in heat)"
          notation="ub+4 → Heat Burst → H.f+2,1,2 → BT.f+3+4,3+4"
          damage="~50+"
          difficulty="intermediate"
          notes={[
            'H.f+2,1,2 is the heat-exclusive extension',
            'Cali Roll ender for max damage',
          ]}
        />

        <ComboCard
          title="Simple Wall Combo"
          starter="Wall splat"
          notation="1,2 → f+1+2"
          damage="~25"
          difficulty="beginner"
          notes={['The simplest option. 1,2 into shoulder.']}
        />

        <PracticeBox
          title="Combo Drill"
          setup="Set opponent to Stand. Start with beginner combos. Move to optimal once you can land beginners 8/10 times."
          tasks={[
            { id: 'xiao-combo-b12', text: 'b+1+2 beginner combo — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-combo-3', text: 'Standing 3 beginner combo — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-combo-optimal', text: 'Any optimal combo — 10 times', type: 'counter', target: 10 },
            { id: 'xiao-combo-wall', text: 'Wall combo (f+2,1,B → HYP.2) — 10 times', type: 'counter', target: 10 },
          ]}
        />
      </Section>
    </Chapter>
  )
}
