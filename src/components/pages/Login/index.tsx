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
} from "./style";

import { useNavigate } from "react-router-dom";
import { url } from "../../../constants";
import Cookies from "js-cookie";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(async () => {
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
    Cookies.set("token", json.token, { expires: 7, path: "" });
    navigate("/home", { replace: true });

    console.log(json.token);
  }, [email, navigate, password]);

  return (
    <Container>
      <Wrapper>
        <Header>Login</Header>
        <Input
          type="text"
          placeholder="Email"
          style={{ marginTop: 40 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
