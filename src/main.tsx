import React from "react";
import ReactDOM from "react-dom/client";
import 'virtual:uno.css'
import AppProvider from "~/context/app";
import Routers from "~/router";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider >
      <Routers />
    </AppProvider>
  </React.StrictMode>,
);
