import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material'

const style = {
  // "button": { 
  backgroundColor: 'primary.main',
  color: '#000',
  fontSize: 16,
  height: 48,
  marginBottom: 16,
  width: 256, 
  "&:hover": {
    backgroundColor: 'primary.light',
  }
}
const PrimaryButton = (props) => {

  return (
    <Button sx={{...style}} variant="contained" onClick={() => props.onClick()}>
      {props.label}
    </Button>
  );
};

export default PrimaryButton;