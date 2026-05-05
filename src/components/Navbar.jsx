import React, { useState, useEffect } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'About',    id: 'about',    num: '01' },
  { label: 'Skills',   id: 'skills',   num: '02' },
  { label: 'Projects', id: 'projects', num: '03' },
  { label: 'Contact',  id: 'contact',  num: '04' },
]

export default function Navbar() {
  const [stuck, setStuck] = useState(false)
  const [open,  setOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setStuck(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 960) setOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nb${stuck ? ' nb-stuck' : ''}`}>
      <div className="wrap nb-inner">
       
        <a href="#hero" className="nb-logo" onClick={e => go(e, 'hero')}>
          <span className="nb-br">&lt;</span>NJ<span className="nb-br">/&gt;</span>
        </a>

        <ul className={`nb-ul${open ? ' nb-open' : ''}`}>
          
          {LINKS.map(l => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={e => go(e, l.id)}>
                <span className="nb-num">{l.num}.</span>{l.label}
              </a>
            </li>
          ))}

          <li>
            <a href="#contact" className="nb-hire" onClick={e => go(e, 'contact')}>Hire Me</a>
          </li>
        </ul>

        <button
          className={`nb-ham${open ? ' nb-ham-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
          
        </button>
      </div>
    </nav>
  )
}
