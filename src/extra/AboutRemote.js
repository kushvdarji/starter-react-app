import React from 'react';
import kush from "../images/kush.jpeg"
import kunal from "../images/kunal.jpeg"
import raj from "../images/raj.jpeg"
import bantu from "../images/bantu.jpeg"
import azad from "../images/azad.jpeg"
import harshil from "../images/harshil.jpeg"
function AboutRemote() {
  return (
    <div>
       <div className="container-fluid below pb-3 ">
      <h1 className="text-center">Meet Our Team</h1>
        <div className="carded below">
          <div className="row">
            <div className="col-sm-6 col-xl-2">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={kush}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                    <p style={{color:"black",fontSize:"20px",fontWeight:"bolder"}}>Darji Kush</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-2">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={kunal}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                  <p style={{color:"black",fontSize:"20px",fontWeight:"bolder"}}>Kunal Chudasama</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-2">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={raj}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                  <p style={{color:"black",fontSize:"20px",fontWeight:"bolder"}}>Raj Bhatt</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-2">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={bantu}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                  <p style={{color:"black",fontSize:"20px",fontWeight:"bolder"}}>Harsh Bantuya</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-2">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={azad}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                  <p style={{color:"black",fontSize:"20px",fontWeight:"bolder"}}>Rajput Azad Singh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-2">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src={harshil}
                  alt="Portfolio1"
                />
                <div className="card-body">
                  <div className="text-center ">
                  <p style={{color:"black",fontSize:"20px",fontWeight:"bolder"}}>Harshil Dave</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutRemote
