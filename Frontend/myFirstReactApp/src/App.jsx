
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contect from "./Pages/Contect";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Register from "./Pages/Register";

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/countectUS" element={<Contect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
