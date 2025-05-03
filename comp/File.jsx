import { upload_doc } from "@/api/file_action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { set } from "lodash";

const Icons = ({ fill }) => {
  return (
    <svg
      fill={fill}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
  );
};

export default function File({ field, itemKey, setState, disabled }) {
  let onChange = (e) => {
    console.log(e, itemKey);
    let reader = new FileReader();
    reader.onload = async function (result) {
      let res = await upload_doc({
        file: result.target.result,
        folder: field.name,
      });
      // let res = { public_id: "12345asd" };
      console.log("file upload successful! ", res);
      setState((state) => {
        set(state, `${itemKey}.value`, res.secure_url);
        return { ...state };
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="flex flex-col gap-2 w-full" key={itemKey}>
      <Label htmlFor={field.name}>{field.label}</Label>
      {field.value ? <img src={field.value} className="h-auto w-full" /> : null}
      <div className="flex w-full items-center gap-2">
        <Input
          id={field.name}
          className="flex-1 "
          type="file"
          onChange={onChange}
          disabled={disabled}
          accept=".pdf,.png,.jpg"
          required
        />

        <div className="h-5 aspect-square w-5">
          {field.value ? <Icons fill="blue" /> : null}
        </div>
      </div>
    </div>
  );
}
