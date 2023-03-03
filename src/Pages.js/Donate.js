import React, { useState } from "react";
import "../App.css";
import { Modal, ModalHeader } from "reactstrap";
import barcode from "../images/barcode.jpeg"
function Donate() {
    const [modal, setModal] = useState(false)
    return (
        <div>
           <h1 style={{textAlign:"center",fontWeight:"bolder",fontSize:"50px",marginTop:"10px",backgroundColor:"lightgray"}}> How wonderful it is that nobody needed to wait a single moment before starting to improve the world.</h1>
            <h2 style={{textAlign:"center",fontWeight:"bold",marginTop:"30px"}}>Currently, millions of children around the world are growing up in the midst of a deadly epidemic. Save the Children is there to protect children all over the world on the frontlines, but only with the support of donors like you. Save the Children is there to protect children all over the world on the frontlines, but only with the support of donors like you. If you live in <b style={{fontWeight:"bolder"}}><u>INDIA</u></b>  and want to help others, check out our donation center in Our Website Of <b style={{fontWeight:"bolder"}}><u>INDIA</u></b>.And Please don't compare them through their <b>GENDER</b> . 

                By donating to kids in need, you are making a difference that is desperately needed right now in the World</h2>
            <Modal
                size="sm"
                isOpen={modal}
                toggle={() => setModal(!modal)}
                style={{ marginTop: "150px" }}
            >
                <ModalHeader
                    toggle={() => setModal(!modal)} style={{ margin: "auto", textAlign: "center", display: "flex", justifyContent: "center" }}
                >
                    <h2 style={{marginBottom:"10px"}}>You Can Donate Through UPI</h2> 
                    <img src={barcode} style={{ width: "200px", height: "200px" }} />
                </ModalHeader>
            </Modal>
            <button className="btn mt-3 mb-3" style={{margin: "auto", textAlign: "center", display: "flex", justifyContent: "center",padding:"30px 30px 30px 30px",fontWeight:"bolder",fontSize:"30px",backgroundColor:"black",color:"white" }} onClick={() => setModal(true)}>
                Donate
            </button>
        </div>
    )
}
export default Donate;