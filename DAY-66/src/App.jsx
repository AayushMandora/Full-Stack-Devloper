import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Aboutp from "./components/Aboutp";
import Usern from "./components/Usern";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <Aboutp />
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <NavBar />
          <Usern />
        </>
      ),
    },
    {
      path: "/user",
      element: (
        <>
          <NavBar />
          <Usern />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
