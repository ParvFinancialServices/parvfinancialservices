import Footer from "@/comp/footer/Footer";
import Banner from "@/comp/Home/Banner";
import NavbarNew, { Navbar } from "@/comp/Navbar/Navbar";
import { Award, Car, CircleUser, Factory, Fence, Gem, GraduationCap, HomeIcon, Menu, ShieldPlus, Sparkles, Stethoscope, User } from "lucide-react";
import { Poppins } from "next/font/google"
import Link from "next/link";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "400", "600", "800"]
})


export default function Home() {

  return (
    <div className={`${poppins.className} px-[3rem] w-screen min-h-screen h-fit flex flex-col bg-blue-100/75 relative`}>
      <span className="sm:hidden block absolute top-0 right-0 p-4 w-fit">
        <Menu />
      </span>
      <NavbarNew />
      {/* <header className="flex flex-row items-center justify-between p-4 px-8 top-0 w-full bg-blue-100/75  text-sm sm:sticky absolute -left-full sm:left-0">
        <h4>Parv</h4>
        <div className="flex flex-row items-center justify-center gap-4 flex-1">
          <Link href="About">About Us</Link>
          <Link href="About">Contact Us</Link>
          <Link href="About">Career</Link>
        </div>
        <div className="flex flex-row items-center just">
        <Link href="login" className="flex items-center justify-center px-4 py-2 bg-blue-800 rounded-md text-white">Login</Link>
        </div>
      </header> */}
      <main className="flex flex-col h-fit">
        {/* <section className="flex items-cente justify-start h-screen min-w-screen flex-row">
          <div className="flex flex-col gap-4 my-16 flex-1 sm:px-16 px-4">
            <h1 className="sm:text-5xl max-w-[19ch] text-3xl">Your Trusted Partner in Achieving Financial Freedom</h1>
            <p className="max-w-[50ch]">Parv Financial Services offers fast, reliable, and hassle-free loans to meet your needs. From personal to business and home loans, we provide low-interest rates, quick approvals, and flexible repayment options. Achieve your goals today—apply now!"</p>
            <div className="flex gap-4">
              <Link href="login" className="flex items-center justify-center px-4 py-2 bg-blue-800 rounded-md text-white">Contact Us</Link>
              <Link href="login" className="flex items-center justify-center px-4 py-2 rounded-md border border-blue-800 text-blue-800">Login</Link>
            </div>
          </div>
          <div className="flex-1 sm:block hidden overflow-hidden h-[36rem] bg-center bg-cover" style={{
            backgroundImage: `url('/hero.png')`
          }}>
            <Image src={HeroSectionImage} className="w-full h-auto" alt="hero"/>
          </div>
        </section> */}
        <Banner />
        <section className="flex items-center justify-end sm:py-8 sm:px-16 p-4 min-h-screen min-w-screen">
          <div className="flex flex-col gap-8 flex-1">
            <h4 className="w-fit flex items-center justify-center px-2 py-1 rounded-full bg-blue-400 text-xs">About Us</h4>
            <h2 className="text-3xl max-w-[40ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className="max-w-[70ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam asperiores molestias. Eos labore sapiente totam, ad, alias voluptatibus et, rem debitis quidem inventore officia asperiores corporis harum odio eligendi.</p>
            <div className="flex sm:flex-row flex-col md:gap-16 gap-4 items-start">
              <div className="flex flex-row items-center gap-2">  <Award /> <p>Excellence</p></div>
              <div className="flex flex-row items-center gap-2">  <ShieldPlus /> <p>Professionalism</p></div>
              <div className="flex flex-row items-center gap-2">  <Sparkles /> <p>Expert</p></div>
            </div>
          </div>
          <div className="flex-1 sm:block hidden"></div>
        </section>
        <section className="flex flex-col items-center justify-center sm:py-8 sm:px-16 p-4 gap-4">
          <h4 className="flex items-center justify-center px-2 py-1 rounded-full bg-blue-400 text-xs">Loans</h4>
          <h2 className="text-3xl max-w-[40ch] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 w-full">
            <div className="flex flex-col items-center justify-center p-8 min-w-[200px] max-w-[300px]">
              <HomeIcon />
              <h4 className="text-1xl max-w-[20ch]">Home Loan</h4>
              <p className="max-w-[60ch] text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nam et nulla ex beatae eaque harum dolore in </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 min-w-[200px] max-w-[300px]">
              <User />
              <h4 className="text-1xl max-w-[20ch]">Personal Loan</h4>
              <p className="max-w-[60ch] text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nam et nulla ex beatae eaque harum dolore in </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 min-w-[200px] max-w-[300px]">
              <Factory />
              <h4 className="text-1xl max-w-[20ch]">Business Loan</h4>
              <p className="max-w-[60ch] text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nam et nulla ex beatae eaque harum dolore in </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 min-w-[200px] max-w-[300px]">
              <Fence />
              <h4 className="text-1xl max-w-[20ch]">Loan against property</h4>
              <p className="max-w-[60ch] text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nam et nulla ex beatae eaque harum dolore in </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 min-w-[200px] max-w-[300px]">
              <Gem />
              <h4 className="text-1xl max-w-[20ch]">Gold Loan</h4>
              <p className="max-w-[60ch] text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nam et nulla ex beatae eaque harum dolore in </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 min-w-[200px] max-w-[300px]">
              <Car />
              <h4 className="text-1xl max-w-[20ch]">Vehicle Loan</h4>
              <p className="max-w-[60ch] text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nam et nulla ex beatae eaque harum dolore in </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 min-w-[200px] max-w-[300px]">
              <Stethoscope />
              <h4 className="text-1xl max-w-[20ch]">Medical Equipment Loan</h4>
              <p className="max-w-[60ch] text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nam et nulla ex beatae eaque harum dolore in </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 min-w-[200px] max-w-[300px]">
              <GraduationCap />
              <h4 className="text-1xl max-w-[20ch]">Education Loan</h4>
              <p className="max-w-[60ch] text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure nam et nulla ex beatae eaque harum dolore in </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-end sm:py-8 sm:px-16 p-4 min-h-screen min-w-screen gap-8">
          <div className="flex flex-col w-full gap-8 items-center">
            <h4 className="w-fit flex items-center justify-center px-2 py-1 rounded-full bg-blue-400 text-xs">Testimonials</h4>
            <h2 className="text-3xl max-w-[40ch] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          </div>
          <div className="w-full overflow-x-auto">
            <div className="flex flex-row items-center justify-center min-w-fit gap-8 p-8">
              <div className="flex flex-col items-center justify-center max-w-[800px] bg-white py-8 px-10 gap-4">
                <h5 className="text-xl text-center min-w-[60ch]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste laudantium, dolorum excepturi provident fugiat accusantium eius fugit laboriosam voluptate, quisquam corrupti quis rem aspernatur reiciendis praesentium id doloribus veniam.
                </h5>
                <div className="flex flex-row h-[45px] w-fit">
                  <div className="h-full aspect-square flex items-center justify-center p-2">
                    <CircleUser className="h-full w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-medium">Rishab Raj</p>
                    <p className="text-xs text-gray-700">CEO, some random company</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center max-w-[800px] bg-white py-8 px-10 gap-4">
                <h5 className="text-xl text-center min-w-[60ch]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste laudantium, dolorum excepturi provident fugiat accusantium eius fugit laboriosam voluptate, quisquam corrupti quis rem aspernatur reiciendis praesentium id doloribus veniam.
                </h5>
                <div className="flex flex-row h-[45px] w-fit">
                  <div className="h-full aspect-square flex items-center justify-center p-2">
                    <CircleUser className="h-full w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-medium">Rishab Raj</p>
                    <p className="text-xs text-gray-700">CEO, some random company</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center max-w-[800px] bg-white py-8 px-10 gap-4">
                <h5 className="text-xl text-center min-w-[60ch]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste laudantium, dolorum excepturi provident fugiat accusantium eius fugit laboriosam voluptate, quisquam corrupti quis rem aspernatur reiciendis praesentium id doloribus veniam.
                </h5>
                <div className="flex flex-row h-[45px] w-fit">
                  <div className="h-full aspect-square flex items-center justify-center p-2">
                    <CircleUser className="h-full w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-medium">Rishab Raj</p>
                    <p className="text-xs text-gray-700">CEO, some random company</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center max-w-[800px] bg-white py-8 px-10 gap-4">
                <h5 className="text-xl text-center min-w-[60ch]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab iste laudantium, dolorum excepturi provident fugiat accusantium eius fugit laboriosam voluptate, quisquam corrupti quis rem aspernatur reiciendis praesentium id doloribus veniam.
                </h5>
                <div className="flex flex-row h-[45px] w-fit">
                  <div className="h-full aspect-square flex items-center justify-center p-2">
                    <CircleUser className="h-full w-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <p className="font-medium">Rishab Raj</p>
                    <p className="text-xs text-gray-700">CEO, some random company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex sm:flex-row flex-col items-stretch justify-end sm:py-8 sm:px-16 p-4 sm:min-h-screen min-w-screen gap-8">
          <div className="flex flex-col gap-8 flex-1">
            <h4 className="w-fit flex items-center justify-center px-2 py-1 rounded-full bg-blue-400 text-xs">Contact Us</h4>
            <h2 className="text-3xl max-w-[40ch]">Need Help? We're Here</h2>
            <p className="max-w-[70ch]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsam asperiores molestias. Eos labore sapiente totam, ad, alias voluptatibus et, rem debitis quidem inventore officia asperiores corporis harum odio eligendi.</p>
            <div className="flex sm:flex-row flex-col md:gap-16 gap-4 items-start">
              <div className="flex flex-row items-center gap-2">  <Award /> <p>Excellence</p></div>
              <div className="flex flex-row items-center gap-2">  <ShieldPlus /> <p>Professionalism</p></div>
              <div className="flex flex-row items-center gap-2">  <Sparkles /> <p>Expert</p></div>
            </div>
          </div>
          <div className="sm:flex-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d902.3476113860994!2d84.263993!3d25.223771!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEzJzI1LjMiTiA4NMKwMTUnNTAuNiJF!5e0!3m2!1sen!2sus!4v1736513599232!5m2!1sen!2sus" className="border-0 h-full w-full" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </section>
      </main>
      {/* <footer className="flex flex-row p-8 justify-between bg-blue-400">
        <h4>Parv</h4>
        <div className="flex flex-row items-center justify-end gap-4 flex-1">
          <Link href="About">About Us</Link>
          <Link href="About">Contact Us</Link>
          <Link href="About">Career</Link>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}
