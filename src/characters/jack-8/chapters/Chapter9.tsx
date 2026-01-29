import { Chapter, Section, SubSection } from '../../../components/guide'
import { 
  MoveCard,
  KeyConcept, 
  TipBox,
  SkillCheck
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter9({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={9}
      title="Crouch Game"
      intro="Jack from crouch has one of the best movesets in Tekken. This chapter teaches you how to leverage your crouch position for devastating mixups."
      onPrevious={() => goToChapter(8)}
      onNext={() => goToChapter(10)}
      nextLabel="Beginner Combos"
    >
      <Section title="Why Jack's Crouch Game is Elite">
        <p>
          Most characters have limited options from crouch — maybe a ws4 and one good low. 
          <span className="highlight">Jack has an entire offense</span> from crouch position. 
          And db+1 puts you there constantly.
        </p>

        <KeyConcept title="The Crouch Advantage" icon="🦵">
          <ul>
            <li><strong>db+1 ends in crouch</strong> — Your main low starts the mixup</li>
            <li><strong>Multiple lows available</strong> — FC db+1, d+1,1, FC 1+2</li>
            <li><strong>Strong mids</strong> — ws4, FC df+2, FC df+1,2,1</li>
            <li><strong>Mix constantly</strong> — Low-low, low-mid, mid-low, mid-mid</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Party Starter">
          <strong>db+1 is the party starter.</strong> It hits, you're +1 in crouch. From 
          there, the guessing game begins. They never know what's coming.
        </TipBox>
      </Section>

      <Section title="Getting to Crouch">
        <p>Ways to enter crouch state:</p>
        <ul>
          <li><strong>db+1 on hit</strong> — +1c, your main entry</li>
          <li><strong>db+2 on hit</strong> — +3c, power low entry</li>
          <li><strong>Hold d or db</strong> — Manual crouch</li>
          <li><strong>Block a high</strong> — Crouch under it</li>
        </ul>
      </Section>

      <Section title="While Standing (WS) Moves">
        <SubSection title="ws4 — The Quick Check">
          <MoveCard character="jack-8"
            move={{
              input: 'ws4',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i11',
              onBlock: '-6',
              onHit: '+5',
              tags: ['Mid', 'WS Move', 'Fast', 'Punisher'],
              description: 'i11 mid from crouch. Your fastest WS option and punisher.',
              notes: [
                'Standard i11 WS punish',
                '+5 on hit lets you continue',
                'Use after db+1 to check buttons'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="ws2,1 — Damage Punish">
          <MoveCard character="jack-8"
            move={{
              input: 'ws2,1',
              hitLevel: ['m', 'm'],
              damage: '10, 17',
              startup: 'i14',
              onBlock: '-14c',
              onHit: '+3d',
              onCH: '+49a',
              tags: ['Mid', 'Mid', 'WS Punish', 'CH Combo'],
              description: 'Better damage WS punish. CH gives combo.',
              notes: [
                'Use for -14 low punishes',
                'Also has ws2,4 extension'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="ws1 — WS Launcher">
          <MoveCard character="jack-8"
            move={{
              input: 'ws1',
              hitLevel: ['m'],
              damage: '14',
              startup: 'i15',
              onBlock: '-13',
              onHit: '+34a (+24)',
              tags: ['Mid', 'Launcher', 'WS Punish'],
              description: 'WS launcher for -15 lows. Full combo.',
          }}
        showVideo
        />
        </SubSection>
      </Section>

      <Section title="Full Crouch (FC) Lows">
        <SubSection title="FC db+1 — The Crouch Low">
          <MoveCard character="jack-8"
            videoId="FC.db+1"
            move={{
              input: 'FC db+1',
              hitLevel: ['l'],
              damage: '14',
              startup: 'i14',
              onBlock: '-11',
              onHit: '+3',
              tags: ['Low', 'FC Move', 'Huge Range', 'Has Extensions'],
              description: 'Your best crouch low. Absurd range, potentially unpunishable.',
              notes: [
                'FC db+1,1 — low-mid extension',
                'FC db+1,1,1 — full string, chargeable',
                'Max range can be unpunishable'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="d+1,1 (FC) — Double Low">
          <MoveCard character="jack-8"
            videoId="FC.d+1,1"
            move={{
              input: 'FC d+1,1',
              hitLevel: ['l', 'l'],
              damage: '10, 14',
              startup: 'i19',
              onBlock: '-12',
              onHit: '+5',
              tags: ['Low', 'Low', 'FC Move'],
              description: 'Double low from crouch. Good for chip.',
              notes: [
                'Both hits are low',
                'Catches people blocking mid'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="FC 1+2 — Power Crouch Low">
          <MoveCard character="jack-8"
            videoId="FC.1+2"
            move={{
              input: 'FC 1+2',
              hitLevel: ['l'],
              damage: '21',
              startup: 'i24',
              onBlock: '-15',
              onHit: '+13d',
              tags: ['Low', 'FC Move', 'Power Low', 'Has Follow-up'],
              description: 'Big damage crouch low. Has guaranteed follow-up.',
              notes: [
                'FC 1+2,1+2 is guaranteed on hit',
                'Total 37 damage if you didn\'t block low'
              ]
          }}
        showVideo
        />
        </SubSection>
      </Section>

      <Section title="Full Crouch (FC) Mids">
        <SubSection title="FC df+2 — The Mid Starter">
          <MoveCard character="jack-8"
            videoId="FC.df+2"
            move={{
              input: 'FC df+2',
              hitLevel: ['m'],
              damage: '12',
              startup: 'i17',
              onBlock: '-13',
              onHit: '-2',
              tags: ['Mid', 'FC Move', 'Has Extensions'],
              description: 'Mid from crouch with multiple extensions.',
              notes: [
                'FC df+2,1 — mid-mid extension',
                'FC df+2,d+1 — mid-low',
                'FC df+2,f+1 — mid-high (wall splats)'
              ]
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="FC df+2 Extensions">
          <MoveCard character="jack-8"
            videoId="FC.df+2,1"
            move={{
              input: 'FC df+2,1',
              hitLevel: ['m', 'm'],
              damage: '12, 10',
              startup: 'i17',
              onBlock: '-4',
              onHit: '+7',
              tags: ['Mid', 'Mid', 'FC Extension'],
              description: 'Mid-mid from crouch. +7 on hit.',
          }}
        showVideo
        />

          <MoveCard character="jack-8"
            videoId="FC.df+2,d+1"
            move={{
              input: 'FC df+2,d+1',
              hitLevel: ['m', 'l'],
              damage: '12, 8',
              startup: 'i17',
              onBlock: '-11',
              onHit: '+0',
              tags: ['Mid', 'Low', 'FC Extension'],
              description: 'Mid-low from crouch. Mix with mid-mid.',
          }}
        showVideo
        />

          <MoveCard character="jack-8"
            videoId="FC.df+2,f+1"
            move={{
              input: 'FC df+2,f+1',
              hitLevel: ['m', 'h'],
              damage: '12, 23',
              startup: 'i17',
              onBlock: '-4',
              onHit: '+32a',
              tags: ['Mid', 'High', 'FC Extension', 'Wall Splat'],
              description: 'Mid-high from crouch. Wall splats.',
          }}
        showVideo
        />
        </SubSection>

        <SubSection title="FC df+1,2,1 — Crumple Combo">
          <MoveCard character="jack-8"
            videoId="FC.df+1,2,1"
            move={{
              input: 'FC df+1,2,1',
              hitLevel: ['m', 'm', 'm'],
              damage: '5, 8, 11',
              startup: 'i23',
              onBlock: '-11',
              onHit: '+16cs',
              tags: ['Mid', 'Mid', 'Mid', 'FC Move', 'Crumple'],
              description: 'Crumple combo from crouch. Natural combo.',
              notes: [
                'All hits natural combo',
                'Crumple state on hit',
                'Full extension FC df+1,2,1,1 is guard break'
              ]
          }}
        showVideo
        />
        </SubSection>
      </Section>

      <Section title="The Crouch Mixup Game">
        <KeyConcept title="From Crouch Options" icon="🔀">
          <p><strong>Low Options:</strong></p>
          <ul>
            <li><strong>FC db+1</strong> — Fast low, huge range, extensions</li>
            <li><strong>d+1,1</strong> — Double low for chip</li>
            <li><strong>FC 1+2</strong> — Power low, guaranteed follow-up</li>
          </ul>
          <p style={{ marginTop: '16px' }}><strong>Mid Options:</strong></p>
          <ul>
            <li><strong>ws4</strong> — Fast i11 check</li>
            <li><strong>FC df+2</strong> — Starter with low/mid/high extensions</li>
            <li><strong>FC df+1,2,1</strong> — Crumple combo</li>
          </ul>
        </KeyConcept>

        <SubSection title="Mix Pattern Examples">
          <p><strong>Low-Low:</strong> FC db+1 → FC db+1</p>
          <p><strong>Low-Mid:</strong> FC db+1 → ws4</p>
          <p><strong>Mid-Low:</strong> FC df+2 → FC df+2,d+1</p>
          <p><strong>Mid-Mid:</strong> FC df+2 → FC df+2,1</p>
        </SubSection>

        <TipBox variant="tip" title="The Pattern">
          After db+1 hits, you're +1 in crouch. They have to guess:
          <br />• More lows? → Block low
          <br />• Mids? → Block mid
          <br />
          <strong>They can't block both.</strong> That's the game.
        </TipBox>
      </Section>

      <Section title="Crouch Game Flow">
        <KeyConcept title="The Crouch Loop" icon="🔄">
          <ol>
            <li><strong>Hit db+1</strong> — Now you're +1c</li>
            <li><strong>Guess what they'll do</strong></li>
            <li><strong>If they block mid:</strong> FC db+1 or FC 1+2</li>
            <li><strong>If they block low:</strong> ws4 or FC df+1,2,1</li>
            <li><strong>If they press:</strong> ws4 counter-hits them</li>
            <li><strong>Repeat</strong> — The crouch game never ends</li>
          </ol>
        </KeyConcept>
      </Section>

      <Section title="Checkpoint">
        <SkillCheck
          title="Crouch Mastery Check"
          subtitle="Confirm you understand Jack's crouch game"
          skills={[
            { id: 'entry', skill: 'I use db+1 to enter crouch with advantage', description: '+1c party starter' },
            { id: 'fc-lows', skill: 'I know FC db+1 and its extensions', description: 'Low-mid from crouch' },
            { id: 'fc-mids', skill: 'I use FC df+2 with extensions', description: 'Mid-low, mid-mid options' },
            { id: 'mix', skill: 'I mix lows and mids from crouch', description: 'Not predictable' },
          ]}
          requiredToPass={3}
        />
      </Section>

      <Section title="Chapter Summary">
        <p>Jack's crouch arsenal:</p>
        <ul>
          <li><strong>Entry:</strong> db+1 (+1c) or db+2 (+3c)</li>
          <li><strong>WS Moves:</strong> ws4 (i11), ws2,1 (punish), ws1 (launcher)</li>
          <li><strong>FC Lows:</strong> FC db+1, d+1,1, FC 1+2</li>
          <li><strong>FC Mids:</strong> FC df+2 (extensions), FC df+1,2,1 (crumple)</li>
        </ul>
        <p>
          Next chapter covers beginner combos — how to convert your launchers into damage.
        </p>
      </Section>
    </Chapter>
  )
}
