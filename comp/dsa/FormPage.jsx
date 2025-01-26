import SignUpForm from "./DSASignUPForm";

export function HeaderSection() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-12 px-6">
            <h1 className="text-4xl font-bold mb-4">
                Apply to Become a DSA Partner
            </h1>
            <p className="text-lg">
                Join our network of professionals and help others get access to financial solutions while you earn and grow.
            </p>
        </div>
    );
}


export function FormInstructions() {
    return (
        <div className="bg-gray-50 py-8 px-6 text-center">
            <h2 className="text-2xl font-bold mb-4"> Apply For DSA </h2>
            <p className="text-gray-600">
                Fill out the form below with accurate details. Once submitted, our team will review your application and get back to you shortly.
            </p>
        </div>
    );
}



export function BenefitsSection() {
    const benefits = [
        {
            title: "Flexible Work",
            description: "Work at your own pace and convenience.",
            icon: "💼",
        },
        {
            title: "Earn More",
            description: "Gain commissions for every successful referral.",
            icon: "💰",
        },
        {
            title: "Exclusive Support",
            description: "Get access to dedicated resources and tools.",
            icon: "🤝",
        },
        {
            title: "Professional Growth",
            description: "Expand your network and financial expertise.",
            icon: "📈",
        },
    ];

    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Why Partner with Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 text-center"
                    >
                        <div className="text-4xl mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ApplyPage() {
    return (
        <div>
            <HeaderSection />
            <FormInstructions />
            {/* <BenefitsSection /> */}
            <SignUpForm />
            {/* <TestimonialsSection /> */}
            {/* <CallToAction /> */}
        </div>
    );
}
