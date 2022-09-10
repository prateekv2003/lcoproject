import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'
import * as Styles from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={Styles.container}>
      <nav>
        <ul className={Styles.navLinks}>
          <li className={Styles.navLinkItem}>
            <Link to="/" className={Styles.navLinkText}>
              Home
            </Link>
          </li>
          <li className={Styles.navLinkItem}>
            <Link to="/about" className={Styles.navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={Styles.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout