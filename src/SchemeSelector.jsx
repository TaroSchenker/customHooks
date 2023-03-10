import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Selector from "./Selector";

const SchemeSelector = () => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <Selector label="brands" />
      <Selector label="scales" />
      <Selector label="schemes" />
      <Selector label="Addresses" />
    </Box>
  );
};

export default SchemeSelector;
