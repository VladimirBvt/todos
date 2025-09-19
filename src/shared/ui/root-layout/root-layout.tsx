import styles from '../../../pages/main/main-page.module.scss'
import { Link, Outlet } from 'react-router-dom'

export const RootLayout = () => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <Link to={'/list'}>List</Link>
          <Link to={'/list/33'}>List Item</Link>
          <Link to={'/auth'}>Auth</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer Page</footer>
    </>
  )
}
