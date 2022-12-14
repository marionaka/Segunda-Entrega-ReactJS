
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import NavBar from "./Components/NavBar";
import PromocionApp from "./Components/PromocionApp";
import Error404 from "./Components/Error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <PromocionApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;