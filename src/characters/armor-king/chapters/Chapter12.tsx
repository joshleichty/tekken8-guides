import { Chapter, Section } from '../../../components/guide'
import { MoveCard, KeyConcept, TipBox, Collapsible, PracticeBox } from '../../../components/ui'
import type { ChapterProps } from '../../../types'

export function Chapter12({ goToChapter }: ChapterProps) {
  return (
    <Chapter
      number={12}
      title="Chain Throws"
      intro="Armor King has access to chain throws — multi-hit throw sequences that require different breaks at each stage. Let's learn the basics."
      onPrevious={() => goToChapter(11)}
      onNext={() => goToChapter(13)}
      nextLabel="Continue to Oki"
    >
      <Section title="Chain Throw Starter: CD+1+3 / CD+2+4">
        <p>Chain throws start from crouch dash:</p>

        <MoveCard character="armor-king"
          input="CD+1+3"
          tags={['throw', 'chain starter']}
          variant="throw"
          description="Crouch dash throw that starts the DMD (Dark Moonsault Driver) chain. Broken with 1."
          stats={{
            startup: 'i12',
            damage: '20 (starter)',
          }}
        />

        <MoveCard character="armor-king"
          input="CD+2+4"
          tags={['throw', 'chain starter']}
          variant="throw"
          description="Alternative starter broken with 2. Same chain options after."
          stats={{
            startup: 'i12',
            damage: '20 (starter)',
          }}
        />
      </Section>

      <Section title="Easy Chain Option: Mash 1 or 2">
        <p>If you don't want to learn all the chain routes, you can simply:</p>

        <KeyConcept title="Easy Mode Chains" icon="🔑">
          <p>After CD+1+3 or CD+2+4 connects, just mash <strong>1,1,1,1</strong> or <strong>2,2,2,2</strong>. The game will auto-complete a chain for you!</p>
          <p>This does less damage than the optimal routes, but it's a great starting point.</p>
        </KeyConcept>
      </Section>

      <Section title="DMD Chain Routes">
        <p>For those who want to maximize damage, here are the proper chain routes:</p>

        <Collapsible title="Chain Throw Routes (Advanced)" icon="📖">
          <p>After CD+1+3 or CD+2+4 lands, you're in DMD state:</p>
          <ul>
            <li><strong>DMD 1</strong> — 1 break, 20 (25 powered) dmg</li>
            <li><strong>DMD 2</strong> — 2 break, leads to more chains</li>
            <li><strong>DMD 1+2</strong> — 1+2 break, leads to more chains</li>
          </ul>
          <p><strong>Power up inputs for more damage:</strong></p>
          <ul>
            <li><strong>DMD 1</strong>: Input 2+4,1+2 for powered version</li>
            <li><strong>DMD 2</strong>: Input 3+4,1+2 for powered version</li>
            <li><strong>DMD 1+2</strong>: Input 2,1,1+2 for powered version</li>
          </ul>
        </Collapsible>
      </Section>

      <Section title="Ultimate Punch">
        <p>The back mount (BM) gives access to Ultimate Punch:</p>

        <MoveCard character="armor-king"
          input="UT 2,1,2,1"
          tags={['throw', 'ground chain']}
          variant="throw"
          description="From back mount, mash any combination of 1s and 2s. Opponent must break with the opposite button. Can also escape with UT 1+2."
        />
      </Section>

      <TipBox title="Don't Stress Chain Throws Early">
        <p>
          Chain throws are the "deep end" of Armor King's throw game. Focus on Giant Swing, Tombstone, 
          and Shining Wizard first. Add chain throws once you're comfortable with the basics.
        </p>
      </TipBox>

      <PracticeBox
        title="Chain Throw Practice — Easy Mode"
        setup="Set dummy to Stand and No Guard. Practice the easy chain method."
        tasks={[
          { id: 'ch12-cdthrow', text: 'Do CD+1+3 → mash 1,1,1,1', detail: 'The easy chain — just mash 1 after the throw', type: 'counter', target: 10 },
          { id: 'ch12-cdthrow2', text: 'Do CD+2+4 → mash 2,2,2,2', detail: 'Alternative starter into mash chain', type: 'counter', target: 10 },
        ]}
      />
    </Chapter>
  )
}
