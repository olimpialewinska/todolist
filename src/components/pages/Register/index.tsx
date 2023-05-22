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
  Message,
} from "./style";
import { useNavigate } from "react-router-dom";
import { url } from "../../../constants";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const [message, setMessage] = useState("Enter your registration details");

  const emailValidation = useCallback(() => {
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      setMessage("Invalid email");
      return false;
    }
    setMessage("Enter your registration details");
    return true;
  }, [email]);

  const passwordValidation = useCallback(() => {
    if (password.length < 5) {
      setMessage("Password must be at least 6 characters");
      return false;
    }
    setMessage("Enter your registration details");
    return true;
  }, [password]);

  const confirmPasswordValidation = useCallback(
    (confirmPassword: string) => {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        return false;
      }
      setMessage("Enter your registration details");
      return true;
    },
    [password]
  );

  const handleSubmit = useCallback(async () => {
    if (
      !emailValidation() ||
      !passwordValidation() ||
      !confirmPasswordValidation(confirmPassword)
    ) {
      return;
    }
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
      setMessage("Error occured! Try again later.");
      setConfirmPassword("");
      setPassword("");
      setEmail("");
      return;
    }
    navigate("/", { replace: true });
  }, [
    confirmPassword,
    confirmPasswordValidation,
    email,
    emailValidation,
    navigate,
    password,
    passwordValidation,
  ]);

  return (
    <Container>
      <Wrapper>
        <Header>Register</Header>
        <Message
          style={
            message === "Enter your registration details"
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
          onChange={(e) => {
            setPassword(e.target.value);
            passwordValidation();
          }}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            confirmPasswordValidation(e.target.value);
          }}
        />
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
