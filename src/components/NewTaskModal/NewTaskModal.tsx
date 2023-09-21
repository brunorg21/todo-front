import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay, Title } from "./style";

import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api/api";
import { ITask } from "../../models/tasks";

interface NewTaskModalProps {
  id?: string;
  isEditing?: boolean;
  setIsEditing?: any;
}

export function NewTaskModal({ id, isEditing }: NewTaskModalProps) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const queryClient = useQueryClient();

  const data: any = queryClient.getQueriesData(["tasks"]);

  const entityToUpdate: ITask = data[0][1]?.find(
    (task: ITask) => task.id === id
  );

  const mutation = useMutation<ITask>({
    mutationFn: async (newTodo) => {
      return await api.post("/tasks", newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
    onError: () => {
      console.error("Erro!");
    },
  });

  const editMutation = useMutation<ITask>({
    mutationFn: async (values): Promise<ITask> => {
      return await api.put(`tasks/${id}`, values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
    onError: () => {
      console.error("Erro!");
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (isEditing) {
      editMutation.mutate({
        title,
        description,
      } as any);
    } else {
      mutation.mutate({
        id: 0,
        title,
        description,
      } as any);
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        {isEditing ? <Title>Editar Tarefa</Title> : <Title>Nova Tarefa</Title>}
        <form onSubmit={handleSubmit} action="">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Título"
            defaultValue={isEditing ? entityToUpdate?.title : ""}
          />

          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Descrição"
            defaultValue={isEditing ? entityToUpdate?.description : ""}
          />

          <button type="submit">{isEditing ? "Editar" : "Cadastrar"}</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
