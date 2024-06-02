import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import AnalisisComponent from "../components/AnalisisComponent";
import PuntuarComponent from "../components/PuntuarComponent";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("puntuar");
  const { user } = useAuth();
  console.log(user.user);
  const userId = user.user.id;
  const userName = user.user["Full Name"];

  return (
    <>
      <div>
        {user ? (
          <p>estas logueado como {userName}</p>
        ) : (
          <p>no estas logueado</p>
        )}
      </div>
      <Sidebar setActiveComponent={setActiveComponent} />
      {activeComponent === "puntuar" && <PuntuarComponent />}
      {activeComponent === "analisis" && <AnalisisComponent />}
    </>
  );
};

export default Dashboard;
