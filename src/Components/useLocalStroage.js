import { useEffect, useState } from "react";
const PREFIX = "codepen-clone";
function useLocalStorage(key, initialValue) {
  const prefixkey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(prefixkey);
    if (data != null) {
      return JSON.parse(data);
    }
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(prefixkey, JSON.stringify(value));
  }, [prefixkey, value]);
  return [value, setValue];
}

export default useLocalStorage;
