export const loanPurpose = [
    {
        name: "refferal_person",
        label: "Name of refferal person",
        placeholder: "Referral persoan's name",
        componentType: "input",
        type: "text",
    },
    {
        label: "Purpose of laon",
        name: "loan_purpose",
        componentType: "select",
        options: [
            { id: "1", label: "To start a new business" },
            { id: "2", label: "For the growth of existing businness" },
        ],
    },
]
export const PersoanlInformation = [
    {
        name: "name",
        label: "Name",
        placeholder: "Enter your name",
        componentType: "input",
        type: "text",
    },
    {
        name: "father_name",
        label: "Father's name",
        placeholder: "Enter your father's name",
        componentType: "input",
        type: "text",
    },
    {
        name: "mother_name",
        label: "Mother's name",
        placeholder: "Enter your mother's name",
        componentType: "input",
        type: "text",
    },
    {
        name: "phone",
        label: "Phone number",
        placeholder: "Enter your phone number",
        componentType: "input",
        type: "text",
    },
    {
        name: "alternate_phone",
        label: "Alternamte phone number",
        placeholder: "Enter your another phone number",
        componentType: "input",
        type: "text",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email address",
        componentType: "input",
        type: "email",
    },
    {
        name: "pan_card",
        label: "PAN Card number",
        placeholder: "Enter your PAN Card number",
        componentType: "input",
        type: "text",
    },
    {
        name: "birth_date",
        label: "Date of Birth",
        placeholder: "Date of birth",
        componentType: "input",
        type: "date",
    },
]
export const presentAddress = [

    {
        name: "present_house_name",
        label: "Building / House name",
        placeholder: "Building / House name",
        componentType: "input",
        type: "text",
    },
    {
        name: "present_street",
        label: "Street / Road name",
        placeholder: "Street / Road name",
        componentType: "input",
        type: "text",
    },
    {
        name: "present_landmark",
        label: "Landmark",
        placeholder: "Enter your nearest landmark",
        componentType: "input",
        type: "text",
    },
    {
        name: "present_town",
        label: "Town ",
        placeholder: "Town",
        componentType: "input",
        type: "text",
    },
    {
        name: "present_district",
        label: "District",
        placeholder: "District",
        componentType: "input",
        type: "text",
    },
    {
        name: "present_state",
        label: "State",
        placeholder: "State",
        componentType: "input",
        type: "text",
    },
    {
        name: "present_pincode",
        label: "pincode",
        placeholder: "pincode",
        componentType: "input",
        type: "text",
    },
]

export const permanentAddress = [
    {
        name: "permanent_house_name",
        label: "Building / House name",
        placeholder: "Building / House name",
        componentType: "input",
        type: "text",
    },
    {
        name: "permanent_street",
        label: "Street / Road name",
        placeholder: "Street / Road name",
        componentType: "input",
        type: "text",
    },
    {
        name: "permanent_landmark",
        label: "Landmark",
        placeholder: "Enter your nearest landmark",
        componentType: "input",
        type: "text",
    },
    {
        name: "permanent_town",
        label: "Town ",
        placeholder: "Town",
        componentType: "input",
        type: "text",
    },
    {
        name: "permanent_district",
        label: "District",
        placeholder: "District",
        componentType: "input",
        type: "text",
    },
    {
        name: "permanent_state",
        label: "State",
        placeholder: "State",
        componentType: "input",
        type: "text",
    },
    {
        name: "permanent_pincode",
        label: "pincode",
        placeholder: "pincode",
        componentType: "input",
        type: "text",
    },
]
// page2 data
export const incomeDetail = [
    {
        name: "comapny_name",
        label: "Company / firm name",
        placeholder: "Company / firm name",
        componentType: "input",
        type: "text",
    },
    {
        label: "How old your business?",
        name: "business_age",
        componentType: "select",
        options: [
            { id: "1", label: "0-1 years" },
            { id: "2", label: "1-3 years" },
            { id: "3", label: "3-5 years" },
            { id: "4", label: "more than 5 years" },
        ],
    },
    {
        label: "Select the registration paper you have for your business",
        name: "registartion_paper",
        componentType: "checkbox",
        options: [
            { id: "1", label: "GST registration" },
            { id: "2", label: "UDYOG AADHAR registration" },
            { id: "3", label: "FORM-3 or Trade licence" },
            { id: "4", label: "Any others" },
            { id: "5", label: "I don't have any registration" },
        ],
    },
    {
        label: "Your monthly income",
        name: "job_experience",
        componentType: "select",
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
    {
        name: "salary_account_bank",
        label: "Your salary account in which bank",
        placeholder: "Your salary account in which bank",
        componentType: "input",
        type: "text",
    },
    {
        name: "saving_account_bank",
        label: "Your saving account in which bank",
        placeholder: "Your saving account in which bank",
        componentType: "input",
        type: "text",
    },
]

export const radioQuestions = [
    {
        name: "isOffer_letter",
        label: "Do you have job offer letter of current job?",
        placeholder: "Do you have job offer letter of current job?",
        componentType: "radio",
        type: "radio",
        options: [
            {
                id: 1,
                value: "yes",
                label: "YES"
            },
            {
                id: 2,
                value: "no",
                label: "NO",
            },
        ]
    },
    {
        name: "isForm_16",
        label: "Do you have form-16 or TAN number?",
        placeholder: "Do you have form-16 or TAN number?",
        componentType: "radio",
        type: "radio",
        options: [
            {
                id: 1,
                value: "yes",
                label: "YES"
            },
            {
                id: 2,
                value: "no",
                label: "NO",
            },
        ]
    },
    {
        name: "isSalary_slip",
        label: "Do you have salary slip of last 3 months?",
        placeholder: "Do you have salary slip of last 3 months?",
        componentType: "radio",
        type: "radio",
        options: [
            {
                id: 1,
                value: "yes",
                label: "YES"
            },
            {
                id: 2,
                value: "no",
                label: "NO",
            },
            {
                id: 3,
                value: "maybe",
                label: "Maybe",
            },
        ]
    },
    {
        name: "isBank_statement",
        label: "Can you provide bank statement of last 6 or 12 months in Net banking formate?",
        placeholder: "Bank statement",
        componentType: "radio",
        type: "radio",
        options: [
            {
                id: 1,
                value: "yes",
                label: "YES"
            },
            {
                id: 2,
                value: "no",
                label: "NO",
            },
        ]
    },
    {
        name: "isCurrent_loan",
        label: "Do you have any current loan?",
        placeholder: "Do you have any current loan?",
        componentType: "radio",
        type: "radio",
        options: [
            {
                id: 1,
                value: "yes",
                label: "YES"
            },
            {
                id: 2,
                value: "no",
                label: "NO",
            },
        ]
    },
]

export const currentLoan = [
    {
        label: "Total loan amount",
        name: "loan_amount",
        componentType: "select",
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
        name: "loan_provider_bank",
        label: "Name the bank which provides loan to you. ",
        placeholder: "Bank name which provides loan",
        componentType: "input",
        type: "text",
    },
    {
        label: "When you took loan",
        name: "when_took_loan",
        componentType: "select",
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
        name: "monthly_emi",
        label: "what is monthly EMI currently you are paying",
        placeholder: "Monthly EMI",
        componentType: "input",
        type: "text",
    },
]