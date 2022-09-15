import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Featured from "./components/Featured/Featured";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Scrollup from "./components/Scrollup";
import Products from "./components/Product/Products";
import Review from "./components/Reviews/Review";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Featured />
        <Products />
        <Review />

        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
