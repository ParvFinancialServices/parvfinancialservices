// 'use client'
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

// ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

// export default function LoanGraph({ amount, length, interest }) {
//     const monthlyInterestRate = interest / 100 / 12;
//     const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -length));

//     // Generate the loan repayment schedule
//     const labels = Array.from({ length }, (_, i) => `Month ${i + 1}`);
//     const data = Array.from({ length }, (_, i) => (monthlyPayment * (i + 1)).toFixed(2));

//     const chartData = {
//         labels,
//         datasets: [
//             {
//                 label: "Total Payable",
//                 data,
//                 borderColor: "#4F46E5",
//                 backgroundColor: "rgba(79, 70, 229, 0.2)",
//                 tension: 0.3,
//                 fill: true,
//             },
//         ],
//     };

//     return (
//         <div className="mt-6">
//             <Line data={chartData} />
//         </div>
//     );
// }


import { Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from "chart.js";

// Registering necessary components for the pie chart
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

export default function LoanGraph({ amount, length, interest }) {
    const monthlyInterestRate = interest / 100 / 12;
    const monthlyPayment = (amount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -length));
    const totalPayable = (monthlyPayment * length).toFixed(2);
    const totalInterest = (totalPayable - amount).toFixed(2);

    // Data for Pie Chart
    const data = {
        labels: ["Principal", "Interest", "Total Payable"],
        datasets: [
            {
                data: [amount, totalInterest, totalPayable],
                backgroundColor: ["#4F46E5", "#F59E0B", "#10B981"],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className=" h-96 w-full my-4 ">
            {/* <h2 className="text-lg font-semibold text-center mb-4">Loan Breakdown (Pie Chart)</h2> */}
            <div className="h-[20rem] w-full">
                <Pie data={data} />
            </div>
        </div>
    );
}

