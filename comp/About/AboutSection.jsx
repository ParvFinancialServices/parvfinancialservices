// export default function HeroSection() {
//     return (
//         <section className="bg-gray-50 ">
//             <div className="container mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:space-x-8 py-16">
//                 {/* Left Text Section */}
//                 <div className="lg:w-1/2 text-start lg:text-left">
//                     <h1 className="text-4xl font-bold text-gray-800">
//                         Helping you achieve <span className="text-blue-600">financial freedom</span>.
//                     </h1>
//                     <p className="text-gray-600 mt-4">
//                         At PARV Financial Services, we believe financial freedom isn’t just a dream — it’s a goal we can help you achieve.
//                         Our tailored loan solutions are designed to meet your unique needs, empowering individuals and businesses alike to
//                         take charge of their financial future. Whether you're looking to expand your business, consolidate debt, or fund
//                         a personal milestone, we've got you covered.
//                     </p>
//                     <p className="text-gray-600 mt-4">
//                         Here’s what you can expect when you choose us:
//                     </p>
//                     <ul className="text-gray-600 mt-4 space-y-2 list-disc list-inside">
//                         <li>Flexible loan options customized to suit your requirements.</li>
//                         <li>Quick and transparent approval processes with minimal paperwork.</li>
//                         <li>Competitive interest rates designed to save you money.</li>
//                         <li>A team of financial experts committed to your success.</li>
//                     </ul>
//                     <div className="mt-6">
//                         <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
//                             Get Started
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right Image Section */}
//                 <div className="lg:w-1/2 mt-8 lg:mt-0">
//                     <img
//                         src="/About/About3.jpg"
//                         alt="Helping businesses"
//                         className="w-full rounded-lg shadow-lg"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }














// components/AboutUs/AboutUs.js

import React from 'react';
// import Image from 'next/image';

const HeroSection = () => {
    return (
        <div className=" px-6 py-10 bg-gray-50 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
                About Parv Financial Services
            </h2>

            <div className="space-y-8 text-gray-700 text-lg max-w-7xl mx-auto">
                <p>
                    Step into the vibrant world of <strong>PARV FINANCIAL SERVICES</strong> 
                    (a unit of <strong>PARV MULTI SERVICES</strong>), a rapidly ascending brand with a mission to weave a tapestry of positive impact 
                    in the lives of individuals. Our journey commenced on the auspicious date of 
                    <strong> November 25, 2021</strong>, fueled by a vision to touch the lives of people and provide assistance in every possible manner.
                </p>

                <p>
                    We take pride in our dynamic and youthful energy, cultivating an environment where 
                    innovation and compassion intertwine seamlessly. At the heart of our ethos lies a commitment to enriching lives, 
                    and this commitment resonates in every service we offer. <strong>PARV FINANCIAL SERVICES</strong> is not merely a brand; 
                    it's a dynamic force, a catalyst for change, and a beacon of hope.
                </p>

                <p>
                    Our extensive team comprises experienced and professional individuals who bring a wealth of expertise to the table. 
                    Together, we form a collective powerhouse dedicated to crafting a better tomorrow. We believe in the power of unity and 
                    collaboration, forging connections that transcend the conventional boundaries of service provision.
                </p>

                <p>
                    As we continue to grow, our focus remains on fostering a culture of excellence and reliability. 
                    We understand the challenges individuals face in their daily lives, and we stand as a pillar of support, 
                    providing solutions that are not only easy but also secure. Whether you are a student, a professional, 
                    or an aspiring entrepreneur, <strong>PARV FINANCIAL SERVICES</strong> welcomes you to join us on this transformative journey.
                </p>

                <p>
                    So, if you are ready to be part of something greater, to contribute to a positive change, 
                    and to witness the unfolding of a vision set in motion on <strong>November 25, 2021</strong>, 
                    we invite you to connect with us. Together, let's shape a future where every interaction is a step towards 
                    making a meaningful difference in the world.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
