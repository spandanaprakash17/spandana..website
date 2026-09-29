import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

export default function Projects({ projects }) {
  return <section className="section projects-section" id="projects"><div className="container"><SectionHeading kicker="03 / Selected work" title="Small projects. Real learning." text="Each build is a place to turn curiosity into practical experience." /><div className="project-list">{projects.map((project, index) => <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .1 }} viewport={{ once: true }}><div className="project-number">{project.number}</div><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><p className="project-note">{project.note}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><a className="circle-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><FiArrowUpRight /></a></motion.article>)}</div></div></section>
}
