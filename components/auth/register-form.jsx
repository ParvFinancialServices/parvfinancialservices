'use client'
import { cn } from "@/lib/utils";
import CommonForm from '@/components/common/Form.jsx';
import { registerFormControls } from '@/config/Registration';
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function RegisterForm({
    className,
    ...props
}) {
    const [formData, setFormData] = useState([]);
    const handleSubmit = () => {
        console.log("Submitted");
    }
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-balance text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>

            <CommonForm
                buttonText={"Register"}
                setFormData={setFormData}
                formControls={registerFormControls}
                formData={formData}
                onSubmit={handleSubmit}
                isBtnDisabled={false}
            />
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                    Sign up
                </a>
            </div>
        </div>
    )
}
