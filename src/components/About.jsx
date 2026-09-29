import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function About({ text }) {
  return <section className="section container about-grid" id="about"><SectionHeading kicker="01 / About" title="A student with a builder’s mindset." /><motion.div className="about-copy reveal" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p>{text}</p><div className="quote-line"><span>“</span><p>Good ideas become meaningful when they help people.</p></div></motion.div></section>
}
