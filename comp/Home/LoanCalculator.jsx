

'use client';

import { useState } from "react";
// import Slider from "./Slider";
// import ResultDisplay from "./ResultDisplay";


export function Slider({ label, value, min, max, step, onChange, unit }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <label className="text-sm font-medium">{label}</label>
                <span className="text-sm font-semibold">{value} {unit}</span>
            </div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export function ResultDisplay({ monthlyPayment, totalPayable, totalInterest }) {
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-center">Payment Breakdown</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-gray-100 rounded-lg">
                    <span className="block font-medium">Monthly Payment</span>
                    <span className="block font-semibold text-lg">₹{monthlyPayment}</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                    <span className="block font-medium">Total Payable</span>
                    <span className="block font-semibold text-lg">₹{totalPayable}</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg">
                    <span className="block font-medium">Total Interest</span>
                    <span className="block font-semibold text-lg">₹{totalInterest}</span>
                </div>
            </div>
        </div>
    );
}


export default function LoanCalculator() {
    const [amount, setAmount] = useState(50000);
    const [length, setLength] = useState(12); // in months
    const [interest, setInterest] = useState(10); // percentage

    // Calculate results
    const monthlyInterestRate = interest / 100 / 12;
    const monthlyPayment = (
        amount * monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -length))
    ).toFixed(2);

    const totalPayable = (monthlyPayment * length).toFixed(2);
    const totalInterest = (totalPayable - amount).toFixed(2);

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
            <h1 className="text-2xl font-bold text-center">Loan Calculator</h1>

            {/* Slider Inputs */}
            <Slider
                label="Loan Amount"
                value={amount}
                min={10000}
                max={1000000}
                step={1000}
                onChange={setAmount}
                unit="₹"
            />
            <Slider
                label="Loan Term (Months)"
                value={length}
                min={6}
                max={60}
                step={1}
                onChange={setLength}
                unit="Months"
            />
            <Slider
                label="Interest Rate"
                value={interest}
                min={1}
                max={25}
                step={0.5}
                onChange={setInterest}
                unit="%"
            />

            {/* Result Display */}
            <ResultDisplay
                monthlyPayment={monthlyPayment}
                totalPayable={totalPayable}
                totalInterest={totalInterest}
            />
        </div>
    );
}
