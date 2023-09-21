import { useContext, useState } from "react";
import * as S from "./style";
import { UserContext } from "../../context/UserContext";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useContext(UserContext);

  return (
    <S.LoginContainer>
      <S.Main>
        <header>
          <h2>Login</h2>
        </header>
        <form onSubmit={(e) => login({ email, password }, e)} action="">
          <input
            value={email}
            type="email"
            placeholder="E-mail:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="Senha:"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </S.Main>
    </S.LoginContainer>
  );
}
