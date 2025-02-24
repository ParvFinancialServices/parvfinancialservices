import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const EmployeeDetailsTable = ({ step, key, state }) => {
    console.log(state);

    return (
        <div>
            {
                state?.sections?.map((item, index) => {
                    console.log(item, index);
                    return (
                        <div key={index} className='grid grid-cols-12'>
                            {
                                item?.fields?.map((data) => {
                                    return (
                                        <div>
                                           {
                                            Object?.keys(data)?.map((fieldValue)=>{
                                                console.log(fieldValue)
                                                
                                                return (
                                                    <div>
                                                      <table className='border'>
                                                        <thead>
                                                            <th>{data[fieldValue]}</th>
                                                        </thead>
                                                      </table>
                                                    </div>
                                                )
                                            })
                                           }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    )
}

export default EmployeeDetailsTable