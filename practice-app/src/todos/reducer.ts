import { v4 as uuidV4 } from 'uuid';

export type Actions =
  | { type: "ADD"; payload: string }
  | { type: "REMOVE"; payload: Pick<ToDo, 'id'> }
  | { type: "CHANGE_STATUS"; payload: Pick<ToDo, 'id' | 'status'> }
  | { type: "CHANGE_PRIORITY"; payload: Pick<ToDo, 'id' | 'priority'> }

export const todoReducer = (state: ToDo[], action: Actions): ToDo[] => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: uuidV4(),
          job: action.payload,
          status: "todo",
          priority: "low",
        },
      ];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload.id);
    case "CHANGE_STATUS":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
    case "CHANGE_PRIORITY":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, priority: action.payload.priority }
          : todo
      );
    default:
      return state;
  }
};
