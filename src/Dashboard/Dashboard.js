import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import "../utils/Table";
import StickyHeadTable from "../utils/Table";
import Welcome from "../utils/welcome";
import Widgets from "../utils/widgets";

function Dashboard({ Toggle }) {
  return (
    <div className="px-3">
      <Header Toggle={Toggle} />
      <div className="container-fluid">
        <div>
          <Welcome />
        </div>
        <Widgets />
        <hr></hr>
        <StickyHeadTable />
        <hr></hr>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
