import { useCallback, useState } from "react";
import {
  Button,
  Container,
  Footer,
  Header,
  Input,
  Wrapper,
  Text,
  Link,
} from "./style";
import { useNavigate } from "react-router-dom";
import { url } from "../../../constants";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = useCallback(async () => {
    const data = await fetch(`${url}api/Auth/register`, {
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

    if (data.status !== 200) {
      const json = await data.text();
      alert(json);
      return;
    }
    navigate("/", { replace: true });
  }, [email, navigate, password]);
  return (
    <Container>
      <Wrapper>
        <Header>Register</Header>
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
        <Input type="password" placeholder="Confirm Password" />
        <Button
          onClick={() => {
            handleSubmit();
          }}
        >
          Register
        </Button>
      </Wrapper>
      <Footer>
        <Text>You already have an account?</Text>

        <Link
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Login
        </Link>
      </Footer>
    </Container>
  );
}
