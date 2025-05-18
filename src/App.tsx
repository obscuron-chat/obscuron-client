import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from "./pages/MainPage.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/chat" replace />} />
      </Routes>
    </Router>
  );
}

export default App