import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import DepositPage from "./pages/DepositPage";
import DatasetsPage from "./pages/DatasetsPage";
import ApplyPage from "./pages/ApplyPage";
import GovernancePage from "./pages/GovernancePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import CuratorPage from "./pages/CuratorPage";
import useStore from "./store/useStore";
import "./App.css";

function App() {
  const { currentPage } = useStore();

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "deposit":
        return <DepositPage />;
      case "datasets":
        return <DatasetsPage />;
      case "apply":
        return <ApplyPage />;
      case "governance":
        return <GovernancePage />;
      case "analytics":
        return <AnalyticsPage />;
      case "curator":
        return <CuratorPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container-full">
      <Navbar />

      <main className="app-main-content">{renderPage()}</main>

      <Footer />
    </div>
  );
}

export default App;
