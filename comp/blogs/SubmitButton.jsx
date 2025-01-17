import { Button } from "@/components/ui/button";

// components/SubmitButton.jsx
const SubmitButton = ({ label, onClick }) => (
    <Button
        onClick={onClick}
        className="bg-blue-500 text-white mt-4 hover:bg-blue-600"
    >
        {label}
    </Button>
);

export default SubmitButton;
