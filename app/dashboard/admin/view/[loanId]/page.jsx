'use client'
import { getLoanDataById } from '@/api/file_action';
import { useUserState } from '@/app/dashboard/store';
import DetailsPage from '@/comp/common/Details';
import { removeProperty } from '@/lib/utils';
import { get } from 'lodash';
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const FormDetailsPage = () => {
    const {loanId}=useParams();
    const searchParams = useSearchParams();
    const userState = useUserState();
    const [loanData,setLoanData]=useState({});

    async function fetchLoanData() {
        const token = await userState.user.getIdToken();
        try {
            const response = await getLoanDataById(token,loanId); // Calls the server action
            console.log(response);
            const connectorName=get(response?.loanData,"info.sections[0].fields[2].value");

            if (response.success) {
                removeProperty(response?.loanData,"date")
                removeProperty(response?.loanData,"type")
                removeProperty(response?.loanData,"status")
                setLoanData(response?.loanData)
            }else{
                toast.error(response?.error)
            }
            // return response.loanData;
        } catch (error) {
            toast?.error(error?.message)
            console.error("Error fetching loan data:", error);
            // throw error;
        }
    };

    useEffect(()=>{
        fetchLoanData();
    },[loanId]);
    return (
        <div>
            <DetailsPage data={loanData} />
        </div>
    )
}

export default FormDetailsPage