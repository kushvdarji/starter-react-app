import React from "react";
import "../App.css"
import gender from "../images/gender.jpg";
import Remote from "../extra/Remote"
function Home() {
    return (
        <>
            <div className="article">
                <img src={gender} alt="..." className="image"></img>
                <h1 className="header">Gender Equality Website Launch
</h1>
            </div>
            <div className="welcome">
                <h1 style={{fontSize:"80px"}}>Welcome to our Gender Equality website!</h1></div>
            <div className="text1">
                
            <br/>

                <p>
                We are committed to promoting gender equality and empowering individuals of all genders. Our goal is to create a world where everyone has the same opportunities and rights, regardless of their gender.

On our website, you will find a wide range of resources and information related to gender equality. Here are some of the key features of our site:
<br></br>
<br/>
<span style={{color:"black"}}>About Us:</span> Learn more about our organization and our mission to promote gender equality.
<br/>
<br/>
<span style={{color:"black"}}>News and Updates:</span> Stay up-to-date on the latest news, research, and initiatives related to gender equality.

Resources: Access a variety of resources, including toolkits, guides, and educational materials, that can help you better understand and promote gender equality.
<br/><br/>
<span style={{color:"black"}}>Take Action:</span> Find out how you can get involved and take action to promote gender equality in your community and beyond.
<br/><br/>
<span style={{color:"black"}}>Get Help:</span> If you or someone you know is experiencing gender-based discrimination or violence, find resources and support services that can help.

We believe that gender equality is not just a women's issue - it's everyone's issue. By working together and promoting equality and inclusion, we can create a better future for all. Thank you for visiting our website, and we hope you find the information and resources you need to join us in this important mission                </p>
            </div>
            <div className="below">
               
                <Remote/>
            </div>
        </>
    )
}
export default Home;