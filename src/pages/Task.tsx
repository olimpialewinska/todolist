import { useNavigate, useParams } from "react-router-dom";
import { Task } from "../components/pages/Task";
import Cookies from "js-cookie";
import { useEffect } from "react";
export default function TaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const userId = Cookies.get("id");

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  const userid = JSON.parse(userId!).id;
  const email = JSON.parse(userId!).email;

  const user = { userid, email };

  useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, [navigate, token]);

  if (!id) {
    return <div>Invalid ID</div>;
  }

  return <Task id={id} user={user} token={token} />;
}
