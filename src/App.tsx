import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const AddBookPage = lazy(() => import("./pages/AddBookPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/create-event" element={<AddBookPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
