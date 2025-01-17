import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// components/InputField.jsx
const InputField = ({ label, type, name, value, onChange, placeholder }) => (
    <div className="mb-4 w-full">
        <Label htmlFor={name} className="block text-sm font-medium text-red-700">
            {label}
        </Label>
        <Input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className=" block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
        />
    </div>
);

export default InputField;
