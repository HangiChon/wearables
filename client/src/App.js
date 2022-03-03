import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Frontend/PageComponents/Homepage";
import styled from "styled-components";
import Header from "./Frontend/Header/Header";
import Footer from "./Frontend/Header/Footer";
import ProductDetails from "./Frontend/PageComponents/ProductDetails";
import Cart from "./Frontend/PageComponents/Cart";
import ShopByCategory from "./Frontend/PageComponents/ShopByCategory";
import ShopByBrand from "./Frontend/PageComponents/ShopByBrand";
import AllProducts from "./Frontend/PageComponents/AllProducts";
import Checkout from "./Frontend/PageComponents/Checkout";
import Confirmation from "./Frontend/PageComponents/Confirmation";
import Error from "./Frontend/PageComponents/Error";
function App() {
  const [cartDisplay, setCartdisplay] = useState(false);
  const handleClickOnCart = () => {
    setCartdisplay(!cartDisplay);
  };

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Cart cartDisplay={cartDisplay} handleClickOnCart={handleClickOnCart} />
      <Header cartDisplay={cartDisplay} handleClickOnCart={handleClickOnCart} />
      {/* //should contain the cart as well // maybe some account section link for
      //stretch goals */}
      <MainWrapper>
        <Routes>
          <Route 
            exact path="/" 
            element={<AllProducts />} />
          <Route 
            path="/category/:categoryName" 
            element={<ShopByCategory />} 
          />
            
          <Route 
            path="/brands/:brandName" 
            element={<ShopByBrand />}
          />
            
          <Route 
            exact path="/products"
            element={<AllProducts />}
          /> 
          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          />

          <Route 
            exact path="/checkout"
            element={<Checkout />}
          />
          <Route 
            exact path="/confirmation"
            element={<Confirmation />}
          />
          <Route 
            exact path="/error"
            element={<Error />}
          />
        </Routes>
      </MainWrapper>
      {/* // end of the main section */}
      <Footer />
    </BrowserRouter>
  );
}

const MainWrapper = styled.div``;
export default App;
