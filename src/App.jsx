import React from "react";
import "./App.css";
import { SidebarProvider } from "./context/SidebarContext";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </SidebarProvider>
  );
}

export default App;
