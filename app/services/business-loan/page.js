import Header from "@/comp/common/Header";
import Footer from "@/comp/Home/Footer";
import BusinessLoanPage from "@/comp/Loans/BusinessLoanPage";
import NavbarNew from "@/comp/Navbar/Navbar";



const BusinessLoan = () => {
    return (
        <div className="mt-[4.5rem]">
            <NavbarNew />
            <main className="bg-gray-50">
                <Header
                    title={"Business Loan"}
                    subTitle={'Your Partner in Success: Customized Business Loans Designed to Meet Your Unique Needs, Helping You Scale New Heights and Achieve Long-Term Stability.'}
                    img={'/services/business-loan.png'}
                />
                <BusinessLoanPage />
            </main>
            <Footer />
        </div>
    )
};

export default BusinessLoan;