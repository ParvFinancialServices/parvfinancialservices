import Head from 'next/head';
import Header from "@/comp/common/Header";
import Footer from "@/comp/Home/Footer";
// import LoanHeader from "@/comp/LoanEnquiry/Header";
import LoanEnquiryForm from "@/comp/LoanEnquiry/LoanEnquiryForm";
import PleaseNote from "@/comp/LoanEnquiry/Note";
import NavbarNew from "@/comp/Navbar/Navbar";
import React from "react";

function ContactUs() {
    return (
        <>
            <Head>
                <title>Contact Us | Loan Enquiry | Parv Financial Services</title>
                <meta name="description" content="Fill out our loan enquiry form to get in touch with Parv Financial Services. Our team will assist you in choosing the right loan option for your financial needs." />
                <meta name="keywords" content="loan enquiry, contact us, personal loan, business loan, home loan, vehicle loan, financial services" />
                <meta name="author" content="Parv Financial Services" />
                <meta property="og:title" content="Contact Us | Loan Enquiry | Parv Financial Services" />
                <meta property="og:description" content="Submit your loan enquiry with Parv Financial Services and let our experts guide you through the process. Quick approval and hassle-free applications!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.parvfinancialservices.com/contact" />
                <meta property="og:image" content="/services/loan-enquiry.png" />
                <meta name="robots" content="index, follow" />
            </Head>
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
        </>
    );
};

export default ContactUs;
