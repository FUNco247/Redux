import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/Home";
import { DetailPage } from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
