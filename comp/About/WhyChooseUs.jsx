// export default function Features() {
//     const features = [
//         {
//             title: "Personalized Loan Solutions",
//             description: "Loans tailored to fit your financial goals and needs.",
//             icon: "📄"
//         },
//         {
//             title: "Fast Approval Process",
//             description: "Get your loan approved quickly with our streamlined processes.",
//             icon: "⚡"
//         },
//         {
//             title: "Expert Financial Guidance",
//             description: "Work with a team of experts dedicated to your success.",
//             icon: "🧑‍💼"
//         }
//     ];

//     return (
//         <section className="bg-white py-16">
//             <div className="container mx-auto px-6 text-center">
//                 <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
//                 <p className="text-gray-600 mt-4">We provide the support and tools you need to succeed financially.</p>
//                 <div className="mt-10 grid md:grid-cols-3 gap-8">
//                     {features.map((feature, index) => (
//                         <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
//                             <div className="text-4xl">{feature.icon}</div>
//                             <h3 className="text-xl font-bold text-gray-800 mt-4">{feature.title}</h3>
//                             <p className="text-gray-600 mt-2">{feature.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


export default function WhyChooseUs() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6 max-w-6xl text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Why Choose Us
                </h2>
                <p className="text-gray-600 text-lg mb-12">
                    At Parv Financial Services, we are committed to providing the best financial solutions tailored to your needs.
                    Here’s why we stand out:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-100 p-4 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-blue-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m4 0h-1m-6 4V5a2 2 0 112 0v9m4-9a2 2 0 10-4 0v9"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Transparency
                        </h3>
                        <p className="text-gray-600">
                            Clear terms and conditions, so you know exactly what to expect.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
                        <div className="flex justify-center mb-4">
                            <div className="bg-green-100 p-4 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-green-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Trustworthy Service
                        </h3>
                        <p className="text-gray-600">
                            Trusted by hundreds of clients for reliable financial solutions.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 border rounded-lg shadow-lg hover:shadow-xl transition">
                        <div className="flex justify-center mb-4">
                            <div className="bg-yellow-100 p-4 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-yellow-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4c4.418 0 8 1.79 8 4v6c0 2.21-3.582 4-8 4s-8-1.79-8-4V8c0-2.21 3.582-4 8-4z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Customer Support
                        </h3>
                        <p className="text-gray-600">
                            Dedicated support team to guide you every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

