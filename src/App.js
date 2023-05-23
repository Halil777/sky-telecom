import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Compony from "./pages/company/Compony";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Products />
      <Compony />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
