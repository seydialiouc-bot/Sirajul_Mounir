import PageHero from '../components/PageHero'
import { useReveal } from '../hooks/useReveal'

const CARDS = [
  {
    icon: '📍',
    title: 'Localisation',
    body: (
      <>
        École de l'Éminent Savant<br />
        OUSTAZ ALIOU NDAO<br />
        Malika, Dakar
      </>
    ),
  },
  {
    icon: '📞',
    title: 'Téléphone',
    body: <a href="tel:+221785401813">+221 78 540 18 13</a>,
  },
  {
    icon: '📧',
    title: 'Email',
    body: <a href="mailto:contact@sirajulmounir.sn">contact@sirajulmounir.sn</a>,
  },
]

function Card({ icon, title, body, delay }) {
  const ref = useReveal(delay)
  return (
    <div className="ccard reveal" ref={ref}>
      <div className="ccard-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero label="Nous joindre" title="Contact & Informations" />

      <section className="sec sec-white">
        <div className="container">
          <div className="contact-cards">
            {CARDS.map(({ icon, title, body }, i) => (
              <Card key={i} icon={icon} title={title} body={body} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
