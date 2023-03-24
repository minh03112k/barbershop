import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField) ({
  '& .MuiInput-underline': {
    borderBottomColor: '#F5F5F5',
  },
  '& .MuiOutlinedInput-root': {
    color: '#F5F5F5',
  }
})

export default CustomTextField;