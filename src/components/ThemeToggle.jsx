import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return <button className="icon-button" onClick={onToggle} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} title={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
    {isDark ? <FiSun /> : <FiMoon />}
  </button>
}
