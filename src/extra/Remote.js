import React from "react";
import "../App.css";
import gender from "../images/gender.jpg";

function Remote() {
  return (
    <>
      <div className="container-fluid below pb-3 ">
      <h1 className="text-center"> Eight Areas Of Impact</h1>
        <div className="card below">
          <div className="row">
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={gender}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                    <p>fdgdfg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={gender}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                    <p>fdgdfg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={gender}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                    <p>fdgdfg</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={gender}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                    <p>fdgdfg</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Remote;
