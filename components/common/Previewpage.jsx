import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const FormPreviewPage = () => {
    // const [formData, setFormData] = useState(null);
    // const router = useRouter();

    // // Fetch form data from localStorage
    // useEffect(() => {
    //     const savedData = localStorage.getItem('formData');
    //     if (savedData) {
    //         setFormData(JSON.parse(savedData));
    //     } else {
    //         router.push('/'); // Redirect to the form if no data is found
    //     }
    // }, [router]);

    // // Handle form submission
    // const handleSubmit = () => {
    //     // Clear data from localStorage upon submission
    //     localStorage.removeItem('formData');
    //     alert('Form submitted successfully!');
    // };

    // // Handle editing (go back to form)
    // const handleEdit = () => {
    //     router.push('/form'); // Redirect to the form page
    // };

    // // If formData is null or not loaded yet, show a loading state
    // if (!formData) return <div>Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto p-6 border rounded-lg shadow-md bg-white">
            <h2 className="text-2xl font-semibold mb-6">Form Preview</h2>
            <div className="space-y-4">
                <div className='border-b flex justify-between'>
                    <p className="font-bold">Name:</p>
                    {/* <p>{formData.name}</p> */}
                    <p>Abhishek Kumar</p>
                </div>
                <div>
                    <p className="font-bold">Email:</p>
                    {/* <p>{formData.email}</p> */}
                </div>
                <div>
                    <p className="font-bold">Address:</p>
                    {/* <p>{formData.address}</p> */}
                </div>
                <div>
                    <p className="font-bold">City:</p>
                    {/* <p>{formData.city}</p> */}
                </div>
                <div>
                    <p className="font-bold">Newsletter Subscription:</p>
                    {/* <p>{formData.newsletter ? 'Subscribed' : 'Not Subscribed'}</p> */}
                </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
                <button
                    // onClick={handleEdit}
                    className="p-2 bg-gray-500 text-white rounded"
                >
                    Edit
                </button>
                <button
                    // onClick={handleSubmit}
                    className="p-2 bg-green-500 text-white rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default FormPreviewPage;
