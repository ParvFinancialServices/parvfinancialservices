import React from "react";

const LoanFormInstructions = () => {
    const instructions = [
        {
            title: "Personal Information",
            points: [
                "Enter your full legal name as per official documents.",
                "Provide your date of birth and correct residential address.",
                "Ensure your contact details (phone number and email) are valid for communication.",
            ],
        },
        {
            title: "Employment Details",
            points: [
                "State your employment type: Salaried, Self-Employed, or Freelancer.",
                "Provide your employer’s name and job designation.",
                "Mention your monthly or annual income along with years of experience.",
            ],
        },
        {
            title: "Financial Information",
            points: [
                "Enter your total monthly income and additional revenue sources.",
                "List down your existing loans, debts, or financial obligations.",
                "Provide estimated monthly expenses for accuracy.",
            ],
        },
        {
            title: "Loan Details",
            points: [
                "Specify the loan amount you are requesting.",
                "Choose the preferred loan duration (in months or years).",
                "Mention the purpose of the loan (home, personal, business, etc.).",
            ],
        },
        {
            title: "Required Documents",
            points: [
                "Identity Proof: Aadhar Card, Passport, or Driver’s License.",
                "Income Proof: Salary Slips, IT Returns, or Bank Statements.",
                "Address Proof: Utility Bill, Rental Agreement, or Passport.",
            ],
        },
        {
            title: "Declaration",
            points: [
                "Read all terms and conditions before signing.",
                "Ensure all details provided are true and correct.",
                "Any misleading information may result in rejection.",
            ],
        },
        {
            title: "Form Submission",
            points: [
                "Submit the completed form online or at the branch.",
                "Ensure all required documents are attached.",
                "Keep a copy of the form and acknowledgment receipt.",
            ],
        },
        {
            title: "Follow-Up Process",
            points: [
                "Check the application status within the expected timeframe.",
                "Be available for verification calls or emails.",
                "Contact customer support for queries.",
            ],
        },
        {
            title: "Terms & Conditions",
            points: [
                "Review interest rates and repayment terms before agreeing.",
                "Understand the penalty clauses for late payments.",
                "Loan approval is subject to verification and eligibility criteria.",
            ],
        },
        {
            title: "Need Help?",
            points: [
                "If you have doubts, contact customer support before proceeding.",
                "Ensure you fully understand the loan conditions before applying.",
            ],
        },
    ];

    return (
        <div className="max-w-3xl mx-auto space-y-6 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold text-gray-800 text-center">
                Loan Application Instructions
            </h1>
            {instructions.map((section, index) => (
                <div key={index} className="p-4 border rounded-md bg-gray-50 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-800">{section.title}</h2>
                    <ul className="list-disc pl-5 text-gray-600 mt-2">
                        {section.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default LoanFormInstructions;
