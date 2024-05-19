import "./Header.css";
import notif from "../assets/notif.svg";
import user from "../assets/user.svg";
import calendar from "../assets/calendar.svg";
import config from "../assets/config.svg";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <a href="#" className="logoTitle">
        INVENTORY MANAGEMENT SYSTEM
      </a>
      <ul className="navbar-btns" id="navbar">
        <li>
          <a href="#">
            <img src={notif} alt="notif" className="notif" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={user} alt="user" className="user" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={calendar} alt="calendar" className="calendar" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={config} alt="config" className="config" />
          </a>
        </li>
      </ul>
    </Navbar>
  );
}

export default Header;
