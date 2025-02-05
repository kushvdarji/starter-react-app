import React from "react";
import "../App.css"
import gender from "../images/gender.jpg";
import Remote from "../extra/Remote"
function Home() {
    return (
        <>
            <div className="article" data-aos="fade-out">
                <img src={gender} alt="..." className="image"></img>
                <h1 className="header" >Gender Equality Website Launch
                </h1>
            </div>
            <div className="welcome">
                <h1 style={{ fontSize: "70px" }} data-aos="fade-in">Welcome to our Gender Equality website!</h1></div>
                <div className="abovetext1">
            <div className="text1">

                <br />

                <p data-aos="fade-up">
                    We are committed to promoting gender equality and empowering individuals of all genders. Our goal is to create a world where everyone has the same opportunities and rights, regardless of their gender.

                    On our website, you will find a wide range of resources and information related to gender equality. Here are some of the key features of our site:
                </p>
                <br/>
                {/* <br /> */}
                <p data-aos="fade-up">
                    <span style={{ color: "black",fontWeight:"bolder" }}><u>About Us:</u></span> Learn more about our organization and our mission to promote gender equality.</p>
                <br />
                {/* <br /> */}
                <p data-aos="fade-up">
                    <span style={{ color: "black",fontWeight:"bolder" }}><u>News and Updates:</u></span> Stay up-to-date on the latest news, research, and initiatives related to gender equality.

                    Resources: Access a variety of resources, including toolkits, guides, and educational materials, that can help you better understand and promote gender equality.</p>
                <br />
                <p data-aos="fade-up">
                    <span style={{ color: "black",fontWeight:"bolder" }}><u>Take Action:</u></span> Find out how you can get involved and take action to promote gender equality in your community and beyond.</p>
                <br />
                <p data-aos="fade-up">
                    <span style={{ color: "black",fontWeight:"bolder" }}><u>Get Help:</u></span> If you or someone you know is experiencing gender-based discrimination or violence, find resources and support services that can help.

                    We believe that gender equality is not just a women's issue - it's everyone's issue. By working together and promoting equality and inclusion, we can create a better future for all. Thank you for visiting our website, and we hope you find the information and resources you need to join us in this important mission               </p>
            </div>
            </div>
            <div className="below">

                <Remote />
            </div>
        </>
    )
}
export default Home;