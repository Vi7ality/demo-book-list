import { Link } from "react-router-dom";
import Container from "../Container";
import style from "./Header.module.scss";
import bookImg from "../../assets/book.png";

const Header: React.FC = () => {
  return (
    <Container>
      <header className={style.header}>
        <div className={style.logo}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img src={bookImg} width={30} />
            Book list app
          </Link>
        </div>
        <nav className={style.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-book">+ Add new book</Link>
            </li>
          </ul>
        </nav>
        <div className={style.menuToggle}>
          <button className={style.menuBtn}>☰</button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
