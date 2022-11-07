import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
    const {tasks, loadTask} = useTasks()
  useEffect(() => {
    loadTask();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return ;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      {tasks.length >= 1 ? <h1 className="text-5xl text-white font-bold text-center tasks uppercase mt-5 mb-5 p-3">Tasks</h1> : <h1 className="text-5xl text-white font-bold text-center tasks uppercase mt-5 mb-5 p-3">No tasks yet</h1>}
     <div className="grid grid-cols-3 gap-3">
     {renderMain()}
     </div>
    </div>
  );
}

export default TasksPage;
