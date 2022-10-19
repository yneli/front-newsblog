import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6a1b9a',
    },
    secondary: purple
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 400,
    },
  },
});