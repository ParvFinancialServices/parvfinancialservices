"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUserState } from "../../store";
import { submitDailyVisitReport } from "@/api/file_action";

export default function DailyVisitReport() {
    const userState = useUserState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Form State
    const [formData, setFormData] = useState({
        customerName: "",
        contactNumber: "",
        loanType: "",
        visitPurpose: "",
        outcome: "",
        followUpDate: "",
        remarks: "",
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const token = await userState.user.getIdToken();

            const result = await submitDailyVisitReport(token, formData);

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
        } catch (error) {
            setMessage("Failed to submit report.");
            console.error("Submission error:", error);
        }

        setLoading(false);
    };

    return (
        <div className="p-6">
            <section className="max-w-5xl w-full mx-auto bg-white p-6 rounded-2xl pt-10 border">
                <h2 className="text-xl font-semibold mb-4">Daily Visit Report</h2>

                {message && <p className={`text-sm ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Input name="customerName" value={formData.customerName} onChange={handleChange} placeholder="Customer Name" required />
                        <Input name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
                        <Input name="loanType" value={formData.loanType} onChange={handleChange} placeholder="Loan Type (Personal, Home, etc.)" required />
                        <Input type="date" name="followUpDate" value={formData.followUpDate} onChange={handleChange} required />
                    </div>
                    <div className="space-y-6">
                        <Textarea name="visitPurpose" value={formData.visitPurpose} onChange={handleChange} placeholder="Purpose of Visit" required />
                        <Textarea name="outcome" value={formData.outcome} onChange={handleChange} placeholder="Outcome" required />
                        <Textarea name="remarks" value={formData.remarks} onChange={handleChange} placeholder="Additional Remarks" />
                    </div>

                    <div className="flex justify-end w-full">
                        <Button type="submit" disabled={loading} className="">
                            {loading ? "Submitting..." : "Submit Report"}
                        </Button>
                    </div>

                </form>
            </section>
        </div>

    );
}
