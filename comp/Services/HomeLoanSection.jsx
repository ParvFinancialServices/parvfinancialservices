// import Image from "next/image";

import Image from "next/image";
import { Heading } from "../Home/Common";
import { MoveRight } from "lucide-react";
import Link from "next/link";

// export default function HomeLoanSection() {
//     return (
//         <section className="bg-gray-50 py-16">
//             <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-8">
//                 {/* Image Section */}
//                 <div className="md:w-1/2">
//                     <Image
//                         src="/About/HomeLoan.jpg" // Replace with the actual path of your image
//                         alt="Home Loan Services"
//                         width={600}
//                         height={400}
//                         className="rounded-lg shadow-lg"
//                     />
//                 </div>

//                 {/* Text Section */}
//                 <div className="md:w-1/2 space-y-6">
//                     <h2 className="text-3xl font-bold text-gray-800">
//                         Make Your Dream Home a Reality
//                     </h2>
//                     <p className="text-gray-600 text-lg">
//                         Whether you're a first-time homebuyer or looking to upgrade, we provide tailored home loan solutions to make your dream a reality. Enjoy competitive rates, flexible terms, and expert support every step of the way.
//                     </p>
//                     <p className="text-gray-600">
//                         Our transparent process ensures a hassle-free experience, so you can focus on what truly matters—moving into your new home.
//                     </p>

//                     {/* Explore Button */}
//                     <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
//                         Explore Home Loans
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }


// export default function HomeLoanSection() {
//     return (
//         <section className="bg-gray-50 py-16">
//             <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center gap-8">
//                 {/* Image Section */}
//                 <div className="md:w-1/2">
//                     <Image
//                         src="/home-loan.jpg" // Replace with the actual path of your image
//                         alt="Home Loan Services"
//                         width={600}
//                         height={400}
//                         className="rounded-lg shadow-lg"
//                     />
//                 </div>

//                 {/* Text Section */}
//                 <div className="md:w-1/2 space-y-6">
//                     <h2 className="text-3xl font-bold text-gray-800">
//                         Make Your Dream Home a Reality
//                     </h2>
//                     <ul className="space-y-4 text-gray-600 text-lg list-disc pl-5">
//                         <li>
//                             <strong>Tailored Solutions:</strong> Custom home loans for first-time buyers or upgrades.
//                         </li>
//                         <li>
//                             <strong>Competitive Rates:</strong> Affordable interest rates to fit your budget.
//                         </li>
//                         <li>
//                             <strong>Flexible Terms:</strong> Choose repayment plans that work for you.
//                         </li>
//                         <li>
//                             <strong>Expert Guidance:</strong> Dedicated support throughout the process.
//                         </li>
//                         <li>
//                             <strong>Hassle-Free Process:</strong> Transparent and stress-free experience.
//                         </li>
//                     </ul>

//                     {/* Explore Button */}
//                     <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition">
//                         Explore Home Loans
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// }


// import Image from "next/image";

export default function HomeLoanSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center gap-8">
                {/* Text Section */}
                <div className="md:w-1/2 space-y-2">
                    <div className="mb-3">
                        <Heading text={'Home Loan'} />
                    </div>
                    <h2 className="text-3xl font-bold text-blue-600">
                        Helping you achieve your dream home.
                    </h2>
                    <p className="text-gray-600 text-base">
                        At PARV Financial Services, we understand that buying a home is a
                        significant milestone. Our tailored home loan solutions are
                        designed to make the process seamless, offering you the best rates
                        and terms to fit your unique needs.
                    </p>
                    <p className="text-gray-600 text-base">
                        Whether you're purchasing your first home, upgrading to a new one,
                        or refinancing, we're here to guide you every step of the way.
                    </p>
                    <ul className="space-y-3 text-gray-600 text-base list-disc pl-5">
                        <li>
                            Flexible loan options to suit your requirements.
                        </li>
                        <li>
                            Quick and transparent approval processes with minimal paperwork.
                        </li>
                        <li>
                            Competitive interest rates designed to save you money.
                        </li>
                        <li>
                            Expert support to help you make informed decisions.
                        </li>
                    </ul>
                    <Link href={'/services/home-loan'}>
                        <button className="bg-blue-500 flex items-center gap-2 hover:gap-3 transition-all duration-500 text-white text-sm px-4 mt-6 py-2 rounded-lg shadow hover:bg-blue-600">
                            Explore <MoveRight size={20} />
                        </button>
                    </Link>

                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                    <Image
                        src="/About/HomeLoan.jpg" // Replace with your image path
                        alt="Home Loan"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}


