import { Label } from "@/components/ui/label";

const ImageUpload = ({ setCoverImage }) => {
    const handleImageChange = (e) => {
        setCoverImage(e.target.files[0]);
    };

    return (
        <div>
            <Label className="block text-gray-600 font-medium mb-2">Cover Image</Label>
            <input
                type="file"
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                accept="image/*"
            />
        </div>
    );
};

export default ImageUpload;
