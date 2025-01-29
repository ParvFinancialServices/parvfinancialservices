import Header from "@/comp/common/Header";
import Footer from "@/comp/Home/Footer";
import GoldLoanPage from "@/comp/Loans/GoldLoanPage";
import NavbarNew from "@/comp/Navbar/Navbar";



const GoldLoan = () => {
    return (
        <div>
            <NavbarNew />
            <main className="mt-[4.5rem] bg-gray-50">
                <Header
                    title={"Gold Loan"}
                    subTitle={'Your Partner in Success: Customized Business Loans Designed to Meet Your Unique Needs, Helping You Scale New Heights and Achieve Long-Term Stability.'}
                    img={'/services/gold-loan.png'}
                />
                <GoldLoanPage />
            </main>
            <Footer />
        </div>
    )
};

export default GoldLoan;