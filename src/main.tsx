import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BookProvider } from "./context/BookContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </StrictMode>
);
