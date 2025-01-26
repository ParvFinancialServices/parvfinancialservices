import { clsx } from "clsx";
import { forOwn, isObject, unset } from "lodash";
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
