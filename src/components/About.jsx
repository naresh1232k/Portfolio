import React, { useEffect, useRef, useState } from 'react'
import './About.css'

export default function About() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="sec" ref={ref} style={{ opacity: vis?1:0, transform: vis?'none':'translateY(30px)', transition:'opacity .7s ease,transform .7s ease' }}>
      <div className="wrap">
        <div className="ab-grid">
          <div>
            <p className="chip">Who I Am</p>
            <h2 className="h2">Building the web,<br /><span className="grad">pixel by pixel.</span></h2>
            <p className="ab-p">I'm <strong>Naresh J</strong>, a passionate Front-End Developer with a deep love for creating beautiful, performant, and user-centric web applications. I bridge the gap between design and engineering to deliver exceptional digital products.</p>
            <p className="ab-p">My journey started with curiosity about how websites work, and evolved into a deep expertise in modern JavaScript ecosystems — particularly React. I thrive on solving complex UI challenges and turning ambitious ideas into polished realities.</p>
            <p className="ab-p">When I'm not pushing pixels, you'll find me exploring new tech, contributing to open-source, or leveling up in competitive gaming 🎮.</p>
            <div className="ab-pills">
              {['✦ Component-Driven Architecture','✦ Performance-First Mindset','✦ Pixel-Perfect Implementation','✦ Accessibility Advocate','✦ Clean Code Philosophy'].map(p=><span key={p} className="ab-pill">{p}</span>)}
            </div>
          </div>

          <div>
            <div className="ab-code glass">
              <div className="ab-bar">
                <span className="dot dot-r"/><span className="dot dot-y"/><span className="dot dot-g"/>
                <span className="ab-fname">naresh.config.js</span>
              </div>
              <pre className="ab-pre">{`const developer = {
  name:     "Naresh J",
  role:     "Front-End Developer",
  location: "India 🇮🇳,Tamil Nadu",
  expertise: [
    "React", "JavaScript",
    "HTML/CSS", "Vite"
  ],
  building:   "Decod Games 🎮",
  available:  true,
  openToWork: true,
  contact: () => "Let's build together!"
};`}</pre>
            </div>
            <div className="ab-qstats">
              {[{i:'🚀',v:'2+ Projects',l:'Developed'},{i:'⚡',v:'98 / 100',l:'Lighthouse Score'},{i:'☕',v:'1 cups/day',l:'Coffee (minimum)'}].map(s=>(
                <div key={s.l} className="ab-qstat glass"><span>{s.i}</span><div><strong>{s.v}</strong><small>{s.l}</small></div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
