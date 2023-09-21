import * as S from "./style";
import { Dialog } from "@radix-ui/themes";
import { NewTaskModal } from "../NewTaskModal/NewTaskModal";
import { PencilLine, Trash } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../api/api";
import { queryClient } from "../../api/queryClient";
import { useState } from "react";

interface TaskOptionsProps {
  id: string;
}

export function TaskOptions({ id }: TaskOptionsProps) {
  const [isEditing, setIsEditing] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: async () => {
      return await api.delete(`/tasks/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  function handleDeleteTask() {
    deleteMutation.mutate();
  }

  return (
    <>
      <S.OptionsButton
        onClick={handleDeleteTask}
        title="Deletar"
        name="Deletar"
      >
        <Trash size={25} name="Deletar" />
      </S.OptionsButton>
      <Dialog.Root>
        <Dialog.Trigger>
          <S.OptionsButton onClick={() => setIsEditing(true)} title="Editar">
            <PencilLine size={25} style={{ marginLeft: "15px" }} />
          </S.OptionsButton>
        </Dialog.Trigger>

        <NewTaskModal isEditing id={id} setIsEditing={setIsEditing} />
      </Dialog.Root>
    </>
  );
}
