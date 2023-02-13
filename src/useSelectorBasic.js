import { useState } from "react";

export function useSelector() {
  const [data, setData] = useState(["data1", "data2"]);
  const [selected, setSelected] = useState("");

  const setSelectedValue = (e) => {
    setSelected(e.target.value);
  };

  return { selected, data, setSelectedValue };
}
