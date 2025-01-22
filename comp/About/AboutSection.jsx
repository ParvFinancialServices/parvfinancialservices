export default function HeroSection() {
    return (
        <section className="bg-gray-50 ">
            <div className="container mx-auto max-w-6xl px-6 lg:flex lg:items-center lg:space-x-8 py-16">
                {/* Left Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Helping you achieve <span className="text-blue-600">financial freedom</span>.
                    </h1>
                    <p className="text-gray-600 mt-4">
                        At PARV Financial Services, we believe financial freedom isn’t just a dream — it’s a goal we can help you achieve.
                        Our tailored loan solutions are designed to meet your unique needs, empowering individuals and businesses alike to
                        take charge of their financial future. Whether you're looking to expand your business, consolidate debt, or fund
                        a personal milestone, we've got you covered.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Here’s what you can expect when you choose us:
                    </p>
                    <ul className="text-gray-600 mt-4 space-y-2 list-disc list-inside">
                        <li>Flexible loan options customized to suit your requirements.</li>
                        <li>Quick and transparent approval processes with minimal paperwork.</li>
                        <li>Competitive interest rates designed to save you money.</li>
                        <li>A team of financial experts committed to your success.</li>
                    </ul>
                    <div className="mt-6">
                        <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
                            Get Started
                        </a>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <img
                        src="/About/About3.jpg"
                        alt="Helping businesses"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
