// components/LoanHeader.js
export default function LoanHeader() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
                <div className="text-center">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Loan Enquiry Form
                    </h1>

                    {/* Description */}
                    <p className="mt-4 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        Please fill out the form below to inquire about our loan services. Once you submit the form, our representative will contact you shortly to discuss your requirements and guide you through the next steps.
                    </p>

                    {/* Call-to-Action
                    <div className="mt-6">
                        <a
                            href="#form-section"
                            className="bg-white text-blue-600 px-6 py-3 rounded-md shadow-lg text-lg font-medium hover:bg-gray-100"
                        >
                            Get Started
                        </a>
                    </div> */}
                </div>
            </div>
        </header>
    );
}
