import { Power } from "lucide-react";
import { api } from "../../api/api";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { TaskOptions } from "../../components/TaskOptions/TaskOptions";
import { ITask } from "../../models/tasks";
import * as S from "./style";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

export function Tasks() {
  const [filteredTask, setFilteredTask] = useState<ITask[]>([]);
  const { logOut } = useContext(UserContext);

  const { data, isLoading } = useQuery<ITask[]>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await api.get("/tasks");
      return response.data;
    },
  });

  return (
    <>
      <S.LogoutButtonContainer>
        <button title="Sair" onClick={logOut}>
          <Power />
        </button>
      </S.LogoutButtonContainer>
      <S.TaskContainer>
        <SearchForm setTasksFiltered={setFilteredTask} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1120px",
            margin: "0 auto",
          }}
        >
          <S.TableContainer>
            {isLoading ? (
              <p>Carregando...</p>
            ) : (
              <tbody>
                <tr>
                  <th>Tarefa</th>
                  <th>Descrição</th>
                  <th>Criado em</th>
                  <th></th>
                </tr>
                {filteredTask.length !== 0
                  ? filteredTask?.map((task) => {
                      return (
                        <>
                          <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                              {new Intl.DateTimeFormat("pt-BR").format(
                                new Date(task.createdAt)
                              )}
                            </td>
                            <td>
                              <TaskOptions id={task.id} />
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : data?.map((task) => {
                      return (
                        <>
                          <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>
                              {new Intl.DateTimeFormat("pt-BR").format(
                                new Date(task.createdAt)
                              )}
                            </td>
                            <td>
                              <TaskOptions id={task.id} />
                            </td>
                          </tr>
                        </>
                      );
                    })}
              </tbody>
            )}
          </S.TableContainer>
        </div>
      </S.TaskContainer>
    </>
  );
}

{
}
