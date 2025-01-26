'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BigHeading, Heading } from "./Common";
// import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        imgSrc: "https://readymadeui.com/team-1.webp",
        name: "Sarah Johnson",
        title: "Food Critic",
        rating: 5,
        description:
            "This restaurant exceeded all my expectations! The flavors were exquisite and perfectly balanced. Every dish demonstrated remarkable culinary expertise. The ambiance was sophisticated yet welcoming.",
    },
    {
        imgSrc: "https://readymadeui.com/team-2.webp",
        name: "John Doe",
        title: "Travel Blogger",
        rating: 4,
        description:
            "A truly memorable dining experience! The menu was innovative, and the service was impeccable. I can’t wait to visit again.",
    },
    {
        imgSrc: "https://readymadeui.com/team-3.webp",
        name: "Emily Davis",
        title: "Lifestyle Influencer",
        rating: 5,
        description:
            "From start to finish, everything was just perfect. The staff was friendly, and the food was divine. Highly recommended!",
    },
];


export function TestimonialCard({ imgSrc, name, title, rating, description }) {
    return (
        <div className="break-inside-avoid p-4 rounded-lg bg-gray-100 relative h-72 w-full">
            <div className="flex flex-wrap items-center gap-4">
                <img
                    src={imgSrc}
                    alt={name}
                    className="w-14 h-14 rounded-full border-2 border-purple-500"
                />
                <div>
                    <h4 className="text-gray-800 text-sm whitespace-nowrap font-bold">{name}</h4>
                    <p className="mt-0.5 text-xs text-gray-500">{title}</p>
                </div>
            </div>
            <div className="flex space-x-1 mt-4">
                {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                        key={index}
                        className={`w-3.5 ${index < rating ? "fill-purple-600" : "fill-gray-300"}`}
                        viewBox="0 0 14 13"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                ))}
            </div>
            <div className="mt-6">
                <p className="text-gray-800 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

// Custom Previous Arrow Button
function PrevArrow({ className, onClick }) {
    return (
        <button
            className={`${className} w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition absolute -left-5 z-10`}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                />
            </svg>
        </button>
    );
}

// Custom Next Arrow Button
function NextArrow({ className, onClick }) {
    return (
        <button
            className={`${className} w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-600 transition absolute -right-5 z-10`}
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </button>
    );
}

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow custom-prev"
            onClick={onClick}
            style={{
                position: "absolute",
                left: "-30px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 10,
            }}
        >
            {/* ⬅️ */}
            <ChevronLeft size={30} className="text-gray-700" />
        </div>
    );
};


const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow custom-next"
            onClick={onClick}
            style={{
                position: "absolute",
                right: "-30px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                zIndex: 10,
            }}
        >
            {/* ➡️ */}
            <ChevronRight size={30} className="text-gray-700" />
        </div>
    );
};

export default function TestimonialSection() {
    //   const testimonials = [
    //     {
    //       imgSrc: "https://readymadeui.com/team-1.webp",
    //       name: "Sarah Johnson",
    //       title: "Food Critic",
    //       rating: 5,
    //       description:
    //         "This restaurant exceeded all my expectations! The flavors were exquisite and perfectly balanced. Every dish demonstrated remarkable culinary expertise. The ambiance was sophisticated yet welcoming.",
    //     },
    //     {
    //       imgSrc: "https://readymadeui.com/team-2.webp",
    //       name: "John Doe",
    //       title: "Travel Blogger",
    //       rating: 4,
    //       description:
    //         "A truly memorable dining experience! The menu was innovative, and the service was impeccable. I can’t wait to visit again.",
    //     },
    //     {
    //       imgSrc: "https://readymadeui.com/team-3.webp",
    //       name: "Emily Davis",
    //       title: "Lifestyle Influencer",
    //       rating: 5,
    //       description:
    //         "From start to finish, everything was just perfect. The staff was friendly, and the food was divine. Highly recommended!",
    //     },
    //   ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        customPaging: (i) => (
            <button className="w-4 h-4 bg-gray-300 rounded-full hover:bg-purple-500 transition duration-300"></button>
        ),
        appendDots: (dots) => (
            <div className="mt-20 flex justify-center space-x-2">{dots}</div>
        ),
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-white w-full">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="w-full flex justify-center mb-5">
                    <Heading text={"Testimonial"} />
                </div>
                <BigHeading text={'What Our Customers Say'} />
                {/* <h2 className="text-2xl font-bold text-center text-gray-800 mb-8"></h2> */}
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4">
                            <TestimonialCard {...testimonial} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
}
