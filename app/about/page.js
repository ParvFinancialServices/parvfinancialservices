import AboutHeader from "@/comp/About/AboutHeader";
import AboutSection from "@/comp/About/AboutSection";
import CallToAction from "@/comp/About/CallToAction";
import MissionVision from "@/comp/About/MissionVision";
import Team from "@/comp/About/Teams";
import WhyChooseUs from "@/comp/About/WhyChooseUs";
// import Features from "@/comp/About/WhyChooseUs";
import Footer from "@/comp/Home/Footer";
import TestimonialSection from "@/comp/Home/TestimonialSection";
// import TestimonialSection from "@/comp/Home/Testimonial";
import NavbarNew from "@/comp/Navbar/Navbar";
import React from "react"

function About() {
    return (
        <div className="mt-16">
            <NavbarNew />
            <main>
                <AboutSection />
                <WhyChooseUs />
                <CallToAction />
                <TestimonialSection />
            </main>

            <Footer />
        </div>
    )
};

export default About;