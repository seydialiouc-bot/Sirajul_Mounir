import PageHero from '../components/PageHero'
import { useReveal } from '../hooks/useReveal'

const WISDOMS = [
  { icon: '✨', quote: '"ku yalla taal ken dou am sa faay."', author: 'Cheikh Ibrahima Niass' },
  { icon: '📚', quote: '"L\'éducation est le fondement d\'une société prospère et vertueuse."', author: 'Cheikh Ibrahima Niass' },
  { icon: '🌟', quote: '"Soyez des modèles de droiture, de paix et d\'amour pour toute l\'humanité."', author: 'Cheikh Ibrahima Niass' },
]

function WCard({ icon, quote, author, delay }) {
  const ref = useReveal(delay)
  return (
    <div className="wcard reveal" ref={ref}>
      <div className="wcard-icon">{icon}</div>
      <p className="wcard-quote">{quote}</p>
      <p className="wcard-author">{author}</p>
    </div>
  )
}

export default function Sagesse() {
  const featRef = useReveal(0)
  return (
    <>
      <PageHero label="Lumière de la Connaissance" title="Sagesses du Cheikh" />

      <section className="sec sec-white">
        <div className="container">

          {/* Featured first quote */}
          <div className="quote-hero reveal" ref={featRef}>
            <p className="quote-hero-text">{WISDOMS[0].quote}</p>
            <p className="quote-hero-author">{WISDOMS[0].author}</p>
          </div>

          {/* Rest as cards */}
          <div className="wisdom-grid">
            {WISDOMS.slice(1).map(({ icon, quote, author }, i) => (
              <WCard key={i} icon={icon} quote={quote} author={author} delay={i * 120} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
