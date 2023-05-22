import { useCallback, useEffect, useState } from "react";
import { Button, Container, Description, Input, Row, Wrapper } from "./style";
import { ITask, url } from "../../../constants";
import { useNavigate } from "react-router-dom";

interface TaskProps {
  id: string;
  user: {
    userid: string;
    email: string;
  };
  token: string | undefined;
}

export function Task(props: TaskProps) {
  const [task, setTask] = useState<ITask>();
  const [description, setDescription] = useState(task?.description);
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  const getTask = useCallback(async () => {
    const data = await fetch(
      `${url}api/Tasks/${props.user.userid}/${props.id}`,
      {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      }
    );
    const json = await data.json();
    if (data.status !== 200) {
      return;
    }

    setTask(json);
    setDescription(json.description);
  }, [props.id, props.token, props.user.userid]);

  const updateTask = useCallback(() => {
    if (
      description === undefined ||
      description === null ||
      description === ""
    ) {
      return;
    }
    fetch(`${url}api/Tasks/${props.user.userid}/${props.id}/description`, {
      method: "PUT",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
      body: JSON.stringify({
        description,
      }),
    });

    setIsEditing(false);
  }, [description, props.id, props.token, props.user.userid]);

  const onInputKeyUp = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        updateTask();
      }
    },
    [updateTask]
  );

  useEffect(() => {
    getTask();
  }, [getTask, props.token]);

  return (
    <Container>
      <Button
        style={{
          backgroundImage: `url("/close.svg")`,
          position: "absolute",
          top: 20,
          right: 20,
        }}
        onClick={() => {
          navigate(-1);
        }}
      />
      <Wrapper>
        <h1>Task</h1>
        {isEditing ? (
          <Row>
            <Input
              type="text"
              value={description}
              placeholder="Description"
              onKeyUp={onInputKeyUp}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Button
              style={{
                backgroundImage: `url("/check.png")`,
              }}
              onClick={() => {
                setIsEditing(false);
                updateTask();
              }}
            />
          </Row>
        ) : (
          <Row>
            <Description>{description}</Description>
            <Button
              style={{
                backgroundImage: `url("/edit.png")`,
              }}
              onClick={() => {
                setIsEditing(true);
              }}
            />
          </Row>
        )}
      </Wrapper>
    </Container>
  );
}
