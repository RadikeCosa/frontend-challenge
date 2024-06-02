import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "../styles/loginForm.css";
import moviesLogin from "../assets/moviesLogin.svg";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Inicializa navigate con useNavigate
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user === "" || password === "") {
      setError(true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        user: user,
        password: password,
      });
      const userData = response.data;
      console.log(response.data.user);
      login(userData.user); // Almacena los datos del usuario en el contexto
      // Redirigir al dashboard después de un inicio de sesión exitoso
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="title-content">
          <img src={moviesLogin}></img>
          <h1 className="form-title">Movie Page</h1>
        </div>
        <div className="subtitle-content">
          <p>Ingresa a tu cuenta</p>
        </div>
        <input
          className="form-input user"
          type="text"
          placeholder="usuario"
          value={user}
          onChange={({ target }) => setUser(target.value)}
        />
        <input
          className="form-input password"
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button className="form-button" type="submit">
          Acceder
        </button>
      </form>
      {error && <p>todos los campos son obligatorios</p>}
    </div>
  );
};

export default LoginForm;
