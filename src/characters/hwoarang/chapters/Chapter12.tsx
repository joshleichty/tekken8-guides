import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  Collapsible,
  DecisionGrid,
  CoachCallout,
  ModeSwitch,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="The Game Plan"
      intro="Everything you've learned so far teaches you what Hwoarang can do. This chapter teaches you when to do it. The difference between a good Hwoarang and a great one isn't execution — it's decision-making. Two modes of play, two offensive philosophies, and the ability to switch between them on the fly. This is the strategic layer that turns your toolkit into a gameplan."
      hasPrevious
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
    >
      <Section title="Two Decisions">
        <p>
          Every moment of a Tekken round comes down to one question: <strong>am I attacking, or
          am I waiting?</strong> That's it. Not "which combo do I do" or "which string should I use."
          Those are execution problems. The strategic problem is simpler and harder: knowing which
          mode you should be in right now.
        </p>
        <p>
          Two things determine the answer: <strong>distance</strong> and <strong>life lead</strong>.
          If you're close and you need damage, you attack. If you're ahead and they're at range,
          you wait. Everything else is a variation of those two ideas.
        </p>

        <CoachCallout
          quote="You only need to make two decisions per round. Am I attacking or am I waiting? And if I'm attacking, am I assuming they press buttons, or am I assuming they respect me? That's two decisions. Everything else follows."
        />
      </Section>

      <Section title="The Spacing Dance">
        <p>
          Before you press a button, you need to understand <strong>where</strong> to stand. Every
          character has an effective range — the maximum distance where their key moves reach. Your
          job is to find that boundary and dance on it. Shimmy just inside their range, then back
          out. If they attack, they whiff and you punish with b+3. If they don't attack, you take
          your turn with a long-range option.
        </p>

        <CoachCallout
          quote="I'm gonna shimmy close, and as soon as I get within that range, I'm gonna go in and back out, see if you attack. If you don't attack, I'm now more inclined to take my turn and use my long range option."
        />

        <KeyConcept title="The Two Approaches From Range" icon="🎯">
          <p>
            When you reach the opponent's effective range, you have two choices:
          </p>
          <ul>
            <li><strong>Come in and back out:</strong> Walk forward into their range, immediately backdash out. If they press a button, it whiffs and you punish with b+3. If they don't attack, you now know they're passive — run in with your approach tools next time.</li>
            <li><strong>Come in and sidestep:</strong> Walk forward into their range, then sidestep. If they attack, the sidestep evades it and you punish. This is riskier than backing out, but the reward is higher — you're now at their side for a free launch.</li>
          </ul>
        </KeyConcept>

        <p>
          If the opponent tries to close the space themselves and rush you down, switch to
          keepout: d+4,4 from range checks them. If they respect your space and don't approach,
          you run in with 4,4,3 or 4,4,4, or use RFS d+4,3 from flamingo at range.
        </p>

        <TipBox variant="tip" title="Identify Their Range First">
          In the first 10 seconds of a match, don't attack. Move back and forth near range 3
          and watch what they throw out. That's their effective range. Once you know it, you
          can shimmy just outside it for the rest of the match.
        </TipBox>
      </Section>

      <Section title="Attack Mode vs Defense Mode">
        <p>
          Think of yourself as having two operating modes. You're always in one of them. The mistake
          most players make is mixing them — attacking with defensive habits, or defending with
          aggressive tendencies. When you're in a mode, commit to it.
        </p>

        <ModeSwitch
          title="Your Two Operating Modes"
          description="Click each mode to see its rules, tools, and when to switch. You should always know which mode you're in."
          modes={[
            {
              name: 'Attack Mode',
              icon: '⚔️',
              color: 'accent',
              trigger: 'You need damage, you just knocked them down, you blocked something punishable, or you landed a hit that transitions to flamingo',
              rules: [
                'Run your loops — d+3,4 into RFS pressure',
                'Use frame traps or take liberties based on their behavior',
                'Don\'t backdash or hesitate mid-pressure',
                'Every blocked move should transition into your next option',
                'Cash in with mids (RFS 4,3 or RFS 3~4) when they crack',
              ],
              keyTools: ['d+3,4', 'RFS 2', 'RFS f+4', 'df+1', 'f+2', 'qcb+3'],
              exitCondition: 'You\'re ahead by 30%+ health, they have rage, or you\'re at the wall with no angle',
            },
            {
              name: 'Defense Mode',
              icon: '🛡️',
              color: 'secondary',
              trigger: 'You have a life lead (30%+), they just activated heat, they have rage, or you\'re at range 3 with no reason to approach',
              rules: [
                'Backdash and watch for whiffs',
                'Don\'t run in — let them come to you',
                'Punish with b+3 (Tornado launcher) on whiffed moves',
                'Use df+1 and b+4 as mid-range checks, not pressure starters',
                'Accept small losses (chip, low pokes) — don\'t panic',
              ],
              keyTools: ['b+3', 'backdash', 'df+1', 'b+4', 'block → punish'],
              exitCondition: 'They close the life gap, their rage/heat expires, or you see a whiff you can punish into full offense',
            },
          ]}
        />

        <TipBox variant="tip" title="The Real Skill">
          Knowing your mode isn't hard. Switching modes mid-round is. Practice announcing to
          yourself: "I'm attacking now" or "I'm waiting now." If you can't name your mode, you're
          probably doing both poorly.
        </TipBox>
      </Section>

      <Section title="Life Lead as a Resource">
        <p>
          When you're ahead by 30% or more, the math fundamentally changes. You don't need to take
          risks. They do. Every second that passes with you ahead is a second closer to winning.
          This is when Defense Mode becomes your strongest weapon.
        </p>

        <KeyConcept title="The 30% Rule" icon="📊">
          <p>
            When you're ahead by roughly 30% life, stop running offense. Switch to Defense Mode.
            Backdash, wait for whiffs, punish with b+3. The opponent has to come to you now — they
            can't win by blocking. Every risk they take to close the gap is an opportunity for you
            to punish.
          </p>
          <ul>
            <li><strong>Ahead by 30%+:</strong> Defense Mode. Backdash, b+3 whiff punishment, be patient.</li>
            <li><strong>Even or behind:</strong> Attack Mode. Run your loops, force them to guess.</li>
            <li><strong>Way behind (rage territory):</strong> Full Attack Mode, but know your emergency buttons (df+3,4 power crush, rage art from neutral only).</li>
          </ul>
        </KeyConcept>

        <CoachCallout
          quote="Life lead is a resource. You earned it. Don't throw it away by running in and pressing buttons when you don't need to. Make them come to you and punish the approach."
        />
      </Section>

      <Section title="Two Offensive Approaches">
        <p>
          When you ARE in Attack Mode, you still have a decision: are you running <strong>frame traps</strong> or
          <strong> taking liberties</strong>? These are fundamentally different approaches, and
          picking the wrong one gets you killed.
        </p>

        <KeyConcept title="Frame Traps vs Liberties" icon="🔀">
          <p>
            <strong>Frame traps</strong> assume the opponent will press buttons. You use moves with
            frame advantage to stuff their attempts. If they mash after your +5, your i13 move
            beats their i10 jab. You're "trapping" their aggression.
          </p>
          <p>
            <strong>Taking liberties</strong> assumes the opponent will block and wait. You do things
            that aren't truly safe but they won't punish because they're respecting you. A -2 move
            followed by a throw. A string extension that's technically duckable but they won't duck.
          </p>
        </KeyConcept>

        <DecisionGrid
          title="Read Their Behavior, Pick Your Approach"
          description="Watch what the opponent does after your pressure. That tells you which approach to use."
          rows={[
            {
              situation: 'They mash after RFS 2 (+5)',
              response: 'Frame trap: b+4 or 2,f+4',
              reason: 'Your CH tools beat their jab. b+4 is i13, launches on CH.',
              risk: 'Whiffs if they backdash',
            },
            {
              situation: 'They block and wait patiently',
              response: 'Liberty: d+3,4 re-loop or qcb+3 throw',
              reason: 'They won\'t punish your second d+3,4 or break your throw if they\'re in respect mode.',
              risk: 'd+3,4 high is duckable; throw is breakable',
            },
            {
              situation: 'They duck after your highs',
              response: 'Frame trap: df+2 or RFS df+4',
              reason: 'Mid launchers beat ducking. df+2 from neutral, RFS df+4 from stance.',
              risk: 'Slow — loses to fast buttons',
            },
            {
              situation: 'They sidestep after your strings',
              response: 'Frame trap: df+4 or RFS 4,3',
              reason: 'Homing or tracking mids catch steps. df+4 is homing, RFS 4,3 tracks well.',
              risk: 'Predictable if overused',
            },
            {
              situation: 'They power crush through pressure',
              response: 'Liberty: enter stance → block',
              reason: 'Bait the power crush, block it (-14+), launch punish for more than your loop would earn.',
              risk: 'Requires read — if they don\'t crush, you gave up your turn',
            },
          ]}
        />

        <Collapsible title="Frame Trap Examples">
          <p>
            All frame traps start from a plus position. You block something or land a hit that
            gives you frames, then use a CH tool that beats their attempt to press.
          </p>
          <ul>
            <li>
              <strong>d+3,4 on block → RFS (+8~10):</strong> RFS f+4 (i8) beats EVERYTHING. If
              they press any button, they eat RFS f+4. This is the ultimate frame trap position.
            </li>
            <li>
              <strong>RFS 2 on block → RFF (+5):</strong> b+4 (i13 CH launcher) or 2,f+4 (i10
              into RFS) beat their i10 jabs. Running 3 → df+2 is a tighter frame trap —
              df+2 launches on CH at i15.
            </li>
            <li>
              <strong>1,2 → flamingo jab (+5) → d+4,2:</strong> Simple and devastating. 1,2 transitions
              into flamingo, flamingo jab is +5 on hit. People forget flamingo jab is plus five — they
              treat it like a regular jab. So d+4,2 is a complete frame trap after it. Use this whenever
              you land flamingo jab.
            </li>
            <li>
              <strong>df+1 on hit (+6):</strong> d+3,4 (i15 low-high) is uninterruptible. Guaranteed
              pressure continuation. You can also throw with qcb+3 (i11) since they're at +6 disadvantage.
            </li>
            <li>
              <strong>ws+4,4 on hit (+4 in RFF) → df+4:</strong> After ducking a high and punishing
              with ws+4,4, you're +4 in Right Foot Forward. Always follow with df+4 — it frame traps
              from +4. If df+4 counter-hits, you get a full launch combo. This should be automatic:
              ws+4,4 on hit, df+4 every time.
            </li>
          </ul>
        </Collapsible>

        <Collapsible title="Liberty Examples">
          <p>
            Liberties work when the opponent is scared. You do technically unsafe things because they
            won't challenge you. The moment they start challenging, switch to frame traps.
          </p>
          <ul>
            <li>
              <strong>Running d+3,4 again after RFS 2:</strong> Not a true frame trap — they
              COULD jab between the low. But if they're scared of RFS f+4, they won't.
            </li>
            <li>
              <strong>RFF f+3 (high, +12~+15 into LFS):</strong> Technically duckable, but in the
              middle of pressure most opponents won't duck it. If they start ducking, stop using it
              and switch to RFF b+2 (mid, +4).
            </li>
            <li>
              <strong>d+3,4 → d+3,4 → d+3,4:</strong> Triple looping. Not real. But if they haven't
              ducked the first two, the third one works. This is pure liberty — you're gambling they
              won't adapt mid-string.
            </li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="The Interchange">
        <p>
          Everything above — frame traps, liberties, spacing — connects into one offensive loop
          that drives Hwoarang's entire neutral game. This is how it all fits together:
        </p>

        <KeyConcept title="Poke → Sidestep → Plus Frame → Cash Out or Reset" icon="🔄">
          <p>
            The core loop is simple: <strong>poke, poke, poke, sidestep.</strong> When you sidestep,
            you make one decision: do I poke again, or do I go for a plus-frame move?
          </p>
          <p>
            If you go for the plus frame, you make another decision: do I cash out with damage
            (gives up your turn if it doesn't work), or do I play it safe with something that
            lets me sidestep again if it doesn't connect?
          </p>
          <p>
            You interchange these throughout the match. Poke, sidestep, plus frame, damage or
            safety, sidestep, poke again. The opponent never knows which part of the loop you're
            in, so they can't find the right time to challenge.
          </p>
        </KeyConcept>

        <CoachCallout
          quote="I have my pokes. I have my plus frames. I have a frame trap for every single one of my plus frames, and the frame trap is twofold: either I do one that gives up my turn at the end, or I do one that ends in small Tekken that I can sidestep after again to keep my turn. I literally interchange those throughout the match."
        />

        <TipBox variant="tip" title="Don't Overcomplicate">
          This sounds complex written out, but in practice it's just: press a button, move,
          press a button, move. The "interchange" is just varying which buttons you press and
          which direction you move. The opponent sees constant activity — you see a simple
          decision tree repeating.
        </TipBox>
      </Section>

      <Section title="Counter-Hit Arsenal">
        <p>
          Counter-hit tools are what make frame traps work. When you're plus and the opponent presses
          a button, these moves launch or give massive reward on counter-hit. Know which ones work
          from each position.
        </p>

        <KeyConcept title="CH Tools by Position" icon="💥">
          <p>
            The right CH tool depends on where you are. Don't use a flamingo CH tool from neutral,
            and don't use a neutral CH tool in flamingo.
          </p>
        </KeyConcept>

        <Collapsible title="From LFF (Neutral)" defaultOpen>
          <MoveCard
            character="hwoarang"
            move={{
              input: '2,f+4',
              hitLevel: ['h', 'h'],
              damage: '10, 14',
              startup: 'i10',
              onBlock: '-2 (RFS)',
              onHit: '+8 (RFS)',
              onCH: '+8 (RFS)',
              tags: ['CH tool', 'jab string'],
              description: 'Your fastest CH tool from neutral. 2 jab catches mashers, f+4 transitions to RFS at +8. On block you\'re only -2 in RFS — still your turn.',
            }}
            videoId="2,f+4"
            showVideo
          />
          <MoveCard
            character="hwoarang"
            move={{
              input: '2,f+3',
              hitLevel: ['h', 'h'],
              damage: '10, 21',
              startup: 'i10',
              onBlock: '-6',
              onHit: 'KND',
              onCH: 'KND',
              tags: ['CH tool', 'knockdown'],
              description: 'Same 2 jab start but f+3 gives a knockdown. More risky on block (-6) but higher reward. Use when you want damage, not continued pressure.',
            }}
            videoId="2,f+3"
            showVideo
          />
          <MoveCard
            character="hwoarang"
            move={{
              input: 'b+4',
              hitLevel: ['h'],
              damage: '20',
              startup: 'i13',
              onBlock: '-9',
              onHit: 'KND (RFF)',
              onCH: 'Launch (RFF)',
              tags: ['CH launcher', 'high'],
              description: 'Your go-to CH launcher from neutral. i13 startup means it beats most opponent responses at +5 or better. CH gives a full combo. On regular hit gives a knockdown into RFF. Safe enough on block at -9.',
            }}
            videoId="b+4"
            showVideo
          />
          <MoveCard
            character="hwoarang"
            move={{
              input: 'df+2',
              hitLevel: ['m'],
              damage: '20',
              startup: 'i15',
              onBlock: '-7',
              onHit: 'Launch',
              onCH: 'Launch',
              tags: ['launcher', 'safe mid'],
              description: 'Safe mid launcher. Doesn\'t need CH — launches on any hit. Use it as a CH tool at closer frame advantages where the opponent might duck. At -7 on block, completely safe.',
            }}
            videoId="df+2"
            showVideo
          />
        </Collapsible>

        <Collapsible title="From Flamingo Stances">
          <MoveCard
            character="hwoarang"
            move={{
              input: 'RFS df+4',
              hitLevel: ['m'],
              damage: '17',
              startup: 'i17',
              onBlock: '+1',
              onHit: '+8 (RFF)',
              onCH: 'Launch',
              tags: ['CH launcher', 'mid'],
              description: 'The flamingo mid check. +1 on block means you\'re safe. +8 on hit gives continued pressure. On CH, full launch combo. This is what you use when they start ducking in RFS.',
            }}
            videoId="RFS.df+4"
            showVideo
          />
          <MoveCard
            character="hwoarang"
            move={{
              input: 'LFS b+4,3',
              hitLevel: ['m', 'h'],
              damage: '16, 18',
              startup: 'i14',
              onBlock: '-4',
              onHit: 'KND',
              onCH: 'KND',
              tags: ['LFS tool', 'power'],
              description: 'Big damage from LFS. The first hit is a mid that catches duckers. Second hit is a high that can be ducked, but in pressure situations opponents rarely do.',
            }}
            videoId="LFS.b+4,3"
            showVideo
          />
          <MoveCard
            character="hwoarang"
            move={{
              input: 'LFS d+4',
              hitLevel: ['l'],
              damage: '12',
              startup: 'i14',
              onBlock: '-13',
              onHit: '+4 (RFF)',
              tags: ['low', 'LFS mix'],
              description: 'LFS low option. Pairs with LFS f+3 (mid) as a classic low/mid mixup. On hit you\'re +4 in RFF, continuing pressure. On block, -13 means most characters can\'t launch but can punish.',
            }}
            videoId="LFS.d+4"
            showVideo
          />
          <MoveCard
            character="hwoarang"
            move={{
              input: 'LFS f+3',
              hitLevel: ['m'],
              damage: '22',
              startup: 'i16',
              onBlock: '+4 (LFS)',
              onHit: '+8 (LFS)',
              tags: ['heat engager', 'LFS key'],
              description: 'The reason LFS is terrifying. Mid heat engager that\'s +4 on block into the same stance. On hit, +8 means you get to press again. This move alone makes LFS transitions worth it.',
            }}
            videoId="LFS.f+3"
            showVideo
          />
        </Collapsible>

        <Collapsible title="In Heat">
          <MoveCard
            character="hwoarang"
            move={{
              input: 'RFS f+4,4',
              hitLevel: ['m', 'm'],
              damage: '10, 15',
              startup: 'i8',
              onBlock: '-6',
              onHit: 'Launch',
              onCH: 'Tornado',
              tags: ['heat only', 'fastest launcher'],
              description: 'In heat, this becomes a natural hit launcher at 8 frames. -6 on block is safe. CH gives Tornado. This is the single best reason to activate heat — an 8-frame mid launcher that\'s safe.',
            }}
            videoId="H.RFS.f+4,4"
            showVideo
          />
          <MoveCard
            character="hwoarang"
            move={{
              input: '1,1,1',
              hitLevel: ['h', 'h', 'm'],
              damage: '5, 7, 20',
              startup: 'i10',
              onBlock: '-12',
              onHit: 'KND',
              tags: ['heat string', 'jab extension'],
              description: 'Triple jab with mid finisher in heat. The third hit launches. Use it as a frame trap — the first two jabs catch mashers, and the mid finisher catches anyone who ducks.',
            }}
            videoId="1,1"
            showVideo
          />
        </Collapsible>
      </Section>

      <Section title="Power Crush Awareness">
        <p>
          Hwoarang's best power crush is d+4,3,4 — but most players use it wrong. The key
          is the hit confirm: the first two hits are safe. Only commit to the third hit on a
          successful power crush absorption.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'd+4,3,4',
            hitLevel: ['l', 'h', 'm'],
            damage: '12, 12, 25',
            startup: 'i20',
            onBlock: '-14 (full) / -9 (d+4,3 only)',
            onHit: 'KND',
            tags: ['power crush', 'hit confirm'],
            description: 'Low-high-mid power crush. If d+4,3 absorbs a hit, the full string is guaranteed. If it\'s just blocked, stop at d+4,3 — you\'re only -9 instead of launch punishable -14. The hit confirm is: feel the absorption, then press 4.',
          }}
          videoId="d+4"
          showVideo
        />

        <TipBox variant="warning" title="d+4,3 vs d+4,3,4">
          If you power crush through their attack, commit to the third hit — it's guaranteed
          and does the real damage. If you just blocked it or nothing happened, stop at d+4,3.
          The difference is -9 (safe) vs -14 (launch punishable). This is one of the most
          important hit confirms in Hwoarang's kit.
        </TipBox>
      </Section>

      <Section title="Mids as Cash-Out">
        <p>
          Here's something most Hwoarang players get wrong: <strong>mids end pressure, they
          don't continue it</strong>. Every time you throw a mid, you're "cashing in" the
          fear you've built with lows and highs. If you cash in too early, you get nothing.
          If you never cash in, they stop respecting you.
        </p>

        <CoachCallout
          quote="Think of mids as the cash register. You've been building the bill with lows and highs — that's the shopping. The mid is when you collect. You wouldn't ring someone up before they've shopped."
          context="This applies to RFS 4,3, RFS 3~4, and any mid launcher. They're endings, not beginnings."
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'RFS 4,3',
            hitLevel: ['m', 'm'],
            damage: '16, 12',
            startup: 'i14',
            onBlock: '+4 (LFS)',
            onHit: '+11 (LFS)',
            onCH: 'Wall splat',
            tags: ['mid cash-out', 'low crushes'],
            description: 'Safe mid-mid that transitions to LFS. +4 on block means it\'s not really "ending" pressure, but you\'ve moved from RFS to LFS — a different kind of pressure. On CH near a wall, wall splat for big damage.',
          }}
          videoId="RFS.4,3"
          showVideo
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'RFS 3~4',
            hitLevel: ['m', 'm'],
            damage: '18, 18',
            startup: 'i16',
            onBlock: '-7 (blue spark: +1)',
            onHit: 'Launch',
            tags: ['mid launcher', 'blue spark'],
            description: 'Mid-mid launcher from RFS. The blue spark version (tighter input) is +1 on block — effectively safe. Regular version is -7, still safe. This is your big mid cash-out from flamingo.',
          }}
          videoId="RFS.3~4"
          showVideo
        />

        <TipBox variant="tip" title="When to Cash In">
          Cash in when you see the opponent flinching — crouching randomly, pressing buttons at
          bad times, or freezing up. Two to three loops of pressure, THEN throw the mid. Not before.
        </TipBox>
      </Section>

      <Section title="The Approach Toolkit">
        <p>
          Getting in is its own skill. Hwoarang has multiple approach tools, and picking the wrong
          one gets you killed before you can start your offense. The core principle: test with
          a safe option first, then escalate.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: '4,4,3',
            hitLevel: ['h', 'l', 'm'],
            damage: '13, 7, 22',
            startup: 'i11',
            onBlock: '-13 (full string)',
            onHit: 'KND',
            tags: ['approach', 'string'],
            description: 'High-low-mid approach string. The first hit checks their buttons, the low forces crouch, the mid catches them. On block the full string is -13. Mix with 4,4,4 — same start but mid-mid instead of low-mid.',
          }}
          videoId="4,4,3"
          showVideo
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: '4,4,4',
            hitLevel: ['h', 'h', 'm'],
            damage: '13, 7, 20',
            startup: 'i11',
            onBlock: '-12',
            onHit: 'KND',
            tags: ['approach', 'alternative'],
            description: 'High-high-mid alternative to 4,4,3. Same first hit but all-high until the last kick. Use this when they\'re focused on blocking low after 4,4. Conditions them not to duck, then switch to 4,4,3.',
          }}
          videoId="4,4,4"
          showVideo
        />

        <DecisionGrid
          title="Low Poke Selection"
          description="Your low poke choice depends on what you need: safety, range, or reward."
          rows={[
            {
              situation: 'Need a safe low check',
              response: 'db+4',
              reason: '-12 on block, most characters can\'t launch. Consistent chip damage with low risk.',
              risk: 'Low reward per hit',
            },
            {
              situation: 'Want to start flamingo pressure',
              response: 'd+3,4',
              reason: 'Transitions to RFS at +8 on block. Your entire loop system starts here.',
              risk: 'Second hit is a duckable high',
            },
            {
              situation: 'Need range and high crush',
              response: 'db+3',
              reason: 'Long range low that high crushes. Great when they\'re using standing highs to keep you out.',
              risk: 'Slower startup, lower damage',
            },
          ]}
        />

        <MoveCard
          character="hwoarang"
          move={{
            input: 'RFS d+4,3',
            hitLevel: ['l', 'h'],
            damage: '12, 18',
            startup: 'i20',
            onBlock: '-13',
            onHit: 'KND',
            tags: ['hell sweep', 'approach/keepout'],
            description: 'Hell sweep from RFS. Works as both an approach tool (from flamingo at range) and a keepout option. In heat, the full d+4,3,4 is a natural combo. The fear of this low is what makes RFS mids work.',
          }}
          videoId="RFS.d+4,3"
          showVideo
        />
      </Section>

      <Section title="Throws in Context">
        <p>
          Throws aren't just a mixup tool — they punish respect. When the opponent starts blocking
          everything, throws become your highest-percentage option. The key is timing: use them
          after a plus frame situation, not raw.
        </p>

        <MoveCard
          character="hwoarang"
          move={{
            input: 'qcb+3',
            hitLevel: ['throw'],
            damage: '45',
            startup: 'i11',
            onBlock: 'N/A',
            onHit: 'Floor break',
            tags: ['command throw', '1 break'],
            description: 'Your best command throw. i11 means it works after df+1 on hit (+6) — they literally cannot jab before the throw connects. 45 damage, floor breaks. 1 break only.',
          }}
          showVideo={false}
        />

        <KeyConcept title="Throw Setups" icon="🤼">
          <p>
            Throws work best from specific plus-frame situations. The key is that Hwoarang's
            command throw (qcb+3) is i11 — faster than most command throws at i12. This opens
            up setups other characters can't use.
          </p>
          <ul>
            <li>
              <strong>df+1 on hit (+6) → qcb+3:</strong> At +6, your i11 throw is faster than
              their i10 jab. They literally cannot interrupt. If they're blocking, throw them.
              If they're pressing, frame trap with b+4 instead.
            </li>
            <li>
              <strong>d+1 (dig jab) on hit (+6) → throw:</strong> Dig jab stops everything and
              puts you at +6. From there, go into qcb+3 (1 break), your 2 throw, or 1+2 throw.
              The damage isn't massive, but the mental damage is — they have to respect your plus
              frames AND break the right throw.
            </li>
            <li>
              <strong>Running 3 on block (+6) → throw:</strong> Running 3 is already an approach
              tool. On block, you're +6. Use it the same way: qcb+3 frame traps from +6. They
              blocked your approach, now they eat a throw. Or they try to press a button and eat
              a frame trap instead.
            </li>
          </ul>
        </KeyConcept>

        <CoachCallout
          quote="I like to do dig jab into throw quite often with Hwoarang. You're plus six after d+1. That's a lot of frames to play with. His one throw is eleven frames — that's pretty fast for a command throw. You can get command throws as frame traps that other characters can't."
        />
      </Section>

      <Section title="When Pressure Ends">
        <p>
          Let's be honest about Hwoarang's pressure. Some of it is real, and some of it only works
          because the opponent doesn't know it's fake. Knowing the difference is what separates
          grinding ranked from actually improving.
        </p>

        <CoachCallout
          quote="d+3,4 on hit — that's inescapable. They cannot press. RFS at +8 minimum, everything works. But flamingo jab chains? Those are 'fake plus.' You're relying on fear, not frames. Know when you're running real pressure and when you're bluffing."
          context="This isn't a reason not to bluff — bluffing works. But know that you're bluffing."
        />

        <KeyConcept title="Real vs Fake Plus" icon="⚠️">
          <ul>
            <li><strong>Real plus:</strong> d+3,4 on block (+8~10 in RFS), RFS 4,3 on block (+4 in LFS), LFS f+3 on block (+4 in LFS), df+1 on hit (+6).</li>
            <li><strong>Fake plus:</strong> RFS 2 on block into RFF (+5 — real plus, but the next move from RFF isn't guaranteed), RFF f+3 on block (+12 — but it's a HIGH, they can duck next time), jab chains from flamingo (respect-based, not frame-based).</li>
            <li><strong>Rule:</strong> If they can interrupt with a jab between your last move and your next one, you're taking a liberty, not running a frame trap. That's fine — just know it.</li>
          </ul>
        </KeyConcept>

        <p>
          RFS 4,3 is a good example. It's +4 in LFS on block. But from LFS you need to press a
          button — LFS f+3 is i16. At +4 advantage, your effective startup is i12. Their i10 jab
          still beats your LFS f+3. So "plus 4 in LFS" really means "effectively plus 1-2 in
          practice." The frame advantage is real, but the payoff depends on what options are available
          from that stance.
        </p>
      </Section>

      <Section title="Mental Checklist">
        <p>
          Before every round, ask yourself these three questions. If you can answer them, you have
          a gameplan. If you can't, you're just pressing buttons and hoping.
        </p>

        <KeyConcept title="Three Questions" icon="🧠">
          <ol>
            <li><strong>Am I attacking or waiting?</strong> — Check distance and life lead.</li>
            <li><strong>Am I trapping or taking liberties?</strong> — Check whether they press or block.</li>
            <li><strong>When do I switch?</strong> — If attacking: switch to defense when you hit 30%+ lead. If defending: switch to attack when they close the gap or whiff something big.</li>
          </ol>
        </KeyConcept>

        <CoachCallout
          quote="You don't need to play perfectly. You need to play intentionally. The player who knows what they're trying to do will always beat the player who's just reacting to whatever happens."
        />
      </Section>
    </Chapter>
  )
}
