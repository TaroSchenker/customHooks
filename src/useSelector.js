import { useEffect } from "react";
import { useState } from "react";

const brands = ["brand1", "brand2"];
const scales = ["scale1", "scale2"];
const schemes = ["scheme1", "scheme2"];

export function useSelector(label) {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (label === "brands") {
      setData(brands);
    }
    if (label === "scales") {
      setData(scales);
    }
    if (label === "schemes") {
      setData(schemes);
    }
  }, []);

  const setSelectedValue = (e) => {
    setSelected(e.target.value);
  };

  return { selected, data, setSelectedValue };
}
