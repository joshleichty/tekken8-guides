import { Chapter, Section } from '../../../components/guide'
import { MoveCard, ComboCard, KeyConcept, TipBox, Flowchart } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter7({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={7}
      title="Heat"
      intro="Heat in Tekken 8 gives every character a temporary power boost. For Hwoarang, heat transforms his already oppressive pressure into something nightmarish: his fastest move becomes a launcher, his hell sweep becomes a natural combo, and every kick does chip damage through block. Knowing when and how to activate heat is the difference between wasting your once-per-round resource and winning a round with it."
      hasPrevious
      onPrevious={() => goToChapter(6)}
      onNext={() => goToChapter(8)}
      nextLabel="Defense"
    >
      <Section title="Heat Engagers">
        <p>
          You activate heat by landing a heat engager and pressing forward for the heat dash.
          Hwoarang has five heat engagers, each from a different range and situation. The engager
          you choose determines your follow-up and how much damage you get.
        </p>

        <MoveCard
          character="hwoarang"
          videoId="f,F+4"
          move={{
            input: 'f,f+4',
            hitLevel: ['h'],
            damage: '28',
            startup: 'i18',
            onBlock: '+5',
            onHit: '+8',
            tags: ['Heat Engager', 'Approach', 'High', 'Plus on Block'],
            description: 'Your most common heat engage. You\'re already using this as an approach tool — now it doubles as your heat activation. On hit, heat dash gives massive combo damage. Even on block at +5, you\'re plus in heat with chip damage on every kick. The catch: it\'s a high. If they duck, no heat.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="LFS.f+3"
          move={{
            input: 'LFS f+3',
            hitLevel: ['m'],
            damage: '23',
            startup: 'i19',
            onBlock: '-12',
            onHit: '+14',
            tags: ['Heat Engager', 'Mid', 'From LFS'],
            description: 'Your mid heat engager from Left Flamingo. Heat dash gives +5 and +36a(+26) for full combo. At -12 on block it\'s punishable, but you\'re in LFS when you throw it — the opponent rarely gets a clean punish because of the stance transition. Best used mid-loop when you\'re already in LFS after d+3,4 → RFS 2 → d+3,4 → LFS.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFS.b+3"
          move={{
            input: 'RFS b+3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i16',
            onBlock: '-9',
            onHit: '+7',
            tags: ['Heat Engager', 'Mid', 'From RFS', 'Safe'],
            description: 'Safe mid heat engager from Right Flamingo at -9 on block. Heat dash gives +5 and +42a(+27) for the highest heat dash damage of any engager. Use this when you\'re in RFS from d+3,4 and want to cash out with heat. i16 is slower than RFS f+4 but it\'s a mid that can\'t be ducked.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="RFF.df+3"
          move={{
            input: 'RFF df+3',
            hitLevel: ['m'],
            damage: '21',
            startup: 'i22',
            onBlock: '+1',
            onHit: '+6',
            tags: ['Heat Engager', 'Homing', 'From RFF', 'Plus on Block'],
            description: 'Homing mid from RFF that\'s also a heat engager. +1 on block even without heat dash. Tracks both sides, so the opponent can\'t sidestep it. Heat dash gives +5 and +36a(+26). Your best option when the opponent is sidestepping your RFF pressure.',
          }}
          showVideo
        />

        <MoveCard
          character="hwoarang"
          videoId="df+3+4"
          move={{
            input: 'df+3+4',
            hitLevel: ['m', 'h', 'm'],
            damage: '7, 4, 17',
            startup: 'i13',
            onBlock: '-14',
            onHit: '+4c',
            tags: ['Heat Engager', '13f Punish', 'Risky'],
            description: 'Your fastest heat engager at i13 — but -14 on block means you eat a launch if they block it. Heat dash gives +5 and +43d(+35) for massive damage. Best used as a guaranteed punish where the risk doesn\'t exist. Also available from RFF. Jails on block so the full string is guaranteed if the first hit connects.',
          }}
          showVideo
        />

        <Flowchart
          title="Which Heat Engager When?"
          nodes={[
            { type: 'start', label: 'You want to activate heat' },
            { type: 'decision', label: 'Where are you?', branches: [
              { label: 'Neutral / Approaching', action: 'f,f+4 (high, +5 on block, most common)' },
              { label: 'In RFS (from d+3,4)', action: 'RFS b+3 (safe mid, best heat dash damage)' },
              { label: 'In LFS (from loops)', action: 'LFS f+3 (mid, -12 but hard to punish from stance)' },
              { label: 'In RFF (from transitions)', action: 'RFF df+3 (homing mid, +1 on block)' },
            ]},
            { type: 'end', label: 'Punishing a -13+ move → df+3+4 (guaranteed, no risk)' },
          ]}
        />
      </Section>

      <Section title="What Heat Changes">
        <p>
          Heat isn't just about the engager combo. Once heat is active, your entire pressure
          system upgrades. Three things change that matter:
        </p>

        <KeyConcept title="1. RFS f+4,4 Becomes a Launcher" icon="🔥">
          <p>
            In heat, RFS f+4,4 — your <strong>8-frame move</strong> — becomes a natural hit
            with Tornado on counter hit. This is transformative. After d+3,4 on block (+8 in RFS),
            RFS f+4,4 comes out at frame 0 and cannot be interrupted by any human being.
          </p>
          <p>
            On normal hit, both hits connect naturally. On counter hit, both hits connect with
            Tornado for a full combo. At -6 on block, it's safe. This means in heat, your RFS
            pressure has a <strong>safe 8-frame CH launcher</strong> — the fastest launcher in
            the entire game from this position.
          </p>
        </KeyConcept>

        <MoveCard
          character="hwoarang"
          videoId="RFS.f+4,4"
          move={{
            input: 'Heat: RFS f+4,4',
            hitLevel: ['h', 'h', 'h'],
            damage: '8, 8, 9',
            startup: 'i8',
            onBlock: '-6',
            onHit: 'Tornado (CH)',
            tags: ['Heat Enhanced', 'i8', 'CH Tornado', 'Safe'],
            description: 'In heat, the third hit of RFS f+4 extension becomes natural on hit and gives Tornado on counter hit. At -6 on block, nobody can punish it. This turns every RFS entry in heat into a potential launcher — the opponent has to guess whether to press (and eat CH Tornado) or block (and eat your mids and lows).',
          }}
          showVideo
        />

        <KeyConcept title="2. RFS d+4,3,4 Becomes Natural" icon="🔥">
          <p>
            Outside heat, RFS d+4,3 is your hell sweep — but the third hit (4) can be ducked
            on normal hit. In heat, the full RFS d+4,3,4 becomes a natural combo on hit for
            a full knockdown. This means your hell sweep goes from a modest-reward low to a
            <strong>knockdown low</strong> that keeps you in stance.
          </p>
          <p>
            Combined with the RFS f+4,4 threat, your RFS in heat has a low that knocks down AND
            a high that launches. The opponent is in a true mixup every time you enter RFS in heat.
          </p>
        </KeyConcept>

        <KeyConcept title="3. Chip Damage on Every Kick" icon="🔥">
          <p>
            In heat, all your kicks do chip damage through block. For a character who throws
            as many kicks as Hwoarang — often 5-6 per pressure loop — this adds up fast.
            A full loop cycle in heat might do 15-20 chip damage even if the opponent blocks
            everything.
          </p>
          <p>
            This changes the math at the end of rounds. If the opponent has 20 health left and
            you activate heat, they can't just hold back and block — the chip damage will kill
            them. They have to take a risk, and taking risks against Hwoarang's loops is exactly
            what you want them to do.
          </p>
        </KeyConcept>
      </Section>

      <Section title="When to Activate">
        <p>
          Heat is once per round. Wasting it means losing your strongest tool. Here are the
          situations where heat activation is most valuable:
        </p>

        <h3>Best Times to Engage</h3>
        <ul>
          <li><strong>Wall pressure:</strong> Activating heat near the wall turns your loops into a death trap. Chip damage prevents the opponent from just blocking, and your wall combo damage is already high. Heat at the wall closes rounds.</li>
          <li><strong>Mid-loop when you have momentum:</strong> If you've been running loops and the opponent is respecting, RFS b+3 heat engage into heat pressure is devastating. You're already in stance, and heat makes your RFS options lethal.</li>
          <li><strong>Guaranteed punishment:</strong> df+3+4 at 13f is your fastest engager. When you block something -13 or worse, heat engage for free damage plus heat pressure. Zero risk.</li>
          <li><strong>Closing a round:</strong> If the opponent is at 30 health or less, heat chip damage alone might finish them. Activate and run your loops — even if they block everything, the chip damage closes it out.</li>
        </ul>

        <h3>When NOT to Engage</h3>
        <ul>
          <li><strong>Full screen:</strong> You need to be in pressure range to benefit from heat. Activating from full screen wastes the timer on approach.</li>
          <li><strong>When you're losing badly:</strong> If you're at 30 health and they're at 130, heat won't save you. Sometimes it's better to save the engagement opportunity for a later round. Remember: you get one heat per round regardless, but using it poorly wastes your advantage.</li>
          <li><strong>Against an opponent who's already adapting:</strong> If they're ducking d+3,4, sidestepping your approaches, and punishing your transitions, heat won't fix a broken gameplan. Fix the reads first, then engage.</li>
        </ul>

        <TipBox variant="tip" title="Heat Timer Management">
          Heat lasts about 10 seconds, but every attack you land extends it slightly. Hwoarang
          is one of the best characters at maintaining heat because his loops involve constant
          contact — each kick in the loop resets the timer a little. A full pressure loop cycle
          in heat can keep the heat active for much longer than 10 seconds.
        </TipBox>
      </Section>

      <Section title="Heat Smash">
        <MoveCard
          character="hwoarang"
          videoId="H.2+3"
          move={{
            input: 'Heat Smash (2+3)',
            hitLevel: ['m'],
            damage: '88',
            startup: 'i17',
            onBlock: '+11',
            onHit: '+35d (+14)',
            tags: ['Heat Smash', 'Plus on Block', 'Mid'],
            description: 'Your once-per-round super move. i17 mid that does 88 damage on hit and is +11 on block. Yes, +11 on BLOCK — the opponent can\'t punish it even if they block it, and you\'re massively plus. Transitions to RFS. Jails from the first hit. Use this to close out rounds or when you\'re sure the opponent will block (the +11 lets you continue pressure).',
          }}
          showVideo
        />

        <TipBox variant="warning" title="Heat Smash vs. Heat Pressure">
          The heat smash does 88 damage in one hit. But using heat for pressure — running loops
          with chip damage, threatening RFS f+4,4 and d+4,3,4 mixups — often does MORE total
          damage over the heat duration. Only use heat smash when: you need the burst damage to
          close a round, you want the +11 on block, or you're about to lose heat timer anyway.
        </TipBox>
      </Section>

      <Section title="Heat Combos">
        <ComboCard
          title="f,f+4 Heat Engage"
          starter="f,f+4 → Heat Dash"
          route={['f,f+4', 'Heat Dash', 'db+4~F', 'RFS [3~4]', 'uf+3+4~F', 'LFS uf+4 T!', 'uf+3,4,3']}
          damage="~70"
          difficulty="intermediate"
          notes={['Most common heat combo — from your primary approach and engager']}
        />

        <ComboCard
          title="RFS b+3 Heat Engage"
          starter="RFS b+3 → Heat Dash"
          route={['RFS b+3', 'Heat Dash', 'db+4~F', 'RFS [3~4]', 'uf+3+4~F', 'LFS uf+4 T!', 'uf+3,4,3']}
          damage="~73"
          difficulty="intermediate"
          notes={['Highest damage heat dash combo — from mid-loop RFS']}
        />

        <ComboCard
          title="df+3+4 Heat Engage (Punishment)"
          starter="df+3+4 → Heat Dash"
          route={['df+3+4', 'Heat Dash', 'db+4~F', 'RFS [3~4]', 'uf+3+4~F', 'LFS uf+4 T!', 'uf+3,4,3']}
          damage="~72"
          difficulty="intermediate"
          notes={['Guaranteed from -13 punishment — zero risk heat activation into full combo']}
        />

        <ComboCard
          title="Heat: RFS f+4,4 (CH Tornado)"
          starter="Heat RFS f+4,4 (CH)"
          route={['RFS f+4,4', 'u+3', 'LFS 1', 'u+3', 'uf+3+4~F', 'uf+3+4~F', 'uf+3+4']}
          damage="~60"
          difficulty="intermediate"
          notes={[
            'From your 8-frame CH launcher in heat',
            'Same route as CH d+4,4 — u+3 pick-up into LFS 1 carry loop',
          ]}
        />
      </Section>
    </Chapter>
  )
}
