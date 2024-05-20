import "./Header.css";
import notif from "../assets/notif.svg";
import user from "../assets/user.svg";
import calendar from "../assets/calendar.svg";
import config from "../assets/config.svg";

function Header() {
  return (
    <nav expand="lg" className="bg-dark.bg-gradient">
      <span className="logoTitle">
        INVENTORY MANAGEMENT SYSTEM
      </span>
      <div className="navbar-btns">
          <a href="#">
            <img src={notif} alt="notif" />
          </a>
          <a href="#">
            <img src={user} alt="user" />
          </a>
          <a href="#">
            <img src={calendar} alt="calendar"/>
          </a>
          <a>
            <img src={config} alt="config" />
          </a>
      </div>
    </nav>
  );
}

export default Header;