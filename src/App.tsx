import { lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddBookPage = lazy(() => import("./pages/AddBookPage/AddBookPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/add-book" element={<AddBookPage />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
