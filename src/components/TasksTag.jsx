import { FaBriefcase, FaUser, FaGraduationCap, FaTag } from 'react-icons/fa';

function TasksTag() {
    const tags = [
        { id: 1, label: 'Work', icon: <FaBriefcase /> },
        { id: 2, label: 'Personal', icon: <FaUser /> },
        { id: 3, label: 'School', icon: <FaGraduationCap /> },
        { id: 4, label: 'Other', icon: <FaTag /> },
      ];

  return (
  <>
    <div className="min-h-screen w-1/5 bg-pink-900">
        <div className="pt-4 text-pink-light text-xl font-bold text-center">Collections</div>
        <div className="pt-6 flex flex-col gap-2 pr-2 pl-2">
      {tags.map((tag) => (
        <button
          key={tag.id}
          className="flex items-center px-3 py-1 bg-pink-light text-pink-900 rounded-lg hover:bg-pink-900 hover:text-pink-light transition"
        >
          {tag.icon}
          <span className="ml-2">{tag.label}</span>
        </button>
      ))}
    </div>
    </div>
    
  </>
  );
}

export default TasksTag;
