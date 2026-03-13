import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ProjectList from "./pages/ProjectList";
import DPRForm from "./pages/DPRForm";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/dpr/:id" element={<DPRForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;