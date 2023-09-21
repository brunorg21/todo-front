import { MagnifyingGlass } from "@phosphor-icons/react";
import * as S from "./style";
import { NewTaskModal } from "../NewTaskModal/NewTaskModal";
import { Dialog } from "@radix-ui/themes";
import { FormEvent, useState } from "react";
import { api } from "../../api/api";

interface SearchFormProps {
  setTasksFiltered: any;
}

export function SearchForm({ setTasksFiltered }: SearchFormProps) {
  const [value, setValue] = useState<string>("");
  async function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await api.get(`/tasks/?search=${value}`);
    setTasksFiltered(response.data);
  }

  return (
    <S.FormContainer onSubmit={handleSearch} action="">
      <input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Qual tarefa deseja pesquisar?"
        type="text"
      />

      <S.Button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </S.Button>
      <Dialog.Root>
        <Dialog.Trigger>
          <S.Button>Nova Tarefa</S.Button>
        </Dialog.Trigger>
        <NewTaskModal />
      </Dialog.Root>
    </S.FormContainer>
  );
}
