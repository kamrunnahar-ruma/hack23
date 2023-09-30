import { useReducer, useState } from "react";

import { todoReducer } from "@/todos/reducer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TodoItem from "./ToDoItem";
import Metrics from "./Metrics";

export default function Todos() {
  const [todo, setToDo] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <>
      <Metrics todos={todos} />

      <div className="flex gap-3 min-w-[40vw]">
        <Input
          maxLength={40}
          value={todo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <Button
          onClick={() => {
            dispatch({ type: "ADD", payload: todo });
            setToDo("");
          }}
        >
          Add
        </Button>
      </div>

      {todos.length === 0 && <p>No todos yet</p>}

      <ul className="lg:w-[40rem] sm:w-full flex flex-col gap-1">
        {todos
          .filter((todo) => todo.status !== "complete")
          .map((todo) => (
            <TodoItem key={todo.id} {...todo} dispatch={dispatch} />
          ))}

        {todos
          .filter((todo) => todo.status === "complete")
          .map((todo) => (
            <TodoItem key={todo.id} {...todo} dispatch={dispatch} />
          ))}
      </ul>
    </>
  );
}
