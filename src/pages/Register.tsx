import { useNavigate } from "react-router-dom";
import { Register } from "../components/pages/Register";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      navigate("/home", { replace: true });
    }
  }, [navigate, token]);

  return <Register />;
}
