import React,{useState} from "react";
import Axios from "axios";
import "../App.css";
function Contact() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[phone,setPhone]=useState("");
  const[disc,setDisc]=useState("");

  const handleName=(e)=>{
    setName(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlePhone=(e)=>{
    setPhone(e.target.value);
  }
  const handleDisc=(e)=>{
    setDisc(e.target.value)
  }
  const handleSubmit=()=>{
    Axios.post("https://encouraging-hare-attire.cyclic.app/receivecontact",
    {
      Name:name,
      Email:email,
      Phone:phone,
      Disc:disc,
    }).then((response)=>{
      if(response.data.status=200){
        console.log(response);
        alert("You Have Submitted Successfully")
        setName("");
        setDisc("");
        setEmail("");
        setPhone("");
      }else{
        console.log(response)
      }
    },(err)=>{
      alert("Please Enter Valid Details")
 if(err.response.data.Email){
          console.log(err.response.data.Email)
        }else if(err.response.data.Phone){
          console.log(err.response.data.Phone)
        }else if(err.response.data.Name){
          console.log(err.response.data.Name)
        }else{
          console.log("Something Went Wrong")
        }
    });

  }
  const downkey = ["e", "E", "+", "-", "."];

  return (
    <>
      <div className="flex2">
        <div className="form-floating">
          <h2 style={{ textAlign: "center" }}>Contact Us</h2>
          <hr />
          <form id="form">
            <div className="form-floating mb-3">
              <input
                type="text"
                placeholder="name"
                className="form-control"
                name="Name"
                value={name}
                onChange={(e)=>handleName(e)}
                id="Name"
              />
              <label id="lab2" style={{ color: "black" }}>
                Name
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="Email"
                name="Email"
                placeholder="name@example.com"
                value={email}
                onChange={(e)=>handleEmail(e)}
              />
              <label id="lab1" style={{ color: "black" }} >
                Email address
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                placeholder="Phone"
                type="number"
                className="form-control"
                id="Number"
                name="Phone"
                value={phone}
                onChange={(e)=>handlePhone(e)}
                onKeyDown={(e) => downkey.includes(e.key) && e.preventDefault()}

              />
              <label id="lab3" style={{ color: "black" }}>
                Phone
              </label>
            </div>

            <textarea
              name="Disc"
              value={disc}
              onChange={(e)=>handleDisc(e)}
              id="Disc"
              cols="26"
              placeholder="Your Message"
              rows="5"
            ></textarea>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
              type="button"
                id="btn2"
                style={{ backgroundColor: "BLACK", color: "white" }}
                className="btn btn-dark"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
export default Contact;
