import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import { NoPage } from "./pages/NoPage";
import TaskPage from "./pages/Task";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
