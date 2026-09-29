import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', id: 'about' }, { label: 'Skills', id: 'skills' }, { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'journey' }, { label: 'Contact', id: 'contact' },
]

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -65% 0px' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navigate = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false) }

  return <header className="navbar">
    <div className="nav-inner container">
      <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"><span className="brand-mark">S</span><span>Spandana<span className="brand-dot">.</span></span></button>
      <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
        {links.map((link) => <button key={link.id} className={active === link.id ? 'active' : ''} onClick={() => navigate(link.id)}>{link.label}</button>)}
      </nav>
      <div className="nav-actions"><ThemeToggle theme={theme} onToggle={onThemeToggle} /><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <FiX /> : <FiMenu />}</button></div>
    </div>
  </header>
}
