import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import StartPage from "./pages/StartPage";
import Home from "./pages/Home";
import HowPlay from "./pages/HowPlay";
import {Categories} from "./pages/Categories";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <StartPage />,
        },
        {
          path: "how-play",
          element: <HowPlay />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
