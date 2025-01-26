import Footer from "@/comp/Home/Footer";
import Banner from "@/comp/Home/Banner";
import NavbarNew from "@/comp/Navbar/Navbar";
import { Award, Car, CircleUser, Factory, Fence, Gem, GraduationCap, HomeIcon, Menu, ShieldPlus, Sparkles, Stethoscope, User } from "lucide-react";
import { Poppins } from "next/font/google";
import About from '@/comp/Home/About'
import Features from "@/comp/Home/Features";
import Services from "@/comp/Home/Services";
import LoanCalculator from "@/comp/Home/LoanCalculator";
import LoanCalculatorSection from "@/comp/Home/LoanCalculatorSection";
import FAQ from "@/comp/Home/FAQ";
import LoanApplicationProcess from "@/comp/Home/Application";
import TestimonialSection from "@/comp/Home/TestimonialSection";
import ContactUs from "@/comp/Home/ContactUs";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "400", "600", "800"]
})


export default function Home() {

  return (
    // <div className={`${poppins.className} w-screen min-h-screen h-fit flex flex-col bg-blue-100/75 relative`}>
    <div className={` w-screen min-h-screen h-fit flex flex-col bg-blue-100/75 relative`}>
      <NavbarNew />
      <main className="flex  flex-col h-fit px-6 md:px-16 lg:px-20">
        <Banner />
        <About />
        <Services />
        <LoanCalculatorSection />
        <LoanApplicationProcess />
        <TestimonialSection />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
