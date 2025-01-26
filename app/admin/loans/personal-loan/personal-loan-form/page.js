'use client'
import React, { useState } from "react";
import { PersonalLoan } from '@/config/forms/PersonalLoan';
import Formstepper from '@/components/common/Formstepper';
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"



const Step = ({ state, setState, step }) => {
    return <div className="flex flex-col gap-8">
        {
            state[Object.keys(state)[step]].sections.map((section, i) => {
                return <section className="flex flex-col gap-4" key={"section-" + i}>
                    <div className="flex flex-col gap-2">
                        <h2>{section.title}</h2>
                        <Separator className="w-full" />
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {section.fields.map((field, ind) => {
                            switch (field.type) {
                                case "String":
                                    return <div className="flex flex-col gap-2" key={"field-" + section + "" + ind}>
                                        <Label htmlFor={field.name}>{field.label}</Label>
                                        <Input id={field.name} value={field.value} onChange={(e) => {
                                            setState((state) => {
                                                state[step].sections[i].fields[ind].value = e.target.value;
                                                return { ...state };
                                            });
                                        }} />
                                    </div>;
                                case "Date":
                                    return <div className="flex flex-col gap-2">
                                        <Label htmlFor={field.name}>{field.label}</Label>
                                        <Input type="date" />
                                    </div>;
                                case "Option":
                                    return <div className="flex flex-col gap-2 w-full">
                                        <Label htmlFor={field.name}>{field.label}</Label>
                                        <Select id={field.name} >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder={field.options[0].label} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {
                                                        field.options.map(option => <SelectItem value={option.label} key={option.label}>{option.label}</SelectItem>)
                                                    }
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>;
                                case "Binary":
                                    return <div className="flex flex-col gap-2">
                                        <Label htmlFor={field.name}>{field.label}</Label>
                                        <RadioGroup defaultValue="comfortable" className="flex flex-row gap-4 items-center">
                                            <div className="flex items-center space-x-2">
                                                <Label><RadioGroupItem value="default" /> Yes</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Label><RadioGroupItem value="comfortable" id="r2" /> No</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                default:
                                    return <div className="flex flex-col gap-2">
                                        <Label htmlFor={field.name}>{field.label}</Label>
                                        <Input id={field.name} value={field.value} onChange={(e) => {
                                            setState((state) => {
                                                state[step].sections[i].fields[ind].value = e.target.value;
                                                return { ...state };
                                            });
                                        }} />
                                    </div>;
                            }
                        })}
                    </div>

                </section>
            })
        }

    </div>
}

const StepForm = ({
    state, setState, step
}) => {
    return <Step state={state} setState={setState} step={step}></Step>

}


const PersonalLoanForm = () => {


    // step denoting the current step of the form
    const [step, setStep] = useState(0);

    // state representing the formData
    const [state, setState] = useState(PersonalLoan);

    // number of steps in form
    const stepLength = Object.keys(state).length;



    // const saveToLocalStorage = () => {
    //     localStorage.setItem('formData', JSON.stringify(formData));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            saveToLocalStorage();
        } catch (error) {

        }
        console.log("form submitted");
        // if (step >= 1 && step <= 4) {
        setStep((prev) => prev + 1);
        // }

    }

    return (
        <div className="border p-6 m-4">
            <div className="mb-8">
                <Formstepper step={step} keys={Object.keys(state).map(key => state[key].title)} />
            </div>
            <StepForm state={state} setState={setState} step={step} />

            <div className="py-8 flex flex-row items-center justify-end gap-4">
                {
                    step == 0 ? null : <Button type="button" variant="outline" onClick={() => setStep(state => state - 1)}>previous</Button>
                }
                {
                    step >= stepLength - 1 ? null : <Button type="button" onClick={() => setStep(state => state + 1)}>next</Button>
                }


            </div>
        </div>
    )
}

export default PersonalLoanForm;