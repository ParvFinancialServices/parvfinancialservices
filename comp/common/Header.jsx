'use client'

import { Calculator } from "lucide-react";

export default function Header({ title, subTitle, img }) {
    return (
        <header className="bg-blue-500 from-blue-300 to-indigo-700 text-white  py-3">
            <div className="max-w-6xl container mx-auto px-4 flex justify-between items-center">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-start"> {title}</h1>
                    <p className="text-base text-start max-w-4xl ">{subTitle}</p>
                </div>
                <div className="hidden md:block">
                    <img src={img} className="w-56" />
                    {/* <Calculator size={70} strokeWidth={1} /> */}
                </div>
            </div>

        </header>
    );
}
