import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GiftProvider } from "./context/GiftContext";
import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import FormPage from "./pages/FormPage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <GiftProvider>
      <Router>
        <NavBar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/add" element={<FormPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </GiftProvider>
  );
}

export default App;
