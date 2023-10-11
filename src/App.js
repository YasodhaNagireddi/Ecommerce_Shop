import "./App.css";
// import react router dom
import { Route, Routes } from "react-router-dom";
//import pages
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

//import components
import HeaderComponent from "./components/HeaderComponent";
import SlidebarComponent from "./components/SidebarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div className="overflow-hidden">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
      <SlidebarComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
