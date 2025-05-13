import { object, string, array, lazy, mixed, date, boolean } from "yup";

const PersonalLoanFieldSchema = object().shape({
  name: string().required("Field name is required"),
  label: string().required("Field label is required"),
  type: string()
    .oneOf(
      ["String", "Boolean", "Date", "Binary", "File", "Option"],
      "Type must be one of: String, Boolean, Date, File"
    )
    .required("Field type is required"),
  value: lazy((value, context) => {
    const type = context.parent.type; // Access the `type` field from the same object

    switch (type) {
      case "String":
        return string().required("Enter a valid value");
      case "Boolean":
        return boolean().required("Enter a valid value");
      case "Option":
        return string().required("Enter a valid value");
      case "Date":
        return date().required("Enter a valid value");
      case "Binary":
        return string().oneOf(["Yes", "No"], "Enter a valid value").required();
      case "File":
        return mixed().required("Enter a valid value");
      case "Check":
        return string().required("Enter a valid value");
      default:
        return mixed().required("Invalid type");
    }
  }),
  fields: array().when("type", {
    is: (type) => ["String", "Boolean"].includes(type),
    then: () =>
      array()
        .notRequired()
        .test(
          "not-exist",
          "Fields property must not exist when type is not Binary",
          (value) => value === undefined || value === null
        ),
    otherwise: () =>
      array()
        .of(lazy(() => PersonalLoanFieldSchema)) // Reference schema for nested fields
        .optional(),
  }),
  disabled: boolean().notRequired(),
});

const PersonalLoanSectionSchema = object().shape({
  title: string().required("Section title is required"),
  fields: array().of(PersonalLoanFieldSchema).required("Fields are required"),
});

const PersonalLoanStepSchema = object().shape({
  title: string().required("Title is required"),
  sections: array()
    .of(PersonalLoanSectionSchema)
    .required("Sections are required"),
});

export const PersonalLoanSchema = object()
  .shape({
    // info: PersonalLoanStepSchema,
    personal_details: PersonalLoanStepSchema,
    employment: PersonalLoanStepSchema,
    documents: PersonalLoanStepSchema,
  })
  .required();

export const PersonalLoan = {
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
            data: `
            <h3>Instructions for Filling Out the Loan Application Form</h3>
>>>>>>> v1.5
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
          },
        ],
      },
    ],
  },
  // info: {
  //   title: "Prerequisits",
  //   sections: [
  //     {
  //       title: "Prerequisits",
  //       fields: [
  //         {
  //           name: "loan_amount",
  //           label: "Loan Amount",
  //           type: "String",
  //           value: ""
  //         },
  //         {
  //           name: "id_of_connector",
  //           label: "ID of Connector",
  //           type: "String",
  //           disabled: true,
  //           value: ""
  //         },
  //         {
  //           name: "name_of_connector",
  //           label: "Name of Connector",
  //           type: "String",
  //           disabled: true,
  //           value: ""
  //         },
  //       ],
  //     },
  //   ],
  // },
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
            value: "",
          },
          {
            name: "id_of_connector",
            label: "ID of Connector",
            type: "String",
            disabled: true,
            value: "",
          },
          {
            name: "name_of_connector",
            label: "Name of Connector",
            type: "String",
            disabled: true,
            value: "",
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
              { id: "7", label: "For other Personal reason" },
            ],
            value: "To purchase property",
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
            value: "",
          },
          {
            name: "fathers_name",
            label: "Father's Name",
            type: "String",
            value: "",
          },
          {
            name: "mothers_name",
            label: "Mother's Name",
            type: "String",
            value: "",
          },
          {
            name: "phone_no",
            label: "Phone Number",
            type: "String",
            value: "",
          },
          {
            name: "alt_phone_no",
            label: "Alternate Phone Number",
            type: "String",
            value: "",
          },
          {
            name: "pan",
            label: "PAN Number",
            type: "String",
            value: "",
          },
          {
            name: "dob",
            label: "Date of Birth",
            type: "Date",
            value: "",
            onChange: (e) => {
              let age =
                new Date().getFullYear() -
                new Date(e.nativeEvent.srcElement.value).getFullYear();
              if (age < 21) {
                alert("Applicant's age must be more than 21 years");
                return false;
              }
              return true;
            },
          },
          {
            name: "marital_status",
            label: "Marital Status",
            type: "Binary",
            options: ["Married", "Unmarried"],
            value: "Unmarried",
            fields: [
              {
                name: "spouse_name",
                label: "Enter your spouse name",
                type: "String",
              },
            ],
          },
        ],
      },
      {
        title: "Permanent Address (Permanent address should be addressed as mentioned on your aadhar card)",
        fields: [
          {
            name: "permanent_building_name",
            label: "Building/House Name",
            type: "String",
            value: "",
          },
          {
            name: "permanent_street_name",
            label: "Street/Road Name",
            type: "String",
            value: "",
          },
          {
            name: "permanent_landmark",
            label: "Landmark",
            type: "String",
            value: "",
          },
          {
            name: "permanent_city",
            label: "City",
            type: "String",
            value: "",
          },
          {
            name: "permanent_district",
            label: "District",
            type: "String",
            value: "",
          },
          {
            name: "permanent_state",
            label: "State",
            type: "String",
            value: "",
          },
          {
            name: "permanent_pincode",
            label: "Pincode",
            type: "String",
            value: "",
          },
          {
            name: "same_as_permanent_address",
            label: "Same as Permanent Address",
            type: "Check",
            value: false,
            onChange: (isChecked, state) => {
              state.personal_details.sections[2].fields[7].value = isChecked;
              if (isChecked) {
                state.personal_details.sections[3].fields.forEach(
                  (_, index) => {
                    state.personal_details.sections[3].fields[index].value =
                      state.personal_details.sections[2].fields[index].value;
                  }
                );
              } else {
                state.personal_details.sections[3].fields.forEach(
                  (_, index) => {
                    state.personal_details.sections[3].fields[index].value = "";
                  }
                );
              }
              return { ...state };
            },
          },
        ],
      },
      {
        title: "Present Address (Fill the address where you are staying currently)",
        fields: [
          {
            name: "present_building_name",
            label: "Building/House Name",
            type: "String",
            value: "",
          },
          {
            name: "present_street_name",
            label: "Street/Road Name",
            type: "String",
            value: "",
          },
          {
            name: "present_landmark",
            label: "Landmark",
            type: "String",
            value: "",
          },
          {
            name: "present_city",
            label: "City",
            type: "String",
            value: "",
          },
          {
            name: "present_district",
            label: "District",
            type: "String",
            value: "",
          },
          {
            name: "present_state",
            label: "State",
            type: "String",
            value: "",
          },
          {
            name: "present_pincode",
            label: "Pincode",
            type: "String",
            value: "",
          },
          
        ],
      },
      
    ],
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
            value: "",
          },
          {
            name: "salary_account_bank",
            label: "Salary Account Bank Name",
            type: "Option",
            options: [
              { id: "1", label: "PNB" },
              { id: "2", label: "SBI" },
              { id: "3", label: "HDFC" },
            ],
          },
          {
            name: "savings_account_bank",
            label: "Savings Account Bank Name",
            type: "Option",
            options: [
              { id: "1", label: "PNB" },
              { id: "2", label: "SBI" },
              { id: "3", label: "HDFC" },
            ],
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
            ],
            value: "0-12 months",
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
            ],
            value: "less than 1 year",
          },
          {
            name: "monthly_income",
            label: "Your Monthly Income",
            type: "Option",
            options: [
              { id: "1", label: "less than 12,000" },
              { id: "2", label: "15,000 - 20,000" },
              { id: "3", label: "20,000 - 25,000" },
              { id: "4", label: "25-000 - 30,000" },
              { id: "5", label: "30,000 - 35,000" },
              { id: "5", label: "35,000 - 45,000" },
              { id: "5", label: "above 45,000" },
            ],
            value: "less than 12,000",
          },
        ],
      },
      {
        title: "Office Address",
        fields: [
          {
            name: "office_building_name",
            label: "Building/House Name",
            type: "String",
            value: "",
          },
          {
            name: "office_street_name",
            label: "Street/Road Name",
            type: "String",
            value: "",
          },
          {
            name: "office_landmark",
            label: "Landmark",
            type: "String",
            value: "",
          },
          {
            name: "office_city",
            label: "City",
            type: "String",
            value: "",
          },
          {
            name: "office_district",
            label: "District",
            type: "String",
            value: "",
          },
          {
            name: "office_state",
            label: "State",
            type: "String",
            value: "",
          },
          {
            name: "office_pincode",
            label: "Pincode",
            type: "String",
            value: "",
          },
        ],
      },
      {
        title: "Documents related query",
        fields: [
          {
            name: "have_offer_letter",
            label: "Do you have job offer letter of current job?",
            type: "Binary",
            fields: [
              {
                name: "offer_letter",
                label: "Upload your offer letter",
                type: "File",
              },
            ],
          },
          {
            name: "have_tan_no",
            label: "Do you have form-16 or TAN number?",
            type: "Binary",
            fields: [
              {
                name: "tan_no",
                label: "Enter your TAN Number",
                type: "String",
              },
            ],
          },
          // {
          //   name: "has_salary_slip",
          //   label: "Do you have salary slip of last 3 months?",
          //   type: "Binary",
          //   fields: [
          //     {
          //       name: "salary_slip_1",
          //       label: "Upload your salary slip 1",
          //       type: "File",
          //     },
          //     {
          //       name: "salary_slip_2",
          //       label: "Upload your salary slip 2",
          //       type: "File",
          //     },
          //     {
          //       name: "salary_slip_3",
          //       label: "Upload your salary slip 3",
          //       type: "File",
          //     },
          //   ],
          // },
          {
            name: "has_bank_statement",
            label:
              "Can you provide bank statement of last 6 or 12 months in Net banking formate?",
            type: "Binary",
            fields: [
              {
                name: "bank_statement",
                label: "Upload your bank statement",
                type: "File",
              },
            ],
          },
          {
            name: "has_current_loan",
            label: "Do you have any current loan?",
            type: "Binary",
            fields: [
              {
                name: "existing_loans",
                label: "Enter the number of your existing loans",
                type: "String",
              },
            ],
          },
        ],
      },
      {
        title: "Past Loans",
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
            value: "less than 50,000",
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
            value: "0-12 months before",
          },
          {
            name: "loan_provider_bank",
            label: "Name the bank which provides loan to you. ",
            placeholder: "Bank name which provides loan",
            type: "String",
            value: "",
          },
          {
            name: "monthly_emi",
            label: "what is monthly EMI currently you are paying",
            placeholder: "Monthly EMI",
            type: "String",
            value: "",
          },
        ],
      },
    ],
  },
  documents: {
    title: "Documents",
    sections: [
      {
        title: "Personal Documents",
        fields: [
          {
            name: "applicant_selfie",
            label: "Upload Applicant Selfie",
            type: "File",
          },
          {
            name: "aadhar_front",
            label: "Upload aadhar front image",
            type: "File",
          },
          {
            name: "aadhar_back",
            label: "Upload aadhar back image",
            type: "File",
          },
          {
            name: "Personal_pan",
            label: "Upload Personal PAN image",
            type: "File",
          },
        ],
      },
      {
        title: "Employment Documents",
        fields: [
          {
            name: "salary_slip_1",
            label: "Salary slip-1 ",
            type: "File",
          },
          {
            name: "salary_slip_2",
            label: "Salary slip-2",
            type: "File",
          },
          {
            name: "salary_slip_3",
            label: "Salary slip-3",
            type: "File",
          },
          {
            name: "other_doc",
            label: "Upload any other documents",
            type: "File",
          },
        ],
      },
    ],
  },
};

export const PersonalLoanInitialState = {
  // From Personal Details -> Prerequisits
  loan_amount: "",
  id_of_connector: "", // Type String
  name_of_connector: "", // Type String
  purpose_of_loan: "", // Type Option

  // From Personal Details -> Personal Information
  name: "", // Type String
  fathers_name: "", // Type String
  mothers_name: "", // Type String
  phone_no: "", // Type String
  alt_phone_no: "", // Type String
  pan: "", // Type String
  dob: "", // Type Date
  marital_status: false, // Type Binary -> Initialized to false
  spouse_name: "", // Nested field (Type String) under marital_status

  // From Personal Details -> Present Address (using new names)
  present_building_name: "", // Type String
  present_street_name: "", // Type String
  present_landmark: "", // Type String
  present_city: "", // Type String
  present_district: "", // Type String
  present_state: "", // Type String
  present_pincode: "", // Type String

  // From Personal Details -> Permanent Address (using new names)
  permanent_building_name: "", // Type String
  permanent_street_name: "", // Type String
  permanent_landmark: "", // Type String
  permanent_city: "", // Type String
  permanent_district: "", // Type String
  permanent_state: "", // Type String
  permanent_pincode: "", // Type String

  // From Employment -> Income Details
  current_company_name: "", // Type String
  salary_account_bank: "", // Type Option
  savings_account_bank: "", // Type Option
  job_tenure: "", // Type Option
  job_experience: "", // Type Option
  monthly_income: "", // Type Option

  // From Employment -> Office Address
  office_building_name: "", // Type String
  office_street_name: "", // Type String
  office_landmark: "", // Type String
  office_city: "", // Type String
  office_district: "", // Type String
  office_state: "", // Type String
  office_pincode: "", // Type String

  // From Employment -> Documents related query
  have_offer_letter: false, // Type Binary -> Initialized to false
  offer_letter: "", // Nested field (Type File) under have_offer_letter
  have_tan_no: false, // Type Binary -> Initialized to false
  tan_no: "", // Nested field (Type String) under have_tan_no
  has_bank_statement: false, // Type Binary -> Initialized to false
  bank_statement: "", // Nested field (Type File) under has_bank_statement
  has_current_loan: false, // Type Binary -> Initialized to false
  existing_loans: "", // Nested field (Type String) under has_current_loan

  // From Employment -> Past Loans
  total_loan_amount: "", // Type Option
  loan_start_date: "", // Type Option
  loan_provider_bank: "", // Type String
  monthly_emi: "", // Type String

  // From Documents -> Personal Documents
  applicant_selfie: "", // Type File
  aadhar_front: "", // Type File
  aadhar_back: "", // Type File
  personal_pan: "", // Type File (Note: Case inconsistency with 'pan')

  // From Documents -> Employment Documents
  salary_slip_1: "", // Type File
  salary_slip_2: "", // Type File
  salary_slip_3: "", // Type File
  other_doc: "", // Type File
};
