import './App.css';
// import 'bootstrap/dist/css/bootstrap.css'; 
import Footer from './components/Footer/footer';
import PricingContent from './components/pricing-plan/pricing';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThemeComponent from './assets';
import Cloneabout from './components/about-NFT/cloneAbout';

const App=()=> {
  return (
   <>
   
   <ThemeProvider theme={ThemeComponent} >
     {/* <PricingContent/> */}
   <Cloneabout/>
    <Footer/>
 </ThemeProvider>
   </>

  );
}

export default App;




