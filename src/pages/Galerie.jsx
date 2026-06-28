import { useState, useEffect, useCallback } from 'react'
import PageHero from '../components/PageHero'

const IMAGES = [
  { src: '/oustaz.JPG',     alt: 'Oustaz Aliou Ndao',        cap: 'Oustaz Aliou Ndao' },
  { src: '/seydi.jpg',      alt: 'Seydi',                     cap: '' },
  { src: '/membre.JPG',     alt: 'Membre',                    cap: '' },
  { src: '/membre (2).JPG', alt: 'Membre',                    cap: '' },
  { src: '/membre (3).JPG', alt: 'Membre',                    cap: '' },
  { src: '/membre (4).JPG', alt: 'Membre',                    cap: '' },
  { src: '/membre (5).JPG', alt: 'Membre',                    cap: '' },
  { src: '/president.JPG',  alt: 'Président',                 cap: 'Président' },
  { src: '/membres.JPG',    alt: "Membres de l'association",  cap: "Membres de l'association" },
  { src: '/logo.PNG',       alt: 'Logo Sirajul Mounir',       cap: 'Notre logo officiel' },
]

function Lightbox({ idx, onClose, onPrev, onNext }) {
  const img = IMAGES[idx]

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape')     onClose()
    if (e.key === 'ArrowLeft')  onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lb-btn lb-close" onClick={onClose} aria-label="Fermer">✕</button>

      <button
        className="lb-btn lb-prev"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Précédent"
      >‹</button>

      <img src={img.src} alt={img.alt} onClick={(e) => e.stopPropagation()} />

      <button
        className="lb-btn lb-next"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Suivant"
      >›</button>

      {img.cap && <div className="lb-cap">{img.cap}</div>}
    </div>
  )
}

export default function Galerie() {
  const [active, setActive] = useState(null)
  const n = IMAGES.length

  return (
    <>
      <PageHero label="Nos Moments" title="Galerie Photos" />

      <section className="sec sec-white">
        <div className="container">
          <div className="masonry">
            {IMAGES.map((img, i) => (
              <div
                key={i}
                className="g-item"
                onClick={() => setActive(i)}
                role="button"
                tabIndex={0}
                aria-label={`Agrandir : ${img.alt}`}
                onKeyDown={(e) => { if (e.key === 'Enter') setActive(i) }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="g-overlay">
                  {img.cap && <span className="g-caption">{img.cap}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <Lightbox
          idx={active}
          onClose={() => setActive(null)}
          onPrev={() => setActive(i => (i - 1 + n) % n)}
          onNext={() => setActive(i => (i + 1) % n)}
        />
      )}
    </>
  )
}
