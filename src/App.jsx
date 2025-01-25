import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";
import  ThemeContext  from "./context/ThemeContext"; // Import ThemeContext
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Navbar from "./components/Navbar";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div className="w-full h-full flex flex-col">
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="dark:bg-gray-900 dark:text-white h-dvh"> {/* Conditionally apply the 'dark' class */}
      <RouterProvider router={router} className="dark:bg-gray-900 dark:text-white"/>
    </div>
  );
}

export default App;
