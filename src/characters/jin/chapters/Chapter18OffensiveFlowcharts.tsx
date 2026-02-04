import { Chapter, Section } from '../../../components/guide'
import { 
  KeyConcept, 
  TipBox,
  Collapsible
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

// Styled flowchart box component
const FlowBox = ({ title, sequence, note }: { title: string; sequence: string; note?: string }) => (
  <div style={{ 
    marginBottom: '16px',
    padding: '16px',
    background: 'var(--bg-secondary)',
    borderRadius: '8px',
    border: '1px solid var(--border)'
  }}>
    <div style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px', fontSize: '14px' }}>{title}</div>
    <code style={{ 
      display: 'block',
      fontSize: '13px',
      lineHeight: '1.8',
      color: 'var(--text-primary)',
      whiteSpace: 'pre-wrap'
    }}>{sequence}</code>
    {note && <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>{note}</div>}
  </div>
)

export function Chapter18OffensiveFlowcharts({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={18}
      title="Offensive Flowcharts"
      intro="Raw sequences. Minimal talk. Start simple, end tournament-level. Practice these until your hands move on their own."
      onPrevious={() => goToChapter(17)}
      hasNext={false}
    >
      {/* TIER 1: Starter Loops */}
      <Section title="Tier 1: Basic Loops">
        <FlowBox 
          title="1.1 — Low Loop"
          sequence="db+4 → df+3 → db+4 → df+3..."
          note="+3 on hit → 12f mid → +3 on hit → loop"
        />

        <FlowBox 
          title="1.2 — Jab Pressure"
          sequence="2,1 → f+4 → (CH combo or blocked -8)"
          note="+6 on hit → CH launcher"
        />

        <FlowBox 
          title="1.3 — Electric Loop"
          sequence="EWHF → b+2,1 → db+4 → df+3..."
          note="+5 on block → safe mid → low → loop"
        />

        <FlowBox 
          title="1.4 — Throw After Respect"
          sequence="2,1 → 2,1 → 2,1 → 1+3"
          note="They freeze after jab strings → throw"
        />

        <FlowBox 
          title="1.5 — Simple ZEN Entry"
          sequence="f+4~F → ZEN.3+4 → throw"
          note="-1 in ZEN → +9~15 high → they freeze → grab"
        />
      </Section>

      {/* TIER 2: Adding Decisions */}
      <Section title="Tier 2: Branching Pressure">
        <FlowBox 
          title="2.1 — The Masher Punish"
          sequence="db+4 → f+4 → (CH) b+3,f,1 → dash → b+3,f,1 → b+3,2 [wall]"
          note="They mash after low → full combo → wall carry"
        />

        <FlowBox 
          title="2.2 — The Turtle Crack"
          sequence="2,1 → 2,1 → d+4 → 2,1 → throw → (tech roll) ZEN.4"
          note="They block everything → chip with lows → throw → oki"
        />

        <FlowBox 
          title="2.3 — The Stepper"
          sequence="db+4 → b,f+2,1 → b,f+2,3~F → ZEN.1+2"
          note="They SSR → tracking string → ZEN low grab"
        />

        <FlowBox 
          title="2.4 — Mental Frame Abuse"
          sequence="2,1 (block -3) → 2,1,4 [or] 2,1 → throw"
          note="They fear the 4 extension → stop early → grab"
        />

        <FlowBox 
          title="2.5 — ZEN.1+2 Into Pressure"
          sequence="ZEN.1+2 (hit) → CD → EWHF → b+2,1 → db+4..."
          note="Low grab +5 in CD → electric → continue"
        />

        <FlowBox 
          title="2.6 — Hellsweep Oki"
          sequence="CD.df+4 → ZEN.4 (tech catch) → d+2 (guaranteed)"
          note="Hellsweep knockdown → spike mid → followup"
        />
      </Section>

      {/* TIER 3: Stance Integration */}
      <Section title="Tier 3: ZEN & Breaking Step">
        <FlowBox 
          title="3.1 — Standard ZEN Loop"
          sequence="ff+3~F → ZEN.3+4 → ff+3~F → ZEN.3+4 → ZEN.1+2"
          note="Approach → plus high → approach → plus high → low grab"
        />

        <FlowBox 
          title="3.2 — Breaking Step Electric"
          sequence="df+3~3 → f+3+4 → EWHF → df+3~3 → f+3+4 → EWHF..."
          note="+6c → BRS → electric → loop"
        />

        <FlowBox 
          title="3.3 — ZEN Cancel Into Run"
          sequence="f+4~F → ZEN.1,2~DF → f,f,F+3 → ZEN.3+4 → throw"
          note="ZEN → cancel to BRS → running 3 → high → grab"
        />

        <FlowBox 
          title="3.4 — Crouch Dash Mixup"
          sequence="CD → (they duck) → CD.1 → CD → CD.df+4,2 → combo"
          note="Wave in → mid → wave in → hellsweep launch"
        />

        <FlowBox 
          title="3.5 — Sabaki Read"
          sequence="2,1 (block -3) → b+1+2 (sabaki) → wall splat → combo"
          note="They jab check at -3 → parry → full wall combo"
        />

        <FlowBox 
          title="3.6 — High Crush Under Pressure"
          sequence="(opponent jabs) → d+2 → ws4 → 2,1 → f+4"
          note="Crush their jab → +8 ws4 → continue pressure"
        />

        <FlowBox 
          title="3.7 — Sidestep Into Launch"
          sequence="2,1 (block) → SSR → (their df+1 whiffs) → EWHF → combo"
          note="Make them whiff → launch"
        />
      </Section>

      {/* TIER 4: Wall Sequences */}
      <Section title="Tier 4: Wall Pressure">
        <FlowBox 
          title="4.1 — Basic Wall Pin"
          sequence="[wall] ff+3~F → ZEN.3+4 → ff+3~F → ZEN.1+2 → CD → EWHF..."
          note="Approach → high → approach → low → electric → loop"
        />

        <FlowBox 
          title="4.2 — Wall Chip Damage"
          sequence="[wall] ZEN.3+4 → ZEN.3+4 → ZEN.3+4 → ZEN.1,2"
          note="~30 chip damage before the launch"
        />

        <FlowBox 
          title="4.3 — Wall Throw Setup"
          sequence="[wall] ff+3~F → df+3~3 → f+3+4 → throw → (wall splat) → d+2"
          note="Plus frames → crouch force → BRS → grab → splat → oki"
        />

        <FlowBox 
          title="4.4 — Ducker Punishment"
          sequence="[wall] ZEN.3+4 (they duck) → ZEN.1,2 → wall splat → b+3,2"
          note="High whiffs → mid launch → splat → ender"
        />

        <FlowBox 
          title="4.5 — Power Crush Bait"
          sequence="[wall] ZEN.3+4 → (they PC) → block → ws2 → combo"
          note="They panic PC → block → launch punish"
        />

        <FlowBox 
          title="4.6 — Heat Wall Pressure"
          sequence="[wall, heat] ff+3~F → ZEN.3+4 → H.2+3 (block +3) → db+4 → throw"
          note="Pressure → heat smash → low → grab"
        />
      </Section>

      {/* TIER 5: Oki Sequences */}
      <Section title="Tier 5: Knockdown Pressure">
        <FlowBox 
          title="5.1 — Hellsweep Oki"
          sequence="CD.df+4 → (they tech) → ZEN.4 → d+2 → (they stay) → d+4 → 2,1..."
          note="Sweep → tech catch → spike → low → pressure"
        />

        <FlowBox 
          title="5.2 — Throw Oki"
          sequence="1+3 → (tech roll) → f,f,F+3 → ZEN.3+4 → ZEN.1+2"
          note="Throw → tech → running 3 catches → pressure"
        />

        <FlowBox 
          title="5.3 — Wall Splat Oki"
          sequence="(wall combo ender) → (tech) → ff+3~F → (stay down) → d+2 → ws4 → 2,1"
          note="Splat → respect wakeup → pressure"
        />

        <FlowBox 
          title="5.4 — Back Throw Oki"
          sequence="(back throw) → dash → d+2 (grounded hit) → (they wake up) → df+3~3 → ZEN..."
          note="BT throw → guaranteed ground hit → continue"
        />

        <FlowBox 
          title="5.5 — Side Throw Setup"
          sequence="qcb+1+3 → (FUFA) → ZEN.4 (hits grounded) → (tech) → ff+3~F"
          note="Flip throw → spike catches → approach"
        />

        <FlowBox 
          title="5.6 — Spike Oki"
          sequence="(spike ender) → (tech roll) → b+3,f → ZEN.1 → ZEN.1+2"
          note="Spike → tech → savage sword catches → low"
        />
      </Section>

      {/* TIER 6: Extended Sequences */}
      <Section title="Tier 6: Full Round Sequences">
        <Collapsible title="6.1 — vs Masher (10+ moves)" defaultOpen>
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`1 → db+4 → (they mash) → f+4 CH → 
b+3,f,1 → dash → b+3,f,1 → b+3,2 [wall] →
(tech) → ff+3~F → (mash) → block → ws4 → 2,1 → f+4 CH →
(combo) → wall splat → (tech) → ZEN.4 → d+2`}
          </code>
        </Collapsible>

        <Collapsible title="6.2 — vs Turtle (12+ moves)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`ff+3~F → ZEN.3+4 → ff+3~F → ZEN.3+4 → 
ZEN.1+2 → CD → EWHF → 2,1 → 2,1 →
throw → (tech) → f,f,F+3 → ZEN.1,2 → wall splat →
(tech) → ff+3~F → ZEN.1+2 → CD → CD.df+4 → combo`}
          </code>
        </Collapsible>

        <Collapsible title="6.3 — vs Stepper (10+ moves)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`db+4 → (SSR) → b,f+2,1 → b,f+2,3~F →
ZEN.3 (homing) → (duck attempt) → ZEN.1,2 → 
wall carry → (tech) → 4 (magic 4 tracks) →
EWHF → b+2,1 → throw`}
          </code>
        </Collapsible>

        <Collapsible title="6.4 — vs Ducker (8+ moves)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`2,1 → 2,1 → (they start ducking) →
2,1,4 CH → dash → 4 → EWHF →
combo → wall → (duck again) → ZEN.1,2 → 
wall splat → b+3,2`}
          </code>
        </Collapsible>

        <Collapsible title="6.5 — vs Panic Power Crusher">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`db+4 → (PC attempt) → df+3 beats it →
2,1 → (PC attempt) → df+3 beats it →
f+4~F → (PC attempt) → block → ws2 launch →
combo → wall → (PC attempt) → block → hopkick → 
combo → round over`}
          </code>
        </Collapsible>
      </Section>

      {/* TIER 7: Wave Dash Pressure */}
      <Section title="Tier 7: Wave Dash Integration">
        <FlowBox 
          title="7.1 — Single Wave Approach"
          sequence="CD → CD → EWHF → b+2,1 → db+4 → df+3..."
        />

        <FlowBox 
          title="7.2 — Double Wave Pressure"
          sequence="CD → CD → CD → (they freeze) → CD.df+4 → combo"
          note="Wave wave wave → they panic block high → sweep"
        />

        <FlowBox 
          title="7.3 — Wave Into Throw"
          sequence="CD → CD → (they crouch block) → uf+1+2 (throw)"
          note="Waves → they expect sweep → grab"
        />

        <FlowBox 
          title="7.4 — Wave Fake Into Punish"
          sequence="CD → db (cancel) → (they whiff) → EWHF → combo"
          note="Start wave → cancel → whiff punish"
        />

        <FlowBox 
          title="7.5 — Wave Mixup Series"
          sequence={`CD → EWHF (block) → CD → CD.1 (mid) → 
CD → CD.df+4 (low) → CD → throw`}
          note="Electric → mid → sweep → grab — cycle through"
        />

        <FlowBox 
          title="7.6 — Triple Wave Wall Approach"
          sequence="CD → CD → CD → f,f,F+3 → [wall] ZEN.3+4 → ZEN.1+2"
          note="Waves close distance → running 3 pins → wall pressure"
        />
      </Section>

      {/* TIER 8: Advanced Oki Loops */}
      <Section title="Tier 8: Oki Into Pressure Loops">
        <Collapsible title="8.1 — Hellsweep Loop (3 knockdowns)" defaultOpen>
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`CD.df+4 → (tech) → ZEN.4 → 
(stay down) → d+2 → ws4 → CD → CD.df+4 →
(tech) → b+3,f → ZEN.1+2 → CD →
CD.df+4 → (no tech) → d+2 → ws4 → 2,1 → throw`}
          </code>
        </Collapsible>

        <Collapsible title="8.2 — Throw Loop (3 throws)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`2,1 → 2,1 → throw →
(tech) → f,f,F+3 → ZEN.3+4 → throw →
(tech) → dash → 2,1 → throw →
(tech) → ff+3~F → ZEN.1,2 → wall`}
          </code>
        </Collapsible>

        <Collapsible title="8.3 — Wall Splat Loop (3 splats)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`[wall combo] → b+3,2 → 
(tech) → ff+3~F → ZEN.1,2 → wall splat →
(tech) → throw → wall splat →
(tech) → ZEN.4 → d+2 (spike) → 
(tech) → b,f+2,1,df+2 → wall splat → b+3,2`}
          </code>
        </Collapsible>

        <Collapsible title="8.4 — Mixed Knockdown Chain">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`CD.df+4 → (tech) → ZEN.4 →
(tech) → throw → (tech) → f,f,F+3 →
ZEN.3+4 → ZEN.1+2 → CD → EWHF →
(block) → CD → CD.df+4 → (tech) →
b+3,f → ZEN.1,2 [wall] → wall combo`}
          </code>
        </Collapsible>
      </Section>

      {/* TIER 9: Full Wall Sequences */}
      <Section title="Tier 9: Complete Wall Destruction">
        <Collapsible title="9.1 — 15+ Move Wall Lock" defaultOpen>
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`[at wall] ff+3~F → ZEN.3+4 → df+3~3 →
f+3+4 → EWHF → ff+3~F → ZEN.3+4 →
ff+3~F → ZEN.1,2~DF → f,f,F+3 →
ZEN.3+4 → ZEN.1+2 → CD → EWHF →
db+4 → throw → wall splat → d+2`}
          </code>
        </Collapsible>

        <Collapsible title="9.2 — Heat Wall Devastation">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`[wall, heat] ff+3~F → ZEN.3+4 →
H.2+3 (block +3) → df+3 → 2,1 → f+4~F →
ZEN.3+4 → H.ff+1+2 (omen) → 
(they guess wrong) → combo → wall splat →
(tech) → ZEN.4 → d+2 → round`}
          </code>
        </Collapsible>

        <Collapsible title="9.3 — Zero Respect Wall Sequence">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`[wall] db+4 → db+4 → db+4 → db+4 →
(they finally try to check) → f+4 CH →
combo → wall splat → (tech) → db+4 →
db+4 → throw → wall splat → round`}
          </code>
          <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>vs players who never check lows</div>
        </Collapsible>

        <Collapsible title="9.4 — Respect Builder Into Explosion">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`[wall] 2,1 → df+3 → 2,1 → df+3 →
2,1 → df+3 → (they're frozen) →
ZEN.1+2 → CD → CD → CD → CD.df+4 →
combo → wall splat → (tech) →
throw → wall splat → d+2 → round`}
          </code>
          <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>Safe pokes build fear → then explode</div>
        </Collapsible>
      </Section>

      {/* TIER 10: Tournament Level */}
      <Section title="Tier 10: Tournament Sequences">
        <Collapsible title="10.1 — The CBM Special (20+ inputs)" defaultOpen>
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`CD → CD → EWHF → CD → CD → EWHF →
(block) → CD → CD.1 → CD → CD.df+4 →
(tech) → ZEN.4 → (tech) → ff+3~F →
ZEN.3+4 → ZEN.1,2~DF → f,f,F+3 →
ZEN.3+4 → throw → wall splat →
(tech) → ff+3~F → ZEN.1+2 → CD →
EWHF → db+4 → f+4 CH → combo → round`}
          </code>
        </Collapsible>

        <Collapsible title="10.2 — Complete Game Plan (25+ moves)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`[round start] df+1 → SSR → (whiff) → EWHF →
combo → wall carry → b+3,2 →
(tech) → ff+3~F → ZEN.3+4 → df+3~3 →
f+3+4 → EWHF → ff+3~F → ZEN.1+2 →
CD → CD → CD.df+4 → (tech) → ZEN.4 →
(tech) → throw → wall splat →
(tech) → ZEN.3+4 → ZEN.3+4 → ZEN.1,2 →
wall splat → b+3,2 → round`}
          </code>
        </Collapsible>

        <Collapsible title="10.3 — Adaptation Read Chain">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`[they mash round 1] db+4 → f+4 CH → combo
[they respect round 2] db+4 → db+4 → throw
[they duck round 3] 2,1 → 2,1,4 CH → combo
[they PC round 4] db+4 → df+3 beats PC → 2,1 → throw
[they SSR round 5] db+4 → b,f+2,1 → combo`}
          </code>
          <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>Same starter, different read each round</div>
        </Collapsible>

        <Collapsible title="10.4 — The Download Set">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`Game 1: Probe
df+1 → (what do they do?) → 2,1 → (what do they do?) →
db+4 → (what do they do?) → note patterns

Game 2: Test
db+4 → (confirmed mash) → f+4 CH → combo → wall
2,1 → (confirmed duck) → 2,1,4 CH → combo
ff+3~F → (confirmed freeze) → throw

Game 3: Exploit
db+4 → f+4 → combo → wall → throw → wall splat →
ZEN.1,2 → wall splat → round
db+4 → f+4 → combo → wall → round
db+4 → f+4 → combo → set`}
          </code>
        </Collapsible>

        <Collapsible title="10.5 — Max Length Pressure (30+ moves)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`CD → CD → EWHF → b+2,1 → db+4 → df+3 →
2,1 → f+4~F → ZEN.3+4 → ff+3~F →
ZEN.1,2~DF → f,f,F+3 → ZEN.3+4 →
ZEN.1+2 → CD → EWHF → CD → CD.df+4 →
(tech) → ZEN.4 → (tech) → b+3,f → ZEN.1 →
ZEN.1+2 → CD → CD → throw →
(tech) → f,f,F+3 → [wall] ZEN.3+4 →
df+3~3 → f+3+4 → EWHF → ff+3~F →
ZEN.3+4 → ZEN.3+4 → ZEN.1,2 → wall splat →
(tech) → throw → wall splat → d+2 → ws4 →
2,1 → f+4 CH → combo → round`}
          </code>
        </Collapsible>
      </Section>

      {/* TIER 11: Situational Flowcharts */}
      <Section title="Tier 11: Situational Reads">
        <Collapsible title="After Every db+4 Hit (+3)" defaultOpen>
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`db+4 → they mash → f+4 CH combo
db+4 → they freeze → db+4 again
db+4 → they freeze → throw  
db+4 → they SSR → b,f+2,1
db+4 → they PC → df+3 beats it
db+4 → they backdash → ff+3~F`}
          </code>
        </Collapsible>

        <Collapsible title="After Every 2,1 Hit (+6)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`2,1 → they mash → f+4 CH combo
2,1 → they freeze → throw
2,1 → they freeze → db+4
2,1 → they duck → 2,1,4 CH
2,1 → they SSR → b,f+2,3~F ZEN
2,1 → they PC → df+3 beats it
2,1 → they backdash → ff+3~F`}
          </code>
        </Collapsible>

        <Collapsible title="After Every EWHF Block (+5)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`EWHF → they mash → b+2,1 or 4
EWHF → they freeze → CD → CD.df+4
EWHF → they freeze → throw
EWHF → they SSR → 4 (homing)
EWHF → they backdash → CD → EWHF chase`}
          </code>
        </Collapsible>

        <Collapsible title="After Every ZEN.3+4 Block (+9~15)">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`ZEN.3+4 → they mash → ff+3~F beats it
ZEN.3+4 → they freeze → throw
ZEN.3+4 → they freeze → ZEN.1+2
ZEN.3+4 → they duck next → ZEN.4 or ZEN.1,2
ZEN.3+4 → they PC → block → ws2 launch`}
          </code>
        </Collapsible>

        <Collapsible title="After Every Throw">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`throw → tech roll → f,f,F+3 catches
throw → tech roll → ZEN.4 catches
throw → stay down → d+2 hits grounded
throw → back roll → dash ff+3~F
throw → wake up kick → block → ws2 launch`}
          </code>
        </Collapsible>

        <Collapsible title="After Every Knockdown">
          <code style={{ display: 'block', padding: '16px', background: 'var(--bg-secondary)', borderRadius: '8px', lineHeight: '2', whiteSpace: 'pre-wrap' }}>
{`knockdown → tech → ZEN.4 spike
knockdown → tech → b+3,f catches
knockdown → tech → throw
knockdown → stay → d+2 ground hit
knockdown → stay → d+4 ground hit
knockdown → spring kick → block → ws4 punish
knockdown → toe kick → block → hopkick punish
knockdown → back roll → dash → ff+3~F`}
          </code>
        </Collapsible>
      </Section>

      {/* QUICK REFERENCE */}
      <Section title="Quick Reference">
        <KeyConcept title="Plus Frame Starters" icon="➕">
          <code style={{ display: 'block', padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px', fontSize: '13px' }}>
{`1 (+8 hit) | 2 (+9 hit) | 2,1 (+6 hit) | db+4 (+3 hit)
ws4 (+8 hit) | ff+3,1 (+7 hit, +1 block) | df+3~3 (+6c block)
EWHF (+5 block) | f,f,F+3 (+6 block) | ZEN.3+4 (+9~15 block)
ZEN.4 (+2~8 block) | ZEN.1+2 (+5 CD on hit)`}
          </code>
        </KeyConcept>

        <KeyConcept title="Tracking Options" icon="🎯">
          <code style={{ display: 'block', padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px', fontSize: '13px' }}>
{`b,f+2,1 (tracks SSR) | b,f+2,3~F (tracks SSR → ZEN)
b+3~F (immediate, tracks) | 4 (magic 4, homing)
ZEN.3 (homing mid) | ws3 (homing mid) | EWHF (tracks both)`}
          </code>
        </KeyConcept>

        <KeyConcept title="Beat Power Crush" icon="🛡️">
          <code style={{ display: 'block', padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px', fontSize: '13px' }}>
{`+3 → df+3 (12f = 9f effective)
+5 → b+2,1 (14f = 9f effective)  
+6 → f+4 (16f = 10f effective)
+8 → almost anything`}
          </code>
        </KeyConcept>

        <KeyConcept title="Key Transitions" icon="🔄">
          <code style={{ display: 'block', padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px', fontSize: '13px' }}>
{`~F after: f+4, 2,4, b+3, 3,1, ff+3 → into ZEN
~DF after: ZEN.1,2 → into Breaking Step
f+3+4 → Breaking Step (then CD for electric)
db → cancel any stance to neutral`}
          </code>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Method">
          Pick ONE flowchart. Run it 50 times until your hands move without thinking. 
          Then add the next. Don't try to learn everything at once.
        </TipBox>
      </Section>
    </Chapter>
  )
}
