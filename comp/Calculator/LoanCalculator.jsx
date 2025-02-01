'use client'
import React, { useState, useMemo } from "react";
import StyledSlider, { Slider } from "./Slider";
import { ResultDisplay } from "./ResultDisplay";
import LoanGraph from "./LoanGraph";

export default function LoanCalculator() {
    const [amount, setAmount] = useState(50000);
    const [length, setLength] = useState(12); // in months
    const [interest, setInterest] = useState(10); // percentage

    // Calculate results
    const monthlyInterestRate = interest / 100 / 12;
    const monthlyPayment = useMemo(() => (
        (amount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -length))
    ).toFixed(2), [amount, interest, length]);

    const totalPayable = (monthlyPayment * length).toFixed(2);
    const totalInterest = (totalPayable - amount).toFixed(2);

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6 my-6">
            {/* <h1 className="text-2xl font-bold text-center mb-6">EMI Calculator</h1> */}

            <p className="text-center text-sm md:text-lg text-gray-700 mb-6">
                Welcome to Parv Finance's Loan Calculator. This tool helps you calculate monthly payments, the total payable amount, and interest rates based on your loan amount, term, and interest rate.
            </p>
            <div className="flex gap-4 flex-col lg:flex-row items-center w-full">

                {/* Slider Inputs */}
                <div className="w-full space-y-6">
                    <Slider label="Loan Amount" value={amount} min={10000} max={1000000} step={1000} onChange={setAmount} unit="₹" />
                    <Slider label="Loan Term (Months)" value={length} min={6} max={60} step={1} onChange={setLength} unit="Months" />
                    <Slider label="Interest Rate" value={interest} min={1} max={25} step={0.5} onChange={setInterest} unit="%" />

                    <ResultDisplay monthlyPayment={monthlyPayment} totalPayable={totalPayable} totalInterest={totalInterest} />
                </div>

                <div className="w-full flex justify-center pl-10">
                    <LoanGraph amount={amount} length={length} interest={interest} />
                </div>
            </div>

        </div>
    );
}
