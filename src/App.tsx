import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import EditBookPage from "./pages/EditBookPage";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddBookPage = lazy(() => import("./pages/AddBookPage/AddBookPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<Dashboard />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/edit/:bookID" element={<EditBookPage />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
