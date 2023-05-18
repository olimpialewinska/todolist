import { useParams } from "react-router-dom";
import { Task } from "../components/pages/Task";
export default function TaskPage() {
  const { id } = useParams();

  if (!id) {
    return <div>Invalid ID</div>;
  }

  return <Task id={id} />;
}
