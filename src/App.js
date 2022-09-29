import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from "react-router-dom";
import CoverBackGround from "./components/cover-backgrond/CoverBackGround";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MenuRight from "./components/menu-right/MenuRight";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { CoverBackGroundProvider } from "./context/CoverBackgroundContext";
import { MenuContextProvider } from "./context/MenuContext";
import AboutUs from "./page/aboutUs";
import AboutUsSub from "./page/aboutUsSubPage";
import ContactPage from "./page/contactPage";
import MainPage from "./page/mainPage";
import NewsPage from "./page/newsPage";
import ProductDetail from "./page/productDetail";
import ProductPage from "./page/productPage";

function Layout() {
  return (
    <>
      <CoverBackGroundProvider>
        <MenuContextProvider>
          <div className="relative bg-primaryBg App">
            <Header />
            <MenuRight />
            <MainPage />
            <Footer />
            <CoverBackGround />
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
            <Router basename={process.env.PUBLIC_URL}>
              <Header />
              <MenuRight />
              <ScrollToTop>
                <Switch>
                  <Route exact path="/">
                    <MainPage />
                  </Route>
                  <Route exact path="/about">
                    <AboutUs />
                  </Route>
                  <Route path="/news">
                    <NewsPage />
                  </Route>
                  <Route path="/contact">
                    <ContactPage />
                  </Route>
                  <Route path="/products">
                    <ProductPage />
                  </Route>
                  <Route path="/product/:id">
                    <ProductDetail />
                  </Route>
                  <Route path="/about-sub">
                    <AboutUsSub />
                  </Route>
                </Switch>
              </ScrollToTop>
              <Footer />
            </Router>
            <CoverBackGround />
          </div>
        </MenuContextProvider>
      </CoverBackGroundProvider>
    </>
  );
}

export default App;
