import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./Home";
import Pages from "./pages/pages";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merchant" element={<Pages />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { Merchant } from "./pages";
// import Home from "./Home"; // ✅ imported from index.jsx

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Main */}
//         <Route path="/" element={<Home />} />

//         {/* Business */}
//         {/* <Route path="/business-features" element={<BusinessFeatures />} /> */}
//         <Route path="/merchant" element={<Merchant />} />

//         {/* Individuals */}
//         {/* <Route path="/wallet" element={<Wallet />} />
//         <Route path="/prepaid-cards" element={<PrepaidCards />} /> */}

//         {/* Resources */}
//         {/* <Route path="/integration-guide" element={<IntegrationGuide />} />
//         <Route path="/api-docs" element={<ApiDocs />} />
//         <Route path="/faq" element={<Faq />} /> */}

//         {/* Support */}
//         {/* <Route path="/support" element={<Support />} /> */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
