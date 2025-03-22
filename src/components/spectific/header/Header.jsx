// const Header = (props) => {
//   return <header>Header</header>;
// };

import style from './Header.module.css';
import logo from './pictures/safeer.svg'


function Header() {
  return (
      <header>
        <div className={style.navbar}>
          <div className={style.conectUs}>
            <a href='#'>ارتباط با ما</a>
          </div>
          <nav>
            <ul>
              <li><a href='#'>صنایع</a></li>
              <li><a href='#'>اسناد</a></li>
              <li><a href='#'>درباره ما</a></li>
            </ul>
          </nav>
          <div>
            <img src={logo} alt='Safeer' />

          </div>
        </div>

      </header>
  );
}
export default Header;
