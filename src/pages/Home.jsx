import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const MISSION_FR = [
  "La revivification de l'héritage des prédécesseurs",
  "La préservation de l'ensemble de la production littéraire (poésie et prose) émanant de Cheikh Ibrahima Niass ainsi que de nos honorables prédécesseurs",
  "L'authentification des récits historiques par des sources dignes de confiance",
]

const MISSION_AR = [
  'إحياء تراث السلف الصالح',
  'حفظ ما يصدر عن الشيخ إبراهيم نياس رضي الله عنه نظما ونثرا وعن سلفنا الصالح',
  'تصحيح الروايات والقصص عن الثقة',
]

export default function Home() {
  const mFrRef = useReveal(0)
  const mArRef = useReveal(0)

  return (
    <div className="page-fade">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-wrap">

          {/* French */}
          <div className="hero-fr">
            <span className="badge">Plateforme Éducative & Culturelle</span>
            <h1 className="hero-title">
              Sirajul Mounir : une invitation{' '}
              <span className="hl">au savoir</span>{' '}
              et à l'élévation.
            </h1>
            <p className="hero-desc">
              Sirajul Mounir est une association culturelle et éducative fondée à Malika le
              21 safar 1442 Hégire (07 octobre 2020) par l'éminant savant OUSTAZ ALIOU NDAO.
              Nous nous engageons pour l'éducation, le partage du savoir et l'accompagnement
              des jeunes vers un avenir meilleur.
            </p>
            <div className="hero-btns">
              <Link className="btn btn-gold" to="/mission">Découvrir Notre Mission</Link>
              <Link className="btn btn-outline" to="/contact">Nous Contacter</Link>
            </div>
          </div>

          <div className="hero-divider" />

          {/* Arabic */}
          <aside className="hero-ar" aria-label="النسخة العربية">
            <img src="/logo.PNG" alt="Logo Sirajul Mounir" className="hero-ar-logo" decoding="async" />
            <div className="hero-ar-text" lang="ar" dir="rtl">
              <h2 className="hero-title">السراج المنير: دعوة إلى العلم والارتقاء</h2>
              <p className="hero-desc">
                السراج المنير جمعية ثقافية وتعليمية تأسست في مالكة في 21 صفر 1442 هجرية{' '}
                <bdi>(07 أكتوبر 2020)</bdi> على يد العالم الجليل الأستاذ علي نداو.
                نحن ملتزمون بالتعليم، ونشر المعرفة، ومرافقة الشباب نحو مستقبل أفضل.
              </p>
              <div className="hero-btns">
                <Link className="btn btn-gold" to="/mission">اكتشف مهمتنا</Link>
                <Link className="btn btn-outline" to="/contact">اتصل بنا</Link>
              </div>
            </div>
          </aside>

        </div>
      </section>

      {/* ── Stats ── */}
      <div className="stats-band">
        <div className="stats-inner">
          <div className="stat-item">
            <span className="stat-num">2020</span>
            <span className="stat-lbl">Fondée en</span>
          </div>
          <div className="stat-sep" />
          <div className="stat-item">
            <span className="stat-num">3+</span>
            <span className="stat-lbl">Objectifs fondamentaux</span>
          </div>
          <div className="stat-sep" />
          <div className="stat-item">
            <span className="stat-num">∞</span>
            <span className="stat-lbl">Savoir partagé</span>
          </div>
        </div>
      </div>

      {/* ── Mission FR preview ── */}
      <section className="sec sec-white">
        <div className="container">
          <div className="sec-head">
            <span className="sec-label">Nos Objectifs</span>
            <h2>Notre Mission</h2>
          </div>
          <div className="reveal" ref={mFrRef}>
            <p style={{ fontSize: '1.05rem', color: 'var(--soft)', marginBottom: '1.5rem' }}>
              Sirajul Mounir répond aux objectifs fondamentaux suivants :
            </p>
            <div className="mission-preview">
              {MISSION_FR.map((txt, i) => (
                <div key={i} className="mp-item">
                  <span className="mp-check">✓</span>
                  <span className="mp-text">{txt}</span>
                </div>
              ))}
            </div>
            <Link className="btn btn-primary" to="/mission">Lire la mission complète</Link>
          </div>
        </div>
      </section>

      {/* ── Mission AR preview ── */}
      <section className="sec sec-alt">
        <div className="container">
          <div className="sec-head" lang="ar" dir="rtl">
            <span className="sec-label">أهدافنا</span>
            <h2>مهمتنا</h2>
          </div>
          <div className="reveal" ref={mArRef} lang="ar" dir="rtl">
            <p style={{ fontSize: '1.05rem', color: 'var(--soft)', marginBottom: '1.5rem' }}>
              تسعى السراج المنير إلى تحقيق الأهداف الأساسية التالية :
            </p>
            <div className="mission-preview">
              {MISSION_AR.map((txt, i) => (
                <div key={i} className="mp-item">
                  <span className="mp-check">✓</span>
                  <span className="mp-text">{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
