"use client";
import React, { useState } from "react";
import {
  PersonalLoan,
  PersonalLoanSchema,
} from "@/config/forms/PersonalLoan.js";
import Formstepper from "@/components/common/Formstepper";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cloneDeep, forOwn, isObject, set, unset } from "lodash";
import { useEffect } from "react";
import File from "@/comp/File";
import { useRef } from "react";
import { updateErrors } from "@/lib/utils";
import CloseIcon from "@/public/close.png";
import Image from "next/image";
import { setLoanData, updateDocumentID } from "@/api/file_action";
import { useUserState } from "@/app/dashboard/store";
import { StepForm } from "@/comp/StepForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PersonalLoanForm = () => {
  //dialog state
  const [open, setOpen] = useState(false);

  // step denoting the current step of the form
  const [step, setStep] = useState(0);

  // state representing the formData
  const [state, setState] = useState(PersonalLoan);

  // number of steps in form
  const stepLength = Object.keys(state).length;

  // error state
  const [validationErrors, setValidationErrors] = useState([]);

  // const previewRef = useRef();
  const userState = useUserState();

  useEffect(() => {
    console.log("state:", state);
  }, [state]);

  useEffect(() => {
    console.log("userState", userState);
    state.info.sections[0].fields[1].value = userState.profile.username;
    state.info.sections[0].fields[2].value =
      userState.profile.info.sections[0].fields[0].value;
  }, [userState]);

  let onSubmit = async () => {
    // test mode
    // 1. remove all of the unwanted properties from the object
    // 2. then push the data to the db
    if (process.env.NEXT_PUBLIC_TEST_MODE == "true") {
      console.log("If statement");
      let newState = cloneDeep(state);
      // removeProperty(newState, "options");
      // removeProperty(newState, "type");
      newState.date = new Date().toLocaleString();
      newState.type = "Personal";
      console.log(newState);

      userState.user.getIdToken().then((token) => {
        // previewRef.current.close();
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
          // removeProperty(newState, "options");
          // removeProperty(newState, "type");
          newState.date = new Date().toLocaleString();
          newState.type = "Personal";
          console.log(newState);

          userState.user.getIdToken().then((token) => {
            // previewRef.current.close();
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
          let newState = updateErrors(state, validationErrors, e);

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
              setOpen(true);
              // previewRef.current.open
              //   ? previewRef.current.close()
              //   : previewRef.current.showModal();
            }}
          >
            submit
          </Button>
        ) : null}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className={"lg:max-w-screen-lg overflow-y-scroll max-h-[90vh]"}
        >
          <DialogHeader>
            <DialogTitle>Preview</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4">
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
        </DialogContent>
      </Dialog>

      {/* <dialog
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
      </dialog> */}
    </div>
  );
};

export default PersonalLoanForm;
