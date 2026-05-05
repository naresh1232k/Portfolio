import React from 'react'
import './Footer.css'

export default function Footer() {
  const go = (e, id) => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior:'smooth' }) }
  return (
    <footer className="ft">
      <div className="ft-glow"/>
      <div className="wrap ft-in">
        <div className="ft-top">
          <div>
            <a href="#hero" className="ft-logo" onClick={e=>go(e,'hero')}><span className="ft-br">&lt;</span>NJ<span className="ft-br">/&gt;</span></a>
            <p className="ft-tagline">Crafting the web,<br/>one component at a time.</p>
          </div>
          <div className="ft-cols">
            <div className="ft-col">
              <span>Navigate</span>
              <ul>{['about','skills','projects','contact'].map(l=><li key={l}><a href={`#${l}`} onClick={e=>go(e,l)}>{l.charAt(0).toUpperCase()+l.slice(1)}</a></li>)}</ul>
            </div>
            <div className="ft-col">
              <span>Social</span>
              <ul>{['GitHub','LinkedIn','Twitter','CodePen'].map(s=><li key={s}><a href="#">{s}</a></li>)}</ul>
            </div>
            <div className="ft-col">
              <span>Services</span>
              <ul>{['UI Development','React Apps','Performance Audit','Consulting'].map(s=><li key={s}><a href="#">{s}</a></li>)}</ul>
            </div>
          </div>
        </div>
        <div className="ft-bot">
          <p className="ft-copy">© {new Date().getFullYear()} <span className="ft-hl">Naresh J</span>. Built with React & Vite.</p>
          <p className="ft-made">Designed & developed with <span className="ft-heart">♥</span> and lots of ☕</p>
        </div>
      </div>
    </footer>
  )
}
