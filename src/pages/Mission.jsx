import PageHero from '../components/PageHero'
import { useReveal } from '../hooks/useReveal'

const STEPS_FR = [
  "La revivification de l'héritage des prédécesseurs",
  "La préservation de l'ensemble de la production littéraire (poésie et prose) émanant de Cheikh Ibrahima Niass ainsi que de nos honorables prédécesseurs",
  "L'authentification des récits historiques par des sources dignes de confiance",
]

const STEPS_AR = [
  'إحياء تراث السلف الصالح',
  'حفظ ما يصدر عن الشيخ إبراهيم نياس رضي الله عنه نظما ونثرا وعن سلفنا الصالح',
  'تصحيح الروايات والقصص عن الثقة',
]

function StepsBlock({ steps, dir }) {
  const refs = [useReveal(0), useReveal(100), useReveal(200)]
  return (
    <div className="steps">
      {steps.map((txt, i) => (
        <div key={i} className="step reveal" ref={refs[i]}>
          <div className="step-n">0{i + 1}</div>
          <div className="step-body">{txt}</div>
        </div>
      ))}
    </div>
  )
}

export default function Mission() {
  return (
    <>
      <PageHero label="Nos Objectifs" title="Notre Mission" />

      <section className="sec sec-white">
        <div className="container">
          <div className="sec-head">
            <span className="sec-label">En Français</span>
            <h2>Sirajul Mounir répond aux objectifs fondamentaux suivants :</h2>
          </div>
          <StepsBlock steps={STEPS_FR} />
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="container">
          <div className="sec-head" lang="ar" dir="rtl">
            <span className="sec-label">بالعربية</span>
            <h2>تسعى السراج المنير إلى تحقيق الأهداف الأساسية التالية :</h2>
          </div>
          <div dir="rtl" lang="ar">
            <StepsBlock steps={STEPS_AR} dir="rtl" />
          </div>
        </div>
      </section>
    </>
  )
}
