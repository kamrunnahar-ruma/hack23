import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Dispatch } from "react";
import { Actions } from "./reducer";

export function PrioritySelector(
  props: Pick<ToDo, "priority" | "id"> & { dispatch: Dispatch<Actions> }
) {
  return (
    <Select
      onValueChange={(value: ToDo["priority"]) => {
        // TODO: update the priority of the todo item
      }}
      defaultValue={props.priority}
    >
      <SelectTrigger className="w-[12ch]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="low">Low</SelectItem>
        <SelectItem value="mid">Medium</SelectItem>
        <SelectItem value="high">High</SelectItem>
      </SelectContent>
    </Select>
  );
}
