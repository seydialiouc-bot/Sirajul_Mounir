import { Link } from 'react-router-dom'

function YT() {
  return (
    <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
  )
}

function TK() {
  return (
    <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.88 2.88 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" /></svg>
  )
}

function WA() {
  return (
    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a8.937 8.937 0 0 0-8.932 8.934c0 1.57.406 3.109 1.178 4.471L2.585 21.99l4.656-1.226a8.902 8.902 0 0 0 4.273 1.088h.004c4.934 0 8.935-4.001 8.935-8.935 0-2.387-.928-4.634-2.612-6.318-1.684-1.684-3.931-2.612-6.321-2.612" /></svg>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">

        <div className="f-brand">
          <Link to="/" className="f-logo">
            <img src="/logo.PNG" alt="Logo Sirajul Mounir" />
            <div>
              <div className="f-logo-name">SIRAJUL MOUNIR</div>
              <div className="f-logo-tag">Cercle de Savoir</div>
            </div>
          </Link>
          <p>Association culturelle et éducative engagée pour la revivification du savoir et l'accompagnement des jeunes vers un avenir meilleur.</p>
        </div>

        <div className="f-col">
          <h5>Navigation</h5>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/mission">Notre Mission</Link></li>
            <li><Link to="/sagesse">Sagesse</Link></li>
            <li><Link to="/galerie">Galerie</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="f-col">
          <h5>Suivez-nous</h5>
          <div className="social-row">
            <a href="https://www.youtube.com/@sirajulmounir" target="_blank" rel="noopener noreferrer" className="soc-btn" title="YouTube">
              <YT />
            </a>
            <a href="https://www.tiktok.com/@sirajulmounir" target="_blank" rel="noopener noreferrer" className="soc-btn" title="TikTok">
              <TK />
            </a>
            <a href="https://whatsapp.com/channel/0029VbC00ACG3R3awqHIIi1Q" target="_blank" rel="noopener noreferrer" className="soc-btn" title="WhatsApp">
              <WA />
            </a>
          </div>
        </div>

        <div className="f-col newsletter-col">
          <h5>Newsletter</h5>
          <p className="nl-desc">Recevez nos dernières actualités</p>
          <div className="nl-form">
            <input type="email" placeholder="Votre adresse email" aria-label="Email" />
            <button type="button">S'abonner</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Sirajul Mounir. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
