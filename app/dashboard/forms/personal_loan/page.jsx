"use client";
import React, { useState } from "react";
import {
  PersonalLoan,
  PersonalLoanSchema,
} from "@/config/forms/PersonalLoan.js";
import Formstepper from "@/components/common/Formstepper";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cloneDeep, forOwn, isObject, set, unset } from "lodash";
import db from "@/lib/firestore";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getCountFromServer,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useEffect } from "react";
import File from "@/comp/File";
import { useRef } from "react";
import { removeProperty } from "@/lib/utils";
import CloseIcon from "@/public/close.png";
import Image from "next/image";
import { login, setLoanData, upload_data } from "@/api/file_action";
import { useUserState } from "@/app/dashboard/store";
import { useRouter } from "next/navigation";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import app from "@/lib/firebaseConfig";
import { Loader2 } from "lucide-react";
import { LucideLoader2 } from "lucide-react";
import { Loader2Icon } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { AlertDialogHeader } from "@/components/ui/alert-dialog";

const Step = ({
  sectionIndex,
  fieldInd,
  toggleFieldInd,
  field,
  setState,
  step,
  state,
  currentStepName,
  readonly = false,
}) => {
  // function to change state for form elements
  let onChange = (key, value) => {
    setState((state) => {
      set(state, `${key}.value`, value);
      return { ...state };
    });
  };

  // key of form element used for key and state change
  let key = !isNaN(Number(toggleFieldInd))
    ? `${currentStepName}.sections[${sectionIndex}].fields[${fieldInd}].fields[${toggleFieldInd}]`
    : `${currentStepName}.sections[${sectionIndex}].fields[${fieldInd}]`;

  switch (field.type) {
    case "String":
      return (
        <div className="flex flex-col gap-2" key={key}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            value={field.value}
            onChange={(e) => onChange(key, e.target.value)}
            disabled={readonly || field.disabled}
          />
          {field.error ? (
            <div>
              <p className="text-xs text-red-500">{field.error}</p>
            </div>
          ) : null}
        </div>
      );
    case "Date":
      return (
        <div className="flex flex-col gap-2" key={key}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            type="date"
            onChange={(e) => onChange(key, e.target.value)}
            value={field.value}
            disabled={readonly || field.disabled}
          />
          {field.error ? (
            <div>
              <p className="text-xs text-red-500">{field.error}</p>
            </div>
          ) : null}
        </div>
      );
    case "Option":
      return (
        <div className="flex flex-col gap-2 w-full" key={key}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Select
            id={field.name}
            onValueChange={(e) => onChange(key, e)}
            disabled={readonly || field.disabled}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={field.value ? field.value : field.options[0].label}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {field.options.map((option) => (
                  <SelectItem value={option.label} key={option.label}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {field.error ? (
            <div>
              <p className="text-xs text-red-500">{field.error}</p>
            </div>
          ) : null}
        </div>
      );
    case "Binary":
      return (
        <div className="flex flex-col col-span-3 gap-4" key={key}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <RadioGroup
            disabled={readonly || field.disabled}
            value={field.value ? field.value : "No"}
            className="flex flex-row gap-4 items-center"
            onValueChange={(e) => onChange(key, e)}
          >
            <div className="flex items-center space-x-2">
              <Label>
                <RadioGroupItem value="Yes" /> Yes
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Label>
                <RadioGroupItem value="No" id="r2" /> No
              </Label>
            </div>
          </RadioGroup>
          <div className="grid grid-cols-3 gap-6">
            {field.value == "Yes" &&
              field.fields &&
              field.fields.map((e, toggleFieldInd) => {
                return (
                  <Step
                    readonly={readonly}
                    step={Object.keys(state)[step]}
                    sectionIndex={sectionIndex}
                    toggleFieldInd={toggleFieldInd}
                    fieldInd={fieldInd}
                    field={e}
                    setState={setState}
                    key={`${sectionIndex}-${fieldInd}-${toggleFieldInd}`}
                    currentStepName={currentStepName}
                    state={state}
                  />
                );
              })}
          </div>
          <Separator />
        </div>
      );
    case "File":
      return (
        <File
          itemKey={key}
          field={field}
          setState={setState}
          disabled={readonly || field.disabled}
        />
      );
    default:
      return (
        <div className="flex flex-col gap-2" key={key}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            value={field.value}
            onChange={(e) => onChange(key, e)}
            disabled={readonly || field.disabled}
          />
        </div>
      );
  }
};

const StepForm = ({ state, setState, step, readonly = false }) => {
  //current form step property name
  let currentStepName = Object.keys(state)[step];

  return (
    <div className="flex flex-col gap-8">
      {state[currentStepName].sections.map((section, sectionIndex) => {
        return (
          <section
            className="flex flex-col gap-4"
            key={`${currentStepName}.section[${sectionIndex}]`}
          >
            <div className="flex flex-col gap-2">
              <h2>{section.title}</h2>
              <Separator className="w-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.fields.map((field, fieldInd) => (
                <Step
                  step={Object.keys(state)[step]}
                  sectionIndex={sectionIndex}
                  fieldInd={fieldInd}
                  field={field}
                  setState={setState}
                  key={`${sectionIndex}-${fieldInd}`}
                  state={state}
                  currentStepName={currentStepName}
                  readonly={readonly}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );

  // return <Step state={state} setState={setState} step={step}></Step>
};

const PersonalLoanForm = () => {
  const router = useRouter();

  // step denoting the current step of the form
  const [step, setStep] = useState(0);

  // state representing the formData
  const [state, setState] = useState(PersonalLoan);

  // number of steps in form
  const stepLength = Object.keys(state).length;

  // error state
  const [validationErrors, setValidationErrors] = useState([]);

  const previewRef = useRef();
  const userState = useUserState();

  useEffect(() => {
    console.log("state:", state);
  }, [state]);

  useEffect(() => {
    console.log("userState", userState);
    state.info.sections[0].fields[1].value = userState.profile.username;
    state.info.sections[0].fields[2].value = userState.profile.name;
  }, [userState]);

  let onSubmit = async () => {
    // test mode
    // 1. remove all of the unwanted properties from the object
    // 2. then push the data to the db
    if (process.env.NEXT_PUBLIC_TEST_MODE) {
      console.log("If statement");
      let newState = cloneDeep(state);
      removeProperty(newState, "options");
      removeProperty(newState, "type");
      newState.date = new Date().toLocaleString();
      newState.type = "Personal";
      console.log(newState);

      userState.user.getIdToken().then((token) => {
        previewRef.current.close();
        userState.setShowLoader(true);
        setTimeout(() => {
          setLoanData(token, newState, "Personal").then((res) => {
            userState.setInfo({
              desc: `You have successfully applied for Personal Loan with loan ID`,
              highlight: res.loanID,
            });
            userState.setShowLoader(false);
            userState.setShowInfo(true);
            setState(PersonalLoan);
          });
        }, 2000);
      });
    } else {
      console.log("else condition");
      // prod mode
      // 1. validate the data
      // 2. if validation fails then add error to the state object
      // 3. if validation succeeds then remove unwanted properties from the object
      // then push the data to the db
      PersonalLoanSchema.validate(state, { abortEarly: false })
        .then(async () => {
          let newState = cloneDeep(state);
          removeProperty(newState, "options");
          removeProperty(newState, "type");
          console.log(newState);

          //
          // let personalLoansCollection = collection(db, "personal_loans");
          // let totalNumberOfLoans = await getCountFromServer(
          //   personalLoansCollection
          // );
          // totalNumberOfLoans = totalNumberOfLoans.data().count + 1;
          // let currentLoanNumber =
          //   "PL" + String(totalNumberOfLoans).padStart(6, "0");
          // await setDoc(
          //   doc(db, "personal_loans", currentLoanNumber),
          //   newState
          // ).then((result) => {
          //   console.log(result);
          // });

          // userState.setLoanNumber(currentLoanNumber);
          // router.push("/dashboard/admin/success");

          userState.user.getIdToken().then((token) => {
            previewRef.current.close();
            userState.setShowLoader(true);
            setLoanData(token, newState, "Personal").then((res) => {
              userState.setInfo({
                desc: `You have successfully applied for Personal Loan with loan ID`,
                highlight: res.loanID,
              });
              userState.setShowLoader(false);
              userState.setShowInfo(true);
              setState(PersonalLoan);
            });
          });
        })
        .catch((e) => {
          // we are cloning the current state of the form
          let newState = { ...state };
          console.log("this is the newState", { ...newState });

          // we are removing any error values present in the object
          validationErrors.forEach((err) => {
            console.log(err.path);
            let path = err.path.split(".");
            path.pop();
            path = path.join(".");
            unset(newState, `${path}.error`);
          });
          console.log("this is the state after error removal", {
            ...newState,
          });

          // we are adding the necessary error values in the object
          e.inner.forEach((err) => {
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
    }
  };

  return (
    <div className="relative border p-6 m-4">
      <div className="mb-8">
        <Formstepper
          step={step}
          keys={Object.keys(state).map((key) => state[key].title)}
        />
      </div>
      <StepForm state={state} setState={setState} step={step} />

      <div className="py-8 flex flex-row items-center justify-end gap-4">
        {step > 0 ? (
          <Button
            type="button"
            variant="outline"
            onClick={() => setStep((state) => state - 1)}
          >
            previous
          </Button>
        ) : null}
        {step <= stepLength - 2 ? (
          <Button type="button" onClick={() => setStep((state) => state + 1)}>
            next
          </Button>
        ) : null}
        {step == stepLength - 1 ? (
          <Button
            type="button"
            onClick={() => {
              previewRef.current.open
                ? previewRef.current.close()
                : previewRef.current.showModal();
            }}
          >
            submit
          </Button>
        ) : null}
      </div>

      <dialog
        ref={previewRef}
        className="h-screen w-screen p-8 bg-white m-4 relative"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl">Preview</h1>
          <button
            type="button"
            onClick={(e) => previewRef.current.close()}
            className="h-12 w-12 p-4 absolute top-0 right-0"
          >
            <Image src={CloseIcon} alt="close" />
          </button>
          <Separator />
          {Object.keys(state).map((key, index) => {
            return (
              <StepForm
                setState={setState}
                step={index}
                key={key}
                state={state}
                readonly={true}
              />
            );
          })}
          <div className="flex justify-end">
            <Button type="button" onClick={onSubmit}>
              submit
            </Button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PersonalLoanForm;
