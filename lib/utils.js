import { clsx } from "clsx";
import { cloneDeep, forOwn, get, isObject, set, unset } from "lodash";
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
      connector_name: get(e.data, list[1]),
      connector_id: get(e.data, list[0]),
      edit: "edit",
    });
  });
  console.log(result);

  return result;
};

export const makeBreadcrumItem = (value) => {
  let arr = value.split("_");
  arr = arr.map((e) => e.charAt(0).toUpperCase() + e.slice(1));
  return arr.join(" ");
};

export const extractParticularField = (fieldStr, data) => {
  let result = ["all"];
  console.log(data);
  data.forEach((e) => {
    let val = get(e.data, fieldStr);
    val && !result.includes(val) ? result.push(val) : null;
  });
  return result;
};

export const makeSelectableState = (obj) => {
  let keys = Object.keys(obj);
  let result = {};
  keys.forEach((key) => {
    obj[key].forEach((elem, ind) => {
      result[key]
        ? result[key].push({ isChecked: ind == 0 ? true : false, value: elem })
        : ((result[key] = []),
          result[key].push({
            isChecked: ind == 0 ? true : false,
            value: elem,
          }));
    });
  });
  console.log("result", result);
  return result;
};

export const multiValueFilter = (row, columnId, filterValue) => {
  console.log(filterValue);
  if (filterValue.includes("all")) {
    return true;
  }
  const rowValue = row.getValue(columnId);
  return filterValue.includes(rowValue);
};

export const getUsername = (role, length) => {
  let result = "";
  switch (role) {
    case "Telecaller":
      result = "TC" + String(length).padStart(4, 0);
      break;
    case "RM":
      result = "RM" + String(length).padStart(4, 0);
      break;
    case "Field Staff":
      result = "FS" + String(length).padStart(4, 0);
      break;
  }

  return result;
};

export const getLoanType = (type, length) => {
  let result = {
    key: "",
    value: "",
  };
  switch (type) {
    case "Personal":
      result.key = "personal_loans";
      result.value = "PL" + String(length).padStart(5, 0);
      break;
    case "Home":
      result.key = "home_loans";
      result.value = "HL" + String(length).padStart(5, 0);
      break;
    default:
      result.key = "personal_loans";
      result.value = "PL" + String(length).padStart(5, 0);
      break;
  }

  return result;
};

export const updateErrors = (state, validationErrors, e) => {
  let newState = cloneDeep(state);
  console.log("this is the newState", { ...newState });

  // we are removing any error values present in the object
  validationErrors.forEach((err) => {
    console.log(err.path);
    let path = err.path.split(".");
    path.pop();
    path = path.join(".");
    unset(newState, `${path}.error`);
  });
  console.log("this is the state after error removal", {
    ...newState,
  });

  // we are adding the necessary error values in the object
  e.inner.forEach((err) => {
    console.log(err.path);
    let path = err.path.split(".");
    path.pop();
    path = path.join(".");
    set(newState, `${path}.error`, err.message);
  });
  console.log("this is after error addition", { ...newState });

  return newState;
};
