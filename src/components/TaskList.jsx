function TaskList({deleteTask,tasks}) {
    return (  
        <div className="max-w-md mx-auto">
        {tasks.length > 0 ? (
          <ul className="space-y-4">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center p-4 bg-white rounded-md shadow"
              >
                <div>
                  <span className="font-medium">{task.text}</span>
                  <br />
                  <span className="text-gray-500 text-sm">
                    Due: {task.date}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)} // Llamar a deleteTask con el id de la tarea
                  className="text-red-500 hover:text-red-600 transition-all"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No tasks available.</p>
        )}
      </div>

    );
}

export default TaskList;