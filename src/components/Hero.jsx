import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'

const ROLES = ['Full Stack Developer','React Specialist','UI Engineer','Web Craftsman','Performance Optimizer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  const canvasRef = useRef(null)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let t;

    if (!deleting && text.length < current.length) {
      console.log(current);
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), 75)
    }
     else if (!deleting && text.length === current.length){
      t = setTimeout(() => setDeleting(true), 2200)
    } 
    else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), 38)
    } 
    else {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(t)
  }, [text, deleting, roleIdx])




  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return;
    const ctx = canvas.getContext('2d')
    let animId;
    const pts = []
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize();
    window.addEventListener('resize', resize)
    for (let i = 0; i < 75; i++) pts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.3,
      dx: (Math.random() - 0.5) * 0.38,
      dy: (Math.random() - 0.5) * 0.38,
      o: Math.random() * 0.45 + 0.08
    })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,245,212,${p.o})`;
        ctx.fill()
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) 
            p.dx *= -1
        if (p.y < 0 || p.y > canvas.height)
            p.dy *= -1
      })
         
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x,
           pts[i].y - pts[j].y)
        if (d < 115) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x,pts[i].y);
          ctx.lineTo(pts[j].x,pts[j].y)
          ctx.strokeStyle = `rgba(0,245,212,${0.06 * (1 - d / 115)})`
          ctx.lineWidth = 0.5;
          ctx.stroke()
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
       cancelAnimationFrame(animId);
       window.removeEventListener('resize', resize) 
      }
  }, [])


  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })


  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-orb orb1" />
      <div className="hero-orb orb2" />
      <div className="hero-orb orb3" />

      <div className="wrap hero-grid">
        <div className="hero-left">
          <p className="hero-tag"><span className="hero-tag-line" />Hello, World! I'm</p>
          <h1 className="hero-name">Naresh<br /><span className="hero-accent">J.</span></h1>
          <div className="hero-role">
            <span className="hero-pre">&gt; </span>
            <span className="hero-tw">{text}</span>
            <span className="hero-cur" />
          </div>
          <p className="hero-bio">
            I craft fast, accessible, and visually stunning web experiences.
            Turning complex ideas into elegant interfaces — one component at a time.
          </p>
          <div className="hero-btns">
            <button className="btn btn-p" onClick={() => scrollTo('projects')}>
              View My Work
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn btn-g" onClick={() => scrollTo('contact')}>Get In Touch</button>
          </div>
          <div className="hero-socials">
            {['GH','LI','IN'].map(s => <a key={s} href="#" className="hero-soc">{s}</a>)}
          </div>
        </div>

        <div className="hero-right">
          <div className="av-wrap">
            <svg className="av-ring" viewBox="0 0 200 200">
              <defs>
                <linearGradient id="rg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#00F5D4" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.15"/>
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="92" fill="none" stroke="url(#rg)" strokeWidth="1.5" strokeDasharray="6 5"/>
            </svg>
            <div className="av-outer"><div className="av-inner">NJ</div></div>
          </div>
          <div className="hero-stats">
            {[{val:'4 Months',label:'Years Exp.'},{val:'2+',label:'Projects'},{val:'100%',label:'Passion'}].map(s => (
              <div key={s.label} className="hero-stat glass">
                <strong>{s.val}</strong><small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll" onClick={() => scrollTo('about')}>
        <div className="scroll-mouse"><div className="scroll-dot" /></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
