'use client'
import Header from "@/comp/common/Header";
import Footer from "@/comp/Home/Footer";
import NavbarNew from "@/comp/Navbar/Navbar";
import BusinessLoanSection from "@/comp/Services/BusinessLoanSection";
import GoldLoanSection from "@/comp/Services/GoldLoanSection";
import HomeLoanSection from "@/comp/Services/HomeLoanSection";
import PersonalLoanSection from "@/comp/Services/PersoanlLoan";
import VehicleLoanSection from "@/comp/Services/VehicleLoan";
import React from "react"

function Services() {
    return (
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
    )
};

export default Services;