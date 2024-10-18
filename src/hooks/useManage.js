import { useState } from "react";

const useManage = () => {
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    tasks,
    newTaskText,
    newTaskDate,
    isModalOpen,
    setNewTaskText,
    setNewTaskDate,
    handleDateChange,
    addTask,
    deleteTask,
    openModal,
    closeModal,
  };
};

export default useManage;