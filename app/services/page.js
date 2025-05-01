// 'use client'
// import Header from "@/comp/common/Header";
// import Footer from "@/comp/Home/Footer";
// import NavbarNew from "@/comp/Navbar/Navbar";
// import BusinessLoanSection from "@/comp/Services/BusinessLoanSection";
// import GoldLoanSection from "@/comp/Services/GoldLoanSection";
// import HomeLoanSection from "@/comp/Services/HomeLoanSection";
// import PersonalLoanSection from "@/comp/Services/PersoanlLoan";
// import VehicleLoanSection from "@/comp/Services/VehicleLoan";
// import React from "react"

// function Services() {
//     return (
//         <div className="">
//             <NavbarNew />
//             <main className="mt-[4.5rem]">
//                 <Header
//                     title={'Services'}
//                     subTitle={'Helping Individuals and Businesses Make Smart Financial Decisions for a Prosperous and Secure Tomorrow.'}
//                     img={'/services/services_banner.png'}
//                 />
//                 <HomeLoanSection />
//                 <BusinessLoanSection />
//                 <VehicleLoanSection />
//                 <PersonalLoanSection />
//                 <GoldLoanSection />
//             </main>
//             <Footer />
//         </div>
//     )
// };

// export default Services;





"use client";
import Head from "next/head";
import Header from "@/comp/common/Header";
import Footer from "@/comp/Home/Footer";
import NavbarNew from "@/comp/Navbar/Navbar";
import BusinessLoanSection from "@/comp/Services/BusinessLoanSection";
import GoldLoanSection from "@/comp/Services/GoldLoanSection";
import HomeLoanSection from "@/comp/Services/HomeLoanSection";
import PersonalLoanSection from "@/comp/Services/PersoanlLoan";
import VehicleLoanSection from "@/comp/Services/VehicleLoan";
import React from "react";

function Services() {
    return (
        <>
            <Head>
                <title>Our Loan Services | Parv Financial Services</title>
                <meta name="description" content="Explore a range of loan services at Parv Financial Services, including home loans, business loans, vehicle loans, personal loans, and gold loans. Apply now for flexible and low-interest options!" />
                <meta name="keywords" content="home loan, business loan, vehicle loan, personal loan, gold loan, financial services, low interest loans" />
                <meta name="author" content="Parv Financial Services" />
                <meta property="og:title" content="Our Loan Services | Parv Financial Services" />
                <meta property="og:description" content="Parv Financial Services offers customized loan solutions to meet your financial needs. Choose from home, business, vehicle, personal, and gold loans." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.parvfinancialservices.com/services" />
                <meta property="og:image" content="/services/services_banner.png" />
                <meta name="robots" content="index, follow" />
            </Head>
            <div className="">
                <NavbarNew />
                <main className="mt-[4.5rem]">
                    <Header
                        title={'Services'}
                        subTitle={'Helping Individuals and Businesses Make Smart Financial Decisions for a Prosperous and Secure Tomorrow.'}
                        img={'/services/services_banner.png'}
                    />
                    <HomeLoanSection />
                    <BusinessLoanSection />
                    <VehicleLoanSection />
                    <PersonalLoanSection />
                    <GoldLoanSection />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Services;
