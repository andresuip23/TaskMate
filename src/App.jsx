import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Asegúrate de tener react-icons instalado
import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "test 2", date: "2024-10-20" },
    { id: 2, text: "test1", date: "2024-10-22" },
  ]);

  const [newTaskText, setNewTaskText] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateChange = (e) => {
    setNewTaskDate(e.target.value);
  };

  const addTask = () => {
    if (newTaskText.trim() && newTaskDate) {
      const newTask = {
        id: tasks.length + 1,
        text: newTaskText,
        date: newTaskDate,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText("");
      setNewTaskDate("");
      setIsModalOpen(false); // Cerrar el modal después de agregar la tarea
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          My To-Do App
        </h1>
      </header>

      {/* Botón para abrir el modal */}
      <div className="text-center mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
        >
          Add New Task
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <AddTaskModal newTaskDate={newTaskDate} addTask={addTask} newTaskText={newTaskText} setNewTaskText={setNewTaskText} setIsModalOpen={setIsModalOpen} handleDateChange={handleDateChange}/>}

      {/* Lista de tareas */}
      <TaskList deleteTask={deleteTask} tasks={tasks} />
    </div>
  );
}

export default App;
