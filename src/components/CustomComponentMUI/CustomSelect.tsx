import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

 const CustomSelect = styled(InputBase)(({ theme }) => ({
  // 'label + &': {
  //   marginTop: theme.spacing(3),
  // },
  '& .MuiInputBase-input': {
    backgroundColor: 'transparent',
    border: '1px solid #F5F5F5',
    color: '#F5F5F5',
    // padding: '10px 26px 10px 12px',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  '& .MuiSvgIcon-root': {
    color: '#F5F5F5'
  }
}));

export default CustomSelect;
