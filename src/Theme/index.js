import { createTheme, ThemeProvider } from '@mui/material/styles';

let ThemeComponent = createTheme({

    palette: {
        primary: {
          light: '#8B93A7',
          main:  '#3f50b5',
          dark:  'black',
          contrastText: '#FFFFFF',
          lightgray:'#EFF2F7',
          lightblue:'#7073BE'
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#19233C', //darkblue
          contrastText: '#000',
        },
    },
})
export default ThemeComponent