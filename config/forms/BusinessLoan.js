import { title } from "process";

export const BusinessLoan = {
    instructions: {
        title: "Instruction",
        // title: "Personal Details",
        sections: [
            {
                title: "Instruction",
                fields: [
                    {
                        name: "instructions",
                        label: "",
                        type: "Text",
                        data: `<h3>Instructions for Filling Out the Loan Application Form</h3>
    
    <ul class="list-disc ml-4 text-sm">
        <li><strong>Read Carefully:</strong> Please go through all the sections of the form before filling it out.</li>
        <li><strong>Use Clear and Correct Information:</strong> Ensure that all details provided are accurate and match your official documents. Any false information may lead to rejection.</li>
        <li><strong>Required Documents:</strong> Keep necessary documents (ID proof, income proof, address proof, and bank statements) ready before starting.</li>
        <li><strong>Use Capital Letters:</strong> If filling out a physical form, write in <strong>clear BLOCK LETTERS</strong> to avoid confusion.</li>
        <li><strong>Mandatory Fields:</strong> Fields marked with <strong>(*) are mandatory</strong> and must be filled in to avoid processing delays.</li>
        <li><strong>Signature & Date:</strong> Ensure that you sign the form at the designated places before submission. Unsigned forms will not be processed.</li>
        <li><strong>Verification & Consent:</strong> By submitting the form, you agree to allow Parv Financial Services to verify your details as required.</li>
        <li><strong>Submission Guidelines:</strong> Submit the form along with required documents <strong>in person or via email</strong> as instructed by the financial service provider.</li>
        <li><strong>Processing Time:</strong> Loan application review and approval may take a few business days. You will be notified via email/SMS.</li>
        <li><strong>For Assistance:</strong> If you have any questions while filling out the form, contact our support team at <a href="mailto:support@parvfinancial.com">support@parvfinancial.com</a>.</li>
    </ul>
    `,
                    }
                ],
            },
        ],
    },
    personal_details: {
        title: "Personal Details",
        sections: [
            {
                title: "Prerequisits",
                fields: [
                    {
                        name: "loan_amount",
                        label: "Loan Amount",
                        type: "String",
                        value: ""
                    },
                    {
                        name: "id_of_connector",
                        label: "ID of Connector",
                        type: "String",
                        disabled: true,
                        value: ""
                    },
                    {
                        name: "name_of_connector",
                        label: "Name of Connector",
                        type: "String",
                        disabled: true,
                        value: ""
                    },
                    {
                        name: "purpose_of_loan",
                        label: "Purpose of Loan",
                        type: "Option",
                        options: [
                            { id: "1", label: "To start a new business" },
                            { id: "2", label: "For the growth of existing business" },
                        ]
                    },
                ],
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
                        name: "email",
                        label: "Email",
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
                title: "Business Income Details",
                fields: [
                    {
                        name: "company_name",
                        label: "Company / firm Name",
                        type: "String",
                    },
                    {
                        name: "company_age",
                        label: "How old your business?",
                        type: "Option",
                        options: [
                            { id: "1", label: "0-1 years" },
                            { id: "2", label: "1-3 years" },
                            { id: "3", label: "3-5 years" },
                            { id: "4", label: "more than 5 years" },
                        ]
                    },
                    {
                        name: "registration_paper",
                        label: "Select registration paper you have for your business?",
                        type: "Option",//multi-select
                        options: [
                            { id: "1", label: "GST registration" },
                            { id: "2", label: "UDYOG AAdhar registration" },
                            { id: "3", label: "Form-3 or trade licence" },
                            { id: "4", label: "any other" },
                            { id: "5", label: "I don't have any registartion" },
                        ]
                    },
                ]
            },
            {
                title: "Current Account's",
                fields: [
                    {
                        name: "have_current_account",
                        label: "Do you have current account?",
                        type: "Binary",
                    },
                    {
                        name: "current_account_bank_name",
                        label: "Bank name in which your current account.",
                        type: "String",
                    },
                    {
                        name: "name_in_current_account",
                        label: "In whose name is the current account?",
                        type: "Option",
                        options: [
                            { id: "1", label: "My business" },
                            { id: "2", label: "Myself" },
                        ]
                    },
                    {
                        name: "current_account_age",
                        label: "How old is your current account?",
                        type: "Option",
                        options: [
                            { id: "1", label: "Less than 1 year" },
                            { id: "2", label: "1-3 years" },
                            { id: "3", label: "3-5 years" },
                            { id: "4", label: "more than years" },
                        ]
                    },
                    {
                        name: "current_account_turnover",
                        label: "What is the turnover of your current account?",
                        type: "Option",
                        options: [
                            { id: "1", label: "Below 10 lakhs" },
                            { id: "2", label: "10-20 lakhs" },
                            { id: "3", label: "20-30 lakhs" },
                            { id: "4", label: "30-50 lakhs" },
                            { id: "5", label: "50-70 lakhs" },
                            { id: "6", label: "70-1 crore" },
                            { id: "7", label: "above 1 crore" },
                        ]
                    },
                ]
            },
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
                title: "Previous Loan History",
                fields: [
                    {
                        name: "loan_provider_bank",
                        label: "Bank name in which which provides you loan?.",
                        type: "String",
                    },
                    {
                        name: "total_loan_amount",
                        label: "Total loan amount",
                        type: "String",
                    },
                    {
                        name: "current_emi",
                        label: "Current EMI",
                        type: "String",
                    },
                    {
                        name: "remaining_amount",
                        label: "Remaining amount",
                        type: "String",
                    },
                ]
            },
            {
                title: "Documents related query",
                fields: [
                    {
                        name: "file_income_tax",
                        label: "Do you file income tax?",
                        type: "Binary",
                    },
                    {
                        name: "have_income_tax_return",
                        label: "Do you have income tax return of last 2 years?",
                        type: "Binary",
                    },
                    {
                        name: "is_family_files_income_tax",
                        label: "Anyone else files income tax in your family?",
                        type: "Binary",
                    },
                    {
                        name: "itr_amount_22_23",
                        label: "Amount of ITR you filled for 2022-23?",
                        type: "String",

                    },
                    {
                        name: "itr_amount_23_24",
                        label: "Amount of ITR you filled for 2023-24?",
                        type: "String",
                    },
                ]
            },
            {
                title: "Property Information",
                fields: [
                    {
                        name: "have_property_for_mortage",
                        label: "Do you have any property which you can give for moratge?",
                        type: "Binary",
                    },
                    {
                        name: "saving_account_turnover",
                        label: "Your property is located in :-",
                        type: "Option",
                        options: [
                            { id: "1", label: "Gram panchayat" },
                            { id: "2", label: "Nagar panchayat" },
                            { id: "3", label: "Nagar Parishad" },
                            { id: "4", label: "Nagar Nigam" },
                        ]
                    },
                    {
                        name: "who_own_property",
                        label: "Who is the owner of property?",
                        type: "Option",
                        options: [
                            { id: "1", label: "Myself" },
                            { id: "2", label: "Father" },
                            { id: "3", label: "Mother" },
                            { id: "4", label: "Spouse" },
                            { id: "5", label: "Grand father" },
                            { id: "6", label: "Grand mother" },
                            { id: "7", label: "Other" },
                        ]
                    },
                    {
                        name: "have_17_kahta_agri_land",
                        label: "Do you have 17 khata agriculture land?",
                        type: "Binary",
                    },
                    {
                        name: "needs_of_documents",
                        label: "We need the following documents of property, select which are available?",
                        type: "Option",//multi select
                        options: [
                            { id: "1", label: "Khatiyan (In case of inherited property)" },
                            { id: "2", label: "Sale deed (If you have purchase property)" },
                            { id: "3", label: "LPC certificate" },
                            { id: "4", label: "Current rashid of property" },
                        ]
                    },
                ]
            },

        ]
    },
    Documents: {
        title: "Documents",
        sections: [
            {
                title: "Persoanl Documents",
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
                        name: "persoanl_pan",
                        label: "Uplaod persoanl PAN image",
                        type: "File",
                    },
                ]
            },
            {
                title: "Business Documents",
                fields: [
                    {
                        name: "comapny_image",
                        label: "Upload company / firm image?",
                        type: "File",
                    },
                    {
                        name: "gst_certificate",
                        label: "Upload GST certificate (if available)",
                        type: "File",
                    },
                    {
                        name: "udyam_registration",
                        label: "Upload UDYAM registration (if available)",
                        type: "File",
                    },
                    {
                        name: "form_3",
                        label: "Upload Form-3 (if available)",
                        type: "File",
                    },
                    {
                        name: "itr_22_23",
                        label: "Upload ITR 2022-23 (if available)",
                        type: "File",
                    },
                    {
                        name: "itr_23_23",
                        label: "Upload ITR 2023-24 (if available)",
                        type: "File",
                    },
                    {
                        name: "bank_statement",
                        label: "Upload bank statement of last 12 months in net banking formate",
                        type: "File",
                    },
                    {
                        name: "shop_front",
                        label: "Upload Shop front picture",
                        type: "File",
                    },
                    {
                        name: "house_electricity",
                        label: "Upload house electricity bill",
                        type: "File",
                    },

                    {
                        name: "other_doc",
                        label: "Upload any other documents",
                        type: "File",
                    },

                ]
            },
        ]
    },
}