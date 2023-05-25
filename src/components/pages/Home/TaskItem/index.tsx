import { useCallback, useContext } from "react";
import { ITask, url } from "../../../../constants";
import { Button, Item, Name, Wrapper } from "./style";
import { userContext } from "..";
import { useNavigate } from "react-router-dom";
import { log } from "console";

interface TaskItemProps {
  task: ITask;
}

export function TaskItem(props: TaskItemProps) {
  const navigate = useNavigate();
  const { user, token, getTask } = useContext(userContext);
  const handleDelete = useCallback(async () => {
    if (!token || !token) {
      return;
    }
    const data = await fetch(`${url}api/Tasks/${user!.id}/${props.task.id}`, {
      method: "DELETE",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(data.status);

    if (data.status !== 204) {
      alert("Error");
      return;
    }

    getTask("completed");
    getTask("incomplete");
  }, [getTask, props.task.id, token, user]);

  const handleCompleted = useCallback(async () => {
    if (!token || !token) {
      return;
    }
    const data = await fetch(
      `${url}api/Tasks/${user!.id}/${props.task.id}/completed`,
      {
        method: "PUT",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(data.status);

    if (data.status !== 204) {
      alert("Error");
      return;
    }

    getTask("incomplete");
    getTask("completed");
  }, [getTask, props.task.id, token, user]);

  return (
    <Item>
      <Name
        onClick={() => {
          navigate(`/task/${props.task.id}`);
        }}
      >
        {props.task.description}
      </Name>
      {props.task.isCompleted ? (
        <Button
          onClick={() => handleDelete()}
          style={{
            backgroundImage: `url("/delete.png")`,
          }}
        />
      ) : (
        <Wrapper>
          <Button
            onClick={() => handleCompleted()}
            style={{
              backgroundImage: `url("/check.png")`,
              marginRight: 20,
            }}
          />
          <Button
            onClick={() => handleDelete()}
            style={{
              backgroundImage: `url("/delete.png")`,
            }}
          />
        </Wrapper>
      )}
    </Item>
  );
}
