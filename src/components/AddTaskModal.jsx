function AddTaskModal({addTask,newTaskDate,setNewTaskText,newTaskText,handleDateChange,closeModal}) {
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
              {/* Input de fecha*/}
              <input
                className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-semiheavy"
                type="date"
                value={newTaskDate}
                onChange={handleDateChange}
              />
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-pink-medium text-pink-900 rounded-md hover:bg-pink-900 hover:text-pink-light transition-all"
              >
                Cancel
              </button>
              <button
                onClick={addTask}
                className="px-4 py-2 bg-pink-900 text-pink-light rounded-md hover:bg-pink-medium hover:text-pink-900 transition-all"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
     );
}

export default AddTaskModal;