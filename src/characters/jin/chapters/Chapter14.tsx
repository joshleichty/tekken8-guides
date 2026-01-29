import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter14({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={14}
      title="Counter-Hit Game"
      intro="Jin has multiple moves that become devastating on counter hit. Understanding when and how to fish for counter hits elevates your Jin from good to great."
      onPrevious={() => goToChapter(13)}
      onNext={() => goToChapter(15)}
      nextLabel="Complete Jin Gameplan"
    >
      <Section title="What is Counter Hit?">
        <p>
          A <strong>counter hit (CH)</strong> occurs when your attack lands during your opponent's 
          attack startup. Counter hits typically give bonus damage and often enable combos that 
          wouldn't work on normal hit.
        </p>

        <KeyConcept title="Counter Hit Basics" icon="💥">
          <ul>
            <li><strong>When to fish</strong> — After plus frames, when you expect them to press</li>
            <li><strong>What to use</strong> — Moves with strong CH properties</li>
            <li><strong>How to confirm</strong> — Watch for the CH animation, then combo</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="Jin's Counter-Hit Tools">
        <SubSection title="f+4 — The King of CH">
          <MoveCard character="jin"
            move={{
              input: 'f+4',
              hitLevel: ['m'],
              damage: '21',
              startup: 'i16-17',
              onBlock: '-8',
              onHit: '+4',
              onCH: '+42a',
              tags: ['Mid', 'CH Launcher', 'Safe', 'Long Range'],
              description: 'Your primary CH tool. Safe, long range, full combo on CH.',
              notes: [
                'CH gives a crumple stun',
                'Dash up and combo after CH',
                'Use constantly to check opponent presses'
              ]
            }}
          />
          <p>
            f+4 is <span className="highlight">Jin's best counter-hit tool</span>. It's safe, 
            has great range, and on counter hit gives you a full combo. This move alone wins rounds.
          </p>

          <TipBox variant="tip" title="f+4 Setups">
            <ul>
              <li><strong>After jab (+1)</strong> → f+4 beats their jab</li>
              <li><strong>After db+4 (+3)</strong> → f+4 beats most buttons</li>
              <li><strong>Round start</strong> → Catches aggressive openers</li>
              <li><strong>After blocked Electric (+5)</strong> → f+4 is uncontested</li>
            </ul>
          </TipBox>
        </SubSection>

        <SubSection title="4 — Homing CH">
          <MoveCard character="jin"
            move={{
              input: '4',
              hitLevel: ['h'],
              damage: '15',
              startup: 'i13-14',
              onBlock: '-9',
              onHit: '+10g',
              onCH: '+13c',
              tags: ['High', 'Homing', 'CH Follow-up'],
              description: 'Homing high that guarantees follow-ups on CH.',
              notes: [
                'Homing — tracks sidesteps',
                'CH guarantees 1+2 (Heat engager) or df+1,4',
                'Use to check stepping opponents'
              ]
            }}
          />
          <p>
            4 is your <strong>homing counter hit tool</strong>. When opponents try to sidestep 
            your pressure, 4 catches them. On CH, you get guaranteed follow-ups.
          </p>

          <KeyConcept title="4 CH Follow-ups" icon="➡️">
            <ul>
              <li><strong>CH 4 → 1+2</strong> — Heat engager, enters Heat</li>
              <li><strong>CH 4 → df+1,4</strong> — Damage and knockdown</li>
              <li><strong>CH 4 → f+4</strong> — Resets pressure</li>
            </ul>
          </KeyConcept>
        </SubSection>

        <SubSection title="2,1,4 — String CH">
          <MoveCard character="jin"
            move={{
              input: '2,1,4',
              hitLevel: ['h', 'm', 'm'],
              damage: '9, 9, 18',
              startup: 'i10',
              onBlock: '-10',
              onHit: '+3',
              onCH: '+19a (3rd hit)',
              tags: ['String', 'CH Wallsplat'],
              description: 'Third hit wallsplats on CH. Great for catching button mashers.',
              notes: [
                'The third hit can be delayed',
                'CH on third hit = wallsplat',
                'Mix with 2,1,4~4 (low ender)'
              ]
            }}
          />
          <p>
            2,1,4 is your <strong>string counter hit tool</strong>. When opponents try to 
            mash after blocking 2,1, the delayed third hit catches them for a wallsplat.
          </p>
        </SubSection>

        <SubSection title="uf+3 — The Safer CH Launcher">
          <MoveCard character="jin"
            move={{
              input: 'uf+3',
              hitLevel: ['m'],
              damage: '17',
              startup: 'i22-23',
              onBlock: '-9',
              onHit: '+6',
              onCH: '+59a',
              tags: ['Mid', 'CH Launcher', 'Safe', 'Low Crush'],
              description: 'Safer alternative to hopkick. CH launches for full combo.',
              notes: [
                '-9 on block (safer than hopkick\'s -13)',
                'Low crushes',
                'Full combo on counter hit'
              ]
            }}
          />
        </SubSection>

        <SubSection title="EWHF — The Ultimate CH Tool">
          <MoveCard character="jin"
            move={{
              input: 'f,n,d,df:2',
              hitLevel: ['h'],
              damage: '25',
              startup: 'i11-12',
              onBlock: '+5~+6',
              onHit: '+76a (+60)',
              tags: ['High', 'Launcher', 'Plus on Block'],
              description: 'Launches on any hit. Plus on block sets up more CH opportunities.',
            }}
          />
          <p>
            EWHF <strong>launches on any hit</strong> — normal hit or counter hit doesn't matter. 
            But the +5 on block makes it a CH setup tool: they block Electric, you're +5, 
            now f+4 or 4 catches any button they press.
          </p>
        </SubSection>
      </Section>

      <Section title="Counter-Hit Setups">
        <p>
          Counter hits don't happen randomly — you <strong>set them up</strong>:
        </p>

        <KeyConcept title="The Setup Mindset" icon="🧠">
          <ol>
            <li><strong>Get plus frames</strong> — Jab (+1), db+4 (+3), Electric (+5)</li>
            <li><strong>Expect them to press</strong> — They want "their turn" back</li>
            <li><strong>Use CH move</strong> — f+4, 4, or Electric</li>
            <li><strong>They pressed → Counter hit</strong></li>
            <li><strong>Convert to damage</strong></li>
          </ol>
        </KeyConcept>

        <SubSection title="Frame Trap Examples">
          <ul>
            <li><strong>Jab (+1) → f+4</strong> — Your i16 f+4 beats their i17+ moves</li>
            <li><strong>db+4 (+3) → f+4</strong> — f+4 beats almost everything</li>
            <li><strong>EWHF (+5) → f+4</strong> — Uncontestable CH setup</li>
            <li><strong>EWHF (+5) → EWHF</strong> — They can't do anything</li>
            <li><strong>2,1 (-3) → 4</strong> — If they press, 4 catches them homing</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Confirming Counter Hits">
        <p>
          When you land a counter hit, you need to <strong>confirm</strong> it — recognize 
          that it was CH and convert to the proper follow-up.
        </p>

        <KeyConcept title="Visual Cues" icon="👁️">
          <ul>
            <li><strong>f+4 CH</strong> — Opponent crumples slowly, dash up and combo</li>
            <li><strong>4 CH</strong> — Opponent reels back, hit 1+2 or df+1,4</li>
            <li><strong>2,1,4 CH</strong> — Third hit wallsplats, continue combo</li>
            <li><strong>uf+3 CH</strong> — Opponent launches high, combo</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="Practice Confirming">
          In practice mode, set the dummy to random guard. Throw out f+4 repeatedly. 
          When it hits (especially CH), practice dashing up and combo. This builds the 
          muscle memory to confirm counter hits in real matches.
        </TipBox>
      </Section>

      <Section title="Mental Frames">
        <p>
          Some situations look minus for you but are actually "mental frame" advantage:
        </p>

        <SubSection title="The 2,1 Mental Frame">
          <p>
            2,1 is -3 on block. Technically, it's their turn. But:
          </p>
          <ul>
            <li><strong>2,1,4</strong> extension exists — they might eat CH wallsplat</li>
            <li>If they respect the extension, you can do <strong>d+4</strong> (low)</li>
            <li>If they press, <strong>2,1,4</strong> CH hits them</li>
          </ul>
          <p>
            This creates a mental mixup even when you're technically minus.
          </p>
        </SubSection>
      </Section>

      <Section title="Chapter Summary">
        <ul>
          <li><strong>f+4</strong> — Your primary CH tool. Use constantly.</li>
          <li><strong>4</strong> — Homing CH. Catches steps, guarantees follow-ups.</li>
          <li><strong>2,1,4</strong> — String CH. Catches mashers with wallsplat.</li>
          <li><strong>uf+3</strong> — Safer CH launcher. Low crushes.</li>
          <li><strong>EWHF</strong> — +5 on block sets up all your CH tools.</li>
        </ul>
        <p>
          The counter-hit game is where Jin's damage comes from. Set up your plus frames, 
          then punish them for pressing.
        </p>
      </Section>
    </Chapter>
  )
}
