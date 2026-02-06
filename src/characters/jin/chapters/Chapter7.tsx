import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  ComboCard,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Combos"
      intro="Jin has some of the highest combo damage in the game — easily 70+ from most launchers. This chapter gives you reliable routes that you won't drop online, plus optimized routes when you're ready."
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Punishment"
    >
      <Section title="The Universal Combo (Learn This First)">
        <p>
          This combo works from <strong>every standard launcher</strong>: hopkick (<code>uf+4</code>), 
          can-can (<code>d+3+4</code>), <code>ws+2</code>, <code>f,f+3</code>, <code>f,n,d,df+1</code>. 
          Learn this one route and you can convert every launch.
        </p>

        <ComboCard
          title="Universal BnB"
          starter="uf+4 / d+3+4 / ws+2 / f,f+3 / CD.df+1"
          notation="df+2,4 → b,f+2,3~F → ZEN u+1 T! → (2),4~F → ZEN 1,3"
          damage="~75"
          difficulty="beginner"
          notes={[
            'Works from ALL standard launchers',
            'df+2,4 is the tornado (T!) for most starters',
            'ZEN 1,3 ender gives oki and wall carry',
          ]}
        />

        <TipBox variant="tip" title="The One Combo That Matters">
          If you learn ONE combo, learn this. It does 75+ damage, carries to the wall, and works 
          from every launcher. You can play Jin for hundreds of matches with just this route.
        </TipBox>
      </Section>

      <Section title="Electric Combo">
        <p>
          Electric (<code>EWHF</code>) consumes the tornado on hit, so you need a different route.
        </p>

        <ComboCard
          title="Electric BnB"
          starter="EWHF (f,n,d,df:2)"
          notation="EWHF → b+3~F → ZEN 1 → b,f+2,3~F → ZEN u+1 T! → (2),4~F → ZEN 1,3"
          damage="~80"
          difficulty="intermediate"
          notes={[
            'EWHF consumes tornado, so use ZEN u+1 for the T! later',
            'b+3~F transitions to ZEN for the follow-up',
            'Can replace ZEN 1,3 with ZEN 1,2 for wall carry',
          ]}
        />

        <ComboCard
          title="Electric (Easy Version)"
          starter="EWHF"
          notation="EWHF → df+2,4 → b,f+2,3~F → ZEN u+1 T! → (2),4~F → ZEN 1,3"
          damage="~73"
          difficulty="beginner"
          notes={[
            'Slightly less damage but much easier timing',
            'Skip the b+3~F ZEN loop for consistency',
          ]}
        />
      </Section>

      <Section title="Counter-Hit Combos">
        <ComboCard
          title="CH f+4 (Counter-Hit Forward Four)"
          starter="CH f+4"
          notation="(dash) b+3~F → ZEN 1 → b,f+2,3~F → ZEN u+1 T! → (2),4~F → ZEN 1,3"
          damage="~80"
          difficulty="intermediate"
          notes={[
            'Must dash forward after CH f+4 before the pickup',
            'On f+4 hit, you can also transition to ZEN and do ZEN df+1 for easier pickup',
          ]}
        />

        <ComboCard
          title="CH FC df+4 (Counter-Hit Crouch Low)"
          starter="CH FC df+4~F (into ZEN)"
          notation="df+2 → b+3~F → ZEN 1 → b,f+2,3~F → ZEN u+1 T! → (2),4~F → ZEN 1,3"
          damage="~75"
          difficulty="intermediate"
          notes={[
            'Hold df after FC df+4 to transition to ZEN/BRS on hit',
            'On normal hit (not CH), go for ZEN mixup instead of combo',
          ]}
        />

        <ComboCard
          title="Magic Four Trade (4 trades with jab)"
          starter="CH 4 (or trade)"
          notation="df+1,4 or 1+2 (for heat engage)"
          damage="15 + follow-up"
          difficulty="beginner"
          notes={[
            'On CH, df+1,4 is guaranteed for a knockdown + wall splat',
            '1+2 is guaranteed and activates heat',
            'Simple but effective — don\'t overthink this one',
          ]}
        />
      </Section>

      <Section title="Heat Combos">
        <ComboCard
          title="f,f+2 Heat Engager Combo"
          starter="f,f+2 (Heat Dash)"
          notation="f,f+2~heat → EWHF → b+3~F → ZEN 1 → b,f+2,3~F → ZEN u+1 T! → (2),4~F → ZEN 1,3"
          damage="~90"
          difficulty="intermediate"
          notes={[
            'f,f+2 is your main way to start heat',
            'Heat dash into electric for maximum damage',
            'In heat, electric doesn\'t require just-frame timing',
          ]}
        />

        <ComboCard
          title="4,3,1 Heat Engager (Confirmable i14)"
          starter="4,3,1 (Heat Dash)"
          notation="4,3,1~heat → EWHF → b+3~F → ZEN 1 → b+3~F → ZEN 1,3"
          damage="~85"
          difficulty="intermediate"
          notes={[
            'Hit confirmable at i14 — use this to punish -14 moves in heat',
            'Extremely strong because it turns a punish into a full launch',
          ]}
        />
      </Section>

      <Section title="Wall Combos">
        <ComboCard
          title="Standard Wall Combo"
          starter="Wall splat (no tornado used)"
          notation="1 or 2 (jab) → db+2,2,3"
          damage="~30-35"
          difficulty="beginner"
          notes={[
            'Works after any wall splat where tornado wasn\'t used',
            'The jab aligns them, db+2,2,3 is the damage',
          ]}
        />

        <ComboCard
          title="Wall Combo with Tornado"
          starter="Wall splat (have tornado)"
          notation="f,n,d,df+1 T! → EWHF → 1 → db+2,2,3"
          damage="~45-50"
          difficulty="intermediate"
          notes={[
            'If you still have tornado, use CD1 for it at the wall',
            'Then electric into jab into the wall ender',
            'Alternative: b+1,2 T! → b,f+2,1,df+2',
          ]}
        />

        <ComboCard
          title="Wall Combo (Simple)"
          starter="Wall splat"
          notation="b,f+2,1,df+2"
          damage="~40"
          difficulty="beginner"
          notes={[
            'Works in most wall situations',
            'Delay the last hit (df+2) slightly for consistent wall splat',
            'No tornado needed',
          ]}
        />
      </Section>

      <Section title="Combo Enders & Adjustments">
        <KeyConcept title="Key Ender Options" icon="🎯">
          <ul>
            <li><strong>Wall carry:</strong> Replace <code>ZEN 1,3</code> with <code>ZEN 1,2</code> or use <code>b+2,1</code></li>
            <li><strong>Floor break:</strong> Use <code>f,n,d,DF+4,2</code> (hell sweep full) or <code>df+4</code></li>
            <li><strong>Wall break:</strong> Use <code>b,f+2,1,2</code></li>
            <li><strong>Oki:</strong> <code>ZEN 1,3</code> gives best oki (guaranteed d+2 if they stay grounded)</li>
            <li><strong>Heat burst extend:</strong> After T!, do <code>(2),4~F</code> → cancel ZEN into heat burst for extended combo</li>
          </ul>
        </KeyConcept>

        <TipBox variant="warning" title="Don't Optimize Yet">
          These combos are reliable. There are higher-damage routes that require tighter execution, 
          but dropping a combo in a real match costs you way more than the extra 5-10 damage. 
          Master these first, then optimize later.
        </TipBox>
      </Section>

      <Section title="Small Combos (Guaranteed Follow-ups)">
        <Collapsible title="Situational Guaranteed Damage" icon="💥" defaultOpen>
          <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { situation: 'CH 4 (magic four)', followup: 'df+1,4 or 1+2 (heat)', dmg: '15 + 28 or heat' },
              { situation: 'ZEN 4 (dive kick hit)', followup: 'd+2', dmg: '25 + 22' },
              { situation: 'db+4 hit → 4 trade', followup: 'Full combo (they\'re floating)', dmg: '60+' },
              { situation: 'CH 2,1,4', followup: 'd+2 (on knockdown)', dmg: '36 + 22' },
              { situation: 'CH db+2,2', followup: '3,1 → 3,1~F → ZEN u+1 T! combo', dmg: '70+' },
              { situation: 'df+3~3 hit (+13)', followup: 'df+1,4 or 1+2 (heat)', dmg: '20 + 28' },
              { situation: 'CH ZEN 3', followup: 'd+2 or CD1 (grounded)', dmg: '20 + 22' },
              { situation: 'b+1+2 (punch parry)', followup: 'f,f+4 or f,f+2', dmg: '20 + 32' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '10px 16px', background: 'var(--background-secondary)', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <code style={{ color: 'var(--accent)' }}>{item.situation}</code>
                  <span style={{ margin: '0 8px', color: 'var(--text-muted)' }}>→</span>
                  <code style={{ color: 'var(--text-secondary)' }}>{item.followup}</code>
                </div>
                <span style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{item.dmg}</span>
              </div>
            ))}
          </div>
        </Collapsible>
      </Section>
    </Chapter>
  )
}
