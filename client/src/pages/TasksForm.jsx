import React from "react";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

function TasksForm() {
  const { createTask, getTask,updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  })
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task =await getTask(params.id);
        setTask({
            title: task.title,
            description: task.description
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if(params.id){
           await updateTask(params.id, values)
           navigate('/') 
          }else{
            await createTask(values);
            navigate('/') 
          }
          setTask({
            title:"",
            description:""
          })
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'>
            <h1 className="text-xl font-bold uppercase text-center">{params.id ? "Edit task" : "New Task"}</h1>
            <label className="block">Title</label>
            <input
            className="px-2 py-1 rounded-sm w-full"
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />

            <label className="block">Description</label>
            <textarea
            className="px-2 py-1 rounded-sm w-full"
              name="description"
              placeholder="Write a description "
              rows="3"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TasksForm;
