import { useNavigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const userId = Cookies.get("id");

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  const id = JSON.parse(userId!).id;
  const email = JSON.parse(userId!).email;

  const user = { id, email };

  return <Home user={user} token={token} />;
}
