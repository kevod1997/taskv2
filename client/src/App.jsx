import "./App.css";
import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import { TaskContextProvider } from "./context/TaskProvider";


function App() {
  return (
    <div className="bg-zinc-900 h-screen">
     <NavBar />
     <div className="container mx-auto py-4 ">
     <TaskContextProvider>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TasksForm />} />
        <Route path="/edit/:id" element={<TasksForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </TaskContextProvider>
     </div>
    </div>
  );
}

export default App;
