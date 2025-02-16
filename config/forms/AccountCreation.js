import { array, boolean, date, lazy, mixed, object, string } from "yup";

const AccountCreationFieldSchema = object().shape({
  name: string().required("Field name is required"),
  label: string().required("Field label is required"),
  type: string()
    .oneOf(
      ["String", "Boolean", "Date", "Binary", "File", "Option"],
      "Type must be one of: String, Boolean, Date, File"
    )
    .required("Field type is required"),
  value: lazy((value, context) => {
    const type = context.parent.type;
    const isRequired = context.parent.isRequired;
    // Access the `type` field from the same object

    switch (type) {
      case "String":
        return isRequired ? string().required("Enter a valid value") : string();
      case "Boolean":
        return isRequired
          ? boolean().required("Enter a valid value")
          : boolean();
      case "Option":
        return isRequired ? string().required("Enter a valid value") : string();
      case "Date":
        return isRequired ? date().required("Enter a valid value") : date();
      case "Binary":
        return isRequired
          ? string().oneOf(["Yes", "No"], "Enter a valid value").required()
          : string();
      case "File":
        return isRequired ? mixed().required("Enter a valid value") : mixed();
      default:
        returnisRequired ? mixed().required("Invalid type") : mixed();
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
        .of(lazy(() => AccountCreationFieldSchema)) // Reference schema for nested fields
        .optional(),
  }),
  disabled: boolean().notRequired(),
});

const AccountCreationSectionSchema = object().shape({
  title: string().required("Section title is required"),
  fields: array()
    .of(AccountCreationFieldSchema)
    .required("Fields are required"),
});

const AccountCreationStepSchema = object().shape({
  title: string().required("Title is required"),
  sections: array()
    .of(AccountCreationSectionSchema)
    .required("Sections are required"),
});

export const AccountCreationSchema = object()
  .shape({
    info: AccountCreationStepSchema,
  })
  .required();

export const AdminAccountCreation = {
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
            isRequired: true,
          },
          {
            name: "guardian_name",
            label: "Guardian's Name",
            type: "String",
            isRequired: true,
          },
          {
            name: "dob",
            label: "Date of Birth",
            type: "Date",
            isRequired: true,
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
            isRequired: true,
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
            isRequired: true,
          },
          {
            name: "phone_no",
            label: "Phone Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "alt_phone_no",
            label: "Alternate Phone Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "email",
            label: "Email",
            type: "String",
            isRequired: true,
          },
          {
            name: "aadhar_no",
            label: "Aadhar Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "pan_no",
            label: "PAN Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "present_address",
            label: "Present Address",
            type: "String",
            isRequired: true,
          },
          {
            name: "permanent_address",
            label: "Permanent Address",
            type: "String",
            isRequired: true,
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
            isRequired: true,
          },
          {
            name: "date_of_joining",
            label: "Date of Joining",
            type: "Date",
            isRequired: true,
          },
          {
            name: "work_location",
            label: "Work Location",
            type: "String",
            isRequired: true,
          },
          {
            name: "bank_account_no",
            label: "Bank Account Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "bank_branch",
            label: "Bank Branch Name",
            type: "String",
            isRequired: true,
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
            isRequired: true,
          },
          {
            name: "pan",
            label: "PAN",
            type: "File",
            isRequired: true,
          },
          {
            name: "photo",
            label: "Photo",
            type: "File",
            isRequired: true,
          },
          {
            name: "bank_doc",
            label: "Passbook photo/Cancelled Cheque",
            type: "File",
            isRequired: true,
          },
          {
            name: "education_certificate",
            label: "Education Certificate",
            type: "File",
            isRequired: true,
          },
        ],
      },
    ],
  },
};

export const DSAAccountCreation = {
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
            isRequired: true,
          },
          {
            name: "guardian_name",
            label: "Guardian's Name",
            type: "String",
            isRequired: true,
          },
          {
            name: "dob",
            label: "Date of Birth",
            type: "Date",
            isRequired: true,
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
            isRequired: true,
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
            isRequired: true,
          },
          {
            name: "phone_no",
            label: "Phone Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "alt_phone_no",
            label: "Alternate Phone Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "email",
            label: "Email",
            type: "String",
            isRequired: true,
          },
          {
            name: "aadhar_no",
            label: "Aadhar Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "pan_no",
            label: "PAN Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "present_address",
            label: "Present Address",
            type: "String",
            isRequired: true,
          },
          {
            name: "permanent_address",
            label: "Permanent Address",
            type: "String",
            isRequired: true,
          },
        ],
      },
      {
        title: "Job Specific",
        fields: [
          {
            name: "date_of_joining",
            label: "Date of Joining",
            type: "Date",
            isRequired: true,
          },
          {
            name: "work_location",
            label: "Work Location",
            type: "String",
            isRequired: true,
          },
          {
            name: "bank_account_no",
            label: "Bank Account Number",
            type: "String",
            isRequired: true,
          },
          {
            name: "bank_branch",
            label: "Bank Branch Name",
            type: "String",
            isRequired: true,
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
            isRequired: true,
          },
          {
            name: "pan",
            label: "PAN",
            type: "File",
            isRequired: true,
          },
          {
            name: "photo",
            label: "Photo",
            type: "File",
            isRequired: true,
          },
          {
            name: "bank_doc",
            label: "Passbook photo/Cancelled Cheque",
            type: "File",
            isRequired: true,
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
