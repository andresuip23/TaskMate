import { TfiTrash } from "react-icons/tfi";

function TaskList({deleteTask,tasks}) {
    return (  
        <div className="max-w-md mx-auto ">
        {tasks.length > 0 ? (
          <ul className="space-y-4 ">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center p-4 bg-white rounded-md shadow-lg"
              >
                <div className="flex  flex-col">
                  <span className="font-medium">{task.text}</span>
                  <div className="flex">
                  <span className="text-gray-500 text-sm">
                    Due: {task.date}
                  </span>
                  <span className="pl-4 text-gray-500 text-sm">{task.tag}</span>
                  </div>
                </div>
                <TfiTrash
                  onClick={() => deleteTask(task.id)} // Llamar a deleteTask con el id de la tarea
                  className="text-pink-700 hover:text-pink-900 hover:text-lg transition-all cursor-pointer"
                />
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