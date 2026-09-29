import { FiAward, FiCompass } from 'react-icons/fi'
import SectionHeading from './SectionHeading'

export default function Journey({ hackathons, certifications, objective }) {
  return <section className="section container journey-grid" id="journey"><div><SectionHeading kicker="04 / The journey" title="Learning happens in motion." /><div className="journey-block"><div className="journey-icon"><FiCompass /></div><div><h3>Hackathon experience</h3><p>{hackathons}</p></div></div><div className="journey-block"><div className="journey-icon"><FiAward /></div><div><h3>Certifications</h3><ul className="cert-list">{certifications.map((cert, index) => <li key={cert}><span>0{index + 1}</span>{cert}</li>)}</ul></div></div></div><aside className="objective"><span className="section-kicker">Career objective</span><p>{objective}</p><span className="objective-mark">✳</span></aside></section>
}
