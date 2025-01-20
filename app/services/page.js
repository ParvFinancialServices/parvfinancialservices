'use client'
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
        <div className="mt-16">
            <NavbarNew />
            <main>
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