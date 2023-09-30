/* eslint-disable no-unused-vars */
import { HttpStatusCode } from "axios";

export { };

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  type ToDo = {
    id: string;
    job: string;
    status: 'complete' | 'todo' | 'in-progress';
    priority: 'high' | 'mid' | 'low';
  };
}
