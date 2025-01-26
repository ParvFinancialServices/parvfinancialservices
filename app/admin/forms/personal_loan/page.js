'use client'
import React, { useState } from "react";
import { PersonalLoan } from '@/config/forms/PersonalLoan.js';
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

import db from '@/lib/firestore';
import { collection, addDoc } from "firebase/firestore";


const Step = ({ sectionInd, fieldInd, toggleFieldInd, field, setState, step, onChangeFunction, state }) => {


    let onChange = function (e) {
        setState((state) => {
            console.log(state, step, e);
            state[step].sections[sectionInd].fields[fieldInd].value = e.target.value;
            return { ...state };
        });
    };
    let toggleOnChange = function (e) {
        setState((state) => {
            console.log(state);
            state[step].sections[sectionInd].fields[fieldInd].field[toggleFieldInd].value = e.target.value;
            return { ...state };
        });
    };


    switch (field.type) {
        case "String":
            return <div className="flex flex-col gap-2" key={"field-" + sectionInd + "-" + fieldInd}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input id={field.name} value={field.value} onChange={onChangeFunction ? onChangeFunction : onChange} />
            </div>;
        case "Date":
            return <div className="flex flex-col gap-2">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input type="date" onChange={onChangeFunction ? onChangeFunction : onChange} />
            </div>;
        case "Option":
            return <div className="flex flex-col gap-2 w-full">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Select id={field.name} onChange={onChangeFunction ? onChangeFunction : onChange} >
                    <SelectTrigger className="w-full" >
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
                <RadioGroup defaultValue="No" className="flex flex-row gap-4 items-center" onValueChange={(e) => {
                    setState((state) => {
                        console.log(state, step, e);
                        state[step].sections[sectionInd].fields[fieldInd].value = e;
                        return { ...state };
                    })
                }}>
                    <div className="flex items-center space-x-2">
                        <Label><RadioGroupItem value="Yes" /> Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Label><RadioGroupItem value="No" id="r2" /> No</Label>
                    </div>
                </RadioGroup>
                <div className="flex flex-col">
                    {
                        field.value == 'Yes' && field.fields && field.fields.map((e, toggleFieldInd) => {
                            return <Step step={Object.keys(state)[step]} sectionInd={sectionInd} toggleFieldInd={toggleFieldInd} fieldInd={fieldInd} field={e} setState={setState} key={`${sectionInd}-${fieldInd}-${toggleFieldInd}`} onChangeFunction={toggleOnChange} state={state} />
                        })
                    }
                </div>
            </div>
        default:
            return <div className="flex flex-col gap-2">
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input id={field.name} value={field.value} onChange={onChangeFunction ? onChangeFunction : onChange} />
            </div>;
    }
}

const StepForm = ({
    state, setState, step
}) => {





    return <div className="flex flex-col gap-8">
        {


            state[Object.keys(state)[step]].sections.map((section, sectionIndex) => {
                return <section className="flex flex-col gap-4" key={"section-" + sectionIndex}>
                    <div className="flex flex-col gap-2">
                        <h2>{section.title}</h2>
                        <Separator className="w-full" />
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        {section.fields.map((field, fieldInd) => <Step step={Object.keys(state)[step]} sectionInd={sectionIndex} fieldInd={fieldInd} field={field} setState={setState} key={`${sectionIndex}-${fieldInd}`} state={state}/>)}
                    </div>
                </section>
            })
        }

    </div>

    // return <Step state={state} setState={setState} step={step}></Step>

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
                    step > 0 ? <Button type="button" variant="outline" onClick={() => setStep(state => state - 1)}>previous</Button> : null
                }
                {
                    step <= stepLength - 2 ? <Button type="button" onClick={() => setStep(state => state + 1)}>next</Button> : null
                }
                {
                    step == stepLength - 1 ? <Button type="button" onClick={async () => {
                        const docRef = await addDoc(collection(db, "items"), {
                            name: "Rishab"
                        });
                        console.log("Document written with ID: ", docRef.id);
                    }}>submit</Button> : null
                }



            </div>
        </div>
    )
}

export default PersonalLoanForm;