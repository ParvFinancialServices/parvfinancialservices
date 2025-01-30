// import Header from "@/comp/Calculator/Header";
import Header from "@/comp/common/Header";
import Footer from "@/comp/Home/Footer";
import LoanHeader from "@/comp/LoanEnquiry/Header";
// import Header from "@/comp/LoanEnquiry/Header";
import LoanEnquiryForm from "@/comp/LoanEnquiry/LoanEnquiryForm";
import PleaseNote from "@/comp/LoanEnquiry/Note";
import NavbarNew from "@/comp/Navbar/Navbar";
import React from "react"

function ContactUs() {
    return (
        <div className="mt-[4.5rem] ">
            <NavbarNew />
            <main className=" mx-auto">
                <Header title={'Loan Enquiry Form'} subTitle={'Please fill out the form below to inquire about our loan services. Once you submit the form, our representative will contact you shortly to discuss your requirements and guide you through the next steps.'}
                    img={'/services/loan-enquiry.png'}
                />
                <LoanEnquiryForm />
                <PleaseNote />
            </main>
            <Footer />
        </div>
    )
};

export default ContactUs;