export const AccountCreation = {
  info: {
    title: "Create New Account",
    sections: [
      {
        title: "Basic Info",
        fields: [
          {
            name: "full_name",
            label: "Full Name",
            type: "String",
          },
          {
            name: "guardian_name",
            label: "Guardian's Name",
            type: "String",
          },
          {
            name: "dob",
            label: "Date of Birth",
            type: "Date",
          },
          {
            name: "gender",
            label: "Gender",
            type: "Option",
            options: [
              { id: "1", label: "Male" },
              { id: "2", label: "Female" },
              { id: "3", label: "Others" },
            ],
            value: "Male",
          },
          {
            name: "marital_status",
            label: "Marital Status",
            type: "Option",
            options: [
              { id: "1", label: "Married" },
              { id: "2", label: "Unmarried" },
            ],
            value: "Unmarried",
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
            name: "aadhar_no",
            label: "Aadhar Number",
            type: "String",
          },
          {
            name: "pan_no",
            label: "PAN Number",
            type: "String",
          },
          {
            name: "present_address",
            label: "Present Address",
            type: "String",
          },
          {
            name: "permanent_address",
            label: "Permanent Address",
            type: "String",
          },
        ],
      },
      {
        title: "Job Specific",
        fields: [
          {
            name: "designation",
            label: "Designation",
            type: "Option",
            options: [
              { id: "1", label: "RM" },
              { id: "2", label: "Telecaller" },
              { id: "3", label: "Field Staff" },
            ],
            value: "Telecaller",
          },
          {
            name: "date_of_joining",
            label: "Date of Joining",
            type: "Date",
          },
          {
            name: "work_location",
            label: "Work Location",
            type: "String",
          },
          {
            name: "bank_account_no",
            label: "Bank Account Number",
            type: "String",
          },
          {
            name: "bank_branch",
            label: "Bank Branch Name",
            type: "String",
          },
        ],
      },
      {
        title: "Documents",
        fields: [
          {
            name: "aadhar",
            label: "Aadhar",
            type: "File",
          },
          {
            name: "pan",
            label: "PAN",
            type: "File",
          },
          {
            name: "photo",
            label: "Photo",
            type: "File",
          },
          {
            name: "bank_doc",
            label: "Passbook photo/Cancelled Cheque",
            type: "File",
          },
          {
            name: "education_certificate",
            label: "Education Certificate",
            type: "File",
          },
        ],
      },
    ],
  },
};
