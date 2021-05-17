import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const currencies = [
  {
    value: "5",
    label: "5",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "50",
    label: "50",
  },
];

const Form = ({ onInputChange, onSelectChange }) => {
  const [currency, setCurrency] = React.useState("20");
  const [inputText, setInputText] = useState("");

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
  }));

  //   Checkbox function
  const handleChange = (event) => {
    setCurrency(event.target.value);

    onSelectChange(event.target.value);
  };

  // styles initialization
  const classes = useStyles();

  // on input text change
  const onChange = (e) => {
    setInputText(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{ margin: "35px 0px" }}
    >
      <TextField
        id="standard-basic"
        label="Search For Images"
        value={inputText}
        onChange={onChange}
      />

      <TextField
        id="standard-select-img-amount"
        select
        label="Select"
        value={currency}
        onChange={handleChange}
        helperText="Amount of images"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
};

export default Form;
