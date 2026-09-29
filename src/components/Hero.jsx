import { motion } from 'framer-motion'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'

export default function Hero({ person }) {
  return <section className="hero container" id="home">
    <div className="hero-copy">
      <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}><span className="status-dot" /> Available for learning & collaboration</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .1 }}>Hello, I’m<br /><em>{person.name}.</em></motion.h1>
      <motion.p className="hero-tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>{person.tagline}<span className="caret">|</span></motion.p>
      <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}>{person.intro}</motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .6 }}><a className="button primary" href="#projects">View projects <FiArrowUpRight /></a><a className="button text-button" href="#contact">Contact me <span>↗</span></a></motion.div>
      <motion.div className="hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .75 }}><span><FiMapPin /> {person.university}</span><span className="social-links"><a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a><a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a></span></motion.div>
    </div>
    <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }} aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit-core"><span>SP</span><small>curious<br />by nature</small></div><span className="float-label label-one">AI / DS</span><span className="float-label label-two">build + learn</span></motion.div>
  </section>
}
