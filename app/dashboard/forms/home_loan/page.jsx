"use client";
import React, { useState } from "react";
import {
  PersonalLoanSchema,
} from "@/config/forms/PersonalLoan.js";
import Formstepper from "@/components/common/Formstepper";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cloneDeep, set, unset } from "lodash";
import db from "@/lib/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useRef } from "react";
import CloseIcon from "@/public/close.png";
import Image from "next/image";
import { StepForm } from "@/comp/StepForm";
import { HomeLoan } from "@/config/forms/HomeLoan";

const PersonalLoanForm = () => {
  // step denoting the current step of the form
  const [step, setStep] = useState(0);

  // state representing the formData
  const [state, setState] = useState(HomeLoan);

  // number of steps in form
  const stepLength = Object.keys(state).length;

  // error state
  const [validationErrors, setValidationErrors] = useState([]);

  const previewRef = useRef();

  useEffect(() => {
    console.log("state:", state);
  }, [state]);

  let onSubmit = async () => {
    // test mode
    // 1. remove all of the unwanted properties from the object
    // 2. then push the data to the db
    if (process.env.NEXT_PUBLIC_TEST_MODE) {
      let newState = cloneDeep(state);
      addDoc(collection(db, "personal_loans"), newState).then((result) => {
        console.log(result);
      });
    } else {
      console.log("else condition");
      // prod mode
      // 1. validate the data
      // 2. if validation fails then add error to the state object
      // 3. if validation succeeds then remove unwanted properties from the object
      // then push the data to the db
      PersonalLoanSchema.validate(state, { abortEarly: false })
        .then(() => {
          let newState = cloneDeep(state);
          addDoc(collection(db, "items"), newState).then((result) => {
            console.log(result);
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
    <div className="border p-6 m-4">
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
      </dialog>
    </div>
  );
};

export default PersonalLoanForm;
