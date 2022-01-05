
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import Footer from '../src/components/Footer/footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThemeComponent from './assets';
import HeaderComponent from './components/header_nav/nav';
import Section_1Component from './components/section_1/section_1';

const App=()=> {
  return (
          <ThemeProvider theme={ThemeComponent} >
             <HeaderComponent/>
             <Section_1Component/>
             <Footer/>
          </ThemeProvider>
         );
}

export default App;
