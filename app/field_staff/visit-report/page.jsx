"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { submitDailyVisitReport } from "@/api/file_action";

export default function DailyVisitForm() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    customerName: "",
    contactNumber: "",
    loanType: "",
    visitPurpose: "",
    outcome: "",
    followUpDate: "",
    remarks: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!session?.user?.token) {
      setMessage("Authentication required!");
      setLoading(false);
      return;
    }

    const result = await submitDailyVisitReport(session.user.token, formData);

    if (result.success) {
      setMessage("Report submitted successfully!");
      setFormData({
        customerName: "",
        contactNumber: "",
        loanType: "",
        visitPurpose: "",
        outcome: "",
        followUpDate: "",
        remarks: "",
      });
    } else {
      setMessage(`Error: ${result.error}`);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Daily Visit Report</h2>
      {message && <p className="text-sm text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Customer Name" required />
        <Input name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
        <Input name="loanType" value={formData.loanType} onChange={handleChange} placeholder="Loan Type (Personal, Home, etc.)" required />
        <Textarea name="visitPurpose" value={formData.visitPurpose} onChange={handleChange} placeholder="Purpose of Visit" required />
        <Textarea name="outcome" value={formData.outcome} onChange={handleChange} placeholder="Outcome" required />
        <Input type="date" name="followUpDate" value={formData.followUpDate} onChange={handleChange} required />
        <Textarea name="remarks" value={formData.remarks} onChange={handleChange} placeholder="Additional Remarks" />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Submitting..." : "Submit Report"}
        </Button>
      </form>
    </div>
  );
}
