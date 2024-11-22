import logo from "../assets/images/logo.png";
import Swal from "sweetalert2";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Seguro de salir?",
      text: "Estás a punto de cerrar sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate("/");
      }
    });
  };

  return (
    <header className="bg-cyan-500 p-6 text-white flex items-center">
      <img className="w-20 start-0" src={logo} alt="Logo" />
      <h1 className="text-3xl font-bold text-center m-auto text-black">
        Sistema de Administración
      </h1>
      <button
        className="inline-block bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleLogout}
      >
        Salir
      </button>
    </header>
  );
};

export default Header;
