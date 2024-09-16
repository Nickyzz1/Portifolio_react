import style from './Navbar.module.css'

export const Navbar = () => {
    return(
      <header>
      <nav className={style.menu}>
          <ul>
              <li><a href="#home" className={style.formatation}>contact</a></li>
              <li><a href="#formação" className={style.formatation}>education</a></li>
              <li><a href="#projetos" className={style.formatation}>projects</a></li>
              <li><a href="#formação" className={style.formatation}>services</a></li>
              <li><a href="#home" className={style.formatation}>home</a></li>
          </ul>
      </nav>
  </header>)}