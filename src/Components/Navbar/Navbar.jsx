import { Link } from "react-router-dom";
import "../../App.css"

export const Navbar = () => {
  return (
    <div className="navbar" id="divone">
      <Link className="navbarHome" to={"/"}>
        Home
      </Link>
      &emsp;
      <Link className="navbarLoginSignUp" to={"/loginsignup"}>
        Login/Sign Up
      </Link>
    </div>
  );
};
