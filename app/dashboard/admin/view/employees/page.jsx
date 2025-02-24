'use client'
import { getEmployeeDetails } from '@/api/admin';
import { useUserState } from '@/app/dashboard/store';
import EmployeeDetailsTable from '@/comp/employees/EmployeeDetailsTable';
import { StepForm } from '@/comp/StepForm';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [data, setData] = useState(null);
    const userState = useUserState()
    const fetchUserData = async () => {
        try {
            const token = await userState.user.getIdToken();
            const result = await getEmployeeDetails(token, "Field Staff");
            console.log(result);
            if (result?.success) {
                setData(result?.employeeData);
            }
        } catch (error) {
            console.log("Error : ", error);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);
    return (
        <div>
            {
                data?.map(()=>{
                    return (
                        <div className="flex flex-col gap-4">
                            {Object.keys(data).map((key, index) => {
                                return (
                                    <EmployeeDetailsTable
                                        // setState={setState}
                                        step={index}
                                        key={key}
                                        state={data[key]?.info}
                                        readonly={true}
                                    />
                                );
                            })}
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default page