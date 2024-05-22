import React from "react";
import Header from "../Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css'

function Dashboard({Toggle}) {
  return (
    <div className="px-3">
      <Header Toggle={Toggle}/>
      <div className="container-fluid">
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
                <p className="fs-5">Delivery</p>
              </div>
              <i className="bi bi-truck p-3 fs-1"></i>
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

      <table className='table caption-top bg-white mt-2 rounded'>
        <caption className='text-white fs-4'>Recent products</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Expiration date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Milk-Jaouda</td>
            <td>04.00 MAD</td>
            <td>29/05/2024</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Tea</td>
            <td>13.50 MAD</td>
            <td>31/05/2024</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Vegetal Oil</td>
            <td>95.00 MAD</td>
            <td>26/08/2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
