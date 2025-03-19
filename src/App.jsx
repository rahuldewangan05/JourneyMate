import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateTrip from "./pages/CreateTrip/CreateTrip";
import Header from "./components/Header/Header";
import { Toaster } from "./components/ui/sonner";
import ViewTrip from "./pages/ViewTrip/[tripId]/ViewTrip";
import MyTrip from "./pages/MyTrip/MyTrip";

// Method-1 for Routing
// const routes = createBrowserRouter([
//   { path: "/", element: <Home /> },
//   { path: "/create-trip", element: <CreateTrip /> },
// ]);

// Method-2 for Routing
const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/create-trip" exact element={<CreateTrip />} />
      <Route path="view-trip/:tripId" element={<ViewTrip />} />
      <Route path="/my-trips" element={<MyTrip />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>
      {/* Method -1 Routing */}
      {/* <RouterProvider router={routes} /> */}
      <Header />
      <Toaster />
      {routes}
    </div>
  );
};

export default App;
