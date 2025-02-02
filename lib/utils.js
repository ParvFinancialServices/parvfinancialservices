import { clsx } from "clsx";
import { forOwn, get, isObject, unset } from "lodash";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const removeProperty = (obj, propertyToRemove) => {
  forOwn(obj, (value, key) => {
    if (key === propertyToRemove) {
      unset(obj, key);
    } else if (isObject(value)) {
      removeProperty(value, propertyToRemove);
    }
  });
};

export const extractTableData = (data, list, type) => {
  console.log(data, list, type);
  let result = [];
  data.forEach((e) => {
    result.push({
      type: type,
      loanid: e.id,
      name: get(e.data, list[2]),
      date: get(e.data, list[0]),
      connector_id: get(e.data, list[1]),
      edit: "edit",
    });
  });
  console.log(result);

  return result;
};
