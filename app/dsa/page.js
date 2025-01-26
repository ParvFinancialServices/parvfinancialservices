import Footer from "@/comp/Home/Footer";
import NavbarNew from "@/comp/Navbar/Navbar";
// import DSA from '@/comp/dsa/DSAPageFull';
import DSAPage from '@/comp/dsa/DSAPage';
import React from "react"

function Connector() {
    return (
        <div>
            <NavbarNew />
            <main className="mt-[4.5rem]">
                <DSAPage />
            </main>
            <Footer />
        </div>
    )
};

export default Connector;