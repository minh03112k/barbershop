import { Select, SelectProps, Theme } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles<Theme>((theme) => ({
  select: {
    '&:focus': {
      borderColor: '#F5F5F5',
      color: '#F5F5F5',
    },
    '&:hover:not(.Mui-disabled)': {
      borderColor: '#F5F5F5',
      color: '#F5F5F5',
    },
    '& .MuiSelect-root': {
      borderColor: '#F5F5F5',
      color: '#F5F5F5',
    },
  },
}));

interface CustomSelectProps extends SelectProps {}

function CustomSelect(props: CustomSelectProps) {
  const classes = useStyles();

  return (
    <Select
      classes={{ select: classes.select }}
      {...props}
    >
      {/* options */}
    </Select>
  );
}

export default CustomSelect;