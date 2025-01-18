import Link from "next/link";
import React from "react";


const Content = {
    title: 'Empowering Your Dreams with Easy Loans!',
    subTitle: "Affordable Home Loans, Vehicle Loans, and Gold Loans – All in One Place. Fast Approvals, Flexible EMI Plans, and Low Interest Rates.",
    desc: "Turn your dreams into reality with affordable loans designed to suit your lifestyle. Whether it’s your dream home, a new vehicle, or leveraging your gold, we’re here to help with quick approvals and low-interest rates."
}

const Banner = () => {
    return (
        <div class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
            <div class="pr-2 md:mb-14 py-14 md:py-0">
                <h1 class="text-3xl font-semibold text-blue-900 xl:text-4xl lg:text-3xl">{Content?.title}</h1>
                <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
                    {Content?.subTitle}
                </p>
                <div class="mt-4">
                    <a href="#contact" class="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
                </div>
                <section className="flex h-screen w-full flex-col sm:flex-row p-4 md:px-12 gap-8 sm:gap-0">
                    <div className="flex flex-col items-start justify-center gap-8 flex-1">
                        <h1 className="sm:text-5xl max-w-[20ch] text-3xl">{Content?.title}</h1>
                        <p className="max-w-[60ch]">
                            {Content?.desc}
                        </p>
                        <Link href="/" className=" px-10 py-2 rounded tracking-wider text-white bg-blue-500 md:px-8 hover:bg-blue-600 group">
                            Explore our services
                        </Link>
                    </div>

                    <div className="flex-1 h-full flex items-center justify-center">
                        <img id="heroImg1" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Awesome hero page image" />
                    </div>
                </section >
                )
};

                export default Banner;