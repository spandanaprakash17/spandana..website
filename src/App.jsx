import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { portfolioData } from './data/portfolioData'
import './styles/global.css'

export default function App() {
  const [theme, setTheme] = useTheme()
  return <><Navbar theme={theme} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /><main><Hero person={portfolioData.person} /><About text={portfolioData.about} /><Skills skills={portfolioData.skills} /><Projects projects={portfolioData.projects} /><Journey hackathons={portfolioData.hackathons} certifications={portfolioData.certifications} objective={portfolioData.objective} /><Contact person={portfolioData.person} /></main><Footer person={portfolioData.person} /></>
}
