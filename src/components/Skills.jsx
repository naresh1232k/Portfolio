import React, { useEffect, useRef, useState } from 'react'
import './Skills.css'

const GROUPS = [
  { icon:'{ }', title:'Core Languages', skills:[{n:'JavaScript (ES6+)',p:90},{n:'HTML5',p:95},{n:'CSS3 / SCSS',p:92},{n:'TypeScript',p:72},{n:'Python',p:70},{n:'Java',p:75}] },
  { icon:'⚛',  title:'Frameworks & Libraries', skills:[{n:'React.js',p:88},{n:'Vite',p:85},{n:'Tailwind CSS',p:90},{n:'Framer Motion',p:70},{n:'Spring Boot',p:72}] },
  { icon:'⚙',  title:'Tools & Workflow', skills:[{n:'Git & GitHub',p:85},{n:'VS Code',p:95},{n:'Figma',p:75},{n:'npm / Yarn',p:88}] },
  { icon:'🛢',  title:'Backend & DevOps', skills:[{n:'MySQL',p:78},{n:'Microservices',p:68},{n:'Docker',p:65},{n:'CI/CD (GitHub Actions)',p:60}] },
]

const TAGS = [
  'React','Vite','JavaScript','TypeScript','HTML5','CSS3','SCSS','Tailwind CSS',
  'Git','GitHub','Figma','REST APIs','Responsive Design','Accessibility','Performance',
  'Java','Spring Boot','MySQL','Python','Microservices','Docker','CI/CD',
]

export default function Skills() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="sec sk-sec" ref={ref}>
      <div className="wrap">
        <div className="sk-head">
          <p className="chip chip-center">What I Know</p>
          <h2 className="h2">Technical <span className="grad">Arsenal</span></h2>
          <p style={{color:'var(--t2)'}}>A curated set of tools and technologies I use to build exceptional products.</p>
        </div>
        <div className="sk-grid">
          {GROUPS.map((g, gi) => (
            <div key={g.title} className="sk-card glass" style={{ opacity:vis?1:0, transform:vis?'none':'translateY(28px)', transition:`opacity .6s ${gi*.1}s ease,transform .6s ${gi*.1}s ease` }}>
              <div className="sk-icon">{g.icon}</div>
              <h3 className="sk-title">{g.title}</h3>
              {g.skills.map(s => (
                <div key={s.n} className="sk-bar">
                  <div className="sk-row"><span className="sk-name">{s.n}</span><span className="sk-pct">{s.p}%</span></div>
                  <div className="sk-track"><div className="sk-fill" style={{ width: vis ? `${s.p}%` : '0%' }} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="sk-tags">
          {TAGS.map(t => <span key={t} className="sk-tag">{t}</span>)}
        </div>
      </div>
    </section>
  )
}