import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'

function useVis(t=0.1) {
  const ref = useRef(null); 
  const [v,setV]=useState(false);

  useEffect(()=>{
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t})
    if(ref.current)o.observe(ref.current); 
    return()=>o.disconnect()
  },[t]);
  return [ref,v]
}

export default function Projects() {
  const [fRef,fVis]=useVis(0.08);
  const [s1Ref,s1Vis]=useVis(0.1);
  const [s2Ref,s2Vis]=useVis(0.1);

  const fade=(v,d=0)=>({opacity:v?1:0,transform:v?'none':'translateY(28px)',transition:`opacity .6s ${d}s ease,transform .6s ${d}s ease`})

  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <div className="pr-head">
          <p className="chip chip-center">My Work</p>
          <h2 className="h2">Featured <span className="grad">Projects</span></h2>
          <p style={{color:'var(--t2)'}}>A selection of work I'm proud of. Each project is a unique challenge solved with clean code and creative thinking.</p>
        </div>

        {/* Featured – Food Ordering Web App */}
        <div ref={fRef} className="pf glass" style={fade(fVis)}>
          <div className="pf-left">
            <div className="pf-meta"><span className="pf-emoji">🍔</span><span className="pf-cat">Full Stack</span><span className="pf-badge">Featured</span></div>
            <h3 className="pf-title">Food Ordering Web Application</h3>
            <p className="pf-desc">A full-stack food ordering platform built with React and Spring Boot, featuring JWT authentication, Razorpay payment integration, and an admin panel for managing products and orders.</p>
            <ul className="pf-list">
              {[
                'Developed 15+ reusable React components, reducing code duplication by 30%',
                'Implemented JWT Authentication and API Security for secure user access',
                'Integrated Razorpay payment gateway for real-time online transactions',
                'Applied Microservices architecture — user, product, and order modules',
                'Created admin panel with search & filtering to manage products and orders',
                'Deployed via Netlify, Render, and Vercel'
              ].map(i=>(
                <li key={i}><span className="arr">→</span>{i}</li>
              ))}
            </ul>
            <div className="pr-techs">{['React.js','Spring Boot','MySQL','Axios','JWT','Razorpay','REST API'].map(t=><span key={t}>{t}</span>)}</div>
            <div className="pf-links">
              <a href="https://foodie-f3yk.vercel.app/" target="_blank" rel="noopener noreferrer" className="pf-btn pf-live">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Live Demo
              </a>
              <a href="https://github.com/naresh1232k" target="_blank" rel="noopener noreferrer" className="pf-btn pf-src">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 1C3.69 1 1 3.69 1 7c0 2.65 1.72 4.9 4.1 5.7.3.05.41-.13.41-.29v-1.02c-1.67.36-2.02-.81-2.02-.81-.27-.69-.67-.87-.67-.87-.55-.37.04-.37.04-.37.6.04.92.62.92.62.54.92 1.41.66 1.76.5.05-.39.21-.66.38-.81-1.33-.15-2.73-.67-2.73-2.96 0-.66.23-1.19.62-1.61-.06-.15-.27-.76.06-1.59 0 0 .51-.16 1.66.62A5.78 5.78 0 017 4.39c.51 0 1.03.07 1.51.21 1.15-.78 1.66-.62 1.66-.62.33.83.12 1.44.06 1.59.39.42.62.95.62 1.61 0 2.3-1.4 2.81-2.74 2.96.22.19.41.56.41 1.13v1.67c0 .16.11.34.41.29C11.28 11.9 13 9.65 13 7c0-3.31-2.69-6-6-6z" fill="currentColor"/></svg>
                Source Code
              </a>
            </div>
          </div>
          <div className="pf-screen-wrap">
            <div className="pf-screen">
              <div className="scr-bar"><span/><span/><span/></div>
              <div className="scr-body">
                <div className="scr-nav">
                  <span className="scr-logo">🍔 FOODIE</span>
                  <div className="scr-navlinks"><span>Home</span><span>Menu</span><span>Orders</span><span>Admin</span></div>
                </div>
                <div className="scr-hero"><div className="sh sh1"/><div className="sh sh2"/><div className="sh sh3"/></div>
                <div className="scr-cards">
                  {[0,1,2].map(i=>(
                    <div key={i} className="scr-card" style={{'--i':i}}>
                      <div className="sc-img"/><div className="sc-l"/><div className="sc-l sc-ls"/>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small cards */}
        <div className="ps-grid">
          {/* Course Registration System */}
          <div ref={s1Ref} className="ps glass" style={fade(s1Vis,0)}>
            <div className="ps-top"><span className="ps-emoji">📚</span><div className="ps-icons"><a href="https://github.com/naresh1232k" target="_blank" rel="noopener noreferrer" className="ps-ico">GH</a></div></div>
            <span className="ps-cat">Backend</span>
            <h3 className="ps-title">Course Registration System</h3>
            <p className="ps-desc">A backend application built with Spring Boot to manage courses, student registrations, and enrollments. Features RESTful APIs for full CRUD operations and a modular, version-controlled codebase.</p>
            <div className="pr-techs">{['Spring Boot','MySQL','REST API','Postman','Git'].map(t=><span key={t}>{t}</span>)}</div>
          </div>

          {/* Portfolio */}
          <div ref={s2Ref} className="ps glass" style={fade(s2Vis,0.1)}>
            <div className="ps-top"><span className="ps-emoji">🌐</span><div className="ps-icons"><a href="https://github.com/naresh1232k" target="_blank" rel="noopener noreferrer" className="ps-ico">GH</a><a href="https://myportfolio-naresh.web.app/" target="_blank" rel="noopener noreferrer" className="ps-ico">↗</a></div></div>
            <span className="ps-cat">Frontend</span>
            <h3 className="ps-title">Personal Portfolio</h3>
            <p className="ps-desc">A personal portfolio website built with React.js and Vite to showcase projects, skills, and internship experience — with fast build performance and a clean, modern design.</p>
            <div className="pr-techs">{['React.js','Vite','CSS3','JavaScript'].map(t=><span key={t}>{t}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
