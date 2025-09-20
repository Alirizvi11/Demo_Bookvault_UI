import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBooks } from "./api"; // Your API call
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import AdminPanel from "./pages/AdminPanel";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import LoginForm from "./components/LoginForm";
import GenreBooksPage from "./components/GenreBooksPage";


function App() {
  const [books, setBooks] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard books={books} />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/genre/:genre" element={<GenreBooksPage books={books} />} />
        <Route
          path="/admin"
          element={
            isAdmin ? (
              <AdminPanel />
            ) : (
              <LoginForm onLogin={() => setIsAdmin(true)} />
            )
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
