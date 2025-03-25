export const GoldLoan = {
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
                        name: "loan_amount",
                        label: "Loan Amount",
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
                title: "Saving account",
                fields: [
                    {
                        name: "saving_account_bank_name",
                        label: "Bank name in which your saving account.",
                        type: "String",
                    },
                    {
                        name: "saving_account_turnover",
                        label: "Turnover of your saving account",
                        type: "Option",
                        options: [
                            { id: "1", label: "Less than 10 lakhs" },
                            { id: "2", label: "10-20 lakhs" },
                            { id: "3", label: "20-50 lakhs" },
                            { id: "4", label: "50-1 crore" },
                            { id: "5", label: "above 1 crore" },
                        ]
                    },
                ]
            },
            {
                title: "Current Loans",
                fields: [
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

    },
    documents: {
        title: "Documents",
        sections: [
            {
                title: "Personal Documents",
                fields: [
                    {
                        name: "aadhar_front",
                        label: "Uplaod aadhar front image",
                        type: "File",
                    },
                    {
                        name: "aadhar_back",
                        label: "Uplaod aadhar back image",
                        type: "File",
                    },
                    {
                        name: "Personal_pan",
                        label: "Uplaod Personal PAN image",
                        type: "File",
                    },
                    {
                        name: "",
                        label: "Uplaod Personal PAN image",
                        type: "File",
                    },
                    {
                        name: "house_electricity",
                        label: "Present address proof (electricity bill)",
                        type: "File",
                    },
                ],
            },
        ],
    },
}