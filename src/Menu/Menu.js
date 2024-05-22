import "./Menu.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Menu() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi me-3 fs-4"></i>
        <span className="brand-name fs-4">I.M.System</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <span>Dashboard</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i>
          <span>Products</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i>
          <span>Report</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <span>Customers</span>
        </a>
        <a className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Menu;
