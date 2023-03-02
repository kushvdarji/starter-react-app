import React from "react";
import AboutRemote from "../extra/AboutRemote";
import gender from "../images/gender.jpg"
function About (){
    return(
        <>
        <div className="article1">
            <img src={gender} alt="..." className="image1"/>
            <h1 className="header1">About Us</h1>
            <p className="text1about">Since the 1980s, the push for neoliberalism prioritizes competitiveness and self-reliance as a measurement for economic success. Individuals and their identifying communities that do not meet society's favored neoliberal standards are looked down upon and prone to lower their self-esteem. Some groups who do not fit the preferable neoliberal image are the lower working class and the unemployed.</p>
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