import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/index";
import Dashboard from "./pages/dashboard/index";
import { AuthProvider } from "./contexts/authContext";

function App() {

  return (
    <div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<Auth />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App
