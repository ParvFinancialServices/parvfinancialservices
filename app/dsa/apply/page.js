"use client";

import { createDSAAccount } from "@/api/file_action";
import Footer from "@/comp/Home/Footer";
import NavbarNew from "@/comp/Navbar/Navbar";
import { StepForm } from "@/comp/StepForm";
import { Button } from "@/components/ui/button";
import {
  AccountCreationSchema,
  DSAAccountCreation,
} from "@/config/forms/AccountCreation";
import { removeProperty, updateErrors } from "@/lib/utils";
import { cloneDeep } from "lodash";
import { useEffect } from "react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2Icon } from "lucide-react";

const ApplyForDSA = () => {
  const [state, setState] = useState(DSAAccountCreation);
  const [validationErrors, setValidationErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  const onSubmit = async (e) => {
    if (process.env.NEXT_PUBLIC_TEST_MODE == "true") {
      setIsLoading(true);
      let data = cloneDeep(state);
      // removeProperty(data, "type");
      // removeProperty(data, "options");
      setTimeout(() => {
        createDSAAccount(state);
      }, 4000);
    } else {
      AccountCreationSchema.validate(state, { abortEarly: false })
        .then(async () => {
          let data = cloneDeep(state);
          // removeProperty(data, "type");
          // removeProperty(data, "options");
          createDSAAccount(state);
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
    <div>
      <NavbarNew />
      <section className="flex flex-col p-4 items-center mt-[100px]">
        <header className="font-semibold text-2xl p-4">Create Account</header>
        <div className="p-4 max-w-[60vw] min-w-[300px] flex items-center justify-center flex-col">
          <StepForm state={state} setState={setState} step={0} />
          <div className="flex items-center justify-end p-4 w-full">
            <Button type="button" onClick={onSubmit}>
              submit
            </Button>
          </div>
        </div>
      </section>
      <Footer />
      <Dialog open={isLoading}>
        <DialogContent className="sm:max-w-md">
          <div className="flex items-center justify-center">
            <Loader2Icon color="black" className="animate-spin" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ApplyForDSA;
