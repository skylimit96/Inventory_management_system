import "./Menu.css";

function Menu() {
  return (
    <>
      <div className="menu-container">
        <ul className="dashboard-btn">
          <li>Dashboard</li>
          <li>Analytics</li>
          <li>Configuration</li>
          <li>Help</li>
        </ul>
        <div className="logout-btn">
          <h3>Logout</h3>
        </div>
      </div>
    </>
  );
}

export default Menu;
