import { Link } from 'react-router-dom'
import './Header.scss'

export default function Header({ onBurgerClick }) {
  return (
    <header className="Header">
      <Link to="/" className="Header__logo">
        tools.<span>abect</span>.com
      </Link>
      <div className="Header__right">
        <button className="Header__signin">Sign in</button>
        <div className="Header__avatar">
          <div className="Header__avatar-dot" />
        </div>
        <button className="Header__burger" onClick={onBurgerClick} aria-label="Open menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
