import React from "react";
import "../App.css";
import respect from "../images/respect1.jpg"
import education from "../images/education1.jpg"
import jobs from "../images/jobs.jpg"
import health from "../images/health.jpg"

function Remote() {
  return (
    <>
      <div className="container-fluid pb-3">
      <h1 className="text-center">Areas Of Impact</h1>
        <div className="carded below">
          <div className="row">
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={respect}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center " style={{height:"12.8vh"}}>
                    <p style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}>There Must Be Respect To Every Citizen In The Country.There Should Not Be Any Decrimination For Any Gender</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={jobs}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                    <p style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}>There Should Not Be Any Decrimination For The Job </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={education}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                    <p style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}>EveryOne Has The Right To Take Education</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={health}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center " style={{height:"13.2vh"}}>
                    <p style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}>EveryOne Is Free For Taking The Advantage For The Health CheckUp.Ther Should Not Be Any Descrimination For the Gender  </p>
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
