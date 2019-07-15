import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    height: "55px",
    borderRadius: 5,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "0px 25px 0px 10px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  sizeform: {
    margin: 0,
    width: "100%",
  }
}));

export default function CustomizedSelects(props) {
  const classes = useStyles();
  const handleChange = event => {
    props.onChange(event);
  };
  return (
    <div className={classes.root}>
      <FormControl className={classes.sizeform}>
        <NativeSelect
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option value={0}>N/A</option>
          <option value={1}>S</option>
          <option value={2}>M</option>
          <option value={3}>L</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
