import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./pages/PaginaPrincipal/Home";
import Header from "./components/Header/Header";
import Vitrine from "./pages/Vitrine/Vitrine";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <PaginaPrincipal
              ProdutoInicial1="https://berzerk.com.br/cdn/shop/files/Futurepreto_bbaa6eb1-ef52-473b-bf95-4bca15fc69f0_1000x.png?v=1760310708"
              ProdutoInicial2="https://berzerk.com.br/cdn/shop/files/VegetaBranco_cbbf536e-4ed5-48ef-89a2-eb950c0427d0_1000x.png?v=1760310584"
              ProdutoInicial3="https://berzerk.com.br/cdn/shop/files/shenlong_2b7bca5e-a1c2-4a9a-8b36-db27d20b26bc_1000x.png?v=1760310574"
              Mensagem="SEJA BEM VINDO!!"
            />
          }
        />
        <Route path="/vitrine" element={<Vitrine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;