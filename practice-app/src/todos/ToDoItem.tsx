import type { Dispatch } from "react";
import { CheckCircle, Clock3, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Actions } from "./reducer";
import { PrioritySelector } from "./Priority";

export default function TodoItem(todo: ToDo & { dispatch: Dispatch<Actions> }) {
  return (
    <li
      className={cn(
        "flex min-h-[4rem] gap-2 group items-center hover:bg-slate-800 py-2 px-3 rounded-lg border border-solid",
        "border-slate-100"
        // TODO: update this to use the proper border color for priority
        // i.e.: emerald-400 for complete and amber-400 for in-progress
      )}
    >
      <div
        className={cn(
          "p-2 rounded-full",
          // TODO: update this to use the correct color
          "bg-green-800"
        )}
      />
      <p
        className={cn(
          "flex-1 text-lg",
          todo.status === "todo" && "text-slate-100",
          todo.status === "complete" && "text-emerald-400",
          todo.status === "in-progress" && "text-amber-400"
        )}
      >
        {todo.job}
      </p>

      <Button
        size="icon"
        className="hidden group-hover:flex"
        aria-label="Mark as work in progress"
        onClick={() => {
          // TODO: dispatch CHANGE_STATUS action, set to 'in-progress'
        }}
      >
        <Clock3 />
      </Button>

      <Button
        size="icon"
        className="hidden group-hover:flex"
        aria-label="Mark as complete"
        onClick={() => {
          todo.dispatch({
            type: "CHANGE_STATUS",
            payload: { id: todo.id, status: "complete" },
          });
        }}
      >
        <CheckCircle />
      </Button>
      <Button
        size="icon"
        className="hidden group-hover:flex"
        aria-label="Delete"
        onClick={() => {
          // TODO: dispatch REMOVE action
        }}
      >
        <Trash2 />
      </Button>

      <PrioritySelector
        id={todo.id}
        priority={todo.priority}
        dispatch={todo.dispatch}
      />
    </li>
  );
}
