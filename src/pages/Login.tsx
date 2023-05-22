import { useNavigate } from "react-router-dom";
import { Login } from "../components/pages/Login";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate, token]);

  return <Login />;
}
