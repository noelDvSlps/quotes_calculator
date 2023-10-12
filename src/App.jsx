import "./App.css";
import "./responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavbarProvider } from "./providers/navbarProvider";
import ScrollToTop from "./helpers/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { Items } from "./pages/Items";
import { Quotes } from "./pages/Quotes";

function App() {
  return (
    <NavbarProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar>
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path="/" element={<Items />} />
            <Route path="/quotes" element={<Quotes />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </NavbarProvider>
  );
}

export default App;
