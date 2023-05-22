import { createContext, useCallback, useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Content,
  Column,
  Wrapper,
  Header,
  Input,
  LogOutBtn,
  Email,
} from "./style";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ITask, LogOut, url } from "../../../constants";
import { TaskItem } from "./TaskItem";

interface Icontext {
  user: {
    id: string;
    email: string;
  };
  token: string | undefined;
  getTask: (type: string) => Promise<void>;
}

interface HomeProps {
  user: {
    id: string;
    email: string;
  };
  token: string | undefined;
}
export const userContext = createContext({} as Icontext);

export function Home(props: HomeProps) {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [completed, setCompleted] = useState<ITask[]>([]);
  const [task, setTask] = useState("");

  const navigate = useNavigate();
  const logOut = useCallback(() => {
    LogOut();
    navigate("/", { replace: true });
  }, [navigate]);

  const getTask = useCallback(
    async (type: string) => {
      if (!props.token) {
        navigate("/", { replace: true });
        return;
      }
      const data = await fetch(`${url}api/Tasks/${props.user.id}/${type}`, {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      });

      const json = await data.json();
      if (data.status !== 200) {
        LogOut();
        navigate("/", { replace: true });
        return;
      }

      if (type === "completed") {
        setCompleted(json);
        return;
      }
      setTasks(json);
    },
    [navigate, props.token, props.user.id]
  );

  const handleCreate = useCallback(async () => {
    if (!props.token) {
      navigate("/", { replace: true });
      return;
    }
    const data = await fetch(`${url}api/Tasks/${props.user.id}`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify({
        description: task,
      }),
    });

    if (data.status !== 201) {
      setTask("");
      return;
    }
    setTask("");
    getTask("incomplete");
  }, [getTask, navigate, props.token, props.user.id, task]);

  const onInputKeyUp = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleCreate();
      }
    },
    [handleCreate]
  );

  useEffect(() => {
    getTask("completed");
    getTask("incomplete");
  }, [getTask]);
  return (
    <userContext.Provider
      value={{ user: props.user, token: props.token, getTask: getTask }}
    >
      <Container>
        <Navbar>
          <Email>{props.user.email}</Email>
          <LogOutBtn
            onClick={() => {
              logOut();
            }}
          >
            Log out
          </LogOutBtn>
        </Navbar>
        <Input
          placeholder="Add new task"
          onKeyUp={onInputKeyUp}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Content>
          <Column>
            <Header>to complete</Header>
            <Wrapper>
              {tasks.map((task: ITask) => {
                return <TaskItem key={task.id} task={task} />;
              })}
            </Wrapper>
          </Column>
          <Column>
            <Header>completed</Header>
            <Wrapper>
              {completed.map((task: ITask) => {
                return <TaskItem key={task.id} task={task} />;
              })}
            </Wrapper>
          </Column>
        </Content>
      </Container>
    </userContext.Provider>
  );
}
