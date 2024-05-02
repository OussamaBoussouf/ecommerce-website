import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "@stripe/stripe-js";
import Success from "./pages/SuccessPage/Success";
import ScrollToTop from "./util/ScrollToTop";

function App() {
  const Layout = () => {
    return (
      <>
        <ScrollToTop />
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/products/:id",
          element: <Products />,
        },
        {
          path: "/success",
          element: <Success />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
