import TaskList from "./components/TaskList";
import AddTaskModal from "./components/AddTaskModal";
import useManage from "./hooks/useManage";
import TasksTag from "./components/TasksTag";

function App() {
  const {
    tasks,
    newTaskText,
    newTaskDate,
    isModalOpen,
    setNewTaskText,
    handleDateChange,
    addTask,
    deleteTask,
    openModal,
    closeModal,
  } = useManage();

  return (
    <div className="flex">
      <TasksTag/>
    <div className="min-h-screen w-screen bg-pink-light p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-pink-900">
          FocusHub
        </h1>
      </header>

      {/* Botón para abrir el modal */}
      <div className="text-center mb-6">
        <button
          onClick={openModal}
          className="px-4 py-2 bg-pink-900 text-pink-light rounded-md hover:bg-pink-heavy hover:text-pink-900 transition-all"
        >
          Add New Task
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <AddTaskModal
          newTaskDate={newTaskDate}
          addTask={addTask}
          newTaskText={newTaskText}
          setNewTaskText={setNewTaskText}
          closeModal={closeModal}
          handleDateChange={handleDateChange}
        />
      )}

      {/* Lista de tareas */}
      <TaskList deleteTask={deleteTask} tasks={tasks} />
    </div>
    </div>
  );
}

export default App;
