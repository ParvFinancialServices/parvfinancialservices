"use client";

import { getLoanByID, setLoanByID } from "@/api/file_action";
import { useUserState } from "@/app/dashboard/store";
import { StepForm } from "@/comp/StepForm";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  PersonalLoan,
  PersonalLoanInitialState,
} from "@/config/forms/PersonalLoan";
import { populateFlatDataFromSchema, populateSchemaFromFlatData } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export default function Page() {
  const userState = useUserState();
  const searchParams = useSearchParams();
  const [loanData, setLoanData] = useState({});
  const [metaData, setMetaData] = useState({});
  const type = searchParams.get("type");
  const id = searchParams.get("id");

  function updateData() {
    userState.user.getIdToken().then((token) => {
      let data = { formData: populateFlatDataFromSchema(loanData) };
      userState.setShowLoader(true);
      // data.date = metaData.date;
      // data.type = metaData.type;
      data.status = metaData.status;
      setLoanByID(token, type, id, data).then((res) => {
        userState.setShowLoader(false);
        userState.setShowInfo(true);
        if (res.msg) {
          userState.setInfo({ desc: res.msg });
        } else {
          userState.setInfo({ desc: res.err });
        }
      });
    });
  }

  useEffect(() => {
    userState.setShowLoader(true);
    userState.user.getIdToken().then((token) => {
      getLoanByID(token, type, id).then((res) => {
        userState.setShowLoader(false);
        setMetaData({
          status: res.data.status,
        });
        delete res.data.date;
        delete res.data.status;
        delete res.data.type;
        delete res.data.connectorID;
        console.log(res);
        setLoanData(res.data);
        res = populateSchemaFromFlatData(PersonalLoan, res.data.formData);
        console.log(res);
        setLoanData(res);
      });
    });
  }, []);

  useEffect(() => {
    console.log(loanData);
  }, [loanData]);

  return (
    <div className="p-8">
      <div className="w-full flex justify-start p-4">
        <div className="w-fit">
          <Label htmlFor="status">Status</Label>
          <Select
            id="status"
            onValueChange={(e) =>
              setMetaData((state) => {
                let newState = { ...state };
                newState.status = e;
                return newState;
              })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={metaData.status} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {["VERIFICATION", "APPROVED"].map((option) => (
                  <SelectItem value={option} key={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* {field.error ? (
            <div>
              <p className="text-xs text-red-500">{field.error}</p>
            </div>
          ) : null} */}
      </div>
      <Separator />
      {loanData &&
        Object.keys(loanData).map((key, index) => {
          return (
            <StepForm
              setState={setLoanData}
              step={index}
              key={key}
              state={loanData}
              readonly={false}
            />
          );
        })}
      <div className="w-full flex justify-end">
        <Button onClick={updateData}>Submit</Button>
      </div>
    </div>
  );
}
