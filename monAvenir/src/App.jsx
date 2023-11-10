import { useState } from "react";
import LoadingPage from "./pages/LoadingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 6000);

  return (
    <>
      {loading ? <LoadingPage /> :
        <Router>
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      }
    </>
  )
}

export default App
