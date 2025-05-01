import { Label } from '@/components/ui/label';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange, name }) => {
    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            ['clean'],
        ],
    };

    const formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'color',
        'background',
        'list',
        'bullet',
        'blockquote',
        'code-block',
        'link',
        'image',
    ];

    return (
        <div className='my-4'>
            <Label className="block text-gray-600 font-medium mb-2">Content</Label>
            <ReactQuill
                theme="snow"
                value={value}
                name={name}
                onChange={onChange}
                modules={modules}
                formats={formats}
                style={{ height: "10rem", marginBottom: "5rem", border: "none" }}
                className="bg-white border border-gray-300 rounded-md min-h-[900px]"
            />
        </div>
    );
};

export default RichTextEditor;
