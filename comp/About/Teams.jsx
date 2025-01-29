export default function Team() {
    return (
        <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
                <p className="text-gray-600 mt-4">
                    Our team of experienced professionals is dedicated to guiding you through every step of your financial journey.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {[
                        { name: 'John Doe', position: 'CEO' },
                        { name: 'Jane Smith', position: 'CFO' },
                        { name: 'Alex Johnson', position: 'Loan Specialist' },
                    ].map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="h-24 w-24 mx-auto bg-gray-300 rounded-full mb-4"></div>
                            <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                            <p className="text-blue-600">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
