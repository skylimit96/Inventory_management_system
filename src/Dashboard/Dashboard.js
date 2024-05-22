import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './Dashboard.css';

function Dashboard({ Toggle }) {
  return (
    <div className="px-3">
      <Header Toggle={Toggle} />
      <div className="container-fluid">
        <div>
          <figure>
            <blockquote class="blockquote">
              <span className='h3 text-white'>Hello, <b>Amine</b>.</span>
            </blockquote>
            <figcaption class="blockquote-footer text-white">
              Welcome to the Inventory Managment System.
            </figcaption>
          </figure>
        </div>
        <div className="row g-3 my-2">
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">230</h3>
                <p className="fs-5">Products</p>
              </div>
              <i className="bi bi-cart-plus p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">1392</h3>
                <p className="fs-5">Sales</p>
              </div>
              <i className="bi bi-currency-dollar p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">1230</h3>
                <p className="fs-5">Expired</p>
              </div>
              <i className="bi bi-calendar-x p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-3 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">30%</h3>
                <p className="fs-5">Increase</p>
              </div>
              <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
            </div>
          </div>
        </div>
      </div>

      <table className="table caption-top bg-white mt-2">
        <caption className="text-white fs-4 text-center">Recent products</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Production</th>
            <th scope="col">Expiration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Product</td>
            <td>14.00 MAD</td>
            <td>29/05/2024</td>
            <td>29/05/2024</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Product</td>
            <td>13.50 MAD</td>
            <td>29/05/2024</td>
            <td>31/05/2024</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Product</td>
            <td>95.00 MAD</td>
            <td>29/05/2024</td>
            <td>26/08/2025</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Product</td>
            <td>24.00 MAD</td>
            <td>29/05/2024</td>
            <td>29/08/2024</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Product</td>
            <td>34.00 MAD</td>
            <td>29/05/2024</td>
            <td>29/07/2024</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Product</td>
            <td>54.00 MAD</td>
            <td>29/05/2024</td>
            <td>19/07/2024</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Product</td>
            <td>34.00 MAD</td>
            <td>29/05/2024</td>
            <td>05/07/2024</td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Dashboard;
