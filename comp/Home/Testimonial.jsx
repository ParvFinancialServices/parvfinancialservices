
import React from "react";

const TestimonialCard = ({ name, avatar, rating, text }) => {
    return (
        <div className="min-w-[300px] bg-white shadow-lg rounded-lg p-6 snap-start">
            <div className="flex items-center space-x-4">
                <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-yellow-500">{rating}</p>
                </div>
            </div>
            <p className="mt-4 text-gray-600">{text}</p>
        </div>
    );
};

const testimonials = [
    {
        name: "Katie",
        avatar: "https://via.placeholder.com/50",
        rating: "★★★★★",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
    },
    {
        name: "John",
        avatar: "https://via.placeholder.com/50",
        rating: "★★★★★",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
    },
    {
        name: "Emma",
        avatar: "https://via.placeholder.com/50",
        rating: "★★★★★",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
    },
];

const TestimonialSection = () => {
    return (
        <section className="bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl mb-8">
                    Read trusted reviews from our customers
                </h2>
                <div className="relative overflow-x-auto">
                    <div className="flex space-x-4 snap-x snap-mandatory scrollbar-hide">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                avatar={testimonial.avatar}
                                rating={testimonial.rating}
                                text={testimonial.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

