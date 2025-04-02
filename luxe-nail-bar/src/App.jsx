import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage";
import ServicesPage from "./ServicesPage";
import BeverageMenuPage from "./BeverageMenuPage";
import HealthAndSafetyPage from "./HealthAndSafetyPage";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header setPage={setPage} />
      {page === "home" && <HomePage />}
      {page === "about-us" && <AboutUsPage />}
      {page === "services" && <ServicesPage />}
      {page === "beverage-menu" && <BeverageMenuPage />}
      {page === "health-and-safety" && <HealthAndSafetyPage />}
      <Footer setPage={setPage} />
    </>
  );
}

export default App;
