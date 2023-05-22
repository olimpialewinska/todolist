import { useCallback, useState } from "react";
import {
  Button,
  Container,
  Header,
  Input,
  Wrapper,
  Link,
  Footer,
  Text,
  Message,
} from "./style";

import { useNavigate } from "react-router-dom";
import { url } from "../../../constants";
import Cookies from "js-cookie";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("Enter your login details");

  const emailValidation = useCallback(() => {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setMessage("Invalid email");
      return false;
    }
    setMessage("Enter your registration details");
    return true;
  }, [email]);

  const handleSubmit = useCallback(async () => {
    if (!emailValidation()) {
      return;
    }
    const data = await fetch(`${url}api/Auth/login`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const json = await data.json();
    if (data.status !== 200) {
      alert(json);
      return;
    }
    const userData = {
      id: json.id,
      email: json.email,
    };
    Cookies.set("token", json.token, { expires: 7, path: "" });
    Cookies.set("id", JSON.stringify(userData), { expires: 7, path: "" });
    navigate("/home", { replace: true });
  }, [email, emailValidation, navigate, password]);

  return (
    <Container>
      <Wrapper>
        <Header>Login</Header>
        <Message
          style={
            message === "Enter your login details"
              ? { color: "#28d7fe" }
              : { color: "red" }
          }
        >
          {message}
        </Message>
        <Input
          type="text"
          placeholder="Email"
          style={{ marginTop: 40 }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            emailValidation();
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Login
        </Button>
      </Wrapper>
      <Footer>
        <Text>Don't have an account?</Text>
        <Link
          onClick={() => {
            navigate("/register", { replace: true });
          }}
        >
          Register
        </Link>
      </Footer>
    </Container>
  );
}
