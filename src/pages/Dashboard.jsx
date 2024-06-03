import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

import AnalisisComponent from "../components/AnalisisComponent";

import Sidebar from "../components/sidebar/Sidebar";
import Selects from "../components/puntuar/Selects";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("puntuar");
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="main-container">
        {activeComponent === "puntuar" && <Selects />}
        {activeComponent === "analisis" && <AnalisisComponent />}
      </div>
    </div>
  );
};

export default Dashboard;
