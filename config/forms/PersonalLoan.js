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
        ],
      },
      {
        title: "Referer",
        fields: [
          {
            name: "name_of_referer",
            label: "Name of referer",
            type: "String",
            value: ""
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
            value: ""
          },
          {
            name: "fathers_name",
            label: "Father's Name",
            type: "String",
            value: ""
          },
          {
            name: "mothers_name",
            label: "Mother's Name",
            type: "String",
            value: ""
          },
          {
            name: "phone_no",
            label: "Phone Number",
            type: "String",
            value: ""
          },
          {
            name: "alt_phone_no",
            label: "Alternate Phone Number",
            type: "String",
            value: ""
          },
          {
            name: "pan",
            label: "PAN Number",
            type: "String",
            value: ""
          },
          {
            name: "dob",
            label: "Date of Birth",
            type: "Date",
            value: ""
          },
        ],
      },
      {
        title: "Present Address",
        fields: [
          {
            name: "building_name",
            label: "Building/House Name",
            type: "String",
            value: ""
          },
          {
            name: "street_name",
            label: "Street/Road Name",
            type: "String",
            value: ""
          },
          {
            name: "landmark",
            label: "Landmark",
            type: "String",
            value: ""
          },
          {
            name: "city",
            label: "City",
            type: "String",
            value: ""
          },
          {
            name: "district",
            label: "District",
            type: "String",
            value: ""
          },
          {
            name: "state",
            label: "State",
            type: "String",
            value: ""
          },
          {
            name: "pincode",
            label: "Pincode",
            type: "String",
            value: ""
          },
        ],
      },
      {
        title: "Permanent Address",
        fields: [
          {
            name: "building_name",
            label: "Building/House Name",
            type: "String",
            value: ""
          },
          {
            name: "street_name",
            label: "Street/Road Name",
            type: "String",
            value: ""
          },
          {
            name: "landmark",
            label: "Landmark",
            type: "String",
            value: ""
          },
          {
            name: "city",
            label: "City",
            type: "String",
            value: ""
          },
          {
            name: "district",
            label: "District",
            type: "String",
            value: ""
          },
          {
            name: "state",
            label: "State",
            type: "String",
            value: ""
          },
          {
            name: "pincode",
            label: "Pincode",
            type: "String",
            value: ""
          },
        ],
      },
    ],
  },
  employment: {
    title: "Employment & Loans",
    sections: [
      // {
      //   title: "Prerequisits",
      //   fields: [
      //     {
      //       name: "loan_amount",
      //       label: "Loan Amount",
      //       type: "String",
      //       value: ""
      //     },
      //     {
      //       name: "id_of_connector",
      //       label: "ID of Connector",
      //       type: "String",
      //       disabled: true,
      //       value: ""
      //     },
      //     {
      //       name: "name_of_connector",
      //       label: "Name of Connector",
      //       type: "String",
      //       disabled: true,
      //       value: ""
      //     },
      //   ],
      // },
      {
        title: "Income Details",
        fields: [
          {
            name: "current_company_name",
            label: "Current Company Name",
            type: "String",
            value: ""
          },
          {
            name: "salary_account_bank",
            label: "Salary Account Bank Name",
            type: "String",
            value: ""
          },
          {
            name: "savings_account_bank",
            label: "Savings Account Bank Name",
            type: "String",
            value: ""
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
            value: ""
          },
          {
            name: "office_street_name",
            label: "Street/Road Name",
            type: "String",
            value: ""
          },
          {
            name: "office_landmark",
            label: "Landmark",
            type: "String",
            value: ""
          },
          {
            name: "office_city",
            label: "City",
            type: "String",
            value: ""
          },
          {
            name: "office_district",
            label: "District",
            type: "String",
            value: ""
          },
          {
            name: "office_state",
            label: "State",
            type: "String",
            value: ""
          },
          {
            name: "office_pincode",
            label: "Pincode",
            type: "String",
            value: ""
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
          {
            name: "has_salary_slip",
            label: "Do you have salary slip of last 3 months?",
            type: "Binary",
            fields: [
              {
                name: "salary_slip",
                label: "Upload your salary slip",
                type: "File",
              },
            ],
          },
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
                name: "current loan",
                label: "Enter current loan number(s)",
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
            value: ""
          },
          {
            name: "monthly_emi",
            label: "what is monthly EMI currently you are paying",
            placeholder: "Monthly EMI",
            type: "String",
            value: ""
          },
        ],
      },
      {
        title: "Current Loans",
        fields: [
          {
            name: "expected_loan_amount",
            label: "Expected loan amount",
            type: "String",
            value: ""
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
