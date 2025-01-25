import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from 'react-hot-toast';
// import { ThemeProvider } from './context/ThemeContext';
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="min-h-screen w-screen overflow-hidden">
        <ThemeProvider>
          <App className="dark:bg-gray-900 dark:text-white"/>
        </ThemeProvider>
        <Toaster position="top-center"/>
      </div>
    </Provider>
  </StrictMode>
);
