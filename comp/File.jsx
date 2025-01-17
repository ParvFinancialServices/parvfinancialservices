import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { set } from "lodash";


const Icons = ({ fill }) => {
    return (
        <svg fill={fill} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
    )
};


export default function File({ field, itemKey, setState }) {
    // console.log("key:",itemKey);
    return <div className="flex flex-col gap-2 w-full" key={itemKey} >
        <Label htmlFor={field.name}>{field.label}</Label>
        <div className="flex w-full items-center gap-2">

            <Input id={field.name} className="flex-1 " type="file" accept=".pdf,.png,.jpg" required onChange={(e) => {
                // todo : file upload
                console.log(e, itemKey);
                setState(state => {
                    let newState = { ...state };
                    set(newState, `${itemKey}.value`, "rishab");
                    console.log(itemKey, newState);
                    return newState;
                })
            }} />
            <div className="h-5 aspect-square w-5">

                {
                    field.value ? <Icons fill="blue" /> : null
                }
            </div>
        </div>
    </div>
}