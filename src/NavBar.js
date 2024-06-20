import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/jewelery">Jewelery</NavLink>
            </li>
            <li>
              <NavLink to="/men">Men</NavLink>
            </li>
            <li>
              <NavLink to="/women">Women</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar