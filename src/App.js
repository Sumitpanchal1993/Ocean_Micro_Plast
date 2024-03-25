import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Assembly/Navbar";
import Home from "./Assembly/Home";
import Product from "./Assembly/Product";
import Customer from "./Assembly/Customer";
import Contactus from "./Assembly/Contactus";
import Footer from "./Assembly/Footer";

function App() {
  return (
    <>
      <Router>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Product />}></Route>
            <Route path="/customer" element={<Customer />}></Route>
            <Route path="/contactus" element={<Contactus />}></Route>
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
