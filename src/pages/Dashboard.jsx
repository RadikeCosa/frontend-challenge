import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import AnalisisComponent from "../components/analisis/AnalisisComponent";
import Sidebar from "../components/sidebar/Sidebar";
import Selects from "../components/puntuar/Selects";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("puntuar");
  const { user } = useAuth();
  console.log(user.id);

  return (
    <div className="dashboard-container">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="main-container">
        <p>Bienvenido {user["Full Name"]}</p>
        {activeComponent === "puntuar" && <Selects />}
        {activeComponent === "analisis" && <AnalisisComponent />}
      </div>
    </div>
  );
};

export default Dashboard;
