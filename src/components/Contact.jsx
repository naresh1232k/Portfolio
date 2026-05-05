import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setTimeout(() => { setStatus('sent') }, 1400)
  }

  return (
    <section id="contact" className="sec ct-sec" ref={ref} style={{ opacity:vis?1:0, transform:vis?'none':'translateY(30px)', transition:'opacity .7s ease,transform .7s ease' }}>
      <div className="wrap">
        <div className="ct-grid">
          <div>
            <p className="chip">Get In Touch</p>
            <h2 className="h2">Let's Build<br /><span className="grad">Something Great.</span></h2>
            <p className="ct-desc">Whether you have a project in mind, want to collaborate, or just say hi — my inbox is always open. I'll reply within 24 hours.</p>
            <div className="ct-chs">
              {[
                  {i:'📧',l:'Email',v:'naresh1232k@gmail.com',h:''},
               {i:'💼',l:'LinkedIn',v:'www.linkedin.com/in/nareshj2425',h:'https://www.linkedin.com/in/nareshj2425'},
              {i:'🐙',l:'GitHub',v:'https://github.com/naresh1232k',h:'https://github.com/naresh1232k'}
   ].map(c=>(
  <a key={c.l} href={c.h} className="ct-ch glass" target="_blank" rel="noopener noreferrer">
    <span className="ct-chi">{c.i}</span>
    <div><span className="ct-chl">{c.l}</span><span className="ct-chv">{c.v}</span></div>
  </a>
    ))}
            </div>
            <div className="ct-avail"><span className="ct-dot"/><span>Currently available for freelance & full-time roles</span></div>
          </div>

          <div className="ct-card glass">
            <h3 className="ct-form-title">Send a Message</h3>
            {status === 'sent' ? (
              <div className="ct-success"><span>🚀</span><p>Message sent!<br />I'll get back to you within 24 hours.</p></div>
            ) : (
              <form className="ct-form" onSubmit={onSubmit} noValidate>
                {[{id:'name',type:'text',ph:'Naresh J',label:'Name'},{id:'email',type:'email',ph:'naresh@example.com',label:'Email'},{id:'subject',type:'text',ph:'Project Collaboration',label:'Subject'}].map(f=>(
                  <div key={f.id} className="ct-field">
                    <label htmlFor={f.id}>{f.label}</label>
                    <input id={f.id} name={f.id} type={f.type} placeholder={f.ph} value={form[f.id]} onChange={onChange}/>
                  </div>
                ))}
                <div className="ct-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-p ct-submit" disabled={status==='sending'}>
                  {status==='sending'?'Sending...':'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
