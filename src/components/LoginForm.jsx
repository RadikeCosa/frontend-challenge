import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importa useNavigate

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Inicializa navigate con useNavigate

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

      console.log("Respuesta del servidor:", response.data);
      // Redirigir al dashboard después de un inicio de sesión exitoso
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <legend>Ingresa a tu cuenta</legend>
        <input
          type="text"
          placeholder="usuario"
          value={user}
          onChange={({ target }) => setUser(target.value)}
        />
        <input
          type="password"
          placeholder="contraseña"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button type="submit">Acceder</button>
      </form>
      {error && <p>todos los campos son obligatorios</p>}
    </section>
  );
};

export default LoginForm;
