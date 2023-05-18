import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

export function NoPage() {
  const [counter, setCounter] = useState(5);
  const intervalRef = useRef<any>();
  const navigate = useNavigate();

  const countdown = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () => setCounter((prevCounter) => prevCounter - 1),
      1000
    );
  }, []);

  useEffect(() => {
    countdown();
    const timeout = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);
    return () => clearTimeout(timeout);
  }, [countdown, navigate]);

  return (
    <Container>
      <h1>404 - Page not found.</h1>
      <p>Redirecting to home in {counter} seconds.</p>
    </Container>
  );
}
