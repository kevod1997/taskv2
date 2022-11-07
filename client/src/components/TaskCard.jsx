import { useTasks } from "../context/TaskProvider";
import {  useNavigate } from "react-router-dom";
function TaskCard({ task }) {

    const {deleteTask,toggleTaskDone}= useTasks()
    const navigate= useNavigate()

    const handleDone = async()=>{
       await toggleTaskDone(task.id)
    }

  return (
    <div className="bg-zinc-600 text-white rounder-md p-4 mt-4 rounded-xl">
     <header className="flex justify-between">
     <h2 className="text-lg font-bold">{task.title}</h2>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
     </header>
      <p className="">{task.description}</p>
      <span className="text-xs">{task.createAt}</span>
      <div className="flex justify-start gap-x-2 mt-2">
      <button className="bg-red-600 px-2 py-1 text-white rounded-md" onClick={() => deleteTask(task.id)}>Delete</button>
      <button className="bg-slate-800 px-2 py-1 text-white rounded-md" onClick={()=> navigate(`/edit/${task.id}`)}>Edit</button>
      <button className="px-2 py-1 text-white rounded-md" style={task.done == 1?{backgroundColor: 'red'}: {backgroundColor:'green'}} onClick={()=>{
        handleDone(task.done)
      }}>
        Toggle Task
      </button>
      </div>
    </div>
  );
}

export default TaskCard;
