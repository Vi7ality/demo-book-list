import { Suspense } from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <main
          style={{
            flex: "1 0 auto", // Ensures the main content grows to fill available space
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default SharedLayout;
