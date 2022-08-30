import { makeStyles } from '@mui/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: 16,
    minWidth: 120,
    width: "100%"
  }
}));

export default function SelectBox(props) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel >{props.label}</InputLabel>
      <Select
        value={props.value} required={props.required}
        onChange={(e) => props.select(e.target.value)}
      >
        {props.options.map((value) => {
          return <MenuItem key={value.id} value={value.id}>{value.name}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
};