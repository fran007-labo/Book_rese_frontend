import Button from '@mui/material/Button';

const style = {
  backgroundColor: 'primary.main',
  color: '#000',
  fontSize: 16,
  height: 48,
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