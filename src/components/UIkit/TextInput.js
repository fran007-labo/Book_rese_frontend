import TextField from "@mui/material/TextField";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  full: {
    marginBottom: 16,
  },
  half: {
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 16,
    minWidth: 130,
    width: 'calc(50% - 16px)'
  }
})

export default function TextInput(props) {
  const classes = useStyles();
  const textStyle = props.fullWidth ? classes.full : classes.half;

  return (
    <TextField
      className={textStyle}
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
};
