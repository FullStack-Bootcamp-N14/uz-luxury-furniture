import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./assets/css/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
      </Router>
    </QueryClientProvider>
  </Provider>
);
