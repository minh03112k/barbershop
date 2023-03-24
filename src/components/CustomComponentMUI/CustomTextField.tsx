import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#F5F5F5',
  },
  '& .MuiInputBase-input': {
    color: '#F5F5F5',
  },
});

export default CustomTextField;
