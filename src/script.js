import React, { Suspense, lazy }  from "react";
import ReactDOM from "react-dom/client";
import Header from "./comp/Header";
import Body from "./comp/Body";
import Footer from "./comp/footer";
import About from "./comp/about";
import Error from "./comp/error";
import Contact from "./comp/contact";
import RestaurantMenu from "./comp/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Shimmer from "./comp/Shim";

const Instamart = lazy(() => import("./comp/instamart"))

const AppLayout = () => {
    return(
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />
      },
      {
        path: "/Restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback = {<Shimmer />}>
            <Instamart />
          </Suspense>
        )
      }
    ]
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);
