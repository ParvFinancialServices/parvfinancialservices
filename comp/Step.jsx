import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { set } from "lodash";
import File from "./File";
import { Checkbox } from "@/components/ui/checkbox";

export const Step = ({
  sectionIndex,
  fieldInd,
  toggleFieldInd,
  field,
  setState,
  step,
  state,
  currentStepName,
  readonly = false,
}) => {
  // function to change state for form elements
  let onChange = (key, value) => {
    console.log(key, value);
    setState((state) => {
      let newState = { ...state };
      set(newState, `${key}.value`, value);
      return newState;
    });
  };

  // key of form element used for key and state change
  let key = !isNaN(Number(toggleFieldInd))
    ? `${currentStepName}.sections[${sectionIndex}].fields[${fieldInd}].fields[${toggleFieldInd}]`
    : `${currentStepName}.sections[${sectionIndex}].fields[${fieldInd}]`;

  // console.log(field);
  switch (field.type) {
    case "String":
      return (
        <div className="flex flex-col gap-2" key={key}>
          <Label className="font-light" htmlFor={field.name}>
            {field.label}
          </Label>
          <Input
            id={field.name}
            value={field.value}
            onChange={(e) => onChange(key, e.target.value)}
            disabled={readonly}
          />
          {field.error ? (
            <div>
              <p className="text-xs text-red-500">{field.error}</p>
            </div>
          ) : null}
        </div>
      );
    case "Date":
      return (
        <div className="flex flex-col gap-2" key={key}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            type="date"
            onChange={(e) => {
              if (field.onChange) {
                if (field.onChange(e)) {
                  onChange(key, e.target.value);
                }
              } else {
                onChange(key, e.target.value);
              }
            }}
            value={field.value}
            disabled={readonly}
          />
          {field.error ? (
            <div>
              <p className="text-xs text-red-500">{field.error}</p>
            </div>
          ) : null}
        </div>
      );
    case "Option":
      console.log(field.type);
      return (
        <div className="flex flex-col gap-2 w-full" key={key}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Select
            id={field.name}
            onValueChange={(e) => onChange(key, e)}
            disabled={readonly}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={field.value ? field.value : field.options[0].label}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {field.options.map((option) => (
                  <SelectItem value={option.label} key={option.label}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {field.error ? (
            <div>
              <p className="text-xs text-red-500">{field.error}</p>
            </div>
          ) : null}
        </div>
      );
    case "Binary":
      return (
        <div className="flex flex-col col-span-3 gap-4" key={key}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <RadioGroup
            disabled={readonly}
            value={field.value ? field.value : "No"}
            className="flex flex-row gap-4 items-center"
            onValueChange={(e) => onChange(key, e)}
          >
            {field.options != undefined ? (
              field.options.map((e) => {
                return (
                  <div className="flex items-center space-x-2">
                    <Label>
                      <RadioGroupItem value={e} /> {e}
                    </Label>
                  </div>
                );
              })
            ) : (
              <>
                <div className="flex items-center space-x-2">
                  <Label>
                    <RadioGroupItem value="Yes" /> Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Label>
                    <RadioGroupItem value="No" id="r2" /> No
                  </Label>
                </div>
              </>
            )}
          </RadioGroup>
          <div className="grid grid-cols-3 gap-6">
            {(field.value == "Yes" ||
              (field.options && field.value == field.options[0])) &&
              field.fields &&
              field.fields.map((e, toggleFieldInd) => {
                return (
                  <Step
                    readonly={readonly}
                    step={Object.keys(state)[step]}
                    sectionIndex={sectionIndex}
                    toggleFieldInd={toggleFieldInd}
                    fieldInd={fieldInd}
                    field={e}
                    setState={setState}
                    key={`${sectionIndex}-${fieldInd}-${toggleFieldInd}`}
                    currentStepName={currentStepName}
                    state={state}
                  />
                );
              })}
          </div>
          <Separator />
        </div>
      );
    case "File":
      return (
        <File
          itemKey={key}
          field={field}
          setState={setState}
          disabled={readonly}
        />
      );
    case "Text":
      return (
        <div className="col-start-1 col-end-4 ">
          <div
            className="flex gap-4 flex-col text-gray-600"
            dangerouslySetInnerHTML={{ __html: field?.data }}
          />
        </div>
      );
    case "Check":
      return (
        <div className="flex items-center pb-3">
          <div className="flex items-end space-x-2">
            <Checkbox
              id={field.name}
              checked={field.value}
              onCheckedChange={(isChecked) =>
                setState(field.onChange(isChecked, state))
              }
            />
            <label
              htmlFor={field.name}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {field.label}
            </label>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex flex-col gap-2" key={key}>
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            value={field.value}
            onChange={(e) => {
              console.log("dfault");
              onChange(key, e);
            }}
            disabled={readonly}
          />
        </div>
      );
  }
};
