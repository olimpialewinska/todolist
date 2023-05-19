import { useNavigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  console.log(token);

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  return <Home />;
}
