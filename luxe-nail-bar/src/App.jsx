import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage";
import ServicesPage from "./ServicesPage";
import BeverageMenuPage from "./BeverageMenuPage";
import HealthAndSafetyPage from "./HealthAndSafetyPage";

function App() {
  const [page, setPage] = useState("home");

  const pages = {
    home: <HomePage />,
    "about-us": <AboutUsPage />,
    services: <ServicesPage />,
    "beverage-menu": <BeverageMenuPage />,
    "health-and-safety": <HealthAndSafetyPage />,
  };

  return (
    <>
      <Header setPage={setPage} />
      <AnimatePresence mode="wait">
        <PageWrapper key={page}>{pages[page]}</PageWrapper>
      </AnimatePresence>
      <Footer setPage={setPage} />
    </>
  );
}

export default App;
