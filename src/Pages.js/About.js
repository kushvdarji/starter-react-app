import React from "react";
import AboutRemote from "../extra/AboutRemote";
import gender from "../images/gender.jpg"
function About (){
    return(
        <>
        <div className="article1">
            <img src={gender} alt="..." className="image1"/>
            <h1 className="header1">Darji Kush</h1>
            <p className="text1about">Shree vdffdfdbbbvjfvjnvflsavalsvjnvflfvjsdlvn</p>
        </div>
        <div className="belowimage" >
        <h1>Gender Equality Should Be Maintained in Each And Every Country And Should Be Accepted By The Government</h1>
        <img src={gender} alt="..." className="imagebelowabout"/>
        </div>
        <div>
            <AboutRemote/>
        </div>
        </>
    )
}
export default About;