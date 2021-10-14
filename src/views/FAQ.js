import React from "react";
import Header from "../components/layout/Header.js";
import Footer from "../components/layout/Footer.js";
import Banner from "../components/sections/Banner.js"

const FAQ = () => {
    return (
        <>
        <Header/>
        <Banner>
            FAQ<br/> (Frequently Asked Questions)
        </Banner>
        <div class= "spacingforFAQ"> </div>
        <div className= "question1">
            <u>
            1. What inpired you to create a profile website?
            </u>
            <div>
                I was given the assignment actually for my web design classs and decided to just keep growing the website.
            </div> 
            <div class= "spacingforFAQ"> </div>
        </div>
       
        <div> 
            <u>
            2. How hard is it to create a profile website?
            </u>
        </div>
        <div>
            It can be very challenging at times. You have to make sure that everything on your website flows together as a whole. Plus, at times you have to be careful and make sure that all of the commands you make don't override each other. Overall, there is a substantial amount of work that is involved in the process of creating a website.
        </div>
        <div class= "spacingforFAQ"> </div>
        <div>
            <u>
                3. What would you say is the most difficult part of designing a website?
            </u>
        </div>
        <div>
            Ultimately, I would say the hardest part for me was when I would create a command in CSS but it wouldn't work. So then you have to go through the long process of figuring out why the command is not working and where you made the error in your coding.
        </div>
        <div class= "spacingforFAQ"> </div>
        <div>
            <u>
                4. What would you say are the first steps one needs to take when wanting to design a website?
            </u>
        </div>
        <div>
            I would say that one needs to have a plan. You need to know what you want your website to address. You need to know what you want to be yor overall message to those who will be viewing your website. While it can be difficult to find this directon once you do it will be the key to creating a successful website.
        </div>
        <div class= "spacingforFAQ"> </div>


        <Footer/>
        </>
    );

    };

export default FAQ;