import Header from "@/comp/common/Header";
import Footer from "@/comp/Home/Footer";
import VehicleLoanPage from "@/comp/Loans/VehicleLoanPage";
import NavbarNew from "@/comp/Navbar/Navbar";



const VehicleLoan = () => {
    return (
        <div>
            <NavbarNew />
            <main className="mt-[4.5rem] bg-gray-50 w-full">
                <Header
                    title={"Vehicle Loan"}
                    subTitle={'Your Partner in Success: Customized Business Loans Designed to Meet Your Unique Needs, Helping You Scale New Heights and Achieve Long-Term Stability.'}
                    img={'/services/vehicle-loan.png'}
                />
                <VehicleLoanPage />
            </main>
            <Footer />
        </div>
    )
};

export default VehicleLoan;