'use client'
import React, { useState } from "react";
import { PersonalLoan, PersonalLoanSchema } from '@/config/PersonalLoan.js';
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
import { set, unset } from "lodash"
import db from '@/lib/firestore';
import { collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useEffect } from "react";
import File from "@/comp/File";


const Step = ({ sectionIndex, fieldInd, toggleFieldInd, field, setState, step, onChangeFunction, state, currentStepName }) => {


    let onChange = function (e) {
        setState((state) => {
            console.log(state, step, e);
            state[step].sections[sectionIndex].fields[fieldInd].value = e.target.value;
            return { ...state };
        });
    };
    let toggleOnChange = function (e, fieldInd, toggleFieldInd) {
        setState((state) => {
            console.log(state, toggleFieldInd, fieldInd, sectionIndex);
            state[step].sections[sectionIndex].fields[fieldInd].fields[toggleFieldInd].value = e.target.value;
            return { ...state };
        });
    };


    let key = toggleFieldInd ? `${currentStepName}.sections[${sectionIndex}].fields[${fieldInd}].fields[${toggleFieldInd}]` : `${currentStepName}.sections[${sectionIndex}].fields[${fieldInd}]`;


    switch (field.type) {
        case "String":
            return <div className="flex flex-col gap-2" key={key}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input id={field.name} value={field.value} onChange={onChangeFunction ? onChangeFunction : onChange} />
                {
                    field.error ? <div>
                        <p className="text-xs text-red-500">{field.error}</p>
                    </div> : null
                }

            </div>;
        case "Date":
            return <div className="flex flex-col gap-2" key={key}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input type="date" onChange={onChangeFunction ? onChangeFunction : onChange} value={field.value} />
                {
                    field.error ? <div>
                        <p className="text-xs text-red-500">{field.error}</p>
                    </div> : null
                }
            </div>;
        case "Option":
            return <div className="flex flex-col gap-2 w-full" key={key}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <Select id={field.name} onValueChange={(e) => {
                    setState((state) => {
                        console.log(state, step, e);
                        state[step].sections[sectionIndex].fields[fieldInd].value = e;
                        return { ...state };
                    })
                }} >
                    <SelectTrigger className="w-full"  >
                        <SelectValue placeholder={field.value ? field.value : field.options[0].label} />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup>
                            {
                                field.options.map(option => <SelectItem value={option.label} key={option.label}>{option.label}</SelectItem>)
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                {
                    field.error ? <div>
                        <p className="text-xs text-red-500">{field.error}</p>
                    </div> : null
                }
            </div>;
        case "Binary":
            return <div className="flex flex-col col-span-3 gap-4" key={key}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <RadioGroup value={field.value ? field.value : "No"} className="flex flex-row gap-4 items-center" onValueChange={(e) => {
                    setState((state) => {
                        console.log(state, step, e);
                        state[step].sections[sectionIndex].fields[fieldInd].value = e;
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
                <div className="grid grid-cols-3 gap-6">
                    {
                        field.value == 'Yes' && field.fields && field.fields.map((e, toggleFieldInd) => {
                            return <Step step={Object.keys(state)[step]} sectionIndex={sectionIndex} toggleFieldInd={toggleFieldInd} fieldInd={fieldInd} field={e} setState={setState} key={`${sectionIndex}-${fieldInd}-${toggleFieldInd}`} onChangeFunction={(e) => toggleOnChange(e, fieldInd, toggleFieldInd)} state={state} />
                        })
                    }
                </div>
                <Separator />
            </div>
        case "File":
            return <File itemKey={key} field={field} setState={setState}/>
        default:
            return <div className="flex flex-col gap-2" key={key}>
                <Label htmlFor={field.name}>{field.label}</Label>
                <Input id={field.name} value={field.value} onChange={onChangeFunction ? onChangeFunction : onChange} />
            </div>;
    }
}

const StepForm = ({
    state, setState, step
}) => {


    //current form step property name
    let currentStepName = Object.keys(state)[step]



    return <div className="flex flex-col gap-8">
        {


            state[currentStepName].sections.map((section, sectionIndex) => {
                return <section className="flex flex-col gap-4" key={`${currentStepName}.section[${sectionIndex}]`}>
                    <div className="flex flex-col gap-2">
                        <h2>{section.title}</h2>
                        <Separator className="w-full" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {section.fields.map((field, fieldInd) => <Step step={Object.keys(state)[step]} sectionIndex={sectionIndex} fieldInd={fieldInd} field={field} setState={setState} key={`${sectionIndex}-${fieldInd}`} state={state} currentStepName={currentStepName} />)}
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



    // error state
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        console.log('state:', state);
    }, [state]);

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


                        PersonalLoanSchema.validate(state, { abortEarly: false, }).then(e => console.log(e)).catch(e => {
                            // we are cloning the current state of the form
                            let newState = { ...state };
                            console.log("this is the newState", { ...newState });

                            // we are removing any error values present in the object
                            validationErrors.forEach(err => {
                                console.log(err.path);
                                let path = err.path.split(".");
                                path.pop();
                                path = path.join(".");
                                unset(newState, `${path}.error`);
                            });
                            console.log("this is the state after error removal", { ...newState });

                            // we are adding the necessary error values in the object
                            e.inner.forEach(err => {
                                console.log(err.path);
                                let path = err.path.split(".");
                                path.pop();
                                path = path.join(".");
                                set(newState, `${path}.error`, err.message);
                            });
                            console.log("this is after error addition", { ...newState });

                            // we are storing the reference of the current error so that on next submission of form we can remove it
                            setValidationErrors(e.inner);

                            // finally we are updating the state
                            setState(newState);
                        });

                        // const docRef = await addDoc(collection(db, "items"), {
                        //     name: "Rishab"
                        // });
                        // const result = getStorage();
                        // console.log(result);
                        // console.log("Document written with ID: ", docRef.id);
                    }}>submit</Button> : null
                }



            </div>
        </div>
    )
}

export default PersonalLoanForm;