// export default function AboutHeader() {
//     return (
//         <header className="bg-blue-600 text-white py-6">
//             <div className="container mx-auto px-6">
//                 <h1 className="text-4xl font-bold">About PARV Financial Services</h1>
//                 <p className="text-lg mt-2">
//                     Empowering your financial journey with trusted solutions.
//                 </p>
//             </div>
//         </header>
//     );
// }


export default function AboutHeader() {
    return (
        <header className="bg-white border-b shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600">PARV Financial Services</h1>
                <nav className="space-x-6">
                    <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                    <a href="/about" className="text-gray-600 hover:text-blue-600">About</a>
                    <a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Get Started</button>
                </nav>
            </div>
        </header>
    );
}

