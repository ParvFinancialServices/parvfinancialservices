// components/BlogForm.jsx
import { useState } from 'react';
// import InputField from './InputField';
// import SubmitButton from './SubmitButton';
// import { db } from '@/lib/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { storage, db } from "@/lib/firebaseConfig";
import InputField from './InputFields';
import SubmitButton from './SubmitButton';
import QuillEditor from './Editor';
import ImageUpload from './ImageUpload';

const AddBlogForm = () => {
    const [uploading, setUploading] = useState(false);
    console.log(uploading);

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        content: '',
        tags: '',
        date: '',
        imageUrl: null
    });

    console.log(formData);

    const uploadImageToFirebase = async (file) => {
        const storageRef = storage.ref();
        const imageRef = storageRef.child(`blogs/${file.name}`);
        const uploadTask = imageRef.put(file);

        // Monitor upload progress
        setUploading(true);
        return new Promise((resolve, reject) => {
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    // You can track progress here if needed
                },
                (error) => {
                    reject(error);
                },
                async () => {
                    // Get the download URL
                    const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                    resolve(downloadURL);
                }
            );
        });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleContentChange = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            content: value,
        }));
    };

    const handleImageUpload = (url) => {
        setFormData((prevState) => ({
            ...prevState,
            imageUrl: url, // Set the uploaded image URL
        }));
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await addDoc(collection(db, 'blogs'), {
    //             ...formData,
    //             tags: formData.tags.split(',').map((tag) => tag.trim()), // Convert tags to an array
    //             date: formData.date || new Date().toISOString(),
    //         });
    //         alert('Blog added successfully!');
    //         setFormData({ title: '', author: '', content: '', tags: '', date: '' });
    //     } catch (error) {
    //         console.error('Error adding blog: ', error);
    //     }
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            // Upload image to Firebase Storage and get the URL
            let imageUrl = null;
            if (formData.image) {
                imageUrl = await uploadImageToFirebase(formData.image);
            }
            console.log(imageUrl);


            // Save title, content, and image URL to Firestore
            // await db.collection("blogs").add({
            //     title: formData.title,
            //     content: formData.content,
            //     imageUrl: imageUrl,
            //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            // });

            const blogCollection = collection(db, "blogs"); // Use collection() to access the "blogs" collection
            await addDoc(blogCollection, {
                title: formData.title,
                content: formData.content,
                imageUrl: imageUrl,
                // createdAt: serverTimestamp(),
            });


            alert("Blog post added successfully!", blogCollection);
            setFormData({ title: "", content: "", image: null });
        } catch (error) {
            console.error("Error uploading blog post: ", error);
            alert("Error uploading blog post. Please try again.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-10 p-4 border rounded-md shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Add a New Blog</h2>
            <div className='flex gap-4 mb-4'>
                <InputField
                    label="Title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter blog title"
                />
                <InputField
                    label="Author"
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Enter author name"
                />
            </div>
            <div className='flex gap-5'>
                <InputField
                    label="Tags"
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="Comma-separated tags (e.g., tech, programming)"
                />
                <div className='w-full'>
                    <ImageUpload
                        setCoverImage={handleImageUpload}
                    />

                </div>

            </div>
            <div className='mb-4'>
                <QuillEditor
                    label="Content"
                    type="text"
                    name="content"
                    value={formData.content}
                    onChange={handleContentChange}
                />
            </div>




            <div className='flex justify-end'>
                <SubmitButton label="Add Blog" />
            </div>
        </form>
    );
};

export default AddBlogForm;
