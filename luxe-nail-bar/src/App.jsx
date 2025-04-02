import { useState } from "react";
import HomePage from "./HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("index");

  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
