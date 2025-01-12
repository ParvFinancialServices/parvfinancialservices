export const PersonalLoan = {
    info: {
        title: "Prerequisits",
        sections: [{
            title: "something",
            fields: [
                {
                    name: "name_of_referer",
                    label: "Name of referer",
                    type: "String",
                },
            ]
        }]
    },
    personal_details: {
        title: "Personal Details",
        sections: [
            {
                title: "Referer",
                fields: [
                    {
                        name: "name_of_referer",
                        label: "Name of referer",
                        type: "String",
                    },
                    {
                        name: "purpose_of_loan",
                        label: "Purpose of Loan",
                        type: "Option",
                        options: [
                            { id: "1", label: "To purchase property" },
                            { id: "2", label: "For marrage at home" },
                            { id: "3", label: "For Education" },
                            { id: "4", label: "To pay credit card bill" },
                            { id: "5", label: "To repay other loan" },
                            { id: "6", label: "To construct home" },
                            { id: "7", label: "For other Persoanl reason" },
                        ]
                    },
                ]
            },
            {
                title: "Personal Information",
                fields: [
                    {
                        name: "Name",
                        label: "Name",
                        type: "String",
                    },
                    {
                        label: "fathers_name",
                        label: "Father's Name",
                        type: "String",
                    },
                    {
                        name: "mothers_name",
                        label: "Mother's Name",
                        type: "String",
                    },
                    {
                        name: "phone_no",
                        label: "Phone Number",
                        type: "String",
                    },
                    {
                        name: "alt_phone_no",
                        label: "Alternate Phone Number",
                        type: "String",
                    },
                    {
                        name: "pan",
                        label: "PAN Number",
                        type: "String",
                    },
                    {
                        name: "dob",
                        label: "Date of Birth",
                        type: "Date",
                    }
                ]
            },
            {
                title: "Present Address",
                fields: [
                    {
                        name: "building_name",
                        label: "Building/House Name",
                        type: "String"
                    },
                    {
                        name: "street_name",
                        label: "Street/Road Name",
                        type: "String"
                    },
                    {
                        name: "landmark",
                        label: "Landmark",
                        type: "String"
                    },
                    {
                        name: "city",
                        label: "City",
                        type: "String"
                    },
                    {
                        name: "district",
                        label: "District",
                        type: "String"
                    },
                    {
                        name: "state",
                        label: "State",
                        type: "String"
                    },
                    {
                        name: "pincode",
                        label: "Pincode",
                        type: "String"
                    },
                ]
            },
            {
                title: "Permanent Address",
                fields: [
                    {
                        name: "building_name",
                        label: "Building/House Name",
                        type: "String"
                    },
                    {
                        name: "street_name",
                        label: "Street/Road Name",
                        type: "String"
                    },
                    {
                        name: "landmark",
                        label: "Landmark",
                        type: "String"
                    },
                    {
                        name: "city",
                        label: "City",
                        type: "String"
                    },
                    {
                        name: "district",
                        label: "District",
                        type: "String"
                    },
                    {
                        name: "state",
                        label: "State",
                        type: "String"
                    },
                    {
                        name: "pincode",
                        label: "Pincode",
                        type: "String"
                    },
                ]
            }
        ]
    },
    employment: {
        title: "Employment & Loans",
        sections: [
            {
                title: "Income Details",
                fields: [
                    {
                        name: "current_company_name",
                        label: "Current Company Name",
                        type: "String",
                    },
                    {
                        name: "salary_account_bank",
                        label: "Salary Account Bank Name",
                        type: "String",
                    }, 
                    {
                        name: "savings_account_bank",
                        label: "Savings Account Bank Name",
                        type: "String",
                    },
                    {
                        name: "job_tenure",
                        label: "Job tenure in current company",
                        type: "Option",
                        options: [
                            { id: "1", label: "0-12 months" },
                            { id: "2", label: "12-24 months" },
                            { id: "3", label: "24-60 months" },
                            { id: "4", label: "more than 60 months" },
                        ]
                    },
                    {
                        name: "job_experience",
                        label: "Experience",
                        type: "Option",
                        options: [
                            { id: "1", label: "less than 1 year" },
                            { id: "2", label: "1-2 years" },
                            { id: "3", label: "2-3 years" },
                            { id: "4", label: "3-5 years" },
                            { id: "5", label: "more than 5 years" },
                        ]
                    },
                    {
                        name:"monthly_income",
                        label:"Your Monthly Income",
                        type:"Option",
                        options: [
                            { id: "1", label: "less than 12,000" },
                            { id: "2", label: "15,000 - 20,000" },
                            { id: "3", label: "20,000 - 25,000" },
                            { id: "4", label: "25-000 - 30,000" },
                            { id: "5", label: "30,000 - 35,000" },
                            { id: "5", label: "35,000 - 45,000" },
                            { id: "5", label: "above 45,000" },
                        ],
                    },
                    
                ]
            },
            {
                title:"Documents",
                fields:[
                    {
                        name: "have_offer_letter",
                        label: "Do you have job offer letter of current job?",
                        type: "Binary",
                        fields:[
                            {
                                name: "offer_letter",
                                label: "Offer Letter",
                                type: "String",
                            }
                        ]
                    },
                    {
                        name: "have_tan_no",
                        label: "Do you have form-16 or TAN number?",
                        type: "Binary",
                    },
                    {
                        name: "has_salary_slip",
                        label: "Do you have salary slip of last 3 months?",
                        type: "Binary",
                    },
                    {
                        name: "has_bank_statement",
                        label: "Can you provide bank statement of last 6 or 12 months in Net banking formate?",
                        type: "Binary",
                        
                    },
                    {
                        name: "has_current_loan",
                        label: "Do you have any current loan?",
                        type: "Binary",
                    },
                ]
            },
            {
                title:"Current Loans",
                fields:[
                    {
                        name: "total_loan_amount",
                        label: "Total loan amount",
                        type: "Option",
                        options: [
                            { id: "1", label: "less than 50,000" },
                            { id: "2", label: "50,000 - 1 lakh" },
                            { id: "3", label: "1 lakh - 3 lakh" },
                            { id: "4", label: "3 lakh - 5 lakh" },
                            { id: "5", label: "5 lakh - 10 lakh" },
                            { id: "6", label: "10 lakh - 20 lakh" },
                            { id: "7", label: "above 20 lakh" },
                        ],
                    },
                   
                    {
                        name: "loan_start_date",
                        label: "When you took loan",
                        type: "Option",
                        options: [
                            { id: "1", label: "0-12 months before" },
                            { id: "2", label: "12-24 months before" },
                            { id: "3", label: "24-36 months before" },
                            { id: "4", label: "36-48 months before" },
                            { id: "5", label: "48-60 months before" },
                            { id: "6", label: "more than 60 months" },
                        ],
                    },
                    {
                        name: "loan_provider_bank",
                        label: "Name the bank which provides loan to you. ",
                        placeholder: "Bank name which provides loan",
                        type: "String",
                    },
                    {
                        name: "monthly_emi",
                        label: "what is monthly EMI currently you are paying",
                        placeholder: "Monthly EMI",
                        type: "String",
                    },
                ]
            }
        ]
    }
}