function AddTaskModal({addTask,newTaskDate,setNewTaskText,newTaskText,setIsModalOpen,handleDateChange}) {
    return ( 
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add a New Task</h2>

            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Task description"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
            />

            <div className="relative mb-4">
              {/* Ícono de calendario junto al input de fecha */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              </div>

              {/* Input de fecha visible */}
              <input
                className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="date"
                value={newTaskDate}
                onChange={handleDateChange}
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={addTask}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
     );
}

export default AddTaskModal;