import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const NAV = [
  { to: '/',         label: 'Accueil',       end: true },
  { to: '/mission',  label: 'Notre Mission'              },
  { to: '/sagesse',  label: 'Sagesse'                    },
  { to: '/galerie',  label: 'Galerie'                    },
  { to: '/contact',  label: 'Contact'                    },
]

export default function Header() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">

        <Link to="/" className="logo-link" onClick={close}>
          <img src="/logo.PNG" alt="Logo Sirajul Mounir" className="logo-img" decoding="async" />
          <div>
            <div className="logo-name">SIRAJUL MOUNIR</div>
            <div className="logo-tag">Cercle de Savoir</div>
          </div>
        </Link>

        <nav className={`navbar${open ? ' open' : ''}`}>
          {NAV.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={close}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="burger"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen(o => !o)}
        >
          <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: 'rotate(-45deg) translate(7px, -8px)' } : {}} />
        </button>

      </div>
    </header>
  )
}
