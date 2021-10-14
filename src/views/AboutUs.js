import React from "react";
import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";
import Banner from "../components/sections/Banner.js"


const AboutUs = () => {
    return (
        <>
            <Header/>
            <Banner>
            ABOUT US PAGE
            </Banner>
            <div>
             I will be honest if you had told me when I was I was in high school that my first year of college was going to be learning how to code and even create my own site I would have said you were crazy. Yet, here I am with my very own profile website. It is still hard for me to believe. I am by no means a technological person. I couldn't even get my computer in the lab to work for the first week (in my defense the computer I had been using didn't have a lot of storage space so technically it was only partially my fault). So this whole process was a big learning experience for me. I created this site mainly because I thought we had to design a website about ourselves. This all sounds pretty easy, I mean we are all humans and a part of nature is talking about ourselves. We live for it because we generally think we are the most exceptional thing on this planet. However when you have to sit down and create a whole site about yourself this becomes kind of difficult. Plus, there were several other obstacles with this project that didn't make the process any easier. Mind you it took till midterms for our laptops to come in (we were promised they would be waiting for us when we first got to campus but due to the pandemic this was not the case). Nevertheless though in the end I was able to develop a website that I hope overall gives you some insight into who I am as a person and ultimately show you that anyone can design a website. You just have to be willing to put in the effort and work. 
            </div>
            <Footer/>
        </>
        
    );

    };

export default AboutUs;