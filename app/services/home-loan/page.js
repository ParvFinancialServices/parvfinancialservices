import Header from "@/comp/common/Header";
import Footer from "@/comp/Home/Footer";
import HomeLoan from "@/comp/Loans/HomeLoanPage";
import NavbarNew from "@/comp/Navbar/Navbar";


const HomeLoanPage = () => {
    return (
        <div className="mt-[4.5rem] bg-gray-100">
            <NavbarNew />
            <main className="bg-gray-50 mx-auto">
                <Header
                    title={'Home Loans'}
                    subTitle={'Get financing for whatever you need now. Achieve all your goals and aspirations with the right kind of help, exactly when you need it.'}
                    img={'/About/home_loan_header.png'}
                />
                <HomeLoan />
            </main>
            <Footer />
        </div>
    )
};

export default HomeLoanPage;