// components/LoanCalculatorSection.js
import { Button } from "@/components/ui/button"; // Import ShadCN Button component
import { Heading } from "./Common";

export default function LoanCalculatorSection() {
    return (
        <section className="bg-gray-50 py-20">
            <div className=" max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Side: Illustration */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/About/calculator.png"
                            alt="Loan Calculator Illustration"
                            className="max-w-sm md:max-w-md"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-6">
                        <div className="my-5">
                            <Heading text={'Calculator'} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            Plan Your Finances with Ease
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Unleash the power of simplicity and gain control over your
                            financial goals. Our loan calculator makes budgeting effortless
                            and helps you make informed decisions.
                        </p>
                        <ul className="mt-6 space-y-2 text-gray-600">
                            <li>• Calculate monthly payments in seconds.</li>
                            <li>• Compare loan terms and interest rates.</li>
                            <li>• Understand your financial options clearly.</li>
                            <li>• Plan your future with confidence.</li>
                        </ul>
                        <Button className="mt-6 bg-blue-500 ">Calculate Now</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
