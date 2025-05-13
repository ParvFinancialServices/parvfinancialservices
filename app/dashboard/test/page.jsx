'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = ["Personal Info", "Address", "Employment", "Documents"];

export default function GoldLoanForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    fathers_name: "",
    mothers_name: "",
    phone_no: "",
    alt_phone_no: "",
    pan: "",
    dob: "",
    present_address: {
      building_name: "",
      street_name: "",
      city: "",
    },
    saving_account_bank_name: "",
    saving_account_turnover: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.present_address) {
      setFormData((prev) => ({
        ...prev,
        present_address: { ...prev.present_address, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));
  const handleSubmit = () => {
    console.log("Submitted:", formData);
    // Add server action here
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Stepper */}
      <div className="flex justify-between mb-6">
        {steps.map((label, index) => (
          <div key={index} className="flex-1 text-center">
            <div className={cn("py-2 px-4 rounded-full", {
              "bg-primary text-white": index === step,
              "bg-muted": index !== step,
            })}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <form className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {step === 0 && (
          <>
            <div>
              <Label>Name</Label>
              <Input name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label>Father's Name</Label>
              <Input name="fathers_name" value={formData.fathers_name} onChange={handleChange} />
            </div>
            <div>
              <Label>Mother's Name</Label>
              <Input name="mothers_name" value={formData.mothers_name} onChange={handleChange} />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div>
              <Label>Building Name</Label>
              <Input name="building_name" value={formData.present_address.building_name} onChange={handleChange} />
            </div>
            <div>
              <Label>Street</Label>
              <Input name="street_name" value={formData.present_address.street_name} onChange={handleChange} />
            </div>
            <div>
              <Label>City</Label>
              <Input name="city" value={formData.present_address.city} onChange={handleChange} />
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <Label>Bank Name</Label>
              <Input name="saving_account_bank_name" value={formData.saving_account_bank_name} onChange={handleChange} />
            </div>
            <div>
              <Label>Account Turnover</Label>
              <Input name="saving_account_turnover" value={formData.saving_account_turnover} onChange={handleChange} />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <Label>Upload Aadhar Front</Label>
              <Input type="file" name="aadhar_front" />
            </div>
            <div>
              <Label>Upload PAN</Label>
              <Input type="file" name="pan_doc" />
            </div>
          </>
        )}
      </form>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={handleBack} disabled={step === 0}>Back</Button>
        {step < steps.length - 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </div>
    </div>
  );
}
