import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoverBackGround from "./components/cover-backgrond/CoverBackGround";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MenuRight from "./components/menu-right/MenuRight";
import {
  CoverBackGroundProvider
} from "./context/CoverBackgroundContext";
import { MenuContextProvider } from "./context/MenuContext";
import AboutUs from "./page/aboutUs";
import ContactPage from "./page/contactPage";
import MainPage from "./page/mainPage";
import NewsPage from "./page/newsPage";

function Layout() {
  return (
    <>
      <CoverBackGroundProvider>
        <MenuContextProvider>
          <div className="relative bg-primaryBg App">
            <Header />
            <MenuRight/>
            <MainPage/>
            <Footer/>
            <CoverBackGround/>
          </div>
        </MenuContextProvider>
      </CoverBackGroundProvider>
    </>
  );
}

function App() {
  return (
    <>
    <CoverBackGroundProvider>
        <MenuContextProvider>
          <div className="relative bg-primaryBg App">
            <Header />
            <Router basename={process.env.PUBLIC_URL}>
              <MenuRight/>
              <Switch>
                <Route exact path='/'>
                  <MainPage/>
                </Route>
                <Route  path='/about'>
                  <AboutUs/>
                </Route>
                <Route  path='/news'>
                  <NewsPage />
                </Route>
                <Route  path='/contact'>
                  <ContactPage />
                </Route>
              </Switch>
            </Router>
            <Footer/>
            <CoverBackGround/>
          </div>
        </MenuContextProvider>
      </CoverBackGroundProvider>
    
    </>
  );
}

export default App;
