import { FiCode, FiDatabase, FiGlobe, FiUsers, FiTool } from 'react-icons/fi'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const icons = { code: FiCode, database: FiDatabase, web: FiGlobe, people: FiUsers, tools: FiTool }
export default function Skills({ skills }) {
  return <section className="section container" id="skills"><SectionHeading kicker="02 / Toolkit" title="Skills I’m growing with intention." text="A practical foundation, with plenty more room to explore." /><div className="skills-grid">{skills.map((skill, index) => { const Icon = icons[skill.icon]; return <motion.article className="skill-card" key={skill.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .08 }} viewport={{ once: true }}><div className="skill-icon"><Icon /></div><h3>{skill.name}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></motion.article> })}</div></section>
}
