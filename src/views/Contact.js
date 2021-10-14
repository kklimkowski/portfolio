import React from "react";
import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";
import Banner from "../components/sections/Banner.js"


const Contact = () => {
    return (
        <>
        <Header />
        <Banner>
        CONTACT PAGE
        </Banner>
            <div class= "spacingforFAQ"> </div>
            <div>
                Do you want to know more about the designer of this site? Do you have any questions specifically for her, if so you can contact her using any of these methods:
                </div>
                <div class= "spacingforFAQ"> </div>
                <u>Instagram:</u>
                <div> katie_klimkowski</div>
                    <b/>
                <div class= "spacingforContact"> </div>
                <div>
                <div class= "spacingforContact"> </div>
                <u>Email:</u>
                <div> kklimkowskiwork@gmail.com</div>
                    <b/>
                <div class= "spacingforContact"> </div>
                </div>
                



            
  
            <Footer />
        </>
        
    );

    };

export default Contact;