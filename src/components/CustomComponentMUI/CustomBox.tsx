import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    width: '30px',
    height: '30px',
    marginRight: '10px',
    cursor: 'pointer',
    color: '#000',
  },
  '& ul': {
    width: '200px',
    padding: '10px',
    background: '#fff',
    listStyle: 'none',
    margin: 0,
  },
});

export default CustomBox;