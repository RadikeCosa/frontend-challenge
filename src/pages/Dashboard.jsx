import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

import AnalisisComponent from "../components/AnalisisComponent";
import PuntuarComponent from "../components/puntuar/PuntuarComponent";
import Sidebar from "../components/sidebar/Sidebar";
import Selects from "../components/puntuar/Selects";
import "../styles/dashboard.css";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("puntuar");
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [genero, setGenero] = useState("");
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const { data: genresData } = await axios.get(
          "http://localhost:3000/api/getgenres"
        );
        setGenres(genresData);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleGeneroChange = (event) => setGenero(event.target.value);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const { data: fetchedData } = await axios.get(url);
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const url = `http://localhost:3000/api/peliculas/genre/${genero}`;
    fetchData(url);
  };
  return (
    <div className="dashboard-container">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="main-container">
        {activeComponent === "puntuar" && <PuntuarComponent />}
        {activeComponent === "analisis" && <AnalisisComponent />}
        <Selects
          data={data}
          genero={genero}
          genres={genres}
          loading={loading}
          handleGeneroChange={handleGeneroChange}
          handleSearch={handleSearch}
        />
      </div>
    </div>
  );
};

export default Dashboard;
