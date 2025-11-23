import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal/Home";
import Header from "./components/Header/Header";
import Vitrine from "./pages/Vitrine/Vitrine";
import Carousel from "./carousel.jsx"; 
import Footer from "./components/footer/footer.jsx";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Carousel />
              <PaginaPrincipal/>
            </>
          }
        />
        <Route path="/vitrine" element={<Vitrine />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;