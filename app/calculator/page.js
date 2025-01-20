'use client'
import Header from "@/comp/Calculator/Header";
import LoanCalculator from "@/comp/Calculator/LoanCalculator";
import Footer from "@/comp/Home/Footer";
import NavbarNew from "@/comp/Navbar/Navbar";


const Calculator = () => {
    return (
        <div className="mt-16">
            <NavbarNew />
            <div>
                <div className="flex-grow">
                    <Header />
                    <LoanCalculator />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Calculator;