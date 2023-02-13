import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "./useSelector";

const Selector = (label) => {
  // WE DO NOT NEED THIS IN THE SELECTED, IT CAN BE HANDLED IN USESELECTOR INSTEAD
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  const { selected, data, setSelectedValue } = useSelector(label.label);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={label.label}
          onChange={(e) => setSelectedValue(e)}
        >
          {data &&
            data.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Selector;
