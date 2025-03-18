'use client'

export default function Header({ title, subTitle, img }) {
    return (
        // <header className=" md:h-44 from-blue-500 to-teal-500  py-3">
        <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-12 px-6">
            <div className="max-w-7xl container mx-auto px-4 flex justify-between items-center">
                <div className=" space-y-2 md:space-y-4">
                    <h1 className="text-xl md:text-3xl font-bold text-start"> {title}</h1>
                    <p className="text-base text-start max-w-4xl ">{subTitle}</p>
                </div>
                <div className="hidden md:block">
                    <img src={img} className="w-full h-40" />
                    {/* <Calculator size={70} strokeWidth={1} /> */}
                </div>
            </div>

        </header>
    );
}
