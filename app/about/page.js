import Head from 'next/head';
import Footer from "@/comp/Home/Footer";
import NavbarNew from "@/comp/Navbar/Navbar";
import Header from "@/comp/common/Header";
import AboutSection from "@/comp/About/AboutSection";
import WhyChooseUs from "@/comp/About/WhyChooseUs";
import CallToAction from "@/comp/About/CallToAction";
import TestimonialSection from "@/comp/Home/TestimonialSection";
import React from "react";

function About() {
    return (
        <>
            <Head>
                <title>About Us | Parv Financial Services</title>
                <meta name="description" content="Learn more about Parv Financial Services, our mission, vision, and commitment to providing personal, business, and home loans at competitive interest rates." />
                <meta name="keywords" content="about Parv Financial Services, financial services, personal loans, business loans, home loans, vehicle loans" />
                <meta name="author" content="Parv Financial Services" />
                <meta property="og:title" content="About Us | Parv Financial Services" />
                <meta property="og:description" content="Parv Financial Services is dedicated to providing accessible and competitive loan solutions. Discover why customers trust us for their financial needs." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.parvfinancialservices.com/about" />
                <meta property="og:image" content="/About/about_header.png" />
                <meta name="robots" content="index, follow" />
            </Head>
            <div className="mt-[4.5rem]">
                <NavbarNew />
                <main>
                    <Header
                        title={'About us'}
                        subTitle={'Our goal at Parv Financial Services is to provide access to Personal Loans, Vehicle Loan, Home Loan, Business Loan at insight competitive interest rates '}
                        img={"/About/about_header.png"}
                    />
                    <AboutSection />
                    <WhyChooseUs />
                    <CallToAction />
                    <TestimonialSection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default About;
