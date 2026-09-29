export default function SectionHeading({ kicker, title, text }) {
  return <div className="section-heading"><span className="section-kicker">{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}
