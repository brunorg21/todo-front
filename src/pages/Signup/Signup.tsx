import { useContext, useState } from "react";
import * as S from "./style";
import { UserContext } from "../../context/UserContext";

export function Signup() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleCreateNewUser } = useContext(UserContext);

  return (
    <S.LoginContainer>
      <S.Main>
        <header>
          <h2>Cadastrar-se</h2>
        </header>
        <form
          onSubmit={(e) => handleCreateNewUser({ email, name, password }, e)}
          action=""
        >
          <input
            value={name}
            type="text"
            placeholder="Nome:"
            onChange={(e) => setName(e.target.value)}
          />
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

          <S.CreateAccountMessage>
            Já tem uma conta? <a href="/login">Entre agora</a>
          </S.CreateAccountMessage>

          <button type="submit">Cadastrar</button>
        </form>
      </S.Main>
    </S.LoginContainer>
  );
}
