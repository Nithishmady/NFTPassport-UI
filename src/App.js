import './App.css';
// import 'bootstrap/dist/css/bootstrap.css'; 
import Footer from './components/Footer/footer';
import PricingContent from './components/pricing-plan/pricing';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThemeComponent from './Theme';
import Cloneabout from './components/about-NFT/cloneAbout';
import RowAndColumnSpacing from './components/question/question';
import { Features } from './components/features-page/features';
import Access_properties from './components/access-cards/accessDesign';
import Categories_list from './components/categories/category';
import { PictureContent } from './components/picture-page/picturePage';
import Section4 from './components/session';


const App=()=> {
  return (
   <>
   <ThemeProvider theme={ThemeComponent} >
     <PictureContent/>
     <Categories_list/>
     <Access_properties/>
     <Section4/>
     <Features/>
     <RowAndColumnSpacing/>
     <PricingContent/>
     <Cloneabout/>
     <Footer/>
 </ThemeProvider>
   </>

  );
}

export default App;




