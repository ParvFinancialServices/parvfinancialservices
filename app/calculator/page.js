'use client'
import Header from "@/comp/common/Header";
import LoanCalculator from "@/comp/Calculator/LoanCalculator";
import Footer from "@/comp/Home/Footer";
import NavbarNew from "@/comp/Navbar/Navbar";
import EMINote from "@/comp/Calculator/EMINote";


const Calculator = () => {
    return (
        <div className="mt-[4.5rem]">
            <NavbarNew />
            <div>
                <div className="flex-grow">
                    <Header title={"EMI Calculator"} subTitle={"Your trusted financial Partner"} img={'/About/calculator.png'} />
                    <LoanCalculator />
                    <EMINote />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Calculator;