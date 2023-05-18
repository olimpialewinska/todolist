import { Container } from "./style";

interface TaskProps {
  id: string;
}

export function Task(props: TaskProps) {
  return (
    <Container>
      <div>
        <h1>Task</h1>
        <p>{props.id}</p>
      </div>
    </Container>
  );
}
