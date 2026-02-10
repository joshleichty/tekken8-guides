import { Chapter, Section } from '../../../components/guide'
import {
  MoveCard,
  KeyConcept,
  TipBox,
  PracticeBox,
} from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter1({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={1}
      title="The Sledgehammer"
      intro="She doesn't look dangerous. She's dancing, smiling, offering you coffee. Then the round is over and you're not sure what happened. Let's fix that — from the attacking side."
      hasPrevious={false}
      onNext={() => goToChapter(2)}
      nextLabel="The Workhorse"
    >
      <Section title="A Round in the Life">
        <p>
          Round start. You dash forward. <code>f,f,f+3,2</code>. Blocked. You're +2. They're stuck in front
          of you. <code>df+1,4</code>. Hit. +7. You're in their face now. <code>d+2,3</code>. Hit. You're in
          Libertador. <code>LIB 4,1</code>. They stood. Mid connects. Another knockdown. You dash forward.
          {' '}<code>f,f,f+3,2</code> again. Blocked again. +2 again. They try to jab out. <code>1+2</code>{' '}
          crushes it. Counter hit. Crumple. Full combo. Round over.
        </p>

        <p>
          That's Azucena. Not a flowchart. Not a gimmick. Just <strong>momentum</strong> — wave after wave of
          pressure that compounds until the round ends. She approaches, pokes, pressures, and every interaction
          feeds the next. No complex inputs. No execution barriers. Just decisions — fast, simple, relentless.
        </p>
      </Section>

      <Section title="The Deceptive Simplicity">
        <p>
          Open Azucena's move list and you'll see two stances, dozens of transitions, cancels into Libertador
          and Back Turn, moves that shift between standing and crouching states. It <em>looks</em> like a
          complex character.
        </p>

        <p>
          It's not.
        </p>

        <p>
          Azucena has two stances, but each one delivers <strong>one explosive guess</strong> and then leaves.
          Libertador is a 50/50 machine — mid or low, pick one. Back Turn is a pressure extension from one
          specific low. Everything else exists to get you into those stances or to catch opponents who try to
          interrupt.
        </p>

        <KeyConcept title="The Sledgehammer Thesis" icon="☕">
          <p>
            Azucena is a sledgehammer disguised as a ballerina. She looks complex because she's always moving,
            always transitioning, always in a stance. But the <em>decisions</em> are brutally simple: approach,
            pressure, guess. Repeat until the round ends.
          </p>
          <p style={{ marginTop: '12px' }}>
            Your job isn't to memorize transitions. It's to understand <strong>momentum</strong>. Every move
            creates plus frames. Plus frames create opportunities. Opportunities create damage. The chain never
            stops until you let it.
          </p>
        </KeyConcept>
      </Section>

      <Section title="The Honest Truth">
        <p>
          Azucena wins by pressure. She loses when the opponent escapes it. Understand both sides before you
          commit.
        </p>

        <KeyConcept title="Where She's Strong" icon="💪">
          <ul>
            <li><strong>Relentless pressure</strong> — Plus frames on nearly everything. She rarely gives up her turn.</li>
            <li><strong>Counter hits</strong> — More significant CH launchers than almost anyone. Opponents who mash lose rounds.</li>
            <li><strong>Punishment into pressure</strong> — Her i10 punish (1,1) leads directly into Libertador at +8. Every blocked move becomes a free mixup.</li>
            <li><strong>Simplicity</strong> — No electrics, no just-frames, no complex inputs. Pure decision-making.</li>
          </ul>
        </KeyConcept>

        <KeyConcept title="Where She's Vulnerable" icon="⚠️">
          <ul>
            <li><strong>Linear</strong> — Sidestep left beats a lot of her key moves. Strong movement players will frustrate you.</li>
            <li><strong>Mediocre lows</strong> — Her lows are workmanlike, not best-in-class. You won't chip someone to death with poke damage alone.</li>
            <li><strong>Heat is underwhelming</strong> — Her heat system is among the weakest in the roster. It works, but it's not her selling point.</li>
            <li><strong>Tracking problems</strong> — Several key moves whiff against sidestep left. You have answers, but you need to know when to use them.</li>
          </ul>
        </KeyConcept>
      </Section>

      <Section title="The Engine: WR 3,2">
        <p>
          Every character has a move that defines how they approach. For Azucena, it's <code>f,f,f+3,2</code> —
          her running 3,2. This single move starts the entire machine.
        </p>

        <MoveCard character="azucena"
          videoId="f,f,F+3,2"
          move={{
            input: 'f,f,f+3,2',
            hitLevel: ['m', 'm'],
            damage: '10, 15',
            startup: 'i16~',
            onBlock: '+2',
            onHit: 'KND',
            tags: ['Approach', 'Plus on Block', 'LIB Transition'],
            description: 'Your primary approach tool. Plus on block, knockdown on hit, and transitions to Libertador by holding forward. This single move defines Azucena\'s neutral game.',
            notes: ['+2 on block — you always act first after', 'Hold F to enter Libertador', 'Knockdown on hit for oki pressure', 'Linear — can be sidestepped left']
          }}
          showVideo
        />

        <p>
          <strong>+2 on block.</strong> In Tekken, that changes everything. After a blocked WR 3,2, your jab
          beats their jab. Your df+1 beats their duck attempt. Your throw catches their standing guard. And
          if they just freeze? You transition into Libertador for a free 50/50 they can't escape.
        </p>

        <KeyConcept title="Why +2 Matters" icon="🔑">
          <p>
            At +2, your i10 jab comes out at effective frame 8. Their i10 jab comes out at effective frame 10.
            You <strong>always</strong> win the exchange. After a blocked WR 3,2:
          </p>
          <ul>
            <li><strong>They press a button</strong> → your jab interrupts, or 1+2 crushes for a CH combo</li>
            <li><strong>They stand block</strong> → throw, low poke, or transition to LIB</li>
            <li><strong>They duck</strong> → your mids hit them clean</li>
            <li><strong>They sidestep</strong> → homing moves catch them (LIB 3+4, f+4,4)</li>
          </ul>
        </KeyConcept>

        <TipBox variant="tip" title="The Approach Pattern">
          Dash forward. WR 3,2. Blocked? Good — you're in. Poke, pressure, transition. Hit? Even better —
          knockdown, dash up, pressure their wakeup. Either outcome feeds into Azucena's pressure. The
          machine doesn't care whether they block or get hit. It just needs contact.
        </TipBox>
      </Section>

      <Section title="Your First Five Minutes">
        <p>
          Don't try to learn Azucena's whole kit. Learn one thing: the approach.
        </p>

        <PracticeBox
          title="WR 3,2 Approach Drill"
          setup="Practice Mode. Set opponent to Stand Guard. Start at round-start distance."
          tasks={[
            { id: 'az-wr32-basic', text: 'Dash into f,f,f+3,2 ten times', detail: 'Get the running input consistent. The move needs a running start — tap f,f then f+3,2.', type: 'counter', target: 10 },
            { id: 'az-wr32-jab', text: 'After blocked WR 3,2, press 1,1 five times', detail: 'Feel the +2 advantage. Your jab is uncontested.', type: 'counter', target: 5 },
            { id: 'az-wr32-lib', text: 'After blocked WR 3,2, hold F to enter Libertador five times', detail: 'Don\'t do anything in LIB yet. Just enter it and feel the transition.', type: 'counter', target: 5 },
            { id: 'az-wr32-df14', text: 'After blocked WR 3,2, do df+1,4 five times', detail: 'This is your mid poke follow-up. It jails — both hits connect if the first one is blocked.', type: 'counter', target: 5 },
          ]}
        />

        <TipBox variant="tip" title="How to Know You've Got It">
          You've internalized this when dashing forward into WR 3,2 is automatic. You shouldn't think about
          the input — just "I need to get in" and your hands do f,f,f+3,2. When closing distance feels
          effortless, you're ready for the next layer.
        </TipBox>
      </Section>

      <Section title="What's Next">
        <p>
          WR 3,2 gets you in. But once you're in their face, you need a backbone move — something you
          press ten, twenty, thirty times per match that structures your entire close-range game. That move
          is <code>df+1,4</code>, and it has more layers than any single poke in Tekken.
        </p>

        <KeyConcept title="Azucena's Identity" icon="☕">
          <p>
            She doesn't need you to play perfectly. She needs you to play <strong>constantly</strong>.
            The pressure doesn't come from any single brilliant move — it comes from the fact that every
            move leads into the next, which leads into the next, which leads into the next.
          </p>
          <p style={{ marginTop: '12px' }}>
            That's the sledgehammer. Not one big hit. A hundred smaller ones, each creating the opportunity
            for the next.
          </p>
        </KeyConcept>
      </Section>
    </Chapter>
  )
}
