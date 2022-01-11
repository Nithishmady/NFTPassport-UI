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
import { Cirecle_paywall } from './components/Circle-page/Circle';
import Section_3 from './components/section_3/section_3';
import Section_2 from './components/section_2/section_2';
import Section_1Component from './components/section_1/section_1';
import HeaderComponent from './components/header_nav/header_nav/nav';

const App=()=> {
  return (
   <>
   <ThemeProvider theme={ThemeComponent} >
     <HeaderComponent/>
     <Section_1Component/>
     <Section_2/>
     <Section_3/>
     <Cirecle_paywall/>
     <Categories_list/>
     <PictureContent/>
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




