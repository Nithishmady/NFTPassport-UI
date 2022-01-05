import { createTheme, ThemeProvider } from '@mui/material/styles';

let ThemeComponent = createTheme({

    palette: {
        primary: {
          light: '#8B93A7',
          main: '#3f50b5',
          dark: 'black',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
    },
})
export default ThemeComponent