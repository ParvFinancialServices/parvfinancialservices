import { Separator } from "@/components/ui/separator";
import { Step } from "./Step";

export const StepForm = ({ state, setState, step, readonly = false }) => {

  
  //current form step property name
  let currentStepName = Object.keys(state)[step];
  
  // console.log(state,currentStepName);
  return (
    <div className="flex flex-col gap-8 w-full p-4">
      {state[currentStepName] && state[currentStepName].sections.map((section, sectionIndex) => {
        return (
          <section
            className="flex flex-col gap-4"
            key={`${currentStepName}.section[${sectionIndex}]`}
          >
            <div className="flex flex-col gap-2">
              <h2>{section.title}</h2>
              <Separator className="w-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.fields.map((field, fieldInd) => (
                <Step
                  step={Object.keys(state)[step]}
                  sectionIndex={sectionIndex}
                  fieldInd={fieldInd}
                  field={field}
                  setState={setState}
                  key={`${sectionIndex}-${fieldInd}`}
                  state={state}
                  currentStepName={currentStepName}
                  readonly={readonly || field.disabled}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};
