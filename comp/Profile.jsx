'use client'
import { useUserState } from '@/app/dashboard/store'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MapPinnedIcon } from 'lucide-react'
import { Building } from 'lucide-react'
import { User } from 'lucide-react'
import { Download } from 'lucide-react'
import { Upload } from 'lucide-react'
import { File } from 'lucide-react'
import { Eye } from 'lucide-react'
import { Calendar } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const ImageSection = ({ profile }) => {
    return (
        <div className='flex gap-2 items-center px-4 py-2 w-full'>
            <div className='max-w-full '>
                <Avatar className='w-16 h-16 bg-orange-800 rounded-lg '>
                    <AvatarImage src={"/services/credit.jpg"} />
                    <AvatarFallback className="text-xl">AB</AvatarFallback>
                </Avatar>
            </div>
            <div>
                <p className='text-xl font-semibold font-sans'>Abhishek Kumar</p>
                <p className='text-xs text-gray-600 font-medium'>{profile?.username}</p>
            </div>
        </div>
    )
}
const AboutSection = ({ data }) => {
    console.log("DATA", data);

    return (
        <div className=' space-y-3'>
            <h3 className=' '>About</h3>
            <hr />
            <div className='flex gap-4'>
                <div className='flex items-center gap-1'>
                    <Phone size={15} strokeWidth={1.5} />
                    <span className=' text-gray-600'>Phone :</span>
                </div>
                <p>+91 8709090517</p>
            </div>
            <div className='flex gap-4'>
                <div className='flex items-center gap-1'>
                    <Mail size={16} strokeWidth={1.5} />
                    <span className=' text-gray-600'>Email :</span>
                </div>
                <p>abhi24033c@gmail.com</p>
            </div>
        </div>
    )
}

const AddressSection = () => {
    return (
        <div className='space-y-2'>
            <h3>Address</h3>
            <div className='flex gap-4 font-medium'>
                <div className='flex gap-1 items-center'>
                    <MapPinnedIcon size={16} strokeWidth={1.6} />
                    <span className='text-gray-600'>Address : </span>
                </div>
                <p>Khap Lawani, kanhachatti</p>
            </div>
            <div className='flex gap-4 font-medium'>
                <div className='flex gap-1 items-center'>
                    <Building size={16} strokeWidth={1.6} />
                    <span className='text-gray-600'>City / State : </span>
                </div>
                <p>Ranchi, Jharkhand</p>
            </div>
            <div className='flex gap-4 font-medium'>
                <div className='flex gap-1 items-center'>
                    <MapPin size={16} strokeWidth={1.6} />
                    <span className='text-gray-600'>Pincode : </span>
                </div>
                <p>8340001</p>
            </div>
        </div>
    )
}

const EmployementSection = () => {
    return (
        <div className='space-y-2'>
            <h3>Employment Details</h3>
            <div className='flex gap-4 font-medium'>
                <div className='flex gap-1 items-center'>
                    <User size={16} strokeWidth={1.6} />
                    <span className='text-gray-600'>Role : </span>
                </div>
                <p>Relation ship manager</p>
            </div>
            <div className='flex gap-4 font-medium'>
                <div className='flex gap-1 items-center'>
                    <Calendar size={16} strokeWidth={1.6} />
                    <span className='text-gray-600'>Joining Date </span>
                </div>
                <p>Ranchi, Jharkhand</p>
            </div>
            {/* <div className='flex gap-4 font-medium'>
                <div className='flex gap-1 items-center'>
                    <MapPin size={16} strokeWidth={1.6}/>
                    <span className='text-gray-600'>Pincode : </span>
                </div>
                <p>8340001</p>
            </div> */}
        </div>
    )
};


// import { FaFileAlt, FaFigma, FaClone, FaEllipsisH } from "react-icons/fa";

const DocumentCard = ({ name }) => {
    return (
        <div className="w-60 p-4 rounded-2xl border cursor-pointer flex flex-col ">
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-3">
                <Image src={`/services/credit.jpg`} width={500} height={500} alt='Image' className='w-full h-full' />
            </div>

            {/* Document Name */}
            <div className="flex items-center gap-2">
                <File size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{name}</span>
            </div>
        </div>
    );
};

const DocumentsList = () => {
    const documents = ["Aadhar Card", "PAN Card", "Bank Statement"];

    return (
        <div className="flex gap-4">
            {documents.map((doc, index) => (
                <DocumentCard key={index} name={doc} />
            ))}
        </div>
    );
};



const Profile = () => {
    const { profile } = useUserState();
    console.log(profile?.info);

    return (
        <div className='p-5 grid grid-cols-10 gap-5'>
            <section className='col-span-10 space-y-5 bg-gray-50 p-5 rounded-lg'>
                <ImageSection profile={profile} />
                {
                    profile?.info?.sections?.map((item, index) => {
                        console.log(item?.fields);
                        return (
                            <>
                                <h3>{item?.title}</h3>
                                <div className='grid grid-cols-3'>
                                    {item?.fields?.map((subItem, index) => {
                                        console.log(subItem?.label);

                                        return (
                                            <div className=''>
                                                <span>{subItem?.label}</span>
                                                <p>{subItem?.value}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Profile