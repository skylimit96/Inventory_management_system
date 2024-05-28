export default function Widgets() {
    return(
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
    );
}