
import { ChevronRight } from "lucide-react";
import React from "react";
import { Heading } from "./Common";


const AboutBox = ({ head, para, imageUrl }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md border-white -500 cursor-pointer hover:scale-105 transition-all duration-700">
            <img src={imageUrl} alt="icons" className="w-10 " />
            <h1 className="text-lg font-semibold text-slate-800">{head}</h1>
            <p className="text-sm text-gray-600">{para}</p>
        </div>
    )
}

const data = {
    heading: "The Tale of Our Achievement Story",
    desc: "At PARV Financial Services, we take pride in shaping brighter financial futures. Through unwavering dedication and customer-first values, we’ve turned countless dreams into reality. Here’s a glimpse of what we’ve accomplished:",
    box: [
        <AboutBox head={'20+ Years of Expertise'} para={'Empowering Financial Growth with Reliable Loan Solutions'} imageUrl={'/About/experies.png'} />,
        <AboutBox head={'15,000+ Successful Loans'} para={'Helping Customers Achieve Their Goals with Confidence'} imageUrl={'/About/loan.png'} />,
        <AboutBox head={'30+ Prestigious Awards'} para={'Honored for Our Commitment to Excellence and Innovation'} imageUrl={'/About/medal.png'} />,
        <AboutBox head={'97% Client Success Rate'} para={'Delivering Results That Matter, Every Time'} imageUrl={'/About/client.png'} />,
    ]
}
const About = () => {
    return (
        <div className="bg-white">

            <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
                <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div class="w-full flex-col justify-center items-start gap-8 flex">
                                <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <Heading text={'About Us'} />
                                    {/* <h6 class="text-gray-100 text-xs bg-orange-500 px-3 rounded-full py-1 font-normal leading-relaxed">About Us</h6> */}
                                    <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2
                                            class="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            The Tale of Our Achievement Story</h2>
                                        <p
                                            class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                            Our achievement story is a testament to teamwork and perseverance. Together, we've
                                            overcome challenges, celebrated victories, and created a narrative of progress and
                                            success.</p>
                                    </div>
                                </div>
                                {/* <div class="w-full flex-col justify-center items-start gap-6 flex">
                                    <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div
                                            class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                            <p class="text-gray-500 text-base font-normal leading-relaxed">Influencing Digital
                                                Landscapes Together</p>
                                        </div>
                                        <div
                                            class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                                            </h4>
                                            <p class="text-gray-500 text-base font-normal leading-relaxed">Excellence Achieved
                                                Through Success</p>
                                        </div>
                                    </div>
                                    <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div
                                            class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                            <p class="text-gray-500 text-base font-normal leading-relaxed">Our Dedication to
                                                Innovation Wins Understanding</p>
                                        </div>
                                        <div
                                            class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                                                Clients</h4>
                                            <p class="text-gray-500 text-base font-normal leading-relaxed">Mirrors our Focus on
                                                Client Satisfaction.</p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="grid grid-cols-2 gap-3">
                                    {
                                        data?.box?.map((items, index) => {
                                            return (
                                                <div key={index}>
                                                    {items}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <button
                                class="sm:w-fit w-full group px-3.5 py-2 bg-blue-500 hover:bg-indigo-500 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                                <span
                                    class="px-1.5 text-white text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                                    More</span>
                                <ChevronRight size={17} className="text-white" />
                            </button>
                        </div>
                        <div class="w-full lg:justify-start justify-center items-start flex">
                            <div
                                class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                                <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                    src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About;