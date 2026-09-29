import { useState } from 'react'
import { FiArrowUpRight, FiCheck, FiMail } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

export default function Contact({ person }) {
  const [status, setStatus] = useState('')
  const submit = (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const name = form.get('name'); const email = form.get('email'); const message = form.get('message'); if (!name || !email || !message) { setStatus('Please complete all fields.'); return } window.location.href = `mailto:${person.email}?subject=Portfolio message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`${message}\n\nReply to: ${email}`)}`; setStatus('Your email client is opening. Thank you!') }
  return <section className="section contact-section" id="contact"><div className="container contact-grid"><div><SectionHeading kicker="05 / Say hello" title="Let’s make something useful." text="Have an idea, a question, or simply want to connect? My inbox is open." /><a className="email-link" href={`mailto:${person.email}`}><FiMail /> {person.email} <FiArrowUpRight /></a></div><form className="contact-form" onSubmit={submit}><label>Name<input name="name" type="text" placeholder="Your name" /></label><label>Email<input name="email" type="email" placeholder="you@example.com" /></label><label>Message<textarea name="message" rows="4" placeholder="Tell me a little about it..." /></label><button className="button primary" type="submit">Send message <FiArrowUpRight /></button>{status && <p className="form-status"><FiCheck /> {status}</p>}</form></div></section>
}
