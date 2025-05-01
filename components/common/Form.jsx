'use client'
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";

function CommonForm({
    formControls,
    formData,
    setFormData,
    onSubmit,
    buttonText,
    isBtnDisabled,
    step,
    prevButton,
    fullwidth,
}) {

    function renderInputsByComponentType(getControlItem) {
        let element = null;
        const value = formData[getControlItem?.name] || "";

        switch (getControlItem.componentType) {
            case "input":
                element = (
                    <div>
                        <Label className="mb-1">{getControlItem.label}</Label>
                        <Input
                            name={getControlItem.name}
                            placeholder={getControlItem.placeholder}
                            id={getControlItem.name}
                            type={getControlItem.type}
                            value={value}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    [getControlItem.name]: event.target.value,
                                })
                            }
                        />
                    </div>

                );

                break;
            case "select":
                element = (
                    <div>
                        <Label className="mb-1">{getControlItem.label}</Label>
                        <Select
                            onValueChange={(value) =>
                                setFormData({
                                    ...formData,
                                    [getControlItem.name]: value,
                                })
                            }
                            value={value}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={getControlItem.label} />
                            </SelectTrigger>
                            <SelectContent>
                                {getControlItem.options && getControlItem.options.length > 0
                                    ? getControlItem.options.map((optionItem, index) => (
                                        <SelectItem key={index} value={optionItem.id}>
                                            {optionItem.label}
                                        </SelectItem>
                                    ))
                                    : null}
                            </SelectContent>
                        </Select>
                    </div>

                );

                break;
            case "textarea":
                element = (
                    <div>
                        <Label className="mb-1">{getControlItem.label}</Label>
                        <Textarea
                            name={getControlItem.name}
                            placeholder={getControlItem.placeholder}
                            id={getControlItem.id}
                            value={value}
                            onChange={(event) =>
                                setFormData({
                                    ...formData,
                                    [getControlItem.name]: event.target.value,
                                })
                            }
                        />
                    </div>

                );

                break;
            case "radio":
                element = (
                    <div className="flex items-center gap-2">
                        <Label className="text-sm ml-3 font-medium flex items-center gap-4 "><Sparkle size={16} /> {getControlItem?.label}</Label>
                        {getControlItem.options?.map((option, index) => (
                            <div key={index} className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    name={getControlItem.name}
                                    id={option.value}
                                    value={option.value}
                                    checked={value === option.value}
                                    className="cursor-pointer text-xs"
                                    onChange={(event) =>
                                        setFormData({
                                            ...formData,
                                            [getControlItem.name]: event.target.value,
                                        })
                                    }
                                />
                                <Label htmlFor={option.value} className="ml-1 cursor-pointer text-xs">
                                    {option.label}
                                </Label>
                            </div>
                        ))}
                    </div>
                );
                break;

            default:
                element = (
                    <div className=" ">
                        <p className="text-sm font-semibold mt-1 underline leading-7">{getControlItem?.label} </p>
                    </div>
                );
                break;
        }

        return element;
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className={`grid gap-4 ${fullwidth ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"} `}>
                    {formControls?.map((controlItem, index) => (
                        <div className="grid w-full gap-2" key={index}>
                            {renderInputsByComponentType(controlItem)}
                        </div>
                    ))}
                </div>
                <div className="flex justify-end w-full gap-4 mt-5">
                    {
                        buttonText ?
                            <>
                                {
                                    step > 1 ?
                                        <Button disabled={isBtnDisabled} variant="outline" type="button" onClick={prevButton} className="mt-5 ">
                                            Back
                                        </Button>
                                        : null
                                }
                                <Button disabled={isBtnDisabled} type="submit" className="mt-5 ">
                                    {buttonText ? buttonText : null}
                                </Button>
                            </>
                            : null
                    }

                </div>
            </form>
        </>

    );
}

export default CommonForm;