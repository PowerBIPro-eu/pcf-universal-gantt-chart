// Assuming 'Task' is defined in a module named 'some-module'
import "gantt-task-react"; // Replace 'some-module' with the actual module name

declare module "gantt-task-react" {
  interface Task {
    errorFlag?: Number;
    statusOption?: Number;
  }
}